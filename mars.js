alert('Hello!');

alert('Welcome to the Mars Adventure')

alert('Starting your Mars Adventure!');
alert('Booting up...');
alert('All systems go!');
alert("Let's start!");

const username = prompt(`Hi there. What's your name?`)

alert(`Hello ${username}`);


alert(`I'm not sure what the game is about ${username}, but your here.`)

let excited = prompt(`Are you excited? (Type Y or N)`)
excited = excited.toUpperCase();

if (excited === 'Y') {
    alert(`I knew you’d say that. It’s so cool that you’re going to Mars!`)
} else if(excited === 'N'){
    alert(`Well, it’s too late to back out now.`)
} else {
    alert('Bro thats not a valid answer.')
}

alert("It's time to pack for your trip to Mars.");
let numSuitcases = prompt('How many suitcases do you plan to bring?');
numSuitcases = Number(numSuitcases);

if (numSuitcases > 2) {
    alert(`That's way too many. You'll have to pack more lightly.`)
} else {
    alert(`Perfect. You'll certainly fit in the spaceship!`)
}


alert("You're allowed to bring one companion animal with you.");

const companionType = prompt('What kind of companion animal would you like to bring?');
const companionName = prompt("What is your companion's name?");

const companionTypeUpperCase = companionType.charAt(0).toUpperCase() + companionType.slice(1);
const companionNameUpperCase = companionName.charAt(0).toUpperCase() + companionName.slice(1);

alert(`Cool, so you're bringing ${companionNameUpperCase} the ${companionTypeUpperCase}`)

alert('NASA has a interior design team offering to outfit your space ship.');
alert(`You have a couple of options for the interior decor of your ship. Your options are:
A  Sleek, modern minimalism
B  Retro/vintage space age
C  Victorian-era steampunk
`);

let decorChoice = prompt(`What kind of decore would you like for your scpace ship bruv?`)
decorChoice = decorChoice.toUpperCase()

let decor;
if (decorChoice === 'A') {
  decor = 'modern minimalist';
} else if (decorChoice === 'B') {
    decor = `Retro/vintage space age`
} else {
    decor = `Victorian-era steampunk`
}

alert(`${username} and ${companionName}, surfing the celestial abyss, in a ${decor} spaceship.`);

for (let i = 5; i >= 0; i--) {
        alert(`${i}...`)
}

alert(`*** LIFTOFF ***`)