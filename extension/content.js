// content.js

var random = function(a, b){
  if(b !== undefined){
    return Math.random() * (b-a) + a;
  } else{
    return Math.random() * a;
  }
};

var appendCheck = function(apOn, clas, sDesc, helpText, pHolder){
  var div = $("<div>").addClass("everything-button-div").appendTo(apOn);
  if(helpText){
    $("<button>").addClass("feedback-help-button").addClass(clas).text("?").appendTo(div);
    $("<div>").text(helpText).addClass("bubble").addClass(clas).addClass("disabled").appendTo(div);
    help.push(clas);
  }
  $("<input>").attr("type", "checkbox").attr("name", clas).attr("value", clas).appendTo(div);
  $("<label>").text(sDesc).appendTo(div);
  if(typeof pHolder === "string"){
    $("<textArea>").attr("id", clas+"-textArea").attr("cols", "70").attr("placeholder", pHolder).appendTo(div);
  } else if(pHolder){
    pHolder.appendTo(div);
  }
  $("<br>").appendTo(apOn);
  
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
    $("<button>").attr("id", "feedback-generation-btn").text("Generate Evaluation").appendTo(whole);
    $("<label>").attr("id", "feedback-generation-click_response").appendTo(whole);

    return div;
};

var help = [];

const projectReplies = {};
projectReplies[WFD.name] = WFD.responses;
projectReplies[AD.name] = AD.responses;
projectReplies[FT.name] = FT.responses;
projectReplies[M8B.name] = M8B.responses;
projectReplies[BH.name] = BH.responses;
projectReplies[MR.name] = MR.responses;
projectReplies[B.name] = B.responses;

/* 
  This function goes through all of the pass/fail button <li>s and if it has 2 elements
  it has the failed text box open and is a fail. We then set that text box to a response I have
  come up with.
  */

var $allFeed, pass, projectType, compliments, extraCompliments, extraSuggestions;
// note: needs $allFeed, pass and projectType declared beforehand
var requirementResponse = function(){

var fails = 0;
var total = 0;

  if(!projectReplies[projectType]){
    return;
  }
  

  // shortened project requirement replies
  var reqs = projectReplies[projectType].requirements;

  for(var i = 0; i < $allFeed.length-1; i ++){

    // feedback area
    var oneFeed = $allFeed[i].childNodes[2].childNodes;

    //console.log(projectType);

    
    total++;
    // if failed
    if(oneFeed.length === 2){
      fails++;
      pass = false;

      // if not yet provided feedback
      if(oneFeed[1].value === ""){

        // if not extra 
        if(!Array.isArray(reqs[i])){

          // if no add-on
          if(!reqs[i]["add-ons"]){

            // generate message
            oneFeed[1].value = reqs[i]["no_add-ons"].messages[Math.floor(random(reqs[i]["no_add-ons"].messages.length))];
          } else{
            
          }
        }
        else{

          // div containing extras
          var extras = $allFeed[2].childNodes[3].childNodes;

          // variable to determine if we need white space
          var used = false;

          // loop through extras
          for(var i2 = 0; i2 < reqs[i].length; i2 += 1){

            var spot = i2 * 2 + 1;

            // adds to message if checked
            var d = extras[spot].childNodes;
            var ind;
            if(d.length === 2 || d.length === 3){
              ind = 0;
            } else{
              ind = 2;
            }
            if(d[ind].checked){

              // if previous messages used: 
              if(used){

                // space it out
                oneFeed[1].value += "\n\n";
              }


              if(!reqs[i]["add-ons"]){

                // generate message
                oneFeed[1].value += reqs[i][i2]["no_add-ons"].messages[Math.floor(random(reqs[i][i2]["no_add-ons"].messages.length))];
              } else{
                
              }

              if(reqs[i][i2].exclusions){
                var d = extras[reqs[i][i2].exclusions.excludeIf *2 + 1].childNodes;
                var ind;
                if(d.length === 2 || d.length === 3){
                  ind = 0;
                } else{
                  ind = 2;
                }
                if(!d[ind].checked){
                  oneFeed[1].value += reqs[i][i2].exclusions.messages[Math.floor(random(reqs[i][i2].exclusions.messages.length))]
                }
              }

              used = true;
            }
          }
        }
      }
    }
  }
  return total - fails;
}

// goes through all of the critique check boxes and adds to response
// note: needs compliments, extraSuggestions, extraCompliments and projectType declared beforehand
var critiqueResponse = function(){

  if(!projectReplies[projectType]){
    return;
  }

  var unchecked =  0;
  var total = 0;

  //the following code adds stuff to the message depending on checkboxes
  var checkBoxes = $("#feedback-generator-main-div input");
            
  var complimentsToDo = 0;
  for(var i = 0; i < checkBoxes.length; i ++){
    total ++;
      if(checkBoxes[i].checked){
        
          complimentsToDo ++;
      } else{
        unchecked ++;
      }
  }

  var ctqs = projectReplies[projectType].critiques;
  for(var i = 0; i < checkBoxes.length; i ++){
    if(checkBoxes[i].checked){
      if(compliments === 0){
        extraCompliments += "I love ";
      } else{
        if(complimentsToDo === 1){
            extraCompliments += ", and ";
        } else{
            extraCompliments += ", ";
        }
      }

      if(ctqs[i].selected["add-ons"]){
        
        var addOn = $(("#"+ctqs[i].checkBox.id+"-textArea"))[0];
        if(addOn.value.length > 0){
          var phrases = ctqs[i].selected["add-ons"].messages[Math.floor(random(ctqs[i].selected["no_add-ons"].messages.length))].split("$");
          
          extraCompliments += phrases[0] + addOn.value + phrases[1];
          
        } else{
          extraCompliments += ctqs[i].selected["no_add-ons"].messages[Math.floor(random(ctqs[i].selected["no_add-ons"].messages.length))];
        }
      } else{
        extraCompliments += ctqs[i].selected["no_add-ons"].messages[Math.floor(random(ctqs[i].selected["no_add-ons"].messages.length))];
      }

      compliments ++;
      complimentsToDo --;
    } else{
      extraSuggestions += ctqs[i].unselected["no_add-ons"].messages[Math.floor(random(ctqs[i].unselected["no_add-ons"].messages.length))];
    }
    
  }
  return total - unchecked;
}

// appends all of the check boxes, titles, help boxes, everything
var appendHTML = function(){
  var projectType = $("._1g8isxy8")[0].innerText;
  
  help = [];

  if(!projectReplies[projectType]){
    appendMainDiv();
    return;
  }

  // shortened project requirement replies
  var reqs = projectReplies[projectType].requirements;

  for(var i = 0; i < reqs.length; i ++){
    if(Array.isArray(reqs[i])){
      //unique answer check boxes
      var div = $("<div>").addClass("feedback-generator-div").insertAfter($(".eval-peer-rubric-item")[i].childNodes[2]);

      $("<h4>").text("Reason for fail (only fill out if failed)").css("margin", "2px").appendTo(div);

      for(var i2 = 0; i2 < reqs[i].length; i2 ++){
        appendCheck(div, reqs[i][i2].checkBox.id, reqs[i][i2].checkBox.title, reqs[i][i2].checkBox.help)
      }
      $("<br>").insertAfter(div);
    }
  }


  //checkboxes for general feedback

  var ctqs = projectReplies[projectType].critiques;
  var div = appendMainDiv();

  for(var i = 0; i < ctqs.length; i ++){
    
    var hint = ((ctqs[i].selected["add-ons"] ? ctqs[i].selected["add-ons"].hint : undefined) || (ctqs[i].unselected["add-ons"] ? ctqs[i].unselected["add-ons"].hint : undefined));

    if(i < ctqs.length/2){
      
      appendCheck(div.left, ctqs[i].checkBox.id, ctqs[i].checkBox.title, ctqs[i].checkBox.help, hint)
    } else{
      appendCheck(div.right, ctqs[i].checkBox.id, ctqs[i].checkBox.title, ctqs[i].checkBox.help, hint);
    }
  }
};

//stores all of the specific project buttons/generation techniques
var projects = {
    "Project: What's For Dinner": {
      generateFeedback: function(){
        projectType = $("._1g8isxy8")[0];
        if(!projectType){
          alert("Error! You must be in the about section.");
          return;
        }
        projectType = projectType.innerText;
        if($("._191y9x4m")[0] !== undefined){
          var projectOwner = $("._191y9x4m")[0].innerText;
        } else{
            var projectOwner = $("._1g8isxy8")[0].innerText;
        }
        var evaluationAuthor = $("._wozql4")[0].innerText;
        pass = true;

        $allFeed = $(".eval-left ul div li");

        var qualScore = requirementResponse();
      
        //the following code adds stuff to the message
        extraCompliments = "";
        if(pass){
            extraCompliments+= "Congratulations on completing "  + projectType + "! ";
        }
        extraSuggestions = "";

        compliments = 0;
        
        qualScore += critiqueResponse();

        $("#uid-discussion-input-1-content-input")[0].value = "Hi! I evaluated your project. If you have any questions, thoughts, want some advice, or want any projects evaluated, you can contact me here.";

        var finalFeed = $("textarea.discussion-text.eval-text");

        if(pass){
            finalFeed[finalFeed.length-1].value += "Nice job " + projectOwner + "! ";
        }

        if(compliments > 0){
          extraCompliments += "!";
        }
        
        if(qualScore >= 5 || qualScore === NaN){
          if(extraSuggestions !== "" && compliments !== 0){
            extraCompliments += "\n\n";
          }
          finalFeed[finalFeed.length-1].value += extraCompliments + extraSuggestions + "Keep up the hard work! - " + evaluationAuthor + " (with help of Feedback Generator Extension[testing][version: 0.5.1])";
        } else{
          if(compliments !== 0){
            extraCompliments += "\n\n";
          }

          finalFeed[finalFeed.length-1].value += extraCompliments + "Please do not submit a project when it clearly won't pass. It not only wastes both of our time, but it also wastes all other student's time as well. So again, please make sure it will pass before submitting. If you need help, you can find it in the help requests tab beneath your program.\n\n- Don't give up! " + evaluationAuthor + " (with help of Feedback Generator Extension[testing][version: 0.5.1])";
        }
          

      }
    },
    "Project: Ad Design": {
      generateFeedback: function(){
        projectType = $("._1g8isxy8")[0];
        if(!projectType){
          alert("Error! You must be in the about section.");
          return;
        }
        projectType = projectType.innerText;
        if($("._191y9x4m")[0] !== undefined){
          var projectOwner = $("._191y9x4m")[0].innerText;
        } else{
            var projectOwner = $("._1g8isxy8")[0].innerText;
        }
        var evaluationAuthor = $("._wozql4")[0].innerText;
        pass = true;

        $allFeed = $(".eval-left ul div li");

        var qualScore = requirementResponse();
      
        //the following code adds stuff to the message
        extraCompliments = "";
        if(pass){
            extraCompliments+= "Congratulations on completing "  + projectType + "! ";
        }
        extraSuggestions = "";

        compliments = 0;
        
        qualScore += critiqueResponse();

        $("#uid-discussion-input-1-content-input")[0].value = "Hi! I evaluated your project. If you have any questions, thoughts, want some advice, or want any projects evaluated, you can contact me here.";

        var finalFeed = $("textarea.discussion-text.eval-text");

        if(pass){
            finalFeed[finalFeed.length-1].value += "Nice job " + projectOwner + "! ";
        }

        if(compliments > 0){
          extraCompliments += "!";
        }
        
        if(qualScore >= 5 || qualScore === NaN){
          if(extraSuggestions !== "" && compliments !== 0){
            extraCompliments += "\n\n";
          }
          finalFeed[finalFeed.length-1].value += extraCompliments + extraSuggestions + "Keep up the hard work! - " + evaluationAuthor + " (with help of Feedback Generator Extension[testing][version: 0.5.1])";
        } else{
          if(compliments !== 0){
            extraCompliments += "\n\n";
          }

          finalFeed[finalFeed.length-1].value += extraCompliments + "Please do not submit a project when it clearly won't pass. It not only wastes both of our time, but it also wastes all other student's time as well. So again, please make sure it will pass before submitting. If you need help, you can find it in the help requests tab beneath your program.\n\n- Don't give up! " + evaluationAuthor + " (with help of Feedback Generator Extension[testing][version: 0.5.1])";
        }
          

      }
    },
    "Project: Fish Tank": {
      generateFeedback: function(){
        projectType = $("._1g8isxy8")[0];
        if(!projectType){
          alert("Error! You must be in the about section.");
          return;
        }
        projectType = projectType.innerText;
        if($("._191y9x4m")[0] !== undefined){
          var projectOwner = $("._191y9x4m")[0].innerText;
        } else{
            var projectOwner = $("._1g8isxy8")[0].innerText;
        }
        var evaluationAuthor = $("._wozql4")[0].innerText;
        pass = true;

        $allFeed = $(".eval-left ul div li");

        var qualScore = requirementResponse();
      
        //the following code adds stuff to the message
        extraCompliments = "";
        if(pass){
            extraCompliments+= "Congratulations on completing "  + projectType + "! ";
        }
        extraSuggestions = "";

        compliments = 0;
        
        qualScore += critiqueResponse();

        $("#uid-discussion-input-1-content-input")[0].value = "Hi! I evaluated your project. If you have any questions, thoughts, want some advice, or want any projects evaluated, you can contact me here.";

        var finalFeed = $("textarea.discussion-text.eval-text");

        if(pass){
            finalFeed[finalFeed.length-1].value += "Nice job " + projectOwner + "! ";
        }

        if(compliments > 0){
          extraCompliments += "!";
        }
        
        if(qualScore >= 5 || qualScore === NaN){
          if(extraSuggestions !== "" && compliments !== 0){
            extraCompliments += "\n\n";
          }
          finalFeed[finalFeed.length-1].value += extraCompliments + extraSuggestions + "Keep up the hard work! - " + evaluationAuthor + " (with help of Feedback Generator Extension[testing][version: 0.5.1])";
        } else{
          if(compliments !== 0){
            extraCompliments += "\n\n";
          }

          finalFeed[finalFeed.length-1].value += extraCompliments + "Please do not submit a project when it clearly won't pass. It not only wastes both of our time, but it also wastes all other student's time as well. So again, please make sure it will pass before submitting. If you need help, you can find it in the help requests tab beneath your program.\n\n- Don't give up! " + evaluationAuthor + " (with help of Feedback Generator Extension[testing][version: 0.5.1])";
        }
      }
    },
    "Project: Magic 8-Ball": {
      generateFeedback: function(){
        projectType = $("._1g8isxy8")[0];
        if(!projectType){
          alert("Error! You must be in the about section.");
          return;
        }
        projectType = projectType.innerText;
        if($("._191y9x4m")[0] !== undefined){
          var projectOwner = $("._191y9x4m")[0].innerText;
        } else{
            var projectOwner = $("._1g8isxy8")[0].innerText;
        }
        var evaluationAuthor = $("._wozql4")[0].innerText;
        pass = true;

        $allFeed = $(".eval-left ul div li");

        var qualScore = requirementResponse();
      
        //the following code adds stuff to the message
        extraCompliments = "";
        if(pass){
            extraCompliments+= "Congratulations on completing "  + projectType + "! ";
        }
        extraSuggestions = "";

        compliments = 0;
        
        qualScore += critiqueResponse();

        $("#uid-discussion-input-1-content-input")[0].value = "Hi! I evaluated your project. If you have any questions, thoughts, want some advice, or want any projects evaluated, you can contact me here.";

        var finalFeed = $("textarea.discussion-text.eval-text");

        if(pass){
            finalFeed[finalFeed.length-1].value += "Nice job " + projectOwner + "! ";
        }

        if(compliments > 0){
          extraCompliments += "!";
        }
        
        if(qualScore >= 5 || qualScore === NaN){
          if(extraSuggestions !== "" && compliments !== 0){
            extraCompliments += "\n\n";
          }
          finalFeed[finalFeed.length-1].value += extraCompliments + extraSuggestions + "Keep up the hard work! - " + evaluationAuthor + " (with help of Feedback Generator Extension[testing][version: 0.5.1])";
        } else{
          if(compliments !== 0){
            extraCompliments += "\n\n";
          }

          finalFeed[finalFeed.length-1].value += extraCompliments + "Please do not submit a project when it clearly won't pass. It not only wastes both of our time, but it also wastes all other student's time as well. So again, please make sure it will pass before submitting. If you need help, you can find it in the help requests tab beneath your program.\n\n- Don't give up! " + evaluationAuthor + " (with help of Feedback Generator Extension[testing][version: 0.5.1])";
        }
      }
    },
    "Project: Build-a-House": {
      generateFeedback: function(){
        projectType = $("._1g8isxy8")[0];
        if(!projectType){
          alert("Error! You must be in the about section.");
          return;
        }
        projectType = projectType.innerText;
        if($("._191y9x4m")[0] !== undefined){
          var projectOwner = $("._191y9x4m")[0].innerText;
        } else{
            var projectOwner = $("._1g8isxy8")[0].innerText;
        }
        var evaluationAuthor = $("._wozql4")[0].innerText;
        pass = true;

        $allFeed = $(".eval-left ul div li");

        var qualScore = requirementResponse();
      
        //the following code adds stuff to the message
        extraCompliments = "";
        if(pass){
            extraCompliments+= "Congratulations on completing "  + projectType + "! ";
        }
        extraSuggestions = "";

        compliments = 0;
        
        qualScore += critiqueResponse();

        $("#uid-discussion-input-1-content-input")[0].value = "Hi! I evaluated your project. If you have any questions, thoughts, want some advice, or want any projects evaluated, you can contact me here.";

        var finalFeed = $("textarea.discussion-text.eval-text");

        if(pass){
            finalFeed[finalFeed.length-1].value += "Nice job " + projectOwner + "! ";
        }

        if(compliments > 0){
          extraCompliments += "!";
        }
        
        if(qualScore >= 5 || qualScore === NaN){
          if(extraSuggestions !== "" && compliments !== 0){
            extraCompliments += "\n\n";
          }
          finalFeed[finalFeed.length-1].value += extraCompliments + extraSuggestions + "Keep up the hard work! - " + evaluationAuthor + " (with help of Feedback Generator Extension[testing][version: 0.5.1])";
        } else{
          if(compliments !== 0){
            extraCompliments += "\n\n";
          }

          finalFeed[finalFeed.length-1].value += extraCompliments + "Please do not submit a project when it clearly won't pass. It not only wastes both of our time, but it also wastes all other student's time as well. So again, please make sure it will pass before submitting. If you need help, you can find it in the help requests tab beneath your program.\n\n- Don't give up! " + evaluationAuthor + " (with help of Feedback Generator Extension[testing][version: 0.5.1])";
        }
      }
    },
    "Project: Make it rain": {
      generateFeedback: function(){
        projectType = $("._1g8isxy8")[0];
        if(!projectType){
          alert("Error! You must be in the about section.");
          return;
        }
        projectType = projectType.innerText;
        if($("._191y9x4m")[0] !== undefined){
          var projectOwner = $("._191y9x4m")[0].innerText;
        } else{
            var projectOwner = $("._1g8isxy8")[0].innerText;
        }
        var evaluationAuthor = $("._wozql4")[0].innerText;
        pass = true;

        $allFeed = $(".eval-left ul div li");

        var qualScore = requirementResponse();
      
        //the following code adds stuff to the message
        extraCompliments = "";
        if(pass){
            extraCompliments+= "Congratulations on completing "  + projectType + "! ";
        }
        extraSuggestions = "";

        compliments = 0;
        
        qualScore += critiqueResponse();

        $("#uid-discussion-input-1-content-input")[0].value = "Hi! I evaluated your project. If you have any questions, thoughts, want some advice, or want any projects evaluated, you can contact me here.";

        var finalFeed = $("textarea.discussion-text.eval-text");

        if(pass){
            finalFeed[finalFeed.length-1].value += "Nice job " + projectOwner + "! ";
        }

        if(compliments > 0){
          extraCompliments += "!";
        }
        
        if(qualScore >= 5 || qualScore === NaN){
          if(extraSuggestions !== "" && compliments !== 0){
            extraCompliments += "\n\n";
          }
          finalFeed[finalFeed.length-1].value += extraCompliments + extraSuggestions + "Keep up the hard work! - " + evaluationAuthor + " (with help of Feedback Generator Extension[testing][version: 0.5.1])";
        } else{
          if(compliments !== 0){
            extraCompliments += "\n\n";
          }

          finalFeed[finalFeed.length-1].value += extraCompliments + "Please do not submit a project when it clearly won't pass. It not only wastes both of our time, but it also wastes all other student's time as well. So again, please make sure it will pass before submitting. If you need help, you can find it in the help requests tab beneath your program.\n\n- Don't give up! " + evaluationAuthor + " (with help of Feedback Generator Extension[testing][version: 0.5.1])";
        }
      }
    },
    "Project: Bookshelf": {
        generateFeedback: function(){
          projectType = $("._1g8isxy8")[0];
        if(!projectType){
          alert("Error! You must be in the about section.");
          return;
        }
        projectType = projectType.innerText;
        if($("._191y9x4m")[0] !== undefined){
          var projectOwner = $("._191y9x4m")[0].innerText;
        } else{
            var projectOwner = $("._1g8isxy8")[0].innerText;
        }
        var evaluationAuthor = $("._wozql4")[0].innerText;
        pass = true;

        $allFeed = $(".eval-left ul div li");

        var qualScore = requirementResponse();
      
        //the following code adds stuff to the message
        extraCompliments = "";
        if(pass){
            extraCompliments+= "Congratulations on completing "  + projectType + "! ";
        }
        extraSuggestions = "";

        compliments = 0;
        
        qualScore += critiqueResponse();

        $("#uid-discussion-input-1-content-input")[0].value = "Hi! I evaluated your project. If you have any questions, thoughts, want some advice, or want any projects evaluated, you can contact me here.";

        var finalFeed = $("textarea.discussion-text.eval-text");

        if(pass){
            finalFeed[finalFeed.length-1].value += "Nice job " + projectOwner + "! ";
        }

        if(compliments > 0){
          extraCompliments += "!";
        }
        
        if(qualScore >= 5 || qualScore === NaN){
          if(extraSuggestions !== "" && compliments !== 0){
            extraCompliments += "\n\n";
          }
          finalFeed[finalFeed.length-1].value += extraCompliments + extraSuggestions + "Keep up the hard work! - " + evaluationAuthor + " (with help of Feedback Generator Extension[testing][version: 0.5.1])";
        } else{
          if(compliments !== 0){
            extraCompliments += "\n\n";
          }

          finalFeed[finalFeed.length-1].value += extraCompliments + "Please do not submit a project when it clearly won't pass. It not only wastes both of our time, but it also wastes all other student's time as well. So again, please make sure it will pass before submitting. If you need help, you can find it in the help requests tab beneath your program.\n\n- Don't give up! " + evaluationAuthor + " (with help of Feedback Generator Extension[testing][version: 0.5.1])";
        }
            

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
        
        

        //$("<style>").html(CSS2).appendTo("head");
        $("<span>").attr("id", "eval-ready-for-generator").text("ready").appendTo(".eval-left");
        
        //when you click the "evaluate project" button
        $(".eval-button-container button").on("click", function(){

            
            $("#eval-ready-for-generator").remove();
            //another slight delay we have to deal with
            window.setTimeout(function(){

                $("._qwk47qNaN")[0].value = "Hi! I evaluated your project. If you have any questions, thoughts, want some advice, or want any projects evaluated, you can contact me here.";

                chrome.storage.sync.get(["showFeedback"], function(item){
                    if(item.showFeedback){
                        var projectType = $("._1g8isxy8")[0];
                        if(!projectType){
                          alert("Error! You must be in the about section.");
                          return;
                        }
                        projectType = projectType.innerText;

                        appendHTML();

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
                            
                            //if the pass/fail are selected _qch9n6d is the class for a passed button
                            if($("._qch9n6d") !== undefined && ($("._qch9n6d").length === 6 || projectType !== "Magic 8-Ball")){
                                $("#feedback-generation-click_response").text("");
                                projects[projectType].generateFeedback();
                            } else{
                                $("#feedback-generation-click_response").text("You have not selected all of the pass or fail boxes!");
                            }
                            
                        });    
                    }
                })
                

                
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
