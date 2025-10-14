export function initHeaderScroll(setIsScrolled) {
  function handleScroll() {
    setIsScrolled(window.scrollY > 50);
  }
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}
