const ENDPOINT_BASE = "http://localhost:3001";

async function getTransaction() {
  return await fetch(`${ENDPOINT_BASE}/account/getTransaction`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("ACCESS_TOKEN")}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
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
      return response.json();
    })
    .then((json) => {
      return json.contract_summary;
    });
}

export { getTransaction, getContractSummary };
