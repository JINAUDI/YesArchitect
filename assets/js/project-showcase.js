(function () {
  "use strict";

  var projects = [
    {
      key: "hotel-cygnett-inn",
      title: "Hotel Cygnett Inn, Nepalgunj",
      meta: ["Hospitality", "Nepalgunj", "Architecture"],
      summary: "A featured hospitality project shaped around guest circulation, service planning, interior comfort, and execution-ready drawing coordination.",
      scope: ["Architecture", "Interior Design", "Drawing Development", "Hospitality Planning"],
      info: {
        Project: "Hotel Cygnett Inn",
        Sector: "Hospitality",
        Location: "Nepalgunj, Nepal",
        Services: "Architecture, interiors and drawings"
      },
      images: [
        { src: "assets/img/inner-page/project-details.jpg", caption: "Main hospitality elevation", modifier: "is-large" },
        { src: "assets/img/inner-page/project-details-2.jpg", caption: "Interior planning detail", modifier: "is-tall" },
        { src: "assets/img/inner-page/project-details-3.jpg", caption: "Material and volume study", modifier: "is-tall" },
        { src: "assets/img/inner-page/project-1.jpg", caption: "Project overview", modifier: "" },
        { src: "assets/img/home-3/work-1.webp", caption: "Hospitality composition", modifier: "is-wide" }
      ]
    },
    {
      key: "hotel-marigold",
      title: "Hotel Marigold, Sitapura",
      meta: ["Hospitality", "Sitapura", "Interiors"],
      summary: "A hotel interior project focused on spatial flow, guest arrival, public-area warmth, and coordinated interior drawing packages.",
      scope: ["Interior Design", "Material Direction", "Detail Drawings", "Hospitality Interiors"],
      info: {
        Project: "Hotel Marigold",
        Sector: "Hospitality Interiors",
        Location: "Sitapura",
        Services: "Interior planning and detail drawings"
      },
      images: [
        { src: "assets/img/home-3/work-2.png", caption: "Hospitality interior concept", modifier: "is-large" },
        { src: "assets/img/inner-page/project-2.jpg", caption: "Project listing view", modifier: "is-tall" },
        { src: "assets/img/inner-page/project-details-2.jpg", caption: "Detail development", modifier: "is-tall" },
        { src: "assets/img/inner-page/news-details.jpg", caption: "Guest space mood", modifier: "" },
        { src: "assets/img/home-3/video-bg.jpg", caption: "Public area atmosphere", modifier: "is-wide" }
      ]
    },
    {
      key: "banquet-hall-mahapura",
      title: "Banquet Hall, Mahapura",
      meta: ["Banquet", "Mahapura", "Proposal"],
      summary: "A proposal study for a banquet environment, balancing arrival sequence, event capacity, service movement, and refined interior character.",
      scope: ["Concept Proposal", "Space Planning", "Interior Design", "Presentation Drawings"],
      info: {
        Project: "Banquet Hall",
        Sector: "Proposal Project",
        Location: "Mahapura",
        Services: "Concept, planning and drawings"
      },
      images: [
        { src: "assets/img/inner-page/project-3.jpg", caption: "Banquet concept view", modifier: "is-large" },
        { src: "assets/img/home-3/work-3.jpg", caption: "Event space composition", modifier: "is-tall" },
        { src: "assets/img/inner-page/project-details-3.jpg", caption: "Interior volume study", modifier: "is-tall" },
        { src: "assets/img/inner-page/news-4.jpg", caption: "Design detail reference", modifier: "" },
        { src: "assets/img/inner-page/about.jpg", caption: "Planning and circulation", modifier: "is-wide" }
      ]
    },
    {
      key: "ranga-matir-desh",
      title: "Ranga Matir Desh",
      meta: ["Government", "Bengal", "Proposal"],
      summary: "A concept proposal developed with cultural context, landscape movement, public experience, and a clear architectural story.",
      scope: ["Concept Architecture", "Public Experience", "Landscape Interface", "Presentation"],
      info: {
        Project: "Ranga Matir Desh",
        Sector: "Government Proposal",
        Location: "Bengal",
        Services: "Architecture concept and presentation"
      },
      images: [
        { src: "assets/img/inner-page/project-4.jpg", caption: "Proposal identity", modifier: "is-large" },
        { src: "assets/img/home-3/work-4.jpg", caption: "Built-form exploration", modifier: "is-tall" },
        { src: "assets/img/home-3/about.jpg", caption: "Site and movement idea", modifier: "is-tall" },
        { src: "assets/img/inner-page/news-5.jpg", caption: "Material direction", modifier: "" },
        { src: "assets/img/inner-page/breadcrumb.jpg", caption: "Contextual atmosphere", modifier: "is-wide" }
      ]
    },
    {
      key: "sapphire-apartments",
      title: "Sapphire Apartments",
      meta: ["Residential", "Apartments", "Architecture"],
      summary: "A residential project arranged around efficient planning, facade clarity, daylight, and practical drawing development for execution.",
      scope: ["Residential Planning", "Facade Direction", "Civil Drawings", "Interior Coordination"],
      info: {
        Project: "Sapphire Apartments",
        Sector: "Residential",
        Location: "India",
        Services: "Architecture and drawing development"
      },
      images: [
        { src: "assets/img/inner-page/project-5.jpg", caption: "Residential project view", modifier: "is-large" },
        { src: "assets/img/inner-page/breadcrumb-2.jpg", caption: "Residential detail", modifier: "is-tall" },
        { src: "assets/img/inner-page/project-details-2.jpg", caption: "Interior coordination", modifier: "is-tall" },
        { src: "assets/img/inner-page/news-6.jpg", caption: "Material planning", modifier: "" },
        { src: "assets/img/home-3/counter-bg.jpg", caption: "Project planning reference", modifier: "is-wide" }
      ]
    },
    {
      key: "kamal-pokhari-office",
      title: "Kamal Pokhari Office",
      meta: ["Office", "Kamal Pokhari", "Interiors"],
      summary: "A workspace project developed for efficient circulation, cabin planning, team use, and a calm professional interior language.",
      scope: ["Office Interiors", "Cabin Planning", "Furniture Layout", "Detail Drawings"],
      info: {
        Project: "Kamal Pokhari Office",
        Sector: "Office",
        Location: "Kamal Pokhari",
        Services: "Interior design and drawings"
      },
      images: [
        { src: "assets/img/inner-page/project-6.jpg", caption: "Office project view", modifier: "is-large" },
        { src: "assets/img/inner-page/service-details.jpg", caption: "Workspace material direction", modifier: "is-tall" },
        { src: "assets/img/inner-page/project-details-3.jpg", caption: "Detail coordination", modifier: "is-tall" },
        { src: "assets/img/home-3/news-1.jpg", caption: "Office atmosphere", modifier: "" },
        { src: "assets/img/inner-page/project-details.jpg", caption: "Planning overview", modifier: "is-wide" }
      ]
    },
    {
      key: "radisson-green",
      title: "Radisson Green",
      meta: ["Hospitality", "Resort", "Concept"],
      summary: "A hospitality concept focused on arrival experience, resort scale, amenity flow, and a clear architectural direction for development.",
      scope: ["Hospitality Concept", "Resort Planning", "Facade Direction", "Presentation"],
      info: {
        Project: "Radisson Green",
        Sector: "Hospitality",
        Location: "India",
        Services: "Concept, planning and presentation"
      },
      images: [
        { src: "assets/img/home-3/video-bg.jpg", caption: "Hospitality concept atmosphere", modifier: "is-large" },
        { src: "assets/img/home-3/work-3.jpg", caption: "Resort form study", modifier: "is-tall" },
        { src: "assets/img/inner-page/project-details-2.jpg", caption: "Guest experience detail", modifier: "is-tall" },
        { src: "assets/img/inner-page/project-3.jpg", caption: "Portfolio reference", modifier: "" },
        { src: "assets/img/inner-page/breadcrumb.jpg", caption: "Site mood and setting", modifier: "is-wide" }
      ]
    }
  ];

  var showcaseTriggers = [];
  var fallbackCleanup = null;
  var reducedMotionQuery = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;

  function pad(number) {
    return String(number).padStart(2, "0");
  }

  function getProjectIndex(key) {
    var index = projects.findIndex(function (project) {
      return project.key === key;
    });

    return index >= 0 ? index : 0;
  }

  function getRequestedKey() {
    var params = new URLSearchParams(window.location.search);
    return params.get("project") || projects[0].key;
  }

  function setHtml(selector, html) {
    var element = document.querySelector(selector);
    if (element) {
      element.innerHTML = html;
    }
  }

  function setText(selector, text) {
    var element = document.querySelector(selector);
    if (element) {
      element.textContent = text;
    }
  }

  function setOptionalText(selector, text) {
    var element = document.querySelector(selector);
    var value = String(text || "").trim();

    if (element) {
      element.textContent = value;
      element.hidden = !value;
    }
  }

  function toArray(collection) {
    return Array.prototype.slice.call(collection || []);
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function interpolate(from, to, progress) {
    return from + (to - from) * progress;
  }

  function prefersReducedMotion() {
    return !!(reducedMotionQuery && reducedMotionQuery.matches);
  }

  function getGalleryImages(images) {
    return (images || []).filter(function (image) {
      return image && image.src;
    }).sort(function (a, b) {
      return (a.number || 0) - (b.number || 0);
    });
  }

  function getGalleryPatternClass(imageIndex) {
    return imageIndex % 3 === 0 ? " is-pattern-large" : " is-pattern-small";
  }

  function getHeroTextItems(heroContent, heroScroll) {
    var items = heroContent ? toArray(heroContent.querySelectorAll(".project-entry-back, .project-entry-kicker, h1, .project-entry-meta li")) : [];

    if (heroScroll) {
      items.push(heroScroll);
    }

    return items;
  }

  function getPanelTextItems(panel) {
    if (!panel) {
      return [];
    }

    return toArray(panel.querySelectorAll(".project-showcase-back, .project-showcase-kicker, h2, .project-showcase-meta li, .project-showcase-summary, .project-showcase-scope span, .project-showcase-info h3, .project-showcase-info li, .project-showcase-actions"));
  }

  function trackEffect(effect) {
    if (effect) {
      showcaseTriggers.push(effect);

      if (effect.scrollTrigger) {
        showcaseTriggers.push(effect.scrollTrigger);
      }
    }

    return effect;
  }

  function applyRestingMotionState(section, heroImage, heroContent, heroScroll, panel, gallery, progress) {
    var galleryItems = gallery ? toArray(gallery.querySelectorAll(".project-showcase-image")) : [];
    var galleryImages = gallery ? toArray(gallery.querySelectorAll(".project-showcase-image img")) : [];
    var textItems = getHeroTextItems(heroContent, heroScroll).concat(getPanelTextItems(panel));
    var cleanTargets = [heroImage, heroContent, heroScroll].concat(textItems, galleryItems, galleryImages).filter(Boolean);

    if (section) {
      section.classList.add("is-grid-settled");
    }

    if (window.gsap) {
      gsap.set(cleanTargets, { clearProps: "transform,opacity,clipPath,willChange,transition" });
      gsap.set(galleryItems, { opacity: 1, clipPath: "inset(0% 0% 0% 0%)" });

      if (progress) {
        gsap.set(progress, { width: "100%" });
      }
    } else {
      galleryItems.forEach(function (item) {
        item.style.opacity = "1";
        item.style.clipPath = "inset(0% 0% 0% 0%)";
      });

      cleanTargets.forEach(function (item) {
        item.style.willChange = "";
      });

      if (progress) {
        progress.style.width = "100%";
      }
    }
  }

  function initRafFallback(section, hero, heroImage, heroContent, heroScroll, split, panel, gallery, progress) {
    var galleryItems = gallery ? toArray(gallery.querySelectorAll(".project-showcase-image")) : [];
    var galleryImages = gallery ? toArray(gallery.querySelectorAll(".project-showcase-image img")) : [];
    var textItems = getHeroTextItems(heroContent, heroScroll).concat(getPanelTextItems(panel));
    var frame = null;

    section.classList.add("is-grid-settled");

    textItems.forEach(function (item) {
      item.style.opacity = "1";
      item.style.transform = "translate3d(0, 0, 0)";
      item.style.willChange = "transform, opacity";
    });

    galleryItems.forEach(function (item) {
      item.style.opacity = "0";
      item.style.clipPath = "inset(100% 0% 0% 0%)";
      item.style.transform = "translate3d(0, 55px, 0) scale(1.08)";
      item.style.willChange = "transform, opacity, clip-path";
      item.style.transition = "none";
    });

    galleryImages.forEach(function (image) {
      image.style.transformOrigin = "center center";
      image.style.willChange = "transform";
      image.style.transition = "none";
    });

    if (heroImage) {
      heroImage.style.transformOrigin = "center center";
      heroImage.style.willChange = "transform";
      heroImage.style.transition = "none";
    }

    if (progress) {
      progress.style.width = "100%";
    }

    function update() {
      var viewportHeight = window.innerHeight || document.documentElement.clientHeight || 1;

      frame = null;

      if (hero && heroImage) {
        var heroRect = hero.getBoundingClientRect();
        var heroProgress = clamp(-heroRect.top / Math.max(heroRect.height, 1), 0, 1);

        heroImage.style.transform = "translate3d(0, " + interpolate(0, -70, heroProgress).toFixed(2) + "px, 0) scale(" + interpolate(1.14, 1, heroProgress).toFixed(4) + ")";
      }

      if (hero && heroContent) {
        var contentRect = hero.getBoundingClientRect();
        var contentProgress = clamp(-contentRect.top / Math.max(contentRect.height, 1), 0, 1);

        heroContent.style.transform = "translate3d(0, " + interpolate(0, -32, contentProgress).toFixed(2) + "px, 0)";
      }

      galleryItems.forEach(function (item) {
        var rect = item.getBoundingClientRect();
        var revealProgress = clamp(((viewportHeight * 0.85) - rect.top) / (viewportHeight * 0.37), 0, 1);
        var aliveProgress = clamp((viewportHeight - rect.top) / (viewportHeight + rect.height), 0, 1);
        var image = item.querySelector("img");

        item.style.opacity = revealProgress.toFixed(4);
        item.style.clipPath = "inset(" + interpolate(100, 0, revealProgress).toFixed(2) + "% 0% 0% 0%)";
        item.style.transform = "translate3d(0, " + interpolate(55, 0, revealProgress).toFixed(2) + "px, 0) scale(" + interpolate(1.08, 1, revealProgress).toFixed(4) + ")";

        if (image) {
          image.style.transform = "translate3d(0, " + interpolate(14, -14, aliveProgress).toFixed(2) + "px, 0) scale(" + interpolate(1.02, 1, aliveProgress).toFixed(4) + ")";
        }
      });
    }

    function requestUpdate() {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    }

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    requestUpdate();

    fallbackCleanup = function () {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }

  function scrollToShowcase() {
    var section = document.querySelector("[data-project-showcase]");
    if (!section) {
      return;
    }

    if (window.ScrollSmoother && typeof ScrollSmoother.get === "function" && ScrollSmoother.get()) {
      ScrollSmoother.get().scrollTo(section, true, "top top");
      return;
    }

    window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
  }

  function resetInitialScroll() {
    if (window.location.hash) {
      return;
    }

    if (window.ScrollSmoother && typeof ScrollSmoother.get === "function" && ScrollSmoother.get()) {
      ScrollSmoother.get().scrollTo(0, false);
    } else {
      window.scrollTo(0, 0);
    }

    if (window.ScrollTrigger && typeof ScrollTrigger.refresh === "function") {
      ScrollTrigger.refresh();
    }
  }

  function scheduleInitialScrollReset() {
    resetInitialScroll();
    window.setTimeout(resetInitialScroll, 120);
    window.setTimeout(resetInitialScroll, 700);
    window.addEventListener("load", function () {
      window.setTimeout(resetInitialScroll, 80);
    }, { once: true });
  }

  function destroyEffects() {
    if (fallbackCleanup) {
      fallbackCleanup();
      fallbackCleanup = null;
    }

    showcaseTriggers.forEach(function (trigger) {
      if (trigger && trigger.kill) {
        trigger.kill();
      }
    });
    showcaseTriggers = [];
  }

  function initPopup(gallery) {
    if (window.jQuery && jQuery.fn && jQuery.fn.magnificPopup) {
      jQuery(gallery).find(".img-popup").magnificPopup({
        type: "image",
        mainClass: "project-detail-lightbox",
        closeBtnInside: false,
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: "hidden",
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [1, 1]
        },
        image: {
          verticalFit: false,
          titleSrc: function (item) {
            return "";
          }
        },
        callbacks: {
          open: function () {
            document.body.classList.add("project-lightbox-open");
          },
          close: function () {
            document.body.classList.remove("project-lightbox-open");
          }
        }
      });
    }
  }

  function initEffects() {
    var section = document.querySelector("[data-project-showcase]");
    var hero = document.querySelector("[data-project-hero]");
    var heroMedia = document.querySelector("[data-project-hero-media]");
    var heroImage = document.querySelector("[data-project-hero-image]");
    var heroContent = document.querySelector(".project-entry-content");
    var heroScroll = document.querySelector(".project-entry-scroll");
    var split = document.querySelector("[data-project-split]");
    var panel = document.querySelector("[data-project-panel]");
    var gallery = document.querySelector("[data-project-gallery]");
    var progress = document.querySelector("[data-project-progress]");

    destroyEffects();

    if (!section || !hero || !heroMedia || !split || !panel || !gallery) {
      if (section) {
        section.classList.add("is-grid-settled");
      }
      return;
    }

    if (prefersReducedMotion()) {
      applyRestingMotionState(section, heroImage, heroContent, heroScroll, panel, gallery, progress);
      return;
    }

    if (!window.gsap || !window.ScrollTrigger) {
      initRafFallback(section, hero, heroImage, heroContent, heroScroll, split, panel, gallery, progress);
      return;
    }

    var galleryItems = toArray(gallery.querySelectorAll(".project-showcase-image"));
    var galleryImages = toArray(gallery.querySelectorAll(".project-showcase-image img"));
    var heroTextItems = getHeroTextItems(heroContent, heroScroll);
    var panelTextItems = getPanelTextItems(panel);
    var panelParallaxTargets = toArray(panel.children);
    var cleanTargets = [heroImage, heroContent, heroScroll].concat(heroTextItems, panelTextItems, panelParallaxTargets, galleryItems, galleryImages).filter(Boolean);

    gsap.registerPlugin(ScrollTrigger);
    gsap.killTweensOf(cleanTargets);
    gsap.set(cleanTargets, { clearProps: "transform,opacity,clipPath,willChange,transition" });
    section.classList.add("is-grid-settled");

    if (heroImage) {
      gsap.set(heroImage, {
        scale: 1.14,
        y: 0,
        force3D: true,
        transformOrigin: "center center",
        willChange: "transform",
        transition: "none"
      });

      trackEffect(gsap.to(heroImage, {
        scale: 1,
        y: -70,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
          anticipatePin: 1,
          fastScrollEnd: false,
          invalidateOnRefresh: true
        }
      }));
    }

    if (heroTextItems.length) {
      gsap.set(heroTextItems, {
        opacity: 0,
        y: 24,
        force3D: true,
        willChange: "transform, opacity",
        transition: "none"
      });

      trackEffect(gsap.to(heroTextItems, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.08,
        force3D: true,
        onComplete: function () {
          gsap.set(heroTextItems, { clearProps: "willChange" });
        }
      }));
    }

    if (heroContent) {
      gsap.set(heroContent, {
        y: 0,
        force3D: true,
        willChange: "transform",
        transition: "none"
      });

      trackEffect(gsap.to(heroContent, {
        y: -32,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
          fastScrollEnd: false,
          invalidateOnRefresh: true
        }
      }));
    }

    if (panelTextItems.length) {
      gsap.set(panelTextItems, {
        opacity: 0,
        y: 24,
        force3D: true,
        willChange: "transform, opacity",
        transition: "none"
      });

      var textTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: split,
          start: "top 92%",
          end: "top 68%",
          scrub: 0.9,
          fastScrollEnd: false,
          invalidateOnRefresh: true
        }
      });

      textTimeline.to(panelTextItems, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.08,
        force3D: true
      });

      trackEffect(textTimeline);
    }

    if (panelParallaxTargets.length) {
      gsap.set(panelParallaxTargets, {
        y: 0,
        force3D: true,
        willChange: "transform",
        transition: "none"
      });

      trackEffect(gsap.to(panelParallaxTargets, {
        y: -12,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: split,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
          fastScrollEnd: false,
          invalidateOnRefresh: true
        }
      }));
    }

    galleryItems.forEach(function (item, itemIndex) {
      var image = item.querySelector("img");
      var revealDelay = itemIndex % 3 === 2 ? 0.14 : 0;
      var revealTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          end: "top 48%",
          scrub: 1.2,
          anticipatePin: 1,
          fastScrollEnd: false,
          invalidateOnRefresh: true
        }
      });

      gsap.set(item, {
        opacity: 0,
        y: 55,
        scale: 1.08,
        clipPath: "inset(100% 0% 0% 0%)",
        force3D: true,
        transformOrigin: "center center",
        willChange: "transform, opacity, clip-path",
        transition: "none"
      });

      revealTimeline.to(item, {
        opacity: 1,
        y: 0,
        scale: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.2,
        ease: "power3.out",
        force3D: true
      }, revealDelay);

      trackEffect(revealTimeline);

      if (image) {
        gsap.set(image, {
          y: 14,
          scale: 1.02,
          force3D: true,
          transformOrigin: "center center",
          willChange: "transform",
          transition: "none"
        });

        trackEffect(gsap.to(image, {
          y: -14,
          scale: 1,
          ease: "none",
          force3D: true,
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
            fastScrollEnd: false,
            invalidateOnRefresh: true
          }
        }));
      }
    });

    if (progress) {
      gsap.set(progress, { width: "100%" });
    }

    ScrollTrigger.refresh();
  }

  function renderProject(index, shouldPush) {
    var project = projects[index];
    var gallery = document.querySelector("[data-project-gallery]");
    var heroImage = document.querySelector("[data-project-hero-image]");

    if (!project || !gallery) {
      return;
    }

    var projectImages = getGalleryImages(project.images || []);
    var mainImage = projectImages[0] || null;
    var galleryImages = getGalleryImages(projectImages.slice(1));

    if (!galleryImages.length && projectImages.length > 1) {
      galleryImages = projectImages.slice(1);
    }

    if (!mainImage && galleryImages.length) {
      mainImage = galleryImages[0];
    }

    setText("[data-project-title]", project.title);
    setText("[data-project-hero-title]", project.title);
    setOptionalText("[data-project-summary]", project.summary);
    setText("[data-project-count]", pad(index + 1) + " / " + pad(projects.length));

    if (heroImage && mainImage) {
      heroImage.src = mainImage.src;
      heroImage.alt = project.title;
    }

    setHtml("[data-project-meta]", project.meta.map(function (item) {
      return "<li>" + item + "</li>";
    }).join(""));

    setHtml("[data-project-hero-meta]", project.meta.map(function (item) {
      return "<li>" + item + "</li>";
    }).join(""));

    setHtml("[data-project-scope]", project.scope.map(function (item) {
      return "<span>" + item + "</span>";
    }).join(""));

    setHtml("[data-project-info]", Object.keys(project.info).map(function (label) {
      return "<li><span>" + label + "</span>" + project.info[label] + "</li>";
    }).join(""));

    gallery.setAttribute("data-gallery-count", galleryImages.length);
    gallery.innerHTML = galleryImages.map(function (image, imageIndex) {
      var modifier = getGalleryPatternClass(imageIndex);
      var mainClass = imageIndex === 0 ? " is-main-grid" : "";
      var mainAttr = imageIndex === 0 ? " data-main-grid-cell" : "";
      var imageNumber = image.number || imageIndex + 2;
      return [
        "<a class=\"project-showcase-image img-popup" + modifier + mainClass + "\" href=\"" + image.src + "\" data-image-number=\"" + imageNumber + "\"" + mainAttr + ">",
        "<img data-speed=\".85\" src=\"" + image.src + "\" alt=\"" + image.caption + "\">",
        "</a>"
      ].join("");
    }).join("");

    document.title = project.title + " - Portfolio Details";

    if (shouldPush) {
      var nextUrl = new URL(window.location.href);
      nextUrl.searchParams.set("project", project.key);
      window.history.pushState({ project: project.key }, "", nextUrl);
      scrollToShowcase();
    }

    initPopup(gallery);

    var refresh = function () {
      window.setTimeout(initEffects, 120);
    };

    if (heroImage && !heroImage.complete) {
      heroImage.addEventListener("load", refresh, { once: true });
    }

    refresh();
  }

  function bindNavigation() {
    document.querySelectorAll("[data-project-nav]").forEach(function (button) {
      button.addEventListener("click", function () {
        var currentIndex = getProjectIndex(new URLSearchParams(window.location.search).get("project") || projects[0].key);
        var direction = button.getAttribute("data-project-nav");
        var nextIndex = direction === "next"
          ? (currentIndex + 1) % projects.length
          : (currentIndex - 1 + projects.length) % projects.length;

        renderProject(nextIndex, true);
      });
    });

    window.addEventListener("popstate", function () {
      renderProject(getProjectIndex(getRequestedKey()), false);
    });

    window.addEventListener("resize", function () {
      window.clearTimeout(window.projectShowcaseResizeTimer);
      window.projectShowcaseResizeTimer = window.setTimeout(initEffects, 180);
    });
  }

  function startProjectShowcase() {
    if (!document.querySelector("[data-project-showcase]")) {
      return;
    }

    document.body.classList.add("project-detail-page");
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    scheduleInitialScrollReset();
    renderProject(getProjectIndex(getRequestedKey()), false);
    bindNavigation();
  }

  function init() {
    if (!document.querySelector("[data-project-showcase]")) {
      return;
    }

    if (window.ProjectFolderLoader && typeof window.ProjectFolderLoader.getProjects === "function") {
      window.ProjectFolderLoader.getProjects().then(function (loadedProjects) {
        if (loadedProjects && loadedProjects.length) {
          projects = loadedProjects;
        }

        startProjectShowcase();
      }).catch(startProjectShowcase);
      return;
    }

    startProjectShowcase();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
}());
