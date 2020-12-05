document.addEventListener('DOMContentLoaded', ()=> {

  // **** JQuery ****
  jQuery(function($) {
    //======= mobile menu
    $('#btnMenuOpen, #btnMenuClose').on('click', ()=>{
      $('.menu-mobile__popup').slideToggle(160, ()=> {
        if($('.menu-mobile__popup').is(':hidden')) {
          $('body').removeClass('body_pointer');
        } else {
          $('body').addClass('body_pointer');
        }
      })
    })
    $(document).on('click', function(e){
      if (!$(e.target).closest('.menu-mobile').length){
        $('body').removeClass('body_pointer');
        $('.menu-mobile__popup').slideUp(300);
      }
    });
    // =================
  });

});
