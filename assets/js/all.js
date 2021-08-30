"use strict";

(function () {
  var orderInfo = document.querySelector('.order-info');
  var formWidth = document.querySelector('form');

  if (orderInfo) {
    console.log(formWidth.offsetWidth);
    console.log(orderInfo.offsetWidth);
    formWidth.style.offsetWidth = orderInfo.offsetWidth;
  }
})(); // $(function() {
//   console.log('Hello Bootstrap5');
// });
//# sourceMappingURL=all.js.map
