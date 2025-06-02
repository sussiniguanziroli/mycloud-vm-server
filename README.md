# 🧩 MyCloud VM Server

Este repositorio contiene el desarrollo del **Caso Práctico: MyCloud-VM-Server**, realizado en entorno virtual como fase de prueba para una futura implementación en un servidor dedicado.

## 🧪 Descripción del caso

La solución simula una plataforma básica de almacenamiento en la nube accesible desde una red local. El sistema permite:

- Carga de archivos
- Descarga
- Visualización de archivos disponibles
- Eliminación

Estas funcionalidades están pensadas para funcionar en un entorno **de pruebas** antes de escalar a producción.

---

## 🏗️ Arquitectura del sistema

- **Máquina virtual (VirtualBox)** con **Ubuntu Desktop 24.04**
- Servidor web: **Apache2**, actuando como **proxy inverso**
- Backend: **Flask** (Python), ofreciendo una **API REST**
- Frontend: **ReactJS**, comunicándose con la API de Flask
- Comunicación vía red local a través de la IP de la VM

---

## ⚙️ Tecnologías utilizadas

| Componente      | Herramienta / Lenguaje   |
|-----------------|--------------------------|
| Máquina Virtual | VirtualBox               |
| SO              | Ubuntu 24.04             |
| Servidor Web    | Apache2 (como proxy)     |
| Backend         | Flask (Python)           |
| API             | RESTful API propia       |
| Frontend        | ReactJS + SCSS           |
| Navegación      | React Router             |

---

## 🚦 Flujo de funcionamiento

1. **Apache2** recibe las solicitudes HTTP y redirige al servidor Flask que corre localmente en la VM.
2. **Flask** procesa las operaciones solicitadas por el frontend: cargar, listar, descargar o eliminar archivos.
3. **ReactJS**, alojado dentro del entorno Apache, se comunica con la API y refleja el estado de la app.
4. La aplicación es accesible desde cualquier dispositivo en la misma red local usando la IP de la VM.

---

## 💻 Acceso desde la red local



