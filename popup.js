$("#next-eval").on("click", function(){
    

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "popup_message_attempt"});
      });
    
});