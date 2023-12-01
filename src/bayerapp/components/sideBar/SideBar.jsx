import { useState, useEffect } from "react";
import {
  Divider, ExpansionContent, ExpansionIcon, ExpansionPanel,
  ExpansionTrigger, GridCol, List, ListItem
} from "@element/react-components"
import { useDispatch, useSelector } from "react-redux";
import { setActiveView, setSideBarOpen } from "../../../store/bayerApp";
import { changeTheme } from "../../../store/bayerApp";
import "./styleSideBar.css"

export const SideBar = () => {

  const dispatch = useDispatch();
  const { sideBarOpen, title, sideBarTabs } = useSelector(state => state.bayerApp.sideBar);
  const [menuHeight, setMenuHeight] = useState("100vh");

  useEffect(() => {
    const updateMenuHeight = () => {
      setMenuHeight(`${window.innerHeight}px`);
    };

    window.addEventListener("resize", updateMenuHeight);

    return () => {
      window.removeEventListener("resize", updateMenuHeight);
    };
  }, []);

  const handleMenuToggle = () => {
    dispatch(setSideBarOpen(!sideBarOpen));
  };

  const drawListitem = (tabItems) => {
    return (
      <>
        {tabItems.map((e) => {
          if (e.subTabs && e.subTabs.length != 0) {
            return (
              <ExpansionPanel key={`ExpansionPanel${e.id}`} accordion={true}>
                <GridCol key={`GridCol${e.id}`}>
                  <ExpansionTrigger expansionId={`expansionId${e.id}`} key={`expansionId${e.id}`} disabled={false}>
                    <ListItem
                      key={`ListItem${e.id}`}
                      trailingBlock={
                        <ExpansionIcon
                          key={`ExpansionIcon${e.id}`}
                          expansionId={`expansionId${e.id}`}
                        />
                      }
                      trailingBlockType="icon"
                    >
                      {e.title}
                    </ListItem>
                  </ExpansionTrigger>
                  <ExpansionContent expansionId={`expansionId${e.id}`} key={`ExpansionContent${e.id}`}>
                    <GridCol
                      className="childExpansionContent"
                      key={`GridColExpansionContent${e.id}`}
                    >
                      {drawListitem(e.subTabs)}
                    </GridCol>
                  </ExpansionContent>
                </GridCol>
              </ExpansionPanel>
            )
          } else {
            return (
              <ListItem
                key={`ListItem${e.id}`}
                onClick={() => {
                  // alert(`${e.title + ' ' + e.id}`)
                  // dispatch(setActiveView(e));
                  dispatch(changeTheme(e.title));
                  handleMenuToggle();
                }}
              >
                {e.title}
              </ListItem>
            )
          }
        }
        )}
      </>
    )
  }

  return (
    // <SideSheet
    //   headlineText={title}
    //   variant='modal'
    //   //   variant='modal'       
    //   // elevated
    //   // floating
    //   // coplanar
    //   open={sideBarOpen}
    //   onOpen={() => dispatch(setSideBarOpen(false))}
    //   // onClose={() => dispatch(setSideBarOpen(false))}

    // >
    // <Divider
    //   themeColor={"secondary"}
    //   // themeColorImportant={themeColorImportant}
    //   variant={"tall"}
    // />
    // <List>
    //   {/* <ExpansionPanel accordion={true}> */}
    //   {drawListitem(sideBarTabs)}
    //   {/* </ExpansionPanel> */}
    // </List>
    // </SideSheet>
    <>
      <div
        className={`menu-overlay ${sideBarOpen ? "open" : ""}`}
        onClick={handleMenuToggle}
      ></div>

      <div
        className={`menu-container ${sideBarOpen ? "open" : ""}`}
        style={{
          height: menuHeight,
          
        }}
      >
        <div className="sidebar">
          <div className="sidebar-content">
            <List>{drawListitem(sideBarTabs)}</List>
          </div>
        </div>
      </div>
    </>
  )
}
