var gameLevel=1;
var gameStart=1;

var gameSequence=[];
var playerSequence=[];

var green=new Audio("sounds/green.mp3");
var red=new Audio("sounds/red.mp3");
var blue=new Audio("sounds/blue.mp3");
var yellow=new Audio("sounds/yellow.mp3");
var wrongAudio=new Audio("sounds/wrong.mp3");


function randomNumber(){
    return Math.floor(Math.random()*4);
}

$("#start").click(function(){
    beeper();
})

$(document).keypress(function(){
    if(gameStart==1)
        beeper();
    gameStart++;
});

function pressNplay(b){
    $("."+b).addClass("pressed");
    setTimeout(function(){
        $("."+b).removeClass("pressed");
    },100);

    gameSequence.push(b);

    
}

$("#green").click(function(){
    $("#green").addClass("pressed");
    setTimeout(function(){
        $("#green").removeClass("pressed");
    },100);
    green.play();

    playerSequence.push("green");
    check();
    
})

$("#red").click(function(){
    $("#red").addClass("pressed");
    setTimeout(function(){
        $("#red").removeClass("pressed");
    },100);
    red.play();

    playerSequence.push("red");
    check();
    
})

$("#blue").click(function(){
    $("#blue").addClass("pressed");
    setTimeout(function(){
        $("#blue").removeClass("pressed");
    },100);
    blue.play();

    playerSequence.push("blue");
    check();
    
})

$("#yellow").click(function(){
    $("#yellow").addClass("pressed");
    setTimeout(function(){
        $("#yellow").removeClass("pressed");
    },100);
    yellow.play();

    playerSequence.push("yellow");
    check();
    
})


function beeper(){
    $("#level-title").text("Level "+gameLevel);
    var sno=randomNumber();

    switch(sno){
        case 0:{
            pressNplay("green");
            green.play();
            gameStart++;

        }
        break;
        case 1:{
            pressNplay("red");
            red.play();
            gameStart++;
        }
        break;
        case 2:{
            pressNplay("blue");
            blue.play();
            gameStart++;
        }
        break;
        case 3:{
            pressNplay("yellow");
            yellow.play();
            gameStart++;
        }
        default:
    }
    playerSequence=[];
}


function check(){
    var count=0;
    result=true;

    while(count<playerSequence.length){
        if(gameSequence[count]==playerSequence[count]){
            count++;
            
        }
        else{
            result=false;
            break;
        }

        
    }
    if(playerSequence.length==gameSequence.length){
    if(result){
        gameLevel++;
        beeper();
    }else{
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },100);
        wrongAudio.play();
        gameLevel=1;
        gameSequence=[];
        gameStart=1;
        $("#level-title").text("Game Over Press Any Key");
        
    }
}else{
    if(result==false){
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },100);
        wrongAudio.play();
        
        gameLevel=1;
        gameSequence=[];
        gameStart=1;
        $("#level-title").text("Game Over Press Any Key");
        
    }
}

}

