const btn = document.querySelector(".menu_btn");
const mobileMenu = document.querySelector(".mobile_menu");

btn.addEventListener("click", function() {

    mobileMenu.classList.toggle("flex");
})



// I'm using "click" but it works with any event
document.addEventListener('click', event => {
  const isClickInside = mobileMenu.contains(event.target);
  const btnClick = btn.contains(event.target);
    
  if (btnClick) {
    return

  } else if (!isClickInside) {
    mobileMenu.classList.remove("flex");
  }
})
