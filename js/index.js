/**regarding the Quote */
var currentQuote = "Fiction reveals truths that reality obscures.";
var currentAuthor = "~Jessamyn West";
var tempRand = Math.floor(Math.random()*10) + 1; /*1-10*/

/**Defaults = as provided in HTML files */
/*var heroImageDefault = document.getElementById("heroPic").src;*/




/*
/**upon click, change the banner to a random quote 
$("#bannerQuote").on("click",function changeQuote(){
    console.log("Changed the quote!");

    /**gets a random selector for our quote-switcher below, then sets the checker for next time 
    while(tempRand == tempRandCheck){
        tempRand = Math.floor(Math.random()*10) + 1; /*1-10
    }
    tempRandCheck = tempRand;

    switch(tempRand){
        case 1:
            currentQuote="Aspire to Inspire before you Expire!";
            currentAuthor="~Eugene Bell, Jr.";
            break;
        default:
            currentQuote="Fiction reveals truths that reality obscures.";
            currentAuthor="~Jessamyn West";
    }
    /**the new quote has been set, but the below actually changes it 
    document.getElementById("hQuote").innerHTML = currentQuote;
    document.getElementById("hAuthor").innerHTML = currentAuthor;
});
*/

/** ---------------NAV-RESET-------------------- */
/*
$(".navigation").on("mouseover",function(){
    console.log("Nav Rolled Over!");

    document.getElementById("heroPic").src = heroImageDefault;
    document.getElementById("heroText").innerHTML = heroPicTextDefault;

    document.getElementById("iconLeft").src = iconLeftDefault;
    document.getElementById("statNumLeft").innerHTML = statNumLeftDefault;
    document.getElementById("statTextLeft").innerHTML = statTextLeftDefault;

    document.getElementById("iconRight").src = iconRightDefault;
    document.getElementById("statNumRight").innerHTML = statNumRightDefault;
    document.getElementById("statTextRight").innerHTML = statTextRightDefault;

    document.getElementById("heroRef").removeAttribute("href");
    lastCard = "default"; /**resets #heroPic on nav-over to index Defaults
});
*/

/* upon clicking a stat
$("#heroStatLeft").on("click",function(){
    console.log("Clicked the left stat!");
});*/