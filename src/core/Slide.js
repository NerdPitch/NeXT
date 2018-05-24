const Step = require('./Step');

class Slide{

    /**
     * 
     * @param {Array} steps - Array of steps which are each an instance of Step class
     * 
     */

    constructor(steps){

        this.steps = [];

        // Let's only add steps

        for(let step of steps){
            if(step instanceof Step){
                this.steps.push(step)
            }else{
                throw new Error('First argument should be an array of steps.');
            }
        }
        
    }
    
}

module.exports = Slide;