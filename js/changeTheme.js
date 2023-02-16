const changeThemeBtnEle = document.querySelector(".theme__bar");
const titleEle = document.querySelector(".title");
const bodyEle = document.getElementsByTagName("body")[0];
const littleIconsEle = document.querySelectorAll(".icon");
const fontBtnEle = document.querySelectorAll(".fontBtn");
const themeBar = document.querySelector('.theme__bar');
const themeBall = document.querySelector('.theme__bar .ball');
var theme = localStorage.getItem('last-theme') ? JSON.parse(localStorage.getItem('last-theme')) : 1;

// Show Theme
function showTheme(theme) {
    if (theme === 2) {
        titleEle.innerHTML = `<img src="https://see.fontimg.com/api/renderfont4/0WaJo/eyJyIjoiZnMiLCJoIjo3NSwidyI6MTI1MCwiZnMiOjYwLCJmZ2MiOiIjMjAzQzg0IiwiYmdjIjoiI0VBRTBFOCIsInQiOjF9/QU5JTUFMUw/paint-drops-regular.png" alt="title">`;
        bodyEle.style =
            "background-image: url('https://static.vecteezy.com/system/resources/previews/000/273/915/non_2x/ocean-background-vector.jpg')";
        littleIconsEle.forEach((icon) => {
            icon.style.backgroundColor = "rgb(177, 208, 241)";
        });
        fontBtnEle.forEach((btn) => {
            btn.classList.remove("btn-success");
            btn.classList.add("btn-primary");
        });
        themeBar.setAttribute('style', 'background-color: #40E0D0');
        themeBall.setAttribute('style', 'transform: translateX(34px)');
        sidebarEle.classList.add("sidebar-sea");
        if (sidebarEle.classList.contains('sidebar-mountain'))
            sidebarEle.classList.remove("sidebar-mountain")
    } else {
        titleEle.innerHTML = `<img src="https://see.fontimg.com/api/renderfont4/d9VDV/eyJyIjoiZnMiLCJoIjo2NCwidyI6MTI1MCwiZnMiOjUxLCJmZ2MiOiIjNTlDRDFBIiwiYmdjIjoiI0VBRTBFOCIsInQiOjF9/QW5pbWFscw/palmsprings-personal-use-regular.png" alt="title">`;
        bodyEle.style.backgroundImage = `url("https://wallpaperaccess.com/full/3665287.jpg")`;
        littleIconsEle.forEach((icon) => {
            icon.style.backgroundColor = "rgb(207, 233, 183)";
        });
        fontBtnEle.forEach((btn) => {
            btn.classList.remove("btn-primary");
            btn.classList.add("btn-success");
        });
        themeBar.setAttribute('style', '');
        themeBall.setAttribute('style', '');
        sidebarEle.classList.add("sidebar-mountain");
        if (sidebarEle.classList.contains('sidebar-sea'))
            sidebarEle.classList.remove("sidebar-sea")
    }
    setTimeout(() => {
        headerHeight = headerEle.offsetHeight + "px";
        sidebarEle.style.height = `calc(100vh - ${headerHeight})`;
    }, 100);
}

changeThemeBtnEle.addEventListener("click", () => {
    theme = theme === 1 ? 2 : 1;
    showTheme(theme);
    localStorage.setItem('last-theme', JSON.stringify(theme));
});
