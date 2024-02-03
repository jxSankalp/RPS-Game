
function getRandomNumber() {

    // 1 = rock
    // 2 = paper
    // 3 = scissor

    const randomDecimal = Math.random();

    const randomNumber = Math.floor(randomDecimal * 3) + 1;

    return randomNumber;
}

function checking(clickedImage, randomValue) {

    var clickedAlt = clickedImage.alt;

    if (clickedAlt === "rock") {

        if (randomValue == 1) {
            return -1;
        }
        else if (randomValue == 2) {
            return 0;
        }
        else {
            return 1;
        }


    } else if (clickedAlt === "paper") {

        if (randomValue == 2) {
            return -1;
        }
        else if (randomValue == 3) {
            return 0;
        }
        else {
            return 1;
        }

    } else {

        if (randomValue == 3) {
            return -1;
        }
        else if (randomValue == 1) {
            return 0;
        }
        else {
            return 1;
        }
    }
}

function show_result(result) {

    if (result == 1) {
        var temp = document.getElementById("won");

        temp.style.display = "block";
    }
    else if (result == 0) {
        var temp = document.getElementById("lost");

        temp.style.display = "block";
    }
    else {
        var temp = document.getElementById("tie");

        temp.style.display = "block";
    }
}

function onImageClick(clickedImage) {
    var images = document.querySelectorAll(".image");

    images.forEach(function (image) {
        if (image !== clickedImage) {
            image.style.display = "none";
        }
    });

    const randomValue = getRandomNumber();
    const result = checking(clickedImage, randomValue);
    show_result(result);
}


