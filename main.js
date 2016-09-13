(function(window, document){

    'use strict';

    var $rock = document.querySelector('[data-js="rock"]');
    var $paper = document.querySelector('[data-js="paper"]');
    var $scissor = document.querySelector('[data-js="scissor"]');
    var $userChoice = document.querySelector('[data-js="user-choice"]');
    var $cpuChoice = document.querySelector('[data-js="cpu-choice"]');
    var $userScore = document.querySelector('[data-js="userScore"]');
    var $cpuScore = document.querySelector('[data-js="cpuScore"]');

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

            score: function score() {

            },

            cpuChoice: function cpuChoice() {
                var cpuChoice = Math.random();
                if (cpuChoice < 0.3) {
                    return $cpuChoice.setAttribute("src", "rock.svg");
                } else if (cpuChoice < 0.6) {
                    return $cpuChoice.setAttribute("src", "paper.svg");
                }
                return $cpuChoice.setAttribute("src", "scissor.svg");
            },

            optionChoice: function optionChoice(option) {
                var self = this;
                return function () {
                    $userChoice.setAttribute("src", option + ".svg");
                    self.cpuChoice();
                  }
            },

            resultChoice: function resultChoice() {

            }
        };
    })();

    app.init();

})(window, document);
