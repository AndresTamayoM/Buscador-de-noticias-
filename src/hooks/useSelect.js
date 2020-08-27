import React, { useState } from 'react';

const useSelect = (stateInicical, opciones) => {

    // State del custom hook
    const [ state, actualizarState] = useState(stateInicical);

    const SelectNoticias =() => (
        <select 
            className="browser-default"
            value={state}
            onChange={ e => actualizarState(e.target.value)}
        >
            {opciones.map(opcion =>(
                <option key={opcion.value} value={opcion.values}>{opcion.label}</option>
            ))}
        </select>
    );

    return [state, SelectNoticias];
}
 
export default useSelect;