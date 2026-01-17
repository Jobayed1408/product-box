import { dbConnect } from "@/lib/dbConnect";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcryptjs";

export const authOptions = {

    pages: {
    signIn: "/login",
  },
  
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            //  'Sign in with {name} button
            name: "Email & Password",

            //form inputs
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Enter email" },

                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Enter Password",
                },
            },

            async authorize(credentials, req) {
                const { email, password } = credentials;

                //find user
                // const user = userList.find((u) => u.name == username);
                const user = await dbConnect("users").findOne({ email });
                //if !user => err
                if (!user) return null;
                // console.log(user);

                //match password
                const isPassWordOk = await bcrypt.compare(password, user?.password);

                if (isPassWordOk) {
                    return user;
                }

                //my own login logic
                return null;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),

        // ...add more providers here
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            try {
                const payload = {
                    ...user,
                    // provider: account.provider,
                    // providerId: account.providerAccountId,
                    // role: "user",
                    createdAt: new Date().toISOString(),
                };

                if (!user?.email) {
                    return false;
                }

                const isExist = await dbConnect("users").findOne({
                    email: user.email,
                    // providerId: account.providerAccountId,
                });
                if (!isExist) {
                    await dbConnect("users").insertOne(payload);
                }
                return true;
            } catch (error) {
                return false;
            }
        },
        // async redirect({ url, baseUrl }) {
        //   return baseUrl;
        // },

        async session({ session, token, user }) {
            if (token) {
                // session.role = token.role;
                session.user.image = token.image
            }
            return session;
        },

        async jwt({ token, user, account, profile, isNewUser }) {
            if (user) {
                token.email = user.email;
                token.image = user.image;
                // token.role = user.role;
            }
            return token;
        },
    },
};