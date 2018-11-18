function isIE () {
  var myNav = navigator.userAgent.toLowerCase();
  console.log(myNav);
  return (myNav.indexOf('msie') !== -1 || myNav.indexOf('trident') !== -1) ? true : false;
}

export default isIE;