<?php
header("Content-Type: application/json; charset=UTF-8");
session_start();
$data = array();
// $data['status'] = ''; 

if(isset($_GET["update"])){
    if(isset($_SESSION["id"]) && $_SESSION["id"] != ''){
        
        $title = $_POST['title'];
        $img = $_POST['img'];
        $descr = $_POST['descr'];
        $no = $_POST['no'];
        $mID = $_POST['mID'];
        
        if($mID < 1 || $mID > 4){ $data['status'] = 'Invalid Modal ID'; $data['code'] = 100; } else { $data['code'] = 200; }
        if(($title=='' || $img=='' || $descr=='' || $no=='') && $data['code'] == 200){ $data['status'] = 'Invalid Data'; $data['code'] = 100; }
        
        if($data['code'] == 200){
            $data_file = "data/modal.txt";
            $f_Data = file_get_contents($data_file);
            $ar_data = unserialize($f_Data);
            
            $ar_data[$mID] = array('title' => $title, 'no' => $no, 'img' => $img, 'descr' => rawurlencode(stripslashes($descr)));
            $ser_ndata = serialize($ar_data);
            if(file_put_contents($data_file, $ser_ndata)){
                $data['code'] = 200;
                $data['status'] = 'Successfully updated';
            } else {
                $data['status'] = 'Unable to update data';
                $data['code'] = 100;
            }
        }
    } else {
        $data['code'] = 100;
    }
    
} else if(isset($_GET["getdata"])){
    $data_file = "data/modal.txt";
    $f_Data = file_get_contents($data_file);
    $ar_data = unserialize($f_Data);
    
    // $ar_data[3]['descr'] = base64_decode($ar_data[3]['descr']);
    
    $data['code'] = 200;
    $data['data'] = $ar_data;
    
} else {
    if(isset($_SESSION["id"]) && $_SESSION["id"] != ''){
        $data['code'] = 200;
    } else {
        $data['code'] = 100;
    }
}

echo json_encode($data);
?>