function farenheitToCelsius() {
    let farenheit  = document.getElementById("farenheitInp").value;
    let a = ((farenheit - 32) * 5/9);
    let celsius = document.getElementById("celsiusInp").value = a

}
