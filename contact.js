// function sendEmail(){
//     Email.send({
//         Host : "smtp.yourisp.com",
//         Username : "reshilobeth@gmail.com",
//         Password : "obeth5510",
//         To : 'reshilobeth5510@gmail.com',
//         From : document.getElementById('email').value,
//         Subject : "New Contact form enquiry",
//         Body : "Name" + document.getElementById('name').value
//             + "<br> Email"+ document.getElementById('email').value
//             + "<br> Phone no:"+ document.getElementById('phone').value
//             + "<br> message:"+ document.getElementById('message').value
//     }).then(
//     message => alert('message')
//     );
// }

const submitbtn = document.querySelector('.submit-btn')
console.log(submitbtn)

submitbtn.addEventListener('click',()=>{
    submitbtn.style.backgroundColor = '#eab42c'
})

