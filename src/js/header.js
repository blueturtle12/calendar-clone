
const toggle = (toggled) => {
    console.log(toggled);
    let asideContainer = document.querySelector('.aside-container');
    let mainCalendar = document.querySelector('.main-calendar');
    let menuToggle = document.querySelector('.header__toggle-burger');
    menuToggle.addEventListener("click", function() {
    if(toggled) {
        asideContainer.classList.add("aside-container--untoggle");
        mainCalendar.classList.add("main-calendar--untoggle");
        toggled = false;
    } else if (!toggled) {
        asideContainer.classList.remove("aside-container--untoggle");
        mainCalendar.classList.remove("main-calendar--untoggle");
        toggled = true;
    }
    });
}

export default toggle;
