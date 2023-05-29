import { NavLink } from "./NavLink";
import "../css/header.css";

export function Header() {
	return (
		<header>
			<h1>Fullmetal Alchemist</h1>
			<nav>
				<NavLink text={"about us"} />
				<NavLink text={"info"} />
				<NavLink text={"support us"} />
			</nav>
		</header>
	);
}
