"use strict";

// IIFE
(function() {

    class Shape {
        constructor(x, y, color) {
            this.xneg = 1;
            this.yneg = 1;
            this.x = x;
            this.y = y;
            this.color = color;
        }
        move(canvas, dx, dy) {
            if(this.x >= canvas.width - 15 || this.x < 0)
                this.xneg *= -1; // toggle
            if(this.y >= canvas.height - 15 || this.y < 0)
                this.yneg *= -1;
            this.x += this.xneg * dx;
            this.y += this.yneg * dy;
        }
    }

    class Circle extends Shape {
        constructor(x, y, col, radius) {
            super(x, y, col);
            this.radius = radius;
        }
        draw(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

    }

    class Square extends Shape {
        constructor(x, y, col, side) {
            super(x, y, col);
            this.side = side;
        }
        draw(ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.side, this.side)
        }
    }

    function animate(canvas, ctx, shapes) {

        //1. update (move)
        for(var i=0; i<shapes.length; i++) {
            shapes[i].move(canvas, 1,1);
        }
        //2. clear screen
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //3. draw
        for(var i=0; i<shapes.length; i++) {
            shapes[i].draw(ctx);
        }

        requestAnimationFrame(function() {
            animate(canvas, ctx, shapes);
        });
    }

    // Entry point of program
    function main() {
        var canvas = document.getElementById("tutorial");
        var ctx = canvas.getContext("2d");

        var square = new Square(50, 50, "red", 15);
        var circle = new Circle(100, 40, "yellow", 20);

        setTimeout(function() {
            animate(canvas, ctx, [square, circle]) 
        }, 1000);

    }

    // Event that fires when window has loaded
    //window.onload = main();
    main();

}());
