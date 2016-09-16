(function(){

    'use strict';

    var $userScore = document.querySelector('[data-js="userScore"]');
    var $cpuScore = document.querySelector('[data-js="cpuScore"]');
    var $rockOption = document.querySelector('[data-js="rockOption"]');
    var $paperOption = document.querySelector('[data-js="paperOption"]');
    var $scissorOption = document.querySelector('[data-js="scissorOption"]');

    var jokenpo = (function dataController(user, cpu) {
        var userScore = 0;
        var cpuScore = 0;
        return {

            play: function play(user, cpu) {
                if (user === 'rock') {
                    jokenpo.rockChoice(cpu);
                } else if (user === 'paper') {
                    jokenpo.paperChoice(cpu);
                } else if (user === 'scissor') {
                    jokenpo.scissorChoice(cpu);
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
                    return jokenpo.userPoint();
                } else if (result === 'lose') {
                    return jokenpo.cpuPoint();
                }
            },

            userPoint: function userPoint() {
                userScore += 1;
                $userScore.value = userScore;
                if (userScore > 2) {
                    $userScore.value = 'Win';
                    $cpuScore.value = 'Lose';
                    $paperOption.setAttribute("src", "refresh.svg");
                    $rockOption.setAttribute("src", "");
                    $scissorOption.setAttribute("src", "");
                    $paperOption.addEventListener('click', function(){
                        document.location.reload(true);
                    });
                }
            },

            cpuPoint: function cpuPoint() {
                cpuScore += 1;
                $cpuScore.value = cpuScore;
                if (cpuScore > 2) {
                    $userScore.value = 'Lose';
                    $cpuScore.value = 'Win';
                    $paperOption.setAttribute("src", "refresh.svg");
                    $rockOption.setAttribute("src", "");
                    $scissorOption.setAttribute("src", "");
                    $paperOption.addEventListener('click', function(){
                        document.location.reload(true);
                    });  
                }
            }
        };
    })();

    window.jokenpo = jokenpo;

})();
