import { createSlice } from '@reduxjs/toolkit'


const theme = localStorage.getItem('theme');

export const bayerAppSlice = createSlice({
  name: 'bayerApp',

  initialState: {
    theme: theme === "" || theme === undefined ? "default" :
      (theme === 'Asgrow' ?
        import('@element/themes/asgrow') :
        theme === 'Channel' ?
          import('@element/themes/channel') :
          theme === 'Vegstate' ?
          import('@element/themes/vegstate') :
          theme === 'DAD' ?
            import('@element/themes/dad') :
            theme === 'Dekalb' ?
              import('@element/themes/dekalb') :
              theme === 'Deltapine' ?
                import('@element/themes/deltapine') :
                theme === 'Element' ?
                  import('@element/themes/element') :
                  theme === 'Fontanelle' ?
                    import('@element/themes/fontanelle') :
                    theme === 'Gold country' ?
                      import('@element/themes/goldcountry') :
                      theme === 'Hubner' ?
                        import('@element/themes/hubnerseed') :
                        theme === 'Intacta' ?
                          import('@element/themes/intacta') :
                          theme === 'Jung' ?
                            import('@element/themes/jungseedgenetics') :
                            theme === 'Velocity' ?
                              import('@element/themes/velocity') :
                              import('@element/themes/bayer')), //asgrow // bayer // default: toma el import en apptheme //
    navBar: {
    },
    sideBar: {
      title: "",
      sideBarOpen: false,
      sideBarTabs: [
        // {
        //   id: 11,
        //   title: "Consulta",
        //   subTabs: [],
        //   viewName: "nothingSelectedView"
        // }
      ],
    },
    openedTabsSelector: {
      opened: false,
    },
    activeView: {
      // id:1,
      // viewName: "HomePage"
    },
    openedTabs: [
      // {      
      //   id:0,
      //   title:"HomePage",
      //   subTabs:[],
      //   viewName:"HomePage",
      // }
    ],
  },

  reducers: {
    fillSideBarTabs: (state, { payload }) => {
      state.sideBar.sideBarTabs = payload;
    },
    setSideBarOpen: (state, { payload }) => {
      state.sideBar.sideBarOpen = payload;
    },
    setSideBarTitle: (state, { payload }) => {
      state.sideBar.title = payload;
    },
    setOpenedTabsSelector: (state, { payload }) => {
      state.openedTabsSelector.opened = payload;
    },
    setActiveView: (state, { payload }) => {
      state.activeView = payload;
      //Se agrega al array de pestañas abiertas por nombre de display del componenete, por si 2 menues apuntan al mismo lugar
      if (payload.viewName && state.openedTabs.find(item => item.viewName === payload.viewName) === undefined && payload.viewName !== "HomePage") {
        state.openedTabs.push(payload);
      }
    },
    removeActiveView: (state, { payload }) => {
      // if(state.openedTabs.length > 1){
      state.openedTabs.map((ot, i) => {
        if (ot.viewName === state.activeView.viewName) {
          state.openedTabs.splice(i, 1);
          state.activeView = state.openedTabs[0];
          return;
        }
      }
      )
      // }
    },
    setActiveNextOpenView: (state) => {
      const maxPosition = state.openedTabs.length - 1;
      let openIndex = -1;
      state.openedTabs.filter(function (t, i) {
        if (t.viewName === state.activeView.viewName) {
          openIndex = i;
          return
        }
      });
      if (openIndex != -1) {
        if (openIndex === maxPosition) {
          state.activeView = state.openedTabs[0];
        } else {
          state.activeView = state.openedTabs[openIndex + 1];
        }
      }
    },
    changeTheme: (state, { payload }) => {
      state.theme = payload;
      localStorage.setItem("theme", payload);
      window.location.reload(false);
    },
  },
});
export const { fillSideBarTabs, setSideBarOpen, setSideBarTitle, setActiveView, changeTheme, setActiveNextOpenView, setOpenedTabsSelector, removeActiveView } = bayerAppSlice.actions;
