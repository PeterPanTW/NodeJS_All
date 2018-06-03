/*
運用循序搜尋法找出陣列中其中一個元素，循序搜尋法就是一個一個去比對非常沒有效率但是很安全(保證可以找到)

寫程式一定要【 測試】 但絕對不要在函數當中 print 出任何東西出來，在函數以外去測試就好!!
*/

//傳入參數是陣列我們取名為 array, 要找出其中一個元素的值我們取名為 item
function find(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) return i //這裡強烈建議!! 我們在 JS 當中要去做 判斷 盡量用三個等於，因為三個等於表示型態一定要一樣；兩個等於允許型態不一樣有失真的可能性。
  }

  //如果都沒有傳回 -1 請留意我們的大括號位置唷!
  return -1;
}


//這裡回傳的結果會是 2 , 為什麼呢? 陣列起始直是從 0 開始!!
let idx = find([1, 4, 5, 8, 9], 5)
console.log('idx = ', idx)

idx = find([1, 4, 5, 8, 9], 2)
console.log('idx = ', idx)
