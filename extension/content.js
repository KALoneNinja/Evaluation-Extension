// content.js

//a variable to store the HTML string for UI
var HTML;

// CSS  stuff
{
var CSS = 
"#feedback-generator-main-div, .feedback-generator-div{\
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
#feedback-generation-btn{\
    \
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
    left: 260px;\
}\
";
}

var appendCheck = function(apOn, clas, sDesc, pHolder){
    var div = $("<div>").addClass("everything-button-div").appendTo(apOn);
    $("<button>").addClass("feedback-help-button").addClass(clas).text("?").appendTo(div);
    $("<div>").addClass("bubble").addClass(clas).addClass("disabled").appendTo(div);
    $("<input>").attr("type", "checkbox").attr("name", clas).attr("value", clas).appendTo(div);
    $("<label>").text(sDesc).appendTo(div);
    if(typeof pHolder === "string"){
        $("<textArea>").attr("id", clas+"-textArea").attr("cols", "80").attr("placeholder", pHolder).appendTo(div);
    } else if(pHolder){
        pHolder.appendTo(div);
    }
    $("<br>").appendTo(apOn);
    help.push(clas);
};

var appendMainDiv = function(){
    //find the spot in the code we need to append to
    var $els = $(".eval-left ul div li");
    var btmCommentD = $els[$els.length-1];
    var $btmComment = $(btmCommentD);
    
    //append code to the evaluation form
    var whole = $("<div>").attr("id", 'feedback-generator-main-div').prependTo($btmComment);
    $("<h2>").text("Evaluation Feedback Generator").appendTo(whole);
    $("<h3>").text("Instructions").appendTo(whole);
    $("<p>").text("Look at the project, and click on all of the boxes that apply (including pass/fail boxes). Some will give you an option to specify the location or type of thing, and I suggest you fill those out. After that is done, click \"generate evaluation\". And finally, read it over and modify it where you want.").appendTo(whole);
    $("<h4>").attr("id", "auto-eval-warn").text("Please don't rely on this alone for evaluations, it is by far inferior to the evaluations you can do. Add and improve on what this gives you.").appendTo(whole);
    var div = {};
    div.left = $("<div>").attr("id", 'left-feedback-checkboxes').appendTo(whole);
    div.right = $("<div>").attr("id", 'right-feedback-checkboxes').appendTo(whole);

    $("<br>").addClass("clear").appendTo(whole);
    $("<button>").attr("id", "feedback-generation-btn").text("generate evaluation").appendTo(whole);

    return div;
};

var help = [];

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
        appendHTML: function(){
            
        }
    },
    "Project: Ad Design": {
        generateFeedback: function(){
            var projectOwner = $("._191y9x4m")[0].innerText;
            var evaluationAuthor = $("._wozql4")[0].innerText;
            var projectType = $("._1g8isxy8")[0].innerText;
            $("textarea.discussion-text.eval-text")[0].value += "Nice Job " + projectOwner + "! " + "Congratulations on completing " + projectType + "!\n-_ " + evaluationAuthor + " (with help of Auto Feedback Generator Extension_";

        },
        appendHTML: function(){
            
        }
    },
    "Project: Fish Tank": {
        generateFeedback: function(){
            var projectOwner = $("._191y9x4m")[0].innerText;
            var evaluationAuthor = $("._wozql4")[0].innerText;
            var projectType = $("._1g8isxy8")[0].innerText;
            $("textarea.discussion-text.eval-text")[0].value += "Nice Job " + projectOwner + "! " + "Congratulations on completing " + projectType + "!\n-_ " + evaluationAuthor + " (with help of Auto Feedback Generator Extension_";

        },
        appendHTML: function(){
            
        }
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
                    oneFeed[1].value = "You need to use === for all of your if statements. This is because in code we strive for simplicity so people can understand our code better, and === is much simpler than < or >. Also, you must show your complete understanding of `floor(random(min, max))`, and this is the only way to do it.";
                }
            }

            //fails for not using else
            var oneFeed = $allFeed[1].childNodes[2].childNodes;
            if(oneFeed.length === 2){
                pass = false;
                if(oneFeed[1].value === ""){
                    oneFeed[1].value = "else is an important tool for coders. It can make our jobs easier with less code to write, but more importantly it makes things much more efficient. This is why it is important for you to prove that you know how to use it here. If you forgot how to use else, make sure to review the tutorials.";
                }
            }

            //fails for not making unique answer or values of answer aren't covered properly
            var oneFeed = $allFeed[2].childNodes[2].childNodes;
            if(oneFeed.length === 2){
                console.log("failed");
                pass = false;
                var extras = $allFeed[2].childNodes[3].childNodes;

                

                if(oneFeed[1].value === ""){
                    
                    var used = false;
                    //console.log(extras[1]);
                    //uses value of answer
                    if(extras[1].childNodes[2].checked){
                        
                        oneFeed[1].value = "The problem here is that your program displays the number of the answer, it works, but you can achieve it in much simpler code: \n `text(floor(random(1, 5)), 200, 200);`\n This means that most of your code is unnecessary and a problem. Try setting answers like \"yes!\"";
                        used = true;
                    }

                    //useless if
                    if(extras[3].childNodes[2].checked){
                        console.log("checked!");
                        if(used){
                            oneFeed[1].value += "\n\n";
                        }
                        used = true;
                        var a = parseFloat(extras[3].childNodes[4].childNodes[1].value);
                        var b = parseFloat(extras[3].childNodes[4].childNodes[3].value);
                        var vals = extras[3].childNodes[4].childNodes[5].value;
                        //console.log("a: " + a + ", b: " + b + ", val: " + vals);
                        oneFeed[1].value += ("The problem here is that `random(" + a + ", " + b + ")` at its max returns ~" + (b-0.0001) + " and at its minimum will return " + a + ".0000. " + a + ".0000 rounded down with floor is " + a + " and " + (b - 0.0001) + " rounded down is " + (b-1) + ". Your if statement for the value " + vals + " doesn't fit within that range. Perhaps you could extend the range `floor(random())` will return?");
                    }

                    //no if for value
                    if(extras[5].childNodes[2].checked){
                        if(used){
                            oneFeed[1].value += "\n\n";
                        }
                        var a = parseFloat(extras[5].childNodes[4].childNodes[1].value);
                        var b = parseFloat(extras[5].childNodes[4].childNodes[3].value);
                        var vals = extras[5].childNodes[4].childNodes[5].value;
                        used = true;
                        oneFeed[1].value += ("The problem here is that `random(" + a + ", " + b + ")` at its max returns ~" + (b-0.0001) + " and at its minimum will return " + a + ".0000. " + a + ".0000 rounded down with floor is " + a + " and " + (b - 0.0001) + " rounded down is " + (b-1) + ". Your if statements do not completely cover that range, specifically for " + vals + ". Try adding more if statements.");
                    }
                }
            }

            //uses floor(random())
            var oneFeed = $allFeed[3].childNodes[2].childNodes;
            if(oneFeed.length === 2){
                pass = false;
                if(oneFeed[1].value === ""){
                    oneFeed[1].value = "You must show that you understand the `floor(random(min, max))` system as it is one of the few ways to generate a random whole number which will become vital if you continue coding. If you forgot how to do this, you should review the tutorials.";
                }
            }

            //uses floor(random())
            var oneFeed = $allFeed[4].childNodes[2].childNodes;
            if(oneFeed.length === 2){
                pass = false;
                if(oneFeed[1].value === ""){
                    oneFeed[1].value = "If you ever need help, you can find it in the help requests tab beneath your program. Just post a comment there, and you should get some good help within a day.";
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

            var compliments = 0;
            var complimentsToDo = 0;
            for(var i = 0; i < 4; i ++){
                if(checkBoxes[i].checked){
                    complimentsToDo ++;
                }
            }

            //indents
            if(checkBoxes[0].checked){
                if(compliments === 0){
                    extraCompliments += "I love ";
                } else{
                    if(complimentsToDo === 1){
                        extraCompliments += ", and ";
                    } else{
                        extraCompliments += ", ";
                    }
                }
                extraCompliments += " your use of indents"
                var addOn = $("#indents-textArea")[0];
                if(addOn.value.length > 0){
                    extraCompliments += " on lines " + addOn.value;
                }
                compliments ++;
                complimentsToDo --;
            } else{
                extraSuggestions += "\n\nIndents can really make your code easier to read. Put an indent on every line between {} or () or [], and you will find it looks much better, I suggest you look at Pamela's and other's code and mirror how they indent."
            }

            //documentation
            if(checkBoxes[1].checked){
                if(compliments === 0){
                    extraCompliments += "I love ";
                } else{
                    if(complimentsToDo === 1){
                        extraCompliments += ", and ";
                    } else{
                        extraCompliments += ", ";
                    }
                }
                var addOn = $("#documentation-textArea")[0];
                if(addOn.value.length === 0){
                    extraCompliments += "that you used the documentation";
                } else{
                    extraCompliments += "that you used " + addOn.value + " from the documentation"
                }
                compliments ++;
                complimentsToDo --;
            } else{
                extraSuggestions += "\n\nIt would have been great to have seen you go to the documentation and use something from there. Experimentation is a really big part of programming, and the more you experiment right now, the better you will be prepared for the future. On this project, it would have been very beneficial for you to have looked at the text section of the documentation. Instead of doing something like:\n```if (answer === 1){\n    text(\"IN\", 176, 200);\n    text(\"YOUR DREAMS\", 159, 229);\n}else if (answer === 2){\n    text(\"NOT\", 176, 200);\n    text(\"HAPPENING\", 159, 229);\n}```\nYou can just do:\n```textAlign(CENTER, CENTER);\nif (answer === 1){\n    text(\"IN\\nYOUR DREAMS\", 200, 200);\n}else if (answer === 2){\n    text(\"NOT\\nHAPPENING\", 200, 200);\n}```\nSee how useful that was?"
            }

            //comments
            if(checkBoxes[2].checked){
                if(compliments === 0){
                    extraCompliments += "I love ";
                } else{
                    if(complimentsToDo === 1){
                        extraCompliments += ", and ";
                    } else{
                        extraCompliments += ", ";
                    }
                }
                extraCompliments += "your use of comments"
                var addOn = $("#comments-textArea")[0];
                if(addOn.value.length > 0){
                    extraCompliments += " on lines " + addOn.value;
                }
                compliments ++;
                complimentsToDo --;
            } else{
                extraSuggestions += "\n\n I really want you to start using comments like:\n```//generate random whole number between 1 and 4\nvar answer = floor(random(1, 5));```\nIt may be a bit silly for this project, but it is important to get in the habit. Later you will need comments when other coders are trying to help you or learn from you, and when you try to navigate code you made 1+ weeks ago."
            }

            

            //line breaks
            if(checkBoxes[3].checked){
                
                if(compliments === 0){
                    extraCompliments += "I love ";
                } else{
                    if(complimentsToDo === 1){
                        extraCompliments += ", and ";
                    } else{
                        extraCompliments += ", ";
                    }
                }
                extraCompliments += "your use of line breaks"
                var addOn = $("#line_breaks-textArea")[0];
                if(addOn.value.length > 0){
                    extraCompliments += " on lines " + addOn.value;
                }
                compliments ++;
                complimentsToDo --;
            } else{
                extraSuggestions += "\n\n I really want you to start using line breaks to split your code into more manageable chunks. A line break is simply an empty line of code, try it out and see what you think!"
            }

            $("._qwk47qNaN")[0].value = "Hi! I evaluated your project. If you have any questions, thoughts, want some advice, or want any projects evaluated, you can contact me here.";

            var finalFeed = $("textarea.discussion-text.eval-text");
            finalFeed[finalFeed.length-1].value += "Nice Job " + projectOwner + "! " + extraCompliments + "!" + extraSuggestions + "\n\nKeep up the hard work! - " + evaluationAuthor + " (with help of Feedback Generator Extension[testing][version: 0.5.1])";
        },
        appendHTML: function(){
            
            help = [];

            //unique answer check boxes
            var div = $("<div>").addClass("feedback-generator-div").insertAfter($(".eval-peer-rubric-item")[2].childNodes[2]);

            $("<h4>").text("Reason for fail (only fill out if failed)").css("margin", "2px").appendTo(div);


            appendCheck(div, "answer-val", "the difference in the text is only the value of answer");

            var span = $("<span>");
            $("<label>").text("floor(random(").appendTo(span);
            $("<input>").attr("type", "text").attr("id", "floor_min-textArea").attr("value", "1").css("width", "24px").appendTo(span);
            $("<label>").text(", ").appendTo(span);
            $("<input>").attr("type", "text").attr("id", "floor_max-textArea").attr("value", "5").css("width", "24px").appendTo(span);
            $("<label>").text("))   The value the statement(s) use: ").appendTo(span);
            $("<input>").attr("type", "text").attr("id", "if_value-textArea").attr("value", "0, 5, and 6").css("width", "100px").appendTo(span);
            appendCheck(div, "no_if_message", "There is an if statement with a condition that is never true. ", span);
            //

            var span = $("<span>");
            $("<label>").text("floor(random(").appendTo(span);
            $("<input>").attr("type", "text").attr("id", "floor_min-textArea").attr("value", "1").css("width", "24px").appendTo(span);
            $("<label>").text(", ").appendTo(span);
            $("<input>").attr("type", "text").attr("id", "floor_max-textArea").attr("value", "5").css("width", "24px").appendTo(span);
            $("<label>").text("))   The values not covered: ").appendTo(span);
            $("<input>").attr("type", "text").attr("id", "answer_value-textArea").attr("value", "1 and 4").css("width", "100px").appendTo(span);
            appendCheck(div, "no_answer_message", "There is no if statement for a value of answer. ", span)
            //
            
            $("<br>").insertAfter(div);


            //checkboxes for general feedback

            var div = appendMainDiv();

            appendCheck(div.left, "indents", "they used indents", "The line of the indent(s) e.g. \"15 and 16\"");
            appendCheck(div.left, "documentation", "They used something from documentation", "The function(s) the student used e.g. \"textAlign(CENTER, CENTER);\"");

            appendCheck(div.right, "comments", "They used comments", "The line of the comment(s) e.g. \"15 and 16\"");
            appendCheck(div.right, "line_breaks", "they used line breaks", "The line of the line break(s) e.g. \"15 and 16\"");


        }
    },
    "Project: Build-a-House": {
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

            //draws something house-like
            var oneFeed = $allFeed[0].childNodes[2].childNodes;
            if(oneFeed.length === 2){
                pass = false;
                if(oneFeed[1].value === ""){
                    oneFeed[1].value = "";
                }
            }

            //Uses at least 2 loops to draw repeating parts of the drawing.
            var oneFeed = $allFeed[1].childNodes[3].childNodes;
            if(oneFeed.length === 2){
                pass = false;
                if(oneFeed[1].value === ""){
                    oneFeed[1].value = "";
                }
            }

            //syntax/logic
            var oneFeed = $allFeed[2].childNodes[2].childNodes;
            if(oneFeed.length === 2){
                pass = false;
                if(oneFeed[1].value === ""){
                    oneFeed[1].value = "If you ever need help, you can find it in the help requests tab beneath your program. Just post a comment there, and you should get some good help within a day.";
                }
            }

            //plagiarism
            var oneFeed = $allFeed[3].childNodes[2].childNodes;
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

            var compliments = 0;
            var complimentsToDo = 0;
            for(var i = 0; i < 4; i ++){
                if(checkBoxes[i].checked){
                    complimentsToDo ++;
                }
            }

            //indents
            if(checkBoxes[0].checked){
                if(compliments === 0){
                    extraCompliments += "I love ";
                } else{
                    if(complimentsToDo === 1){
                        extraCompliments += ", and ";
                    } else{
                        extraCompliments += ", ";
                    }
                }
                extraCompliments += " your use of indents"
                var addOn = $("#indents-textArea")[0];
                if(addOn.value.length > 0){
                    extraCompliments += " on lines " + addOn.value;
                }
                compliments ++;
                complimentsToDo --;
            } else{
                extraSuggestions += "\n\nIndents can really make your code easier to read. Put an indent on every line between {} or () or [], and you will find it looks much better, I suggest you look at Pamela's and other's code and mirror how they indent."
            }

            //documentation
            if(checkBoxes[1].checked){
                if(compliments === 0){
                    extraCompliments += "I love ";
                } else{
                    if(complimentsToDo === 1){
                        extraCompliments += ", and ";
                    } else{
                        extraCompliments += ", ";
                    }
                }
                var addOn = $("#documentation-textArea")[0];
                if(addOn.value.length === 0){
                    extraCompliments += "that you used the documentation";
                } else{
                    extraCompliments += "that you used " + addOn.value + " from the documentation"
                }
                compliments ++;
                complimentsToDo --;
            } else{
                extraSuggestions += "\n\nIt would have been great to have seen you go to the documentation and use something from there. Experimentation is a really big part of programming, and the more you experiment right now, the better you will be prepared for the future. On this project, it would have been very beneficial for you to have looked at image() and getImage(). image() is particularily important, it plays a key role in optimizing complex graphics used in games, so it is beneficial if you try usingit now."
            }

            //modulo
            if(checkBoxes[2].checked){
                if(compliments === 0){
                    extraCompliments += "I love ";
                } else{
                    if(complimentsToDo === 1){
                        extraCompliments += ", and ";
                    } else{
                        extraCompliments += ", ";
                    }
                }
                extraCompliments += "your use of modulo"
                var addOn = $("#images-modulo")[0];
                if(addOn.value.length > 0){
                    extraCompliments += " on lines " + addOn.value;
                }
                compliments ++;
                complimentsToDo --;
            } else{
                extraSuggestions += "\n\nIt would have been wonderful to have seen you use modulo (%). It can make your job much easier and is worth learning and experimenting with.";
            }
                

            //line breaks
            if(checkBoxes[3].checked){
                
                if(compliments === 0){
                    extraCompliments += "I love ";
                } else{
                    if(complimentsToDo === 1){
                        extraCompliments += ", and ";
                    } else{
                        extraCompliments += ", ";
                    }
                }
                extraCompliments += "your use of line breaks"
                var addOn = $("#line_breaks-textArea")[0];
                if(addOn.value.length > 0){
                    extraCompliments += " on lines " + addOn.value;
                }
                compliments ++;
                complimentsToDo --;
            } else{
                extraSuggestions += "\n\n I really want you to start using line breaks to split your code into more manageable chunks. A line break is simply an empty line of code, try it out and see what you think!"
            }

            //comments
            if(checkBoxes[4].checked){
                if(compliments === 0){
                    extraCompliments += "I love ";
                } else{
                    if(complimentsToDo === 1){
                        extraCompliments += ", and ";
                    } else{
                        extraCompliments += ", ";
                    }
                }
                extraCompliments += "your use of comments"
                var addOn = $("#comments-textArea")[0];
                if(addOn.value.length > 0){
                    extraCompliments += " on lines " + addOn.value;
                }
                compliments ++;
                complimentsToDo --;
            } else{
                extraSuggestions += "\n\n I really want you to start using comments like:\n```//generate random whole number between 1 and 4\nvar answer = floor(random(1, 5));```\nIt may be a bit silly for this project, but it is important to get in the habit. Later you will need comments when other coders are trying to help you or learn from you, and when you try to navigate code you made 1+ weeks ago."
            }




            $("._qwk47qNaN")[0].value = "Hi! I evaluated your project. If you have any questions, thoughts, want some advice, or want any projects evaluated, you can contact me here.";

            var finalFeed = $("textarea.discussion-text.eval-text");
            finalFeed[finalFeed.length-1].value += "Nice Job " + projectOwner + "! " + extraCompliments + "!" + extraSuggestions + "\n\nKeep up the hard work! - " + evaluationAuthor + " (with help of Feedback Generator Extension[testing][version: 0.5.1])";
        },
        appendHTML: function(){

            help = [];

            //extra checkboxes for "used 2 loops to draw repeated parts of drawing"
            var div = $("<div>").css("background-color", "rgb(220, 220, 255)").insertAfter($(".eval-peer-rubric-item")[1].childNodes[2]);

            $("<h4>").text("Reason for fail (only fill out if failed)").css("margin", "2px").appendTo(div);

            appendCheck(div, "not_enough_loops", "Not enough loops");
            appendCheck(div, "no_display", "Loop(s) don't display anything");
            appendCheck(div, "hidden_display", "Loop(s) don't display anything on the screen");
            appendCheck(div, "one_display", "Loop(s) display one thing");
            
            $("<br>").insertAfter(div);


            //checkboxes for general feedback

            var div = appendMainDiv();

            appendCheck(div.left, "indents", "they used indents", "The line of the indent(s) e.g. \"15 and 16\"");
            appendCheck(div.left, "documentation", "They used something form documentation", "The function(s) the student used e.g. \"image(\"img\");\"");
            appendCheck(div.left, "modulo", "They used modulo", "The line of the use e.g. \"15 and 16\"");

            appendCheck(div.right, "comments", "They used comments", "The line of the comment(s) e.g. \"15 and 16\"");
            appendCheck(div.right, "line-breaks", "they used line breaks", "The line of the line break(s) e.g. \"15 and 16\"");


        }
    },
    "Project: Make it rain": {
        generateFeedback: function(){
            var projectOwner = $("._191y9x4m")[0].innerText;
            var evaluationAuthor = $("._wozql4")[0].innerText;
            var projectType = $("._1g8isxy8")[0].innerText;
            $("textarea.discussion-text.eval-text")[0].value += "Nice Job " + projectOwner + "! " + "Congratulations on completing " + projectType + "!\n-_ " + evaluationAuthor + " (with help of Auto Feedback Generator Extension_";

        },
        appendHTML: function(){
            
        }
    },
    "Project: Bookshelf": {
        generateFeedback: function(){
            var projectOwner = $("._191y9x4m")[0].innerText;
            var evaluationAuthor = $("._wozql4")[0].innerText;
            var projectType = $("._1g8isxy8")[0].innerText;
            $("textarea.discussion-text.eval-text")[0].value += "Nice Job " + projectOwner + "! " + "Congratulations on completing " + projectType + "!\n-_ " + evaluationAuthor + " (with help of Auto Feedback Generator Extension_";

        },
        appendHTML: function(){
            
        }
    }
};

//when page loaded
$(window).on("load", function(){

    //IMPORTANT: This interval is needed because the KA page lies about when it is done loading (above)
    var readyWait = window.setInterval(function(){
        if(!$(".eval-left").text().includes("This project has an open evaluation request.")){
            return;
        }
        
        

        $("<style>").html(CSS2).appendTo("head");
        $("<span>").attr("id", "eval-ready-for-generator").html("ready").appendTo(".eval-left");
        
        //when you click the "evaluate project" button
        $(".eval-button-container button").on("click", function(){

            
            $("#eval-ready-for-generator").remove();
            //another slight delay we have to deal with
            window.setTimeout(function(){

                
                var projectType = $("._1g8isxy8")[0].innerText;


                //append styling for the additions
                $("<style>").html(CSS).appendTo("head");

                

                projects[projectType].appendHTML();

                //help button reactions
                for(var i = 0; i < help.length; i ++){
                    var btn = $($(".feedback-help-button."+help[i])[0]);
                    
                    btn.on("click", function(evt){
                        var bbl = $($(".bubble."+evt.currentTarget.className.replace("feedback-help-button ", ""))[0]);
                        if(bbl[0].className.includes("disabled")){
                            bbl.removeClass("disabled").addClass("enabled")
                        } else{
                            bbl.removeClass("enabled").addClass("disabled")
                        }
                    });
                }

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

        //we don't have to retry all of this again!
        window.clearInterval(readyWait);
    }, 1000)
})
