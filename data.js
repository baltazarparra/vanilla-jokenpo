    (function(){

    'use strict';

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
                    console.log('draw');
                } else if (cpu === 'paper') {
                    console.log('lose');
                } else {
                    console.log('win');
                }
            },

            paperChoice: function paperChoice(cpu) {
                if(cpu === 'paper') {
                    console.log('draw');
                } else if (cpu === 'scissor') {
                    console.log('lose');
                } else {
                    console.log('win');
                }
            },

            scissorChoice: function scissorChoice(cpu) {
                if(cpu === 'scissor') {
                    console.log('draw');
                } else if (cpu === 'rock') {
                    console.log('lose');
                } else {
                    console.log('win');
                }
            },

            score: function score(user, cpu) {
                return { user: 0, cpu: 0 };
            }
        };
    })();

    window.jokenpo = jokenpo;

})();
