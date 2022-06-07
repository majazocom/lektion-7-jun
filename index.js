const buttonList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+", "-", "*", "=", "/", "c"];
const inputField = document.getElementById('calc-input');
//skapa eventlyssnare på knapparna mha id:na
for (let i = 0; i < buttonList.length; i++) {
    let targetValue = buttonList[i];
    //får fram varje elements id
    let id = "btn-" + buttonList[i];
    //genom id't får vi fram elementet
    let btnElement = document.getElementById(id);
    //skapar eventlyssnaren
    if (targetValue == "=") {
        //då vill vi summera allt i input-fältet
        btnElement.addEventListener('click', function() {
            let result = eval(inputField.value);
            inputField.value = result;
        })

    } else if (targetValue == "c") {
        //då vill vi rensa input-fältet
        btnElement.addEventListener('click', function() {
            inputField.value = "";
        })

    } else {
        //om knapparna inte är c eller =, händer detta
        btnElement.addEventListener('click', function() {
            //lägga till värdet på knappen som vi klickar på i vår input
            inputField.value += targetValue;
        })
    }

}