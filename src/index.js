import foods from './foods';
import { choice, remove } from './helpers'


let fruit = choice(foods);
console.log(`I'd like one ${fruit}, please`);
console.log(`Here you go: ${fruit}`);
console.log("May i have another?")
let remaining = remove(foods, fruit);
console.log(`im sorry, we're all out. we have only ${remaining.length} left`)
