import React, { useState } from 'react';
import UploadFile from './UploadFile';

const MainFolder = () => {
    const [filesList, setFilesList] = useState([
        "informe1.pdf",
        "foto_vacaciones.jpg",
        "presentacion.pptx",
        "datos.xlsx",
        "manual_tecnico.docx"
    ]);


    const handleReload = () => {
        setFilesList(prev => [...prev, `nuevo_archivo_${Date.now()}.txt`]);
    };

    return (
        <main className="main-folder">
            <section className='gestor-archivos'>
                <h2>Gestor de Archivos</h2>

                <UploadFile onUploadSuccess={handleReload} />
            </section>


            <section className='archivos-disponibles'>
                <h3>Archivos disponibles:</h3>
                <ul>
                    {filesList.map(filename => (
                        <li key={filename}>
                            <a href={`#`} target="" rel="noreferrer">
                                {filename}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default MainFolder