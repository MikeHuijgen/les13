function changebackground()
{
  document.body.style.background = "orange"
  document.getElementById('btn2').style.visibility="hidden";
  document.getElementById('btn3').style.visibility="visible";
}
function showimg()
{
  document.getElementById('LoadingImage').style.visibility="visible";
  document.getElementById('btn3').style.visibility="hidden";
  document.getElementById('btn4').style.visibility="visible";
}
function hide()
{
  document.getElementById('LoadingImage').style.visibility="hidden";
  document.getElementById('btn4').style.visibility="hidden";
  document.getElementById('scary2').style.visibility="hidden";
  document.getElementById('text1').style.visibility="hidden";
  document.body.style.background = "black"
  document.getElementById('btn5').style.visibility="visible";
}
function skeleton()
{
  document.getElementById('btn5').style.visibility="hidden";
  document.getElementById('skeletongif').style.visibility="visible";
  document.getElementById('skeletonsound').play();
}



