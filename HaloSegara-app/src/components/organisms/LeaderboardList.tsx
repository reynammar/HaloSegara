import { CircleArrowRight } from "lucide-react";
import avatar from "../../assets/avatar.png";
import Button from "../atoms/Button";
import { useNavigate } from "react-router";

const leaderboardData = [
  { rank: 4, username: "naufaltheking", points: 1250 },
  { rank: 5, username: "michaellim", points: 1180 },
  { rank: 6, username: "alifiansyah", points: 1110 },
  { rank: 7, username: "zevanya_", points: 1050 },
  { rank: 8, username: "revonn", points: 990 },
  { rank: 9, username: "davidpratama", points: 940 },
  { rank: 10, username: "catherinem", points: 900 },
];

const LeaderboardItem = ({
  rank,
  username,
  points,
}: {
  rank: number;
  username: string;
  points: number;
}) => (
  <div className="relative flex w-full">
    <div className="absolute rounded-full px-6 py-4 border-2 border-primary500 bg-primary50 text-primary500 font-semibold text-2xl top-2 -left-6">
      {rank}
    </div>
    <div className="flex gap-4 rounded-[52px] px-12 py-2 shadow-[0px_0px_5px_3px_rgba(107,107,107,0.30)] w-full">
      <img
        src={avatar}
        alt="Avatar User"
        className="rounded-full w-[68px] ml-2"
      />
      <div className="flex flex-col justify-center">
        <h5 className="font-semibold text-2xl">{username}</h5>
        <p className="text-sm">{points} poin</p>
      </div>
    </div>
  </div>
);

const LeaderboardList = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col gap-20 mb-32 px-32">
      <div className="flex flex-col gap-4">
        {leaderboardData.map((user) => (
          <LeaderboardItem
            key={user.rank}
            rank={user.rank}
            username={user.username}
            points={user.points}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          onClick={() => navigate("/login")}
          className="bg-primary500 hover:bg-primary700 transition-all duration-300 ease-in-out text-white font-bold rounded-[6px] w-fit flex items-center py-3 px-6 text-base cursor-pointer"
          type="button"
        >
          Gabung Sekarang dan Masuk Leaderboard!
          <CircleArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </section>
  );
};

export default LeaderboardList;
