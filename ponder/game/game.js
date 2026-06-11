// Javascript

// get the DOM images
const dieImages = document.querySelectorAll("#gameboard img")
// When the button is pressed,
// then change die images to a gif animation

document.getElementById("rollButton").addEventListener("click",
    (event) => {
        
        dieImages.forEach((image) => {
            if (isDieUnlocked(image)) {   
                image.src = "assets/die_rolling.gif"
            }
        });
        setTimeout(() => {
            // this is where we will set the die images, and then get random numbers
            dieImages.forEach((image) => {
            if (isDieUnlocked(image)) {
                    image.src = "assets/white_dice_" + (Math.floor(Math.random() * 6) + 1) + ".gif"
                }
                });
            
            }, 500);
    });

function isDieUnlocked(dieImage){
    const checkboxes = document.querySelectorAll("#gameboard input");
    const unchecked = Array.from(checkboxes)
                            .filter(checkbox => !checkbox.checked);
    return unchecked.find(checkbox => checkbox.className === dieImage.className);

}