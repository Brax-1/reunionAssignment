import { Button } from "@mui/material";
import React from "react";
import DatePicker from "./DatePicker";
import Selector from "./Selector";
import classes from "./Styles/FilterSection.module.css";

const propertyTypeData = [
	{ label: "House", value: "house" },
	{ label: "Apartment", value: "apartment" }
];
const priceRangeData = [
	{ label: "$500-$2500", value: "500-2500" },
	{ label: "$2500+", value: "2500+" },
];
const locationData = [
	{ label: "New York, USA", value: "New York, USA" },
	{ label: "Maharastra, India", value: "Maharastra, India" },
];

const FilterSection = ({setLocation,setType,setPrice,filterData,setTime,filterOpen}) => {
	return (
		<div className={`${classes.filtersection_main} ${filterOpen?classes.filtersection_main_open:classes.filtersection_main_close}`}>
			<div className={classes.FilterSection_Filter}>
				<h1 className={classes.FilterSection_Filter_Title}>Location</h1>
				<Selector setData={setLocation}datas={locationData}/>
			</div>
			<div className={classes.FilterSection_Filter}>
				<div className={classes.FilterSection_Filter_Title}>When</div>
				<DatePicker setTime={setTime}/>
			</div>
			<div className={classes.FilterSection_Filter}>
				<div className={classes.FilterSection_Filter_Title}>Price</div>
				<Selector setData={setPrice} datas={priceRangeData}/>
			</div>
			<div className={classes.FilterSection_Filter}>
				<div className={classes.FilterSection_Filter_Title}>Property Type</div>
				<Selector setData={setType} datas={propertyTypeData}/>
			</div>
			<Button
				variant="contained"
				sx={{ ml: 1, color: "white", display: "block", width: "70%" }}
                onClick={()=>filterData()}
			>
				Search
			</Button>
		</div>
	);
};

export default FilterSection;
