(function($) {
  "use strict"

  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function (event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
      if (target.length) {
        event.preventDefault()
        $('html, body').animate({
          scrollTop: target.offset().top
        },
        1000,
        function () {
          var $target = $(target)
          $target.focus()
          if ($target.is(":focus")) {
            return false
          } else {
            $target.attr('tabindex', '-1')
            $target.focus()
          }
        })
      }
    }
  })

  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide')
  })

  $('body').scrollspy({ target: '#sideNav' })

  $('.collapse').collapse()

  $('[data-toggle="tooltip"]').tooltip()

  anchors.add('#experience > div > h2')
  anchors.add('#experience h3')
  anchors.add('#education > div > h2')
  anchors.add('#education h3')
  anchors.add('#projects > div > h2')
  anchors.add('#projects h3')
  anchors.add('#skills > div > h2')
})(jQuery)
