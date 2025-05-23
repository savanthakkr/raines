// import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const pieData = [
  { name: 'Competent', value: 75 },
  { name: 'Not Competent Enough', value: 25 },
];

const lineData = [
  { name: 'Day 1', value: 10 },
  { name: 'Day 2', value: 12 },
  { name: 'Day 3', value: 18 },
  { name: 'Day 4', value: 22 },
];

export default function Charts() {
  return (
    <div className="grid grid-cols-2 gap-6 mb-6">
      <div className="bg-white p-4 rounded shadow-md">
        <h4 className="mb-2 text-gray-700 font-semibold">Enrollment Rate</h4>
        {/* <ResponsiveContainer width="100%" height={200}>
          <LineChart data={lineData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#e11d48" />
          </LineChart>
        </ResponsiveContainer> */}
      </div>
      <div className="bg-white p-4 rounded shadow-md">
        <h4 className="mb-2 text-gray-700 font-semibold">Competency Results Summary</h4>
        {/* <PieChart width={200} height={200}>
          <Pie data={pieData} dataKey="value" outerRadius={80}>
            <Cell fill="#e11d48" />
            <Cell fill="#facc15" />
          </Pie>
        </PieChart> */}
      </div>
    </div>
  );
}
