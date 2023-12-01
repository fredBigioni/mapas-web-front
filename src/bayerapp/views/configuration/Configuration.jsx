import { Button, Icon } from '@element/react-components'
import React from 'react'
import { ImageUpload } from '../../components/fileUpload/ImageUpload'
import { useState } from 'react';

export const Configuration = ({ openNewButton, close, title }) => {
    const [timeValue, setTimeValue] = useState(0);
    const [setOpen, setSetOpen] = useState(false);
    const handleIncrement = () => {
        setTimeValue((prevValue) => prevValue + 10);
    };

    // Función para disminuir el valor del tiempo
    const handleDecrement = () => {
        setTimeValue((prevValue) => Math.max(1, prevValue - 10));
    };

    const handleNewImage = (data) => {
        setOpen(true);
    }

    return (
        <>
            <div className="sidebar">
                <h2 style={{position: 'relative', left: '25%'}}>
                    {openNewButton ? 'Carousel Settings' : title}
                </h2>
                <Icon
                    color="red"
                    icon="add_circle"
                    className="iconClasscarousel"
                    style={{ visibility: openNewButton ? 'visible' : 'hidden' }}
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
                    <Button label="Guardar" onClick={close} />
                </div>

            </div>
        </>
    )
}
