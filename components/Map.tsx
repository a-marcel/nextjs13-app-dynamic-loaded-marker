"use client";

import L from "leaflet";
import React, { useRef, useState, useEffect } from "react";

import { MapContainer, TileLayer, FeatureGroup, useMap} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import type { ForwardedRef, ReactNode } from 'react';


type WrapperProps = {
  children?: ReactNode; 
};

const Wrapper = (props : WrapperProps) => {
  const featureGroupRef = useRef<L.FeatureGroup>(null);
  const map = useMap();

  useEffect(() => {
    console.log("Map test", featureGroupRef.current, featureGroupRef.current?.getLayers())
    if (map && featureGroupRef.current) {
      console.log("Bounds", featureGroupRef.current)
      // map.fitBounds(featureGroupRef.current.getBounds());
    }
  }, [map, featureGroupRef]);

  return (
    <FeatureGroup {...props} ref={featureGroupRef} eventHandlers={{
        add: (e) => {
          console.log("Added Layer:", e.target.getLayers());
        },
    }}/>
  )
}


type Props = {
  center?: number[];
  locationValue?: string;
  children?: ReactNode; 
  forwardedRef?: ForwardedRef<unknown>;
};


function Map({ center, locationValue, children }: Props) {

    return (
      <MapContainer
        center={(center as L.LatLngExpression) || [51, -0.09]}
        zoom={center ? 4 : 2}
        scrollWheelZoom={false}
        style={{
          height: '100%',
          width: '100%'
        }}
        className="h-full"        
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Wrapper>{children}</Wrapper>
      </MapContainer>
    );
}

export default Map;
