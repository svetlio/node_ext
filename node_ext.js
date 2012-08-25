(function ($) {
  Drupal.behaviors.CToolsAutoSubmit = {
    attach: function(context) {
      $('.go-back-btn').click(function(event) {
        event.preventDefault();
      });
    }
  };
 })(jQuery);