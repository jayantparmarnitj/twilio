'use strict';
exports.list_card_data = function(req, res) {
  res.json({"hello":"jayant"});
};
exports.create_charge = function(req, res) {

try{

  console.log(req.body);
 var code = Math.floor((Math.random()*1000000)+1);
  const accountSid = 'AC5cce3ad6245f9d26361fc1430275274a';
  const authToken = 'd569dcea18aa69d7ed19d2dfa35fc6dc';
  const client = require('twilio')(accountSid, authToken);
  const mobile = req.body.data.cardNum;
  try{
  client.messages.create(
    {
      to: `${mobile}`,
      from: '+13015473283',
      body: `Greetings! Your OTP is ${code}`,
    },
    (err, message) => {
      console.log(message.sid);
      if(err)
          res.send(err);
    }
  );
}
catch(e)
{
  res.send("Enter Registered Mobile number");
}
res.send("Otp Sent Successfully");
}
catch(e){
  return res.status(500).json({success:0,msg:e.message});
}

}