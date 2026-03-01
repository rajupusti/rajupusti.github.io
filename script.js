document.getElementById("cmd-send").addEventListener("click", function() {
    let data = document.getElementById("cmd-input").value;
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
        console.log("Command sent successfully:", result.status);
        //result is a object and result.status is 200
    })
    .catch(error => {
        console.error("Error sending command:", error);
    });

 });

