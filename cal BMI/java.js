function calculateBMI() {
            let weight = document.getElementById("weight").value;
            let height = document.getElementById("height").value;
            if (weight > 0 && height > 0) {
                let bmi = weight / (height * height);
                document.getElementById("result").innerText = "Your BMI: " + bmi.toFixed(2);
            } else {
                document.getElementById("result").innerText = "Please enter valid values";
            }
        } 