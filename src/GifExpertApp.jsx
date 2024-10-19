import {React,useState} from 'react'
import { AddCategory,GifGrid } from './components'



export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ 'Dragon Ball']);

  // console.log( categories );
  const addValorant = () => {
    setCategories( ['Valorant',...categories])
    // setCategories( cat => [...cat,'Valorant'] );
  };

  // const onAddCategory = () => setCategories( categories.push('Valorant') ); 
  const onNewCategory = ( newCategory ) => {
    // console.log( newCategory );
    if ( categories.includes(newCategory)) return;
    setCategories( [ newCategory,...categories] )
  }
  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
          // setCategoriesA={ setCategories } 
          onNewCategory={ ( event ) => onNewCategory( event ) } // cuando empieza con on por lo general esta emitiendo un valor
        />


        {/* Listado de Gif */}
        { 
            categories.map( category => (
              <GifGrid 
              key={ category }
              category={ category}
              />
          )) 
        }



            
    </>
  )
};
