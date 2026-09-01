(function (window, document) {
  "use strict";

  var manifestUrl = "assets/projects/projects.json";
  var projectCache = null;
  var heroTimer = null;

  function slugify(value) {
    return String(value || "project")
      .toLowerCase()
      .replace(/&/g, " and ")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "project";
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function encodePathSegment(value) {
    return encodeURIComponent(String(value || ""));
  }

  function getProjectImagePath(project, fileName) {
    return "assets/projects/" + encodePathSegment(project.folder) + "/" + encodePathSegment(fileName);
  }

  function cleanSummary(value) {
    var summary = String(value || "").trim();

    if (/^Project images are loaded from the folder named .+\.$/i.test(summary)) {
      return "";
    }

    return summary;
  }

  function getImageNumber(image, fallbackNumber) {
    var source = "";
    var match = null;

    if (typeof image === "string") {
      source = image;
    } else if (image && typeof image === "object") {
      if (image.number) {
        return Number(image.number);
      }

      source = image.file || image.src || "";
    }

    match = String(source).match(/(?:^|\/)(\d+)\s*\.(jpe?g|png|webp|avif)$/i);
    return match ? Number(match[1]) : fallbackNumber;
  }

  function normalizeImage(image, project, index) {
    var imageNumber = getImageNumber(image, index + 1);
    var src = "";
    var caption = project.title + (imageNumber === 1 ? " cover image" : " image " + imageNumber);

    if (typeof image === "string") {
      src = image.indexOf("/") >= 0 ? image : getProjectImagePath(project, image);
    } else if (image && typeof image === "object") {
      src = image.src || (image.file ? getProjectImagePath(project, image.file) : "");
      caption = image.caption || caption;
    }

    return {
      src: src || getProjectImagePath(project, imageNumber + ".jpg"),
      caption: caption,
      number: imageNumber,
      role: imageNumber === 1 ? "cover" : "gallery"
    };
  }

  function normalizeProject(rawProject, index) {
    var folder = rawProject.folder || rawProject.title || ("Project " + (index + 1));
    var title = rawProject.title || folder;
    var key = rawProject.key || slugify(folder);
    var category = rawProject.category || (rawProject.meta && rawProject.meta[0]) || "Project";
    var location = rawProject.location || (rawProject.meta && rawProject.meta[1]) || "";
    var meta = rawProject.meta || [category, location || "Location", "Architecture"];
    var project = {
      key: key,
      folder: folder,
      title: title,
      category: category,
      location: location,
      meta: meta,
      summary: cleanSummary(rawProject.summary),
      scope: rawProject.scope || [category, "Architecture", "Interior Design", "Drawing Development"],
      info: rawProject.info || {
        Project: title,
        Sector: category,
        Location: location || "To be updated",
        Services: "Architecture, interiors and drawings"
      },
      featuredHome: rawProject.featuredHome !== false,
      order: rawProject.order == null ? index : rawProject.order
    };

    project.images = (rawProject.images && rawProject.images.length ? rawProject.images : [])
      .map(function (image, imageIndex) {
        return normalizeImage(image, project, imageIndex);
      })
      .sort(function (a, b) {
        return a.number - b.number;
      });

    return project;
  }

  function normalizeManifest(data) {
    var rawProjects = data && Array.isArray(data.projects) ? data.projects : [];
    return rawProjects.map(normalizeProject);
  }

  function getProjects() {
    if (projectCache) {
      return projectCache;
    }

    projectCache = fetch(manifestUrl, { cache: "no-cache" })
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Project manifest not found");
        }
        return response.json();
      })
      .then(function (data) {
        return normalizeManifest(data);
      })
      .then(function (projects) {
        return projects.length ? projects : [];
      })
      .catch(function () {
        return [];
      });

    return projectCache;
  }

  function getCover(project) {
    return project.images && project.images[0] ? project.images[0] : normalizeImage("1.jpg", project, 0);
  }

  function renderProjectList(projects) {
    var list = document.querySelector("[data-project-list]");
    if (!list || !projects.length) {
      return;
    }

    list.className = "project-editorial-list";
    list.innerHTML = projects.map(function (project, index) {
      var cover = getCover(project);
      var detailImage = project.images && project.images[1] ? project.images[1] : cover;
      var location = project.info && project.info.Location && project.info.Location !== "To be updated"
        ? project.info.Location
        : (project.meta && project.meta[1]) || project.category;
      return [
        "<article class=\"project-editorial-item\">",
        "  <div class=\"project-editorial-copy\">",
        "    <span class=\"project-editorial-index\">/" + String(index + 1).padStart(2, "0") + "/</span>",
        "    <h2><a href=\"project-details.html?project=" + escapeHtml(project.key) + "\">" + escapeHtml(project.title) + "</a></h2>",
        "    <ul class=\"project-editorial-meta\">",
        "      <li>" + escapeHtml(project.category) + "</li>",
        "      <li>" + escapeHtml(location) + "</li>",
        "    </ul>",
        "    <a class=\"project-editorial-button\" href=\"project-details.html?project=" + escapeHtml(project.key) + "\">View Project <span aria-hidden=\"true\">&#x2197;</span></a>",
        "  </div>",
        "  <div class=\"project-editorial-visual\">",
        "    <img class=\"project-editorial-main-image\" src=\"" + escapeHtml(cover.src) + "\" alt=\"" + escapeHtml(project.title) + " project exterior\">",
        "    <div class=\"project-editorial-support\">",
        "      <img src=\"" + escapeHtml(detailImage.src) + "\" alt=\"" + escapeHtml(project.title) + " supporting view\">",
        "      <span>" + String(index + 1).padStart(2, "0") + " / Selected work</span>",
        "    </div>",
        "  </div>",
        "</article>"
      ].join("");
    }).join("");
  }

  function renderHomeProjects(projects) {
    var list = document.querySelector("[data-home-project-list]");
    if (!list || !projects.length) {
      return;
    }

    var homeProjects = projects.filter(function (project) {
      return project.featuredHome !== false;
    }).slice(0, 4);

    if (!homeProjects.length) {
      homeProjects = projects.slice(0, 4);
    }

    list.innerHTML = homeProjects.map(function (project, index) {
      var cover = getCover(project);
      var itemClass = index === homeProjects.length - 1 ? "project-box-items-2 bb-top bb-bottom style-3" : "project-box-items-2 bb-top style-3";
      var summary = cleanSummary(project.summary);
      var summaryMarkup = summary ? "          <p>" + escapeHtml(summary) + "</p>" : "";
      var contentClass = summary ? "content" : "content is-summary-empty";
      return [
        "<div class=\"" + itemClass + "\">",
        "  <div class=\"row g-4 justify-content-between\">",
        "    <div class=\"col-xl-5\">",
        "      <div class=\"content-box\">",
        "        <div class=\"title-box\">",
        "          <p>/" + String(index + 1).padStart(2, "0") + "/</p>",
        "          <div class=\"title\">",
        "            <h3><a href=\"project-details.html?project=" + escapeHtml(project.key) + "\">" + escapeHtml(project.title) + "</a></h3>",
        "            <span>" + escapeHtml(project.location || project.category) + "</span>",
        "          </div>",
        "        </div>",
        "      </div>",
        "    </div>",
        "    <div class=\"col-xl-6\">",
        "      <div class=\"project-right-items\">",
        "        <div class=\"thumb\">",
        "          <img src=\"" + escapeHtml(cover.src) + "\" alt=\"" + escapeHtml(project.title) + "\">",
        "          <img src=\"" + escapeHtml(cover.src) + "\" alt=\"" + escapeHtml(project.title) + "\">",
        "        </div>",
        "        <div class=\"" + contentClass + "\">",
        summaryMarkup,
        "          <a href=\"project-details.html?project=" + escapeHtml(project.key) + "\" class=\"text-btn\">",
        "            <span class=\"text\"><span class=\"text-default\">View Project</span><span class=\"text-hover\">View Project</span></span>",
        "          </a>",
        "        </div>",
        "      </div>",
        "    </div>",
        "  </div>",
        "</div>"
      ].join("");
    }).join("");
  }

  function getHeroSlides(projects) {
    var slides = [];
    var heroProjects = projects.slice().sort(function (a, b) {
      if (a.key === "zoa") {
        return -1;
      }
      if (b.key === "zoa") {
        return 1;
      }
      return 0;
    });

    heroProjects.forEach(function (project) {
      (project.images || []).slice(0, 3).forEach(function (image) {
        if (!image || !image.src) {
          return;
        }

        slides.push({
          src: image.src,
          title: project.title,
          caption: project.title + " / " + String(image.number || slides.length + 1).padStart(2, "0")
        });
      });
    });

    return slides.slice(0, 12);
  }

  function renderHeroSlideshow(projects) {
    var slideshow = document.querySelector("[data-brand-hero-slides]");
    var caption = document.querySelector("[data-brand-hero-caption]");
    var progress = document.querySelector("[data-brand-hero-progress]");
    var slides = getHeroSlides(projects);
    var currentIndex = 0;

    if (!slideshow || !slides.length) {
      return;
    }

    if (heroTimer) {
      window.clearInterval(heroTimer);
      heroTimer = null;
    }

    slideshow.innerHTML = slides.map(function (slide, index) {
      return [
        "<figure class=\"brand-hero-slide" + (index === 0 ? " is-active" : "") + "\">",
        "  <img src=\"" + escapeHtml(slide.src) + "\" alt=\"" + escapeHtml(slide.title) + "\">",
        "</figure>"
      ].join("");
    }).join("");

    function restartProgress() {
      if (!progress) {
        return;
      }

      progress.style.animation = "none";
      progress.offsetHeight;
      progress.style.animation = "";
    }

    function showSlide(nextIndex) {
      var slideItems = slideshow.querySelectorAll(".brand-hero-slide");

      if (!slideItems.length) {
        return;
      }

      currentIndex = nextIndex % slideItems.length;
      slideItems.forEach(function (slide, index) {
        slide.classList.toggle("is-active", index === currentIndex);
      });

      if (caption) {
        caption.textContent = slides[currentIndex].caption;
      }

      restartProgress();
    }

    showSlide(0);

    if (slides.length > 1 && !(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) {
      heroTimer = window.setInterval(function () {
        showSlide(currentIndex + 1);
      }, 5200);
    }
  }

  function renderListings() {
    getProjects().then(function (projects) {
      renderProjectList(projects);
      renderHomeProjects(projects);
      renderHeroSlideshow(projects);

      window.requestAnimationFrame(function () {
        if (typeof window.initProjectServicePanelPins === "function") {
          window.initProjectServicePanelPins();
        }

        if (window.ScrollTrigger && typeof window.ScrollTrigger.refresh === "function") {
          window.ScrollTrigger.refresh();
        }
      });
    });
  }

  window.ProjectFolderLoader = {
    getProjects: getProjects,
    renderListings: renderListings,
    renderProjectList: renderProjectList,
    renderHomeProjects: renderHomeProjects,
    renderHeroSlideshow: renderHeroSlideshow
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderListings);
  } else {
    renderListings();
  }
}(window, document));
