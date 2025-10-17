import React from 'react';
import CommonTable from "@/Components/UI/CommonTable.jsx";
import { formatDate } from '@/utils.js';
import { Link } from '@inertiajs/react';
const WithdrawList = ({withdrawHistory}) => {
    const columns = ['Date','Pay Method','Amount','Status','View'];

    return (
        <div>
            <CommonTable tableData={withdrawHistory} columns={columns}>
                {withdrawHistory.map((p) => (
                    <tr key={p.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{formatDate(p.created_at)}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{p.pay_method}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 text-right">${p.amount}</td>
                        <td className="whitespace-nowrap text-sm text-gray-700 text-right rs-text-uppercase"><span className={`p-2 rounded-md uppercase  ${p.status==='pending' ? 'bg-amber-400' : 'bg-green-400'}`}>{p.status}</span></td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-center">
                            <div className="flex items-center justify-center space-x-2">
                                <Link href={`/withdraw/${p.id}`} className="text-sm px-2 py-1 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-100">View</Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </CommonTable>
        </div>
    );
};

export default WithdrawList;
