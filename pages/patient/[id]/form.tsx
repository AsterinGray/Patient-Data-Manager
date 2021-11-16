import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'

import Layout from '@/common/Layout'

import RecordForm from '@/pages/record/RecordForm'

const RecordFormPage = () => {
  const route = useRouter()
  const [id, setId] = useState<string | string[]>('')

  useEffect(() => {
    if (route.query.id) setId(route.query.id)
  }, [route.query.id])

  return (
    <Layout>
      <RecordForm id={id} />
    </Layout>
  )
}

export default RecordFormPage
