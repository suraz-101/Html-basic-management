const removeClass = () => {
  const showMoreButton = document.getElementById("showmore");
  const scroolbar = document.getElementById("scrollbar");

  scroolbar.classList.remove("flex-nowrap");
  showMoreButton.innerText = "";
};
