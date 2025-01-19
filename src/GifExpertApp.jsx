import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']); // inicializarlo como un arreglo

    const onAddCategory = (newCategory) =>{
        if (categories.includes(newCategory)){
            return;
        }
        console.log(newCategory);
        setCategories([newCategory, ...categories]); // forma 1
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory = { onAddCategory } // solamente para emitir el nuevo valor
        />

        {categories.map( (category) => (
            <GifGrid key={category} category={category}/>
        ))}

    </>
  )
}
