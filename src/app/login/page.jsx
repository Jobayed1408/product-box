"use client";
import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/items";

  const DEMO_USER = {
    email: "jamil@uddin.com",
    password: "jamil",
  };

  const handleDemoLogin = () => {
    setEmail(DEMO_USER.email);
    setPassword(DEMO_USER.password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl,
    });
    if (res?.error) {
      setError("Invalid email or password");
    } else {
      router.push(res.url || callbackUrl);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="card w-full max-w-md shadow-lg bg-base-100 p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            className="input input-bordered w-full"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="input input-bordered w-full"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btn btn-primary w-full" type="submit">
            Login
          </button>
          <p>
            Not have an account?{" "}
            <a href="/register" className="text-primary">
              Register
            </a>
          </p>
        </form>
        <button
          type="button"
          onClick={handleDemoLogin}
          className="w-full mt-2 bg-gray-200 text-gray-800 py-2 rounded"
        >
          Demo Login
        </button>
        <div className="divider">OR</div>
        <button className="btn w-full mb-2" onClick={() => signIn("google")}>
          Login with Google
        </button>
        <button className="btn w-full" onClick={() => signIn("github")}>
          Login with GitHub
        </button>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}