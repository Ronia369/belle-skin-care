export function hoverEffect(event) {
  event.currentTarget.classList.add("scale-105");
}

export function leaveEffect(event) {
  event.currentTarget.classList.remove("scale-105");
}
