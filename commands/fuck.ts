import { randomMedia } from "../utility/mediaSelector";

const replies = [
    "DEEPER!",
    "CUM INSIDE ME!",
    "Onii-chan?! >///<",
    "HARDER!",
    "DON'T CUM INSIDE ME!",
    "IM NOT A VIRGIN ANYMORE!:sob:",
    "This is my first time",
    "THIS FEELS SOO GOOD!",
    "FUCK ME HARDER DADDY!",
    "FUCK ME HARDER ONII-CHAN!",
    "YOUR DICK IS TOO LARGE!:sob:",
    "I can feel your dick inside me",
    "I can feel your dick move inside me",
    "PLEASE BE GENTLE",
    "USE ME!",
    "OMG YES *moans*",
    "OMG YES :weary:",
    "Thats the spot",
    ":heart:",
    "Ur mine :heart:",
    "Your dick is to MASSIVE :sob:"
];

const fileEndings = [
    ".jpg",
    ".jpeg",
    ".gif",
    ".png",
];

export function fuck(interaction: any, args: any, loggerHandler: any) {
    const name = args[0]?.value;
    const file = randomMedia("./media/fuck/", fileEndings);
    const reply = replies[Math.floor(Math.random() * replies.length)] + " " + (name ? name : "<@" + interaction.member.id + ">");
    interaction.reply({ content: reply, files: [file] }).catch((x: any) => {
        loggerHandler.error(x);
    });
}

