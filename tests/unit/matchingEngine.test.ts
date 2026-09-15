/**
 * Automated Unit Test Suite: AI Smart Proximity & Capacity Matching
 */
import test from 'node:test';
import assert from 'node:assert/strict';

function calculateHaversineDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth radius km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

test('Matching Engine: Nearest NGO prioritization', () => {
  const donorLocation = { lat: 17.3850, lon: 78.4867 }; // Hyderabad Banjara Hills
  
  const ngos = [
    { id: 'NGO-01', name: 'Akshaya Seva', lat: 17.4000, lon: 78.4900, capacityMeals: 500 }, // ~2 km
    { id: 'NGO-02', name: 'Robin Hood Army', lat: 17.5000, lon: 78.6000, capacityMeals: 300 } // ~17 km
  ];

  const matched = ngos.map(ngo => ({
    ...ngo,
    distanceKm: calculateHaversineDistanceKm(donorLocation.lat, donorLocation.lon, ngo.lat, ngo.lon)
  })).sort((a, b) => a.distanceKm - b.distanceKm);

  assert.equal(matched[0].id, 'NGO-01');
  assert.ok(matched[0].distanceKm < 5);
});
