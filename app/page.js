"use client";
import { useEffect, useState } from "react";
import Cell from "./components/Cell";

const winningCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

export default function Home() {
	const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
	const [go, setGo] = useState("circle");
	const [winner, setWinner] = useState("");
	const [draw, setDraw] = useState(false);

	// checking for winner
	useEffect(() => {
		winningCombos.forEach((combo) => {
			const circleWins = combo.every((cell) => cells[cell] === "circle");
			circleWins && setWinner("circle");

			const crossWins = combo.every((cell) => cells[cell] === "cross");
			crossWins && setWinner("cross");
		});
	}, [cells]);

	// checking for draw
	useEffect(() => {
		cells.every((cell) => cell !== "") && setDraw(true);
	}, [cells]);

	const playAgain = () => {
		setCells(["", "", "", "", "", "", "", "", ""]);
		winner && setGo(winner);
		setWinner("");
		setDraw(false);
	};

	return (
		<main className="container">
			<div className="gameboard">
				{cells.map((item, index) => (
					<Cell
						id={index}
						key={index}
						go={go}
						setGo={setGo}
						cells={cells}
						setCells={setCells}
						winner={winner}
					/>
				))}
			</div>
			<div className="instructions">
				{!winner && !draw ? (
					<p className="">
						( <span className={go}>{`${go === "circle" ? "O" : "X"}`}</span> )
						to Play
					</p>
				) : winner ? (
					<p className={winner}>{`${winner} Is The winner`}</p>
				) : draw ? (
					<p className="draw">the game is draw</p>
				) : (
					<></>
				)}

				{winner || draw ? (
					<button className="again" type="button" onClick={playAgain}>
						Play Again
					</button>
				) : (
					<></>
				)}
			</div>
		</main>
	);
}
