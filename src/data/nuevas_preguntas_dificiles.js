// 110 Preguntas de Alta Dificultad para el Examen de Consejo de Urología - UroBoard Prep
// 10 preguntas por cada una de las 11 áreas de estudio basadas en Guías AUA, EAU y NCCN

export const NUEVAS_PREGUNTAS_DIFICILES = [
  // ==========================================
  // 1. UROLOGÍA ONCOLÓGICA (10 preguntas)
  // ==========================================
  {
    num: 1000,
    disciplina: "uro_oncologia",
    pregunta: "En un paciente con cáncer de próstata metastásico resistente a la castración (mCRPC) progresivo a enzalutamida, cuyo perfil genómico revela una mutación somática patogénica deletérea en BRCA2, ¿cuál es la terapia dirigida de elección según los ensayos fase III PROfound y las guías EAU/AUA?",
    opciones: {
      A: "Inhibidor de PARP (Olaparib) en monoterapia",
      B: "Terapia hormonal dual con bicalutamida más flutamida",
      C: "Inhibidor de punto de control inmunológico (Ipilimumab) en monoterapia",
      D: "Quimioterapia con metotrexato, vinblastina, doxorrubicina y cisplatino (MVAC)"
    },
    respuesta_correcta: "A",
    justificacion: "Según el estudio fase III PROfound y las guías EAU/AUA/NCCN, Olaparib demostró un beneficio estadísticamente significativo y clínicamente relevante en sobrevida libre de progresión radiográfica y sobrevida global en pacientes con mCRPC que portan alteraciones en genes de reparación por recombinación homóloga (HRR), particularmente BRCA1, BRCA2 y ATM, tras progresión a un agente hormonal de nueva generación."
  },
  {
    num: 1001,
    disciplina: "uro_oncologia",
    pregunta: "De acuerdo con el ensayo clínico fase III EV-302 / KEYNOTE-A39, ¿cuál es el nuevo estándar de tratamiento sistémico de primera línea para pacientes con carcinoma urotelial localmente avanzado o metastásico, independientemente de su elegibilidad a cisplatino?",
    opciones: {
      A: "Enfortumab vedotina en combinación con Pembrolizumab",
      B: "Gemcitabina más Carboplatino en monoterapia secuencial",
      C: "Atezolizumab combinado con Docetaxel y Bevacizumab",
      D: "Metotrexato más Vinblastina en dosis densas sin soporte de G-CSF"
    },
    respuesta_correcta: "A",
    justificacion: "El estudio EV-302 / KEYNOTE-A39 demostró que la combinación del anticuerpo conjugado Enfortumab vedotina (dirigido contra Nectina-4) más Pembrolizumab (anti-PD-1) prácticamente duplicó la sobrevida libre de progresión y la sobrevida global comparado con la quimioterapia clásica basada en platino (cisplatino/carboplatino + gemcitabina), convirtiéndose en el estándar de oro de primera línea según las guías EAU y NCCN 2024-2025."
  },
  {
    num: 1002,
    disciplina: "uro_oncologia",
    pregunta: "En un paciente con carcinoma de células renales de células claras metastásico clasificado como de riesgo intermedio o pobre según los criterios del International Metastatic RCC Database Consortium (IMDC), ¿cuál de las siguientes combinaciones de primera línea ha demostrado superioridad en sobrevida global con respuesta completa de hasta un 16% según el estudio CheckMate 214?",
    opciones: {
      A: "Nivolumab (anti-PD-1) más Ipilimumab (anti-CTLA-4)",
      B: "Sunitinib en monoterapia en esquema continuo 50 mg/día",
      C: "Pazopanib combinado con Everolimus",
      D: "Interleucina-2 a dosis bajas combinada con Interferón alfa"
    },
    respuesta_correcta: "A",
    justificacion: "En el estudio CheckMate 214 con seguimiento a largo plazo, la doble inmunoterapia con Nivolumab e Ipilimumab demostró tasas de sobrevida global duraderas, con una tasa de respuesta completa cercana al 12-16% en pacientes con riesgo intermedio y pobre según IMDC, constituyendo una opción preferente categoría 1 en las guías EAU y AUA."
  },
  {
    num: 1003,
    disciplina: "uro_oncologia",
    pregunta: "Un varón de 26 años es sometido a orquiectomía radical inguinal derecha por tumor testicular. La patología reporta: Tumor de células germinales no seminomatoso (70% carcinoma embrionario, 30% teratoma maduro) limitado al testículo pero con invasión linfovascular inequívoca (LVI+). Los marcadores séricos postoperatorios se normalizan y la TC toracoabdominal no muestra adenopatías ni metástasis (Estadio clínico IB: pT2 N0 M0 S0). Según las guías EAU, ¿cuál es el porcentaje aproximado de recurrencia si se elige vigilancia activa y cuál es la terapia adyuvante recomendada de ciclo corto?",
    opciones: {
      A: "Riesgo de recurrencia del 50%; se recomienda 1 ciclo de quimioterapia adyuvante con BEP (Bleomicina, Etopósido, Cisplatino)",
      B: "Riesgo de recurrencia del 5%; se recomienda vigilancia exclusiva sin estudios de imagen",
      C: "Riesgo de recurrencia del 95%; se requiere radioterapia externa pélvica e inguinal profiláctica",
      D: "Riesgo de recurrencia del 15%; se recomienda linfadenectomía retroperitoneal bilateral sistemática obligatoria"
    },
    respuesta_correcta: "A",
    justificacion: "En el no seminoma estadio I, la presencia de invasión vascular o linfática (LVI+) es el factor pronóstico independiente más potente de metástasis ocultas, con una tasa de recurrencia de aproximadamente el 50% en vigilancia. La administración de 1 ciclo adyuvante de BEP reduce la tasa de recidiva a menos del 2-3% con mínima toxicidad a largo plazo, siendo la opción terapéutica recomendada por las guías EAU."
  },
  {
    num: 1004,
    disciplina: "uro_oncologia",
    pregunta: "Con respecto al carcinoma urotelial del tracto urinario superior (UTUC) invasor no metastásico, ¿cuál fue la principal conclusión del ensayo clínico fase III POUT con respecto a la quimioterapia adyuvante tras nefroureterectomía radical?",
    opciones: {
      A: "La quimioterapia adyuvante con 4 ciclos de Gemcitabina-Platino (Cisplatino o Carboplatino) mejora significativamente la sobrevida libre de enfermedad en pacientes con pT2-T4 o pN+",
      B: "La quimioterapia adyuvante no aporta ningún beneficio y está contraindicada por deterioro funcional renal",
      C: "La quimioterapia intravesical profiláctica única es superior a la quimioterapia sistémica en control metastásico",
      D: "La radioterapia retroperitoneal adyuvante es superior al esquema sistémico de platino"
    },
    respuesta_correcta: "A",
    justificacion: "El ensayo clínico multicéntrico fase III POUT (Birtle et al., Lancet 2020) demostró de forma concluyente que la quimioterapia adyuvante basada en platino (gemcitabina con cisplatino, o carboplatino si la TFG era 30-49 ml/min) iniciada dentro de los 90 días posteriores a la nefroureterectomía radical reduce el riesgo de recurrencia o muerte en un 55% (HR 0.45) en pacientes con enfermedad pT2-T4 o N+ ganglionar."
  },
  {
    num: 1005,
    disciplina: "uro_oncologia",
    pregunta: "En el carcinoma de la corteza suprarrenal (ACC) metastásico o localmente avanzado no resecable, ¿cuál es el régimen quimioterapéutico de primera línea respaldado por el ensayo clínico internacional FIRM-ACT y las guías de la Sociedad Europea de Endocrinología / EAU?",
    opciones: {
      A: "Régimen EDP-M: Etopósido, Doxorrubicina y Cisplatino combinados con Mitotano oral",
      B: "Monoterapia con Pembrolizumab a dosis fijas de 200 mg cada 3 semanas",
      C: "Esquema FOLFOX-4 combinado con Ketoconazol en dosis altas",
      D: "Docetaxel más Gemcitabina y Espironolactona"
    },
    respuesta_correcta: "A",
    justificacion: "El ensayo prospectivo aleatorizado FIRM-ACT (Fassnacht et al., NEJM) estableció el esquema EDP-M (Etopósido, Doxorrubicina, Cisplatino más Mitotano) como el estándar de primera línea para carcinoma adrenocortical avanzado, demostrando una tasa de respuesta significativamente mayor y mejor sobrevida libre de progresión que el régimen alternativo estreptozocina más mitotano."
  },
  {
    num: 1006,
    disciplina: "uro_oncologia",
    pregunta: "Un paciente de 58 años presenta un carcinoma epidermoide de pene con ganglios inguinales clínicamente palpables, múltiples, bilaterales y confluentes que miden 4 cm, sin metástasis a distancia (estadio cT2 cN2 M0). De acuerdo con las guías de la EAU, ¿cuál es la secuencia terapéutica recomendada?",
    opciones: {
      A: "Quimioterapia neoadyuvante con esquema TIP (Paclitaxel, Ifosfamida, Cisplatino) seguida de linfadenectomía inguinal bilateral de consolidación en respondedores",
      B: "Linfadenectomía inguinal bilateral inmediata de urgencia sin quimioterapia previa",
      C: "Radioterapia pélvica externa como único tratamiento con intención paliativa",
      D: "Inmunoterapia con Nivolumab intra-lesional sin intervención quirúrgica"
    },
    respuesta_correcta: "A",
    justificacion: "En cáncer de pene con ganglios inguinales voluminosos o fijos (cN2 o cN3), la cirugía inmediata se asocia a alta tasa de recurrencia y complicaciones severas. Las guías EAU recomiendan quimioterapia neoadyuvante basada en cisplatino (preferentemente esquema TIP: paclitaxel, ifosfamida y cisplatino) por 3-4 ciclos, seguida de linfadenectomía inguinal bilateral y pélvica en aquellos que logren estabilización o respuesta tumoral objetiva."
  },
  {
    num: 1007,
    disciplina: "uro_oncologia",
    pregunta: "Durante la nefrectomía radical por carcinoma de células renales con trombo tumoral en la vena cava inferior (VCI) que se extiende por arriba del diafragma y penetra en la aurícula derecha (Nivel IV de la clasificación de Neves-Zincke), ¿cuál es la estrategia quirúrgica y de soporte circulatorio habitualmente requerida para la cavotomía y trombectomía segura?",
    opciones: {
      A: "Esternotomía media combinada con laparotomía, bypass cardiopulmonar con o sin paro circulatorio hipotérmico",
      B: "Abordaje retroperitoneal puro sin asistencia de cirugía cardiovascular",
      C: "Embolización percutánea exclusiva con etanol absoluto del trombo tumoral sin cirugía",
      D: "Colocación de filtro de vena cava superior e inferior y observación"
    },
    respuesta_correcta: "A",
    justificacion: "Los trombos tumorales renales nivel IV (intraauriculares) representan el mayor reto técnico y requieren abordaje multidisciplinario urológico y cardiovascular mediante toraco-laparotomía o esternotomía con laparotomía subcostal bilateral (Chevron), utilizando derivación cardiopulmonar (bypass) y frecuentemente paro circulatorio hipotérmico profundo para permitir la atriotomía, resección completa del trombo y cavoplastia en un campo exangüe sin riesgo de embolismo pulmonar masivo."
  },
  {
    num: 1008,
    disciplina: "uro_oncologia",
    pregunta: "En el diagnóstico diferencial histopatológico e inmunohistoquímico entre un Oncocitoma Renal y la variante eosinofílica del Carcinoma Renal Cromófobo en una biopsia por aguja tru-cut, ¿cuál de los siguientes patrones de tinción apoya fuertemente el diagnóstico de Carcinoma Cromófobo?",
    opciones: {
      A: "Tinción con Citoqueratina 7 (CK7) intensamente positiva difusa y tinción de hierro coloidal de Hale positiva reticular citoplásmica",
      B: "CK7 totalmente negativa o solo con positividad celular dispersa aislada menor al 5%",
      C: "Positividad intensa y difusa para Vimentina y CD10 con CK7 negativa",
      D: "Pérdida exclusiva del cromosoma Y sin ninguna aneuploidía cromosómica"
    },
    respuesta_correcta: "A",
    justificacion: "El carcinoma de células renales cromófobo se caracteriza por una tinción con CK7 difusa y fuertemente positiva en la gran mayoría de las células tumorales, además de positividad citoplásmica difusa con la coloración especial de hierro coloidal de Hale. Por el contrario, el oncocitoma típicamente muestra una tinción con CK7 negativa o únicamente reactividad en células dispersas aisladas ('parcheada' < 5%)."
  },
  {
    num: 1009,
    disciplina: "uro_oncologia",
    pregunta: "Un paciente de 63 años sometido a prostatectomía radical presenta en el seguimiento una elevación confirmada del PSA a 0.28 ng/ml. La TC abdominopélvica y el gammagrama óseo son negativos. Según los ensayos clínicos aleatorizados SAKK 09/10, RADICALS-HD y las recomendaciones de la EAU, ¿cuál es el abordaje con mayor probabilidad de control oncológico a largo plazo?",
    opciones: {
      A: "Radioterapia de rescate temprana al lecho prostático (iniciada con PSA < 0.5 ng/ml) combinada con terapia de deprivación androgénica (TDA) a corto plazo (6 meses)",
      B: "Vigilancia expectante hasta que el PSA alcance más de 2.0 ng/ml para confirmar la localización por TC",
      C: "Orquiectomía bilateral subcapsular quirúrgica como único tratamiento",
      D: "Quimioterapia con Docetaxel por 6 ciclos sin radioterapia"
    },
    respuesta_correcta: "A",
    justificacion: "Los datos de los estudios SAKK 09/10, GETUG-AFU 16 y RADICALS-HD confirman que la radioterapia de rescate es más eficaz cuando se administra de forma temprana (PSA < 0.5 ng/ml, idealmente < 0.2-0.3 ng/ml). Además, la adición de terapia de deprivación androgénica (TDA) a corto plazo (6 meses) mejora significativamente la sobrevida libre de progresión bioquímica y metástasis a distancia comparado con la radioterapia sola."
  },

  // ==========================================
  // 2. CRECIMIENTO PROSTÁTICO / HPB (10 preguntas)
  // ==========================================
  {
    num: 1010,
    disciplina: "crecimiento_prostatico",
    pregunta: "Durante una resección transuretral de próstata (RTUP) monopolar que se prolonga por más de 90 minutos utilizando solución de glicina al 1.5%, el anestesiólogo reporta bradicardia sinusal, hipertensión seguida de hipotensión, confusión mental y un sodio sérico de 112 mEq/L. ¿Cuál es la conducta terapéutica inmediata para el Síndrome de RTUP severo?",
    opciones: {
      A: "Suspender la cirugía de inmediato, administrar furosemida IV e infundir solución salina hipertónica al 3% corrigiendo el Na no más de 8-10 mEq/L en las primeras 24 horas",
      B: "Continuar la resección rápidamente e infundir 2 litros de solución glucosada al 5%",
      C: "Administrar desmopresina (DDAVP) por vía nasal y bicarbonato de sodio en bolo",
      D: "Infundir solución salina al 0.9% a 500 ml/h hasta normalizar el sodio en 4 horas"
    },
    respuesta_correcta: "A",
    justificacion: "El Síndrome de RTUP es una complicación por hipervolemia hipoosmolar y toxicidad por solutos (glicina). En casos severos con hiponatremia sintomática (< 120 mEq/L con compromiso neurológico), debe detenerse la resección, administrar diuréticos de asa (furosemida) y solución salina hipertónica al 3% a ritmo controlado para evitar una corrección superior a 8-10 mEq/L en 24 horas, previniendo el síndrome de desmielinización osmótica (mielinólisis pontina)."
  },
  {
    num: 1011,
    disciplina: "crecimiento_prostatico",
    pregunta: "En cuanto a los principios biofísicos de la enucleación prostática con láser, ¿cuál es la principal diferencia entre el láser Holmium:YAG (HoLEP) y el láser de fibra de tulio (ThuFLEP) que confiere a este último una vaporización y corte más precisos con menor profundidad de penetración tisular?",
    opciones: {
      A: "El láser de tulio emite a una longitud de onda de 1,940 nm, que coincide casi con el pico exacto de absorción del agua, logrando una penetración de apenas 0.15 mm frente a los 0.4 mm del Holmium",
      B: "El láser de tulio emite en modo pulsado de ultra-alta energía mientras que el Holmium emite en onda continua",
      C: "El láser de tulio no requiere irrigación con solución salina y opera con agua destilada",
      D: "El láser de tulio es absorbido exclusivamente por la hemoglobina desoxigenada y no por el agua"
    },
    respuesta_correcta: "A",
    justificacion: "El Thulium Fiber Laser (TFL) opera a ~1,940 nm, muy próximo al pico máximo de absorción del agua líquida a temperatura corporal. Esto le confiere una profundidad de penetración tisular superficial de solo ~0.15 mm (en comparación con ~0.4 mm del láser Holmium:YAG a 2,120 nm), lo que se traduce en cortes más limpios, carbonización mínima y hemostasia más homogénea."
  },
  {
    num: 1012,
    disciplina: "crecimiento_prostatico",
    pregunta: "Un paciente masculino de 68 años con STUI severos refractarios a terapia farmacológica dual presenta en la cistoscopia y ecografía transrectal una próstata de 55 gramos con un lóbulo medio marcadamente intravesical (Intravesical Prostatic Protrusion - IPP Grado 3, protrusión > 10 mm). ¿Por qué las técnicas mínimamente invasivas como los implantes de tracción de uretra prostática (UroLift) o la termoterapia con vapor de agua (Rezum) están limitadas o contraindicadas frente a la enucleación o RTUP en este caso?",
    opciones: {
      A: "Porque el lóbulo medio protrusorio actúa como un mecanismo de válvula de bola que las grapas o el vapor no desobstruyen de manera predecible en protrusiones severas > 10 mm",
      B: "Porque el lóbulo medio siempre contiene focos de adenocarcinoma sarcomatoide invasor",
      C: "Porque el lóbulo medio causa incontinencia urinaria de esfuerzo obligatoria post-procedimiento",
      D: "Porque el láser verde o bipolar no puede cortar tejido en la zona de transición"
    },
    respuesta_correcta: "A",
    justificacion: "La protrusión prostática intravesical (IPP) grado 3 (> 10 mm) crea un mecanismo valvular obstructivo dinámico en el cuello vesical. Los ensayos clínicos del sistema UroLift excluyeron inicialmente lóbulos medios obstructivos (y aunque hay técnicas modificadas, la efectividad es inferior). Para IPP severo, las guías AUA/EAU favorecen la resección o enucleación completa del tejido protrusorio."
  },
  {
    num: 1013,
    disciplina: "crecimiento_prostatico",
    pregunta: "En el estudio urodinámico de flujo-presión de un paciente con sospecha de obstrucción prostática, se obtienen los siguientes valores: Presión del detrusor al flujo máximo (PdetQmax) = 75 cmH2O, Flujo máximo (Qmax) = 8 ml/s. De acuerdo con la fórmula del Índice de Obstrucción del Tracto de Salida Vesical (BOOI = PdetQmax - 2*Qmax) de la Sociedad Internacional de Continencia (ICS), ¿cómo se clasifica este paciente?",
    opciones: {
      A: "Francamente obstruido (BOOI = 59, ya que BOOI > 40 define obstrucción)",
      B: "No obstruido (BOOI = 15, ya que BOOI < 20 define ausencia de obstrucción)",
      C: "Zona dudosa o indeterminada (BOOI entre 20 y 40)",
      D: "Hipocontractilidad severa del detrusor sin componente obstructivo"
    },
    respuesta_correcta: "A",
    justificacion: "El índice BOOI de Abrams-Griffiths se calcula mediante: BOOI = PdetQmax - (2 * Qmax). En este caso: 75 - (2 * 8) = 75 - 16 = 59. Un valor de BOOI > 40 clasifica inequívocamente al paciente como 'obstruido'. Un BOOI entre 20 y 40 es equívoco y < 20 es no obstruido."
  },
  {
    num: 1014,
    disciplina: "crecimiento_prostatico",
    pregunta: "Con base en los resultados del estudio a largo plazo CombAT (Combination of Avodart and Tamsulosin), ¿cuál es el subgrupo de pacientes con HPB que obtiene el mayor beneficio clínico en la reducción del riesgo relativo de retención aguda de orina y necesidad de cirugía prostática con la terapia combinada frente a la monoterapia con alfa-bloqueador?",
    opciones: {
      A: "Pacientes con volumen prostático basal > 30-40 cc y PSA sérico basal > 1.5 ng/ml",
      B: "Pacientes jóvenes con próstata < 20 cc y PSA < 0.5 ng/ml",
      C: "Pacientes con estenosis de uretra membranosa asociada",
      D: "Pacientes con disinergia vesicoesfinteriana de origen traumático"
    },
    respuesta_correcta: "A",
    justificacion: "El estudio CombAT demostró que los inhibidores de la 5-alfa reductasa (dutasterida/finasterida) requieren un volumen prostático aumentado (> 30-40 cc) y un PSA > 1.5 ng/ml como subrogado de crecimiento celular activo para ejercer su efecto de reducción del tamaño prostático (~20-25%) y disminución a 4 años del riesgo relativo de retención aguda de orina (~67%) y cirugía (~70%)."
  },
  {
    num: 1015,
    disciplina: "crecimiento_prostatico",
    pregunta: "Un paciente de 72 años con HPB y cardiopatía isquémica que toma ácido acetilsalicílico y clopidogrel sufre retención urinaria recurrente. La próstata mide 130 gramos. El cardiólogo contraindica formalmente suspender los antiagregantes plaquetarios. Según las guías de la EAU sobre HPB, ¿cuál es el procedimiento quirúrgico de elección por su perfil hemostático superior en pacientes con anticoagulación o antiagregación activa?",
    opciones: {
      A: "Enucleación prostática con láser (HoLEP / ThuLEP) o fotovaporización con láser GreenLight",
      B: "Adenomectomía prostática abierta transvesical (técnica de Freyer)",
      C: "Resección transuretral de próstata monopolar convencional con irrigación de glicina",
      D: "Incisión transuretral de cuello vesical simple con asa de Collins"
    },
    respuesta_correcta: "A",
    justificacion: "Las guías de la Asociación Europea de Urología (EAU) y la AUA establecen que en pacientes que no pueden suspender la terapia anticoagulante o antiagregante plaquetaria, las técnicas con láser (especialmente la enucleación con láser Holmium/Tulio o la fotovaporización con láser verde de 532 nm) son de primera elección por su excelente absorción tisular y propiedades hemostáticas superiores comparadas con la RTUP monopolar o la cirugía abierta."
  },
  {
    num: 1016,
    disciplina: "crecimiento_prostatico",
    pregunta: "En un paciente que ha estado tomando finasterida (5 mg/día) o dutasterida (0.5 mg/día) de forma ininterrumpida durante 12 meses por HPB, ¿cómo debe interpretarse el valor reportado de Antígeno Prostático Específico (PSA) total para fines de tamizaje y detección de cáncer de próstata?",
    opciones: {
      A: "El valor del PSA reportado por el laboratorio debe multiplicarse por 2 (duplicarse) para compararlo con los rangos de referencia normales",
      B: "El valor reportado no sufre ninguna alteración y debe interpretarse tal como viene del laboratorio",
      C: "Se debe restar 1.5 ng/ml al valor del laboratorio",
      D: "El PSA sérico pierde totalmente su valor y solo se puede utilizar biopsia a ciegas"
    },
    respuesta_correcta: "A",
    justificacion: "Los inhibidores de la 5-alfa reductasa suprimen la dihidrotestosterona intraprostática, lo que reduce los niveles de PSA sérico en aproximadamente un 50% tras 6 a 12 meses de uso continuo. Por tanto, para evaluar el riesgo de cáncer de próstata y no retrasar diagnósticos, las guías AUA/EAU indican multiplicar por 2 el valor medido en sangre antes de comparar con los umbrales de referencia."
  },
  {
    num: 1017,
    disciplina: "crecimiento_prostatico",
    pregunta: "Durante la evaluación preoperatoria de un varón de 75 años con retención urinaria crónica refractaria y volumen residual post-miccional de 650 ml, el estudio urodinámico demuestra un Índice de Contractilidad del Detrusor (BCI = PdetQmax + 5*Qmax) de 60. ¿Cuál es el significado pronóstico de este hallazgo si se somete a cirugía desobstructiva de próstata?",
    opciones: {
      A: "Presenta una contractilidad del detrusor muy deprimida o hipocontractilidad (BCI < 100), por lo que existe alto riesgo de requerir cateterismo intermitente postoperatorio a pesar de una desobstrucción anatómica exitosa",
      B: "Presenta una contractilidad supranormal (BCI > 150) con vaciamiento garantizado al 100%",
      C: "El BCI confirma que el paciente tiene fístula vesicorrectal oculta",
      D: "Descarta cualquier beneficio de la cirugía por muerte neuronal irreversible"
    },
    respuesta_correcta: "A",
    justificacion: "El índice de contractilidad del detrusor (BCI) de Abrams clasifica valores > 150 como hipercontráctil, 100-150 normal y < 100 como hipocontráctil (underactive bladder). Un BCI de 60 indica fallo miogénico del detrusor por sobre-distensión crónica. Aunque la desobstrucción quirúrgica alivia la resistencia de salida, se debe advertir al paciente del riesgo sustancial de continuar con vaciamiento incompleto y necesidad de cateterismo intermitente postquirúrgico."
  },
  {
    num: 1018,
    disciplina: "crecimiento_prostatico",
    pregunta: "En relación con la Embolización de Arterias Prostáticas (PAE) para el tratamiento de síntomas del tracto urinario inferior secundarios a HPB, ¿cuál es la postura actual de las guías clínicas de la AUA y la EAU?",
    opciones: {
      A: "Se considera una opción experimental o de investigación, recomendada principalmente en ensayos clínicos controlados o en pacientes con comorbilidades severas no candidatos a cirugía tradicional, debido a resultados urodinámicos inferiores a la RTUP",
      B: "Es la terapia de primera línea preferida por encima de la RTUP y la enucleación con láser para cualquier tamaño prostático",
      C: "Está absolutamente contraindicada en cualquier paciente con próstata mayor a 80 gramos",
      D: "Es el tratamiento de elección para erradicar el carcinoma urotelial prostático concomitante"
    },
    respuesta_correcta: "A",
    justificacion: "Las guías de la AUA y EAU establecen que, aunque la PAE reduce síntomas y volumen prostático, sus mejoras objetivas en parámetros urodinámicos (Qmax y reducción de obstrucción) son significativamente inferiores a la RTUP y enucleación, con tasas mayores de re-intervención y riesgo de complicaciones isquémicas pélvicas o no deseadas. Por ello, no se recomienda como terapia estándar de primera línea salvo en pacientes de alto riesgo quirúrgico o protocolos específicos."
  },
  {
    num: 1019,
    disciplina: "crecimiento_prostatico",
    pregunta: "Un paciente de 64 años acude a consulta por eyaculación retrógrada completa sumamente angustiante tras iniciar tratamiento para HPB. ¿Cuál de los siguientes fármacos es el que presenta la mayor incidencia de eyaculación retrógrada o aneyaculación (hasta en el 28-30% de los pacientes) debido a su selectividad extrema por los receptores adrenérgicos alfa-1A en el cuello vesical y conductos deferentes?",
    opciones: {
      A: "Silodosina",
      B: "Alfuzosina",
      C: "Tadalafil",
      D: "Finasterida"
    },
    respuesta_correcta: "A",
    justificacion: "La silodosina tiene una selectividad por los receptores alfa-1A respecto a los alfa-1B de aproximadamente 162:1 (mucho mayor que tamsulosina). Esto le confiere una excelente eficacia urinaria sin causar hipotensión ortostática, pero genera relajación profunda del músculo liso del cuello vesical y vesículas seminales, produciendo aneyaculación/eyaculación retrógrada en casi el 28% de los pacientes."
  },

  // ==========================================
  // 3. UROLOGÍA PEDIÁTRICA (10 preguntas)
  // ==========================================
  {
    num: 1020,
    disciplina: "uropedia",
    pregunta: "En un neonato masculino diagnosticado prenatalmente con hidronefrosis bilateral masiva y oligohidramnios, la cistouretrografía miccional confirma Válvulas de Uretra Posterior (VUP). Tras la ablación transuretral exitosa de las valvas a los 5 días de vida, el paciente desarrolla con los años poliuria masiva, hipostenuria y deterioro progresivo de la función renal con engrosamiento y baja complianza vesical. ¿Cómo se denomina este síndrome fisiopatológico y cuál es su mecanismo primario?",
    opciones: {
      A: "Síndrome de la Vejiga de la Válvula (Valve Bladder Syndrome), secundario a hipertonía/hipocomplianza vesical crónica combinada con defecto de concentración tubular renal por poliuria nefrogénica",
      B: "Síndrome de Prune-Belly adquirido por defecto del músculo cremáster",
      C: "Reflujo vesicoureteral primario familiar por agenesia trigonal",
      D: "Acidosis tubular proximal con pérdida obligatoria de fosfatos"
    },
    respuesta_correcta: "A",
    justificacion: "El 'Síndrome de la Vejiga de la Válvula' ocurre en varones tratados por VUP. La obstrucción fetal prolongada produce remodelado del detrusor con hipertrofia y fibrosis, resultando en baja complianza, hiperactividad o atonía miogénica. Esto se combina con daño tubular renal que causa diabetes insípida nefrogénica secundaria (poliuria de gran volumen), sobrecargando la vejiga y perpetuando la hidronefrosis retrógrada e insuficiencia renal."
  },
  {
    num: 1021,
    disciplina: "uropedia",
    pregunta: "De acuerdo con el ensayo clínico aleatorizado multicéntrico RIVUR (Randomized Intervention for Children with Vesicoureteral Reflux), ¿cuál fue el principal hallazgo con respecto al uso de profilaxis antibiótica continua (Trimetoprim-Sulfametoxazol) en niños con reflujo vesicoureteral (RVU) grados I a IV tras una primera infección urinaria febril?",
    opciones: {
      A: "Redujo el riesgo de recurrencia de infección urinaria febril en un 50%, pero no demostró una reducción estadísticamente significativa en la incidencia de nuevas cicatrices renales al cabo de 2 años",
      B: "Eliminó completamente el reflujo vesicoureteral en el 99% de los pacientes en 6 meses",
      C: "Aumentó en cuatro veces la necesidad de reimplante ureteral quirúrgico de emergencia",
      D: "Causó una disminución del 90% en la tasa de cicatrización parenquimatosa renal en gammagrama DMSA"
    },
    respuesta_correcta: "A",
    justificacion: "El ensayo RIVUR (NEJM 2014) demostró que la profilaxis con TMP-SMX redujo a la mitad el riesgo de recurrencias de infecciones de vías urinarias febriles o sintomáticas en niños con RVU (13% vs 24%, HR 0.55). Sin embargo, tras dos años de seguimiento riguroso con gammagrama DMSA, no hubo una diferencia estadísticamente significativa en la tasa de nuevas cicatrices renales (8.2% con antibiótico vs 10.2% con placebo)."
  },
  {
    num: 1022,
    disciplina: "uropedia",
    pregunta: "Un recién nacido con ambigüedad genital presenta genitales externos virilizados con falo agrandado, orificio urogenital único en la base y ausencia de gónadas palpables en los pliegues labioescrotales. A las dos semanas de vida desarrolla letargo, vómitos, sodio de 118 mEq/L, potasio de 6.9 mEq/L y glucosa de 45 mg/dL. El cariotipo reporta 46,XX. ¿Cuál es el diagnóstico más probable y el examen de laboratorio inicial definitorio?",
    opciones: {
      A: "Hiperplasia Suprarrenal Congénita por deficiencia de 21-hidroxilasa (forma clásica perdedora de sal); elevación masiva de 17-hidroxiprogesterona sérica",
      B: "Síndrome de Insensibilidad Completa a los Andrógenos; elevación de dihidrotestosterona",
      C: "Disgenesia gonadal pura 46,XY; elevación de hormona antimülleriana",
      D: "Hipoplasia de células de Leydig por mutación en el receptor de LH"
    },
    respuesta_correcta: "A",
    justificacion: "La causa más común de ambigüedad genital en neonatos 46,XX es la hiperplasia suprarrenal congénita por déficit de 21-hidroxilasa (~95% de los casos). El defecto enzimático bloquea la síntesis de cortisol y aldosterona, derivando los precursores hacia andrógenos (virilización). Entre la 1ª y 3ª semana de vida sobreviene la crisis suprarrenal perdedora de sal (hiponatremia, hiperpotasemia, hipoglucemia y deshidratación) que es potencialmente mortal si no se trata con hidrocortisona y fludrocortisona. El diagnóstico se confirma con niveles elevados de 17-hidroxiprogesterona."
  },
  {
    num: 1023,
    disciplina: "uropedia",
    pregunta: "En la evaluación gammagráfica con MAG-3 diurético (Furosemida) de un lactante con dilatación piélica severa, ¿cuál de los siguientes criterios funcionales confirma inequívocamente la presencia de una obstrucción significativa de la unión pieloureteral?",
    opciones: {
      A: "Tiempo de depuración media o aclaramiento del radiofármaco post-furosemida (T1/2) mayor a 20 minutos con función renal diferencial del riñón afectado menor al 40% o en deterioro progresivo",
      B: "T1/2 menor a 10 minutos con curva de eliminación en caída exponencial rápida",
      C: "Función renal diferencial del riñón dilatado del 55% con T1/2 de 8 minutos",
      D: "Presencia de reflujo vesicoureteral activo durante la fase de repleción vesical"
    },
    respuesta_correcta: "A",
    justificacion: "Según los criterios de la Society for Fetal Urology (SFU) y las guías EAU/ESPU, un T1/2 > 20 minutos tras la inyección de furosemida en renograma diurético con MAG-3 es diagnóstico de obstrucción. Si se asocia a una función renal relativa diferencial < 40% o una caída documentada > 5-10% en estudios seriados, se establece la indicación formal de pieloplastia desmembrada."
  },
  {
    num: 1024,
    disciplina: "uropedia",
    pregunta: "Durante la corrección quirúrgica de un hipospadias proximal con severa incurvación peneana ventral, se realiza el desenclavamiento ('degloving') completo de la piel del pene hasta la base. La prueba de erección artificial demuestra que persiste una cuerda o curvatura ventral residual mayor a 30 grados originada por la placa uretral displásica. De acuerdo con los principios reconstructivos pediátricos contemporáneos, ¿cuál es la conducta adecuada?",
    opciones: {
      A: "Seccionar la placa uretral para enderezar completamente los cuerpos cavernosos y planificar una uretroplastia en dos tiempos (ej. técnica de Bracka con injerto)",
      B: "Conservar la placa uretral y forzar el cierre de la piel forzando el pene en curvatura",
      C: "Realizar una uretroplastia Tubularizada Incidida (TIP / Snodgrass) ignorando la curvatura",
      D: "Amputar los cuerpos cavernosos e insertar prótesis de pene maleable pediátrica"
    },
    respuesta_correcta: "A",
    justificacion: "Si tras el degloving completo persiste una incurvación ventral > 30°, la placa uretral corta y fibrótica es el factor limitante. Forzar una técnica en un tiempo conservando la placa perpetuará la deformidad eréctil. El estándar en hipospadias proximal severo con placa restrictiva es seccionar la placa uretral, completar la ortofaloplastia y realizar la uretroplastia en dos tiempos (Bracka con injerto libre de mucosa prepucial o bucal)."
  },
  {
    num: 1025,
    disciplina: "uropedia",
    pregunta: "En el Tumor de Wilms (nefroblastoma), ¿cuál de las siguientes alteraciones moleculares y genéticas se asocia de forma independiente con un riesgo significativamente mayor de recaída y peor sobrevida global según los protocolos del Children's Oncology Group (COG)?",
    opciones: {
      A: "Pérdida combinada de heterocigosidad (LOH) en los cromosomas 1p y 16q",
      B: "Trisomía aislada del cromosoma 12 en células tumorales",
      C: "Mutación germinal aislada en el gen WT1 sin pérdida alélica",
      D: "Presencia exclusiva de histología trifásica clásica con diferenciación glomerular madura"
    },
    respuesta_correcta: "A",
    justificacion: "Los estudios a gran escala del COG identificaron que la pérdida combinada de heterocigosidad (LOH) simultánea en los brazos cromosómicos 1p y 16q en pacientes con tumor de Wilms de histología favorable confiere un riesgo significativamente mayor de recidiva y muerte, por lo que estos pacientes son estratificados a esquemas de quimioterapia intensificada."
  },
  {
    num: 1026,
    disciplina: "uropedia",
    pregunta: "Un niño de 3 años es llevado a consulta porque en una ecografía de rutina se observa un riñón en herradura. Con respecto a las anomalías vasculares y ureterales asociadas al riñón en herradura, ¿cuál es la complicación no neoplásica más común y cuál es el tumor maligno que presenta un incremento relativo de incidencia 3 a 4 veces mayor que en la población general?",
    opciones: {
      A: "Estenosis de la unión pieloureteral (obstrucción UPJ) por cruce sobre el istmo / vasos anómalos; mayor riesgo relativo de Tumor de Wilms y Carcinoma del Carcinoide",
      B: "Agenesia ureteral contralateral obligatoria; Linfoma de Burkitt",
      C: "Trombosis bilateral espontánea de arteria renal; Oncocitoma",
      D: "Extrofia cloacal; Adenoma metanéfrico"
    },
    respuesta_correcta: "A",
    justificacion: "La complicación no neoplásica más frecuente en el riñón en herradura es la obstrucción de la unión pieloureteral (~35%), debida a la inserción alta del uréter y su trayecto cruzando el istmo anterior o vasos aberrantes. Oncológicamente, además del carcinoma urotelial secundario a litiasis/infección, el riñón en herradura tiene un riesgo relativo 2 a 4 veces mayor de Tumor de Wilms y un riesgo marcadamente elevado de tumor carcinoide derivado de células neuroendocrinas en el istmo."
  },
  {
    num: 1027,
    disciplina: "uropedia",
    pregunta: "En relación con el Reflujo Vesicoureteral secundario en pacientes pediátricos con vejiga neurogénica por mielomeningocele, ¿cuál es el pilar terapéutico conservador inicial fundamental antes de considerar cualquier cirugía antirreflujo?",
    opciones: {
      A: "Optimizar el vaciamiento vesical con cateterismo limpio intermitente (CLI) y reducir la presión intravesical con anticolinérgicos (oxibutinina)",
      B: "Realizar de inmediato reimplante ureteral bilateral Cohen a cielo abierto",
      C: "Colocar sondas de nefrostomía percutánea bilateral permanentes",
      D: "Inyección endoscópica masiva de polimetilmetacrilato en el trígono"
    },
    respuesta_correcta: "A",
    justificacion: "El RVU en vejiga neurogénica suele ser secundario a altas presiones de llenado del detrusor y vaciamiento ineficaz con disinergia. Realizar reimplantes ureterales sin controlar la presión vesical fracasa sistemáticamente y deteriora el tracto superior. El manejo inicial de elección consiste en descompresión vesical con cateterismo limpio intermitente y tratamiento farmacológico con antimuscarínicos o beta-3 agonistas; esto resuelve el reflujo en más del 50% de los casos."
  },
  {
    num: 1028,
    disciplina: "uropedia",
    pregunta: "Un recién nacido masculino presenta oligohidramnios severo, facies arrugada senil (facies de Potter) y masa palpable abdominal. La ecografía muestra riñones masivamente agrandados bilateralmente, hiperecogénicos, con pérdida de la diferenciación corticomedular y múltiples microquistes radiales en túbulos colectores dilatados. ¿Cuál es la entidad genética subyacente y el gen mutado?",
    opciones: {
      A: "Poliquistosis Renal Autosómica Recesiva (ARPKD); mutación en el gen PKHD1 (fibrocistina)",
      B: "Poliquistosis Renal Autosómica Dominante; mutación en el gen PKD1 (policistina-1)",
      C: "Displasia Renal Multiquística unilateral; translocación 11;22",
      D: "Nefronoptisis juvenil; deleción en NPHP1"
    },
    respuesta_correcta: "A",
    justificacion: "La poliquistosis renal autosómica recesiva (ARPKD) se debe a mutaciones en el gen PKHD1 en el cromosoma 6p21, que codifica para la fibrocistina/poliductina. Se caracteriza por dilatación fusiforme ectásica de los túbulos colectores renales bilaterales simétricos y fibrosis hepática congénita obligada. En formas perinatales severas, el oligohidramnios produce hipoplasia pulmonar letal (secuencia de Potter)."
  },
  {
    num: 1029,
    disciplina: "uropedia",
    pregunta: "Durante una orquidopexia por laparoscopia en un niño de 18 meses con testículo intraabdominal alto (> 2 cm del anillo inguinal profundo), se decide realizar una técnica de Fowler-Stephens en dos tiempos. ¿Cuál es el vaso sanguíneo que se ocluye y secciona en el primer tiempo laparoscópico, y cuál es el suministro vascular colateral que mantendrá la viabilidad del testículo?",
    opciones: {
      A: "Se seccionan los vasos espermáticos (testiculares) principales; el testículo sobrevive por la circulación colateral de la arteria deferencial (del conducto deferente) y la arteria cremastérica",
      B: "Se secciona la arteria deferencial; el testículo sobrevive exclusivamente por la arteria hipogástrica",
      C: "Se secciona el conducto deferente completo; el testículo sobrevive por difusión pasiva",
      D: "Se ligan las venas ilíacas externas; el testículo sobrevive por la vena epigástrica inferior"
    },
    respuesta_correcta: "A",
    justificacion: "La técnica de Fowler-Stephens para testículos intraabdominales altos se basa en el principio anatómico de que el testículo posee una triple irrigación anastomótica (arteria testicular, arteria deferencial y arteria cremastérica). En el primer tiempo se clipan los vasos testiculares principales; esto estimula durante 6 meses el desarrollo hipertrófico de las colaterales deferenciales y cremastéricas, permitiendo en el segundo tiempo descender el testículo hacia el escroto preservando su vascularización."
  },

  // ==========================================
  // 4. UROGINECOLOGÍA Y SUELO PÉLVICO (10 preguntas)
  // ==========================================
  {
    num: 1030,
    disciplina: "urogine",
    pregunta: "En una paciente con incontinencia urinaria de esfuerzo severa recurrente tras el fracaso de una cinta mediouretral sintética previa, la videourodinamia demuestra una uretra 'en tubo de plomo' (fija, no hipermóvil) con una Presión de Punto de Fuga de Valsalva (VLPP) de 35 cmH2O y una Presión de Cierre Uretral Máxima (MUCP) de 14 cmH2O. ¿Cuál es el diagnóstico funcional y el procedimiento reconstructivo de elección?",
    opciones: {
      A: "Deficiencia Esfinteriana Intrínseca (ISD) severa; colocación de cabestrillo fascial pubovaginal autólogo (fascia de recto/fascia lata) o implante de esfínter urinario artificial",
      B: "Hipermovilidad uretral pura tipo I; repetición de cinta transobturatriz (TOT)",
      C: "Incontinencia refleja por fístula vesicovaginal; colocación de sonda de Foley por 6 meses",
      D: "Inestabilidad vesical idiopática; enterocistoplastia de aumento"
    },
    respuesta_correcta: "A",
    justificacion: "Un valor de VLPP < 60 cmH2O y una MUCP < 20 cmH2O en ausencia de hipermovilidad uretral definen la Deficiencia Esfinteriana Intrínseca (ISD) severa tipo III de McGuire. Las cintas mediouretrales libres de tensión transobturatrices (TOT) tienen una tasa de fracaso muy alta en ISD fija. La indicación según guías AUA/SUFU es el cabestrillo pubovaginal con fascia autóloga (que ejerce compresión y soporte suburetral activo) o el esfínter urinario artificial femenino."
  },
  {
    num: 1031,
    disciplina: "urogine",
    pregunta: "Una paciente de 52 años sometida a colocación de cinta retropúbica (TVT) hace 3 años presenta disuria terminal severa, infecciones urinarias recurrentes y hematuria intermitente. La cistoscopia flexible revela la presencia de fibras de malla protésica erosionadas en la luz vesical con cálculo calcificado adherido en la pared anterolateral derecha. ¿Cuál es el tratamiento definitivo requerido?",
    opciones: {
      A: "Extracción endoscópica o combinada transvesical de todo el segmento intravesical de la malla más litotricia de los cálculos adheridos",
      B: "Tratamiento antibiótico supresor continuo con nitrofurantoína sin retiro del material",
      C: "Inyección intravesical de toxina botulínica A",
      D: "Cauterización simple con nitrato de plata sobre la malla por vía cistoscópica"
    },
    respuesta_correcta: "A",
    justificacion: "La erosión intraluminal de material protésico sintético (polipropileno) en la vía urinaria perpetúa la infección, litogénesis y síntomas irritativos graves. El tratamiento obligatorio consiste en la remoción quirúrgica completa del segmento de malla expuesto en la cavidad vesical (ya sea mediante resección transuretral con láser Holmium/tijeras endoscópicas o abordaje abierto/laparoscópico transvesical) y fragmentación de los cálculos asociados."
  },
  {
    num: 1032,
    disciplina: "urogine",
    pregunta: "En una paciente que desarrolló una fístula vesicovaginal compleja de 2.5 cm secundaria a radioterapia pélvica por cáncer cervicouterino tratada hace 1 año, ¿cuáles son los dos principios quirúrgicos esenciales para maximizar la tasa de éxito del cierre fistuloso según las guías uroginecológicas?",
    opciones: {
      A: "Respetar un periodo de latencia de al menos 6 a 12 meses post-radiación para delimitación tisular e interponer obligatoriamente un tejido vascularizado sano (ej. epiplón mayor en abordaje abdominal o colgajo de Martius en abordaje vaginal)",
      B: "Cierre urgente inmediato en los primeros 3 días con sutura de seda trenzada sin interposición",
      C: "Cauterización circunferencial estricta con electrocauterio monopolar sin suturas",
      D: "Colocación de sonda Foley por 1 semana y reinicio inmediato de radioterapia pélvica"
    },
    respuesta_correcta: "A",
    justificacion: "Las fístulas vesicovaginales por radiación son de naturaleza isquémica con microangiopatía obliterante severa. Requieren un periodo de espera mínimo de 6 a 12 meses para que el daño actínico agudo se estabilice y los bordes se delimiten. Es indispensable la interposición de tejido bien vascularizado no irradiado (epiplón mayor de O'Conor en abordaje abdominal o colgajo labial fibroadiposo de Martius en abordaje transvaginal) para aportar neovascularización y asegurar el sellado tisular."
  },
  {
    num: 1033,
    disciplina: "urogine",
    pregunta: "Una mujer de 65 años presenta un prolapso de órganos pélvicos avanzado (estadio IV de POP-Q con eversión vaginal completa). Refiere que 'no moja la ropa interior', pero al reponer el prolapso con un pesario en el consultorio, presenta escape masivo de orina con la tos. ¿Qué fenómeno clínico se está produciendo y cuál es su implicación quirúrgica?",
    opciones: {
      A: "Incontinencia urinaria de esfuerzo oculta o enmascarada debida a la acodadura (kinking) uretral producida por el prolapso masivo; debe considerarse un procedimiento anti-incontinencia profiláctico o concomitante durante la reparación del prolapso",
      B: "Vejiga neurogénica hiperrefléxica secundaria a daño de médula sacra",
      C: "Ruptura del esfínter anal externo",
      D: "Incontinencia urinaria continua por uréter ectópico desapercibido"
    },
    respuesta_correcta: "A",
    justificacion: "En prolapsos severos estadios III y IV, la uretra suele sufrir acodamiento obstructivo mecánico que previene las fugas de orina. Al reducir el prolapso (con valvas o pesario), se restituye el ángulo uretrovesical y se desenmascara la incontinencia urinaria de esfuerzo oculta. El estudio CARE demostró que realizar una colposacropexia sin tratar la uretra en pacientes con prueba de reducción positiva conlleva alta tasa de IUE postoperatoria sintomática de novo."
  },
  {
    num: 1034,
    disciplina: "urogine",
    pregunta: "Una paciente de 38 años presenta la tríada clásica de goteo post-miccional, dispareunia y disuria recurrente ('las 3 D'). A la exploración física se palpa una masa quística suburetral anterior fluctuante de la cual sale una gota de material purulento por el meato al comprimirla. ¿Cuál es la prueba de imagen de elección con la mayor sensibilidad y especificidad anatómica para la planeación quirúrgica de un divertículo uretral?",
    opciones: {
      A: "Resonancia magnética pélvica con bobina endovaginal o phased-array con secuencias potenciadas en T2",
      B: "Cistografía miccional simple sin contraste",
      C: "Gammagrama renal con DMSA",
      D: "Urografía excretora intravenosa estándar"
    },
    respuesta_correcta: "A",
    justificacion: "La Resonancia Magnética (RM) pélvica de alta resolución en cortes finos axiales y sagitales T2 es el estudio de imagen de elección (gold standard) para la evaluación del divertículo uretral femenino. Permite definir la anatomía exacta, el cuello o comunicación con la uretra, la extensión circunferencial ('en silla de montar' o herradura), la presencia de tabiques o cálculos intraluminales y descartar la malignización (adenocarcinoma) dentro del divertículo."
  },
  {
    num: 1035,
    disciplina: "urogine",
    pregunta: "Con respecto a la cistitis intersticial / síndrome de dolor vesical con presencia de úlceras o lesiones de Hunner (Fenotipo ESSIC 3C), ¿cuál es el tratamiento local de primera línea más efectivo para el alivio rápido del dolor y la polaquiuria según las guías AUA?",
    opciones: {
      A: "Fulguración transuretral (con electrocauterio monopolar/bipolar o láser) o inyección submucosa intralesional de triamcinolona",
      B: "Cistectomía radical inmediata con conducto ileal",
      C: "Dilatación vesical hidráulica forzada con presiones mayores a 120 cmH2O por 30 minutos",
      D: "Administración oral indefinida de corticosteroides sistémicos a dosis inmunosupresoras"
    },
    respuesta_correcta: "A",
    justificacion: "Las guías de la Asociación Americana de Urología (AUA) y la Sociedad Europea para el Estudio de la Cistitis Intersticial (ESSIC) establecen que los pacientes con úlceras de Hunner se benefician drásticamente de la terapia endoscópica dirigida: electrofulguración cuidadosa de la mucosa lesionada o inyección submucosa perilesional de triamcinolona, lo que proporciona un alivio sintomático sustancial y rápido en más del 70-80% de los pacientes."
  },
  {
    num: 1036,
    disciplina: "urogine",
    pregunta: "Durante la realización de una colposacropexia laparoscópica o asistida por robot para la corrección de prolapso de cúpula vaginal, ¿cuál es la estructura vascular de mayor riesgo hemorrágico potencialmente catastrófico que se encuentra inmediatamente medial y posterior a la disección del ligamento longitudinal anterior a nivel del promontorio sacro (S1)?",
    opciones: {
      A: "Vena ilíaca común izquierda y arteria sacra media",
      B: "Arteria epigástrica inferior profunda",
      C: "Arteria pudenda interna en el canal de Alcock",
      D: "Vena renal izquierda retroaórtica"
    },
    respuesta_correcta: "A",
    justificacion: "Durante la fijación de la malla al promontorio sacro en la colposacropexia, el punto anatómico crítico es el ligamento longitudinal anterior a nivel de S1. Inmediatamente medial discurren los vasos sacros medios, pero el riesgo vascular mayor radica en la vena ilíaca común izquierda, que desciende cruzando el promontorio muy cerca del margen medial/izquierdo del campo de disección. La lesión inadvertida de esta vena genera una hemorragia pélvica masiva y de muy difícil control."
  },
  {
    num: 1037,
    disciplina: "urogine",
    pregunta: "Una paciente de 46 años acude a urgencias a los 5 días de una cinta suburetral transobturatriz (TOT) por retención urinaria completa con residuo post-miccional de 500 ml y dolor inguinal severo. Tras el fracaso del cateterismo y la observación por 10 días, ¿cuál es la intervención de elección para desobstruir la uretra sin desmantelar necesariamente el mecanismo de continencia a largo plazo?",
    opciones: {
      A: "Aflojamiento o movilización precoz de la cinta mediouretral ('sling loosening') traccionando hacia abajo con una pinza hemostática por vía vaginal",
      B: "Dilatación uretral forzada con bujías metálicas de Van Buren hasta calibre 36 Fr",
      C: "Uretrostomía perineal permanente con cierre de cuello vesical",
      D: "Reimplante ureteral bilateral laparoscópico"
    },
    respuesta_correcta: "A",
    justificacion: "En las primeras dos semanas postoperatorias de una cinta suburetral sintética, el material aún no se ha integrado por fibrosis en los tejidos del huésped. La maniobra de elección ante retención urinaria obstructiva precoz es el aflojamiento de la cinta ('sling loosening') bajo anestesia local o sedación: se abre la incisión vaginal, se identifica la cinta y se tracciona hacia abajo 2-3 mm con una pinza sobre la uretra, restableciendo el vaciamiento miccional sin perder la continencia."
  },
  {
    num: 1038,
    disciplina: "urogine",
    pregunta: "En una mujer con incontinencia urinaria de urgencia severa refractaria a terapia conductual y a dosis plenas de antimuscarínicos y Mirabegrón que acepta tratamiento con inyección intravesical de toxina onabotulínica A (100 Unidades), ¿cuál es la tasa aproximada de necesidad de cateterismo limpio intermitente (CLI) postoperatorio temporal por retención urinaria que debe informarse en el consentimiento informado según los ensayos fase III pivotales?",
    opciones: {
      A: "Aproximadamente entre el 5% y el 6%",
      B: "Cero por ciento, no existe riesgo de retención",
      C: "Más del 65% de los pacientes",
      D: "Exactamente el 100% durante el primer año"
    },
    respuesta_correcta: "A",
    justificacion: "En los ensayos clínicos multicéntricos fase III que respaldaron la aprobación de la toxina onabotulínica A a dosis de 100 U para vejiga hiperactiva idiopática no neurogénica, la tasa de retención urinaria que requirió cateterismo limpio intermitente temporal fue de aproximadamente 5.4% a 6.1%. Por consenso de las guías AUA/SUFU, toda paciente candidata a Botox intravesical debe estar advertida y dispuesta a realizarse autocateterismo si se presenta retención."
  },
  {
    num: 1039,
    disciplina: "urogine",
    pregunta: "En el sistema de cuantificación del prolapso de órganos pélvicos (POP-Q), si durante el examen con esfuerzo máximo el punto Ba se encuentra a +4 cm respecto al plano del himen, ¿qué defecto del compartimento pélvico representa y qué grado clínico corresponde?",
    opciones: {
      A: "Prolapso de pared vaginal anterior (cistocele) avanzado, estadio III",
      B: "Defecto del compartimento posterior puro (rectocele), estadio I",
      C: "Elongación hipertrófica congénita del cuello uterino sin prolapso",
      D: "Prolapso normal asintomático dentro de límites de normalidad"
    },
    respuesta_correcta: "A",
    justificacion: "En el sistema estandarizado POP-Q, el punto Ba representa la posición más dependiente de cualquier parte de la pared vaginal anterior superior entre el punto Aa y el fondo de saco anterior. Un valor de Ba = +4 cm indica que la pared vaginal anterior protruye 4 cm por fuera del anillo himeneal, lo cual corresponde a un prolapso del compartimento anterior (cistocele) en Estadio III (cuando el punto más distal protruye más de 1 cm por fuera del himen pero menos de [Longitud Total de Vagina - 2 cm])."
  },

  // ==========================================
  // 5. UROLOGÍA FUNCIONAL Y NEUROUROLOGÍA (10 preguntas)
  // ==========================================
  {
    num: 1040,
    disciplina: "uro_funcional",
    pregunta: "Un paciente masculino de 32 años con antecedente de traumatismo raquimedular cervical completo a nivel C6 (tetraplejia) presenta cefalea pulsátil holocraneana severa, sudoración profusa facial y en cuello, hipertensión arterial severa (210/120 mmHg) y bradicardia refleja durante la realización de una urodinamia al alcanzar 180 ml de infusión vesical. ¿Cuál es la entidad clínica de emergencia y la primera acción inmediata?",
    opciones: {
      A: "Disreflexia autonómica (hiperreflexia autónoma); suspender de inmediato el llenado y drenar por completo la vejiga a través del catéter",
      B: "Shock hipovolémico no compensado; iniciar infusión rápida de cristaloides",
      C: "Crisis tirotóxica aguda; administrar propiltiouracilo y propranolol",
      D: "Infarto agudo de miocardio transmural; realizar trombolisis coronaria inmediata"
    },
    respuesta_correcta: "A",
    justificacion: "La disreflexia autonómica es una emergencia médica potencialmente fatal que ocurre en pacientes con lesiones medulares en T6 o superiores. Estímulos aferentes viscerales nociceptivos (frecuentemente distensión de vejiga o recto) desencadenan una respuesta simpática masiva no inhibida por el centro bulbar, causando vasoconstricción periférica grave, hipertensión severa, y bradicardia refleja vagal con diaforesis supralesional. La primera medida obligatoria es elevar la cabecera del paciente a 90° y vaciar inmediatamente la vejiga."
  },
  {
    num: 1041,
    disciplina: "uro_funcional",
    pregunta: "En pacientes con vejiga neurogénica secundaria a lesión medular suprasacra o esclerosis múltiple, la videourodinamia demuestra contracción involuntaria del detrusor que ocurre de manera simultánea con la contracción involuntaria del esfínter uretral estriado durante la micción. ¿Cómo se denomina esta anomalía y cuál es su principal riesgo urológico a largo plazo si no se trata?",
    opciones: {
      A: "Disinergia detrusor-esfínter (DSD); genera presiones intravesicales de llenado y vaciamiento peligrosamente altas (> 40 cmH2O) que causan reflujo, hidronefrosis y daño renal crónico",
      B: "Incompetencia del cuello vesical; produce pérdida insensible de orina sin riesgo renal",
      C: "Atonía vesical primaria; riesgo exclusivo de hipotensión ortostática",
      D: "Espasmo uretral de Fowler; riesgo de trombosis venosa femoral"
    },
    respuesta_correcta: "A",
    justificacion: "La disinergia detrusor-esfínter estriado (DSD) es el fallo de coordinación entre la contracción del detrusor y la relajación del esfínter externo. Ocurre característicamente en lesiones entre el centro pontino de la micción y el centro sacro (S2-S4). Al intentar contraerse la vejiga contra un esfínter cerrado, se generan presiones intravesicales muy elevadas que superan los 40 cmH2O, transmitiéndose directamente al tracto superior y provocando insuficiencia renal terminal si no se maneja con cateterismo intermitente y relajación del detrusor."
  },
  {
    num: 1042,
    disciplina: "uro_funcional",
    pregunta: "Durante la evaluación urodinámica de una mujer de 24 años con retención urinaria completa indolora idiopática de 6 meses de evolución, la electromiografía (EMG) concéntrica del esfínter uretral estriado revela descargas de alta frecuencia semejantes al sonido de 'helicópteros o ballenas en el audio' (complejos repetitivos y descargas desaceleradas). La paciente no presenta lesiones neurológicas en RM cerebral o medular. ¿Cuál es el síndrome característico y cuál es la terapia con mayor tasa de éxito?",
    opciones: {
      A: "Síndrome de Fowler; la terapia de elección es la Neuromodulación Sacra (InterStim)",
      B: "Síndrome de Guillain-Barré; la terapia de elección es plasmaféresis",
      C: "Esclerosis múltiple primaria progresiva; la terapia de elección es interferón beta",
      D: "Neuropatía diabética periférica; la terapia de elección es betanecol oral"
    },
    respuesta_correcta: "A",
    justificacion: "El Síndrome de Fowler es una causa clásica de retención urinaria en mujeres jóvenes sin neuropatía manifiesta, debida a una hiperactividad del esfínter uretral estriado que no se relaja durante el ciclo miccional. Su hallazgo patognomónico en la EMG del esfínter son las descargas complejas desaceleradas y repetitivas. La neuromodulación sacra de la raíz S3 es el tratamiento de elección, restaurando la micción espontánea en más del 70% de los casos."
  },
  {
    num: 1043,
    disciplina: "uro_funcional",
    pregunta: "Durante el procedimiento quirúrgico de colocación de un electrodo tined lead para neuromodulación sacra (InterStim) en el foramen sacro S3 guiado por fluoroscopia, ¿cuáles son las dos respuestas neuromusculares características (una motora y una sensorial/refleja) que confirman la estimulación precisa de la raíz nerviosa S3 adecuada?",
    opciones: {
      A: "Respuesta motora: Flexión plantar del primer dedo del pie (hallux) y contracción en 'fuelle' del esfínter anal; respuesta sensorial: sensación de vibración en el periné o recto",
      B: "Respuesta motora: Rotación externa de la cadera y dorsiflexión del pie completo; respuesta sensorial: dolor irradiado a la rodilla",
      C: "Respuesta motora: Contracción de los músculos rectos abdominales; respuesta sensorial: parestesias en la espalda lumbar",
      D: "Respuesta motora: Inmovilidad absoluta de todo el miembro inferior; respuesta sensorial: adormecimiento de la pantorrilla"
    },
    respuesta_correcta: "A",
    justificacion: "Para asegurar la colocación óptima del electrodo en la raíz sacra S3, se buscan respuestas motoras y sensitivas específicas a bajas intensidades de estimulación: la respuesta motora típica de S3 es la flexión plantar del primer dedo del pie (flexor hallucis brevis) y la contracción anteroposterior del esfínter anal (bellows reflex). La estimulación de S2 genera rotación externa de pierna/pie, y la de S4 produce contracción anal sin respuesta motora en el pie."
  },
  {
    num: 1044,
    disciplina: "uro_funcional",
    pregunta: "En pacientes con cistoplastia de aumento (ampliación vesical) utilizando un segmento desubtubulado de íleon terminal, ¿cuál es el mecanismo fisiopatológico del trastorno ácido-base característico y cuál es el tratamiento farmacológico inicial?",
    opciones: {
      A: "Acidosis metabólica hiperclorémica con brecha aniónica normal, por intercambio de amonio/cloruro por bicarbonato en la mucosa entérica; tratamiento con Bicarbonato de Sodio o Citrato de Potasio oral",
      B: "Alcalosis metabólica hipopotasémica por pérdida masiva de ácido gástrico; tratamiento con cloruro de amonio",
      C: "Acidosis láctica severa por necrosis intestinal obligada; tratamiento con diálisis peritoneal",
      D: "Alcalosis respiratoria crónica por hiperventilación psicógena; tratamiento con ansiolíticos"
    },
    respuesta_correcta: "A",
    justificacion: "El epitelio del íleon y colon continúa realizando transporte iónico activo cuando entra en contacto con la orina: absorbe cloruro y amonio (NH4+) de la luz a la circulación e intercambia bicarbonato secretándolo a la orina. La reabsorción continuada de cloruro y amonio produce acidosis metabólica hiperclorémica con brecha aniónica normal (anion gap normal). El tratamiento de primera línea consiste en alcalinización oral con bicarbonato de sodio o citrato de potasio."
  },
  {
    num: 1045,
    disciplina: "uro_funcional",
    pregunta: "Un varón de 67 años con incontinencia urinaria de esfuerzo severa (gasto de 6 pañales al día) secundaria a prostatectomía radical de hace 2 años sin evidencia de recurrencia bioquímica es programado para implante de esfínter urinario artificial (AMS 800). ¿Cuáles son los valores estándar de presión del balón regulador de presión más comúnmente utilizados en la uretra bulbar masculina?",
    opciones: {
      A: "Balón con rango de presión de 61 a 70 cmH2O",
      B: "Balón con rango de presión de 120 a 140 cmH2O",
      C: "Balón con rango de presión de 10 a 20 cmH2O",
      D: "Balón hiperbárico de 200 cmH2O con cierre hermético rígido"
    },
    respuesta_correcta: "A",
    justificacion: "El esfínter urinario artificial AMS 800 utiliza balones reguladores de presión disponibles en distintos rangos. Para la uretra bulbar masculina virgen, el reservorio de 61-70 cmH2O es el estándar universal, ya que proporciona una presión de oclusión suficiente para garantizar la continencia en la vida diaria sin exceder la presión de perfusión capilar de la mucosa uretral (disminuyendo el riesgo de atrofia por compresión o erosión tisular)."
  },
  {
    num: 1046,
    disciplina: "uro_funcional",
    pregunta: "Una paciente de 70 años con enfermedad de Parkinson avanzada presenta síntomas severos de vejiga hiperactiva con incontinencia de urgencia. El neurólogo tratante advierte sobre el uso de ciertos fármacos urológicos. ¿Cuál de las siguientes opciones de tratamiento para la vejiga hiperactiva es preferible en pacientes con deterioro cognitivo o demencia parkinsoniana por carecer de efectos secundarios sobre el sistema nervioso central?",
    opciones: {
      A: "Agonistas de los receptores beta-3 adrenérgicos (Mirabegrón o Vibegrón)",
      B: "Oxibutinina oral de liberación inmediata a dosis plenas",
      C: "Atropina sublingual combinada con amitriptilina",
      D: "Escopolamina en parches transdérmicos diarios"
    },
    respuesta_correcta: "A",
    justificacion: "Los antimuscarínicos terciarios (especialmente la oxibutinina) cruzan con facilidad la barrera hematoencefálica y bloquean los receptores muscarínicos M1 en el hipocampo y la corteza cerebral, empeorando o precipitando el deterioro cognitivo, la confusión y la demencia en ancianos y pacientes con Parkinson. Los agonistas beta-3 (Mirabegrón, Vibegrón) tienen un mecanismo de acción totalmente adrenérgico sobre el detrusor y carecen de toxicidad anticolinérgica sobre el SNC."
  },
  {
    num: 1047,
    disciplina: "uro_funcional",
    pregunta: "En relación con el esfínter urinario artificial (AMS 800), si a los 6 meses de la activación el paciente presenta dolor perineal agudo, fiebre, eritema local y la cistoscopia flexible confirma una erosión del manguito con visualización directa del elastómero de silicona dentro de la luz uretral, ¿cuál es la conducta quirúrgica obligatoria?",
    opciones: {
      A: "Explantación (retiro) completa de todos los componentes del esfínter urinario artificial (manguito, bomba y balón) y colocación de sonda transuretral",
      B: "Administrar antibióticos intravenosos durante 2 semanas dejando el dispositivo activado",
      C: "Recortar únicamente la porción erosionada de la uretra dejando el manguito colocado",
      D: "Inyectar pegamento de fibrina dentro de la uretra para sellar la erosión"
    },
    respuesta_correcta: "A",
    justificacion: "La erosión del manguito uretral de un esfínter urinario artificial implica contaminación bacteriana de todo el sistema protésico. Dejar cualquier componente de silicona condiciona colonización por biofilm e infección profunda inextirpable. La única conducta avalada por las guías es la explantación quirúrgica inmediata de todo el dispositivo (manguito, reservorio y bomba escrotal), cateterismo uretral por 3 a 6 semanas para permitir la cicatrización uretral, y eventual reimplante diferido a un mínimo de 3 a 6 meses después."
  },
  {
    num: 1048,
    disciplina: "uro_funcional",
    pregunta: "Durante un estudio urodinámico en un paciente con sospecha de vejiga acontráctil, ¿cómo define formalmente la Sociedad Internacional de Continencia (ICS) a la 'Vejiga Acontráctil' (Acontractile Detrusor)?",
    opciones: {
      A: "Aquella en la que no se puede observar ninguna contracción del detrusor durante los estudios de flujo-presión durante la fase de vaciamiento a pesar de los intentos de micción",
      B: "Aquella que presenta una presión de fuga del detrusor mayor a 100 cmH2O",
      C: "Aquella que expulsa la orina con flujo supernormal Qmax > 40 ml/s",
      D: "Aquella que se contrae rítmicamente cada 15 segundos en la fase de llenado"
    },
    respuesta_correcta: "A",
    justificacion: "Según la terminología estandarizada de la ICS, la 'Vejiga Acontráctil' o 'Detrusor Acontráctil' se define estrictamente durante la fase miccional cuando no se observa contracción medible del detrusor (Pdet = 0 cmH2O) a pesar de la orden de micción y el esfuerzo del paciente, lo que habitualmente resulta en retención urinaria completa o vaciamiento por prensa abdominal exclusiva."
  },
  {
    num: 1049,
    disciplina: "uro_funcional",
    pregunta: "En la cistometría de llenado de un paciente con sospecha de vejiga neurogénica, ¿cómo se calcula la Complianza Vesical (C) y cuál es el valor umbral por debajo del cual se considera que existe una 'Baja Complianza' de alto riesgo para el tracto superior?",
    opciones: {
      A: "C = $\\Delta$V / $\\Delta$Pdet; un valor de complianza menor a 10 a 20 ml/cmH2O se considera bajo y de alto riesgo para deterioro renal",
      B: "C = $\\Delta$Pdet * $\\Delta$V; un valor mayor a 500 se considera de alto riesgo",
      C: "C = Presión basal / Qmax; un valor menor a 100 ml/s es bajo",
      D: "C = Volumen residual / Capacidad cistométrica máxima; un valor menor a 0.1 es anormal"
    },
    respuesta_correcta: "A",
    justificacion: "La complianza vesical (C) cuantifica la capacidad del detrusor para distenderse elásticamente sin elevar excesivamente su presión interna y se calcula mediante: C = $\\Delta$V / $\\Delta$Pdet (cambio de volumen dividido entre el cambio en la presión del detrusor entre la presión basal y la presión al final del llenado o antes de la contracción). Una complianza normal es > 30-40 ml/cmH2O. Valores por debajo de 10-20 ml/cmH2O indican un detrusor rígido con fibrosis que transmite altas presiones retrógradas continuas a los riñones."
  },

  // ==========================================
  // 6. LITIASIS Y ENDOUROLOGÍA (10 preguntas)
  // ==========================================
  {
    num: 1050,
    disciplina: "litiasis",
    pregunta: "En un paciente con litiasis de ácido úrico pura de 2 cm en la pelvis renal, ¿cuál es el pilar de la quimiolisis oral según las guías AUA/EAU y cuál es el valor meta de pH urinario que debe alcanzarse sin excederlo para evitar la precipitación de sales de fosfato de calcio sobre el cálculo?",
    opciones: {
      A: "Alcalinización urinaria con Citrato de Potasio buscando un pH urinario meta entre 6.5 y 7.0 (evitando estrictamente un pH > 7.2 - 7.5)",
      B: "Acidificación urinaria con cloruro de amonio buscando un pH < 5.0",
      C: "Alcalinización forzada con bicarbonato intravenoso hasta alcanzar un pH de 8.5",
      D: "Diuresis forzada con furosemida manteniendo un pH estrictamente en 5.5"
    },
    respuesta_correcta: "A",
    justificacion: "El pKa del ácido úrico es de 5.5. A pH ácido es insoluble, pero a pH > 6.5 se disocia en urato soluble, permitiendo la disolución completa del cálculo sin cirugía (quimiolisis). El fármaco de elección es el citrato de potasio. El pH urinario meta debe oscilar estrictamente entre 6.5 y 7.0 (idealmente 6.8-7.0); sobrepasar un pH de 7.2 a 7.5 está contraindicado porque promueve la sobre-saturación y precipitación de sales de fosfato de calcio (apatita o brushita) alrededor del núcleo de ácido úrico, haciéndolo insoluble."
  },
  {
    num: 1051,
    disciplina: "litiasis",
    pregunta: "Una paciente de 28 años con litiasis recurrente bilateral de coloración amarillo-miel hexagonal en el examen de orina es diagnosticada de Cistinuria. A pesar de sobrehidratación masiva (> 3.5 L/día) y alcalinización urinaria (pH > 7.5), continúa formando cálculos masivos de cistina y la cistinuria de 24 horas es de 950 mg/día (normal < 250 mg/día). ¿Cuál es la terapia farmacológica de segunda línea de elección según las guías clínicas?",
    opciones: {
      A: "Agentes quelantes de tiol como la Tiopronina (alfa-mercaptopropionilglicina) o D-penicilamina",
      B: "Tiazidas combinadas con alopurinol",
      C: "Antibioticoterapia continua con doxiciclina",
      D: "Diuréticos de asa combinados con ácido fólico"
    },
    respuesta_correcta: "A",
    justificacion: "La cistina está compuesta por dos moléculas de cisteína unidas por un puente disulfuro. Cuando la solubilidad máxima de la cistina (~250-300 mg/L) se ve sobrepasada a pesar de la hiperhidratación y la alcalinización con citrato de potasio, las guías AUA/EAU indican el uso de fármacos fijadores de tiol (tiol-derivados como la Tiopronina o la D-penicilamina). Estos agentes producen una reacción de intercambio tiol-disulfuro formando complejos mixtos cisteína-fármaco que son hasta 50 veces más solubles que la cistina pura."
  },
  {
    num: 1052,
    disciplina: "litiasis",
    pregunta: "Un paciente acude a urgencias con cuadro de choque séptico secundario a urosepsis obstructiva por un cálculo de 8 mm impactado en el uréter lumbar derecho. La TC confirma hidronefrosis severa con estriación de la grasa perirrenal. ¿Cuál es la conducta terapéutica correcta y el error más grave que debe evitarse?",
    opciones: {
      A: "Descompresión urgente de la vía urinaria (mediante catéter JJ retrógrado o nefrostomía percutánea) más antibioticoterapia IV y reanimación hemodinámica; está absolutamente contraindicada la litotricia primaria inmediata",
      B: "Realizar ureteroscopia semirrígida inmediata con litotricia láser para fragmentar el cálculo de inmediato",
      C: "Aplicar litotricia extracorpórea por ondas de choque (LEOCH) de emergencia",
      D: "Administrar analgesia y vigilar por 48 horas sin derivar la vía urinaria"
    },
    respuesta_correcta: "A",
    justificacion: "La presencia de infección del tracto urinario con obstrucción (pielonefritis obstructiva / pionefrosis / urosepsis) es una emergencia urológica con alta mortalidad. La regla de oro internacional de las guías AUA y EAU establece que la vía urinaria debe ser descomprimida de inmediato (mediante catéter JJ o nefrostomía percutánea) junto con soporte hemodinámico y antibióticos. Cualquier intento de litotricia definitiva en el episodio séptico agudo está proscrito por riesgo inminente de diseminación bacteriana masiva a la circulación venosa."
  },
  {
    num: 1053,
    disciplina: "litiasis",
    pregunta: "En la evaluación anatómica preoperatoria mediante tomografía para una litotricia extracorpórea por ondas de choque (LEOCH) o una ureterorrenoscopia flexible (RIRS) por cálculo en el cáliz inferior de 12 mm, ¿cuál de los siguientes tríos de factores infundibulares calicilares se asocia con la menor tasa de éxito (peor aclaramiento de fragmentos) en LEOCH?",
    opciones: {
      A: "Ángulo infundíbulo-pélvico agudo (< 45°), longitud infundibular larga (> 10 mm) y cuello/ancho infundibular estrecho (< 5 mm)",
      B: "Ángulo infundíbulo-pélvico obtuso (> 90°), longitud infundibular corta (< 5 mm) y ancho amplio (> 10 mm)",
      C: "Presencia de quiste cortical simple de 2 cm en polo superior",
      D: "Densidad tomográfica del cálculo de 350 Unidades Hounsfield (UH)"
    },
    respuesta_correcta: "A",
    justificacion: "La anatomía del cáliz inferior es determinante para la eliminación pasiva de fragmentos litiásicos post-LEOCH. La combinación anatómica desfavorable descrita por Sampaio y Elbahnasy incluye: un ángulo infundíbulo-pélvico agudo (< 45° o < 30°), un infundíbulo largo (> 10-15 mm) y un ancho infundibular estrecho (< 4-5 mm). En presencia de estos tres factores desfavorables, la tasa de eliminación tras LEOCH cae a menos del 30-40%, siendo la RIRS o la mini-NLP las técnicas preferidas."
  },
  {
    num: 1054,
    disciplina: "litiasis",
    pregunta: "Durante una nefrolitotomía percutánea (NLP) estándar por cálculo coraliforme, el cirujano realiza una punción intercostal por encima de la 11ª costilla en la línea axilar posterior para acceder al cáliz superior. En el postoperatorio inmediato el paciente presenta disnea súbita, taquipnea y disminución de ruidos respiratorios basales ipsilaterales. ¿Cuál es la complicación pleuropulmonar y la tasa de riesgo asociada al acceso intercostal supracostal 11?",
    opciones: {
      A: "Hidrotórax / Neumotórax por penetración del receso costodiafragmático pleural; ocurre en hasta un 8-12% de los accesos por encima de la 11ª costilla",
      B: "Tromboembolismo pulmonar graso masivo inevitable",
      C: "Perforación espontánea del lóbulo pulmonar medio contralateral",
      D: "Atelectasia obstructiva por tapón mucoso sin lesión de pleura"
    },
    respuesta_correcta: "A",
    justificacion: "La reflexión inferior de la pleura parietal parietal en la línea axilar posterior cruza a nivel de la 12ª costilla y se extiende hasta la 10ª-11ª costilla. La punción percutánea renal supracostal (especialmente por encima de la 11ª costilla) tiene un riesgo 4 a 5 veces mayor de complicaciones pleurales (neumotórax, hidrotórax por líquido de irrigación, hemotórax) en comparación con el acceso subcostal (12ª costilla), requiriendo colocación de tubo de toracostomía en 8-12% de los casos."
  },
  {
    num: 1055,
    disciplina: "litiasis",
    pregunta: "En una nefrolitotomía percutánea (NLP), el cirujano observa salida de contenido con burbujas de gas y aspecto fecaloide a través de la vaina de Amplatz. La inyección de contraste por la nefrostomía confirma que el trayecto percutáneo atraviesa la porción posterolateral del colon descendente hacia el riñón. El paciente se encuentra clínicamente estable, sin signos de peritonitis, afebril y con abdomen blando. ¿Cuál es el manejo conservador estandarizado?",
    opciones: {
      A: "Manejo conservador: colocar una sonda ureteral / catéter JJ para desviar la orina, traccionar la nefrostomía retirándola hacia la luz colónica como colostomía de descompresión controlada, antibióticos de amplio espectro, dieta absoluta y reposo",
      B: "Realizar una laparotomía exploradora de urgencia con hemicolectomía izquierda y nefrectomía radical inmediata",
      C: "Retirar inmediatamente todos los catéteres y drenajes sin reemplazo para que la herida cierre sola",
      D: "Aumentar la presión de irrigación salina a través de la vaina de Amplatz para limpiar el colon"
    },
    respuesta_correcta: "A",
    justificacion: "La perforación de colon durante la NLP ocurre con mayor frecuencia en riñones con colon retroperitoneal posterolateral. Si la perforación es estrictamente retroperitoneal y el paciente no tiene peritonitis ni abdomen agudo, las guías avalan el manejo conservador: 1) Separar los sistemas urinario y digestivo (colocar catéter ureteral JJ para drenaje urinario cerrado y sin fugas al retroperitoneo); 2) Retirar el catéter de nefrostomía fuera del riñón dejándolo dentro de la luz del colon como fístula controlada/tubo de colostomía; 3) Antibióticos, reposo intestinal y retiro progresivo de la sonda colónica tras 7-10 días."
  },
  {
    num: 1056,
    disciplina: "litiasis",
    pregunta: "Con respecto a la física del láser durante la ureterorrenoscopia retrógrada (RIRS), ¿cuál de los siguientes enunciados describe correctamente la diferencia entre el efecto de 'Pintado / Desempolvado' (Dusting) y el de 'Fragmentación' (Fragmentation) con láser Holmium:YAG?",
    opciones: {
      A: "El 'Dusting' utiliza baja energía de pulso (0.2-0.5 J) y alta frecuencia (20-40 Hz) para generar micropartículas eliminables espontáneamente; la 'Fragmentación' utiliza alta energía (1.0-2.0 J) y baja frecuencia (5-10 Hz) para romper el cálculo en fragmentos grandes que se extraen con cesta",
      B: "El 'Dusting' requiere potencias superiores a 100 Watts que elevan la temperatura a 90 °C de forma obligada",
      C: "La 'Fragmentación' solo funciona en cálculos de cistina y está prohibida en cálculos de oxalato",
      D: "El 'Dusting' no produce ningún efecto ablativo sobre el cálculo y solo sirve para coagular hemorragias"
    },
    respuesta_correcta: "A",
    justificacion: "En la litotricia intracorpórea con láser Holmium:YAG, la técnica de 'Dusting' (pulverización o desempolvado) emplea pulsos de muy baja energía (0.2 a 0.5 J) a frecuencias elevadas (20 a 50 Hz, con ancho de pulso largo), lo cual erosiona superficialmente el cálculo generando microfragmentos (< 1 mm o 'polvo') que no requieren extracción con canastilla. La 'Fragmentación' utiliza alta energía por pulso (1.0 a 2.0 J) y baja frecuencia (5 a 10 Hz) produciendo fracturas mecánicas en bloques grandes para remoción activa con cesta."
  },
  {
    num: 1057,
    disciplina: "litiasis",
    pregunta: "En un paciente con litiasis renal bilateral recurrente de fosfato de calcio (brushita y apatita), nefrocalcinosis medular en 'llamarada', hipopotasemia crónica y acidosis metabólica sistémica con brecha aniónica normal, se documenta un pH urinario que nunca desciende por debajo de 5.8 a pesar de una sobrecarga ácida con cloruro de amonio. ¿Cuál es el trastorno tubular subyacente y cuál es la anomalía metabólica urinaria que promueve la litogénesis?",
    opciones: {
      A: "Acidosis Tubular Renal distal (Tipo 1); defecto en la secreción tubular distal de H+, lo que causa orina persistentemente alcalina e hipocitraturia severa (< 100 mg/día)",
      B: "Acidosis Tubular Renal proximal (Tipo 2); pérdida masiva de glucosa y aminoácidos con orina muy ácida",
      C: "Síndrome de Fanconi completo con hiperuricosuria masiva",
      D: "Diabetes insípida central con hipercalcemia refractaria"
    },
    respuesta_correcta: "A",
    justificacion: "La Acidosis Tubular Renal Tipo 1 (distal) se debe a un fallo de las células intercaladas alfa del túbulo colector para secretar iones H+. Esto impide la acidificación urinaria, manteniendo un pH urinario paradójicamente alcalino (> 5.5 - 6.0) en presencia de acidosis metabólica sistémica. La acidosis sistémica estimula la reabsorción tubular proximal casi total del citrato, causando una hipocitraturia profunda (< 100 mg/día). La combinación de pH alcalino, hipocitraturia e hipercalciuria produce litiasis de fosfato cálcico y nefrocalcinosis agresiva."
  },
  {
    num: 1058,
    disciplina: "litiasis",
    pregunta: "En relación con los nuevos avances terapéuticos farmacológicos para la Hiperoxaluria Primaria Tipo 1 (trastorno enzimático hepático autosómico recesivo que produce nefrolitiasis severa e insuficiencia renal terminal por depósito masivo de oxalato de calcio), ¿cuál es el mecanismo de acción de Lumasiran, recientemente aprobado por agencias regulatorias internacionales?",
    opciones: {
      A: "Ácido ribonucleico de interferencia pequeño (siRNA) que degrada el ARN mensajero de la enzima hidroxiácido oxidasa 1 (HAO1), reduciendo la síntesis del sustrato glioxilato precursor del oxalato",
      B: "Quelante intraluminal de oxalato que se une irreversiblemente en el duodeno",
      C: "Inhibidor competitivo de la anhidrasa carbónica en el túbulo proximal renal",
      D: "Anticuerpo monoclonal dirigido contra los transportadores de citrato dependientes de sodio"
    },
    respuesta_correcta: "A",
    justificacion: "Lumasiran (Oxlumo) es una terapia dirigida basada en interferencia por ARN (siRNA) diseñada específicamente para la hiperoxaluria primaria tipo 1. Actúa silenciando la expresión de la enzima glicolato oxidasa (codificada por HAO1) en los hepatocitos. Al inhibir esta enzima previa en la cascada metabólica, se reduce la producción de glioxilato, impidiendo que el hígado metabolice glioxilato en oxalato tóxico, lo que disminuye drásticamente el oxalato urinario y plasmático."
  },
  {
    num: 1059,
    disciplina: "litiasis",
    pregunta: "Durante una ureterorrenoscopia flexible (RIRS) prolongada por un cálculo intrarrenal de 18 mm, el cirujano utiliza una vaina de acceso ureteral (Ureteral Access Sheath - UAS) de 11/13 Fr. ¿Cuál es el beneficio hidrodinámico principal de la vaina de acceso ureteral demostrado en estudios de presión intraluminal?",
    opciones: {
      A: "Mantiene la presión intrapélvica renal en niveles seguros y bajos (< 20-30 mmHg) a pesar de irrigación continua forzada, reduciendo el riesgo de reflujo pielovenoso, absorción sistémica de endotoxinas y sepsis",
      B: "Garantiza la dilatación ureteral irreversible para evitar colocación de catéter JJ posterior",
      C: "Aumenta la absorción de calor del láser por la pared del uréter",
      D: "Impide totalmente la formación de nuevas litiasis en el futuro"
    },
    respuesta_correcta: "A",
    justificacion: "Estudios fisiológicos endourológicos han demostrado que la irrigación continua durante la RIRS sin vaina puede elevar la presión intrapélvica a más de 40-100 mmHg (el umbral de reflujo pielotubular y pielovenoso es ~30 mmHg). La colocación de una vaina de acceso ureteral proporciona una vía de salida continua de bajo flujo y baja resistencia, manteniendo las presiones de la pelvis renal por debajo de 20 mmHg, lo que minimiza el edema perirrenal, el reflujo de bacterias a la circulación sistémica y el riesgo de choque séptico postoperatorio."
  },

  // ==========================================
  // 7. ANDROLOGÍA E INFERTILIDAD (10 preguntas)
  // ==========================================
  {
    num: 1060,
    disciplina: "andrologia",
    pregunta: "Un paciente masculino de 35 años acude a urgencias con priapismo isquémico (de bajo flujo) doloroso y rígido de 55 horas de evolución. Tras aspiración de sangre oscura acidótica e inyección intracavernosa repetida de fenilefrina, la tumescencia persiste inalterada. La biopsia y la evidencia clínica indican necrosis miógena del músculo liso cavernoso. Según las guías contemporáneas de la AUA y la EAU sobre priapismo prolongado (> 48-72 h), ¿cuál es la intervención quirúrgica de elección para evitar un pene acortado, desfigurado e impotente por fibrosis tisular masiva?",
    opciones: {
      A: "Implante inmediato de prótesis de pene (prótesis maleable o inflable) en esa misma hospitalización",
      B: "Realizar una fístula safeno-cavernosa (shunt de Grayhack) y diferir la prótesis 5 años",
      C: "Embolización angiográfica supraselectiva de las arterias pudendas internas",
      D: "Prescripción de anticoagulación oral plena y alta ambulatoria inmediata"
    },
    respuesta_correcta: "A",
    justificacion: "En el priapismo isquémico con más de 48-72 horas de evolución, la necrosis irreversible del endotelio y músculo liso trabecular es casi del 100%. Los shunts distales o proximales en este punto suelen fallar y conllevan una fibrosis cavernosa densa obliterante que hace que el implante protésico tardío sea extremadamente difícil y con alto riesgo de perforación y pérdida de longitud peneana. Las guías AUA/EAU recomiendan el implante temprano/agudo de prótesis peneana para preservar la anatomía y longitud y resolver el priapismo de forma definitiva."
  },
  {
    num: 1061,
    disciplina: "andrologia",
    pregunta: "En una pareja que consulta por infertilidad conyugal primaria, el seminograma del varón reporta Azoospermia no obstructiva (FSH marcadamente elevada con testículos de 8 cc de volumen). El estudio genético identifica una microdeleción del cromosoma Y. ¿Cuál de los siguientes patrones de microdeleción del factor de azoospermia (AZF) contraindica formalmente intentar una extracción microquirúrgica testicular de espermatozoides (Micro-TESE) por tener una tasa de recuperación espermática del 0%?",
    opciones: {
      A: "Microdeleción completa de la región AZFa o AZFb (o AZFb+c)",
      B: "Microdeleción aislada de la región AZFc",
      C: "Polimorfismo benigno del brazo corto del cromosoma Y",
      D: "Duplicación parcial del gen DAZ dentro de la región AZFc"
    },
    respuesta_correcta: "A",
    justificacion: "Las microdeleciones completas de las regiones AZFa o AZFb se asocian invariablemente con una ausencia total de células germinales (Síndrome de solo células de Sertoli en AZFa, o paro madurativo meiótico completo en AZFb). Múltiples estudios han demostrado una tasa de recuperación espermática con Micro-TESE del 0%, por lo que la biopsia testicular está formalmente contraindicada. En contraste, las microdeleciones de AZFc permiten recuperar espermatozoides maduros con Micro-TESE en aproximadamente el 50% de los casos para ICSI."
  },
  {
    num: 1062,
    disciplina: "andrologia",
    pregunta: "Un varón de 54 años con enfermedad de Peyronie en fase crónica estable (sin dolor desde hace 8 meses) presenta una curvatura dorsal severa de 75 grados, deformidad en 'reloj de arena' con inestabilidad axial al intentar la penetración y disfunción eréctil severa concomitante que no responde a dosis máximas de inhibidores de la PDE-5. De acuerdo con las guías de la AUA y la EAU sobre salud sexual, ¿cuál es el abordaje quirúrgico indicado?",
    opciones: {
      A: "Implante de prótesis de pene inflable de tres piezas combinado con modelado manual de la curvatura sobre el cilindro (± incisión/injerto de placa si persiste curvatura > 30°)",
      B: "Plicatura simple de túnica albugínea tipo Nesbit sin prótesis",
      C: "Inyección intralesional de colagenasa de Clostridium histolyticum por 8 ciclos",
      D: "Terapia de tracción peneana exclusiva sin intervención quirúrgica"
    },
    respuesta_correcta: "A",
    justificacion: "En la enfermedad de Peyronie con disfunción eréctil concomitante que no responde a fármacos, la cirugía reconstructiva sin soporte protésico (como la plicatura de Nesbit o la incisión con parche) está contraindicada porque agrava la disfunción eréctil. El algoritmo de la AUA/EAU establece que la presencia de disfunción eréctil manda sobre la elección quirúrgica: el estándar de oro es el implante de prótesis peneana inflable, seguido de modelado manual sobre los cilindros inflados para corregir la deformidad angular."
  },
  {
    num: 1063,
    disciplina: "andrologia",
    pregunta: "Durante la realización de una ecografía Doppler dúplex peneana con inyección intracavernosa de 10 mcg de alprostadil (PGE1) para el estudio de disfunción eréctil, a los 15 minutos post-inyección se miden los siguientes parámetros en las arterias cavernosas: Velocidad Pico Sistólica (PSV) = 45 cm/s (normal > 30-35 cm/s), Velocidad Telediastólica (EDV) = 11 cm/s (normal < 3-5 cm/s) e Índice de Resistencia (RI) = 0.72 (normal > 0.85). ¿Cuál es el diagnóstico hemodinámico preciso?",
    opciones: {
      A: "Disfunción eréctil por fuga venosa cavernosa (insuficiencia veno-oclusiva)",
      B: "Insuficiencia arterial cavernosa pura por enfermedad ateroesclerótica severa",
      C: "Fístula arteriovenosa de alto flujo secundaria a traumatismo perineal",
      D: "Erección hemodinámicamente normal y óptima sin patología vascular"
    },
    respuesta_correcta: "A",
    justificacion: "En el eco-Doppler peneano dinámico, una velocidad pico sistólica (PSV) > 35 cm/s descarta enfermedad arterial (el flujo de entrada es óptimo). Sin embargo, una velocidad telediastólica (EDV) persistentemente elevada (> 5 cm/s) y un índice de resistencia disminuido (< 0.80) indican que la sangre arterial entra con fuerza pero escapa rápidamente a través de las vénulas subtunicales que no se comprimen adecuadamente contra la albugínea, confirmando el diagnóstico de disfunción veno-oclusiva cavernosa (fuga venosa)."
  },
  {
    num: 1064,
    disciplina: "andrologia",
    pregunta: "Un varón de 27 años con antecedente de criptorquidia bilateral corregida tardíamente a los 8 años presenta hipogonadismo hipogonadotrópico, anosmia congénita completa e infertilidad. La resonancia magnética cerebral muestra agenesia de los bulbos olfatorios. Desea fertilidad biológica de forma prioritaria. ¿Cuál es el diagnóstico genético y el tratamiento endocrinológico indicado para inducir espermatogénesis?",
    opciones: {
      A: "Síndrome de Kallmann (mutación KAL1/FGFR1); inducción de espermatogénesis mediante la administración combinada de gonadotropina coriónica humana (hCG) y hormona foliculoestimulante recombinante (rFSH)",
      B: "Síndrome de Klinefelter (47,XXY); administración de testosterona en gel al 1% en dosis altas",
      C: "Síndrome de Sertoli puro; donación de semen obligatoria sin posibilidad de tratamiento hormonal",
      D: "Hiperprolactinemia idiopática; tratamiento con bromocriptina oral exclusiva"
    },
    respuesta_correcta: "A",
    justificacion: "El síndrome de Kallmann es una forma de hipogonadismo hipogonadotrópico congénito asociado a anosmia o hiposmia debido a la falta de migración embrionaria de las neuronas sintetizadoras de GnRH y los axones olfatorios desde la placoda nasal hacia el hipotálamo. Si el paciente desea fertilidad, la testosterona exógena está estrictamente contraindicada porque suprime el eje hipofisario y la espermatogénesis. El tratamiento de elección consiste en terapia con gonadotropinas: hCG (sustituto de LH para estimular producción de testosterona intratesticular) combinada con FSH (o rFSH) para estimular la espermatogénesis en los túbulos seminíferos."
  },
  {
    num: 1065,
    disciplina: "andrologia",
    pregunta: "En relación con el varicocele clínico en adolescentes y adultos jóvenes, ¿cuál de las siguientes situaciones constituye una indicación formal para varicocelectomía quirúrgica según las guías clínicas de la AUA y la EAU?",
    opciones: {
      A: "Varicocele palpable (Grado II o III) asociado a una reducción objetiva y progresiva del volumen testicular ipsilateral mayor al 20% (hipotrofia testicular) o deterioro comprobado en parámetros seminales seriados",
      B: "Varicocele subclínico detectado únicamente por ultrasonido con espermiograma totalmente normal",
      C: "Presencia de varicocele Grado I sin dolor ni alteración del crecimiento testicular",
      D: "Varicocele aislado derecho de inicio súbito sin realizar estudios abdominales"
    },
    respuesta_correcta: "A",
    justificacion: "Las guías AUA/ASRM y EAU son claras: el varicocele subclínico o asintomático con parámetros testiculares y seminales normales no debe tratarse. Las indicaciones quirúrgicas formales en adolescentes y varones jóvenes son: 1) Varicocele clínico palpable asociado a disminución documentada del tamaño testicular ipsilateral (> 20% de discrepancia de volumen testicular comparado con el contralateral), o 2) Varicocele clínico palpable con alteración seminal confirmada en al menos dos seminogramas en el contexto de infertilidad de la pareja."
  },
  {
    num: 1066,
    disciplina: "andrologia",
    pregunta: "Durante una cirugía de implante de prótesis de pene hidráulica de 3 piezas, se presenta una resistencia súbita durante la dilatación proximal con la bujía de Hegar número 12 en el cuerpo cavernoso izquierdo, seguida de pérdida de tope óseo en la rama isquiopúbica y una profundidad de inserción inusualmente profunda (18 cm proximales). ¿Cuál es la complicación intraoperatoria y cuál es la técnica de reparación reconstructiva requerida?",
    opciones: {
      A: "Perforación crural proximal (perforación del cuerpo cavernoso posterior en la rama isquiopúbica); se requiere reconstrucción crural con colocación de un capuchón o injerto no absorbible (rear tip extender / malla de Dacron o Gore-Tex) anclado al periostio para sostener el cilindro",
      B: "Rotura de la arteria femoral profunda; requiere ligadura arterial urgente por incisión en el muslo",
      C: "Perforación vesical intraluminal; se debe cancelar el procedimiento y retirar el cilindro",
      D: "Fractura de pelvis ósea cerrada; requiere tracción esquelética"
    },
    respuesta_correcta: "A",
    justificacion: "La perforación crural proximal ocurre cuando la bujía rompe la cápsula del cuerpo cavernoso a nivel de su inserción en la tuberosidad isquiática. Si no se repara, el cilindro migrará proximalmente hacia el periné profundo con pérdida de función eréctil distal. La técnica estandarizada consiste en realizar una colporrafia o 'rear tip sling/cap' utilizando una malla de Dacron, Gore-Tex o una sutura en bolsa de tabaco anclada a la cápsula crural sana y periostio óseo para proveer un asiento sólido al extremo proximal del cilindro."
  },
  {
    num: 1067,
    disciplina: "andrologia",
    pregunta: "En un paciente con antecedente de prostatectomía radical que acude a consulta refiriendo incontinencia urinaria que ocurre de forma exclusiva durante el clímax o el orgasmo sexual ('Climacturia / Arousal incontinence'). ¿Cuál es el mecanismo fisiopatológico primario de este síntoma y cuál es la terapia no quirúrgica inicial?",
    opciones: {
      A: "Pérdida del esfínter interno del cuello vesical combinada con una contracción involuntaria o relajación refleja del esfínter estriado durante el orgasmo; terapia conservadora con bandas elásticas oclusivas peneanas para el coito o ejercicios de suelo pélvico",
      B: "Fístula vesicoseminal activa postquirúrgica",
      C: "Descarga simpática que causa relajación total del músculo detrusor",
      D: "Reflujo eyaculatorio ureterovesical por denervación renal"
    },
    respuesta_correcta: "A",
    justificacion: "La climacturia (fuga involuntaria de orina durante el orgasmo) ocurre en hasta el 20-30% de los pacientes post-prostatectomía radical. Se debe a la ausencia de la barrera anatómica del cuello vesical combinada con el aumento súbito de la presión intraabdominal y contracciones pélvicas asociadas al orgasmo que vencen a un esfínter estriado incompetente. La terapia no quirúrgica incluye rehabilitación muscular pélvica, micción previa al acto sexual y el uso de dispositivos de compresión peneana (anillo oclusivo) durante la relación íntima."
  },
  {
    num: 1068,
    disciplina: "andrologia",
    pregunta: "Un paciente de 62 años consulta por curvatura peneana congénita (no adquirida, presente desde la adolescencia) hacia la izquierda de 40 grados, sin dolor, sin placas palpables y con excelente rigidez eréctil durante toda su vida. ¿Cuál es el tratamiento quirúrgico con la mayor satisfacción y menor tasa de complicaciones para la curvatura peneana congénita pura según las guías AUA?",
    opciones: {
      A: "Plicatura simple de la túnica albugínea en el lado convexo contralateral a la curvatura (técnica de Nesbit o técnica de plicatura con puntos de 16 nudos de Lue)",
      B: "Incisión de la albugínea con colocación de parche de submucosa de intestino delgado porcino (SIS)",
      C: "Implante de prótesis de pene inflable de tres piezas",
      D: "Inyección de verapamilo intralesional semanal durante 6 meses"
    },
    respuesta_correcta: "A",
    justificacion: "La curvatura peneana congénita se produce por un desarrollo asimétrico de los cuerpos cavernosos sin fibrosis ni placa de elastosis (a diferencia de la enfermedad de Peyronie). La función eréctil suele ser excelente. Las guías AUA establecen que en pacientes con longitud peneana adecuada y curvatura congénita sin placas, el estándar de oro quirúrgico son las técnicas de acortamiento del lado más largo (convexo) mediante plicatura de la albugínea (Nesbit o plicatura simple sin incisión de Lue), con tasas de éxito y satisfacción mayores al 90-95%."
  },
  {
    num: 1069,
    disciplina: "andrologia",
    pregunta: "Un hombre de 34 años con antecedente de vasectomía bilateral hace 6 años acude con su nueva pareja porque desean concebir. El examen físico revela testículos normales sin hidrocele y epidídimos turgentes indurados bilateralmente. Desea la opción con mayor probabilidad acumulada de embarazo espontáneo por ciclo y con menor costo global frente a múltiples ciclos de fertilización in vitro (FIV-ICSI). ¿Cuál es la técnica microquirúrgica de elección y el factor pronóstico temporal determinante?",
    opciones: {
      A: "Vasovasostomía microquirúrgica en dos planos (o vasoepididimostomía si el líquido seminal es azoospérmico espeso); con un intervalo de obstrucción menor a 8-10 años la tasa de permeabilidad es superior al 85-90% y de embarazo natural al 50-60%",
      B: "Punción percutánea epididimaria obligatoria como única opción",
      C: "Laparoscopia exploradora pélvica para anastomosis de los vasos deferentes en el retroperitoneo",
      D: "Inseminación intrauterina simple sin intervención en el varón"
    },
    respuesta_correcta: "A",
    justificacion: "La vasovasostomía microquirúrgica multicapas (o vasoepididimostomía intususcepcionada si no hay espermatozoides en el muñón testicular) es el procedimiento más costo-efectivo para restaurar la fertilidad tras la vasectomía cuando la pareja femenina es fértil. El estudio colaborativo de vasectomía demostró que con un intervalo de vasectomía < 3 años la permeabilidad es del 97% y embarazo del 76%; con 3 a 8 años la permeabilidad es del 88% y embarazo del 53%; cayendo progresivamente a mayor tiempo de obstrucción."
  },

  // ==========================================
  // 8. INFECCIONES E INFLAMACIÓN (10 preguntas)
  // ==========================================
  {
    num: 1070,
    disciplina: "infecciones",
    pregunta: "Un paciente diabético mal controlado de 58 años acude a urgencias con fiebre de 39.5 °C, dolor escrotal y perineal insoportable, taquicardia de 125 lpm y crepitación palpable con áreas de equimosis y necrosis cutánea en el periné y base del escroto. La gasometría revela acidosis metabólica con lactato de 4.8 mmol/L. ¿Cuál es el diagnóstico de emergencia médica extrema y la conducta terapéutica sin demora?",
    opciones: {
      A: "Gangrena de Fournier; reanimación hidroelectrolítica agresiva, antibioticoterapia triple de amplio espectro (carbapenem + vancomicina + clindamicina) y desbridamiento quirúrgico radical de emergencia en quirófano",
      B: "Epididimitis bacteriana simple; reposo en cama, soporte escrotal y ciprofloxacino oral por 10 días",
      C: "Hematoma escrotal espontáneo; aspiración con aguja fina en el consultorio",
      D: "Infección urinaria baja; colocación de sonda Foley y egreso a domicilio"
    },
    respuesta_correcta: "A",
    justificacion: "La Gangrena de Fournier es una fascitis necrosante sinérgica rápidamente progresiva de los genitales externos y el periné. La tasa de progresión del tejido necrótico puede avanzar a más de 2 cm por hora. Las guías internacionales establecen que la piedra angular innegociable es el desbridamiento quirúrgico agresivo de urgencia en quirófano, resecando todo el tejido desvitalizado hasta bordes con sangrado activo sano, junto con soporte en UCI y antibióticos de amplio espectro que incluyan clindamicina por su capacidad de inhibir la síntesis de exotoxinas bacterianas."
  },
  {
    num: 1071,
    disciplina: "infecciones",
    pregunta: "En la clasificación tomográfica de Huang y Tseng para la Pielonefritis Enfisematosa, ¿cuál de los siguientes hallazgos corresponde a la Clase 3b y cuál es el abordaje terapéutico inicial recomendado que ha reducido la mortalidad sin requerir nefrectomía inmediata en la mayoría de los casos?",
    opciones: {
      A: "Gas o líquido purulento enfisematoso que se extiende al espacio pararrenal (más allá de la fascia de Gerota) o compromiso bilateral; manejo inicial con drenaje percutáneo guiado por imagen + antibióticos IV de amplio espectro",
      B: "Gas exclusivamente confinado al sistema colector (pielitis enfisematosa); nefrectomía radical bilateral abierta de urgencia",
      C: "Presencia de gas en el espesor de la pared vesical exclusiva",
      D: "Ausencia total de gas en TC y dilatación ureteral simple"
    },
    respuesta_correcta: "A",
    justificacion: "La clasificación tomográfica de Pielonefritis Enfisematosa de Huang y Tseng establece: Clase 1 (gas en sistema colector), Clase 2 (gas en parénquima sin extensión extrarrenal), Clase 3a (gas en espacio perinéfrico), Clase 3b (gas en espacio pararrenal que rebasa la fascia de Gerota) y Clase 4 (afectación bilateral o en riñón único). Históricamente se realizaba nefrectomía de emergencia con alta mortalidad (> 50%). El paradigma moderno validado por Huang es el drenaje percutáneo precoz guiado por TC con antibioticoterapia agresiva, salvando el riñón y reduciendo la mortalidad a menos del 13-15%."
  },
  {
    num: 1072,
    disciplina: "infecciones",
    pregunta: "Una paciente femenina de 64 años con inmunosupresión post-trasplante renal presenta piuria estéril y síntomas irritativos crónicos. La biopsia de mucosa vesical revela láminas densas de histiocitos grandes espumosos (células de von Hansemann) que contienen en su citoplasma inclusiones basofílicas concéntricas calcificadas patognomónicas que tiñen positivo con la tinción de Von Kossa y hierro (cuerpos de Michaelis-Gutmann). ¿Cuál es la enfermedad granulomatosa inflamatoria y su defecto fisiopatológico?",
    opciones: {
      A: "Malacoplaquia del tracto urinario; defecto adquirido en la fagocitosis y digestión lisosomal bacteriana de los macrófagos para lisar bacterias coliformes (E. coli)",
      B: "Tuberculosis urogenital con necrosis caseosa primaria",
      C: "Schistosomiasis vesical crónica con depósito de huevecillos de S. haematobium",
      D: "Carcinoma urotelial sarcomatoide con osificación metaplásica"
    },
    respuesta_correcta: "A",
    justificacion: "La malacoplaquia es una enfermedad inflamatoria granulomatosa infrecuente que afecta típicamente a pacientes inmunodeprimidos o diabéticos. Se produce por una deficiencia en los niveles de GMP cíclico y disfunción de los microtúbulos lisosomales en los macrófagos, lo que impide la degradación bacteriana completa tras la fagocitosis de E. coli. Los restos bacterianos calcificados en los lisosomas forman los cuerpos concéntricos de Michaelis-Gutmann (patognomónicos). El tratamiento incluye antibióticos con penetración intracelular (ciprofloxacino, trimetoprim) y betanecol o ácido ascórbico."
  },
  {
    num: 1073,
    disciplina: "infecciones",
    pregunta: "Un varón de 42 años procedente de área rural presenta microhematuria asintomática, piuria persistente con urocultivos bacterianos estándar repetidamente negativos ('piuria estéril ácida') y polaquiuria refractaria. La TC urológica demuestra cálices renales amputados con necrosis papilar, estenosis infundibulares múltiples y una vejiga pequeña retraída con capacidad menor a 80 ml ('vejiga en dedal'). ¿Cuál es el diagnóstico microbiológico de sospecha y la prueba de laboratorio de confirmación?",
    opciones: {
      A: "Tuberculosis Genitourinaria (Mycobacterium tuberculosis); confirmación mediante baciloscopia seriada (Ziehl-Neelsen) y PCR en tiempo real / cultivo en medio Lowenstein-Jensen en 3 a 5 muestras matutinas de orina",
      B: "Cistitis intersticial no infecciosa; confirmación mediante citología urinaria",
      C: "Infección por Chlamydia trachomatis serotipo L2; tinción de Gram en exudado",
      D: "Pielonefritis por Proteus mirabilis con orina marcadamente alcalina"
    },
    respuesta_correcta: "A",
    justificacion: "La presencia de piuria ácida estéril acompañada de lesiones estenosantes multifocales en el árbol urinario (cálices amputados, uréter arrosariado) y fibrosis con retracción de la pared vesical ('vejiga en dedal') es el cuadro clásico de la tuberculosis genitourinaria secundaria a diseminación hematógena de M. tuberculosis. La confirmación diagnóstica requiere la toma seriada de al menos 3 a 5 primeras orinas matutinas para tinción de Ziehl-Neelsen, cultivo en medios específicos (Lowenstein-Jensen / MGIT) y amplificación de ácidos nucleicos por PCR."
  },
  {
    num: 1074,
    disciplina: "infecciones",
    pregunta: "En una paciente hospitalizada en la Unidad de Terapia Intensiva con choque séptico de origen urinario, el hemocultivo y urocultivo reportan Klebsiella pneumoniae con fenotipo de resistencia extrema a todos los carbapenémicos (meropenem e imipenem CIM > 32 mcg/ml) portadora del gen de carbapenemasa tipo NDM (Nueva Delhi Metalo-beta-lactamasa). De acuerdo con las guías de la Sociedad de Enfermedades Infecciosas de América (IDSA) y la EAU, ¿cuál es el régimen antibiótico dirigido de elección?",
    opciones: {
      A: "Ceftazidima-Avibactam combinado con Aztreonam (o Cefiderocol)",
      B: "Ceftriaxona a dosis estándar en bolo único",
      C: "Ampicilina con sulbactam por vía intramuscular",
      D: "Piperacilina-tazobactam en monoterapia oral"
    },
    respuesta_correcta: "A",
    justificacion: "Las metalo-beta-lactamasas (clase B de Ambler, como NDM o VIM) hidrolizan todos los betalactámicos e inhibidores clásicos excepto el Aztreonam. Sin embargo, las cepas portadoras de NDM casi siempre co-producen otras enzimas (BLEE o AmpC) que sí degradan al aztreonam. La combinación sinérgica de Ceftazidima-Avibactam con Aztreonam es la terapia de elección (el avibactam protege al aztreonam de las BLEE/AmpC, y el aztreonam no es hidrolizado por la metalo-carbapenemasa NDM). Otra alternativa avalada de rescate es Cefiderocol."
  },
  {
    num: 1075,
    disciplina: "infecciones",
    pregunta: "Un varón de 62 años con diabetes mellitus tipo 2 acude con fiebre persistente de 38.8 °C y dolor perineal continuo a pesar de 7 días de ciprofloxacino por supuesta prostatitis aguda. Al tacto rectal la próstata está sumamente dolorosa con una zona blanda y fluctuante en el lóbulo derecho. La ecografía transrectal revela una colección líquida hipoecoica de bordes gruesos de 3.2 cm en la zona periférica prostática. ¿Cuál es el tratamiento de elección?",
    opciones: {
      A: "Drenaje quirúrgico transuretral (destechamiento transuretral de la cavidad del absceso con asa de resección) o drenaje percutáneo guiado por imagen más antibióticos IV",
      B: "Continuar con el mismo antibiótico oral por 4 semanas adicionales sin drenaje",
      C: "Realizar masaje prostático vigoroso para vaciar la cavidad por la uretra",
      D: "Prostatectomía radical robótica de urgencia con linfadenectomía extendida"
    },
    respuesta_correcta: "A",
    justificacion: "Los abscesos prostáticos que miden más de 1.5 a 2 cm de diámetro o que no responden a la antibioticoterapia parenteral dentro de las primeras 48 horas requieren drenaje quirúrgico obligatorio. Las dos técnicas estándar recomendadas por las guías son el destechamiento transuretral (unroofing) con el resector para abrir y drenar la cavidad hacia la uretra, o la aspiración/drenaje percutáneo o transrectal guiado por ecografía transrectal."
  },
  {
    num: 1076,
    disciplina: "infecciones",
    pregunta: "En una mujer hospitalizada con catéter urinario permanente durante 3 semanas que desarrolla candiduria sintomática con fiebre y urocultivo con más de 100,000 UFC/ml de Candida glabrata, ¿por qué el fluconazol es ineficaz como monoterapia y cuál es el agente antifúngico sistémico de elección según las guías IDSA de micología clínica?",
    opciones: {
      A: "Candida glabrata posee resistencia intrínseca o adquirida muy elevada a los azoles (fluconazol); el tratamiento de elección para infección sistémica invasiva son las Equinocandinas (Caspofungina, Micafungina o Anidulafungina) o Anfotericina B",
      B: "Fluconazol solo se activa a pH urinario mayor a 8.5",
      C: "C. glabrata se erradica exclusivamente con penicilina benzatínica",
      D: "No requiere ningún tratamiento porque los hongos nunca causan patología renal"
    },
    respuesta_correcta: "A",
    justificacion: "A diferencia de Candida albicans, Candida glabrata tiene una susceptibilidad marcadamente disminuida o resistencia intrínseca al fluconazol mediante mecanismos de bombas de eflujo y mutaciones en la 14-alfa desmetilasa (ERG11). En casos de infección fúngica urinaria invasiva o candidemia por C. glabrata, las guías de la Infectious Diseases Society of America (IDSA) indican equinocandinas intravenosas o Anfotericina B desoxicolato/liposomal (esta última con excelente eliminación y penetración en el parénquima renal)."
  },
  {
    num: 1077,
    disciplina: "infecciones",
    pregunta: "Un adulto joven acude a la clínica de infecciones de transmisión sexual con una úlcera genital única en el surco balanoprepucial de 1.5 cm de diámetro, indolora, indurada a la palpación, con fondo limpio y bordes evertidos netos, acompañada de linfadenopatía inguinal bilateral no supurativa indolora. ¿Cuál es el diagnóstico clínico y el tratamiento farmacológico de elección según los CDC?",
    opciones: {
      A: "Sífilis primaria (Chancro duro por Treponema pallidum); tratamiento de primera línea con Penicilina G Benzatínica 2.4 millones de Unidades IM dosis única",
      B: "Chancroide blando por Haemophilus ducreyi; tratamiento con aciclovir oral por 21 días",
      C: "Herpes genital primario; tratamiento con doxiciclina por 14 días",
      D: "Linfogranuloma venéreo; tratamiento con ciprofloxacino en dosis única"
    },
    respuesta_correcta: "A",
    justificacion: "La úlcera genital solitaria, con base indurada ('en botón'), indolora, limpia y con adenopatías satélites no supurativas es patognomónica del chancro sifilítico primario producido por la espiroqueta Treponema pallidum. Las guías de los CDC y la OMS establecen que el tratamiento de elección es la Penicilina G Benzatínica en dosis única de 2.4 millones de UI por vía intramuscular profunda (en caso de alergia comprobada a betalactámicos, la alternativa es doxiciclina 100 mg cada 12 horas por 14 días)."
  },
  {
    num: 1078,
    disciplina: "infecciones",
    pregunta: "Durante una orquiepididimitis bacteriana severa en un paciente de 25 años por Neisseria gonorrhoeae, el paciente presenta empeoramiento súbito del dolor escrotal y tumefacción tensa masiva. El eco-Doppler testicular muestra epidídimo marcadamente aumentado de tamaño con hiperemia periepididimaria pero con ausencia total de flujo vascular arterial intra-testicular. ¿Cuál es la complicación fisiopatológica y la conducta quirúrgica requerida?",
    opciones: {
      A: "Infarto testicular isquémico secundario a compresión mecánica extrínseca de los vasos del cordón espermático por el edema epididimario severo; requiere exploración quirúrgica de urgencia y descompresión del cordón / orquiectomía si el tejido está desvitalizado",
      B: "Torsión testicular primaria coincidente que no guarda relación con la infección",
      C: "Hematoma intragonadal por ruptura espontánea de la túnica dartos",
      D: "Proceso normal inflamatorio que solo requiere compresas frías y observación ambulatoria"
    },
    respuesta_correcta: "A",
    justificacion: "La orquiepididimitis bacteriana grave puede causar un edema inflamatorio masivo dentro del espacio confinado de la túnica albugínea y del cordón espermático, colapsando el plexo venoso pampiniforme y secundariamente la arteria testicular, lo que provoca trombosis vascular e infarto testicular isquémico. El hallazgo Doppler de ausencia de señal de flujo intratesticular en presencia de epididimitis aguda confirma el infarto isquémico y obliga a la exploración quirúrgica inmediata para intentar descomprimir el cordón o resecar el testículo no viable."
  },
  {
    num: 1079,
    disciplina: "infecciones",
    pregunta: "En relación con el diagnóstico de Prostatitis Bacteriana Crónica (Categoría II de los NIH), ¿cuál es el criterio microbiológico cuantitativo indispensable en la prueba clásica de los cuatro vasos de Meares-Stamey para confirmar el origen prostático de la infección recurrente?",
    opciones: {
      A: "El conteo de colonias bacterianas en las secreciones prostáticas expresadas (EPS) o en la orina posterior al masaje prostático (VB3) debe ser al menos 10 veces (1 log) mayor que en la orina vesical inicial (VB1 y VB2)",
      B: "La presencia de cualquier bacteria en la orina del primer chorro (VB1) sin importar el cultivo de próstata",
      C: "Urocultivo totalmente negativo en todas las fracciones con antígeno prostático mayor a 20 ng/ml",
      D: "Aislamiento exclusivo de virus del papiloma humano en el eyaculado"
    },
    respuesta_correcta: "A",
    justificacion: "La prueba de Meares-Stamey analiza cuatro fracciones: VB1 (uretra inicial), VB2 (vejiga media), EPS (líquido prostático tras masaje) y VB3 (orina post-masaje prostático). El diagnóstico formal de Prostatitis Bacteriana Crónica (NIH Cat II) exige que la concentración bacteriana (UFC/ml) en las secreciones prostáticas (EPS) o en la orina post-masaje (VB3) sea como mínimo 10 veces superior (un orden de magnitud) a la observada en las muestras uretral y vesical (VB1 y VB2)."
  },

  // ==========================================
  // 9. TRAUMA Y RECONSTRUCCIÓN (10 preguntas)
  // ==========================================
  {
    num: 1080,
    disciplina: "trauma_reconstruccion",
    pregunta: "Un politraumatizado por accidente vial ingresa en estado de choque hipovolémico severo refractario a resucitación con cristaloides y hemoderivados. La TC abdominal revela un traumatismo renal derecho Grado V de la AAST con avulsión completa de la arteria renal principal en la aorta y estallido parenquimatoso. Durante la laparotomía exploradora de emergencia, ¿cuál es el paso técnico quirúrgico esencial antes de abrir el hematoma retroperitoneal perirrenal?",
    opciones: {
      A: "Control vascular precoz del pedículo renal (arteria y vena renales) a nivel del retroperitoneo medial en la raíz del mesenterio antes de incidir la fascia de Gerota",
      B: "Abrir inmediatamente la fascia de Gerota lateral para descomprimir el hematoma a ciegas",
      C: "Realizar una biopsia renal en cuña sin control vascular",
      D: "Clampar la aorta torácica descendente por toracotomía izquierda como único paso"
    },
    respuesta_correcta: "A",
    justificacion: "En el trauma renal mayor con hematoma retroperitoneal expansivo o pulsátil y paciente inestable, la regla fundamental de la cirugía de trauma urológico es obtener control vascular previo (control preliminar en la línea media). Se incide el peritoneo posterior medial a la vena mesentérica inferior sobre la aorta, disecando y colocando asas vasculares de control en los vasos renales antes de abrir la fascia de Gerota. Esto evita la pérdida súbita del taponamiento mecánico del hematoma y disminuye drásticamente la tasa de nefrectomías no planeadas y exanguinación."
  },
  {
    num: 1081,
    disciplina: "trauma_reconstruccion",
    pregunta: "Durante una histerectomía abdominal difícil por endometriosis infiltrante profunda, se produce la ligadura y sección inadvertida del uréter izquierdo a 7 cm de la unión ureterovesical, con pérdida de un segmento ureteral de 5 cm que impide una anastomosis primaria sin tensión. La vejiga de la paciente es sana y de capacidad normal. ¿Cuál es la técnica reconstructiva ureterovesical de elección según las guías AUA de trauma urológico?",
    opciones: {
      A: "Reimplante ureteral con despegamiento y fijación de la vejiga al músculo psoas menor/mayor (Ureteroneocistostomía con Psoas-Hitch) o colgajo vesical tubularizado de Boari",
      B: "Ureterostomía cutánea directa a nivel del flanco sin movilización",
      C: "Colocación de un catéter doble J simple dejando los extremos ureterales flotando libremente",
      D: "Ligadura permanente del uréter proximal para inducir atrofia renal asintomática"
    },
    respuesta_correcta: "A",
    justificacion: "Para pérdidas de sustancia en el tercio distal o medio del uréter que superan los 4 a 5 cm, una anastomosis ureteroureteral primaria queda bajo tensión excesiva con riesgo de estenosis o fístula. La técnica reconstructiva de elección para salvar el defecto y asegurar una anastomosis sin tensión y bien vascularizada es la ureteroneocistostomía combinada con vejiga psoica (Psoas Hitch) o, si el defecto es aún más proximal (hasta uréter medio o ilíaco), la creación de un colgajo vesical tubularizado de Boari."
  },
  {
    num: 1082,
    disciplina: "trauma_reconstruccion",
    pregunta: "Un joven de 22 años ingresa tras aplastamiento pélvico con fractura en libro abierto de pelvis. Presenta uretrorragia en meato, incapacidad para orinar y una masa pélvica palpable. La uretrografía retrógrada confirma una rotura completa de la uretra membranosa posterior (Grado III de la AAST) con extravasación de contraste y desplazamiento prostático craneal. ¿Cuál es la conducta inicial estándar y la estrategia reconstructiva definitiva recomendada por las guías AUA?",
    opciones: {
      A: "Manejo inicial con colocación de cistostomía suprapúbica para derivación urinaria; uretroplastia anastomótica bulbo-prostática formal diferida a los 3 meses una vez resuelto el hematoma pélvico",
      B: "Paso forzado a ciegas de una sonda Foley semirrígida metálica número 24 Fr con guía filiforme",
      C: "Uretrotomía interna endoscópica con cuchillete frío a las 12 horas del trauma",
      D: "Cistectomía total con conducto ileal por imposibilidad de reconstrucción uretral"
    },
    respuesta_correcta: "A",
    justificacion: "En la disrupción traumática de la uretra membranosa posterior por fractura pélvica, el sondaje a ciegas está contraindicado por el riesgo de convertir una rotura parcial en completa e infectar el hematoma pélvico. La estrategia estándar de oro tradicional avalada por las guías AUA/EAU es la derivación suprapúbica precoz con cistostomía. La reconstrucción definitiva mediante uretroplastia anastomótica perineal término-terminal diferida a los 3 meses ofrece tasas de éxito funcional superiores al 90-95% sin riesgo de incontinencia ni disfunción eréctil adicional."
  },
  {
    num: 1083,
    disciplina: "trauma_reconstruccion",
    pregunta: "Un paciente de 48 años con estenosis pan-uretral anterior extensa de 10 cm secundaria a Liquen Escleroso (Balanitis Xerótica Obliterante) que abarca desde la uretra bulbar hasta el meato uretral. ¿Por qué está formalmente contraindicado el uso de piel genital (colgajos prepuciales de McAninch u Orandi) para la uretroplastia en este paciente y cuál es el tejido de sustitución de primera línea?",
    opciones: {
      A: "La piel genital está enferma por el liquen escleroso y presenta una tasa de recidiva de la estenosis superior al 80-90%; el tejido de sustitución estándar de elección es el injerto de mucosa oral (mucosa yugal o lingual)",
      B: "La piel genital es demasiado gruesa y no se deja suturar",
      C: "La mucosa oral está prohibida por riesgo de cáncer de lengua",
      D: "No existe ninguna contraindicación y la piel de escroto es la mejor opción"
    },
    respuesta_correcta: "A",
    justificacion: "El liquen escleroso (BXO) es una enfermedad inflamatoria crónica dermatológica que afecta específicamente la piel genital (glande, prepucio y meato). El uso de colgajos o injertos de piel peneana o escrotal para la uretroplastia en pacientes con BXO conduce a una recidiva casi universal de la estenosis por reactivación de la enfermedad en el tejido trasplantado. El estándar de oro universal indiscutible es el injerto de mucosa oral (carrillo o lingual), que es inmunológicamente resistente al liquen escleroso y ofrece un lecho altamente vascularizado."
  },
  {
    num: 1084,
    disciplina: "trauma_reconstruccion",
    pregunta: "En la evaluación por cistografía por tomografía computarizada (TC-cistografía) de un paciente con trauma cerrado de abdomen y hematuria macroscópica masiva, se observa extravasación de contraste que se distribuye libremente entre las asas intestinales, los canales paracólicos y el espacio subhepático. ¿Cuál es la clasificación de la rotura vesical y su manejo definitivo obligatorio?",
    opciones: {
      A: "Rotura vesical intraperitoneal; requiere exploración quirúrgica abierta o laparoscópica urgente con tenorrafia/cierre vesical en dos planos",
      B: "Rotura vesical extraperitoneal simple; requiere exclusivamente sonda transuretral por 10 días sin cirugía",
      C: "Hematoma submucoso no perforado; requiere observación simple ambulatoria",
      D: "Contusión renal aislada sin rotura vesical"
    },
    respuesta_correcta: "A",
    justificacion: "La presencia de medio de contraste intraabdominal rodeando las asas intestinales y delimitando el espacio hepatorrenal (espacio de Morrison) confirma una rotura vesical intraperitoneal (típicamente en la cúpula vesical, donde la pared es más delgada y está cubierta de peritoneo). A diferencia de la rotura extraperitoneal no complicada (que se maneja con catéter vesical), la rotura intraperitoneal NUNCA cicatriza espontáneamente con sonda y produce peritonitis química y reabsorción de urea y creatinina (autointoxicación urémica), requiriendo exploración y cierre quirúrgico urgente en dos planos."
  },
  {
    num: 1085,
    disciplina: "trauma_reconstruccion",
    pregunta: "Un paciente de 29 años acude con amputación traumática completa del pene por arma cortante ocurrida hace 3 horas. El segmento amputado fue colocado adecuadamente en gasa estéril ligeramente humedecida en solución salina dentro de una bolsa plástica sellada colocada sobre agua con hielo picado (sin congelamiento directo). ¿Cuál es la secuencia quirúrgica de reconexión anatómica mediante reimplante microquirúrgico estandarizado?",
    opciones: {
      A: "Fijación y cateterismo uretral con uretorrafia, coaptación de la túnica albugínea de ambos cuerpos cavernosos, anastomosis microquirúrgica de la arteria dorsal del pene (1 o 2), anastomosis de la vena dorsal profunda y neurorrafia epineural de los nervios dorsales",
      B: "Sutura exclusiva de la piel genital externa esperando que los vasos se unan por capilaridad",
      C: "Anastomosis de la arteria femoral con el cuerpo esponjoso sin reparar la uretra",
      D: "Cauterización térmica bilateral de los muñones y uretrostomía perineal definitiva"
    },
    respuesta_correcta: "A",
    justificacion: "El reimplante peneano microquirúrgico contemporáneo sigue una secuencia anatómica sistemática: 1) Desbridamiento mínimo y colocación de sonda uretral de 16 Fr con uretorrafia mucosa término-terminal y de cuerpo esponjoso con sutura absorbible 4-0; 2) Síntesis de la túnica albugínea cavernosa con sutura 2-0 / 3-0; 3) Tiempo microquirúrgico bajo microscopio: anastomosis de la arteria dorsal (sutura 9-0 / 10-0), anastomosis de la vena dorsal profunda para prevenir congestión venosa crítica y neurorrafia de los nervios dorsales para restaurar la sensibilidad del glande; 4) Síntesis de fascia de Buck y piel."
  },
  {
    num: 1086,
    disciplina: "trauma_reconstruccion",
    pregunta: "Durante una relación sexual vigorosa, un paciente de 33 años escucha un chasquido auditivo fuerte ('crack') acompañado de dolor peniano intenso, detumescencia inmediata y deformidad con marcada desviación en 'berenjena' por hematoma expansivo. A la exploración física se aprecia hematoma en meato y se confirma rotura combinada de túnica albugínea y cuerpo esponjoso uretral. ¿Cuál es el abordaje quirúrgico indicado de urgencia?",
    opciones: {
      A: "Exploración quirúrgica inmediata mediante incisión coronal circunferencial subcoronal con denudamiento peneano completo (degloving), reparación de la albugínea y uretorrafia primaria",
      B: "Vendaje compresivo elástico y reposo sexual por 6 semanas sin cirugía",
      C: "Aspiración con aguja del hematoma y colocación de hielo local",
      D: "Inyección intracavernosa de esteroides y sonda de Foley exclusiva por 48 horas"
    },
    respuesta_correcta: "A",
    justificacion: "La fractura de pene es una emergencia urológica producida por la rotura de la túnica albugínea del cuerpo cavernoso en erección, que en un 10 a 20% de los casos asocia lesión concomitante de la uretra esponjosa. El manejo conservador produce disfunción eréctil, fibrosis y curvatura en más del 30-40% de los pacientes. La exploración quirúrgica de urgencia mediante incisión subcoronal con denudamiento peneano completo permite evacuar el hematoma, reparar la túnica albugínea con material absorbible monofilamento y suturar el defecto uretral primariamente sobre sonda Foley."
  },
  {
    num: 1087,
    disciplina: "trauma_reconstruccion",
    pregunta: "En una paciente con fístula ureterovaginal confirmada tras cirugía ginecológica en la que se sospecha también fístula vesicovaginal concomitante, ¿cuál es la prueba de consultorio sencilla y altamente sensible que utiliza azul de metileno intravesical y piridio oral para diferenciar fehacientemente ambos orígenes?",
    opciones: {
      A: "Prueba del hisopo doble / triple con instilación vesical de azul de metileno y administración de piridio oral (si el hisopo vaginal superior se tiñe de naranja sin teñirse de azul, confirma fístula ureterovaginal)",
      B: "Medición de glucosa en el exudado vaginal con tira reactiva",
      C: "Prueba de esfuerzo con tos sin ningún medio de contraste",
      D: "Inyección endovenosa de radioisótopos con medición en frotis de piel"
    },
    respuesta_correcta: "A",
    justificacion: "En la prueba del hisopo/compresa vaginal, se instila azul de metileno en la vejiga a través de una sonda. Si la compresa vaginal se mancha de azul, existe una fístula vesicovaginal. Para evaluar el uréter, se administra piridio (fenazopiridina) por vía oral, que tiñe la orina renal de color naranja brillante. Si la compresa en el fondo vaginal se mancha de naranja pero no de azul, se comprueba de forma inequívoca que la orina proviene del uréter (fístula ureterovaginal pura)."
  },
  {
    num: 1088,
    disciplina: "trauma_reconstruccion",
    pregunta: "Para una estenosis corta (< 1.5 - 2 cm) de la uretra bulbar no relacionada con liquen escleroso en un paciente joven que ha sufrido un traumatismo perineal a horcajadas previo, ¿cuál es la técnica reconstructiva con la tasa más alta de curación definitiva a largo plazo (> 90-95%) según las guías AUA?",
    opciones: {
      A: "Uretroplastia anastomótica primaria (término-terminal con o sin transección del cuerpo esponjoso)",
      B: "Uretrotomía interna endoscópica repetida en tres ocasiones consecutivas",
      C: "Dilataciones uretrales domiciliarias diarias con sondas rígidas",
      D: "Colocación de stent metálico uretral autoexpandible permanente (UroLume)"
    },
    respuesta_correcta: "A",
    justificacion: "Para estenosis focales de uretra bulbar < 2 cm producidas por trauma a horcajadas, la uretroplastia anastomótica término-terminal (escisión completa del segmento fibrótico y anastomosis mucosa-mucosa espatulada sin tensión) ofrece una tasa de éxito documentada a 10 y 15 años superior al 95%. Las dilataciones repetidas o uretrotomías múltiples en este tipo de estenosis densa no son curativas y solo aumentan la longitud de la espongiofibrosis."
  },
  {
    num: 1089,
    disciplina: "trauma_reconstruccion",
    pregunta: "Un trabajador industrial sufre un atrapamiento de su ropa en una máquina rotativa, provocando una avulsión traumática completa de la piel del escroto y la vaina del pene (degloving perineoescrotal severo). Los testículos y cordones espermáticos están expuestos pero anatómicamente intactos sin daño vascular primario. Ante la pérdida total e irreparable de la piel escrotal, ¿cuál es la conducta reconstructiva inicial de cobertura?",
    opciones: {
      A: "Cobertura temporal de los testículos alojándolos en bolsas subcutáneas creadas en la cara anteromedial de los muslos superiores e injerto de piel de espesor parcial para el pene",
      B: "Orquiectomía bilateral inmediata por exposición del tejido testicular",
      C: "Dejar los testículos expuestos al aire ambiente con pomada antibiótica hasta que granulen espontáneamente en 6 meses",
      D: "Suturar los testículos dentro de la cavidad peritoneal a través de los conductos inguinales"
    },
    respuesta_correcta: "A",
    justificacion: "En casos de avulsión masiva de la piel escrotal donde no hay tejido residual disponible para cierre primario, los testículos deben ser protegidos de la desecación e infección colocándolos temporalmente en bolsas subcutáneas preparadas en la cara anteromedial de los muslos (donde la temperatura es relativamente más baja que en el abdomen). La cobertura del eje peneano denudado se realiza mediante un injerto de piel libre de espesor parcial tomado del muslo."
  },

  // ==========================================
  // 10. FISIOLOGÍA RENAL Y TRASPLANTE (10 preguntas)
  // ==========================================
  {
    num: 1090,
    disciplina: "fisiologia_trasplante",
    pregunta: "En un paciente receptor de trasplante renal de donante fallecido que a las 48 horas presenta oliguria súbita, hipertensión y elevación de creatinina, la biopsia renal del injerto demuestra capilaritis peritubular extensa (ptc), glomerulitis activa (g), trombos microvasculares y una tinción inmunohistoquímica difusa positiva para C4d en más del 50% de los capilares peritubulares. El laboratorio confirma títulos elevados de anticuerpos donante-específicos (DSA) anti-HLA clase II. De acuerdo con la clasificación de Banff, ¿cuál es el diagnóstico y el tratamiento de rescate de primera línea?",
    opciones: {
      A: "Rechazo Agudo mediado por Anticuerpos (AMR); tratamiento con plasmaféresis + inmunoglobulina intravenosa (IVIG) ± rituximab",
      B: "Necrosis tubular aguda isquémica no inmunológica; tratamiento exclusivo con hemodiálisis y observación",
      C: "Toxicidad aguda por micofenolato mofetilo; suspensión de antibióticos",
      D: "Rechazo celular agudo tipo IA exclusivo; bolos de metilprednisolona en monoterapia sin recambio plasmático"
    },
    respuesta_correcta: "A",
    justificacion: "La tríada de: 1) daño histológico endotelial microvascular (capilaritis peritubular / glomerulitis), 2) depósito difuso del fragmento del complemento C4d en capilares peritubulares y 3) presencia demostrada de anticuerpos donante-específicos (DSA) circulantes define según la clasificación internacional de Banff el Rechazo Agudo mediado por Anticuerpos (AMR). Los bolos de esteroides son insuficientes en AMR; el estándar de oro consiste en eliminar los anticuerpos circulantes mediante plasmaféresis seriada y neutralizarlos/modular con inmunoglobulina IV (IVIG), asociando anti-CD20 (rituximab) o inhibidores del complemento (eculizumab) en casos refractarios."
  },
  {
    num: 1091,
    disciplina: "fisiologia_trasplante",
    pregunta: "Un paciente con uropatía obstructiva bilateral severa de 3 semanas de evolución es sometido a descompresión de emergencia con colocación de catéteres JJ bilaterales. En las primeras 4 horas post-desobstrucción presenta un volumen urinario de 750 ml/hora con orina muy diluida, taquicardia, hipotensión postural y deshidratación clínica (Diuresis post-obstructiva patológica). ¿Cuál es la estrategia correcta de reposición de líquidos para no perpetuar la diuresis iatrogénica por sobrehidratación?",
    opciones: {
      A: "Reponer entre el 50% y el 75% del volumen urinario de la hora previa utilizando solución salina hipotónica (al 0.45%) con control horario de electrolitos séricos y balance estricto",
      B: "Reponer el 150% del volumen urinario con solución salina al 3% hipertónica a chorro",
      C: "Restringir absolutamente todos los líquidos parenterales a cero ml/día",
      D: "Administrar albúmina humana al 20% en infusión continua sin electrolitos"
    },
    respuesta_correcta: "A",
    justificacion: "La diuresis post-obstructiva patológica se debe a la acumulación de solutos no reabsorbidos (urea) que provocan diuresis osmótica, sumado a la pérdida transitoria del gradiente córtico-medular y resistencia tubular distal a la ADH. Si se reponen las pérdidas urinarias al 100% o más, se perpetúa una diuresis inducida iatrogénicamente por sobrecarga hídrica. La recomendación es reponer del 50 al 75% del volumen horario excretado con soluciones hipotónicas (salina al 0.45% o mixta), reduciendo gradualmente la infusión para permitir que el túbulo renal recupere su capacidad de concentración."
  },
  {
    num: 1092,
    disciplina: "fisiologia_trasplante",
    pregunta: "En relación con los efectos nefrotóxicos de los inhibidores de la calcineurina (Tacrolimus y Ciclosporina) en receptores de trasplante renal, ¿cuál es el mecanismo hemodinámico primario intrarrenal que condiciona la caída aguda de la Tasa de Filtración Glomerular (TFG)?",
    opciones: {
      A: "Vasoconstricción intensa y dependiente de dosis de la arteriola aferente renal mediada por un aumento en endotelina-1 y tromboxano con supresión de óxido nítrico y prostaglandinas vasodilatadoras",
      B: "Vasodilatación masiva de la arteriola eferente con hiperfiltración glomerular acelerada",
      C: "Trombosis venosa ilíaca externa espontánea obligada",
      D: "Infiltración por linfocitos B policlonales en el mesangio glomerular"
    },
    respuesta_correcta: "A",
    justificacion: "La nefrotoxicidad aguda por inhibidores de calcineurina (CNIs: tacrolimus y ciclosporina) es de naturaleza eminentemente funcional y hemodinámica: inducen una potente vasoconstricción arteriolar aferente mediante la estimulación de agentes vasoconstrictores locales (endotelina, tromboxano, activación simpática) y la disminución de mediadores vasodilatadores protectores (prostaciclina, óxido nítrico). Esto produce una caída reversible de la presión de perfusión intraglomerular y de la TFG, que se normaliza al ajustar los niveles valle del fármaco."
  },
  {
    num: 1093,
    disciplina: "fisiologia_trasplante",
    pregunta: "Un paciente en su segundo día post-trasplante renal presenta súbitamente anuria total (< 5 ml/hora), dolor agudo e hinchazón tensa sobre el injerto en la fosa ilíaca derecha y hematuria macroscópica franca por la sonda vesical. El eco-Doppler urgente muestra aumento del tamaño del injerto con ausencia completa de flujo en la vena renal del injerto y un patrón de flujo arterial con pico sistólico estrecho e inversión del flujo en diástole ('flujo en espícula o inversión diastólica'). ¿Cuál es el diagnóstico de catástrofe vascular y la conducta inmediata?",
    opciones: {
      A: "Trombosis de la vena renal del injerto; exploración quirúrgica abierta de urgencia inmediata para intentar trombectomía vs nefrectomía del injerto",
      B: "Estenosis de la arteria renal leve; control con antihipertensivos orales y cita en 1 mes",
      C: "Rechazo hiperagudo no vascular; administración de interferón gamma",
      D: "Urinoma no complicado; punción percutánea electiva la próxima semana"
    },
    respuesta_correcta: "A",
    justificacion: "La tríada de anuria súbita, dolor/aumento masivo de volumen del injerto y hematuria en los primeros días post-trasplante es patognomónica de trombosis de la vena renal. El signo ecográfico característico en el Doppler arterial es la 'inversión diastólica' (reversal diastolic flow): como la sangre arterial entra a gran presión pero no puede drenar por la vena trombosada, rebota retrógradamente durante la diástole. Es una emergencia quirúrgica absoluta; requiere reexploración en minutos, ya que el retraso conduce inevitablemente a infarto venoso hemorrágico y pérdida del riñón."
  },
  {
    num: 1094,
    disciplina: "fisiologia_trasplante",
    pregunta: "A los 4 meses del trasplante renal, un paciente desarrolla hipertensión arterial severa refractaria de difícil control con tres fármacos. El nefrólogo añade un inhibidor de la ECA (Enalapril), tras lo cual la creatinina sérica se incrementa abruptamente de 1.2 a 3.4 mg/dL. El eco-Doppler del injerto revela un flujo turbulento con una Velocidad Pico Sistólica (PSV) en la anastomosis arterial renal de 310 cm/s y un gradiente de velocidad mayor a 3:1. ¿Cuál es el diagnóstico y el tratamiento de elección?",
    opciones: {
      A: "Estenosis de la Arteria Renal del Injerto (TRIC); el tratamiento de elección es la arteriografía con angioplastia transluminal percutánea y colocación de stent vascular",
      B: "Necrosis cortical por choque séptico; hemodiálisis de por vida",
      C: "Rechazo celular Banff III; globulina antitimocítica intravenosa a dosis de rescate",
      D: "Infección por citomegalovirus resistente a ganciclovir"
    },
    respuesta_correcta: "A",
    justificacion: "La estenosis de la arteria renal del injerto (TRIC) se sospecha ante hipertensión refractaria de novo y empeoramiento agudo de la función renal al iniciar IECA o ARA-II (debido a que el riñón dependía del tono de la arteriola eferente mediado por angiotensina II para mantener la filtración glomerular). Un PSV > 200-250 cm/s en Doppler es diagnóstico de estenosis hemodinámicamente significativa (> 60-70%). El tratamiento estándar de oro es la angioplastia con stent por vía endovascular percutánea, con tasas de éxito superiores al 85%."
  },
  {
    num: 1095,
    disciplina: "fisiologia_trasplante",
    pregunta: "En el seguimiento de un paciente trasplantado renal con protocolo de triple inmunosupresión (Tacrolimus, Micofenolato Mofetilo y Prednisona), el análisis rutinario de orina detecta células de inclusión intranuclear en orina ('células decoy'). La cuantificación sérica por PCR reporta 45,000 copias/ml de ADN de Virus BK. La biopsia renal confirma Nefropatía asociada a Virus BK (BKVN) con tinción positiva para el antígeno T grande (SV40). De acuerdo con las guías de la Sociedad Americana de Trasplantes (AST), ¿cuál es la primera línea de intervención terapéutica?",
    opciones: {
      A: "Reducción protocolizada escalonada de la inmunosupresión global (generalmente disminuyendo a la mitad o suspendiendo el antimetabolito Micofenolato y reduciendo la dosis valle de Tacrolimus)",
      B: "Aumentar al doble la dosis de Tacrolimus e iniciar bolos de metilprednisolona",
      C: "Nefrectomía del injerto inmediata por riesgo de leucemia secundaria",
      D: "Administración de Aciclovir oral en monoterapia sin modificar la inmunosupresión"
    },
    respuesta_correcta: "A",
    justificacion: "La nefropatía por virus polioma BK es una complicación oportunista consecuencia de la sobreinmunosupresión celular T. No existe un fármaco antiviral específico de alta eficacia curativa. La piedra angular y recomendación categoría 1 de las guías de la AST y KDIGO consiste en reducir oportunamente la carga de inmunosupresión del paciente: habitualmente reduciendo en 50% o suspendiendo el MMF y reduciendo los niveles objetivo de tacrolimus a 4-6 ng/ml, lo que permite al propio sistema inmune del huésped controlar la replicación viral sin inducir rechazo agudo."
  },
  {
    num: 1096,
    disciplina: "fisiologia_trasplante",
    pregunta: "Durante la evaluación de un donante fallecido en asistolia controlada (Donación en asistolia controlada - DCD Maastricht Tipo III), ¿cuál de los siguientes parámetros medidos durante la perfusión renal pulsátil hipotérmica en máquina ex-vivo se correlaciona con la mayor probabilidad de viabilidad del injerto y menor riesgo de falla primaria?",
    opciones: {
      A: "Índice de Resistencia vascular renal menor a 0.40 mmHg/ml/min asociado a un flujo renal en aumento sostenido mayor a 80-100 ml/min",
      B: "Índice de Resistencia vascular renal mayor a 1.2 mmHg/ml/min con flujo cero",
      C: "Liberación masiva de lactato deshidrogenasa con pH de perfusato menor a 6.0",
      D: "Presencia de trombos visibles en la microcirculación cortical"
    },
    respuesta_correcta: "A",
    justificacion: "La perfusión pulsátil hipotérmica en máquina (HMP) es el estándar para evaluar y preservar riñones de donantes DCD y de criterios expandidos (ECD). Los dos parámetros hemodinámicos cuantitativos clave validados para aceptar un órgano son: un flujo de perfusión en aumento adecuado (> 80 ml/min) y una resistencia vascular renal baja o en descenso (Índice de Resistencia < 0.3-0.4 mmHg/ml/min). Una resistencia persistentemente alta (> 0.45-0.5) se asocia fuertemente con necrosis cortical, no función primaria del injerto y fracaso del trasplante."
  },
  {
    num: 1097,
    disciplina: "fisiologia_trasplante",
    pregunta: "Un paciente de 60 años con neuropatía diabética y función renal basal limítrofe (TFG = 45 ml/min) acude por dolor lumbar y toma de forma simultánea ketorolaco (un AINE) junto con losartán (un ARA-II). A las 72 horas ingresa con anuria y creatinina sérica elevada a 6.2 mg/dL. ¿Cuál es la base fisiológica del daño hemodinámico renal agudo inducido por la combinación de AINEs con bloqueadores del sistema renina-angiotensina?",
    opciones: {
      A: "El AINE bloquea las prostaglandinas vasodilatadoras causando vasoconstricción de la arteriola aferente, mientras que el ARA-II bloquea la angiotensina II causando vasodilatación de la arteriola eferente, colapsando la presión de filtración intraglomerular",
      B: "Ambos fármacos producen vasoconstricción simultánea de las venas ilíacas",
      C: "El AINE destruye directamente los podocitos mediante apoptosis dependiente de caspasa 8",
      D: "El ARA-II precipita cristales insolubles en los túbulos colectores medulares"
    },
    respuesta_correcta: "A",
    justificacion: "La autorregulación renal mantiene constante la Tasa de Filtración Glomerular (TFG) mediante dos mecanismos coordinados: las prostaglandinas dilatan la arteriola aferente para asegurar la entrada de sangre, mientras que la angiotensina II contrae la arteriola eferente para generar la presión intraglomerular necesaria de filtración. Los AINEs bloquean la síntesis de prostaglandinas (vasoconstricción aferente), y los IECA/ARA-II bloquean la angiotensina II (vasodilatación eferente). Al combinarse ('doble o triple golpe'), la presión capilar glomerular cae a cero, produciendo fracaso renal prerrenal agudo hemodinámico severo."
  },
  {
    num: 1098,
    disciplina: "fisiologia_trasplante",
    pregunta: "A las 6 semanas de un trasplante renal, el paciente presenta edema progresivo en miembro inferior ipsilateral, oliguria y una masa palpable fluctuante no dolorosa alrededor del polo inferior del injerto. La ecografía confirma una colección perirrenal anecoica de 10 cm con compresión del uréter del injerto (hidronefrosis secundaria). Se realiza punción diagnóstica de la colección. ¿Cuáles son los hallazgos de laboratorio en el líquido aspirado que diferencian un Linfocele de un Urinoma?",
    opciones: {
      A: "En el linfocele los valores de creatinina, urea y electrolitos en el líquido son exactamente idénticos a los del suero del paciente; en el urinoma, la creatinina y el potasio en el líquido son drásticamente superiores (varias veces más altos) que en el suero",
      B: "En el linfocele la creatinina del líquido es 20 veces mayor que en sangre",
      C: "En el urinoma no hay contenido proteico y los leucocitos son siempre cero",
      D: "En el linfocele el líquido coagula espontáneamente en menos de 1 segundo"
    },
    respuesta_correcta: "A",
    justificacion: "El linfocele proviene de vasos linfáticos perivasculares ilíacos o hiliares seccionados y no ligados; su composición bioquímica es la de la linfa (ultrafiltrado plasmático), por lo que las concentraciones de creatinina, urea y electrolitos en el líquido aspirado son exactamente iguales a las del suero. En cambio, si la colección es un urinoma (por dehiscencia o necrosis de la anastomosis ureterovesical), el líquido es orina concentrada y la creatinina del fluido será marcadamente superior (típicamente 5 a 100 veces mayor) que la creatinina sérica simultánea."
  },
  {
    num: 1099,
    disciplina: "fisiologia_trasplante",
    pregunta: "En relación con los fármacos inmunosupresores utilizados en trasplante renal, ¿cuál es el mecanismo de acción de Belatacept (Nulojix) y cuál es el requisito de serología viral del receptor indispensable antes de poder prescribirlo por riesgo de Linfoma Post-trasplante del SNC?",
    opciones: {
      A: "Proteína de fusión soluble que bloquea la co-estimulación de linfocitos T uniéndose a CD80 y CD86 de las células presentadoras de antígeno; requiere obligatoriamente serología IgG positiva para Virus de Epstein-Barr (VEB) en el receptor",
      B: "Inhibidor de la tirosina quinasa de Bruton; requiere serología negativa para Hepatitis C",
      C: "Anticuerpo anti-CD20 que lisa linfocitos B; requiere vacunación contra fiebre amarilla",
      D: "Bloqueador del receptor de interleucina-2; no requiere ningún estudio serológico"
    },
    respuesta_correcta: "A",
    justificacion: "Belatacept es una proteína de fusión soluble (dominio extracelular de CTLA-4 modificado ligado a Fc de IgG1) que bloquea selectivamente la vía de co-estimulación CD28-CD80/CD86 entre la célula presentadora de antígeno y el linfocito T. No tiene la nefrotoxicidad de los inhibidores de calcineurina. Sin embargo, en pacientes seronegativos para el Virus de Epstein-Barr (VEB), su uso se asoció a un incremento muy alto de enfermedad linfoproliferativa post-trasplante (PTLD) con afección severa del sistema nervioso central, por lo que su uso está restringido exclusivamente a pacientes con serología demostrada EBV-IgG positiva."
  },

  // ==========================================
  // 11. CIRUGÍA, LAPAROSCOPIA Y METODOLOGÍA (10 preguntas)
  // ==========================================
  {
    num: 1100,
    disciplina: "fundamentos_cirugia",
    pregunta: "Durante una prostatectomía radical robótica asistida por sistema da Vinci en posición de Trendelenburg forzada (30 grados) y neumoperitoneo con CO2 a 15 mmHg, el anestesiólogo reporta dificultad ventilatoria severa. ¿Cuáles son los dos cambios fisiológicos respiratorios esperados derivados del neumoperitoneo y la posición quirúrgica?",
    opciones: {
      A: "Disminución marcada de la distensibilidad pulmonar (complianza estática y dinámica) y elevación de la presión pico de la vía aérea, combinada con hipercapnia por absorción peritoneal de CO2",
      B: "Incremento masivo de la capacidad residual funcional con alcalosis respiratoria",
      C: "Aumento de la complianza pulmonar y caída del espacio muerto alveolar",
      D: "Disminución del gradiente alvéolo-arterial de oxígeno con hiperoxigenación espontánea"
    },
    respuesta_correcta: "A",
    justificacion: "La combinación de neumoperitoneo con CO2 (aumento de la presión intraabdominal) y posición de Trendelenburg extrema desplaza el diafragma cefálicamente hacia la cavidad torácica. Esto reduce la capacidad residual funcional (CRF), disminuye significativamente la complianza pulmonar (hasta en un 30-50%) e incrementa las presiones pico y meseta de la vía aérea con atelectasias basales. Además, la absorción peritoneal continua del CO2 insuflado incrementa el PaCO2, requiriendo un aumento compensatorio en el volumen minuto para prevenir acidosis respiratoria severa."
  },
  {
    num: 1101,
    disciplina: "fundamentos_cirugia",
    pregunta: "En el transcurso de una nefrectomía laparoscópica derecha, de manera abrupta se ausculta un soplo precordial en 'rueda de molino' (mill-wheel murmur), acompañado de caída fulminante del EtCO2 (fracción espirada de dióxido de carbono), hipoxemia severa e hipotensión arterial profunda con colapso cardiovascular. ¿Cuál es la emergencia quirúrgico-anestésica y cuál es la secuencia inmediata de manejo?",
    opciones: {
      A: "Embolismo gaseoso masivo por CO2; desinsuflar de inmediato el neumoperitoneo, colocar al paciente en posición de Durant (decúbito lateral izquierdo con Trendelenburg), ventilar con FiO2 al 100% y aspirar el gas por catéter venoso central",
      B: "Neumotórax a tensión izquierdo; colocar tubo de toracostomía en fosa ilíaca",
      C: "Paro cardíaco por fibrilación ventricular primaria; infundir cloruro de potasio en bolo",
      D: "Reacción alérgica al látex; administrar adrenalina subcutánea y continuar la cirugía"
    },
    respuesta_correcta: "A",
    justificacion: "La embolia gaseosa por CO2 ocurre por introducción inadvertida de gas en un vaso venoso de gran calibre lesionado (ej. vena renal o cava). La burbuja de gas viaja al ventrículo derecho y arteria pulmonar generando un 'bloqueo aéreo' mecánico con colapso hemodinámico y caída abrupta del EtCO2 (por interrupción de la perfusión pulmonar). El manejo de emergencia exige: 1) Suspender la insuflación y evacuar el neumoperitoneo; 2) Posición de Durant (Trendelenburg con decúbito lateral izquierdo) para que la burbuja de gas quede atrapada en el ápex del ventrículo derecho sin obstruir el tracto de salida pulmonar; 3) FiO2 al 100% para promover el lavado de CO2; 4) Aspiración del gas por acceso venoso central si está disponible."
  },
  {
    num: 1102,
    disciplina: "fundamentos_cirugia",
    pregunta: "En electrocirugía laparoscópica monopolar, ¿cuál es el fenómeno físico del 'Acoplamiento Capacitivo' (Capacitive Coupling) que puede causar quemaduras viscerales térmicas inadvertidas fatales fuera del campo de visión de la cámara?",
    opciones: {
      A: "La corriente alterna de alta frecuencia del electrodo activo induce una carga eléctrica parasitaria a través del aislamiento intacto hacia un conductor metálico adyacente (ej. una cánula metálica o laparoscopio), descargándose en vísceras vecinas",
      B: "El paso de corriente continua exclusivamente a través de los guantes de goma del cirujano",
      C: "La fusión espontánea de los cables por defecto de la fuente de energía eléctrica de pared",
      D: "La vaporización del dióxido de carbono en forma de plasma caliente"
    },
    respuesta_correcta: "A",
    justificacion: "El acoplamiento capacitivo se produce cuando una corriente alterna de alta frecuencia viaja por un electrodo activo recubierto de aislamiento intacto. El electrodo, el aislante y un instrumento metálico externo (como un trocar híbrido con funda de plástico o el propio laparoscopio) actúan como las placas de un condensador (capacitor). La corriente inducida se acumula en el metal y, si este contacta un intestino u órgano adyacente fuera de la vista de la cámara, se descarga causando una quemadura intestinal profunda inadvertida que se perfora a los 3-5 días."
  },
  {
    num: 1103,
    disciplina: "fundamentos_cirugia",
    pregunta: "Con respecto a los instrumentos robóticos EndoWrist del sistema quirúrgico da Vinci en comparación con los instrumentos laparoscópicos convencionales rectos, ¿cuántos grados de libertad de movimiento proporcionan dentro del cuerpo humano y qué temblor fisiológico eliminan?",
    opciones: {
      A: "Proporcionan 7 grados de libertad de movimiento (reproduciendo con creces los movimientos de la muñeca humana) con filtrado y eliminación completa del temblor fisiológico del cirujano",
      B: "Proporcionan únicamente 2 grados de libertad rígidos idénticos a las pinzas laparoscópicas convencionales",
      C: "Proporcionan 12 grados de libertad pero transmiten y amplifican el temblor del operador",
      D: "Carecen de articulación en la punta y solo permiten rotación axial estática"
    },
    respuesta_correcta: "A",
    justificacion: "La tecnología EndoWrist de Intuitive Surgical otorga a los instrumentos robóticos articulados hasta 7 grados de libertad de movimiento (rotación, flexión/extensión, abducción/aducción, etc.) y hasta 90 grados de articulación en la punta, superando el rango de movimiento de la mano humana. Además, la consola informática filtra y elimina el temblor fisiológico de alta frecuencia (6-10 Hz) de las manos del cirujano y permite escalamiento de movimiento (ej. mover 3 cm en consola para avanzar 1 cm en el paciente)."
  },
  {
    num: 1104,
    disciplina: "fundamentos_cirugia",
    pregunta: "En relación con los dispositivos de energía ultrasónica (como el bisturí armónico) versus los selladores bipolares avanzados (como LigaSure), ¿cuál de los siguientes enunciados describe correctamente el principio físico de acción del bisturí ultrasónico y su margen de daño térmico lateral en la disección cercana a nervios pélvicos?",
    opciones: {
      A: "El bisturí armónico utiliza vibración mecánica de alta frecuencia (55,500 Hz) que desnaturaliza proteínas por cavitación y fricción a temperaturas menores (< 100 °C) con un daño térmico lateral mínimo de 1 a 2 mm",
      B: "El bisturí armónico emite corriente eléctrica de alto voltaje a través de los tejidos alcanzando más de 500 °C con daño lateral de 15 mm",
      C: "El LigaSure no coagula proteínas y solo corta mediante una cuchilla de diamante",
      D: "El bisturí armónico no produce aerosoles ni gotas de vapor en la cavidad abdominal"
    },
    respuesta_correcta: "A",
    justificacion: "El bisturí ultrasónico (Harmonic Scalpel) convierte energía eléctrica en vibración mecánica longitudinal a 55.5 kHz mediante un transductor piezoeléctrico. La fricción mecánica intermolecular rompe los puentes de hidrógeno y desnaturaliza las proteínas celulares a temperaturas relativamente bajas (60-100 °C), formando un coágulo de colágeno ('coagulum') y cortando el tejido por cavitación. Su dispersión térmica lateral es de apenas 1 a 2 mm (muy inferior a la electrocirugía monopolar de 5-10 mm), lo que brinda mayor margen de seguridad cerca del paquete neurovascular prostático o el uréter."
  },
  {
    num: 1105,
    disciplina: "fundamentos_cirugia",
    pregunta: "En el análisis crítico de la literatura médica para toma de decisiones urológicas, si un nuevo fármaco para el cáncer renal reduce la mortalidad a 3 años del 25% al 15% comparado con el estándar previo, ¿cuál es la Reducción Absoluta del Riesgo (ARR) y el Número Necesario a Tratar (NNT)?",
    opciones: {
      A: "ARR = 10% (0.10); NNT = 10 (se requiere tratar a 10 pacientes con el nuevo fármaco para evitar una muerte adicional a 3 años)",
      B: "ARR = 40%; NNT = 400 pacientes",
      C: "ARR = 2.5%; NNT = 2.5 pacientes",
      D: "ARR = 1%; NNT = 100 pacientes"
    },
    respuesta_correcta: "A",
    justificacion: "La Reducción Absoluta del Riesgo (ARR) es la diferencia directa entre la tasa de eventos en el grupo control (CER = 25%) y el grupo experimental (EER = 15%): ARR = 25% - 15% = 10% (0.10). El Número Necesario a Tratar (NNT) es el inverso matemático de la reducción absoluta del riesgo: NNT = 1 / ARR = 1 / 0.10 = 10. Esto significa que es necesario tratar a 10 pacientes con la nueva terapia para prevenir un desenlace fatal comparado con el tratamiento control."
  },
  {
    num: 1106,
    disciplina: "fundamentos_cirugia",
    pregunta: "En el diseño de ensayos clínicos fase III de 'No Inferioridad' en urología (por ejemplo, comparar una cirugía mínimamente invasiva frente a la cirugía abierta de referencia en márgenes quirúrgicos oncológicos), ¿cuál es la población de análisis metodológico primario que se considera más conservadora y rigurosa para no declarar erróneamente no inferioridad?",
    opciones: {
      A: "El análisis 'Por Protocolo' (Per-Protocol), complementado obligatoriamente con el análisis por 'Intención de Tratar' (Intention-To-Treat), debido a que las pérdidas y no adherencias en ITT sesgan los resultados hacia la no diferencia favoreciendo falsamente la no inferioridad",
      B: "El análisis de subgrupos no aleatorizados post-hoc exclusivo",
      C: "La exclusión de todos los pacientes que no presentaron complicaciones",
      D: "El análisis exclusivo de los primeros 10 pacientes reclutados"
    },
    respuesta_correcta: "A",
    justificacion: "En los ensayos de superioridad tradicionales, el análisis por intención de tratar (ITT) es el más conservador porque penaliza los abandonos y preserva la aleatorización. Sin embargo, en los ensayos de NO INFERIORIDAD, cualquier 'ruido' metodológico (falta de adherencia, pérdida de seguimiento o tratamientos cruzados) hace que ambos brazos se parezcan más entre sí, lo que sesga artificialmente el resultado hacia la ausencia de diferencias (favoreciendo falsamente la hipótesis de no inferioridad). Por ello, las guías metodológicas exigen evaluar rigurosamente tanto la población por protocolo (PP) como la población ITT."
  },
  {
    num: 1107,
    disciplina: "fundamentos_cirugia",
    pregunta: "De acuerdo con la Lista de Verificación de la Seguridad de la Cirugía de la Organización Mundial de la Salud (OMS), ¿cuál de los siguientes pasos corresponde de forma estricta a la fase de 'Pausa Quirúrgica' o 'Time-Out' inmediatamente antes de realizar la incisión cutánea?",
    opciones: {
      A: "Todo el equipo confirma en voz alta: identidad del paciente, sitio quirúrgico exacto y lateralidad marcada, procedimiento a realizar, confirmación de profilaxis antibiótica en los últimos 60 minutos y previsión de eventos críticos",
      B: "El recuento de gasas e instrumental quirúrgico antes de cerrar la herida",
      C: "La firma del consentimiento informado en la sala de hospitalización previa al ingreso a quirófano",
      D: "La extubación del paciente y su traslado a la sala de recuperación postanestésica"
    },
    respuesta_correcta: "A",
    justificacion: "La Lista de Verificación de Seguridad Quirúrgica de la OMS contempla tres momentos clave: 1) Entrada (Sign In: antes de inducir anestesia); 2) Pausa Quirúrgica (Time Out: inmediatamente antes de incidir la piel); y 3) Salida (Sign Out: antes de que el paciente salga del quirófano). En el Time-Out, todos los miembros del equipo (cirujano, anestesiólogo y enfermería) suspenden actividades para verificar en voz alta la identidad, procedimiento, marcaje del sitio anatómico/lateralidad, profilaxis antibiótica oportuna (< 60 min) y precauciones específicas ante hemorragia o vía aérea difícil."
  },
  {
    num: 1108,
    disciplina: "fundamentos_cirugia",
    pregunta: "Durante una prostatectomía radical robótica o una nefrectomía parcial, se produce una hemorragia masiva incontrolable por desgarro de la vena cava que no puede controlarse por vía robótica. El cirujano decide realizar una conversión inmediata a cirugía abierta de emergencia. ¿Cuál es la maniobra técnica obligatoria con respecto a los brazos del sistema robótico da Vinci para permitir el acceso abierto del equipo quirúrgico?",
    opciones: {
      A: "Presionar el botón de parada de emergencia (E-Stop), abrir las mordazas de los instrumentos robóticos para desenganchar los tejidos y desacoplar (undock) rápidamente los brazos robóticos alejando el carro del paciente de la mesa de operaciones",
      B: "Dejar el robot anclado al paciente y jalar los trócares con fuerza cortando la pared abdominal",
      C: "Desconectar el cable de corriente del robot sin retirar las pinzas",
      D: "Elevar la mesa de operaciones al máximo con los instrumentos insertados para romper las fijaciones"
    },
    respuesta_correcta: "A",
    justificacion: "El protocolo de desacople de emergencia ('Emergency Undocking') del sistema robótico exige la coordinación entre el cirujano de consola y el equipo de cabecera: 1) Detener la alimentación de energía si es necesario (E-Stop); 2) Abrir las mandíbulas de los instrumentos para liberar cualquier tejido pinzado; 3) Retirar todos los instrumentos a través de las cánulas de los brazos; 4) Desacoplar los seguros de los trócares (undocking) y replegar los brazos robóticos; 5) Alejar inmediatamente el carro del paciente (patient cart) de la mesa quirúrgica para dar espacio físico al equipo de laparotomía abierta urgente."
  },
  {
    num: 1109,
    disciplina: "fundamentos_cirugia",
    pregunta: "En el marco de la bioética médica contemporánea (principios de Beauchamp y Childress), un paciente adulto de 52 años plenamente competente, en pleno uso de sus facultades mentales, con diagnóstico de carcinoma de células renales de 10 cm que requiere nefrectomía radical abierta, manifiesta ser Testigo de Jehová y firma un documento notariado de directriz anticipada rechazando de forma absoluta cualquier transfusión de sangre alogénica (concentrados eritrocitarios, plasma o plaquetas), incluso ante riesgo inminente de muerte. ¿Cuál es la conducta médica y legalmente correcta que debe seguir el urólogo tratante?",
    opciones: {
      A: "Respetar la autonomía y directriz anticipada del paciente competente; optimizar la masa eritrocitaria preoperatoria (hierro IV, eritropoyetina), emplear técnicas de ahorro intraoperatorio meticuloso (ej. recuperador celular autólogo en circuito cerrado continuo si no está contraindicado) y no transfundir hemoderivados alogénicos contra su voluntad expresa",
      B: "Administrar transfusión sanguínea de forma secreta mientras el paciente esté bajo anestesia general sin que se dé cuenta",
      C: "Solicitar una orden judicial para declarar mentalmente incompetente al paciente de forma automática por el hecho de rechazar sangre",
      D: "Rechazar atender al paciente y darlo de alta sin ninguna opción terapéutica"
    },
    respuesta_correcta: "A",
    justificacion: "El principio bioético y jurídico de autonomía del paciente adulto competente prevalece sobre el principio de beneficencia médica paternalista en directrices anticipadas y consentimientos informados formales. Transfundir sangre a la fuerza a un adulto competente que la ha rechazado explícitamente constituye una agresión médica punible legalmente. La obligación del equipo urológico y anestésico es planificar una cirugía sin sangre: optimización hematológica preoperatoria (eritropoyetina humana recombinante, hierro sacarosa IV), hemostasia quirúrgica impecable, hipotensión controlada, ácido tranexámico y técnicas de hemodilución o recuperación celular en circuito continuo conforme a las creencias del paciente."
  }
];
