const chalk = require('chalk');
const chalkAnimation = require('chalk-animation');
//const log = console.log;
//log(chalk.blue('Hello') + 'world' + chalk.red('!'));

console.log('There once lived a ' + chalk.blue('dog') + ' who loved to chase her own tail, she chased ' + chalk.red('it') + ' and chased ' + chalk.red('it') + ' till one day she caught ' + chalk.red('it') + ', she then let go of her tail and started to chase ' + chalk.red('it') + ' the other way.')

chalkAnimation.glitch('And I watched this for seven whole minutes')

//There once lived a dog who loved to chase his own tail, she chased it and chased it till one day she caught it, she then let go of her tail and started to chase it the other way.

setTimeout(() => {
    glitch.stop();
}, 16000);

//Keegan Whitener
//If you are wandering how I got this blame my dog for chasing her tail for 7 minutes straight.
