"use client"
import { doLogout } from '@/actions'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router';

const ProfilePage = () => {
    const router = useRouter();
    const {data: session} = useSession()
    if(!session?.user) router.push('/');
  return (
     <div>
            <h1>Welcome to your profile, {session?.user?.name}</h1>
           <form action={doLogout}>
              <button type="submit" name="action" value="logout">Logout</button>
           </form>
        </div>
  )
}

export default ProfilePage