import AlertSVG from "../../../../../../assets/AlertSVG";

const UnderConstructionCard = () => {
  return (
    <div className="mx-auto w-[300px] rounded-lg border border-[#F5A81C] bg-[#FFF5D3] px-4 py-3 text-center shadow-md">
      <div className="mb-2 flex justify-center">
        <AlertSVG className="h-8 w-8 text-[#EE7724]" />
      </div>
      <p className="mb-2 text-[14px] font-semibold text-[#EE7724] md:text-[18px]">
        Website Under-construction
      </p>
      <p className="text-[12px] text-[#EE7724] md:text-[14px]">
        Please Contact Us For More Information at{" "}
        <a
          href="mailto:sales@copilotnet.com"
          className="font-semibold text-orange-600 underline"
        >
          Sales@copilotnet.com
        </a>
      </p>
    </div>
  );
};

export default UnderConstructionCard;
