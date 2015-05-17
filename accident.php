
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<?php 
	include 'config.php';
?>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><?php echo $cfgWebTitle; ?></title>

</head>

<body>
<h1>欢迎访问我的首页！</h1>
<?php
include 'config.php';
echo "我有一辆" . $color . $car;
?>

</body>
</html>