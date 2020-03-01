<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'ContactUs@DomesticAngels.net';

    $email_subject = 'New Message From DomesticAngels.net';

    $email_body = "Client Name: $name. \n".
                    "Client Email: $visitor_email.\n".
                        "Client Message: $message.\n";
    
                        
$to = "talismanwebs@gmail.com";

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: contactus.html");

?>