/**       Switching Tabs          **/

//given a tab name, this will switch the contents and tab to active and switch everything else to inactive
var switchTab = function(tab){
    var tabs = document.getElementsByClassName("tablinks");//actual tab
    var tabC = document.getElementsByClassName("tab-contents");//contents
    for(var i = 0; i < tabs.length; i ++){

        //if tab name is equal to given tab name, set tab and contents to active
        if(tabs[i].innerText === tab){
            tabs[i].className = "tablinks active";
            tabC[i].className = "tab-contents active"
        } else{//otherwise set to inactive
            tabs[i].className = "tablinks";
            tabC[i].className = "tab-contents"
        }
    }
}

//add the switchTab to all of the tabs' click event
var tabs = document.getElementsByClassName("tablinks");
for(var i = 0; i < tabs.length; i ++){
    tabs[i].addEventListener("click", function(evt){
        switchTab(evt.srcElement.innerText)
    })
}



/**       Handle links          **/
//store all of the links ina variable
var links = document.getElementsByTagName("a")

//add event listeners, so we can open the links (we don't have permission in popup.html for some reason)
for(var i = 0; i < links.length; i ++){
    links[i].addEventListener("click", function(evt){
        window.open(evt.srcElement.href);
    })
}



/**          Handle evals for today storage and initialization         */

chrome.storage.sync.get(["evals"], function(item){
    var evals = item.evals;
    if(evals){
        var today = new Date();
        var todayString = today.getMonth() + "/" + today.getDate() + "/" + today.getFullYear;
        if(evals[todayString]){
            $("#number-of-evals-today").text(evals[todayString]);
        } else{
            evals[todayString] = 0;
            $("#number-of-evals-today").text(0);
            chrome.storage.sync.set({evals:evals});
        }
    } else{
        chrome.storage.sync.set({evals:{}}, function(){
            chrome.storage.sync.get(["evals"], function(item){
                var evals = item.evals;
                var today = new Date();
                var todayString = today.getMonth() + "/" + today.getDate() + "/" + today.getFullYear;
                evals[todayString] = 0;
                $("#number-of-evals-today").text(0);
                chrome.storage.sync.set({evals:evals});
            })
        })
    }
})



/**       Handle Chrome storage and project options          **/

//the checkboxes for the project options
var prjctsTF = document.querySelectorAll("#projects-to-find input");

//on popup open, load in what evaluations will be given from google storage
chrome.storage.sync.get(["find"], function(item){
    
    var item = item.find;
    
    //to make sure we aren't using undefined or something
    if(item){

        //save google project to evaluate information to HTML which is easier to access
        $("#search-for-storage").text(item);

        //update checkboxes to fit with saved data
        var prjctsTF = document.querySelectorAll("#projects-to-find input");//checkboxes for project options
        for(var i = 0; i < prjctsTF.length; i ++){
            if(item.includes(prjctsTF[i].value)){
                prjctsTF[i].checked = true;
            }
        }
    }
})

//loops through the projects you can choose in settings to be evaluated and adds an event listener 
//so we can store our choices for later
for(var i = 0; i < prjctsTF.length; i ++){
    prjctsTF[i].addEventListener("click", function(evt){
        if(evt.srcElement.checked){

            //add to storage
            var pEl = document.getElementById("search-for-storage");
            pEl.innerText += evt.srcElement.value;
            chrome.storage.sync.set({find:pEl.innerText})
        } else{

            //remove from storage
            var pEl = document.getElementById("search-for-storage");
            pEl.innerText = pEl.innerText.replace(evt.srcElement.value, "");
            chrome.storage.sync.set({find:pEl.innerText})
        }
    })
}



/**       Open up an evaluation          **/

//when you press the "do an evaluation" button, take you to an evaluation that fits within your settings
$("#next-eval").on("click", function(){

    var loadingAnimation = window.setInterval(function(){
        var result = document.getElementById("evaluation-search-result");
        result.innerText += ".";
        if(result.innerText.length > 4){
            result.innerText = "";
        }
    }, 300)
    

    //what projects we can open based on settings in popup
    var allowableStrings = document.getElementById("search-for-storage").innerText;

    //retrieves data and opens up a project
    $.getJSON("https://www.khanacademy.org/api/internal/projecteval?casing=camel&limit=100&topic=computer-programming&max_answers=0&lang=en&callback=?",
    function(data) {

        //array to store projects we can  open
        var allowableIndexes = [];

        //loop through all evalluations that are given to us
        for(var i = 0; i < data.feedback.length; i ++){

            //I believe this prevents an error where content isn't a string
            var content = data.feedback[i].content;

            //if settings say that we can evaluate the project
            if(allowableStrings.includes(content.slice(32, -2))){
                allowableIndexes.push(i);
            }
        }
        
        window.clearInterval(loadingAnimation)

        //if there is a project to open
        if(allowableIndexes.length > 0){
            
            document.getElementById("evaluation-search-result").innerText = "";

            //open one of the projects randomly
            window.open(("https://khanacademy.org" + data.feedback[allowableIndexes[Math.floor(Math.random()*allowableIndexes.length)]].focusUrl), "_blank");
        } else{
            var searchResult = $("#evaluation-search-result");
            $("<br>").appendTo(searchResult);
            $("<label>").text("Could not find a project. Select a student's project in ").appendTo(searchResult);
            $("<a>").attr("href", "https://www.khanacademy.org/computer-programming/yapep-dates/6225623948034048").attr("target", "_blank").text("YAPEP").appendTo(searchResult);
            $("<label>").text(" and click the Evaluate this project button").appendTo(searchResult);
        }
    })
});
