(function (doc, win) {
  var PlanWidth = 640;//设计图宽度
  var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
          var clientWidth = docEl.clientWidth;
          if (!clientWidth) return;
          if(clientWidth>=PlanWidth){
              docEl.style.fontSize = '100px';
          }else{
              docEl.style.fontSize = 100 * (clientWidth / PlanWidth) + 'px';
          }
      };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
