export const isOverlayClickedHandler = (element, callback) => {
  const isOverlayClicked = element.classList.contains("overlay");
  if (isOverlayClicked) {
    //     this.$emit("close-menu");
    callback();
  }
};
