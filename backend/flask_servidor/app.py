from flask import Flask, request, jsonify, send_from_directory
#from flask_cors import CORS
import os

UPLOAD_FOLDER = '/home/danbone/Documents/UTN/Integrador_AySO/documentos'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

STATIC_FOLDER = os.path.join(os.path.dirname(os.path.abspath(__file__)), '/home/danbone/Documents/UTN/Integrador_AySO/mycloud-vm-server/frontend/dist')

app = Flask(__name__, static_folder=STATIC_FOLDER, static_url_path="/")
#CORS(app)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/')
def home_redirect():
    return send_from_directory(app.static_folder, "index.html")


@app.route('/api/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return {'error': 'No hay archivos'}, 400
    file = request.files['file']
    if file.filename == '':
        return {'error': 'No hay archivo seleccionado'}, 400
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    file.save(filepath)
    return {'message': f'Archivo {file.filename} cargado correctamente'}

@app.route('/api/download/<filename>', methods=['GET'])
def download_file(filename):
    try:
        return send_from_directory(app.config['UPLOAD_FOLDER'], filename, as_attachment=True)
    except FileNotFoundError:
        return jsonify({'error': 'File not found'}), 404
    
@app.route('/api/files', methods=['GET'])
def list_files():
    try:
        files = os.listdir(app.config['UPLOAD_FOLDER'])
        return jsonify({'files': files})
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@app.route('/api/files/<filename>', methods=['DELETE'])
def delete_file(filename):
    try:
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        if os.path.exists(file_path):
            os.remove(file_path)
            return jsonify({'message': f'{filename} deleted successfully'})
        else:
            return jsonify({'error': 'File not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/', defaults={"path":""})
@app.route('/<path:path>')

def route_front(path):
    if path != '' and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, "index.html")

    

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True) # 0.0.0.0 permite a Flask escuchar conexiones externas
    



"""
curl -X POST -F "file=@/home/danbone/Documents/UTN/Integrador_AySO/prueba_post.txt" http://127.0.0.1/upload 
(POST con un archivo)

curl -O http://127.0.0.1:5000/files/prueba_get.txt 
(GET para descargar)

curl http://127.0.0.1/files 
(GET para listar)

"""