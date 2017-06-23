function score() {
	var score = document.getElementById("txt").value;
	if(!score || isNaN(score) || score < 0 || score > 100) {
		alert("请输入0~100的数字");
	} else if(score <= 100 && score > 90) {
		document.write("您是1等生");
	} else if(score <= 90 && score > 80) {
		document.write("您是2等生");
	} else if(score <= 80 && score > 70) {
		document.write("您是3等生");
	} else if(score <= 70 && score > 60) {
		document.write("您是4等生");
	} else if(score <= 60 && score > 50) {
		document.write("您是5等生");
	} else if(score <= 50 && score > 40) {
		document.write("您是6等生");
	} else if(score <= 40 && score > 30) {
		document.write("您是7等生");
	} else if(score <= 30 && score > 20) {
		document.write("您是8等生");
	} else if(score <= 20 && score > 10) {
		document.write("您是9等生");
	} else {
		document.write("您是10等生");
	}
}