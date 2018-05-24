class Step{

    constructor(transform){

        this.transform = transform || null;

    }

    /**
     * Sets the transform name for the step
     * 
     * @param {Transform} transform - the transform of the step
     * 
     */

    set transform(transform){
        this.transform = transform;
    }

    /**
     * Sets the transform name for the step
     * 
     * @returns {Transform} transform - the transform of the step
     * 
     */

    get transform(){
        return this.transform;
    }

}

module.exports = Step;