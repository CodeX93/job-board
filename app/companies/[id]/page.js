import { getCompanyById } from "../../lib/data"
import CompanyDetailClientPage from "../components/CompanyDetailClientPage"

export default async function CompanyDetailPage({ params }) {
  const { id } = params
  const { company } = await getCompanyById(id)
  
  return <CompanyDetailClientPage company={company} />
} 