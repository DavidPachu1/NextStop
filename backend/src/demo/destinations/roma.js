export const ROMA = {
  alojamiento: {
    zonas: [
      { nombre: "Centro Storico", descripcion: "A pasos del Panteón, la Fontana di Trevi y el Campo de' Fiori. El corazón de Roma antigua.", nivel_precio: "alto", precio_rango: "130-250€/noche" },
      { nombre: "Trastevere", descripcion: "El barrio más auténtico de Roma. Adoquines, hiedra en las paredes y trattorias de toda la vida.", nivel_precio: "medio", precio_rango: "90-160€/noche" },
      { nombre: "Prati (junto al Vaticano)", descripcion: "Barrio burgués y tranquilo junto al Vaticano. Sin turistas masivos, muy bien comunicado.", nivel_precio: "medio", precio_rango: "85-150€/noche" },
      { nombre: "Testaccio", descripcion: "El barrio obrero y gastronómico de Roma. Mercado cubierto, restaurantes auténticos, sin turistas.", nivel_precio: "económico", precio_rango: "60-110€/noche" },
    ],
    opciones: [
      { nombre: "Hotel Campo de' Fiori", tipo: "boutique", zona: "Centro Storico", precio_noche: "160-220€", descripcion: "Hotel con terraza en lo alto del edificio con vistas únicas al Campo de' Fiori y los tejados de Roma.", puntos_fuertes: ["Terraza panorámica", "Ubicación inmejorable", "Desayuno italiano incluido"] },
      { nombre: "Residenza In Farnese", tipo: "boutique", zona: "Campo de' Fiori", precio_noche: "130-180€", descripcion: "Palacete del siglo XV reconvertido. Techos altos, frescos originales y ambiente de Roma antigua.", puntos_fuertes: ["Edificio histórico auténtico", "Silencioso y elegante", "Desayuno romano"] },
      { nombre: "Hostel Alessandro Palace", tipo: "hostal", zona: "Termini", precio_noche: "25-55€", descripcion: "El mejor hostel de Roma según los rankings. Fiestas organizadas, cocina compartida y tours nocturnos.", puntos_fuertes: ["Tours gratuitos", "Gran ambiente social", "Metro a 2 min"] },
      { nombre: "Apartamento en Trastevere", tipo: "apartamento", zona: "Trastevere", precio_noche: "95-140€", descripcion: "Vivir como un romano en el barrio más bonito. Cocina propia y mercado a 5 minutos.", puntos_fuertes: ["Experiencia local auténtica", "Cocina equipada", "Ambiente único"] },
    ],
    recomendacion: { nombre: "Apartamento en Trastevere", motivo: "Vivir en Trastevere es la experiencia romana más auténtica. A 20 min andando del Coliseo y con trattorias en cada esquina.", precio_total_estancia: "~380€ para 4 noches" },
  },
  restaurantes: {
    destacados: [
      { nombre: "Da Enzo al 29", tipo: "trattoria", zona: "Trastevere", precio_persona: "25-40€", especialidad: "Cacio e pepe y coda alla vaccinara", cuando_ir: "cena", por_que: "La trattoria más auténtica de Roma. Los propios romanos hacen cola aquí. Llega antes de las 19:30h." },
      { nombre: "Supplì Roma", tipo: "street food", zona: "Trastevere", precio_persona: "4-8€", especialidad: "Supplì (croqueta de arroz con ragú)", cuando_ir: "almuerzo", por_que: "El mejor supplì de Roma. Crujiente por fuera, fundente por dentro. Cola constante pero rápida." },
      { nombre: "Pizzarium Bonci", tipo: "pizzería", zona: "Prati", precio_persona: "8-15€", especialidad: "Pizza al taglio con ingredientes de mercado", cuando_ir: "almuerzo", por_que: "Gabriele Bonci es el Papa de la pizza romana. La corteza crujiente más perfecta que probarás en tu vida." },
      { nombre: "Gelateria dei Gracchi", tipo: "gelatería", zona: "Prati", precio_persona: "3-6€", especialidad: "Pistachio de Bronte y stracciatella", cuando_ir: "cualquiera", por_que: "El mejor gelato de Roma según todos los rankings. Los sabores de temporada cambian cada semana." },
      { nombre: "Osteria Barberini", tipo: "osteria", zona: "Centro Storico", precio_persona: "30-45€", especialidad: "Saltimbocca alla romana y carciofi alla giudia", cuando_ir: "cena", por_que: "La mejor interpretación de la cocina romana clásica. Reserva obligatoria." },
    ],
    donde_no_ir: "Evita los restaurantes alrededor del Coliseo, el Vaticano y la Fontana di Trevi — son trampas turísticas con pasta mediocre a precios desorbitados. Si ves un menú turístico con foto, da media vuelta.",
  },
  tips: {
    transporte: [
      { titulo: "48h o 72h de transporte público", detalle: "7€ (48h) o 12€ (72h) para metro, bus y tranvía ilimitado. Roma tiene solo 2 líneas de metro pero los buses llegan a todo." },
      { titulo: "Roma es para caminar", detalle: "El centro histórico tiene 3 km de diámetro. La mayoría de las atracciones están a menos de 30 min andando entre sí." },
      { titulo: "Aeropuerto Fiumicino al centro", detalle: "Leonardo Express: 14€, 32 min hasta la Stazione Termini. Bus Terravision: 6€, 1 hora. El tren es más cómodo con maletas." },
      { titulo: "No alquiles moto si no tienes experiencia", detalle: "El tráfico de Roma es caótico incluso para los romanos. A pie y en metro es más seguro y rápido dentro del centro." },
    ],
    costumbres: [
      { titulo: "El café romano tiene sus reglas", detalle: "Cappuccino solo en el desayuno (antes de las 11h). Espresso de pie en el bar cuesta 1€; sentado puede costar el doble." },
      { titulo: "Agua potable gratis en las nasoni", detalle: "Roma tiene 2.500 fuentes de agua potable en la calle (llamadas 'nasoni'). Lleva una botella rellenable y ahorra." },
      { titulo: "Código de vestimenta en las basílicas", detalle: "En el Vaticano, San Pedro y San Juan de Letrán: hombros y rodillas cubiertos obligatorio. Llevan pañuelos para tapar." },
      { titulo: "La pausa del mediodía es real", detalle: "Muchas tiendas e iglesias cierran de 13h a 16h. Planifica las visitas por la mañana (abre a las 9h) o tarde (desde las 16h)." },
    ],
    mejor_epoca: "Primavera (marzo-mayo) es perfecta: flores en los parques, clima ideal y menos turistas que en verano. Otoño (sept-oct) también excelente. Evita julio y agosto — calor sofocante y masificación total. Navidad tiene un ambiente especial pero hace frío.",
    frases_utiles: [
      { es: "Buenos días", local: "Buongiorno", pronunciacion: "Buo-njór-no" },
      { es: "Gracias", local: "Grazie", pronunciacion: "Grá-tsie" },
      { es: "¿La cuenta, por favor?", local: "Il conto, per favore", pronunciacion: "Il cón-to, per fa-vó-re" },
      { es: "¿Habla español?", local: "Parla spagnolo?", pronunciacion: "Pár-la es-pan-yó-lo?" },
      { es: "¡Salud!", local: "Salute!", pronunciacion: "Sa-lú-te" },
    ],
    emergencias: "112 (emergencias general) · 113 (policía) · 118 (ambulancias) · Ospedale Fatebenefratelli: Isla Tiberina, centro histórico",
    apps_recomendadas: ["Muoversi a Roma: buses y metro en tiempo real", "ATAC: transporte oficial de Roma", "TheFork: reservas con descuentos", "Google Maps: funciona perfectamente", "Vatican Museums App: reserva de entradas"],
  },
  equipaje: {
    documentos: [
      "DNI o Pasaporte — obligatorio para alojamiento, Museos Vaticanos y Galería Borghese",
      "Tarjeta sanitaria europea (TSEE) — cobertura médica en Italia",
      "Reservas de Museos Vaticanos, Coliseo y Galería Borghese descargadas offline — se agotan semanas antes",
    ],
    ropa: [
      { categoria: "Día a día", items: ["3-4 camisetas o tops", "2 pantalones ligeros o vaqueros", "1 cárdigan o chaqueta ligera", "Ropa interior (1 por día + 1 extra)"] },
      { categoria: "Para basílicas y el Vaticano", items: ["Pañuelo o chal grande — OBLIGATORIO para cubrir hombros y rodillas en San Pedro y el Vaticano", "Pantalón largo o falda que tape rodillas"] },
      { categoria: "Calzado", items: ["Zapatillas muy cómodas — Roma tiene adoquines por todas partes", "Nada de tacones en el centro histórico (los adoquines son traidores)"] },
    ],
    tecnologia: ["Cargador europeo tipo C/F", "Power bank — días intensos de turismo", "Auriculares"],
    salud_higiene: ["Protector solar", "Ibuprofeno y paracetamol", "Tiritas (los adoquines desgastan los pies)", "Medicación con receta"],
    esenciales: [
      "Botella de agua reutilizable — Roma tiene nasoni (fuentes de agua potable) por toda la ciudad, agua gratis y buena",
      "Efectivo en euros (50€ mínimo) — muchas trattorias tradicionales no aceptan tarjeta",
      "Reservas de entradas ya hechas antes de salir — el Coliseo y el Vaticano se agotan días antes",
    ],
    consejo_maleta: "Para 3-5 días en Roma, mochila de cabina suficiente. Ojo: los adoquines del centro son muy duros para las ruedas de las maletas. Si llevas maleta con ruedas, puede ser incómodo en Trastevere y el centro histórico.",
  },
  itinerario: [
    {
      dia: 1, titulo: "La Roma eterna en un día",
      manana: {
        actividades: [
          { nombre: "Café romano en el bar de barrio", descripcion: "Espresso de pie en el mostrador. Esta es la forma correcta de empezar el día en Roma. Pide también un cornetto (croissant italiano).", duracion: "20 min", precio: "1.50-3€", emoji: "☕" },
          { nombre: "Coliseo y Foro Romano", descripcion: "El símbolo de Roma. Reserva online para saltar la cola. El Foro Romano y el Palatino están incluidos en el mismo ticket.", duracion: "3 horas", precio: "18€ (incluye Foro y Palatino)", emoji: "🏛️" },
        ],
        consejo: "Reserva el Coliseo con al menos una semana de antelación en temporada alta — las colas sin reserva son de 2-3 horas.",
      },
      tarde: {
        actividades: [
          { nombre: "Círco Massimo y Aventino", descripcion: "El hipódromo más grande del Imperio Romano. Desde el Aventino, la vista del Vaticano a través del ojo de la cerradura de los Caballeros de Malta es una maravilla secreta.", duracion: "1.5 horas", precio: "Gratis", emoji: "🗺️" },
          { nombre: "Trastevere a pie", descripcion: "Calles adoquinadas, hiedra en los muros y el olor a pomodoro de las trattorias. El barrio más fotogénico de Roma.", duracion: "1.5 horas", precio: "Gratis", emoji: "🌿" },
        ],
        consejo: "La basílica de Santa María in Trastevere tiene los mosaicos medievales más bonitos de Roma — y la entrada es gratuita.",
      },
      noche: { actividades: [{ nombre: "Aperitivo en Campo de' Fiori", descripcion: "El aperol spritz más famoso de Roma en la plaza más animada del centro histórico. Los bares sacan mesas a la plaza al atardecer.", duracion: "1.5 horas", precio: "8-14€", emoji: "🍊" }], consejo: "Campo de' Fiori se anima a partir de las 19h. Llega antes para conseguir sitio al aire libre.", },
      coste_estimado: 65,
    },
    {
      dia: 2, titulo: "El Vaticano y la dolce vita",
      manana: {
        actividades: [
          { nombre: "Museos Vaticanos y Capilla Sixtina", descripcion: "La mayor colección de arte del mundo. El techo de Miguel Ángel te dejará sin palabras. Reserva online es obligatorio.", duracion: "3 horas", precio: "20€ (online) / 17€ + 4€ en taquilla", emoji: "🎨" },
          { nombre: "Basílica de San Pedro", descripcion: "La iglesia más grande del mundo. La cúpula de Miguel Ángel (gratuita subir a pie o 8€ en ascensor) tiene las mejores vistas de Roma.", duracion: "1.5 horas", precio: "Gratis / 8€ cúpula en ascensor", emoji: "⛪" },
        ],
        consejo: "Los Museos Vaticanos abren los últimos domingos de mes GRATIS — pero la cola puede ser de 4+ horas. Los días normales, reserva online.",
      },
      tarde: {
        actividades: [
          { nombre: "Fontana di Trevi", descripcion: "Tira tu moneda y pide tu deseo. Llega antes de las 8h de la mañana o después de las 22h para verla sin multitudes.", duracion: "30 min", precio: "Gratis", emoji: "⛲" },
          { nombre: "Panteón de Agripa", descripcion: "El edificio más perfectamente conservado de la Roma antigua, con 2.000 años de historia. El óculo del techo es una maravilla de ingeniería.", duracion: "1 hora", precio: "5€", emoji: "🏛️" },
          { nombre: "Piazza Navona", descripcion: "La plaza barroca más elegante de Roma. Músicos callejeros, artistas y la fuente de los cuatro ríos de Bernini.", duracion: "45 min", precio: "Gratis", emoji: "🎭" },
        ],
        consejo: "La Fontana di Trevi está literalmente a 5 min del Panteón. Hazlos juntos en una misma ruta.",
      },
      noche: { actividades: [{ nombre: "Paseo nocturno por el centro", descripcion: "Roma de noche es mágica. Los monumentos iluminados y las calles menos concurridas hacen de esto una experiencia única.", duracion: "2 horas", precio: "Gratis", emoji: "🌙" }], consejo: "Roma no cierra: las heladería, los bares y las pizzerías al taglio abren hasta la madrugada.", },
      coste_estimado: 80,
    },
    {
      dia: 3, titulo: "Mercados, gelato y adiós Roma",
      manana: {
        actividades: [
          { nombre: "Mercato di Testaccio", descripcion: "El mercado cubierto más auténtico de Roma. Los romanos compran aquí desde hace generaciones. Desayuna en los puestos de dentro.", duracion: "1.5 horas", precio: "5-12€ desayuno", emoji: "🛒" },
          { nombre: "Aventino y Roseto Comunale", descripcion: "El jardín de rosas de Roma está abierto en primavera. Las vistas del Tíber y el Coliseo son impresionantes.", duracion: "1 hora", precio: "Gratis", emoji: "🌹" },
        ],
        consejo: "El Roseto Romano (jardín de rosas) solo abre de abril a junio. Si coincides, no te lo pierdas.",
      },
      tarde: {
        actividades: [
          { nombre: "Galería Borghese (reserva obligatoria)", descripcion: "La colección de escultura barroca más impresionante del mundo: Bernini en estado puro. Solo 360 personas por turno de 2 horas.", duracion: "2 horas", precio: "15€ + 2€ reserva", emoji: "🗿" },
          { nombre: "Villa Borghese", descripcion: "El Central Park de Roma. Barca en el lago, bicicletas de alquiler y vistas panorámicas desde la terraza del Pincio.", duracion: "1.5 horas", precio: "Gratis (barca 3€/30 min)", emoji: "🌳" },
        ],
        consejo: "La Galería Borghese requiere reserva con semanas de antelación — literalmente se agota. Hazlo antes de salir de casa.",
      },
      noche: { actividades: [{ nombre: "Última cena en Trastevere", descripcion: "Cierra el círculo donde empezaste. Una trattoria de Trastevere, vino de la casa y la pasta más honesta de Roma.", duracion: "2 horas", precio: "25-40€", emoji: "🍷" }], consejo: "Pide el vino de la casa (vino della casa) — en las trattorias romanas suele ser excelente y muy barato.", },
      coste_estimado: 75,
    },
  ],
};
