const Transform = require('./Transform');

class Fade extends Transform{

    in(){

        console.log(`I'm being faded in!`);

    }

    out(){

        console.log(`I'm being faded out!`);

    }

}

module.exports = Fade;