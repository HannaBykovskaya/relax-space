import { useState } from "react"
import logo from "../assets/logo.webp"
import { RiCloseLine, RiMenu3Line } from "@remixicon/react"
import {LINKS} from "../constants"

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}


	return (
		<nav className="fixed top-4 z-50 flex w-full flex-col items-center justify-center  py-3 
		border-b-2 bg-white">
		<div className="container px-4 mx-auto relative text-sm">

				<div className="flex justify-between items-center"
				>
					<a href="/" className="flex items-center flex-shrink-0"
						onClick={(e) => {
						e.preventDefault();
						window.scrollTo({
						top: 0,
						behavior: "smooth",
						});
					}}
						
						>
						<img src={logo} width={150} height={15} alt="RelaxSpace" />

					</a>
				<ul className="hidden lg:flex ml-14 space-x-12">
						{LINKS.map((link, index) => (
							<li key={index} >
								<a href={link.link} className="uppercase text-sm font-medium hover:text-neutral-600">
									{link.name}
								</a>
							</li>
						))}
					</ul>

					<div className="lg:hidden md:flex flex-col justify-end">
						<button onClick={toggleMenu}>
							{isOpen ? <RiCloseLine /> : <RiMenu3Line />}
						</button>
					</div>

				</div>
				

				{isOpen && (
						<div 					 
							  className="fixed right-0 z-20 bg-white
							w-full p-12 flex flex-col justify-center items-start lg:hidden">
							<ul className="">
								{LINKS.map((link, index) => (
									<li key={index} className="py-4">
										<a href={link.link} className="uppercase hover:text-neutral-600">
											{link.name}
										</a>
									</li>
								)
								)}
							</ul>
							
						</div>
						)
					}
				</div>
		</nav>
	)
}

export default Navbar