let img1;
var angle = 0;
// let particles = [];
// let newmoon = [];
// let crescent = [];
// let firstquarter = [];
// let gibbous = [];
// let fullmoon = [];
// let disseminating = [];
// let balsamic = [];


function preload() {
  // img1 = loadImage('assets/outerwheel4.png');
  img1 = loadImage('assets/innerwheel2.png');
  // img3 = loadImage('assets/innerwheel2.png');
  // img4 = loadImage('assets/innerwheel2.png');
  // img5 = loadImage('assets/innerwheel2.png');
  // img6 = loadImage('assets/innerwheel2.png');
  // img7 = loadImage('assets/innerwheel2.png');
  // img8 = loadImage('assets/innerwheel2.png');
  // img9 = loadImage('assets/innerwheel2.png');
  // img10 = loadImage('assets/innerwheel2.png');
  // img11 = loadImage('assets/innerwheel2.png');
  // img12 = loadImage('assets/innerwheel2.png');
  // img13 = loadImage('assets/innerwheel2.png');
  // img14 = loadImage('assets/innerwheel2.png');

}

function setup() {
 createCanvas (800,800);
 // newmoon[0] = loadImage('assets/earthrise.PNG')
 // newmoon[1] = loadImage('assets/earthmoon.PNG')
 // // crescent[0] = loadImage('assets/innerwheel2.png');
 // // crescent[1] = loadImage('assets/innerwheel2.png');
 // // firstquarter[0] = loadImage('assets/innerwheel2.png');
 // // firstquarter[1] = loadImage('assets/innerwheel2.png');
 // // gibbous[0] = loadImage('assets/innerwheel2.png');
 // // gibbous[1] = loadImage('assets/innerwheel2.png');
 // // fullmoon[0 = loadImage('assets/innerwheel2.png');
 // // fullmoon[1]] = loadImage('assets/innerwheel2.png');
 // // disseminating[0] = loadImage('assets/innerwheel2.png');
 // // disseminating[1] = loadImage('assets/innerwheel2.png');
 // // lastquarter[0] = loadImage('assets/innerwheel2.png');
 // // lastquarter[1] = loadImage('assets/innerwheel2.png');
 // // balsamic[0] = loadImage('assets/innerwheel2.png');
 // // balsamic[1] = loadImage('assets/innerwheel2.png');

 // for (var i = 0; i < 100; i++) {
	// 	particles.push(new Particle);
	// }
}

function draw() {
	background(0);

	push();
  	imageMode(CENTER);
  	translate(width/2, height/2);
  	image(img1, 0, 0);
  	pop();

	// angle+=-0.0025
	angle+= -0.1;
	angle = angle%360;

  	moon(angle);
  	// print(angle);

  	// if(angle < -45 && angle > -46){//trigger new moon
  	// 	print('respawn');
  	// 	for (var i = 0; i < particles.length; i++) {
  	// 		particles[i].respawn(0);//0 = sun in this case
  	// 	}
  	// }

  	// if(angle < -90 && angle > -91){//trigger crescent
  	// 	print('respawn');
  	// 	for (var i = 0; i < particles.length; i++) {
  	// 		particles[i].respawn(0);//0 = sun in this case
  	// 	}
  	// }

  	// if(angle < -135 && angle > -136){//trigger firstquarter
  	// 	print('respawn');
  	// 	for (var i = 0; i < particles.length; i++) {
  	// 		particles[i].respawn(0);//0 = sun in this case
  	// 	}
  	// }

  	// if(angle < -180 && angle > -181){//trigger gibbous
  	// 	print('respawn');
  	// 	for (var i = 0; i < particles.length; i++) {
  	// 		particles[i].respawn(0);//0 = sun in this case
  	// 	}
  	// }

  	// if(angle < -225 && angle > -226){//trigger fullmoon
  	// 	print('respawn');
  	// 	for (var i = 0; i < particles.length; i++) {
  	// 		particles[i].respawn(0);//0 = sun in this case
  	// 	}
  	// }

  	// if(angle < -270 && angle > -271){//trigger disseminating
  	// 	print('respawn');
  	// 	for (var i = 0; i < particles.length; i++) {
  	// 		particles[i].respawn(0);//0 = sun in this case
  	// 	}
  	// }

  	// if(angle < -335 && angle > -336){//trigger lastquarter
  	// 	print('respawn');
  	// 	for (var i = 0; i < particles.length; i++) {
  	// 		particles[i].respawn(0);//0 = sun in this case
  	// 	}
  	// }

  	// if(angle < -0 && angle > -1){//trigger balsamic
  	// 	print('respawn');
  	// 	for (var i = 0; i < particles.length; i++) {
  	// 		particles[i].respawn(0);//0 = sun in this case
  	// 	}
  	// }

  	// for (var i = 0; i < particles.length; i++) {
  	// 	particles[i].display();
  	// 	particles[i].move();
  	// }
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
// class Particle{//what do we do with this data, we hold it here
// 	 constructor(){
// 		this.size = random(5, 50);
// 		this.xSpeed = random(-2, 2);
// 		this.ySpeed = random(-2, 2);
// 		this.image = int(random(2));
// 		this.x = width/2;
// 		this.y = height/2;
// 		this.moonphase = 0;
// 		this.visible = false;
// 	}

// 	display(){
// 		if (this.visible){
// 			if(this.moonphase == 0){
// 				image(newmoon[this.image], this.x, this.y, this.size, this.size);
// 			}
// 			if(this.moonphase == 1){
// 				image(crescent[this.image], this.x, this.y, this.size, this.size);//put diff image array here
// 			}
			// if(this.moonphase == 2){
// 				image(firstquarter[this.image], this.x, this.y, this.size, this.size);//put diff image array here
// 			}
			// if(this.moonphase == 3){
// 				image(gibbous[this.image], this.x, this.y, this.size, this.size);//put diff image array here
// 			}
			// if(this.moonphase == 4){
// 				image(full[this.image], this.x, this.y, this.size, this.size);//put diff image array here
// 			}
			// if(this.moonphase == 5){
// 				image(disseminating[this.image], this.x, this.y, this.size, this.size);//put diff image array here
// 			}
			// if(this.moonphase == 6){
// 				image(lastquarter[this.image], this.x, this.y, this.size, this.size);//put diff image array here
// 			}
			// if(this.moonphase == 7){
// 				image(balsamic[this.image], this.x, this.y, this.size, this.size);//put diff image array here
// 			}
// 		}

// 	}

// 	move(){
// 		this.x = this.x + this.xSpeed;
// 		this.y = this.y + this.ySpeed;
// 	}

// 	respawn(moonphaseNumber){//
// 		this.visible = true;
// 		this.moonphase = moonphaseNumber;
// 		this.x = width/2;
// 		this.y = height/2;
// 	}
