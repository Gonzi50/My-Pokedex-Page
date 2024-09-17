
const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const equipoPlayer = [
    [5,"Charmeleon", 18, "fire", "none", "Ascuas", "Arañazo", "GarraMetal", "Gruñido"],
    [19,"Rattata", 16, "normal", "none", "Placaje", "AtaqueRápido", "ColmilloÍgneo", "ignore"],
    [12,"Butterfree", 17, "bug", "flying", "Confusión", "PicotazoVeneno", "Doble Rayo", "Desarrollo"],
    [17,"Pidgeotto", 16, "normal", "flying", "Tornado", "AtaqueAla", "Placaje", "Danza Pluma"]      
];

const equipoRival = [
    [17,"Pidgeotto2", 17, "normal", "flying", "Tornado", "Ataque Arena", "Placaje", "ignore"],
    [19,"Pikachu", 15, "normal", "none", "Rayo", "Placaje", "Ataque Rápido", "ignore"],
    [63,"Abra", 16, "psychic", "none", "Confusión", "ignore", "ignore", "ignore"],
    [1,"Bulbasaur", 18, "grass", "poison", "Placaje", "Látigo Cepa", "ignore", "ignore"]    
];


class pokemon {
  constructor(name, ftype,stype, hp, attack, defense,spattack, spdefense, speed) {
      this.name = name;
      this.ftype = ftype;
      this.stype = stype;
      this.hp = hp;
      this.attack = attack;
      this.defense = defense;
      this.spattack = spattack;
      this.spdefense = spdefense;
      this.speed = speed;
      this.achp = hp;
  }
}

// Charmeleon
let Charmeleon = new pokemon(
  "Charmeleon",
  "fire",
  "none",
  Math.floor(10 + (18/100) * (2*58) + 18),//Vida
  calcularstats(52,18),// Ataque
  calcularstats(43,18),// Defensa
  calcularstats(60,18),// Ataque Especial
  calcularstats(50,18),// Defensa Especial
  calcularstats(65,18),// Velocidad
);
function Arañaso(){
    cconsole.innerHTML = "Charmeleon uso Arañazo <span class='pntgir'></span> ";
    let damage = attack(40, user, rival, 18);
    if(damage==0) damage=1;
    return damage;
}
function Ascuas(){
    cconsole.innerHTML = "Charmeleon uso Ascuas <span class='pntgir'></span> ";
    let damage = attack(40, user, rival, 18);
    if(rival.ftype == "grass"){
        damage = damage * 2;
        cconsole.innerHTML = " Charmeleon uso Ascuas <br>  Y es superefectivo <span class='pntgir' style='margin-top: 60px;'></span>"; 
    }
    if(damage==0) damage=1;
    return damage;
}
function Gruñido(){
    cconsole.innerHTML = "Charmeleon uso Gruñido <span class='pntgir'></span> ";
    let damage = 0;
    rival.attack = rival.attack / 2;
    return damage;
}
function GarraMetal(){
    let pres = Math.round( Math.random() * 100 );
    let damage = 0;
    if(pres<=95){
        damage = attack(50, user, rival, 18);
        cconsole.innerHTML = "Charmeleon uso Garra Metal <span class='pntgir'></span> ";
        if(damage==0) damage=1;
    }else{
        cconsole.innerHTML = "Charmeleon uso Garra Metal y Fallo <span class='pntgir'></span> ";
    }
    return damage;
}
function Placaje(){
  cconsole.innerHTML =  ` ${user.name} uso Placaje <span class='pntgir'></span> `;
    let damage = attack(40, user, rival, 18);
    if(damage==0) damage=1;
    return damage;
}
function AtaqueRapido(){
  cconsole.innerHTML =  ` ${user.name} uso Ataque rapido <span class='pntgir'></span> `;
  let damage = attack(40, user, rival, 16); 
  if(damage==0) damage=1;
  return damage;
}
function ColmilloIgneo(){
  cconsole.innerHTML =  ` ${user.name} uso Colmillo Igneo <span class='pntgir'></span> `;
  let damage = attack(65, user, rival, 16);
    if(rival.ftype == "grass"){
        damage = damage * 2;
        cconsole.innerHTML =  `${user.name} uso Colmillo Igneo <br>  Y es superefectivo <span class='pntgir' style='margin-top: 60px;'></span>`; 
    }
    if(damage==0) damage=1;
    return damage;
}
function Confusión(){
  cconsole.innerHTML =  ` ${user.name} uso Confusión <span class='pntgir'></span> `;
    let damage = attack(50, user, rival, 17);
    if(damage==0) damage=1;
    return damage;
}
function PicotazoVeneno(){
  cconsole.innerHTML =  ` ${user.name} uso Picotazo Veneno <span class='pntgir'></span> `;
    let damage = attack(15, user, rival, 17);
    if(rival.ftype == "psychic"){
        damage = damage * 2;
        cconsole.innerHTML =  `${user.name} uso Picotazo Veneno <br>  Y es superefectivo <span class='pntgir' style='margin-top: 60px;'></span>`; 
    }
    if(rival.ftype == "grass"){
      damage = damage * 2;
      cconsole.innerHTML =  `${user.name} uso Picotazo Veneno <br>  Y es superefectivo <span class='pntgir' style='margin-top: 60px;'></span>`; 
  }
    if(damage==0) damage=1;
    return damage;
}
function DobleRayo(){
  cconsole.innerHTML =  ` ${user.name} uso Doble Rayo <span class='pntgir'></span> `;
    let damage = attack(75, user, rival, 17);
    if(rival.ftype == "psychic"){
        damage = damage * 2;
        cconsole.innerHTML =  `${user.name} uso Doble Rayo <br>  Y es superefectivo <span class='pntgir' style='margin-top: 60px;'></span>`; 
    }
    if(rival.ftype == "grass"){
      damage = damage * 2;
      cconsole.innerHTML =  `${user.name} uso Doble Rayo <br>  Y es superefectivo <span class='pntgir' style='margin-top: 60px;'></span>`; 
  }
    if(damage==0) damage=1;
    return damage;
}
function Desarrollo(){
  cconsole.innerHTML =  ` ${user.name} uso Desarrollo <br>  Su Ataque aumento`;
  let damage = 0;
  user.attack *= 1.5;
  user.spattack *= 1.5; 
  return damage;
}
function Tornado(){
  cconsole.innerHTML = `${user.name} uso Tornado <span class='pntgir'></span>` ;
    let damage = attack(40, user, rival, 18);
    if(rival.ftype == "grass"){
        damage = damage * 2;
        cconsole.innerHTML =  `${user.name} uso Tornado <span class='pntgir'></span>  Y es superefectivo <span class='pntgir' style='margin-top: 60px;'></span>`; 
    }
    if(damage==0) damage=1;
    return damage;
}
function AtaqueAla(){
  cconsole.innerHTML =  ` ${user.name} uso Ataque Ala <span class='pntgir'></span> `;
    let damage = attack(60, user, rival, 18);
    if(rival.ftype == "grass"){
        damage = damage * 2;
        cconsole.innerHTML =  `${user.name} uso Ataque Ala <span class='pntgir'></span>  Y es superefectivo <span class='pntgir' style='margin-top: 60px;'></span>`; 
    }
    if(damage==0) damage=1;
    return damage;
}
function DanzaPluma(){
  cconsole.innerHTML =  ` ${user.name} uso Danza Pluma <br> El ataque del rival se redujo mucho`;
  let damage = 0;
  rival.attack *= .25;
  return damage;
}

const efis = {
    tornado : "bug",
    Ascuas : "grass",
    Impactrueno: "flying",
    ColmilloÍgneo: "grass",
    PicotazoVeneno: "psychic",
    AtaqueAla : "grass"
}

// BATALLAS

  function calcularstats(base,nivel){
    let n = 5 + 2;
    let IV = Math.round( Math.random() * 31 );
    let EV = Math.round( Math.random() * 151 ); 
    let stat = 5 + ( (nivel / 100) * ((base * 2) + IV + EV/4));
    stat = Math.round(stat);
    return stat;
}

// User


let Rattata = new pokemon(
    "Rattata",
    "normal",
    "none",
    Math.floor(10 + (16/100) * (2*30) + 16),//Vida
    calcularstats(30,16),// Ataque
    calcularstats(56,16),// Defensa
    calcularstats(35,16),// Ataque Especial
    calcularstats(25,16),// Defensa Especial
    calcularstats(72,16),// Velocidad
);
let Butterfree = new pokemon(
    "Butterfree", 
    "bug",
    "flying",
    Math.floor(10 + (17/100) * (2*45) + 17),//Vida
    calcularstats(60,17),// Ataque
    calcularstats(45,17),// Defensa
    calcularstats(50,17),// Ataque Especial
    calcularstats(90,17),// Defensa Especial
    calcularstats(70,17),// Velocidad
)
let Pidgeotto = new pokemon(
    "Pidgeotto",
    "normal",
    "flying",
    Math.floor(10 + (17/100) * (2*45) + 17),//Vida
    calcularstats(63,17),// Ataque
    calcularstats(45,17),// Defensa
    calcularstats(50,17),// Ataque Especial
    calcularstats(55,17),// Defensa Especial
    calcularstats(71,17),// Velocidad
)

// Rival

let Pidgeotto2 = new pokemon(
    "Pidgeotto",
    "normal",
    "flying",
    Math.floor(10 + (17/100) * (2*45) + 17),//Vida
    calcularstats(63,17),// Ataque
    calcularstats(45,17),// Defensa
    calcularstats(50,17),// Ataque Especial
    calcularstats(55,17),// Defensa Especial
    calcularstats(71,17),// Velocidad
)
let Pikachu = new pokemon(
    "Pikachu",
    "electric",
    "none",
    Math.floor(10 + (17/100) * (2*35) + 17),//Vida
    calcularstats(55,17),// Ataque
    calcularstats(40,17),// Defensa
    calcularstats(50,17),// Ataque Especial
    calcularstats(50,17),// Defensa Especial
    calcularstats(90,17),// Velocidad
);
let Abra = new pokemon(
    "Abra",
    "psychic",
    "none",
    Math.floor(10 + (16/100) * (2*30) + 16),//Vida
    calcularstats(30,15),// Ataque
    calcularstats(56,15),// Defensa
    calcularstats(35,15),// Ataque Especial
    calcularstats(25,15),// Defensa Especial
    calcularstats(72,15),// Velocidad
)
let Bulbasaur = new pokemon(
    "Bulbasaur", 
    "grass",
    "poison",
    Math.floor(10 + (18/100) * (2*45) + 18), //PS
    calcularstats(49,18),//Ataque
    calcularstats(49,18),//Defensa
    calcularstats(65,18),//Ataque Especial
    calcularstats(65,18),//Defensa Especial
    calcularstats(45,18),//Velocidad
);

// Equipos Pokemon
let npkriv = 0;

const cconsole = $('#consol');
const vvidaene= $('#brven');
const vvidamy= $('#brvmy');

const myrival = $('.enemy');
const mypoke = $('.mypoke');

const userpokes = [ Charmeleon, Rattata, Butterfree, Pidgeotto ];
const rivalpokes = [ Bulbasaur,Pidgeotto2, Abra, Pikachu  ];
const imgs = ['005','019','012','017']; 
const lvl = ['Nv18','Nv16','Nv17','Nv16'];
const lvlr = ['Nv18','Nv17','Nv17','Nv16'];
const userpk = $('#userpoke');
const enemypk = $('#enemypoke');
const imgsrival = ['001','017','063','025'];
let user = userpokes[0];

const vdpoke = $('#vidauser') 

let fpksel = false;
function pksel(N){
  if(userpokes[N].achp == 0) return;
  user = userpokes[N];
  mypoke.style.backgroundImage = `url(fotos/${imgs[N]}.png)`;
  userpk.innerHTML = `
    ${user.name} 
    <span class="ms-5 ps-5">${lvl[N]}</span>`;
  vdpoke.innerHTML = `${user.achp}/${user.hp}`;
  actbarra(vvidamy, user.achp, user.hp);
  cconsole.innerHTML = `¡Adelante ${user.name}! `;
  if(fpksel){
    setTimeout(() => {
      ataqueriv();
    },2000);
    setTimeout(() => {
      if(user.achp==0){endbat(user.name,user); return; } //El usuario fue debilitado
      verui();
      }, 4000);
  }else{
    setTimeout(() => {
      verui();
    }, 2000);
  }
  fpksel = true;
}
let rival = rivalpokes[0];
function rivsel(N){
  if(rivalpokes[N].achp == 0) return;
  rival = rivalpokes[N];
  myrival.style.backgroundImage = `url(fotos/${imgsrival[N]}.png)`;
  enemypk.innerHTML = `
    ${rival.name} 
    <span class="ms-5 ps-5">${lvlr[N]}</span>`;
    // console.log(rival);
  vdenemy.innerHTML = `${rival.achp}/${rival.hp}`;
  actbarra(vvidaene, rival.achp, rival.hp);
}
// console.log(rival);

const bts1 = `
    <div class="opsatt" onclick="ataque(0)"> Arañaso 
      <!-- NO --->
    </div>
    <div class="opsatt" onclick="ataque(1)"> Gruñido 
      <!-- NO --->
    </div>
    <div class="opsatt" onclick="ataque(2)"> Ascuas 
      <!-- NO --->
    </div>
    <div class="opsatt" onclick="ataque(3)"> Garra Metal
      <!-- NO --->
    </div>
    <div class="btact" onclick="verui()"> Salir
    </div>
    
    `;
const bts2 = `
  <div class="opsatt" onclick="ataque(4)"> Placaje 
    <!-- NO --->
  </div>
  <div class="opsatt" onclick="ataque(5)"> Ataque Rapido 
    <!-- NO --->
  </div>
  <div class="opsatt" onclick="ataque(6)"> Colmillo Igneo  
    <!-- NO --->
  </div>
  <div class="opsatt unact" > 
    <!-- NO --->
  </div><div class="btact" onclick="verui()"> Salir
    </div>
  `;
  const bts3 = `
  <div class="opsatt" onclick="ataque(7)"> Confusión 
    <!-- NO --->
  </div>
  <div class="opsatt" onclick="ataque(8)"> Picotazo Veneno 
    <!-- NO --->
  </div>
  <div class="opsatt" onclick="ataque(9)"> Doble Rayo 
    <!-- NO --->
  </div>
  <div class="opsatt" onclick="ataque(10)" > Desarrollo
    <!-- NO --->
  </div>
  <div class="btact" onclick="verui()"> Salir
    </div>
  `;
  const bts4 = `
  <div class="opsatt" onclick="ataque(11)"> Tornado 
    <!-- NO --->
  </div>
  <div class="opsatt" onclick="ataque(12)"> Ataque Ala
    <!-- NO --->
  </div>
  <div class="opsatt" onclick="ataque(13)"> Placaje 
    <!-- NO --->
  </div>
  <div class="opsatt" onclick="ataque(14)" > Danza Pluma
    <!-- NO --->
  </div>
  <div class="btact" onclick="verui()"> Salir
    </div>
  `;
const pkselect = `<div class="d-flex justify-content-center" id="consol">
      <div class="pokesel" onclick="pksel(0)">
        <img src="fotos/005.png" class="fotobtn" alt="">
        Charmeleon
      </div>
      <div class="pokesel" onclick="pksel(1)">
        <img src="fotos/019.png" class="fotobtn" alt="">
        Rattata
      </div>
      <div class="pokesel" onclick="pksel(2)">
        <img src="fotos/012.png" class="fotobtn" alt="">
        Butterfree
      </div>
      <div class="pokesel" onclick="pksel(3)">
        <img src="fotos/017.png" class="fotobtn" alt="">
        Pidgeotto
      </div>
      <div class="btact" onclick="verui()"> Salir
    </div>`;
  
  
  
  function verAtaques(){
    if(user == Charmeleon){
      cconsole.innerHTML = bts1;
    }
    if(user == Rattata){
      cconsole.innerHTML = bts2;
    }
    if(user == Butterfree){
      cconsole.innerHTML = bts3;
    }
    if(user == Pidgeotto){
      cconsole.innerHTML = bts4;
    }
  }
  function verpokes(){
    cconsole.innerHTML = pkselect;
  }
  const ui = `
      <div class="btact" onclick="verAtaques()" >Atacar</div>
      <div class="btact" onclick="verpokes()">Pokemons</div>
      <div class="btact" onclick="cubadm(3)">Mochila</div>
      <div class="btact" onclick="cubadm(2)">Salir</div>
      `;
  function verui(){
    cconsole.innerHTML = ui;
  }

  const vdenemy = $('#vidaenemy')
  vdenemy.innerHTML = `${rival.achp}/${rival.hp}`;

  function ataque(P){
    let vlmy = user.speed;
    let vlrv = rival.speed;
    if(P==5){ // Ataque Rapido
      vlmy = vlrv + 1;
    }
    if(vlmy>vlrv){
        ataqueuser(P);

        setTimeout(() => {
            if(rival.achp==0){ endbat(rival.name,rival); return; } //El rival fue debilitado

            ataqueriv();

            setTimeout(() => {
              if(user.achp==0){endbat(user.name,user); return; } //El usuario fue debilitado
              verAtaques();
            }, 2000);

        },2000);  
        

    }else{
      ataqueriv();

        setTimeout(() => {
            if(user.achp==0){ endbat(user.name,user); return; } //El usuario fue debilitado
            ataqueuser(P);
            setTimeout(() => {
              if(rival.achp==0){endbat(rival.name,rival); return; } //El rival fue debilitado
              verAtaques();
            }, 2000);

        },2000);  
    }
  }

function ataqueuser(P){
  let dm;
  switch(P){
    // Charmeleon
    case 0: dm = Arañaso(); break;
    case 1: dm = Gruñido(); break;
    case 2: dm = Ascuas(); break;
    case 3: dm = GarraMetal(); break;
    // Rattata
    case 4: dm = Placaje(); break;
    case 5: dm = AtaqueRapido(); break;
    case 6: dm = ColmilloIgneo(); break;
    // Butterfree
    case 7: dm = Confusión(); break;
    case 8: dm = PicotazoVeneno(); break;
    case 9: dm = DobleRayo(); break;
    case 10: dm = Desarrollo(); break;
    // Pidgeotto
    case 11: dm = Tornado(); break;
    case 12: dm = AtaqueAla(); break;
    case 13: dm = Placaje(); break;
    case 14: dm = DanzaPluma(); break;
  }
  rival.achp -= dm;
  let premrivhp = rival.achp;
  if(rival.achp<0) rival.achp=0;
  actbarra(vvidaene, rival.achp, rival.hp);
  actvida(vdenemy, dm, premrivhp + dm, rival.achp, rival.hp);
}

//Placaje,Tornado,Confusión,Rayo
function ataqueriv(){
  let cdm;
  switch(npkriv){
    case 0: cdm = attack(40, rival, user, 18);
    cconsole.innerHTML = ` ${rival.name} uso Placaje <span class='pntgir'></span>`;
     break;//Bulbasaur;
    case 1: cdm = attack(40, rival, user, 18); //Pidgeotto
      if(rival.ftype == "grass"){
          dm = dm * 2;
      }
      cconsole.innerHTML = ` ${rival.name} uso Tornado <span class='pntgir'></span>`;
      break;
    case 2: cdm = attack(50, user, rival, 17);
    cconsole.innerHTML = ` ${rival.name} uso Confusión <span class='pntgir'></span>`;
     break; //Abra
    case 3: cdm = attack(95, user, rival, 18);
    if(rival.stype == "flying"){
      dm = dm*2;
    }
    cconsole.innerHTML = ` ${rival.name} uso Rayo <span class='pntgir'></span>`;
  }
  
  if(cdm==0) cdm=1;
  user.achp-=cdm;
  
  let premushp = user.achp;
  if(user.achp<0) user.achp=0;
  actbarra(vvidamy, user.achp, user.hp);
  
  
  actvida(vdpoke, cdm, premushp + cdm, user.achp, user.hp); 
  
}


function attack(P, atpk, defpk,lvl ){
  let sp1 = 0.2 * lvl + 1;
  let A = atpk.attack;
  let D = 25 * defpk.defense;
  let psup = sp1 * A * P;
  let R = Math.round(Math.random()*10) + 90;
  let dm = 0.01 * R * ((psup / D) + 2);
  dm = Math.floor(dm);
  return dm;
}

function actbarra(htbarra, psact, psmax ){
    let pbarra = psact * 100 / psmax;
    htbarra.style.width = `${pbarra}%`;
}

function endbat(per, perobj){
  cconsole.innerHTML = ` ${per} se ha debilitado <span class='pntgir'></span} `;
 
  if(perobj == user){
    fpksel = false;
    for(let i=0;i<4;i++){
      if(userpokes[i].achp != 0){
        pksel(i);
        // verui();
        return;
      }
    }
    cconsole.innerHTML = " No te quedan mas pokemons , has perdido la batalla ";
    cubadm(0);
      
  }
  if(perobj == rival){
    npkriv++;
    for(let i=0;i<4;i++){
      if(rivalpokes[i].achp != 0){
        rivsel(i);
        verui();
        return;
      }
    }
    cconsole.innerHTML = " El rival se ha quedado sin pokemons , has ganado la batalla ";
    cubadm(1);
  }

  
}


function actvida(obj, dif, act, end, total){
  obj.innerHTML = `${Math.floor(act)}/${total}`;
  if(Math.floor(act) == 0) return;
  if(Math.floor(act) > end){
    setTimeout(() => {
      actvida(obj, dif, act - (dif/10), end, total);
    }, 200);
  }else{
    obj.innerHTML = `${Math.floor(end)}/${total}`;
  }
}


function cubadm(AC){
  let cub = $('.cubprt');
  cub.style.display = "flex";
  switch(AC){
    case 0:
      cub.innerHTML = `<div class="alertbtdr">
      <span style="font-size: 60px;">PERDISTE </span>  <br>
      Todos tus pokemon han sido debilitados
    <div class="btaldr" onclick="location.reload();" >Reiniciar</div>  `;
    break;
    case 1:
      cub.innerHTML = `<div class="alertbtvc"> 
      <span style="font-size: 60px;">GANASTE </span>  <br>
      Todos los pokemon del rival han sido debilitados
    <div class="btalvc" onclick="location.reload();" >Reiniciar</div> `;
    break;
    case 2:
      cub.innerHTML = `<div class="alertbtsl"> 
      ¿Estas Seguro de salir?<br>   
       El combate se reiniciara  
      
    <div class="btalsl bg-danger" onclick="window.location.replace('main.html')" >Salir</div>    
    <div class="btalsl" onclick="$('.cubprt').style.display = 'none'">Cancelar</div>
    </div>`;
    break;
    case 3:
      cub.innerHTML = `<div class="alertbtmc"> 
      La mochila esta vacia    
    <div class="btalmc" onclick="$('.cubprt').style.display = 'none'">Regresar</div>
    </div>`;
    break;
  }
}