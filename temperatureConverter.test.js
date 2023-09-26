const { expect } = require('chai');
const TemperatureConverter = require('./TemperatureConverter');

describe('Temperature Converter', () => {
  it('should convert from negative Celsius to Fahrenheit', () => {
    const result = TemperatureConverter.celsiusToFahrenheit(-5);
    expect(result).to.equal(23);
  });

  it('should convert from zero Celsius to Fahrenheit', () => {
    const result = TemperatureConverter.celsiusToFahrenheit(0);
    expect(result).to.equal(32);
  });

  it('should convert from positive Celsius to Fahrenheit', () => {
    const result = TemperatureConverter.celsiusToFahrenheit(100);
    expect(result).to.equal(212);
  });

  it('should convert from 25 Fahrenheit to Celsius', () => {
    const result = TemperatureConverter.fahrenheitToCelsius(25);
    expect(result).to.be.closeTo(-3.88, 0.1);
  });

  it('should convert from 32 Fahrenheit to Celsius', () => {
    const result = TemperatureConverter.fahrenheitToCelsius(32);
    expect(result).to.be.equal(0);
  });

  it('should convert from 46 Fahrenheit to Celsius', () => {
    const result = TemperatureConverter.fahrenheitToCelsius(46);
    expect(result).to.be.closeTo(7.77, 0.1);
  });


  it('should handle invalid input (non-numeric)', () => {
    const result = TemperatureConverter.celsiusToFahrenheit('abc');
    expect(result).to.be.NaN;
  });
});