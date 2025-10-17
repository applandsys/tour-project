import React from 'react';

const StatCard = ({ title, value, icon, color }) => (
    <div className="bg-white rounded-2xl shadow-md p-5 flex items-center justify-between hover:shadow-lg transition">
        <div>
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-xl ${color.bg}`}>
            <div className={`${color.text}`}>{icon}</div>
        </div>
    </div>
);

export default StatCard;
