"use server"
import {signIn, signOut} from "@/auth"

export const doSocialLogin = async (actions: FormData) => {
    const actionName = actions.get('action') as string;
    await signIn(actionName, { redirectTo: '/profile' })
}

export const doLogout = async (actions: FormData) => {
    const actionName = actions.get('action') as string;
    await signOut({ redirectTo: "/" });
}