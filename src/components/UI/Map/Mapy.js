import React from "react";
import "./Mapy.css";
import { Map, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import { Icon } from "leaflet";
import markerIcon from "../../../assets/icon-location.svg";
import { useSelector } from "react-redux";
const markWith = new Icon({
	iconUrl: markerIcon,
	iconSize: [35, 45],
});
const Mapy = () => {
	const { latitude, longitude, ip } = useSelector(
		(state) => state.locationSlice
	);
	return (
		<Map center={[latitude, longitude]} zoom={16}>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Marker icon={markWith} position={[latitude, longitude]}>
				<Tooltip direction='bottom' offset={[0, 20]} opacity={1}>
					IP address: {ip}
				</Tooltip>
			</Marker>
		</Map>
	);
};

export default Mapy;
