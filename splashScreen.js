var SplashScreen = function() {
  var imgX = 0;
  var imgY = 200;
  var imgW = 200;
  var imgH = 100;

  this.display = function() {
    image(img1, 100, 100, 40, 40);
  image(img1, 75, 300, 40, 40);
  image(img1, 200, 500, 40, 40);
  image(img1, 400, 250, 40, 40);
  image(img1, 500, 400, 40, 40);
  image(img1, 550, 50, 40, 40);

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
