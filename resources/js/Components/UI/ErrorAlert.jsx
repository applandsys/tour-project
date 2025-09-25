import React from 'react';

const ErrorAlert = ({children}) => {
    return (
        <>
            <div className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50"
                 role="alert">
                <svg className="flex-shrink-0 inline w-5 h-5 mr-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                          d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zm-8 4a1 1 0 100-2 1 1 0 000 2zm-.75-7.75a.75.75 0 011.5 0v4.5a.75.75 0 01-1.5 0v-4.5z"
                          clip-rule="evenodd"/>
                </svg>
               <div>
                   {children}
               </div>
            </div>
        </>
    );
};

export default ErrorAlert;
