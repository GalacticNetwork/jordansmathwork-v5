// rc.js

document.addEventListener('DOMContentLoaded', (event) => {
    const contextMenu = document.createElement('div');
    contextMenu.id = 'customContextMenu';
    contextMenu.style.position = 'absolute';
    contextMenu.style.display = 'none';
    contextMenu.style.backgroundColor = '#ffffff';
    contextMenu.style.border = '1px solid #ccc';
    contextMenu.style.zIndex = '1000';

    const aboutBlank = document.createElement('div');
    aboutBlank.textContent = 'about:blank';
    aboutBlank.style.padding = '8px';
    aboutBlank.style.cursor = 'pointer';
    aboutBlank.style.color = 'black';
    aboutBlank.addEventListener('click', () => {
        const script = document.createElement('script');
        script.src = '/assets/scripts/ab.js';
        document.body.appendChild(script);
        contextMenu.style.display = 'none';
    });

    const panic = document.createElement('div');
    panic.textContent = 'panic';
    panic.style.padding = '8px';
    panic.style.cursor = 'pointer';
    panic.style.color = 'black';
    panic.addEventListener('click', () => {
        const script = document.createElement('script');
        script.src = '/assets/scripts/panic.js';
        document.body.appendChild(script);
        contextMenu.style.display = 'none';
    });

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
});
