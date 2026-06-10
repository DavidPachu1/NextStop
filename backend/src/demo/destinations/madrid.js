export const MADRID = {
  alojamiento: {
    zonas: [
      { nombre: "Malasaña", descripcion: "El barrio hipster y bohemio de Madrid. Cafés de especialidad, tiendas vintage y el mejor ambiente nocturno alternativo.", nivel_precio: "medio", precio_rango: "70-120€/noche" },
      { nombre: "La Latina", descripcion: "El barrio más castizo de Madrid, cuna del tapeo dominical y el Rastro. Calles empedradas y tabernas centenarias.", nivel_precio: "medio", precio_rango: "75-130€/noche" },
      { nombre: "Salamanca", descripcion: "El barrio elegante por excelencia. Boutiques de lujo, restaurantes con estrella y calles señoriales.", nivel_precio: "alto", precio_rango: "120-220€/noche" },
      { nombre: "Chueca", descripcion: "El corazón LGTBI+ de Madrid y uno de los barrios más vibrantes. Terrazas, diseño y fiesta hasta el amanecer.", nivel_precio: "medio", precio_rango: "80-140€/noche" },
    ],
    opciones: [
      { nombre: "Hotel Único Madrid", tipo: "boutique", zona: "Salamanca", precio_noche: "210-280€", descripcion: "Palacete del siglo XIX reconvertido en hotel de lujo con jardín y restaurante con estrella Michelin.", puntos_fuertes: ["Jardín secreto", "Restaurante galardonado", "Servicio impecable"] },
      { nombre: "Posada del León de Oro", tipo: "boutique", zona: "La Latina", precio_noche: "120-170€", descripcion: "Antigua posada del siglo XIX restaurada, con patio interior y diseño que combina lo histórico y lo contemporáneo.", puntos_fuertes: ["Patio interior con encanto", "En el corazón del tapeo", "Desayuno de mercado"] },
      { nombre: "The Hat Madrid", tipo: "hostal", zona: "La Latina", precio_noche: "30-60€", descripcion: "El hostel con mejor terraza de Madrid, vistas al Mercado de San Miguel y ambiente social todas las noches.", puntos_fuertes: ["Rooftop con vistas", "Gran ambiente social", "Ubicación inmejorable"] },
      { nombre: "Apartamentos en Malasaña", tipo: "apartamento", zona: "Malasaña", precio_noche: "80-120€", descripcion: "Pisos con encanto en edificios históricos del barrio más castizo y alternativo. Cocina equipada y mucho carácter.", puntos_fuertes: ["Ambiente local auténtico", "Cocina propia", "A pie de ocio nocturno"] },
    ],
    recomendacion: { nombre: "Posada del León de Oro", motivo: "Combina ubicación inmejorable en La Latina, encanto histórico y precio justo — perfecta para vivir el tapeo madrileño sin salir del hotel.", precio_total_estancia: "~480€ para 4 noches" },
  },
  restaurantes: {
    destacados: [
      { nombre: "Mercado de San Miguel", tipo: "mercado gourmet", zona: "La Latina", precio_persona: "20-35€", especialidad: "Tapas variadas, ostras, jamón ibérico y vermut", cuando_ir: "almuerzo o copas", por_que: "El mercado gourmet más bonito de Madrid, ideal para picar de todo sin comprometerte a un solo plato." },
      { nombre: "Casa Lucio", tipo: "taberna castiza", zona: "La Latina", precio_persona: "35-55€", especialidad: "Huevos rotos con patatas y jamón", cuando_ir: "cena", por_que: "Los huevos rotos más famosos de España, en una taberna con casi un siglo de historia." },
      { nombre: "Botín", tipo: "asador castellano", zona: "Centro / Sol", precio_persona: "45-65€", especialidad: "Cochinillo asado en horno de leña centenario", cuando_ir: "comida", por_que: "Abrió en 1725 y Hemingway lo hizo famoso. Una experiencia tan histórica como gastronómica." },
      { nombre: "Taberna La Concha", tipo: "tapas y vermut", zona: "Chueca", precio_persona: "15-25€", especialidad: "Vermut de grifo y boquerones en vinagre", cuando_ir: "aperitivo", por_que: "El ritual del vermut de mediodía en su máxima expresión, rodeado de vecinos del barrio." },
      { nombre: "Churrería San Ginés", tipo: "churrería histórica", zona: "Centro / Sol", precio_persona: "5-9€", especialidad: "Churros con chocolate caliente, abierto 24 horas", cuando_ir: "desayuno o madrugada", por_que: "Desde 1894 sirviendo el remate perfecto a una noche de fiesta o el mejor desayuno madrileño." },
    ],
    donde_no_ir: "Evita las terrazas de la Plaza Mayor y los bares con camareros llamando desde la puerta en el centro — precios turísticos y calidad mediocre. Camina dos calles hacia La Latina y la diferencia es enorme.",
  },
  tips: {
    transporte: [
      { titulo: "Abono Turístico de Transporte", detalle: "Desde 8.40€/día para metro, bus y cercanías sin límite de viajes. Rentable si te mueves mucho entre barrios alejados." },
      { titulo: "El centro se camina", detalle: "Sol, La Latina, Malasaña, Chueca y Centro están todos conectados a pie en 15-20 minutos. El metro es para distancias largas." },
      { titulo: "Aeropuerto Barajas al centro", detalle: "Metro línea 8: 2-2.50€, 30-40 min hasta Nuevos Ministerios. El Exprés Aeropuerto (bus 24h) cuesta 5€ y para en Cibeles y Atocha." },
      { titulo: "Bus nocturno (búho)", detalle: "Cuando el metro cierra (1:30h-6h), la red de 'buhos' conecta Plaza de Cibeles con toda la ciudad por 1.50€." },
    ],
    costumbres: [
      { titulo: "Los horarios madrileños", detalle: "Comida: 14-16h. Cena: 21-23h. Salir de fiesta empieza pasada la medianoche — los madrileños son trasnochadores natos." },
      { titulo: "El vermut de los domingos", detalle: "Ritual sagrado en La Latina: vermut de grifo, una tapa y charla con amigos antes de comer. Empieza sobre las 13h." },
      { titulo: "Propinas: opcionales", detalle: "No hay cultura de propina obligatoria. Redondear la cuenta o dejar 1-2€ por buen servicio es más que suficiente." },
      { titulo: "El calor del verano", detalle: "En julio y agosto las temperaturas superan los 35°C. Planifica las visitas exteriores para la mañana o el atardecer." },
    ],
    mejor_epoca: "Primavera (abril-junio) y otoño (sept-oct) son ideales: clima agradable y la ciudad a pleno rendimiento cultural. El verano es muy caluroso (muchos madrileños se van a la costa) y la Navidad tiene un ambiente único pero hace frío.",
    frases_utiles: [
      { es: "Buenos días", local: "Buenos días", pronunciacion: "Bué-nos dí-as" },
      { es: "Gracias", local: "Gracias", pronunciacion: "Grá-sias" },
      { es: "¿La cuenta, por favor?", local: "¿Me cobras, porfa?", pronunciacion: "Me có-bras, por-fa" },
      { es: "¿Qué me recomiendas?", local: "¿Qué me pones?", pronunciacion: "Ké me pó-nes" },
      { es: "¡Salud!", local: "¡Chinchín!", pronunciacion: "Chin-chín" },
    ],
    emergencias: "112 (emergencias general) · 091 (Policía Nacional) · 092 (Policía Municipal) · Hospital Gregorio Marañón: Calle del Dr. Esquerdo, 46",
    apps_recomendadas: ["EMT Madrid: bus en tiempo real", "Metro de Madrid: rutas y horarios oficiales", "TheFork: reservas con descuentos", "Google Maps: cobertura excelente del transporte público", "Freenow: taxi y VTC en una sola app"],
  },
  equipaje: {
    documentos: [
      "DNI o Pasaporte — obligatorio para alojamiento y vuelo",
      "Tarjeta sanitaria europea (TSEE) — atención médica gratuita en España",
      "Confirmaciones de hotel y vuelos descargadas offline",
    ],
    ropa: [
      { categoria: "Día a día", items: ["3-4 camisetas o tops", "2 pantalones (uno vaquero)", "1 sudadera o chaqueta ligera para las noches", "Ropa interior (1 por día + 1 extra)"] },
      { categoria: "Noche y salir", items: ["1 look para salir de tapas o rooftops", "Camisa o blusa más arreglada"] },
      { categoria: "Calzado", items: ["Zapatillas cómodas — el centro de Madrid se camina muchísimo", "Calzado algo más arreglado para cenar"] },
    ],
    tecnologia: ["Cargador europeo tipo C/F", "Power bank — los días son largos", "Auriculares para el metro y las rutas"],
    salud_higiene: ["Protector solar (el sol de Madrid en verano aprieta fuerte)", "Ibuprofeno y paracetamol", "Tiritas", "Medicación habitual con receta de sobra"],
    esenciales: [
      "Botella de agua reutilizable — las fuentes de Madrid son potables y hay por toda la ciudad",
      "Efectivo en euros (30-50€) para mercadillos, bares pequeños y El Rastro",
      "Ropa de abrigo en invierno — las noches madrileñas en diciembre-enero son frías de verdad",
    ],
    consejo_maleta: "Para 3-5 días en Madrid, una mochila de cabina (40L) o maleta de cabina es perfecta. La ciudad está muy bien comunicada por metro — no necesitas moverse con equipaje pesado entre barrios.",
  },
  itinerario: [
    {
      dia: 1, titulo: "Madrid de los Austrias y tapeo castizo",
      manana: {
        actividades: [
          { nombre: "Café y tostada en Malasaña", descripcion: "Empieza el día como un madrileño: café de especialidad y tostada con tomate en alguna de las cafeterías de diseño del barrio.", duracion: "45 min", precio: "4-7€", emoji: "☕" },
          { nombre: "Palacio Real y Catedral de la Almudena", descripcion: "La residencia oficial de la Familia Real (aunque no vive aquí) y la catedral que la corona. Las salas de gala son de otro siglo.", duracion: "2 horas", precio: "13€ (palacio) / Gratis (catedral)", emoji: "🏰" },
        ],
        consejo: "Los miércoles y jueves de 16h a 18h (octubre-marzo) la entrada al Palacio Real es gratuita para ciudadanos de la UE.",
      },
      tarde: {
        actividades: [
          { nombre: "Plaza Mayor y Mercado de San Miguel", descripcion: "La plaza porticada más emblemática de Madrid, a un paso del mercado gourmet más fotogénico de la ciudad.", duracion: "1.5 horas", precio: "Gratis (consumir opcional)", emoji: "🦪" },
          { nombre: "La Latina a pie", descripcion: "Calles empedradas, iglesias barrocas y las tabernas más castizas de Madrid. El barrio perfecto para perderse sin prisa.", duracion: "1.5 horas", precio: "Gratis", emoji: "🍷" },
        ],
        consejo: "Si caes en domingo, no te pierdas El Rastro (mercadillo callejero) por la mañana en La Latina — toda una institución madrileña.",
      },
      noche: {
        actividades: [
          { nombre: "Ruta de tapas por La Latina", descripcion: "Cava Baja y alrededores concentran algunas de las tabernas más tradicionales. Ve de bar en bar probando una tapa en cada uno.", duracion: "2 horas", precio: "20-30€", emoji: "🍤" },
        ],
        restaurante: { nombre: "Casa Lucio", tipo: "taberna castiza", zona: "La Latina", precio_persona: "35-55€", especialidad: "Huevos rotos con patatas y jamón" },
        consejo: "Casa Lucio no admite tarjeta para grupos pequeños en barra — lleva algo de efectivo por si acaso.",
      },
      coste_estimado: 70,
    },
    {
      dia: 2, titulo: "Arte, museos y el Madrid elegante",
      manana: {
        actividades: [
          { nombre: "Museo del Prado", descripcion: "Una de las mejores pinacotecas del mundo: Velázquez, Goya y El Bosco en estado puro. Imprescindible reservar entrada online.", duracion: "2.5 horas", precio: "15€ / Gratis últimas 2h del día (L-S) y domingos", emoji: "🖼️" },
          { nombre: "Paseo por el Retiro", descripcion: "El gran pulmón verde de Madrid. Busca el Palacio de Cristal y alquila una barca en el estanque grande.", duracion: "1 hora", precio: "Gratis (barca 6€/45 min)", emoji: "🌳" },
        ],
        consejo: "El Prado es gratis de lunes a sábado de 18h a 20h y domingos de 17h a 19h — perfecto para una visita exprés sin coste.",
      },
      tarde: {
        actividades: [
          { nombre: "Barrio de Salamanca de compras", descripcion: "El boulevard elegante de Madrid: Calle Serrano y alrededores, con boutiques de lujo y arquitectura señorial.", duracion: "1.5 horas", precio: "Gratis (comprar opcional)", emoji: "💎" },
          { nombre: "Templo de Debod al atardecer", descripcion: "Un templo egipcio del siglo II a.C. regalado a España, con una de las mejores puestas de sol de la ciudad.", duracion: "1 hora", precio: "Gratis", emoji: "🌅" },
        ],
        consejo: "Llega al Templo de Debod 30 minutos antes del atardecer — los mejores sitios para sentarse se llenan rápido.",
      },
      noche: {
        actividades: [
          { nombre: "Copas en Chueca", descripcion: "El barrio más vibrante de Madrid de noche: terrazas, ambiente inclusivo y la fiesta empieza cuando otros barrios ya duermen.", duracion: "2 horas", precio: "10-20€ en copas", emoji: "🏳️‍🌈" },
        ],
        restaurante: { nombre: "Taberna La Concha", tipo: "tapas y vermut", zona: "Chueca", precio_persona: "15-25€", especialidad: "Vermut de grifo y boquerones en vinagre" },
        consejo: "Los madrileños rara vez salen antes de las 23h — si llegas pronto, aprovecha para cenar tranquilo antes de la fiesta.",
      },
      coste_estimado: 95,
    },
    {
      dia: 3, titulo: "Mercados, historia y el remate perfecto",
      manana: {
        actividades: [
          { nombre: "El Rastro (si es domingo) o Mercado de Antón Martín", descripcion: "El mercadillo más famoso de España (domingos) o un mercado de barrio con encanto entre semana — ambos reflejan el Madrid más auténtico.", duracion: "1.5 horas", precio: "Gratis", emoji: "🛍️" },
          { nombre: "Cochinillo en Botín", descripcion: "Comida en el restaurante más antiguo del mundo según el Guinness — abrió en 1725 y Hemingway lo inmortalizó en sus novelas.", duracion: "1.5 horas", precio: "45-65€", emoji: "🐷" },
        ],
        consejo: "Reserva mesa en Botín con antelación, especialmente para comer un domingo — es uno de los restaurantes más solicitados de Madrid.",
      },
      tarde: {
        actividades: [
          { nombre: "Gran Vía y Círculo de Bellas Artes", descripcion: "El 'Broadway madrileño' y, justo al lado, una de las mejores azoteas de la ciudad con vistas a 360°.", duracion: "1.5 horas", precio: "Gratis (azotea 5€)", emoji: "🏙️" },
        ],
        consejo: "La azotea del Círculo de Bellas Artes es más barata y menos masificada que otros miradores del centro — y las vistas son igual de buenas.",
      },
      noche: {
        actividades: [
          { nombre: "Churros de madrugada en San Ginés", descripcion: "El cierre perfecto a cualquier noche madrileña: churros recién hechos con chocolate caliente en una churrería que lleva sirviendo desde 1894.", duracion: "45 min", precio: "5-9€", emoji: "🍫" },
        ],
        consejo: "Guarda esta visita para tu última noche — no hay mejor despedida de Madrid que unos churros a las tantas de la madrugada.",
      },
      coste_estimado: 80,
    },
  ],
};
