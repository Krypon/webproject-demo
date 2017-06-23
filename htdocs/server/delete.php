<?php
	header("Content-type: application/json; charset=utf-8");
	require_once('db.php');

	if ($link) {
		$newsid=$_POST['newsid'];

		//防止出现乱码
		mysqli_query($link,"SET NAMES utf8");
		$sql="DELETE FROM `news` WHERE `news`.`id`=($newsid)";

		mysqli_query($link,$sql);

		echo json_encode(array('删除状态'=>'成功'));
	}

	mysqli_close($link);

?>