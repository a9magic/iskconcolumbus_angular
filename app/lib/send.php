<?php
$to_email = 'alek_modi@hotmail.com';


function sendemail($p_data){
    $request =  'https://api.mailgun.net/v3/sandbox9e6ee0210b7c46bbafb569d26ddda4ea.mailgun.org/messages';
    $session = curl_init($request);
    
    curl_setopt($session, CURLOPT_POST, true);
    curl_setopt($session, CURLOPT_POSTFIELDS, http_build_query($p_data));
    curl_setopt($session, CURLOPT_HEADER, false);
    curl_setopt($session, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($session, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($session, CURLOPT_USERPWD, "api" . ":" . "key-99ef441a84b7be4896d7f0d0f3c307aa");
    
    $out = curl_exec($session);
    $httpcode = curl_getinfo($session, CURLINFO_HTTP_CODE);
    if (curl_errno($session)) {
        echo 'Error:' . curl_error($session);
    }
    curl_close($session);
    if(substr($httpcode, 0, 1)=='2'){ return 'sent'; } else { return 'error'; }
}


if(isset($_GET['mid'])){
    
    $mid = $_GET['mid'];
    
    if($mid > 0 && $mid < 5){
        
        $data_file = "data/modal.txt";
        $f_Data = file_get_contents($data_file);
        $ar_data = unserialize($f_Data);
        
        $arr_cont = $ar_data[$mid];
        
        $msg = "Details:\n\nTitle: ".$arr_cont['title']."\nImage: ".$arr_cont['img']."\nNo: ".$arr_cont['no']."\nDescription: ".rawurldecode($arr_cont['descr']);
        
        
        $p_data = array('from' => 'ISKCON <mail@sandbox9e6ee0210b7c46bbafb569d26ddda4ea.mailgun.org>',
        'to' => $to_email, 'subject' => 'Details of Modal', 'text' => $msg);
        
        echo sendemail($p_data);
        
    }
    
} else {
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $telephone = $_POST['telephone'];
    $description = $_POST['description'];
    
    $msg = "Contact Us query:\n\nName: $name\nEmail: $email\nTelephone: $telephone\nDescription: $description";
    
    // send email
    $p_data = array('from' => 'ISKCON <mail@sandbox9e6ee0210b7c46bbafb569d26ddda4ea.mailgun.org>',
        'to' => $to_email, 'subject' => 'Contact Query on Website', 'text' => $msg);
        
    $o_ms = sendemail($p_data);
    
    if($o_ms == 'sent'){
        echo "<div style='width:100%;margin:100px auto;text-align:center'><p style='width:50%;font-size:24px;margin: 0 auto;'>Thank you for contacting us. We will be in touch with you very soon. Hare Krishna!</p><br><a href='/'>back to home</a></div>";
    }

}
?>