import { useState, useEffect } from "react";
import API from "./api";



export default function Auth() {
    const [isLogin, setIsLogin] = useState(false);
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", password: "" });


    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) window.location.href = "/dashboard";
    }, []);

    const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMsg("");
        try {
            const url = isLogin ? "/auth/login" : "/auth/signup";
            const payload = isLogin ? { email: form.email, password: form.password } : form;
            const res = await API.post(url, payload);

            console.log("AUTH RESPONSE:", res.data);

            if (!res.data.token) {
                setMsg("Token missing in response");
                return;
            }

            localStorage.setItem("token", res.data.token);
            setMsg(res.data.message || "Success");
            window.location.href = "/dashboard";
            setForm({ name: "", email: "", password: "" });
        } catch (err) {
            setMsg(err.response?.data?.message || "Request failed");
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Interview Platform</h1>
                    <p className="text-gray-500 mt-2">{isLogin ? "Welcome back 👋" : "Create your account 🚀"}</p>
                </div>

                <form onSubmit={submit} className="space-y-4">
                    {!isLogin && (
                        <input
                            name="name"
                            value={form.name}
                            onChange={change}
                            placeholder="Full Name"
                            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    )}

                    <input
                        name="email"
                        value={form.email}
                        onChange={change}
                        placeholder="Email Address"
                        className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={change}
                        placeholder="Password"
                        className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-semibold transition"
                    >
                        {loading ? "Please wait..." : isLogin ? "Login" : "Create Account"}
                    </button>
                </form>

                <button
                    onClick={() => {
                        setIsLogin(!isLogin);
                        setMsg("");
                    }}
                    className="w-full mt-4 text-sm text-blue-600 hover:underline"
                >
                    {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
                </button>

                {msg && (
                    <div className="mt-4 text-center text-sm font-medium text-gray-700 bg-gray-100 rounded-xl py-2 px-3">
                        {msg}
                    </div>
                )}
            </div>
        </div>
    );
}
