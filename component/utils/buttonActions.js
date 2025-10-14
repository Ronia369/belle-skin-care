export function handleRequest(title) {
  alert(`شما روی "${title}" کلیک کردید. درخواست شما ثبت شد!`);
}

export function handleAppointment() {
  alert("وقت شما با موفقیت ثبت شد!");
}

export function handleViewServices() {
  window.location.href = "/services"; // یا مسیر مناسب
}
