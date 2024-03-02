const removeClass = () => {
  const showMoreButton = document.getElementById("showmore");
  const scroolbar = document.getElementById("scrollbar");

  scroolbar.classList.remove("flex-nowrap");
  showMoreButton.innerText = "";
};

const changePagination = (index) => {
  const pages = document.getElementsByClassName("pages");
  pages[0].removeClass("current");
  pages[index].classList.add("current");
};
