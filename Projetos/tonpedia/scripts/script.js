const moon = document.querySelector("#moon");
const font = document.querySelector('#font');
const wand = document.querySelector("#wand");
const menuButton = document.getElementById("menuIcon");
const menu = document.getElementById('menu');
const nav = document.querySelector('nav');
const tp01 = document.querySelector("#topic01");
const a01 = document.querySelector("#article01");
const tp02 = document.querySelector("#topic02");
const a02 = document.querySelector("#article02");
const tp03 = document.querySelector("#topic03");
const a03 = document.querySelector("#article03");
const tp04 = document.querySelector("#topic04");
const a04 = document.querySelector("#article04");
const tp05 = document.querySelector("#topic05");
const a05 = document.querySelector("#article05");
const tp06 = document.querySelector("#topic06");
const a06 = document.querySelector("#article06");
const tp07 = document.querySelector("#topic07");
const a07 = document.querySelector("#article07");
const tp08 = document.querySelector("#topic08");
const a08 = document.querySelector("#article08");

const effect = document.querySelector('div#effect img');

wand.addEventListener('click', ()=>{

    if (effect.style.display!='block') {
        effect.style.display='block';
    } else {
        effect.style.display='none';
    }
});

const tpNotes = document.querySelector("#topicNotes");
const notes = document.querySelector("#articleNotes");
const tpReferences = document.querySelector("#topicReferences");
const references = document.querySelector("#articleReferences");
const tpExternal = document.querySelector("#topicExternal");
const externall = document.querySelector("#articleExternal");

const menuIcon = document.querySelector('#menuIcon svg');
const lang = document.querySelector('#languages');

menuIcon.addEventListener('mouseenter', (evt)=>{
    evt.target.style.fill='orange';
});

menuIcon.addEventListener('mouseleave', (evt)=>{
    evt.target.style.fill='white';
});

menuButton.addEventListener('click', ()=>{
    menu.style.display='block';
    menu.style.animation='menuTransition 0.3s linear';
});

nav.addEventListener('click', (evt)=>{
    evt.stopPropagation();
})

menu.addEventListener('click', ()=>{
    menu.style.display='none';
});

moon.addEventListener('click', ()=>{
    if(document.body.style.backgroundColor=='black'){
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
        moon.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>';
        let links = [...document.querySelectorAll('a')];
        links.map((el)=>{
            el.style.color='#014B32';
        });

        let icons = [...document.querySelectorAll('.icon > svg')];
        icons.map((el)=>{
            el.style.fill='#434343';
        });

        let articlesH2 = [...document.querySelectorAll('.articles h2')];
        articlesH2.map((el)=>{
            el.style.color='black';
        });

        let articleArrow = [...document.querySelectorAll('svg')];
        articleArrow.map((el)=>{
            el.style.fill='#434343';
        });

        document.querySelector('footer h2').style.color='#434343';

        let relatedPages = [...document.querySelectorAll('.rltp')];
        relatedPages.map((el)=>{
            el.style.backgroundColor='white';

            el.addEventListener('mouseenter', (evt)=>{
                evt.target.style.backgroundColor='#99B19D';
            });
            el.addEventListener('mouseleave', (evt)=>{
                evt.target.style.backgroundColor='white';
            });
        });

        document.querySelector('#footerTonpedia').style.color='#434343';

        let separador = [...document.querySelectorAll('.separador')];
        separador.map((el)=>{
            el.style.color='#014B32';
        });

        let menuItem = [...document.querySelectorAll('div.menuItem')];
        menuItem.map((el)=>{
            el.style.backgroundColor='white';
            el.style.color='black';
            el.style.borderLeft='5px solid white';
        });

        document.querySelector('#searchIcon svg').style.fill = 'white';

        let item = [...document.querySelectorAll('div.item')];
        item.map((el)=>{
            el.addEventListener('mouseenter', (evt)=>{
                evt.target.style.borderLeft='5px solid orangered';
                evt.target.style.backgroundColor='#E6E5DF'
            });

            el.addEventListener('mouseleave', (evt)=>{
                evt.target.style.borderLeft='5px solid white';
                evt.target.style.backgroundColor='white';
            });
        });

        let about = [...document.querySelectorAll('div#about a')];
        about.map((el)=>{
            el.style.color='white';
        });

        menuIcon.style.fill='white';

    } else {
        document.body.style.backgroundColor='black';
        document.body.style.color='white';
        moon.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M440-760v-160h80v160h-80Zm266 110-55-55 112-115 56 57-113 113Zm54 210v-80h160v80H760ZM440-40v-160h80v160h-80ZM254-652 140-763l57-56 113 113-56 54Zm508 512L651-255l54-54 114 110-57 59ZM40-440v-80h160v80H40Zm157 300-56-57 112-112 29 27 29 28-114 114Zm283-100q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z"/></svg>';
        let links = [...document.querySelectorAll('a')];
        links.map((el)=>{
            el.style.color='#4ec94e';
        });

        let icons = [...document.querySelectorAll('.icon > svg')];
        icons.map((el)=>{
            el.style.fill='white';
        });

        let articlesH2 = [...document.querySelectorAll('.articles h2')];
        articlesH2.map((el)=>{
            el.style.color='white';
        });

        let articleArrow = [...document.querySelectorAll('svg')];
        articleArrow.map((el)=>{
            el.style.fill='white';
        });

        document.querySelector('footer h2').style.color='white';

        let relatedPages = [...document.querySelectorAll('.rltp')];
        relatedPages.map((el)=>{
            el.style.backgroundColor='black';

            el.addEventListener('mouseenter', (evt)=>{
                evt.target.style.backgroundColor='#29493eff';
            });
            el.addEventListener('mouseleave', (evt)=>{
                evt.target.style.backgroundColor='black';
            });
        });

        document.querySelector('#footerTonpedia').style.color='white';

        let separador = [...document.querySelectorAll('.separador')];
        separador.map((el)=>{
            el.style.color='#4ec94e';
        });

        let menuItem = [...document.querySelectorAll('div.menuItem')];
        menuItem.map((el)=>{
            el.style.backgroundColor='black';
            el.style.color='white';
            el.style.borderLeft='5px solid black';
        })

        let item = [...document.querySelectorAll('div.item')];
        item.map((el)=>{
            el.addEventListener('mouseenter', (evt)=>{
                evt.target.style.borderLeft='5px solid orangered';
                evt.target.style.backgroundColor='#2b2a2aff';
            });

            el.addEventListener('mouseleave', (evt)=>{
                evt.target.style.borderLeft='5px solid black';
                evt.target.style.backgroundColor='black';
            });
        });

        let about = [...document.querySelectorAll('div#about a')];
        about.map((el)=>{
            el.style.color='white';
        });
    }
})

font.addEventListener('click', ()=>{
})

wand.addEventListener('click', ()=>{
})

tp01.addEventListener('click', ()=>{
    if(a01.style.display!='block'){
        document.querySelector('#up01').style.display='block';
        document.querySelector('#down01').style.display='none';
        a01.style.display='block';
    } else {
        document.querySelector('#up01').style.display='none';
        document.querySelector('#down01').style.display='block';
        a01.style.display="none";
    }
});

tp02.addEventListener('click', ()=>{
    if(a02.style.display!='block'){
        document.querySelector('#up02').style.display='block';
        document.querySelector('#down02').style.display='none';
        a02.style.display='block';
    } else {
        document.querySelector('#up02').style.display='none';
        document.querySelector('#down02').style.display='block';
        a02.style.display='none';
    }
});

tp03.addEventListener('click', ()=>{
    if(a03.style.display!='block'){
        document.querySelector('#up03').style.display='block';
        document.querySelector('#down03').style.display='none';
        a03.style.display='block';
    } else {
        document.querySelector('#up03').style.display='none';
        document.querySelector('#down03').style.display='block';
        a03.style.display='none';
    }
});

tp04.addEventListener('click', ()=>{
    if(a04.style.display!='block'){
        document.querySelector('#up04').style.display='block';
        document.querySelector('#down04').style.display='none';
        a04.style.display='block';
    } else {
        document.querySelector('#up04').style.display='none';
        document.querySelector('#down04').style.display='block';
        a04.style.display='none';
    }
});

tp05.addEventListener('click', ()=>{
    if(a05.style.display!='block'){
        document.querySelector('#up05').style.display='block';
        document.querySelector('#down05').style.display='none';
        a05.style.display='block';
    } else {
        document.querySelector('#up05').style.display='none';
        document.querySelector('#down05').style.display='block';
        a05.style.display='none';
    }
});

tp06.addEventListener('click', ()=>{
    if(a06.style.display!='block'){
        document.querySelector('#up06').style.display='block';
        document.querySelector('#down06').style.display='none';
        a06.style.display='block';
    } else {
        document.querySelector('#up06').style.display='none';
        document.querySelector('#down06').style.display='block';
        a06.style.display='none';
    }
});

tp07.addEventListener('click', ()=>{
    if(a07.style.display!='block'){
        document.querySelector('#up07').style.display='block';
        document.querySelector('#down07').style.display='none';
        a07.style.display='block';
    } else {
        document.querySelector('#up07').style.display='none';
        document.querySelector('#down07').style.display='block';
        a07.style.display='none';
    }
});

tp08.addEventListener('click', ()=>{
    if(a08.style.display!='block'){
        document.querySelector('#up08').style.display='block';
        document.querySelector('#down08').style.display='none';
        a08.style.display='block';
    } else {
        document.querySelector('#up08').style.display='none';
        document.querySelector('#down08').style.display='block';
        a08.style.display='none';
    }
});

tpNotes.addEventListener('click', ()=>{
    if(notes.style.display!='block'){
        document.querySelector('#upNotes').style.display='block';
        document.querySelector('#downNotes').style.display='none';
        notes.style.display='block';
    } else {
        document.querySelector('#upNotes').style.display='none';
        document.querySelector('#downNotes').style.display='block';
        notes.style.display='none';
    }
});

tpReferences.addEventListener('click', ()=>{
    if(references.style.display!='block'){
        document.querySelector('#upReferences').style.display='block';
        document.querySelector('#downReferences').style.display='none';
        references.style.display='block';
    } else {
        document.querySelector('#upReferences').style.display='none';
        document.querySelector('#downReferences').style.display='block';
        references.style.display='none';
    }
});

tpExternal.addEventListener('click', ()=>{
    if(externall.style.display!='block'){
        document.querySelector('#upExternal').style.display='block';
        document.querySelector('#downExternal').style.display='none';
        externall.style.display='block';
    } else {
        document.querySelector('#upExternal').style.display='none';
        document.querySelector('#downExternal').style.display='block';
        externall.style.display='none';
    }
})