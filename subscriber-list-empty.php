<?php

$f = @fopen("data/sm_subcribers-list.csv", "r+");
if ($f !== false) {
    ftruncate($f, 0);
    fclose($f);

    echo 'Success!';
}

else{
	echo "Some Error Occurred!";
}


?>