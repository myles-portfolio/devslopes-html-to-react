import { Header } from "./components/Header";
import { Table } from "./components/Table";
import { CharacterCard } from "./components/CharacterCard";
import { characters } from "./data";

function App() {
	return (
		<>
			<Header />
			<main className="container">
				<section id="character-ratings">
					<h4>Top Characters</h4>
					<Table data={characters} />
				</section>
				<section id="character-cards">
					<CharacterCard data={characters} />
				</section>
			</main>
		</>
	);
}

export default App;
