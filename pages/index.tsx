import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Community from './sections/Community'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import ProofOfBuild from './sections/ProofOfBuild'
import Speezard from './sections/Speezard'
import Stats from './sections/Stats'
import Testimonials from './sections/Testimonials'

const Home: NextPage = () => {
	return (
		<div className="app-wrapper">
			<Navbar />
			<Hero />
			<Speezard />
			<Community />
			<ProofOfBuild />
			<Projects />
			<Stats />
			<Testimonials/>
		</div>
	)
}

export default Home
