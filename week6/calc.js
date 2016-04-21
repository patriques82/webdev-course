var operand1;
var operand2;
var operation;

// 2. Usage of anonymous functions
var operators = {
  "+" : function(a,b){ return parseInt(a)+parseInt(b) } ,
  "-" : function(a,b){ return parseInt(a)-parseInt(b) } ,
  "x" : function(a,b){ return parseInt(a)*parseInt(b) } ,
  "/" : function(a,b){ return parseInt(a)/parseInt(b) } ,
  "^" : function(a,b){ return Math.pow(a,b)}
}


// 1. $ example
// When DOM is loaded
$(document).ready(
  // run this function
  function(){
    // find all ".digit" elements
    $(".digit").
      // call click function
      // for every found element
      // and assign a handler
      click(
        // handler function is passed as argument
        function(){
          if ($("#output").text() == "0")
            $("#output").text($(this).text());
          else
            $("#output").append($(this).text());
        }
      );

    // 3. More handlers
    $(".equals").click(
      function() {
        operand2 = $("#output").text();
        console.log("Op: " + operation);
        console.log("Operands: " + operand1 + "," + operand2);
        $("#output").text(
          operators[operation](operand1, operand2)
        );
      }
    );

    $(".opkey").click(
      function() {
        operation = $(this).text();
        operand1 = $("#output").text();

        // chaining
        $("#output").text("0").css("top","5%");
        // same as
        //
        // $("#output").text("0");
        // $("#output").css("top","5%");

        console.log("Op: " + operation);
        console.log("Operands: " + operand1 + "," + operand2);
    });

     // 3. CSS
     // Separate events handlers
     // $(".digit").mousedown(function(){
     //   $(this).css("color","white");
     //   $(this).css("background-color","#008CBA");
     // });
     //
     // $(".digit").mouseup(function(){
     //   $(this).css("color","#008CBA");
     //   $(this).css("background-color","white");
     // });

     // same as above
     // $(".digit").on("mouseup", function(){
     //   $(this).css("color","#008CBA");
     //   $(this).css("background-color","white");
     // });

    // two event handlers at one time,
    $(".digit").on(
      { "mouseup" : function(){
                    $(this).css("color","black");
                    $(this).css("background-color","white");
                  },
        "mousedown" : function(){
                      $(this).css("color","white");
                      $(this).css("background-color","#008CBA");
                    }
      }
    );

});




































// 5.1. First event handler
/* function digit_pressed(arg) {
  // element vs. event object as argument
  var text = arg.innerHTML;
  //   var text = arg.target.innerHTML;

  var output = document.getElementById("output");
  if (output.innerHTML == "0") {
    output.innerHTML = text;
  }
  else {
    output.innerHTML += text;
  }

} */

/*
// 5.2. Add event handler to all 'digit' buttons
function addDigitClickHandlers() {
  var digits = document.getElementsByClassName("digit");
  // traversing a collection
  for (var i = 0; i < digits.length; i++) {
    var digit = digits.item(i);

    // works for event arguments!
    // digit.addEventListener("click",digit_pressed);


    // works for element arguments!
    digit.addEventListener("click",function(){digit_pressed(this)});
  }
}

// Add event handlers automatically when document loads
window.onload = function() {
  addDigitClickHandlers();
  //addDigitMouseHandlers();
} */


// 5.3. Add event handlers for operation keys
/* function operation(elem) {
  var output = document.getElementById("output");
  x = parseInt(output.innerHTML);
  output.innerHTML = "0";

  // remember the operation
  oper = operators.(elem.innerHTML);
} */

/*
  Sequence:
  1. window.onload - addDigitClickHandlers is called
     It installs/adds 'click' event handler to every 'digit' button.
  2. when a 'digit' button is clicked, digit_pressed handler
     is called. It will change text of the 'output' element.
*/



/*
function equals(elem) {
  var output = document.getElementById("output");
  var y = parseInt(output.innerHTML);

  if (oper == "+") {
    output.innerHTML = x + y;
  }

  if (oper == "-") {
    output.innerHTML = x - y;
  }
} */




// 6. CSS manipulation
/* function fill(elem) {
  elem.style.color = "white";
  elem.style.backgroundColor = "#008CBA";

}

function unfill(elem) {
  elem.setAttribute("style", "color: black;");
}

// 7. Keyboard events
document.onkeydown = function(event) {
  var key = String.fromCharCode(event.keyCode);
  alert(key);
}; */


