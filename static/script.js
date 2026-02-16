const heart = document.getElementById("heart");

let images = [
    "/static/images/pic1.jpg",
    "/static/images/pic2.jpeg",
    "/static/images/pic3.jpg",
    "/static/images/pic4.jpg",
    "/static/images/pic5.jpg",
    "/static/images/pic6.jpg",
    "/static/images/pic7.jpg",
    "/static/images/pic8.jpg",
    "/static/images/pic9.jpg",
    "/static/images/pic10.jpg"
];

let index = 0;

function changeImage() {
    const img = new Image();
    img.src = images[index];

    img.onload = function () {

        // Detect orientation
        if (img.width > img.height) {
            // Landscape image
            heart.style.backgroundSize = "cover";
        } else {
            // Portrait image
            heart.style.backgroundSize = "contain";
        }

        heart.style.backgroundPosition = "center center";
        heart.style.backgroundRepeat = "no-repeat";

        // Smooth fade effect
        heart.style.transition = "background-image 0.5s ease-in-out";
        heart.style.backgroundImage = `url(${images[index]})`;

        index = (index + 1) % images.length;
    };
}

// Change every 900ms
let interval = setInterval(changeImage, 900);

// Stop after heart grows
setTimeout(() => {
    clearInterval(interval);
    document.getElementById("loveText").classList.remove("hidden");
    document.getElementById("loveBtn").classList.remove("hidden");
}, 6000);

function goNext() {
    window.location.href = "/page2";
}
