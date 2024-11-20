
const canvas = document.getElementById("my-canvas");
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext("2d")
console.log("console", ctx);

/**
 * Convierte de grados a radianes
 * @param {*} degrees 
 * @returns 
 */
const degreeToRadian = (degrees) => {
    return degrees / 180 * Math.PI
}

let atoms = [];
canvas.addEventListener('mousemove', function(e) {
    for (let i = 0; i < 20; i++) {
        atoms.push(new Atom(e.x, e.y));
        console.log("Hola");
    }
})

const animate = () => {
    atoms.forEach((atom, index) => {
        atom.draw();
        atom.updateSpeed();
        atom.updateSize();
        if (atom.radius < 0.3) {
            atoms.splice(index, 1);
        }
    })
    ctx.save();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.fillRect(0,0, canvas.width, canvas.height);
    ctx.restore();
    requestAnimationFrame(animate);
}

class Atom {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 8 + 2;
        this.speedX = Math.random() * 4 - 2;
        this.speedY = Math.random() * 4 - 2;
    }

    updateSpeed() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    updateSize() {
        this.radius -= 0.1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
    }
}


animate();

//Dibujar círculos
// ctx.beginPath()
// ctx.arc(300, 300, 200, degreeToRadian(0), degreeToRadian(360))
// ctx.fill()


/**
 * Single brush
 */
/*
canvas.addEventListener('mousemove', (e) => {
    console.log(e.x, e.y);
    ctx.rect(e.x, e.y, 100, 100);
    ctx.fill();
})
/*
ctx.beginPath();
ctx.rect(100, 100, 100, 100)
// ctx.fill()
ctx.stroke()
*/

