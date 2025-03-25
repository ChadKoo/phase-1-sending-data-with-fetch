function submitData(name, email){
    return fetch("http://localhost:3000/users",{
        method : 'POST',
        headers :{
            "content-type" : "application/json",
                "Accept" : "application/json",
        },
        body: JSON.stringify({
            name : name,
            email : email
        })    
    })
    .then(res => res.json())
    .then(user => {
        let userId = document.createElement("p")
        userId.innerHTML = `id ${user.id}`
        document.body.appendChild(userId)
            })
    .catch(error => {
        let errorElement = document.createElement("p");
        errorElement.innerHTML = `Error: ${error.message}`;  
        document.body.appendChild(errorElement);     
    })
}





