async function getHistoricalFeed() {
  return await fetch("http://localhost:3002/feed/historical", {
    method: "GET",
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

export { getHistoricalFeed };
