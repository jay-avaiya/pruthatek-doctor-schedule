import { IoIosCloudUpload } from "react-icons/io";
import ReviewCard from "../../../components/ReviewCard";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi2";
import { FaImage } from "react-icons/fa";
import { MdShield } from "react-icons/md";

const HomePage = () => {
  const pms = [
    {
      title: "Secure Architecture",
      desc: "HIPPA-3 Compliance Certified",
      icon: <MdShield className="size-8 text-[#007BFF]" />,
    },
    {
      title: "Manage Appointment Records Digitally",
      desc: "Store Unlimited Patient Data in Secure Cloud Storage",
      icon: <img src="/file.png" className="size-7" />,
    },
    {
      title: "Manage Payments",
      desc: "Store Patients Audio recordings , Video Recordings and Photos",
      icon: <FaImage className="size-8 text-[#007BFF]" />,
    },
    {
      title: "Secure Cloud Storage",
      desc: "SSL encryption Ensure All Data Protection",
      icon: <IoIosCloudUpload className="size-8 text-[#007BFF]" />,
    },
    {
      title: "Quick Support",
      desc: "Get Instant Support Via Google Meer & Whatsapp",
      icon: <BsChatLeftDotsFill className="size-8 text-[#007BFF]" />,
    },
    {
      title: "Real Time Analysis",
      desc: "Hospital Doctors can Write Prescription Direct on Tablet",
      icon: <HiDocumentText className="size-8 text-[#007BFF]" />,
    },
  ];

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

      {/* ---- IMS ---- */}
      <div className="flex flex-col px-4 md:px-6 lg:px-12 xl:px-24 gap-y-5 md:gap-y-10 lg:gap-y-14 font-inter">
        <div>
          <p className="text-sm md:text-[16px] font-semibold text-[#007BFF]">
            Why Pruthatek’s Institute Management System?
          </p>
          <h3 className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-[#333333]">
            A lot more than you can imagine from a IPD software
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-14">
          {pms.map((pms, index) => (
            <div
              key={index}
              className="shadow-[0_6px_18px_-4px_rgba(0,0,0,0.15)] border-8 border-white rounded-xl w-full max-w-[380px] h-[256px] space-y-4 bg-white p-4"
            >
              <div className="w-20 h-20 rounded-[10px] bg-[#EBF2F6] flex items-center justify-center">
                {pms.icon}
              </div>

              <h3 className="text-lg text-[#333333] font-bold leading-[25px]">
                {pms.title}
              </h3>

              <p className="text-[#A1A3B2] text-[16px] font-medium leading-[25px] w-[80%]">
                {pms.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Review 2  */}
      <div className="flex flex-col px-4 md:px-6 lg:px-12 xl:px-24 w-full gap-y-14 font-inter">
        <div>
          <p className="text-sm md:text-[16px] text-[#007BFF] font-semibold">
            Happy Customers
          </p>
          <h3 className="text-2xl md:text-3xl lg:text-[40px] text-[#282D30] font-semibold">
            Trusted By 30,000+ CA and Tax Practitioners Accross India
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center gap-y-5">
          <ReviewCard bg={"#007BFF"} />
          <ReviewCard bg={"#FB8C5C"} />
          <ReviewCard bg={"#007BFF"} />
          <ReviewCard bg={"#FB8C5C"} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
