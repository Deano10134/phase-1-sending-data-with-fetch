// Add your code here
const formData = {
  dogName: "Byron",
  dogBreed: "Poodle",
};

// method: "POST" is missing from the object below
const configurationObject = {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  body: JSON.stringify(formData),
};

fetch("http://localhost:3000/dogs", configurationObject)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    console.log(object);
  })
  .catch(function (error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  });

function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ name: name, email: email }),
  });
}
function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ name, email }),
  })
    .then(response => response.json()) // parse response body
    .then(data => {
      const output = document.createElement('p');
      output.textContent = `New user ID: ${data.id}`;
      document.body.appendChild(output); // append ID to page
    })
    .catch(error => {
      const errorMsg = document.createElement('p');
      errorMsg.style.color = 'red';
      errorMsg.textContent = `Error: ${error.message}`;
      document.body.appendChild(errorMsg); // show error on page
    });
}