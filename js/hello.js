
function ibg(){

  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
      ibg[i].style.background = 'url('+ibg[i].querySelector('img').getAttribute('src')+') center/cover no-repeat';
      ibg[i].querySelector('img').style.display = 'none';
    }
  }
}
  
ibg();