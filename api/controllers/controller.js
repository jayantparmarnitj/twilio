'use strict';

// exports.list_card_data = function(req, res) {
//   console.log("jayant");
//   console.log(req.body);
//  // res.json({"message1":"hello"});
//  var code = Math.floor((Math.random()*1000000)+1);
//   const accountSid = 'AC5cce3ad6245f9d26361fc1430275274a';
//   const authToken = 'd569dcea18aa69d7ed19d2dfa35fc6dc';
//  // const code = Math.floor(Math.random() * (max - min + 1)) + min,
//   // require the Twilio module and create a REST client
//   const client = require('twilio')(accountSid, authToken);
  
//   client.messages.create(
//     {
//        //to: '+919813502080',
//       to: '+918826573241',
//       from: '+13015473283',
//       body: `Greetings! Your OTP is ${code}`,
//     //body: 'Greetings! Your OTP is: 5454',
//     },
//     (err, message) => {
//      // console.log(message);
//       console.log(message.sid);
//     }
//   );
// res.send("Otp Sent Successfully");

// };

exports.list_card_data = function(req, res) {
  res.json({"message1":"hello"});
};
exports.create_charge = function(req, res) {
  console.log(req.body);
  
  //console.log("jayant");

 // res.json({"message1":"hello"});
 var code = Math.floor((Math.random()*1000000)+1);
  const accountSid = 'AC5cce3ad6245f9d26361fc1430275274a';
  const authToken = 'd569dcea18aa69d7ed19d2dfa35fc6dc';
 // const code = Math.floor(Math.random() * (max - min + 1)) + min,
  // require the Twilio module and create a REST client
  const client = require('twilio')(accountSid, authToken);
  const mobile = req.body.data.cardNum;
  client.messages.create(
    {
       //to: '+919813502080',
      to: `${mobile}`,
      from: '+13015473283',
      body: `Greetings! Your OTP is ${code}`,
    //body: 'Greetings! Your OTP is: 5454',
    },
    (err, message) => {
     // console.log(message);
      console.log(message.sid);
    }
  );
res.send("Otp Sent Successfully");

}