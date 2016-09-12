(function(window, document){

    'use strict';

    var $rock = document.querySelector('[data-js="rock"]');
    var $paper = document.querySelector('[data-js="paper"]');
    var $scissor = document.querySelector('[data-js="scissor"]');
    var $userChoice = document.querySelector('[data-js="user-choice"]');
    var $cpuChoice = document.querySelector('[data-js="cpu-choice"]');
    var $userScore = document.querySelector('[data-js="userScore"]');
    var $cpuScore = document.querySelector('[data-js="cpuScore"]');

    $rock.addEventListener('click', rockChoice, false);
    $paper.addEventListener('click', paperChoice, false);
    $scissor.addEventListener('click', scissorChoice, false);

    function rockChoice() {
        $userChoice.setAttribute("src", "rock.svg");
        var cpuChoice = Math.random();
        if (cpuChoice < 0.3) {
            return $cpuChoice.setAttribute("src", "rock.svg"), $cpuScore.value = i;
        } else if (cpuChoice < 0.6) {
            return $cpuChoice.setAttribute("src", "paper.svg"), $cpuScore.value = i;
        }
        return $cpuChoice.setAttribute("src", "scissor.svg"), $userScore.value = i;
    }

    function paperChoice() {
        $userChoice.setAttribute("src", "paper.svg");
        var cpuChoice = Math.random();
        if (cpuChoice < 0.3) {
            return $cpuChoice.setAttribute("src", "rock.svg");
        } else if (cpuChoice < 0.6) {
            return $cpuChoice.setAttribute("src", "paper.svg");
        }
        return $cpuChoice.setAttribute("src", "scissor.svg");
    }

    function scissorChoice() {
        $userChoice.setAttribute("src", "scissor.svg");
        var cpuChoice = Math.random();
        if (cpuChoice < 0.3) {
            return $cpuChoice.setAttribute("src", "rock.svg");
        } else if (cpuChoice < 0.6) {
            return $cpuChoice.setAttribute("src", "paper.svg");
        }
        return $cpuChoice.setAttribute("src", "scissor.svg");
    }

})(window, document);
