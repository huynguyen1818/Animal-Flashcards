/* -------------------------------- */
/* Sidebar*/
const headerEle = document.querySelector(".header");
const sidebarEle = document.querySelector(".sidebar");
const changeSize = document.querySelector(".sidebar__change-size-btn");

let headerHeight = headerEle.offsetHeight + "px";
sidebarEle.style.height = `calc(100vh - ${headerHeight})`;
changeSize.onclick = function () {
    let iconEle = changeSize.getElementsByTagName("i")[0];
    if (iconEle.classList.contains("fa-arrow-left-long")) {
        sidebarEle.classList.remove("full-sidebar");
        iconEle.className = "fa-solid fa-arrow-right-long";
    }
    else {
      sidebarEle.classList.add("full-sidebar");
      iconEle.className = "fa-solid fa-arrow-left-long";
    }
    // console.log(iconEle);
};
showTheme(theme);
