import React, {useRef, useState} from 'react';
import Contenido from './Contenido';
import Etiqueta from './Etiqueta';

const Tabs = (props) => {

    const {tabs} = props
    const [selecionado, setSelecionado] = useState(0);
    const padreDeEtiquetas = useRef();

    const changeButtonColor = btn => {
        padreDeEtiquetas.current
            .querySelectorAll('button')
            .forEach((b) => b.classList.remove('selected'));
        btn.classList.add('selected')
    }

    const etiquetas = tabs.map(({etiqueta},index) => 
        {
        const isSelected = index === selecionado;
        return <Etiqueta 
            texto={etiqueta} 
            index={index} 
            key={index} 
            callback = {changeButtonColor}
            setSelecionado={setSelecionado}
            isSelected={isSelected}
        /> })

    const contenido = tabs.map(({contenido},index) => {
    const isSelected = index === selecionado;
    return <Contenido texto={contenido} index={index} key={index} isSelected={isSelected}/>})
    console.log({etiquetas})
    console.log("contenido[selecionado]: ", contenido[selecionado]);

    return (
        <div className="tabs-style">
            <div ref={padreDeEtiquetas} style={{display:'flex', justifyContent: 'center'}}>{etiquetas}</div>
            <div className="contenido-de-tabs" style={{padding:'10px'}}>{contenido[selecionado]}</div>
        </div>
    );
}

export default Tabs;
