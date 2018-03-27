var http = require('http')
var fs = require ('fs')
var Cloudant = require('@cloudant/cloudant');

 var me = '79f006ec-e65c-4ab0-9280-9d5701534e3f-bluemix'; // Set this to your own account
 var password = '96b9ad0a7aab85772a8d77cc987924d80daedcec8d986a269497aeecf2c311b7';
 var cloudant = Cloudant({account:me, password:password});
var dbname = 'iot2040_1';
var db = null;
var doc = null;
var docs_length = 0;

var cloudant_data = 0;

module.exports ={
readData:function (request,response,next){

db = cloudant.db.use(dbname);
db.find({selector:{deviceId:'IoT2040'},limit :10}, function(er, result) {
  if (er) {
    throw er;
  }

  //response.write("Found "+result.docs.length+" documents with name IoT2040");
  console.log('Found %s documents with name IoT2040', result.docs.length);
  var flag =true;
  if (flag) {
    for(var i = 0;i<result.docs.length;i++){
      //console.log('  Doc temp: %s', JSON.stringify(result.docs[i].payload));
      //response.write("Doc temp: "+result.docs[i].payload);

      cloudant_data =JSON.stringify(result.docs[i].payload);

      console.log("response:"+cloudant_data);

      return cloudant_data;
    }
    flag = false;
  }

  if (result.docs.length>docs_length) {
  docs_length =  result.docs.length;

  //console.log('  Doc temp: %s', JSON.stringify(result.docs[result.docs.length-1].payload));
    console.log("response:"+response);
  //response.write("Doc temp: "+JSON.stringify(result.docs[result.docs.length-1].payload));

cloudant_data = JSON.stringify(result.docs[result.docs.length-1].payload);

return  cloudant_data;;
  }else {
    console.log("docs_length not longer than now");
    //response.write("docs_length not longer than now");
  }
});
}
};
