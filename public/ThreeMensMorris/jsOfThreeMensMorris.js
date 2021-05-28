var positionsOfpieces=new Array(3);
var radius=24;
var strokeWidth=1;
var numberOfTurns=0;
var numberOfRedPieces=0;
var numberOfGreenPieces=0;
var canvasEle=document.getElementById("canvassElement");
var contextEle=canvasEle.getContext("2d");
var isRedPieceActivated=false;
var isGreenPieceActivated=false;
var LastXcenter=0;
var LastYcenter=0;
var LastX=0;
var LastY=0;
var canvasp1=document.getElementById("player1");
var canvasp2=document.getElementById("player2");
var contextp1=canvasp1.getContext("2d");
var contextp2=canvasp2.getContext("2d");
var radiusp=16;
var centerpx=new Array(3);
var centerpy=new Array(3);
var redpieces=3;
var greenpieces=3;
var classp1=document.getElementsByClassName("p1");
var classp2=document.getElementsByClassName("p2");
var newClassp1=classp1[0];
var newClassp2=classp2[0];

function beginGame(){

/*three holes Dhadi board is represented by a 3X3 matrix */
for(var k=0;k<3;k++){
positionsOfpieces[k]=new Array(3);
}

/* initialising pieces positions of matrix to 0  */
for(var i=0;i<3;i++){
for(var j=0;j<3;j++){
positionsOfpieces[i][j]=0;
}
}

for(var k=0;k<3;k++){
  centerpx[k]=25+(40*k);
  centerpy[k]=25;
}
for(k=0;k<3;k++){
contextp1.beginPath();
contextp1.arc(centerpx[k],centerpy[k],radiusp,0,2*Math.PI);
contextp1.fillStyle="#90EE90";
contextp1.fill();
contextp1.lineWidth=strokeWidth;
contextp1.strokeStyle="#FFFFFF";
contextp1.stroke();
contextp2.beginPath();
contextp2.arc(centerpx[k],centerpy[k],radiusp,0,2*Math.PI);
contextp2.fillStyle="#FFB6C1";
contextp2.fill();
contextp2.lineWidth=strokeWidth;
contextp2.strokeStyle="#FFFFFF";
contextp2.stroke();
}
alert("First turn is of Player 1 and then followed by Player 2. Pieces colour of player 1 is Green and Player 2 is Red.");

newClassp1.className="active";
}

/*when mouse click happens function mouseEvent is executed*/
canvasEle.addEventListener("click",mouseEvent);
function mouseEvent(event){
  /*getting position of mouse click with respect to (0,0) of canvas */
var x=event.clientX-(canvasEle.getBoundingClientRect().x);
var y=event.clientY-(canvasEle.getBoundingClientRect().y);
/* if mouse click happens with in game board proceed and convert pixels position into position of matrix and call pieces function */
if(x>=0 && x<=400 && y>=0 && y<=400){
    if(x>=0 && x<=100){
      if(y>=0 && y<=100){pieces(0,0);}
      else if(y>=150 && y<=250){pieces(1,0);}
      else if(y>=300 && y<=400){pieces(2,0);}
    }
    else if(x>=150 && x<=250){
      if(y>=0 && y<=100){pieces(0,1);}
      else if(y>=150 && y<=250){pieces(1,1);}
      else if(y>=300 && y<=400){pieces(2,1);}
    }
    else if(x>=300 && x<=400){
      if(y>=0 && y<=100){pieces(0,2);}
      else if(y>=150 && y<=250){pieces(1,2);}
      else if(y>=300 && y<=400){pieces(2,2);}
    }
  }
}

function pieces(X,Y){
  var Xcenter;
  var Ycenter;
  if(X==0){
    if(Y==0){Xcenter=25;  Ycenter=25;}
    else if(Y==1){Xcenter=200; Ycenter=25;}
    else if(Y==2){Xcenter=375; Ycenter=25;}
  }
  else if(X==1){
    if(Y==0){Xcenter=25; Ycenter=200;}
    else if(Y==1){Xcenter=200; Ycenter=200;}
    else if(Y==2){Xcenter=375; Ycenter=200;}
  }
  else if(X==2){
    if(Y==0){Xcenter=25; Ycenter=375;}
    else if(Y==1){Xcenter=200; Ycenter=375;}
    else if(Y==2){Xcenter=375; Ycenter=375;}
  }

 if(numberOfTurns>=6 && (isRedPieceActivated || isGreenPieceActivated)){
  if(positionsOfpieces[X][Y]==1 || positionsOfpieces[X][Y]==2){
    turnOffActive(LastXcenter,LastYcenter);
  }
  else if(positionsOfpieces[X][Y]==0){
   if(positionsOfpieces[LastX][LastY]==1 && isMovePermited(LastX,LastY,X,Y)){
      numberOfTurns++;
      isGreenPieceActivated=false;
      positionsOfpieces[LastX][LastY]=0;
      contextEle.clearRect(LastXcenter-radius-strokeWidth, LastYcenter-radius-strokeWidth, (2*(radius+strokeWidth)), (2*(radius+strokeWidth)));
      positionsOfpieces[X][Y]=1;
      drawPiece(Xcenter,Ycenter,1);
      document.getElementById("turn").innerHTML="Player 2";
      document.getElementById("message").innerHTML="Click on red piece to move it";
      newClassp1.className="p1";
      newClassp2.className="active";
    }
    else if(positionsOfpieces[LastX][LastY]==2 && isMovePermited(LastX,LastY,X,Y)){
      numberOfTurns++;
      isRedPieceActivated=false;
      positionsOfpieces[LastX][LastY]=0;
      contextEle.clearRect(LastXcenter-radius-strokeWidth, LastYcenter-radius-strokeWidth, (2*(radius+strokeWidth)), (2*(radius+strokeWidth)));
      positionsOfpieces[X][Y]=2;
      drawPiece(Xcenter,Ycenter,2);
      document.getElementById("turn").innerHTML="Player 1";
      document.getElementById("message").innerHTML="click on Green piece to move it";
      newClassp1.className="active";
      newClassp2.className="p2";
    }
    else{
      turnOffActive(LastXcenter,LastYcenter);
    }
  }

}

else if(numberOfTurns<6 && positionsOfpieces[X][Y]==0){
  if(numberOfTurns%2==0){
    numberOfGreenPieces++;
    positionsOfpieces[X][Y]=1;
    contextEle.beginPath();
    contextEle.arc(Xcenter,Ycenter,radius,0,2*Math.PI);
    contextEle.fillStyle="#90EE90";
    contextEle.fill();
    contextEle.lineWidth=strokeWidth;
    contextEle.strokeStyle="#FFFFFF";
    contextEle.stroke();
    document.getElementById("turn").innerHTML="Player 2";
    document.getElementById("message").innerHTML="click on empty position to place red piece";
    newClassp1.className="p1";
    newClassp2.className="active";
    contextp1.clearRect(centerpx[greenpieces-1]-radiusp-strokeWidth, centerpy[greenpieces-1]-radiusp-strokeWidth, (2*(radiusp+strokeWidth)), (2*(radiusp+strokeWidth)));
    greenpieces--;
  }
  else{
    numberOfRedPieces++;
    positionsOfpieces[X][Y]=2;
    contextEle.beginPath();
    contextEle.arc(Xcenter,Ycenter,radius,0,2*Math.PI);
    contextEle.fillStyle="#FFB6C1";
    contextEle.fill();
    contextEle.lineWidth=strokeWidth;
    contextEle.strokeStyle="#FFFFFF";
    contextEle.stroke();
    document.getElementById("turn").innerHTML="Player 1";
    document.getElementById("message").innerHTML="click on empty position to place green piece";
    newClassp1.className="active";
    newClassp2.className="p2";

    contextp2.clearRect(centerpx[redpieces-1]-radiusp-strokeWidth, centerpy[redpieces-1]-radiusp-strokeWidth, (2*(radiusp+strokeWidth)), (2*(radiusp+strokeWidth)));
    redpieces--;
  }
  if(numberOfTurns==5){
    document.getElementById("message").innerHTML="click on a piece to move it";
  }
  numberOfTurns++;
}

else if(numberOfTurns>=6 && positionsOfpieces[X][Y]!=0){
  if(numberOfTurns%2==0 && positionsOfpieces[X][Y]==1){
    isGreenPieceActivated=true;
    document.getElementById("message").innerHTML="Move green piece by one step";
    updateLast(Xcenter,Ycenter,X,Y);
    contextEle.clearRect(Xcenter-radius-strokeWidth, Ycenter-radius-strokeWidth, (2*(radius+strokeWidth)), (2*(radius+strokeWidth)));
    contextEle.beginPath();
    contextEle.arc(Xcenter,Ycenter,radius,0,2*Math.PI);
    contextEle.fillStyle="#7FFFD4";
    contextEle.fill();
    contextEle.lineWidth=strokeWidth;
    contextEle.strokeStyle="#000000";
    contextEle.stroke();
  }
  else if(numberOfTurns%2==1 && positionsOfpieces[X][Y]==2){
    isRedPieceActivated=true;
    document.getElementById("message").innerHTML="Move red piece by one step";
    updateLast(Xcenter,Ycenter,X,Y);
    contextEle.clearRect(Xcenter-radius-strokeWidth, Ycenter-radius-strokeWidth, (2*(radius+strokeWidth)), (2*(radius+strokeWidth)));
    contextEle.beginPath();
    contextEle.arc(Xcenter,Ycenter,radius,0,2*Math.PI);
    contextEle.fillStyle="#FFE4E1";
    contextEle.fill();
    contextEle.lineWidth=strokeWidth;
    contextEle.strokeStyle="#000000";
    contextEle.stroke();
  }
}

gameOver(X,Y,positionsOfpieces[X][Y]);

}

function checkIfDhadiFormed(X,Y,playerCode){
  /* checking if Dhadi is formed horizontally or diagonally and returning true if it is formed */
  if(X==0){
    if(positionsOfpieces[0][0]==playerCode && positionsOfpieces[0][1]==playerCode && positionsOfpieces[0][2]==playerCode){return true;}
    else if(Y==0 && positionsOfpieces[0][0]==playerCode && positionsOfpieces[1][1]==playerCode && positionsOfpieces[2][2]==playerCode){return true;}
    else if(Y==2 && positionsOfpieces[0][2]==playerCode && positionsOfpieces[1][1]==playerCode && positionsOfpieces[2][0]==playerCode){return true;}
  }
  else if(X==1){
    if(positionsOfpieces[1][0]==playerCode && positionsOfpieces[1][1]==playerCode && positionsOfpieces[1][2]==playerCode){return true;}
    else if(Y==1 && positionsOfpieces[0][0]==playerCode && positionsOfpieces[1][1]==playerCode && positionsOfpieces[2][2]==playerCode){return true;}
    else if(Y==1 && positionsOfpieces[0][2]==playerCode && positionsOfpieces[1][1]==playerCode && positionsOfpieces[2][0]==playerCode){return true;}
  }
  else if(X==2){
    if(positionsOfpieces[2][0]==playerCode && positionsOfpieces[2][1]==playerCode && positionsOfpieces[2][2]==playerCode){return true;}
    else if(Y==2 && positionsOfpieces[0][0]==playerCode && positionsOfpieces[1][1]==playerCode && positionsOfpieces[2][2]==playerCode){return true;}
    else if(Y==0 && positionsOfpieces[0][2]==playerCode && positionsOfpieces[1][1]==playerCode && positionsOfpieces[2][0]==playerCode){return true;}
  }
  /* checking if Dhadi is formed vertically or diagonally and returning true if it is formed */
  if(Y==0){
    if(positionsOfpieces[0][0]==playerCode && positionsOfpieces[1][0]==playerCode && positionsOfpieces[2][0]==playerCode){return true;}
    else if(X==0 && positionsOfpieces[0][0]==playerCode && positionsOfpieces[1][1]==playerCode && positionsOfpieces[2][2]==playerCode){return true;}
    else if(X==2 && positionsOfpieces[0][2]==playerCode && positionsOfpieces[1][1]==playerCode && positionsOfpieces[2][0]==playerCode){return true;}
  }
  else if(Y==1){
    if(positionsOfpieces[0][1]==playerCode && positionsOfpieces[1][1]==playerCode && positionsOfpieces[2][1]==playerCode){return true;}
    else if(X==1 && positionsOfpieces[0][0]==playerCode && positionsOfpieces[1][1]==playerCode && positionsOfpieces[2][2]==playerCode){return true;}
    else if(X==1 && positionsOfpieces[0][2]==playerCode && positionsOfpieces[1][1]==playerCode && positionsOfpieces[2][0]==playerCode){return true;}
  }
  else if(Y==2){
    if(positionsOfpieces[0][2]==playerCode && positionsOfpieces[1][2]==playerCode && positionsOfpieces[2][2]==playerCode){return true;}
    else if(X==2 && positionsOfpieces[0][0]==playerCode && positionsOfpieces[1][1]==playerCode && positionsOfpieces[2][2]==playerCode){return true;}
    else if(X==0 && positionsOfpieces[0][2]==playerCode && positionsOfpieces[1][1]==playerCode && positionsOfpieces[2][0]==playerCode){return true;}
  }
  /*dhadi is not formed since not returned so return false*/
  return false;
}

function turnOffActive(Xc,Yc){
  contextEle.clearRect(Xc-radius-strokeWidth, Yc-radius-strokeWidth, (2*(radius+strokeWidth)), (2*(radius+strokeWidth)));
  if(isRedPieceActivated){
    contextEle.beginPath();
    contextEle.arc(Xc,Yc,radius,0,2*Math.PI);
    contextEle.fillStyle="#FFB6C1";
    contextEle.fill();
    contextEle.lineWidth=strokeWidth;
    contextEle.strokeStyle="#FFFFFF";
    contextEle.stroke();
    isRedPieceActivated=false;
  }
  else if(isGreenPieceActivated){
    contextEle.beginPath();
    contextEle.arc(Xc,Yc,radius,0,2*Math.PI);
    contextEle.fillStyle="#90EE90";
    contextEle.fill();
    contextEle.lineWidth=strokeWidth;
    contextEle.strokeStyle="#FFFFFF";
    contextEle.stroke();
    isGreenPieceActivated=false;
  }
}

function drawPiece(Xc,Yc,playerCode){
  contextEle.beginPath();
  contextEle.arc(Xc,Yc,radius,0,2*Math.PI);
  if(playerCode==2){contextEle.fillStyle="#FFB6C1";}
  else if(playerCode==1){contextEle.fillStyle="#90EE90";}
  contextEle.fill();
  contextEle.lineWidth=strokeWidth;
  contextEle.strokeStyle="#FFFFFF";
  contextEle.stroke();
}

function isMovePermited(Lx,Ly,x,y){
  if(x==Lx && (y==Ly-1 || y==Ly+1)){return true;}
  else if(y==Ly && (x==Lx-1 || x==Lx+1)){return true;}
  else if(x==Lx-1 && y==Ly-1){return true;}
  else if(x==Lx+1 && y==Ly+1){return true;}
  else if(x==Lx-1 && y==Ly+1){return true;}
  else if(x==Lx+1 && y==Ly-1){return true;}
  return false;
}

function updateLast(Xcenter,Ycenter,x,y){
  LastXcenter=Xcenter;
  LastYcenter=Ycenter;
  LastX=x;
  LastY=y;
}

function gameOver(x,y,pc){
  if(checkIfDhadiFormed(x,y,pc)){
    if(pc==1){
      alert("Player 1 wins the game since green dhadi formed");
      location.reload();
    }
    else{
      alert("Player 2 wins the game since red dhadi formed");
      location.reload();
    }
  }
}
