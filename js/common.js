function cleanByClassName(className) {
    let ads = document.getElementsByClassName(className);
    for (let i = 0; i < ads.length; i++) {
        ads[i].style.display = "none";
    }
}

function cleanById(id) {
    document.getElementById(id).style.display = "none";
}