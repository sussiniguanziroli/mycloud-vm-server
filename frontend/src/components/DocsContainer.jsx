import React from 'react';

const DocsContainer = () => {
    return (
        <div className='main-folder'>
            <h1>📘 Manual de Usuario - MyCloud VM Server</h1>

            <div className='archivos-disponibles'>
                <h3>Guía Rápida</h3>
                <ul>
                    <li>
                        <strong>1. ¿Qué es MyCloud?</strong>
                        <p>Una plataforma web para gestionar tus servidores virtuales, subir archivos, y administrar documentación relacionada con tu infraestructura.</p>
                    </li>

                    <li>
                        <strong>2. ¿Cómo iniciar sesión?</strong>
                        <p>Desde la pantalla principal, ingresá la contraseña.</p>
                    </li>

                    <li>
                        <strong>3. Subida de Archivos</strong>
                        <p>En la sección principal, utilizá el botón "Seleccionar archivo" para subir documentos, logs o respaldos importantes. Se mostrarán listados debajo para fácil acceso.</p>
                    </li>

                    <li>
                        <strong>4. Descarga de Archivos</strong>
                        <p>Hacé clic en el nombre del archivo para obtener una copia local.</p>
                    </li>

                    <li>
                        <strong>5. Eliminación de Archivos</strong>
                        <p>Los archivos obsoletos pueden eliminarse manualmente desde la misma lista, usando el botón rojo "Eliminar".</p>
                    </li>

                    <li>
                        <strong>6. Seguridad</strong>
                        <p>Toda acción requiere estar autenticado. Los datos se almacenan en la VM y los archivos en un bucket seguro configurado por el administrador.</p>
                    </li>

                    <li>
                        <strong>7. Soporte</strong>
                        <p>Desarrollo de pruebas a cargo de Matias Vazquez y Patricio Sussini</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DocsContainer;
