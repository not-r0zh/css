function myFunction() {
    var x = document.getElementById("text").value;
    var r = document.querySelector(":root")
    var y = document.querySelector("p:hover")
    r.style.setProperty('--num2',x)
    y.style.setProperty('font-size',x + 'vmax')
}