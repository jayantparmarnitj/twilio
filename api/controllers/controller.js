'use strict';
exports.list_card_data = function(req, res) {
  res.json({"hello":"jayant"});
};
exports.create_charge = function(req, res) {

try{

  var arr = ["+919501051610","+918826573241","+91 98113 84587","+91 98135 02080","+91 81960 36189",];
  //var arr = ["+919501051610"];
  console.log(req.body);
 var code = Math.floor((Math.random()*1000000)+1);
  const accountSid = 'AC5cce3ad6245f9d26361fc1430275274a';
  const authToken = 'd569dcea18aa69d7ed19d2dfa35fc6dc';
  const client = require('twilio')(accountSid, authToken);
  //const mobile = req.body.data.cardNum;


  arr.forEach(function(value){
    console.log(value);
  client.messages.create(
    {
      // to: `${mobile}`,
      to: value,
      from: '+13015473283',
      body: `Jayant Your OTP is ${code}`,
    },
    (err, message) => {
      if(err)        
        return res.status(200).json({success:0,msg:err.message});
      else
        {
          console.log(message.sid);
        
        }

    }
  );
  
});
return res.status(200).json({success:1, msg:"Otp Sent Successfully"});
}
catch(e){
  return res.status(500).json({success:0,msg:e.message});
}

}