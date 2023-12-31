export function getUserData(email) {
  const users = JSON.parse(localStorage.getItem("users"));
  if (users) {
    const existingUser = users.find((user) => user.email === email);
    return existingUser;
  }
  return null;
}

export function setUserData(userData) {
  console.log(userData);
  const users = JSON.parse(localStorage.getItem("users"));
  if (users) {
    let updatedUsers = [...users];
    const existingUserIndex = updatedUsers.findIndex(
      (user) => user.email === userData.email
    );
    const existingUser = updatedUsers[existingUserIndex];
    let updatedUser = { ...existingUser };
    updatedUser = userData;
    updatedUsers[existingUserIndex] = updatedUser;
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  }
  return null;
}

export function getAllUsers() {
  const users = JSON.parse(localStorage.getItem("users"));
  if (users) {
    return users;
  } else {
    return null;
  }
}
