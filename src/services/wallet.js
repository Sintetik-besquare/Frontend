const ENDPOINT_BASE = "http://localhost:3001";

async function getBalance() {
  return await fetch(`${ENDPOINT_BASE}/account/getBalance`, {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("ACCESS_TOKEN")}`,
    },
    method: "GET",
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => {
      console.log("json.balance")
      console.log(json.balance);
      return json.balance;
    });
}

async function resetBalance(reset_balance) {
  return await fetch(`${ENDPOINT_BASE}/account/resetBalance`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${window.localStorage.getItem("ACCESS_TOKEN")}`,
    },
    body: JSON.stringify({ reset_balance }),
    method: "POST",
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => {
      console.log(json);
      return json.balance;
    });
}

export { getBalance, resetBalance };
