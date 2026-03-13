const selectBox = document.getElementById("characterSelect");
const image = document.getElementById("characterImage");

selectBox.addEventListener("change", function () {

    const selectedCharacter = selectBox.value;

    image.src = "images/" + selectedCharacter + ".jpg";

});