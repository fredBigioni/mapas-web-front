import React, { useCallback, useState, useRef } from "react";
import {
    FileUpload,
    Button,
    Group,
    Typography,
    Modal,
    CircularProgress,
    Snackbar,
    Icon
} from "@element/react-components";

export const ImageUpload = (props) => {
    const { disabled, label, placeholder, themeColor } = {
        ...props,
    };
    const fileUploadRef = useRef();
    const [file, setFile] = useState();
    const [modalOpen, setModalOpen] = useState();
    const [snackbarOpen, setSnackbarOpen] = useState();

    const handleChange = useCallback((val) => {
        setFile(val[0].name);
    }, []);

    const handleClick = useCallback(() => {
        setModalOpen(true);
        setTimeout(() => {
            fileUploadRef.current.clear();
            setModalOpen(false);
            setSnackbarOpen(true);
        }, 3000);
    }, []);

    const handleSnackbarClose = useCallback(() => {
        setSnackbarOpen(false);
    }, []);

    return (
        <div style={{
            // padding: "0 20px",
            textAlign: "left" /* Alineación a la izquierda */
        }}>
            <Typography tag="p" type="body1">
                Seleccione una imagen a subir
            </Typography>
            <Group direction="horizontal" primaryAlign="space-evenly">
                <div style={{ flex: 1, width: "100%" }}>
                    <FileUpload
                        ref={fileUploadRef}
                        disabled={disabled}
                        label={label}
                        placeholder={placeholder}
                        themeColor={themeColor}
                        onChange={handleChange}
                        style={{ width: "100%" }} /* Asegurar el ancho del input */
                    />
                </div>
                <Button
                    onClick={handleClick}
                    label="Upload File"
                    themeColor={themeColor === "secondary" ? "secondary" : "primary"}
                />
            </Group>
            <Modal
                modalSize="dialog"
                open={modalOpen}
                title="Uploading File"
                noActions
            >
                <Typography tag="div" type="body1" style={{ textAlign: "center" }}>
                    Your file is uploading. Do not hit the refresh button on your browser
                    or navigate away from this page.
                </Typography>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <CircularProgress />
                </div>
            </Modal>

            <Snackbar open={snackbarOpen} onClose={handleSnackbarClose}>
                {`The file ${file} was uploaded successfully.`}
            </Snackbar>
        </div>
    );
};
