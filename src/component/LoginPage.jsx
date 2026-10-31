import { useState } from "react";


function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");


    function handleLogin(e) {
        e.preventDefault();

        if (email === "" || password === "") {
            setMessage("Please enter email and password!");
        } else {
            setMessage("Login Successful!");
        }
    }



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">



                <h1 className="text-3xl font-bold text-center">
                    Welcome Back!
                </h1>


                <p className="text-gray-500 text-center mb-6">
                    Please login to your account
                </p>




                <form onSubmit={handleLogin}>


                    <label className="block mb-2 font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full p-3 border rounded-lg  mb-4 outline-none focus:ring-2 focus:ring-blue-500"

                    />

                    <label className="block mb-2 font-medium">
                        Password
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full p-3 border rounded-lg  mb-4 outline-none focus:ring-2 focus:ring-blue-500"

                    />



                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-lg cursor-pointer hover:bg-blue-700 transition active:scale-98">
                        Login
                    </button>
                    <p className="text-center mt-4 text-green-600">
                        {message}
                    </p>




                </form>
            </div>
        </div>
    )
}
export default LoginPage;