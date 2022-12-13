const btn = document.querySelector(".menu_btn");
const mobileMenu = document.querySelector(".mobile_menu");
const scrollBtn = document.querySelector(".scroll_btn");

btn.addEventListener("click", function() {
    mobileMenu.classList.toggle("flex");
});


// handle click outside menu to close menu 
document.addEventListener('click', event => {
  const isClickInside = mobileMenu.contains(event.target);
  const btnClick = btn.contains(event.target);
    
  if (btnClick) {
    return

  } else if (!isClickInside) {
    mobileMenu.classList.remove("flex");
  }
});

// scroll to display scroll to top btn
const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > 900) {
    scrollBtn.classList.remove("hidden");
  } else {
    scrollBtn.classList.add("hidden")
  }
});

// take me to top btn
scrollBtn.addEventListener("click", function() {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
});
