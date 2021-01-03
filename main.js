var canvas = new fabric.Canvas('myCanvas');
canvas.getContext("2d");

player_x = 10;
player_y = 10;
b_i_w = 30;
b_i_h = 30;
b_i_o = "";
var po = "";

function player_update(){
    
fabric.Image.fromURL("player.png", function(Img){
po= Img;

po.scaleToWidth(150);
po.scaleToHeight(140);
po.set({
    top:player_y,
    lef:player_x
});

canvas.add(po);

});

}

function new_image(get_image){
    
    fabric.Image.fromURL("player.png", function(Img){
    b_i_o= Img;

    b_i_o.scaleToWidth(150);
    b_i_o.scaleToHeight(140);
    b_i_o.set({
        top:player_y,
        lef:player_x
    });
    
    canvas.add(b_i_o);
    
    });

}