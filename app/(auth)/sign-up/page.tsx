import AuthForm from '@/components/ui/AuthForm'
import { getLoggedInUser } from '@/lib/actions/user.action';
import React from 'react'

const SignUp = async  () => {

  return (
    <section className='flex-center size-full max-sm:px-3'>
      <AuthForm type='sign-up'/>
    </section>
  )
}

export default SignUp