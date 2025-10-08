import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import MainLayout from "./layouts/MainLayout";

// All route imports
import { publicRoutes } from "./routes/PublicRoutes";
import { featureRoutes } from "./routes/FeatureRoutes";
// (add others similarly)
import { userRoutes } from "./routes/UserRoutes";
import { adminRoutes } from "./routes/AdminRoutes";
import Loader from "./utils/Loader";
function App() {
  return (
    <AuthProvider>
      <Router>
        <MainLayout>
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-screen text-white">
               <Loader/>
              </div>
            }
          >
            <Routes>
              {[
                ...publicRoutes,
                ...featureRoutes,
                ...userRoutes,
                ...adminRoutes,
              ]}
            </Routes>
          </Suspense>
        </MainLayout>
      </Router>
    </AuthProvider>
  );
}

export default App;
