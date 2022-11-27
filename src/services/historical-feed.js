const ENDPOINT_BASE = "http://api.sintetik.xyz:3002";

async function getHistoricalFeed() {
  return await fetch(`${ENDPOINT_BASE}/feed/historical/vol100`, {
    method: "GET",
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => {    
      console.log("json.message");
      console.log(json.message);
      return json.message;
    });
}

export { getHistoricalFeed };
