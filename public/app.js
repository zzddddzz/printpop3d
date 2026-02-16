(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const revealEls = Array.from(document.querySelectorAll("[data-reveal]"));
  if (revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 }
    );

    for (const el of revealEls) io.observe(el);
  }

  document.addEventListener("click", async (evt) => {
    const btn = evt.target.closest("[data-copy]");
    if (!btn) return;

    const value = btn.getAttribute("data-copy") || "";
    if (!value) return;

    const prev = btn.textContent;

    try {
      await navigator.clipboard.writeText(value);
      btn.textContent = "Copied";
    } catch {
      btn.textContent = "Copy failed";
    }

    setTimeout(() => {
      btn.textContent = prev;
    }, 1100);
  });
})();