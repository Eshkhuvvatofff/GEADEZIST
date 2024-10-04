import { MdOutlineCategory } from 'react-icons/md';
import Navbar from '../components/Dashboard/Navbar';
import Sidebar from '../components/Dashboard/Sidebar';
import { FaCircleQuestion } from 'react-icons/fa6';
import { FaArrowsAlt } from 'react-icons/fa';
import { PiUsersThreeFill } from 'react-icons/pi';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useState } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const categories = ['Топография', 'Маркшейдерлик', 'Умумий Геодезия'];
  const regions = ['Toshkent', 'Samarqand', "Farg'ona"];

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(e.target.value);
  };

  const cardData = [
    {
      id: 1,
      icon: <MdOutlineCategory />,
      count: 13,
      label: 'Umumiy Kategoriya',
    },
    {
      id: 2,
      icon: <FaCircleQuestion />,
      count: 123,
      label: 'Umumiy Savol',
    },
    {
      id: 3,
      icon: <FaArrowsAlt />,
      count: 82,
      label: 'Umumiy Natija',
    },
    {
      id: 4,
      icon: <PiUsersThreeFill />,
      count: 21,
      label: 'Jami Foydalanuvchilar',
    },
  ];

  const dataUsers = [
    {
      id: 1,
      ism: 'Asilbek',
      familiya: 'Normuhammadov',
      kategoriya: 'Топография',
      viloyat: 'Toshkent',
      natija: '8/34',
    },
    {
      id: 2,
      ism: 'Shahrixon',
      familiya: 'Raxmatullayev',
      kategoriya: 'Маркшейдерлик',
      viloyat: 'Samarqand',
      natija: '5/25',
    },
    {
      id: 3,
      ism: 'Otabek',
      familiya: 'Komilov',
      kategoriya: 'Умумий Геодезия',
      viloyat: "Farg'ona",
      natija: '26/40',
    },
  ];

  // Data for the chart
  const data = {
    labels: [
      'Dushanba',
      'Seshanba',
      'Chorshanba',
      'Payshanba',
      'Juma',
      'Shanba',
      'Yakshanba',
    ],
    datasets: [
      {
        label: 'Savdolar soni',
        data: [120, 150, 80, 70, 200, 160, 100],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderWidth: 2,
        tension: 0.3,
        pointRadius: 5,
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 flex-1 flex flex-col">
          <div className="grid mb-10 grid-cols-1 md:grid-cols-4 gap-4">
            {cardData.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 shadow-md flex flex-col items-center text-center"
              >
                <div className="bg-gray-100 text-3xl p-4 rounded-full mb-4">
                  {item.icon}
                </div>
                <h2 className="text-3xl font-bold mb-2">{item.count}</h2>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Chart Section */}
          <div
            className="bg-white shadow rounded-lg flex flex-col p-4 mb-6"
            style={{ height: '800px' }}
          >
            <div className="flex justify-between items-center mt-8 mb-10 px-6">
              <h2 className="text-blue-500 text-xl font-bold">
                Haftalik ma'lumot
              </h2>
              <button className="bg-gray-100 px-4 py-2 text-gray-600 rounded-sm">
                Hafta
              </button>
            </div>
            <div className="flex-1">
              <div className="h-full">
                <Line data={data} options={options} />
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex justify-between mb-6">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="border p-2 rounded"
            >
              <option value="">Kategoriyani tanlang</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              value={selectedRegion}
              onChange={handleRegionChange}
              className="border p-2 rounded"
            >
              <option value="">Viloyatni tanlang</option>
              {regions.map((region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>

          {/* User Table Section */}
          <div className="bg-white shadow rounded-lg p-4">
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="py-2 border">T/P</th>
                  <th className="py-2 border">Ism</th>
                  <th className="py-2 border">Familiya</th>
                  <th className="py-2 border">Kategoriya nomi</th>
                  <th className="py-2 border">Viloyat</th>
                  <th className="py-2 border">
                    Natija (To'g'ri javoblar/Umumiy)
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataUsers
                  .filter(
                    (user) =>
                      (!selectedCategory ||
                        user.kategoriya === selectedCategory) &&
                      (!selectedRegion || user.viloyat === selectedRegion),
                  )
                  .map((user) => (
                    <tr key={user.id}>
                      <td className="py-2 border text-center">{user.id}</td>
                      <td className="py-2 border text-center">{user.ism}</td>
                      <td className="py-2 border text-center">
                        {user.familiya}
                      </td>
                      <td className="py-2 border text-center">
                        {user.kategoriya}
                      </td>
                      <td className="py-2 border text-center">
                        {user.viloyat}
                      </td>
                      <td className="py-2 border text-center">{user.natija}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
