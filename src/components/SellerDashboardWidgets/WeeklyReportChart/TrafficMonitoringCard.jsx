import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { FlagIcon } from 'react-world-flags';

const trafficData = [
  { minute: 1, users: 10 },
  { minute: 2, users: 12 },
  { minute: 3, users: 9 },
  { minute: 4, users: 13 },
  { minute: 5, users: 15 },
  { minute: 6, users: 8 },
  { minute: 7, users: 14 },
  { minute: 8, users: 11 },
  { minute: 9, users: 16 },
  { minute: 10, users: 12 },
  { minute: 11, users: 15 },
  { minute: 12, users: 13 },
  { minute: 13, users: 10 },
  { minute: 14, users: 9 },
  { minute: 15, users: 11 },
];

const countryData = [
  {
    flag: 'us',
    country: 'US',
    users: '30k',
    percent: '25.8%',
    status: 'up',
  },
  {
    flag: 'br',
    country: 'Brazil',
    users: '30k',
    percent: '15.8%',
    status: 'down',
  },
  {
    flag: 'au',
    country: 'Australia',
    users: '25k',
    percent: '35.8%',
    status: 'up',
  },
];

export default function TrafficMonitoringCard() {
  return (
    <div className="p-4 bg-white rounded-2xl shadow-sm w-full max-w-md">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-indigo-600">Users in last 30 minutes</p>
        <button className="text-gray-400 hover:text-gray-600">
          <span className="text-lg font-bold">...</span>
        </button>
      </div>

      <h2 className="text-3xl font-bold text-gray-800">21.5K</h2>
      <p className="text-sm text-gray-500 mt-1 mb-3">Users per minute</p>

      <div className="h-24">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={trafficData}>
            <XAxis dataKey="minute" hide />
            <Bar dataKey="users" fill="#064e3b" radius={[4, 4, 0, 0]} barSize={8} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <p className="font-medium text-sm mt-6 mb-3">Sales by Country</p>

      <div className="space-y-4">
        {countryData.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FlagIcon code={item.flag.toUpperCase()} className="w-6 h-6 rounded-full" />
              <div>
                <p className="font-semibold text-gray-800">{item.users}</p>
                <p className="text-sm text-gray-500">{item.country}</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden mb-1">
                <div className="h-full bg-indigo-500 w-4/5 rounded-full"></div>
              </div>
              <span
                className={`text-xs font-medium flex items-center gap-1 ${
                  item.status === 'up' ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {item.status === 'up' ? <FaArrowUp /> : <FaArrowDown />} {item.percent}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-6 w-full py-2 border border-indigo-500 text-indigo-500 rounded-full hover:bg-indigo-50 text-sm font-medium">
        View Insight
      </button>
    </div>
  );
}
