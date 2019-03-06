let myball = [];
let count = 100;

function setup() {
    createCanvas(1920, 1080 );
    
}

function draw() {
    background(255);

    for(let i=0; i<50; i++){
        myball.push(new particle(random(0,width),500,20));
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
        this.yacc = 0;
        this.size = random(1,30);
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
        fill(this.r,0,this.b,20*this.life);
        stroke(255,20*this.life);
        strokeWeight(1);
        ellipse(this.x, this.y, this.size, this.size);
    }

}

