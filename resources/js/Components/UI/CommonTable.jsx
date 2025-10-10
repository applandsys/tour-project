import { Link } from '@inertiajs/react'

export default function CommonTable({ children,tableData = [], columns= [] }) {


    if (!Array.isArray(tableData) || tableData.length === 0) {
        return (
            <div className="p-4 bg-white rounded-md shadow-sm">
                <p className="text-sm text-gray-600">No records found.</p>
            </div>
        )
    }

    return (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    {columns.length > 0 && columns.map(item => {
                        return (
                            <th
                                key={item}
                                className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider"
                            >
                                {item}
                            </th>
                        )
                    })}
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                {children}
                </tbody>
            </table>
        </div>
    )
}
