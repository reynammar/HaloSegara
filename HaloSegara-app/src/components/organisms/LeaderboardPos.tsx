import avatar from "../../assets/Avatar.png";
import Streak from "../../assets/streak.svg";

const LeaderBoardPos = () => {
  return (
    <section className="flex flex-col gap-8 justify-center mt-32 mb-16 px-14">
      <div className="flex gap-4 justify-center items-end">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col gap-3">
            <img
              src={avatar}
              alt="Avatar User"
              className="rounded-full w-[136px]"
            />
            <div className="flex flex-col items-center">
              <h5 className="font-semibold text-xl">raflysyah</h5>
              <p className="text-navlink text-neutral300">1430 poin</p>
            </div>
          </div>
          <div className="font-fraunces font-bold italic text-5xl text-white pt-10 bg-gradient-to-b from-primary500 to-white w-[204px] h-[263px] text-center rounded-ss-[52px] rounded-se-[52px]">
            2
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="relative flex flex-col gap-3">
            <img
              src={Streak}
              alt="Streak fire"
              className="absolute z-10 -top-20"
            />
            <img
              src={avatar}
              alt="Avatar User"
              className="rounded-full w-[136px] z-20"
            />
            <div className="flex flex-col items-center">
              <h5 className="font-semibold text-xl">azkarehan</h5>
              <p className="text-navlink text-neutral300">1500 poin</p>
            </div>
          </div>
          <div className="font-fraunces font-bold italic text-5xl text-white pt-10 bg-gradient-to-b from-primary500 to-white w-[204px] h-[323px] text-center rounded-ss-[52px] rounded-se-[52px]">
            1
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-col gap-3">
            <img
              src={avatar}
              alt="Avatar User"
              className="rounded-full w-[136px]"
            />
            <div className="flex flex-col items-center">
              <h5 className="font-semibold text-xl">vannypr</h5>
              <p className="text-navlink text-neutral300">1321 poin</p>
            </div>
          </div>
          <div className="font-fraunces font-bold italic text-5xl text-white pt-10 bg-gradient-to-b from-primary500 to-white w-[204px] h-[176px] text-center rounded-ss-[52px] rounded-se-[52px]">
            3
          </div>
        </div>
      </div>
      <div className="w-full h-0.5 bg-neutral100"></div>
    </section>
  );
};

export default LeaderBoardPos;
