$(document).ready(function () {
    class Die {
        value
        roll() {
            return Math.ceil(Math.random() * 6)
        }
    }

    let die = new Die;
    console.log(die.roll())
})