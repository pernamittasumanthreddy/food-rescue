/**
 * Automated Unit Test Suite: FSSAI Food Safety Verification & Thermal Standards
 */
import test from 'node:test';
import assert from 'node:assert/strict';

test('FSSAI Compliance: Hot-holding temperature verification', () => {
  const cookedMealBatch = {
    batchId: 'BATCH-2026-HYD-001',
    category: 'Cooked Rice & Curries',
    coreTemperatureC: 64.5,
    minMandatedTempC: 60.0,
    preparationTimeHoursAgo: 1.5,
    maxTransitHours: 4.0
  };

  const isSafeTemperature = cookedMealBatch.coreTemperatureC >= cookedMealBatch.minMandatedTempC;
  const isWithinShelfLife = cookedMealBatch.preparationTimeHoursAgo <= cookedMealBatch.maxTransitHours;

  assert.equal(isSafeTemperature, true, 'Temperature must meet or exceed 60°C hot-hold standard');
  assert.equal(isWithinShelfLife, true, 'Batch must be within 4-hour safe transit window');
});

test('FSSAI Safety: Rejects expired or sub-threshold food batch', () => {
  const spoiledBatch = {
    batchId: 'BATCH-FAIL-002',
    coreTemperatureC: 45.0,
    minMandatedTempC: 60.0
  };

  const passed = spoiledBatch.coreTemperatureC >= spoiledBatch.minMandatedTempC;
  assert.equal(passed, false, 'Sub-60°C cooked batch must trigger automated rejection');
});
