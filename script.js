var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
  });
});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});
            for (var i = 0; i < 128; i++) {
              let bubble = document.createElement('div');
              bubble.classList.add('bubble');
              bubble.style.setProperty('--size', `${2 + Math.random() * 4}rem`);
              bubble.style.setProperty('--distance', `${6 + Math.random() * 4}rem`);
              bubble.style.setProperty('--position', `${-5 + Math.random() * 110}%`);
              bubble.style.setProperty('--time', `${2 + Math.random() * 2}s`);
              bubble.style.setProperty('--delay', `${-(2 + Math.random() * 2)}s`);
              document.querySelector('.bubbles').appendChild(bubble);
            }
            document.getElementById("services-link").addEventListener("click", function(event) {
              event.preventDefault(); // Prevent default link behavior
              let servicesContainer = document.getElementById("services-container");
          
              // Toggle visibility of the services container
              if (servicesContainer.style.display === "none" || servicesContainer.style.display === "") {
                  servicesContainer.style.display = "grid"; // Show services
              } else {
                  servicesContainer.style.display = "none"; // Hide services
              }
          });
          