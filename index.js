
$("#refreshButton").click(function () {
    location.reload();
});

$("#endButton").click(function () {
    if(n1>n2)
    {
        $("#winner").html("Player 1 wins!");
    }
    else if(n1<n2)
    {
        $("#winner").html("Player 2 wins!");
    }
    else
    {
        $("#winner").html("Draw");
    }
    setTimeout(function(){ location.reload();},2500);
});

var n1=0;
var n2=0;

$("#rollButton1").click(function(){
    var audio = new Audio("dice.mp3");
    audio.play();
    $("#score1").html(gen1());
    $("#p1").text("Player 1");
    $("#p2").text("-> Player 2");
});

$("#rollButton2").click(function(){
    var audio = new Audio("dice.mp3");
    audio.play();
    $("#score2").html(gen2());
    $("#p1").text("-> Player 1");
    $("#p2").text("Player 2");
});


function gen1(){
    var r = Math.ceil(Math.random()*6);
    var image1= "images/dice"+r+".png"
    $("#img1").attr("src",image1);
    n1+=r;
    return n1;
}

function gen2(){
    var r = Math.ceil(Math.random()*6);
    var image2= "images/dice"+r+".png"
    $("#img2").attr("src",image2);
    n2 += r;
    return n2;
}
