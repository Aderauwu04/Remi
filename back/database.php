<?php

	$connection = mysqli_connect(
		'localhost',
		'root',
		'',
		'remidb'
	);

	if($connection){
		echo 'database connedted';
	}

?>