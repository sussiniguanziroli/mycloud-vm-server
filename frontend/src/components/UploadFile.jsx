import React, { useState } from 'react';

const UploadFile = ({ onUploadSuccess }) => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = () => {
        if (!file) {
            setMessage("Selecciona un archivo");
            return;
        }

        setIsLoading(true);
        setMessage("");

        setTimeout(() => {
            setMessage(`Archivo "${file.name}" subido correctamente`);
            setFile(null);
            setIsLoading(false);
            if (onUploadSuccess) onUploadSuccess();
        }, 1000);
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