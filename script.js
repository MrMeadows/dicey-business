$(document).ready(function () {
    class Die {
        value
        roll() {
            return Math.floor(Math.random() * 6)
        }
    }

    console.log(roll())
})