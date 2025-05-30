import React, { useEffect, useState } from 'react';
import UploadFile from './UploadFile';

const MainFolder = () => {

    const [filesList, setFilesList] = useState([])

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const response = await fetch('/api/files');
                const data = await response.json();
                if (response.ok) {
                    setFilesList(data.files || []); 
                } else {
                    
                    setFilesList([]);
                }
            } catch (error) {
                setFilesList([]); 
            }
        };
        fetchFiles();

    }, []);


    const handleReload = async () => {
        try {
            const response = await fetch('/api/files');
            const data = await response.json();
            if (response.ok) {
                setFilesList(data.files || []);
            } else {
                console.error("Error en fetch de archivos: ", data.error);
            }
        } catch (error) {
            console.error("Erro de red al subir archivos: ", error);
        }
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
                            <a href={`/api/download/${filename}`} target="_blank" rel="noopener noreferrer">
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