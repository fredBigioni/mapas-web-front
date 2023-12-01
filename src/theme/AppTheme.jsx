//import '@element/themes/bayer';
// import '@element/themes/badge'; NOFUNCIONA
//import '@element/themes/dad';
//import '@element/themes/channel';
import '@element/themes/velocity';

import { useEffect } from "react";
import { useSelector } from "react-redux"


export const AppTheme = ({children}) => {

  const {theme} = useSelector(state => state.bayerApp);
  // console.log(`Tema Seleccionado ${theme}`);

  // useEffect(() => {
  //   renderTheme();
  // }, [theme])
  
  // const renderTheme = () => {
  //   // console.log(theme);
  //   switch(theme){      
  //     case 'bayer' :
  //       import('@element/themes/bayer');
  //       return(<>{children}</>);
  //     case 'asgrow' :
  //       import('@element/themes/asgrow');
  //       return(<>{children}</>);
  //     default:
  //       //import('@element/themes/badge');
  //       return(<>{children}</>);
  //   }
    
  // }

  return (
    
    <div style={{"zoom":"0.88"}}>
        {/* {renderTheme()} */}
        {children}
    </div>
  )
}
