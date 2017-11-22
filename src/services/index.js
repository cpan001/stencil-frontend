//RESTFUL functions
function post(url, postData) {
  return fetch(url, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(postData)
  }).then(res => res.json());
}

//Specific action functions
export function createUser(postData) {
  return post("http://localhost:3000/api/v1/signup", postData);
}
