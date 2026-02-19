"use server"
import {signIn} from "@/auth"

export const doSocialLogin = async (provider: FormData) => {
    const action = provider.get('action') as string
    await signIn(action, { redirectTo: '/profile' })
}