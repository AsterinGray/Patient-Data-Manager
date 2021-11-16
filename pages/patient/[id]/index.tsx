import { NextPage } from 'next'

import Layout from '@/common/Layout'
import withAuth from '@/common/withAuth'

import PatientDetail from '@/pages/patient/PatientDetail'
import RecordsData from '@/pages/record/RecordsData'

const PatientDetailPage: NextPage = () => {
  return (
    <Layout>
      <PatientDetail />
      <RecordsData />
    </Layout>
  )
}

export default withAuth(PatientDetailPage)
