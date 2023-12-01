import { Navigate, Route, Routes } from "react-router-dom"
import { BayerAppPage } from "../pages/BayerAppPage"

export const BayerAppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<BayerAppPage />} />
        <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  )
}
