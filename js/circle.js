(function() {
    "use strict";

    // create a circle object
    let circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            // TODO: return the proper value
            return Math.PI * (Math.pow(this.radius,2));
        },

        logInfo: function (x) {
            // TODO: complete this method.
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            let area = this.getArea();
            if (x === true){
                console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(area));
                return Math.round(area);
            } else {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
                return area;
            }
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();