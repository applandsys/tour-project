
import React, { useState } from "react";
import { Copy, Check } from "lucide-react"; // you can use react-icons/fa if you prefer

export default function ReferralLink({ user }) {
    const [copied, setCopied] = useState(false);

    const referralLink = `https://globaltrips24.com/?ref=${user?.unique_id}`;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(referralLink);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <div className="mt-10 mx-auto text-center">
            <div className="flex items-center justify-center space-x-2">
                <a
                    href={referralLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline break-all"
                >
                    {referralLink}
                </a>
                <button
                    onClick={handleCopy}
                    className="p-1 hover:bg-gray-200 rounded-md transition"
                    title="Copy link"
                >
                    {copied ? (
                        <Check className="text-green-500 w-5 h-5" />
                    ) : (
                        <Copy className="w-5 h-5" />
                    )}
                </button>
            </div>

            {copied && (
                <p className="text-green-600 text-sm mt-2 transition-opacity">
                    Copied to clipboard!
                </p>
            )}
        </div>
    );
}
