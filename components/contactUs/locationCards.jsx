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

const LocationCard = ({ location }) => (
  <div className="h-[190px] w-[320px] rounded-lg bg-white p-6 shadow-lg">
    <div className="mb-4 flex flex-col items-center">
      <img src={`/flags/${location.countryCode}.png`} alt={`${location.name} Flag`} className="mr-2 h-6 w-6" />
      <h3 className="text-[18px] font-semibold leading-[18px] text-text">{location.name}</h3>
    </div>
    <p className="text-[12px] font-normal leading-[17.82px] text-color-1">{location.address}</p>
    <div className="mt-4">
      <p className="text-[12px] font-medium leading-[17.82px] text-text">{location.address}</p>
      <p className="">Contact us: {location.contact}</p>
      <button className="mt-2 rounded bg-blue-500 px-4 py-2 text-white">Get Directions</button>
    </div>
  </div>
);

const LocationList = () => (
  <div className="flex flex-wrap justify-center">
    {locations.map((location) => (
      <LocationCard key={location.id} location={location} />
    ))}
  </div>
);

export default LocationList;
