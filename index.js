function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let heightCmToM = height / 100;
  let bmiCalc = weight / heightCmToM ** 2;

  if (bmiCalc < 18.5) {
    alert(`underweight and your bmi is ${bmiCalc}`);
  } else if (bmiCalc >= 18.5 && bmiCalc < 25) {
    alert(`Healthy weight and your bmi is ${bmiCalc}`);
  } else if (bmiCalc >= 25 && bmiCalc < 30) {
    alert(`Overweight and your bmi is ${bmiCalc}`);
  } else if (bmiCalc >= 30) {
    alert(`above obesity with a magnificant bmi of ${bmiCalc}`);
  }
}
