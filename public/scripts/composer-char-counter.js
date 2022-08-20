$(document).ready(function() {

  $('textarea').on('input', function() {
    const max = 140;
    let current = $(this).val().length;
    let counted = max - current;

    const $counterView = $(this).parent().find(".counter");

    $counterView.text(counted);

    if (counted < 0) {
      $("output").css('color', 'red');
    }
    
  });
});

