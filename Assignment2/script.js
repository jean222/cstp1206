// let userInfo = [];

// function userForm() {
//     let userData = {
//         name: "",
//         email: "",
//         studentID: ""
//     }

//     userInfo.push(userData)
// }

const name = document.getElementById('name')
const email = document.getElementById('email')
const stduentID = document.getElementById('studentID')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (x) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name should be required')
    }

    if (messages.length > 0) {
        x.preventDefault()
        errorElement.innerText = messages.join(', ' )
    }
})