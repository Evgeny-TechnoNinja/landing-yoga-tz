document.addEventListener('DOMContentLoaded', ()=> {
  // ========= work form
  const userData = {
    'name': null,
    'phone': null,
    'service': null,
  }
  const notifyUser = document.querySelector('#inform');
  const formData = document.querySelectorAll('input[data-rule], select[data-rule]');
  const form = document.querySelector('form[name="form"]');
  let check;
  let tempValue;

  form.addEventListener('submit', (event)=>{
    event.preventDefault();
    formData.forEach((currentValue, index)=> {
      switch (currentValue.dataset.rule) {
        case 'name':
          check = /^[A-Za-zА-Яа-яЁё]+$/g.test(currentValue.value)
          if (check) {
            userData['name'] = currentValue.value.trim();
          } else {
            currentValue.classList.add('js-form-invalid')
            infoUser('no send', 'tomato');
          }
        break;
        case 'phone':
          tempValue = currentValue.value.replace(/[^\d]/g, '')
          check = /^\d+$/.test(tempValue)
          if (check) {
            userData['phone'] = tempValue;
          } 
          else {
            currentValue.classList.add('js-form-invalid')
            infoUser('no send', 'tomato');
          }
        break;
        case 'service':
          check = /^[A-Za-zА-Яа-яЁё]+$/g.test(currentValue.value)
          if (check) {
            userData['service'] = currentValue.value;
          } else {
            userData['service'] = 'no choice';
          }
        break;
      }
    })
    if (correctData(userData)) {
      const userDataJSON = JSON.stringify(userData);
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "/backend/write-db.php");
      xhr.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
      );
      xhr.send(userDataJSON);
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status === 200) {
          infoUser('send', 'green');
          formData.forEach((currentValue)=>{
            currentValue.value = '';
          })
        }
      };

    }
  });

  // ==================


  // ==== gallery
  baguetteBox.run('#galleryRun', {
    fullScreen: false,
  });
  // ===========

   // === assistant function
   function infoUser(txt, color) {
    notifyUser.innerText = txt;
    notifyUser.style.color = color;
    notifyUser.style.opacity = '1';
    setTimeout(()=>{
      notifyUser.style.opacity = '0';
    }, 5000)
  }

  function correctData(obj) {
    for (key in obj) {
      if (obj[key] === null) {
        return false;
      }
      return true
    }
  }
  // ========================


  // **** JQuery ****
  jQuery(function($) {
    //======= mobile menu
    $('#btnMenuOpen, #btnMenuClose').on('click', ()=>{
      $('.menu-mobile__popup').slideToggle(160, ()=> {
        if($('.menu-mobile__popup').is(':hidden')) {
          $('body').removeClass('body-pointer');
        } else {
          $('body').addClass('body-pointer');
        }
      })
    })
    $(document).on('click', (e)=>{
      if (!$(e.target).closest('.menu-mobile').length){
        $('body').removeClass('body-pointer');
        $('.menu-mobile__popup').slideUp(300);
      }
    });
    // =================

    // ==== form select
    $('#formSelect').niceSelect();
    // ===============


    // ======= slick slider about
    $('#slickSliderAbout').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      dots: false,
      prevArrow: false,
      nextArrow: false,
      speed: 400,
      prevArrow: $('#btnSliderAboutPrev'),
      nextArrow: $('#btnSliderAboutNext'),
    });
    // ===================

    // ======= slick slider info and preview
    $('#slickSliderInfo').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      dots: true,
      asNavFor: '#slickSliderPreview',
      dotsClass: 'info-dots',
    });
    $('#slickSliderPreview').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '#slickSliderInfo',
      dots: false,
      focusOnSelect: true,
      prevArrow: $('#btnSliderPreviewPrev'),
      nextArrow: $('#btnSliderPreviewNext'),
    });
    // ==================

    // accent card goods
    $('.button-buy').on('mouseover mouseout', function(e){
      $('.card-goods__box-content-top').each((index, value)=>{
        if($(e.target).data('btn-price') === $(value).data('price')) {
          $(value).toggleClass('js-bg-accent')
        }
      }) 
    });
    // ================
    // for Scroll Smooth
  function scrollSmooth(elem, time) {
    $(elem).on("click", function () {
      let href = $(this).attr("href");
      $("html, body").animate(
        {
          scrollTop: $(href).offset().top,
        },
        {
          duration: time,
          easing: "linear",
        }
      );
      return false;
    });
  }
  scrollSmooth("a.js-smooth-scroll-slow", 900);
  });
});
