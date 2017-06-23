var arr = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
//计数
var count = {};
//索引
var pos = {};
//遍历原数组并且生成新数组
for (var i = 0; i < arr.length; i++) {
    var char = arr[i];
    if (count[char]) {
        count[char] += 1;
        pos[char] += ',' + i;
    } else {
        count[char] = 1;
        pos[char] = i;
    }
}
// console.log(count);
// console.log(pos);

//返回出现次数最多的字母的次数（降序排列后取第一个数字）
var max = count[Object.keys(count).sort(function(a, b) {
    return count[a] <= count[b];
})[0]];
// console.log(max);

//出现次数最多的字母如果有多个，全部写入arr_pu数组中，并输出
var arr_pu = [];

for (i in count) {
    if (count[i] >= max) {
        //将最大值给max
        max = count[i];
        //将出现最多的字母放到arr_pu数组中
        arr_pu.push(i);
        console.log(arr_pu)
    }
}
document.write('出现次数最多的字母是:' + arr_pu + '<br>');

//将出现最多的字母的次数输出
for (var i = 0; i < arr_pu.length; i++) {
    key = arr_pu[i];
    document.write(key + '出现的次数为:' + count[key] + '<br>');
    document.write(key + '的位置分别为:' + pos[key] + '<br>');
}
