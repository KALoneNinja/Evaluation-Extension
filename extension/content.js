// content.js

//a variable to store the HTML string for UI
var HTML;

// CSS  stuff
{
var CSS = 
"#feedback-generator-main-div{\
    background-color:rgb(220, 220, 255);\
    border-radius: 20px;\
    padding:10px;\
}\
#left-feedback-checkboxes{\
    /*border:1px solid black;*/\
    width: 50%;\
    float:left;\
}\
#right-feedback-checkboxes{\
    /*border:1px solid black;*/\
    float:left;\
}\
.clear{\
clear:auto;\
}\
.feedback-help-button{\
    padding:2px;\
    border-radius: 10px;\
}\
.feedback-help-button.repeat-color.bubble{display:none;}\
.everything-button-div{\
    position:relative;\
}\
.bubble\
{\
    z-index:200;\
    top: -50px;\
    left: 50px;\
    position: absolute;\
    width: 350px;\
    height: 180px;\
    padding: 0px;\
    background: #CF5858;\
    -webkit-border-radius: 10px;\
    -moz-border-radius: 10px;\
    border-radius: 10px;\
}\
\
.bubble:after\
{\
    content: '';\
    position: absolute;\
    border-style: solid;\
    border-width: 20px 20px 20px 0;\
    border-color: transparent #CF5858;\
    display: block;\
    width: 0;\
    z-index: 1;\
    left: -20px;\
    top: 40px;\
}\
.disabled{\
    display: none;\
}\
.enabled{\
    display: block;\
}\
#auto-eval-warn{\
    color: red;\
}\
";
}

//CSS to style ready marker
{
var CSS2 = 
"#eval-ready-for-generator{\
    position: relative;\
    color:green;\
    font-size:25px;\
    top: 0px;\
    left: 300px;\
}\
";
}

//stores all of the specific project buttons/generation techniques
var projects = {
    "Project: What's For Dinner": {
        //when the button to generate feedback is pressed, this will be where it is generated
        generateFeedback: function(){
            var projectOwner = $("._191y9x4m")[0].innerText;
            var evaluationAuthor = $("._wozql4")[0].innerText;
            var projectType = $("._1g8isxy8")[0].innerText;
            $("textarea.discussion-text.eval-text")[0].value += "Nice Job " + projectOwner + "! " + "Congratulations on completing " + projectType + "!\n-_ " + evaluationAuthor + " (with help of Auto Feedback Generator Extension_";

        },

        //help buttons that describe check boxes
        helpButtons: function(){
            //the "?" buttons for the feedback generating check boxes
            var $strokeBtn = $($(".feedback-help-button.stroke")[0]);
            var $repeatBtn = $($(".feedback-help-button.repeat-color")[0]);
            var $documentationBtn = $($(".feedback-help-button.documentation")[0]);
            var $commentsBtn = $($(".feedback-help-button.comments")[0]);
            var $lineBrkBtn = $($(".feedback-help-button.line-breaks")[0]);
            var $hiddenBtn = $($(".feedback-help-button.hidden-shape")[0]);

            //the help bubbles for the buttons
            var $strokeBbl = $($(".bubble.stroke")[0]);
            var $repeatBbl = $($(".bubble.repeat-color")[0]);
            var $documentationBbl = $($(".bubble.documentation")[0]);
            var $commentsBbl = $($(".bubble.comments")[0]);
            var $lineBrkBbl = $($(".bubble.line-breaks")[0]);
            var $hiddenBbl = $($(".bubble.hidden-shape")[0]);

            //opens/close help bubbles
            $strokeBtn.on("click", function(){
                if($strokeBbl[0].className.includes("disabled")){
                    $strokeBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $strokeBbl.removeClass("enabled").addClass("disabled")
                }
            });
            $repeatBtn.on("click", function(){
                if($repeatBbl[0].className.includes("disabled")){
                    $repeatBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $repeatBbl.removeClass("enabled").addClass("disabled")
                }
            });
            $documentationBtn.on("click", function(){
                if($documentationBbl[0].className.includes("disabled")){
                    $documentationBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $documentationBbl.removeClass("enabled").addClass("disabled")
                }
            });
            $commentsBtn.on("click", function(){
                if($commentsBbl[0].className.includes("disabled")){
                    $commentsBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $commentsBbl.removeClass("enabled").addClass("disabled")
                }
            });
            $lineBrkBtn.on("click", function(){
                if($lineBrkBbl[0].className.includes("disabled")){
                    $lineBrkBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $lineBrkBbl.removeClass("enabled").addClass("disabled")
                }
            });
            $hiddenBtn.on("click", function(){
                if($hiddenBbl[0].className.includes("disabled")){
                    $hiddenBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $hiddenBbl.removeClass("enabled").addClass("disabled")
                }
            });
        },

        //the HTML which is just all of the checkboxes and their question buttons
        HTML: "\
            <div id='left-feedback-checkboxes'>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button repeat-color'>?</button>\
                <div class='bubble repeat-color disabled'/>\
                <input type='checkbox' name='repeat-color' value='repeat-color'>\
                there are unneceessary repeated color commands\
            </div><br>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button comments'>?</button>\
                <div class='bubble comments disabled'/>\
                <input type='checkbox' name='comments' value='comments'>\
                Included Comments\
            </div><br>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button line-breaks'>?</button>\
                <div class='bubble line-breaks disabled'/>\
                <input type='checkbox' name='line-breaks' value='line-breaks'>\
                Line Breaks\
            </div>\
        </div>\
        <div id='right-feedback-checkboxes'>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button documentation'>?</button>\
                <div class='bubble documentation disabled'/>\
                <input type='checkbox' name='documentation' value='documentation'>\
                Used Documentation\
            </div><br>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button stroke'>?</button>\
                <div class='bubble stroke disabled'/>\
                <input type='checkbox' name='stroke' value='stroke'>\
                Used Stroke Commands\
            </div><br>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button hidden-shape'>?</button>\
                <div class='bubble hidden-shape disabled'/>\
                <input type='checkbox' name='hidden-shape' value='hidden-shape'>\
                Shape Not Showing On Canvas\
            </div><br>\
        </div>\
        <br class='clear'>\
        "
    },
    "Project: Ad Design": {
        generateFeedback: function(){
            var projectOwner = $("._191y9x4m")[0].innerText;
            var evaluationAuthor = $("._wozql4")[0].innerText;
            var projectType = $("._1g8isxy8")[0].innerText;
            $("textarea.discussion-text.eval-text")[0].value += "Nice Job " + projectOwner + "! " + "Congratulations on completing " + projectType + "!\n-_ " + evaluationAuthor + " (with help of Auto Feedback Generator Extension_";

        },
        helpButtons: function(){
            //the "?" buttons for the feedback generating check boxes
            var $indentsBtn = $($(".feedback-help-button.indents")[0]);
            var $documentationBtn = $($(".feedback-help-button.documentation")[0]);
            var $commentsBtn = $($(".feedback-help-button.comments")[0]);
            var $lineBrkBtn = $($(".feedback-help-button.line-breaks")[0]);

            //the help bubbles for the buttons
            var $indentsBbl = $($(".bubble.indents")[0]);
            var $documentationBbl = $($(".bubble.documentation")[0]);
            var $commentsBbl = $($(".bubble.comments")[0]);
            var $lineBrkBbl = $($(".bubble.line-breaks")[0]);

            //opens/close help bubbles
            $indentsBtn.on("click", function(){
                if($indentsBbl[0].className.includes("disabled")){
                    $indentsBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $indentsBbl.removeClass("enabled").addClass("disabled")
                }
            });
            $documentationBtn.on("click", function(){
                if($documentationBbl[0].className.includes("disabled")){
                    $documentationBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $documentationBbl.removeClass("enabled").addClass("disabled")
                }
            });
            $commentsBtn.on("click", function(){
                if($commentsBbl[0].className.includes("disabled")){
                    $commentsBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $commentsBbl.removeClass("enabled").addClass("disabled")
                }
            });
            $lineBrkBtn.on("click", function(){
                if($lineBrkBbl[0].className.includes("disabled")){
                    $lineBrkBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $lineBrkBbl.removeClass("enabled").addClass("disabled")
                }
            });
        },
        HTML: "\
            <div id='left-feedback-checkboxes'>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button indents'>?</button>\
                <div class='bubble indents disabled'/>\
                <input type='checkbox' name='indents' value='indents'>\
                there are indents\
            </div><br>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button comments'>?</button>\
                <div class='bubble comments disabled'/>\
                <input type='checkbox' name='comments' value='comments'>\
                Included Comments\
            </div><br>\
        </div>\
        <div id='right-feedback-checkboxes'>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button documentation'>?</button>\
                <div class='bubble documentation disabled'/>\
                <input type='checkbox' name='documentation' value='documentation'>\
                Used Documentation\
            </div><br>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button line-breaks'>?</button>\
                <div class='bubble line-breaks disabled'/>\
                <input type='checkbox' name='line-breaks' value='line-breaks'>\
                Line Breaks\
            </div>\
        </div>\
        <br class='clear'>\
        "
    },
    "Project: Fish Tank": {
        generateFeedback: function(){
            var projectOwner = $("._191y9x4m")[0].innerText;
            var evaluationAuthor = $("._wozql4")[0].innerText;
            var projectType = $("._1g8isxy8")[0].innerText;
            $("textarea.discussion-text.eval-text")[0].value += "Nice Job " + projectOwner + "! " + "Congratulations on completing " + projectType + "!\n-_ " + evaluationAuthor + " (with help of Auto Feedback Generator Extension_";

        },
        helpButtons: function(){
            //the "?" buttons for the feedback generating check boxes
            var $indentsBtn = $($(".feedback-help-button.indents")[0]);
            var $documentationBtn = $($(".feedback-help-button.documentation")[0]);
            var $commentsBtn = $($(".feedback-help-button.comments")[0]);
            var $lineBrkBtn = $($(".feedback-help-button.line-breaks")[0]);

            //the help bubbles for the buttons
            var $indentsBbl = $($(".bubble.indents")[0]);
            var $documentationBbl = $($(".bubble.documentation")[0]);
            var $commentsBbl = $($(".bubble.comments")[0]);
            var $lineBrkBbl = $($(".bubble.line-breaks")[0]);

            //opens/close help bubbles
            $indentsBtn.on("click", function(){
                if($indentsBbl[0].className.includes("disabled")){
                    $indentsBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $indentsBbl.removeClass("enabled").addClass("disabled")
                }
            });
            $documentationBtn.on("click", function(){
                if($documentationBbl[0].className.includes("disabled")){
                    $documentationBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $documentationBbl.removeClass("enabled").addClass("disabled")
                }
            });
            $commentsBtn.on("click", function(){
                if($commentsBbl[0].className.includes("disabled")){
                    $commentsBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $commentsBbl.removeClass("enabled").addClass("disabled")
                }
            });
            $lineBrkBtn.on("click", function(){
                if($lineBrkBbl[0].className.includes("disabled")){
                    $lineBrkBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $lineBrkBbl.removeClass("enabled").addClass("disabled")
                }
            });
        },
        HTML: "\
            <div id='left-feedback-checkboxes'>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button indents'>?</button>\
                <div class='bubble indents disabled'/>\
                <input type='checkbox' name='indents' value='indents'>\
                there are indents\
            </div><br>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button comments'>?</button>\
                <div class='bubble comments disabled'/>\
                <input type='checkbox' name='comments' value='comments'>\
                Included Comments\
            </div><br>\
        </div>\
        <div id='right-feedback-checkboxes'>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button documentation'>?</button>\
                <div class='bubble documentation disabled'/>\
                <input type='checkbox' name='documentation' value='documentation'>\
                Used Documentation\
            </div><br>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button line-breaks'>?</button>\
                <div class='bubble line-breaks disabled'/>\
                <input type='checkbox' name='line-breaks' value='line-breaks'>\
                Line Breaks\
            </div>\
        </div>\
        <br class='clear'>\
        "
    },
    "Project: Magic 8-Ball": {
        generateFeedback: function(){
            var projectOwner = $("._191y9x4m")[0].innerText;
            var evaluationAuthor = $("._wozql4")[0].innerText;
            var projectType = $("._1g8isxy8")[0].innerText;
            var pass = true;

            var $allFeed = $(".eval-left ul div li");

            /* 
            This section of code goes through all of the pass/fail button <li>s and if it has 2 elements
            it has the failed text box open and is a fail. We then set that text box to a response I have
            come up with.
            */

            //fails for not using ===
            var oneFeed = $allFeed[0].childNodes[2].childNodes;
            if(oneFeed.length === 2){
                pass = false;
                if(oneFeed[1].value === ""){
                    oneFeed[1].value = "You need to use === for all of your if statements. This is because in code we strive for simplicity so people can understand our code better, and === is much simpler than < or >. Also, you must show your complete understanding of `floor(random(min, max)), and this is the only way to do it.";
                }
            }

            //fails for not using else
            var oneFeed = $allFeed[1].childNodes[2].childNodes;
            if(oneFeed.length === 2){
                pass = false;
                if(oneFeed[1].value === ""){
                    oneFeed[1].value = "else is an important tool for coders. It can make our jobs easier with less code to write, but more importantly it makes things much more efficient. This is why it is important for you to prove that you know how to use it here. If you forgot how to use else,, make sure to review the tutorials.";
                }
            }

            //fails for not making unique answer
            var oneFeed = $allFeed[2].childNodes[2].childNodes;
            if(oneFeed.length === 2){
                pass = false;
                if(oneFeed[1].value === ""){
                    oneFeed[1].value = "The problem here is that your program displays the number of the answer, it works, but you can achieve it in much simpler code: \n `text(floor(random(1, 5)), 200, 200);`\n This means that most of your code is unnecessary and a problem. Try setting answers like \"yes!\"";
                }
            }

            //uses floor(random())
            var oneFeed = $allFeed[3].childNodes[2].childNodes;
            if(oneFeed.length === 2){
                pass = false;
                if(oneFeed[1].value === ""){
                    oneFeed[1].value = "You must show that you understand the floor(random(min, max)) system as it is one of the few ways to generate a random whole number which will become vital if you continue coding. If you forgot how to do this, you should review the tutorials.";
                }
            }

            //uses floor(random())
            var oneFeed = $allFeed[4].childNodes[2].childNodes;
            if(oneFeed.length === 2){
                pass = false;
                if(oneFeed[1].value === ""){
                    oneFeed[1].value = "If you ever need help, you can find it in the help requests tab beneath your programm. Just post a comment there, and you should get some good help within a day.";
                }
            }

            //uses floor(random())
            var oneFeed = $allFeed[5].childNodes[2].childNodes;
            if(oneFeed.length === 2){
                pass = false;
                if(oneFeed[1].value === ""){
                    oneFeed[1].value = "Link:\nPlease don't plagiarize, you will waste all of our time. You won't learn what you should, and I will be kept away from other projects that are actually proving something. Not to mention it is rude to te author.";
                }
            }


            //the following code adds stuff to the message
            var extraCompliments = "";
            if(pass){
                extraCompliments+= "Congratulations on completing "  + projectType + "! ";
            }
            var extraSuggestions = "";


            //the following code adds stuff to the message depending on checkboxes
            var checkBoxes = $("#feedback-generator-main-div input");

            //indents
            if(checkBoxes[0].checked){
                extraCompliments += "I love your use of indents"
            } else{
                extraSuggestions += "\nindents can really make your code easier to read. Put an indent on every line between {} or () or [], and you will find it looks much better, I suggest you look at Pamela's and other's code and mirror how they indent."
            }

            

            var finalFeed = $("textarea.discussion-text.eval-text");
            finalFeed[finalFeed.length-1].value += "Nice Job " + projectOwner + "! " + extraCompliments + extraSuggestions + "!\n-_ " + evaluationAuthor + " (with help of Auto Feedback Generator Extension[testing][version: 0.6.1])_";
        },
        helpButtons: function(){
            //the "?" buttons for the feedback generating check boxes
            var $indentsBtn = $($(".feedback-help-button.indents")[0]);
            var $documentationBtn = $($(".feedback-help-button.documentation")[0]);
            var $commentsBtn = $($(".feedback-help-button.comments")[0]);
            var $lineBrkBtn = $($(".feedback-help-button.line-breaks")[0]);

            //the help bubbles for the buttons
            var $indentsBbl = $($(".bubble.indents")[0]);
            var $documentationBbl = $($(".bubble.documentation")[0]);
            var $commentsBbl = $($(".bubble.comments")[0]);
            var $lineBrkBbl = $($(".bubble.line-breaks")[0]);

            //opens/close help bubbles
            $indentsBtn.on("click", function(){
                if($indentsBbl[0].className.includes("disabled")){
                    $indentsBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $indentsBbl.removeClass("enabled").addClass("disabled")
                }
            });
            $documentationBtn.on("click", function(){
                if($documentationBbl[0].className.includes("disabled")){
                    $documentationBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $documentationBbl.removeClass("enabled").addClass("disabled")
                }
            });
            $commentsBtn.on("click", function(){
                if($commentsBbl[0].className.includes("disabled")){
                    $commentsBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $commentsBbl.removeClass("enabled").addClass("disabled")
                }
            });
            $lineBrkBtn.on("click", function(){
                if($lineBrkBbl[0].className.includes("disabled")){
                    $lineBrkBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $lineBrkBbl.removeClass("enabled").addClass("disabled")
                }
            });
        },
        HTML: "\
            <div id='left-feedback-checkboxes'>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button indents'>?</button>\
                <div class='bubble indents disabled'/>\
                <input type='checkbox' name='indents' value='indents'>\
                there are indents\
            </div><br>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button comments'>?</button>\
                <div class='bubble comments disabled'/>\
                <input type='checkbox' name='comments' value='comments'>\
                Included Comments\
            </div><br>\
        </div>\
        <div id='right-feedback-checkboxes'>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button documentation'>?</button>\
                <div class='bubble documentation disabled'/>\
                <input type='checkbox' name='documentation' value='documentation'>\
                Used Documentation\
            </div><br>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button line-breaks'>?</button>\
                <div class='bubble line-breaks disabled'/>\
                <input type='checkbox' name='line-breaks' value='line-breaks'>\
                Line Breaks\
            </div>\
        </div>\
        <br class='clear'>\
        "
    },
    "Project: Build-a-House": {
        generateFeedback: function(){
            var projectOwner = $("._191y9x4m")[0].innerText;
            var evaluationAuthor = $("._wozql4")[0].innerText;
            var projectType = $("._1g8isxy8")[0].innerText;
            $("textarea.discussion-text.eval-text")[0].value += "Nice Job " + projectOwner + "! " + "Congratulations on completing " + projectType + "!\n-_ " + evaluationAuthor + " (with help of Auto Feedback Generator Extension_";

        },
        helpButtons: function(){
            //the "?" buttons for the feedback generating check boxes
            var $indentsBtn = $($(".feedback-help-button.indents")[0]);
            var $documentationBtn = $($(".feedback-help-button.documentation")[0]);
            var $commentsBtn = $($(".feedback-help-button.comments")[0]);
            var $lineBrkBtn = $($(".feedback-help-button.line-breaks")[0]);

            //the help bubbles for the buttons
            var $indentsBbl = $($(".bubble.indents")[0]);
            var $documentationBbl = $($(".bubble.documentation")[0]);
            var $commentsBbl = $($(".bubble.comments")[0]);
            var $lineBrkBbl = $($(".bubble.line-breaks")[0]);

            //opens/close help bubbles
            $indentsBtn.on("click", function(){
                if($indentsBbl[0].className.includes("disabled")){
                    $indentsBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $indentsBbl.removeClass("enabled").addClass("disabled")
                }
            });
            $documentationBtn.on("click", function(){
                if($documentationBbl[0].className.includes("disabled")){
                    $documentationBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $documentationBbl.removeClass("enabled").addClass("disabled")
                }
            });
            $commentsBtn.on("click", function(){
                if($commentsBbl[0].className.includes("disabled")){
                    $commentsBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $commentsBbl.removeClass("enabled").addClass("disabled")
                }
            });
            $lineBrkBtn.on("click", function(){
                if($lineBrkBbl[0].className.includes("disabled")){
                    $lineBrkBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $lineBrkBbl.removeClass("enabled").addClass("disabled")
                }
            });
        },
        HTML: "\
            <div id='left-feedback-checkboxes'>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button indents'>?</button>\
                <div class='bubble indents disabled'/>\
                <input type='checkbox' name='indents' value='indents'>\
                there are indents\
            </div><br>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button comments'>?</button>\
                <div class='bubble comments disabled'/>\
                <input type='checkbox' name='comments' value='comments'>\
                Included Comments\
            </div><br>\
        </div>\
        <div id='right-feedback-checkboxes'>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button documentation'>?</button>\
                <div class='bubble documentation disabled'/>\
                <input type='checkbox' name='documentation' value='documentation'>\
                Used Documentation\
            </div><br>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button line-breaks'>?</button>\
                <div class='bubble line-breaks disabled'/>\
                <input type='checkbox' name='line-breaks' value='line-breaks'>\
                Line Breaks\
            </div>\
        </div>\
        <br class='clear'>\
        "
    },
    "Project: Make it rain": {
        generateFeedback: function(){
            var projectOwner = $("._191y9x4m")[0].innerText;
            var evaluationAuthor = $("._wozql4")[0].innerText;
            var projectType = $("._1g8isxy8")[0].innerText;
            $("textarea.discussion-text.eval-text")[0].value += "Nice Job " + projectOwner + "! " + "Congratulations on completing " + projectType + "!\n-_ " + evaluationAuthor + " (with help of Auto Feedback Generator Extension_";

        },
        helpButtons: function(){
            //the "?" buttons for the feedback generating check boxes
            var $indentsBtn = $($(".feedback-help-button.indents")[0]);
            var $documentationBtn = $($(".feedback-help-button.documentation")[0]);
            var $commentsBtn = $($(".feedback-help-button.comments")[0]);
            var $lineBrkBtn = $($(".feedback-help-button.line-breaks")[0]);

            //the help bubbles for the buttons
            var $indentsBbl = $($(".bubble.indents")[0]);
            var $documentationBbl = $($(".bubble.documentation")[0]);
            var $commentsBbl = $($(".bubble.comments")[0]);
            var $lineBrkBbl = $($(".bubble.line-breaks")[0]);

            //opens/close help bubbles
            $indentsBtn.on("click", function(){
                if($indentsBbl[0].className.includes("disabled")){
                    $indentsBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $indentsBbl.removeClass("enabled").addClass("disabled")
                }
            });
            $documentationBtn.on("click", function(){
                if($documentationBbl[0].className.includes("disabled")){
                    $documentationBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $documentationBbl.removeClass("enabled").addClass("disabled")
                }
            });
            $commentsBtn.on("click", function(){
                if($commentsBbl[0].className.includes("disabled")){
                    $commentsBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $commentsBbl.removeClass("enabled").addClass("disabled")
                }
            });
            $lineBrkBtn.on("click", function(){
                if($lineBrkBbl[0].className.includes("disabled")){
                    $lineBrkBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $lineBrkBbl.removeClass("enabled").addClass("disabled")
                }
            });
        },
        HTML: "\
            <div id='left-feedback-checkboxes'>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button indents'>?</button>\
                <div class='bubble indents disabled'/>\
                <input type='checkbox' name='indents' value='indents'>\
                there are indents\
            </div><br>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button comments'>?</button>\
                <div class='bubble comments disabled'/>\
                <input type='checkbox' name='comments' value='comments'>\
                Included Comments\
            </div><br>\
        </div>\
        <div id='right-feedback-checkboxes'>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button documentation'>?</button>\
                <div class='bubble documentation disabled'/>\
                <input type='checkbox' name='documentation' value='documentation'>\
                Used Documentation\
            </div><br>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button line-breaks'>?</button>\
                <div class='bubble line-breaks disabled'/>\
                <input type='checkbox' name='line-breaks' value='line-breaks'>\
                Line Breaks\
            </div>\
        </div>\
        <br class='clear'>\
        "
    },
    "Project: Bookshelf": {
        generateFeedback: function(){
            var projectOwner = $("._191y9x4m")[0].innerText;
            var evaluationAuthor = $("._wozql4")[0].innerText;
            var projectType = $("._1g8isxy8")[0].innerText;
            $("textarea.discussion-text.eval-text")[0].value += "Nice Job " + projectOwner + "! " + "Congratulations on completing " + projectType + "!\n-_ " + evaluationAuthor + " (with help of Auto Feedback Generator Extension_";

        },
        helpButtons: function(){
            //the "?" buttons for the feedback generating check boxes
            var $indentsBtn = $($(".feedback-help-button.indents")[0]);
            var $documentationBtn = $($(".feedback-help-button.documentation")[0]);
            var $commentsBtn = $($(".feedback-help-button.comments")[0]);
            var $lineBrkBtn = $($(".feedback-help-button.line-breaks")[0]);

            //the help bubbles for the buttons
            var $indentsBbl = $($(".bubble.indents")[0]);
            var $documentationBbl = $($(".bubble.documentation")[0]);
            var $commentsBbl = $($(".bubble.comments")[0]);
            var $lineBrkBbl = $($(".bubble.line-breaks")[0]);

            //opens/close help bubbles
            $indentsBtn.on("click", function(){
                if($indentsBbl[0].className.includes("disabled")){
                    $indentsBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $indentsBbl.removeClass("enabled").addClass("disabled")
                }
            });
            $documentationBtn.on("click", function(){
                if($documentationBbl[0].className.includes("disabled")){
                    $documentationBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $documentationBbl.removeClass("enabled").addClass("disabled")
                }
            });
            $commentsBtn.on("click", function(){
                if($commentsBbl[0].className.includes("disabled")){
                    $commentsBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $commentsBbl.removeClass("enabled").addClass("disabled")
                }
            });
            $lineBrkBtn.on("click", function(){
                if($lineBrkBbl[0].className.includes("disabled")){
                    $lineBrkBbl.removeClass("disabled").addClass("enabled")
                } else{
                    $lineBrkBbl.removeClass("enabled").addClass("disabled")
                }
            });
        },
        HTML: "\
            <div id='left-feedback-checkboxes'>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button indents'>?</button>\
                <div class='bubble indents disabled'/>\
                <input type='checkbox' name='indents' value='indents'>\
                there are indents\
            </div><br>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button comments'>?</button>\
                <div class='bubble comments disabled'/>\
                <input type='checkbox' name='comments' value='comments'>\
                Included Comments\
            </div><br>\
        </div>\
        <div id='right-feedback-checkboxes'>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button documentation'>?</button>\
                <div class='bubble documentation disabled'/>\
                <input type='checkbox' name='documentation' value='documentation'>\
                Used Documentation\
            </div><br>\
            <div class='everything-button-div'>\
                <button class='feedback-help-button line-breaks'>?</button>\
                <div class='bubble line-breaks disabled'/>\
                <input type='checkbox' name='line-breaks' value='line-breaks'>\
                Line Breaks\
            </div>\
        </div>\
        <br class='clear'>\
        "
    }

};

//when page loaded
$(window).on("load", function(){

    //IMPORTANT: This timeout delay is needed because the KA page lies about when it is done loading (above)
    window.setTimeout(function(){
        $("<style>").html(CSS2).appendTo("head");
        $("<span>").attr("id", "eval-ready-for-generator").html("ready").appendTo(".eval-left");
        
        //when you click the "evaluate project" button
        $(".eval-button-container button").on("click", function(){

            
            $("#eval-ready-for-generator").remove();
            //another slight delay we have to deal with
            window.setTimeout(function(){

                var projectType = $("._1g8isxy8")[0].innerText;
                HTML = 
                    "<h2>Evaluation Feedback Generator</h2>\
                    <h3>Instructions</h3>\
                    <p>Look at the project, and click on all of the boxes that apply (including pass/fail boxes). Some will give you an option to specify the location or type of thing, and I suggest you fill those out. After that is done, click \"generate evaluation\". And finally, read it over and modify it where you want.</p>\
                    <h4 id='auto-eval-warn'>Please don't rely on this alone for evaluations, it is by far inferior to the evaluations you can do. Add and improve on what this gives you.</h4>\
                    "+ projects[projectType].HTML + "\
                    <button id='feedback-generation-btn'>generate evaluation</button>";

                //find the spot in the code we need to append to
                var $els = $(".eval-left ul div li");
                var btmCommentD = $els[$els.length-1];
                var $btmComment = $(btmCommentD);

                //append styling for the additions
                $("<style>").html(CSS).appendTo("head");

                //append code to the evaluation form
                $("<div>").attr("id", 'feedback-generator-main-div').html(HTML).prependTo($btmComment);

                //create help button interaction
                projects[projectType].helpButtons();

                //generate feedback
                $("#feedback-generation-btn").on("click", function(){
                    projects[projectType].generateFeedback();
                });

                
                /**          Handle evals for today storage and initialization         */
                //need set interval to tellwhen an evaluation is finished on click didn't work
                var upEvals = window.setInterval(function(){

                    //if the message that the evaluation is done is up
                    if($(".eval-guideline")[0].innerHTML.includes("Thank you, your evaluation has been submitted! ")){
                    
                        //retrieve evals from  chrome and increment it
                        chrome.storage.sync.get(["evals"], function(item){
                            var evals = item.evals;//to shorten things up

                            //if evals exists in chrome storage
                            if(evals){

                                //generate today string which is today's object element in evals
                                var today = new Date();
                                var todayString = today.getMonth() + "/" + today.getDate() + "/" + today.getFullYear;

                                //if today has been logged
                                if(evals[todayString]){
                                    evals[todayString] += 1;//increment it
                                    chrome.storage.sync.set({evals:evals})//save changes
                                } else{//if today hasn't been logged
                                    evals[todayString] = 1;//set today to 1 evaluation
                                    chrome.storage.sync.set({evals:evals});//save it to storage
                                }
                            } else{//if evals doesn't exist in storage

                                //create evals object in storage
                                chrome.storage.sync.set({evals:{}}, function(){

                                    //retrieve evals
                                    chrome.storage.sync.get(["evals"], function(item){

                                        var evals = item.evals;//shortens code

                                        //generate today's string
                                        var today = new Date();
                                        var todayString = today.getMonth() + "/" + today.getDate() + "/" + today.getFullYear;

                                        //set today in evals to 1
                                        evals[todayString] = 1;

                                        //save it to chrome storage
                                        chrome.storage.sync.set({evals:evals}, function(){console.log(evals);});
                                    })
                                })
                            }
                        })

                        //so we don't infinitely increase evaluation #
                        window.clearInterval(upEvals);
                    }
                }, 200)



            }, 200);
        })
    }, 6000)
})
