/* Opdracht 0: voorbeeld */
// Schrijf een functie genaamd add, die twee getallen verwacht, die bij elkaar optelt en teruggeeft
// ---- Verwachte uitkomsten:
// add(1, 4) geeft 5
// add(2, 5) geeft 7

function add(a, b) {
    return a + b;
}

const result = add(1, 4);
console.log(result);

/* Opdracht 1 */
// Schrijf een functie genaamd greeter, die een naam verwacht en een groet teruggeeft
// ---- Verwachte uitkomsten:
// greeter("Jan") geeft "Hoi Jan!"
// greeter("Kees") geeft "Hoi Kees!"

function greeter(name) {
    console.log("Hoi " + name + "!");
}

greeter("Jan");
greeter("Kees")


/* Opdracht 2 */
// Schrijf een functie genaamd minutesToSeconds, die een hoeveelheid minuten verwacht (als een getal) en teruggeeft hoeveel
// seconden dat zijn.
// ---- Verwachte uitkomsten:
// minutesToSeconds(1) geeft 60
// minutesToSeconds(3) geeft 180
// minutesToSeconds(23) geeft 1380

function minutesToSeconds(minutes, seconds) {
    return minutes * seconds;
}

const minutesToSeconds1 = minutesToSeconds(1, 60);
const minutesToSeconds2 = minutesToSeconds(3, 60);
const minutesToSeconds23 = minutesToSeconds(23, 60);
console.log(minutesToSeconds1);
console.log(minutesToSeconds2);
console.log(minutesToSeconds23);

/* Opdracht 3 */
// Schrijf een functie genaamd merge, die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Let op: je mag hier geen String methoden voor gebruiken zoals concat().
// ---- Verwachte uitkomsten:
// merge("abra", "cadabra") geeft "abracadabra"
// merge("zoet", "sappig") geeft "zoetsappig"

function merge(word1, word2) {
    return word1 + word2;
}

const abraCadabra = merge("abra", "cadabra");
const zoetSappig = merge("zoet", "sappig");

console.log(abraCadabra);
console.log(zoetSappig);

/* Opdracht  4 */
// Schrijf een functie genaamd calculateDogYears die de hondenleeftijd verwacht en dit omrekent naar mensenjaren (1 tot 7). Op basis daarvan wordt een zinnetje teruggegeven.
// ---- Verwachte uitkomsten:
// calculateDogYears(6) geeft "Jouw hond is 42 jaar oud in mensenjaren."
// calculateDogYears(2) geeft "Jouw hond is 14 jaar oud in mensenjaren."

function calculateDogYears(number1, number2) {
    return number1 * number2;
}

const firstDog = calculateDogYears(7, 6);
const secondDog = calculateDogYears(7, 2);

const calculateDogYears6 = "Jouw hond is " + firstDog + " oud in mensenjaren.";
const calculateDogYears2 = "Jouw hond is " + secondDog + " oud in mensenjaren.";
console.log(calculateDogYears6);
console.log(calculateDogYears2);


/* Opdracht 5 */
// Schrijf een functie genaamd wrapper, die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// wrapper("bril", "*") geeft "*bril*"
// wrapper("beep", "_") geeft "_beep_"
// wrapper("kaas", "Q") geeft "QkaasQ"

function wrapper(woord, karakter) {
  return karakter + woord + karakter;
}

const bril = wrapper('bril', "*");
const beep = wrapper ("beep","_");
const kaas = wrapper("kaas", "Q");

console.log(bril);
console.log(beep);
console.log(kaas);

/* Bonus opdracht  */
// Schrijf een functie genaamd createDetailString, die een object met de properties firstName, lastName en profession verwacht en een zin teruggeeft
// ---- Verwachte uitkomsten:
// createDetailString({ firstName: 'Jan', lastName: 'Jansen', profession: 'docent'}) geeft "Het beroep vam Jan Jansen is docent."
// createDetailString({ firstName: 'Kees', lastName: 'Klaasen', profession: 'brandweerman'}) geeft "Het beroep vam Kees Klaasen is brandweerman."

function createDetailString(firstName, lastName, profession){
  return "Het beroep van " + firstName + " " + lastName + " is" + " " + profession + ".";
}

const janJanssen = createDetailString("Jan", "Janssen", "docent");
const keesKlaasen = createDetailString("Kees", "Klaasen", "brandweerman");

console.log(janJanssen);
console.log(keesKlaasen);
