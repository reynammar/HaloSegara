import HeaderLeaderBoard from "../components/organisms/HeaderLeaderboard";
import LeaderboardList from "../components/organisms/LeaderboardList";
import LeaderBoardPos from "../components/organisms/LeaderboardPos";

const LeaderBoard = () => {
  return (
    <main className="font-poppins text-black">
        <HeaderLeaderBoard/>
        <LeaderBoardPos/>
        <LeaderboardList/>
    </main>
  );
};

export default LeaderBoard;
