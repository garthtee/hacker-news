const openUrl = (url: string) =>
  window.open(url, "_blank", "noopener noreferrer")?.focus();

export {openUrl};
