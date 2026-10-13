import firebase_admin
from firebase_admin import credentials, firestore
import re

# 1. Conectar a Firebase
cred = credentials.Certificate("llave.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

def procesar_y_subir():
    print("Leyendo borrador_2.txt...")
    try:
        with open("borrador_2.txt", "r", encoding="utf-8") as f:
            texto = f.read()
    except FileNotFoundError:
        print("Error: No se encontró el archivo borrador_2.txt en la carpeta actual.")
        return

    # 2. Expresión regular ajustada al nuevo formato numerado
    patron = re.compile(
        r"(?:^|\n)(\d+)\.\s+(.*?)\n"
        r"\s*a\.\s+(.*?)\n"
        r"\s*b\.\s+(.*?)\n"
        r"\s*c\.\s+(.*?)\n"
        r"\s*d\.\s+(.*?)\n"
        r"\s*Respuesta:\s*([a-dA-D])\n"
        r"\s*Justificaci[oó]n:\s*(.*?)(?=\n\s*\n|\n\d+\.\s+|\Z)", 
        re.IGNORECASE | re.DOTALL
    )

    matches = list(patron.finditer(texto))
    
    if not matches:
        print("No se encontraron preguntas con el formato esperado. Revisa el texto.")
        return
        
    print(f"¡Se detectaron {len(matches)} preguntas! Subiendo a Firestore...")
    
    batch = db.batch()
    contador = 0

    for match in matches:
        num = match.group(1)
        pregunta = match.group(2).strip().replace('\n', ' ')
        opA = match.group(3).strip().replace('\n', ' ')
        opB = match.group(4).strip().replace('\n', ' ')
        opC = match.group(5).strip().replace('\n', ' ')
        opD = match.group(6).strip().replace('\n', ' ')
        respuesta = match.group(7).strip().upper()
        justificacion = match.group(8).strip().replace('\n', ' ')
        
        # 3. Estructurar el documento para la base de datos
        doc_data = {
            "id": f"URO-{int(num):03d}",
            "categoria": "Simulador CONAMEU",
            "pregunta": pregunta,
            "opciones": {
                "A": opA,
                "B": opB,
                "C": opC,
                "D": opD
            },
            "respuesta_correcta": respuesta,
            "justificacion": justificacion
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
    print(f"¡Éxito total! {contador} preguntas inyectadas a la base de datos.")

if __name__ == '__main__':
    procesar_y_subir()