window.onload = () => {
    let sliderItems = document.querySelectorAll(".slider-item");
    let thumbItems = document.querySelectorAll(".thumb-item");
    let nextBtn = document.querySelector(".next");
    let prevBtn = document.querySelector(".previous");
    let imgIndex = 1;
    let left = 0;
    prevBtn.onclick = () => {
        if (imgIndex < thumbItems.length) {
            nextBtn.classList.add("active");
            imgIndex++;
            thumbItems.forEach((el) => {
                el.classList.remove("active");
            });
            thumbItems.forEach((el) => {
                if (el.dataset.value === imgIndex.toString()) {
                    el.classList.add("active");
                }
            });
            sliderItems.forEach((el) => {
                el.style.left = `${imgIndex - 1}00%`;
            });
        }
        if (imgIndex === thumbItems.length) {
            prevBtn.classList.remove("active");
        }
    };
    nextBtn.onclick = () => {
        if (imgIndex > 1) {
            prevBtn.classList.add("active");
            imgIndex--;
            thumbItems.forEach((el) => {
                el.classList.remove("active");
            });
            thumbItems.forEach((el) => {
                if (el.dataset.value === imgIndex.toString()) {
                    el.classList.add("active");
                }
            });
            sliderItems.forEach((el) => {
                el.style.left = `${imgIndex - 1}00%`;
            });
        }
        if (imgIndex === 1) {
            nextBtn.classList.remove("active");
        }
    };
    thumbItems.forEach((el) => {
        el.addEventListener("click", () => {
            thumbItems.forEach((el) => {
                el.classList.remove("active");
            });
            el.classList.add("active");
            imgIndex = parseInt(el.dataset.value);
            if (imgIndex > 1) {
                nextBtn.classList.add("active");
                sliderItems.forEach((el) => {
                    el.style.left = `${imgIndex - 1}00%`;
                });
            } else if (imgIndex < thumbItems.length) {
                prevBtn.classList.add("active");
                sliderItems.forEach((el) => {
                    el.style.left = `-${imgIndex - 1}00%`;
                });
            }
            if (imgIndex === thumbItems.length) {
                prevBtn.classList.remove("active");
            }
            if (imgIndex === 1) {
                nextBtn.classList.remove("active");
            }
        });
    });
};
