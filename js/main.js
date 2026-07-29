(function(){
  var rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // reveal on scroll
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:0.14, rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

  if(rm) return;
  // parallax
  var els = [].slice.call(document.querySelectorAll('.px'));
  var ticking = false;
  function update(){
    var vh = window.innerHeight;
    els.forEach(function(el){
      var r = el.getBoundingClientRect();
      if(r.bottom < -120 || r.top > vh+120) return;
      var center = r.top + r.height/2;
      var prog = (center - vh/2)/vh;            // ~ -0.7 .. 0.7
      var amp = parseFloat(el.getAttribute('data-amp')||'14');
      var y = (-prog*amp).toFixed(2);
      var img = el.querySelector('.px-img');
      if(img) img.style.transform = 'translate3d(0,'+y+'%,0)';
    });
    ticking = false;
  }
  function onScroll(){ if(!ticking){ ticking=true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', onScroll);
  update();
})();
