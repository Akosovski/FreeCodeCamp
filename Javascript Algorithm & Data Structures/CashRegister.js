function checkCashRegister(price, cash, cid) {
    const rate = [
      ["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.1],
      ["QUARTER", 0.25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10],
      ["TWENTY", 20],
      ["ONE HUNDRED", 100],
    ];
    let changeArr = [];
    let coin = [];
    let change = cash - price;
    let total = cid.reduce((sum, category) => sum + category[1], 0).toFixed(2);
    let sum = 0;
    let midArr = [];
  
    for (let i = 0; i < Object.keys(rate).length; i++) {
      coin.push(Math.round(cid[i][1] / rate[i][1]));
    } 
    rate.reverse();
    coin.reverse();
    for (let i = 0; i <= coin.length; i++) {
      for (let j = 0; j < coin[i]; j++) {
        if (change >= rate[i][1]) {
          change -= rate[i][1];
          change = change.toFixed(2);
          total -= rate[i][1];
          total = total.toFixed(2);
          sum += rate[i][1];
  
          if (sum > 0) {
            midArr = [rate[i][0], Number(sum.toFixed(2))];
            changeArr.push(midArr);
            midArr = [];
          }

          if (change == 0 && total > 0) {
            for (let i = 0; i < changeArr.length; i++) {
              if (!changeArr[i + 1]) {
                break;
              } else if (changeArr[i + 1][0] == changeArr[i][0]) {
                changeArr[i][1] = changeArr[i + 1][1];
                delete changeArr[i];
              }
            }
            changeArr = changeArr.filter(function (el) {
              return el != null;
            });
            return { status: "OPEN", change: changeArr };
          } else if (change == 0 && total == 0) {
            return { status: "CLOSED", change: cid };
          }
        }
      }
      sum = 0;
    }
    if (change > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
} 
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);