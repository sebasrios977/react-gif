import { useState } from "react";


export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('');

    // Le ingresa al arreglo inputValue el valor que se escriba en el buscador
    const onInputChange = ( event ) => {
        setInputValue( event.target.value );
    }

    // Cuando le da enter, le envia a la funcion onNewCategory el valor en inputValue.trim()
    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length < 1 ) return;
        // setCategories( categories => [ inputValue, ...categories ] );

        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

  return (
    <>
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Search for Gifs"
                value={ inputValue }
                onChange={ onInputChange }>    
            </input>
        </form>
    </>
  )
}
