import { TopAppBarFixedAdjust } from '@element/react-components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fillSideBarTabs } from '../../store/bayerApp';
import { NavBar } from '../components';
import { BasicNavBar } from '../components/basicNavBar';
import { SideBar } from '../components/sideBar';
import "./styleBayerAppLayout.css"
// import { fillSideBarTabs, setSideBarOpen, setSideBarTitle } from "./store";

export const BayerAppLayout = ({ children }) => {

  const [width, setWidth] = useState(window.innerWidth);
  // const [height, setHeight] = useState(window.innerHeight);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    // setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  }, []);

  const { tabs } = useSelector(state => state.auth.menu);
  const { sideBarOpen } = useSelector(state => state.bayerApp.sideBar);
  const dispatch = useDispatch();

  useEffect(() => {

    if (width < 600) {
      dispatch(fillSideBarTabs(tabs));
    }
  }, [width])

  return (
    <>
      {
        width > 600
          ? <NavBar />
          : <BasicNavBar />
      }
      {
        width > 600
          ? <SideBar />
          : <SideBar />
      }
      <TopAppBarFixedAdjust style={{ paddingTop: "130px" }}>        
          {children}        
      </TopAppBarFixedAdjust>

    </>
  )
}
