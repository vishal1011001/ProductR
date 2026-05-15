import { useState, useRef } from "react";

function LoginPage({ setIsLoggedIn }) {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleKeyDown = (e, index) => {
    // Move to previous input on backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="w-screen h-screen grid grid-cols-2">
      <div className="flex items-center justify-center pl-40">
        <img src='./login-img.png'></img>
      </div>
      <div className="flex items-center justify-center pr-40">
        <div className="flex flex-col items-center justify-center p-6 bg-white min-h-[300px]">
          <h1 className="text-[28px] font-bold text-[#1e266d] mb-10">
            Login to your Productr Account
          </h1>

          <div className="w-full max-w-md">
            <label className="block text-gray-500 text-sm font-semibold mb-3">
              Enter OTP
            </label>

            <div className="flex justify-between gap-2 mb-8">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  ref={(el) => (inputRefs.current[index] = el)}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-12 h-14 border border-gray-300 rounded-lg text-center text-xl font-bold focus:border-[#1e266d] focus:ring-1 focus:ring-[#1e266d] outline-none transition-all"
                />
              ))}
            </div>

            <button 
              onClick={handleLogin}
            className="w-full bg-[#0a1172] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#080d5a] transition-colors mb-6">
              Enter your OTP
            </button>

            <p className="text-center text-gray-400 font-medium">
              Didnt recive OTP ? <span className="text-[#1e266d] cursor-pointer hover:underline font-bold">Resend</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default LoginPage;