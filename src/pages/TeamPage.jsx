/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */

import { useRouteLoaderData } from "react-router-dom";
import Team from "../components/teamItem/Team";
import { getLocalStorageTeams } from "../util/teamInfo";

const TeamPage = () => {
  const team = useRouteLoaderData("team-details");
  console.log(team);
  // const dispatch = useDispatch();
  // const stateTeams = useSelector((state) => state.teams);

  // useEffect(() => {
  //   dispatch(getTeams());
  // }, [dispatch]);

  // const team = stateTeams.teams.find((team) => teamId === team.teamId);

  // console.log(team);
  // console.log(teamId);

  return <Team team={team} />;
};

export default TeamPage;

export function loader({ request, params }) {
  const id = params.teamId;
  // get teams stored in the local storage. imitating fetch API
  const storedTeams = getLocalStorageTeams();
  const targetTeam = storedTeams.find((team) => team.id === id);

  // if target team with the id exists
  if (targetTeam) {
    return targetTeam;
  } else {
    throw new Response(
      JSON.stringify({ message: "Invalid team id", statusCode: 421 })
    );
  }
}
