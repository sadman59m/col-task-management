export function getLocalStorageTeams() {
  const localTeams = JSON.parse(localStorage.getItem("teams"));
  if (localTeams) {
    return localTeams;
  } else {
    return null;
  }
}
