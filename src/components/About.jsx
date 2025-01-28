import aboutImage from "../assets/about.jpg"

const About = () => {
	return (
		<section className="max-w-7xl mx-auto border-b-2 mt-20 scroll-mt-40" id="about">
			<h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase
			mb-12 mx-4">
				О нас
			</h2>
			<div className="flex flex-col items-center lg:space-x-8
				mx-4 mb-20 ">
				<div className="mb-8 lg:mb-0 max-w-[1000px] ">
					<img src={aboutImage} about="About RelaxSpace" 
						className="w-full h-auto rounded-xl object-cover"
					/>
				</div>
				<p className="text-lg lg:text-3xl font-light text-center lg:text-left
				max-w-5xl mx-auto mt-8">
					Мы занимаемся профессиональным ремонтом уже более 10 лет. К вашим услугам только самые
					опытные специалисты - дизайнеры, архитекторы, строители и электрики.
					Мы всегда смотрим в будущее и следим за новыми тенденциями
					в дизайне и современном оборудовании!
					Доверьтесь нашим специалистам и превратите ваш дом в настоящее место для отдыха!
				</p>
				
				
			</div>
			
		</section>
	)
}

export default About