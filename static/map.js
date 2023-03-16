let called = false
document.addEventListener('scroll', e => {
  if (document.documentElement.scrollTop >= 11185) {
    if (called) return
    called = true
    calledEvent()
  }
})

function calledEvent() {
  
  var s5 = document.getElementById("state5");
  var s4 = document.getElementById("state4");
  var s3 = document.getElementById("state3");
  var s2 = document.getElementById("state2");
  var s1 = document.getElementById("state1");
  
  s5.style.top = '';
  s5.style.position = 'initial';
  
  s4.style.top = '';
  s4.style.position = 'initial';
  
  s3.style.top = '';
  s3.style.position = 'initial';
  
  s2.style.top = '';
  s2.style.position = 'initial';
  
  s1.style.top = '';
  s1.style.position = 'initial';
  
}