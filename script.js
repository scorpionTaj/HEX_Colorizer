function changeRange(){
  var r = parseInt(document.getElementById('r').value);
  var g = parseInt(document.getElementById('g').value);
  var b = parseInt(document.getElementById('b').value);
  var color = '#' + hex(r) + hex(g) + hex(b);
  window.dd.style.backgroundColor = color;
  document.getElementById('hex-label').innerText = color;
  document.getElementById('r-label').innerText = r;
  document.getElementById('g-label').innerText = g;
  document.getElementById('b-label').innerText = b;
  if (r < 0 && g < 0 && b < 0 ){
    document.getElementById('container').style.color = 'white';
  }
  else{
    document.getElementById('container').style.color = 'black';
  }
}

function hex(v){
  var hex = v.toString(10);
  if (v < 10 ){
    hex = "0" + hex;
  }
  return hex;
}