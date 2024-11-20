
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

const animate = () => {
    atoms.forEach((atom, index) => {
        ctx.fillStyle = 'white';
        atom.draw();
        atom.updateSpeed();
        atom.updateSize();
        if (atom.radius < 0.3) {
            atoms.splice(index, 1);
        }
    })
    ctx.save();
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0,0, canvas.width, canvas.height);
    ctx.restore();
    requestAnimationFrame(animate);
}

class Atom {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 2 + 2;
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

const generateAtoms = () => {
    atoms.push(new Atom (Math.random() * canvas.width , Math.random() * canvas.height ));
    requestAnimationFrame(generateAtoms);
    console.log(atoms)
}

animate();
generateAtoms();