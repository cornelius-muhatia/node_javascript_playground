/**
 * Counts number of valleys treversed by a hiker. 
 * Every step is denoted by: "D" for uphill climb and "D" for downhill steps.
 * <p>
 *  <strong>Note:</strong><br/>
 *  <ul>
 *      <li>A mountain is a sequence of consecutive steps above sea level, 
 *          starting with a step up from sea level and ending with a step down to sea level.</li>
 *      <li>A valley is a sequence of consecutive steps below sea level, 
 *          starting with a step down from sea level and ending with a step up to sea level.</li>
 *  </ul>
 * </p>
 * Full problem statement can be found at <a href="http://hr.gs/3rtx #programming">Hackerrank</a>
 * 
 * @param {int} n the number of steps
 * @param {String} s a string describing his path i.e. DDUUD
 */
function countingValleys(n, s) {
    let isValley = false;
    let valley = 0;
    let latitude = 0;
    for(let i = 0; i < n; i++){
        if(s.charAt(i) == 'D'){
            latitude--;
        } else {
            latitude++;
        }
        if(isValley == false && latitude < 0){
            isValley = true;
        }
        if(isValley && latitude == 0){
            valley++;
            isValley = false;
        }
    }
    return valley;
}

module.exports = {
    countValleys: function(n, s){
        return countingValleys(n, s);
    }
}