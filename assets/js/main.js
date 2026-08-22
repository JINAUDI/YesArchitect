(function($) {
    "use strict";
  
    const $documentOn = $(document);
    const $windowOn = $(window);
  
    $documentOn.ready( function() {
  
      /* ================================
       Mobile Menu Js Start
    ================================ */
    
      $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "1199",
        meanExpand: ['<i class="far fa-plus"></i>'],
    });

       $('#mobile-menus').meanmenu({
        meanMenuContainer: '.mobile-menus',
        meanScreenWidth: "1199",
        meanExpand: ['<i class="far fa-plus"></i>'],
    });

     $documentOn.on("click", ".mean-expand", function () {
        let icon = $(this).find("i");

        if (icon.hasClass("fa-plus")) {
            icon.removeClass("fa-plus").addClass("fa-minus"); 
        } else {
            icon.removeClass("fa-minus").addClass("fa-plus"); 
        }
    });

    /* ================================
        Sidebar Toggle & Sticky Item Logic
        ================================ */

        // Open offcanvas
        $(".sidebar__toggle").on("click", function () {
        $(".offcanvas__info").addClass("info-open");
        $(".offcanvas__overlay").addClass("overlay-open");

        // Hide sticky item
        $(".sidebar-sticky-item").fadeOut().removeClass("active");
        });

        // Close offcanvas
        $(".offcanvas__close, .offcanvas__overlay").on("click", function () {
        $(".offcanvas__info").removeClass("info-open");
        $(".offcanvas__overlay").removeClass("overlay-open");

        // Show sticky item
        $(".sidebar-sticky-item").fadeIn().addClass("active");
        });

        /* ================================
        Body Overlay Js Start
        ================================ */

        $(".body-overlay").on("click", function () {
        $(".offcanvas__area").removeClass("offcanvas-opened");
        $(".df-search-area").removeClass("opened");
        $(".body-overlay").removeClass("opened");

        // Show sticky item when overlay clicked
        $(".sidebar-sticky-item").fadeIn().addClass("active");
        });

        /* ================================
        Offcanvas Link Click (Optional)
        ================================ */

        $(".offcanvas a").on("click", function () {
        $(".sidebar-sticky-item").fadeIn().addClass("active");
    });

    
      /* ================================
       Sticky Header Js Start
    ================================ */

       $windowOn.on("scroll", function () {
        if ($(this).scrollTop() > 250) {
          $("#header-sticky").addClass("sticky");
        } else {
          $("#header-sticky").removeClass("sticky");
        }
      });      
      
       /* ================================
       Video & Image Popup Js Start
    ================================ */

      $(".img-popup").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });

      $(".img-popup2").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });

      $(".video-popup").magnificPopup({
        type: "iframe",
        callbacks: {},
      });
  
      /* ================================
       Counterup Js Start
    ================================ */

      $(".count").counterUp({
        delay: 15,
        time: 4000,
      });
  
      /* ================================
       Wow Animation Js Start
    ================================ */

      new WOW().init();
  
      /* ================================
       Nice Select Js Start
    ================================ */

    if ($('.single-select').length) {
        $('.single-select').niceSelect();
    }

      /* ================================
       Parallaxie Js Start
    ================================ */

      if ($('.parallaxie').length && $(window).width() > 991) {
          if ($(window).width() > 768) {
              $('.parallaxie').parallaxie({
                  speed: 0.55,
                  offset: 0,
              });
          }
      }

      /* ================================
      Hover Active Js Start
    ================================ */

    $(".award-wrapper-2 .thumb-1").hover(
		// Function to run when the mouse enters the element
		function () {
			// Remove the "active" class from all elements
			$(".award-wrapper-2 .thumb-1").removeClass("active");
			// Add the "active" class to the currently hovered element
			$(this).addClass("active");
		}
	);

    /* ================================
      Custom Accordion Js Start
    ================================ */

    if ($('.accordion-box').length) {
        $(".accordion-box").on('click', '.acc-btn', function () {
            var outerBox = $(this).closest('.accordion-box');
            var target = $(this).closest('.accordion');
            var accBtn = $(this);
            var accContent = accBtn.next('.acc-content');

            if (target.hasClass('active-block')) {
                // Already open, so close it
                accBtn.removeClass('active');
                target.removeClass('active-block');
                accContent.slideUp(300);
            } else {
                // Close all others
                outerBox.find('.accordion').removeClass('active-block');
                outerBox.find('.acc-btn').removeClass('active');
                outerBox.find('.acc-content').slideUp(300);

                // Open clicked one
                accBtn.addClass('active');
                target.addClass('active-block');
                accContent.slideDown(300);
            }
        });
    }

    if ($('.accordion-box-3').length) {
        $(".accordion-box-3").on('click', '.acc-btn', function () {
            var outerBox = $(this).closest('.accordion-box-3');
            var target = $(this).closest('.accordion');
            var accBtn = $(this);
            var accContent = accBtn.next('.acc-content');

            if (target.hasClass('active-block')) {
                // Already open, so close it
                accBtn.removeClass('active');
                target.removeClass('active-block');
                accContent.slideUp(300);
            } else {
                // Close all others
                outerBox.find('.accordion').removeClass('active-block');
                outerBox.find('.acc-btn').removeClass('active');
                outerBox.find('.acc-content').slideUp(300);

                // Open clicked one
                accBtn.addClass('active');
                target.addClass('active-block');
                accContent.slideDown(300);
            }
        });
    }

  
    /* ================================
      Brand Slider Js Start
    ================================ */

   if ($('.brand-slider').length > 0) {
    const brandSlider = new Swiper(".brand-slider", {
        spaceBetween: 30,
        speed: 1300,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".array-next",
            prevEl: ".array-prev",
        },
        breakpoints: {
            1399: {
                slidesPerView: 6,
            },
            1199: {
                slidesPerView: 5.5,
            },
            991: {
                slidesPerView: 4.5,
            },
            767: {
                slidesPerView: 4,
            },
            575: {
                slidesPerView: 3,
            },
            410: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
   }

   if ($('.testi-content-slider').length > 0) {
    const testiContentSlider = new Swiper(".testi-content-slider", {
        spaceBetween: 60,
        speed: 1300,
        loop: true,
          centeredSlides: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".array-next",
            prevEl: ".array-prev",
        },
        
    });
   }

   if ($('.testimonial-client-slider').length > 0) {
    const testimonialClientSlider = new Swiper(".testimonial-client-slider", {
        spaceBetween: 60,
        speed: 1300,
        loop: true,
          centeredSlides: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".array-next",
            prevEl: ".array-prev",
        },
        breakpoints: {
            1199: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1.5,
            },
            475: {
                slidesPerView: 1.5,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });
   }


    if ($(".work-process-section").length) {

    gsap.registerPlugin(ScrollTrigger);

    const items = document.querySelectorAll(".work-process-items");
    const images = document.querySelectorAll(".process-img");

    // Media query setup
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1200px)", () => { // XL screen er jonno (1200px ar beshi)
        
        ScrollTrigger.create({
            trigger: ".work-process-section",
            start: "top+=120 20%",
            end: "+=" + (items.length * 100) + "%",
            scrub: true,
            pin: ".work-process-wrapper-2",

            onUpdate: (self) => {

                let index = Math.round(self.progress * (items.length - 1));

                items.forEach((item,i)=>{
                    let content = item.querySelector(".content");

                    if(i === index){
                        content.style.opacity = "1";
                    }else{
                        content.style.opacity = "0.2";
                    }
                });

                images.forEach((img,i)=>{
                    img.classList.remove("active");

                    if(i === index){
                        img.classList.add("active");
                    }
                });

            }

        });

    });

    // XL ar niche animation inactive thakbe
    mm.add("(max-width: 1199px)", () => {
        // kono ScrollTrigger create korbo na
    });
}

    gsap.registerPlugin(ScrollTrigger);
   (function () {
        const goFullItems = document.querySelectorAll(".go_full");
        if (!goFullItems.length) return;

        goFullItems.forEach((item) => {
            const img = item.querySelector("img");
            if (!img) return;

            gsap.set(img, {
                position: "relative",
                left: "50%",
                xPercent: -50,
                width: 588, 
                display: "block",
            });

            gsap.to(img, {
                width: "100vw",
                ease: "none",
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom",
                    end: "bottom top", 
                    scrub: true,
                    invalidateOnRefresh: true, 
                    anticipatePin: 1, 
                },
            });
        });
    })();

     if ($('.testi-slider').length > 0) {
        const TestiSlider = new Swiper(".testi-slider", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
            el: ".dot-number",
            clickable: true,
            renderBullet: function(index, className) {
                const dotContent = document.querySelectorAll(
                    ".dot-number .dot-num"
                );
                return `
            <span class="${className}">
                ${dotContent[index]?.outerHTML || ""}
            </span>
        `;
            },
        },
            breakpoints: {
                1399: {
                    slidesPerView: 2,
                },
                1199: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView:2,
                },
                767: {
                    slidesPerView: 1,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
        
       }

    /* ================================
        Mouse Cursor Animation Js Start
    ================================ */

    if ($(".mouseCursor").length > 0) {
        function itCursor() {
            var myCursor = jQuery(".mouseCursor");
            if (myCursor.length) {
                if ($("body")) {
                    const e = document.querySelector(".cursor-inner"),
                        t = document.querySelector(".cursor-outer");
                    let n, i = 0, o = !1;
                    window.onmousemove = function(s) {
                        if (!o) {
                            t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
                        }
                        e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
                        n = s.clientY;
                        i = s.clientX;
                    };
                    $("body").on("mouseenter", "button, a, .cursor-pointer", function() {
                        e.classList.add("cursor-hover");
                        t.classList.add("cursor-hover");
                    });
                    $("body").on("mouseleave", "button, a, .cursor-pointer", function() {
                        if (!($(this).is("a", "button") && $(this).closest(".cursor-pointer").length)) {
                            e.classList.remove("cursor-hover");
                            t.classList.remove("cursor-hover");
                        }
                    });
                    e.style.visibility = "visible";
                    t.style.visibility = "visible";
                }
            }
        }
        itCursor();
    }

    /* ================================
        Back To Top Button Js Start
    ================================ */
    $windowOn.on('scroll', function() {
        var windowScrollTop = $(this).scrollTop();
        var windowHeight = $(window).height();
        var documentHeight = $(document).height();

        if (windowScrollTop + windowHeight >= documentHeight - 10) {
            $("#back-top").addClass("show");
        } else {
            $("#back-top").removeClass("show");
        }
    });

    $documentOn.on('click', '#back-top', function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    /* ================================
       Search Popup Toggle Js Start
    ================================ */

    // if ($(".search-toggler").length) {
    //     $(".search-toggler").on("click", function(e) {
    //         e.preventDefault();
    //         $(".search-popup").toggleClass("active");
    //         $("body").toggleClass("locked");
    //     });
    // }

    // Check if this page has the service section
    if ($('.service-section').length) { // wrap your HTML section with a class "service-section"
        let $serviceTitles = $('.service-section .service-title');
        let $serviceImages = $('.service-section .gt-service-one-images-outer .gt-service-one-image');

        $serviceTitles.on('mouseenter', function () {
            let index = $(this).index(); // get index relative to siblings

            $(this).addClass('active').siblings().removeClass('active');
            $serviceImages.eq(index).addClass('active').siblings().removeClass('active');
        });
    }
   
	
    /* ================================
       Smooth Scroller And Title Animation Js Start
    ================================ */
    if ($('#smooth-wrapper').length && $('#smooth-content').length && !$('body').hasClass('project-detail-page')) {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

        gsap.config({
            nullTargetWarn: false,
        });

        let smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 2,
            effects: true,
            smoothTouch: 0.1,
            normalizeScroll: false,
            ignoreMobileResize: true,
        });
    }

    /* ================================
       Brand Hero Scroll Reveal Js Start
    ================================ */

    if (document.querySelector('.brand-hero') && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        const brandHero = document.querySelector('.brand-hero');
        const brandHeroSlideshow = brandHero.querySelector('.brand-hero-slideshow');
        const brandHeroCopy = brandHero.querySelector('.brand-hero-copy');
        const brandHeroMeta = brandHero.querySelector('.brand-hero-meta');

        gsap.timeline({
            scrollTrigger: {
                trigger: brandHero,
                start: 'top top',
                end: 'bottom top',
                scrub: 1.15,
                invalidateOnRefresh: true
            }
        })
        .to(brandHeroSlideshow, {
            yPercent: 9,
            scale: 1.12,
            ease: 'none'
        }, 0)
        .to(brandHeroCopy, {
            y: 82,
            opacity: 0.2,
            ease: 'power2.out'
        }, 0)
        .to(brandHeroMeta, {
            y: 48,
            opacity: 0.25,
            ease: 'power2.out'
        }, 0);
    }

    // The homepage hero uses a simple brand slideshow with a scroll-led reveal.

     const buttons = document.querySelectorAll(".theme-btn");
    buttons.forEach(button => {
        const textEl = button.querySelector(".text");

        if (!textEl) return;

        const hasIcon = button.querySelector(".left-icon") || button.querySelector("i");
        if (hasIcon) {
            button.classList.add("has-icon");
        }

        const text = textEl.textContent;
        textEl.innerHTML = "";
        text.split("").forEach((char, index) => {
            const span = document.createElement("span");
            span.innerHTML = char === ' ' ? '&nbsp;' : char;
            const delay = (text.length - index) * 0.05;
            span.style.transitionDelay = `${delay}s`;
            textEl.appendChild(span);
        });

        button.addEventListener("mouseenter", () => {
            const spans = textEl.querySelectorAll("span");
            spans.forEach(span => {
                span.classList.remove("animate");
                void span.offsetWidth;
                span.classList.add("animate");
            });
        });
    });

    /* ================================
      Text Invert Js Start
    ================================ */

    const split2 = new SplitText(".text_invert-2", { type: "lines" });

    split2.lines.forEach((target) => {
        gsap.to(target, {
            backgroundPositionX: 0,
            ease: "none",
            scrollTrigger: {
                trigger: target,
                scrub: 1,
                start: 'top 85%',
                end: "bottom center",
            }
        });
    });

    /* ================================
       Text Anim Js Start
    ================================ */

      if (
    typeof SplitText !== "undefined" &&
        document.querySelectorAll(".split-title").length > 0
        ) {
    document.querySelectorAll(".split-title").forEach((title) => {

        // split by words + chars (IMPORTANT)
        const split = new SplitText(title, {
        type: "words,chars"
        });

        // add class to chars
        split.chars.forEach((char) => {
        char.classList.add("char");
        });

        // GSAP animation
        gsap.to(split.chars, {
        scrollTrigger: {
            trigger: title,
            start: "top 90%",
            toggleActions: "play none none none"
        },
        duration: 0.8,
        clipPath: "inset(0% 0% -15% 0%)",
        x: 0,
        opacity: 1,
        ease: "power4.out",
        stagger: 0.03
        });

    });
    }

     if (typeof gsap !== "undefined") {
          gsap.registerPlugin(ScrollTrigger, SplitText);

          let mm = gsap.matchMedia();

          mm.add("(min-width: 1200px)", () => {

              let splits = [];

              // ===== tz-sub-tilte =====
              $('.tz-sub-tilte').each(function (index, el) {

              let split = new SplitText(el, {
                  type: "lines,words,chars",
                  linesClass: "split-line"
              });

              splits.push(split);

              gsap.set(split.chars, {
                  opacity: 0,
                  x: 7
              });

              gsap.to(split.chars, {
                  scrollTrigger: {
                  trigger: el,
                  start: "top 90%",
                  end: "top 60%",
                  scrub: 1
                  },
                  x: 0,
                  opacity: 1,
                  duration: 0.7,
                  stagger: 0.2
              });
              });

              // ===== tz-itm-title =====
              $('.tz-itm-title').each(function (index, el) {

              let split = new SplitText(el, {
                  type: "lines,words,chars",
                  linesClass: "split-line"
              });

              splits.push(split);

              gsap.set(split.chars, {
                  opacity: 0.3,
                  x: -7
              });

              gsap.to(split.chars, {
                  scrollTrigger: {
                  trigger: el,
                  start: "top 92%",
                  end: "top 60%",
                  scrub: 1
                  },
                  x: 0,
                  opacity: 1,
                  duration: 0.7,
                  stagger: 0.2
              });
              });

              // Ã°Å¸â€Â¥ MOST IMPORTANT PART
              ScrollTrigger.refresh();

              // Ã°Å¸â€Â¥ cleanup on breakpoint change
              return () => {
              splits.forEach(split => split.revert());
              ScrollTrigger.getAll().forEach(st => st.kill());
              };

          });
    }

     /* ================================
       Approach Anim Js Start
    ================================ */

   if (document.querySelectorAll(".approach-area").length > 0) {

    const mm = gsap.matchMedia();

		mm.add("(min-width: 1199px)", () => {

			// Right to Left (existing)
			const boxesRight = document.querySelectorAll(".approach-area .approach-box");

			gsap.from(boxesRight, {
				x: "100%",
				duration: 1,
				stagger: 0.3,
				ease: "power2.out",
				scrollTrigger: {
					trigger: ".approach-wrapper-box",
					start: "top 100%",
					end: "bottom 40%",
					scrub: 2,
					toggleActions: "play none none reverse",
				},
			});

			// Left to Right (new)
			const boxesLeft = document.querySelectorAll(".approach-area .approach-box2");

			gsap.from(boxesLeft, {
				x: "-100%",
				duration: 1,
				stagger: 0.3,
				ease: "power2.out",
				scrollTrigger: {
					trigger: ".approach-wrapper-box",
					start: "top 100%",
					end: "bottom 40%",
					scrub: 2,
					toggleActions: "play none none reverse",
				},
			});

		});
	}

    /* ================================
    Scale Up Image Js Start
    ================================ */

    if (typeof ScrollTrigger !== "undefined") {

    ScrollTrigger.matchMedia({

        // âœ… XL and up â†’ animation ON
        "(min-width: 1200px)": function () {

        document.querySelectorAll(".scale-up-img").forEach((section) => {

            const img = section.querySelector(".scale-up");

            let tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom center",
                scrub: 1
            }
            });

            tl.to(img, {
            scale: 1.15,
            ease: "none"
            });

        });

        },

        
        "(max-width: 1199px)": function () {

        // kill all related ScrollTriggers
        ScrollTrigger.getAll().forEach((st) => {
            if (st.trigger && st.trigger.classList.contains("scale-up-img")) {
            st.kill();
            }
        });

        // reset scale
        document.querySelectorAll(".scale-up-img .scale-up").forEach((img) => {
            gsap.set(img, { scale: 1 });
        });

        }

    });

    }

    /* ================================
       Des Portfolio Anim Js Start
    ================================ */
    
    if (document.querySelector(".des-portfolio-wrap")) {
        const pr = ScrollTrigger.matchMedia();

        pr.add("(min-width: 1199px)", () => {

            const sections = document.querySelectorAll(".des-portfolio-panel");
            const wrap = document.querySelector(".des-portfolio-wrap");

            if (!sections.length || !wrap) return;

            // Initial state
            gsap.set(sections, { scale: 1 });

            // Animate each section except the last one
            sections.forEach((section, index) => {
                const isLast = index === sections.length - 1;

                gsap.to(section, {
                    scale: isLast ? 1 : 0.8, 
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 14%",
                        end: "bottom 90%",
                        scrub: true,
                        pin: true,
                        pinSpacing: false,
                        endTrigger: wrap,
                        markers: false,
                    },
                });
            });

            // Cleanup on condition change
            return () => {
                ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            };
        });
    }

    /* ================================
       Service Panel Js Start
    ================================ */

    window.initProjectServicePanelPins = function () {
        if (window.__projectServicePanelPins && window.__projectServicePanelPins.revert) {
            window.__projectServicePanelPins.revert();
            window.__projectServicePanelPins = null;
        }

        if (typeof ScrollTrigger !== "undefined" && typeof ScrollTrigger.refresh === "function") {
            ScrollTrigger.refresh();
        }
    };

    window.initProjectServicePanelPins();

     /* ================================
    Animate Circle Js Start
    ================================ */

    if ($('.bz-gsap-animate-circle').length) {
    gsap.utils.toArray('.bz-gsap-animate-circle').forEach((el) => {

        // Accessibility: reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set(el, { rotate: 0 });
        return;
        }

        gsap.timeline({
        scrollTrigger: {
            trigger: el,
            scrub: 1,
            start: "top 80%",
            end: "top 20%",
            markers: false
        }
        })
        .set(el, { transformOrigin: "50% 50%" })
        .fromTo(
        el,
        { rotate: 0 },
        { rotate: 180, ease: "none" }
        );
    });
    }

     /* ================================
       Design Process Storyboard Js Start
    ================================ */

    const designProcessSection = document.querySelector("#design-process");
    if (designProcessSection && designProcessSection.querySelector(".design-process-scene") && !window.__designProcessStoryboardController) {
        window.__designProcessStoryboardController = true;
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const processScenes = Array.from(designProcessSection.querySelectorAll(".design-process-scene"));
        const processPaper = designProcessSection.querySelector(".design-process-paper");
        const processGuides = designProcessSection.querySelector(".design-process-guides");
        const processImages = Array.from(designProcessSection.querySelectorAll("img"));
        const processDuration = 4.5;
        const sceneMap = [
            { selector: ".process-scene-01", start: 0, end: 1, fade: 0.16 },
            { selector: ".process-scene-02", start: 1, end: 1.7, fade: 0.14 },
            { selector: ".process-scene-03", start: 1.7, end: 2.5, fade: 0.16 },
            { selector: ".process-scene-04", start: 2.5, end: 3.2, fade: 0.15 },
            { selector: ".process-scene-05", start: 3.2, end: 3.9, fade: 0.15 },
            { selector: ".process-scene-06", start: 3.9, end: 4.5, fade: 0.15 }
        ];

        function clamp(value, min, max) {
            return Math.min(Math.max(value, min), max);
        }

        function progressBetween(value, start, end) {
            if (end === start) {
                return value >= end ? 1 : 0;
            }
            return clamp((value - start) / (end - start), 0, 1);
        }

        function easeSoft(value) {
            return value * value * (3 - 2 * value);
        }

        function lerp(from, to, progress) {
            return from + (to - from) * progress;
        }

        function sceneOpacity(time, start, end, fade) {
            if (time < start || time > end) {
                return 0;
            }
            const fadeIn = start === 0 ? 1 : progressBetween(time, start, start + fade);
            const fadeOut = end === processDuration ? 1 : 1 - progressBetween(time, end - fade, end);
            return clamp(Math.min(fadeIn, fadeOut), 0, 1);
        }

        function setVisual(element, options) {
            if (!element) {
                return;
            }

            const opacity = options.opacity === undefined ? 1 : clamp(options.opacity, 0, 1);
            const x = options.x || 0;
            const y = options.y || 0;
            const rotation = options.rotation || 0;
            const scale = options.scale === undefined ? 1 : options.scale;

            element.style.opacity = opacity.toFixed(3);
            element.style.visibility = opacity > 0.015 ? "visible" : "hidden";
            element.style.transform = "translate3d(" + x.toFixed(2) + "px, " + y.toFixed(2) + "px, 0) rotate(" + rotation.toFixed(3) + "deg) scale(" + scale.toFixed(4) + ")";
        }

        function setEach(selector, options) {
            designProcessSection.querySelectorAll(selector).forEach(function (element) {
                setVisual(element, options);
            });
        }

        function layerOpacity(time, start, end, maxOpacity) {
            return maxOpacity * progressBetween(time, start, start + 0.22) * (1 - progressBetween(time, end - 0.22, end));
        }

        function renderProcessStory() {
            const rect = designProcessSection.getBoundingClientRect();
            const scrollDistance = Math.max(1, rect.height - window.innerHeight);
            const rawProgress = clamp(-rect.top / scrollDistance, 0, 1);
            const time = rawProgress * processDuration;

            if (processPaper) {
                processPaper.style.opacity = (0.95 * progressBetween(time, 0, 0.42)).toFixed(3);
            }

            if (processGuides) {
                const guideOpacity = clamp(
                    layerOpacity(time, 1.58, 2.74, 0.34) +
                    layerOpacity(time, 2.86, 3.42, 0.18) +
                    layerOpacity(time, 3.82, 4.48, 0.3),
                    0,
                    0.34
                );
                processGuides.style.opacity = guideOpacity.toFixed(3);
            }

            sceneMap.forEach(function (scene) {
                const element = designProcessSection.querySelector(scene.selector);
                if (element) {
                    const opacity = sceneOpacity(time, scene.start, scene.end, scene.fade);
                    element.style.opacity = opacity.toFixed(3);
                    element.style.visibility = opacity > 0.015 ? "visible" : "hidden";
                }
            });

            const p1 = easeSoft(progressBetween(time, 0, 1));
            const p1In = progressBetween(time, 0.05, 0.42);
            const p1Out = progressBetween(time, 0.72, 1);
            setEach(".process-scene-01 .process-eyebrow", {
                opacity: p1In * (1 - p1Out * 0.82),
                y: lerp(18, -52, p1)
            });
            setEach(".process-title-beginning", {
                opacity: progressBetween(time, 0.1, 0.5) * (1 - p1Out * 0.82),
                y: lerp(46, -82, p1)
            });
            setEach(".process-sketch-corner", {
                opacity: 0.2 * progressBetween(time, 0.2, 0.64) * (1 - p1Out * 0.55),
                x: lerp(0, 10, p1),
                y: lerp(0, -18, p1),
                rotation: lerp(0, 1.2, p1),
                scale: lerp(1, 1.01, p1)
            });

            const p2 = easeSoft(progressBetween(time, 1, 1.7));
            const p2Out = progressBetween(time, 1.52, 1.7);
            setEach(".process-sketch-first-a", {
                opacity: 0.42 * progressBetween(time, 1.02, 1.24) * (1 - p2Out),
                x: lerp(0, -8, p2),
                y: lerp(24, -10, p2),
                rotation: lerp(-1.1, -0.5, p2),
                scale: lerp(0.99, 1.02, p2)
            });
            setEach(".process-sketch-first-b", {
                opacity: 0.38 * progressBetween(time, 1.04, 1.26) * (1 - p2Out),
                x: lerp(0, 14, p2),
                y: lerp(-18, 15, p2),
                rotation: lerp(1.4, 0.7, p2),
                scale: lerp(0.99, 1.015, p2)
            });
            setEach(".process-statement-imperfect", {
                opacity: progressBetween(time, 1.12, 1.38) * (1 - p2Out * 0.84),
                y: lerp(42, -86, p2)
            });

            const p3 = easeSoft(progressBetween(time, 1.7, 2.5));
            const p3Out = progressBetween(time, 2.28, 2.5);
            setEach(".process-sketch-desk-a", {
                opacity: 0.5 * progressBetween(time, 1.7, 1.95) * (1 - p3Out),
                x: lerp(-18, -40, p3),
                y: lerp(42, -28, p3),
                rotation: lerp(-1.7, -0.6, p3),
                scale: lerp(0.99, 1.03, p3)
            });
            setEach(".process-sketch-desk-b", {
                opacity: 0.4 * progressBetween(time, 1.74, 1.98) * (1 - p3Out),
                x: lerp(22, 40, p3),
                y: lerp(-16, -42, p3),
                rotation: lerp(1.3, 0.3, p3),
                scale: lerp(0.99, 1.025, p3)
            });
            setEach(".process-sketch-desk-c", {
                opacity: 0.46 * progressBetween(time, 1.8, 2.02) * (1 - p3Out),
                x: lerp(-10, 16, p3),
                y: lerp(38, 24, p3),
                rotation: lerp(-0.8, -1.7, p3),
                scale: lerp(0.99, 1.03, p3)
            });
            setEach(".process-sketch-desk-d", {
                opacity: 0.36 * progressBetween(time, 1.86, 2.08) * (1 - p3Out),
                x: lerp(18, 4, p3),
                y: lerp(30, -14, p3),
                rotation: lerp(1.8, 1.1, p3),
                scale: lerp(0.99, 1.02, p3)
            });
            setEach(".annotation-01", {
                opacity: 0.82 * progressBetween(time, 1.92, 2.12) * (1 - p3Out),
                y: lerp(18, -22, p3)
            });
            setEach(".annotation-02", {
                opacity: 0.82 * progressBetween(time, 1.96, 2.16) * (1 - p3Out),
                y: lerp(18, -22, p3)
            });
            setEach(".annotation-03", {
                opacity: 0.82 * progressBetween(time, 2, 2.2) * (1 - p3Out),
                y: lerp(18, -22, p3)
            });
            setEach(".coordinate-01", {
                opacity: 0.72 * progressBetween(time, 2.04, 2.22) * (1 - p3Out),
                y: lerp(18, -22, p3)
            });

            const p4 = easeSoft(progressBetween(time, 2.5, 3.2));
            const p4Out = progressBetween(time, 2.98, 3.2);
            setEach(".process-sketch-philosophy", {
                opacity: 0.16 * progressBetween(time, 2.5, 2.78) * (1 - p4Out * 0.65),
                x: lerp(22, 42, p4),
                y: lerp(32, -20, p4),
                rotation: lerp(0.9, 1.7, p4),
                scale: lerp(0.99, 1.02, p4)
            });
            setEach(".process-title-philosophy", {
                opacity: progressBetween(time, 2.55, 2.86) * (1 - p4Out * 0.82),
                y: lerp(56, -92, p4)
            });

            const p5 = easeSoft(progressBetween(time, 3.2, 3.9));
            const p5Out = progressBetween(time, 3.68, 3.9);
            setEach(".process-sketch-detail", {
                opacity: 0.58 * progressBetween(time, 3.2, 3.44) * (1 - p5Out * 0.72),
                x: lerp(-12, -30, p5),
                y: lerp(36, -24, p5),
                rotation: lerp(-0.6, -1.4, p5),
                scale: lerp(0.99, 1.03, p5)
            });
            setEach(".process-caption-detail", {
                opacity: 0.74 * progressBetween(time, 3.32, 3.52) * (1 - p5Out * 0.76),
                y: lerp(24, -18, p5)
            });

            const p6 = easeSoft(progressBetween(time, 3.9, 4.5));
            setEach(".process-sketch-final-a", {
                opacity: 0.44 * progressBetween(time, 3.9, 4.14),
                x: lerp(-18, -28, p6),
                y: lerp(26, -12, p6),
                rotation: lerp(1.2, 0.3, p6),
                scale: lerp(0.99, 1.025, p6)
            });
            setEach(".process-sketch-final-b", {
                opacity: 0.38 * progressBetween(time, 3.96, 4.18),
                x: lerp(24, 36, p6),
                y: lerp(30, -18, p6),
                rotation: lerp(-1.5, -0.6, p6),
                scale: lerp(0.99, 1.02, p6)
            });
            setEach(".process-sketch-final-c", {
                opacity: 0.32 * progressBetween(time, 4.02, 4.24),
                x: lerp(-14, -34, p6),
                y: lerp(24, 12, p6),
                rotation: lerp(0.7, 1.6, p6),
                scale: lerp(0.99, 1.03, p6)
            });
            setEach(".process-title-final", {
                opacity: progressBetween(time, 4.05, 4.28),
                y: lerp(52, -36, p6)
            });
            setEach(".process-caption-final", {
                opacity: 0.78 * progressBetween(time, 4.16, 4.36),
                y: lerp(24, -14, p6)
            });
        }

        if (prefersReducedMotion) {
            processScenes.forEach(function (scene, index) {
                scene.style.opacity = index === 0 ? "1" : "0";
                scene.style.visibility = index === 0 ? "visible" : "hidden";
            });
            if (processPaper) {
                processPaper.style.opacity = "1";
            }
            if (processGuides) {
                processGuides.style.opacity = "0.18";
            }
        } else {
            let processRaf = null;
            let settleFrames = 0;

            function processTick() {
                processRaf = null;
                renderProcessStory();
                if (settleFrames > 0) {
                    settleFrames -= 1;
                    processRaf = requestAnimationFrame(processTick);
                }
            }

            function queueProcessRender(frames) {
                settleFrames = Math.max(settleFrames, frames || 1);
                if (!processRaf) {
                    processRaf = requestAnimationFrame(processTick);
                }
            }

            processImages.forEach(function (image) {
                if (!image.complete) {
                    image.addEventListener("load", function () {
                        queueProcessRender(30);
                    }, { once: true });
                    image.addEventListener("error", function () {
                        queueProcessRender(30);
                    }, { once: true });
                }
            });

            window.addEventListener("scroll", function () {
                queueProcessRender(24);
            }, { passive: true });
            window.addEventListener("resize", function () {
                queueProcessRender(40);
            });
            window.addEventListener("load", function () {
                queueProcessRender(60);
            });
            queueProcessRender(60);
        }
    }
  
     /* ================================
       Funfact Panel Js Start
    ================================ */

    if ($('.tp-funfact-panel-wrap').length) {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 1200px)", () => {
            let sections = gsap.utils.toArray(".tp-funfact-panel");

            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    start: "top 120px",
                    trigger: ".tp-funfact-panel-wrap",
                    pin: true,
                    scrub: 1,
                    end: () => "+=" + document.querySelector(".tp-funfact-panel-wrap").offsetWidth
                }
            });
        });
    }


  
    }); // End Document Ready Function

    
   /* ================================
       Preloader Js Start
    ================================ */

    let preloaderFinished = false;

    function initAnimations() {
        if (typeof wowController === "function") {
            wowController();
        }
        if (typeof gsapController === "function") {
            gsapController();
        }
    }

    function finishPreloader() {
        if (preloaderFinished) {
            return;
        }

        preloaderFinished = true;
        const Preloader = $(".preloader");

        if (Preloader.length) {
            Preloader.removeClass("is-loading").addClass("is-loaded");

            setTimeout(function () {
                Preloader.fadeOut(300);
                initAnimations();
            }, 250);
        } else {
            initAnimations();
        }
    }

    $windowOn.on("load", function () {
        setTimeout(finishPreloader, 650);
    });

    setTimeout(finishPreloader, 1800);
  })(jQuery); // End jQuery
