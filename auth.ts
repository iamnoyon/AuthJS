import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const {
    handlers,
    auth,
    signIn,
    signOut,
} = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    access_type: "offline", //to get a refresh token
                    prompt: "consent", //every time user tries to sign in, they will be prompted to select an account, even if they are already signed in
                },
            },
        })
    ],
    callbacks: {
        // we get data from backend in token callback and we can pass it to session callback, so that we can access it in our frontend
        async jwt({ token, account }) {
            console.log(token, 'jwt');
            return token
        },
        async session({ session, token }) {
            session.user.name = "Mithun Sarker";
            console.log(session, 'session');
            return session;
        },
    },
})
