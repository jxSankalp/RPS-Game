
function hideOthers(clickedImage) {
    var images = document.querySelectorAll(".image");
    images.forEach(function (image) {
        if (image !== clickedImage) {
            image.style.display = "none";
        }
    }
    );
}

function getRandomNumber() {
    // 1 = rock
    // 2 = paper
    // 3 = scissor
    const cryptoRandomArray = new Uint32Array(1);
    crypto.getRandomValues(cryptoRandomArray);

    // Generate a random number between 1 and 3
    const cryptoRandomNumber = (cryptoRandomArray[0] % 3) + 1;

    return cryptoRandomNumber;
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
    if (result === 1) {
        var temp = document.getElementById("won");
        temp.style.display = "block";
    }
    else if (result === -1) {
        var temp = document.getElementById("tie");
        temp.style.display = "block";
    }
    else {
        var temp = document.getElementById("lost");
        temp.style.display = "block";
    }
}

function onImageClick(clickedImage) {
    const images = document.querySelectorAll(".image");
    var randomValue = getRandomNumber();

    images.forEach(function (image) {
        if (image !== clickedImage) {
            image.style.display = "none";
        } else {
            clickedImage.style.display = "block";

            // Create a new image for the opponent's choice
            const opponentImage = document.createElement("img");
            opponentImage.classList.add("oppoimage");
            opponentImage.style.display = "block";

            // Set the source based on the random value
            if (randomValue === 1) {
                opponentImage.src = "obsidian.png";
            } else if (randomValue === 2) {
                opponentImage.src = "file.png";
            } else {
                opponentImage.src = "scissor.png";
            }

            // Replace the loader with the opponent's image
            const loader = document.querySelector(".loader");
            loader.replaceWith(opponentImage);
            // loader.style.display = "none";
        }
    });

    var result = checking(clickedImage, randomValue);
    show_result(result);
}

function restart() {

    location.reload();
}



