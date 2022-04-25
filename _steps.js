/** 
 1. make a folder (mkdir)
 2. open the folder
 3. type into the cmd: npm init
 4. then, type into cmd: npm install express
 5. create index.js file

 For Express:

 1. require express
 2. create app variable
 3. declare port
 4. set app.get('/')
 5. listen to port
 6. node index.js
 7. check cmd for output of the listen console.log command
 8. check your browser for that port like localhost:5000; 


 For get api:

 1. cors middleware
 const cors = require('cors');
 app.use(cors());


 
 For post api:

 1. app.use(express.json());

*/



