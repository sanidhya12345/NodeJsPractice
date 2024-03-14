var nodemailer=require('nodemailer');

var transport=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:'xxxxxxxxxxxxx@gmail.com',
        pass:'xxxxxxxxxxxxx'
    }
});

var mailOptions={
    from:'xxxxxxxxxxxxxx@gmail.com',
    to:'xxxxxxxxxxxxxx@gmail.com',
    subject:'test mail',
    text:'hello this is only a test mail from nodemailer'
}

transport.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log('E-mail sent'+info.response);
    }
})