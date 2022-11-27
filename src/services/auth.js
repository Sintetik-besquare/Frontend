import React, { useEffect } from "react";
const ENDPOINT_BASE = "https://login.sintetik.xyz:3001";
function useLoader(provider, initial = null, deps = []) {
  const [value, setValue] = React.useState(initial);
  useEffect(
    () => provider.then(setValue).catch(setValue),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setValue, ...deps]
  );
  return value;
}

async function performSignup(email, password, confirm_password) {
  let res = await fetch(`${ENDPOINT_BASE}/user/signup`, {
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, confirm_password }),
    method: "POST",
  });
  if (!res.ok) {
    console.log("Error " + res.status + ": " + res.statusText);
  }
  let jsonRes = await res.json();
  if (!("token" in jsonRes)) {
    return jsonRes.errors;
  } else {
    return jsonRes.token;
  }
}

async function performSignin(email, password) {
  let res = await fetch(`${ENDPOINT_BASE}/user/login`, {
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    method: "POST",
  });
  if (!res.ok) {
    console.log("Error " + res.status + ": " + res.statusText);
  }
  let jsonRes = await res.json();
  if (!("token" in jsonRes)) {
    return jsonRes.errors;
  } else {
    return jsonRes.token;
  }
}

export { useLoader, performSignup, performSignin };
