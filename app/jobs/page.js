import { getJobsData } from "../lib/data"
import JobsClientPage from "./components/JobsClientPage"

export default async function JobBoard() {
  const jobsData = await getJobsData()
  return <JobsClientPage initialData={jobsData} />
}
