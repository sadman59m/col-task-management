export function emailValidator(email) {
  return !email.includes("@") || email.length < 0 ? true : false;
}

function getUsers() {
  const users = JSON.parse(localStorage.getItem("users"));
  return users;
}

export function detectUser(email) {
  const users = getUsers();
  if (!users) {
    return false;
  }
  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    return true;
  } else {
    return false;
  }
}

export function passwordChecker(email, password) {
  const users = getUsers();
  if (!users) {
    return false;
  }
  const existingUser = users.find((user) => user.email === email);

  if (existingUser && existingUser.password === password) {
    return true;
  } else {
    return false;
  }
}
