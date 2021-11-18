const database = require("./../db/db.js");
exports.result = (request,response)=>{
    let formdata = '';
    request.on("data",(chunks)=>{
        formdata += chunks.toString();
    }); 
    request.on("end",()=>{
    database.insertOnce(request,response,formdata,"users");
    });
}
 
 