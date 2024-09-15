
//Bootstrap

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)


//Codigo propio

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);
const myrow = $('.myrow');
let tl = "nom";
let card = `
          <div class="mycol m-1 p-3  ">
              <div class="card p-4" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text"> ${tl} </p>
            </div>
            </div>
          </div>`;


let ver = 0;
const pokedex = [
["Bulbasaur", "Una extraña semilla fue plantada en su lomo al nacer. La planta brota y crece con este Pokémon."],
["Ivysaur", "Cuando el bulbo de su espalda crece, parece perder la capacidad de mantenerse en pie sobre sus patas traseras."],
["Venusaur", "La planta florece cuando absorbe energía solar. Se mantiene en movimiento para buscar la luz del sol."],
["Charmander", "Prefiere lugares cálidos. Dicen que cuando llueve, sale vapor de la punta de su cola."],
["Charmeleon", "Cuando balancea su cola ardiente, eleva la temperatura del aire a niveles increíbles."],
["Charizard", "Lanza fuego capaz de derretir rocas. Causa incendios forestales sin querer."],
["Squirtle", "Cuando retrae su largo cuello en su caparazón, lanza agua a una presión increíble."],
["Wartortle", "Se le valora como símbolo de longevidad. Su caparazón tiene algas de musgo."],
["Blastoise", "Lanza chorros de agua por los cañones de su caparazón. Los proyectiles pueden perforar el acero."],
["Caterpie", "Para protegerse, libera un hedor horrible por las antenas que tiene en la cabeza."],
["Metapod", "Aunque es blando por dentro, su caparazón resistente lo protege mientras se prepara para evolucionar."],
["Butterfree", "Sus alas están cubiertas con polvo escamoso que repele el agua. No se moja aunque llueva."],
["Weedle", "Tiene un aguijón venenoso en la cabeza. Es malo comerlo, ya que su piel es muy dura."],
["Kakuna", "Casi inmóvil mientras espera evolucionar. Puede endurecer su caparazón para protegerse."],
["Beedrill", "Vuela velozmente y clava el aguijón venenoso de sus patas traseras en el enemigo."],
["Pidgey", "Un Pokémon muy común que es fácil de capturar y que no supone ninguna amenaza."],
["Pidgeotto", "Este Pokémon se cierne en círculos en el cielo para buscar presas."],
["Pidgeot", "Con su hermoso plumaje brillante, es un Pokémon popular entre los Entrenadores."],
["Rattata", "Es muy ágil y está activo todo el tiempo. Le basta una pequeña abertura para colarse."],
["Raticate", "Sus robustos colmillos crecen continuamente. Los roe para desgastarlos."],
["Spearow", "Muy protector de su territorio. Da grandes graznidos para ahuyentar a los intrusos."],
["Fearow", "Sus largas alas le permiten volar sin esfuerzo incluso cuando lleva presas pesadas."],
["Ekans", "Se desliza por la hierba y acecha a sus presas. Cuando siente peligro, se enrolla en espiral."],
["Arbok", "Sus espeluznantes patrones intimidantes cambian según la región en la que vive."],
["Pikachu", "Cuando varios de estos Pokémon se juntan, su electricidad puede causar tormentas."],
["Raichu", "Su descarga eléctrica puede alcanzar los 100.000 voltios. Si se enfada, la descarga puede ser letal."],
["Sandshrew", "Se entierra profundamente en la tierra para protegerse del calor de la luz solar."],
["Sandslash", "Cuando se enfrenta a enemigos fuertes, se enrolla en una bola para protegerse."],
["Nidoran♀", "Su pequeño cuerno segrega veneno. Si se siente amenazado, atacará con una potente picadura."],
["Nidorina", "Es muy maternal. Prefiere la compañía de otras Nidorina en lugar de los machos."],
["Nidoqueen", "Su gruesa piel se endurece cuando se expone al sol. Usa su cuerpo como un escudo."],
["Nidoran♂", "Aunque es pequeño, su cuerno es extremadamente potente. Tiene un veneno letal."],
["Nidorino", "Extremadamente feroz. Sus cuernos tienen una punta que segrega un veneno mortal."],
["Nidoking", "Usa su gruesa cola para golpear a los enemigos con fuerza. Es fácil perderse en su territorio."],
["Clefairy", "Es adorado por muchos por su naturaleza dócil y su aspecto encantador. Prefiere moverse de noche."],
["Clefable", "Sus orejas puntiagudas pueden captar el sonido de una aguja cayendo a un kilómetro de distancia."],
["Vulpix", "Tiene seis colas que crecen con el tiempo y que se dividen de forma mística."],
["Ninetales", "Este Pokémon tiene una vida extremadamente larga, que llega a los mil años."],
["Jigglypuff", "Canta una canción suave. Si canta para dormir, puede hacer que los enemigos caigan dormidos."],
["Wigglytuff", "Su piel es extremadamente elástica. Puede inflarse hasta el doble de su tamaño original."],
["Zubat", "Se mueve a alta velocidad y utiliza la ecolocalización para orientarse en la oscuridad."],
["Golbat", "Le gusta chupar la sangre de los humanos y Pokémon. Se retuerce al sentir dolor."],
["Oddish", "Durante el día, se esconde en el suelo. Su cuerpo asoma como una raíz de planta."],
["Gloom", "Huele muy mal. Atrae a las presas y Pokémon con su olor a muerto."],
["Vileplume", "Su flor es la más grande del mundo. Emite polen que es altamente tóxico."],
["Paras", "Las esporas de los hongos de su espalda están muy valoradas como medicamento."],
["Parasect", "El hongo en su espalda absorbe todos los nutrientes del cuerpo de Paras."],
["Venonat", "Sus grandes ojos actúan como radares. Su cuerpo está cubierto de pelos finos."],
["Venomoth", "Prefiere la luz de la luna. Se siente atraído por las lámparas en la noche."],
["Diglett", "Vive bajo tierra. Se esconde de la luz solar y solo emerge en la oscuridad."],
["Dugtrio", "Es un trío de Diglett que trabajan en conjunto para cavar bajo la tierra."],
["Meowth", "Le encanta buscar objetos brillantes como monedas. Incluso puede robar los objetos de otros Pokémon."],
["Persian", "Tiene un carácter volátil. Puede atacar con sus garras afiladas si se siente amenazado."],
["Psyduck", "Es propenso a dolores de cabeza severos que activan sus poderes psíquicos."],
["Golduck", "Nada rápido y se siente muy cómodo en el agua. Caza en ríos y lagos."],
["Mankey", "Es de naturaleza agresiva. Si se enoja, no dudará en atacar."],
["Primeape", "Es muy irritable. Si lo provocan, perseguirá a su enemigo hasta que lo atrape."],
["Growlithe", "Es leal y valiente. Protege a su entrenador con su vida si es necesario."],
["Arcanine", "Es un Pokémon legendario en China. La gente lo admira por su fuerza."],
["Poliwag", "Su cuerpo es casi completamente líquido. Puede escurrirse por cualquier espacio pequeño."],
["Poliwhirl", "Es hábil para nadar y puede golpear a sus enemigos con fuertes puñetazos."],
["Poliwrath", "Es un gran luchador y es capaz de nadar enormes distancias con gran velocidad."],
["Abra", "Duerme 18 horas al día. Puede usar sus poderes psíquicos mientras duerme."],
["Kadabra", "Despierta con un fuerte dolor de cabeza. Sus poderes psíquicos son más fuertes que los de Abra."],
["Alakazam", "Su cerebro es increíblemente avanzado. Tiene un IQ de 5,000."],
["Machop", "Ama entrenar sus músculos. Puede levantar 10 veces su peso corporal."],
["Machoke", "Su fuerza es increíble. Puede levantar un autobús escolar con facilidad."],
["Machamp", "Con sus cuatro brazos, puede lanzar golpes devastadores en rápida sucesión."],
["Bellsprout", "Se alimenta de insectos pequeños. Puede extender sus enredaderas para capturar a sus presas."],
["Weepinbell", "Vive en bosques densos y sombreados. Su liana puede atrapar y digerir a otros Pokémon."],
["Victreebel", "Es muy agresivo. Su gran boca secreta un fluido digestivo que descompone a sus enemigos."],
["Tentacool", "Vive en el mar. Sus tentáculos secretan un veneno que puede paralizar a sus presas."],
["Tentacruel", "Utiliza sus tentáculos para capturar a sus presas y drenar sus fluidos corporales."],
["Geodude", "A menudo es confundido con una roca. Su cuerpo es tan duro como el acero."],
["Graveler", "Rueda por colinas y montañas para moverse. Puede resistir grandes impactos."],
["Golem", "Su cuerpo está cubierto de una roca dura y resistente. Puede sobrevivir a erupciones volcánicas."],
["Ponyta", "Su cuerpo es cálido. Si nace débil, su llama nunca se encenderá."],
["Rapidash", "Corre a velocidades superiores a los 240 km/h. Puede alcanzar su máxima velocidad en sólo 10 pasos."],
["Slowpoke", "Es increíblemente perezoso y tiene un tiempo de reacción muy lento."],
["Slowbro", "Una vez que un Shellder se ha prendido de su cola, Slowpoke evoluciona a Slowbro."],
["Magnemite", "Genera ondas de radio que pueden interferir con los equipos electrónicos."],
["Magneton", "Cuando se unen, generan un campo magnético tan fuerte que pueden causar apagones."],
["Farfetch'd", "Lleva un puerro que utiliza como arma. Protege su puerro a toda costa."],
["Doduo", "Sus dos cabezas nunca duermen al mismo tiempo. Una siempre está alerta."],
["Dodrio", "Las tres cabezas de Dodrio representan alegría, tristeza y enojo."],
["Seel", "Vive en mares fríos. Su cuerpo es grueso y le permite nadar en aguas heladas."],
["Dewgong", "Nada con elegancia bajo el agua. Sus aletas están hechas para nadar rápidamente."],
["Grimer", "Nació cuando residuos tóxicos cobraron vida. Está hecho de lodo contaminado."],
["Muk", "Es muy tóxico. Un solo toque puede hacer que la vegetación circundante muera."],
["Shellder", "Vive en el fondo del océano. Usa su lengua como ancla para evitar ser arrastrado."],
["Cloyster", "Su caparazón es extremadamente duro. Solo un impacto muy fuerte puede romperlo."],
["Gastly", "Su cuerpo es una nube de gas. Cualquier viento fuerte puede dispersarlo."],
["Haunter", "A menudo se oculta en las paredes para esperar y sorprender a sus presas."],
["Gengar", "Le gusta jugar bromas pesadas a la gente. Se esconde en las sombras y les hace pasar miedo."],
["Onix", "Se desplaza bajo tierra a gran velocidad. Su cuerpo es tan duro como el acero."],
["Drowzee", "Puede hipnotizar a las personas y alimentarse de sus sueños mientras duermen."],
["Hypno", "Si miras a los ojos de Hypno, podrías quedar hipnotizado y no despertar."],
["Krabby", "Vive en playas rocosas y combate con sus pinzas. Sus pinzas son tan fuertes como el acero."],
["Kingler", "Sus grandes pinzas son muy fuertes. Puede cortar cables de acero con facilidad."],
["Voltorb", "Se asemeja a una Poké Ball. Es muy inestable y explota al mínimo toque."],
["Electrode", "Genera energía eléctrica almacenándola en su cuerpo. Es propenso a explotar."],
["Exeggcute", "Es un conjunto de huevos que se comunican telepáticamente entre sí."],
["Exeggutor", "Sus cabezas piensan de manera independiente. No siempre están de acuerdo."],
["Cubone", "Lleva el cráneo de su madre fallecida como casco. Llora por las noches."],
["Marowak", "Ha superado la tristeza por la pérdida de su madre. Es un luchador valiente."],
["Hitmonlee", "Sus piernas pueden estirarse para lanzar patadas devastadoras desde lejos."],
["Hitmonchan", "Es un luchador nato. Puede lanzar puñetazos a la velocidad de la luz."],
["Lickitung", "Su larga lengua es más fuerte que una mano. Puede capturar presas fácilmente."],
["Koffing", "Flota porque su cuerpo está lleno de gases venenosos. Es muy explosivo."],
["Weezing", "Sus dos cuerpos están conectados por un flujo constante de gas tóxico."],
["Rhyhorn", "Es muy fuerte, pero no muy inteligente. Corre sin pensar y destruye todo a su paso."],
["Rhydon", "Su cuerpo es resistente a las altas temperaturas y puede caminar sobre lava."],
["Chansey", "Lleva un huevo nutritivo en su bolsa ventral. Comparte sus huevos con los heridos."],
["Tangela", "Su cuerpo está cubierto de enredaderas azules. Si se desprenden, vuelven a crecer."],
["Kangaskhan", "Protege a su cría en la bolsa ventral. Atacará sin piedad si su cría está en peligro."],
["Horsea", "Vive en el fondo del mar. Usa su cola para anclarse a las rocas y evitar ser arrastrado."],
["Seadra", "Lanza chorros de agua a alta presión para derribar a sus enemigos y presas."],
["Goldeen", "Nada elegantemente en ríos y lagos. Tiene un cuerno en la cabeza que utiliza para defenderse."],
["Seaking", "Durante la temporada de apareamiento, su cuerpo se vuelve de un color rojo brillante."],
["Staryu", "Puede regenerar cualquier parte de su cuerpo. Si pierde un brazo, crecerá uno nuevo."],
["Starmie", "Emite una luz radiante desde su núcleo central. Los antiguos la llamaban 'la joya del mar'."],
["Mr. Mime", "Puede crear barreras invisibles con sus movimientos de mímica. Se comunica a través del lenguaje corporal."],
["Scyther", "Es increíblemente rápido y ágil. Sus cuchillas cortan el aire mientras lucha."],
["Jynx", "Baila rítmicamente y atrae a las personas. Sus besos son muy peligrosos."],
["Electabuzz", "Genera electricidad estática mientras corre. A menudo causa apagones en las ciudades."],
["Magmar", "Vive cerca de los volcanes. Su cuerpo está en constante erupción de llamas."],
["Pinsir", "Puede aplastar a sus enemigos con sus pinzas. Es muy fuerte y resistente."],
["Tauros", "Corre por las praderas con sus tres colas ondeando. Es muy temperamental."],
["Magikarp", "Es un nadador muy débil. Su único ataque es chapotear en el agua."],
["Gyarados", "Es extremadamente feroz y destructivo. Puede destruir ciudades en su furia."],
["Lapras", "Es conocido por llevar a las personas a través del mar. Es un Pokémon muy gentil."],
["Ditto", "Puede transformarse en cualquier cosa que vea. Es un maestro del disfraz."],
["Eevee", "Su estructura genética inestable le permite evolucionar en diferentes formas."],
["Vaporeon", "Tiene la habilidad de convertirse en agua. Es un excelente nadador."],
["Jolteon", "Su cuerpo genera electricidad estática. Puede disparar rayos de electricidad."],
["Flareon", "Su cuerpo contiene llamas ardientes. Exhala un fuego abrasador."],
["Porygon", "Fue creado por científicos. Puede entrar en el ciberespacio."],
["Omanyte", "Es un fósil revivido. Sus tentáculos le permiten nadar con gracia."],
["Omastar", "Sus conchas en espiral son muy duras. Puede triturar sus presas con ellas."],
["Kabuto", "Ha permanecido inalterado durante 300 millones de años. Es un fósil viviente."],
["Kabutops", "Sus afiladas garras le permiten cortar a sus presas con facilidad."],
["Aerodactyl", "Es un Pokémon prehistórico que se cree que dominó los cielos en la antigüedad."],
["Snorlax", "Es extremadamente perezoso. Duerme todo el día y solo se despierta para comer."],
["Articuno", "Este Pokémon legendario puede controlar el hielo. Se dice que vuela por montañas nevadas."],
["Zapdos", "Es un Pokémon legendario que controla la electricidad. Se dice que aparece durante tormentas eléctricas."],
["Moltres", "Es un Pokémon legendario que controla el fuego. Se dice que vuela rodeado de llamas."],
["Dratini", "Vive en el fondo de los ríos. Su cuerpo es largo y serpenteante."],
["Dragonair", "Es un Pokémon muy elegante y poderoso. Puede controlar el clima."],
["Dragonite", "Es un Pokémon amigable que salva a las personas que se ahogan en el mar."],
["Mewtwo", "Fue creado por científicos. Es el Pokémon más fuerte conocido."],
["Mew", "Se dice que contiene el ADN de todos los Pokémon. Es extremadamente raro y misterioso."]
]
const tipos = ["","bug","dark","dragon","poison","fairy","figth","fire","fly","ghost","grass","ground","ice","normal","psychic","rock","steel","water","electric"];
const pokestipos = [
  ["Bulbasaur", 10, 4], ["Ivysaur", 10, 4], ["Venusaur", 10, 4], ["Charmander", 7, 0], ["Charmeleon", 7, 0], ["Charizard", 7, 8],
["Squirtle", 17, 0], ["Wartortle", 17, 0], ["Blastoise", 17, 0], ["Caterpie", 1, 0], ["Metapod", 1, 0], ["Butterfree", 1, 8],
["Weedle", 1, 4], ["Kakuna", 1, 4], ["Beedrill", 1, 4], ["Pidgey", 13, 8], ["Pidgeotto", 13, 8], ["Pidgeot", 13, 8],
["Rattata", 13, 0], ["Raticate", 13, 0], ["Spearow", 13, 8], ["Fearow", 13, 8], ["Ekans", 4, 0], ["Arbok", 4, 0],
["Pikachu", 18, 0], ["Raichu", 18, 0], ["Sandshrew", 11, 0], ["Sandslash", 11, 0], ["Nidoran♀", 4, 0], ["Nidorina", 4, 0],
["Nidoqueen", 4, 11], ["Nidoran♂", 4, 0], ["Nidorino", 4, 0], ["Nidoking", 4, 11], ["Clefairy", 5, 0], ["Clefable", 5, 0],
["Vulpix", 7, 0], ["Ninetales", 7, 0], ["Jigglypuff", 5, 13], ["Wigglytuff", 5, 13], ["Zubat", 4, 9], ["Golbat", 4, 9],
["Oddish", 10, 4], ["Gloom", 10, 4], ["Vileplume", 10, 4], ["Paras", 1, 10], ["Parasect", 1, 10], ["Venonat", 1, 4],
["Venomoth", 1, 4], ["Diglett", 11, 0], ["Dugtrio", 11, 0], ["Meowth", 13, 0], ["Persian", 13, 0], ["Psyduck", 17, 0],
["Golduck", 17, 0], ["Mankey", 6, 0], ["Primeape", 6, 0], ["Growlithe", 7, 0], ["Arcanine", 7, 0], ["Poliwag", 17, 0],
["Poliwhirl", 17, 0], ["Poliwrath", 17, 6], ["Abra", 14, 0], ["Kadabra", 14, 0], ["Alakazam", 14, 0], ["Machop", 6, 0],
["Machoke", 6, 0], ["Machamp", 6, 0], ["Bellsprout", 10, 4], ["Weepinbell", 10, 4], ["Victreebel", 10, 4], ["Tentacool", 17, 4],
["Tentacruel", 17, 4], ["Geodude", 11, 15], ["Graveler", 11, 15], ["Golem", 11, 15], ["Ponyta", 7, 0], ["Rapidash", 7, 0],
["Slowpoke", 17, 14], ["Slowbro", 17, 14], ["Magnemite", 18, 16], ["Magneton", 18, 16], ["Farfetch'd", 8, 6], ["Doduo", 13, 8],
["Dodrio", 13, 8], ["Seel", 17, 0], ["Dewgong", 17, 12], ["Grimer", 4, 0], ["Muk", 4, 0], ["Shellder", 17, 0],
["Cloyster", 17, 12], ["Gastly", 9, 4], ["Haunter", 9, 4], ["Gengar", 9, 4], ["Onix", 11, 15], ["Drowzee", 14, 0],
["Hypno", 14, 0], ["Krabby", 17, 0], ["Kingler", 17, 0], ["Voltorb", 18, 0], ["Electrode", 18, 0], ["Exeggcute", 10, 14],
["Exeggutor", 10, 14], ["Cubone", 11, 0], ["Marowak", 11, 0], ["Hitmonlee", 6, 0], ["Hitmonchan", 6, 0], ["Lickitung", 13, 0],
["Koffing", 4, 0], ["Weezing", 4, 0], ["Rhyhorn", 11, 15], ["Rhydon", 11, 15], ["Chansey", 13, 0], ["Tangela", 10, 0],
["Kangaskhan", 13, 0], ["Horsea", 17, 0], ["Seadra", 17, 0], ["Goldeen", 17, 0], ["Seaking", 17, 0], ["Staryu", 17, 0],
["Starmie", 17, 14], ["Mr. Mime", 14, 5], ["Scyther", 1, 8], ["Jynx", 12, 14], ["Electabuzz", 18, 0], ["Magmar", 7, 0],
["Pinsir", 1, 0], ["Tauros", 13, 0], ["Magikarp", 17, 0], ["Gyarados", 17, 8], ["Lapras", 17, 12], ["Ditto", 13, 0],
["Eevee", 13, 0], ["Vaporeon", 17, 0], ["Jolteon", 4, 0], ["Flareon", 7, 0], ["Porygon", 13, 0], ["Omanyte", 17, 15],
["Omastar", 17, 15], ["Kabuto", 11, 15], ["Kabutops", 11, 15], ["Aerodactyl", 15, 8], ["Snorlax", 13, 0], ["Articuno", 12, 8],
["Zapdos", 18, 8], ["Moltres", 7, 8], ["Dratini", 3, 0], ["Dragonair", 3, 0], ["Dragonite", 3, 8], ["Mewtwo", 14, 0],
["Mew", 14, 0],
]
const superef = [
  ["normal", undefined],  
  ["fire", "grass", "ice", "bug", "steel"],  
  ["water", "fire", "ground", "rock"],  
  ["electric", "water", "fly"],  
  ["grass", "water", "ground", "rock"],  
  ["ice", "grass", "ground", "fly", "dragon"],  
  ["figth", "normal", "ice", "rock", "dark", "steel"],  
  ["poison", "grass", "fairy"],  
  ["ground", "fire", "electric", "poison", "rock", "steel"],  
  ["fly", "grass", "figth", "bug"],  
  ["psychic", "figth", "poison"],  
  ["bug", "grass", "psychic", "dark"],  
  ["rock", "fire", "ice", "fly", "bug"],  
  ["ghost", "psychic", "ghost"],  
  ["dragon", "dragon"],  
  ["dark", "psychic", "ghost"],  
  ["steel", "ice", "rock", "fairy"],  
  ["fairy", "figth", "dragon", "dark"]
]
const inef  =[
["normal", "steel"],  
["fire", "fire", "water", "rock", "dragon"],  
["water", "water", "grass", "dragon"],  
["electric", "electric", "grass", "dragon"],  
["grass", "fire", "grass", "poison", "fly", "bug", "dragon", "steel"],  
["ice", "fire", "water", "ice", "steel"],  
["figth", "poison", "fly", "psychic", "bug", "fairy"],  
["poison", "poison", "ground", "rock", "ghost"],  
["ground", "grass", "bug"],  
["fly", "electric", "rock", "steel"],  
["psychic", "psychic", "steel"],  
["bug", "fire", "figth", "poison", "fly", "ghost", "steel", "fairy"],  
["rock", "figth", "ground", "steel"],  
["ghost", "dark"],  
["dragon", "steel"],  
["dark", "figth", "dark", "fairy"],  
["steel", "fire", "water", "electric", "steel"],  
["fairy", "fire", "poison", "steel"]
]
const inmunes = [
["normal", "ghost"],  
["electric", "ground"],  
["figth", "ghost"],  
["poison", "steel"],  
["ground", "fly"],  
["psychic", "dark"],  
["ghost", "normal"],  
["dragon", "fairy"]
]
function verm(){
    
    ver+=12;
    if(ver>151){
        ver = 151;
    }
    let conts= 0;
    myrow.innerHTML = "";
    for(let i=0;i<ver;i++){ 
        tl= pokedex[i][0];
        conts++;
        let nmmod = i<9 ? `00${i+1}` : i<99 ? `0${i+1}` : `${i+1}`;  
        img = `fotos/${nmmod}.png`; 
        let tipo1,tipo2;
        for(let j=0;j<151;j++){
          if(tl==pokestipos[j][0]){
            tipo1=pokestipos[j][1];
            tipo2=pokestipos[j][2];
            break;
          }
        }

        card = `<div class="mycol m-1 p-3  ">
              <div class="card p-4" onclick="rotar(this)" style="width: 18rem;">
            <img src="${img}" class="card-img-top" alt="...">
            <div class="card-body">
              <p class="card-text"> ${tl} <br>          
              </p> 
                <input id="oculto" type="hidden" value="${conts}"> 
                <div class="row">
                  <div class="tipopoke1 col p-2" style="background-image: url(img/${tipos[tipo1] }.png);"></div>
                  <div class="tipopoke2 col p-2" style="background-image: url(img/${tipos[tipo2] }.png);"></div>
                </div>
            </div>
            </div>
          </div>`;

        myrow.innerHTML += card;
    }
    
    if(ver==151){
        $('#butmos').style.display = 'none';
    }
}

let rots = []; 
function rotar(car){
  const img =   car.querySelector('.card-img-top');
  const num = car.querySelector('#oculto');
  const text = car.querySelector('.card-text');
  let v= num.value;
  v--; 
  if(rots[v] != undefined){
    rots[v] += 180;
  }else{
    rots[v] = 180;
  }
  while(rots[v]>180){
    rots[v]-=360;
  }
  car.style.transform = `RotateY(${rots[v]}deg) `;
  let tipo1 = car.querySelector('.tipopoke1');
  let tipo2 = car.querySelector('.tipopoke2');
  if(rots[v] == 180){
    img.style.transform = `RotateY(90deg)`;
    setTimeout(()=>{
      img.style.display = `none`;
    },500)
    img.style.transform = `RotateY(90deg)`;
    car.style.backgroundColor = '#ffe';
    car.style.border = '5px solid rgba(0, 0, 0, 0.175)';
    setTimeout(()=>{
      text.innerHTML = "<h3>"+ pokedex[v][0] + "</h3> <br> " +  pokedex[v][1]; 
    },500);
    text.style.transform = 'RotateY(180deg)';
    tipo1.style.transform = 'RotateY(180deg)';
    tipo2.style.transform = 'RotateY(180deg)';

  }else{
    car.style.backgroundColor = '#fff';  
    img.style.transform = `RotateY(0deg) `;
    car.style.border = 'rgba(0, 0, 0, 0.175) 1px solid';
    setTimeout(()=>{
      img.style.display = `block`; 
      text.innerHTML =  pokedex[v][0];  
    },500);
    text.style.transform = 'RotateY(0deg)';
    tipo1.style.transform = 'RotateY(0deg)';
    tipo2.style.transform = 'RotateY(0deg)';
  }



}

function cargatipos(){
  const select1 = $('#select1');
  
  for(let i=1;i<tipos.length;i++){
    if(i==6){
      select1.innerHTML+='<br>';
    }
    select1.innerHTML+= `<img class="selecttipo" title="${tipos[i]}" onclick="mostrarselect(this)" src="img/${tipos[i]}.png" alt="">` ;
  }

  

}
var tiposselect = [];
var tipoanterior = null;
function mostrarselect(el){
  const hselect = $$('.selecttipo'); 
  hselect.forEach(element => {
    element.style.filter = 'grayscale(1)';
    el.style.transform  ='scale(1)';
  });
  try{
    tipoanterior.style.filter = 'none';
    // tipoanterior.style.transform  ='scale(1.1)';
    
  }catch{}
  el.style.transform  ='scale(1.1)';
  el.style.filter = 'none';
  tiposselect.push(el.title); 
  tipoanterior = el;
  if(tiposselect.length>2){
    tiposselect.shift();
  }
}
const barradeprog = $('#progresoresult');
const elresult = $('.results');
let largobarra;
let firstrepe = true;
function calculartipo(){
  if(tiposselect[1]==tiposselect[0]){
    tiposselect.pop();
  }
  if(firstrepe){
    largobarra=0;
    calculobarra();
  }
  firstrepe = !firstrepe;
  if(elresult.style.height=='0px'){
    elresult.style.height='600px';
    if(tiposselect[1]!=undefined){
      calcular2tipo();
    }else{
      calcular1tipo();
    } 
  }else{
    
    elresult.style.height='0px';
    setTimeout(() => {
      calculartipo();
    }, 2000);
    }
}
function calculobarra(){
  barradeprog.style.width = largobarra + '%';
  largobarra++;
  if(largobarra<=100){
    setTimeout(() => {
      calculobarra();
    }, 10); 
  }
}



const vertipossel = $('#vertipossel');
const debilidades = $('#debilidades');
const resistencias = $('#resistencias');
const inmunidades = $('#inmunidades');
function calcular1tipo(){
  const img1 = `<img src="img/${tiposselect[0]}.png" alt="">`
  vertipossel.innerHTML=img1;
  debilidades.innerHTML="";
  resistencias.innerHTML="";
  inmunidades.innerHTML="";
  let textdebilidades ="";
  let textresistencias = "";
  //Mucho daño frente a:
  for(let i=0;i<superef.length;i++){
    let actsuperf = superef[i];
    for(let j=1;j<actsuperf.length;j++){
      if(actsuperf[j]==tiposselect[0]){
        textdebilidades+=`<img src="img/${superef[i][0]}.png" alt="">`
      }
    }
  }
  debilidades.innerHTML=textdebilidades;

  // Resistente a:
  for(let i=0;i<superef.length;i++){
    let actsuperf = inef[i];
    for(let j=1;j<actsuperf.length;j++){
      if(actsuperf[j]==tiposselect[0]){
        textresistencias+=`<img src="img/${superef[i][0]}.png" alt="">`
      }
    }
  }
  resistencias.innerHTML = textresistencias;

  //Inmune a:
  let inmunemostra = false;
  for(let i=0;i<inmunes.length;i++){
    if(inmunes[i][1] == tiposselect[0]){
      if(!inmunemostra){
        inmunidades.innerHTML+= `<h5> Es inmune a los ataques de tipo: </h5>`;
      }
      inmunemostra=true;
      inmunidades.innerHTML+= `<img src="img/${inmunes[i][0]}.png" alt="">`;
    }
  }
  for(let i=0;i<inmunes.length;i++){
    if(inmunes[i][1] == tiposselect[1]){
      if(!inmunemostra){
        inmunidades.innerHTML+= `<h5> Es inmune a los ataques de tipo: </h5>`;
      }
      inmunemostra=true;
      inmunidades.innerHTML+= `<img src="img/${inmunes[i][0]}.png" alt="">`;
    }
  }
  if(debilidades.innerHTML == ""){
    $('#debilidadtitle').innerHTML="";
  }else{
    $('#debilidadtitle').innerHTML="Recibe mucho daño de los ataques de tipos:"
  }
  if(resistencias.innerHTML == ""){
    $('#resistenciatitle').innerHTML="";
  }else{
    $('#resistenciatitle').innerHTML="Es resistente contra ataques de tipo:"
  }
}
function calcular2tipo(){
  const img1 = `<img src="img/${tiposselect[0]}.png" alt="">`
  const img2 = `<img src="img/${tiposselect[1]}.png" alt="">`
  vertipossel.innerHTML=img1 + img2;
  debilidades.innerHTML="";
  resistencias.innerHTML="";
  inmunidades.innerHTML="";
  let textdebilidades =[];
  let textresistencias = [];
  //Mucho daño frente a:
  for(let i=0;i<superef.length;i++){
    let actsuperf = superef[i];
    for(let j=1;j<actsuperf.length;j++){
      if(actsuperf[j]==tiposselect[0]){
        textdebilidades.push(superef[i][0]);
      }
    }
  }
  for(let i=0;i<superef.length;i++){
    let actsuperf = superef[i];
    for(let j=1;j<actsuperf.length;j++){
      if(actsuperf[j]==tiposselect[1]){
        textdebilidades.push(superef[i][0]);
      }
    }
  }

  // Resistente a:
  for(let i=0;i<superef.length;i++){
    let actsuperf = inef[i];
    for(let j=1;j<actsuperf.length;j++){
      if(actsuperf[j]==tiposselect[0]){
        textresistencias.push(superef[i][0]);
      }
    }
  }
  for(let i=0;i<superef.length;i++){
    let actsuperf = inef[i];
    for(let j=1;j<actsuperf.length;j++){
      if(actsuperf[j]==tiposselect[1]){
        textresistencias.push(superef[i][0]);
      }
    }
  }
  //Inmune a:
  for(let i=0;i<textdebilidades.length;i++){
    if(textresistencias.includes(textdebilidades[i])){
      let postextdeb = textresistencias.indexOf(textdebilidades[i]);
      textresistencias[postextdeb] = "";
      textdebilidades[i]="";
    }
  }
  
  
  let textresistenciassind = [...new Set(textresistencias)];
  
  let textdebilidadessind = [...new Set(textdebilidades)];
  
  textresistencias = textresistenciassind;
  textdebilidades  = textdebilidadessind;

  
  let inmunemostra = false;
  for(let i=0;i<inmunes.length;i++){
    if(inmunes[i][1] == tiposselect[0]){
      if(!inmunemostra){
        inmunidades.innerHTML+= `<h5> Es inmune a los ataques de tipo: </h5>`;
      }
      inmunemostra=true;
      inmunidades.innerHTML+= `<img src="img/${inmunes[i][0]}.png" alt="">`;
      try{ textdebilidades[textdebilidades.indexOf(inmunes[i][0])] = "";}catch{};
      try{ textresistencias[textresistencias.indexOf(inmunes[i][0])] = "";}catch{};
    }
    if(inmunes[i][1] == tiposselect[1]){
      if(!inmunemostra){
        inmunidades.innerHTML+= `<h5> Es inmune a los ataques de tipo: </h5>`;
      }
      inmunemostra=true;
      inmunidades.innerHTML+= `<img src="img/${inmunes[i][0]}.png" alt="">`;
      try{ textdebilidades[textdebilidades.indexOf(inmunes[i][0])] = "";}catch{};
      try{ textresistencias[textresistencias.indexOf(inmunes[i][0])] = "";}catch{};
    }
  }

  textresistencias.forEach(element => {
    resistencias.innerHTML+= `<img src="img/${element}.png" class="m-1" alt="">`;
  });
  textdebilidades.forEach(element => {
    debilidades.innerHTML+= `<img src="img/${element}.png" class="m-1" alt="">`;
  });


  if(debilidades.innerHTML == ""){
    $('#debilidadtitle').innerHTML="";
  }else{
    $('#debilidadtitle').innerHTML="Recibe mucho daño de los ataques de tipo:"
  }
  if(resistencias.innerHTML == ""){
    $('#resistenciatitle').innerHTML="";
  }else{
    $('#resistenciatitle').innerHTML="Es resistente contra ataques de tipo:"
  }


}



const lideres = [
  ["BROCK", "rock", "primer líder de gimnasio", "Es el líder del gimnasio de Ciudad Plateada. Especializado en Pokémon de tipo roca, es conocido por su personalidad seria y su fuerte sentido de la responsabilidad."],  
  ["MISTY", "water", "segunda líder de gimnasio", "Líder del gimnasio de Ciudad Celeste. Es una entrenadora de Pokémon de tipo agua, famosa por su amor por estos Pokémon y su actitud decidida."],  
  ["LT. SURGE", "electric", "tercer líder de gimnasio", "El líder del gimnasio de Ciudad Carmín. Es un exmilitar con una personalidad dura, conocido por su habilidad con los Pokémon de tipo eléctrico."],  
  ["ERIKA", "grass", "cuarta líder de gimnasio", "Líder del gimnasio de Ciudad Azulona. Es una experta en Pokémon de tipo planta y tiene una personalidad tranquila y elegante."],  
  ["KOGA", "poison", "quinto líder de gimnasio", "Es el líder del gimnasio de Ciudad Fucsia. Especializado en Pokémon de tipo veneno, también es un ninja experto en tácticas defensivas."],  
  ["SABRINA", "psychic", "sexta líder de gimnasio", "Líder del gimnasio de Ciudad Azafrán. Conocida por sus poderes psíquicos, es una entrenadora formidable de Pokémon de tipo psíquico."],  
  ["BLAINE", "fire", "séptimo líder de gimnasio", "El líder del gimnasio de Isla Canela. Es un experto en Pokémon de tipo fuego y disfruta de los acertijos, siempre poniendo a prueba a sus desafiantes."],  
  ["GIOVANNI", "ground", "octavo líder de gimnasio", "Líder del gimnasio de Ciudad Verde y jefe del equipo criminal Team Rocket. Se especializa en Pokémon de tipo tierra y es un villano astuto."]  
]
const pokeslideres = [
  ["BROCK", ["Geodude lv 12", "Onix lv 14"]],  
  ["MISTY", ["Staryu lv 16", "Starmie lv 19"]],  
  ["LT. SURGE", ["Voltorb lv 21", "Pikachu lv 18", "Raichu lv 24"]],  
  ["ERIKA", ["Victreebel lv 29", "Tangela lv 24", "Vileplume lv 29"]],  
  ["KOGA", ["Koffing lv 36", "Muk lv 39", "Koffing lv 36", "Weezing lv 43"]],  
  ["SABRINA", ["Kadabra lv 38", "Mr. Mime lv 37", "Venomoth lv 36", "Alakazam lv 43"]],  
  ["BLAINE", ["Growlithe lv 42", "Ponyta lv 40", "Rapidash lv 42", "Arcanine lv 47"]],  
  ["GIOVANNI", ["Rhyhorn lv 50", "Dugtrio lv 51", "Nidoqueen lv 55", "Nidoking lv 55", "Rhydon lv 53"]]
]
let cardtrain; 
const cntentr = $('#entrenadores');
function cargaentre(){
  for(let i=0;i<8;i+=2){
    let pokes1="",pokes2="";
    let pokesforimg1 = [],pokesforimg2 = [];
    
    for (let j = 0; j < pokeslideres[i][1].length; j++) {
      for (let k = 0; k < pokedex.length; k++) {
        if( pokeslideres[i][1][j].includes(pokedex[k][0])   ){
          pokesforimg1.push(k);
        }
      }  
    }
    for (let j = 0; j < pokeslideres[i+1][1].length; j++) {
      for (let k = 0; k < pokedex.length; k++) {
        if(pokeslideres[i+1][1][j].includes(pokedex[k][0])){
          pokesforimg2.push(k);
        }
      }  
    }
    let imgs1 = [],imgs2 =[];
    pokesforimg1.forEach(i => {
      let nl =  i<9 ? `00${i+1}` : i<99 ? `0${i+1}` : `${i+1}` ;  
      imgs1.push( `<img src="fotos/${nl}.png" class="imgcuadradapoke" alt="..."></img>`);
    }); 
    pokesforimg2.forEach(i => {
      let nl =  i<9 ? `00${i+1}` : i<99 ? `0${i+1}` : `${i+1}` ;  
      imgs2.push( `<img src="fotos/${nl}.png" class="imgcuadradapoke" alt="..."></img>`);
    }); 


    for (let j = 0; j < pokeslideres[i][1].length; j++) {
      pokes1+=`<a class="d-inline-flex focus-ring p-3 m-2 py-1 px-2 text-decoration-none border rounded-2 saltar" onclick="vercartaentre(this)" style="min-width: 250px;"  >  
        ${imgs1[j]}
        <div class=" w-100 p-4"> ${pokeslideres[i][1][j]}</div>
      </a>`;
    } 
    for (let j = 0; j < pokeslideres[i+1][1].length; j++) {
      pokes2+=`<a class="d-inline-flex focus-ring p-3 m-2 py-1 px-2 text-decoration-none border rounded-2 saltar" onclick="vercartaentre(this)" style="min-width: 250px;" > 
        ${imgs2[j]}
        <div class=" w-100 p-4"> ${pokeslideres[i+1][1][j]}</div>
      </a>`; 
    }


    

    cardtrain = 
    `
    <div class="col-1"></div>
    <div class="col-5 d-flex justify-content-center">
            <div class="card mb-3" style="max-width: 540px; height: auto; overflow: hidden;">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="img/lideres/${i+1}.png" class="img-fluid rounded-start acomodoimg" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${lideres[i][0]}</h5>
                    <p class="card-text"> ${lideres[i][3]} </p>
                    <p class="card-text"><small class="text-body-secondary">
                      <img src="img/${lideres[i][1]}.png" class="m-1" alt="">
                    </small></p>
                    <p class="card-text text-end text-capitalize">${lideres[i][2]} </p>
                    
                    ${pokes1}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
    <div class="col-5 d-flex justify-content-center">
            <div class="card mb-3" style="max-width: 540px; height:auto; overflow: hidden;">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="img/lideres/${i+2}.png" class="img-fluid rounded-start acomodoimg" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${lideres[i+1][0]}</h5>
                    <p class="card-text"> ${lideres[i+1][3]} </p>
                    <p class="card-text"><small class="text-body-secondary">
                      <img src="img/${lideres[i+1][1]}.png" class="m-1" alt="">
                    </small></p>
                    <p class="card-text text-end text-capitalize">${lideres[i+1][2]} </p>
                    ${pokes2}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
    <div class="col-1"></div>`; 
    cntentr.innerHTML +=cardtrain;
  }   
}

function iniciosesion(){
  const correo = $('#floatingInput');
  const contraseña = $('#floatingPassword');
  // const scontraseña = $('#floatingPassword2');
  const alertaini = $('#alertaini');
  const nombre = $('#floatingname');
  // if(contraseña.value != scontraseña.value){
  //   contraseña.classList.add('is-invalid');
  //   scontraseña.classList.add('is-invalid');
  //   alertaini.innerHTML = "Las contraseñas ingresadas no coinciden";
  //   return;
  // }

  if(nombre.value == "") nombre.classList.add('is-invalid');

  if(correo.value == "") correo.classList.add('is-invalid');
  
  if(contraseña.value == "") contraseña.classList.add('is-invalid');
  
  // if(scontraseña.value == "") scontraseña.classList.add('is-invalid');

  if(correo.value == "" || contraseña.value=="" || nombre.value =="" /*|| scontraseña.value==""*/){
    alertaini.innerHTML = "Es necesario rellenar todos los campos";
    return;
  }
  const cntesperada = localStorage.getItem(correo.value);
  if(contraseña.value!=cntesperada){
    alertaini.innerHTML = "El correo o la contraseña son incorrectos";
    contraseña.value="";
    // scontraseña.value="";
    contraseña.classList.add('is-invalid');
    return;
  }
  localStorage.setItem("actual",nombre.value);
  window.location.replace("index.html");
}

function crearcuenta(){
  const correo = $('#floatingInput');
  const contraseña = $('#floatingPassword');
  const scontraseña = $('#floatingPassword2');
  const alertaini = $('#alertaini');
  const nombrecompleto = $('#floatingfullname');
  const nombre = $('#floatingname');
  if(contraseña.value != scontraseña.value){
    contraseña.classList.add('is-invalid');
    scontraseña.classList.add('is-invalid');
    alertaini.innerHTML = "Las contraseñas ingresadas no coinciden";
    return;
  }

  let vernomcmp = "" + nombrecompleto.value;
  for (let i = 0; i < 9; i++) {
    if(vernomcmp.includes(""+i)){
      alertaini.innerHTML= "El nombre completo no puede contener numeros";
      return;
    }
  }
  if(nombre.value == "") nombre.classList.add('is-invalid');

  if(correo.value == "") correo.classList.add('is-invalid');
  
  if(contraseña.value == "") contraseña.classList.add('is-invalid');
  
  if(scontraseña.value == "") scontraseña.classList.add('is-invalid');

  if(correo.value == "" || contraseña.value=="" || nombre.value =="" || scontraseña.value=="" || nombrecompleto.value==""){
    alertaini.innerHTML = "Es necesario rellenar todos los campos";
    return;
  }
  localStorage.setItem(correo.value,contraseña.value);
  window.location.replace("login.html");
  
}

function vercuenta(){
  const vercuenta = $('#vercuenta');
  if(localStorage.getItem("actual")){
    
    vercuenta.innerHTML = `
    <span class="text-bg-light p-3 cuenta" onclick="cerrarsesion()"> ${localStorage.getItem("actual")} <i class="bi bi-person-circle"></i>   </span>`; 
  }else{
    vercuenta.innerHTML = `<button onclick="window.location.replace('login.html')" type="button" class="btn btn-outline-primary me-2">Iniciar Sesion</button>
            <button onclick="window.location.replace('signup.html')" type="button" class="btn btn-primary">Crear Cuenta</button> `;
  }
}
function cerrarsesion(){
  const toasttext = $('#textctoast');
  const toastb = $('#liveToast');
  const tltoast = $('#tltoast');
  toastb.classList.remove('bg-danger');   
  toastb.classList.add('bg-info');
  tltoast.innerHTML='¿Desea cerrar sesión?';
  toasttext.innerHTML= `La sesion sera cerrada y pasara automaticamente al inicio de sesión para iniciar con otra cuenta.<br>
  <button type="button" class="btn btn-danger btn-sm" onclick="localStorage.setItem('actual',''); window.location.replace('login.html')">Cerrar sesión</button> `;
  toastBootstrap.show()
}

function vercartaentre(el){
  const tapar = $('.tapar');
  tapar.style.display='flex';
  
  const npoke = el.innerHTML;
  let nom = "" + el.textContent;
  nom = nom.trim();
  nom = nom.substring(0,nom.length-6);
  let pospoke;
  for (let i = 0; i < pokedex.length; i++) {
    if(pokedex[i][0]==nom){
      pospoke=i; 
    }
  }
  let poket = [];
  for (let i = 0; i < pokestipos.length; i++) {
    if(pokestipos[i][0]==nom){
       poket.push(tipos[pokestipos[i][1]])
       poket.push(tipos[pokestipos[i][2]])
    }
  }

  let nl =  pospoke<9 ? `00${pospoke+1}` : pospoke<99 ? `0${pospoke+1}` : `${pospoke+1}` ;  
  tapar.outerHTML += 
  // <a class="d-inline-flex focus-ring p-3 m-2 py-1 px-2 text-decoration-none border rounded-2 saltar" onclick="vercartaentre()" style="min-width: 250px;"
  ` <div class="card p-4 centrargcard" onclick="rotar(this)" style="width: 18rem; z-index:1002"> 
            <img src="fotos/${nl}.png" class="card-img-top" alt="..."> 
            <div class="card-body">
              <p class="card-text" style="font-size: large; font-weight: 600;"> ${nom} <br>          
              </p> 
                <input id="oculto" type="hidden" value="${pospoke+1}"> 
                <div class="row">
                  <div class="tipopoke1 col p-2" style="background-image: url(img/${poket[0]}.png);"></div>
                  <div class="tipopoke2 col p-2" style="background-image: url(img/${poket[1]}.png);"></div> 
                </div>
            </div>
            </div>`
}





