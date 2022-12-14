const ENDPOINT_BASE = "https://login.sintetik.xyz";

async function getUserDetails() {
  return await fetch(`${ENDPOINT_BASE}/account/getUserDetails`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("ACCESS_TOKEN")}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        return;
      }
      return response.json();
    })
    .then((json) => {
      return json.user_details[0];
    });
}

async function editUserDetails(body) {
  const res = await fetch(`${ENDPOINT_BASE}/account/editUserDetails`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
      "Content-Type": "application/json",
    },
    body: body,
  });
  const json = await res.json();
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
