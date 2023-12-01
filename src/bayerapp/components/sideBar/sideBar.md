# SideBar modo de uso
Recibe un array de tabs y dibuja recursivamente en una lista/Lista expndida dependiendo del caso
Al hacer click en un menu sete estado activeView con el tab (ultimo hijo del subtab) seleccionado
## Necesario
import { setActiveView, setSideBarOpen } from "../../../store/bayerApp";

El objeto tiene en el store debe contener un formato como este

    state => state.bayerApp.sideBar

    sideBar:{
      title: "",
      sideBarOpen: false,
      sideBarTabs: [
        {
          id: 1,
          title: "Consulta",
          subTabs: [ 
            {
                id: 11,
                title: "Consulta1",
                subTabs: [
                    {
                        id: 111,
                        title: "Consulta11",
                        subTabs: [...],
                        viewName: ""
                    }
                ],
                viewName: ""
            }
           ],
          viewName: ""
        }
      ],
    },

Utiliza las acciones globales 
setActiveView({recibe un tab})); 
setSideBarOpen({false})
