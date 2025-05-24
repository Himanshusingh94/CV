document.querySelector("button").addEventListener("click", function () {
    let navList = document.querySelector("ul");
    let button = document.querySelector("button");

    if (navList.classList.contains("navListafter")) {
        navList.classList.remove("navListafter"); // Close it
        
    } else {
        navList.classList.add("navListafter"); // Open it
        
    }
});