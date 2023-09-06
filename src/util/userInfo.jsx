export function getUserData(email) {
  const users = JSON.parse(localStorage.getItem("users"));
  if (users) {
    const existingUser = users.find((user) => user.email === email);
    return existingUser;
  }
}
