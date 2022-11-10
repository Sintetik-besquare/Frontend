//connect to resource
async function getHistoricalFeed() {
  return await fetch("http://localhost:3002/feed/historical", {
    method: "get",
    headers: new Headers({
      Authorization: "Basic " + btoa("username:password"),
      "Content-Type": "application/x-www-form-urlencoded",
    }),
  })
    .then((response) => {
      // console.log(response);
      return response.json();
    })
    .then((json) => {
      // console.table(json.message);
      return json.message;
    });
}

export { getHistoricalFeed };
