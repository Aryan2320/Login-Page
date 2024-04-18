import axios from './node_modules/axios/dist/axios.min.js';


const inputDetail = document.querySelector(".inputchild");
let obj = {};

inputDetail.addEventListener("change", function(e) {
    obj["Password"] = e.target.value;
    console.log(obj);
});

const sendData = async (obj) => {
    try {
        let res = await axios.post('https://example.com/api/resource', obj);
        console.log('Response:', res.data);
    } catch(error) { 
        console.log("Error occurred:", error.message);
    }
};

const submitBtn = document.querySelector(".loginbtn");
submitBtn.addEventListener("click", function () {
    sendData(obj);
});
