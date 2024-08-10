import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./Main.scss";
import { useSelector } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import Layout from "../components/Layout/Layout";
import Page404 from "./Page404";
import LandingPage from "./LandingPage/LandingPage";
import ErrorFallback from "../components/Layout/ErrorFallBack";
import { Spin } from "antd";
import PreSignUp from "./auth-pages/PreSignUp";
import ClientLogin from "./auth-pages/client-onboarding/CientLogin";
import ClientSignup from "./auth-pages/client-onboarding/ClientSignup";
import ClientPreSignUp from "./auth-pages/client-onboarding/ClientPreSignUp";
import ClientOtp from "./auth-pages/client-onboarding/ClienrOtp";
import CoachPreLogin from "./auth-pages/caoch-onboarding/CoachPreLogin";

const ForgotPassword = lazy(() => import("./auth-pages/ForgotPassword"));
const Login = lazy(() => import("./auth-pages/Login"));
const ResetPassword = lazy(() => import("./auth-pages/ResetPassword"));
const AvailabilityScheduling = lazy(() =>
  import("./auth-pages/caoch-onboarding/AvailabilityScheduling")
);
const PersonalAddress = lazy(() =>
  import("./auth-pages/caoch-onboarding/PersonalAddress")
);
const ProfessionalBackground = lazy(() =>
  import("./auth-pages/caoch-onboarding/ProfessionalBackground")
);
const ProspectiveClientPreferences = lazy(() =>
  import("./auth-pages/caoch-onboarding/ProspectiveClientPreferences")
);
const TrainingSpecialties = lazy(() =>
  import("./auth-pages/caoch-onboarding/TrainingSpecialties")
);
const FitnessGoalsAndServicesOfInterest = lazy(() =>
  import("./auth-pages/client-onboarding/FitnessGoalsAndServicesOfInterest")
);
const HealthAndMedicalInformation = lazy(() =>
  import("./auth-pages/client-onboarding/HealthAndMedicalInformation")
);
const ClientPersonalAddress = lazy(() =>
  import("./auth-pages/client-onboarding/PersonalAddress")
);
const TrainerCoachPreferences = lazy(() =>
  import("./auth-pages/client-onboarding/TrainerPreference")
);
const Otp = lazy(() => import("./auth-pages/OTP"));
const PreLogin = lazy(() => import("./auth-pages/PreLogin"));
const Signup = lazy(() => import("./auth-pages/SignUp"));

const Main = ({ navigation }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Layout navigation={navigation} isAuthFlow={false}>
        <Suspense
          fallback={
            <Spin
              style={{
                marginInline: "auto",
                color: "#002b56",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            />
          }
        >
          <Routes>
            <Route path="/client-pre-login" element={<PreLogin />} />
            <Route path="/client-login" element={<ClientLogin/>} />
            <Route path="/coach-pre-login" element={<CoachPreLogin />} />
            <Route path="/client-pre-signup" element={<ClientPreSignUp />} />
            <Route path="/client-signup" element={<ClientSignup />} />
            <Route path="/client-otp" element={<ClientOtp />} />
            <Route
              path="/client-onboarding/personal-address"
              element={<ClientPersonalAddress />}
            />
            <Route
              path="/client-onboarding/trainer-preference"
              element={<TrainerCoachPreferences />}
            />
            <Route
              path="/client-onboarding/fitness-goals"
              element={<FitnessGoalsAndServicesOfInterest />}
            />
            <Route
              path="/client-onboarding/health-and-medical-information"
              element={<HealthAndMedicalInformation />}
            />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/otp" element={<Otp />} />
            <Route path="/personal-address" element={<PersonalAddress />} />
            <Route
              path="/professional-background"
              element={<ProfessionalBackground />}
            />
            <Route
              path="/prospective-client-preference"
              element={<ProspectiveClientPreferences />}
            />
            <Route
              path="/training-specialities"
              element={<TrainingSpecialties />}
            />
            <Route
              path="/availability-scheduling"
              element={<AvailabilityScheduling />}
            />
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<Page404 />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
           
            <Route path="*" element={<Navigate to={"/login"} />} />
          </Routes>
        </Suspense>
      </Layout>
    </ErrorBoundary>
  );
}
//   return (
//     <Layout navigation={navigation}>
//       <Suspense
//         fallback={
//           <Spin
//             style={{
//               marginInline: "auto",
//               color: "#002b56",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               height: "100vh",
//             }}
//           />
//         }
//       >
//         <Routes></Routes>
//       </Suspense>
//     </Layout>
//   );
// };

export default Main;
