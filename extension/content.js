// content.js

//what's for dinner HTML
var openHelp = function(helpBtn){
    alert("opening?")
    $(".bubble."+helpBtn).removeClass("disabled").addClass("enabled");
};
var WFD_HTML = 
"<h3>Evaluation Feedback Generator</h3>\
<p>Please don't rely on this alone for evaluations, it is by far inferior to the evaluations you can do. Add and improve on what this gives you.</p>\
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
<button id='feedback-generation-btn'>generate evaluation</button>";

var CSS = 
"#feedback-generator-main-div{\
    background-color:rgb(200, 200, 255);\
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
button.feedback-help-button.repeat-color:hover.bubble{display:block;}\
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
";



//when page loaded
$(window).on("load", function(){

    //IMPORTANT: This timeout delay is needed because the KA page lies about when it is done loading (above)
    window.setTimeout(function(){
        alert("loaded");
        //when you click the "evaluate project" button
        $(".eval-button-container button").on("click", function(){

            //another slight delay we have to deal with
            window.setTimeout(function(){

                //find the spot in the code we need to append to
                var $els = $(".eval-left ul div li");
                var btmCommentD = $els[$els.on.length];
                var $btmComment = $(btmCommentD);

                //append styling for the additions
                $("<style>").html(CSS).appendTo("head");

                //append code to the evaluation form
                $("<div>").attr("id", 'feedback-generator-main-div').html(WFD_HTML).prependTo($btmComment);

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

                $("#feedback-generation-btn").on("click", function(){
                    var projectOwner = $("._191y9x4m")[0].innerText;
                    var evaluationAuthor = $("._wozql4")[0].innerText;
                    var projectType = $("._1g8isxy8")[0].innerText;
                    $("textarea.discussion-text.eval-text")[0].value += "Nice Job " + projectOwner + "! " + "Congratulations on completing " + projectType + "!\nMade By Auto Feedback Generator -"+ evaluationAuthor;
                });

            }, 100);
        })
    }, 6000)
})

//respond to pop-up evaluation request
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "popup_message_attempt" ) {

        //opens the evaluation
        $.getJSON("https://www.khanacademy.org/api/internal/projecteval?casing=camel&limit=20&topic=computer-programming&max_answers=0&lang=en&callback=?",
        function(data) {
            window.open(("https://khanacademy.org" + data.feedback[0].focusUrl), "_blank");
        
        })
      }
    }
  );