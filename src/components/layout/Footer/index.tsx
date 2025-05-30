import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="bg-stone-300 text-black dark:bg-stone-600 dark:text-white py-8">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-lg font-semibold mb-4">Contact</h3>
						<div className="space-y-2">
							<p className="flex items-center">
								<FaMapMarkerAlt className="mr-2" />
								Seoul, South Korea
							</p>
							<p className="flex items-center">
								<FaPhoneAlt className="mr-2" />
								+82 010-5061-8674
							</p>
							<p className="flex items-center">
								<FaEnvelope className="mr-2" />
								jwsong5160@gmail.com
							</p>
						</div>
					</div>
				</div>

				<div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm dark:border-gray-200">
					<p>&copy; {new Date().getFullYear()} Junwoo Song. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
