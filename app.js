const textArr = [
    {
        text: "Hello my name is Luka",
        color: "#003B36",
    },
    {
        text: "I'm Junior Front-end Dev",
        color: "#54457F",
    },
    {
        text: "My skills 👨🏻‍💻 is HTML, CSS and JS",
        color: "#764ba2",
    }
];
const text = document.getElementById('text');
let index = 0;
let counter = 0;

const writeText = () => {
    text.innerHTML = textArr[counter].text.slice(0, index);
    document.body.style.background = `${textArr[counter].color}`;
    index++;
    if (index > textArr[counter].text.length) {
        counter++;
        index = 0;
    }if (counter > textArr.length - 1) {
        counter = 0
    }
};

let Interval = setInterval(() => {
    writeText()
},170);