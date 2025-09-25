

const BasicModal = ({children,setIsOpen}) => {

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                {/* Modal container */}
                <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative">
                    {/* Close button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                    >
                        ✕
                    </button>

                    {/* Modal content */}

                    <div>
                        {children}
                    </div>

                    {/* Action buttons */}
                    {/*<div className="flex justify-end gap-2">*/}
                    {/*    <button*/}
                    {/*        onClick={() => setIsOpen(false)}*/}
                    {/*        className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"*/}
                    {/*    >*/}
                    {/*        Cancel*/}
                    {/*    </button>*/}
                    {/*    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">*/}
                    {/*        Confirm*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    );
};

export default BasicModal;
