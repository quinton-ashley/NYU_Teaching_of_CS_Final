class Caterpillar {
	constructor(length, r) {
		this.length = length;
		this.r = r;
		this.draw = [
			(x, y) => {
				// draw a body at the x and y coordinates
				// given to the function
				this.body(x, y);
				// draw additional body segments at 
				// different locations by changing
				// the x and y coordinates
				this.body(x + 20, y + 5);
				this.body(x + 40, y + 10);
				this.body(x + 60, y + 15);
				this.body(x + 80, y + 20);
				// draw the head
				this.head(x + 100, y + 25);
	},
			(x, y) => {
				for (let i = 0; i < this.length; i++) {
					this.body(x, y);
					x += 20;
					y += 5;
				}
				this.head(x, y);

				// How could we draw caterpillars that are
				// half the length?
	},
			(x, y) => {
				for (let i = 0; i < this.length / 2; i++) {
					this.body(x, y);
					x += 20;
					y += 5;
				}
				this.head(x, y);

				// How could we draw caterpillars that are
				// twice as long?
	},
			(x, y) => {
				for (let i = 0; i < this.length * 2; i++) {
					this.body(x, y);
					x += 20;
					y += 5;
				}
				this.head(x, y);

				// How would the caterpillars look if we 
				// decrement 5 from y on each iteration
				// of the for loop instead of increment 5?
	},
			(x, y) => {
				for (let i = 0; i < this.length; i++) {
					this.body(x, y);
					x += 20;
					y -= 5;
				}
				this.head(x, y);

				// How would the caterpillars look if we 
				// decrement 20 from x on each iteration
				// of the for loop instead of increment 20?
	},
			(x, y) => {
				for (let i = 0; i < this.length; i++) {
					this.body(x, y);
					x -= 20;
					y += 5;
				}
				this.head(x, y);

				// What value could we change so that we
				// could draw caterpillars with body
				// segments that are really close together?
	},
			(x, y) => {
				for (let i = 0; i < this.length; i++) {
					this.body(x, y);
					x += 1;
					y += 5;
				}
				this.head(x, y);

				// What value could we change so that we
				// could draw caterpillars with body
				// segments that are far together?
	},
			(x, y) => {
				for (let i = 0; i < this.length; i++) {
					this.body(x, y);
					x += 40;
					y += 5;
				}
				this.head(x, y);
	},
			(x, y) => {
				for (let i = 0; i < this.length; i++) {
					this.body(x, y);
					x += this.r * .5;
					y += this.r * .1;
				}
				this.head(x, y);
	},
			(x, y) => {
				for (let i = 0; i < this.length; i++) {
					this.body(x, y);
					x += random(this.r * .1, this.r * .7);
					y += random(this.r * .1, this.r * .2);
				}
				this.head(x, y);
	},
			(x, y) => {
				let originalY = y - this.r;
				for (let i = 0, angle = 0; i < this.length; i++, angle += 30) {
					this.body(x, y);
					x += random(this.r * .5, this.r * .75);
					y = cos(angle) * this.r + originalY;
				}
				this.head(x, y);
	}];
	}

	body(x, y) {
		// fill body with a bright color
		fill(random(100, 255), random(100, 255), random(100, 255));
		rect(x - this.r * .1, y + this.r * .3, this.r * .05, this.r * .75);
		rect(x + this.r * .1, y + this.r * .3, this.r * .05, this.r * .75);
		ellipse(x, y, this.r);
	}

	head(x, y) {
		this.body(x, y);
		fill(100); // fill the eyes with grey
		ellipse(x - this.r * .1, y, this.r * .05, this.r * .05);
		ellipse(x + this.r * .1, y, this.r * .05, this.r * .05);
		arc(x, y + this.r * .2, this.r * .2, this.r * .3, 0, 180, CHORD);
	}
}

var larva0 = new Caterpillar(20, 50);
var larva1 = new Caterpillar(20, 25);
var drawVersion = -1;

function setup() {
	createCanvas(windowWidth, windowHeight);
	ellipseMode(CENTER);
	rectMode(CENTER);
	angleMode(DEGREES);
	response(' ');
}

function keyTyped() {
	response(key);
}

function response(key) {
	switch (key) {
		case ' ':
			drawVersion++;
			caterpillar(true);
			break;
		case 'n':
			drawVersion++;
			caterpillar(false);
			break;
		case 'b':
			drawVersion--;
			caterpillar(false);
			break;


		default:
			break;
	}
}

function caterpillar(log) {
	if (drawVersion >= 11) {
		drawVersion = 0;
	}
	if (drawVersion < 0) {
		drawVersion = 10;
	}
	if (log) {
		console.log('version ' + drawVersion + ' of the draw function!');
		console.log(larva0.draw[drawVersion].toString());
	}
	background(255);
	larva0.draw[drawVersion](50, 200);
	larva1.draw[drawVersion](50, 400);
}
