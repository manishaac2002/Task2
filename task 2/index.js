const axios = require('axios');  
async function printAllData() {
let res = await axios.get('https://raw.githubusercontent.com/sachinabs/Joke-API/main/assets/json/punch.json');  //set of data [], {} --> json
var count = 0;
    for (let i = 0; i < res.data.length; i++) {
    if (res.data[i].type == "general") {
            count = count + 1;
        }
    }
    console.log("no of data:" + count);
}
printAllData();