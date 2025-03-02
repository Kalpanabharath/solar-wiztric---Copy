document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".nav-link");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove active class and hide tick from all tabs
      tabs.forEach((t) => {
        t.classList.remove("active");
        t.querySelector(".check-icon").classList.add("d-none");
      });

      // Add active class and show tick on the selected tab
      this.classList.add("active");
      this.querySelector(".check-icon").classList.remove("d-none");
    });
  });
});

// function updateEarnings() {
//   let earnings = Math.floor(Math.random() * 1000) + 10;
//   document.getElementById("earnings").innerText = earnings + " $";
// }
// setInterval(updateEarnings, 1000);
