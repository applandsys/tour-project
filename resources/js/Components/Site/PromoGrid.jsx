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
                name : 'STARTER TRAVELLER',
                slug : 'starter-package',
                amount: 120,
                reward : '2-night stay at a 3-star hotel',
                limit : 24,
                consume_date : [11 , 12 , 25 , 26],
                voucher_amount : 4,
                voucher_per_month : 2,
                claim_deadline : 26,
                description : 'Package Amount: $120 Reward: 2-night stay at a 2-star hotel for up to 24 months. Stay Dates: 11 & 12 or 25 & 26 of each month. Monthly Earnings (if someone doesnt redeem voucher code than miss the income): $8 ($4 per voucher). Claim Deadline: 26th of each.gift Power Bank. ',
                image : 'starter.jpg',
                gift : ' Power Bank',
                extras: []
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
                name : 'EXECUTIVE TRAVELLER',
                slug : 'exclusive-traveller',
                amount : 500,
                reward : ' 2-night stay at a 3-star hotel ',
                limit : 24,
                consume_date : [11 , 12 , 25 , 26],
                voucher_amount : 20,
                voucher_per_month : 2,
                claim_deadline : 26,
                description : '',
                image : 'exclusive.jpg',
                gift : 'Smart Watch.',
                extras: []
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
                id: 3,
                name : 'DELUXE TRAVELLER',
                slug : 'deluxe-traveller',
                amount: 1000,
                reward : ' 2-night stay at a 4-star hotel',
                limit : 24,
                consume_date : [11 , 12 , 25 , 26],
                voucher_amount : 40,
                voucher_per_month : 2,
                claim_deadline : 26,
                description : 'Package Amount: $1000 Reward: 2-night stay at a 4-star hotel for up to 24 months.\n' +
                    '            Stay Dates: 11 & 12 or 25 & 26 of each month. Monthly Earnings (if someone doesnt redeem voucher code than miss the income): $80 ($40 per voucher). Claim Deadline: 26th of each.gift Google Alexa.\n' +
                    '           ',
                image : 'deluxe.jpg',
                gift : 'Google Alexa',
                extras: ['most_popular']
            }
        },
        {
            id: 4,
            image: "/images/hotels/4.png",
            title: "Special Discount on Flights",
            description: "Save more when you book round trips",
            code: "FLY20",
            terms: "Conditions Apply",
            packageData: {
                id: 4,
                name : 'PREMIUM TRAVELLER',
                slug : 'premium-traveller',
                amount:3000,
                reward : '2-night stay at a 5-star hotel',
                limit : 24,
                consume_date : [11 , 12 , 25 , 26],
                voucher_amount : 110,
                voucher_per_month : 2,
                claim_deadline : 26,
                description : '',
                image : 'premium.jpg',
                gift : 'Mobile',
                extras: []
            }
        },
        {
            id: 5,
            image: "/images/hotels/3.png",
            title: "Special Discount on Flights",
            description: "Save more when you book round trips",
            code: "FLY20",
            terms: "Conditions Apply",
            packageData: {
                id: 5,
                name : 'ROYAL TRAVELLER',
                slug : 'royal-traveller',
                amount: 10000,
                reward : '2-night stay at a 5-star hotel',
                limit : 24,
                consume_date : [11 , 12 , 25 , 26],
                voucher_amount : 225,
                voucher_per_month : 2,
                claim_deadline : 26,
                description : ' ',
                image : 'royal.jpg',
                gift : 'META VR',
                extras: []
            }
        },
        {
            id: 6,
            image: "/images/hotels/3.png",
            title: "Special Discount on Flights",
            description: "Save more when you book round trips",
            code: "FLY20",
            terms: "Conditions Apply",
            packageData: {
                id: 6,
                name : 'AMBASSADOR',
                slug : 'ambassador',
                amount:20000,
                reward : '2-night stay at a 7-star hotel',
                limit : 24,
                consume_date : [11 , 12 , 25 , 26],
                voucher_amount : 225,
                voucher_per_month : 2,
                claim_deadline : 26,
                description : 'Package Amount: $20,000 Reward: 2-night stay at a 7-star hotel for up to 24 months.\n' +
    '            Stay Dates: 11 & 12 or 25 & 26 of each month. Monthly Earnings (if someone doesnt redeem voucher code than miss the income): $1000 ($500 per voucher). Claim Deadline: 26th of each. Gift Tourist visa for 1st world country.\n' +
    '            ',
                 image : 'royal.jpg',
                 gift : 'Tourist visa for 1st world country',
                 extras: []
            }
        }
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
