
let currentImage = 1;
let totalImages = 3;
let interval = setInterval(nextImage, 4000);
let isPlaying = true;

function showImage(n) {
  document.getElementById("bannerImage").src = `./imagens/banner${n}.jpg`;
}

function nextImage() {
  currentImage = currentImage === totalImages ? 1 : currentImage + 1;
  showImage(currentImage);
}

function prevImage() {
  currentImage = currentImage === 1 ? totalImages : currentImage - 1;
  showImage(currentImage);
}

function togglePlay() {
  const btn = document.getElementById("playPauseBtn");
  if (isPlaying) {
    clearInterval(interval);
    btn.textContent = "▶";
  } else {
    interval = setInterval(nextImage, 4000);
    btn.textContent = "⏸";
  }
  isPlaying = !isPlaying;
}


function openOverlay() {
  document.getElementById("mobileOverlay").style.display = "flex";
  document.body.classList.add("dimmed");
}

function closeOverlay() {
  document.getElementById("mobileOverlay").style.display = "none";
  document.body.classList.remove("dimmed");
}
