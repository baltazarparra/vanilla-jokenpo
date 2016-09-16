(function(jokenpo){

    'use strict';

    var $rock = document.querySelector('[data-js="rock"]');
    var $paper = document.querySelector('[data-js="paper"]');
    var $scissor = document.querySelector('[data-js="scissor"]');
    var $userChoice = document.querySelector('[data-js="user-choice"]');
    var $cpuChoice = document.querySelector('[data-js="cpu-choice"]');

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
                    jokenpo.play(option, cpuOption);
                    jokenpo.handleScore();
                };
            }
        };
    })();

    app.init();

})(window.jokenpo);
