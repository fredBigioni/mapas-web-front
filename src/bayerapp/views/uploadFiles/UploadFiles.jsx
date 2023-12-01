import React, { useCallback, useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Grid, GridCol, GridRow, TypoDisplay,
  FileUpload,
  Button,
  Group,
  Typography,
  Modal,
  CircularProgress,
  Snackbar,
  Datepicker,
  Textfield,
  IconButton,
  Tooltip,
  Select,
  Card,
  CardContent,
  CardTitle,
  CardFilter,
  CardBody,
  TypoBody
} from "@element/react-components";
import { CustomFilters } from "../../components/filters";
import { setAttachment, setLayOutFilterValue} from "../../../store/bayerApp/uploadFiles";
import { getLayOutFilterData,importFile } from "../../../store/bayerApp/uploadFiles/thunks";
import { logout } from "../../../store/auth";


export const UploadFiles = () => {

    const {layOutFilter, attachment} = useSelector( state => state.uploadFiles);
    const dispatch = useDispatch();

    const [file, setFile] = useState();  
    const [fileName, setFileName] = useState();  

    const handleFileChange = useCallback((val) => {        
        setFile(val[0]);     
        setFileName(val[0].name);     
      }, []);

    ///-------------revisar para borrar-----------            
      const [modalOpen, setModalOpen] = useState();
      const [snackbarOpen, setSnackbarOpen] = useState();

      const handleClick = (file,fileName) => {
        setModalOpen(true);   
        debugger;
        const fileData = new FormData();
        fileData.append("formFile", file);
        fileData.append("fileName", fileName);     

        dispatch( importFile(fileData,3) );
        
        setTimeout(() => {
          setModalOpen(false);
          setSnackbarOpen(true);
        }, 3000);
      };
    
      const handleSnackbarClose = useCallback(() => {
        setSnackbarOpen(false);
      }, []);
          ///         ------------------------
    
    useEffect(() => {
    //Solo se ejecuta al ingresar a la pagina
    if(layOutFilter.selectedValue=="")
        dispatch( getLayOutFilterData("0") );              
    }, []);

    // console.log(file?.name)
    // console.log(attachment.attachmentProcesing);

    return (
    <div>
        {/* {attachment.fileName ? attachment.fileName : "okNo"} */}
        {/* <Grid fullWidth>
            <GridRow>
            <GridCol desktopCol={1}></GridCol>
                <GridCol desktopCol={4}>
                    <Card 
                        loadingCard = {true} 
                        variant={'default'} 
                        height={"350px"}                        
                    >
                    <CardContent>
                        <CardTitle                            
                            overlineText={"Importación de Archivos"}
                        />
                        <CardFilter filterType='select'>
                            <CustomFilters
                            value={layOutFilter.selectedValue} 
                            setValue={ (val) => dispatch( setLayOutFilterValue(val) ) }  
                            getDataFunction = { (val) => {} } //{ (val) => dispatch( getLayOutFilterData(val) ) }   /// lo comentado se usa en caso de querer realizar una busqueda al ingresar caracteres ene l imput
                            options={layOutFilter.data}
                            label = "LayOut"
                            type = "asincSelectorFilter"
                            zoom = {1}
                            isLoading = {layOutFilter.isLoading}
                            />       
                            <Tooltip text="Descargar LayOut">
                                <IconButton
                                onClick={()=>{}}
                                label="Descargar LayOut"
                                icon={"download"}                            
                                />  
                            </Tooltip>    
                        </CardFilter>
                        <CardBody
                            typographyType = {"overline"}
                        >
                        <FileUpload                            
                            //   disabled={disabled}
                            label={"Adjuntar"}
                            placeholder="Ningún Archivo Seleccionado" // {attachment.fileName ? attachment.fileName : "Ningún Archivo Seleccionado"}                                
                            onChange={handleFileChange}               
                        />{" "}                           
                        </CardBody>
                    </CardContent>
                    </Card>
                </GridCol>                                
                <GridCol desktopCol={7}>   
                    <Grid >
                        <GridRow> 
                            <GridCol desktopCol={6}>
                                <Group direction='vertical'>   
                                    <Datepicker                        
                                        variant='filled'
                                        label='Filled Datepicker'
                                        textfieldProps={{ fullWidth: true }}
                                    />                          
                                    <Textfield label='Textfield' fullWidth tabIndex={0} />                           
                                </Group>  
                                </GridCol>
                                <GridCol desktopCol={6}>
                                    <Group direction='vertical'>
                                        <Datepicker                        
                                            variant='filled'
                                            label='Filled Datepicker'
                                            textfieldProps={{ fullWidth: true }}
                                        />
                                        <Textfield label='Textfield' fullWidth tabIndex={0} />
                                        
                                    </Group>      
                            </GridCol>  
                            <GridCol desktopCol={12}>
                                <Button
                                    onClick={()=> handleClick(file,fileName) }
                                    label="Procesar Archivo"
                                    disabled = {attachment.attachmentProcesing}
                                    fullWidth 
                                    />      
                            </GridCol>  
                        </GridRow>
                    </Grid>                                            

                </GridCol>
                   
                    
                    
            </GridRow>
        </Grid>             */}

        {/* <Button
            onClick={()=> dispatch(logout()) }
            label="LogOut"
            
            fullWidth 
        />       */}
        
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
        {"okkk"}            
        </Snackbar>
    </div>
    );
};

