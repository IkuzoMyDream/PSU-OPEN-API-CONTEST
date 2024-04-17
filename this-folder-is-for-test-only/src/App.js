import { useAuth } from "react-oidc-context";

function App() {  
  const auth = useAuth();
  return (
    <div>
      <button onClick={auth.signinRedirect}>Log in</button>
    </div>
  );
}

export default App;
