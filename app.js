const Discord = require("discord.js");
require('dotenv').config();

const client = new Discord.Client();
const messages = [
    "Habrá un romance para ti dentro de poco", 
    "Tienes que dormir más, lo emo ya no se lleva", 
    "Tus esfuerzos no han pasado desapercibidos, menudo zurullo", 
    "Qué buena cara tienes hoy, no pareces tú", 
    "Mira dos veces antes de cruzar la calle", 
    "Una visita al médico no te vendría mal", 
    "Hoy estás muy sexy, no lo desaproveches", 
    "El universo está tratando de decirte algo. Tu mientras bebe otra cerveza",
    "Coge otra cerveza. Te la mereces",
    "La vida son dos días, y uno está lloviendo",
    "Escucha a tu madre. Esta vez tiene razón",
    "Es más importante parecer inteligente que serlo, y eso lo haces genial",
    "Tu verdad aumentará cuando aprendas a escuchar la verdad de los otros",
    "Sé bondadoso con la gente cuando subas, los encontrarás a todos cuando bajes",
    "Pasas demasiado tiempo mirando el móvil",
    "A quien madruga, sale antes de trabajar",
    "No olvides que son las pequeñas cosas las que hacen de la vida un viaje agradable",
    "El gato que está triste y azul se llama Doraemon",
    "Haz las paces con tu pasado",
    "Gracias al autocorrector has olvidado que las esdrújulas siempre llevan tilde",
    "Le gustas a la persona que te gusta",
    "Desayunar un kiwi te ayudaría con esos problemas intestinales",
    "No eres tan especial como tu madre cree",
    "No es que no tenga tiempo, es que no tiene tiempo para ti",
    "¿Sabías que la lengua descansa en la parte de arriba de la boca?",
    "Guíñale el ojo a la próxima persona que te cruces si quieres tener suerte en el amor",
    "Hoy estás de suerte, hay croquetas recién hechas",
    "Si hubieran traducido el nombre de Pikachu se llamaría 'Rátaser'",
    "No pasaría nada si fueras un poco más detallista",
    "Afronta tus problemas, o te perseguirán por siempre",
    'Mañana tendrás cagalera',
    'Lo siento, hoy ni siquiera un filtro te arregla',
    'Si fuera tú, mañana no me subiría a ningún ascensor',
    'No es culpa tuya que tu éxito sea asintomático',
    'Si la gente jodiera más jodería menos, así que jode más',
    'Los errores ocurren, no te avergüences por ser uno de ellos',
    'Nunca olvides a un amigo. Especialmente si te debe dinero.',
    '¿Tienes presupuesto para la película que te has montado?',
    'No necesitas una compresa con alas para volar',
    'No te preocupes por ir en el último vagón del metro, luego cambia de sentido',
    'Si te ves guapo en el espejo no te ilusiones, enciende la luz',
    '¿Sabes ese gilipollas que todos llevamos dentro? Pues tú lo llevas fuera',
    'Tu cuenta bancaria no se enriquece ni con Avecrem',
    'Sonríes por encima de tus posibilidades',
    'Si ser sexy pesase, serías morbido',
    'Todos quieren que pase algo bonito en la vida, pero yo no puedo estar pasando por todos lados',
    'Tu cupido debería ir a rehabilitación',
    'Tienes tan buenas vibras como un Satisfyer',
    'Hacienda somos todos, recuérdalo',
    'Tu animal espiritual es un Pangolín',
    'Hasta Rexona te abandona'
];

client.on("ready", async () => {
    try {        
        console.log("Bot ready", messages.length);
    } catch (error) {
        console.log(error);
    }
});

client.on('message', gotMessage);

async function gotMessage(message) {
    try {
        if (message.content.startsWith('--cookie')) {
            message.channel.send(`:fortune_cookie:${messages[Math.floor(Math.random() * messages.length)]}:fortune_cookie:`);
        } else if (message.content.startsWith('--birra')) {
            message.channel.send(`:cat:`);
        } else if (message.content.startsWith('--help')) {
            message.channel.send(`Escribe '--cookie' para probar suerte`);
        }
    } catch (error) {
        console.log(error);
    }
}

client.login(process.env.KEY);