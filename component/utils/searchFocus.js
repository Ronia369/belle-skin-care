export function handleFocus(inputRef) {
  inputRef.current.classList.add("ring-2", "ring-[#74ea15]");
}

export function handleBlur(inputRef) {
  inputRef.current.classList.remove("ring-2", "ring-[#74ea15]");
}
