import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  applicationTitle: 'Flooring-Bayer', ///Nombre de la aplicación
  status: 'authenticated', //checking, 'not-authenticated' , 'authenticated'
  isLoading: false,
  user: {
    description: null
    , email: null
    , firstName: null
    , id: 1
    , lastName: null
    , lastUpdate: null
    , login: null
    , password: null
    , status: null
    , profiles: null
  },
  menu: {
    tabs: [
      {
        id: 1,
        title: "Carga de pantallas",
        viewName: "SetScreen"
      },
      {
        id: 3,
        title: "Imagenes y publicidad",
        viewName: "Publicity"
      },
      {
        id: 2,
        title: "Otros",
        subTabs: [
          {
            id: 21,
            title: "Cambiar Tema",
            subTabs: [{
              id: 211,
              title: "Bayer",
              subTabs: [],
              viewName: "Bayer"
            },
            {
              id: 212,
              title: "Vegstate",
              subTabs: [],
              viewName: "vegstate"
            },
            {
              id: 213,
              title: "Channel",
              subTabs: [],
              viewName: "Channel"
            },
            {
              id: 214,
              title: "DAD",
              subTabs: [],
              viewName: "DAD"
            },
            {
              id: 215,
              title: "Dekalb",
              subTabs: [],
              viewName: "Dekalb"
            },
            {
              id: 216,
              title: "Deltapine",
              subTabs: [],
              viewName: "Deltapine"
            },
            {
              id: 217,
              title: "Element",
              subTabs: [],
              viewName: "Element"
            },
            {
              id: 218,
              title: "Fontanelle",
              subTabs: [],
              viewName: "Fontanelle"
            },
            {
              id: 219,
              title: "Gold country",
              subTabs: [],
              viewName: "Gold country"
            },
            {
              id: 220,
              title: "Hubner",
              subTabs: [],
              viewName: "Hubner"
            },
            {
              id: 221,
              title: "Intacta",
              subTabs: [],
              viewName: "Intacta"
            },
            {
              id: 222,
              title: "Jung",
              subTabs: [],
              viewName: "Jung"
            },
            {
              id: 223,
              title: "Velocity",
              subTabs: [],
              viewName: "Velocity"
            },
            ],
            viewName: ""
          }
        ],
        viewName: ""
      },
      // {
      //   id: 1,
      //   title: "Carga",
      //   viewName: "UploadFiles"
      // },
      // {
      //   id: 2,
      //   title: "Visualización",
      //   viewName: ""
      // },
      // {
      //   id: 3,
      //   title: "Maestros",
      //   subTabs: [
      //     {
      //       id: 31,
      //       title: "Configuración de Files",
      //       subTabs: [
      //         {
      //           id: 311,
      //           title: "LayOut",
      //           subTabs: [],
      //           viewName: "BasicMaster",
      //           parameter: "ImportFileConfig" //Parametro extra que recibe para inicializar una Vista
      //         }
      //       ]
      //     },
      //     {
      //       id: 32,
      //       title: "Varios",
      //       subTabs: [
      //         {
      //           id: 321,
      //           title: "Schema",
      //           subTabs: [],
      //           viewName: "BasicMaster",
      //           parameter: "FileSchemaConfig" //Parametro extra que recibe para inicializar una Vista
      //         }
      //       ]
      //     }
      //   ],
      //   viewName: ""
      // },
      // {
      //   id: 4,
      //   title: "Otros",
      //   subTabs: [
      //     {
      //       id: 41,
      //       title: "Submenu",
      //       subTabs: [{
      //         id: 411,
      //         title: "TestPage",
      //         subTabs: [],
      //         viewName: "TestPage"
      //       },
      //       {
      //         id: 412,
      //         title: "CurrentAccountList",
      //         subTabs: [],
      //         viewName: "CurrentAccountList"
      //       },
      //       ],
      //       viewName: ""
      //     },
      //     {
      //       id: 42,
      //       title: "TestPageReportDesigner",
      //       subTabs: [],
      //       viewName: "TestPageReportDesigner"
      //     }
      //   ],
      //   viewName: ""
      // }
    ],
  }
};

export const authSlice = createSlice({
  name: 'auth',

  initialState: initialState,

  reducers: {
    setLogin: (state, { payload }) => {
      debugger;
      localStorage.setItem('x-token', payload.data.token);
      state.user = payload.data;
      state.status = "authenticated";
    },
    logout: (state, action) => {
      state.status = initialState.status;
      state.user = initialState.user;
      state.status = "not-authenticated";
    },
    checkingCredentials: (state, { payload }) => {
      state.status = payload;
    },
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },

  },
});
export const { setLogin, logout, checkingCredentials, setIsLoading } = authSlice.actions;
