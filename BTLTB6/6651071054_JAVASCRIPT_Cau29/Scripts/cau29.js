function getFormvalue(event) {
    event.preventDefault();

    var form = document.getElementById("form1");
    var ho = form.elements["fname"].value;
    var ten = form.elements["lname"].value;

    document.getElementById("ketqua").innerHTML =
        "Họ và tên: " + ho + " " + ten;
}

document.getElementById("form1").addEventListener("submit", getFormvalue);