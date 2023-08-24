import React, { useRef, useState, useEffect } from "react";
import { Marker as LeafletMarker, useMap } from "react-leaflet";
import L from 'leaflet';
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import type { ForwardedRef, ReactNode } from 'react';

type Props = {
    center?: number[];
    locationValue: L.LatLngExpression;
    children?: ReactNode;
    id: string | number;
};


// @ts-ignore
// delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

const blueIcon = new L.Icon({
    iconUrl: markerIcon.src,
    shadowUrl: markerShadow.src,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});


const greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
  
const Marker = React.forwardRef(({ center, locationValue, children, id }: Props, ref) => {
    const markerRef = useRef<L.Marker>(null);
    const [active, setActive] = useState(false);
    const map = useMap();

    return (
        <LeafletMarker ref={markerRef} position={locationValue} icon={active ? greenIcon : blueIcon}>
            {children}
        </LeafletMarker>
    )
})
Marker.displayName = 'Marker'

export default Marker