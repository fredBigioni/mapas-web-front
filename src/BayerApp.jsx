import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme"

export const BayerApp = () => {
  return (
    <AppTheme>
      {/* <div>appTheme</div> */}
      <AppRouter/>      
    </AppTheme>
  )
}
