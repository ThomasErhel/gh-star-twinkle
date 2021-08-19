/*
	Star Twinkle
	Copyright (C) 2021  Thomas Erhel

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
var stars = [];

function setup() {
	createCanvas(1830, 1000);
	for (var i = 0; i < 5000; i++) {
		stars[i] = new Star();
	}
}

function draw() {
	background(236, 111, 24);
	for (var i = 0; i < stars.length; i++) {
		stars[i].draw();
	}
}

class Star {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.size = random(0.25, 3);
		this.t = random(TAU);
		this.c = color(158, 221, 248);
	}

	draw() {
		this.t += 0.1;
		var scale = this.size + sin(this.t) * 2;
		fill(this.c);
		noStroke();
		ellipse(this.x, this.y, scale, scale);
	}
}
