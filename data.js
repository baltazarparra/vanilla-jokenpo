(function(){

    'use strict';

    var jokenpo = (function dataController(user, cpu) {
        var value1 = 0;
        var value2 = 0;
        return {

            play: function play(user, cpu) {

                if (user === 'rock') {

                    if (cpu === 'rock') {
                        return jokenpo.handleScore('draw');
                    } else if (cpu === 'paper') {
                        return jokenpo.handleScore('lose');
                    } else if (cpu === 'scissor'){
                        return jokenpo.handleScore('win');
                    }

                } else if (user === 'paper') {

                    if (cpu === 'paper') {
                        return jokenpo.handleScore('draw');
                    } else if (cpu === 'scissor') {
                        return jokenpo.handleScore('lose');
                    } else if (cpu === 'rock'){
                        return jokenpo.handleScore('win');
                    }

                } else if (user === 'scissor') {

                    if (cpu === 'scissor') {
                        return jokenpo.handleScore('draw');
                    } else if (cpu === 'rock') {
                        return jokenpo.handleScore('lose');
                    } else if (cpu === 'paper'){
                        return jokenpo.handleScore('win');
                    }

                }
            },

            handleScore: function handleScore(result) {
                if (result === 'win') {
                    return jokenpo.user();
                } else if (result === 'lose') {
                    return jokenpo.cpu();
                } else if (result === 'draw') {
                    return jokenpo.draw();
                }
            },

            user: function user() {
                value1 += 1;
                console.log('user ' + value1);
            },

            cpu: function cpu() {
                value2 += 1;
                console.log('cpu ' + value2);
            },

            draw: function draw() {
                console.log('draw');
            }
        };
    })();

    window.jokenpo = jokenpo;

})();
