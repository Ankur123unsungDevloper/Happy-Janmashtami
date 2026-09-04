const screen = document.createElement("video");

    screen.id = "screen";
    screen.src = "video.mp4";
    screen.autoplay = true;
    screen.loop = true;
    screen.muted = false;
    screen.playsInline = true;
    screen.controls = false;
    screen.setAttribute("controlsList", "nodownload noplaybackrate");
    screen.setAttribute("disablePictureInPicture", "");

    document.body.appendChild(screen);

    
    const start = () => {
      screen.muted = false;
      screen.play().catch(() => {});
    };

    start();
    window.addEventListener("click", start, { once: true });
    window.addEventListener("keydown", start, { once: true });
    window.addEventListener("touchstart", start, { once: true, passive: true });