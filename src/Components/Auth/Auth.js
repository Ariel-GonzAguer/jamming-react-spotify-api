import React from'react'




export default function Auth ({clienteID}) {

  var client_id = {clienteID};
  var redirect_uri = 'http://localhost:3000//callback';
  var stateKey = [];
  
function generateRandomString(length) {
  return length * Math.random();

}

  var state = generateRandomString(16);
  
  localStorage.setItem(stateKey, state);
  var scope = 'user-read-private user-read-email';
  
  var url = 'https://accounts.spotify.com/authorize';
  url += '?response_type=token';
  url += '&client_id=' + encodeURIComponent(client_id);
  url += '&scope=' + encodeURIComponent(scope);
  url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
  url += '&state=' + encodeURIComponent(state);
  

return (
<>
</>
)
}