let img1;
var angle = -225;
let particles = [];
let newmoon = [];
let crescent = [];
let firstquarter = [];
let gibbous = [];
let fullmoon = [];
let disseminating = [];
let lastquarter = [];
let balsamic = [];

function preload() {
  img1 = loadImage('assets/graph4.png');
 }

function setup() {
 createCanvas (800,800);
 newmoon[0] = loadImage('assets/moon1.png');
 newmoon[1] = loadImage('assets/moon2.png');
 crescent[0] = loadImage('assets/earthwobble.png');
 crescent[1] = loadImage('assets/moon3.png');
 firstquarter[0] = loadImage('assets/venus2.png');
 firstquarter[1] = loadImage('assets/venus3.png');
 gibbous[0] = loadImage('assets/laussel.png');
 gibbous[1] = loadImage('assets/lausselmoon.png');
 fullmoon[0] = loadImage('assets/z1.png');
 fullmoon[1] = loadImage('assets/z2.png');
 disseminating[0] = loadImage('assets/catal1.png');
 disseminating[1] = loadImage('assets/catal2.png');
 lastquarter[0] = loadImage('assets/firstauthor.png');
 lastquarter[1] = loadImage('assets/firstauthorround.png');
 balsamic[0] = loadImage('assets/mothermary.png');
 balsamic[1] = loadImage('assets/lilith.png');
 textAlign(LEFT);

 for (var i = 0; i < 100; i++) {
		particles.push(new Particle);
	}
}

function draw() {
	background(0);

	push();
  	imageMode(CENTER);
  	translate(width/2, height/2);
  	image(img1, 0, 0);
  	pop();

 textAlign(LEFT);
 textSize(25);
 fill(255);

	angle+= -0.1;
	angle = angle%360;

  	moon(angle);
  	print(angle);

  	if(angle < -225 && angle > -226){//trigger new moon
  		print('respawn');
  		for (var i = 0; i < particles.length; i++) {
  			particles[i].respawn(0);
  		}
  	}

  	if(angle < -225 && angle > -265){
  		text('earth & theia collide to birth the moon ~  4.5 billion years BCE', 10, 25);
  	}

  	if(angle < -270 && angle > -271){//trigger crescent
  		print('respawn');
  		for (var i = 0; i < particles.length; i++) {
  			particles[i].respawn(1);
  		}
  	}

  	if(angle < -270 && angle > -310){
  		text('moon limits earth wobble, enabling organic life ~ ongoing', 10, 25);
  	}

  	if(angle < -315 && angle > -316){//trigger firstquarter
  		print('respawn');
  		for (var i = 0; i < particles.length; i++) {
  			particles[i].respawn(2);
  		}
  	}

  	if(angle < -315 && angle > -355){
  		text('human celebration of life: Venus of Willendorf ~ 25,000 BCE', 10, 25);
  	}

  	if(angle < -0 && angle > -1){//trigger gibbous
  		print('respawn');
  		for (var i = 0; i < particles.length; i++) {
  			particles[i].respawn(3);
  		}
  	}

  	if(angle < -0 && angle > -40){
  		text('connecting moon, time & human life: Venus of Laussel ~ 23,000 BCE', 10, 25);
  	}

  	if(angle < -45 && angle > -46){//trigger fullmoon
  		print('respawn');
  		for (var i = 0; i < particles.length; i++) {
  			particles[i].respawn(4);
  		}
  	}

  	if(angle < -45 && angle > -85){
  		text('connecting human & animal life: Zaraysk Venuses ~ 18,000 BCE', 10, 25);
  	}


  	if(angle < -90 && angle > -91){//trigger disseminating
  		print('respawn');
  		for (var i = 0; i < particles.length; i++) {
  			particles[i].respawn(5);
  		}
  	}

  	if(angle < -90 && angle > -130){
  		text('giving thanks: Grain Goddess of Catal Huyuk ~ 8,000 BCE', 10, 25);
  	}

  	if(angle < -135 && angle > -136){//trigger lastquarter
  		print('respawn');
  		for (var i = 0; i < particles.length; i++) {
  			particles[i].respawn(6);
  		}
  	}

    if(angle < -135 && angle > -175){//trigger new moon
  		text('Enheduanna, high priestess of the Mesopotemian moongod ~ 3,000 BCE', 10, 25);
  	}

  	if(angle < -180 && angle > -181){//trigger balsamic
  		print('respawn');
  		for (var i = 0; i < particles.length; i++) {
  			particles[i].respawn(7);
  		}
  	}

  	if(angle < -180 && angle > -220){
  		text('biblical perspective: Lilith & Mother Mary ~ start of CE', 10, 25);
  	}

  	for (var i = 0; i < particles.length; i++) {
  		particles[i].display();
  		particles[i].move();
  	}
  }

  function moon(phase){
	push();
	translate(width/2,height/2);
	rotate(radians(phase));
	stroke('red');
	strokeWeight(10);
	line(0, 0, 130, 130);
	pop();
}


class Particle{
	 constructor(){
		this.size = random(100, 150);
		this.xSpeed = random(-2, 2);
		this.ySpeed = random(-2, 2);
		this.image = int(random(2));
		this.x = width/2;
		this.y = height/2;
		this.moonphase = 0;
		this.visible = false;
	}

	display(){
		if (this.visible){
			if(this.moonphase == 0){
				image(newmoon[this.image], this.x, this.y, this.size, this.size);
			}
			if(this.moonphase == 1){
				image(crescent[this.image], this.x, this.y, this.size, this.size);
			}
			if(this.moonphase == 2){
				image(firstquarter[this.image], this.x, this.y, this.size, this.size);
			}
			if(this.moonphase == 3){
				image(gibbous[this.image], this.x, this.y, 150, 200);
			}
			if(this.moonphase == 4){
				image(fullmoon[this.image], this.x, this.y, this.size, this.size);
			}
			if(this.moonphase == 5){
				image(disseminating[this.image], this.x, this.y, 100, 150);
			}
			if(this.moonphase == 6){
				image(lastquarter[this.image], this.x, this.y, this.size, this.size);
			}
			if(this.moonphase == 7){
				image(balsamic[this.image], this.x, this.y, this.size, this.size);
			}
		}
	}

	move(){
		this.x = this.x + this.xSpeed;
		this.y = this.y + this.ySpeed;
	}

	respawn(moonphaseNumber){
		this.visible = true;
		this.moonphase = moonphaseNumber;
		this.x = width/2;
		this.y = height/2;
	}
}
