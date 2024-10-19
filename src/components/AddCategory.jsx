import { useState } from "react"


export const AddCategory = ( { onNewCategory } ) => {

  const [inputValue, setInputValue] = useState('')
  const inputChange = ( {target} ) => setInputValue( target.value );
  const submit = ( event )=> {
    event.preventDefault()


    if ( inputValue.trim().length <= 1) return;

    // setCategoriesA( c => [inputValue , ...c] )
    onNewCategory( inputValue.trim() )
    setInputValue('');
  }; 


  return (
    <form onSubmit={ submit }>
      <input 
        type="text"
        placeholder="Buscar gifts"
        value={ inputValue }
        onChange={ inputChange }// onChange={ (event) => inputChange(event) }      
      />
    </form>
  )
}
