# Initial State

initialState: { 
        applicationTitle: 'RM-Conosur', ///Nombre de la aplicación
        status: 'not-authenticated', //checking, 'not-authenticated' , 'authenticated'
        userId: null,
        email: null,
        token: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
        profiles: ["SAD"],
        menu:{ 
            tabs:[ ] 
        }

## Estructura de la propiedad menu.    
    Impacta directamente en el navbar.
    Contiene Las tabs Tabs. Las mismas pueden estar definidas "Hardcodeadas" o recibirlas del back.
# menu: Array de Tabs
# Tabs: {
            id: 1,
            title: "Carga",
            viewName: "UploadFiles"
        }
