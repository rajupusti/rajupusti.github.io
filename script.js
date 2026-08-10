document.getElementById("send-btn").addEventListener("click", function() {
    let inputElement = document.getElementById("message-input");
    let emailInput = document.getElementById("email-input")
    let email = emailInput.value;
    let message = inputElement.value;
    let data = {email,message}
   
    console.log(data);
    const url = "https://script.google.com/macros/s/AKfycbx7DcyopCwKC4TUiG0LqU4mDZpyNrEUdBdaJYHlOgxRlG2YMByoT6vcCDa1nJyuf702/exec"

    fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/x-www-form-urlencoded"
  },
        body: JSON.stringify(data);
        cors: "no-cors"
    })
   
    .then(result => {
    console.log("Message sent successfully:", result.status);

    if (result.status === 200) {
        inputElement.value = "";

        window.location.href = "tel:+919635848414";
    }
 })
 })
 