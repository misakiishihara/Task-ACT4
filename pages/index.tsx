import { useState, FormEvent } from 'react'
import { BadgeCheckIcon, ShieldCheckIcon } from '@heroicons/react/solid'
import { useMutateAuth } from '../hooks/useMutateAuth'
import type { NextPage } from 'next'
import { Layout } from '../components/Layout'

const Auth: NextPage = () => {
  //define states
    //'login' is initial mode
  const [isLogin, setIsLogin] = useState(true)
  const {
    email, setEmail,
    password, setPassword,
    loginMutation, registerMutation,
  } = useMutateAuth()

  //event on button
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isLogin) {
      loginMutation.mutate()
    } else {
      registerMutation.mutate()
    }
  }
    return (
      <Layout title='Auth'>
        <ShieldCheckIcon className='mb-6 h-12 w-12 text-blue-600' />
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              required
              className='
                my-2 rounded border border-gray-300
              '
              placeholder='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              required
              className='
                my-2 rounded border border-gray-300
              '
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
      </Layout>
    )
}

export default Auth
