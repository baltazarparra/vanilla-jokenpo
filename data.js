(function(){

    'use strict';

    var jokenpo = (function dataController(user, cpu) {
        var userScore = 0;
        var cpuScore = 0;
        return {

            play: function play(user, cpu) {
                if (user === 'rock') {
                    return jokenpo.rockChoice(cpu);
                } else if (user === 'paper') {
                    return jokenpo.paperChoice(cpu);
                } else if (user === 'scissor') {
                    return jokenpo.scissorChoice(cpu);
                }
            },

            rockChoice: function rockChoice(cpu) {
                if (cpu === 'rock') {
                    return jokenpo.handleScore('draw');
                } else if (cpu === 'paper') {
                    return jokenpo.handleScore('lose');
                } else if (cpu === 'scissor'){
                    return jokenpo.handleScore('win');
                }
            },

            paperChoice: function paperChoice(cpu) {
                if (cpu === 'paper') {
                    return jokenpo.handleScore('draw');
                } else if (cpu === 'scissor') {
                    return jokenpo.handleScore('lose');
                } else if (cpu === 'rock'){
                    return jokenpo.handleScore('win');
                }
            },

            scissorChoice: function scissorChoice(cpu) {
                if (cpu === 'scissor') {
                    return jokenpo.handleScore('draw');
                } else if (cpu === 'rock') {
                    return jokenpo.handleScore('lose');
                } else if (cpu === 'paper'){
                    return jokenpo.handleScore('win');
                }
            },

            handleScore: function handleScore(result) {
                if (result === 'win') {
                    userScore += 1;
                } else if (result === 'lose') {
                    cpuScore += 1;
                }
                return {
                    userScore: userScore,
                    cpuScore: cpuScore
                }
            }

        };
    })();

    window.jokenpo = jokenpo;

})();
