var SplashScreen = function() {
  var imgX = 0;
  var imgY = 200;
  var imgW = 200;
  var imgH = 100;

  this.display = function() {
    image(img, imgX, imgY, imgW, imgH);
    
    if (imgX < 200) {
      imgX +=2;
    } else if (imgX === 200) {
      imgX = 200;
      
      fill(255, 255, 255);
      rect(200, 400, 200, 100);
      fill(0, 0, 0);
      textSize(20);
      text("Click here to play", 220, 450);
    }
  }

}
