 const questionsArray = [
  
     {
         question: "What is the purpose of JavaScript?",
         answers: {
             1: "To style HTML Pages",
             2: "To add interactivity to HTML pages",
             3: "To perform server side scripting operations",
             4: "To store large amounts of data on a server"
         },
         correct: "To add interactivity to HTML pages"
     },
     {
         question: "To insert a JavaScript into an HTML page, which tag is used?",
         answers: {
             1: "<script='java'>",
             2: "<script>",
             3: "<javascript>",
             4: "<scripts>"
         },
         correct: "<script>"
     },
     {
        question: "Which of the following is correct to write “Hello World” into the console?",
        answers: {
            1: "console.log('Hello World')",
            2: "document.write('Hello World')",
            3: "response.write('Hello World')",
            4: "console.print('Hello World')"
        },
        correct: "console.log('Hello World')"
    },
    {
        question: "The original name for JavaScript was?",
        answers: {
            1: "Javascript",
            2: "LiveScript",
            3: "ECMAScript",
            4: "WireScript"
        },
        correct: "ECMAScript"
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: {
            1: "function myFunction()",
            2: "function = myFunction()",
            3: "function => myfunction{}",
            4: "function.myfunction()"
        },
        correct: "function myFunction()"
    },
    {
        question: "Which is the correct way to write an IF statement in JavaScript?",
        answers: {
            1: "if i=5 then",
            2: "if i==5",
            3: "if i==5 do",
            4: "if(i===5)"
        },
        correct: "if(i===5)"
    },
    {
        question: "What is the correct JavaScript syntax to change the content of this HTML element below? <p id='demo'>This is a demonstration.</p>",
        answers: {
            1: "document.getElement('p').innerHTML = 'Hello World!'",
            2: "document.getElementbyName('p').innerHTML = 'Hello World!'",
            3: "document.getElementbyID('demo').innerHTML = 'Hello World!'",
            4: "#demo.innerHTML = 'Hello World!'"
        },
        correct: "document.getElementbyID('demo').innerHTML = 'Hello World!'"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: {
            1: "alertBox('Hello World')",
            2: "alert('Hello World')",
            3: "msg('Hello World')",
            4: "msgBox('Hello World')"
        },
        correct: "alert('Hello World')"
    },
    {
        question: "How do you write an IF statement for executing some code if 'i' does NOT equal 5?",
        answers: {
            1: "if i =! 5 then",
            2: "if (i != 5)",
            3: "if i<>5",
            4: "if (i && 5)"
        },
        correct: "if (i != 5)"
    },
    {
        question: "How does a FOR loop start?",
        answers: {
            1: "for(let i=0; i<=5;i++)",
            2: "for(i<=5;i++)",
            3: "for i = 1 to 5",
            4: "for(let i=0;i<=5)"
        },
        correct: "for(let i=0; i<=5;i++)"
    },
    {
        question: "How can you add a comment in Javascript?",
        answers: {
            1: "`This is a comment`",
            2: "//This is a comment",
            3: "<!--This is a comment-->",
            4: "<This is a comment>"
        },
        correct: "//This is a comment"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answers: {
            1: "const colors = 'red', 'green', 'blue'",
            2: "const colors = (1:'red', 2:'green' 3:'blue')",
            3: "const colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
            4: "const colors = ['red','green','blue']"
        },
        correct: "const colors = ['red','green','blue']"
    },
    {
        question: "How do you round the number 10.5, to the lower integer?",
        answers: {
            1: "Math.floor(10.5)",
            2: "Math.rnd(10.5)",
            3: "Math.flr(10.5)",
            4: "Math.ceil(10.5)"
        },
        correct: "Math.floor(10.5)"
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        answers: {
            1: "top(x,y)",
            2: "Math.ceil(x,y)",
            3: "Math.max(x,y)",
            4: "ceil(x,y)"
        },
        correct: "Math.max(x,y)"
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: {
            1: "*",
            2: "=",
            3: "-",
            4: ":"
        },
        correct: "="
    }
]