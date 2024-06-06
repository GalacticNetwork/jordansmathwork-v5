document.addEventListener('DOMContentLoaded', (event) => {
    const contextMenu = document.createElement('div');
    contextMenu.id = 'customContextMenu';
    contextMenu.style.position = 'absolute';
    contextMenu.style.display = 'none';
    contextMenu.style.backgroundColor = 'var(--navbar)';
    contextMenu.style.border = '1px solid #ccc';
    contextMenu.style.zIndex = '1000';

    const aboutBlank = document.createElement('div');
    aboutBlank.innerHTML = '<i class="fa-solid fa-eye-slash"></i> History Hider';
    aboutBlank.style.padding = '8px';
    aboutBlank.style.cursor = 'pointer';
    aboutBlank.style.color = 'var(--txtcolor)';
    aboutBlank.onclick = function() {
        aboutBlankFunction();
        contextMenu.style.display = 'none';
    };

    const panic = document.createElement('div');
    panic.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Panic Button';
    panic.style.padding = '8px';
    panic.style.cursor = 'pointer';
    panic.style.color = 'var(--txtcolor)';
    panic.onclick = function() {
        panicFunction();
        contextMenu.style.display = 'none';
    };

    const viewAllSettings = document.createElement('div');
    viewAllSettings.innerHTML = '<i class="fa-solid fa-users-gear"></i> View All Settings';
    viewAllSettings.style.padding = '8px';
    viewAllSettings.style.cursor = 'pointer';
    viewAllSettings.style.color = 'var(--txtcolor)';
    viewAllSettings.onclick = function() {
        viewAllSettingsFunction();
        contextMenu.style.display = 'none';
    };

    contextMenu.appendChild(aboutBlank);
    contextMenu.appendChild(panic);
    contextMenu.appendChild(viewAllSettings);
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

    function aboutBlankFunction() {
        document.open();
        document.write('');
        document.close();
    }

    function panicFunction() {
        location.replace('https://www.google.com');
    }

    function viewAllSettingsFunction() {
        location.href = '/geography/';
    }
});
