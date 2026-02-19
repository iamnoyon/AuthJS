"use client"
import React from "react"
import { doSocialLogin } from "@/actions"

const LoginForm = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
          Login
        </h2>

        <form action={doSocialLogin}>
          <button
            type="submit"
            name="action"
            value="google"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-500 px-4 py-3 text-white font-medium hover:bg-red-600 transition"
          >
            Login with Google
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm