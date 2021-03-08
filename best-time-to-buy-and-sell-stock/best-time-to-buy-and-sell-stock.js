/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    // let buyDay = 0;
    let buyPrice = prices[0]; 
    // let sellDay = 0
    // let sellPrice = 0;
    
    for(let i = 0; i < prices.length; i++){
        let tempPrice = prices[i] 
        if(tempPrice < buyPrice){
            buyPrice = tempPrice
            // buyDay = i
        } else if(tempPrice - buyPrice > profit){
             profit = tempPrice - buyPrice     
        }
        // buyPrice = (tempBuyPrice < buyPrice) ? tempBuyPrice : buyPrice
    }
    
    // let possibleSellPrice = 0
    // for(let i = buyDay + 1; i < prices.length; i++){
    //     possibleSellPrice = prices[i]
    //     if(possibleSellPrice - buyPrice > 0 && sellPrice < possibleSellPrice){
    //         sellPrice = possibleSellPrice
    //         sellDay = i
    //         profit = sellPrice - buyPrice
    //     }
    // }
    return profit
};