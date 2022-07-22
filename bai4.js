function triangle() {
    // Dau vao
    var side1 = document.getElementById("side1").value;
    var side2 = document.getElementById("side2").value;
    var side3 = document.getElementById("side3").value;
    var result = 0;
    side1 = parseInt(side1);
    side2 = parseInt(side2);
    side3 = parseInt(side3);
    // Xu ly
    if ((side1 == side2) && (side2 == side3)) {
        result = "This is an equilateral triangle"
    }
    else if ((side1 == side2) || (side1 == side3) || (side3 == side2)){
        result = "This is an isosceles triangle"
    }
    let a = Math.pow(side1, 2);
    let b = Math.pow(side2, 2);
    let c = Math.pow(side3, 2);
    if ((a + b == c) || (a + c == b) || (b + c == a)) {
        result = "This is an right triangle"
    }

    // Dau ra
    document.getElementById("footer4").innerHTML = result;

}
