const token = localStorage.getItem("ACCESS_TOKEN");

async function getUser() {
  return await fetch("https://login.sintetik.xyz:3001/account/getUserDetails", {
    method: "GET",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    }),
    credentials: "same-origin",
  })
    .then((response) => {
      // console.log(response);
      return response.json();
    })
    .then((json) => {
      // console.log(json.user_details[0]);
      return json.user_details[0];
    });
}

async function updateUser() {
  return await fetch("https://login.sintetik.xyz:3001/account/editUserDetails", {
    method: "POST",
    headers: new Headers({
      Authorization: "Basic " + btoa("username:password"),
      "Content-Type": "application/x-www-form-urlencoded",
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json.message;
    });
}

export { getUser, updateUser };
