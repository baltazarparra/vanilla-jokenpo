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
                $rock.addEventListener('click', this.rockChoice);
                $paper.addEventListener('click', this.paperChoice);
                $scissor.addEventListener('click', this.scissorChoice);
            },

            rockChoice: function rockChoice() {
                $userChoice.setAttribute("src", "rock.svg");
                var cpuChoice = Math.random();
                if (cpuChoice < 0.3) {
                    return $cpuChoice.setAttribute("src", "rock.svg");
                } else if (cpuChoice < 0.6) {
                    return $cpuChoice.setAttribute("src", "paper.svg");
                }
                return $cpuChoice.setAttribute("src", "scissor.svg");
            },

            paperChoice: function paperChoice() {
                $userChoice.setAttribute("src", "paper.svg");
                var cpuChoice = Math.random();
                if (cpuChoice < 0.3) {
                    return $cpuChoice.setAttribute("src", "rock.svg");
                } else if (cpuChoice < 0.6) {
                    return $cpuChoice.setAttribute("src", "paper.svg");
                }
                return $cpuChoice.setAttribute("src", "scissor.svg");
            },

            scissorChoice: function scissorChoice() {
                $userChoice.setAttribute("src", "scissor.svg");
                var cpuChoice = Math.random();
                if (cpuChoice < 0.3) {
                    return $cpuChoice.setAttribute("src", "rock.svg");
                } else if (cpuChoice < 0.6) {
                    return $cpuChoice.setAttribute("src", "paper.svg");
                }
                return $cpuChoice.setAttribute("src", "scissor.svg");
            }
        };
    })();

    app.init();

})(window, document);
