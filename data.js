(function(){

    'use strict';

    var $userScore = document.querySelector('[data-js="userScore"]');
    var $cpuScore = document.querySelector('[data-js="cpuScore"]');

    var jokenpo = (function dataController(user, cpu) {
        var userScore = 0;
        var cpuScore = 0;
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
                    return jokenpo.userPoint();
                } else if (result === 'lose') {
                    return jokenpo.cpuPoint();
                }
            },

            userPoint: function userPoint() {
                userScore += 1;
                $userScore.value = userScore
                if (userScore > 2) {
                    $userScore.value = 'Win';
                    $cpuScore.value = 'Lose';
                }
            },

            cpuPoint: function cpuPoint() {
                cpuScore += 1;
                $cpuScore.value = cpuScore
                if (cpuScore > 2) {
                    $userScore.value = 'Lose';
                    $cpuScore.value = 'Win';
                }
            }
        };
    })();

    window.jokenpo = jokenpo;

})();
