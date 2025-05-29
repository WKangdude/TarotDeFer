import React from 'react';
import Carousel from './Carousel';

//imagenes
import tarot1 from '../img/wa1.jpeg';
import tarot2 from '../img/wa2.jpeg';
import tarot3 from '../img/wa3.jpeg';
import tarot4 from '../img/wa4.jpeg';
import tarot5 from '../img/wa5.jpeg';
import tarot6 from '../img/wa6.jpeg';
import tarot7 from '../img/wa7.jpeg';
import tarot8 from '../img/wa8.jpeg';
import tarot9 from '../img/wa9.jpeg';
import tarot10 from '../img/wa10.jpeg';
import tarot11 from '../img/wa11.jpeg';
import tarot12 from '../img/wa12.jpeg';
import tarot15 from '../img/wa15.jpeg';
import tarot16 from '../img/wa16.jpeg';
import tarot17 from '../img/wa17.jpeg';
import ia1 from '../img/ia1.jpeg';
import ia2 from '../img/ia2.jpeg';
import ia3 from '../img/ia3.jpeg';
import ia4 from '../img/ia4.jpeg';
import ia5 from '../img/ia5.png';

import endulzamiento from '../img/Endulzamiento.jpeg';
import retorno_pareja from '../img/retorno_pareja.jpeg';
import corte_lazos from '../img/corte_lazos.jpeg';
import tapa_bocas from '../img/tapa_bocas.jpeg';
import limpia_preventiva from '../img/limpia_preventiva.jpeg';
import prote_fam from '../img/prote_fam.jpeg';
import prote_fuerte from '../img/prote_pareja_fuerte.jpeg';

const color1 = "#A88E77";
const color2 = "#232323";

const sectionsData = [
  {
    title: "Lecturas de Tarot",
    bgColor: "bg-gold",
    textColor: "text-principal",
    mtDetail: "",
    cardsData: [
      {
        backgroundImage: tarot11,
        title: "Lectura si o no",
        price: "$100",
        color: "#232323",
        detail: "La lectura de si y no tiene un lapso de 24 hrs para responderse una vez realizado el pago para ser respondida, si se desea que estas preguntas sean contestadas en el momento tendra un costo extra de $50 pesos esta lectura se responde por audios. No se necesita agendar",
        included: ["Pregunta sí o no"],
        notIncluded: ["Explicaciones detalladas"],
        duration: "5 minutos"
      },
      {
        backgroundImage: tarot12,
        title: "Lectura si o no con explicación",
        price: "$200",
        color: "#232323",
        detail: "Lectura si o no con explicaciones adicionales. No necesita agendar. La lectura de si y no tiene un lapso de 24 hrs para responderse una vez realizado el pago para ser respondida, si se desea que estas preguntas sean contestadas en el momento tendra un costo extra de $50 pesos esta lectura se responde por audios.",
        included: ["Pregunta sí o no", "Explicación detallada"],
        notIncluded: ["Revisión de más de una pregunta"],
        duration: ""
      },
      {
        backgroundImage: ia2,
        title: "Lectura basica",
        price: "$250",
        color: "#232323",
        detail: "Esta lectura la puedes tomar cuando no sabes que hacer con una situación en especifico y no tienes intención de profundizar tanto en el tema pero quieres entender mejor la energia. Esta lectura se realiza mediante audios de WhatsApp y es necesario agendar una cita",
        included: ["Consejo del tarot"],
        notIncluded: ["Preguntas"],
        duration: "10 minutos"
      },
      {
        backgroundImage: ia4,
        title: "Lectura premium",
        price: "$350",
        color: "#232323",
        detail: "Lectura general: pasado, presente y futuro de una manera profunda, vemos trabajo, dinero, puntos a trabajar, tus bloqueos y/o estancamientos. Todas las lecturas se realizan via whatsApp o llamada telefonica en caso de querer que sea por videollamada tendra un costo extra de $150 pesos",
        included: ["Numerología básica", "1 consejo de un arcano mayor", "Preguntas ilimitadas durante la sesion"],
        notIncluded: [],
        duration: "1 hora de sesión"
      },
      {
        backgroundImage: ia2,
        title: "Lectura de vinculo amoroso",
        price: "$450",
        color: "#232323",
        detail: "En esta lectura nos enfocamos en la relación amorosa su pasado, presente y futuro, vemos las vivencias y condiciones de cada quien asi como la energia que los rodea, obstaculos a enfrentar, vemos si hay sentimientos positivos o no. (Tomar esta lectura es un requisito obligatorio previo a definir si eres candidat@ a un ritual de amor en pareja) Esta lectura tambien la puedes tomar si la persona es tu ex pareja Todas las lecturas se realizan via whatsApp o llamada telefonica en caso de querer que sea por videollamada tendra un costo extra de $150 pesos",
        included: ["Preguntas ilimitadas durante la sesion", "1 consejo de un arcano mayor entorno a la relación"],
        notIncluded: [],
        duration: "1 hora de sesión"
      },
      {
        backgroundImage: ia3,
        title: "Lectura de consejo",
        price: "$500",
        color: "#232323",
        detail: "Lectura general: pasado, presente y futuro de una manera profunda, vemos trabajo, dinero, puntos a trabajar, tus bloqueos y/o estancamientos. Todas las lecturas se realizan via whatsApp o llamada telefonica en caso de querer que sea por videollamada tendra un costo extra de $150 pesos",
        included: ["Numerología básica", "1 consejo de un arcano mayor", "Preguntas ilimitadas durante la sesión", "Consejo de 1 a 5 minutos diario por una semana"],
        notIncluded: [],
        duration: "1 hora de sesión"
      },
      {
        backgroundImage: ia4,
        title: "Lectura de año",
        price: "$650",
        color: "#232323",
        detail: "En esta lectura revisamos los sucesos mas imporatantes que pasaras a lo largo de tu año, asi como puntos a trabajar para mejorar tu persona y tus vivencias, asi como advertencias del tarot y situaciones que se puedan cambiar. Vemos trabajo, dinero, amor, bloqueos y/o estancamientos. Todas las lecturas se realizan via whatsApp o llamada telefonica en caso de querer que sea por videollamada tendra un costo extra de $150 pesos",
        included: ["Preguntas ilimitadas durante la sesión"],
        notIncluded: [],
        duration: "1 hora de sesión"
      },
      {
        backgroundImage: ia5,
        title: "Lectura con tarot egipcio",
        price: "$600",
        color: "#232323",
        detail: "Lectura general: pasado, presente y futuro de una manera profunda, vemos trabajo, dinero, puntos a trabajar, tus bloqueos y/o estancamientos.",
        included: ["1 consejo de un arcano mayor", "Preguntas ilimitadas durante la sesion"],
        notIncluded: [],
        duration: "45 minutos"
      },
    ],
  },
  {
    title: "Rituales",
    bgColor: "bg-principal",
    textColor: "text-gold",
    mtDetail: "",
    cardsData: [
      {
        backgroundImage: tarot7,
        title: "Suerte y abundancia",
        price: "$1500",
        color: "#A88E77",
        detail: "Este es un fuerte ritual de abre caminos laboral. Consta de 4 peticiones y 1 decreto. Es un ritual personal donde no se involucran a mas personas en las peticiones o el decreto mas que a la persona que esta solicitando el ritual. Se recomienda tener una sesión de tarot previa para descartar estancamientos o brujerias que. puedan bloquear el trabajo. Se realiza los dias martes o jueves. Es un ritual de 1 sola velación.",
        included: [],
        notIncluded: [],
        duration: ""
      },
      {
        backgroundImage: tarot4,
        title: "7 Potencias o 7 peticiones",
        price: "$2500",
        color: "#A88E77",
        detail: "Este es un ritual abre caminos fuerte que no solo se concentra en el aspecto economico. En este ritual nos enfocamos en 7 situaciones en especifico pueden ser: Amor, Amor propio, proteccion, dinero, trabajo, encoque, armonizacion personal, dominación de ciertas situaciones entre otras. Se realiza martes, jueves o viernes. Para este ritual se necesita una lectura de tarot previa para definir en que nos vamos a concentrar y que es mas importante.",
        included: [],
        notIncluded: [],
        duration: ""
      },
      {
        backgroundImage: tarot1,
        title: "Piña de la abundancia",
        price: "$3500",
        color: "#A88E77",
        detail: "Este ritual es muy poderoso, ideal para abrir caminos, para que no falte dinero en casa, para el éxito y la properidad, no solo es un abre caminos tambien limpia las malas energias y protege tu economia. Se recomienda para negocios. 15 dias de velación Puede ser familiar (cada persona extra tiene un costo adicional) Se hacen los dias martes o jueves y de preferencia en luna llena",
        included: [],
        notIncluded: ["Persona extre por $750 MXN"],
        duration: ""
      },
      {
        backgroundImage: tarot2,
        title: "Economia Familiar y éxito",
        price: "$7500",
        color: "#A88E77",
        detail: "Es un trabjo completo, poderoso y muy fuerte. Este trabajo se enfoca en abrir caminos laborales, obtener exito, hacer que la economia fluya de una mejor manera, limpia los posibles bloqueos y/o estancamientos, armoniza a la familia para que esten tranquilos, tambien da proteccion de envidias, mal de ojo o brujerias. Este ritual esta pensado para 4 personas y es una sola velación.",
        included: ["Lectura de seguimiento"],
        notIncluded: ["Persona extre por $750 MXN"],
        duration: ""
      },
      {
        backgroundImage: tarot3,
        title: "Economia Familiar y éxito",
        price: "$7500",
        color: "#A88E77",
        detail: "Es un trabjo completo, poderoso y muy fuerte. Este trabajo se enfoca en abrir caminos laborales, obtener exito, hacer que la economia fluya de una mejor manera, limpia los posibles bloqueos y/o estancamientos, armoniza a la familia para que esten tranquilos, tambien da proteccion de envidias, mal de ojo o brujerias. Este ritual esta pensado para 4 personas y es una sola velación.",
        included: ["Lectura de seguimiento"],
        notIncluded: ["Persona extra por $750 MXN"],
        duration: ""
      },
    ],
  },
  {
    title: "Rituales de pareja/amor",
    bgColor: "bg-principal",
    textColor: "text-gold",
    detail: "Para todos los rituales de amor es necesaria una lectura de tarot previa para confirmar que se necesite el trabajo.",
    mtDetail: "mt-5",
    cardsData: [
      {
        backgroundImage: endulzamiento,
        title: "Endulzamiento en frasco",
        price: "$1000",
        color: color1,
        detail: "Es un hechizo de amor sencillo para potencializar los sentimientos positivos de la otra persona para contigo, no estamos obligando a la otra persona a quererte, se le puede agregar una petición en particular.\nNo necesariamente tiene que ser de pareja, puedes endulzar a tu jefe, familiares, hijos, etc.\n(En cualquiera de estos casos se recomienda una lectura de tarot para ver si es viable)",
        included: ["Lectura de seguimiento"],
        notIncluded: [],
        duration: ""
      },
      {
        backgroundImage: tarot16,
        title: "No te enojes",
        price: "$1200",
        color: color1,
        detail: "Ritual quita enojos. Este es un ritual basico y normalmente sencilo (la complejidad depende del humor de la persona a trabajar) que nos ayuda a rebajar la molestia de la otra persona.",
        included: [],
        notIncluded: [],
        duration: ""
      },
      {
          backgroundImage: tarot6,
          title: "Aplacate",
          price: "$1100",
          color: color1,
          detail: "Este es un ritual sencillo que nos ayuda a ablandar a una persona en particular para que ceda a nuestras peticiones y este tranquilo.\n\nEste ritual nos sirve para cualquier relación.",
          included: [],
          notIncluded: [],
          duration: ""
      },
      {
          backgroundImage: tarot7,
          title: "Endulzamiento de pareja con velación",
          price: "$1600",
          color: color1,
          detail: "Es un ritual de nivel medio fuerte para potencializar los sentimientos positivos de la persona a la que deseamos endulzar, no estamos obligando a la persona a querernos, se le puede agregar alguna peticion en particular (1-4 peticiones).\n\nEste ritual es exclusivo para pareja",
          included: ["Lectura de seguimiento"],
          notIncluded: [],
          duration: ""
      },
      {
          backgroundImage: tarot17,
          title: "Ritual lazos blancos",
          price: "$2300",
          color: color1,
          detail: "Armonizacion + limpia energetica de pareja.\n\nEs un ritual fuerte donde limpiamos cualquier problema energetico como envidias, malas energias alrededor de la pareja o bloqueos, se da armonia a la relación para que exista buena comunicación, se rebajn las peleas y/o discusiones todo con la intención que pueda exitir paz, armonia y tranqulidad.\n\nEs un ritual de pareja.\n\nSE UTILIZA MAGIA BLANCA",
          included: ["Lectura de seguimiento"],
          notIncluded: [],
          duration: ""
      },
      {
          backgroundImage: tarot8,
          title: "Ritual dulce amor",
          price: "$2900",
          color: color1,
          detail: "Armonización + limpia energetica de pareja + endulzamiento\n\nEs un ritual fuerte donde limpiamos cualquier problema energetico como envidias, malas energias alrededor de la pareja o bloqueos, se da armonia a la relación para que exista buena comunicación, se rebajn las peleas y/o discusiones todo con la intención que pueda exitir paz, armonia y tranqulidad con el endulzamiento buscamos potencilizar los sentimientos positivos de la pareja y que exista mas deseo.\nSE UTILIZA MAGIA BLANCA",
          included: ["Lectura de seguimiento"],
          notIncluded: [],
          duration: ""
      },
      {
          backgroundImage: tarot10,
          title: "Ritual amor, union y protección",
          price: "$3500",
          color: color1,
          detail: "Armonización + limpia energetica de pareja + endulzamiento + Protección.\n\nEs un ritual fuerte donde limpiamos cualquier problema energetico como envidias, malas energias alrededor de la pareja o bloqueos, se da armonia a la relación para que exista buena comunicación, se rebajn las peleas y/o discusiones todo con la intención que pueda exitir paz, armonia y tranqulidad con el endulzamiento buscamos potencilizar los sentimientos positivos de la pareja y que exista mas deseo, agregamos una protección contra envidias, malas energias y ciertos trabajos de destrucción\nSE UTILIZA MAGIA BLANCA",
          included: ["Lectura de seguimiento"],
          notIncluded: [],
          duration: ""
      },
      {
          backgroundImage: retorno_pareja,
          title: "Retorno de pareja",
          price: "$5000",
          color: color1,
          detail: "Este en un ritual que nos ayuda a regresar a una ex pareja, solo funciona si aun existe amor y se trabaja con los sentimientos existentes, se recomienda hacer este trabajo en casos de que alguien mas los haya separado por brujeria o chismes.\nCabe aclarar que este trabajo en particular es un proceso largo y no todos tendran exito.\n\nLa energia de este ritual es muy pesada. (Mas informacion por whats)",
          included: ["Lectura de seguimiento", "Descuento en caso de necesitar un refuerzo"],
          notIncluded: [],
          duration: ""
      },
    ],
  },
  {
    title: "Amor propio",
    bgColor: "bg-principal",
    textColor: "text-gold",
    mtDetail: "",
    cardsData: [
      {
        backgroundImage: tarot3,
        title: "Amor propio sencillo",
        detail: "Lo que buscamos con este ritual es eliminar los sentiimientos negativos y potencializar los positivos hacia tu persona, con esto logramos mas motivación, concentración y admiración hacia ti. \nEs un ritual sencillo de una sola velación. \nNo se necesita lectura previa.",
        price: "$850",
        color: color1,
      },
      {
        backgroundImage: tarot6,
        title: "Amor propio y empoderamiento",
        detail: "Lo que buscamos con este ritual es eliminar los sentiimientos negativos y potencializar los positivos hacia tu persona, con esto logramos mas motivación, concentración y admiración hacia ti.\nEmpoderamos a la persona para tomar decisiones aceertivas en su vida, que se ponga como prioridad y se sienta en plenitud.\nNo se necesita lectura previa.",
        price: "$1500",
        color: color1,
      },
      {
        backgroundImage: tarot6,
        title: "Amor propio y empoderamiento",
        detail: "Lo que buscamos con este ritual es eliminar los sentiimientos negativos y potencializar los positivos hacia tu persona, con esto logramos mas motivación, concentración y admiración hacia ti utilizamos la energia de afrodita\nNo se necesita lectura previa.",
        price: "$1750",
        color: color1,
      },
    ]
  },
  {
    title: "Protecciones",
    bgColor: "bg-principal",
    textColor: "text-gold",
    mtDetail: "",
    cardsData: [
      {
        backgroundImage:tarot5,
        title: "Protección personal básica",
        price: "$850",
        color: color1,
        detail: "Preguntar especificaciones"
      },
      {
        backgroundImage:ia1,
        title: "Protección personal fuerte PERSONALIZADA",
        price: "$1500",
        color: color1,
        detail: "Preguntar especificaciones"
      },
      {
        backgroundImage:tarot5,
        title: "Protección de pareja básica",
        price: "$1650",
        color: color1,
        detail: "Preguntar especificaciones"
      },
      {
        backgroundImage: prote_fuerte,
        title: "Protección de pareja fuerte PERSONALIZADA",
        price: "$3000",
        color: color1,
        detail: "Preguntar especificaciones"
      },
      {
        backgroundImage:tarot1,
        title: "Protección familiar (4 personas) personalizada",
        price: "$5200",
        color: color1,
        detail: "Preguntar especificaciones"
      },
      {
        backgroundImage: prote_fam,
        title: "Protección especial familiar completo",
        price: "$8200",
        color: color1,
        included: ["-Protección de propiedades", "-Protección de negocios", "-Protección de mascotas", "-Etc."],
        detail: "Preguntar especificaciones"
      },
    ],
  },
  
  {
    title: "Limpias",
    bgColor: "bg-principal",
    textColor: "text-gold",
    cardsData: [
      {
        backgroundImage: tarot15,
        title: "Limpia energética personal",
        detail: "Una velación diaria durante 2 meses, es un trabajo fuerte el cual tendra un proceso de limpia, armonización, abre caminos y al final se hace una protección.\n\nSe necesita lectura previa para este trabajo.",
        price: "$6800",
        color: color1,
      },
      {
        backgroundImage: tarot15,
        title: "Limpia antivicios",
        detail: "Es una limpia energetica personal con duración de un mes para quitar vicios (alcohol, cigarros o drogas)\n\nVelación diaria durante un mes.\n\nNo se necesita lectura previa.\n\nLa lectura la tiene que solicitar la persona que se va a limpiar (De preferencia)\n\nMás información por whats",
        price: "$3500",
        color: color1,
      },
      {
        backgroundImage: limpia_preventiva,
        title: "Limpia preventiva",
        detail: "Esta limpia es de una sola velación, se realiza cuando no quieres realizar una lectura de tarot para tener un buen diagnostico, se hace una limpia general\n\nMás información por whats",
        price: "$1200",
        color: color1,
      },
      {
        backgroundImage: tarot3,
        title: "Desamarre sencillo",
        detail: "Esta limpia de desamarre nos ayuda a quitar las cadenas que nos atan a la persona que realizo un amarre o dominio, cuando el trabajo que nos hicieron no es tan fuerte, pero nos perjudica está limpia nos funciona bien.\n\nPara realizar esta limpia es necesario estar seguros que en efecto nos hicieron este tipo de magia. \n\nEs necesaria una lectura previa",
        price: "$2000",
        color: color1,
      },
      {
        backgroundImage: tarot4,
        title: "Desamarre con separación",
        detail: "Está limpia es para quitar un amarre de amor fuerte, nos ayuda a retirar un trabajo fuerte que está perjudicando tu vida en general y quitamos de tu vida a la persona que te hizo el trabajo de amarre para que su energía no te siga afectando\n\nSe necesita una lectura previa.",
        price: "$3500",
        color: color1,
      },
      {
        backgroundImage: tarot5,
        title: "Desamarre sexual con separación y limpieza de energía",
        detail: "Está limpia quita todo trabajo de amarre, dominio, desespero, dominio sexual o cualquier trabajo de este tipo, limpiamos la energía sexual y mental de la persona afectada y se hace una separación para que la persona no siga siendo afectada por el trabajo\n\nEl proceso normalmente es de 5 días.\n\nSe necesita una lectura previa.",
        price: "$5500",
        color: color1,
      },
    ]
  },
  {
    title: "Otros trabajos",
    bgColor: "bg-gold",
    textColor: "text-principal",
    cardsData: [
      {
        backgroundImage: corte_lazos,
        title: "Corte de lazos tóxicos",
        detail: "Corte de lazos energeticos con una ex pareja que nos hace daño, descuento en caso de necesitar refuerzo",
        price: "$750",
        color: color2,
        notIncluded: ["$600 persona extra agregada"]
      },
      {
        backgroundImage: tarot1,
        title: "Volteo de copa",
        detail: "Este trabajo nos permite regresar toda la mala energia que nos han enviado ya sea brujeria o mala energia para regresarlo a su lugar de origen",
        price: "$1800",
        color: color2,
        notIncluded: ["$600 persona extra agregada"]
      },
      {
        backgroundImage: tapa_bocas,
        title: "Tapa bocas en frasco",
        detail: "Este trabajo sirve para callar a las personas que hablan mal de nosotros y por sus chismes no nos permiten avanzar en el trabajo o cualquier otro lado",
        price: "$1200",
        color: color2,
        notIncluded: ["$600 persona extra agregada"]
      },
      {
        backgroundImage: tarot9,
        title: "Numerología pitagórica completa",
        detail: "El objetivo de la numerologia es conocerte más a fondo, entender ciertos patrones o comportamientos en tu vida.\n\nVemos lo siguiente:\n\nKarma\nEsencia\nCareta\nReacción\nMisión\nSíntesis\n\nSe entrega en un PDF con explicación de todos los puntos, tiempo de espera de 3 a 6 días hábiles.",
        price: "$650",
        color: color2,
      },
    ]
  },
];

function Ritual() {
  return (
    <div className="flex flex-col">
      {sectionsData.map((section, index) => (
        <div
          key={index}
          className={`flex ${section.bgColor} mt-9 justify-center py-2 flex-col items-center`}
        >
          <div className="w-4/5 flex justify-center flex-col items-left">
            <h2 className={`text-5xl ${section.textColor} font-semibold`}>
              {section.title}
            </h2>
            <p className={`${section.mtDetail} ${section.textColor}` }>{section.detail}</p>
          </div>
          <div className="w-4/5 mt-5">
            <Carousel cardsData={section.cardsData} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Ritual;
