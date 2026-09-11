import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import NexusLogo from '../../components/common/NexusLogo';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary login navigation
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#050B14] text-white flex flex-col relative overflow-hidden font-['Inter']">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

        {/* GRID */}
        <div className="absolute w-full h-[120%] -top-[10%] live-grid-bg animate-grid-move" />

        {/* PURPLE GLOW */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-700/20 blur-[120px] rounded-full animate-float-slow" />

        {/* CYAN GLOW */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-600/15 blur-[100px] rounded-full animate-float-fast" />

        {/* CENTER BLUE GLOW */}
        <div className="absolute top-[40%] left-[40%] w-[30vw] h-[30vw] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />

      </div>


      {/* ================= HEADER ================= */}
      <header className="relative z-10 w-full p-6 md:px-12">
        <NexusLogo className="scale-90 origin-left" />
      </header>


      {/* ================= MAIN ================= */}
      <main className="flex-1 flex items-center justify-center px-4 py-8 relative z-10 w-full">

        {/* ================= LOGIN CARD ================= */}
        <div
          className="
            w-full
            max-w-[520px]
            rounded-[32px]
            bg-[#0F172A]/85
            backdrop-blur-xl
            border
            border-gray-700/50
            shadow-2xl
            px-7
            py-9
            md:px-12
            md:py-10
            flex
            flex-col
            items-center
          "
        >

          {/* ================= SHIELD ICON ================= */}
          <div className="flex flex-col items-center mb-5">

            <div
              className="
                w-16
                h-16
                flex
                items-center
                justify-center
                rounded-full
                bg-blue-600
                text-white
                shadow-[0_4px_18px_rgba(37,99,235,0.45)]
                mb-3
              "
            >
              <ShieldCheck size={32} strokeWidth={2} />
            </div>


            {/* DOTS */}
            <div className="flex gap-1.5 items-center">

              <div className="w-3 h-1.5 rounded-full bg-gray-600/50" />

              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />

            </div>

          </div>


          {/* ================= HEADING ================= */}
          <h1 className="text-[28px] md:text-[30px] font-bold font-['Poppins'] text-white mb-1 text-center">
            Welcome Back
          </h1>


          <p className="text-gray-400 text-[13px] md:text-[14px] text-center mb-7">
            Log in to your account to continue.
          </p>


          {/* ============================================= */}
          {/* INNER CONTENT WRAPPER                         */}
          {/* THIS PREVENTS INPUTS FROM TOUCHING CARD EDGE */}
          {/* ============================================= */}

          <div className="w-full max-w-[400px] mx-auto">


            {/* ================= LOGIN FORM ================= */}
            <form
              onSubmit={handleLogin}
              className="w-full flex flex-col gap-5"
            >


              {/* ================= EMAIL ================= */}
              <div className="w-full text-left">

                <label
                  htmlFor="email"
                  className="block text-[14px] font-medium text-gray-300 mb-2"
                >
                  Email
                </label>


                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="
                    w-full
                    h-11
                    px-4
                    rounded-xl
                    bg-[#0B1120]/90
                    border
                    border-gray-600
                    text-white
                    text-[14px]
                    placeholder-gray-500
                    outline-none
                    focus:border-blue-500
                    focus:ring-1
                    focus:ring-blue-500
                    transition-all
                  "
                />

              </div>


              {/* ================= PASSWORD ================= */}
              <div className="w-full text-left">

                <label
                  htmlFor="password"
                  className="block text-[14px] font-medium text-gray-300 mb-2"
                >
                  Password
                </label>


                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="
                    w-full
                    h-11
                    px-4
                    rounded-xl
                    bg-[#0B1120]/90
                    border
                    border-gray-600
                    text-white
                    text-[14px]
                    placeholder-gray-500
                    outline-none
                    focus:border-blue-500
                    focus:ring-1
                    focus:ring-blue-500
                    transition-all
                  "
                />

              </div>


              {/* ================= REMEMBER + FORGOT ================= */}
              <div className="flex justify-between items-center w-full -mt-1">

                {/* REMEMBER */}
                <label className="flex items-center gap-2 cursor-pointer group">

                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="
                      w-4
                      h-4
                      rounded
                      border-gray-600
                      bg-[#0B1120]
                      text-blue-500
                      focus:ring-blue-500
                      cursor-pointer
                    "
                  />

                  <span className="text-[13px] text-gray-400 group-hover:text-gray-300 transition-colors">
                    Remember me
                  </span>

                </label>


                {/* FORGOT PASSWORD */}
                <a
                  href="#"
                  className="
                    text-[13px]
                    font-medium
                    text-gray-300
                    hover:text-blue-400
                    transition-colors
                  "
                >
                  Forgot Password?
                </a>

              </div>


              {/* ================= SIGN IN BUTTON ================= */}
              <button
                type="submit"
                className="
                  w-full
                  h-10
                  rounded-full
                  bg-blue-600
                  hover:bg-blue-500
                  active:scale-[0.98]
                  text-white
                  font-semibold
                  text-[14px]
                  shadow-[0_4px_12px_rgba(37,99,235,0.25)]
                  transition-all
                  duration-200
                "
              >
                Sign In
              </button>

            </form>


            {/* ================= DIVIDER ================= */}
            <div className="flex items-center gap-4 my-6 w-full">

              <div className="flex-1 h-[1px] bg-gray-700/60" />

              <span className="text-[12px] font-medium text-gray-400">
                Or
              </span>

              <div className="flex-1 h-[1px] bg-gray-700/60" />

            </div>


            {/* ================= SOCIAL LOGIN ================= */}
            <div className="flex items-center justify-center gap-5 w-full">


              {/* GOOGLE */}
              <a
                href="https://accounts.google.com"
                target="_blank"
                rel="noreferrer"
                className="
                  w-12
                  h-12
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-transparent
                  border
                  border-gray-600
                  hover:bg-white/5
                  hover:border-gray-500
                  transition-all
                  duration-200
                "
              >

                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >

                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />

                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />

                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />

                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />

                </svg>

              </a>


              {/* APPLE */}
              <a
                href="https://apple.com"
                target="_blank"
                rel="noreferrer"
                className="
                  w-12
                  h-12
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-transparent
                  border
                  border-gray-600
                  hover:bg-white/5
                  hover:border-gray-500
                  transition-all
                  duration-200
                "
              >

                <svg
                  className="w-5 h-5"
                  fill="#ffffff"
                  viewBox="0 0 384 512"
                >
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>

              </a>


              {/* FACEBOOK */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="
                  w-12
                  h-12
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-transparent
                  border
                  border-gray-600
                  hover:bg-white/5
                  hover:border-gray-500
                  transition-all
                  duration-200
                "
              >

                <svg
                  className="w-5 h-5"
                  fill="#1877F2"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>

              </a>

            </div>


            {/* ================= SIGN UP ================= */}
            <p className="text-center text-[13px] text-gray-400 mt-7">

              Don't have an account?{' '}

              <Link
                to="/signup"
                className="
                  text-blue-400
                  font-medium
                  hover:text-blue-300
                  transition-colors
                "
              >
                Sign Up
              </Link>

            </p>

          </div>

        </div>

      </main>

    </div>
  );
};

export default Login;