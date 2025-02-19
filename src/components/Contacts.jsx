import { CONTACT_INFO } from "../constants"
import { RiMailLine, RiMapPinLine, RiPhoneLine} from "@remixicon/react"


const Contacts = () => {
	return (
		<section className="max-w-7xl mx-auto mt-20 scroll-mt-40" id="contacts">
			<div className="my-20 flex flex-col justify-center items-center mx-10">
				<h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12">
					Контакты
				</h2>
				<p className="max-w-2xl text-lg mb-12 text-center mx-auto">
					{CONTACT_INFO.text}
				</p>
				<div className="flex flex-col 
				md:flex-row lg:flex-row
				space-y-8 md:space-y-0 md:justify-between md:space-x-6
				items-start 
				mx-4">
					<div className="flex mb-8 lg:mb-0">
						<RiMailLine className="text-3xl mr-4" />
						<div>
							<p className="text-lg font-semibold">
								{CONTACT_INFO.email.label}
							</p>
							<p className="text-neutral-600">
								{CONTACT_INFO.email.value}
							</p>
						</div>
					</div>

					<div className="flex mb-8 lg:mb-0">
						<RiMapPinLine className="text-3xl mr-4" />
						<div>
							<p className="text-lg font-semibold">
								{CONTACT_INFO.address.label}
							</p>
							<p className="text-neutral-600">
								{CONTACT_INFO.address.value}
							</p>
						</div>
					</div>


					<div className="flex mb-8 lg:mb-0">
						<RiPhoneLine className="text-3xl mr-4" />
						<div>
							<p className="text-lg font-semibold">
								{CONTACT_INFO.phone.label}
							</p>
							<p className="text-neutral-600">
								{CONTACT_INFO.phone.value}
							</p>
						</div>
					</div>

				</div>
			</div>
			
		</section>
	)
}

export default Contacts