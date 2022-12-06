<<<<<<< HEAD
const ENDPOINT_BASE = "http://localhost:3001";
=======

const ENDPOINT_BASE = "https://login.sintetik.xyz";
>>>>>>> c6e6481ebea2aae87e1ea06b25938de83070db2f

async function getUserDetails() {
  return await fetch(`${ENDPOINT_BASE}/account/getUserDetails`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("ACCESS_TOKEN")}`,
    },
  })
    .then((response) => {
      //   console.log(response);
      if (!response.ok) {
        console.log(response.error);
        return;
      }
      return response.json();
    })
    .then((json) => {
      return json.user_details[0];
    });
}

async function editUserDetails(body) {
  const error_message = [];
  const res = await fetch(`${ENDPOINT_BASE}/account/editUserDetails`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
      "Content-Type": "application/json",
    },
    body: body,
  });
  const json = await res.json();
  error_message.push(json.errors);
  console.log("error_message", error_message);
  console.log("ERRORSSSS", json.errors);

  if (!res.ok) {
    return json.errors;
  }
}

async function passwordReset(body) {
  return await fetch(`${ENDPOINT_BASE}/user/password-reset`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("ACCESS_TOKEN")}`,
      "Content-Type": "application/json",
    },
    body: body,
  });
}

export { getUserDetails, editUserDetails, passwordReset };
