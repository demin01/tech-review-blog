function toggleMode() {
  document.body.classList.toggle("dark-mode");
}

function filterVideos() {
  const input = document.getElementById("search").value.toLowerCase();
  const videos = document.querySelectorAll(".video");
  videos.forEach(video => {
    const title = video.querySelector("h3").textContent.toLowerCase();
    const desc = video.querySelector("p").textContent.toLowerCase();
    if (title.includes(input) || desc.includes(input)) {
      video.style.display = "";
    } else {
      video.style.display = "none";
    }
  });
}