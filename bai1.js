

function ascNum() {
    // Dau vao
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var z = document.getElementById("z").value;
    var result = "The ascending order of the numbers above:" + " ";
    x = parseInt(x);
    y = parseInt(y);
    z = parseInt(z);

    // Xu ly

    if ((x < y) && (x < z)) {
            result = result + x;
                if (y<z)
                    {
                        result = result + " " + y + " " + z;
                    }
    }

    else if ((y < z)&&(y < x)) {
            result = result + y;
                if (z < x)
                    {
                        result = result + " " + z + " " + x;
                    }
    }

    else if ((z < x) && (z < y)) {
            result = result + z;
                if (x < y)
                    {
                        result = result + " " + x + " " + y;
                    }
    }
    // Dau ra
    document.getElementById("footer").innerHTML = result;
}