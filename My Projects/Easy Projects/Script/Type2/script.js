let i = 1;
document.querySelector('.img').addEventListener('click', () => {
    let line = document.querySelector(`.line${i}`);
    line.style.display = 'block';
    line.style.animation = 'opacity 0.5s ease-in-out';
    i += 1;
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
    function goFullScreen() {
        let elem = document.documentElement;
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        }
      }
      // goFullScreen();
}
);