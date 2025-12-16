import ReviewCard from "../../../components/ReviewCard";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center gap-28">
      {/* ---- review ---- */}
      <div className="flex flex-col px-4 md:px-6 lg:px-12 xl:px-24 w-full gap-y-14 font-inter">
        <div>
          <h3 className="text-2xl md:text-3xl lg:text-[40px] text-[#282D30] font-semibold text-center tracking-tight">
            Trusted By Leading Doctors
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center gap-y-5">
          {[1, 2, 3, 4].map((_, i) => (
            <ReviewCard key={i} bg={"#008060"} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
