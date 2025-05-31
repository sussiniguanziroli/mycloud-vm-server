import React, { useEffect, useState } from 'react';
import UploadFile from './UploadFile';

const MainFolder = () => {

    const [filesList, setFilesList] = useState([])
    const [message, setMessage] = useState('');

    useEffect(() => {
        
        fetchFiles();
    }, []);

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

    const handleDelete = async (fileToDelete) => {
        if (!window.confirm(`¿Deseas borrar el archivo "${fileToDelete}"?`)){
            return;
        }
        try {
            const response = await fetch(`/api/delete/${fileToDelete}`, {
                method: 'DELETE',
            });
            const data = await response.json(); 

            if (response.ok) {
                setMessage(data.message || `Archivo "${fileToDelete}" eliminado exitosamente`);
                fetchFiles();
               
                 
            } else {
                setMessage(data.error || `Error al eliminar el archivo ${fileToDelete}`);
            }
        } catch (error) {
            setMessage(`Error de red al eliminar el archivo "${fileToDelete}": ${error.message}`);
        }

    }

    const handleReload = async () => {
        setMessage("Actualizando lista de archivos disponibles...")
        await fetchFiles();
        setMessage("Lista de archivos actualizada!")
        setTimeout(() => setMessage(''), 3000);
    };

    return (
        <main className="main-folder">
            <section className='gestor-archivos'>
                <h2>Gestor de Archivos</h2>

                <UploadFile onUploadSuccess={handleReload} />
            </section>

            {message && <p className='mensaje'>{message}</p>}

            <section className='archivos-disponibles'>
                <h3>Archivos disponibles:</h3>
                <button onClick={handleReload}>Recargar lista!</button>
                <ul>
                    {filesList.length === 0 && !message && <p>No hay archivos cargados en MyCloud-VM-Server</p>}
                    {filesList.map(filename => (
                        <li key={filename}>
                            <div className='get-utils'>

                                <a href={`/api/download/${filename}`} target="_blank" rel="noopener noreferrer">
                                    {filename}
                                </a>

                                <button
                                    onClick={()=> handleDelete(filename)}
                                >
                                    X
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default MainFolder