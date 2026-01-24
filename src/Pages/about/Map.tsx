import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// import markerIcon2x from '../../../public/marker-icon-2x.png';
// import markerIcon from '../../../public/marker-icon.png';
// import markerShadow from '../../../public/marker-shadow.png';


// console.log({ markerIcon2x, markerIcon, markerShadow });

L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/marker-icon-2x.png',
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png',
});

const locations = [
  { name: '2 Dickens Rd, Gravesend DA12 2JY', lat: 51.4349, lng: 0.3920 },
  { name: '209 Old Rd E, Gravesend DA12 1PW', lat: 51.4324, lng: 0.3902 },
  { name: '5 Bernard St, Gravesend DA12 2EX', lat: 51.4426, lng: 0.3726 }
];

export default function LocationMap() {
  return (
    <MapContainer center={[51.4349, 0.3920]} zoom={14} className="h-[500px] w-full rounded-2xl">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {locations.map((loc, idx) => (
        <Marker key={idx} position={[loc.lat, loc.lng]}>
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
