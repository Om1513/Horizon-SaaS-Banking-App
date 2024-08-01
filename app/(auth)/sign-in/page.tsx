
import AuthForm from '@/components/ui/AuthForm'
import { getLoggedInUser } from '@/lib/actions/user.action';
import React from 'react'

const SignIn = () => {


  return (
    <section className='flex-center size-full '>
      <AuthForm type='sign-in'/>
    </section>
  )
}

export default SignIn