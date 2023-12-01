import { ActionItem, Button, Menu, Tab, TabBar, TopAppBar } from "@element/react-components";
import logo1 from "../../assets/logo.svg"
import subLogo from "../../assets/tagline-xl.min.svg"
import { useDispatch, useSelector } from "react-redux";
import { fillSideBarTabs, setActiveView, setSideBarOpen, setSideBarTitle, setOpenedTabsSelector, removeActiveView } from "../../store/bayerApp";
import { useCallback, useState } from "react";
import { logout } from "../../store/auth";


export const NavBar = () => {

    const dispatch = useDispatch();
    const { tabs } = useSelector(state => state.auth.menu);
    const { applicationTitle } = useSelector(state => state.auth);
    const { openedTabs, activeView } = useSelector(state => state.bayerApp);
    const { themeColor, logoSize } = { themeColor: "surface", logoSize: "small" };

    const handleClickOnTab = ({ id }, fatherName) => {
        var selectedTab = tabs.find(item => item.id === id);

        if (selectedTab && selectedTab.subTabs && selectedTab.subTabs.length != 0) {
            dispatch(setSideBarTitle(fatherName));
            dispatch(fillSideBarTabs(selectedTab.subTabs));
            dispatch(setSideBarOpen(true));

        } else {
            dispatch(setActiveView(selectedTab));
            ///Cargar Pestaña activa
        }

    }

    // const tabs = useMemo(() => ["Home", "Favorites", "Inbox"], []);
    // console.log(tabs);

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

    const [open, setOpen] = useState(false);
    const openMenu = useCallback(() => {
        setOpen(!open);
    }, [open]);
    openMenu.toString = () => 'openMenu';
    const closeMenu = useCallback(() => {
        setOpen(false);
    }, []);
    closeMenu.toString = () => 'closeMenu';

    return (
        <>
            <TopAppBar
                logo={<img src={logo} alt="logo" />}
                logoSize="small"
                subtitle={<img src={subLogo} alt="logo" />}
                themeColor={themeColor}
                title={applicationTitle}
                actions={
                    <>
                        {tabs ?
                            <TabBar
                                clustered
                                clusterAlign='end'
                                variant={themeColor}
                            >
                                <Tab
                                    key={"homePage"}
                                    onClick={() => dispatch(setActiveView({}))}
                                >
                                    {"Home"}
                                </Tab>

                                {
                                    tabs.map(({ id, title }) => {
                                        
                                        return (
                                            <Tab key={id} onClick={() => handleClickOnTab({ id }, title)}>{title}</Tab>
                                        )
                                    })
                                }
                            </TabBar>
                            : <></>
                        }
                        {
                            openedTabs.length > 1 && <ActionItem icon='tab' label='Click User' onClick={() => { dispatch(setOpenedTabsSelector(true)) }} />
                        }

                        <ActionItem
                            icon='notifications'
                            label='Check Notifications'
                        />
                        <Menu
                            trigger={<ActionItem icon='person' label='Click User' onClick={openMenu} />}
                            open={open}
                            surfaceOnly={false}
                            onClose={closeMenu}

                        >
                            <div style={{ padding: "5px", height: "40px" }}>
                                <Button variant='outlined' onClick={() => dispatch(logout())}>
                                    LogOut
                                </Button>
                            </div>
                        </Menu>
                    </>
                }
                prominentTabs={<TabBar
                    clustered
                    clusterAlign='start'
                >
                </TabBar>
                }
            >

            </TopAppBar>
        </>
    )

}

