let userList = [];

// var name = document.getElementById('name')
// var email = document.getElementById('email')
// var studentID = document.getElementById('studentID')
// var form = document.getElementById('form')


function submitForm() {

    let data = {
        // name: document.getElementById('name').value,
        // email: document.getElementById('email').value,
        // studentID: document.getElementById('studentID').value
        
        
    }

    // Saving new form submit data
    userList.push(data);


    localStorage.setItem("userList", JSON.stringify(userList));


}


// You can get the userlist using

let updatedUserList = JSON.parse(localStorage.getItem("userList"));

for (let i = 0 ; i < updatedUserList.length ; i++) {
    
}

