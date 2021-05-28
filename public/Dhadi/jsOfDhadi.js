
var positionsOfpieces=new Array(7);
var radius=20;
var strokeWidth=1;
var isRedDhadiFormed=false;
var isGreenDhadiFormed=false;
var numberOfTurns=0;
var numberOfRedPieces=0;
var numberOfGreenPieces=0;
var canvasEle=document.getElementById("canvassElement");
var contextEle=canvasEle.getContext("2d");
var isRedPieceActivated=false;
var isGreenPieceActivated=false;
var isThreeGreenPiecesLeft=false;
var isThreeRedPiecesLeft=false;
var LastXcenter=0;
var LastYcenter=0;
var LastX=0;
var LastY=0;
var canvasp1=document.getElementById("player1");
var canvasp2=document.getElementById("player2");
var contextp1=canvasp1.getContext("2d");
var contextp2=canvasp2.getContext("2d");
var radiusp=16;
var centerpx=new Array(9);
var centerpy=new Array(9);
var redpieces=9;
var greenpieces=9;
var classp1=document.getElementsByClassName("p1");
var classp2=document.getElementsByClassName("p2");
var newClassp1=classp1[0];
var newClassp2=classp2[0];
function beginGame(){

/* Dhadi board is represented by a 7X7 matrix */
for(var k=0;k<7;k++){
positionsOfpieces[k]=new Array(7);
}

/* initialising pieces positions of matrix to 0 and remaining positions to -1 */
for(var i=0;i<7;i++){
for(var j=0;j<7;j++){
if(i==3 || j==3 || (i==j) || (i+j==6)){
positionsOfpieces[i][j]=0;
}
else{
positionsOfpieces[i][j]=-1;
}
}
}
positionsOfpieces[3][3]=-1;

for(var k=0;k<9;k++){
  centerpx[k]=25+(40*k);
  centerpy[k]=25;
}
for(k=0;k<9;k++){
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
if(x>=0 && x<=585 && y>=0 && y<=585){
    if(x>=0 && x<=75){
      if(y>=0 && y<=75){pieces(0,0);}
      else if(y>=255 && y<=330){pieces(3,0);}
      else if(y>=510 && y<=585){pieces(6,0);}
    }
    else if(x>=85 && x<=160){
      if(y>=85 && y<= 160){pieces(1,1);}
      else if(y>=255 && y<=330){pieces(3,1);}
      else if(y>=425 && y<=500){pieces(5,1);}
    }
    else if(x>=170 && x<=245){
      if(y>=170 && y<=245){pieces(2,2);}
      else if(y>=255 && y<=330){pieces(3,2);}
      else if(y>=340 && y<=415){pieces(4,2);}
    }
    else if(x>=255 && x<=330){
      if(y>=0 && y<=75){pieces(0,3);}
      else if(y>=85 && y<=160){pieces(1,3);}
      else if(y>=170 && y<=245){pieces(2,3);}
      else if(y>=340 && y<=415){pieces(4,3);}
      else if(y>=425 && y<=500){pieces(5,3);}
      else if(y>=510 && y<=585){pieces(6,3);}
    }
    else if(x>=340 && x<=415){
      if(y>=170 && y<=245){pieces(2,4);}
      else if(y>=255 && y<=330){pieces(3,4);}
      else if(y>=340 && y<=415){pieces(4,4);}
    }
    else if(x>=425 && x<=500){
      if(y>=85 && y<=160){pieces(1,5);}
      else if(y>=255 && y<=330){pieces(3,5);}
      else if(y>=425 && y<=500){pieces(5,5);}
    }
    else if(x>=510 && x<=585){
      if(y>=0 && y<=75){pieces(0,6);}
      else if(y>=255 && y<=330){pieces(3,6);}
      else if(y>=510 && y<=585){pieces(6,6);}
    }
  }
}

function pieces(X,Y){
  var Xcenter;
  var Ycenter;
  if(X==0){
    if(Y==0){Xcenter=25;  Ycenter=25;}
    else if(Y==3){Xcenter=292; Ycenter=25;}
    else if(Y==6){Xcenter=560; Ycenter=25;}
  }
  else if(X==1){
    if(Y==1){Xcenter=114; Ycenter=114;}
    else if(Y==3){Xcenter=292; Ycenter=114;}
    else if(Y==5){Xcenter=471; Ycenter=114;}
  }
  else if(X==2){
    if(Y==2){Xcenter=203; Ycenter=203;}
    else if(Y==3){Xcenter=292; Ycenter=203;}
    else if(Y==4){Xcenter=382; Ycenter=203;}
  }
  else if(X==3){
    if(Y==0){Xcenter=25; Ycenter=292;}
    else if(Y==1){Xcenter=114; Ycenter=292;}
    else if(Y==2){Xcenter=203; Ycenter=292;}
    else if(Y==4){Xcenter=382; Ycenter=292;}
    else if(Y==5){Xcenter=471; Ycenter=292;}
    else if(Y==6){Xcenter=560; Ycenter=292;}
  }
  else if(X==4){
    if(Y==2){Xcenter=203; Ycenter=382;}
    else if(Y==3){Xcenter=292; Ycenter=382;}
    else if(Y==4){Xcenter=382; Ycenter=382;}
  }
  else if(X==5){
    if(Y==1){Xcenter=114; Ycenter=471;}
    else if(Y==3){Xcenter=292; Ycenter=471;}
    else if(Y==5){Xcenter=471; Ycenter=471;}
  }
  else if(X==6){
    if(Y==0){Xcenter=25; Ycenter=560;}
    else if(Y==3){Xcenter=292; Ycenter=560;}
    else if(Y==6){Xcenter=560; Ycenter=560;}
  }

if(isRedDhadiFormed || isGreenDhadiFormed){
  var playerTurn=(isGreenDhadiFormed) ? 1 : 2 ;
  if(positionsOfpieces[X][Y]!=playerTurn && positionsOfpieces[X][Y]!=0){
    if(!checkIfItIsPartOfDhadi(X,Y,((isRedDhadiFormed) ? 1 : 2)) || areAllPartOfDhadi(((isRedDhadiFormed) ? 1 : 2))){
      if(playerTurn==1){
        numberOfRedPieces--;
        document.getElementById("message").innerHTML="Red piece is removed";
        document.getElementById("turn").innerHTML="Player 2";
        newClassp1.className="p1";
        newClassp2.className="active";
      }
      else{
        numberOfGreenPieces--;
        document.getElementById("message").innerHTML="Green piece is removed";
        document.getElementById("turn").innerHTML="Player 1";
        newClassp1.className="active";
        newClassp2.className="p2";
      }
      contextEle.clearRect(Xcenter-radius-strokeWidth, Ycenter-radius-strokeWidth, (2*(radius+strokeWidth)), (2*(radius+strokeWidth)));
      positionsOfpieces[X][Y]=0;
      turnOffDhadiFormed();
      update();
    }
    else{
      document.getElementById("message").innerHTML="A piece which is a part of Dhadi cant be removed";
    }
  }
}

else if(numberOfTurns>=18 && (isRedPieceActivated || isGreenPieceActivated)){
  if(positionsOfpieces[X][Y]==1 || positionsOfpieces[X][Y]==2){
    turnOffActive(LastXcenter,LastYcenter);
  }
  else if(positionsOfpieces[X][Y]==0){
    if(positionsOfpieces[LastX][LastY]==1 && isThreeGreenPiecesLeft){
      numberOfTurns++;
      isGreenPieceActivated=false;
      positionsOfpieces[LastX][LastY]=0;
      contextEle.clearRect(LastXcenter-radius-strokeWidth, LastYcenter-radius-strokeWidth, (2*(radius+strokeWidth)), (2*(radius+strokeWidth)));
      positionsOfpieces[X][Y]=1;
      drawPiece(Xcenter,Ycenter,1);
      if(checkIfItIsPartOfDhadi(X,Y,1)){
        isGreenDhadiFormed=true;
        document.getElementById("turn").innerHTML="Player 1";
        document.getElementById("message").innerHTML="A green Dhadi is formed. Click on red piece to remove it.";
        newClassp1.className="active";
        newClassp2.className="p2";
      }
      else{
        document.getElementById("turn").innerHTML="Player 2";
        document.getElementById("message").innerHTML="Click on red piece to move it";
        newClassp1.className="p1";
        newClassp2.className="active";
      }
    }
    else if(positionsOfpieces[LastX][LastY]==2 && isThreeRedPiecesLeft){
      numberOfTurns++;
      isRedPieceActivated=false;
      positionsOfpieces[LastX][LastY]=0;
      contextEle.clearRect(LastXcenter-radius-strokeWidth, LastYcenter-radius-strokeWidth, (2*(radius+strokeWidth)), (2*(radius+strokeWidth)));
      positionsOfpieces[X][Y]=2;
      drawPiece(Xcenter,Ycenter,2);
      if(checkIfItIsPartOfDhadi(X,Y,2)){
        isRedDhadiFormed=true;
        document.getElementById("turn").innerHTML="Player 2";
        document.getElementById("message").innerHTML="A red Dhadi is formed. Click on green piece to remove it.";
        newClassp1.className="p1";
        newClassp2.className="active";
      }
      else{
        document.getElementById("turn").innerHTML="Player 1";
        document.getElementById("message").innerHTML="click on Green piece to move it";
        newClassp1.className="active";
        newClassp2.className="p2";
      }
    }
    else if(positionsOfpieces[LastX][LastY]==1 && isMovePermited(LastX,LastY,X,Y)){
      numberOfTurns++;
      isGreenPieceActivated=false;
      positionsOfpieces[LastX][LastY]=0;
      contextEle.clearRect(LastXcenter-radius-strokeWidth, LastYcenter-radius-strokeWidth, (2*(radius+strokeWidth)), (2*(radius+strokeWidth)));
      positionsOfpieces[X][Y]=1;
      drawPiece(Xcenter,Ycenter,1);
      if(checkIfItIsPartOfDhadi(X,Y,1)){
        isGreenDhadiFormed=true;
        document.getElementById("turn").innerHTML="Player 1";
        document.getElementById("message").innerHTML="A green Dhadi is formed. Click on red piece to remove it.";
        newClassp1.className="active";
        newClassp2.className="p2";
      }
      else{
        document.getElementById("turn").innerHTML="Player 2";
        document.getElementById("message").innerHTML="Click on red piece to move it";
        newClassp1.className="p1";
        newClassp2.className="active";
      }
    }
    else if(positionsOfpieces[LastX][LastY]==2 && isMovePermited(LastX,LastY,X,Y)){
      numberOfTurns++;
      isRedPieceActivated=false;
      positionsOfpieces[LastX][LastY]=0;
      contextEle.clearRect(LastXcenter-radius-strokeWidth, LastYcenter-radius-strokeWidth, (2*(radius+strokeWidth)), (2*(radius+strokeWidth)));
      positionsOfpieces[X][Y]=2;
      drawPiece(Xcenter,Ycenter,2);
      if(checkIfItIsPartOfDhadi(X,Y,2)){
        isRedDhadiFormed=true;
        document.getElementById("turn").innerHTML="Player 2";
        document.getElementById("message").innerHTML="A red Dhadi is formed. Click on green piece to remove it.";
        newClassp1.className="p1";
        newClassp2.className="active";
      }
      else{
        document.getElementById("turn").innerHTML="Player 1";
        document.getElementById("message").innerHTML="click on Green piece to move it";
        newClassp1.className="active";
        newClassp2.className="p2";
      }
    }
    else{
      turnOffActive(LastXcenter,LastYcenter);
    }
  }

}

else if(numberOfTurns<18 && positionsOfpieces[X][Y]==0){
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
    if(checkIfItIsPartOfDhadi(X,Y,1)){
      isGreenDhadiFormed=true;
      document.getElementById("turn").innerHTML="Player 1";
      document.getElementById("message").innerHTML="A green Dhadi is formed. Click on red piece to remove it.";
      newClassp1.className="active";
      newClassp2.className="p2";
    }
    else{
      document.getElementById("turn").innerHTML="Player 2";
      document.getElementById("message").innerHTML="click on empty position to place red piece";
      newClassp1.className="p1";
      newClassp2.className="active";
    }
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
    if(checkIfItIsPartOfDhadi(X,Y,2)){
      isRedDhadiFormed=true;
      document.getElementById("turn").innerHTML="Player 2";
      document.getElementById("message").innerHTML="A red Dhadi is formed. Click on green piece to remove it.";
      newClassp1.className="p1";
      newClassp2.className="active";
    }
    else{
      document.getElementById("turn").innerHTML="Player 1";
      document.getElementById("message").innerHTML="click on empty position to place green piece";
      newClassp1.className="active";
      newClassp2.className="p2";
    }
    contextp2.clearRect(centerpx[redpieces-1]-radiusp-strokeWidth, centerpy[redpieces-1]-radiusp-strokeWidth, (2*(radiusp+strokeWidth)), (2*(radiusp+strokeWidth)));
    redpieces--;
  }
  if(numberOfTurns==17){
    document.getElementById("message").innerHTML="click on a piece to move it";
  }
  numberOfTurns++;
}

else if(numberOfTurns>=18 && positionsOfpieces[X][Y]!=0){
  if(numberOfTurns%2==0 && positionsOfpieces[X][Y]==1){
    isGreenPieceActivated=true;
    if(checkThreePiecesLeft(1)){
      isThreeGreenPiecesLeft=true;
      document.getElementById("message").innerHTML="You can move green piece to any empty place since only 3 pieces left";
    }
    else{
      document.getElementById("message").innerHTML="Move green piece by one step";
    }
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
    if(checkThreePiecesLeft(2)){
      isThreeRedPiecesLeft=true;
      document.getElementById("message").innerHTML="You can move red piece to any empty place since only 3 pieces left";
    }
    else{
      document.getElementById("message").innerHTML="Move red piece by one step";
    }
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

gameOver();

}

function checkIfItIsPartOfDhadi(X,Y,playerCode){
  /* checking if Dhadi is formed horizontally and returning true if it is formed */
  if(X==0){
    if(positionsOfpieces[0][0]==playerCode && positionsOfpieces[0][3]==playerCode && positionsOfpieces[0][6]==playerCode){return true;}
  }
  else if(X==1){
    if(positionsOfpieces[1][1]==playerCode && positionsOfpieces[1][3]==playerCode && positionsOfpieces[1][5]==playerCode){return true;}
  }
  else if(X==2){
    if(positionsOfpieces[2][2]==playerCode && positionsOfpieces[2][3]==playerCode && positionsOfpieces[2][4]==playerCode){return true;}
  }
  else if(X==3){
    if(Y<3){if(positionsOfpieces[3][0]==playerCode && positionsOfpieces[3][1]==playerCode && positionsOfpieces[3][2]==playerCode){return true;}}
    else{if(positionsOfpieces[3][4]==playerCode && positionsOfpieces[3][5]==playerCode && positionsOfpieces[3][6]==playerCode){return true;}}
  }
  else if(X==4){
    if(positionsOfpieces[4][2]==playerCode && positionsOfpieces[4][3]==playerCode && positionsOfpieces[4][4]==playerCode){return true;}
  }
  else if(X==5){
    if(positionsOfpieces[5][1]==playerCode && positionsOfpieces[5][3]==playerCode && positionsOfpieces[5][5]==playerCode){return true;}
  }
  else if(X==6){
    if(positionsOfpieces[6][0]==playerCode && positionsOfpieces[6][3]==playerCode && positionsOfpieces[6][6]==playerCode){return true;}
  }
  /* checking if Dhadi is formed vertically and returning true if it is formed */
  if(Y==0){
    if(positionsOfpieces[0][0]==playerCode && positionsOfpieces[3][0]==playerCode && positionsOfpieces[6][0]==playerCode){return true;}
  }
  else if(Y==1){
    if(positionsOfpieces[1][1]==playerCode && positionsOfpieces[3][1]==playerCode && positionsOfpieces[5][1]==playerCode){return true;}
  }
  else if(Y==2){
    if(positionsOfpieces[2][2]==playerCode && positionsOfpieces[3][2]==playerCode && positionsOfpieces[4][2]==playerCode){return true;}
  }
  else if(Y==3){
    if(X<3){if(positionsOfpieces[0][3]==playerCode && positionsOfpieces[1][3]==playerCode && positionsOfpieces[2][3]==playerCode){return true;}}
    else{if(positionsOfpieces[4][3]==playerCode && positionsOfpieces[5][3]==playerCode && positionsOfpieces[6][3]==playerCode){return true;}}
  }
  else if(Y==4){
    if(positionsOfpieces[2][4]==playerCode && positionsOfpieces[3][4]==playerCode && positionsOfpieces[4][4]==playerCode){return true;}
  }
  else if(Y==5){
    if(positionsOfpieces[1][5]==playerCode && positionsOfpieces[3][5]==playerCode && positionsOfpieces[5][5]==playerCode){return true;}
  }
  else if(Y==6){
    if(positionsOfpieces[0][6]==playerCode && positionsOfpieces[3][6]==playerCode && positionsOfpieces[6][6]==playerCode){return true;}
  }
  /*dhadi is not formed since not returned so return false*/
  return false;
}

function areAllPartOfDhadi(playerCode){
  /*if atleast one of the piece of given playerCode is not part of Dhadi return false*/
for(var i=0;i<7;i++){
  for(var j=0;j<7;j++){
    if(positionsOfpieces[i][j]==playerCode){
      if(!(checkIfItIsPartOfDhadi(i,j,playerCode))){return false;}
    }
  }
}
return true;
}

function turnOffDhadiFormed(){
  isRedDhadiFormed=false;
  isGreenDhadiFormed=false;
}

function update(){
  if(numberOfTurns%2==0){document.getElementById("turn").innerHTML="Player 1";}
  else{document.getElementById("turn").innerHTML="Player 2";}
  if(numberOfTurns<17){document.getElementById("message").innerHTML="click on empty position to place your piece";}
  else{document.getElementById("message").innerHTML="Move the piece";}
}

function checkThreePiecesLeft(playerCode){
  if(numberOfTurns>=18){
    if(playerCode==1 && numberOfGreenPieces==3){
      return true;
    }
    else if(playerCode==2 && numberOfRedPieces==3){
      return true;
    }
  }
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
  var i=Lx;
  var j=Ly-1;
  if(j>=0 && positionsOfpieces[i][j]==0 && i==x && j==y){return true;}
  while(j>0 && positionsOfpieces[i][j]==-1){
    j--;
    if(j>=0 && positionsOfpieces[i][j]==0 && i==x && j==y){return true;}
  }
  i=Lx;
  j=Ly+1;
  if(j<=6 && positionsOfpieces[i][j]==0 && i==x && j==y){return true;}
  while(j<6 && positionsOfpieces[i][j]==-1){
    j=j+1;
    if(j<=6 && positionsOfpieces[i][j]==0 && i==x && j==y){return true;}
  }
  i=Lx-1;
  j=Ly;
  if(i>=0 && positionsOfpieces[i][j]==0 && i==x && j==y){return true;}
  while(i>0 && positionsOfpieces[i][j]==-1){
    i--;
    if(i>=0 && positionsOfpieces[i][j]==0 && i==x && j==y){return true;}
  }
  i=Lx+1;
  j=Ly;
  if(i<=6 && positionsOfpieces[i][j]==0 && i==x && j==y){return true;}
  while(i<6 && positionsOfpieces[i][j]==-1){
    i=i+1;
    if(i<=6 && positionsOfpieces[i][j]==0 && i==x && j==y){return true;}
  }
  return false;
}
function updateLast(Xcenter,Ycenter,x,y){
  LastXcenter=Xcenter;
  LastYcenter=Ycenter;
  LastX=x;
  LastY=y;
}

function canMove(playerCode){
  if(playerCode==1 && numberOfGreenPieces==3){return true;}
  else if(playerCode==2 && numberOfRedPieces==3){return true;}
  else {
    var j1=0;
    var i1=0;
    for(var i=0;i<7;i++){
      for(var j=0;j<7;j++){
        if(positionsOfpieces[i][j]==playerCode){
          j1=j-1;
          if(j1>=0 && positionsOfpieces[i][j1]==0){return true;}
          while(j1>0 && positionsOfpieces[i][j]==-1){
            j1--;
            if(positionsOfpieces[i][j1]==0){return true;}
          }
          j1=j+1;
          if(j1<=6 && positionsOfpieces[i][j1]==0){return true;}
          while(j1<6 && positionsOfpieces[i][j1]==-1){
            j1++;
            if(positionsOfpieces[i][j1]==0){return true;}
          }
          i1=i-1;
          if(i1>=0 && positionsOfpieces[i1][j]==0){return true;}
          while(i1>0 && positionsOfpieces[i1][j]==-1){
            i1--;
            if(positionsOfpieces[i1][j]==0){return true;}
          }
          i1=i+1;
          if(i1<=6 && positionsOfpieces[i1][j]==0){return true;}
          while(i1<6 && positionsOfpieces[i1][j]==-1){
            i1++;
            if(positionsOfpieces[i1][j]==0){return true;}
          }
        }
      }
    }
  }
  return false;
}
function gameOver(){
  if(numberOfTurns>=18){
    if(numberOfRedPieces<3){
      alert("Player 1 wins the game since only two pieces of red left");
      location.reload();
    }
    else if(numberOfGreenPieces<3){
      alert("Player 2 wins the game since only two pieces of green left");
      location.reload();
    }
    else if(!canMove(1)){
      alert("Player 2 wins the game since green has no way to move pieces");
      location.reload();
    }
    else if(!canMove(2)){
      alert("Player 1 wins the game since red has no way to move pieces");
      location.reload();
    }
  }
}
