document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".page");
  const nextBtn = document.querySelector(".nextpage");
  const prevBtn = document.querySelector(".prevpage");
  let currentPage = 0;

  // --------- AUDIO ON CLICK ---------
  const lildude = document.querySelector('.lildude');
  const doggi = document.querySelector('.doggi');
  const fav2 = document.querySelector('.fav2');
  const cake = document.querySelector('.cake');
  const grr = document.querySelector('.grr');
  const bear = document.querySelector('.bear');
  const haiiSound = new Audio('audio/haii.mp3');
  const baiiSound = new Audio('audio/baii.mp3');
  const cakeSound = new Audio('audio/horn.mp3');
  const grrSound = new Audio('audio/grr.mp3');
  const dogiSound = new Audio('audio/heheha.mp3');
  const bearSound = new Audio('audio/yipee.mp3');
  grrSound.volume = 0.1;
  haiiSound.volume = 0.1;
  baiiSound.volume = 0.1;
  dogiSound.volume = 0.1;
  cakeSound.volume = 0.2; 
  bearSound.volume = 0.15;

  let playBaiiNextLeave = false;

  lildude.addEventListener('click', () => {
    haiiSound.currentTime = 0;
    haiiSound.play();
    playBaiiNextLeave = true; 
  });

  cake.addEventListener('click', () => {
    cakeSound.currentTime = 0;
    cakeSound.play().catch(() => {
      console.log("Autoplay blocked, will play on user interaction");
    });
  });

  bear.addEventListener('click', () => {
    bearSound.currentTime = 0;
    bearSound.play().catch(() => {
      console.log("Autoplay blocked, will play on user interaction");
    });
  });

  doggi.addEventListener('click', () => {
    dogiSound.currentTime = 0;
    dogiSound.play().catch(() => {
      console.log("Autoplay blocked, will play on user interaction");
    });
  });

  grr.addEventListener('click', () => {
    grrSound.currentTime = 0;
    grrSound.play().catch(() => {
      console.log("Autoplay blocked, will play on user interaction");
    });
  });

  fav2.addEventListener('mouseleave', () => {
    if (playBaiiNextLeave) {
      baiiSound.currentTime = 0;
      baiiSound.play();
      playBaiiNextLeave = false;
    }
  });

  // --------- IMAGE POPUP OVERLAY ON CLICK ---------
  const overlay = document.querySelector('.page.page3 .image-overlay');
  const overlayImg = overlay.querySelector('img');
 
  const clickableElements = [
    { selector: '.sunset', newImg: 'images/pages/sunsetpg.png' },
    { selector: '.car', newImg: 'images/pages/carpg.png' },
    { selector: '.calc', newImg: 'images/pages/calcpg.png' },
    { selector: '.us', newImg: 'images/pages/uspg.png' },
    { selector: '.poloroid', newImg: 'images/pages/poloroidpg.gif' },
    { selector: '.pooki', newImg: 'images/pages/pookiepg.png' }
  ];

  clickableElements.forEach(item => {
    const el = document.querySelector(item.selector);
    if (el) {
      el.addEventListener('click', () => {
        overlayImg.src = item.newImg;
        overlay.style.display = 'flex';

        // --- Reset old classes each time ---
        overlayImg.className = "";

        // --- If poloroid clicked, add special CSS class ---
        if (item.selector === '.poloroid') {
          overlayImg.classList.add("poloroid-gif");
        }
      });
    }
  });

  // Close overlay when clicked
  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    overlayImg.src = "";
    overlayImg.className = ""; // reset when closing
  });

  // --------- PAGE LOGIC ---------
  function showPage(index) {
    pages.forEach(p => p.classList.remove("active"));
    pages[index].classList.add("active");

    // GIF overlay logic for page1
    if (pages[index].classList.contains("page1")) {
      const gifOverlay = pages[index].querySelector(".gif-overlay");
      if (gifOverlay) {
        gifOverlay.style.display = "block"; 
        setTimeout(() => {
          gifOverlay.classList.add("show");
        }, 50);

        setTimeout(() => {
          gifOverlay.classList.remove("show");
          setTimeout(() => {
            gifOverlay.style.display = "none";
          }, 1000);
        }, 3000);
      }
    }

    // Hide prev on first page
    if (index === 0) {
      prevBtn.classList.add("hidden");
    } else {
      prevBtn.classList.remove("hidden");
    }

    // Dim next on last page
    if (index === pages.length - 1) {
      nextBtn.style.pointerEvents = "none";
      nextBtn.style.filter = "brightness(70%)";
    } else {
      nextBtn.style.pointerEvents = "auto";
      nextBtn.style.filter = "brightness(90%)";
    }
  }

  nextBtn.addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
      currentPage++;
      showPage(currentPage);
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      showPage(currentPage);
    }
  });

  // Show first page on load
  showPage(currentPage);
});

const button = document.getElementById('openCurtain');
const leftCurtain = document.querySelector('.curtain.left');
const rightCurtain = document.querySelector('.curtain.right');
const pg6content = document.querySelector('.pg6content');
const curt = document.querySelector('.curt');

button.addEventListener('click', () => {
  // Open only once
  leftCurtain.classList.add('open');
  rightCurtain.classList.add('open');
  pg6content.classList.add('show');
  curt.style.opacity = 0;

  // Make the button disappear
  button.style.display = "none";
});
