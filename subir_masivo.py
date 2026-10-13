import firebase_admin
from firebase_admin import credentials, firestore
import re

# Conectar a Firebase
cred = credentials.Certificate("llave.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

def procesar_y_subir():
    print("Leyendo banco.txt...")
    try:
        with open("banco.txt", "r", encoding="utf-8") as f:
            texto = f.read()
    except FileNotFoundError:
        print("Error: No se encontró el archivo banco.txt")
        return

    # Limpiar encabezados y pies de página del PDF
    texto = re.sub(r'\d+\s+de\s+\d+\.', '', texto)
    texto = re.sub(r'Dr\.\s+Diego\s+Mtz\s+HCFAA', '', texto)
    
    # Expresión regular para atrapar las preguntas
    patron = r"(\d+)\.\s+(.*?)\s+A\)\s+(.*?)\s+B\)\s+(.*?)\s+C\)\s+(.*?)\s+D\)\s+(.*?)\s+Respuesta:\s+([A-D])\s+Justificación:\s+(.*?)(?=\n\d+\.|\Z)"
    matches = re.findall(patron, texto, re.DOTALL)
    
    if not matches:
        print("No se pudieron extraer las preguntas. Revisa el formato.")
        return

    print(f"¡Se encontraron {len(matches)} preguntas! Iniciando subida a Firestore...")
    
    batch = db.batch()
    contador = 0
    
    for match in matches:
        num, pregunta, opA, opB, opC, opD, respuesta, justificacion = match
        
        # Limpiar saltos de línea dentro del texto
        doc_data = {
            "id": f"URO-{int(num):03d}",
            "categoria": "Simulador CONAMEU",
            "pregunta": pregunta.replace('\n', ' ').strip(),
            "opciones": {
                "A": opA.replace('\n', ' ').strip(),
                "B": opB.replace('\n', ' ').strip(),
                "C": opC.replace('\n', ' ').strip(),
                "D": opD.replace('\n', ' ').strip()
            },
            "respuesta_correcta": respuesta.strip(),
            "justificacion": justificacion.replace('\n', ' ').strip()
        }
        
        doc_ref = db.collection("preguntas").document(doc_data["id"])
        batch.set(doc_ref, doc_data)
        contador += 1
        
        # Firestore sube en bloques de 400 por seguridad
        if contador % 400 == 0:
            batch.commit()
            batch = db.batch()
            print(f"Progreso: {contador} preguntas subidas...")

    batch.commit()
    print(f"¡Éxito total! {contador} preguntas inyectadas en tu base de datos.")

if __name__ == '__main__':
    procesar_y_subir()