function greet() {
    // Dau vao
    var user = document.getElementById("user").value;
    var result= 0;
    // Xu ly
    if ((user = "Bo") ) {
        result = "Xin chao bo, chuc bo mot ngay lam viec hieu qua";
    }
    else if ((user = "Me")) {
        result = "Xin chao me, chuc me mot ngay lam viec hieu qua";
    }
    else if ((user = "Anh Trai")) {
        result = "Xin chao anh trai, chuc anh trai mot ngay hoc tap hieu qua";
    }
    else if ((user = "Em Gai")) {
        result = "Xin chao em gai, chuc em gai mot ngay lam viec hieu qua";
    }
    // Dau ra
    document.getElementById("footer2").innerHTML = result;

}