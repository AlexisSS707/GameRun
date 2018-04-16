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
         haha.play();/*Alexis S Silver
Spring 2018
Javascript code 
*/
    /*click event is on ending.html.
    mouseover event is on index.html*/
		
   //playing Ether&Dream City - Tear Of A Shadow in index.html
	var opening = new Audio('media/Tears.ogg');    
	//Ether - Coexistence - [Dubstep/Glitch]
	var scary = new Audio('media/etherCoexistence.ogg');
	//in love with a ghost - flowers feat. nori
	var notscary = new Audio('media/flowers.ogg');
	//Haru's Laugh
	var haha = new Audio('media/laugh.ogg');
	var door = new Audio('media/door.mp3');
	//in game.html
	//playing in love with a ghost - we've never met but, can we have a coffee or something
	coffee = new Audio('media/coffee.ogg'); 
	coffee.addEventListener('ended', function() {
		this.currentTime = 0;
		this.play();
		}, false);

   var player;
   var gender;
   function ask() {
	gender = prompt("Are you a girl or boy?");
      switch(true)   {
      case (gender == "girl"):    
         gender = " Young lady";
            break;
      case (gender == "boy"): 
         gender = "Young man";
           break;
      default:
         gender = "Friend";
        }
         player = prompt(gender + ", your name?");
         //document.getElementById("insertName").innerHTML = "" + player + "";
   }
   
	function gameStart()	{
      door.play();
      alert("So " + player + " what do you want to do?");
      window.location.href = "game.html";
      window.resize(850, 750);
		}
   
   //it closes the window
	function exitGame()	{
		alert("Please don't leave me.");
		self.close();
		}
		
		var userName;
		function inputName() {
         userName = document.getElementById('name').value;
         document.getElementById('nameField').innerHTML = userName;
		}

	
	//from game.html to index.html
	function startover()   {
       window.location.href = "index.html";
        }
		
	/*all the models for my characters and parts
	helps it preload when using big images; so basically another excuse to add a loop*/
	var pics = ["bedone.jpg","happyend.jpg", "raindrops.jpg", "rainglass.png", "rainphoto.jpg", "girl.png","boy.png", "yanHaru.png"];
		
	//while loop and length to make a images go in front of each word "saving time"
	var picstuff = new Array(pics.length);
	var i = 0;
	while(i < pics.length)  {
		    picstuff[i] = new Image();
		    picstuff[i].src = "media/" + pics[i];
		    i++;
		    }
    
    //moves along the array and once it gets to the choice, it will have a pop-up
    function moveFW()   {
      var i = 0;
      script.shift();
      if (i < script.length){  
		//the choice
		if (script[0] == "choices")
		{
		var yes = confirm("Will you stay? yes='ok'  or  no='cancel'");
      if (yes === true) {
         coffee.pause();
		   notscary.play();
		}else{
      window.location.href = "ending.html";
		scary.play();
		}
		//end of choice
		}else{
		document.getElementById("dboxDiv").innerHTML = script[0];
		}
      } 
    }

    var script =  ["start",
     "<br>It was storming. You still remembered that day clearly. You and your friend Haru ran into his house from the pounding rain. It was your first time at his house. You've never been here, yet you could not help how familiar it felt.",
      
      "Haru<br>'Are you alright?'", 
       "<br><b>'Yeah.'</b>",
       "<br>Thunder rumbled and lightening flashed as his face turned dark.",
       "<br>He asked,'Want to stay here Forever?'",
        "choices",
        "<br><b>Yes I will<b>",
        "Haru<br> Wow...",
        "Haru<br> I'm glad.",
        "Haru<br> Now you can stay with me...",
        "Haru<br><b><i>Forever.</i></b>",
        "<br>The clouds cleared as the sun shone through the opening.",
        "Haru<br> 'How about we go for a walk?'",
        "<br><b>'What did you mean about Forever anyways?'</b>",
        "<br>Haru shrugged.",
        "Haru<br> 'I guess to be edgy.'",
        "<br>You scoff at his response",
        "<br><b>'I'm going home.'</b>",
        "<br>Well, at least you didn't die.",
        "<br><i>Good End</i>"
        ];
        
        var be = [
		   "Haru: What?",
         "Thunder rumbles and lightening flashed. The room lit up for a second, but it got darker than before.",
         "Haru: No... you have no say in the matter.",
         "Haru: You played this game; Do nOT PlaY WiTh My heART",
         "You took a step back not knowing what to do",
         "and then (press screen)..."];
			
			//for loop to display bad ending
			var counter = 0;
			function appendElement(id)
			{	
				for (var i = 0; i < be.length; i++)	{	
				var newElement = document.createElement("P");
				newElement.textContent = be[i];
				document.querySelector("#badend");
            document.querySelector(id).appendChild(newElement);
		   newElement.setAttribute("id","myId"+counter);
				}
				counter++;
			}
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
   
