import { getAnalytics, isSupported } from 'firebase/analytics';
import { app } from '../lib/firebase';

// Only initialize analytics if app is available
export const initializeAnalytics = async () => {
  try {
    if (!app) {
      console.warn('Firebase app not initialized');
      return null;
    }
    
    if (await isSupported()) {
      return getAnalytics(app);
    }
  } catch (error) {
    console.warn('Analytics initialization failed:', error);
  }
  return null;
};