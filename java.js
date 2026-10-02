const giftButton = document.getElementById("giftButton");
const giftMessage = document.getElementById("giftMessage");

giftMessage.style.display = "none";

giftButton.addEventListener("click", function () {
    giftMessage.style.display = "block";
    giftButton.style.display = "none";
});