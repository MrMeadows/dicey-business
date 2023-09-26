$(document).ready(function () {

    let counter = 0;
    let dieIdList = [];
    let dieList = [];
    let diceSumList = [];

    function sum(a, b) {
        return a + b;
    }

    function delDieById(arr, id) {
        const dieId = arr.findIndex((obj) => obj.id === id);
        arr.splice(dieId, 1)

        return arr;
    }

    $('#divGenBtn').on('click', function() {
        new Die;
        console.log(dieList)
    })
    
    $('#rollDiceBtn').on('click', function() {
        for (let i = 0; i < dieList.length; i++) {
            dieList[i].roll();
        }
    })

    $('#sumDiceBtn').on('click', function() {
        for (let i = 0; i < dieList.length; i++) {
            diceSumList.push(dieList[i].value);
        }
        alert(`The sum of thy dice is ${diceSumList.reduce(sum)}!`)
        diceSumList = [];
    })



    class Die {
        constructor() {
            this.div = $('main').append(`<div class="die m-2 inline-block border border-dark rounded" id=${counter}></div>`);
            this.id = counter;
            this.roll()
            counter++
            dieList.push(this)
            dieIdList.push(this.id)
            this.destroy();
        }

        roll() {

            function stdBgColor() {
                $('#'+this.id).css('background-color', '#FFDD90')
            }

            function newBgColor() {
                $('#'+this.id).css('background-color', '#4FFF2A')
            }

            this.value = Math.ceil(Math.random() * 6);
            $('#'+this.id).find('.dieNum').remove()
            $('#'+this.id).append(`<p class="dieNum text-center">${this.value}</p>`)
            
            setTimeout(newBgColor.bind(this),0)
            setTimeout(stdBgColor.bind(this),500)
        }

        reRoll() {
            $('#'+this.id).on('click', function () {
                dieList[this.id].roll()
            })
        }

        destroy() {
            $('#'+this.id).on('dblclick', function () {
                console.log(this)

                delDieById(dieList, this.id)
                delDieById(dieIdList, this.id)
                $('#'+this.id).remove()
                
                console.log(dieList)
            })

        }

    }
});