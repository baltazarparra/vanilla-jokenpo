(function(jokenpo){

    'use strict';

    var $rock = document.querySelector('[data-js="rock"]');
    var $paper = document.querySelector('[data-js="paper"]');
    var $scissor = document.querySelector('[data-js="scissor"]');
    var $userChoice = document.querySelector('[data-js="user-choice"]');
    var $cpuChoice = document.querySelector('[data-js="cpu-choice"]');
    var $userScore = document.querySelector('[data-js="userScore"]');
    var $cpuScore = document.querySelector('[data-js="cpuScore"]');
    var $rockOption = document.querySelector('[data-js="rockOption"]');
    var $paperOption = document.querySelector('[data-js="paperOption"]');
    var $scissorOption = document.querySelector('[data-js="scissorOption"]');

    var app = (function appController() {
        return {
            init: function init() {
                this.initEvents();
            },

            initEvents: function initEvents() {
                $rock.addEventListener('click', this.optionChoice('rock'));
                $paper.addEventListener('click', this.optionChoice('paper'));
                $scissor.addEventListener('click', this.optionChoice('scissor'));
            },

            cpuChoice: function cpuChoice() {
                var cpuChoice = Math.random();
                if (cpuChoice < 0.3) {
                    var cpuChoiceOutput = 'rock';
                    $cpuChoice.setAttribute("src", cpuChoiceOutput + ".svg");
                    return cpuChoiceOutput;
                } else if (cpuChoice < 0.6) {
                    var cpuChoiceOutput = 'paper';
                    $cpuChoice.setAttribute("src", cpuChoiceOutput + ".svg");
                    return cpuChoiceOutput;
                }
                var cpuChoiceOutput = 'scissor';
                $cpuChoice.setAttribute("src", cpuChoiceOutput + ".svg");
                return cpuChoiceOutput;
            },

            optionChoice: function optionChoice(option) {
                return function () {
                    var cpuOption = app.cpuChoice();
                    $userChoice.setAttribute("src", option + ".svg");
                    var resultado = jokenpo.play(option, cpuOption);
                    $userScore.value = resultado.userScore;
                    $cpuScore.value = resultado.cpuScore;
                    if (resultado.userScore > 2) {
                        $userScore.value = 'Win';
                        $cpuScore.value = 'Lose';
                        $paperOption.setAttribute("src", "refresh.svg");
                        $rockOption.setAttribute("src", "http://sotawiki.net/images/e/e9/Founder_Tier_Raven_icon.png");
                        $scissorOption.setAttribute("src", "http://sotawiki.net/images/e/e9/Founder_Tier_Raven_icon.png");
                        $paperOption.addEventListener('click', function(){
                            document.location.reload(true);
                        });
                    }
                    $userScore.value = resultado.userScore;
                    $cpuScore.value = resultado.cpuScore;
                    if (resultado.cpuScore > 2) {
                        $userScore.value = 'Lose';
                        $cpuScore.value = 'Win';
                        $paperOption.setAttribute("src", "refresh.svg");
                        $rockOption.setAttribute("src", "http://sotawiki.net/images/e/e9/Founder_Tier_Raven_icon.png");
                        $scissorOption.setAttribute("src", "http://sotawiki.net/images/e/e9/Founder_Tier_Raven_icon.png");
                        $paperOption.addEventListener('click', function(){
                            document.location.reload(true);
                        });
                    }
                };
            }
        };
    })();

    app.init();

})(window.jokenpo);
