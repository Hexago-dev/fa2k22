window.addEventListener("DOMContentLoaded", async(e) => {
    let loader = document.querySelector(".loader");
    setTimeout(() => {
        loader.style.display = "none";
        return true;
    }, 5000);
});