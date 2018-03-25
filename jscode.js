/*Alexis S Silver
Spring 2018
Javascript code */
	
	//document.getElementById("insertName").innerHTML = "" + player + "";
	//document.getElementById("insertGender").innerHTML = "" + gender + "";
	function gameStart()	{            

		//js their answers will be put into the script in <span>
		alert("So " + player + " what do you want to do?");
         window.location.href = "game.html";
         var haha = new Audio('media/laugh.ogg');
         haha.play();
		}
// it closes the window
	function exitGame()	{
		alert("Please don't leave me.");
		myWindow.close();
		}

	function startover()   {
        window.location.href = "titlescreen.html";
        }
		
		//all the models for my characters and parts
		//helps it preload when using big images
		var pics = ["bedone.jpg","happyend.jpg", "raindrops.jpg", "rainglass.png", "rainphoto.jpg", "girl.png","boy.png", "yanHaru.png"];
		
		//loop and length to make a images go in front of each word "saving time"
		var picstuff = new Array(pics.length);
		for (var i = 0; i < pics.length; i++)
		    {
		        picstuff[i] = new Image();
		        picstuff[i].src = "media/" + pics[i];
		    } 
		//var yanHaru = document.getElementById("guy").src;
		//var n;
		//var gender = document.getElementById("character").src;
		//var photo;
		//var textBlock;
		//placement
		//var left;
		//var right;
		
	/*function prepareNovel() {}
        novel.imagePath = "media/"; // path to image directory
        yanHaru = new Character("Haru", {color: "rgb(255,228,225)", postion: new Position(0, .75, 0, 1)});
        you = new Character("you", {color: "rgb(240,248,255)", position: new Position(800, 450, 1, 1)});
        n = new Character("Narrator",{color:"rgb(255,250,250)"});
         
        textArea = new TextBlock("myText");*/

    var script =  [
     "It was storming. I still remembered that day clearly. Haru and I ran into his house from the pounding rain. It was my first time at his house. I’ve never been here, yet I couldn’t help how familiar it felt.",
      
      "Haru: Are you alright?", 
       "Yeah",
        choices,
        "Haru: What?",
        "Haru: No,you have no say in the matter.",
        "Haru: You played this game.",
        "Haru: Do nOT PlaY WiTh My heART",
        "Haru: Wow...",
        "Haru: I'm glad.",
        "Haru: Now you can stay with me...",
        "Forever."
        ];
        //document.getElementById("dboxDiv").innerHTML = script[0];
        document.getElementById("dboxDiv").innerHTML = script[0];
        function moveFW()   {
           var i = 0;
           script.shift();
           if (i < script.length){                
                document.getElementById("dboxDiv").innerHTML = script[0];
           }
       }  
    
   var choices = [function choice() { 
    /*   if (script[5] == script[5])  {
    var yes = confirm("Will you stay?");
    if (yes === true) {
        document.getElementById("dboxDiv").innerHTML = script[9];
    } else {
        document.getElementById("dboxDiv").innerHTML = script[5];
    }
    }else{
       document.getElementById("dboxDiv").innerHTML = script[i];
    }*/
     }]
   