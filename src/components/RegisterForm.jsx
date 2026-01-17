"use client";

import { postUser } from "@/actions/server/auth";
import { signIn } from "next-auth/react";
import Link from "next/link";
import toast from "react-hot-toast";

const RegisterForm = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = {
            name: form.name.value,
            email: form.email.value,
            password: form.password.value,
            image: form.image.value,
        };

        const result = await postUser(formData);

        if (result.success) { // Assuming your action returns a success boolean
            toast.success("Account created! Logging you in...");

            // Automatically sign in and redirect to /items
            await signIn("credentials", {
                email: formData.email,
                password: formData.password,
                callbackUrl: "/items",
            });
        } else {
            toast.error(result.message);
        }
    };

    // New Design Classes: Thin emerald borders, soft shadows, and focus rings
    const inputClass =
        "w-full p-2 rounded-lg border border-primary bg-white/80 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-yeallow-400 focus:border-transparent transition-all duration-200 shadow-sm";

    return (
        <div className="min-h-screen flex items-center justify-center  md:px-6">
            <div className="card w-full max-w-md shadow-lg bg-base-100 p-1 md:p-8">
                <form
                    onSubmit={handleSubmit}
                    className=" space-y-6"
                >
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
                            Create Your Account
                        </h2>
                        <p className="text-gray-500 text-sm">Join our community today</p>
                    </div>

                    {/* Full Name */}
                    <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-emerald-700 ml-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Jane Doe"
                            required
                            className={inputClass}
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-emerald-700 ml-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="name@example.com"
                            required
                            className={inputClass}
                        />
                    </div>

                    {/* Password */}
                    <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-emerald-700 ml-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            required
                            className={inputClass}
                        />
                    </div>

                    {/* Image URL */}
                    <div className="space-y-1">
                        <label className="text-xs font-bold uppercase tracking-wider text-emerald-700 ml-1">Profile Image URL</label>
                        <input
                            type="url"
                            name="image"
                            placeholder="https://example.com/photo.jpg"
                            className={inputClass}
                        />
                    </div>

                    {/* Submit Button - Vibrant Coral/Orange Gradient */}
                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-gradient-to-r from-orange-500 to-rose-500 text-white py-2 rounded-lg font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-orange-200 mt-4"
                    >
                        Register
                    </button>

                    <p>Already have an account? <Link href="/login" className="text-primary">Login</Link></p>
                </form>
                <div className="divider">OR</div>

                {/* Redirecting Social Logins to /items */}
                <button
                    className="btn w-full mb-2"
                    onClick={() => signIn("google", { callbackUrl: "/items" })}
                >
                    Register with Google
                </button>

                <button
                    className="btn w-full"
                    onClick={() => signIn("github", { callbackUrl: "/items" })}
                >
                    Register with GitHub
                </button>
                
            </div>
        </div>
    );
};

export default RegisterForm;