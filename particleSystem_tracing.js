let myball = [];
let timer = 0;
let counter = 0;
let emmiterX = [];
let emmiterY = [];
let fontsize = 150;


function setup() {
    createCanvas(1920, 950 );
    //textFont(font);
    textSize(fontsize);
    textAlign(CENTER, CENTER);
    
    emmiterX = [293,252,212,171,134,109,93,88,89,100,123,154,188,229,269,308,398,398,398,398,398,398,398,419,446,477,597,638,678,719,716,
        698,668,627,592,567,556,556,567,588,622,663,703,830,866,907,941,952,957,957,958,962,919,878,841,820,820,851,891,922,1044,1085,1125,
        1166,1090,1089,1089,1089,1089,1095,1106,1136,1166,1261,1261,1261,1261,1261,1261,1261,1261,1369,1382,1396,1409,1422,1430,1450,1471,
        1482,1495,1508,1522,1533,1662,1703,1743,1784,1781,1763,1733,1692,1657,1632,1621,1621,1632,1653,1687,1728,1768];
    emmiterY = [ 240, 235, 235, 248, 267, 299, 335, 375, 416, 457, 490, 515, 530, 536, 532, 520, 308, 349, 390, 430, 471, 512, 553, 369, 
        342, 325, 420, 420, 420, 420, 382, 349, 325, 321, 340, 369, 403, 444, 479, 512, 530, 533, 525, 335, 325, 325, 346, 383, 424, 461, 
        500, 541, 411, 416, 432, 465, 505, 532, 530, 515, 328, 329, 329, 329, 254, 294, 367, 408, 449, 486, 520, 536, 532, 246, 328, 359, 
        391, 424, 461, 495, 530, 325, 361, 396, 430, 465, 500, 530, 499, 465, 432, 400, 366, 329, 420, 420, 420, 420, 382, 349, 325, 321, 
        340, 369, 403, 444, 479, 512, 530, 533, 525];
    
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

    noFill();
    stroke(0);
    text('Coding', 1540, 700);
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
        this.xacc = map(mouseX,0,width,-0.7,0.7);
        this.yacc = map(mouseY,0,height,-0.7,0.7);
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
        stroke(0);
        let drawsize = this.size * sin(map(this.life, 25,0,0,PI)) * this.life * 0.1;
        ellipse(this.x, this.y, drawsize, drawsize);
    }

}

