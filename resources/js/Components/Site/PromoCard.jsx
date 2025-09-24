export default function PromoCard() {
    return (
        <div className="w-full  overflow-hidden">
            <div className="grid grid-cols-3 gap-2">
                <div className="col-span-1">
                    <div className="relative  rounded-md">
                        <img
                            src="/images/card.png" // replace with your image
                            alt="Promo"
                            className="h-full w-full object-cover rounded-lg"
                        />
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="text-wrap p-2">
                        <div className="text-sm text-right">
                            T&CS's Apply
                        </div>
                        <h4>Welcome Deal for you upto 25% - Tips 24</h4>
                        <div>
                            On First Flight and Hotel Booking
                        </div>

                        <div className="flex justify-between mt-16">
                            <div className="font-bold">
                                Code: GTMDDDD25
                            </div>
                            <div className="text-blue-600 font-extrabold  bg-gray-100 hover:bg-gray-200 p-2 rounded-md">
                                BOOK NOW
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
