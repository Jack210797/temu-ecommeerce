'use client'

import React, { useActionState } from 'react'
import Form from 'next/form'

const initialState = {
  message: ''
}

type SignUpProps = {
  action: (prevState: any, formData: FormData) => Promise<{ message: string } | undefined>
}

const SignUp = ({ action }: SignUpProps) => {
  const [state, formAction, isPending] = useActionState(action, initialState)
  return (
    <Form action={formAction} className="max-w-md mx-auto my-16 p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-2">Join the DEAL Revolution!</h1>
      <p className="text-center text-sm text-rose-600 font-semibold mb-2"> 🔥LIMITED TIME OFFER🔥</p>
      <p className="text-center text-sm text-gray-600 font-semibold mb-2">
        Sign up now and get 90% OFF your first order!
      </p>

      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="new-password"
            required
            placeholder="Create a password"
            className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
          />
        </div>
        <div className=""></div>
        <button></button>
      </div>
    </Form>
  )
}

export default SignUp
