class TemperatureConverter {
    static celsiusToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    static fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }
}

module.exports = TemperatureConverter;