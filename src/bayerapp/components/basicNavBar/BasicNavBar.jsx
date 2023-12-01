import { ActionItem, Icon, IconButton, Tab, TabBar, TopAppBar } from "@element/react-components";
import { useDispatch } from "react-redux";
import logo1 from "../../../assets/logo.svg"
import subLogo from "../../../assets/tagline-xl.min.svg"
import { setSideBarOpen } from "../../../store/bayerApp";

export const BasicNavBar = () => {

  const { themeColor, logoSize } = { themeColor:"surface",logoSize:"small"};

  const dispatch = useDispatch();

  let logo;
    
    switch (logoSize) {
        case "medium":
          logo = themeColor === "primary" ? logo1 : logo1;
          break;
        case "large":
          logo = themeColor === "primary" ? logo1 : logo1;
          break;
        default:
          logo = themeColor === "primary" ? logo1 : logo1;
      }

  return (    
    <>
    
        <TopAppBar 
            logo={<img src={logo} alt="logo" />} 
            logoSize = "small"            
            subtitle={<img src={subLogo} alt="logo" />}
            themeColor={themeColor}
            title="BayerApp"            
            actions={
                <>
                <TabBar
                    clustered
                    clusterAlign='end'
                    variant={themeColor}    
                    >
                    <IconButton onClick={()=>{dispatch( setSideBarOpen(true))}}>
                        <Icon icon='menu'/>
                    </IconButton>
                </TabBar>

                <ActionItem
                        icon='notifications'
                        label='Check Notifications'
                    />
                <ActionItem icon='person' label='Click User' />
                </>
            }
        >
        </TopAppBar>
    </>
  )

}

