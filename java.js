var Image1 = document.getElementById("Image1");
var Image1_y = 100;
var Image1_x = 100;
var Image1_z = 150;
var Image2 = document.getElementById("Image2");
var Image2_y = 100;
var Image2_x = 750;
var Image2_z = 150;
var Image3 = document.getElementById("Image3");
var Image3_y = 200;
var Image3_x = 1000;
var Image3_z = 150;
var Image4 = document.getElementById("Image4");
var Image4_y = 300;
var Image4_x = 400;
var Image4_z = 150;


document.getElementById("upbut1").addEventListener("click", function () {
    Image1_y = Image1_y - 5;
    Image1.style.top = Image1_y +"px"
});
document.getElementById("upbut2").addEventListener("click",function(){
    Image2_y = Image2_y - 5;
    Image2.style.top = Image2_y + "px"
});
document.getElementById("upbut3").addEventListener("click",function(){
    Image3_y = Image3_y - 5;
    Image3.style.top = Image3_y + "px"
});
document.getElementById("upbut4").addEventListener("click",function(){
    Image4_y = Image4_y - 5;
    Image4.style.top= Image4_y + "px"
});


document.getElementById("dwnbut1").addEventListener("click",function(){
    Image1_y = Image1_y + 5;
    Image1.style.top= Image1_y + "px"
});
document.getElementById("dwnbut2").addEventListener("click",function(){
    Image2_y = Image2_y + 5;
    Image2.style.top = Image2_y + "px"
});
document.getElementById("dwnbut3").addEventListener("click",function(){
    Image3_y = Image3_y + 5;
    Image3.style.top= Image3_y+"px"
});
document.getElementById("dwnbut4").addEventListener("click",function(){
    Image4_y = Image4_y + 5;
    Image4.style.top= Image4_y+"px"
});

document.getElementById("lftbut1").addEventListener("click",function(){
    Image1_x = Image1_x - 5;
    Image1.style.left= Image1_x+"px"
});
document.getElementById("lftbut2").addEventListener("click",function(){
    Image2_x = Image2_x - 5;
    Image2.style.left= Image2_x+"px"
});
document.getElementById("lftbut3").addEventListener("click",function(){
    Image3_x = Image3_x - 5;
    Image3.style.left= Image3_x+"px"
});
document.getElementById("lftbut4").addEventListener("click",function(){
    Image4_x = Image4_x - 5;
    Image4.style.left= Image4_x+"px"
});


document.getElementById("rgtbut1").addEventListener("click",function(){
    Image1_x = Image1_x + 5;
    Image1.style.left= Image1_x+"px"
});
document.getElementById("rgtbut2").addEventListener("click",function(){
    Image2_x = Image2_x + 5;
    Image2.style.left= Image2_x+"px"
});
document.getElementById("rgtbut3").addEventListener("click",function(){
    Image3_x = Image3_x + 5;
    Image3.style.left= Image3_x+"px"
});
document.getElementById("rgtbut4").addEventListener("click",function(){
    Image4_x = Image4_x + 5;
    Image4.style.left= Image4_x+"px"
});


document.getElementById("bigbut1").addEventListener("click",function(){
    Image1_z = Image1_z + 5;
    Image1.style.width= Image1_z+"px";
    Image1.style.height= Image1_z+"px"
});
document.getElementById("bigbut2").addEventListener("click",function(){
    Image2_z = Image2_z + 5;
    Image2.style.width= Image2_z+"px";
    Image2.style.height= Image2_z+"px"
});
document.getElementById("bigbut3").addEventListener("click",function(){
    Image3_z = Image3_z + 5;
    Image3.style.width= Image3_z+"px";
    Image3.style.height= Image3_z+"px"
});
document.getElementById("bigbut4").addEventListener("click",function(){
    Image4_z = Image4_z + 5;
    Image4.style.width= Image4_z+"px";
    Image4.style.height= Image4_z+"px"
    
});

document.getElementById("smlbut1").addEventListener("click",function(){
    Image1_z = Image1_z - 5;
    Image1.style.width= Image1_z+"px";
    Image1.style.height= Image1_z+"px";
    
});
document.getElementById("smlbut2").addEventListener("click",function(){
    Image2_z = Image2_z - 5;
    Image2.style.width= Image2_z+"px";
    Image2.style.height= Image2_z+"px"
});
document.getElementById("smlbut3").addEventListener("click",function(){
    Image3_z = Image3_z - 5;
    Image3.style.width= Image3_z+"px";
    Image3.style.height= Image3_z+"px"
});
document.getElementById("smlbut4").addEventListener("click",function(){
    Image4_z = Image4_z - 5;
    Image4.style.width= Image4_z+"px";
    Image4.style.height=Image4_z+"px"
});

document.getElementById("inbut1").addEventListener("click",function(){
    document.getElementById("task1").style.left= "0px"
});
document.getElementById("inbut2").addEventListener("click",function(){
    document.getElementById("task2").style.top= "0px"
});
document.getElementById("inbut3").addEventListener("click",function(){
    document.getElementById("task3").style.right= "0px"
});
document.getElementById("inbut4").addEventListener("click",function(){
    document.getElementById("task4").style.bottom= "0px"
});

document.getElementById("outbut1").addEventListener("click",function(){
    document.getElementById("task1").style.left= "-54px"
});
document.getElementById("outbut2").addEventListener("click",function(){
    document.getElementById("task2").style.top= "-54px"
});
document.getElementById("outbut3").addEventListener("click",function(){
    document.getElementById("task3").style.right= "-54px"
});
document.getElementById("outbut4").addEventListener("click",function(){
    document.getElementById("task4").style.bottom= "-54px"
});

document.getElementById("rstbut1").addEventListener("click",function(){
    Image1_x = 100
    Image1_y = 100
    Image1_z = 150
    Image1.style.left= Image1_x+"px";
    Image1.style.top=Image1_y+"px";
    Image1.style.width=Image1_z+"px";
    Image1.style.height=Image1_z+"px";
});
document.getElementById("rstbut2").addEventListener("click",function(){
    Image2_x = 750
    Image2_y = 100
    Image2_z = 150
    Image2.style.left= Image2_x+"px";
    Image2.style.top=Image2_y+"px";
    Image2.style.width=Image2_z+"px";
    Image2.style.height=Image2_z+"px";
});
document.getElementById("rstbut3").addEventListener("click",function(){
    Image3_x = 1000
    Image3_y = 200
    Image3_z = 150
    Image3.style.left= Image3_x+"px";
    Image3.style.top=Image3_y+"px";
    Image3.style.width=Image3_z+"px";
    Image3.style.height=Image3_z+"px";

});
document.getElementById("rstbut4").addEventListener("click",function(){
    Image4_x = 400
    Image4_y = 300
    Image4_z = 150
    Image4.style.left= Image4_x+"px";
    Image4.style.top=Image4_y+"px";
    Image4.style.width=Image4_z+"px";
    Image4.style.height=Image4_z+"px";
});

document.getElementById("1img1").addEventListener("click",function(){
    Image1.style.backgroundImage= "url(img/Ragna_the_Bloodedge_Calamity_Trigger,_Character_Select_Artwork.png)"; 
});
document.getElementById("1img2").addEventListener("click",function(){
    Image1.style.backgroundImage= "url(img/Ragna_the_Bloodedge_Continuum_Shift,_Character_Select_Artwork.png)"; 
});
document.getElementById("1img3").addEventListener("click",function(){
    Image1.style.backgroundImage= "url(img/Ragna_the_Bloodedge_CP_render.png)"; 
});

document.getElementById("2img1").addEventListener("click",function(){
    Image2.style.backgroundImage= "url(img/Jin_Kisaragi_Calamity_Trigger,_Character_Select_Artwork.png)"; 
});
document.getElementById("2img2").addEventListener("click",function(){
    Image2.style.backgroundImage= "url(img/Jin_Kisaragi_Continuum_Shift,_Character_Select_Artwork.png)"; 
});
document.getElementById("2img3").addEventListener("click",function(){
    Image2.style.backgroundImage= "url(img/Jin_Kisaragi_Chrono_Phantasma,_Character_Select_Artwork.png)"; 
});

document.getElementById("3img1").addEventListener("click",function(){
    Image3.style.backgroundImage= "url(img/Noel_Vermillion_Calamity_Trigger,_Character_Select_Artwork.png)"; 
});
document.getElementById("3img2").addEventListener("click",function(){
    Image3.style.backgroundImage= "url(img/Noel_Vermillion_Continuum_Shift,_Character_Select_Artwork.png)"; 
});
document.getElementById("3img3").addEventListener("click",function(){
    Image3.style.backgroundImage= "url(img/Noel_Vermillion_Chronophantasma,_Character_Select_Artwork,_Alternate_Artwork.png)";
});

document.getElementById("4img1").addEventListener("click",function(){
    Image4.style.backgroundImage= "url(img/Rachel_Alucard_Calamity_Trigger,_Character_Select_Artwork.png)"; 
});
document.getElementById("4img2").addEventListener("click",function(){
    Image4.style.backgroundImage= "url(img/Rachel_Alucard_Continuum_Shift,_Character_Select_Artwork.png)"; 
});
document.getElementById("4img3").addEventListener("click",function(){
    Image4.style.backgroundImage= "url(img/Rachel_Alucard_Chronophantasma,_Character_Select_Artwork.png)";
});