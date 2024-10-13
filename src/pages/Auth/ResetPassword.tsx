import { baseUrl } from '@/helpers/api/baseUrl';
import { Logo, registerRasm } from '@/helpers/imports/images';
import { ResetPasswordType } from '@/helpers/types/LoginType';
import axios from 'axios';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ResetPassword() {
  const code = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);
  const confirmPassword = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const [showpassword, setShowpassword] = useState<boolean>(false);
  const [showconfirmPassword, setShowconfirmPassword] =
    useState<boolean>(false);

  function resetPasswordPost(event: React.FormEvent) {
    event.preventDefault(); // Sahifa yangilanmasligini ta'minlash

    const data: ResetPasswordType = {
      passwordToken: code.current?.value || '',
      newPassword: password.current?.value || '',
      confirmPassword: confirmPassword.current?.value || '',
    };
    if (
      !code.current?.value ||
      !password.current?.value ||
      !confirmPassword.current?.value
    ) {
      toast.warning("Iltimos, bo'shliqni  to'ldiring!");
      return;
    }

    if (password.current?.value.length < 5) {
      toast.warning("Parol kamida 5 ta belgidan iborat bo'lishi kerak!");
      return;
    }
    if (password.current?.value !== confirmPassword.current?.value) {
      toast.warning('Parollar bir biriga mos kelmaydi!');
      return;
    }

    axios
      .put(`${baseUrl}auth/reset-password`, data)
      .then((res) => {
        if (res.status === 200) {
          toast.success(res.message);
          navigate('/auth/SignIn');
        }
        console.log(res.status);
      })
      .catch((err) => {
        if (err.response?.status === 404) {
          toast.warning('Code xato kiritildi!');
        } else {
          toast.error("Qayta tekshirib ko'ring!");
        }
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col lg:flex-row w-full lg:w-5/6 lg:h-5/6 bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Chap tomoni: Tasvir va Logo */}
        <div className="lg:w-3/5 w-full flex flex-col items-center justify-center bg-gray-50 p-8">
          <img src={Logo} alt="Logo" className="w-30 lg:w-48 mb-4 lg:mb-8" />
          <div className="w-40 lg:w-60">
            <img src={registerRasm} alt="Phone Illustration" />
          </div>
        </div>

        {/* O'ng tomoni: Parolni almashtirish formasi */}
        <div className="flex justify-center items-center w-full lg:w-3/5 p-6 lg:p-8">
          <div className="w-full">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 lg:mb-6">
              Parolni almashtirish
            </h2>
            <div>
              {/* Tasdiqlash kodi */}
              <div className="mb-4">
                <label
                  htmlFor="code"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Tasdiqlash kodi
                </label>
                <input
                  ref={code}
                  type="text"
                  id="code"
                  placeholder="Tasdiqlash kodini kiriting"
                  className="w-full px-4 mt-2 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  required
                />
              </div>

              {/* Yangi parol */}
              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Parolni tasdiqlang
                </label>
                {/* Wrapper div to apply flexbox */}
                <div className="flex items-center border rounded-lg mt-2">
                  <input
                    ref={password}
                    type={showpassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Parolni qayta kiriting"
                    required
                    className="w-full px-4 py-2 text-sm rounded-lg "
                  />
                  {/* Eye icon */}
                  <span
                    onClick={() => setShowpassword(!showpassword)}
                    className="px-3 cursor-pointer text-gray-800"
                  >
                    {showpassword ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </span>
                </div>

                <p className="text-xs mt-2">
                  Parol kamida 5 ta belgidan iborat
                </p>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-semibold text-gray-600"
                >
                  Parolni tasdiqlang
                </label>

                {/* Wrapper div to apply flexbox */}
                <div className="flex items-center border rounded-lg mt-2">
                  <input
                    ref={confirmPassword}
                    type={showconfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Parolni qayta kiriting"
                    required
                    className="w-full px-4 py-2 text-sm rounded-lg "
                  />
                  {/* Eye icon */}
                  <span
                    onClick={() => setShowconfirmPassword(!showconfirmPassword)}
                    className="px-3 cursor-pointer text-gray-800"
                  >
                    {showconfirmPassword ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </span>
                </div>

                <p className="text-xs mt-2">
                  Parol kamida 5 ta belgidan iborat
                </p>
              </div>

              {/* Saqlash tugmasi */}
              <button
                onClick={resetPasswordPost}
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Parolni saqlash
              </button>
            </div>

            {/* Quyidagi havolalar */}
            <div className="flex justify-center items-center mt-4 lg:mt-6">
              <p className="text-sm text-black ">Hisobingiz bormi ?</p>
              <Link
                to={'/auth/signin'}
                className="text-sm text-blue-500 hover:underline"
              >
                Ro'yhatdan o'tish
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
