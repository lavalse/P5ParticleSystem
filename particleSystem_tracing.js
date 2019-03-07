let myball = [];
let timer = 0;
let counter = 0;
let emmiterX = [];
let emmiterY = [];

function setup() {
    createCanvas(1920, 800 );
    
    emmiterX = [442,411,380,349,321,302,290,286,287,295,313,336,362,393,424,453,522,522,522,522,522,522,522,538,558,582,673,704,735,
        766,764,750,727,696,669,650,642,642,650,666,692,723,754,850,878,909,935,943,947,947,948,951,918,887,859,843,843,866,897,920,
        1013,1044,1075,1106,1048,1047,1047,1047,1047,1052,1060,1083,1106,1178,1178,1178,1178,1178,1178,1178,1178,1260,1270,1281,1291,
        1301,1307,1322,1338,1346,1356,1366,1377,1385,1483,1514,1545,1576,1574,1560,1537,1506,1479,1460,1452,1452,1460,1476,1502,1533,1564];
    emmiterY = [  198, 194, 194, 204, 219, 243, 270, 301, 332, 363, 388, 407, 419, 423, 420, 411, 250, 281, 312, 343, 374, 405, 436, 296, 
        276, 263, 335, 335, 335, 335, 306, 281, 263, 260, 274, 296, 322, 353, 380, 405, 419, 421, 415, 270, 263, 263, 279, 307, 338, 366, 
        396, 427, 328, 332, 344, 369, 400, 420, 419, 407, 265, 266, 266, 266, 209, 239, 295, 326, 357, 385, 411, 423, 420, 203, 265, 289, 
        313, 338, 366, 392, 419, 263, 290, 317, 343, 369, 396, 419, 395, 369, 344, 320, 294, 266, 335, 335, 335, 335, 306, 281, 263, 260, 
        274, 296, 322, 353, 380, 405, 419, 421, 415];
    
}

function draw() {
    background(255);
    counter = timer % 3;

    emmiterX[111]= mouseX;
    emmiterY[111]= mouseY;

    for(let i=counter; i< emmiterX.length; i+=3){
        myball.push(new particle(emmiterX[i],emmiterY[i],25));        
    }

    for(let i = myball.length-1; i>=0; i--){
        myball[i].addForce();
        myball[i].move();
        //myball[i].checkEdge();
        myball[i].display();
        
        if(myball[i].life < 0){
            myball.splice(i,1);
        }
    }
    timer ++;
}

class particle{
    constructor(temx,temy,teml){
        this.life = teml;
        this.startx = temx;
        this.starty = temy;
        this.x = temx;
        this.y = temy;
        this.xspeed = random(-1.5,1.5);
        this.yspeed = random(-1.5,1.5);
        this.xacc = 0;
        this.yacc = 0;
        this.size = random(10,50);
        this.r = random(100,255);
        this.g = random(10,50);
        this.b = random(100,255);
    }

    move(){
        this.xspeed += this.xacc;
        this.yspeed += this.yacc;
        this.x += this.xspeed ;
        this.y += this.yspeed ;
        this.life = this.life -1 ; 
    }

    addForce(){        
        this.xacc = map(mouseX,0,width,-0.5,0.5);
        this.yacc = map(mouseY,0,height,-0.5,0.5);
    }

    checkEdge(){
        if(this.x > width - this.size/2 || this.x < this.size ){
            this.xspeed *= -1;
        }
        if(this.y > height){
            this.x = this.startx;
            this.y = this.starty;
            this.yspeed = random(-3,3);
        }

    }

    display(){
        fill(this.r,0,this.b,this.life*10);
        stroke(255);
        noStroke();
        ellipse(this.x, this.y, this.size * this.life * 0.05, this.size * this.life * 0.05);
    }

}

