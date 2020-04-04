var M8B = {
  name: "Project: Magic 8-Ball",
  responses: {
    requirements: [
  
      // not using ===
      {
        "no_add-ons": { 
          messages: [
            "The check for 'exactly equal' is ===. You need to use this in every statement. The only possible exception would be if you make the last statement an 'else' and not 'else if'."
          ]
        }  
      },
  
      // not using else
      {
        "no_add-ons": { 
          messages: [
            "\"else (if)\" is an important tool for coders. It can make our jobs easier with less code to write, but more importantly it makes \"mutually exclusive conditions\". That means that you can never have more than one of the conditions be true when you test it. When your 'answer' is 1, it cannot also be 4. It is inefficient to keep checking other values as your program does without else. The requirement for \"at least two else\" means that you need at least three conditionals to pass, not that you should skip on \"else if\" when you have extra conditionals. If you have forgotten how to use else (which includes else if), and why, make sure to review the tutorials:\nhttps://www.khanacademy.org/computing/computer-programming/programming/logic-if-statements/pt/ifelse-part-2"
          ]
        }
      },
  
      // fails for not making unique answer or values of answer aren't covered properly
      [
      
        // difference is value of answer
        {
          "no_add-ons": { 
            messages: [
              "The problem here is that your program displays the number of the answer, it works, but you can achieve it in much simpler code: \n `text(floor(random(1, 5)), 200, 200);`\n This means that most of your code is unnecessary and a problem. Try setting answers like \"yes!\""
            ]
          },
  
          checkBox: {
            title: "the difference in the text is only the value of answer",
            help: "",
            id: "answer-val"
          }
        },
  
        // if statements too broad
        {
  
          "no_add-ons": { 
            messages: [
              "You must change the input to the random function so that all the texts have a fair chance of being displayed. Your conditionals do not quite fit the range of possible 'answer's. Can you figure out which of your expected 'answer'(s) are not in that range? "
            ]
          },
          
          "exclusions": {
            messages: [
              "The article Random numbers just before this project explains both which numbers random(1, 5) can return, and also what floor will do to a number."
            ],
            "excludeIf": [2]
          },
  
          checkBox: {
            title: "There is an if statement with a condition that is never true. ",
            help: "",
            id: "no_if_message"
          }
        },
  
        // if statements too narrow
        {
          "no_add-ons": { 
            messages: [
              "All possible values of 'answer' need to have its own text displaying. Which value(s) of 'answer' is/are missing in your project? The article Random numbers just before this project explains both which numbers random(1, 5) can return, and also what floor will do to a number."
            ]
          },
          
          checkBox: {
            title: "There is no if statement for a value of answer. ",
            help: "",
            id: "no_answer_message"
          }
        },
  
      ],
      
      // improper use of floor(random())
      {
        "no_add-ons": { 
          messages: [
            "You must show that you understand the `floor(random(min, max))` system as it is one of the few ways to generate a random whole number which will become vital if you continue coding. If you forgot how to do this, you should review the tutorials."
          ]
        },
      },
  
      // syntax/logic error
      {
        "no_add-ons": { 
          messages: [
            "If you ever need help, you can use the Request help button beneath your program. Just post a message explaining the issue there, following instructions in https://www.khanacademy.org/computing/computer-programming/programming/becoming-a-community-coder/a/ask-for-program-help "
          ]
        },
      },
  
      // plagiarism
      {
        "no_add-ons": { 
          messages: [
            "Link:\nPlease don't plagiarize, it's a waste of time. You won't learn what you should, and I will be kept away from projects that deserve feedback. It is also rude to the author."
          ]
        },
      },
    ],
  
    "critiques":[
  
      // indents
      {
        checkBox: {
          title: "They used indents",
          help: "",
          id: "indents"
        },
  
        selected: {
          "add-ons": {
            hint: "The line of the indent(s) e.g. \"15 and 16\"",
            messages: [
              " your use of indents on lines $"
            ]
          },
  
          "no_add-ons": { 
            messages: [
              " your use of indents"
            ]
          }  
        },
  
        unselected: {
          "no_add-ons": { 
            messages: [
              "Correctly placed indents can make your code easier to read. Put an indent (one tab or two spaces) on every line between {} and your code will be tidier. Look to Pamela's code for examples!"
            ]
          }  
        }
      },
  
      // documentation
      {
        checkBox: {
          title: "They used something from documentation",
          help: "",
          id: "documentation"
        },
  
        selected: {
          "add-ons": {
            hint: "The function(s) the student used e.g. \"textAlign(CENTER, CENTER);\"",
            messages: [
              " that you used $ from the documentation"
            ]
          },
  
          "no_add-ons": { 
            messages: [
              " that you used the documentation"
            ]
          }  
        },
  
        unselected: {
          "no_add-ons": { 
            messages: [
              "Experimentation is an important part of programming. At this point the Documentation tab under your coding window is your best friend. The text section contains other text functions, like textAlign, which can be used to center text.\nTip: introduce a line break in a text string with \\n (see an example in the textLeading() part of documentation)"
            ]
          }  
        }
      },
  
      // comments
      {
        checkBox: {
          title: "They used comments",
          help: "",
          id: "comments"
        },
  
        selected: {
          "add-ons": {
            hint: "The line of the comment(s) e.g. \"15 and 16\"",
            messages: [" your use of comments on lines $"]
          },
  
          "no_add-ons": { 
            messages: [
              " your use of comments"
            ]
          }  
        },
  
        unselected: {
          "no_add-ons": { 
            messages: [
              "I really want you to start using comments like:\n```//generate random whole number between 1 and 4\nvar answer = floor(random(1, 5));```\nIt may be a bit silly for this project, but it is important to get in the habit. Later you will need comments when other coders are trying to help you or learn from you, and when you try to navigate code you made 1+ weeks ago."
            ]
          }  
        }
      },
  
      // line breaks
      {
        checkBox: {
          title: "They've used blank lines to signal new code sections",
          help: "",
          id: "line_breaks"
        },
  
        selected: {
          "add-ons": {
            hint: "The line of the line break(s) e.g. \"15 and 16\"",
            messages: [" your use of line breaks on lines $"]
          },
  
          "no_add-ons": { 
            messages: [
              " your use of line breaks"
            ]
          }  
        },
  
        unselected: {
          "no_add-ons": { 
            messages: [
              "I really want you to start using blank lines of code to split your code into more manageable chunks. Try it out and see what you think!"
            ]
          }  
        }
      },
  
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
