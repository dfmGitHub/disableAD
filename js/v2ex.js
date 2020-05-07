console.log("my plugin for v2ex");

let ads = document.getElementsByClassName("adsbygoogle");
for (let i = 0; i < ads.length; i++) {
    ads[i].style.display = "none";
}

document.getElementById("Rightbar").style.display = 'none';
