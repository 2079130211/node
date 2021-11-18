const mongo = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

exports.insertOnce = (request,response,formdata,collection)=>{

const  data = JSON.parse(formdata);

mongo.connect(url,(error,conn)=>{

    const db = conn.db("nodewap");
   
    db.collection(collection).insertOne(data,(error,dataRes)=>{
        
       if(error){
           
           send_response(response,500,"Interval Server Error");
       }else{
           send_response(response,200,dataRes);
   
       }
   
   
   
    }); 
   
    });  

 

}


// exports.updateOnce = (request,response,formdata,collection)=>{

//     const  data = JSON.parse(formdata);
    
//     mongo.connect(url,(error,conn)=>{
    
//         const db = conn.db("nodewap");
       
//         db.collection(collection).updateOne(data,(error,dataRes)=>{
            
//            if(error){
               
//                send_response(response,500,"Interval Server Error");
//            }else{
//                send_response(response,200,dataRes);
       
//            }
       
       
       
//         }); 
       
//         });  
    
     
    
//     }
    

const send_response = (response,status,msg)=>{

    let massage = JSON.stringify({
        message:msg,
        status,status
    
    });

    
        response.writeHead(status,{
            'content-type':'application/json'
        });
        response.write(massage);
        return response.end(); 
}