import React from "react";
const ENDPOINT_BASE = "http://localhost:3001";
export function useLoader(provider, initial = null, deps = []) {
  const [value, setValue] = React.useState(initial);
  React.useEffect(
      () => provider.then(setValue).catch(setValue),
      // eslint-disable-next-line react-hooks/exhaustive-deps
    [setValue, ...deps]
  );
  return value;
}

export async function performSignup(email, password) {
  let res = await fetch(`${ENDPOINT_BASE}/user/signup`, {
    headers: { "Content-Type": "application/json" },
    body:JSON.stringify({email,password}),method:"POST"
  });
  if(!res.ok){
    throw new Error("Request is failed with HTTP code "+res.status);
  }
  let jsonRes=await res.json();
  if(!('token' in jsonRes)){
    throw new Error("token not in response :(")
  }
  return jsonRes.token;
}


export async function performLogin(email, password) {
  let res = await fetch(`${ENDPOINT_BASE}/user/login`, {
    headers: { "Content-Type": "application/json" },
    body:JSON.stringify({email,password}),method:"POST"
  });
  if(!res.ok){
    throw new Error("Request is failed with HTTP code "+res.status);
  }
  let jsonRes=await res.json();
  if(!('token' in jsonRes)){
    throw new Error("token not in response :<")
  }
  return jsonRes.token;
}
