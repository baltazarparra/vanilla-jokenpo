(function(){

    'use strict';

    var $userScore = document.querySelector('[data-js="userScore"]');
    var $cpuScore = document.querySelector('[data-js="cpuScore"]');

    var jokenpo = (function dataController(user, cpu) {
        return {

            play: function play(user, cpu) {
                if(user === 'rock') {
                    return jokenpo.rockChoice(cpu);
                } else if (user === 'paper') {
                    return jokenpo.paperChoice(cpu);
                }
                return jokenpo.scissorChoice(cpu);
            },

            rockChoice: function rockChoice(cpu) {
                if(cpu === 'rock') {
                    return jokenpo.handleScore('draw');
                } else if (cpu === 'paper') {
                    return jokenpo.handleScore('lose');
                } else {
                    return jokenpo.handleScore('win');
                }
            },

            paperChoice: function paperChoice(cpu) {
                if(cpu === 'paper') {
                    return jokenpo.handleScore('draw');
                } else if (cpu === 'scissor') {
                    return jokenpo.handleScore('lose');
                } else {
                    return jokenpo.handleScore('win');
                }
            },

            scissorChoice: function scissorChoice(cpu) {
                if(cpu === 'scissor') {
                    return jokenpo.handleScore('draw');
                } else if (cpu === 'rock') {
                    return jokenpo.handleScore('lose');
                } else {
                    return jokenpo.handleScore('win');
                }
            },

            handleScore: function handleScore(result) {
                var userPoints = 0;
                var cpuPoints = 0;
                return $userScore.value = userPoints, $cpuScore.value = cpuPoints;
            }

        };
    })();

    window.jokenpo = jokenpo;

})();
