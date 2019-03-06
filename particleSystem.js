let myball = [];
let count = 200;

function setup() {
    createCanvas(1000, 800 );
    for(let i=0; i<count; i++){
        myball.push(new particle(width/2,100));
    }
}

function draw() {
    background(255);
    for(let i=0; i<count; i++){
        myball[i].move();
        myball[i].checkEdge();
        myball[i].display();
    }
}

class particle{
    constructor(temx,temy){
        this.startx = temx;
        this.starty = temy;
        this.x = temx;
        this.y = temy;
        this.xspeed = random(-5,5);
        this.yspeed = random(-5,5);
        this.xacc = 0;
        this.yacc = 0.1;
        this.size = random(10,50);
        this.r = random(70,130);
        this.b = random(70,130);
    }

    move(){
        this.xspeed += this.xacc;
        this.yspeed += this.yacc;
        this.x += this.xspeed;
        this.y += this.yspeed;
    }

    // checkEdge(){
    //     if(this.x > width - this.size/2 || this.x < this.size ){
    //         this.xspeed *= -1;
    //     }
    //     if(this.y > height - this.size || this.y < this.size ){
    //         this.yspeed *= -1;
    //     }
    // }

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
        stroke(0);
        strokeWeight(1);
        ellipse(this.x, this.y, this.size, this.size);
    }

}