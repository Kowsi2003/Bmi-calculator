document.getElementById('btn').addEventListener('click', function() {
    calculateBMI();
});

document.getElementById('butn').addEventListener('click', function() {
    resetBMI();
});

function calculateBMI() {
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('res').innerText = "Please enter valid height and weight.";
        return;
    }
    var bmi = weight / ((height / 100) * (height / 100));

    var status;
    if (bmi < 18.5) {
        status = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        status = "Normal Weight"
    } else if (bmi >= 25 && bmi < 30) {
        status = "Overweight";
    } else {
        status = "Obesity";
    }
    document.getElementById('res').innerText = "Your BMI is: " + bmi.toFixed(2) + "(" + status + ")";
}

function resetBMI() {
    document.getElementById('height').value = "";
    document.getElementById('weight').value = "";
    document.getElementById('res').innerText = "";
}
