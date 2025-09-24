import React, { useState } from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const BasicDataRangePicker = ({handleChangeDateRange,dateRange}) => {

    return (
        <div>

            <DateRangePicker onChange={handleChangeDateRange} />

            {/*{dateRange && (*/}
            {/*    <div className="mt-2 text-sm text-gray-600">*/}
            {/*        <p>*/}
            {/*            Start: {dateRange[0]?.toLocaleDateString()} <br />*/}
            {/*            End: {dateRange[1]?.toLocaleDateString()}*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    );
};

export default BasicDataRangePicker;
