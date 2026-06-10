export const IBIZA = {
  alojamiento: {
    zonas: [
      { nombre: "Playa d'en Bossa", descripcion: "La franja de playa más animada de la isla, con beach clubs icónicos y el mar a un paso del alojamiento.", nivel_precio: "alto", precio_rango: "120-220€/noche" },
      { nombre: "Santa Eulalia del Río", descripcion: "Pueblo costero tranquilo con paseo marítimo, puerto deportivo y playas familiares. La cara más relajada de Ibiza.", nivel_precio: "medio", precio_rango: "80-140€/noche" },
      { nombre: "Dalt Vila (Ibiza ciudad)", descripcion: "El casco antiguo amurallado, Patrimonio de la Humanidad. Calles empedradas, vistas al puerto y restaurantes con encanto.", nivel_precio: "alto", precio_rango: "130-240€/noche" },
      { nombre: "San Antonio (Sant Antoni)", descripcion: "Famosa por sus puestas de sol sobre el mar y su ambiente joven. Calas tranquilas a pocos minutos en coche.", nivel_precio: "medio", precio_rango: "70-130€/noche" },
    ],
    opciones: [
      { nombre: "Nobu Hotel Ibiza Bay", tipo: "resort", zona: "Talamanca", precio_noche: "280-420€", descripcion: "Resort de lujo frente al mar con piscinas infinitas, spa y vistas a Dalt Vila desde la bahía de Talamanca.", puntos_fuertes: ["Playa privada", "Spa y piscinas", "Vistas a la bahía"] },
      { nombre: "Hotel Mirador de Dalt Vila", tipo: "boutique", zona: "Dalt Vila", precio_noche: "180-260€", descripcion: "Antiguo palacete del siglo XVI dentro de la muralla, con terraza panorámica sobre el puerto y la bahía.", puntos_fuertes: ["Edificio histórico", "Terraza con vistas al puerto", "Desayuno mediterráneo"] },
      { nombre: "Ibiza Rocks House", tipo: "hotel", zona: "Playa d'en Bossa", precio_noche: "90-150€", descripcion: "Hotel con piscina y ambiente desenfadado a un paso de la playa, ideal para combinar descanso y vida social.", puntos_fuertes: ["A pie de playa", "Piscina con DJ los fines de semana", "Ambiente joven"] },
      { nombre: "Apartamentos en Santa Eulalia", tipo: "apartamento", zona: "Santa Eulalia", precio_noche: "70-110€", descripcion: "Apartamentos frente al paseo marítimo, perfectos para desconectar con cocina propia y playas tranquilas cerca.", puntos_fuertes: ["Frente al mar", "Cocina equipada", "Ambiente familiar y tranquilo"] },
    ],
    recomendacion: { nombre: "Ibiza Rocks House", motivo: "El equilibrio perfecto entre playa, ambiente y precio: a pie de Playa d'en Bossa, con piscina propia y a 10 minutos en taxi acuático de Dalt Vila.", precio_total_estancia: "~520€ para 4 noches" },
  },
  restaurantes: {
    destacados: [
      { nombre: "Beachouse Ibiza", tipo: "beach club", zona: "Cala Comte", precio_persona: "30-50€", especialidad: "Pescado fresco a la brasa y arroces", cuando_ir: "comida (atardecer incluido)", por_que: "Comer con los pies en la arena viendo el atardecer sobre Es Vedrà es una de las postales más icónicas de la isla." },
      { nombre: "La Paloma", tipo: "restaurante rural", zona: "San Lorenzo (interior)", precio_persona: "25-40€", especialidad: "Pasta fresca y verduras de su propio jardín", cuando_ir: "comida", por_que: "El secreto mejor guardado del interior de la isla — la Ibiza más auténtica, lejos de la costa." },
      { nombre: "Sa Capella", tipo: "cocina ibicenca", zona: "Sant Rafel", precio_persona: "55-80€", especialidad: "Cordero al horno y cocina ibicenca de autor", cuando_ir: "cena", por_que: "Cenar dentro de una capilla del siglo XVI es de esas experiencias que solo Ibiza puede ofrecer." },
      { nombre: "Es Boldado", tipo: "chiringuito", zona: "Cala d'Hort", precio_persona: "20-35€", especialidad: "Bocadillo de calamar y sardinas a la brasa", cuando_ir: "comida", por_que: "La mejor relación calidad-vistas-precio de la costa oeste. Sin pretensiones, solo buen producto y un paisaje de otro mundo." },
      { nombre: "Mercado Viejo de Ibiza", tipo: "mercado", zona: "Dalt Vila", precio_persona: "10-20€", especialidad: "Embutidos ibicencos, quesos y vino payés", cuando_ir: "almuerzo", por_que: "Para probar producto local auténtico —sobrasada ibicenca y flaó— sin pagar precios de zona turística." },
    ],
    donde_no_ir: "Evita los restaurantes con menú fotografiado y carta en seis idiomas en el paseo de Playa d'en Bossa y San Antonio — precios de capricho y producto congelado. Aléjate dos calles del paseo y la diferencia es notable.",
  },
  tips: {
    transporte: [
      { titulo: "Alquila un coche o moto", detalle: "La isla es pequeña (45 km de largo) pero las mejores calas están alejadas del transporte público. Un coche de alquiler ronda los 35-50€/día en temporada." },
      { titulo: "Bus interurbano (TEI)", detalle: "Conecta Ibiza ciudad con San Antonio, Santa Eulalia y las playas principales por 1.50-3.50€. Frecuencias bajas fuera de temporada alta." },
      { titulo: "Taxi acuático y barcos a Formentera", detalle: "El taxi acuático conecta Ibiza ciudad con Talamanca y Playa d'en Bossa por 4-6€. El ferry a Formentera sale del puerto (25 min, ~30€ ida y vuelta)." },
      { titulo: "Aeropuerto al centro", detalle: "Bus L10: 3.50€, 20 min hasta Ibiza ciudad. Taxi: 15-20€. El aeropuerto está a solo 7 km de la capital." },
    ],
    costumbres: [
      { titulo: "El ritual del atardecer", detalle: "Ver la puesta de sol —en Café del Mar, Es Vedrà o cualquier cala oeste— es casi sagrado en Ibiza. Llega con tiempo, los mejores sitios se llenan." },
      { titulo: "Horarios de verano", detalle: "La isla vive de noche: cenas desde las 21h, fiesta hasta el amanecer. Muchos comercios abren tarde y cierran a media tarde para la siesta." },
      { titulo: "Naturismo y top-less", detalle: "Es habitual y aceptado en muchas calas (Aigües Blanques, Es Cavallet). Respeta las zonas señalizadas si prefieres bañador." },
      { titulo: "Ibiza más allá de la fiesta", detalle: "El interior —Sant Joan, Sant Mateu— conserva la Ibiza rural y tradicional: mercadillos, fincas agroturísticas y paisajes de otra época." },
    ],
    mejor_epoca: "Junio y septiembre son los meses perfectos: clima cálido, mar templado y bastante menos masificación y precio que en julio-agosto. Mayo y octubre ya permiten disfrutar de playa con buen tiempo y la isla mucho más tranquila.",
    frases_utiles: [
      { es: "Buenos días", local: "Bon dia", pronunciacion: "Bon dí-a" },
      { es: "Gracias", local: "Gràcies", pronunciacion: "Grá-si-es" },
      { es: "¿La cuenta, por favor?", local: "El compte, per favor", pronunciacion: "El cóm-te, per fa-vór" },
      { es: "¿Dónde está la playa?", local: "On és la platja?", pronunciacion: "On és la plát-ya" },
      { es: "¡Salud!", local: "Salut!", pronunciacion: "Sa-lút" },
    ],
    emergencias: "112 (emergencias general) · 091 (Policía Nacional) · 062 (Guardia Civil) · Hospital Can Misses: Ibiza ciudad",
    apps_recomendadas: ["Cala Finder: mapa de calas y accesos", "TEI Bus: horarios del bus interurbano", "Windy: previsión de viento y mar para planificar playa", "TheFork: reservas de restaurante con descuentos", "Booking / Airbnb: alojamiento en temporada alta"],
  },
  equipaje: {
    documentos: [
      "DNI o Pasaporte — obligatorio para alojamiento y vuelo",
      "Tarjeta sanitaria europea (TSEE) — hospitales en la isla",
      "Confirmaciones de hotel y vuelo descargadas offline — el wifi en calas remotas no existe",
    ],
    ropa: [
      { categoria: "Playa y día", items: ["2-3 bañadores o bikinis (uno siempre estará mojado)", "Pareo o túnica de playa", "3-4 camisetas o tops frescos y ligeros", "1-2 shorts o pantalones ligeros"] },
      { categoria: "Noche y beach clubs", items: ["2-3 looks de noche — Ibiza exige ponerse guap@", "Vestido o camisa de fiesta", "1 look más elegante para una cena especial"] },
      { categoria: "Calzado", items: ["Sandalias o chanclas para playa y día", "Zapatillas cómodas para caminar por Dalt Vila", "Calzado de noche (no tacones muy altos si vas a calas o chiringuitos)"] },
    ],
    tecnologia: ["Cargador europeo tipo C/F", "Power bank resistente al calor", "Altavoz bluetooth portátil resistente al agua para la playa"],
    salud_higiene: ["Protector solar 50+ — el sol de Ibiza en verano es muy intenso", "Aftersun o hidratante corporal", "Repelente de mosquitos (noches en el interior de la isla)", "Ibuprofeno y paracetamol", "Medicación habitual"],
    esenciales: [
      "Protector solar — lleva más del que crees necesitar, se gasta muy rápido en playa todo el día",
      "Tarjeta bancaria sin comisiones de cambio — Ibiza es caro y pagarás con tarjeta casi en todo",
      "Efectivo (50€) para calas remotas, parkings y algunos chiringuitos sin datáfono",
      "Reservas de acceso a discotecas hechas antes de llegar — entrada + consumición mínima",
    ],
    consejo_maleta: "Para Ibiza, una mochila o maleta de cabina va perfecta. Añade una mochila pequeña de playa (20L) para llevar a las calas — toalla, protector, agua y el móvil. Así no arrastras la maleta grande a cada playa.",
  },
  itinerario: [
    {
      dia: 1, titulo: "Bienvenida ibicenca: Dalt Vila y primer atardecer",
      manana: {
        actividades: [
          { nombre: "Paseo por Dalt Vila", descripcion: "El casco antiguo amurallado, Patrimonio de la Humanidad. Calles empedradas, murallas renacentistas y vistas al puerto desde lo alto.", duracion: "2 horas", precio: "Gratis (catedral 4€)", emoji: "🏛️" },
          { nombre: "Mercado Viejo y producto local", descripcion: "Prueba la sobrasada ibicenca, los quesos payeses y el vino de la isla en el mercado tradicional de la ciudad.", duracion: "1 hora", precio: "10-15€", emoji: "🧀" },
        ],
        consejo: "Sube a Dalt Vila a media mañana, antes de que apriete el calor — las cuestas empedradas se disfrutan mucho más con temperaturas suaves.",
      },
      tarde: {
        actividades: [
          { nombre: "Tarde en Talamanca o Playa d'en Bossa", descripcion: "Tu primera tarde de playa: arena fina, hamacas y agua turquesa. Elige Talamanca si prefieres tranquilidad o Playa d'en Bossa si quieres ambiente.", duracion: "3 horas", precio: "Gratis (hamacas 15-25€)", emoji: "🏖️" },
        ],
        consejo: "Lleva agua y protector solar — el sol del Mediterráneo en Ibiza pega fuerte incluso a media tarde.",
      },
      noche: {
        actividades: [
          { nombre: "Atardecer en Café del Mar", descripcion: "El templo original del 'sunset' ibicenco. Música ambient, cócteles y un atardecer sobre el mar que hizo famosa a la isla.", duracion: "1.5 horas", precio: "Consumir desde 12€", emoji: "🌅" },
        ],
        restaurante: { nombre: "Mercado Viejo de Ibiza", tipo: "mercado", zona: "Dalt Vila", precio_persona: "10-20€", especialidad: "Embutidos ibicencos y vino payés" },
        consejo: "Llega a Café del Mar al menos 30 minutos antes de la puesta de sol — las mejores mesas en primera línea se ocupan rápido.",
      },
      coste_estimado: 75,
    },
    {
      dia: 2, titulo: "Calas de ensueño y la magia de Es Vedrà",
      manana: {
        actividades: [
          { nombre: "Cala Comte", descripcion: "Una de las calas más fotografiadas del Mediterráneo: agua turquesa, arena blanca y vistas a los islotes de Comte.", duracion: "3 horas", precio: "Gratis", emoji: "🏝️" },
        ],
        consejo: "Llega antes de las 10:30h — Cala Comte se llena rápido en temporada alta y el aparcamiento es limitado.",
      },
      tarde: {
        actividades: [
          { nombre: "Cala d'Hort y vistas a Es Vedrà", descripcion: "El islote más mítico y misterioso de Ibiza, rodeado de leyendas. Las vistas desde esta cala son sencillamente hipnóticas.", duracion: "2.5 horas", precio: "Gratis", emoji: "🗿" },
          { nombre: "Snorkel en aguas cristalinas", descripcion: "Las calas de la costa oeste tienen algunas de las aguas más transparentes de la isla. Alquila equipo de snorkel por unos pocos euros.", duracion: "1 hora", precio: "5-10€ (alquiler)", emoji: "🤿" },
        ],
        consejo: "Es Vedrà se ve espectacular tanto de día como al atardecer — si puedes, combina ambos en distintos días para verlo con luces diferentes.",
      },
      noche: {
        actividades: [
          { nombre: "Cena con los pies en la arena", descripcion: "Cierra el día como empezó: frente al mar, con buen pescado y la brisa del Mediterráneo.", duracion: "2 horas", precio: "30-50€", emoji: "🍷" },
        ],
        restaurante: { nombre: "Es Boldado", tipo: "chiringuito", zona: "Cala d'Hort", precio_persona: "20-35€", especialidad: "Bocadillo de calamar y sardinas a la brasa" },
        consejo: "Reserva mesa en Es Boldado con antelación si quieres cenar viendo la silueta de Es Vedrà recortada contra el atardecer.",
      },
      coste_estimado: 90,
    },
    {
      dia: 3, titulo: "Mercadillo hippy, Formentera y despedida festiva",
      manana: {
        actividades: [
          { nombre: "Mercadillo de Las Dalias", descripcion: "El mercadillo hippy más famoso de Ibiza (sábados y algunas noches de verano). Artesanía, moda boho y el espíritu más auténtico de la isla de los 60.", duracion: "2 horas", precio: "Gratis (compras opcionales)", emoji: "🌼" },
          { nombre: "Excursión en barco a Formentera", descripcion: "25 minutos en ferry hasta playas de aguas turquesas comparables al Caribe — Ses Illetes es de las mejores playas de Europa.", duracion: "4 horas", precio: "30-40€ (ferry ida y vuelta)", emoji: "⛴️" },
        ],
        consejo: "Si vas a Formentera, alquila una bici o un patinete en el puerto — es la forma más fácil y bonita de moverse por la isla.",
      },
      tarde: {
        actividades: [
          { nombre: "Última tarde de playa en Santa Eulalia", descripcion: "Un cierre tranquilo: paseo marítimo, terrazas frente al mar y un baño relajado antes de despedirte de la isla.", duracion: "2.5 horas", precio: "Gratis", emoji: "🌊" },
        ],
        consejo: "Santa Eulalia es perfecta para una despedida sin prisas — mucho más tranquila que Playa d'en Bossa o San Antonio.",
      },
      noche: {
        actividades: [
          { nombre: "Beach club y música en directo", descripcion: "Despídete de Ibiza con su seña de identidad: un beach club con buena música, cócteles y el ambiente único de la isla blanca.", duracion: "3 horas", precio: "Entrada + consumición desde 25€", emoji: "🎧" },
        ],
        consejo: "No hace falta entrar en las grandes discotecas para vivir la fiesta ibicenca — muchos beach clubs ofrecen el mismo ambiente con entrada gratuita o más barata.",
      },
      coste_estimado: 100,
    },
  ],
};
