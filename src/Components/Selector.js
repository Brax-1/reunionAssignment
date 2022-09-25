import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";

const StyledSelect = styled(Select)(({ theme }) => ({
	div: {
		padding: "0",
		border: "none",
	},
	fieldset: {
		padding: "0",
		border: "none",
	},
}));

export default function Selector({ datas, setData }) {
	const [age, setAge] = React.useState("none");

	const handleChange = (event) => {
		setAge(event.target.value);
		setData(event.target.value);
	};

	return (
		<FormControl
			sx={{ minWidth: 120, width: "100%", border: "none" }}
			size="small"
		>
			<StyledSelect
				id="demo-select-small"
				value={age}
				onChange={handleChange}
				style={{
					fontSize: "20px",
					fontWeight: "900",
					fontFamily: "Fira Sans, sans-serif",
				}}
			>
				<MenuItem value="none">None</MenuItem>
				{datas.map((data,idx) => (
					<MenuItem key={idx} value={data.value}>{data.label}</MenuItem>
				))}
			</StyledSelect>
		</FormControl>
	);
}
