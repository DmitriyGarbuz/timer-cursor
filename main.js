class Timer {
    constructor(time, span, auto) {
        this.time = time;
        this.span = span;
        this.startTime = time;
        this.timer = document.createElement("div");
        this.conteiner = document.createElement("div");
        this.conteiner.classList.add("conteiner");
        this.conteiner.style.backgroundColor ="hsl(0, 0%, 27%)";
        this.conteiner.style.color = "rgb(131, 250, 84)";
        this.conteiner.style.fontFamily = 'Work Sans,sans-serif,Butcherman,cursive';
        this.conteiner.style.fontSize = '72px';
        this.startTimer();
        this.timer.appendChild(this.conteiner);
        this.loanding = document.createElement("div");
        this.loanding.classList.add("loanding");
        this.loanding.textContent = 'Loanding';
        this.loanding.style.textAlign = 'center';
        this.loanding.style.fontSize = '20px';
        this.loanding.style.height = '5vh';
        this.loanding.style.backgroundColor = "rgb(131, 250, 84)";
        this.timer.appendChild(this.loanding);
        this.button = document.createElement("input");
        this.button.type = "button";
        this.button.style.color = "rgb(131, 250, 84)";
        this.button.style.fontFamily = 'Work Sans,sans-serif,Butcherman,cursive';
        this.button.style.fontSize = '24px';
        this.button.style.backgroundColor = 'hsl(0, 0%, 27%)';
        this.button.style.borderColor = 'rgb(131, 250, 84)';
        this.button.style.height = '5vh';
        this.button.style.width = '15vw';
        this.button.classList.add("buttonTimer");
        this.button.onclick = this.onClick.bind(this);
        this.button.value = "START";
        this.timer.appendChild(this.button);
        this.started = false;
        document.body.appendChild(this.timer);

        if (auto) {
            this.start();
        }
    }

    startTimer() {
        let minutes = Math.floor(this.time / 60);
        let secundes = this.time - minutes * 60;
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (secundes < 10) {
            secundes = '0' + secundes;
        }
        this.conteiner.textContent = minutes + ":" + secundes;
    }

    conteinerDown() {
        const width = this.time / this.startTime * 100;
        this.loanding.setAttribute("style", 'width:' + width + '%; height: 5vh; background-color: rgb(131, 250, 84); text-align: center; font-size: 20px;');
        this.startTimer();
        if (this.time <= 0) {
            this.stop();
        } else {
            this.time = this.time - this.span / 1000;
        }
    }

    start() {
        this.started = true;
        this.button.value = "STOP";
        this.button.style.color = "#ff7ad7";
        this.button.style.borderColor = "#ff7ad7";
        this.conteinerDown();
        this.interval = setInterval(this.conteinerDown.bind(this), this.span);
    }

    onClick() {
        if (this.started) {
            this.stop();
        } else {
            this.start();
        }
    }

    stop() {
        this.started = false;
        this.button.value = "START";
        this.button.style.color = "rgb(131, 250, 84)";
        this.button.style.borderColor = 'rgb(131, 250, 84)';

        clearInterval(this.interval);
    }
}
let timeStart = new Timer(1 * 60, 1000, false);
let timeAuto= new Timer(10 * 60, 2000, true);