var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;
var roof;
const Engine = Matter.Engine
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



    function setup(){

        engine= Engine.create();
        world= engine.world;

        var canvas = createCanvas(1200,700);
        
        roof = new Roof(400,200,250,25);
    
    
        bobObject1 = new Bob(300,400,70);
        bobObject2 = new Bob(350,400,70);
        bobObject3 = new Bob(400, 400,70);
        bobObject4 = new Bob(450,400,70);
        bobObject5 = new Bob(500,400,70);
        rope1 = new Rope(bobObject1.body, roof.body, -100, 0);
        rope2 = new Rope(bobObject2.body, roof.body, -50, 0);
        rope3 = new Rope(bobObject3.body, roof.body, 0, 0);
        rope4 = new Rope(bobObject4.body, roof.body, 50, 0);
        rope5 = new Rope(bobObject5.body, roof.body, 100, 0);

      
        
    }
    
    function draw(){
        background("white");

        Engine.update(engine)
       
      
        bobObject1.display();
        bobObject2.display();
        bobObject3.display();
        bobObject4.display();
        bobObject5.display();

        rope1.display();
        rope2.display();
        rope3.display();
        rope4.display();
        rope5.display();

        roof.display();
    
        
    }
    
    
       


