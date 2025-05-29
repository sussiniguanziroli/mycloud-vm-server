from flask import Flask, request, jsonify, send_from_directory
import os

UPLOAD_FOLDER = '/home/danbone/Documents/UTN/Integrador_AySO/documentos'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/')
def home():
    return 'Servidor Flask funcionando correctamente'

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return {'error': 'No hay archivos'}, 400
    file = request.files['file']
    if file.filename == '':
        return {'error': 'No hay archivo seleccionado'}, 400
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    file.save(filepath)
    return {'message': f'Archivo {file.filename} cargado correctamente'}

@app.route('/download/<filename>', methods=['GET'])
def download_file(filename):
    try:
        return send_from_directory(app.config['UPLOAD_FOLDER'], filename, as_attachment=True)
    except FileNotFoundError:
        return jsonify({'error': 'File not found'}), 404
    
@app.route('/files', methods=['GET'])
def list_files():
    try:
        files = os.listdir(app.config['UPLOAD_FOLDER'])
        return jsonify({'files': files})
    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

"""
curl -X POST -F "file=@/home/danbone/Documents/UTN/Integrador_AySO/prueba_post.txt" http://127.0.0.1/upload 
(POST con un archivo)

curl -O http://127.0.0.1:5000/files/prueba_get.txt 
(GET para descargar)

curl http://127.0.0.1/files 
(GET para listar)

"""