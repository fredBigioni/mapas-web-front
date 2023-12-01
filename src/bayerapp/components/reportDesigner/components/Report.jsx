import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableHeaderRow, TableRow } from '@element/react-components';
import { useEffect, useState } from 'react';
import { DestinationItem } from './DestinationItem';

export const Report = ({reportConfig, handleDrop}) => {
    const data = 
    [{
        firstName: "Devin",
        lastName: "Townsend",
        age: 29,
        visits: 23,
        progress: 40,
        status: 0.7,
        paid: true,
        paymentDue: 49.03,
        lastVisit: 'Sat Feb 08 2020 00:00:00 GMT-0600 (Central Standard Time)',
        notes: ""
    },
    {
        firstName: "Devin2",
        lastName: "Townsend3",
        age: 30,
        visits: 23,
        progress: 33,
        status: 0.7,
        paid: true,
        paymentDue: 49.03,
        lastVisit: 'Sat Feb 08 2020 00:00:00 GMT-0600 (Central Standard Time)',
        notes: ""
    }];

    
    const [columns, setColumns] = useState(reportConfig[0].columns);

    useEffect(() => {
        setColumns(reportConfig[0].columns)
    
    }, [columns])

    console.log(columns);
    
    
    const handleDragOver = (e) => {
        e.preventDefault();
        // console.log(e)
        }

        const renderCells = () => {
            
            if(reportConfig){
                if(reportConfig[0].columns){
                    console.log(reportConfig[0].columns);
                    reportConfig[0].columns.map((i)=>{
                        console.log(i.description);
                        return (<TableHeaderCell>{i.description}</TableHeaderCell>);
                    })
                    
                }
            }
        }

        const renderTalbe = () =>{

        }
  return (
        <>
                <div>
                    {reportConfig[0].columns.map((i)=>{
                                    console.log(i.description);
                                    return (<div>{i.description}</div>);
                                })}
                </div>

                <DestinationItem id = "DestinationTabla"  handleDrop={handleDrop}>
                    {/* <Table>
                        <TableHeader>
                            <TableHeaderRow> */}
                                {/* {renderCells()} */}
                                {/* {reportConfig[0].columns.map((i)=>{
                                    console.log(i.description);
                                    return (<TableHeaderCell>{i.description}</TableHeaderCell>);
                                })} */}
                            {/* </TableHeaderRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Row 1 Cell 1</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table> */}
                    
                    <Table 
                    columns = {columns} 
                    data = {data}
                    //columns={columns}
                    >
                    </Table>
            

                </DestinationItem>
        </>
  )

}
