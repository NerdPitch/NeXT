const Slide = require('./Slide');
const Step = require('./Step');

class NeXT {

    /**
     * 
     * @param {Object} config - The config Object
     * 
     */

    constructor(slides, config) {

        this.state = {
            slide: config.slide || 0,
            step: config.step || -1
        }

        this.slides = [];

        // Let's add only slides

        for (let slide of slides) {
            if (slide instanceof Slide) {
                this.slides.push(slide);
            } else {
                throw new Error('The first argument should be an array of slides.');
            }
        }

    }

    /**
     * 
     * Navigates to the next step or slide(Based on the conditions)
     * 
     */

    next() {

        if(this.currStep < this.slides[this.currSlide].steps.length - 1){

            this.nextStep();

        }else{

            this.nextSlide();

        }

    }

    /**
     * 
     * Navigates to the previous step or slide(Based on the conditions) 
     * 
     */

    prev() {

        if(this.currStep > -1){

            this.prevStep();

        }else{

            this.prevSlide();

        }

    }

    /**
     * 
     * Navigates to the next slide
     * 
     */

    nextSlide() {

        if (this.currSlide < this.slides.length - 1) {

            this.goTo(this.currSlide + 1, -1);

        } else {

            this.goToFirstSlide();

        }

    }

    /**
     * 
     * Navigates tot he previous slide
     * 
     */

    prevSlide() {

        if (this.currSlide > 0) {

            this.goTo(this.currSlide - 1, -1);

        } else {

            this.goToLastSlide();

        }

    }

    /**
     * 
     * Navigates to the first slide
     * 
     */

    goToFirstSlide() {

        this.goTo(0, -1);

    }

    /**
     * 
     * Navigates to the last step
     * 
     */

    goToLastSlide() {

        this.goTo(this.slides.length - 1, -1);

    }

    /**
     * 
     * Navigates to the given slide and step
     * 
     * @param {Number} slide - The slide number
     * 
     * @param {Number} step - The step number
     * 
     */

    goTo(slide, step) {

        if(this.slides.length - 1 >= slide && slide >= 0){

            this.state.slide = slide;

            // slide transform should happen in here

            if(this.slides[this.currSlide].steps.length - 1 >= step && step >= -1){
                
                // step transform should happen in here

                this.state.step = step;

            }else{

                throw new Error('Step number is out of range.');

            }

        }else{

            throw new Error('Slide number is out of range.');

        }

    }

    /**
     * 
     * Navigates to the next step
     * 
     */

    nextStep() {

        if(this.slides[this.currSlide].steps.length - 1 > this.currStep){

            this.goTo(this.currSlide, this.currStep+ 1);

        }

    }

    /**
     * 
     * Navigates to the previous step
     * 
     */

    prevStep() {

        if(this.currStep > -1){

            this.goTo(this.currSlide, this.currStep - 1);

        }

    }


    /**
     * 
     * Returns the current slider number(0 - n)
     * 
     *@returns {Number}
     * 
     */

    get currSlide() {

        return this.state.slide;

    }

    /**
     * 
     * Returns the current step number(-1 - n)
     * 
     *@returns {Number}
     * 
     */

    get currStep() {

        return this.state.step;

    }

    /**
     * 
     * Returns the current state
     * 
     *@returns {Object}
     * 
     */

    get currState() {

        return {
            slide: this.currSlide,
            step: this.currStep
        }

    }

}

module.exports = NeXT;