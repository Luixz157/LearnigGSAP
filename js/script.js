//Usando o método gsap

/* 
Métodos gsap{
    to()
    from()
    fromTo()
}
*/

//To, ele vai até o valor definido
gsap.to('.green', {
    x: 100,
    //xPercent em Porcentagem

    //Fazendo animação ficar ease
    ease: "elastic.in(1,0.3)",

    //Ele vai para opacidade
    opacity: 0,

    //Transition suava
    duration: .5,

    //Quiser Atrasar
    delay: 1
})

//From, Ao contrario do To, ele sai do valor definido
gsap.from('.purple', {
    x: 100,
    //xPercent em Porcentagem

    //Fazendo animação ficar ease
    ease: "bounce.in",

    //Ele sai da opacidade
    opacity: 0,

    //Transition suava
    duration: .5,

    //Quiser Atrasar
    delay: 1
})

//FromTo, junta os Dois, aonde quer que vai e aonde quer que termine
gsap.fromTo('.blue', {
    x: 0,
    opacity: 0
}, {
    x:300,
    duration: 4,
    delay: 1,
    opacity: 1,
    ease: "sine.in",
})

//Easing
//Animation Easing: https://gsap.com/docs/v3/Eases

//--------------------------------------------------------------------
const tml = gsap.timeline();

tml.fromTo('.green2', {
    x: 0,
    opacity: 0
}, {
    x:100,
    duration: 2,
    delay: 1,
    opacity: 1,
    ease: "sine.in",
}).fromTo('.purple2', {
    x: 0,
    opacity: 0
}, {
    x:200,
    duration: 2,
    delay: 1,
    opacity: 1,
    ease: "sine.in",
}).fromTo('.blue2', {
    x: 0,
    opacity: 0
}, {
    x:300,
    duration: 2,
    delay: 1,
    opacity: 1,
    ease: "sine.in",
})
//--------------------------------------------------------------------
//Time line posicionamento de começo
/*
- Posicionamento absolute   | 
- Label                     |
- <                         |
- >                         |
- += ou -=                  |
*/

const tml2 = gsap.timeline();

tml2.to('.green3', {x: 100,ease: "elastic.in(1,0.3)",opacity: 0,duration: .5,delay: 1}, "start")
    .to('.purple3', {x: 100,ease: "elastic.in(1,0.3)",opacity: 0,duration: .5,delay: 1})
    .to('.blue3', {x: 100,ease: "elastic.in(1,0.3)",opacity: 0,duration: .5,delay: 1}, "start")

//--------------------------------------------------------------------
//ScroolTrigger
//Para pode usar ele tem que chamar no html
//Quando meu sroll chegar até tal momento comaça a animation
gsap.registerPlugin(ScrollTrigger)

const tml4 = gsap.timeline({
    scrollTrigger: {
        //Aonde vai Start, Section
        trigger: '.section',

        //Marcador
        markers: true,

        //Mecher no Posicionamento do Marcado de quando for começar
        start:'center center',
        end: 'bottom center',

        //Executadas com o Scroll do MOuse
        scrub: true, 

        //A Section fica parada até chegar no end
        pin:true,
    }
});

tml4.from('.green4', {x: 100,ease: "elastic.in(1,0.3)",duration: 2,delay: 1}, )
    .from('.purple4', {x: 100,ease: "elastic.in(1,0.3)",duration: 2,delay: 1})
    .from('.blue4', {x: 100,ease: "elastic.in(1,0.3)",duration: 2,delay: 1}, )