/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    let minuteDegrees = (360/60) * minutes
    let tempHrDegrees = (360/12)*hour
    let extraHrDegrees = minutes * 0.5 //15
    let finalHrDegrees = tempHrDegrees + extraHrDegrees //105
    
    let firstAngle = Math.abs(finalHrDegrees - minuteDegrees)
    
    let secondAngle = 360 - firstAngle
    
    return Math.min(firstAngle, secondAngle)
};
// Full circle = 360 deg
// 360/60 = 6 deg (min hand) 
// 360/12 = 30 deg (hr hand)
// hour = 12
// 12 x 30 deg = 360 deg
// minute = 30
// 30 x 6 deg = 180 deg
// 360 deg - 180 deg = 180 deg
// For every time the min hand moves, the hr hand also moves
// 30 min /60 total min = 0.5 deg
// 0.5 deg x 30 min = 15 deg
// 360 deg + 15 deg = 375 hr deg
// 375 hr deg - 180 min deg = 165 deg