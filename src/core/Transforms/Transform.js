class Transform{

    constructor(duration){

        this.transition = {
            duration: duration || 0
        }

    }

    in(){
        throw new Error("In should be overridden");
    }

    out(){
        throw new Error("Out should be overridden");
    }

}

module.exports = Transform;