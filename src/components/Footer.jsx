import {RiTiktokFill, RiTwitterFill, RiYoutubeFill} from "@remixicon/react"

const Footer = () => {
	return (
		<footer id="footer" className="max-w-7xl mx-auto">
			<div className="flex flex-col md:flex-row
			
				justify-between items-center border-t-2 py-4 mx-4 
				">
				<div className="flex space-x-6 mb-2 ">
					<a className="" href="https://www.tiktok.com/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Visit Our TikTok page">
						<RiTiktokFill />
					</a>

					<a className="" href="https://www.twitter.com/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Visit Our Twitter page">
						<RiTwitterFill />
					</a>

					<a className="" href="https://www.youtube.com/"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Visit Our Youtube page">
						<RiYoutubeFill />
					</a>
				</div>
				<p className="text-sm">
					&copy; {new Date().getFullYear()} BHCode (Hanna Bykouskaya). All right reserved.
				</p>
			</div>

		</footer>
	)
}

export default Footer