(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    let planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */
    let planetsStringWithBreaks = "";
    for (let i = 0; i < planetsArray.length; i++){
        planetsStringWithBreaks += `${planetsArray[i]} <br> `;
    }
    console.log(planetsStringWithBreaks);


     /**
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    let planetsStringUnorderedList = "";
    for(let i = 0; i < planetsArray.length; i++){
        if (i === 0){
            planetsStringUnorderedList += '<ul> ';
        }
        planetsStringUnorderedList += ` <li>  ${planetsArray[i]}  </li> `;
        if (i === planetsArray.length -1){
            planetsStringUnorderedList += ' </ul>';
        }
    }
    console.log(planetsStringUnorderedList);
})();