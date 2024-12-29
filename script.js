function home() {
    document.getElementById('ahome').style.color = "grey";
    document.getElementById('aprogram').style.color = "white";
    document.getElementById('aplan').style.color = "white";
    document.getElementById('agalary').style.color = "white";
    document.getElementById('acontact').style.color = "white";
}
function program() {
    document.getElementById('ahome').style.color = "white";
    document.getElementById('aprogram').style.color = "grey";
    document.getElementById('aplan').style.color = "white";
    document.getElementById('agalary').style.color = "white";
    document.getElementById('acontact').style.color = "white";
}
function plan() {
    document.getElementById('ahome').style.color = "white";
    document.getElementById('aprogram').style.color = "white";
    document.getElementById('aplan').style.color = "grey";
    document.getElementById('agalary').style.color = "white";
    document.getElementById('acontact').style.color = "white";
}
function galary() {
    document.getElementById('ahome').style.color = "white";
    document.getElementById('aprogram').style.color = "white";
    document.getElementById('aplan').style.color = "white";
    document.getElementById('agalary').style.color = "grey";
    document.getElementById('acontact').style.color = "white";
}
function about() {
    document.getElementById('ahome').style.color = "white";
    document.getElementById('aprogram').style.color = "white";
    document.getElementById('aplan').style.color = "white";
    document.getElementById('agalary').style.color = "white";
    document.getElementById('acontact').style.color = "grey";
}

// function bmi() {
//     var h = document.getElementById('height').value;
//     var w = document.getElementById('weight').value;
//     var bmi = w / (h / 100 * h / 100);
//     var total = bmi.toFixed(2);
//     document.getElementById('result').innerHTML = "Your bmi Is " + total
// }

function calculateBMI() {
    // Get input values
    var feet = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    // Validate inputs
    if (!feet || !weight || feet <= 0 || weight <= 0) {
      document.getElementById('result').innerHTML = "Please enter valid height and weight!";
      return;
    }

    // Convert feet to meters
    var heightInMeters = feet * 0.3048;

    // Calculate BMI
    var bmi = weight / (heightInMeters * heightInMeters);
    var total = bmi.toFixed(2);

    // Display the result
    document.getElementById('result').innerHTML = "Your BMI is " + total;
  }
