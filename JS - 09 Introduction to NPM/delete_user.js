const axios = require('axios');

async function makeDeleteRequest(userNum) {

     let res = await axios.delete('http://localhost:3000/users', id=usernum) ;

    console.log(res.status);
}

makeDeleteRequest();
