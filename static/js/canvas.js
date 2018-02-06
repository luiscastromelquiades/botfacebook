var orangeSun = new Image();
var blueSun = new Image();
var css = new Image();
var html = new Image();
var angular = new Image();
var union = new Image();
var node = new Image();
var php = new Image();
var orangeColor = "#ef6c00";
var blueColor = "#26a69a";
var firstColor = "#ef6c00";
var secondColor = "#26a69a";
var middleX = 0;
var middleY = 0;

function init(){
  orangeSun.src = '/static/imgs/canvas/orangesunbig.png';
  blueSun.src = '/static/imgs/canvas/bluesun.png';
  css.src = '/static/imgs/canvas/css90.png';
  html.src = '/static/imgs/canvas/html91.png';
  angular.src = '/static/imgs/canvas/angular90.png';
  php.src = '/static/imgs/canvas/php.png';
  node.src = '/static/imgs/canvas/node.png';
  window.requestAnimationFrame(draw);

}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.globalCompositeOperation = 'destination-over';
  var time = new Date();
  var canvas = document.getElementById("canvas");

  function createLine(xs,ys,xe,ye,r,lw,color) {
    ctx.beginPath();
    ctx.lineWidth = lw;
    ctx.strokeStyle = color;
    ctx.moveTo(xs,ys);
    ctx.lineTo(xe,ye);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(xe,ye,r,0,(Math.PI/180)*360,true);
    ctx.strokeStyle = color;
    ctx.fill();

    return ctx;
  }

  function createOrangeSun(mainOrangeLineX, mainOrangeLineY ) {
    //***** sunorangestarts *****//
    createLine(mainOrangeLineX,mainOrangeLineY,mainOrangeLineX+6,mainOrangeLineY-47,3,1,orangeColor);
    //leftnode
    createLine(mainOrangeLineX,mainOrangeLineY,mainOrangeLineX-14,mainOrangeLineY+2,2,1,orangeColor);

    createLine(mainOrangeLineX+6,mainOrangeLineY-47,mainOrangeLineX+34,mainOrangeLineY-90,2,1,orangeColor);
    createLine(mainOrangeLineX+34,mainOrangeLineY-90,mainOrangeLineX+75,mainOrangeLineY-113,3,1,orangeColor);
    createLine(mainOrangeLineX+75,mainOrangeLineY-113,mainOrangeLineX+122,mainOrangeLineY-119,2,1,orangeColor);
    createLine(mainOrangeLineX+122,mainOrangeLineY-119,mainOrangeLineX+172,mainOrangeLineY-104,2,1,orangeColor);
    createLine(mainOrangeLineX+172,mainOrangeLineY-104,mainOrangeLineX+207,mainOrangeLineY-69,3,1,orangeColor);
    //topnodes
    createLine(mainOrangeLineX+172,mainOrangeLineY-104,mainOrangeLineX+212,mainOrangeLineY-139,3,1,orangeColor);
    createLine(mainOrangeLineX+212,mainOrangeLineY-139,mainOrangeLineX+197,mainOrangeLineY-169,2,1,orangeColor);

    createLine(mainOrangeLineX+207,mainOrangeLineY-69,mainOrangeLineX+222,mainOrangeLineY-24,2,1,orangeColor);
    createLine(mainOrangeLineX+222,mainOrangeLineY-24,mainOrangeLineX+217,mainOrangeLineY+24,2,1,orangeColor);
    createLine(mainOrangeLineX+217,mainOrangeLineY+24,mainOrangeLineX+190,mainOrangeLineY+63,2,1,orangeColor);
    //rightnodes
    createLine(mainOrangeLineX+217,mainOrangeLineY+24,mainOrangeLineX+236,mainOrangeLineY+30,3,1,orangeColor);
    createLine(mainOrangeLineX+236,mainOrangeLineY+30,mainOrangeLineX+237,mainOrangeLineY+39,2,1,orangeColor);

    createLine(mainOrangeLineX+190,mainOrangeLineY+63,mainOrangeLineX+148,mainOrangeLineY+89,2,1,orangeColor);
    createLine(mainOrangeLineX+148,mainOrangeLineY+89,mainOrangeLineX+100,mainOrangeLineY+94,3,1,orangeColor);
    createLine(mainOrangeLineX+100,mainOrangeLineY+94,mainOrangeLineX+52,mainOrangeLineY+78,2,1,orangeColor);
    //bottomnodes
    createLine(mainOrangeLineX+52,mainOrangeLineY+78,mainOrangeLineX+42,mainOrangeLineY+93,3,1,orangeColor);
    createLine(mainOrangeLineX+42,mainOrangeLineY+93,mainOrangeLineX+40,mainOrangeLineY+105,2,1,orangeColor);

    createLine(mainOrangeLineX+52,mainOrangeLineY+78,mainOrangeLineX+15,mainOrangeLineY+44,2,1,orangeColor);
    createLine(mainOrangeLineX+15,mainOrangeLineY+44,mainOrangeLineX,mainOrangeLineY,2,1,orangeColor);
    //***** sunorangestends *****//
  }

  function createBlueSun(mainBlueLineX, mainBlueLineY) {
    //***** bluesunnodesstart *****//
    createLine(mainBlueLineX,mainBlueLineY,mainBlueLineX+9,mainBlueLineY-72,2.5,1.5,blueColor);
    createLine(mainBlueLineX+9,mainBlueLineY-72,mainBlueLineX+46,mainBlueLineY-131,2.5,1.5,blueColor);
    createLine(mainBlueLineX+46,mainBlueLineY-131,mainBlueLineX+106,mainBlueLineY-169,2.5,1.5,blueColor);
    //leftnodes
    createLine(mainBlueLineX+46,mainBlueLineY-131,mainBlueLineX-18, mainBlueLineY-110,2.5,1.5,blueColor);
    createLine(mainBlueLineX-18, mainBlueLineY-110,mainBlueLineX-35,mainBlueLineY-90,2.5,1.5,blueColor);

    createLine(mainBlueLineX+106,mainBlueLineY-169,mainBlueLineX+177,mainBlueLineY-178,2.5,1.5,blueColor);
    createLine(mainBlueLineX+177,mainBlueLineY-178,mainBlueLineX+254,mainBlueLineY-153,2.5,1.5,blueColor);
    createLine(mainBlueLineX+254,mainBlueLineY-153,mainBlueLineX+293,mainBlueLineY-104,2.5,1.5,blueColor);
    createLine(mainBlueLineX+293,mainBlueLineY-104,mainBlueLineX+317,mainBlueLineY-36,2.5,1.5,blueColor);
    createLine(mainBlueLineX+317,mainBlueLineY-36,mainBlueLineX+310,mainBlueLineY+34,2.5,1.5,blueColor);
    //rightnodes
    createLine(mainBlueLineX+317,mainBlueLineY-36,mainBlueLineX+352,mainBlueLineY+6,2.5,1.5,blueColor);
    createLine(mainBlueLineX+352,mainBlueLineY+6,mainBlueLineX+383,mainBlueLineY-18,2.5,1.5,blueColor);

    createLine(mainBlueLineX+310,mainBlueLineY+34,mainBlueLineX+273,mainBlueLineY+95,2.5,1.5,blueColor);
    createLine(mainBlueLineX+273,mainBlueLineY+95,mainBlueLineX+211,mainBlueLineY+132,2.5,1.5,blueColor);
    createLine(mainBlueLineX+211,mainBlueLineY+132,mainBlueLineX+140,mainBlueLineY+140,2.5,1.5,blueColor);
    //firstbottomnodes
    createLine(mainBlueLineX+211,mainBlueLineY+132,mainBlueLineX+200,mainBlueLineY+162,2.5,1.5,blueColor);
    createLine(mainBlueLineX+200,mainBlueLineY+162,mainBlueLineX+205,mainBlueLineY+174,2.5,1.5,blueColor);

    createLine(mainBlueLineX+140,mainBlueLineY+140,mainBlueLineX+73,mainBlueLineY+116,2.5,1.5,blueColor);
    createLine(mainBlueLineX+73,mainBlueLineY+116,mainBlueLineX+24,mainBlueLineY+66,2.5,1.5,blueColor);
    createLine(mainBlueLineX+24,mainBlueLineY+66,mainBlueLineX,mainBlueLineY,2.5,1.5,blueColor);
    //secondbottomnode
    createLine(mainBlueLineX+24,mainBlueLineY+66,mainBlueLineX+19,mainBlueLineY+85,2.5,1.5,blueColor);
    //***** bluesunnodesend *****//
  }


  if((screen.width/2) <= screen.height && screen.width > screen.height) {
    canvas.width = 1280;
    canvas.height = 720;
    middleX = 640;
    middleY = 360;
    ctx.clearRect(0,0,1280,720);

    createOrangeSun(228,319);

    //***** mainnodesstart *****//
    ctx.beginPath();
    ctx.fillStyle = orangeColor;
    ctx.arc(middleX,middleY,6,0,(Math.PI/180)*180,true);
    ctx.strokeStyle = orangeColor;
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = orangeColor;
    ctx.arc(580,305,6,0,(Math.PI/180)*360,true);
    ctx.strokeStyle = orangeColor;
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = orangeColor;
    ctx.moveTo(580,305);
    ctx.lineTo(380,305);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = blueColor;
    ctx.moveTo(700,415);
    ctx.lineTo(850,415);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = blueColor;
    ctx.arc(700,415,6,0,(Math.PI/180)*360,true);
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.moveTo(640,360);
    ctx.lineTo(700,415);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(middleX,middleY,6,0,(Math.PI/180)*180,false);
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = orangeColor;
    ctx.moveTo(640,360);
    ctx.lineTo(580,305);
    ctx.stroke();
    ctx.fill();
    //***** mainnodesend *****//

    createBlueSun(748,434);

    //***** sundraws *****//
    ctx.shadowBlur=70;
    ctx.shadowColor=orangeColor;
    ctx.drawImage(orangeSun,268,236,140,140);

    ctx.shadowBlur=50;
    ctx.shadowColor=blueColor;
    ctx.drawImage(blueSun,809,318,195,195);
    //***** sundraws *****//

    ctx.shadowBlur=0;
    ctx.shadowColor="#009688";
    ctx.save();
    ctx.translate(335,300);
    ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
    ctx.translate(80,0);
    ctx.drawImage(html,-10,-10);
    ctx.restore();

    ctx.save();
    ctx.translate(335,300);
    ctx.rotate( ((2*Math.PI)/60)*(time.getSeconds()-20) + ((2*Math.PI)/60000)*time.getMilliseconds() );
    ctx.translate(80,0);
    ctx.drawImage(css,-10,-10);
    ctx.restore();

    ctx.save();
    ctx.translate(335,300);
    ctx.rotate( ((2*Math.PI)/60)*(time.getSeconds()-40) + ((2*Math.PI)/60000)*time.getMilliseconds() );
    ctx.translate(80,0);
    ctx.drawImage(angular,-10,-10);
    ctx.restore();

    ctx.save();
    ctx.translate(900,410);
    ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
    ctx.translate(80,0);
    ctx.drawImage(php,10,10);
    ctx.restore();

    ctx.save();
    ctx.translate(900,410);
    ctx.rotate( ((2*Math.PI)/60)*(time.getSeconds()-30) + ((2*Math.PI)/60000)*time.getMilliseconds() );
    ctx.translate(80,0);
    ctx.drawImage(node,10,10);
    ctx.restore();

    ctx.restore();

  }else{
    canvas.width = 720;
    canvas.height = 900;
    middleX = 360;
    middleY = 400;
    ctx.clearRect(0,0,720,900);

    createOrangeSun(353,193);

    //***** mainnodesstart *****//
    ctx.beginPath();
    ctx.fillStyle = orangeColor;
    ctx.arc(middleX,middleY,6,0,(Math.PI/180)*180,true);
    ctx.strokeStyle = orangeColor;
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = orangeColor;
    ctx.arc(470,330,6,0,(Math.PI/180)*360,true);
    ctx.strokeStyle = orangeColor;
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = orangeColor;
    ctx.moveTo(470,200);
    ctx.lineTo(470,330);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = blueColor;
    ctx.moveTo(230,470);
    ctx.lineTo(230,615);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = blueColor;
    ctx.arc(230,470,6,0,(Math.PI/180)*360,true);
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth = 4;

    ctx.moveTo(230,470);
    ctx.lineTo(360,400);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(middleX,middleY,6,0,(Math.PI/180)*180,false);
    ctx.fill();

    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = orangeColor;
    ctx.moveTo(470,330);
    ctx.lineTo(360,400);
    ctx.stroke();
    ctx.fill();
    //***** mainnodesend *****//

    createBlueSun(70,690);

    //***** sundraws *****//
    ctx.shadowBlur=70;
    ctx.shadowColor=orangeColor;
    ctx.drawImage(orangeSun,395,110,140,140);

    ctx.shadowBlur=50;
    ctx.shadowColor=blueColor;
    ctx.drawImage(blueSun,130,570,195,195);
    //***** sundraws *****//

    ctx.shadowBlur=0;
    ctx.shadowColor="#009688";
    ctx.save();
    ctx.translate(470,180);
    ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
    ctx.translate(80,0);
    ctx.drawImage(html,-10,-10);
    ctx.restore();

    ctx.save();
    ctx.translate(470,180);
    ctx.rotate( ((2*Math.PI)/60)*(time.getSeconds()-20) + ((2*Math.PI)/60000)*time.getMilliseconds() );
    ctx.translate(80,0);
    ctx.drawImage(css,-10,-10);
    ctx.restore();

    ctx.save();
    ctx.translate(470,180);
    ctx.rotate( ((2*Math.PI)/60)*(time.getSeconds()-40) + ((2*Math.PI)/60000)*time.getMilliseconds() );
    ctx.translate(80,0);
    ctx.drawImage(angular,-10,-10);
    ctx.restore();

    ctx.save();
    ctx.translate(230,670);
    ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
    ctx.translate(80,0);
    ctx.drawImage(php,10,10);
    ctx.restore();

    ctx.save();
    ctx.translate(230,670);
    ctx.rotate( ((2*Math.PI)/60)*(time.getSeconds()-30) + ((2*Math.PI)/60000)*time.getMilliseconds() );
    ctx.translate(80,0);
    ctx.drawImage(node,10,10);
    ctx.restore();

    ctx.restore();
  }

  window.requestAnimationFrame(draw);
}

init();
