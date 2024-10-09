// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const locations = [
  {
    id: 1,
    name: "Faisalabad, PAK",
    position: { lat: 31.4504, lng: 73.135 },
    address: "P-176 (First Floor), Block A, FSD",
    contact: "+88017 000 555 15",
    countryCode: "PK",
  },
  {
    id: 2,
    name: "New York, USA",
    position: { lat: 40.7128, lng: -74.006 },
    address: "P-176 (First Floor), Block A, NY",
    contact: "+88017 000 555 15",
    countryCode: "US",
  },
];

const containerStyle = {
  width: "100%",
  height: "500px",
};

const MapComponent = () => {
  return (
    <div className="flex h-full w-full flex-1 bg-slate-100">
      <p>Google Maps</p>
      {/* // <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
    //   <GoogleMap
    //     mapContainerStyle={containerStyle}
    //     center={{ lat: 31.4504, lng: 73.135 }} // Default center
    //     zoom={2}
    //   >
    //     {locations.map((location) => (
    //       <Marker key={location.id} position={location.position} />
    //     ))}
    //   </GoogleMap>
    // </LoadScript> */}
    </div>
  );
};

export default MapComponent;
