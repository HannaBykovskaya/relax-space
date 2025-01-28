import { PORTFOLIO_PROJECTS } from "../constants"


const Portfolio = () => {
	return (
		<section className="max-w-7xl mx-auto border-b-2 mt-40 scroll-mt-40" id="portfolio">
			<div className="mb-20">
				<h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase
				mt-20 mb-12">
					Портфолио
				</h2>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2
				lg:grid-col-3">
					{PORTFOLIO_PROJECTS.map((project) => (
						<div key={project.id}
							className="group relative overflow-hidden
							rounded-3xl mx-4">
								<img src={project.image}
								alt={project.name}
								className="h-full w-full object-cover
								transition transform duration-500 group-hover:scale-110
								"/>
								<div className="absolute inset-0 flex flex-col
								items-center justify-center opacity-0
								backdrop-blur-lg
								transition-opacity duration-500
								group-hover:opacity-100
								
								">
									<div className="group-hover:bg-white/30 
									
									flex flex-col items-center justify-center gap-2 pt-2">

										<h3 className=" text-xl font-medium  text-center">
											{project.name}
										</h3>
										<p className=" p-4 text-center ">
											{project.description}
										</p>
									</div>
								</div>
						</div>
					))}

				</div>
			</div>
		</section>
	)
}

export default Portfolio