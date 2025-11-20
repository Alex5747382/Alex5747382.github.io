let angle = 0;
  const h2 = document.getElementById("below");

  setInterval(() => {
    angle += 1; // degrees per frame
    h2.style.transform = `rotate(${angle}deg)`;
  }, 16);