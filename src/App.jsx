import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./routes/AllRoutes.routes.jsx";
import AuthContextProvider from "./context/Auth.context.jsx";


const App = () => {

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <AllRoutes/>
      </BrowserRouter>
    </AuthContextProvider>
  )

}

export default App
