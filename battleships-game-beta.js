const userWindow = window;
const musicChoosed_Block = document.getElementsByClassName('battleship-musicChoose')[0];
userWindow.addEventListener('load', () => {
    musicChoosed_Block.style.height = window.innerHeight + 'px';
}, false);
userWindow.addEventListener('resize', () => {
    musicChoosed_Block.style.height = window.innerHeight + 'px';
}, false);

const btsh_Body = document.getElementsByClassName('btsh-body')[0];
const fg_Mess = document.querySelector('div.finishGame-message-background');
const guide_Body_1 = document.querySelector('div.battleship-guide-1');
const guide_Body_2 = document.querySelector('div.battleship-guide-2');
const credits_Body = document.querySelector('div.credits-body');
const credits_Content = document.querySelector('div.credits-content');
const lastPage_Body = document.querySelector('div.last-page');
userWindow.addEventListener('load', () => {
    btsh_Body.style.height = window.innerHeight + 'px';
    fg_Mess.style.height = window.innerHeight + 'px';
    guide_Body_1.style.height = window.innerHeight + 'px';
    guide_Body_2.style.height = window.innerHeight + 'px';
    credits_Body.style.height = window.innerHeight + 'px';
    credits_Content.style.top = (window.innerHeight + 50) + 'px';
    lastPage_Body.style.height = window.innerHeight + 'px';
}, false);
userWindow.addEventListener('resize', () => {
    btsh_Body.style.height = window.innerHeight + 'px';
    fg_Mess.style.height = window.innerHeight + 'px';
    guide_Body_1.style.height = window.innerHeight + 'px';
    guide_Body_2.style.height = window.innerHeight + 'px';
    credits_Body.style.height = window.innerHeight + 'px';
    credits_Content.style.top = (window.innerHeight + 50) + 'px';
    lastPage_Body.style.height = window.innerHeight + 'px';
}, false);

// Zmienna zniszczonych statków:
const ship_Destroyed_Area = document.querySelector('div.destroyedShips-area');

// Muzyka i okno powiadomienia związane z muzyką:
const choosedMusic_Title = document.getElementsByClassName('musicChoose-title')[0];
const chMscTit_Text = 'This game have audio sounds. Do you want to have sounds in this game?';
const chMscTit_TextBlock = document.createTextNode(chMscTit_Text);
choosedMusic_Title.appendChild(chMscTit_TextBlock);

const battleship_Game = document.getElementsByClassName('battleship-content')[0];
const sounds_YES = document.getElementsByClassName('button-yes');
const sounds_NO = document.getElementsByClassName('button-no');

let sounds_ENABLE = false;
// Zapytanie o dźwięk:
sounds_YES[0].addEventListener('click', () => {
    musicChoosed_Block.style.display = 'none';
    guide_Body_1.style.display = 'flex';
    sounds_ENABLE = true;
    bg_Music_1.loop = true;
    bg_Music_1.load();
    bg_Music_1.play();
}, false);
sounds_NO[0].addEventListener('click', () => {
    musicChoosed_Block.style.display = 'none';
    guide_Body_1.style.display = 'flex';
    sounds_ENABLE = false;
}, false);
// Zapytanie o ponowne zagranie:
sounds_YES[1].addEventListener('click', () => {
    generateShips();
    fg_Mess.style.display = 'none';
}, false);
sounds_NO[1].addEventListener('click', () => {
    credits_Body.style.display = 'flex';
    fg_Mess.style.display = 'none';
    credits_Body.style.backgroundColor = 'rgba(0,0,0,0.0)';
    credits_Body.style.transitionDuration = '0s';
    setTimeout(() => {
        credits_Body.style.backgroundColor = 'rgba(0,0,0,1.0)';
        credits_Body.style.transitionDuration = '1s';
    }, 10);
    credits_Content.style.top = (window.innerHeight + 50) + 'px';
    credits_Content.style.transitionDuration = '0s';
    setTimeout(() => {
        credits_Content.style.top = '-10000px';
        credits_Content.style.transitionDuration = '220s';
    }, 10);
    if (sounds_ENABLE == true) {
        bg_Music_1.pause();
        credits_Music.play();
    } else {}
    setTimeout(() => {
        battleship_Game.style.display = 'none';
    }, 2000);
    setTimeout(() => {
        //alert('Alert');
        lastPage_Body.style.display = 'flex';
        lastPage_Body.style.backgroundColor = 'rgba(255,255,255,1.0)';
    }, (92000));
}, false);

// Przewodnik #1 & #2:
const guideButton_1 = document.getElementsByClassName('guide-button')[0];
guideButton_1.addEventListener('click', () => {
    guide_Body_1.style.display = 'none';
    guide_Body_2.style.display = 'flex';
    //battleship_Game.style.display = 'block';
}, false);
const guideButton_2 = document.getElementsByClassName('guide-button')[1];
guideButton_2.addEventListener('click', () => {
    guide_Body_2.style.display = 'none';
    battleship_Game.style.display = 'block';
}, false);

// Opoźnienie wszystkich "setTimeout":
let setTimeoutDealy = 500;

// Tworzenie pól pola bitwy i rozmieszczenie ich na planszy:

(function() {
    const btsh_BattleField_None = document.querySelector('div.btsh-battleField-none');
    const btsh_BattleField_None_Text = '+';
    const btsh_BattleField_None_TextNode = document.createTextNode(btsh_BattleField_None_Text);
    btsh_BattleField_None.appendChild(btsh_BattleField_None_TextNode);

    const btsh_HorizontalPosNum = document.querySelector('div.btsh-battleField-horizontalNumGroup');
    let btsh_HorizontalPosNum_OnceBox_Array = [];
    for (i = 0; i < 10; i++) {
        btsh_HorizontalPosNum_OnceBox_Array[i] = document.createElement('div');
        btsh_HorizontalPosNum_OnceBox_Array[i].setAttribute('class', 'btsh-battleField-horizontalNumBlock');
        btsh_HorizontalPosNum.appendChild(btsh_HorizontalPosNum_OnceBox_Array[i]);
        btsh_HorizontalPosNum_OnceBox_Array[i].textContent = i;
    };

    const btsh_VerticalPosNum = document.querySelector('div.btsh-battleField-verticalNumGroup');
    let btsh_VerticalPosNum_OnceBox_Array = [];
    let btsh_VerticalPosNum_Letters_Array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    for (i = 0; i < 10; i++) {
        btsh_VerticalPosNum_OnceBox_Array[i] = document.createElement('div');
        btsh_VerticalPosNum_OnceBox_Array[i].setAttribute('class', 'btsh-battleField-verticalNumBlock');
        btsh_VerticalPosNum.appendChild(btsh_VerticalPosNum_OnceBox_Array[i]);
        btsh_VerticalPosNum_OnceBox_Array[i].textContent = btsh_VerticalPosNum_Letters_Array[i];
    };
}());

const btsh_AreaPosShip = document.querySelector('div.btsh-battleField-areaGroup');
let btsh_AreaPosShip_OnceBox_Array = [];

let btsh_PosShip_OnceBox_Array = [];
let btsh_PosShip_Location_Array = [];

let btsh_PropShip_OnceBox_Array = [];
let btsh_PropShip_Location_Array = [];

let btsh_SignShip_OnceBox_Array = [];
let btsh_SignShip_Location_Array = [];

for (i = 0; i < 100; i++) {
    btsh_AreaPosShip_OnceBox_Array[i] = document.createElement('div');
    btsh_AreaPosShip_OnceBox_Array[i].setAttribute('class', 'btsh-battleField-areaBlock');
    btsh_AreaPosShip_OnceBox_Array[i].setAttribute('id', 'A' + i);
    btsh_AreaPosShip.appendChild(btsh_AreaPosShip_OnceBox_Array[i]);
    
    btsh_PosShip_OnceBox_Array[i] = document.createElement('div');
    btsh_PosShip_OnceBox_Array[i].setAttribute('class', 'ship-none');
    btsh_PosShip_OnceBox_Array[i].setAttribute('id', 'B' + i);
    btsh_PosShip_Location_Array[i] = document.getElementById('A' + i);
    btsh_PosShip_Location_Array[i].appendChild(btsh_PosShip_OnceBox_Array[i]);

    btsh_PropShip_OnceBox_Array[i] = document.createElement('div');
    btsh_PropShip_OnceBox_Array[i].setAttribute('class', 'ship-none');
    btsh_PropShip_OnceBox_Array[i].setAttribute('id', 'C' + i);
    btsh_PropShip_Location_Array[i] = document.getElementById('B' + i);
    btsh_PropShip_Location_Array[i].appendChild(btsh_PropShip_OnceBox_Array[i]);

    btsh_SignShip_OnceBox_Array[i] = document.createElement('div');
    btsh_SignShip_OnceBox_Array[i].setAttribute('class', 'sign-none');
    btsh_SignShip_Location_Array[i] = document.getElementById('C' + i);
    btsh_SignShip_Location_Array[i].appendChild(btsh_SignShip_OnceBox_Array[i]);
};

const inputBut_1 = document.getElementsByTagName('input')[0];
let inputNumber = document.getElementsByTagName('input')[1];
inputNumber.value = 'A0';
const inputBut_2 = document.getElementsByTagName('input')[2];
const result_Area = document.getElementById('resultArea');

const bg_Music_1 = document.getElementsByTagName('audio')[0];
const shout_Music = document.getElementsByTagName('audio')[1];
const shot_Music = document.getElementsByTagName('audio')[2];
const shot_R_Music = document.getElementsByTagName('audio')[3];
const credits_Music = document.getElementsByTagName('audio')[4];
let shotSound = false;


inputBut_1.addEventListener('click', generateShips, false);

inputBut_2.addEventListener('click', fire, false);

let ship_Array = [];

// Tworzenie niedozwolonych stref dla danych rodzajów statków (długość):
// R2:
let dangerousNumbers_R2_Array = [];
let dangerousNumbers_R2_Val = -1;
for (let m = 0; m < 10; m++) {
    dangerousNumbers_R2_Val += 10;
    dangerousNumbers_R2_Array[m] = dangerousNumbers_R2_Val;
};
console.log('Niebezpieczne liczby dla - toRight | 2: ' + dangerousNumbers_R2_Array);
// B2:
let dangerousNumbers_B2_Array = [];
let dangerousNumbers_B2_Val = 89;
for (let m = 0; m < 10; m++) {
    dangerousNumbers_B2_Val += 1;
    dangerousNumbers_B2_Array[m] = dangerousNumbers_B2_Val;
};
console.log('Niebezpieczne liczby dla - toBottom | 2: ' + dangerousNumbers_B2_Array);
// R3
let dangerousNumbers_R3_Array = [];
let dangerousNumbers_R3_Val = -1;
let evenVal_1_R3 = 0;
let unevenVal_1_R3 = 1;
for (let m = 0; m < 10; m++) {
    dangerousNumbers_R3_Val += 9;
    dangerousNumbers_R3_Array[evenVal_1_R3] = dangerousNumbers_R3_Val;
    dangerousNumbers_R3_Val += 1;
    dangerousNumbers_R3_Array[unevenVal_1_R3] = dangerousNumbers_R3_Val;
    evenVal_1_R3 += 2;
    unevenVal_1_R3 += 2;
};
console.log('Niebezpieczne liczby dla - toRight | 3: ' + dangerousNumbers_R3_Array);
// B3:
let dangerousNumbers_B3_Array = [];
let dangerousNumbers_B3_Val = 79
for (let m = 0; m < 20; m++) {
    dangerousNumbers_B3_Val += 1;
    dangerousNumbers_B3_Array[m] = dangerousNumbers_B3_Val;
};
console.log('Niebezpieczne liczby dla - toBottom | 3: ' + dangerousNumbers_B3_Array);
// R4
let dangerousNumbers_R4_Array = [];
let dangerousNumbers_R4_Val = -1;
let evenVal_1_R4 = 0;
let unevenVal_1_R4 = 1;
let evenVal_2_R4 = 2;
for (let m = 0; m < 10; m++) {
    dangerousNumbers_R4_Val += 8;
    dangerousNumbers_R4_Array[evenVal_1_R4] = dangerousNumbers_R4_Val;
    dangerousNumbers_R4_Val += 1;
    dangerousNumbers_R4_Array[unevenVal_1_R4] = dangerousNumbers_R4_Val;
    dangerousNumbers_R4_Val += 1;
    dangerousNumbers_R4_Array[evenVal_2_R4] = dangerousNumbers_R4_Val;
    evenVal_1_R4 += 3;
    unevenVal_1_R4 += 3;
    evenVal_2_R4 += 3;
};
console.log('Niebezpieczne liczby dla - toRight | 4: ' + dangerousNumbers_R4_Array);
// B4:
let dangerousNumbers_B4_Array = [];
let dangerousNumbers_B4_Val = 69
for (let m = 0; m < 30; m++) {
    dangerousNumbers_B4_Val += 1;
    dangerousNumbers_B4_Array[m] = dangerousNumbers_B4_Val;
};
console.log('Niebezpieczne liczby dla - toBottom | 4: ' + dangerousNumbers_B4_Array);
// R5
let dangerousNumbers_R5_Array = [];
let dangerousNumbers_R5_Val = -1;
let evenVal_1_R5 = 0;
let unevenVal_1_R5 = 1;
let evenVal_2_R5 = 2;
let unevenVal_2_R5 = 3;
for (let m = 0; m < 10; m++) {
    dangerousNumbers_R5_Val += 7;
    dangerousNumbers_R5_Array[evenVal_1_R5] = dangerousNumbers_R5_Val;
    dangerousNumbers_R5_Val += 1;
    dangerousNumbers_R5_Array[unevenVal_1_R5] = dangerousNumbers_R5_Val;
    dangerousNumbers_R5_Val += 1;
    dangerousNumbers_R5_Array[evenVal_2_R5] = dangerousNumbers_R5_Val;
    dangerousNumbers_R5_Val += 1;
    dangerousNumbers_R5_Array[unevenVal_2_R5] = dangerousNumbers_R5_Val;
    evenVal_1_R5 += 4;
    unevenVal_1_R5 += 4;
    evenVal_2_R5 += 4;
    unevenVal_2_R5 += 4;
};
console.log('Niebezpieczne liczby dla - toRight | 5: ' + dangerousNumbers_R5_Array);
// B5:
let dangerousNumbers_B5_Array = [];
let dangerousNumbers_B5_Val = 59
for (let m = 0; m < 40; m++) {
    dangerousNumbers_B5_Val += 1;
    dangerousNumbers_B5_Array[m] = dangerousNumbers_B5_Val;
};
console.log('Niebezpieczne liczby dla - toBottom | 5: ' + dangerousNumbers_B5_Array);


// Aktualna liczba danych statków (do mechanizmów niepowtarzalności liczb):
let ship_i0_Current_Amount = 0;
let ship_i1_Current_Amount = 0;
let ship_i2_Current_Amount = 0;
let ship_i3_Current_Amount = 0;
let ship_i4_Current_Amount = 0;

// Liczba statków:
let ship_Amount = 0;

// Zmienna ilości zatopionych okrętów:
let shipSunken_Amount = 0;

// Do dźwięku od zatopienia:
let shoutsPerSunken_Array = [];

const userWindowObject = window;
userWindowObject.addEventListener('load', () => {
    generateShips();
}, false);

let btsh_Ship_Graphics = [];
function generateShips() {
    console.clear();
    // Resetowanie kolejności dźwięków strzału:
    shotSound = false;
    // Reset ilośći zatopionych statków:
    shipSunken_Amount = 0;
    // Aktualna liczba danych statków (do mechanizmów niepowtarzalności liczb):
    ship_i0_Current_Amount = 0;
    ship_i1_Current_Amount = 0;
    ship_i2_Current_Amount = 0;
    ship_i3_Current_Amount = 0;
    ship_i4_Current_Amount = 0;
    // Kasowanie poprzednich statków:
    ship_Array = [];
    result_Area.textContent = '';
    // Tworzenie pola bitwy:
    let battleGround_Array = [];
    for (let i = 0; i < 100; i++) {
        battleGround_Array[i] = i;
        btsh_AreaPosShip_OnceBox_Array[i].setAttribute('class', 'btsh-battleField-areaBlock');
        btsh_PosShip_OnceBox_Array[i].setAttribute('class', 'ship-none');
        btsh_PropShip_OnceBox_Array[i].setAttribute('class', 'ship-style-none');
        btsh_SignShip_OnceBox_Array[i].setAttribute('class', 'sign-none');
    };
    //console.log('Pole bitwy: ' + battleGround_Array);
    // Losowanie ilości statków:
    //ship_Amount = Math.ceil((Math.random() * 3) + 5);
    //console.log('Ilość statków: ' + ship_Amount);
    // Tworzenie statków:
    let maxShipLength = 0;
    maxShipLength = 5;   // Maksymalna liczba statków:  5
    let shipLength_Array = [];
    let shipL_ExVar = 0;
    for (let i = 0; i < maxShipLength; i++) {
        shipL_ExVar += 1;
        shipLength_Array[i] = shipL_ExVar;
    };
    let lengthPerShip_Array = [];
    // Losowanie statków z zakresu 1 - 5:
    /*let lengthGroup_Array = [];
    for (let i = 0; i < maxShipLength; i++) {
        lengthGroup_Array[i] = {lenG_Number: (i + 1), lenG_Array: []};
    };
    ship_Amount = 10;
    for (let i = 0; i < maxShipLength; i++) {
        for (a = 0; a < ship_Amount; a++) {   // Ilość statków
            lengthGroup_Array[i].lenG_Array[a] = (i + 1);
        };
    };
    let lengthContact_Array = [];
    lengthContact_Array = lengthGroup_Array[0].lenG_Array.concat(lengthGroup_Array[1].lenG_Array, lengthGroup_Array[2].lenG_Array, lengthGroup_Array[3].lenG_Array, lengthGroup_Array[4].lenG_Array);
    for (i = 0; i < ship_Amount; i++) {   // Ilość statków
        let lengthRandom = 0;
        lengthRandom = lengthContact_Array[Math.floor(Math.random() * lengthContact_Array.length)];
        lengthContact_Array.splice(lengthRandom, 1);
        lengthPerShip_Array[i] = lengthRandom;
    };
    lengthPerShip_Array.sort();
    console.log('Liczby: ' + lengthPerShip_Array);
    */
    
    //lengthPerShip_Array = [1];   // Do testów
    lengthPerShip_Array = [2, 2, 2, 3, 3, 3, 4, 4, 5];   // Ręcznie ustawione statki
    ship_Amount = lengthPerShip_Array.length;   // Liczba statków, względem liczby ineksóww tablicy długości/statek "lengthPerShip_Array".
    let shipDirection_Array = [];
    shipDirection_Array = ['R', 'B'];   // R, B
    for (let i = 0; i < ship_Amount; i++) {
        // Losowanie kierunków statków:
        let shipDirection_Val = shipDirection_Array[Math.floor(Math.random() * shipDirection_Array.length)];
        let shipLength_Val = 0;
        // Losowanie długości statków: (od 1 do 5, względem ilości statków)
        //shipLength_Val = shipLength_Array[Math.floor(Math.random() * maxShipLength)];
        //console.log('Aktualna tablica długości/statek: ' + lengthPerShip_Array);
        // Przypisywanie statkom długości po kolei: (względem ustalonej ich ilości, względem rozmiaru (np: z tablicy [2, 2, 2, 2, 3, 3, 3, 4, 4, 5]))
        let shipLength_Index = 0;
        shipLength_Val = lengthPerShip_Array[0];
        shipLength_Index = lengthPerShip_Array.indexOf(shipLength_Val);
        //console.log('Cyfra: ' + shipLength_Val + ' | Indeks: ' + shipLength_Index);
        lengthPerShip_Array.splice(0, 1);
        // Tworzenie statków: ("proper") z unikaniem nakładania się ich na siebie:                                     // Zastanów się jszcze, czy ta właściwość ma być:
        ship_Array[i] = {shipNumber: (i + 1), shipDirection: shipDirection_Val, shipLength: shipLength_Val, shipLocation: [], shipHits: [], shipSunken: false};
        if (ship_Array[i].shipDirection == 'R' && ship_Array[i].shipLength == 1) {
            ship_i0_Current_Amount += 1;
            // Losowanie liczby z zakresu maksymalnej liczby indeksow tablicy pola bitwy:
            let rndVal = 0;
            rndVal = Math.floor(Math.random() * (battleGround_Array.length - 1));   // Losujemy indeks z tablicy
            //console.log(rndVal);
            // Przypisanie do zmiennej indeksu z tablicy pola bitwy za pomocą wylosowanej cyfry:
            let futurePos_Array = [];
            futurePos_Array[0] = battleGround_Array[rndVal];   // Wartość wylosowanego indeksu tablicy
            // Tworzenie statku na polu bitwy: (tylko blok pozycjonujący i blok statku, NIE współrzędne)
            btsh_PosShip_OnceBox_Array[futurePos_Array[0]].setAttribute('class', 'ship-IBPosition-1');
            //btsh_PropShip_OnceBox_Array[futurePos_Array[0]].setAttribute('class', 'ship-style-1-R');
            // Usunięcie "pseudo-wylosowanego" indeksu z tablicy pola bitwy:
            battleGround_Array.splice(rndVal, 1);
            //console.log('Wylosowane liczby: ' + futurePos_Array);
            //console.log('Aktualna tablica: ' + battleGround_Array);
            // Utworzenie "booleanowej" tablicy na otrzymane strzały:
            let futureBoolean_Array = [];
            futureBoolean_Array[0] = false;
            // Przypisanie statkowi wartości lokalizacji i wartości trafień;
            ship_Array[i].shipLocation = futurePos_Array;
            ship_Array[i].shipHits = futureBoolean_Array;
        } else if (ship_Array[i].shipDirection == 'B' && ship_Array[i].shipLength == 1) {
            ship_i0_Current_Amount += 1;
            let rndVal = 0;
            rndVal = Math.floor(Math.random() * (battleGround_Array.length - 1));
            let futurePos_Array = [];
            futurePos_Array[0] = battleGround_Array[rndVal];
            btsh_PosShip_OnceBox_Array[futurePos_Array[0]].setAttribute('class', 'ship-IBPosition-1');
            //btsh_PropShip_OnceBox_Array[futurePos_Array[0]].setAttribute('class', 'ship-style-1-B');
            battleGround_Array.splice(rndVal, 1);
            // Utworzenie "booleanowej" tablicy na otrzymane strzały:
            let futureBoolean_Array = [];
            futureBoolean_Array[0] = false;
            // Przypisanie statkowi wartości lokalizacji i wartości trafień;
            ship_Array[i].shipLocation = futurePos_Array;
            ship_Array[i].shipHits = futureBoolean_Array;
        } else if (ship_Array[i].shipDirection == 'R' && ship_Array[i].shipLength == 2) {
            ship_i0_Current_Amount += 1;
            ship_i1_Current_Amount += 1;
            let rndVal = [0];
            rndVal[0] = Math.floor(Math.random() * (battleGround_Array.length - 1));
            let futurePos_Array = [];
            futurePos_Array[0] = battleGround_Array[rndVal[0]];
            btsh_PosShip_OnceBox_Array[futurePos_Array[0]].setAttribute('class', 'ship-IBPosition-2-R-0');
            //btsh_PropShip_OnceBox_Array[futurePos_Array[0]].setAttribute('class', 'ship-style-2-R-0');
            battleGround_Array.splice(rndVal[0], 1);
            //console.log('Liczba statków R2: ' + ship_i0_Current_Amount);
            let futureBoolean_Array = [];
            futureBoolean_Array[0] = false;
            // Ograniczenie akceptacji niedostępnych pól dla tego typu statku - dotyczy to wyłącznie indeksu pierwszego - [0]:
            for (let x = 0; x < dangerousNumbers_R2_Array.length; x++) {
                if (futurePos_Array[0] == dangerousNumbers_R2_Array[x]) {
                    ship_Array = [];
                    generateShips();
                    return;
                } else {}
            };
            for (let k = 1; k < ship_Array[i].shipLength; k++) {   //  U W A G A !  Wypróbuj to w reszcie mechanizmów:
                let truthOfNothing_Val = 0;
                futurePos_Array[k] = (Number(futurePos_Array[0]) + k);
                futureBoolean_Array[k] = false;
                for (ua = 0; ua < battleGround_Array.length; ua++) {
                    if (futurePos_Array[k] == battleGround_Array[ua]) {
                        rndVal[k] = battleGround_Array.indexOf(Number(futurePos_Array[k]));
                        btsh_PosShip_OnceBox_Array[futurePos_Array[k]].setAttribute('class', 'ship-IBPosition-2-R-' + k);
                        //btsh_PropShip_OnceBox_Array[futurePos_Array[k]].setAttribute('class', 'ship-style-2-R-' + k);
                        battleGround_Array.splice(rndVal[k], 1);
                        //console.log(battleGround_Array);
                    } else {
                        truthOfNothing_Val += 1;
                    }
                    let truthOfNothing_Target = battleGround_Array.length;
                    if (truthOfNothing_Val == truthOfNothing_Target) {
                        ship_Array = [];
                        generateShips();
                        return;
                    } else {
                        //console.log('fałsz');
                    }
                    //console.log(truthOfNothing_Val);
                };
                //console.log('Długość pola bitwy: ' + battleGround_Array.length);
                ship_Array[i].shipLocation = futurePos_Array;
                ship_Array[i].shipHits = futureBoolean_Array;
            };
        } else if (ship_Array[i].shipDirection == 'B' && ship_Array[i].shipLength == 2) {
            ship_i0_Current_Amount += 1;
            ship_i1_Current_Amount += 1;
            let rndVal = [0];
            rndVal[0] = Math.floor(Math.random() * (battleGround_Array.length - 1));
            let futurePos_Array = [];
            futurePos_Array[0] = battleGround_Array[rndVal[0]];
            btsh_PosShip_OnceBox_Array[futurePos_Array[0]].setAttribute('class', 'ship-IBPosition-2-B-0');
            //btsh_PropShip_OnceBox_Array[futurePos_Array[0]].setAttribute('class', 'ship-style-2-B-0');
            battleGround_Array.splice(rndVal[0], 1);
            let futureBoolean_Array = [];
            futureBoolean_Array[0] = false;
            for (let x = 0; x < dangerousNumbers_B2_Array.length; x++) {
                if (futurePos_Array[0] == dangerousNumbers_B2_Array[x]) {
                    ship_Array = [];
                    generateShips();
                    return;
                } else {}
            };
            let tenMoreVal = 0;
            for (let k = 1; k < ship_Array[i].shipLength; k++) {
                let truthOfNothing_Val = 0;
                tenMoreVal += 10;
                futurePos_Array[k] = (Number(futurePos_Array[0]) + tenMoreVal);
                futureBoolean_Array[k] = false;
                for (ua = 0; ua < battleGround_Array.length; ua++) {
                    if (futurePos_Array[k] == battleGround_Array[ua]) {
                        rndVal[k] = battleGround_Array.indexOf(Number(futurePos_Array[k]));
                        btsh_PosShip_OnceBox_Array[futurePos_Array[k]].setAttribute('class', 'ship-IBPosition-2-B-' + k);
                        //btsh_PropShip_OnceBox_Array[futurePos_Array[k]].setAttribute('class', 'ship-style-2-B-' + k);
                        battleGround_Array.splice(rndVal[k], 1);
                    } else {
                        truthOfNothing_Val += 1;
                    }
                    let truthOfNothing_Target = battleGround_Array.length;
                    if (truthOfNothing_Val == truthOfNothing_Target) {
                        ship_Array = [];
                        generateShips();
                        return;
                    } else {}
                };
                ship_Array[i].shipLocation = futurePos_Array;
                ship_Array[i].shipHits = futureBoolean_Array;
            };
        } else if (ship_Array[i].shipDirection == 'R' && ship_Array[i].shipLength == 3) {
            ship_i0_Current_Amount += 1;
            ship_i1_Current_Amount += 1;
            ship_i2_Current_Amount += 1;
            let rndVal = [0];
            rndVal[0] = Math.floor(Math.random() * (battleGround_Array.length - 1));
            let futurePos_Array = [];
            futurePos_Array[0] = battleGround_Array[rndVal[0]];
            btsh_PosShip_OnceBox_Array[futurePos_Array[0]].setAttribute('class', 'ship-IBPosition-3-R-0');
            //btsh_PropShip_OnceBox_Array[futurePos_Array[0]].setAttribute('class', 'ship-style-3-R-0');
            battleGround_Array.splice(rndVal[0], 1);
            let futureBoolean_Array = [];
            futureBoolean_Array[0] = false;
            for (let x = 0; x < dangerousNumbers_R3_Array.length; x++) {
                if (futurePos_Array[0] == dangerousNumbers_R3_Array[x]) {
                    ship_Array = [];
                    generateShips();
                    return;
                } else {}
            };
            for (let k = 1; k < ship_Array[i].shipLength; k++) {
                let truthOfNothing_Val = 0;
                futurePos_Array[k] = (Number(futurePos_Array[0]) + k);
                futureBoolean_Array[k] = false;
                for (ua = 0; ua < battleGround_Array.length; ua++) {
                    if (futurePos_Array[k] == battleGround_Array[ua]) {
                        rndVal[k] = battleGround_Array.indexOf(Number(futurePos_Array[k]));
                        btsh_PosShip_OnceBox_Array[futurePos_Array[k]].setAttribute('class', 'ship-IBPosition-3-R-' + k);
                        //btsh_PropShip_OnceBox_Array[futurePos_Array[k]].setAttribute('class', 'ship-style-3-R-' + k);
                        battleGround_Array.splice(rndVal[k], 1);
                    } else {
                        truthOfNothing_Val += 1;
                    }
                    let truthOfNothing_Target = battleGround_Array.length;
                    if (truthOfNothing_Val == truthOfNothing_Target) {
                        ship_Array = [];
                        generateShips();
                        return;
                    } else {}
                };
                ship_Array[i].shipLocation = futurePos_Array;
                ship_Array[i].shipHits = futureBoolean_Array;
            };
        } else if (ship_Array[i].shipDirection == 'B' && ship_Array[i].shipLength == 3) {
            ship_i0_Current_Amount += 1;
            ship_i1_Current_Amount += 1;
            ship_i2_Current_Amount += 1;
            let rndVal = [0];
            rndVal[0] = Math.floor(Math.random() * (battleGround_Array.length - 1));
            let futurePos_Array = [];
            futurePos_Array[0] = battleGround_Array[rndVal[0]];
            btsh_PosShip_OnceBox_Array[futurePos_Array[0]].setAttribute('class', 'ship-IBPosition-3-B-0');
            //btsh_PropShip_OnceBox_Array[futurePos_Array[0]].setAttribute('class', 'ship-style-3-B-0');
            battleGround_Array.splice(rndVal[0], 1);
            let futureBoolean_Array = [];
            futureBoolean_Array[0] = false;
            for (let x = 0; x < dangerousNumbers_B3_Array.length; x++) {
                if (futurePos_Array[0] == dangerousNumbers_B3_Array[x]) {
                    ship_Array = [];
                    generateShips();
                    return;
                } else {}
            };
            let tenMoreVal = 0;
            for (let k = 1; k < ship_Array[i].shipLength; k++) {
                let truthOfNothing_Val = 0;
                tenMoreVal += 10;
                futurePos_Array[k] = (Number(futurePos_Array[0]) + tenMoreVal);
                futureBoolean_Array[k] = false;
                for (ua = 0; ua < battleGround_Array.length; ua++) {
                    if (futurePos_Array[k] == battleGround_Array[ua]) {
                        rndVal[k] = battleGround_Array.indexOf(Number(futurePos_Array[k]));
                        btsh_PosShip_OnceBox_Array[futurePos_Array[k]].setAttribute('class', 'ship-IBPosition-3-B-' + k);
                        //btsh_PropShip_OnceBox_Array[futurePos_Array[k]].setAttribute('class', 'ship-style-3-B-' + k);
                        battleGround_Array.splice(rndVal[k], 1);
                    } else {
                        truthOfNothing_Val += 1;
                    }
                    let truthOfNothing_Target = battleGround_Array.length;
                    if (truthOfNothing_Val == truthOfNothing_Target) {
                        ship_Array = [];
                        generateShips();
                        return;
                    } else {}
                };
                ship_Array[i].shipLocation = futurePos_Array;
                ship_Array[i].shipHits = futureBoolean_Array;
            };
        } else if (ship_Array[i].shipDirection == 'R' && ship_Array[i].shipLength == 4) {
            ship_i0_Current_Amount += 1;
            ship_i1_Current_Amount += 1;
            ship_i2_Current_Amount += 1;
            ship_i3_Current_Amount += 1;
            let rndVal = [0];
            rndVal[0] = Math.floor(Math.random() * (battleGround_Array.length - 1));
            let futurePos_Array = [];
            futurePos_Array[0] = battleGround_Array[rndVal[0]];
            btsh_PosShip_OnceBox_Array[futurePos_Array[0]].setAttribute('class', 'ship-IBPosition-4-R-0');
            //btsh_PropShip_OnceBox_Array[futurePos_Array[0]].setAttribute('class', 'ship-style-4-R-0');
            battleGround_Array.splice(rndVal[0], 1);
            let futureBoolean_Array = [];
            futureBoolean_Array[0] = false;
            for (let x = 0; x < dangerousNumbers_R4_Array.length; x++) {
                if (futurePos_Array[0] == dangerousNumbers_R4_Array[x]) {
                    ship_Array = [];
                    generateShips();
                    return;
                } else {}
            };
            for (let k = 1; k < ship_Array[i].shipLength; k++) {
                let truthOfNothing_Val = 0;
                futurePos_Array[k] = (Number(futurePos_Array[0]) + k);
                futureBoolean_Array[k] = false;
                for (ua = 0; ua < battleGround_Array.length; ua++) {
                    if (futurePos_Array[k] == battleGround_Array[ua]) {
                        rndVal[k] = battleGround_Array.indexOf(Number(futurePos_Array[k]));
                        btsh_PosShip_OnceBox_Array[futurePos_Array[k]].setAttribute('class', 'ship-IBPosition-4-R-' + k);
                        //btsh_PropShip_OnceBox_Array[futurePos_Array[k]].setAttribute('class', 'ship-style-4-R-' + k);
                        battleGround_Array.splice(rndVal[k], 1);
                    } else {
                        truthOfNothing_Val += 1;
                    }
                    let truthOfNothing_Target = battleGround_Array.length;
                    if (truthOfNothing_Val == truthOfNothing_Target) {
                        ship_Array = [];
                        generateShips();
                        return;
                    } else {}
                };
                ship_Array[i].shipLocation = futurePos_Array;
                ship_Array[i].shipHits = futureBoolean_Array;
            };
        } else if (ship_Array[i].shipDirection == 'B' && ship_Array[i].shipLength == 4) {
            ship_i0_Current_Amount += 1;
            ship_i1_Current_Amount += 1;
            ship_i2_Current_Amount += 1;
            ship_i3_Current_Amount += 1;
            let rndVal = [0];
            rndVal[0] = Math.floor(Math.random() * (battleGround_Array.length - 1));
            let futurePos_Array = [];
            futurePos_Array[0] = battleGround_Array[rndVal[0]];
            btsh_PosShip_OnceBox_Array[futurePos_Array[0]].setAttribute('class', 'ship-IBPosition-4-B-0');
            //btsh_PropShip_OnceBox_Array[futurePos_Array[0]].setAttribute('class', 'ship-style-4-B-0');
            battleGround_Array.splice(rndVal[0], 1);
            let futureBoolean_Array = [];
            futureBoolean_Array[0] = false;
            for (let x = 0; x < dangerousNumbers_B4_Array.length; x++) {
                if (futurePos_Array[0] == dangerousNumbers_B4_Array[x]) {
                    ship_Array = [];
                    generateShips();
                    return;
                } else {}
            };
            let tenMoreVal = 0;
            for (let k = 1; k < ship_Array[i].shipLength; k++) {
                let truthOfNothing_Val = 0;
                tenMoreVal += 10;
                futurePos_Array[k] = (Number(futurePos_Array[0]) + tenMoreVal);
                futureBoolean_Array[k] = false;
                for (ua = 0; ua < battleGround_Array.length; ua++) {
                    if (futurePos_Array[k] == battleGround_Array[ua]) {
                        rndVal[k] = battleGround_Array.indexOf(Number(futurePos_Array[k]));
                        btsh_PosShip_OnceBox_Array[futurePos_Array[k]].setAttribute('class', 'ship-IBPosition-4-B-' + k);
                        //btsh_PropShip_OnceBox_Array[futurePos_Array[k]].setAttribute('class', 'ship-style-4-B-' + k);
                        battleGround_Array.splice(rndVal[k], 1);
                    } else {
                        truthOfNothing_Val += 1;
                    }
                    let truthOfNothing_Target = battleGround_Array.length;
                    if (truthOfNothing_Val == truthOfNothing_Target) {
                        ship_Array = [];
                        generateShips();
                        return;
                    } else {}
                };
                ship_Array[i].shipLocation = futurePos_Array;
                ship_Array[i].shipHits = futureBoolean_Array;
            };
        } else if (ship_Array[i].shipDirection == 'R' && ship_Array[i].shipLength == 5) {
            ship_i0_Current_Amount += 1;
            ship_i1_Current_Amount += 1;
            ship_i2_Current_Amount += 1;
            ship_i3_Current_Amount += 1;
            ship_i4_Current_Amount += 1;
            let rndVal = [0];
            rndVal[0] = Math.floor(Math.random() * (battleGround_Array.length - 1));
            let futurePos_Array = [];
            futurePos_Array[0] = battleGround_Array[rndVal[0]];
            btsh_PosShip_OnceBox_Array[futurePos_Array[0]].setAttribute('class', 'ship-IBPosition-5-R-0');
            //btsh_PropShip_OnceBox_Array[futurePos_Array[0]].setAttribute('class', 'ship-style-5-R-0');
            battleGround_Array.splice(rndVal[0], 1);
            let futureBoolean_Array = [];
            futureBoolean_Array[0] = false;
            for (let x = 0; x < dangerousNumbers_R5_Array.length; x++) {
                if (futurePos_Array[0] == dangerousNumbers_R5_Array[x]) {
                    ship_Array = [];
                    generateShips();
                    return;
                } else {}
            };
            for (let k = 1; k < ship_Array[i].shipLength; k++) {
                let truthOfNothing_Val = 0;
                futurePos_Array[k] = (Number(futurePos_Array[0]) + k);
                futureBoolean_Array[k] = false;
                for (ua = 0; ua < battleGround_Array.length; ua++) {
                    if (futurePos_Array[k] == battleGround_Array[ua]) {
                        rndVal[k] = battleGround_Array.indexOf(Number(futurePos_Array[k]));
                        btsh_PosShip_OnceBox_Array[futurePos_Array[k]].setAttribute('class', 'ship-IBPosition-5-R-' + k);
                        //btsh_PropShip_OnceBox_Array[futurePos_Array[k]].setAttribute('class', 'ship-style-5-R-' + k);
                        battleGround_Array.splice(rndVal[k], 1);
                    } else {
                        truthOfNothing_Val += 1;
                    }
                    let truthOfNothing_Target = battleGround_Array.length;
                    if (truthOfNothing_Val == truthOfNothing_Target) {
                        ship_Array = [];
                        generateShips();
                        return;
                    } else {}
                };
                ship_Array[i].shipLocation = futurePos_Array;
                ship_Array[i].shipHits = futureBoolean_Array;
            };
        } else if (ship_Array[i].shipDirection == 'B' && ship_Array[i].shipLength == 5) {
            ship_i0_Current_Amount += 1;
            ship_i1_Current_Amount += 1;
            ship_i2_Current_Amount += 1;
            ship_i3_Current_Amount += 1;
            ship_i4_Current_Amount += 1;
            let rndVal = [0];
            rndVal[0] = Math.floor(Math.random() * (battleGround_Array.length - 1));
            let futurePos_Array = [];
            futurePos_Array[0] = battleGround_Array[rndVal[0]];
            btsh_PosShip_OnceBox_Array[futurePos_Array[0]].setAttribute('class', 'ship-IBPosition-5-B-0');
            //btsh_PropShip_OnceBox_Array[futurePos_Array[0]].setAttribute('class', 'ship-style-5-B-0');
            battleGround_Array.splice(rndVal[0], 1);
            let futureBoolean_Array = [];
            futureBoolean_Array[0] = false;
            for (let x = 0; x < dangerousNumbers_B5_Array.length; x++) {
                if (futurePos_Array[0] == dangerousNumbers_B5_Array[x]) {
                    ship_Array = [];
                    generateShips();
                    return;
                } else {}
            };
            let tenMoreVal = 0;
            for (let k = 1; k < ship_Array[i].shipLength; k++) {
                let truthOfNothing_Val = 0;
                tenMoreVal += 10;
                futurePos_Array[k] = (Number(futurePos_Array[0]) + tenMoreVal);
                futureBoolean_Array[k] = false;
                for (ua = 0; ua < battleGround_Array.length; ua++) {
                    if (futurePos_Array[k] == battleGround_Array[ua]) {
                        rndVal[k] = battleGround_Array.indexOf(Number(futurePos_Array[k]));
                        btsh_PosShip_OnceBox_Array[futurePos_Array[k]].setAttribute('class', 'ship-IBPosition-5-B-' + k);
                        //btsh_PropShip_OnceBox_Array[futurePos_Array[k]].setAttribute('class', 'ship-style-5-B-' + k);
                        battleGround_Array.splice(rndVal[k], 1);
                    } else {
                        truthOfNothing_Val += 1;
                    }
                    let truthOfNothing_Target = battleGround_Array.length;
                    if (truthOfNothing_Val == truthOfNothing_Target) {
                        ship_Array = [];
                        generateShips();
                        return;
                    } else {}
                };
                ship_Array[i].shipLocation = futurePos_Array;
                ship_Array[i].shipHits = futureBoolean_Array;
            };
        }
    };
    console.log('Nieakceptowalne liczby dla - R2: ' + dangerousNumbers_R2_Array);
    console.log('Nieakceptowalne liczby dla - B2: ' + dangerousNumbers_B2_Array);
    console.log('Nieakceptowalne liczby dla - R3: ' + dangerousNumbers_R3_Array);
    console.log('Nieakceptowalne liczby dla - B3: ' + dangerousNumbers_B3_Array);
    console.log('Nieakceptowalne liczby dla - R4: ' + dangerousNumbers_R4_Array);
    console.log('Nieakceptowalne liczby dla - B4: ' + dangerousNumbers_B4_Array);
    console.log('Nieakceptowalne liczby dla - R5: ' + dangerousNumbers_R5_Array);
    console.log('Nieakceptowalne liczby dla - B5: ' + dangerousNumbers_B5_Array);
    console.log('Pole bitwy: (stan aktualny) ' + battleGround_Array);
    console.log('Statki:');
    console.log(ship_Array);
    for (let i = 0; i < ship_Amount; i++) {
        result_Area.innerHTML += "Statek " + (i + 1) + ", kierunek: " + "<strong>" + ship_Array[i].shipDirection + ship_Array[i].shipLength + "</strong>" 
        + ", lokalizacja: " + "<strong>" + ship_Array[i].shipLocation + "</strong>" + ", otrzymane trafienia: " + "<strong>" + ship_Array[i].shipHits + "</strong>" 
        + ", zatopienie: " + "<strong>" + ship_Array[i].shipSunken + "</strong>" + "<br />";
    };
    // Do dźwięku od zatopienia:
    for (i = 0; i < ship_Amount; i++) {
        shoutsPerSunken_Array[i] = 0;
    };
    // Sprawdzenie poprawności działania przełącznika dźwięków strzału:
    //console.log('Strzał: ' + shotSound);
    // Wyświetlenie liczby zniszczonych statków: (- zera)
    ship_Destroyed_Area.textContent = shipSunken_Amount + '/' + ship_Amount;
}



function fire() {
    console.clear();

    console.log('Liczba statków: ' + shipSunken_Amount);

    let shipSunken_Target; 
    shipSunken_Target = ship_Amount;
    // Number "input":
    let shotNumber = 0;
    let inputVal = inputNumber.value;
    if (inputVal.length != 2) {
        alert('You write correct ship coordinates.');
        return;
    } else {}
    var inputVal_Letter = inputVal.slice(0, 1);
    var inputVal_Number = inputVal.slice(1, 2);
    //console.log('[0]: ' + inputVal_Letter + ' | [1]: ' + inputVal_Number);
    // Tablica do pesudo-konwersji litery na cyfrę:
    let convertedLettToNum_Array = [];
    let onceLetter_Array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    let a_Cor = 0;
    let b_Cor = 0;
    for (i = 0; i < 10; i++) {   // Wattość inputa inna niż litera i cyfra w danym indeksie Stringa (tutaj zastosowano zmienne):
        if (inputVal_Letter != onceLetter_Array[i]) {
            a_Cor += 1;
            //alert('You write correct ship coordinates.');
        } else { }
        if (Number(inputVal_Number) != i) {
            b_Cor += 1;
            //alert('You write correct ship coordinates.');
            //return;
        } else {}
    };
    if (a_Cor == 10) {
        alert('You write correct ship coordinates.');
        return;
    } else {}
    if (b_Cor == 10) {
        alert('You write correct ship coordinates.');
        return;
    } else {}
    let convertedValue = 0;
    for (i = 0; i < 10; i++) {
        convertedLettToNum_Array[i] = {cnovLetter: onceLetter_Array[i], convValue: convertedValue};
        convertedValue += 10;
    };
    //console.log(convertedLettToNum_Array);
    let firstIndexValue = 0;
    for (i = 0; i < 10; i++) {
        if (inputVal_Letter == convertedLettToNum_Array[i].cnovLetter) {
            firstIndexValue = convertedLettToNum_Array[i].convValue;
        } else {}
    };
    //console.log(firstIndexValue + Number(inputVal_Number));
    shotNumber = firstIndexValue + Number(inputVal_Number);

    // Dźwięk:
    if (shotSound == false) {
        shotSound = true;
        if (sounds_ENABLE == true) {
            shot_Music.play();
            shot_Music.currentTime = 0;
        } else {}
    } else if (shotSound == true) {
        shotSound = false;
        if (sounds_ENABLE == true) {
            shot_R_Music.play();
            shot_R_Music.currentTime = 0;
        } else {}
    }
    // Sprawdzenie poprawności działania przełącznika dźwięków strzału:
    // console.log('Strzał: ' + shotSound);
    
    // Ilość poszczególnych indeksów z zakresu [0] do [4]: (zmienne)
    console.log('Liczba indeksów [0]: ' + ship_i0_Current_Amount);
    console.log('Liczba indeksów [1]: ' + ship_i1_Current_Amount);
    console.log('Liczba indeksów [2]: ' + ship_i2_Current_Amount);
    console.log('Liczba indeksów [3]: ' + ship_i3_Current_Amount);
    console.log('Liczba indeksów [4]: ' + ship_i4_Current_Amount);
    console.log('Numer inputa: ' + shotNumber);

    // Mechanizmy porównania dla poszczególnych indeksów wszystkich statków:
    // Zrób to w pętli i użyj do tego trzech zmiennych, jedną w pętli, a dwie wewnątrz, zwiększające się o 1.
    // Modyfikacja: .ship_i0_Current_Amount   (+ 1)
    // Modyfikacja: .shipLocation[]           (+ 1)
    // Modyfikacja: .shipHits[]               (+ 1)

    // Pudło:
    let shipCoord_toHitGrapg = 0;
    shipCoord_toHitGrapg = shotNumber;
    setTimeout(() => {
        btsh_SignShip_OnceBox_Array[shipCoord_toHitGrapg].setAttribute('class', 'sign-miss');
    }, 500);


    // Indeks [0]:
    let trueOfExist_i0_ship = ship_Amount;   // Liczba statków na polu bitwy
    let true_i0_sAm = trueOfExist_i0_ship - ship_i0_Current_Amount;   // Wartość początkowa zmiennej pętli FOR, liczba od której zaczynamy iterację, 
                                                                  // równoważna liczbie okrętów z tym indeksem, tutaj [0]
    for (sAm = true_i0_sAm; sAm < ship_Amount; sAm++) {
        if (shotNumber == ship_Array[sAm].shipLocation[0]) {   // Jeżeli wartość inputa jest równa statkowi z danym indeksem (chodzi o jego kolejność w tablicy 
                                                               // "ship_Array", ustaloną od ) z indeksem [0]
            ship_Array[sAm].shipHits[0] = true;
            let shipCoord_toHitGrapg = 0;
            shipCoord_toHitGrapg = ship_Array[sAm].shipLocation[0];
            // Prawo kompilatora: Góra -> Dół, Najpierw klasa "sign-miss", później "sign-hit", reset (powrót do klasy początkowej) jest tutaj niepotrzebny
            setTimeout(() => {
                btsh_SignShip_OnceBox_Array[shipCoord_toHitGrapg].setAttribute('class', 'sign-hit');
            }, setTimeoutDealy);
        } else {}
    };
    // Indeks [1]:
    let trueOfExist_i1_ship = ship_Amount;
    let true_i1_sAm = trueOfExist_i1_ship - ship_i1_Current_Amount;   // Indeks począteka elementów danej długości
    for (sAm = true_i1_sAm; sAm < ship_Amount; sAm++) {
        if (shotNumber == ship_Array[sAm].shipLocation[1]) {
            ship_Array[sAm].shipHits[1] = true;
            let shipCoord_toHitGrapg = 0;
            shipCoord_toHitGrapg = ship_Array[sAm].shipLocation[1];
            setTimeout(() => {
                btsh_SignShip_OnceBox_Array[shipCoord_toHitGrapg].setAttribute('class', 'sign-hit');
            }, setTimeoutDealy);
        } else {}
    };
    // Indeks [2]:
    let trueOfExist_i2_ship = ship_Amount;
    let true_i2_sAm = trueOfExist_i2_ship - ship_i2_Current_Amount;
    for (sAm = true_i2_sAm; sAm < ship_Amount; sAm++) {
        if (shotNumber == ship_Array[sAm].shipLocation[2]) {
            ship_Array[sAm].shipHits[2] = true;
            let shipCoord_toHitGrapg = 0;
            shipCoord_toHitGrapg = ship_Array[sAm].shipLocation[2];
            setTimeout(() => {
                btsh_SignShip_OnceBox_Array[shipCoord_toHitGrapg].setAttribute('class', 'sign-hit');
            }, setTimeoutDealy);
        } else {}
    };
    // Indeks [3]:
    let trueOfExist_i3_ship = ship_Amount;
    let true_i3_sAm = trueOfExist_i3_ship - ship_i3_Current_Amount;
    for (sAm = true_i3_sAm; sAm < ship_Amount; sAm++) {
        if (shotNumber == ship_Array[sAm].shipLocation[3]) {
            ship_Array[sAm].shipHits[3] = true;
            let shipCoord_toHitGrapg = 0;
            shipCoord_toHitGrapg = ship_Array[sAm].shipLocation[3];
            setTimeout(() => {
                btsh_SignShip_OnceBox_Array[shipCoord_toHitGrapg].setAttribute('class', 'sign-hit');
            }, setTimeoutDealy);
        } else {}
    };
    // Indeks [4]: (Strzał)
    let trueOfExist_i4_ship = ship_Amount;
    let true_i4_sAm = trueOfExist_i4_ship - ship_i4_Current_Amount;
    for (sAm = true_i4_sAm; sAm < ship_Amount; sAm++) {
        if (shotNumber == ship_Array[sAm].shipLocation[4]) {
            ship_Array[sAm].shipHits[4] = true;
            let shipCoord_toHitGrapg = 0;
            shipCoord_toHitGrapg = ship_Array[sAm].shipLocation[4];
            setTimeout(() => {
                btsh_SignShip_OnceBox_Array[shipCoord_toHitGrapg].setAttribute('class', 'sign-hit');
            }, setTimeoutDealy);
        } else {}
    };
    // Długość statków - 1: (Zatopinie)
    let EndOfLenthType_0_ship = ship_Amount - ship_i1_Current_Amount;   // Indeks końca elementów danej długości
    //console.log('Indeks końca elementów danej długości: ' + EndOfLenthType_0_ship);
    let sunkenTrueType_0_Value_Array = [];
    for (sunkV = 0; sunkV < ship_Amount; sunkV++) {
        sunkenTrueType_0_Value_Array[sunkV] = 0;
    }
    //console.log('true_i0_sAm = ' + true_i0_sAm);
    for (ship = true_i0_sAm; ship < EndOfLenthType_0_ship; ship++) {
        let sunkenTrueType_0_Target = ship_Array[ship].shipLength;
        if (ship_Array[ship].shipHits[0] == true) {
            sunkenTrueType_0_Value_Array[ship] += 1;
            console.log('Trafienia w statek ' + ship_Array[ship].shipNumber + ': ' + sunkenTrueType_0_Value_Array[ship] + '/2');
        } else {}
        if (sunkenTrueType_0_Value_Array[ship] == sunkenTrueType_0_Target) {
            ship_Array[ship].shipSunken = true;
            let typeOfDir = '';
            typeOfDir = String(ship_Array[ship].shipDirection);
            let ship_CurrentLoc_i_Val = ship_Array[ship].shipLocation[0];
            if (shoutsPerSunken_Array[ship] != 2) {
                shipSunken_Amount += 1;
                setTimeout(() => {
                    if (sounds_ENABLE == true) {
                        shout_Music.play();
                    } else {}
                    if (typeOfDir == 'R') {
                        btsh_PropShip_OnceBox_Array[ship_CurrentLoc_i_Val].setAttribute('class', 'ship-style-1-R');
                    } else if (typeOfDir == 'B') {
                        btsh_PropShip_OnceBox_Array[ship_CurrentLoc_i_Val].setAttribute('class', 'ship-style-1-B');
                    }
                }, setTimeoutDealy);
            } else {}
            shoutsPerSunken_Array[ship] = 2;
            //console.log('CYFRA: ' + shoutsPerSunken_Array[ship]);
        } else {}
        
    };
    // Długość statków - 2: (Zatopinie)
    let EndOfLenthType_1_ship = ship_Amount - ship_i2_Current_Amount;   // Indeks końca elementów danej długości
    //console.log('Indeks końca elementów danej długości: ' + EndOfLenthType_1_ship);
    let sunkenTrueType_1_Value_Array = [];
    for (sunkV = 0; sunkV < ship_Amount; sunkV++) {
        sunkenTrueType_1_Value_Array[sunkV] = 0;
    }
    for (ship = true_i1_sAm; ship < EndOfLenthType_1_ship; ship++) {
        let sunkenTrueType_1_Target = ship_Array[ship].shipLength;   // Długość statku dwu-indeksowego
        for (i = 0; i < ship_Array[ship].shipLength; i++) {
            if (ship_Array[ship].shipHits[i] == true) {
                sunkenTrueType_1_Value_Array[ship] += 1;
                //console.log('Trafienia w statek ' + ship_Array[ship].shipNumber + ': ' + sunkenTrueType_1_Value_Array[ship] + '/2');
            } else {}
            if (sunkenTrueType_1_Value_Array[ship] == sunkenTrueType_1_Target) {   // Akurat "sunkenTrueType_1_Target" nie trzeba przemianiać w tablicę, gdyż jego wartość odnosi się wyłącznie
                ship_Array[ship].shipSunken = true;                                // do statków z dwoma indeksami lokalizacji (np. [34, 35]).
                let typeOfDir = '';
                typeOfDir = String(ship_Array[ship].shipDirection);
                let ship_CurrentLoc_i_Val = [];
                let currentShipLength = ship_Array[ship].shipLength;
                for (i = 0; i < currentShipLength; i++) {
                    ship_CurrentLoc_i_Val[i] = ship_Array[ship].shipLocation[i];
                };
                // Obsługa funkcji jednorazowych: (w funkcji "generateShip" i na zewnątrz u góry (globalnie) znajdują się ważne składniki tej funkcji)
                if (shoutsPerSunken_Array[ship] != 2) {
                    shipSunken_Amount += 1;
                    setTimeout(() => {
                        if (sounds_ENABLE == true) {
                            shout_Music.play();
                        } else {}
                        if (typeOfDir == 'R') {
                            for (sI = 0; sI < currentShipLength; sI++) {
                                btsh_PropShip_OnceBox_Array[ship_CurrentLoc_i_Val[sI]].setAttribute('class', 'ship-style-2-R-' + sI);
                            };
                        } else if (typeOfDir == 'B') {
                            for (sI = 0; sI < currentShipLength; sI++) {
                                btsh_PropShip_OnceBox_Array[ship_CurrentLoc_i_Val[sI]].setAttribute('class', 'ship-style-2-B-' + sI);
                            };
                        }
                    }, setTimeoutDealy);
                } else {}
                shoutsPerSunken_Array[ship] = 2;
            } else {}
        };
    };
    // Długość statków - 3: (Zatopinie)
    let EndOfLenthType_2_ship = ship_Amount - ship_i3_Current_Amount;
    let sunkenTrueType_2_Value_Array = [];
    for (sunkV = 0; sunkV < ship_Amount; sunkV++) {
        sunkenTrueType_2_Value_Array[sunkV] = 0;
    }
    for (ship = true_i2_sAm; ship < EndOfLenthType_2_ship; ship++) {
        let sunkenTrueType_2_Target = ship_Array[ship].shipLength;
        for (i = 0; i < ship_Array[ship].shipLength; i++) {
            if (ship_Array[ship].shipHits[i] == true) {
                sunkenTrueType_2_Value_Array[ship] += 1;
            } else {}
            if (sunkenTrueType_2_Value_Array[ship] == sunkenTrueType_2_Target) {
                ship_Array[ship].shipSunken = true;
                let typeOfDir = '';
                typeOfDir = String(ship_Array[ship].shipDirection);
                let ship_CurrentLoc_i_Val = [];
                let currentShipLength = ship_Array[ship].shipLength;
                for (i = 0; i < currentShipLength; i++) {
                    ship_CurrentLoc_i_Val[i] = ship_Array[ship].shipLocation[i];
                };
                if (shoutsPerSunken_Array[ship] != 2) {
                    shipSunken_Amount += 1;
                    setTimeout(() => {
                        if (sounds_ENABLE == true) {
                            shout_Music.play();
                        } else {}
                        if (typeOfDir == 'R') {
                            for (sI = 0; sI < currentShipLength; sI++) {
                                btsh_PropShip_OnceBox_Array[ship_CurrentLoc_i_Val[sI]].setAttribute('class', 'ship-style-3-R-' + sI);
                            };
                        } else if (typeOfDir == 'B') {
                            for (sI = 0; sI < currentShipLength; sI++) {
                                btsh_PropShip_OnceBox_Array[ship_CurrentLoc_i_Val[sI]].setAttribute('class', 'ship-style-3-B-' + sI);
                            };
                        }
                    }, setTimeoutDealy);
                } else {}
                shoutsPerSunken_Array[ship] = 2;
            } else {}
        };
    };
    // Długość statków - 4: (Zatopinie)
    let EndOfLenthType_3_ship = ship_Amount - ship_i4_Current_Amount;
    let sunkenTrueType_3_Value_Array = [];
    for (sunkV = 0; sunkV < ship_Amount; sunkV++) {
        sunkenTrueType_3_Value_Array[sunkV] = 0;
    }
    for (ship = true_i3_sAm; ship < EndOfLenthType_3_ship; ship++) {
        let sunkenTrueType_3_Target = ship_Array[ship].shipLength;
        for (i = 0; i < ship_Array[ship].shipLength; i++) {
            if (ship_Array[ship].shipHits[i] == true) {
                sunkenTrueType_3_Value_Array[ship] += 1;
            } else {}
            if (sunkenTrueType_3_Value_Array[ship] == sunkenTrueType_3_Target) {
                ship_Array[ship].shipSunken = true;
                let typeOfDir = '';
                typeOfDir = String(ship_Array[ship].shipDirection);
                let ship_CurrentLoc_i_Val = [];
                let currentShipLength = ship_Array[ship].shipLength;
                for (i = 0; i < currentShipLength; i++) {
                    ship_CurrentLoc_i_Val[i] = ship_Array[ship].shipLocation[i];
                };
                if (shoutsPerSunken_Array[ship] != 2) {
                    shipSunken_Amount += 1;
                    setTimeout(() => {
                        if (sounds_ENABLE == true) {
                            shout_Music.play();
                        } else {}
                        if (typeOfDir == 'R') {
                            for (sI = 0; sI < currentShipLength; sI++) {
                                btsh_PropShip_OnceBox_Array[ship_CurrentLoc_i_Val[sI]].setAttribute('class', 'ship-style-4-R-' + sI);
                            };
                        } else if (typeOfDir == 'B') {
                            for (sI = 0; sI < currentShipLength; sI++) {
                                btsh_PropShip_OnceBox_Array[ship_CurrentLoc_i_Val[sI]].setAttribute('class', 'ship-style-4-B-' + sI);
                            };
                        }
                    }, setTimeoutDealy);
                } else {}
                shoutsPerSunken_Array[ship] = 2;
            } else {

            }
        };
    };
    // Długość statków - 5: (Zatopinie)
    let EndOfLenthType_4_ship = ship_Amount - 0;
    let sunkenTrueType_4_Value_Array = [];
    for (sunkV = 0; sunkV < ship_Amount; sunkV++) {
        sunkenTrueType_4_Value_Array[sunkV] = 0;
    }
    for (ship = true_i4_sAm; ship < EndOfLenthType_4_ship; ship++) {
        let sunkenTrueType_4_Target = ship_Array[ship].shipLength;
        for (i = 0; i < ship_Array[ship].shipLength; i++) {
            if (ship_Array[ship].shipHits[i] == true) {
                sunkenTrueType_4_Value_Array[ship] += 1;
            } else {}
            if (sunkenTrueType_4_Value_Array[ship] == sunkenTrueType_4_Target) {
                ship_Array[ship].shipSunken = true;
                let typeOfDir = '';
                typeOfDir = String(ship_Array[ship].shipDirection);
                let ship_CurrentLoc_i_Val = [];
                let currentShipLength = ship_Array[ship].shipLength;
                for (i = 0; i < currentShipLength; i++) {
                    ship_CurrentLoc_i_Val[i] = ship_Array[ship].shipLocation[i];
                };
                if (shoutsPerSunken_Array[ship] != 2) {
                    shipSunken_Amount += 1;
                    setTimeout(() => {
                        if (sounds_ENABLE == true) {
                            shout_Music.play();
                        } else {}
                        if (typeOfDir == 'R') {
                            for (sI = 0; sI < currentShipLength; sI++) {
                                btsh_PropShip_OnceBox_Array[ship_CurrentLoc_i_Val[sI]].setAttribute('class', 'ship-style-5-R-' + sI);
                            };
                        } else if (typeOfDir == 'B') {
                            for (sI = 0; sI < currentShipLength; sI++) {
                                btsh_PropShip_OnceBox_Array[ship_CurrentLoc_i_Val[sI]].setAttribute('class', 'ship-style-5-B-' + sI);
                            };
                        }
                    }, setTimeoutDealy);
                } else {}
                shoutsPerSunken_Array[ship] = 2;
            } else {

            }
        };
    };
    // Aktualizacja licznika zniszczonych statków:
    setTimeout(() => {
        ship_Destroyed_Area.textContent = shipSunken_Amount + '/' + ship_Amount;
    }, setTimeoutDealy);
    // Pojawienie się powiadomienia o zniszczeniu wszystkich statków:
    if (shipSunken_Amount == shipSunken_Target) {
        setTimeout(() => {
            fg_Mess.style.display = 'flex';
            shipSunken_Amount = 0;
        }, 2500);
    } else {}
    console.log('Liczba zatopionych statków: ' + shipSunken_Amount);
    //console.log(ship_Array[9].shipLocation[4]);
    console.log('Nieakceptowalne liczby dla - R2: ' + dangerousNumbers_R2_Array);
    console.log('Nieakceptowalne liczby dla - B2: ' + dangerousNumbers_B2_Array);
    console.log('Nieakceptowalne liczby dla - R3: ' + dangerousNumbers_R3_Array);
    console.log('Nieakceptowalne liczby dla - B3: ' + dangerousNumbers_B3_Array);
    console.log('Nieakceptowalne liczby dla - R4: ' + dangerousNumbers_R4_Array);
    console.log('Nieakceptowalne liczby dla - B4: ' + dangerousNumbers_B4_Array);
    console.log('Nieakceptowalne liczby dla - R5: ' + dangerousNumbers_R5_Array);
    console.log('Nieakceptowalne liczby dla - B5: ' + dangerousNumbers_B5_Array);
    //console.log('Pole bitwy: (stan aktualny) ' + battleGround_Array);
    console.log('Statki:');
    console.log(ship_Array);
    result_Area.textContent = '';
    for (let i = 0; i < ship_Array.length; i++) {
        result_Area.innerHTML += "Statek " + (i + 1) + ", kierunek: " + "<strong>" + ship_Array[i].shipDirection + ship_Array[i].shipLength + "</strong>" 
        + ", lokalizacja: " + "<strong>" + ship_Array[i].shipLocation + "</strong>" + ", otrzymane trafienia: " + "<strong>" + ship_Array[i].shipHits + "</strong>" 
        + ", zatopienie: " + "<strong>" + ship_Array[i].shipSunken + "</strong>" + "<br />";
    };
}