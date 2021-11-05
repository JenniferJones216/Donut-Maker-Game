const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let imgs = ["/images/chocolateDonut.png", "/images/chocolateSprinkleDonut.png", "/images/cinnamon-donut.png", "/images/frostingDonut.png", "/images/krispy-kreme-donut.png", "/images/pink-donut.png", "/images/whitestripeDonut.png"];

const donutImage = new Image();


let particleArray = [];
const maxSize = 200;

class SpinningDonut{
    constructor(){
        this.x = canvas.width/2;
        this.y = canvas.height/2;
        this.xMomentum = Math.random() * 15 - 7.5;
        this.yMomentum = Math.random() * 15 - 7.5;
        //angle rotated
        this.rotation = 0;
        this.opacity = 1;
        this.size = Math.random() * 3;
        this.donutSrc = imgs[Math.floor(Math.random()*imgs.length)];
    }

    // draw 
    // update

    draw(){
        context.save();
        context.globalAlpha = this.opacity;
        context.translate(this.x,this.y);
        context.rotate(Math.PI / 180 * this.rotation); // turns our degrees measurement into radians
        donutImage.src = this.donutSrc;
        context.drawImage(donutImage, (-donutImage.width / 16) * this.size, (-donutImage.height / 16) * this.size, (donutImage.width / 8) * this.size, (donutImage.height / 8) * this.size);
        context.restore();
    }

    update(){
        this.opacity -= 0.005;
        this.size += 0.01;
        this.rotation += 1;
        this.x += this.xMomentum;
        this.y += this.yMomentum;
    }
}

function spawnSpinningDonut(){
    particleArray.push(new SpinningDonut());
}

// init 
function init(){
    particleArray = [];
}

// animate 
function animate(){
    requestAnimationFrame(animate);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.clearRect(0,0,canvas.width, canvas.height);
    particleArray.forEach(function(particle){
        particle.update();
        particle.draw();
    });
    particleArray = particleArray.filter(function(particle){
        return particle.opacity >= 0.05 && particle.size >= .1;
    })
}

//document.addEventListener('mousedown', spawnSpinningDonut);
init();
animate();