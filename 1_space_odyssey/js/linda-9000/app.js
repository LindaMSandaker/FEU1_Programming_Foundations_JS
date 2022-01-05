console.log(' hello world ');

/*
____/\\\\\\\\\_________/\\\\\\\_______/\\\\\\\\\_________/\\\\\\\__________
 __/\\\///////\\\_____/\\\/////\\\___/\\\///////\\\_____/\\\/////\\\________
  _\///______\//\\\___/\\\____\//\\\_\///______\//\\\___/\\\____\//\\\_______
   ___________/\\\/___\/\\\_____\/\\\___________/\\\/___\/\\\_____\/\\\_______
    ________/\\\//_____\/\\\_____\/\\\________/\\\//_____\/\\\_____\/\\\__/\\\_
     _____/\\\//________\/\\\_____\/\\\_____/\\\//________\/\\\_____\/\\\_\///__
      ___/\\\/___________\//\\\____/\\\____/\\\/___________\//\\\____/\\\________
       __/\\\\\\\\\\\\\\\__\///\\\\\\\/____/\\\\\\\\\\\\\\\__\///\\\\\\\/____/\\\_
        _\///////////////_____\///////_____\///////////////_____\///////_____\///__

_____/\\\\\\\\\____________________/\\\\\\\\\\\_____/\\\\\\\\\\\\\________/\\\\\\\\\____________/\\\\\\\\\___/\\\\\\\\\\\\\\\_
 ___/\\\\\\\\\\\\\________________/\\\/////////\\\__\/\\\/////////\\\____/\\\\\\\\\\\\\_______/\\\////////___\/\\\///////////__
  __/\\\/////////\\\______________\//\\\______\///___\/\\\_______\/\\\___/\\\/////////\\\____/\\\/____________\/\\\_____________
   _\/\\\_______\/\\\_______________\////\\\__________\/\\\\\\\\\\\\\/___\/\\\_______\/\\\___/\\\______________\/\\\\\\\\\\\_____
    _\/\\\\\\\\\\\\\\\__________________\////\\\_______\/\\\/////////_____\/\\\\\\\\\\\\\\\__\/\\\______________\/\\\///////______
     _\/\\\/////////\\\_____________________\////\\\____\/\\\______________\/\\\/////////\\\__\//\\\_____________\/\\\_____________
      _\/\\\_______\/\\\______________/\\\______\//\\\___\/\\\______________\/\\\_______\/\\\___\///\\\___________\/\\\_____________
       _\/\\\_______\/\\\_____________\///\\\\\\\\\\\/____\/\\\______________\/\\\_______\/\\\_____\////\\\\\\\\\__\/\\\\\\\\\\\\\\\_
        _\///________\///________________\///////////______\///_______________\///________\///_________\/////////___\///////////////__
_______/\\\\\________/\\\\\\\\\\\\______/\\\________/\\\______/\\\\\\\\\\\________/\\\\\\\\\\\_____/\\\\\\\\\\\\\\\___/\\\________/\\\_
 _____/\\\///\\\_____\/\\\////////\\\___\///\\\____/\\\/_____/\\\/////////\\\____/\\\/////////\\\__\/\\\///////////___\///\\\____/\\\/__
  ___/\\\/__\///\\\___\/\\\______\//\\\____\///\\\/\\\/______\//\\\______\///____\//\\\______\///___\/\\\________________\///\\\/\\\/____
   __/\\\______\//\\\__\/\\\_______\/\\\______\///\\\/_________\////\\\____________\////\\\__________\/\\\\\\\\\\\__________\///\\\/______
    _\/\\\_______\/\\\__\/\\\_______\/\\\________\/\\\_____________\////\\\____________\////\\\_______\/\\\///////_____________\/\\\_______
     _\//\\\______/\\\___\/\\\_______\/\\\________\/\\\________________\////\\\____________\////\\\____\/\\\____________________\/\\\_______
      __\///\\\__/\\\_____\/\\\_______/\\\_________\/\\\_________/\\\______\//\\\____/\\\______\//\\\___\/\\\____________________\/\\\_______
       ____\///\\\\\/______\/\\\\\\\\\\\\/__________\/\\\________\///\\\\\\\\\\\/____\///\\\\\\\\\\\/____\/\\\\\\\\\\\\\\\________\/\\\_______
        ______\/////________\////////////____________\///___________\///////////________\///////////______\///////////////_________\///________

      ============================================================================================
        TIMELINE of EVENTS
      ============================================================================================
       2001: A Space Odyssey spans from the dawn of man to its title year.
             Stone Age Earth:
             In the presence of a mysterious black obelisk, pre-humans discover the use
             of tools -- and weapons -- violently taking first steps toward intelligence.

        1999: On Earth's moon astronauts uncover another mysterious black obelisk.

        2001: Between Earth and Jupiter, the spacecraft's intelligent computer makes a mistake that
              kills most of the human crew -- then continues to kill to hide its error.

        2020: The sole survivor of the journey to Jupiter ascends to the next level of humanity.
 */

/*
  You are the sole survivor who will make the journey to Jupiter.

  But before you can leave you must build an autonomous humanoid robot to help you on your mission.

  This humanoid will be used to perform dangerous and mission critical tasks on your journey to Jupiter.
  - space walks to repair the spaceship
  - fight off alien creatures
  -

  The humanoid is your doppelgänger, a sentient being that will help you save man from extinction by keeping you alive.

  Using JavaScript build the software that will allow us to describe and programme the humanoid to do our bidding.
  */

/* ______   __  __   ______  ______
        _..._
      .'     '.      _
     /    .-""-\   _/ \
   .-|   /:.   |  |   |
   |  \  |:.   /.-'-./
   | .-'-;:__.'    =/
   .'=  *=|Noroff_.='
  /   _.  |    ;
 ;-.-'|    \   |
/   | \    _\  _\
\__/'._;.  ==' ==\
         \    \   |
         /    /   /
         /-._/-._/
  ...    \   `\  \
          `-._/._/


 1. CREATE DROID::::::
    Below are all the variables needed to initialize an android into consciousness in its default state.
    a. assign the correct values to the variables below,
    b. ensure to choose the correct values and datatypes
    c. the droid should be built in your likeness (a human, with human features, 2 arms, legs etc)
*/

var isAlive = true; // true
var fullName = "Corr" + " Nave";
var suitColor = "purple";
var eyes = 2001;
var eyeColor = "green";
var hairColor = "yellow";
var legs = 2;
var arms = 2;
var hands = 2;
var ears = 2;
var canWalk = true;
var canRun = true;
var canFly = true;
var hasWeapon = true;
var isInGoodMood = true;
var hasJetPack = true;

console.log('\u{1F916} .-.-. Booting .-.-.');
console.log(
    fullName,
    isAlive,
    hasJetPack,
    eyes,
    eyeColor,
    hairColor,
    legs,
    arms,
    hands,
    ears,
    canWalk,
    canFly,
    hasWeapon
);

/*
 2. BROKEN SATELLITE::::::
    You need to send the droid out on a space walk to fix the satellite, with out it you can't communicate with earth.
    a) write an if condition checking if the jet pack is enabled, if true the droid can go outside if false the droid
       cannot go outside, console log the correct log based on that condition.
*/
console.log('\u{1F6F0} BROKEN SATELLITE::::::');

if (hasJetPack) {
    console.log("JetPack is enabled!!! off I go outside to fix the satellite");
} else {
    console.log("JetPack NOT enabled, please enable jetPack before doing a space walk");
}

/*
 3. METEOR SHOWER::::::
    On your way to Jupiter you encounter a massive meteor shower that could damage the ship, you need to redirect the ship to a new safe location.
    a) Using a for loop iterate through the responses array and choose the appropriate response to get out of danger.
      create an if condition in your loop to print only 1 response using a comparison operator.

console.log('\u{1F327} METEOR SHOWER::::::');

var responses = [
    'Call basecamp and ask for assistance, but they are far away',
    'Do nothing, just push through',
    'initiate core thrusters, punch 180degrees into dash-nav and warp away from danger',
    'ask humanoid-9000 to fly out there and shield the ship from the debris, this action could harm the humanoid',
];

for (var i = 0; i <= responses.length; i++) {
    if (responses[i] === responses[3]) {
        console.log(responses[i]);
    }
}
*/

// write your code here, use the console log beneath
// console.log("\u{1F6F8} Swoosh -> -> Ship is steered to safety!");

/*
 4. ALIENS SPACE CRAFT ENCROACHING::::::
    Alien craft approaches its an enemy for sure...you need to shoot it down!!
    a) convert the pseudoscope to real code
       create the required variables below and fill in the correct values and dataTypes to make
       the if statements pass so that photonLaser fires pew pew pew.

console.log('\u{1F47E} ALIENS SPACE CRAFT ENCROACHING::::::');

// a.
var enemyCraft = false;
var photonLaser = true;
var photonLaserEnabled = true;
var bullets = 100;

if (enemyCraft && photonLaser && photonLaserEnabled) {
    if (bullets >= 100) {
        for (var i = 0; i <= 100; i++) {
            console.log('\u{2708} \u{1F525} pew pew pew !! you got them!!');
        }
    } else {
        console.log('\u{1F9E8} DEAD \u{1F9E8}');
    }
} else {
    console.log('do your homework');
}
*/
/*
  If its an enemyCraft && photonLaser && photonLaserEnabled
      IF bullets is greater than or equal to 100
          shoot 100 photon-lazers by printing this log 100 times:
          console.log("\u{2708} \u{1F525} pew pew pew !! you got them!!"); (use a loop)
        ELSE
          console.log("\u{1F9E8} DEAD \u{1F9E8} ");
*/

/*
 5. LUNAR LANDING:::::
    We got word of an extra terrestrial sighting on the moon... we have been tasked to land on the moon
    to investigate it, we have aboard a NASA lunar module https://en.wikipedia.org/wiki/Apollo_Lunar_Module
    This module will allow to land safely on the moon with the aid of the landing radar which takes inputs.

    Ensure the correct co-ordinates and approach speed are entered into the landing radar.
    It's all automated we just have to ensure that the correct values are input ie. not undefined.

    The lunar radar accepts approach speeds in increments of hundreds only, starting at 0 and maxing out at 700.

    You cannot edit the lunarRadar object directly you have to pass your values in via an interface called variables.

    tip: varName.keyName (this is how to extract a value from an object)

console.log('\u{1F311} LUNAR LANDING:::::');

// start coding here

var lunarRadar = {
    isEnabled: undefined,
    long: undefined,
    lat: undefined,
    approachSpeed: undefined, // "ft per minute"
};
*/
// Level 1 convert this psuedocode to functioning code.

/*
IF lunar radar is enabled && lat is defined and long is defined
    console.log("\u{1F91F} looking good " + name + " we are making our descent, now entering approach speed");
    IF approach speed is greater than or equal to 200ft per minute and approach speed is less than 299ft per minute
      console.log("\u{269B} well done " + name + " we have touched down safely. Lets get some samples and get heck outta here!");
    ELSE IF approach speed is greater than or equal to 300ft per minute
      console.log("\u{1F627} coming in hot " + name + " decrease pitch!");
    ELSE IF approach speed is greater than or equal to 400ft per minute
      console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
    ELSE IF approach speed is greater than or equal to 500ft per minute
      console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
    ELSE IF approach speed is greater than or equal to 600ft per minute
      console.log("\u{1F627} coming in way too hot " + name + " decrease pitch!");
    ELSE IF approach speed is less than or equal to 100ft per minute
      console.log("\u{1F47D} hmmm need a bit more heat " + name + " lets increase pitch and we should have a smooth landing");
    ELSE
      console.log('Please enter an approach speed');
ELSE
  console.log("\u{1F9F1}\u{1F9F1}\u{1F9F1}\u{1F9F1} " + name + " you went down like a ton of bricks, the wrecked remains of the lunar lander can still be seen from earth twinkling in the distance.");
*/

// Level 2 convert it to a switch statement.

/*
 6. PLANETARY INFO-DASH:::::

 Level 1::::::::::::::
 Given this array of planets using what you know about how to access data in an arrays index log out the:
  - Description,
  - Surface temperature and
  - Mass

  in the console logs bellow.

  tip: pass your variables into the console.log after comma ,

console.log('\u{1F319} PLANETARY INFO-DASH:::::');

var planets = [
    [
        'MERCURY',
        [
            'The smallest and fastest planet, Mercury is the closest planet to the Sun and whips around it every 88 Earth days.',
            '-173 to 427°C',
            '330,104,000,000,000 billion kg (0.055 x Earth)',
        ],
    ],
    [
        'JUPITER',
        [
            'Jupiter is a massive planet, twice the size of all other planets combined and has a centuries-old storm that is bigger than Earth.',
            '-108°C',
            '1,898,130,000,000,000,000 billion kg (317.83 x Earth)',
        ],
    ],
    [
        'EARTH',
        [
            'Earth is the third planet from the Sun and the fifth largest planet in the Solar System with the highest density. It is currently the only known location where life is present.',
            '110 degrees Fahrenheit / 48 degrees Celsius, and the lowest around -126 degrees Fahrenheit / -88 degrees Celsius, maybe even lower',
            '6.6 sextillion tons',
        ],
    ],
    [
        'MARS',
        [
            'Mars is the fourth planet from the Sun and the second-smallest planet with a thin atmosphere, having the surface features reminiscent both of the impact craters of the Moon, and the valleys, deserts and polar ice caps of Earth. It is the most widely searched planet for life.',
            '87 to -5 °C',
            '641,693,000,000,000 billion kg (0.107 x Earth)',
        ],
    ],
];

console.group(planets[0][0]); // Mercury.
console.log('Description:');
console.log('Surface temperature:');
console.log('Mass:');
console.groupEnd();

console.group(); // Jupiter. (please insert the correct array index to add Earth as a string label to the console, as previous done for Mercury)
console.log('Description:');
console.log('Surface temperature:');
console.log('Mass:');
console.groupEnd();

console.group(); // Earth.
console.log('Description:');
console.log('Surface temperature:');
console.log('Mass:');
console.groupEnd();

console.group(); // Mars.
console.log('Description:');
console.log('Surface temperature:');
console.log('Mass:');
console.groupEnd();
*/
/*
 Level 2::::::::::::::
 Add 2 New planets of your choosing to the front of the Array : https://nineplanets.org
*/

/*
 7. Android Object REFACTOR:::::

 Level 1::::::::::::::
 Refactor (change) all the variables you have in place that initializes the android into an android object.
 - Your android needs a head, upperBody, lowerBody & [ anyThingElseYouCanDreamOf ].
 - Feel free to create any new properties that will further describe your android [ anyThingYouCanDreamOf ].
 - next update your application to use this newly refactored code

 tip: the console.log that prints the variables of the android will need to be updated

 Level 2::::::::::::::
 Refactor the planets array to be an array of objects, each object must be its own planet.
  - next update your application to use this newly refactored code
*/

/*
  8. REFACTOR Create functions:::::::
  Level 1:::::::::
  Refactor your application to be initialized by a function.

  Level 2:::::::::
  Look through your code and find more opportunities to use and call functions and parameters aka arguments.
  */

/*
    9. REFACTOR Arrow functions
    Level 1:::::::::
    Go through your application and convert all your functions into Arrow functions.
    If you only have one function, please make a few more it is possible to have one function per feature.

    Level 2:::::::::
    Create a few methods on your droid object that will allow you to update your object properties like isAlive, eyeColors etc.
  */
