window.onload = () => {
    let sliders = document.querySelectorAll(".ads .slide");
    let next = document.querySelector(".ads .next");
    let previos = document.querySelector(".ads .previos");

    next.onclick = () => {
        let num;
        changeAdsSlide();
    };
    previos.onclick = () => {
        let num;
        sliders.forEach((el) => {
            if (el.classList.contains("active")) {
                if (parseInt(el.dataset.value) <= 1) {
                    num = sliders.length + 1;
                } else {
                    num = parseInt(el.dataset.value);
                }
                el.classList.remove("active");
            }
        });
        sliders.forEach((el) => {
            if (parseInt(el.dataset.value) === num - 1) {
                el.classList.add("active");
            }
        });
    };
    // this function for make slider run every 10 second automatically
    (function runSliderAds() {
        let num;
        setInterval(changeAdsSlide, 10000);
    })();
    // this fumction using to change slider image
    function changeAdsSlide() {
        sliders.forEach((el) => {
            if (el.classList.contains("active")) {
                if (parseInt(el.dataset.value) >= sliders.length) {
                    num = 0;
                } else {
                    num = parseInt(el.dataset.value);
                }
                el.classList.remove("active");
            }
        });
        sliders.forEach((el) => {
            if (parseInt(el.dataset.value) === num + 1) {
                el.classList.add("active");
            }
        });
    }
    let filterTitle = document.getElementById("filter-title");
    let searchingSection = document.querySelector(".filters .searching");
    // event for show/hide filter section
    filterTitle.addEventListener("click", () => {
        searchingSection.classList.toggle("hide-section");
        filterTitle.classList.toggle("margin-bottom-reset");
    });
    filterTitle.firstElementChild;
};
