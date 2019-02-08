document.addEventListener("DOMContentLoaded", function()
{
  //click setup
  //document.getElementById("taparea").addEventListener("click", function(evt){ window.open(window.clickTag) })

  /*
  var action = new TimelineLite({delay:1})
    .set(".wrapper",{autoAlpha:1})
  .set("#wave02",{rotationY:180}) // wave countered
    .to(".one",3, {morphSVG:".two", repeat:10, yoyo:true, repeatDelay:0.1, ease:Sine.easeInOut })
    */

  //setup
  var timeLine = new TimelineMax(),
  time = 0

  var
  bg1 = '#bg1',
  i1 = '#img1',
  i2 = '#img2',
  i3 = '#img3',
  i4 = '#img4'


  //timeLine
  //.set(".wrapper",{autoAlpha:1})
  //.set("#wave02",{rotationY:180}) // wave countered
  //.to(".one",3, {morphSVG:".two", repeat:10, yoyo:true, repeatDelay:0.1, ease:Sine.easeInOut })

  //init
  timeLine.set([i2,i3,i4],{opacity:0},time)

  //screen 1


  time = 2
  timeLine.to(i2,1,{opacity:1},time)

  time = 4
  timeLine.to(i3,1,{opacity:1},time)

  time = 6
  timeLine.to(i4,1,{opacity:1},time)

  time = 8
  timeLine.set([i2,i3],{opacity:0},time)
  timeLine.to(i4,1,{opacity:0},time)

  //trigger and replay
  timeLine.play()
  timeLine.repeat(2)

});
