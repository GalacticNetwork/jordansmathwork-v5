document.addEventListener('DOMContentLoaded', (event) => {
    const contextMenu = document.createElement('div');
    contextMenu.id = 'customContextMenu';
    contextMenu.style.position = 'absolute';
    contextMenu.style.display = 'none';
    contextMenu.style.backgroundColor = '#ffffff';
    contextMenu.style.border = '1px solid #ccc';
    contextMenu.style.zIndex = '1000';

    let abScriptLoaded = false;
    let panicScriptLoaded = false;

    const aboutBlank = document.createElement('div');
    aboutBlank.textContent = 'About:Blank Cloaker';
    aboutBlank.style.padding = '8px';
    aboutBlank.style.cursor = 'pointer';
    aboutBlank.style.color = 'black';
    aboutBlank.onclick = function() {
        if (!abScriptLoaded) {
            loadScript('/assets/scripts/ab.js', () => {
                if (typeof aboutBlankFunction === 'function') {
                    aboutBlankFunction();
                }
                contextMenu.style.display = 'none';
                abScriptLoaded = true;
            });
        } else {
            if (typeof aboutBlankFunction === 'function') {
                aboutBlankFunction();
            }
            contextMenu.style.display = 'none';
        }
    };

    const panic = document.createElement('div');
    panic.textContent = 'Panic';
    panic.style.padding = '8px';
    panic.style.cursor = 'pointer';
    panic.style.color = 'black';
    panic.onclick = function() {
        if (!panicScriptLoaded) {
            loadScript('/assets/scripts/panic.js', () => {
                if (typeof panicFunction === 'function') {
                    panicFunction();
                }
                contextMenu.style.display = 'none';
                panicScriptLoaded = true;
            });
        } else {
            if (typeof panicFunction === 'function') {
                panicFunction();
            }
            contextMenu.style.display = 'none';
        }
    };

    contextMenu.appendChild(aboutBlank);
    contextMenu.appendChild(panic);
    document.body.appendChild(contextMenu);

    document.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        contextMenu.style.display = 'block';
        contextMenu.style.left = `${event.pageX}px`;
        contextMenu.style.top = `${event.pageY}px`;
    });

    document.addEventListener('click', () => {
        contextMenu.style.display = 'none';
    });

    function loadScript(url, callback) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.onload = callback;
        document.head.appendChild(script);
    }
});
