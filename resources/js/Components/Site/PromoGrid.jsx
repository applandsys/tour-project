import PromoCard from "@/Components/Site/PromoCard.jsx";

export default function PromoGrid() {
    // Demo data array
    const items = [
        {
            id: 1,
            image: "/images/hotels/1.png",
            title: "Welcome Deal for you upto 25% - Tips 24",
            description: "On First Flight and Hotel Booking",
            code: "GTMDDDD25",
            terms: "T&Cs Apply",
            packageData: {
                id: 1,
                name: "Starter Travelers"
            }
        },
        {
            id: 2,
            image: "/images/hotels/2.png",
            title: "Flat 15% Off on Hotels",
            description: "Valid on your first hotel booking",
            code: "HOTEL15",
            terms: "Limited Offer",
            packageData: {
                id: 2,
                name: "Executive Travelers"
            }
        },
        {
            id: 3,
            image: "/images/hotels/3.png",
            title: "Special Discount on Flights",
            description: "Save more when you book round trips",
            code: "FLY20",
            terms: "Conditions Apply",
            packageData: {
                id: 2,
                name: "Ambassador Travelers"
            }
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="w-full rounded-xl border border-gray-200 shadow-md bg-white p-4"
                >
                    <PromoCard
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        code={item.code}
                        terms={item.terms}
                        packageData={item.packageData}
                    />
                </div>
            ))}
        </div>
    );
}
