module.exports = function() {
  var requestAnimationFrame = window.requestAnimationFrame ||
                              window.mozRequestAnimationFrame ||
                              window.weblkitRequestAnimationFrame ||
                              window.msRequestAnimationFrame;

  window.requestAnimationFrame = requestAnimationFrame;

  var cancelAnimationFrame = window.cancelAnimationFrame ||
                             window.mozcancelAnimationFrame ||
                             window.webkitcancelAnimationFrame ||
                             window.mscancelAnimationFrame;

  window.cancelAnimationFrame = cancelAnimationFrame;
};
