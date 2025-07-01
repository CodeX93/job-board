// Data fetching utilities for ISR
import { NEXT_PUBLIC_API_URL } from '../connect';
import { getRevalidationInterval } from './isr-config';

const BASE_URL = NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export async function getJobsData() {
  try {
    console.log('BASE_URL', BASE_URL);
    const response = await fetch(`${BASE_URL}/job_listing.json`, {
      next: { revalidate: getRevalidationInterval('JOBS_DATA') }
    });
    if (!response.ok) throw new Error('Failed to fetch jobs data');
    return response.json();
  } catch (error) {
    console.error('Error fetching jobs data:', error);
    return { jobListings: [] };
  }
}

export async function getCompaniesData() {
  try {
    console.log('BASE_URL', BASE_URL);
    const response = await fetch(`${BASE_URL}/companies.json`, {
      next: { revalidate: getRevalidationInterval('COMPANIES_DATA') }
    });
    if (!response.ok) throw new Error('Failed to fetch companies data');
    return response.json();
  } catch (error) {
    console.error('Error fetching companies data:', error);
    return { companies: [] };
  }
}

export async function getSkillsData() {
  try {
    const response = await fetch(`${BASE_URL}/skills_data.json`, {
      next: { revalidate: getRevalidationInterval('SKILLS_DATA') }
    });
    if (!response.ok) throw new Error('Failed to fetch skills data');
    return response.json();
  } catch (error) {
    console.error('Error fetching skills data:', error);
    return { skills: [] };
  }
}

export async function getJobSeekersData() {
  try {
    const response = await fetch(`${BASE_URL}/job-seekers.json`, {
      next: { revalidate: getRevalidationInterval('JOBSEEKERS_DATA') }
    });
    if (!response.ok) throw new Error('Failed to fetch job seekers data');
    return response.json();
  } catch (error) {
    console.error('Error fetching job seekers data:', error);
    return { jobSeekers: [] };
  }
}

// Client-side fallback functions
export async function fetchJobsDataClient() {
  try {
    const response = await fetch((process.env.NEXT_PUBLIC_API_URL || '') + '/job_listing.json');
    if (!response.ok) throw new Error('Failed to fetch jobs data');
    return response.json();
  } catch (error) {
    console.error('Error fetching jobs data:', error);
    return { jobListings: [] };
  }
}

export async function fetchCompaniesDataClient() {
  try {
    const response = await fetch((process.env.NEXT_PUBLIC_API_URL || '') + '/companies.json');
    if (!response.ok) throw new Error('Failed to fetch companies data');
    return response.json();
  } catch (error) {
    console.error('Error fetching companies data:', error);
    return { companies: [] };
  }
}

export async function fetchSkillsDataClient() {
  try {
    const response = await fetch((process.env.NEXT_PUBLIC_API_URL || '') + '/skills_data.json');
    if (!response.ok) throw new Error('Failed to fetch skills data');
    return response.json();
  } catch (error) {
    console.error('Error fetching skills data:', error);
    return { skills: [] };
  }
}

export async function fetchJobSeekersDataClient() {
  try {
    const response = await fetch((process.env.NEXT_PUBLIC_API_URL || '') + '/job-seekers.json');
    if (!response.ok) throw new Error('Failed to fetch job seekers data');
    return response.json();
  } catch (error) {
    console.error('Error fetching job seekers data:', error);
    return { jobSeekers: [] };
  }
}

export async function getJobById(id) {
  try {
    const response = await fetch(`${BASE_URL}/job_listing.json`, {
      next: { revalidate: getRevalidationInterval('JOBS_DATA') }
    });
    if (!response.ok) throw new Error('Failed to fetch jobs data');
    const data = await response.json();
    const jobId = Number.parseInt(id);
    const job = data.jobListings.find((j) => j.id === jobId);
    return { job, allJobs: data.jobListings };
  } catch (error) {
    console.error('Error fetching job by id:', error);
    return { job: null, allJobs: [] };
  }
}

export async function fetchJobByIdClient(id) {
  try {
    const response = await fetch((process.env.NEXT_PUBLIC_API_URL || '') + '/job_listing.json');
    if (!response.ok) throw new Error('Failed to fetch jobs data');
    const data = await response.json();
    const jobId = Number.parseInt(id);
    const job = data.jobListings.find((j) => j.id === jobId);
    return { job, allJobs: data.jobListings };
  } catch (error) {
    console.error('Error fetching job by id:', error);
    return { job: null, allJobs: [] };
  }
}

export async function getCompanyById(id) {
  try {
    const response = await fetch(`${BASE_URL}/companies.json`, {
      next: { revalidate: getRevalidationInterval('COMPANIES_DATA') }
    });
    if (!response.ok) throw new Error('Failed to fetch companies data');
    const data = await response.json();
    const companyId = Number.parseInt(id);
    const company = data.companies.find((c) => c.id === companyId);
    return { company, allCompanies: data.companies };
  } catch (error) {
    console.error('Error fetching company by id:', error);
    return { company: null, allCompanies: [] };
  }
}

export async function fetchCompanyByIdClient(id) {
  try {
    const response = await fetch((process.env.NEXT_PUBLIC_API_URL || '') + '/companies.json');
    if (!response.ok) throw new Error('Failed to fetch companies data');
    const data = await response.json();
    const companyId = Number.parseInt(id);
    const company = data.companies.find((c) => c.id === companyId);
    return { company, allCompanies: data.companies };
  } catch (error) {
    console.error('Error fetching company by id:', error);
    return { company: null, allCompanies: [] };
  }
}

export async function getTopCompaniesData() {
  try {
    const response = await fetch(`${BASE_URL}/companies_data.json`, {
      next: { revalidate: getRevalidationInterval('COMPANIES_DATA') }
    });
    if (!response.ok) throw new Error('Failed to fetch top companies data');
    return response.json();
  } catch (error) {
    console.error('Error fetching top companies data:', error);
    return { topCompanies: [] };
  }
}

export async function fetchTopCompaniesDataClient() {
  try {
    const response = await fetch((process.env.NEXT_PUBLIC_API_URL || '') + '/companies_data.json');
    if (!response.ok) throw new Error('Failed to fetch top companies data');
    return response.json();
  } catch (error) {
    console.error('Error fetching top companies data:', error);
    return { topCompanies: [] };
  }
} 