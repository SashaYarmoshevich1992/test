$(document).ready(function () {

  //burger
  $('.js-ic__burger').click(function () {
    var btn = $(this);
    wrap_btn = btn.closest('.js-header').toggleClass('open');

    $(document).on('click', function (e) {
      if (!$(e.target).closest(".js-ic__burger").length) {
        $('.js-header').removeClass("open");
      }
      e.stopPropagation();
    });

  });
  //end burger

  if ($("#range").length) {

    var range = document.getElementById("range");
    var output = document.getElementById("range_value");
    output.innerHTML = range.value;

    range.oninput = function () {
      output.innerHTML = this.value;
    }
  }

  (function() {
    [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
      new SelectFx(el);
    } );
  })();


});


