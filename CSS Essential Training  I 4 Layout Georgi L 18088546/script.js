




/* wait until DOM is ready */

document.addEventListener("DOMContentLoaded", function(event) {

  function ground() {

  	/* We put a -1 so that the animation repeats iinfinetely */ 

    var tl = new TimelineMax({
      repeat: 1
    });

    /* We use "to" since we're setting destinational values to the id of ground, basically the pedestrian picture.*/

    tl.to(".banner", 20, {
        backgroundPosition: "1000px 0px",
        ease: Linear.easeNone
      });

    return tl;
  }

   var masterTL = new TimelineMax({
    repeat: -1
  });
  
  /* window load event makes sure image is 
 loaded before running animation */
window.onload = function() {
  
  masterTL
  .add(ground(),0)
  .timeScale(0.7)
  .play();

};
  
});