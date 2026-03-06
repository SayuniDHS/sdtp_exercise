function changeImage() {

    let character = document.getElementById("character").value;

    let imagePath = "images/" + character + ".jpg";

    document.getElementById("characterImage").src = imagePath;

}