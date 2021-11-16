import { NextPage } from 'next'

import Layout from '@/common/Layout'
import withAuth from '@/common/withAuth'

import PatientForm from '@/pages/patient/PatientForm'

const FormPage: NextPage = () => {
  return (
    <Layout>
      <PatientForm />
    </Layout>
  )
}
export default withAuth(FormPage)
