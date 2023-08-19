// DROPDOWN TOGGLE
const overlayEl = document.querySelector('.nav-overlay');
const dropdownEl = document.querySelectorAll('nav .dropdown');

dropdownEl.forEach((dropdown) => {
  const anchor = dropdown.querySelector('a');
  anchor.addEventListener('click', (e) => {
    e.preventDefault();

    dropdown.classList.toggle('active');
    overlayEl.classList.add('active');

    const isDropdownActive = e.target.parentElement.classList.contains('active');
    !isDropdownActive && overlayEl.classList.remove('active');

    isDropdownActive && (
      e.target.style.opacity = ""
    )

    dropdownEl.forEach((siblingDropdown) => {
      const siblingAnchor = siblingDropdown.querySelector('a');
      siblingDropdown !== dropdown && (
        siblingDropdown.classList.remove('active'),

        isDropdownActive && (
          siblingAnchor.style.opacity = 0.5
        )
      )
    });
  });
});

// CLOSE DROPDOWN
const closeDropdown = () => {
  overlayEl.classList.remove('active');

  dropdownEl.forEach((dropdown) => {
    dropdown.classList.remove('active');
    dropdown.querySelector('a').style.opacity = "";
  });
}

overlayEl.addEventListener('click', () => {
  closeDropdown();
});


// MOBILE MENU TOGGLE
const menuToggleEl = document.querySelector('[data-target="mobile-menu"]');
const mobileMenuEl = document.querySelector('header nav');
const mobileMenuOverlayEl = document.querySelector('.mobile-menu-overlay');

// OPEN MOBILE NAV-MENU
menuToggleEl.addEventListener('click', () => {
  mobileMenuEl.classList.toggle('active');
  mobileMenuOverlayEl.classList.toggle('active');
});

// CLOSE MOBILE NAV-MENU
mobileMenuOverlayEl.addEventListener('click', () => {
  mobileMenuEl.classList.remove('active');
  mobileMenuOverlayEl.classList.remove('active');
});


// SEARCH TOGGLE
const openSearch = (el, input) => {
  closeDropdown();
  el.classList.add('active');
  setTimeout(() => {
    input.focus();
  }, 50);
}
// SEARCH DESKTOP
const searchEl = document.querySelectorAll('.search-wrapper');
const searchElDesktop = document.querySelector('.search-wrapper-desktop');
const searchOpenElDesktop = document.querySelector('[data-target="search-open-desktop"]');
const searchInputElDesktop = searchElDesktop.querySelector('input');

// SEARCH OPEN DESKTOP
searchOpenElDesktop.addEventListener('click', () => {
  openSearch(searchElDesktop, searchInputElDesktop);
});

// SEARCH MOBILE
const searchElMobile = document.querySelector('.search-wrapper-mobile');
const searchOpenElMobile = document.querySelector('[data-target="search-open-mobile"]');
const searchInputElMobile = searchElMobile.querySelector('input');

// TOGGLE HEADER VISIBILITY
const toggleHeaderVisibility = (isSearchVisible) => {
  const headerBlockEl = document.querySelector('.header-block');
  isSearchVisible
    ? headerBlockEl.classList.add('invisible')
    : headerBlockEl.classList.remove('invisible');
}

// SEARCH OPEN MOBILE
searchOpenElMobile.addEventListener('click', () => {
  openSearch(searchElMobile, searchInputElMobile);
  toggleHeaderVisibility(true);
});

// SEARCH CLOSE
const searchCloseEl = document.querySelectorAll('[data-target="search-close"]');
searchCloseEl.forEach((el) => {
  el.addEventListener('click', () => {
    searchEl.forEach((el) => { el.classList.remove('active'); });
    toggleHeaderVisibility(false);
  });
});