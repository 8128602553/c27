class Roof{
    constructor(x,y,weight,height){
        var option = {
            isStatic: true
        }
        this.body= Bodies.rectangle(x,y,weight,height,option)
        this.weight = weight;
        this.height = height;
        World.add(world,this.body)
    }
    display(){
        push();
        rectMode(CENTER);
        fill(128,128,128);
        rect(this.body.position.x,this.body.position.y,this.weight,this.height);
        pop();
    }
}