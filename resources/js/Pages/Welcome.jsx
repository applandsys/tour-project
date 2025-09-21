import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div>
                <nav className="bg-gray-900 text-white p-4">
                    <div className="flex items-center justify-between max-w-screen-xl mx-auto">
                        <div className="flex items-center space-x-4">
                            <img
                                src="/images/logo.jpg"
                                alt="Application Logo"
                                width="100px"
                            />
                            <ul className="flex space-x-6">
                                <li><a href="#" className="hover:text-yellow-500">Home</a></li>
                                <li><a href="#" className="hover:text-yellow-500">Destinations</a></li>
                                <li><a href="#" className="hover:text-yellow-500">Activities</a></li>
                                <li><a href="#" className="hover:text-yellow-500">Blog</a></li>
                                <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
                            </ul>
                        </div>
                        <div className="space-x-4">
                            <Link href="/login" className="text-yellow-500 hover:bg-yellow-500 hover:text-white px-4 py-2 rounded">
                              Sign In
                            </Link>
                            <Link href="/register" className="text-yellow-500 hover:bg-yellow-500 hover:text-white px-4 py-2 rounded">Sign Up</Link>
                        </div>
                    </div>
                </nav>

                <header
                    className="relative h-screen bg-cover bg-center"
                    style={{ backgroundImage: "url('hero-image.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="text-center text-white space-y-4">
                            <h1 className="text-4xl md:text-5xl font-bold">Unleash Your Wanderlust</h1>
                            <p className="text-xl">Book Your Next Journey</p>
                            <form className="mt-8 space-x-4">
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="px-4 py-2 rounded-md w-56"
                                />
                                <input
                                    type="date"
                                    className="px-4 py-2 rounded-md w-56"
                                />
                                <input
                                    type="date"
                                    className="px-4 py-2 rounded-md w-56"
                                />
                                <input
                                    type="number"
                                    placeholder="Guests"
                                    className="px-4 py-2 rounded-md w-56"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                                >
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </header>

                <footer className="bg-gray-900 text-white py-10">
                    <div className="max-w-screen-xl mx-auto flex justify-between">
                        <div>
                            <h2 className="font-bold text-lg">Global Trips 24</h2>
                            <p className="mt-2">Crafting exceptional journeys across the globe.</p>
                        </div>
                        <div>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-yellow-500">Terms</a></li>
                                <li><a href="#" className="hover:text-yellow-500">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-yellow-500">Legal Notice</a></li>
                                <li><a href="#" className="hover:text-yellow-500">Accessibility</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Follow Us</h3>
                            <div className="flex space-x-4 mt-2">
                                <a href="#" className="hover:text-yellow-500">Facebook</a>
                                <a href="#" className="hover:text-yellow-500">Instagram</a>
                                <a href="#" className="hover:text-yellow-500">Twitter</a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center text-sm mt-4">
                        <p>&copy; 2025 Global Trips 24. All Rights Reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}
