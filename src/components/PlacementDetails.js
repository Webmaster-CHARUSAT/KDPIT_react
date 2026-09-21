import React from "react";

const placementData = [
  {
    year: "2024-25",
    interested: 106,
    offers: 81,
    students: 81,
    minimum: 1.5,
    average: 5.7,
    maximum: 12,
    companies: 57,
    median: null,
  },
  {
    year: "2023-24",
    interested: 77,
    offers: 95,
    students: 99,
    minimum: 2.5,
    average: 4.7,
    maximum: 6.5,
    companies: 83,
    median: null,
  },
  {
    year: "2022-23",
    interested: 78,
    offers: 106,
    students: 99,
    minimum: 1.8,
    average: 5.9,
    maximum: 23,
    companies: 65,
    median: null,
  },
  {
    year: "2021-22",
    interested: 70,
    offers: 102.86,
    students: 100,
    minimum: 1.44,
    average: 4.76,
    maximum: 18,
    companies: 34,
    median: null,
  },
  {
    year: "2020-21",
    interested: 60,
    offers: 116.67,
    students: 100,
    minimum: 1.2,
    average: 4.17,
    maximum: 14.5,
    companies: 27,
    median: null,
  },
  {
    year: "2019-20",
    interested: 51,
    offers: 123.53,
    students: 101.96,
    minimum: 2.4,
    average: 3.87,
    maximum: 7,
    companies: 36,
    median: null,
  },
];

const chartData = placementData.slice(0, 5).reverse();
const highestPackage = Math.max(...chartData.map((item) => item.maximum));

const formatNumber = (value) =>
  Number.isInteger(value)
    ? value
    : value.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");

const PlacementDetails = () => (
  <section id="placement-details" className="bg-slate-50 py-20">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
          Placement Details
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Placement performance and package details across the last six academic
          years
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {[
          ["106", "Interested Students", "2024-25"],
          ["81%", "Placement Offers", "2024-25"],
          ["5.7 LPA", "Average Package", "2024-25"],
          ["12 LPA", "Maximum Package", "2024-25"],
        ].map(([value, label, year]) => (
          <div
            key={label}
            className="bg-white rounded-2xl shadow-md p-6 text-center"
          >
            <div className="text-3xl font-bold text-indigo-600">{value}</div>
            <div className="text-gray-800 font-semibold mt-2">{label}</div>
            <div className="text-sm text-gray-500 mt-1">{year}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-12">
        <div className="px-6 py-5 border-b border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900">
            Year-wise Placement Summary
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[980px] text-sm text-left">
            <thead className="bg-indigo-50 text-indigo-900">
              <tr>
                <th className="px-5 py-4 font-semibold">Academic Year</th>
                <th className="px-5 py-4 font-semibold">Interested Students</th>
                <th className="px-5 py-4 font-semibold">Offers %</th>
                <th className="px-5 py-4 font-semibold">Students %</th>
                <th className="px-5 py-4 font-semibold">Minimum (LPA)</th>
                <th className="px-5 py-4 font-semibold">Average (LPA)</th>
                <th className="px-5 py-4 font-semibold">Maximum (LPA)</th>
                <th className="px-5 py-4 font-semibold">Companies</th>
              </tr>
            </thead>
            <tbody>
              {placementData.map((item, index) => (
                <tr
                  key={item.year}
                  className={index % 2 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="px-5 py-4 font-semibold text-gray-900">
                    {item.year}
                  </td>
                  <td className="px-5 py-4">{item.interested}</td>
                  <td className="px-5 py-4">{formatNumber(item.offers)}%</td>
                  <td className="px-5 py-4">{formatNumber(item.students)}%</td>
                  <td className="px-5 py-4">{formatNumber(item.minimum)}</td>
                  <td className="px-5 py-4">{formatNumber(item.average)}</td>
                  <td className="px-5 py-4">{formatNumber(item.maximum)}</td>
                  <td className="px-5 py-4">{item.companies}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Package Trend: Last Five Years
            </h3>
            <p className="text-gray-600 mt-1">Highest package in LPA</p>
          </div>
          <div className="text-sm text-amber-700 bg-amber-50 rounded-lg px-4 py-3">
            Median package values are not available yet.
          </div>
        </div>

        <div className="space-y-5">
          {chartData.map((item) => (
            <div
              key={item.year}
              className="grid grid-cols-[70px_1fr_70px] items-center gap-3"
            >
              <span className="text-sm font-semibold text-gray-700">
                {item.year}
              </span>
              <div className="h-8 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
                  style={{ width: `${(item.maximum / highestPackage) * 100}%` }}
                />
              </div>
              <span className="text-sm font-bold text-indigo-700 text-right">
                {formatNumber(item.maximum)} LPA
              </span>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-6">
          The median-package line will be added once the median values for these
          five years are provided.
        </p>
      </div>
    </div>
  </section>
);

export default PlacementDetails;
