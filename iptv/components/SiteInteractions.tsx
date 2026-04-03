"use client";

import { useEffect } from "react";

export default function SiteInteractions() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    const stickyCleanup = initStickyHeader();
    if (stickyCleanup) cleanups.push(stickyCleanup);

    const mobileCleanup = initMobileMenu();
    if (mobileCleanup) cleanups.push(mobileCleanup);

    const smoothCleanup = initSmoothScroll();
    if (smoothCleanup) cleanups.push(smoothCleanup);

    const pricingCleanup = initPricingToggle();
    if (pricingCleanup) cleanups.push(pricingCleanup);

    const sliderCleanup = initTestimonialsSlider();
    if (sliderCleanup) cleanups.push(sliderCleanup);

    const faqCleanup = initFaqAccordion();
    if (faqCleanup) cleanups.push(faqCleanup);

    const scrollTopCleanup = initScrollToTop();
    if (scrollTopCleanup) cleanups.push(scrollTopCleanup);

    const scrollAnimationsCleanup = initScrollAnimations();
    if (scrollAnimationsCleanup) cleanups.push(scrollAnimationsCleanup);

    const navCleanup = initActiveNavHighlight();
    if (navCleanup) cleanups.push(navCleanup);

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}

function initStickyHeader() {
  const header = document.getElementById("site-header");
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  return () => {
    window.removeEventListener("scroll", onScroll);
  };
}

function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle") as HTMLButtonElement | null;
  const overlay = document.getElementById("mobile-overlay");
  const menu = document.getElementById("mobile-menu");
  const closeBtn = document.getElementById("mobile-close");

  if (!toggle || !menu) return;

  const openMenu = () => {
    toggle.classList.add("active");
    toggle.setAttribute("aria-expanded", "true");
    menu.classList.add("active");
    if (overlay) overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    toggle.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
    menu.classList.remove("active");
    if (overlay) overlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  const toggleMenu = () => {
    if (menu.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const onKeyUp = (event: KeyboardEvent) => {
    if (event.key === "Escape" && menu.classList.contains("active")) {
      closeMenu();
    }
  };

  toggle.addEventListener("click", toggleMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (overlay) overlay.addEventListener("click", closeMenu);

  const mobileLinks = menu.querySelectorAll<HTMLAnchorElement>("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keyup", onKeyUp);

  return () => {
    toggle.removeEventListener("click", toggleMenu);
    if (closeBtn) closeBtn.removeEventListener("click", closeMenu);
    if (overlay) overlay.removeEventListener("click", closeMenu);
    mobileLinks.forEach((link) => {
      link.removeEventListener("click", closeMenu);
    });
    document.removeEventListener("keyup", onKeyUp);
  };
}

function initSmoothScroll() {
  const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

  const handlers: Array<{ el: HTMLAnchorElement; handler: (event: MouseEvent) => void }> = [];

  anchors.forEach((anchor) => {
    const onClick = (event: MouseEvent) => {
      const targetId = anchor.getAttribute("href") || "";
      if (targetId.length <= 1) return;

      const target = document.querySelector<HTMLElement>(targetId);
      if (target) {
        event.preventDefault();
        const header = document.getElementById("site-header");
        const headerHeight = header ? header.offsetHeight : 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };

    anchor.addEventListener("click", onClick);
    handlers.push({ el: anchor, handler: onClick });
  });

  return () => {
    handlers.forEach(({ el, handler }) => {
      el.removeEventListener("click", handler);
    });
  };
}

function initPricingToggle() {
  const buttons = document.querySelectorAll<HTMLButtonElement>(
    ".connection-toggle .toggle-btn"
  );
  const amounts = document.querySelectorAll<HTMLElement>(".plan-price .amount");
  const pasts = document.querySelectorAll<HTMLElement>(".plan-price .past-amount");
  const links = document.querySelectorAll<HTMLAnchorElement>(".plan-btn");
  const titles = document.querySelectorAll<HTMLElement>(".plan-title");

  if (!buttons.length) return;

  const setActive = (activeButton: HTMLButtonElement) => {
    buttons.forEach((button) => {
      button.classList.toggle("active", button === activeButton);
    });
  };

  const setConnectionsMode = (conn: 1 | 2) => {
    titles.forEach((title) => {
      const base = title.dataset.baseText || "";
      title.textContent = conn === 1 ? base : `${conn} \u00D7 ${base}`;
    });

    amounts.forEach((amount) => {
      const key = conn === 1 ? "price1" : "price2";
      const value = amount.dataset[key];
      if (value) amount.textContent = Number.parseFloat(value).toFixed(2);
    });

    pasts.forEach((past) => {
      const key = conn === 1 ? "past1" : "past2";
      const value = past.dataset[key];
      if (value) past.textContent = Number.parseFloat(value).toFixed(2);
    });

    links.forEach((link) => {
      const key = conn === 1 ? "href1" : "href2";
      const value = link.dataset[key];
      if (value) link.href = value;
    });
  };

  const handlers: Array<{ el: HTMLButtonElement; handler: () => void }> = [];

  buttons.forEach((button) => {
    const handler = () => {
      setActive(button);
      const conn: 1 | 2 = button.id === "toggle-1" ? 1 : 2;
      setConnectionsMode(conn);
    };

    button.addEventListener("click", handler);
    handlers.push({ el: button, handler });
  });

  return () => {
    handlers.forEach(({ el, handler }) => {
      el.removeEventListener("click", handler);
    });
  };
}

function initTestimonialsSlider() {
  const track = document.getElementById("testimonials-track");
  const dotsContainer = document.getElementById("slider-dots");

  if (!track || !dotsContainer) return;

  const trackElement = track;
  const dotsContainerElement = dotsContainer;

  const cards = trackElement.querySelectorAll<HTMLElement>(".testimonial-card");
  if (!cards.length) return;

  let currentIndex = 0;
  let slidesPerView = getSlidesPerView();
  const totalSlides = cards.length;
  let maxIndex = Math.max(0, totalSlides - slidesPerView);
  let autoplayInterval: number | undefined;
  let isDragging = false;
  let startX = 0;
  let resizeTimer: number | undefined;

  function getSlidesPerView() {
    const width = window.innerWidth;
    if (width <= 767) return 1;
    if (width <= 1024) return 2;
    return 4;
  }

  function getSlideWidth() {
    if (!cards[0]) return 290;
    const gap = Number.parseFloat(window.getComputedStyle(trackElement).gap || "24") || 24;
    return cards[0].offsetWidth + gap;
  }

  const goToSlide = (index: number) => {
    currentIndex = Math.max(0, Math.min(index, maxIndex));
    const offset = currentIndex * getSlideWidth();
    trackElement.style.transform = `translateX(-${offset}px)`;
    updateDots();
  };

  const nextSlide = () => {
    if (currentIndex >= maxIndex) {
      goToSlide(0);
    } else {
      goToSlide(currentIndex + 1);
    }
  };

  const stopAutoplay = () => {
    if (autoplayInterval) {
      window.clearInterval(autoplayInterval);
      autoplayInterval = undefined;
    }
  };

  const startAutoplay = () => {
    stopAutoplay();
    autoplayInterval = window.setInterval(nextSlide, 4000);
  };

  const updateDots = () => {
    const dots = dotsContainerElement.querySelectorAll<HTMLElement>(".slider-dot");
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  };

  const buildDots = () => {
    dotsContainerElement.innerHTML = "";
    const dotCount = maxIndex + 1;

    for (let index = 0; index < dotCount; index += 1) {
      const dot = document.createElement("span");
      dot.className = `slider-dot${index === 0 ? " active" : ""}`;
      dot.dataset.index = String(index);
      dot.addEventListener("click", () => {
        goToSlide(index);
      });
      dotsContainerElement.appendChild(dot);
    }
  };

  const onMouseDown = (event: MouseEvent) => {
    isDragging = true;
    startX = event.pageX;
    stopAutoplay();
  };

  const onTouchStart = (event: TouchEvent) => {
    isDragging = true;
    startX = event.touches[0]?.pageX ?? 0;
    stopAutoplay();
  };

  const endDrag = (event: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    isDragging = false;

    let endX = startX;

    if ("changedTouches" in event) {
      endX = event.changedTouches?.[0]?.pageX ?? startX;
    } else {
      endX = event.pageX;
    }

    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToSlide(currentIndex + 1);
      } else {
        goToSlide(currentIndex - 1);
      }
    }

    startAutoplay();
  };

  const onResize = () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      slidesPerView = getSlidesPerView();
      maxIndex = Math.max(0, totalSlides - slidesPerView);
      buildDots();
      goToSlide(Math.min(currentIndex, maxIndex));
    }, 200);
  };

  buildDots();
  goToSlide(0);
  startAutoplay();

  trackElement.addEventListener("mousedown", onMouseDown);
  trackElement.addEventListener("touchstart", onTouchStart, { passive: true });
  document.addEventListener("mouseup", endDrag);
  document.addEventListener("touchend", endDrag);
  window.addEventListener("resize", onResize);
  trackElement.addEventListener("mouseenter", stopAutoplay);
  trackElement.addEventListener("mouseleave", startAutoplay);

  return () => {
    stopAutoplay();
    window.clearTimeout(resizeTimer);
    trackElement.removeEventListener("mousedown", onMouseDown);
    trackElement.removeEventListener("touchstart", onTouchStart);
    document.removeEventListener("mouseup", endDrag);
    document.removeEventListener("touchend", endDrag);
    window.removeEventListener("resize", onResize);
    trackElement.removeEventListener("mouseenter", stopAutoplay);
    trackElement.removeEventListener("mouseleave", startAutoplay);
  };
}

function initFaqAccordion() {
  const questions = document.querySelectorAll<HTMLButtonElement>(".faq-question");
  if (!questions.length) return;

  const handlers: Array<{ el: HTMLButtonElement; handler: () => void }> = [];

  questions.forEach((question) => {
    const onClick = () => {
      const answer = question.nextElementSibling;
      if (!(answer instanceof HTMLElement)) return;

      const isOpen = answer.classList.contains("open");

      document.querySelectorAll<HTMLElement>(".faq-answer").forEach((item) => {
        item.classList.remove("open");
      });

      document.querySelectorAll<HTMLElement>(".faq-question").forEach((item) => {
        item.setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        answer.classList.add("open");
        question.setAttribute("aria-expanded", "true");
      }
    };

    question.addEventListener("click", onClick);
    handlers.push({ el: question, handler: onClick });
  });

  return () => {
    handlers.forEach(({ el, handler }) => {
      el.removeEventListener("click", handler);
    });
  };
}

function initScrollToTop() {
  const button = document.getElementById("scroll-to-top") as HTMLAnchorElement | null;
  if (!button) return;

  const onScroll = () => {
    if (window.scrollY > 400) {
      button.classList.add("visible");
    } else {
      button.classList.remove("visible");
    }
  };

  const onClick = (event: MouseEvent) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  button.addEventListener("click", onClick);

  return () => {
    window.removeEventListener("scroll", onScroll);
    button.removeEventListener("click", onClick);
  };
}

function initScrollAnimations() {
  const elements = document.querySelectorAll<HTMLElement>(
    ".feature-card, .plan-card, .testimonial-card, .seo-content h2, .seo-content h3"
  );

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => {
      element.classList.add("fade-in", "visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in", "visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -60px 0px",
      threshold: 0.1,
    }
  );

  elements.forEach((element) => {
    element.classList.add("fade-in");
    observer.observe(element);
  });

  return () => {
    observer.disconnect();
  };
}

function initActiveNavHighlight() {
  const sections = document.querySelectorAll<HTMLElement>("section[id]");
  const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-link");

  if (!sections.length || !navLinks.length) return;

  const highlightNav = () => {
    const scrollY = window.scrollY;
    const headerOffset = 120;

    sections.forEach((section) => {
      const top = section.offsetTop - headerOffset;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (id && scrollY >= top && scrollY < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });

    if (scrollY < 300) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      const homeLink = document.querySelector<HTMLAnchorElement>('.nav-link[href="#"]');
      if (homeLink) homeLink.classList.add("active");
    }
  };

  window.addEventListener("scroll", highlightNav, { passive: true });

  return () => {
    window.removeEventListener("scroll", highlightNav);
  };
}
