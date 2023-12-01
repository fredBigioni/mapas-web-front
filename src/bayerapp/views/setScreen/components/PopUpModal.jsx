import { useCallback, useState } from "react";
import { Table, Button, Grid, Icon, Modal, Textfield, Snackbar, TableTopBar } from "@element/react-components";

export const PopUpModal = ({ open, handleClose, title, handleSubmit, handleChange, formData,
    snackbarOpen, snackbarLabel, handleCloseSnackbar }) => {

    return (
        <>
            <Modal hideCloseIcon={true} open={open} onClose={handleClose} modalSize="medium">
                <h2>{title}</h2>
                <div className="modal-content" >
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Textfield
                                    name="nombreSala"
                                    label="Nombre de la sala"
                                    value={formData.sala}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Textfield
                                    name="ubicacion"
                                    label="Ubicación"
                                    value={formData.ubicacion}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Textfield
                                    name="sector"
                                    label="Sector"
                                    value={formData.sector}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                        </Grid>
                        <div style={{ textAlign: 'right', marginTop: 16 }}>
                            <Button type="submit" variant="contained" color="primary">
                                Enviar
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal>

            <Snackbar
                label={snackbarLabel}
                open={snackbarOpen}
                onClose={handleCloseSnackbar}
                dismissLabel="OK"
            />
        </>
    )
}
