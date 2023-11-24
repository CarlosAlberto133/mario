const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');
const btn = document.getElementById('reloadButton')
const pause = document.getElementById('pause')
const btnResume = document.getElementById('resume')

document.getElementById('reloadButton').addEventListener('click', function() {
    location.reload();
});

document.getElementById('pause').addEventListener('click', function() {
    const canoAnimationName = window.getComputedStyle(cano).animationName;

    if (canoAnimationName === 'cano-animation') {
        cano.classList.add('pause-animation');
        pause.disabled = true;
        btnResume.style.display = 'flex'
    }
});

document.getElementById('resume').addEventListener('click', function() {
    cano.classList.remove('pause-animation');
    btnResume.style.display = 'none'
    pause.disabled = false;
});

document.getElementById('level').addEventListener('change', function() {
    var selectedValue = this.value;
    if (selectedValue === '1') {
        cano.style.animation = 'cano-animation 3s infinite reverse'
        btnResume.style.display = 'none'
        pause.style.display = 'none'
    }

    if (selectedValue === '2') {
        cano.style.animation = 'cano-animation 3s infinite alternate-reverse'
        btnResume.style.display = 'none'
        pause.style.display = 'none'
    }

    if (selectedValue === '3') {
        cano.style.animation = 'cano-animation 3s infinite normal'
        btnResume.style.display = 'none'
        pause.style.display = 'none'
    }
});

document.getElementById('velocidade').addEventListener('change', function() {
    var selectedValue = this.value;
    if (selectedValue === '1') {
        cano.style.animation = 'cano-animation 5s infinite reverse'
        btnResume.style.display = 'none'
        pause.style.display = 'none'
    }

    if (selectedValue === '2') {
        cano.style.animation = 'cano-animation 4s infinite reverse'
        btnResume.style.display = 'none'
        pause.style.display = 'none'
    }

    if (selectedValue === '3') {
        cano.style.animation = 'cano-animation 3s infinite reverse'
        btnResume.style.display = 'none'
        pause.style.display = 'none'
    }

    if (selectedValue === '4') {
        cano.style.animation = 'cano-animation 2s infinite reverse'
        btnResume.style.display = 'none'
        pause.style.display = 'none'
    }

    if (selectedValue === '5') {
        cano.style.animation = 'cano-animation 1s infinite reverse'
        btnResume.style.display = 'none'
        pause.style.display = 'none'
    }
});

const pulo = () => {
    mario.classList.add('pulo');
    setTimeout(() => {
        mario.classList.remove('pulo');
    }, 500)
}

const loop = setInterval(() => {
    const canoPosition = cano.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (canoPosition <= 120 && canoPosition > 0 && marioPosition < 80) {
        cano.style.animation = 'none';
        cano.style.left = `${canoPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        btn.style.display = 'flex'

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', pulo);