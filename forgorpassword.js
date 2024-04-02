const inputDetail = document.querySelector(".inputchild");
let obj = {};

inputDetail.addEventListener("change", function (event) {
    obj["Username"] = event.target.value;
    localStorage.setItem(Object.keys(obj)[0], obj.Username);

});

window.addEventListener("load", function () {
    const savedUsername = localStorage.getItem("Username");

    if (savedUsername && inputDetail) {
        inputDetail.value = savedUsername;
    }
});

const submitFun = async (obj) => {
    let rawData = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (!rawData.ok) {
        throw new error("Error occured")
    }
    inputDetail.value = ''
    localStorage.clear();
};

const submitBtn = document.querySelector(".loginbtn");
submitBtn.addEventListener("click", function () {
    submitFun(obj);
})
submitBtn.addEventListener("click",function () {
      if(inputDetail.value == ''){
        alert("Please enter your details")
      }
      else{
        alert("Link has been send to your Email Id")
      }
})


const form2 = document.querySelector(".userForm");
form2.addEventListener("submit", function (e) {
    e.preventDefault();
})




