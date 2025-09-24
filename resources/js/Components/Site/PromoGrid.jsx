import PromoCard from "@/Components/Site/PromoCard.jsx";

export default function PromoGrid() {
    const items = [1, 2, 3, 4, 5, 6]; // example items

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item, i) => (
                <div
                    key={i}
                    className="w-full rounded-xl border border-gray-200 shadow-md bg-white p-4"
                >
                   <PromoCard/>
                </div>
            ))}
        </div>
    );
}
