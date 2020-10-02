class Umbreon{
  constructor(){
   //Atributos
    this.x = 0;
    this.y = 0;
    this.img = []; //Array
    this.frame = 0;

    for(var i = 0; i < 4; i++){
      this.img[i] = loadImage("umbizq_"+ i +".png");
    }
    
    //Modo individual
    //this.img[0] = loadImage("pikader_0.png");
    //this.img[0] = loadImage("pikader1.png");
    //this.img[0] = loadImage("pikader2.png");
    //this.img[0] = loadImage("pikader3.png");
    
    //Modo For
    //Concatenar - "pikader"+ i +".gif"
  }
  
  mostrar(){
    imageMode(CENTER);
    push();
    translate(this.x,this.y)
    scale(0.5)
    image(this.img[this.frame],0,0);
    pop();
    
  }
  
  girar(){
    translate(this.x,this.y)
    push();
    rotateY(PI);
    scale(0.5);
    image(this.img[this.frame],0,0)
    pop();
  }
  
  
  moverIzq(){
   this.frame++;
    this.x = this.x - 10;
    if(this.frame  > 3){
      this.frame = 0;
    } 
  }
  
  moverDer(){
   this.frame++;
    this.x = this.x + 10;
    if(this.frame  > 3){
      this.frame = 0;
    } 
  }
}