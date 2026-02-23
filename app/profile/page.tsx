import { redirect } from 'next/navigation';
import { doLogout } from "@/actions";
import { auth } from "@/auth";

const page = async () => {
    const session = await auth();
    if (!session?.user) redirect('/');

  return (
    <div>
        <h1>Welcome to your profile, {session.user.name}</h1>
       <form action={doLogout}>
          <button type="submit" name="action" value="logout">Logout</button>
       </form>
    </div>
  )
}

export default page