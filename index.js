import Atom from './Atom.js';

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

const point = {
    x: canvas.width / 2,
    y: canvas.height / 2
}

let degree = 0;

const generateAtoms = () => {
    atoms.push(new Atom (canvas.width / 2 + (point.x * 200), canvas.height / 2 + (point.y * 200), ctx));
    point.x = Math.cos(degreeToRadian(degree))
    point.y = point.x * point.x

    degree++;
    requestAnimationFrame(generateAtoms);
}

animate();
generateAtoms();