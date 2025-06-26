import { getCompaniesData } from "../lib/data"
import CompaniesClientPage from "./components/CompaniesClientPage"

export default async function CompaniesPage() {
  const companiesData = await getCompaniesData()
  return <CompaniesClientPage initialData={companiesData} />
}
