import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setActiveNextOpenView } from "../../store/bayerApp";
import { SelectorTabPopUp } from "../components/selectorTabPopUp";
import { ViewPage } from "../config";
import { BayerAppLayout } from "../layout/BayerAppLayout"


export const BayerAppPage = () => {

  const { activeView, openedTabs, openedTabsSelector } = useSelector(state => state.bayerApp);

  const dispatch = useDispatch();

  const checkKeyPress = (e) => {
    if (e.ctrlKey && e.shiftKey) {
      dispatch(setActiveNextOpenView());
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", checkKeyPress)
    return () => {
      window.removeEventListener("keydown", checkKeyPress)
    }
  }, [])

  return (
    <BayerAppLayout>
      <SelectorTabPopUp openedTabs={openedTabs} open={openedTabsSelector.opened} />
      <ViewPage activeView={activeView} />
    </BayerAppLayout>
  )
}
