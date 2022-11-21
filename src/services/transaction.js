async function getTransactionHistory() {
    return await fetch("http://localhost:3001/account/getTransaction", {
      method: "GET",
      headers: new Headers({
        Authorization: "Basic " + btoa("username:password"),
        "Content-Type": "application/x-www-form-urlencoded",
      }),
    })
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((json) => {
        console.log(json)
        return json;
      });
  }
  
  export { getTransactionHistory };
  