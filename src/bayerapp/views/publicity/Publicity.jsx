import { useState } from "react";
import Carousel from "../../components/carousel/Carousel";

export const Publicity = (props) => {

  const [items, setItems] = useState([
    { id: 1, src: '/Planta-Pilar.mp4', type: 'video', alt: "Planta Pilar", title: 'Video Planta Pilar' },
    { id: 2, src: '/FOTO1.jpg', type: 'image', alt: "Planta Pilar 2", title: 'Foto Planta Pilar' },
    { id: 1, src: '/Planta-Zarate.mp4', type: 'video', alt: "Planta Zarate 2", title: 'Video Planta Zarate' },

    // Otros videos aquí
  ]);

 
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <Carousel
          items={items}
          setItems={setItems} />

      </div>

    </div>   
  );
};
