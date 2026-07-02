import { useSelector } from "react-redux";
import { removeItem } from "../../Redux/Slice";
import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/Slice";



const OrderSummary = () => {

    const dispatch= useDispatch();



    const selector = useSelector((state)=>state.cart.value)
    console.log(selector);
  return (
    <div>
      <h3
        className="text-xl font-bold flex items-center justify-center gap-2 mb-4"
        style={{ color: "#c9a84c", fontFamily: "'Cormorant Garamond', serif" }}
      >
        <span>📃</span> Order Summary
      </h3>

      

      {/* Service Type Row */}
      <div className="flex items-center justify-between py-4" style={{ borderTop: "1px solid #f0ebe0" }}>
        
        <span className="text-sm font-semibold text-gray-800">Service Type: </span>
         <div className="flex items-center gap-2">
          <span className="text-sm" style={{ color: "#5c3d20" }}>
            {selector}
          </span>
          <button  onClick={() => {dispatch(removeItem(1));  }} className="text-red-400 hover:text-red-600 text-base leading-none">✕</button>
        </div> 
      </div>
       <hr style={{ borderColor: "black" }} /> 
      {/* Garments Section */}
      {/* <div className="py-4" style={{ borderBottom: "1px solid #f0ebe0" }}>
        <p className="text-sm font-semibold text-gray-800 mb-3">Garments:</p>
        <div className="flex flex-col gap-3"> */}
          {/* Single garment row — duplicate as needed */}
          {/* <div
            className="rounded-xl px-4 py-3"
            style={{ background: "#f9f6f0", border: "1px solid #ede5d0" }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-800">Thobe</span>
              <button className="text-red-400 hover:text-red-600 text-sm">✕</button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  className="w-7 h-7 rounded-md text-sm font-bold flex items-center justify-center"
                  style={{ border: "1.5px solid #c9a84c", color: "#c9a84c", background: "#fff" }}
                >
                  -
                </button>
                <span className="text-sm font-semibold text-gray-700 w-5 text-center">2</span>
                <button
                  className="w-7 h-7 rounded-md text-sm font-bold flex items-center justify-center"
                  style={{ border: "1.5px solid #c9a84c", color: "#c9a84c", background: "#fff" }}
                >
                  +
                </button>
              </div>
              <span className="text-sm font-semibold" style={{ color: "#5c3d20" }}>20 QAR</span>
            </div>
          </div> */}
        {/* </div>
      </div> */}

      {/* Coupon */}
      <div className=" flex flex-col pt-4 bg-[#F9FAFB]">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter coupon code"
            className="flex-1 px-3 py-1.5 text-[12px] rounded-lg outline-none text-gray-700 placeholder-gray-400"
            style={{ border: "1px solid lightgrey" }}
          />
          <button
            className="px-4 py-0 rounded-lg text-sm font-medium text-[12px] text-white whitespace-nowrap bg-[#E6D599]" 
          >
            Apply Coupon
          </button>
        </div>
        <div className="flex justify-between items-center pt-4">
        <span className="text-base font-bold text-gray-800">Final Price</span>
        {/* <span className="text-base font-bold" style={{ color: "#c9a84c" }}>20 QAR</span> */}
        <span className=" text-[#D4AF37] font-bold ">0 QR</span>
      </div>
      </div>

      {/* Final Price */}
      
    </div>
  );
};

export default OrderSummary;