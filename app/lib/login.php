<?php
session_start();
$reset_sess = false;
$home_location = false;

if(isset($_GET["logout"])){
    $reset_sess = true;
    $home_location = true;
} else {
    if($_POST['lUsername'] == 'radha' && $_POST['lPassword'] == 'krishna'){
        $_SESSION["id"] = '1';
        $home_location = true;
    } else {
        $reset_sess = true;
        echo "<h4>Invalid Credentials</h4>";
    }
}

if($reset_sess){
    session_destroy();
    unset($_SESSION["id"]);
}

if($home_location){
    header('Location: /');
}
?>