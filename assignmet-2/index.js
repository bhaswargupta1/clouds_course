exports.handler = async (event) => { 
let randomvalues = []; 
if (event.queryStringParameters && event.queryStringParameters['n']) {
let n = parseInt(event.queryStringParameters['n']); 
for (let i=0; i<n; i++){ 
randomvalues.push(Math.floor(Math.random() * 10)); 

}
}
let responseBody = randomvalues;
const response = { 
    statusCode: 200, 
    headers: {
    "Access- Control-Allow-Headers" : "Content-Type", 
    "Access-Control-Allow-Origin" : "*",
    "Access- Control-Allow-Methods" : "OPTIONS, POST ,GET" 
    }, 
    body: JSON. stringify(responseBody),
    }; 
    return response; 
}
