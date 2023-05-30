import { Header } from "./components/Header";
import { Table } from "./components/Table";
import { CharacterCards } from "./components/CharacterCards";
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
					<CharacterCards data={characters} />
				</section>
			</main>
		</>
	);
}

export default App;
