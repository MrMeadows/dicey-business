$(document).ready(function () {

    let counter = 0;

    $('#divGenBtn').on('click', function() {
        new Die;
    })

    class Die {
        constructor() {
            $('main').append(`<div class="die" id=${counter}></div>`);
            counter++
        }

        roll() {
            value = Math.ceil(Math.random() * 6);
        }
    }
});