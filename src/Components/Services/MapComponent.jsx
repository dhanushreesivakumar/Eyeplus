import React, { useRef, useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const MapComponent = () => {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  const handleAddressSubmit = async (event) => {
    event.preventDefault();
    const address = event.target.elements.address.value;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${address}`
      );
      const data = await response.json();

      if (data.length > 0) {
        const { lat, lon } = data[0];
        const location = [parseFloat(lat), parseFloat(lon)];

        if (map) {
          console.log('Setting view to:', location);
          map.setView(location, 13);
          addDummyShops(location);
        } else {
          console.error('Map instance is not ready');
        }
      } else {
        alert('Address not found!');
      }
    } catch (error) {
      console.error('Error fetching location data:', error);
    }
  };

  const addDummyShops = (location) => {
    const dummyShops = [
      [location[0] + 0.01, location[1] + 0.01],
      [location[0] - 0.01, location[1] - 0.01],
      [location[0] + 0.02, location[1] - 0.02],
    ];

    const newMarkers = dummyShops.map((shopLocation) =>
      L.marker(shopLocation).addTo(map)
    );

    setMarkers((prevMarkers) => {
      prevMarkers.forEach((marker) => map.removeLayer(marker));
      return newMarkers;
    });
  };

  useEffect(() => {
    if (map) return; // If map is already initialized, do not re-initialize

    const initialMap = L.map(mapContainer.current).setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(initialMap);

    setMap(initialMap);
    console.log('Map initialized:', initialMap);

    // Cleanup function to remove map instance
    return () => {
      if (initialMap) {
        initialMap.remove();
      }
    };
  }, [map]);

  return (
    <div>
      <form onSubmit={handleAddressSubmit} style={{ marginBottom: '20px' }}>
        <label>
          Enter Address:
          <input type="text" name="address" required style={{ marginLeft: '10px', padding: '5px' }} />
        </label>
        <button type="submit" style={{ marginLeft: '10px', padding: '5px 10px' }}>Find Shops</button>
      </form>
      <div ref={mapContainer} style={{ height: '500px', width: '100%', backgroundColor: 'lightgray' }}></div>
    </div>
  );
};

export default MapComponent;
