document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const convertToFahrenheitBtn = document.getElementById("convertToFahrenheit");
    const convertToCelsiusBtn = document.getElementById("convertToCelsius");

    convertToFahrenheitBtn.addEventListener("click", function () {
        const celsiusValue = parseFloat(celsiusInput.value);
        if (!isNaN(celsiusValue)) {
            const fahrenheitValue = (celsiusValue * 9/5) + 32;
            fahrenheitInput.value = fahrenheitValue.toFixed(2);
        } else {
            alert("Please enter a valid temperature in Celsius.");
        }
    });

    convertToCelsiusBtn.addEventListener("click", function () {
        const fahrenheitValue = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheitValue)) {
            const celsiusValue = (fahrenheitValue - 32) * 5/9;
            celsiusInput.value = celsiusValue.toFixed(2);
        } else {
            alert("Please enter a valid temperature in Fahrenheit.");
        }
    });
});
