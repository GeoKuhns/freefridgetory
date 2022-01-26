/**Fridge for All Java */

/**Defaults = as provided in HTML files */
var dropdownOriginalDisplay = document.getElementById("dropdownContent").style.display;

/**no plans for this; keeping code in case we add a rand factor */
var tempRand = Math.floor(Math.random()*10) + 1; /*1-10*/



/**show/hide our address popout on hover allMapPins */
$(".allMapPins").on("mouseenter",function dropItDown(){
    console.log("Enter!");
    document.getElementById("dropdownContent").style.display = "inline-block";
});
$(".allMapPins").on("mouseleave",function raiseItBack(){
    console.log("Leave!");
    document.getElementById("dropdownContent").style.display = dropdownOriginalDisplay;
});

/**change the address to reflect the last mapPin hovered */
$("#mapPin1").on("mouseenter",function changeAddress(){
    console.log("Address Changed!");
    document.getElementById("mapAddress").innerHTML = "7777 E MLK Jr. Blvd";
});
$("#mapPin2").on("mouseenter",function changeAddress(){
    console.log("Address Changed!");
    document.getElementById("mapAddress").innerHTML = "3506 Springdale Rd";
});
$("#mapPin3").on("mouseenter",function changeAddress(){
    console.log("Address Changed!");
    document.getElementById("mapAddress").innerHTML = "601 Pecan Brook Dr";
});
$("#mapPin4").on("mouseenter",function changeAddress(){
    console.log("Address Changed!");
    document.getElementById("mapAddress").innerHTML = "2801 Webberville Rd";
});
$("#mapPin5").on("mouseenter",function changeAddress(){
    console.log("Address Changed!");
    document.getElementById("mapAddress").innerHTML = "408 E 7th St";
});



/*past content; keeping for example reference

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