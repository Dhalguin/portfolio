export type Project = {
  name: string
  description: string
  skills: string
  preview: string
  images: string[]
  details: string
  techSummary: string[]
  route: string
}

export const projects: Project[] = [
  {
    name: 'Jofal SPA',
    description: 'Agendamiento y realización de mantención',
    skills: 'React - Next js - Tailwind - Node js - MongoDB',
    preview: '/projects/jofal/preview.png',
    images: [
      '/projects/jofal/login.png',
      '/projects/jofal/maintenances.png',
      '/projects/jofal/maintenance.png',
      '/projects/jofal/client.png',
      '/projects/jofal/cost_center.png',
      '/projects/jofal/checklist.png',
    ],
    details: `Jofal SPA es un sistema de agendamientos y cumpliemiento de mantenciones de aires acondicionados, calefacción y ventilación para arás Residenciales, comercial, industrial y hotelera.
      
      El sistema esta diseñado como un software administrativo y de gestión mediante el cual el administrador puede programar visitas técnicas a los clientes, a su vez, el perfil técnico completa y registra los datos obtenidos.
      
      El perfil administrador es el encargado de registrar a los clientes con sus respectivos centros de costo y los técnicos que posteriormente realizarán mantenciones, así como los equipos que cada centro de costo posee con su información relativa. Ademas de agendar la mantención en la fecha acordada con el cliente y designar cual será el centro de costo que el técnico debe visitar en dada fecha.
      
      Como técnico la función es observar el listado de las mantenciones que debes realizar y el día de la mantención de cada una rellenar los formularios previamente definidos para cada equipo. Al finalizar debe ingresar las observaciones generales del proyecto, así como ingresar la firma del cliente en un TouchPad que se despliega en el sistema.`,
    route: '/projects/Jofal-SPA',
    techSummary: [
      'Desarrollo completo de la plataforma web (frontend - backend), incluyendo el diseño de las diferentes interfaces a lo largo del sistema. Fueron aproximadamente 6 meses de arduo trabajo independiente, desde las conversaciones de análisis y refinamiento con el cliente, hasta el periodo de deploy en el host definidido.',
      'El back-end fue construido con Node.js y Express.js.',
      'Las interfaces de usuario fueron desarrolladas con Next.js en compañía de tailwindcss y Material.ui para los estilos del sitio.',
      'Para el alojamiento de la base de datos, desarrollada en MongoDB, se hizo uso de MongoDB Atlas.',
      'Tanto el front-end como el back-end fueron hosteado en Vercel.',
    ],
  },
  {
    name: 'Centro Arriendos',
    description: 'Compra y arriendo de equipos para el sector de construcción',
    skills: 'React - Next js - Tailwind - Node js - MongoDB',
    preview: '/projects/centro_arriendos/preview.png',
    images: ['/projects/centro_arriendos/guides.png', '/projects/centro_arriendos/invoices.png'],
    details: `Centro Arriendos es una plataforma administrativa para la gestión de arriendo y venta de herramientas eléctricas, accesorios e insumos para la construcción.
    
    A través del panel administrativo los encargados generan guías de despacho, así como tambien las facturas correspondietes a cada orden. Estas facturas pueden ser pagadas en diferentes periodos de tiempo dependiendo de los solicitud del cliente.
    
    Además, el sistema de manera automática, mensualmente crea, actualiza y organiza los libros de contabilidad (compras y ventas), logrando un análisis profundo de los recursos de la compañia.`,
    route: '/projects/Centro-Arriendos',
    techSummary: [
      'Desarrollo completo de la plataforma web (frontend - backend), incluyendo el diseño de las diferentes interfaces a lo largo del sistema. Fueron aproximadamente 6 meses de arduo trabajo independiente, desde las conversaciones de análisis y refinamiento con el cliente, hasta el periodo de deploy en el host definidido.',
      'Para el back-end empleé Node.js junto con el entorno de trabajo Express.js',
      'El front-end fue desarrollado con Next.js, utilizando Chakra.ui para los estilos de las interfaces.',
      'Mongo DB se designó como la base de datos donde se almacena toda la información del sistema. Para su integración a la API utilicé la librería mongoose para un mejor acoplamiento.',
      'Para el hosting de la base de datos se utilizó MongoDB Atlas, mientras que para la API y la interfaz de usuario fueron deployadas en Vercel.',
    ],
  },
  {
    name: 'WiCar',
    description: 'Disfruta cada viaje con la seguridad que tú, tu familia y tu auto necesitan.',
    skills: 'React - Next js - React Native - Native Base - .Net - MongoDB',
    preview: '/projects/wicar/preview.png',
    images: [
      '/projects/wicar/location.png',
      '/projects/wicar/assistance.png',
      '/projects/wicar/motor.png',
      '/projects/wicar/turbo.png',
    ],
    details: `WiCar es una app desarrollada para acompañarte en cada viaje y entregarte todos los servicios necesarios en un solo lugar.
    
    Alguna de las otras funcionalidades que WiCar proporciana son: asistencia en ruta en caso de avería, georeferencia del vehículo para rastrear y bloquear el motor en caso de emergencia, ademas de reportar el robo. Ofrece un plan premium para optar por muchos más beneficios.
    
    Posee un backoffice web donde se muestra los datos generales de todos los clientes registrados en la app mobile, permitiendo realizar analisis en base a esa data. El backoffice posee funciones para actualizar datos inmutables dentro de la app mobile que son necesarios para el correcto funcionamiento.`,
    route: '/projects/WiCar',
    techSummary: [
      'Desarrollado con React Native (mobile) y React (web). Los servidores estan desarrollados en .NET con C#',
      "Implementación y actualiación de API's realizadas con C# en el entorno de .NET",
      'Creación de tests unitarios con xUnit y Moq para el modelado de los servicios',
      'Actualización de estilos con Native Base en varios componentes',
      'Implementación de pasarelas de pago',
      "Iniciar desarrollo de API's para el sistemas de referidos",
    ],
  },
  {
    name: 'SMARTKPI',
    description: "Cálculo de KPI's y medición de Benchmarks",
    skills: 'React - Next js - Chakra UI - GraphQL - SST - MongoDB',
    preview: '/projects/smartkpi/preview.png',
    images: ['/projects/smartkpi/login.png'],
    details: `SMARTKPI es un sistema que permite el cálculo de KPI's y benckmarks en proyectos y empresas del sector de la construcción, basándose en múltiples datos que el gestor carga periodicamnete en el sistema, tales como recursos empleados, desechos, mano obrera y otros parámetros.
    En el sistema se deben registrar la empresa y los proyectos a los que se realizará el seguiminto.
    Los proyectos que fueron finalizados entran en una comparativa de rendimiento (benchmark) con el objetivo de comprobar que iniciativas, empresas, políticas o sistemas presentan un comportamiento más adecuado.`,
    route: '/projects/SMARTKPI',
    techSummary: [
      'Desarrollo de interfaces de usuario con Next js',
      'Implementación de estilos haciendo uso de Chakra.ui',
      'El back-end esta bajo el framework de AWS, serveless stack (SST), con TypeScript',
      "Realización de fórmulas complejas para la medición de los KPI's",
      'Tests unitarios para las peticiones realizadas a la base de datos',
      'Para el almacemaineto y manipulación de imformación se empleó MongoDB',
    ],
  },
  {
    name: 'MediConnect',
    description: 'Consultas médicas en línea',
    skills: 'React js - Material UI - Node js - PostgreSQL',
    preview: '/projects/mediconnect/preview.png',
    images: [
      '/projects/mediconnect/video.png',
      '/projects/mediconnect/principal.png',
      '/projects/mediconnect/orders.png',
      '/projects/mediconnect/turns.png',
    ],
    details: `MediConnect+ es una aplicación web de telemedicina que tiene como principal objetivo conectar a médicos y pacientes de una manera sencilla e intuitiva, siempre manteniendo la privacidad de el doctor y respetando sus horarios.
      
    Decidimos hacer esta aplicación ya que, debido a la pandemia, fue muy complicado ejercer profesiones sanitarias, y la telemedicina se hizo presente en nuestra vida.
    
    Fue un periodo de cuatro meses de arduo trabajo donde pasamos por muchas etapas para el poco tiempo predefinido, comenzamos con la simple noción de lo que se planeaba hacer para luego terminar por construir esta app tan necesaria en un periodo difícil.`,
    route: '/projects/MediConnect',
    techSummary: [
      'Colaboración en el diseño del sitio web definido en Figma.',
      'Desarrollo de gran parte del front-end del sitio, para el cual se utilizó React.js y Redux para el manejo de estados globales.',
      'Los estilos de las interfaces de usuario se aplicaron con ayuda de Material.ui',
      'Encargado de refactorización y de revisar las buenas práciticas y arquitecturas utilizadas por los demás desarrolladores con el fin de tener un código mas limpio y organizado.',
      "Integración de las API's, desarrolladas con Node.js y Express.js, al cliente.",
      'Administrar la base de datos PostgreSQL manejada con Sequelize.',
      'Deploy de front-end en Vercel.',
    ],
  },
]
