class Atom {
    constructor(x, y, ctx) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 2 + 2;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
        this.ctx = ctx
    }

    updateSpeed() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    updateSize() {
        this.radius -= 0.1;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        this.ctx.fill()
    }
}

export default Atom