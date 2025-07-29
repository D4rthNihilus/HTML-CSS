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
const tp09 = document.querySelector("#topic09");
const a09 = document.querySelector("#article09");
const tp10 = document.querySelector("#topic10");
const a10 = document.querySelector("#article10");
const tpNotes = document.querySelector("#topicNotes");
const notes = document.querySelector("#articleNotes");
const tpReferences = document.querySelector("#topicReferences");
const references = document.querySelector("#articleReferences");
const tpExternal = document.querySelector("#topicExternal");
const externall = document.querySelector("#articleExternal");

tp01.addEventListener('click', ()=>{
    if(a01.style.display=='none'){
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
    if(a02.style.display=='none'){
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
    if(a03.style.display=='none'){
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
    if(a04.style.display=='none'){
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
    if(a05.style.display=='none'){
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
    if(a06.style.display=='none'){
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
    if(a07.style.display=='none'){
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
    if(a08.style.display=='none'){
        document.querySelector('#up08').style.display='block';
        document.querySelector('#down08').style.display='none';
        a08.style.display='block';
    } else {
        document.querySelector('#up08').style.display='none';
        document.querySelector('#down08').style.display='block';
        a08.style.display='none';
    }
});

tp09.addEventListener('click', ()=>{
    if(a09.style.display=='none'){
        document.querySelector('#up09').style.display='block';
        document.querySelector('#down09').style.display='none';
        a09.style.display='block';
    } else {
        document.querySelector('#up09').style.display='none';
        document.querySelector('#down09').style.display='block';
        a09.style.display='none';
    }
});

tp10.addEventListener('click', ()=>{
    if(a10.style.display=='none'){
        document.querySelector('#up10').style.display='block';
        document.querySelector('#down10').style.display='none';
        a10.style.display='block';
    } else {
        document.querySelector('#up10').style.display='none';
        document.querySelector('#down10').style.display='block';
        a10.style.display='none';
    }
});

tpNotes.addEventListener('click', ()=>{
    if(notes.style.display=='none'){
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
    if(references.style.display=='none'){
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
    if(externall.style.display=='none'){
        document.querySelector('#upExternal').style.display='block';
        document.querySelector('#downExternal').style.display='none';
        externall.style.display='block';
    } else {
        document.querySelector('#upExternal').style.display='none';
        document.querySelector('#downExternal').style.display='block';
        externall.style.display='none';
    }
})