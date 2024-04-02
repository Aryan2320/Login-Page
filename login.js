let input1 = document.querySelector(".emailbtn");
let input2 = document.querySelector(".emailbtn2");
let obj = {};

let formData = document.querySelector("#registration");
formData.addEventListener("submit", function (e) {
    e.preventDefault();
});

input1.addEventListener("change", function (e) {
    obj["Id"] = e.target.value;
    localStorage.setItem(Object.keys(obj)[0], obj["Id"]);
});

input2.addEventListener("change", function (e) {
    obj["Password"] = e.target.value;
    localStorage.setItem(Object.keys(obj)[1], obj.Password);
});

let loginButton = document.querySelector(".loginbtn");
loginButton.addEventListener("click", function () {
    sendData(obj);
});

window.addEventListener("load", function (e) {
    const retriveId = localStorage.getItem("Id");
    const retrivePassword = localStorage.getItem("Password");

    if (retriveId && input1) {
        input1.value = retriveId;
    }
    if (retrivePassword && input2) {
        input2.value = retrivePassword;
    }
});


const sendData = async (formData) => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    input1.value = ''
    input2.value = ''
    localStorage.clear();
    
};
