import { useEffect, useState } from "react";
import "./App.css";
import { Card, FilterSection, Navbar } from "./Components";
import { houseData } from "./DummyData";

function App() {
	const [location, setLocation] = useState("none");
	const [type, setType] = useState("none");
	const [price, setPrice] = useState("none");
	const [time, setTime] = useState("none");
	const [filterOpen, setFilterOpen] = useState(false);
	const [houseCardData, setHouseCardData] = useState(houseData);
	function filterCondition(data) {
		if (
			(location === "none" || data.location === location) &&
			(type === "none" || data.type === type) &&
			(time === "none" || data.time >= time) &&
			(price === "none" || data.price === price)
		) {
			return data;
		}
	}
	function filterData() {
		const filteredData = houseData.filter((data) => filterCondition(data));
		setHouseCardData(filteredData);
	}

	return (
		<div className="App">
			<Navbar setFilterOpen={setFilterOpen} filterOpen={filterOpen} />

			<div className="App-Cover">
				<div className="App-InnerBlock">
					<h1 className="App-Rent-Title">Search properties for rent</h1>
					<div className="App-Filter">
						<FilterSection
							setLocation={setLocation}
							setType={setType}
							setPrice={setPrice}
							setTime={setTime}
							filterData={filterData}
							filterOpen={filterOpen}
						/>
					</div>

					<div className="App-house-Grid">
						{houseCardData.map((data, idx) => (
							<Card key={idx} data={data} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
