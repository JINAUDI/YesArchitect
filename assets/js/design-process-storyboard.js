(function () {
    "use strict";

    if (window.__designProcessReferenceController) {
        return;
    }

    window.__designProcessReferenceController = true;

    function initDesignProcessReference() {
        const section = document.querySelector("#design-process.sketch-reference-section");

        if (!section) {
            return;
        }

        const panels = Array.from(section.querySelectorAll("[data-sketch-panel]"));
        const copyBlocks = Array.from(section.querySelectorAll("[data-sketch-copy]"));
        const images = Array.from(section.querySelectorAll("[data-sketch-image]"));
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (!panels.length || !images.length) {
            return;
        }

        if (reduceMotion || !window.gsap || !window.ScrollTrigger) {
            section.classList.add("is-ready");
            return;
        }

        const gsap = window.gsap;
        const ScrollTrigger = window.ScrollTrigger;

        gsap.registerPlugin(ScrollTrigger);
        section.classList.add("is-enhanced");

        copyBlocks.forEach(function (block, index) {
            gsap.fromTo(
                block,
                {
                    autoAlpha: 0,
                    y: index === 0 ? 46 : 30
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: block,
                        start: "top 88%",
                        once: true
                    }
                }
            );
        });

        images.forEach(function (figure, index) {
            const drift = parseFloat(figure.getAttribute("data-drift") || "1");
            const direction = index % 2 === 0 ? 1 : -1;
            const image = figure.querySelector("img");

            gsap.fromTo(
                figure,
                {
                    autoAlpha: 0,
                    y: 72,
                    rotate: direction * 0.75
                },
                {
                    autoAlpha: 1,
                    y: 0,
                    rotate: direction * 0.12,
                    duration: 1.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: figure,
                        start: "top 90%",
                        once: true
                    }
                }
            );

            gsap.to(figure, {
                yPercent: -7 * drift,
                ease: "none",
                scrollTrigger: {
                    trigger: figure,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });

            if (image) {
                gsap.fromTo(
                    image,
                    {
                        scale: 1.035
                    },
                    {
                        scale: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: figure,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1
                        }
                    }
                );
            }
        });

        window.addEventListener("load", function () {
            ScrollTrigger.refresh();
        }, { once: true });

        ScrollTrigger.refresh();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initDesignProcessReference, { once: true });
    } else {
        initDesignProcessReference();
    }
})();
