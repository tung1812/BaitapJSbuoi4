function evenOddCount() {
    // Dau vao
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var odd = 0;
    var even = 0;
    
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    odd = parseInt(odd);
    even = parseInt(even);

    // Xu ly

    if (a % 2 == 0)  {
        even++;
    }
    if (a % 2 == 1) {
        odd++
    }
    if (b % 2 == 0)  {
        even++;
    }
    if (b % 2 == 1) {
        odd++
    }
    if (c % 2 == 0)  {
        even++;
    }
    if (c % 2 == 1) {
        odd++
    }

    var result = "There are:" + " " + even + " " + "even numbers and" + " " + odd + " " + "odd numbers";


    // Dau ra
    document.getElementById("footer3").innerHTML = result;
}
