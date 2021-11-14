var output = ""
var input = document.getElementById("input")

const reset = document
  .getElementById("RESET")
  .addEventListener("click", function () {
    
    output = ""
    updateInput();
  });

const add = document.getElementById("+").addEventListener("click", function () {
  const add = document.getElementById("+");
  if (output.slice(-1) != "+" && output.slice(-1) != "-" && output.length != 0) {
    output += add.innerHTML;
  }
  input = output;
  updateInput();
});
const subtract = document
  .getElementById("-")
  .addEventListener("click", function () {
    const subtract = document.getElementById("-");
    if (output.slice(-1) != "+" && output.slice(-1) != "-" && output.length != 0) {
      output += subtract.innerHTML;
    }
    input = output;
    updateInput();
  });


const equals = document.getElementById("=").addEventListener("click",
  function() {
      output = output.split(/(?=[+-/*])|(?<=[+-/*])/g);
      console.log(output)
      var temp = parseInt(output[0])
      var sign = ""
      var notAllowed = ["+", "-", "/", "*"]
      for (var i = 0; i < output.length; i++){
          if (output[i] != "+" && output[i] != "-"){
          } else {
              sign = output[i]
          }

            if (sign == "+" && notAllowed.indexOf(output[i]) == -1 ){
                temp += parseInt(output[i])
            }
            if(sign == "-" && notAllowed.indexOf(output[i]) == -1){
                temp -= parseInt(output[i])
          }
          console.log(output[i], temp)
      }
      output = temp

      updateInput()
  }
)

function updateInput() {
    document.getElementById("input").innerHTML = output
}

// Event Listeners

const funcs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] 

funcs.forEach(id => {
  const element = document.getElementById(id);
  element.addEventListener(
    "click",
    function() {
        const html = document.getElementById(id).innerHTML;
        output += html;
        input = output
        updateInput()
    }
)});