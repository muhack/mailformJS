var http = require('http');
var mailer = require("nodemailer")
 
var server = http.createServer(function (req, res) {

var dest = "";
var message = "";
var subj = "";

var method = req.method.toLowerCase();
  if(method == 'post') {
     var body = '';
     req.on('data', function(data) {
          body += data;
     });
      
     req.on('end', function() {
         var post = require('querystring').parse(body);
         req.params = post; //aggancio un nuovo attributo
         var vettore = body.split("ahoioi");
         message = vettore[0];
         subj = vettore[1];
         dest = vettore[2];
         console.log('arrivato: '+message+";"+subj+";"+dest);
     });
  } else {
     var url_parts = require('url').parse(req.url, true);
     req.params = url_parts.query; //aggancio un nuovo attributo
     console.log(req.params);
  }

  // Use Smtp Protocol to send Email
    var smtpTransport = mailer.createTransport("SMTP",{
        service: "Gmail",
        auth: {
            user: "gmail_id@gmail.com",
            pass: "gmail_password"
        }
    });

    var mail = {
        from: "Yashwant Chavan <from@gmail.com>",
        to: dest,
        subject: subj,
        text: message,
        html: "<b>Node.js New world for me</b>"
    }

    smtpTransport.sendMail(mail, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.message);
        }

        smtpTransport.close();
    });
   
})

server.listen(3000,'0.0.0.0');
 
console.log('Server running at 0.0.0.0:3000');
