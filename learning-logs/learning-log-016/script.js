// Initialize standard Swiper instance
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  allowTouchMove: true,
  speed: 500,

  // Standard Swiper Navigation mapping
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Standard Swiper Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Update Header Progress & Buttons when sliding
swiper.on("slideChange", function () {
  const activeIndex = swiper.activeIndex;
  const totalTasks = 3;

  const taskCounter = document.getElementById("task-counter");
  const progressBar = document.getElementById("progress-bar-fill");
  const nextBtn = document.querySelector(".swiper-button-next");

  // Normal Tasks (Index 0, 1, 2)
  if (activeIndex < totalTasks) {
    taskCounter.innerText = `Task ${activeIndex + 1} of ${totalTasks}`;
    progressBar.style.width = `${((activeIndex + 1) / totalTasks) * 100}%`;

    nextBtn.innerHTML = "Next &rarr;";
    nextBtn.classList.remove("bg-surface", "text-primary", "shadow-lg");
    nextBtn.classList.add(
      "border",
      "border-surface/20",
      "hover:bg-surface",
      "hover:text-text-primary",
    );
  }
  // Final Completion Slide (Index 3)
  else {
    taskCounter.innerText = `Course Complete`;
    progressBar.style.width = `100%`;

    nextBtn.innerHTML = "Finish &rarr;";
    nextBtn.classList.add("bg-surface", "text-primary", "shadow-lg");
    nextBtn.classList.remove(
      "border",
      "border-surface/20",
      "hover:bg-surface",
      "hover:text-text-primary",
    );
  }
});

// Restart Course Button functionality
document.getElementById("restart-course").addEventListener("click", () => {
  swiper.slideTo(0);
});


function task1() {
  let insta_img = document.querySelector("#instagram-img");
  let heart = document.querySelector("#heart");
  let red_heart = document.querySelector("#red-heart");

  let isFalse = false;

  insta_img.addEventListener("dblclick", () => {
    heart.classList.remove("hidden");
    heart.classList.add("animate-heart-pop");
    if (!isFalse) {
      red_heart.classList.remove("ri-heart-3-line");
      red_heart.classList.add("ri-heart-3-fill");
      red_heart.classList.add("text-red-600");
      red_heart.classList.add("animate-fade-in-up");
    }

    setTimeout(() => {
      heart.classList.add("hidden");
    }, 800);
  });
}

task1()