<?php
 $path = './assets/data.txt';
 if (isset($_POST['name']) && isset($_POST['email']&& isset($_POST['subject'])&& isset($_POST['textarea']) {
    $fh = fopen($path,"a+");
    $string = $_POST['name'].' - '.$_POST['email'].' - '.$_POST['subject'].' - '.$_POST['textarea'];
    fwrite($fh,$string); // Write information to the file
    fclose($fh); // Close the file
 }
?>