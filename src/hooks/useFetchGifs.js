// un hooks no es mas que una funcion

import { useEffect, useState } from "react"
import { getGift } from "../helpers/getGifts";

// Customs Hooks

export const useFetchGifs = ( category ) => {

    const [ images, setImages ] = useState([]);
    const [ isLoading, setIsLoading] = useState( true );

  const getImages = async() => {
    const gif = await getGift( category );
    setImages( gif  );
    setIsLoading(false);
  }

    // el primer parametro tiene qeu ser si o si una funcion, no puede ser una f async, por sino seria una promesa noo una funcion, para solucionar eso vamos a crear getImages
    useEffect( () => { // useEffect tiene 2 parametros
        // getGift( category ); // primer parametro es lo que quiero hacer
        getImages( category );
    }
    ,
    [ ] // segundo parametro son las condiciones para que se ejecute ( dejandolo vacio seria para que se ejecute una unica ves)
    )

    return {
        images, // eslo mismo que -> iamges : images,
        isLoading// isLoading: false
    }
}
