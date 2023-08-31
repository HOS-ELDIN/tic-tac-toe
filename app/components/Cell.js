const Cell = ({ go, setGo, id, cells, setCells, winner }) => {
	const handleClick = (e) => {
		// console.log(id);
		if (winner) {
			return;
		}
		if (cells[id] === "") {
			let newCells = cells.map((cell, index) => (index == id ? go : cell));

			setCells(newCells);

			go === "circle" ? setGo("cross") : setGo("circle");
		}
	};

	return (
		<div className="square" onClick={handleClick}>
			<div className={cells[id]}>
				{cells[id] === "circle" ? "O" : cells[id] === "cross" ? "X" : cells.id}
			</div>
		</div>
	);
};

export default Cell;
