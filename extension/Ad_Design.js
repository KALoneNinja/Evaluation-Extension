var AD = {
  name: "Project: Ad Design",
  responses: {
    requirements: [

    ],
    critiques: [
      
    ]
  }
}


// format for responses
var example = {
  requirements: [ // project requirement fail responses

    // requirement 1
    {
      // let me know if you want add-ons available, I would have to add stuff. add-ons being typing in something in a textBox to be added to the response
      "no_add-ons": {  // (required)
        messages: ["msg1", "msg2"] // responses for  requirement 1 (randomized if messages.length > 0)
      }
    },
    
    // requirement 2
    // extras, when a requirement has multiple parts use array  (optional)
    [
      {
        checkBox: { // (required)
          title: "", // description or title of check box
          /* 
            help message (no special formatting yet, though I hope it will be this:
              ``` ``` encloses code
              ___ ___ encloses emphasis (3 _s)
              *** *** encloses strong
            I will work on learning regex to do this
          */
          help: "",
          id: "", // id of check box
        },

        // no add-ons available (I can add if requested)

        "no_add-ons": { // used when no add-ons are given (required)
          messages: ["msg1", "msg2"] // message used
        },
        
        exclusions: { // when a certain message is repeated through responses (optional)
          messages: ["msg1", "msg2"], // messgae used
          excludeIf: [2] // if extra 2 is true, don't add message
        }
      }
    ]
  ],
  
  critiques: [ // critique responses

    // critique 1
    {
      checkBox: { // (required)
        title: "", // description or title of check box
        /* 
          help message (no special formatting yet, though I hope it will be this:
            ``` ``` encloses code
            ___ ___ encloses emphasis (3 _s)
            *** *** encloses strong
          I will work on learning regex to do this
        */
        help: "",
        id: "", // id of check box
      },
      
      // response when selected
      selected: {
        // (optional) if there is an add-on (text box to customize answer) (Only 1 per message right now, I can change if requested)
        "add-ons": { 
          messages: ["msg1 $ msg1", "msg2 $"], // message added if add-on is used (inserts add-on at $)
          hint: "" // the faded text in the text box that tells the user what to write
        },

        "no_add-ons": { // used when no add-ons are given (required)
          messages: ["msg1", "msg2"] // message used
        }
      },

      // response when box is unselected:
      unselected:{

        // generally add-ons are not used here, so I recommend avoiding it, but I think it will still work if you do

        "no_add-ons": { // used when no add-ons are given (required)
          messages: ["msg1", "msg2"] // message used
        }
      }

    }
  ]
}