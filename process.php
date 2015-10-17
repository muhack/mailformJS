<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>direttiva</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="app.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    </head>
    <body>
        <?php
            $email_to = $_POST['destination'];
            $email_subject = $_POST['subject'];
            $email_message = $_POST['message']; // required
            echo "ciao";
            @mail($email_to, $email_subject, $email_message);
        ?>
        <h1>ciao</h1>
    </body>
</html>  