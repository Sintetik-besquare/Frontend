const ENDPOINT_BASE = "http://localhost:3002";

async function getHistoricalFeed() {
  return await fetch(`${ENDPOINT_BASE}/feed/historical/vol100`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {  
      return json.message;
    });
}

export { getHistoricalFeed };
