var Android = {
  getScreenWidth: function() {
    width = document.defaultView.getComputedStyle(document.body, "").getPropertyValue('width');
    return width.replace('px', '');
  },
  orientationchange: function(fn) {
    window.setInterval(function() {
      if (androidScreenWidth == undefined)
        androidScreenWidth = getScreenWidth();
      else if (androidScreenWidth != getScreenWidth()) {
        androidScreenWidth = getScreenWidth();
        fn();
      }
    }, 1000);

    return this;
  }
}

if (!!navigator.userAgent.match(/Android/)) {
  libs.push(Dom);
}
