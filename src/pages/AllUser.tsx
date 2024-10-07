import { SlArrowDown } from 'react-icons/sl';
import { FcSearch } from 'react-icons/fc';

import { Link } from 'react-router-dom';
import Layout from '@/components/Dashboard/Layout';

const AllUser = (): JSX.Element => {
  return (
    <>
      <Layout>
        <div>
          <div className="flex justify-end pt-7">
            <div className="px-8">
              <div className="w-max">
                <header className="flex items-center justify-between">
                  <h3 className="font-bold text-[27px]">Foydalanuvchilar</h3>
                  <div className="flex gap-2 text-[18px]">
                    <Link to={'/dashboard'}>
                      <h4>Boshqaruv paneli </h4>
                    </Link>
                    <h4> / </h4>
                    <h4 className="text-blue-600"> Foydalanuvchilar</h4>
                  </div>
                </header>

                <div className="flex justify-end pt-5 gap-5">
                  <div className="flex">
                    <label htmlFor="inp1">
                      <FcSearch className="absolute mt-4 ml-3 text-[20px]" />
                    </label>
                    <input
                      type="text"
                      id="inp1"
                      className="pl-10 w-[375px] border-gray-300 rounded-md h-[50px] "
                      placeholder="Foydalanuvchini qidirish"
                    />
                  </div>
                  <div className="flex">
                    <input type="text" className="min-w-[260px] w-[360px] rounded-md h-[50px] placeholder:font-extralight placeholder-gray-400 border-gray-400  placeholder:text-[14px] " placeholder="Tumanni tanlang" />
                    <SlArrowDown className="absolute ml-[320px] mt-4" />
                  </div>
                  <select className="max-w-[350px] w-[375px] text-gray-40 rounded-md h-[50px] placeholder:font-extralight placeholder-gray-400 border-gray-400  placeholder:text-[14px] ">
                    <option value="">hello</option>
                    <option value="">example 1</option>
                    <option value="">example</option>
                  </select>
                </div>
                {/* sort */}
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AllUser;
