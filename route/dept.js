var express=require("express");
var route=express();
var mysql=require("mysql");
var config=require("config");

route.use(express.json());

var connection=mysql.createConnection({
    host:config.get("host"),
    database: config.get("database"),
    user:config.get("user"),
    password:config.get("password")
});
connection.connect();

route.get("/",(request,response)=>{

    var queryText=`SELECT * FROM DEPT`;
    
    connection.query(queryText,(error,result)=>{
        if(error==null)
        {
           response.send(JSON.stringify(result));     
        }
        else
        {
            response.send(JSON.stringify(error));
        }
    });
});

route.get("/:deptno",(request,response)=>{

    var deptno=request.params.deptno;
    var queryText=`SELECT * FROM DEPT WHERE deptno=${deptno}`;
    
    connection.query(queryText,(error,result)=>{
        if(error==null)
        {
           response.send(JSON.stringify(result));     
        }
        else
        {
            response.send(JSON.stringify(error));
        }
    });
});

route.post("/",(request,response)=>{

   var deptno=request.body.deptno;
   var dname=request.body.dname;
   var loc=request.body.loc;

    var queryText=`INSERT INTO DEPT VALUES(${deptno},'${dname}','${loc}')`;
    
    connection.query(queryText,(error,result)=>{
        if(error==null)
        {
           response.send(JSON.stringify(result));     
        }
        else
        {
            response.send(JSON.stringify(error));
        }
    });
});

route.put("/:deptno",(request,response)=>{

    var deptno=request.params.deptno;
    var dname=request.body.dname;
    var loc=request.body.loc;
 
     var queryText=`UPDATE DEPT SET dname='${dname}',loc='${loc}' WHERE deptno=${deptno}`;
     
     connection.query(queryText,(error,result)=>{
         if(error==null)
         {
            response.send(JSON.stringify(result));     
         }
         else
         {
             response.send(JSON.stringify(error));
         }
     });
 });


 route.delete("/:deptno",(request,response)=>{

    var deptno=request.params.deptno;
   
 
     var queryText=`DELETE FROM DEPT WHERE deptno=${deptno}`;
     
     connection.query(queryText,(error,result)=>{
         if(error==null)
         {
            response.send(JSON.stringify(result));     
         }
         else
         {
             response.send(JSON.stringify(error));
         }
     });
 });


module.exports=route;