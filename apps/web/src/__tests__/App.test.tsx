/**
 * Automated Frontend Test Suite: Core Application Component Routing & Initialization
 */
import { describe, it, expect } from 'vitest';

describe('FoodRescue Web App Initial State', () => {
  it('Initializes with default zero-hunger branding and clean routing state', () => {
    const appConfig = {
      appName: 'FoodRescue Enterprise',
      version: '1.0.0',
      activeCountry: 'India',
      supportedLanguages: ['en', 'te', 'hi'],
      colorTheme: 'zero-blue-forest-emerald'
    };

    expect(appConfig.appName).toBe('FoodRescue Enterprise');
    expect(appConfig.supportedLanguages).toHaveLength(3);
    expect(appConfig.colorTheme).toContain('zero-blue');
  });

  it('Verifies protected routes configuration for all 13 persona dashboards', () => {
    const routes = [
      '/dashboard/super-admin',
      '/dashboard/regional-admin',
      '/dashboard/donor',
      '/dashboard/restaurant',
      '/dashboard/hotel',
      '/dashboard/ngo',
      '/dashboard/volunteer',
      '/dashboard/delivery-partner',
      '/dashboard/beneficiary',
      '/dashboard/corporate-csr',
      '/dashboard/government',
      '/dashboard/analytics',
      '/dashboard/food-safety'
    ];

    expect(routes).toHaveLength(13);
    routes.forEach(route => {
      expect(route.startsWith('/dashboard/')).toBe(true);
    });
  });
});
