import React, { useState } from 'react';

const UploadFile = ({ onUploadSuccess }) => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };



    const handleUpload = async () => { 
        if (!file) {
            setMessage("Selecciona un archivo");
            return;
        }

        setIsLoading(true);
        setMessage("");

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json(); 

            if (response.ok) {
                setMessage(data.message || `Archivo "${file.name}" subido correctamente`);
                setFile(null);
               
                if (document.querySelector('input[type="file"]')) { 
                    document.querySelector('input[type="file"]').value = '';
                }
                if (onUploadSuccess) onUploadSuccess(); 
            } else {
                setMessage(data.error || "Error al subir el archivo");
            }
        } catch (error) {
            setMessage("Error de red al subir el archivo: " + error.message);
            console.error("Network error uploading file:", error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="file-uploader">
            <h3>Subir nuevo archivo</h3>
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload} disabled={isLoading}>
                {isLoading ? "Subiendo..." : "Subir"}
            </button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default UploadFile;