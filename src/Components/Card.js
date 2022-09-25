import React from "react";
import house from "../Assets/house1.jpeg";
import classes from "./Styles/Card.module.css";
import BedIcon from "@mui/icons-material/Bed";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CropIcon from "@mui/icons-material/Crop";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import StarRateIcon from '@mui/icons-material/StarRate';
const Card = ({ data }) => {
	return (
		<div className={classes.card_cover}>
			<img className={classes.card_image} src={data.image} alt="House Img" />
			<div className={classes.card_house_details}>
				{data.popular && (
					<div className={classes.card_house_popular}>
						<StarRateIcon style={{ fontSize: "15px" }} />
						Popular
					</div>
				)}
				<div className={classes.card_house_price}>
					${data.price}
					<span>/month</span>
				</div>
				<div className={classes.card_house_name}>{data.name}</div>
				<div className={classes.card_house_street}>
					<LocationOnIcon />
					{data.street}
				</div>
				<div className={classes.card_house_spec}>
					<div>
						<BedIcon />
						<span>{data.bed} Bed</span>
					</div>
					<div>
						<InvertColorsIcon />
						<span>{data.bathroom} Bathrooms</span>
					</div>
					<div>
						<CropIcon />
						<span>{data.area} Sq m</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
