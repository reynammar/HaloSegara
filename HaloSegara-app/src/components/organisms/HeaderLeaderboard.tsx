const HeaderLeaderBoard = () => {
  return (
    <section className="flex flex-col justify-center items-center rounded-ee-[100px] rounded-es-[100px] overflow-hidden bg-primary50 h-[331px]">
      <div className="flex flex-col justify-center items-center text-center text-white px-4 mt-16">
        <h1 className="font-bold text-[40px] leading-tight max-w-[700px] text-black">
          Leaderboard
        </h1>
        <p className="font-inter text-base text-neutral800 max-w-[750px] leading-relaxed">
          Lihat Siapa yang Berkontribusi Terbesar untuk Pantai Bersih!
        </p>
      </div>
    </section>
  );
};

export default HeaderLeaderBoard;
