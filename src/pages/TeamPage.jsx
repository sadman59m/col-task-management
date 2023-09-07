/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { useRouteLoaderData } from "react-router-dom";
import Team from "../components/teamItem/Team";

const TeamPage = () => {
  const teamId = useRouteLoaderData("team-details");
  console.log(teamId);
  return <Team teamId={teamId} />;
};

export default TeamPage;

export function loader({ request, params }) {
  const id = params.teamId;

  return id;
}
