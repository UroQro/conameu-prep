import firebase_admin
from firebase_admin import credentials, firestore
import json
import os

# 1. Conectar a Firebase
cred = credentials.Certificate("llave.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

def procesar_y_subir():
    json_path = os.path.join("src", "data", "preguntas.json")
    print(f"Leyendo preguntas clasificadas desde {json_path}...")
    try:
        with open(json_path, "r", encoding="utf-8") as f:
            preguntas = json.load(f)
    except FileNotFoundError:
        print(f"Error: No se encontró el archivo {json_path}.")
        return

    print(f"¡Se detectaron {len(preguntas)} preguntas con disciplina y dificultad! Subiendo a Firestore...")
    
    batch = db.batch()
    contador = 0

    for item in preguntas:
        doc_data = {
            "id": item["id"],
            "num": item.get("num", 0),
            "disciplina": item["disciplina"],
            "disciplinaNombre": item["disciplinaNombre"],
            "disciplinaIcono": item.get("disciplinaIcono", "Sparkles"),
            "disciplinaColor": item.get("disciplinaColor", "blue"),
            "dificultad": item["dificultad"],
            "dificultadNombre": item["dificultadNombre"],
            "categoria": item["disciplinaNombre"],
            "pregunta": item["pregunta"],
            "opciones": item["opciones"],
            "respuesta_correcta": item["respuesta_correcta"],
            "justificacion": item["justificacion"]
        }
        
        doc_ref = db.collection("preguntas").document(doc_data["id"])
        batch.set(doc_ref, doc_data)
        contador += 1
        
        # Firestore requiere subir en lotes máximos de 500
        if contador % 400 == 0:
            batch.commit()
            batch = db.batch()
            print(f"Progreso: {contador} preguntas inyectadas...")

    batch.commit()
    print(f"¡Éxito total! {contador} preguntas clasificadas inyectadas a Firestore.")

if __name__ == '__main__':
    procesar_y_subir()