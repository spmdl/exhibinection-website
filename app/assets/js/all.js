var orderInfo = document.querySelector('.order-info-js'); 
var formWidth = document.querySelector('form');

window.addEventListener('resize', function () {
  if (orderInfo) {
    formWidth.style.width = orderInfo.offsetWidth + "px";
  }
});

(function () {
  if (orderInfo) {
    formWidth.style.width = orderInfo.offsetWidth + "px";
  }
}());