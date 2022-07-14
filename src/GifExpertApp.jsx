import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExportApp = () => {

    const [ categories, setCategories ] = useState([ 'ONE PUNCH' ]);

    const onAddCategory = ( newCategory ) => {
        if( categories.includes( newCategory.toUpperCase() ) ) return;
        setCategories( [newCategory.toUpperCase(), ...categories]);
    }
    const apiKey = 'J9rdAQQ4GrbVlxXHqdXjlgbSfz3fZwjx';
    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={ onAddCategory }      
            />

            { categories.map( category => (
                    <GifGrid
                        key={ category }
                        category={ category }
                    /> )
            ) }

        </>
    )
}