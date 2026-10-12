(function(){
  var qs=["Apa yang sebenarnya sedang kamu putuskan?","Asumsi apa yang belum kamu uji?","Siapa yang paling terdampak oleh pilihan ini?","Apa yang akan terjadi kalau kamu tidak melakukan apa-apa?","Mana yang fakta, mana yang hanya perasaan?","Pilihan apa yang belum kamu pertimbangkan?"];
  var i=0,q=document.getElementById('q');
  document.getElementById('next').addEventListener('click',function(){
    i=(i+1)%qs.length;q.style.opacity=0;
    setTimeout(function(){q.textContent=qs[i];q.style.opacity=1},220);
  });
  var els=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});
    els.forEach(function(el){io.observe(el)});
  }else{els.forEach(function(el){el.classList.add('in')})}
})();
