const year=document.getElementById("year");const LowerTextBox=document.getElementById("lowerInput");const UperTextBox=document.getElementById("uperInput");function btnClick(event){if(LowerTextBox.value=="0"){LowerTextBox.value=""}
let btnVal=LowerTextBox.value.concat(event.value);LowerTextBox.value=btnVal}
function btnEqual(){UperTextBox.value=LowerTextBox.value;LowerTextBox.value=eval(UperTextBox.value)}
year.innerText=new Date().getFullYear();