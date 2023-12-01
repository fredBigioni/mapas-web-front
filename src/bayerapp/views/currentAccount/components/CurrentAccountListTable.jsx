import React, { useMemo } from "react";

import { ActionItem, Table } from '@element/react-components';
export const CurrentAccountListTable = () => {


    const viewApplication = (id) => {
        alert(id)
    }

    const renderActionButton = (id,rowData,row) => {
        return(
        <ActionItem
            icon='notifications'
            label='Consultar Aplicaciones'
            onClick = {() => viewApplication(id)}
        />
        )
    }

    const columns = React.useMemo(
        () => [
            {
                header: "Actions",
                accessor: "code",
                displayTemplate: renderActionButton
              },
          {
            header: "First Name",
            accessor: "firstName",
          },
          {
            header: "Last Name",
            accessor: "lastName",
          },
          {
            header: "Age",
            accessor: "age",
          },
          {
            header: "Visits",
            accessor: "visits",
          },
          {
            header: "Status",
            accessor: "status",
          },
          {
            header: "Profile Progress",
            accessor: "progress",
          },
        ],
        []
      );

return <Table 
fullWidth
// expandable={true}
data={
    [{    
        code :"1",
        firstName: "Devin",
        lastName: "Townsend",
        age: 29,
        visits: 23,
        progress: 40,
        status: 0.7
    }]
    } columns={columns}    
    />;

}


