import About from "./components/About"
import Contacts from "./components/Contacts"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Reviews from "./components/Reviews"
import Services from "./components/Services"


const App = () => {
	return (
		<main className="overflow-x-hidden antialiased text-neutral-800">
			<Navbar />
			<Hero />
			<Services />
			<Portfolio />
			<About />
			<Reviews />
			<Contacts />
			<Footer />
		</main>
	)
}

export default App