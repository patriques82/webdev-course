"use strict";

// IIFE
(function() {

    class Shape {
        constructor(x,y,color) {
            this.x = x;
            this.y = y;
            this.color = color;
        }
        update(dx,dy) {
            this.x += dx;
            this.y += dy;
        }
    }

    class Circle extends Shape {
        constructor(radius, col) {
            super(50, 50, col);
            this.radius = radius;
        }
        draw(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0,2*Math.PI);
            ctx.fillStyle = this.color;
            ctx.fill();
            console.log(this.x, this.y, this.radius);
        }
    }

    class Square extends Shape {
        constructor(size,col) {
            super(30, 30, col);
            this.size = size;
        }
        draw(ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect (this.x, this.y, this.size, this.size);
            console.log("draw square");
        }
    }

    function animate(canvas, shapes, lastTime) {
        var ctx = canvas.getContext('2d');

        // 1. update
        var date = new Date();
        var time = date.getTime();
        var timeDiff = time - lastTime;
        for(var i=0; i<shapes.length; i++) {
            shapes[i].update(1,1);
        }

        // 2. clear
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 3. render
        for(var i=0; i<shapes.length; i++) {
            shapes[i].draw(ctx);
        }

        requestAnimationFrame(function() {
            animate(canvas, shapes, time);
        });
    }

    // Entry point of program
    function main() {
        var canvas = document.getElementById('tutorial');
        var ctx = canvas.getContext('2d');

        // window.requestAnimationFrame
        var c = new Circle(8, "red"),
            r = new Square(7, "yellow");
        // wait one second before starting animation
        setTimeout(function() {
            animate(canvas, [c,r], (new Date()).getTime());
        }, 100);

    }
    // Event that fires when window has loaded
    //window.onload = main();
    main();

}());
