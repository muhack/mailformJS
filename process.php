<?php
  $email_to = $_POST['destination'];
  $email_subject = $_POST['subject'];
  $email_message = $_POST['message']; // required
  @mail($email_to, $email_subject, $email_message);
?>  