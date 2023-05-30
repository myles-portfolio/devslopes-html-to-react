import React from "react";
import "../css/card.css";

export class CharacterCards extends React.Component {
	render() {
		const { data } = this.props;

		return (
			<>
				{data.map((character, index) => (
					<div key={index} className="card">
						<div className="card-titles">
							<h3>{character.name}</h3>
							<h4>{character.nickName}</h4>
						</div>
						<img src={character.imageUrl} alt="" />
						<p>{character.background}</p>
					</div>
				))}
			</>
		);
	}
}
