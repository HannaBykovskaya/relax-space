import { HERO_CONTENT } from "../constants"


const Hero = () => {
	return (
		<section className="max-w-7xl mx-auto border-b-2 px-2">
			<div className="flex flex-col items-center my-20">
				<h1 className="text-2xl lg:text-[10rem]
				md:text-6xl sm:text-6xl

				 p-2 uppercase font-bold">
					{HERO_CONTENT.title}
				</h1>
				<p className="text-center
				lg:mt-6 text-sm mb-4 font-medium tracking-tighter">
					{HERO_CONTENT.subtitle}
				</p>
				<img src={HERO_CONTENT.image}
					className="h-[30vh]  w-full lg:h-[65vh] md:h-[65vh]
					sm:h-[45vh]
					object-cover rounded-2xl p-2"
					alt="RelaxSpace"/>
			</div>
		</section>
	)
}

export default Hero