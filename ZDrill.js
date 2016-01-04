var a1 = null;
var a2 = null;
var r1 = null;
var r2 = null;
var theta1 = null;
var theta2 = null;
var board = null;
var board2 = null;
var guessArrow = null;
var answerArrow = null;

rBank = [1, 1.5];
thetaBank = [0.50, 0.25, -0.25, -0.50, 0, 1];


function rectang() {
    var firstArrow = math.complex({r: r1, phi: theta1 * Math.PI});
    firstArrow = math.format(firstArrow, 5);
    var r = document.getElementById("r");
    r.innerHTML = "";
    var toAppend = firstArrow;
    var f = document.createElement("arr");
    f.innerHTML = toAppend;
    r.appendChild(f);

    var secondArrow = math.complex({r: r2, phi: theta2 * Math.PI});
    secondArrow = math.format(secondArrow, 5);
    var r23 = document.getElementById("r23");
    r23.innerHTML = "";
    var toAppend2 = secondArrow;
    var s = document.createElement("arr2");
    s.innerHTML = toAppend2;
    r23.appendChild(s);
}

function displayGuess() {
    if (guessArrow != null) {
        board2.removeObject(guessArrow);
    }
    var values = math.complex({r: Number(document.getElementById("rg").value),
        phi: Number(document.getElementById("thetag").value)*math.pi});
    guessArrow = board2.create('arrow', [ [0, 0], [values.re, values.im] ], {strokeColor : '#008000'});
}

function displayAnswer() {
    if (answerArrow != null) {
        board2.removeObject(answerArrow);
    }

    if (document.getElementById("inv").checked || document.getElementById("conj").checked) {
        board.removeObject(a2);
    } else {
        var second = math.complex({r: r2, phi: theta2 * Math.PI});
        answerArrow = board.create('arrow', [ [0, 0], [second.re, second.im] ]);
    }

    if (document.getElementById("answer").checked) {
        if (document.getElementById("add").checked) {
            addition();
        } else if (document.getElementById("sub").checked) {
            subtraction();
        } else if (document.getElementById("mul").checked) {
            multiplication();
        } else if (document.getElementById("divi").checked) {
            division();
        } else if (document.getElementById("inv").checked) {
            inverse();
        } else if (document.getElementById("conj").checked) {
            conjugate();
        }
    }
    if (document.getElementById("rect").checked) {
        rectang();
    }
}

function addition() {
    var first = math.complex({r: r1, phi: theta1 * Math.PI});
    var second = math.complex({r: r2, phi: theta2 * Math.PI});
    var added = math.add(first, second);
    answerArrow = board2.create('arrow', [ [0, 0], [added.re, added.im] ], {strokeColor:'#000000'});
    a1 = board2.create('arrow', [ [0,0], [first.re, first.im] ], {strokeColor:'#ff0000'});
    a2 = board2.create('arrow', [ [0,0], [second.re, second.im] ]);
}

function multiplication() {
    var first = math.complex({r: r1, phi: theta1 * Math.PI});
    var second = math.complex({r: r2, phi: theta2 * Math.PI});
    var multiplied = math.multiply(first, second);
    answerArrow = board2.create('arrow', [ [0,0], [multiplied.re, multiplied.im] ], {strokeColor:'#000000'});
    a1 = board2.create('arrow', [ [0,0], [first.re, first.im] ], {strokeColor:'#ff0000'});
    a2 = board2.create('arrow', [ [0,0], [second.re, second.im] ]);
}

function division() {
    var first = math.complex({r: r1, phi: theta1 * Math.PI});
    var second = math.complex({r: r2, phi: theta2 * Math.PI});
    var divided = math.divide(first, second);
    answerArrow = board2.create('arrow', [ [0,0], [divided.re, divided.im] ], {strokeColor:'#000000'});
    a1 = board2.create('arrow', [ [0,0], [first.re, first.im] ], {strokeColor:'#ff0000'});
    a2 = board2.create('arrow', [ [0,0], [second.re, second.im] ]);
}

function inverse() {
    var first = math.complex({r: r1, phi: theta1 * Math.PI});
    var inverted = math.inv(first);
    answerArrow = board2.create('arrow', [ [0,0], [inverted.re, inverted.im] ], {strokeColor:'#000000'});
    a1 = board2.create('arrow', [ [0,0], [first.re, first.im] ], {strokeColor:'#ff0000'});
    //a2 = board2.create('arrow', [ [0,0], [secondArrow.re, secondArrow.im] ]);
}

function conjugate() {
    var first = math.complex({r: r1, phi: theta1 * Math.PI});
    var conjugated = math.conj(first);
    answerArrow = board2.create('arrow', [ [0,0], [conjugated.re, conjugated.im]], {strokeColor:'#000000'});
    a1 = board2.create('arrow', [ [0,0], [first.re, first.im] ], {strokeColor:'#ff0000'});
    //a2 = board2.create('arrow', [ [0,0], [secondArrow.re, secondArrow.im] ]);
}

function subtraction() {
    var first = math.complex({r: r1, phi: theta1 * Math.PI});
    var second = math.complex({r: r2, phi: theta2 * Math.PI});
    var subtracted = math.subtract(first, second);
    answerArrow = board2.create('arrow', [ [0,0], [subtracted.re, subtracted.im] ], {strokeColor:'#000000'});
    a1 = board2.create('arrow', [ [0,0], [first.re, first.im] ], {strokeColor:'#ff0000'});
    a2 = board2.create('arrow', [ [0,0], [second.re, second.im] ]);
}

function print(value) {
    var precision = 14;
    document.write(math.format(value, precision) + '<br>');
}

function drawQuestionArrows() {
    var firstArrow = math.complex({r: r1, phi: theta1 * Math.PI});
    var secondArrow = math.complex({r: r2, phi: theta2 * Math.PI});
    a1 = board.create('arrow', [ [0,0], [firstArrow.re, firstArrow.im] ], {strokeColor:'#ff0000'});
    a2 = board.create('arrow', [ [0,0], [secondArrow.re, secondArrow.im] ]);
    var uCircle = board.create('circle', [ [0,0], [0,1] ], {strokeColor:'#939393',strokeWidth:1});
    var uCircle = board2.create('circle', [ [0,0], [0,1] ], {strokeColor:'#939393',strokeWidth:1});
    //var uCircle = board2.create('circle', [ [0,0], [0,1] ]);
}

function generateNewQuestion() {
    if (a1 != null) {
        board.removeObject(a1);
    }
    if (a2 != null) {
        board.removeObject(a2);
    }
    var randomRIndex1 = Math.floor(Math.random() * (rBank).length);
    var randomThetaIndex1 = Math.floor(Math.random() * (thetaBank).length);
    r1 = rBank[randomRIndex1];
    theta1 = thetaBank[randomThetaIndex1];

    var randomRIndex2 = Math.floor(Math.random() * (rBank).length);
    var randomThetaIndex2 = Math.floor(Math.random() * (thetaBank).length);
    r2 = rBank[randomRIndex2];
    theta2 = thetaBank[randomThetaIndex2];
    drawQuestionArrows();
    document.getElementById("r11").value = "r = " + r1;
    document.getElementById("theta1").value = "theta = " + theta1 + "pi";
    document.getElementById("r12").value = "r = " + r2;
    document.getElementById("theta2").value = "theta = " + theta2 + "pi";
}

$(document).ready(function() {
    board = JXG.JSXGraph.initBoard('jxgbox',{boundingbox:[-1,1,1,-1], axis:true, showCopyright: false});
    board2 = JXG.JSXGraph.initBoard('jxgbox2',{boundingbox:[-1,1,1,-1], axis:true, showCopyright: false});
    generateNewQuestion();
});
