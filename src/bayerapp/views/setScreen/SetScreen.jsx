
import React, { useCallback, useMemo, useState } from "react";
import { Table, Button, Grid, Icon, Modal, Textfield, Snackbar, TableTopBar } from "@element/react-components";
import './SetScreen.css';
import { PopUpModal } from "./components/PopUpModal";

export const SetScreen = (props) => {


    /* Example Data Object
       {
           firstName: "Devin",
           lastName: "Townsend",
           age: 29,
           visits: 23,
           progress: 40,
           status: 0.7
       }
       */


    const buttonStyle = {

    };

    // See Table README for full column schema
    const columns = React.useMemo(
        () => [
            {
                header: "Nombre Sala",
                accessor: "sala",
                cellProps: {
                    // highlight existing or new patients
                    style: { backgroundColor: "#1B9BD7", color: "#fff" },
                },
                headerCellProps: {
                    // highlight existing or new patients
                    style: { backgroundColor: "#0A3556", color: "#fff" },
                },
                fixed: "leading",
            },
            {
                header: "Ubicación",
                accessor: "ubicacion",
            },
            {
                header: "Sector",
                accessor: "sector",
            },
            {
                header: "Fecha de creación",
                accessor: "fechaCreacion",
            },
            // {
            //     header: "Status",
            //     accessor: "status",
            // },
            // {
            //     header: "Profile Progress",
            //     accessor: "progress",
            // },
        ],
        []
    );

    const dataSource = [
        {
            sala: "Devin",
            ubicacion: "Townsend",
            sector: 29,
            fechaCreacion: 23,
            // progress: 40,
            // status: 0.7
        },
        {
            sala: "Devin",
            ubicacion: "Townsend",
            sector: 29,
            fechaCreacion: 23,
            // progress: 40,
            // status: 0.7
        },
        {
            sala: "Devin",
            ubicacion: "Townsend",
            sector: 29,
            fechaCreacion: 23,
            // progress: 40,
            // status: 0.7
        },
        {
            sala: "Devin",
            ubicacion: "Townsend",
            sector: 29,
            fechaCreacion: 23,
            // progress: 40,
            // status: 0.7
        },
        {
            sala: "Devin",
            ubicacion: "Townsend",
            sector: 29,
            fechaCreacion: 23,
            // progress: 40,
            // status: 0.7
        },
        {
            sala: "Devin",
            ubicacion: "Townsend",
            sector: 29,
            fechaCreacion: 23,
            // progress: 40,
            // status: 0.7
        },
        {
            sala: "Devin",
            ubicacion: "Townsend",
            sector: 29,
            fechaCreacion: 23,
            // progress: 40,
            // status: 0.7
        },
        {
            sala: "Devin",
            ubicacion: "Townsend",
            sector: 29,
            fechaCreacion: 23,
            // progress: 40,
            // status: 0.7
        },
        {
            sala: "Devin",
            ubicacion: "Townsend",
            sector: 29,
            fechaCreacion: 23,
            // progress: 40,
            // status: 0.7
        },
        {
            sala: "Jorge",
            ubicacion: "Townsend",
            sector: 29,
            fechaCreacion: 23,
            // progress: 40,
            // status: 0.7
        },
    ]
    const [data, setData] = useState(dataSource);

    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        sala: '',
        ubicacion: '',
        sector: '',
        fechaCreacion: ''
    });

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData); // Aquí puedes realizar cualquier acción con los datos del formulario
        handleClose();
        handleHeaderCellClick('Se guardo correctamente el registro');
    };

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarLabel, setSnackbarLabel] = useState("");
    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    const handleHeaderCellClick = useCallback((text) => {
        setSnackbarLabel(`${text}`);
        setSnackbarOpen(true);
    }, []);



    const [title, setTitle] = useState("");

    const handleRowClick = useCallback((rowIndex, row) => {
        setTitle("Editar Sala");
        setFormData({
            ...formData,
            sala: row.sala,
            ubicacion: row.ubicacion,
            sector: row.sector,
            fechaCreacion: row.fechaCreacion
        });

        setOpen(true);
        // setSnackbarOpen(true);
        // setSnackbarLabel(`Row ${rowIndex} was clicked`);
    }, []);

    const handleChangeFilter = (e) => {
        setData(dataSource.filter(
            obj => Object.values(obj).some(value => value.toString().includes(e.target.value))));
    }
    const createRowProps = (row, rowIndex) => ({
        style: { cursor: "pointer" },
        onClick: (event) => handleRowClick(rowIndex, row)
    });

    const handleNewSala = (e) => {
        setTitle("Crear nueva sala");
        setFormData({
            sala: '',
            ubicacion: '',
            sector: '',
            fechaCreacion: ''
        })
        setOpen(true);
    }

    return (
        <>

            <PopUpModal
                open={open}
                handleClose={handleClose}
                title={title}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                formData={formData}
                snackbarOpen={snackbarOpen}
                snackbarLabel={snackbarLabel}
                handleCloseSnackbar={handleCloseSnackbar}
            />

            <Table
                dense
                fullWidth
                paginated
                layout='flex'
                resizableColumns
                sortable
                data={data}
                columns={columns}
                rowProps={createRowProps}
                hiddenColumns={["id"]}
                style={{top: '90px'}}
                leadingContent={
                    <TableTopBar
                        title="Titulo del maestro"
                        actions={
                            <Textfield
                                variant='embedded'
                                leadingIcon='search'
                                label='Search'
                                dense
                                onChange={(e) => { handleChangeFilter(e) }}
                            />
                        }
                    />
                }
            />
            <Icon
                color="primary"
                icon="add_circle"
                className="iconClass"
                style={buttonStyle}
                onClick={(e) => handleNewSala(e)}
            />
        </>
    );
};
