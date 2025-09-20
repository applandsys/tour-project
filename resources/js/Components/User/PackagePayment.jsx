import React, { useMemo, useState } from "react";
import { Check, Star, Zap, Crown, Info } from "lucide-react";

export default function PackagePayment({packageDetail}) {

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-white via-slate-50 to-white text-slate-900">
            {JSON.stringify(packageDetail)}
        </div>
    );
}
