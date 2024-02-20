console.log('Sup, World?');

const btn = document.querySelector('button');

btn.onclick = () => {
    alert('You clicked me');
}

const fun = () => 'functional programming FTW';
console.log(fun());

class Humanoid {
    constructor() {
        this.dna = '🧬'
    }

    walk() {
        console.log('going for a walk...');
    }
};

const wait = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('thank you for waiting ⏰');
    })
});