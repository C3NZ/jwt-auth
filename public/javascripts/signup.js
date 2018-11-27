function signupViaAjax() {
    const username = document.querySelector('#username') 
    const password = document.querySelector('#password')

    //Grab the form data from our user 
    const formData = {
        username: username.value,
        password: password.value
    }

    //config options for fetch to make a request to our server
    options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    }

    //Make post request
    fetch("/sign-up", options)
        .then(function(data) {
            console.log(data)
        })
        .catch(function(error) {

        })
}
