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

    prev() {

        if(this.currStep > -1){

            this.prevStep();

        }else{

            this.prevSlide();

        }

    }

    nextSlide() {

        if (this.currSlide < this.slides.length - 1) {

            this.goTo(this.currSlide + 1, -1);

        } else {

            this.goToFirstSlide();

        }

    }

    prevSlide() {

        if (this.currSlide > 0) {

            this.goTo(this.currSlide - 1, -1);

        } else {

            this.goToLastSlide();

        }

    }

    goToFirstSlide() {

        this.goTo(0, -1);

    }

    goToLastSlide() {

        this.goTo(this.slides.length - 1, -1);

    }

    goTo(slide, step) {

        if(this.slides.length >= slide && slide >= 1){

            this.state.slide = slide;

            if(this.slides[this.currSlide].steps.length >= step && step >= -1){
                
                this.state.step = step;

            }else{

                throw new Error('Step number is out of range.');

            }

        }else{

            throw new Error('Slide number is out of range.');

        }

    }

    nextStep() {

        if(this.slides[this.currSlide].steps.length - 1 > this.currStep){

            this.goTo(this.currSlide, this.currStep+ 1);

        }

    }

    prevStep() {

        if(this.currStep > -1){

            this.goTo(this.currSlide, this.currStep - 1);

        }

    }

    get currSlide() {

        return this.state.slide;

    }

    get currStep() {

        return this.state.step;

    }

    get currState() {

        return {
            slide: this.currSlide,
            step: this.currStep
        }

    }

}

module.exports = NeXT;