function Calculate() {
    var area = Number(document.getElementById("LengthInput").value) * Number(document.getElementById("LengthInput").value);

    var perimeter = Number(document.getElementById("LengthInput").value) * 4;

    Number(document.getElementById("Area").innerHTML = area);
    Number(document.getElementById("length").innerHTML = perimeter);
}
