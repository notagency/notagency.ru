<?

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');


$result =  [];

try{
    foreach ($_POST as $k=>$v)
    {
        $post[$k] = htmlspecialchars(trim($v));
    }
    
    $to =  'ds@notagency.ru, jn@notagency.ru';

    $subject = 'Поступило новое сообщение с сайта notagency.ru';
    
    $message = 'Поступило новое сообщение с сайта notagency.ru';
    $message .= "\r\n\r\n";
    $message .= 'Контактные данные: ' . $post['contact'];
    $message .= "\r\n\r\n";
    $message .= "Сообщение:";
    $message .= "\r\n";
    $message .= $post['message'];
    $message .= "\r\n";
    $message .= "===========";
    $message .= "\r\n\r\n";
    $message .= date('d.m.Y H:i:s');
    
    mb_send_mail($to, $subject, $message, 'From: noreply@notagency.ru');
    
    $result = [
        'success' => true,
    ];
}
catch(Exception $e)
{
    $result = [
        'error' => true,
        'message' => $e->getMessage(),
    ];
}



echo json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);