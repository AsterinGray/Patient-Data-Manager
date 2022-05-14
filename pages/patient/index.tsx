import Layout from '@/common/Layout'
import SearchBar from '@/common/SearchBar'
import withAuth from '@/common/withAuth'

import PatientsData from '@/pages/patient/PatientsData'
import { NextPage } from 'next'
import { useState } from 'react'

const PatientPage: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <Layout>
      <SearchBar setSearchTerm={setSearchTerm} />
      <PatientsData searchTerm={searchTerm.toLowerCase()} />
    </Layout>
  )
}

export default withAuth(PatientPage)
