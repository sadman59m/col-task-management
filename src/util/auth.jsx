function getToken() {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  console.log(token);
  return token;
}

export function loader() {
  const token = getToken();

  return token;
}
