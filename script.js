if (document.title == 'Princeton University Google Apps Mail') {
  // https://stackoverflow.com/questions/15505225/inject-css-stylesheet-as-string-using-javascript
  var css = '.gb_3 { background-position-y: -8px; }',
      head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');

  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  head.appendChild(style);
}
