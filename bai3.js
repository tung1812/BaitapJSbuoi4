function evenOddCount() {
    // Dau vao
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var odd = 0;
    var even = 0;
    var result = "There are:" + " " + odd + " " + "odd numbers and" + " " + even + " " + "even numbers";
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    odd = parseInt(odd);
    even = parseInt(even);

    // Xu ly

    if (a % 2 == 0)  {
        even += 1;
    }
    console.log(even);
    


    // Dau ra
    document.getElementById("footer3").innerHTML = result;
}