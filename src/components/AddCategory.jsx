import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value); // colocar el contenido

    }

    const onSubmit = (event) => {
        event.preventDefault(); // evitar refresh del form

        if (inputValue.trim().length <= 1) {
            return
        };

        onNewCategory(inputValue.trim());
        setInputValue('');
    }

  return (
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Buscar gifs"  // mensaje del input 
            value={inputValue} // hacer readOnly, del valor del state
            onChange={ onInputChange } // al notar un cambio
        />
    </form>
  )
}
