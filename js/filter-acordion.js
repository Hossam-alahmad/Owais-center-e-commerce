window.onload = () => {
    let filterTitle = document.getElementById("filter-title");
    let searchingSection = document.querySelector(".filters .searching");
    // event for show/hide filter section
    filterTitle.addEventListener("click", () => {
        searchingSection.classList.toggle("hide-section");
        filterTitle.classList.toggle("margin-bottom-reset");
    });
};
