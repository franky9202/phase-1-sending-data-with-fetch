
function submitData(name, email){
  const formData = {
    name : "Steve", 
    email: "steve@steve.com"
  }
  
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  })
      .then(response => response.json())
      .then(object => {
        document.body.append(object.id)
        console.log(object.id)
      })
      .catch(error => {
        alert(error.message)
        document.body.append(error.message)

      })
  
}

