const ENDPOINT_BASE = "https://login.sintetik.xyz:3001";

async function getTransaction() {
  return await fetch(`${ENDPOINT_BASE}/account/getTransaction`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("ACCESS_TOKEN")}`,
    },
  })
    .then((response) => {
      // console.log(response);
      return response.json();
    })
    .then((json) => {
      // console.log(json.transaction);
      return json.transaction;
    });
}

async function getContractSummary() {
    return await fetch(`${ENDPOINT_BASE}/account/getContractSummary`, {
      method: "GET",
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
  
export { getTransaction, getContractSummary };
