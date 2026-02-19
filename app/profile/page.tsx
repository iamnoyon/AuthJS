import {auth, signOut} from '@/auth'
import { redirect } from 'next/navigation';

const page = async () => {
    const session = await auth();
    if(!session?.user) redirect('/');

  return (
    <div>
        <h1>Welcome to your profile, {session.user.name}</h1>
        <form action={async () => { "use server"; await signOut({ redirectTo: "/" }); }}>
            <button type="submit">Logout</button>
        </form>
    </div>
  )
}

export default page