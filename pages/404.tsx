import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Center } from '@mantine/core'
import { NextPage } from 'next'
import Error from 'next/error'

interface ErrorPageProps {}

const ErrorPage: NextPage<ErrorPageProps> = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 200)
  }, [])
  return <Error statusCode={404} />
}

export default ErrorPage
