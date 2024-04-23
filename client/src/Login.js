import React from 'react';
import { useAuth } from "react-oidc-context";

function Loginpage() {
  const auth = useAuth();

  const handleLogin = () => {
    auth.signinRedirect();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Log in</h2>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          กดเพื่อยืนยันตัวตน
        </button>
      </div>
    </div>
  );
}

export default Loginpage;
