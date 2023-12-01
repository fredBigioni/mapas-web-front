import React, { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  IconButton,
  Icon,
  Button,
} from "@element/react-components";
import { FileUpload, ImageUpload } from '../fileUpload/ImageUpload';
import "./style.css";
import { PopUpModal } from '../../views/publicity/components';

const Thumbnail = ({ item, index, activeIndex, handleThumbnailClick }) => {
  return (
    // <div
    //   className={`thumbnail ${activeIndex === index ? 'active' : ''}`}
    //   onClick={() => handleThumbnailClick(index)}
    // >
    <CardMedia
      key={index}
      className={`thumbnail ${activeIndex === index ? 'active' : ''}`}
      alt={item.alt}
      imageUrl={process.env.PUBLIC_URL + (item.type !== 'image' ? item.src.replace('mp4', 'jpg') : item.src)}
      title={item.title}
      onClick={() => handleThumbnailClick(index)}
    />
    // </div>
  );
};


const Carousel = ({ items, setItems }) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [isSlidingNext, setIsSlidingNext] = useState(false);
  const [isSlidingPrev, setIsSlidingPrev] = useState(false);
  const [previewScreen, setPreviewScreen] = useState(false);
  // Estado para el valor del tiempo de imagen
  const [timeValue, setTimeValue] = useState(0);
  const [open, setOpen] = useState(false);

  const totalItems = items.length;


  // Función para incrementar el valor del tiempo
  const handleIncrement = () => {
    setTimeValue((prevValue) => prevValue + 10);
  };

  // Función para disminuir el valor del tiempo
  const handleDecrement = () => {
    setTimeValue((prevValue) => Math.max(1, prevValue - 10));
  };

  // Función para salir del modo pantalla completa cuando se presiona la tecla "Escape"
  const handleEscapeKey = (event) => {
    if (event.keyCode === 27) {
      setPreviewScreen(false);
    }
  };

  useEffect(() => {
    // Agregar el event listener cuando el componente se monta
    document.addEventListener('keydown', handleEscapeKey);

    // Remover el event listener cuando el componente se desmonta
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [])

  const handlePrev = () => {
    if (!isSlidingPrev) {
      setIsSlidingPrev(true);
      setActiveIndex((prevIndex) => (prevIndex === 0 ? totalItems - 1 : prevIndex - 1));
      setTimeout(() => setIsSlidingPrev(false), 500); // Tiempo de duración de la animación en milisegundos
    }
  };

  const handleNext = () => {
    if (!isSlidingNext) {
      setIsSlidingNext(true);
      setActiveIndex((prevIndex) => (prevIndex === totalItems - 1 ? 0 : prevIndex + 1));
      setTimeout(() => setIsSlidingNext(false), 500); // Tiempo de duración de la animación en milisegundos
    }
  };

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [elementos, setElementos] = useState([
    { id: 1, text: 'Elemento 1' },
    { id: 2, text: 'Elemento 2' },
    { id: 3, text: 'Elemento 3' },
  ]);

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData('text/plain', index);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, targetIndex) => {
    event.preventDefault();
    const sourceIndex = event.dataTransfer.getData('text/plain');
    const newElementos = [...items];
    const [removed] = newElementos.splice(sourceIndex, 1);
    newElementos.splice(targetIndex, 0, removed);

    const finaleElements = [...newElementos];
    setItems(finaleElements);
  };

  const handleNewImage = (data) => {
    setOpen(true);
  }

  return (
    <div className="root">
      <div className="content">
        <div className={`carousel ${isSlidingPrev ? 'slidingPrev' : isSlidingNext ? 'slidingNext' : ''}`}>
          <div className={previewScreen ? "mediaContainerFullScreen" : "mediaContainer"}>
            <Card>
              <div className="counter">
                <Typography variant="body2" className="counter-text">
                  {`${activeIndex + 1} / ${items.length}`}
                </Typography>
              </div>
              {items[activeIndex].type === 'image' ? (
                <CardMedia
                  component="img"
                  alt={items[activeIndex].alt}
                  imageUrl={process.env.PUBLIC_URL + items[activeIndex].src}
                  title={items[activeIndex].title}
                  controls={false}
                  style={{ height: '95vh' }}
                  autoPlay
                  loop
                />
              ) : (
                <div className="videoWrapper">
                  <video
                    src={process.env.PUBLIC_URL + items[activeIndex].src}
                    alt={items[activeIndex].alt}
                    autoPlay
                    loop
                    muted
                    style={{ height: '95vh' }}
                  />
                </div>
              )}
              <div className="indicator">{`${activeIndex + 1} / ${totalItems}`}</div>
              <div className="prevButton">
                <IconButton onClick={handlePrev}>
                  <Icon icon="chevron_left" iconSize='xlarge' />
                </IconButton>
              </div>
              <div className="nextButton">
                <IconButton onClick={handleNext}>
                  <Icon icon="chevron_right"
                    iconSize='xlarge'
                    badgePlacement='left-start'
                  />
                </IconButton>
              </div>
            </Card>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {
              items.map((item, index) => (
                <div
                  key={item.id}
                  draggable
                  onDragStart={(event) => handleDragStart(event, index)}
                  onDragOver={handleDragOver}
                  onDrop={(event) => handleDrop(event, index)}
                  style={{
                    // border: '1px solid #ccc',
                    // padding: '10px',
                    // marginBottom: '10px',
                    // backgroundColor: '#fff',
                  }}
                >
                  <Thumbnail
                    item={item}
                    index={index}
                    activeIndex={activeIndex}
                    handleThumbnailClick={handleThumbnailClick} />
                </div>
              ))}
          </div>
          <div
            className=""
            style={{
              width: '40px', // Establece el tamaño deseado del círculo
              height: '40px', // Establece el tamaño deseado del círculo
              borderRadius: '50%', // Hace que el elemento sea un círculo
              backgroundColor: '#DC2A24', // Color de fondo para simular el botón de reproducción
              display: 'flex',
              alignItems: 'center',
              marginTop: '5px',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#FFF'
            }}
            onClick={() => setPreviewScreen(true)}
          >
            {/* Ícono de reproducción (puedes usar un ícono o un símbolo) */}
            ▶
          </div>
        </div>
      </div>
      <div className="sidebar">
        <h2>Carousel Settings</h2>
        <Icon
          color="red"
          icon="add_circle"
          className="iconClasscarousel"
          // style={{ fontSize: '14px', width: '12px', height: '12px' }} // Ajusta el tamaño aquí  
          // style={buttonStyle}
          onClick={(e) => handleNewImage(e)}
        />
        <ImageUpload />

        <div className="time-selector">
          <span>Tiempo de imagen en pantalla:</span>
          <div className="combo">
            <button
              className="btn" onClick={() => handleDecrement()}>-</button>
            <input type="text" value={timeValue} readOnly />
            <button className="btn" onClick={() => handleIncrement()}>+</button>
          </div>
          <span> Seg</span>
        </div>

        <div className='saveButton'>
          <Button label="Guardar" />
        </div>

      </div>

      <PopUpModal
        open={open}
        handleClose={handleClose}
        title={'Nueva imagen/video'}
      // handleSubmit={handleSubmit}
      // handleChange={handleChange}
      // formData={formData}
      // snackbarOpen={snackbarOpen}
      // snackbarLabel={snackbarLabel}
      // handleCloseSnackbar={handleCloseSnackbar}
      />
    </div>
  );
};

export default Carousel;

