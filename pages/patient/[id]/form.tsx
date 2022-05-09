import Layout from '@/common/Layout'

import RecordForm from '@/pages/record/RecordForm'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'

const RecordFormPage = () => {
  const router = useRouter()
  const [id, setId] = useState<string | string[]>('')
  const [patientId, setPatientId] = useState<string | string[]>('')

  useEffect(() => {
    if (router.query.record) {
      setId(router.query.record)
    }
    if(router.query.id) {
      setPatientId(router.query.id)
    }
  }, [router.query.record])

  return (
    <Layout>
      <RecordForm {...{ id, patientId }} />
    </Layout>
  )
}

export default RecordFormPage
