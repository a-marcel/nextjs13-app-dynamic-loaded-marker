"use client";

import dynamic from "next/dynamic";
import type { ForwardedRef, ReactNode } from 'react';
import { forwardRef } from 'react';
// import { Popup } from "react-leaflet";

/*
 * Ref Issue: https://placekit.io/blog/articles/making-react-leaflet-work-with-nextjs-493i
 */

const ClientSideMap = dynamic(() => import('@components/Map'), { ssr: false })

type Props = {
    center?: number[];
    locationValue?: string;
    children?: ReactNode;
};
  
const ClientMap = forwardRef((props : Props, mapRef) => (
    <ClientSideMap {...props} forwardedRef={mapRef} />
))
ClientMap.displayName = 'ClientMap';

export default ClientMap;

export const Popup = dynamic(
    () => import('react-leaflet').then((m) => m.Popup),
    { ssr: false }
);


const ClientSideMarker = dynamic(() => import('@components/Marker'), { ssr: false })

type MarkerProps = {
    center?: number[];
    locationValue: L.LatLngExpression;
    children?: ReactNode;
    id: string | number;
};
  

export const Marker = forwardRef(({ center, locationValue, children, id }: MarkerProps, markerRef) => {
    return (
        <ClientSideMarker locationValue={locationValue} id={id} ref={markerRef}>
            <Popup>
                {children}
            </Popup>
        </ClientSideMarker>
    )
})
Marker.displayName = 'Marker'
