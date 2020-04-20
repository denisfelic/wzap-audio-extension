console.log('Hello World!');
//loadComponents();


const interval = setInterval(() => {
    const headerComponent = document.querySelector("header ._2umId");
    if (headerComponent) {    //Carregou
        clearInterval(interval);
        headerComponent.document = loadComponents(headerComponent);
    }

}, 1000);



function speedChange(change) {
    const audios = document.querySelectorAll("audio");
    let volStatus = 0;

    if (change === 2) {     //Vol up
        for (const audio of audios) {
            audio.playbackRate += 0.25;
        }
        return;
    }

    else if (change === 1) {     //Vol Down
        for (const audio of audios) {
            audio.playbackRate -= 0.25;
        }
        return;

    }

    else if (change === 0) {     //Vol Reset
        for (const audio of audios) {
            audio.playbackRate = 1;
        }
        return;

    }



}


function createElement(htmlTag, classOfTag, textContent) {
    let tag = document.createElement("div");
    tag.innerHTML = textContent;
    if (classOfTag != null) {
        tag.className = classOfTag;
    }
    return tag;

}


function loadComponents(headerComponent) {
    let headerC = headerComponent;
    headerC.className = headerC.className + " wspc";

    let buttons = createElement("div", "button-group-wspc", "");
    let speedDown = createElement("<p>", "btn-wspc", "<");
    let resetSpeed = createElement("div", "btn-wspc", "O");
    let speedUp = createElement("div", "btn-wspc", ">");

   
    
    buttons.appendChild(speedDown);
    buttons.appendChild(resetSpeed);
    buttons.appendChild(speedUp);

//
    headerC.appendChild(buttons);

    makeFunctional(resetSpeed, 0);
    makeFunctional(speedDown, 1);
    makeFunctional(speedUp, 2);
}

function makeFunctional(tag, change) {
    const btn = tag;

    btn.addEventListener("click", () => {
        speedChange(change);
        console.log(change);
    });
}

