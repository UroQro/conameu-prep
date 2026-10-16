// Batch 2: 110 Preguntas de Alta Dificultad para el Examen de Consejo de Urología - UroBoard Prep
// Diseñadas con opciones múltiples homogéneas en longitud, plausibilidad clínica y rigor técnico.
// Cada distractor representa una alternativa diagnóstica o terapéutica verosímil según guías AUA/EAU/NCCN.

export const BATCH2_PREGUNTAS_DIFICILES = [
  // =========================================================================
  // 1. UROLOGÍA ONCOLÓGICA (10 preguntas: 1110 - 1119)
  // =========================================================================
  {
    num: 1110,
    disciplina: "uro_oncologia",
    pregunta: "En un paciente de 64 años con cáncer de próstata localizado de alto riesgo (cT3a, Gleason 4+4=8, PSA 24 ng/ml) que opta por tratamiento con radioterapia externa radical normofraccionada, ¿cuál es la duración estándar recomendada de la terapia de deprivación androgénica (TDA) adyuvante según los ensayos fase III EORTC 22961 y DART01/05?",
    opciones: {
      A: "Terapia de deprivación androgénica a corto plazo durante 4 a 6 meses de duración total",
      B: "Terapia de deprivación androgénica a largo plazo durante 24 a 36 meses de duración total",
      C: "Terapia de deprivación androgénica continua indefinida de por vida sin periodos de descanso",
      D: "Terapia de deprivación androgénica ultracorta neoadyuvante de 2 meses previa a la radiación"
    },
    respuesta_correcta: "B",
    justificacion: "En cáncer de próstata de alto riesgo tratado con radioterapia externa, los ensayos aleatorizados fase III (EORTC 22961, RTOG 9202, DART01/05) demostraron una superioridad estadísticamente significativa en sobrevida libre de metástasis y sobrevida global al emplear TDA a largo plazo (24 a 36 meses) frente al curso corto de 4 a 6 meses, el cual queda reservado para riesgo intermedio favorable/desfavorable."
  },
  {
    num: 1111,
    disciplina: "uro_oncologia",
    pregunta: "¿En cuál de los siguientes escenarios clínicos está formalmente indicada la realización de una biopsia renal percutánea preoperatoria de una masa renal sólida según las recomendaciones de las guías EAU y AUA?",
    opciones: {
      A: "Masa renal sólida de 7 cm heterogénea en paciente joven de 45 años candidato a nefrectomía radical",
      B: "Masa renal polar superior de 3 cm que se programa para ablación térmica percutánea con radiofrecuencia",
      C: "Masa quística Bosniak II con septos finos menores a 1 mm que presenta calcificación lineal parietal",
      D: "Masa renal hipervascular de 5 cm bien delimitada con función renal normal y riñón contralateral sano"
    },
    respuesta_correcta: "B",
    justificacion: "Las guías AUA y EAU indican formalmente la biopsia renal percutánea antes de terapias ablativas (radiofrecuencia o crioablación) para documentar la histología maligna antes de destruirla térmicamente, en pacientes candidatos a vigilancia activa para estratificar riesgo, o ante sospecha de linfoma, metástasis o proceso infeccioso. En masas resecables quirúrgicamente en pacientes aptos, no se indica de rutina."
  },
  {
    num: 1112,
    disciplina: "uro_oncologia",
    pregunta: "Un paciente con carcinoma urotelial vesical de alto riesgo recibe inducción completa de BCG (6 dosis) más mantenimiento (3 dosis). A los 6 meses de la RTUV inicial presenta recidiva comprobada por biopsia de Carcinoma in Situ (CIS) difuso. Cumple criterios de tumor no respondedor a BCG (BCG-unresponsive). ¿Cuál es la conducta terapéutica considerada el estándar de referencia con mayor tasa de curación según las guías AUA/EAU?",
    opciones: {
      A: "Administración inmediata de un segundo ciclo de inducción con BCG por 6 semanas adicionales",
      B: "Cistectomía radical precoz con linfadenectomía pélvica extendida bilateral y derivación urinaria",
      C: "Quimioterapia sistémica neoadyuvante basada en cisplatino seguida de radioterapia vesical externa",
      D: "Instilación endovesical mensual continua de mitomicina C a dosis estándar durante dos años completos"
    },
    respuesta_correcta: "B",
    justificacion: "La cistectomía radical precoz con linfadenectomía pélvica bilateral es el estándar de referencia (gold standard) para pacientes con tumor no músculo invasor de alto riesgo no respondedor a BCG (BCG-unresponsive), ya que el retraso quirúrgico asocia un alto riesgo de progresión a enfermedad músculo-invasora y metástasis. Fármacos como Pembrolizumab o Nadofaragene firadenovec son opciones secundarias en pacientes no aptos para cistectomía."
  },
  {
    num: 1113,
    disciplina: "uro_oncologia",
    pregunta: "En un paciente con tumor testicular de células germinales no seminomatoso en estadio IIB con marcadores séricos (AFP, hCG) normalizados tras 3 ciclos de quimioterapia PEB, la tomografía computarizada de control muestra una masa retroperitoneal residual de 2.2 cm en el área interaortocava. ¿Cuál es el manejo de elección según las guías EAU y NCCN?",
    opciones: {
      A: "Vigilancia tomográfica activa trimestral seriada hasta documentar crecimiento mayor a 3 centímetros",
      B: "Linfadenectomía retroperitoneal bilateral formal con preservación nerviosa del plexo simpático",
      C: "Realización inmediata de un estudio 18F-FDG PET-CT para decidir biopsia percutánea guiada",
      D: "Inicio de quimioterapia de segunda línea con esquema de rescate TIP (Paclitaxel, Ifosfamida, Cisplatino)"
    },
    respuesta_correcta: "B",
    justificacion: "En tumores no seminomatosos con marcadores normalizados tras quimioterapia, cualquier masa residual retroperitoneal mayor a 1 cm (10 mm) requiere linfadenectomía retroperitoneal (LRP), debido a que aproximadamente el 40-50% de estas masas albergan teratoma maduro (resistente a quimio) y el 10-15% cáncer viable residual. El PET-CT no tiene utilidad en no-seminoma por la falta de captación del teratoma."
  },
  {
    num: 1114,
    disciplina: "uro_oncologia",
    pregunta: "A diferencia de los tumores no seminomatosos, en un paciente con seminoma puro metastásico que tras completar quimioterapia PEB presenta una masa retroperitoneal residual de 3.5 cm con marcadores normales, ¿cuál es el estudio de imagen y conducta indicada antes de plantear una intervención quirúrgica?",
    opciones: {
      A: "Linfadenectomía retroperitoneal laparoscópica o abierta de urgencia sin estudios funcionales previos",
      B: "Resonancia magnética pélvica con contraste dinámico y angiografía para descartar trombosis vascular",
      C: "Estudio 18F-FDG PET-CT realizado al menos 6 a 8 semanas tras finalizar la quimioterapia",
      D: "Radioterapia retroperitoneal adyuvante con dosis de consolidación de 30 a 36 Gy sobre la masa residual"
    },
    respuesta_correcta: "C",
    justificacion: "En seminoma puro, las masas residuales mayores a 3 cm están compuestas predominantemente por necrosis y fibrosis densa reaccional (80%). El 18F-FDG PET-CT realizado al menos 6 a 8 semanas post-quimioterapia (para evitar falsos positivos por inflamación) tiene un alto valor predictivo negativo: si es PET negativo, se vigila sin cirugía; si es PET positivo con captación intensa, se sospecha enfermedad viable y se plantea resección."
  },
  {
    num: 1115,
    disciplina: "uro_oncologia",
    pregunta: "De acuerdo con los ensayos clínicos fase III ARASENS y PEACE-1, ¿cuál es el nuevo estándar de tratamiento sistémico intensificado de primera línea para pacientes aptos con cáncer de próstata metastásico sensible a la castración (mHSPC) de novo de alto volumen (criterios CHAARTED)?",
    opciones: {
      A: "Bicalutamida oral a dosis altas en monoterapia continua combinada con ácido zoledrónico endovenoso",
      B: "Terapia triplete: deprivación androgénica (TDA) más Docetaxel (6 ciclos) más Darolutamida o Abiraterona",
      C: "Monoterapia con inhibidores de PARP combinada con radioterapia sobre todas las metástasis óseas",
      D: "Inmunoterapia dual con Nivolumab más Ipilimumab administrada durante 4 ciclos de consolidación"
    },
    respuesta_correcta: "B",
    justificacion: "Los estudios fase III ARASENS (Darolutamida + TDA + Docetaxel) y PEACE-1 (Abiraterona + TDA + Docetaxel) demostraron una prolongación sin precedentes de la sobrevida global frente a TDA + Docetaxel, estableciendo la terapia triplete como el estándar de cuidado para mHSPC de novo y particularmente en enfermedad de alto volumen según criterios CHAARTED."
  },
  {
    num: 1116,
    disciplina: "uro_oncologia",
    pregunta: "En un paciente de 58 años con carcinoma epidermoide de pene estadio cT2 que tras 6 semanas de antibióticos presenta dos adenopatías inguinales móviles palpables unilaterales de 3.5 cm (estadio clínico cN2), ¿cuál es el abordaje terapéutico estándar de los ganglios según las guías EAU?",
    opciones: {
      A: "Linfadenectomía inguinal radical ipsilateral superficial y profunda con envío a patología intraoperatoria",
      B: "Radioterapia externa inguinal y pélvica exclusiva sin ninguna intervención quirúrgica en la ingle",
      C: "Vigilancia clínica estrecha con ecografía cada dos meses hasta verificar reducción o crecimiento",
      D: "Biopsia de ganglio centinela con tecnecio-99m y verde de indocianina guiada por gammagrafía planar"
    },
    respuesta_correcta: "A",
    justificacion: "En cáncer de pene con ganglios inguinales palpables sospechosos persistentes (cN1-cN2), la biopsia de ganglio centinela está contraindicada (solo se usa en cN0). El tratamiento estándar con intención curativa es la linfadenectomía inguinal radical (superficial y profunda). Si patología reporta $\\ge 2$ ganglios o ruptura capsular, se agrega linfadenectomía pélvica ipsilateral y quimioterapia adyuvante."
  },
  {
    num: 1117,
    disciplina: "uro_oncologia",
    pregunta: "En un paciente con carcinoma de células renales de células claras metastásico clasificado como de riesgo intermedio o pobre según los criterios del Consorcio Internacional de Base de Datos de Cáncer Renal Metastásico (IMDC), ¿cuál de los siguientes regímenes representa una opción de primera línea estándar según las guías AUA/EAU/NCCN?",
    opciones: {
      A: "Interferón alfa subcutáneo en combinación con Interleucina-2 a dosis bajas de infusión continua",
      B: "Sunitinib oral en monoterapia continua a dosis de 50 mg diarios durante cuatro semanas consecutivas",
      C: "Doble inhibición de puntos de control inmunitario: Nivolumab (anti-PD-1) más Ipilimumab (anti-CTLA-4)",
      D: "Everolimus oral en monoterapia continua a dosis de 10 mg diarios administrados por vía oral matutina"
    },
    respuesta_correcta: "C",
    justificacion: "En el ensayo fase III CheckMate 214, la combinación de doble inmunoterapia Nivolumab + Ipilimumab demostró una sobrevida global significativamente superior y respuestas completas duraderas frente a Sunitinib en pacientes con CCR metastásico de riesgo intermedio y pobre según IMDC, convirtiéndose en un estándar de primera línea junto a combinaciones TKI + IO (como Pembrolizumab + Lenvatinib o Cabozantinib + Nivolumab)."
  },
  {
    num: 1118,
    disciplina: "uro_oncologia",
    pregunta: "Durante la evaluación tomográfica de un carcinoma de células renales derecho con trombo tumoral intravascular, el trombo se extiende dentro de la vena cava inferior por encima de las venas hepáticas principales pero por debajo del diafragma (Nivel III de Neves y Zincke / Clasificación de Mayo). ¿Cuál es la maniobra vascular quirúrgica indispensable para el control del trombo?",
    opciones: {
      A: "Canulación femoral y bypass cardiopulmonar con hipotermia profunda y paro circulatorio obligatorio",
      B: "Control vascular de la cava intrapericárdica o suprahepática infradiafragmática con maniobra de Pringle",
      C: "Ligadura simple definitiva de la vena cava inferior por debajo de las venas renales sin abrir la cava",
      D: "Colocación de filtro permanente de vena cava inferior en posición suprahepática previo a la cirugía"
    },
    respuesta_correcta: "B",
    justificacion: "Los trombos de nivel III (suprahepáticos infradiafragmáticos) requieren movilización hepática completa (maniobra de Piggyback), control de la cava suprahepática infradiafragmática (o intrapericárdica) y oclusión transitoria del pedículo hepático (maniobra de Pringle) para aislar la cava y abrirla (cavotomía) sin hemorragia masiva retrógrada desde los sinusoides hepáticos. El paro circulatorio se reserva para nivel IV (aurícula derecha)."
  },
  {
    num: 1119,
    disciplina: "uro_oncologia",
    pregunta: "De acuerdo con las guías de la EAU para el Carcinoma Urotelial del Tracto Urinario Superior (UTUC), ¿cuál de los siguientes pacientes cumple criterios estrictos para un tratamiento endourológico conservador con preservación renal (en lugar de nefroureterectomía radical)?",
    opciones: {
      A: "Tumor pélvico de 3.5 cm con hidronefrosis severa, citología de alto grado y riñón contralateral sano",
      B: "Tumor calicial unifocal de 1 cm, biopsia de bajo grado, citología negativa y TC sin invasión parénquima",
      C: "Tumores multifocales sincrónicos bilaterales de 2.5 cm que presentan áreas de infiltración muscular en TC",
      D: "Tumor ureteral de 2 cm con adenopatías retroperitoneales interaortocavas sospechosas en la tomografía"
    },
    respuesta_correcta: "B",
    justificacion: "Los criterios de bajo riesgo para manejo endoscópico conservador (ablación con láser vía ureteroscópica o percutánea) en UTUC son: tumor unifocal, tamaño < 2 cm (o < 1.5 cm), citología urinaria negativa/bajo grado, biopsia endourológica que confirme bajo grado, y ausencia de infiltración o adenopatías en la Uro-TC. Los tumores de alto grado, multifocales o $>2$ cm requieren nefroureterectomía radical."
  },

  // =========================================================================
  // 2. CRECIMIENTO PROSTÁTICO BENIGNO - HPB (10 preguntas: 1120 - 1129)
  // =========================================================================
  {
    num: 1120,
    disciplina: "crecimiento_prostatico",
    pregunta: "¿Cuál es la recomendación formal de las guías clínicas de la AUA y EAU con respecto al uso de extractos fitoterápicos (como Serenoa repens o Pygeum africanum) en el tratamiento de los síntomas del tracto urinario inferior (STUI) por hiperplasia prostática benigna?",
    opciones: {
      A: "Se recomiendan como terapia de primera línea en todos los pacientes con síntomas prostáticos leves a moderados",
      B: "No se recomiendan de manera sistemática ni estandarizada debido a la heterogeneidad y falta de eficacia robusta",
      C: "Se indican exclusivamente en combinación con finasterida para prevenir la retención urinaria aguda",
      D: "Están contraindicados de forma absoluta por toxicidad hepática irreversible reportada en ensayos clínicos"
    },
    respuesta_correcta: "B",
    justificacion: "Tanto la AUA como la EAU concluyen que los extractos fitoterápicos presentan una gran variabilidad en su composición molecular, métodos de extracción y pureza biológica. Los ensayos clínicos metodológicamente rigurosos y revisiones Cochrane no han demostrado una superioridad consistente frente a placebo, por lo que las guías no recomiendan su uso estandarizado para el manejo de los STUI/HPB."
  },
  {
    num: 1121,
    disciplina: "crecimiento_prostatico",
    pregunta: "En un varón de 62 años que presenta síntomas moderados de almacenamiento y vaciamiento por HPB (IPSS 16) asociados a disfunción eréctil concomitante, ¿cuál es el mecanismo por el cual el Tadalafilo 5 mg diario mejora los síntomas urinarios según la evidencia farmacológica?",
    opciones: {
      A: "Disminuye el volumen prostático total mediante inducción de apoptosis celular epitelial en 6 meses",
      B: "Incrementa el GMP cíclico relajando el músculo liso del trígono vesical, uretra prostática y próstata",
      C: "Bloquea selectivamente los receptores alfa-1A adrenérgicos disminuyendo la resistencia vascular periférica",
      D: "Inhibe la conversión periférica de testosterona a dihidrotestosterona reduciendo la vascularización estromal"
    },
    respuesta_correcta: "B",
    justificacion: "El Tadalafilo 5 mg una vez al día inhibe la fosfodiesterasa tipo 5 (PDE-5), incrementando las concentraciones de guanosín monofosfato cíclico (GMPc) y reduciendo el calcio intracelular. Esto induce relajación del músculo liso en la próstata, cuello vesical y uretra prostática, y atenúa la hiperactividad vesical mejorando los STUI sin alterar el tamaño de la glándula ni reducir el PSA."
  },
  {
    num: 1122,
    disciplina: "crecimiento_prostatico",
    pregunta: "Según los resultados de los ensayos clínicos multicéntricos MTOPS y CombAT, ¿cuál es el grupo de pacientes con HPB que obtiene el mayor beneficio clínico de la terapia combinada (alfa-bloqueador más inhibidor de 5-alfa reductasa) frente a la monoterapia?",
    opciones: {
      A: "Varones jóvenes con próstatas menores a 25 cc, PSA basal menor a 1.0 ng/ml y síntomas exclusivamente de vaciamiento",
      B: "Pacientes con próstatas mayores a 30-40 cc, PSA mayor a 1.5 ng/ml y síntomas moderados a severos con riesgo de progresión",
      C: "Pacientes con retención urinaria completa crónica que ya presentan vejiga acontráctil demostrada en urodinamia",
      D: "Hombres con síntomas de urgencia pura y residuo posmiccional menor a 20 ml sin crecimiento de la glándula prostática"
    },
    respuesta_correcta: "B",
    justificacion: "Los estudios MTOPS y CombAT demostraron que la terapia combinada (Tamsulosina + Dutasterida o Finasterida) reduce significativamente el riesgo de retención aguda de orina y la necesidad de cirugía prostática frente a monoterapia, pero este beneficio se concentra de forma contundente en pacientes con riesgo documentado de progresión clínica: volumen prostático $> 30-40\\text{ cc}$ y $\\text{PSA} > 1.5\\text{ ng/ml}$."
  },
  {
    num: 1123,
    disciplina: "crecimiento_prostatico",
    pregunta: "¿Cuál es la principal ventaja fisiológica y de seguridad perioperatoria que ofrece la Resección Transuretral de Próstata Bipolar (RTUP-B) en comparación con la técnica Monopolar tradicional (RTUP-M)?",
    opciones: {
      A: "Erradica el riesgo de estenosis uretral posoperatoria mediante la deshidratación térmica del epitelio",
      B: "Permite el uso de solución salina isotónica al 0.9%, eliminando el riesgo de síndrome de absorción / hiponatremia",
      C: "Garantiza una preservación del 100% de la eyaculación anterógrada fisiológica en todos los pacientes intervenidos",
      D: "Disminuye la necesidad de sonda vesical posoperatoria a menos de 2 horas tras concluir la resección del tejido"
    },
    respuesta_correcta: "B",
    justificacion: "La RTUP bipolar utiliza solución salina isotónica (NaCl al 0.9%) como líquido de irrigación en lugar de soluciones no electrolíticas hipotónicas (como glicina o sorbitol). Esto previene por completo la hiponatremia dilucional aguda y la hipoosmolaridad que caracterizan al síndrome de intoxicación hídrica (síndrome de RTUP), permitiendo resecciones más prolongadas y seguras en próstatas de mayor tamaño."
  },
  {
    num: 1124,
    disciplina: "crecimiento_prostatico",
    pregunta: "En la terapia térmica convectiva con vapor de agua (sistema Rezūm) para el tratamiento de la HPB, ¿cuál es el principio termodinámico que permite la destrucción celular selectiva en la zona de transición prostática?",
    opciones: {
      A: "Congelación intracelular instantánea a -40 grados centígrados mediante la descompresión rápida de gas argón",
      B: "Liberación de energía térmica latente al condensarse el vapor en agua líquida, desnaturalizando membranas celulares",
      C: "Ionización molecular por radiofrecuencia no térmica que fragmenta las cadenas de ADN del estroma glandular",
      D: "Atracción electromagnética de iones de sodio que genera electroporación irreversible en los vasos capsulares"
    },
    respuesta_correcta: "B",
    justificacion: "El sistema Rezūm inyecta vapor de agua estéril a $103^\\circ\\text{C}$ en el tejido prostático. Al entrar en contacto con el tejido corporal, el vapor se condensa rápidamente volviendo a estado líquido, liberando una gran cantidad de energía térmica latente (2,260 kJ/kg). Esta energía se dispersa de forma convectiva a través de los espacios intersticiales provocando necrosis celular coagulativa sin superar los límites de la cápsula anatómica."
  },
  {
    num: 1125,
    disciplina: "crecimiento_prostatico",
    pregunta: "¿Cuál de las siguientes condiciones anatómicas representa una contraindicación formal para el implante de grapas de levantamiento uretral prostático (UroLift) según sus criterios de aprobación de la FDA y guías clínicas?",
    opciones: {
      A: "Volumen prostático ecográfico de 45 cc con predominio de crecimiento de los lóbulos laterales prostáticos",
      B: "Presencia de un lóbulo medio protruyente intravesical obstructivo que genera efecto de válvula esférica",
      C: "Paciente que desea preservar rigurosamente la función eréctil y la eyaculación anterógrada fisiológica",
      D: "Uretra prostática con longitud mayor a 3 cm sin evidencia de calcificaciones capsulares densas"
    },
    respuesta_correcta: "B",
    justificacion: "El sistema de compresión UroLift está aprobado para próstatas menores de 80-100 cc con obstrucción lateral. La presencia de un lóbulo medio prostático obstructivo protruyente hacia el lumen vesical representa una contraindicación formal para el implante estándar, ya que las grapas laterales no pueden comprimir ni desobstruir el tejido del lóbulo medio que ocluye el orificio vesical interno."
  },
  {
    num: 1126,
    disciplina: "crecimiento_prostatico",
    pregunta: "Un paciente de 72 años con HPB sangrante y hematuria macroscópica recurrente no quirúrgica es tratado con finasterida oral. ¿Cuál es el mecanismo fisiopatológico por el cual los 5-ARI son eficaces para controlar la hematuria de origen prostático?",
    opciones: {
      A: "Aumentan la agregación plaquetaria sistémica al inhibir la prostaciclina en la microcirculación pelviana",
      B: "Disminuyen la expresión del factor de crecimiento endotelial vascular (VEGF) reduciendo la microvascularización",
      C: "Provocan vasoconstricción directa de las arterias capsulares prostáticas por estímulo alfa adrenérgico selectivo",
      D: "Forman una cubierta densa de fibrina intraluminal sobre el urotelio prostático similar al ácido tranexámico"
    },
    respuesta_correcta: "B",
    justificacion: "La dihidrotestosterona (DHT) estimula la producción local del factor de crecimiento endotelial vascular (VEGF) en el tejido prostático hiperplásico. La inhibición de la 5-alfa reductasa con finasterida o dutasterida reduce significativamente los niveles intraprostáticos de DHT y VEGF, disminuyendo la densidad microvascular subepitelial y frenando de manera notable los episodios de hematuria macroscópica recidivante."
  },
  {
    num: 1127,
    disciplina: "crecimiento_prostatico",
    pregunta: "Tras una enucleación prostática con láser de Holmio (HoLEP) en una glándula voluminosa de 130 gramos, ¿cuál es la complicación funcional posoperatoria temprana más común que suele ser autolimitada y resolverse en los primeros 1 a 3 meses?",
    opciones: {
      A: "Estenosis obliterante total de la uretra membranosa que requiere uretroplastia de urgencia inmediata",
      B: "Incontinencia urinaria de esfuerzo transitoria secundaria a estiramiento o neuropraxia esfinteriana",
      C: "Disfunción eréctil vasculogénica completa irreversible por lesión térmica de las bandeletas neurovasculares",
      D: "Incontinencia fecal severa por denervación motora refleja del esfínter anal durante la tracción del adenoma"
    },
    respuesta_correcta: "B",
    justificacion: "La incontinencia urinaria de esfuerzo transitoria ocurre en un 10-15% de los pacientes post-HoLEP en glándulas voluminosas, originada por el estiramiento mecánico transitorio del esfínter estriado durante la enucleación apical y la morcelación. En la inmensa mayoría de los casos (> 95%) es leve a moderada, autolimitada y se resuelve espontáneamente antes de los 3 meses con ejercicios de suelo pélvico."
  },
  {
    num: 1128,
    disciplina: "crecimiento_prostatico",
    pregunta: "En un paciente anciano de 86 años con retención urinaria recurrente por HPB, múltiples comorbilidades cardiovasculares graves (fracción de eyección 20%) y anticoagulación formal no suspendible que contraindica cualquier cirugía o anestesia, ¿cuál es la alternativa de drenaje urinario a largo plazo más adecuada?",
    opciones: {
      A: "Cistostomía suprapúbica por punción percutánea o cateterismo vesical intermitente asistido por cuidador",
      B: "Nefrostomía bilateral percutánea permanente conectada a bolsas colectoras dependientes en ambos flancos",
      C: "Resección transuretral prostática de urgencia en quirófano empleando anestesia local por infiltración",
      D: "Embolización arterial prostática de urgencia bajo anestesia general e hipotensión arterial controlada"
    },
    respuesta_correcta: "A",
    justificacion: "En pacientes con riesgo quirúrgico o anestésico prohibitivo y anticoagulación no suspendible que impide procedimientos invasivos de desobstrucción, las guías clínicas recomiendan el cateterismo vesical permanente (preferentemente cistostomía suprapúbica por su menor tasa de estenosis uretral y mayor confort) o el cateterismo limpio intermitente si el paciente o cuidador están capacitados."
  },
  {
    num: 1129,
    disciplina: "crecimiento_prostatico",
    pregunta: "¿En cuál de las siguientes situaciones clínicas está formalmente indicado realizar un estudio urodinámico completo de flujo-presión antes de decidir una cirugía desobstructiva prostática?",
    opciones: {
      A: "Varón de 65 años con Qmax de 8 ml/s, próstata de 60 cc, residuo de 50 ml y síntomas obstructivos típicos",
      B: "Varón con sospecha de hipoactividad o acontractilidad del detrusor por antecedente de evento vascular cerebral",
      C: "Paciente que presenta hematuria macroscópica terminal indolora y sedimento urinario con 15 eritrocitos por campo",
      D: "Varón de 50 años que solicita procedimiento quirúrgico ambulatorio y tiene un IPSS de 12 puntos basales"
    },
    respuesta_correcta: "B",
    justificacion: "El estudio de flujo-presión (urodinamia invasiva) no se requiere de rutina en la evaluación prequirúrgica estándar de HPB. Está formalmente indicado cuando hay discordancia clínica (ej. Qmax normal > 15 ml/s con síntomas severos), en pacientes con volumen miccional < 150 ml, residuo posmiccional masivo asintomático (> 300 ml), o cuando se sospecha disfunción neurogénica/hipoactividad del detrusor que condicionaría fracaso quirúrgico."
  },

  // =========================================================================
  // 3. UROLOGÍA PEDIÁTRICA (10 preguntas: 1130 - 1139)
  // =========================================================================
  {
    num: 1130,
    disciplina: "uropedia",
    pregunta: "En un lactante de 4 meses con diagnóstico prenatal de hidronefrosis unilateral izquierda que se mantiene asintomático, ¿cuál de los siguientes hallazgos en el renograma diurético con 99mTc-MAG3 constituye una indicación formal para realizar una pieloplastia desmembrada?",
    opciones: {
      A: "Función renal diferencial del riñón hidronefrótico conservada en 48% con caída de la curva tras furosemida",
      B: "Función renal diferencial menor al 40% o caída documentada mayor al 10% en renogramas diuréticos seriados",
      C: "Tiempo de tránsito parenquimatoso normal con tiempo medio de vaciamiento (T1/2) menor a 10 minutos",
      D: "Presencia de un sistema colector bífido incompleto sin evidencia de retardo en la fase de concentración cortical"
    },
    respuesta_correcta: "B",
    justificacion: "Las indicaciones quirúrgicas precisas para corrección de estenosis de la unión pieloureteral en pediatría incluyen: deterioro de la función renal diferencial (< 40%), caída progresiva > 10% de la función en estudios seriados, patrón obstructivo persistente con curva en meseta refractaria a furosemida (T1/2 > 20 min) asociado a hidronefrosis creciente o infecciones urinarias febriles recurrentes."
  },
  {
    num: 1131,
    disciplina: "uropedia",
    pregunta: "De acuerdo con las guías de la AUA y de la Sociedad Europea de Urología Pediátrica (ESPU), ¿cuál es el grupo de pacientes pediátricos con reflujo vesicoureteral (RVU) primario que tiene la indicación más sólida y con mayor nivel de evidencia para profilaxis antibiótica continua?",
    opciones: {
      A: "Niñas mayores de 6 años continentes que presentan RVU grado I y un único episodio de cistitis afebril",
      B: "Lactantes y niños menores de 2 años con RVU grados III a V que presentan antecedente de ITU febril",
      C: "Niños varones circuncidados de 5 años con RVU grado II que se encuentran completamente asintomáticos",
      D: "Adolescentes con micción disfuncional que presentan RVU unilateral transitorio durante el vaciamiento"
    },
    respuesta_correcta: "B",
    justificacion: "La profilaxis antibiótica continua (con trimetoprima o nitrofurantoína a dosis bajas nocturnas) está indicada con el mayor nivel de evidencia en lactantes y niños menores de 2 años con reflujo de alto grado (grados III-V), especialmente si ya han presentado una infección urinaria febril, debido al elevado riesgo de pielonefritis recurrente y desarrollo de cicatrices renales permanentes en este grupo etario."
  },
  {
    num: 1132,
    disciplina: "uropedia",
    pregunta: "Un recién nacido a término presenta hipospadias proximal severo perineo-escrotal y criptorquidia bilateral con testes no palpables en las bolsas escrotales. ¿Cuál es la sospecha diagnóstica prioritaria y el primer paso diagnóstico inmediato que debe realizarse antes de planear cualquier cirugía?",
    opciones: {
      A: "Programar laparoscopia exploradora de urgencia para descenso testicular bilateral en las primeras 24 horas",
      B: "Descartar hiperplasia suprarrenal congénita con cariotipo urgente, electrolitos séricos y 17-OH-progesterona",
      C: "Iniciar tratamiento hormonal con gonadotropina coriónica humana intramuscular a dosis altas durante un mes",
      D: "Realizar uretrocistoscopia bajo anestesia general para identificar la presencia del utrículo prostático"
    },
    respuesta_correcta: "B",
    justificacion: "La presencia de hipospadias asociado a testes no palpables (especialmente bilateral) debe considerarse una emergencia médica por sospecha de Trastorno del Desarrollo Sexual (DSD), primordialmente Hiperplasia Suprarrenal Congénita por deficiencia de 21-hidroxilasa en un feto genéticamente femenino (46,XX). Esta entidad puede debutar con crisis perdedora de sal (hiponatremia, hiperpotasemia, choque y muerte) en la segunda semana de vida si no se diagnostica y trata precozmente."
  },
  {
    num: 1133,
    disciplina: "uropedia",
    pregunta: "En un neonato con mielomeningocele lumbosacro operado al nacer, la evaluación urodinámica temprana demuestra una vejiga neurogénica con disinergia detrusor-esfínter y presión de fuga del detrusor (DLPP) de 55 cmH2O. ¿Cuál es el manejo urológico prioritario para proteger el tracto urinario superior?",
    opciones: {
      A: "Vigilancia expectantemente sin tratamiento hasta que el niño inicie el control voluntario de esfínteres a los 4 años",
      B: "Inicio inmediato de cateterismo limpio intermitente más anticolinérgicos orales para reducir presiones vesicales",
      C: "Derivación urinaria cutánea mediante vesicostomía abierta como único procedimiento resolutivo definitivo",
      D: "Colocación inmediata de un esfínter urinario artificial alrededor de la uretra membranosa en el periodo neonatal"
    },
    respuesta_correcta: "B",
    justificacion: "Una presión de fuga del detrusor (DLPP) superior a 40 cmH2O en niños con disrafismo espinal es un factor de riesgo mayor para daño renal parenquimatoso, reflujo masivo e hidronefrosis. El tratamiento estándar preventivo de inicio precoz es el cateterismo limpio intermitente (CLI) cada 3-4 horas combinado con antimuscarínicos (como oxibutinina) para optimizar la acomodación y mantener presiones vesicales en rangos seguros."
  },
  {
    num: 1134,
    disciplina: "uropedia",
    pregunta: "¿Cuál es la medida de protección inicial inmediata en la sala de partos para un recién nacido con extrofia vesical clásica antes de su traslado a la unidad de cuidados intensivos neonatales?",
    opciones: {
      A: "Colocar apósitos secos de gasa estéril comprimidos firmemente con cinta adhesiva sobre la mucosa expuesta",
      B: "Cubrir la placa vesical con una película plástica estéril no adherente humedecida con solución salina tibia",
      C: "Realizar cauterización química de los pólipos mucosos vesicales con nitrato de plata para prevenir sangrados",
      D: "Insertar una sonda vesical rígida a través de los meatos ureterales para drenar la orina continuamente"
    },
    respuesta_correcta: "B",
    justificacion: "En el recién nacido con extrofia vesical, la mucosa vesical expuesta debe protegerse de la desecación, el traumatismo y la adherencia a la ropa. Se debe cubrir de inmediato con una película plástica estéril transparente (como plástico tipo Saran-wrap o bolsa plástica estéril) humedecida con solución salina normal tibia sin presionar. El uso de gasas secas está contraindicado porque se adhieren a la mucosa y desgarran el epitelio al retirarlas."
  },
  {
    num: 1135,
    disciplina: "uropedia",
    pregunta: "Un lactante de 2 meses con duplicidad ureteral completa presenta sepsis urinaria grave asociada a un ureterocele obstructivo voluminoso del polo superior. Tras iniciar reanimación con líquidos y antibióticos endovenosos, ¿cuál es el procedimiento quirúrgico de descompresión urgente de elección?",
    opciones: {
      A: "Nefroureterectomía polar superior abierta de urgencia con resección completa del ureterocele pélvico",
      B: "Punción o incisión endoscópica transuretral del ureterocele con bisturí frío o electrocauterio bajo visión",
      C: "Reimplante ureteral bilateral con técnica de Cohen y remodelado ureteral externo en quirófano",
      D: "Colocación de un catéter suprapúbico guiado por ecografía dentro de la luz del ureterocele colapsado"
    },
    respuesta_correcta: "B",
    justificacion: "En el lactante séptico u obstruido con un ureterocele, el procedimiento de urgencia de mínima invasión es la punción o incisión endoscópica primaria (descompresión transuretral). Permite el drenaje inmediato de la orina infectada y el alivio de la uropatía obstructiva con mínima morbilidad, postergando cualquier reconstrucción o nefrectomía polar definitiva hasta que el paciente esté hemodinámicamente estable."
  },
  {
    num: 1136,
    disciplina: "uropedia",
    pregunta: "¿Cuáles son los tres componentes clínicos cardinales que integran la tríada diagnóstica clásica del Síndrome de Eagle-Barrett (Síndrome de Prune-Belly)?",
    opciones: {
      A: "Estenosis uretral anterior, agenesia renal unilateral y luxación congénita bilateral de cadera",
      B: "Hipoplasia de la musculatura abdominal, dilatación masiva del tracto urinario y criptorquidia bilateral",
      C: "Hipospadias perineal, hernia diafragmática congénita y quistes renales medulares bilaterales difusos",
      D: "Extrofia de cloaca, duplicación del pene e imperforación anal con fístula rectovesical asociada"
    },
    respuesta_correcta: "B",
    justificacion: "El síndrome de Prune-Belly (o síndrome de abdomen en ciruela pasa) se caracteriza por una tríada patognomónica que afecta casi exclusivamente a varones: 1) Deficiencia o hipoplasia de los músculos de la pared abdominal anterior; 2) Dilatación severa no obstructiva del tracto urinario (megavejiga, megauréteres e hidronefrosis); y 3) Criptorquidia bilateral intraabdominal por falta de descenso guiado."
  },
  {
    num: 1137,
    disciplina: "uropedia",
    pregunta: "En un lactante de 3 meses con diagnóstico prenatal de megauréter primario izquierdo asintomático, cuyo renograma MAG3 reporta función diferencial del riñón izquierdo de 47% y una ecografía muestra uréter retrovesical de 11 mm sin deterioro, ¿cuál es la conducta inicial recomendada?",
    opciones: {
      A: "Reimplante ureterovesical con modelado y remodelado ureteral por técnica de Politano-Leadbetter urgente",
      B: "Manejo conservador observacional con profilaxis antibiótica y seguimiento ecográfico seriado",
      C: "Ureterostomía cutánea izquierda en asa de descompresión para prevenir la elongación del uréter",
      D: "Dilatación endoscópica retrógrada con balón de alta presión de la unión vesicoureteral inmediata"
    },
    respuesta_correcta: "B",
    justificacion: "La gran mayoría (más del 80%) de los megauréteres obstructivos o refluyentes primarios no complicados en lactantes asintomáticos con función renal preservada ($> 40-45\\%$) presentan una resolución o mejoría espontánea durante los primeros 1 a 2 años de vida debido a la maduración de la unión uréterovesical. Se recomienda manejo conservador no quirúrgico con profilaxis antibiótica y vigilancia ecográfica estrecha."
  },
  {
    num: 1138,
    disciplina: "uropedia",
    pregunta: "Durante la exploración quirúrgica urgente por torsión testicular unilateral izquierda en un adolescente de 13 años con teste viable que es detorsionado y fijado, ¿cuál es la anomalía anatómica predisponente más frecuentemente encontrada y qué conducta obliga en el hemitesticulo contralateral?",
    opciones: {
      A: "Persistencia del conducto peritoneovaginal permeable; obliga a herniorrafia inguinal izquierda exclusivamente",
      B: "Deformidad en 'badajo de campana' por túnica vaginal alta; obliga a orquidopexia profiláctica contralateral",
      C: "Agenesia del ligamento de Cloquet; obliga a biopsia testicular contralateral para descartar displasia germinal",
      D: "Inversión anatómica epididimaria aislada; no requiere ninguna intervención sobre el hemitesticulo contralateral"
    },
    respuesta_correcta: "B",
    justificacion: "La causa anatómica de la torsión testicular intravaginal es la inserción anormalmente alta de la túnica vaginal en el cordón espermático, dejando al testículo y epidídimo libres para rotar sobre su eje vascular dentro del saco vaginal (deformidad en 'badajo de campana' o bell-clapper). Dado que esta anomalía es bilateral en más del 80% de los casos, la fijación orquidopexia contralateral es un paso obligatorio para prevenir torsión futura."
  },
  {
    num: 1139,
    disciplina: "uropedia",
    pregunta: "En un niño de 3 años diagnosticado de rabdomiosarcoma prostático/vesical localizado sin metástasis, ¿cuál es el pilar terapéutico de primera línea orientado a la preservación de órganos recomendado por los protocolos internacionales (Intergroup Rhabdomyosarcoma Study Group - IRSG)?",
    opciones: {
      A: "Exenteración pélvica total inmediata de entrada con cistoprostatectomía radical y derivación incontinente",
      B: "Quimioterapia neoadyuvante multiagente (vincristina, dactinomicina y ciclofosfamida - esquema VAC)",
      C: "Radioterapia externa pélvica exclusiva como monoterapia curativa sin administración de agentes citotóxicos",
      D: "Cistectomía parcial con preservación prostática y braquiterapia con semillas de yodo-125 de alta tasa"
    },
    respuesta_correcta: "B",
    justificacion: "El enfoque actual del rabdomiosarcoma genitourinario pediátrico prioriza la preservación vesicoprostática. La quimioterapia de inducción con el régimen VAC (Vincristina, Actinomicina D/Dactinomicina y Ciclofosfamida) induce una reducción tumoral drástica en más del 70-80% de los casos, permitiendo cirugías conservadoras secundarias de rescate o radioterapia focalizada sin necesidad de cistectomías mutilantes de entrada."
  }
];
