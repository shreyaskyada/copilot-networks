const UtilityConstruction = () => {
  return (
    <section>
      {/* <h1 className="mx-auto max-w-6xl px-10 py-[50px] text-3xl font-bold md:px-0">
        Softwares For Utility Construction.
      </h1> */}
      <section className="bg-[#edf2e9]">
        <section className="relative overflow-hidden px-[30px] py-[30px] md:py-20 lg:px-24">
          <div className="mx-auto w-[90%] max-w-6xl p-4 px-0 py-8">
            <div className="flex flex-col items-center justify-between gap-5 md:flex-row md:gap-10">
              <div className="flex flex-col gap-20 md:w-[60%]">
                <div>
                  {/* <h1 className="mb-11 text-[45px]">Software</h1> */}
                  <img
                    src="/rus2BillLogo.png"
                    alt="rus2bill logo"
                    className="h-[40px] md:h-[50px]"
                  />
                  <p className="mt-[40px] mb-4 font-bold text-[#14A756]">
                    SOFTWARE AS A SERVICE
                  </p>
                  <p className="mb-6 max-w-[400px] leading-[40px] text-gray-600">
                    RUS2Bill Supports Rapid Invoicing of Construction Projects
                    with improved accuracy by allowing for real-time recording
                    Field Progress.
                  </p>
                  {/* <a
                    href="https://rus2bill.com/"
                    target="_blank"
                    className="mt-4 inline-flex items-center rounded-full bg-[#14A756] px-6 py-2 text-white transition"
                  >
                    Website →
                  </a> */}
                </div>
              </div>
              <div className="relative mt-6 md:mt-0 md:w-[60%]">
                <img
                  src="/constructoin_softwares/rus2bill2.png"
                  alt="Utility Construction"
                  className="h-auto w-full rounded-[20px]"
                />
                <div className="absolute right-0 bottom-0 flex h-[80px] w-[80px] translate-x-[40%] translate-y-[40%] rotate-[15deg] items-center justify-between rounded-full bg-[#14A756] p-1 text-center text-[10px] font-bold text-white md:h-[100px] md:w-[100px] md:translate-x-[50%] md:translate-y-[50%] md:text-[15px]">
                  15 Days FREE TRIAL
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default UtilityConstruction;
