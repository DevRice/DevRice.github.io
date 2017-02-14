<?php
if (isset($_POST['submit'])){
	if(!(isset($_POST['human'])){
		echo '<div id="not-human" class="notification warning">
				<strong>Warning!</strong> Please verify you are a human.
			</div>';
	}
$name = $_POST['full-name'];
$email = $_POST['email'];
$message = $_POST['message'];
$from = 'alexnite.com';
$to = 'alexnitedev@gmail.com';
$body = "From: $name\n E-Mail: $email\n Message:\n $message";
	
	if (mail ($to, $name, $body, $from)) { 
        echo '<div class="notification success">
				<strong>Thank you!</strong> I'll get back to you as soon as possible!
			</div>';
    } else { 
        echo '<div class="notification success">
				<strong>Error</strong> Something went wrong!
			</div>'; 
    }
}
?>