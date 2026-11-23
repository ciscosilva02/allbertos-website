// Removes anything marked data-until="ISO date" once that time has passed.
// Used for one-off events (e.g. the Nov 28 band night) so they disappear on their own.
(function(){
  var now = Date.now();
  [].forEach.call(document.querySelectorAll('[data-until]'), function(el){
    var t = Date.parse(el.getAttribute('data-until'));
    if(!isNaN(t) && now > t) el.parentNode.removeChild(el);
  });
})();
