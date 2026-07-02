import { useState } from "react";
import Step2 from "./Step2";
import OrderSummary from "./Ordersummary";
import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/Slice";

const serviceTypes = [
  { icon: "👕", title: "Washing & Ironing", desc: "Complete washing with ironing" },
  { icon: "✨", title: "Washing, Ironing, and Perfume Services", desc: "Complete washing with ironing and perfume services" },
  { icon: "👔", title: "Dry Clean", desc: "Professional dry cleaning" },
];

const Step1 = () => {
  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);

  const totalSteps = 6;

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep((s) => s + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col pt-24 pb-10"
      style={{ background: "linear-gradient(135deg, #3b2a1a 0%, #6b5230 50%, #9e8055 100%)" }}
    >
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row items-start gap-6">

        {/* LEFT — Main Panel */}
        <div className="flex-1 h-[700px] min-w-0 w-full bg-white rounded-b-2xl overflow-hidden shadow-2xl flex flex-col relative">

          {/* Progress Bar */}
          <div className="absolute top-0 left-0 bg-white w-full h-2 rounded-t-2xl overflow-hidden">
            <div
              className="h-2 transition-all duration-500"
              style={{
                width: `${(currentStep / totalSteps) * 100}%`,
                background: "linear-gradient(90deg, #D4AF37, #c9a84c)",
              }}
            />
          </div>

          {/* Header */}
          <div className="px-8 py-7 text-center" style={{ background: "linear-gradient(135deg, #3b2a1a, #5c3d20)" }}>
            <p className="sm:text-xl font-light mb-1 uppercase" style={{ color: "#c9a84c" }}>
              AKOYA PREMIUM LAUNDRY
            </p>
            <p className="text-sm tracking-widest" style={{ color: "rgba(255,255,255,0.6)" }}>
              Step {currentStep} of {totalSteps}
            </p>
          </div>

          {/* Body */}
          <div className="p-8 flex-1 overflow-auto">
            {currentStep === 1 ? (
              <>
                <p className="text-sm font-medium text-gray-700 mb-6">Choose Service Type:</p>
               
               
                <div className="flex flex-wrap gap-4">
                  {serviceTypes.map((service, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setSelectedService(idx);
                        dispatch(addItem(service.title));
                      }}
                      className="flex-1 flex flex-col items-center text-center p-6 rounded-2xl cursor-pointer transition-all duration-200"
                      style={{
                        minWidth: "160px",
                        border: selectedService === idx ? "2px solid #c9a84c" : "1.5px solid #e8e0d0",
                        background: selectedService === idx ? "#fdf8ee" : "#fff",
                        boxShadow: selectedService === idx ? "0 4px 20px rgba(201,168,76,0.2)" : "none",
                        transform: selectedService === idx ? "translateY(-3px)" : "none",
                      }}
                    >
                      <span className="text-4xl mb-3 block">{service.icon}</span>
                      <h4 className="text-sm font-semibold text-gray-800 mb-2 leading-snug">{service.title}</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{service.desc}</p>
                    </div>
                  ))}
                </div>



              </>
            ) : (
              <Step2 />
            )}
          </div>

          {/* Footer */}
          <div className="px-8 py-6 flex justify-end gap-3" style={{ borderTop: "1px solid #f0ebe0" }}>
            {currentStep > 1 && (
              <button
                onClick={handleBack}
                className="px-7 py-2.5 rounded-lg text-sm font-medium text-gray-500 bg-white hover:bg-gray-50 transition-all"
                style={{ border: "1.5px solid #d1d1d1" }}
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={selectedService === null && currentStep === 1}
              className="px-8 py-2.5 rounded-lg text-sm font-medium text-white transition-all duration-200"
              style={{
                background: selectedService === null && currentStep === 1 ? "#ccc" : "linear-gradient(135deg, #b8953f, #c9a84c)",
                cursor: selectedService === null && currentStep === 1 ? "not-allowed" : "pointer",
                opacity: selectedService === null && currentStep === 1 ? 0.5 : 1,
              }}
            >
              Next
            </button>
          </div>
        </div>

        {/* RIGHT — Order Summary */}
        <div className="w-full lg:w-[380px] xl:w-[320px] flex-shrink-0 bg-white rounded-[10px] shadow-2xl p-7">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Step1;