(function ($) {
  Drupal.behaviors.node_ext = {
    attach: function(context) {
      $('.go-back-btn').click(function(event) {
        event.preventDefault();
      });
    }
  };
 })(jQuery);