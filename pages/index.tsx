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
                my-2 rounded border border-gray-300 px-3 py-2 focus:outline-none
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
                my-2 rounded border border-gray-300 px-3 py-2 focus:outline-none
              '
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='my-6 flex items-center justify-center text-sm'>
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="cursor-pointer font-medium hover:text-indigo-600"
            >
              change mode ??
            </span>
          </div>
          <button
            type='submit'
            className='
            group relative flex w-full justify-center rounded-md bg-indigo-600
            py-2 px-4 text-sm font-medium text-white hover:bg-indigo-600
            '
          >
            <span>
              <BadgeCheckIcon className='h-5 w-5'/>
            </span>
              {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
      </Layout>
    )
}

export default Auth
