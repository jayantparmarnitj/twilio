'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/controller');

app.post('/otp',todoList.create_charge);
app.get('/',todoList.list_card_data);

};
