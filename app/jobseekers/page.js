import { getJobSeekersData } from "../lib/data"
import JobSeekersClientPage from "./components/JobSeekersClientPage"

export default async function JobSeekersPage() {
  const jobSeekersData = await getJobSeekersData()
  return <JobSeekersClientPage initialData={jobSeekersData} />
}
