window.addEventListener('DOMContentLoaded', event => {

    // Ativar bootstrap na NAVBAR
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Colapsar a navbar quando um link for clicado
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Dark mode

$(document).ready(function () {
    $("#toggleDarkMode").click(function () {
      if ($("body").hasClass("dark-mode")) {
        $("body").removeClass("dark-mode");
        $(this).html("<i class='fa fa-sun'></i>");
      } else {
        $("body").addClass("dark-mode");
        $(this).html("<i class='fa fa-moon'></i>");
      }
    });
  });

