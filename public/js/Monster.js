
class Monster {
    constructor(tempPos, tempImage) {
        this.pos = tempPos;
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.gravity = 0.8;
        this.img = tempImage;
        this.height = 150;
        this.size = 300;
        this.isJump = false;

    };
    display() {
        imageMode(CENTER);
        image(this.img, this.pos.x, this.pos.y, this.size, this.size);
    };
    update() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.mult(0);
        //重力の適用
        if (this.pos.y < height - this.height) {
            this.acc.add(0, this.gravity);
            this.isJump = true;
        } else {
            this.vel.y = 0;
            this.pos.y = height - this.height;
            this.isJump = false;
        };
        this.vel.x *= 0.95;
    };
    applyForce(f) {
        this.acc.add(f);
    };
    jump() {
        this.vel.add(0, -20);
    };
    moveR() {
        this.acc.add(5, 0);
    };
    moveL() {
        this.acc.add(-5, 0);
    };
}