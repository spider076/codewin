import express from 'express';


const app = express();


app.get('/', (req,res)=>{
	console.log('hi there !');
});
app.listen(3001, ()=>{
	console.log('server is running on port 3001');
});