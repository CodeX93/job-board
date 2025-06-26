import { getJobById } from "../../../lib/data"
import JobDetailClientPage from "../components/JobDetailClientPage"

export default async function JobDetailPage({ params }) {
  const { id } = params
  const { job, allJobs } = await getJobById(id)

  // Prepare company and similar jobs
  let company = null
  let similarJobs = []
  if (job) {
    company = {
      name: job.company,
      logo: job.logo,
      location: job.location,
      about:
        job.company === "Emirates"
          ? "Emirates Airline, based in Dubai, is a global leader in aviation, known for its exceptional service and state-of-the-art fleet. Since 1985, we've connected passengers to over 150 destinations and continue to innovate for a better flying experience."
          : "Oryx Search is a cutting-edge AI company focused on revolutionizing search and discovery through advanced GenAI and LLM technologies.",
      benefits: job.benefits,
    }
    similarJobs = allJobs.filter((j) => j.id !== job.id && (j.company === job.company || j.category === job.category)).slice(0, 4)
  }

  return <JobDetailClientPage job={job} company={company} similarJobs={similarJobs} />
}
