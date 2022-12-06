const ENDPOINT_BASE = "https//localhost:3001";

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
  try {
    const res = await fetch(`${ENDPOINT_BASE}/account/editUserDetails`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const json = await res.json();
    console.log(json);
  } catch (error) {
    throw new Error(error);
  }
  // if (!res.ok) {
  //   console.log("json errors", json.errors);
  // }
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
