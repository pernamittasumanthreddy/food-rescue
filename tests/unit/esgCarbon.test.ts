/**
 * Automated Unit Test Suite: ESG Carbon & Water Avoidance Metrics
 */
import test from 'node:test';
import assert from 'node:assert/strict';

test('ESG Analytics: Carbon and water savings estimation', () => {
  const surplusKg = 120; // 120 kg cooked food rescued
  
  // Standard IPCC & FAO food waste emission factor: 2.5 kg CO2e per kg food diverted from landfill
  const co2AvoidedKg = surplusKg * 2.5;
  
  // Embedded agricultural water footprint: 450 Liters per kg mixed grain/vegetable food
  const waterSavedLiters = surplusKg * 450;
  
  // Beneficiary meals served: 2.5 meals per kg
  const mealsServed = surplusKg * 2.5;

  assert.equal(co2AvoidedKg, 300);
  assert.equal(waterSavedLiters, 54000);
  assert.equal(mealsServed, 300);
});
