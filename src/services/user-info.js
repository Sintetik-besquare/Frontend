const ENDPOINT_BASE = "http://localhost:3001";

async function getUserDetails() {
  return await fetch(`${ENDPOINT_BASE}/account/getUserDetails`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("ACCESS_TOKEN")}`,
    },
  })
    .then((response) => {
      //   console.log(response);
      return response.json();
    })
    .then((json) => {
      console.log(json.user_details[0]);
      return json.user_details[0];
    });
}

async function editUserDetails(body) {
  return await fetch(`${ENDPOINT_BASE}/account/editUserDetails`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("ACCESS_TOKEN")}`,
      "Content-Type": "application/json",
    },
    body: body,
  }).then(console.log(body));
}

async function passwordReset() {
  return await fetch(`${ENDPOINT_BASE}/user/password-reset`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("ACCESS_TOKEN")}`,
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => {
      console.log(json);
      return json;
    });
}

export { getUserDetails, editUserDetails, passwordReset };
