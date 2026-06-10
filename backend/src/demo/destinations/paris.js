export const PARIS = {
  alojamiento: {
    zonas: [
      { nombre: "Le Marais (3º y 4º)", descripcion: "El barrio más chic de París, con galerías, cafés de diseño y la Place des Vosges. A pie de todo.", nivel_precio: "alto", precio_rango: "120-220€/noche" },
      { nombre: "Saint-Germain-des-Prés", descripcion: "París intelectual y bohemio. Los cafés donde Sartre y Hemingway escribían siguen abiertos.", nivel_precio: "alto", precio_rango: "140-260€/noche" },
      { nombre: "Montmartre (18º)", descripcion: "El barrio de los artistas, con el Sacré-Cœur y vistas panorámicas. Más auténtico y barato.", nivel_precio: "medio", precio_rango: "80-140€/noche" },
      { nombre: "Bastille (11º y 12º)", descripcion: "El barrio joven y animado de París. Mercados, bares de jazz y tiendas independientes.", nivel_precio: "medio", precio_rango: "75-130€/noche" },
    ],
    opciones: [
      { nombre: "Hôtel des Grands Boulevards", tipo: "boutique", zona: "2º arrondissement", precio_noche: "180-240€", descripcion: "Hotel boutique con jardín secreto y restaurante de culto. Diseño de los años 20.", puntos_fuertes: ["Jardín interior", "Restaurante galardonado", "Ubicación central"] },
      { nombre: "Hôtel du Petit Moulin", tipo: "boutique", zona: "Le Marais", precio_noche: "160-210€", descripcion: "Antigua panadería convertida en hotel de diseño por Christian Lacroix. Cada habitación es única.", puntos_fuertes: ["Diseño de Lacroix", "En el corazón del Marais", "Experiencia única"] },
      { nombre: "Generator Paris", tipo: "hostal", zona: "10º arrondissement", precio_noche: "30-65€", descripcion: "El mejor hostel de París con bar rooftop y terraza con vistas a la ciudad.", puntos_fuertes: ["Rooftop bar", "Gran ambiente", "Bien comunicado"] },
      { nombre: "Apartamentos en Montmartre", tipo: "apartamento", zona: "Montmartre", precio_noche: "85-120€", descripcion: "Apartamentos con encanto en el barrio de los artistas. Cocina equipada y ambiente auténtico.", puntos_fuertes: ["Ambiente local", "Cocina propia", "Vistas a la ciudad"] },
    ],
    recomendacion: { nombre: "Hôtel des Grands Boulevards", motivo: "Combina ubicación céntrica, diseño cuidado y un restaurante que merece la visita por sí solo.", precio_total_estancia: "~720€ para 4 noches" },
  },
  restaurantes: {
    destacados: [
      { nombre: "Le Comptoir du Relais", tipo: "bistró", zona: "Saint-Germain", precio_persona: "35-55€", especialidad: "Terrina de campaña y ris de veau", cuando_ir: "cena", por_que: "El mejor bistró tradicional de París según los propios parisinos. Reserva con semanas de antelación." },
      { nombre: "Septime", tipo: "haute cuisine", zona: "Bastille", precio_persona: "60-90€", especialidad: "Menú degustación de temporada", cuando_ir: "cena", por_que: "El restaurante más deseado de París. Reservas que se agotan en minutos. Vale cada euro." },
      { nombre: "L'As du Fallafel", tipo: "street food", zona: "Le Marais", precio_persona: "8-14€", especialidad: "Falafel en pita con berenjena asada", cuando_ir: "almuerzo", por_que: "El falafel más famoso de Europa. La cola en la calle es la señal de que estás en el sitio correcto." },
      { nombre: "Café de Flore", tipo: "café histórico", zona: "Saint-Germain", precio_persona: "15-25€", especialidad: "Croque-monsieur y café au lait", cuando_ir: "desayuno", por_que: "Simone de Beauvoir y Jean-Paul Sartre tenían su mesa aquí. Es un clásico que hay que vivir una vez." },
      { nombre: "Marché d'Aligre", tipo: "mercado", zona: "Bastille", precio_persona: "10-18€", especialidad: "Quesos, charcuterie y vino natural", cuando_ir: "almuerzo", por_que: "El mercado favorito de los parisinos para el brunch del fin de semana. Nada de turistas." },
    ],
    donde_no_ir: "Evita los cafés y brasseries de los Campos Elíseos y la zona de la Torre Eiffel — precios de aeropuerto y calidad turística. Los menús en inglés y con foto son mala señal.",
  },
  tips: {
    transporte: [
      { titulo: "Carnet de 10 viajes (Navigo Easy)", detalle: "Carga 10 viajes en la Navigo Easy (1.73€/viaje vs 2.15€ suelto). Válido para metro, bus y RER dentro de París." },
      { titulo: "Vélib' — bicicletas compartidas", detalle: "1.70€ por viaje de hasta 30 min. Perfectas para ir de barrio en barrio. Hay estaciones por toda la ciudad." },
      { titulo: "CDG al centro", detalle: "RER B: 11.80€, 45 min hasta Châtelet. Orlybus: 9.50€ desde Orly. Evita los taxis — caros y lentos en hora punta." },
      { titulo: "París es una ciudad caminable", detalle: "El centro histórico cabe en 6 km. Muchas veces caminar entre atracciones es más rápido que el metro." },
    ],
    costumbres: [
      { titulo: "Di 'Bonjour' siempre", detalle: "Entrar a una tienda o restaurante sin saludar se considera maleducado. Un simple 'Bonjour!' cambia completamente el trato." },
      { titulo: "Propina no obligatoria", detalle: "El servicio está incluido por ley. Dejar 1-2€ está bien para un café; redondear la cuenta en restaurantes es suficiente." },
      { titulo: "El ritmo parisino", detalle: "Las tiendas abren tarde (10h) y cierran a las 19-20h. Los restaurantes sirven cena desde las 19:30h, pero los locales llegan a las 21h." },
      { titulo: "La baguette es sagrada", detalle: "Comprar el pan en la boulangerie local cada mañana es un ritual. Cuesta ~1.20€ y estará recién hecha." },
    ],
    mejor_epoca: "Primavera (abril-junio): flores en los jardines y clima perfecto. Otoño (sept-oct): menos turistas y luz preciosa. Evita agosto (muchos parisinos de vacaciones, todo cerrado) y el puente de julio 14 (Día Nacional, masificado).",
    frases_utiles: [
      { es: "Buenos días", local: "Bonjour", pronunciacion: "Bon-zhúr" },
      { es: "Por favor", local: "S'il vous plaît", pronunciacion: "Sil vu plé" },
      { es: "¿La cuenta, por favor?", local: "L'addition, s'il vous plaît", pronunciacion: "La-di-sión, sil vu plé" },
      { es: "¿Habla español?", local: "Vous parlez espagnol?", pronunciacion: "Vu par-lé es-pan-yol?" },
      { es: "¡Salud!", local: "Santé!", pronunciacion: "San-té" },
    ],
    emergencias: "15 (SAMU/ambulancias) · 17 (policía) · 18 (bomberos) · 112 (emergencias europeo) · Hôpital Hôtel-Dieu: frente a Notre-Dame",
    apps_recomendadas: ["RATP: metro y bus de París en tiempo real", "Vélib': bicicletas compartidas", "TheFork: reservas con descuentos", "Google Maps: transporte público excelente", "Duolingo: aprende 10 frases de francés antes de ir"],
  },
  equipaje: {
    documentos: [
      "DNI o Pasaporte — imprescindible para alojamiento y museos",
      "Tarjeta sanitaria europea (TSEE) — cobertura médica en Francia",
      "Reservas del Louvre, Musée d'Orsay y Torre Eiffel descargadas offline — las colas sin reserva son eternas",
      "Tarjeta Navigo Easy — comprarla nada más llegar al aeropuerto",
    ],
    ropa: [
      { categoria: "Día a día", items: ["3-4 tops o camisetas", "2 pantalones (uno más elegante)", "1 chaqueta o blazer ligero — los parisinos cuidan el look", "Ropa interior (1 por día + 1 extra)"] },
      { categoria: "Noche y restaurantes", items: ["1-2 looks de noche — los bistrós parisinos de nivel esperan cierto arreglo", "Vestido o camisa elegante"] },
      { categoria: "Calzado", items: ["Zapatillas cómodas para caminar (el centro es muy caminable)", "Zapatos o bailarinas más arreglados para cenar"] },
    ],
    tecnologia: ["Cargador europeo tipo C/F", "Power bank", "Auriculares — el metro de París es largo"],
    salud_higiene: ["Hidratante — el clima de París puede ser seco en invierno", "Ibuprofeno y paracetamol", "Paraguas compacto — llueve sin avisar en cualquier estación", "Medicación habitual"],
    esenciales: [
      "Paraguas compacto — en París puede llover en cualquier momento, cualquier mes del año",
      "Aprende 3 frases en francés antes de llegar — 'Bonjour', 'Merci', 'S'il vous plaît' cambian completamente el trato",
      "Efectivo (40-60€) — los mercados y algunos bistrós tradicionales son solo efectivo",
    ],
    consejo_maleta: "Para 3-5 días en París, una maleta de cabina elegante encaja bien. Los parisinos viajan con estilo — una mochila de senderismo desencaja un poco con el ambiente de la ciudad.",
  },
  itinerario: [
    {
      dia: 1, titulo: "La ciudad de la luz te recibe",
      manana: {
        actividades: [
          { nombre: "Croissant en boulangerie local", descripcion: "Empieza el día como un parisino: baguette recién hecha y café au lait en el mostrador de una panadería de barrio.", duracion: "45 min", precio: "4-7€", emoji: "🥐" },
          { nombre: "Notre-Dame de París", descripcion: "La catedral está en reconstrucción tras el incendio de 2019. El exterior y la Île de la Cité siguen siendo impresionantes.", duracion: "1 hora", precio: "Gratis (exterior)", emoji: "⛪" },
          { nombre: "Sainte-Chapelle", descripcion: "La joya gótica de París escondida en el Palais de Justice. Sus vidrieras del siglo XIII son únicas en el mundo.", duracion: "45 min", precio: "13€", emoji: "🌈" },
        ],
        consejo: "Compra el billete de Sainte-Chapelle online — las colas físicas son eternas.",
      },
      tarde: {
        actividades: [
          { nombre: "Le Marais a pie", descripcion: "El barrio más elegante de París: galerías, la Place des Vosges (la plaza más antigua de la ciudad) y el Centre Pompidou.", duracion: "2.5 horas", precio: "Gratis (museos opcionales)", emoji: "🎨" },
          { nombre: "Falafel en L'As du Fallafel", descripcion: "La cola en la calle Rosiers lo dice todo. El mejor falafel de Europa, y uno de los más baratos del Marais.", duracion: "30 min", precio: "7-10€", emoji: "🧆" },
        ],
        consejo: "El Centre Pompidou tiene la vista más sorprendente de París desde su terraza — y está incluida con la entrada.",
      },
      noche: {
        actividades: [
          { nombre: "Torre Eiffel al anochecer", descripcion: "El show de luces arranca cada hora en punto desde las 21h. Verlo desde el Trocadéro es gratis y más espectacular que subir.", duracion: "1.5 horas", precio: "Gratis (exterior) / 29.40€ (subir a la cima)", emoji: "✨" },
        ],
        consejo: "Si subes a la Torre, reserva online con semanas de antelación. Si no, el Trocadéro al anochecer es igual de mágico.",
      },
      coste_estimado: 65,
    },
    {
      dia: 2, titulo: "Arte, impresionismo y jardines",
      manana: {
        actividades: [
          { nombre: "Musée d'Orsay", descripcion: "La mayor colección de impresionismo del mundo: Monet, Renoir, Van Gogh, Degas. En una antigua estación de tren preciosa.", duracion: "2.5 horas", precio: "16€ / Gratis menores 26 años UE", emoji: "🖼️" },
          { nombre: "Jardín de las Tullerías", descripcion: "El jardín más célebre de París conecta el Louvre con el Place de la Concorde. Perfecto para descansar entre museos.", duracion: "45 min", precio: "Gratis", emoji: "🌸" },
        ],
        consejo: "Los menores de 26 años de la UE entran gratis al Musée d'Orsay — lleva tu DNI europeo.",
      },
      tarde: {
        actividades: [
          { nombre: "El Louvre (selección estratégica)", descripcion: "No intentes verlo todo — imposible. Ve directo a la Mona Lisa, Venus de Milo y Victoria Alada. Luego explora lo que te apetezca.", duracion: "3 horas", precio: "22€", emoji: "🏛️" },
        ],
        consejo: "Entra por la pirámide de cristal pero las colas más cortas están en la entrada Richelieu (acceso por la calle de Rivoli).",
      },
      noche: {
        actividades: [
          { nombre: "Paseo nocturno por Saint-Germain", descripcion: "El barrio más literario de París de noche: luces suaves, cafés históricos y el ambiente de siempre.", duracion: "2 horas", precio: "Consumir opcional", emoji: "🌙" },
        ],
        consejo: "Tómate una copa en el Café de Flore o Les Deux Magots — son caros pero es una experiencia histórica irrepetible.",
      },
      coste_estimado: 95,
    },
    {
      dia: 3, titulo: "Montmartre, Versalles y despedida",
      manana: {
        actividades: [
          { nombre: "Montmartre y el Sacré-Cœur", descripcion: "El barrio de los artistas con las mejores vistas de París desde la cúpula del Sacré-Cœur. Madruga para evitar las masas.", duracion: "2 horas", precio: "Gratis", emoji: "⛪" },
          { nombre: "Place du Tertre", descripcion: "La plaza de los pintores donde artistas de todo el mundo trabajan al aire libre. Llega antes de las 10h para verlos instalar.", duracion: "45 min", precio: "Gratis", emoji: "🎨" },
        ],
        consejo: "Baja desde Montmartre caminando por la Rue Lepic — la calle más auténtica del barrio.",
      },
      tarde: {
        actividades: [
          { nombre: "Palacio de Versalles (opcional)", descripcion: "A 40 min en RER C. Los jardines son gratuitos. El palacio requiere reserva. Un día entero si quieres verlo bien.", duracion: "4 horas", precio: "20€ palacio / Gratis jardines", emoji: "🏰" },
          { nombre: "Champs-Élysées y Arco del Triunfo", descripcion: "El paseo más famoso del mundo. El Arco tiene vistas panorámicas desde la terraza. Merece los 13€.", duracion: "1.5 horas", precio: "13€ (subir al Arco)", emoji: "🇫🇷" },
        ],
        consejo: "Versalles o los Campos Elíseos — elige uno. Intentar ambos en el mismo día es agotador.",
      },
      noche: {
        actividades: [
          { nombre: "Crucero por el Sena", descripcion: "Una hora flotando junto a Notre-Dame, el Louvre y la Torre Eiffel al anochecer. El cierre perfecto para París.", duracion: "1 hora", precio: "15-18€", emoji: "🚢" },
        ],
        consejo: "El crucero de Bateaux Mouches sale cada 20-30 min desde el Pont de l'Alma. No hace falta reservar.",
      },
      coste_estimado: 85,
    },
  ],
};
