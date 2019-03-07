let myball = [];
let count = 100;
let emmiterX = [];
let emmiterY = [];

function setup() {
    createCanvas(1920, 1080 );
    emmiterX = [441,400,358,319,293,287,291,316,354,400,441,532,491,449,410,384,378,382,407,445,491,532,671,713,738,738,718,918,873,832,817,829,
        868,917,951,951,951,951,951,951,1051,1051,1051,1051,1051,1147,1147,1147,1147,1199,1246,1265,1265,1265,1449,1395,1360,1359,1395,1449,1488,
        1488,1488,1486,1476,1434,1380,671,630,603,606,628,522,522,522,522,522,552,582,688,728,768,761,735,690,656,643,645,666,710,755,1501,1541,
        1581,1574,1548,1503,1469,1456,1458,1479,1523,1568,855,898,933,947,907,870,840,855,903,948,948,948,1017,1088,1050,1051,1051,1051,1051,1081,
        1177,1177,1177,1177,1177,1177,1261,1276,1291,1304,1325,1345,1359,1374,1385];
    emmiterY = [ 199, 192, 199, 222, 262, 306, 350, 390, 416, 421, 416, 582, 575, 582, 605, 645, 689, 733, 773, 799, 804, 799, 645, 659, 699, 743, 
        788, 659, 645, 674, 728, 774, 804, 791, 570, 615, 660, 708, 758, 803, 585, 651, 698, 743, 791, 651, 693, 738, 789, 651, 656, 693, 738, 789, 
        656, 651, 693, 753, 796, 788, 651, 703, 753, 803, 848, 876, 873, 806, 791, 748, 699, 660, 266, 306, 346, 384, 420, 281, 266, 336, 336, 336, 
        299, 266, 262, 287, 325, 369, 406, 423, 418, 335, 335, 335, 298, 265, 261, 286, 324, 368, 405, 422, 417, 269, 262, 276, 306, 329, 339, 372, 
        416, 416, 342, 380, 418, 266, 266, 222, 266, 306, 350, 395, 421, 203, 269, 309, 344, 380, 418, 269, 309, 346, 383, 418, 379, 342, 306, 269];
    
}

function draw() {
    background(255);

    emmiterX[138]= mouseX;
    emmiterY[138]= mouseY;

    for(let i=0; i< emmiterX.length; i++){
        myball.push(new particle(emmiterX[i],emmiterY[i],20));
    }

    

    for(let i = myball.length-1; i>=0; i--){
        myball[i].move();
        //myball[i].checkEdge();
        myball[i].display();
        
        if(myball[i].life < 0){
            myball.splice(i,1);
        }
    }
}

class particle{
    constructor(temx,temy,teml){
        this.life = teml;
        this.startx = temx;
        this.starty = temy;
        this.x = temx;
        this.y = temy;
        this.xspeed = random(-3,3);
        this.yspeed = random(-3,3);
        this.xacc = 0;
        this.yacc = 0.5;
        this.size = random(10,50);
        this.r = random(70,130);
        this.b = random(70,130);
    }

    move(){
        this.xspeed += this.xacc;
        this.yspeed += this.yacc;
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.life = this.life -1 ; 
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
        fill(this.r,0,this.b);
        stroke(255);
        strokeWeight(1);
        ellipse(this.x, this.y, this.size * this.life * 0.1, this.size * this.life * 0.1);
    }

}

