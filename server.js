// import app from app.js file
const app=require("./backend/app");
// server backend is listening on port 3000
app.listen(3000,()=>{
    console.log(" application is running on port 3000");
});