// ISR Configuration
export const ISR_CONFIG = {
  // Revalidation intervals (in seconds)
  REVALIDATION_INTERVALS: {
    HOME_PAGE: 3600, // 1 hour
    JOBS_DATA: 1800, // 30 minutes
    COMPANIES_DATA: 7200, // 2 hours
    SKILLS_DATA: 86400, // 24 hours
    JOBSEEKERS_DATA: 1800, // 30 minutes
  },
  
  // Cache settings
  CACHE_SETTINGS: {
    // How long to cache the page (in seconds)
    PAGE_CACHE: 3600,
    // How long to cache data (in seconds)
    DATA_CACHE: 1800,
  },
  
  // Environment-specific settings
  ENVIRONMENT: {
    DEVELOPMENT: {
      REVALIDATION_INTERVALS: {
        HOME_PAGE: 60, // 1 minute for development
        JOBS_DATA: 30, // 30 seconds for development
        COMPANIES_DATA: 60, // 1 minute for development
        SKILLS_DATA: 300, // 5 minutes for development
        JOBSEEKERS_DATA: 30, // 30 seconds for development
      }
    },
    PRODUCTION: {
      REVALIDATION_INTERVALS: {
        HOME_PAGE: 3600, // 1 hour
        JOBS_DATA: 1800, // 30 minutes
        COMPANIES_DATA: 7200, // 2 hours
        SKILLS_DATA: 86400, // 24 hours
        JOBSEEKERS_DATA: 1800, // 30 minutes
      }
    }
  }
};

// Helper function to get revalidation interval based on environment
export function getRevalidationInterval(dataType) {
  const isDevelopment = process.env.NODE_ENV === 'development';
  const config = isDevelopment 
    ? ISR_CONFIG.ENVIRONMENT.DEVELOPMENT.REVALIDATION_INTERVALS
    : ISR_CONFIG.ENVIRONMENT.PRODUCTION.REVALIDATION_INTERVALS;
  
  return config[dataType] || ISR_CONFIG.REVALIDATION_INTERVALS.HOME_PAGE;
} 