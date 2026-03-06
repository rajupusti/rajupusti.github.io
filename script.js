document.getElementById("cmd-send").addEventListener("click", function() {
    let inputElement = document.getElementById("cmd-input");
    let data = inputElement.value;
    if (data.trim() === "") {
       inputElement.placeholder = "please enter a message";
        return;
    }
    console.log(typeof(data));
    const url = "https://script.google.com/macros/s/AKfycbx7DcyopCwKC4TUiG0LqU4mDZpyNrEUdBdaJYHlOgxRlG2YMByoT6vcCDa1nJyuf702/exec"

    fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/x-www-form-urlencoded"
  },
        body: data,
        cors: "no-cors"
    })
   
    .then(result => {
        console.log("Message sent successfully:", result.status);
        //result is a object and result.status is 200
        inputElement.value = "";
        
    })
    .catch(error => {
        console.error("Error sending command:", error);
    });

 });

