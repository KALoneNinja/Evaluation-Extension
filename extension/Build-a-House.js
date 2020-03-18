var BH = {
  name: "Project: Build-a-House",
  responses: {
    requirements: [

      // draws something house like
      {

      },

      // Uses at least 2 loops to draw repeating parts of the drawing
      [

        // not enough loops
        {
          checkBox: {
            id: "not_enough_loops",
            title: "There weren't enough loops.",
            help: ""
          },
          "no_add-ons": {
            messages: [
              ""
            ]
          }
        },

        // loop(s) don't display anything
        {
          checkBox: {
            id: "no_display",
            title: "The loops are not used to display anything.",
            help: ""
          },
          "no_add-ons": {
            messages: [
              ""
            ]
          }
        },

        // loop(s) don't display anything on the screen
        {
          checkBox: {
            id: "hidden_display",
            title: "Loop(s) don't display more than 1 objct on the screen",
            help: ""
          },
          "no_add-ons": {
            messages: [
              ""
            ]
          }
        },

        // loop(s) only display one thing
        {
          checkBox: {
            id: "one_display",
            title: "The loops do not attempt to display more than one object",
            help: ""
          },
          "no_add-ons": {
            messages: [
              ""
            ]
          }
        }
      ],

      
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
    critiques: [

      
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
              "\n\nCorrectly placed indents can make your code easier to read. Put an indent (one tab or two spaces) on every line between {} and your code will be tidier. Look to Pamela's code for examples!"
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
            hint: "The function(s) the student used e.g. \"image(getImage(\"img\"));\"",
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
              "\n\nIt would have been great to have seen you go to the documentation and use something from there. Experimentation is a really big part of programming, and the more you experiment right now, the better you will be prepared for the future. On this project, it would have been very beneficial for you to have looked at image() and getImage(). image() is particularily important, it plays a key role in optimizing complex graphics used in games, so it is beneficial if you try usingit now."
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
              "\n\n I really want you to start using comments like:\n```// draw window```\nIt is important to get in the habit. Later you will need comments when other coders are trying to help you or learn from you, and when you try to navigate code you made 1+ weeks ago."
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
              "\n\n I really want you to start using blank lines of code to split your code into more manageable chunks. Try it out and see what you think!"
            ]
          }  
        }
      },

      // modulo
      {
        checkBox: {
          id: "modulo", 
          title: "They used modulo(%)",
          help: ""
        },

        selected: {
          "add-ons": {
            messages: [
              " your use of modulo (%) on lines $"
            ],
            hint: "The line of modulo(%) e.g. \"15 and 16\""
          },
          "no_add-ons": {
            messages: [
              " your use of modulo(%)"
            ]
          },
        },

        unselected: {
          "no_add-ons": {
            messages: [
              "\n\nIt would have been wonderful to have seen you use modulo (%). It can make your job much easier and is worth learning and experimenting with."
            ]
          }
        }
      }
  

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