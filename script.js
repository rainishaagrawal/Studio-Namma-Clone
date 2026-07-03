let menu = document.querySelector(".menu")
let flag = false;
let none_pg = document.querySelector(".none-pg")
let dot = document.querySelector(".dot")
let page1 = document.querySelector(".page1")
let talk = document.querySelector(".talk")
let l1 = document.querySelector(".l1")
let l2 = document.querySelector(".l2")
let page2 = document.querySelector(".page2")
let vdo = document.querySelector(".vdo")
let page3 = document.querySelector(".page3")
let page4 = document.querySelector(".page4")
let page4_bott = document.querySelector(".page4-bott")
let page5 = document.querySelector(".page5")
let img1 = document.querySelector(".img1")
let img2 = document.querySelector(".img2")
let img3 = document.querySelector(".img3")
let img4 = document.querySelector(".img4")
let page6 = document.querySelector(".page6")
let page7 = document.querySelector(".page7")
let page8 = document.querySelector(".page8")
let page9 = document.querySelector(".page9")
let con1 = document.querySelector(".con1")
let con2 = document.querySelector(".con2")
let con3 = document.querySelector(".con3")
let con4 = document.querySelector(".con4")
let con5 = document.querySelector(".con5")
let con6 = document.querySelector(".con6")
let con7 = document.querySelector(".con7")
let t1 = document.querySelector("#t1")
let t2 = document.querySelector("#t2")
let v1 = document.querySelector(".p1")
let v2 = document.querySelector(".p2")
let v3 = document.querySelector(".p3")
let v4 = document.querySelector(".p4")
let v5 = document.querySelector(".p5")
let v6 = document.querySelector(".p6")
let v7 = document.querySelector(".p7")
let overlay = document.querySelector(".overlay")
let detailImg = document.querySelectorAll(".detail-img img")
let detail = document.querySelector(".detail")
let playground = document.querySelector(".playground")
let playgroundImg=document.querySelectorAll(".playground-img img")
let see = document.querySelector(".see")


menu.addEventListener("mouseenter",()=>{
    menu.textContent = "OPEN"
})

menu.addEventListener("mouseleave",()=>{
    menu.textContent = "MENU"
})

menu.addEventListener("click",()=>{
    if(!flag){
        none_pg.style.top="-200%"
        none_pg.style.transform = "rotate(25deg)"
        menu.textContent= "CLOSE"
        overlay.style.transform="translateX(0px)"
        vdo.style.opacity="0"
        flag = true;
    }else{
        none_pg.style.transform = "rotate(0deg)"
        none_pg.style.top="-350%"
        menu.textContent="OPEN"
        overlay.style.transform="translateX(-1200px)"
        vdo.style.opacity="1"
        flag = false;
    }
});

page1.addEventListener("mousemove",(dets)=>{
    dot.style.left = dets.clientX + "px"
    dot.style.top = dets.clientY + "px"
    vdo.style.left = dets.clientX + "px"
    vdo.style.top = dets.clientY + "px"
})


talk.addEventListener("mouseenter",()=>{
    talk.textContent="CONTACT US"
})

talk.addEventListener("mouseleave",()=>{
    talk.textContent="LET'S TALK!"
})

l1.addEventListener("mouseenter",()=>{
    l1.textContent="STUDIO NAMMA"
})

l1.addEventListener("mouseleave",()=>{
    l1.textContent="STUDIO NAMMA"
})

page2.addEventListener("mousemove",(dets)=>{
    dot.style.left = dets.clientX + "px"
    dot.style.top = dets.clientY + "px"
})

page3.addEventListener("mousemove",(dets)=>{
    dot.style.left = dets.clientX + "px"
    dot.style.top = dets.clientY + "px"

})

page4.addEventListener("mousemove",(dets)=>{
    dot.style.left = dets.clientX + "px"
    dot.style.top = dets.clientY + "px"
})

page4_bott.addEventListener("mouseenter",()=>{
    dot.style.width="160px"
    dot.style.height="45px"
    dot.style.borderRadius="9px"
    dot.textContent="PLAYGROUND"
    dot.style.color="white"
    dot.style.display="flex"
    dot.style.alignItems="center"
    dot.style.justifyContent="center"
    dot.style.fontFamily="'Space Mono', monospace"
    dot.style.fontSize="25px"
    dot.style.fontWeight="900"
    dot.style.transform="rotate(-10deg)"
})


page4_bott.addEventListener("mouseleave",()=>{
    dot.style.width="20px"
    dot.style.height="20px"
    dot.style.borderRadius="50%"
    dot.textContent=""
})

page5.addEventListener("mousemove",(dets)=>{
    dot.style.left = dets.clientX + "px"
    dot.style.top = dets.clientY + "px"
})

img1.addEventListener("mouseenter",()=>{
    dot.style.width="100px"
    dot.style.height="45px"
    dot.style.borderRadius="9px"
    dot.textContent="MATERA"
    dot.style.color="white"
    dot.style.display="flex"
    dot.style.alignItems="center"
    dot.style.justifyContent="center"
    dot.style.fontFamily="'Space Mono', monospace"
    dot.style.fontSize="25px"
    dot.style.fontWeight="900"
    dot.style.transform="rotate(-10deg)"
})

img1.addEventListener("mouseleave",()=>{
    dot.style.width="20px"
    dot.style.height="20px"
    dot.style.borderRadius="50%"
    dot.textContent=""
})

img2.addEventListener("mouseenter",()=>{
    dot.style.width="100px"
    dot.style.height="45px"
    dot.style.borderRadius="9px"
    dot.textContent="CHANCE"
    dot.style.color="white"
    dot.style.display="flex"
    dot.style.alignItems="center"
    dot.style.justifyContent="center"
    dot.style.fontFamily="'Space Mono', monospace"
    dot.style.fontSize="25px"
    dot.style.fontWeight="900"
    dot.style.transform="rotate(-10deg)"
})

img2.addEventListener("mouseleave",()=>{
    dot.style.width="20px"
    dot.style.height="20px"
    dot.style.borderRadius="50%"
    dot.textContent=""
})

img3.addEventListener("mouseenter",()=>{
    dot.style.width="100px"
    dot.style.height="45px"
    dot.style.borderRadius="9px"
    dot.textContent="SILVR"
    dot.style.color="white"
    dot.style.display="flex"
    dot.style.alignItems="center"
    dot.style.justifyContent="center"
    dot.style.fontFamily="'Space Mono', monospace"
    dot.style.fontSize="25px"
    dot.style.fontWeight="900"
    dot.style.transform="rotate(-10deg)"
})

img3.addEventListener("mouseleave",()=>{
    dot.style.width="20px"
    dot.style.height="20px"
    dot.style.borderRadius="50%"
    dot.textContent=""
})

img4.addEventListener("mouseenter",()=>{
    dot.style.width="150px"
    dot.style.height="45px"
    dot.style.borderRadius="9px"
    dot.textContent="INTRAMUROS"
    dot.style.color="white"
    dot.style.display="flex"
    dot.style.alignItems="center"
    dot.style.justifyContent="center"
    dot.style.fontFamily="'Space Mono', monospace"
    dot.style.fontSize="25px"
    dot.style.fontWeight="900"
    dot.style.transform="rotate(-10deg)"
})

img4.addEventListener("mouseleave",()=>{
    dot.style.width="20px"
    dot.style.height="20px"
    dot.style.borderRadius="50%"
    dot.textContent=""
})

page6.addEventListener("mousemove",()=>{
    dot.style.display="none"
})

page7.addEventListener("mousemove",()=>{
    dot.style.display="none"
})

page8.addEventListener("mousemove",()=>{
    dot.style.display="none"
})

page9.addEventListener("mousemove",()=>{
    dot.style.display="none"
})

con1.addEventListener("mouseenter",()=>{
    con2.style.color="rgba(0, 0, 0, 0.21)"
    con3.style.color="rgba(0, 0, 0, 0.21)"
    con4.style.color="rgba(0, 0, 0, 0.21)"
    con5.style.color="rgba(0, 0, 0, 0.21)"
    con6.style.color="rgba(0, 0, 0, 0.21)"
    con7.style.color="rgba(0, 0, 0, 0.21)"
    t1.style.opacity="1"
    v1.style.opacity="1"
})


con1.addEventListener("mouseleave",()=>{
    con2.style.color="black"
    con3.style.color="black"
    con4.style.color="black"
    con5.style.color="black"
    con6.style.color="black"
    con7.style.color="black"
    t1.style.opacity="0"
    v1.style.opacity="0"
})


con2.addEventListener("mouseenter",()=>{
    con1.style.color="rgba(0, 0, 0, 0.21)"
    con3.style.color="rgba(0, 0, 0, 0.21)"
    con4.style.color="rgba(0, 0, 0, 0.21)"
    con5.style.color="rgba(0, 0, 0, 0.21)"
    con6.style.color="rgba(0, 0, 0, 0.21)"
    con7.style.color="rgba(0, 0, 0, 0.21)"
    t2.style.opacity="1"
    v2.style.opacity="1"
})


con2.addEventListener("mouseleave",()=>{
    con1.style.color="black"
    con3.style.color="black"
    con4.style.color="black"
    con5.style.color="black"
    con6.style.color="black"
    con7.style.color="black"
    t2.style.opacity="0"
    v2.style.opacity="0"
})

con3.addEventListener("mouseenter",()=>{
    con1.style.color="rgba(0, 0, 0, 0.21)"
    con2.style.color="rgba(0, 0, 0, 0.21)"
    con4.style.color="rgba(0, 0, 0, 0.21)"
    con5.style.color="rgba(0, 0, 0, 0.21)"
    con6.style.color="rgba(0, 0, 0, 0.21)"
    con7.style.color="rgba(0, 0, 0, 0.21)"
    t3.style.opacity="1"
    v3.style.opacity="1"
})


con3.addEventListener("mouseleave",()=>{
    con1.style.color="black"
    con2.style.color="black"
    con4.style.color="black"
    con5.style.color="black"
    con6.style.color="black"
    con7.style.color="black"
    t3.style.opacity="0"
    v3.style.opacity="0"
})

con4.addEventListener("mouseenter",()=>{
    con1.style.color="rgba(0, 0, 0, 0.21)"
    con2.style.color="rgba(0, 0, 0, 0.21)"
    con3.style.color="rgba(0, 0, 0, 0.21)"
    con5.style.color="rgba(0, 0, 0, 0.21)"
    con6.style.color="rgba(0, 0, 0, 0.21)"
    con7.style.color="rgba(0, 0, 0, 0.21)"
    t4.style.opacity="1"
    v4.style.opacity="1"
})


con4.addEventListener("mouseleave",()=>{
    con1.style.color="black"
    con2.style.color="black"
    con3.style.color="black"
    con5.style.color="black"
    con6.style.color="black"
    con7.style.color="black"
    t4.style.opacity="0"
    v4.style.opacity="0"
})

con5.addEventListener("mouseenter",()=>{
    con1.style.color="rgba(0, 0, 0, 0.21)"
    con2.style.color="rgba(0, 0, 0, 0.21)"
    con3.style.color="rgba(0, 0, 0, 0.21)"
    con4.style.color="rgba(0, 0, 0, 0.21)"
    con6.style.color="rgba(0, 0, 0, 0.21)"
    con7.style.color="rgba(0, 0, 0, 0.21)"
    t5.style.opacity="1"
    v5.style.opacity="1"
})


con5.addEventListener("mouseleave",()=>{
    con1.style.color="black"
    con2.style.color="black"
    con3.style.color="black"
    con4.style.color="black"
    con6.style.color="black"
    con7.style.color="black"
    t5.style.opacity="0"
    v5.style.opacity="0"
})

con6.addEventListener("mouseenter",()=>{
    con1.style.color="rgba(0, 0, 0, 0.21)"
    con2.style.color="rgba(0, 0, 0, 0.21)"
    con3.style.color="rgba(0, 0, 0, 0.21)"
    con4.style.color="rgba(0, 0, 0, 0.21)"
    con5.style.color="rgba(0, 0, 0, 0.21)"
    con7.style.color="rgba(0, 0, 0, 0.21)"
    t6.style.opacity="1"
    v6.style.opacity="1"
})


con6.addEventListener("mouseleave",()=>{
    con1.style.color="black"
    con2.style.color="black"
    con3.style.color="black"
    con4.style.color="black"
    con5.style.color="black"
    con7.style.color="black"
    t6.style.opacity="0"
    v6.style.opacity="0"
})

con7.addEventListener("mouseenter",()=>{
    con1.style.color="rgba(0, 0, 0, 0.21)"
    con2.style.color="rgba(0, 0, 0, 0.21)"
    con3.style.color="rgba(0, 0, 0, 0.21)"
    con4.style.color="rgba(0, 0, 0, 0.21)"
    con5.style.color="rgba(0, 0, 0, 0.21)"
    con6.style.color="rgba(0, 0, 0, 0.21)"
    t7.style.opacity="1"
    v7.style.opacity="1"
})


con7.addEventListener("mouseleave",()=>{
    con1.style.color="black"
    con2.style.color="black"
    con3.style.color="black"
    con4.style.color="black"
    con5.style.color="black"
    con6.style.color="black"
    t7.style.opacity="0"
    v7.style.opacity="0"
})


let idx = 0;
let interval;
detail.addEventListener("mouseenter",()=>{
    interval=setInterval(()=>{
        detailImg.forEach(imgs=>{
            imgs.style.opacity="0";
        });

        detailImg[idx].style.opacity="1";
        idx++;
        if(idx==detailImg.length){
            idx=0;
        }
    },400);
})

detail.addEventListener("mouseleave",()=>{
    clearInterval(interval);

    detailImg.forEach(img=>{
        img.style.opacity="0"
    });
});

let idx1 = 0
let interval2;

playground.addEventListener("mouseenter",()=>{
    interval2=setInterval(()=>{
        playgroundImg.forEach(imgs=>{
            imgs.style.opacity="0";
        });

        playgroundImg[idx1].style.opacity="1";
        idx1++;
        if(idx1==playgroundImg.length){
            idx1=0;
        }
    },400);
})

playground.addEventListener("mouseleave",()=>{
    clearInterval(interval2);

    playgroundImg.forEach(img=>{
        img.style.opacity="0"
    });
});

see.addEventListener("mouseenter",()=>{
    dot.style.width="100px"
    dot.style.height="50px"
    dot.textContent="Services"
    dot.style.color="white"
    dot.style.fontFamily="Space Mono', monospace"
})