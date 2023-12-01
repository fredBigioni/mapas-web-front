import { useState } from "react";
import { ReportDesignerLayOut } from "./layout/ReportDesignerLayOut"

const datasetList = [
    {
        type:"string"
        ,description: "col1"
        ,header: 'First Name'
        ,accessor: 'firstName'
    },
    {
        type:"string"
       ,description: "col2"
       ,header: "Last Name"
       ,accessor: "lastName"
    },
    {
        type:"string"
       ,description: "col3"
       ,header: "Last Name"
       ,accessor: "visits"
    },
]  



const reportConfig = [
  {
      type:"table"
      ,position: null
      ,columns: [
        {
          type:"string"
          ,description: "col4"
          ,header: "Profile Progress"
          ,accessor: "progress"
        }
      ]
      ,description: "col1"
  }
]  

export const ReportDesigner = (
    // datasetList
    // ,tableScheme
    ) => {

      const [isDragging, setIsDragging] = useState({})      
    
      const handleDragStart = (item) => {
          console.log("handleDragStart");
          console.log(item);          
          setIsDragging(item);
        };
  
      const handleDragEnd = (item) => {
        console.log("handleDragEnd"); 
        console.log(item);  
        setIsDragging({}); 
      };

      const handleDrop = (destination) => {
        console.log("handleDrop")
        // debugger;
        if(!reportConfig[0].columns.find(element => element === isDragging) ){
          reportConfig[0].columns.push(isDragging);
        }        
        console.log(reportConfig);
      }    
      
  return (
    <ReportDesignerLayOut datasetList={datasetList} reportConfig={reportConfig} handleDragStart={handleDragStart} handleDragEnd={handleDragEnd} handleDrop={handleDrop}/>
  )
}
