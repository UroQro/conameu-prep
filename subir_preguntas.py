import firebase_admin
from firebase_admin import credentials, firestore

# Conectar a tu base de datos usando tu llave
cred = credentials.Certificate("llave.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

# Las primeras 3 preguntas de tu banco
preguntas = [
  {
    "id": "URO-001", "categoria": "Embriología y Anatomía",
    "pregunta": "Durante el desarrollo embrionario, ¿cuál es la estructura precursora del epidídimo, los conductos deferentes y las vesículas seminales?",
    "opciones": { "A": "Conducto de Müller (paramesonéfrico)", "B": "Conducto de Wolff (mesonéfrico)", "C": "Seno urogenital", "D": "Tubérculo genital" },
    "respuesta_correcta": "B", "justificacion": "En el feto masculino, la testosterona promueve la diferenciación de los conductos mesonéfricos (Wolff) en las estructuras del tracto reproductivo interno."
  },
  {
    "id": "URO-002", "categoria": "Embriología y Anatomía",
    "pregunta": "¿A partir de qué semana de gestación comienza la producción de orina por el metanefros?",
    "opciones": { "A": "6ª semana", "B": "8ª semana", "C": "10ª semana", "D": "12ª semana" },
    "respuesta_correcta": "C", "justificacion": "El metanefros (riñón definitivo) se vuelve funcional aproximadamente en la 10ª semana de gestación."
  },
  {
    "id": "URO-003", "categoria": "Embriología y Anatomía",
    "pregunta": "¿Cuál es el origen nervioso del reflejo cremastérico?",
    "opciones": { "A": "Nervio ilioinguinal (L1)", "B": "Nervio genitofemoral (L1-L2)", "C": "Nervio pudendo (S2-S4)", "D": "Nervio obturador" },
    "respuesta_correcta": "B", "justificacion": "El nervio genitofemoral, específicamente su rama genital, es responsable de la vía eferente del reflejo cremastérico."
  }
]

print("Subiendo preguntas a la nube...")
for p in preguntas:
    db.collection("preguntas").document(p["id"]).set(p)

print("¡Preguntas subidas con éxito! Regresa a tu navegador y actualiza la página.")