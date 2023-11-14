export const initNavbar = () => {

  $(window).scroll(function() {
    if ($(window).scrollTop() > 68) {
      $('#navbarSupportedContent').addClass('stuck');
    } else {
      $('#navbarSupportedContent').removeClass('stuck');
    }

  });
}
