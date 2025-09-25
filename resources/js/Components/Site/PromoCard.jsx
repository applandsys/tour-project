import { Link, usePage } from '@inertiajs/react';

export default function PromoCard({ image, title, description, code, terms, packageData }) {
    return (
        <div className="w-full overflow-hidden">
            <div className="grid grid-cols-3 gap-2">
                {/* Image */}
                <div className="col-span-1">
                    <div className="relative rounded-md">
                        <img
                            src={image}
                            alt="Promo"
                            className="h-full w-full object-cover rounded-lg"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="col-span-2">
                    <div className="text-wrap p-2">
                        <div className="text-sm text-right">{terms}</div>
                        <h5 className="font-bold text-blue-600">{packageData.name}</h5>
                        <h4 className="font-semibold">{title}</h4>
                        <div className="text-gray-600 text-sm">{description}</div>

                        <div className="flex justify-between mt-16">
                            <div className="font-bold">Code: {code}</div>
                            <Link href="/promo" className="text-blue-600 font-extrabold bg-gray-100 hover:bg-gray-200 p-2 rounded-md">
                                Book Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
