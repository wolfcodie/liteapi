'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

const MapComponent = () => {
  const moroccoPosition: L.LatLngTuple = [31.7917, -7.0926];

  useEffect(() => {
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl:
        'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }, []);

  return (
    <div className='border-dashed border border-primary rounded-lg w-full h-[100px] overflow-hidden'>
      <MapContainer
        center={moroccoPosition}
        zoom={6}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={moroccoPosition}>
          <Popup>
            Morocco! <br /> A beautiful place to visit.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
