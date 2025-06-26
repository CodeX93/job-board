import { getJobsData, getTopCompaniesData, getSkillsData } from "../lib/data"
import HomeClientPage from "./components/HomeClientPage"

export default async function Home() {
  // Fetch data server-side with ISR
  const [jobsData, topCompaniesData, skillsData] = await Promise.all([
    getJobsData(),
    getTopCompaniesData(),
    getSkillsData()
  ])

  return <HomeClientPage jobsData={jobsData} companiesData={topCompaniesData} skillsData={skillsData} />
}
