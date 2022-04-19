// for navbar section
const toggleButton = document.getElementsByClassName("navbar-toggle")[0];
const navbarLinks = document.getElementsByClassName("navbar-links");
const banner = document.getElementsByClassName("banner")[0];
toggleButton.addEventListener("click", () => {
  for (var i = 0; i < navbarLinks.length; i++)
    navbarLinks[i].classList.toggle("active");
  banner.classList.toggle("banner-hide");
});

// for search section
const toggleSearch = document.getElementsByClassName("search-btn")[0];
const searchBar = document.getElementsByClassName("banner-search")[0];
toggleSearch.addEventListener("click", () => {
  searchBar.classList.toggle("active1");
});
