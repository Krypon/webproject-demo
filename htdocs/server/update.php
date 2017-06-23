<?php
	header("Content-type: application/json; charset=utf-8");
	require_once('db.php');

	if ($link) {
		// 连接成功，插入新闻
		$newstype=$_POST['newstype'];
		$newstitle=$_POST['newstitle'];
		$newsimg=$_POST['newsimg'];
		$newstime=$_POST['newstime'];
		$newssrc=$_POST['newssrc'];
		$newsid=$_POST['id'];

		$sql="UPDATE `news` SET `newstype`='{$newstype}',`newstitle`='{$newstitle}',`newsimg`='{$newsimg}',`newstime`='{$newstime}',`newssrc`= '{$newssrc}' WHERE `id`={$newsid}";

		mysqli_query($link,"SET NAMES utf8");
		$result=mysqli_query($link,$sql);//发送查询语句


		echo json_encode(array('sucess'=>$result));
	}

	mysqli_close($link);
?>