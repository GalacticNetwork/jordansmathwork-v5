document.addEventListener('DOMContentLoaded', (event) => {
    const contextMenu = document.createElement('div');
    contextMenu.id = 'customContextMenu';
    contextMenu.style.position = 'absolute';
    contextMenu.style.display = 'none';
    contextMenu.style.backgroundColor = 'var(--navbar)';
    contextMenu.style.border = '1px solid #ccc';
    contextMenu.style.zIndex = '1000';

    const aboutBlank = document.createElement('div');
    aboutBlank.innerHTML = '<i class="fa-solid fa-eye-slash"></i> about:blank';
    aboutBlank.style.padding = '8px';
    aboutBlank.style.cursor = 'pointer';
    aboutBlank.style.color = 'var(--txtcolor)';
    aboutBlank.onclick = function() {
        aboutBlankFunction();
        contextMenu.style.display = 'none';
    };

    const panic = document.createElement('div');
    panic.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> panic';
    panic.style.padding = '8px';
    panic.style.cursor = 'pointer';
    panic.style.color = 'var(--txtcolor)';
    panic.onclick = function() {
        panicFunction();
        contextMenu.style.display = 'none';
    };

    const view = document.createElement('div');
    view.innerHTML = '<i class="fa-solid fa-users-gear"></i> View All Settings';
    view.style.padding = '8px';
    view.style.cursor = 'pointer';
    view.style.color = 'var(--txtcolor)';
    view.onclick = function() {
        viewFunction();
        contextMenu.style.display = 'none';
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

    function aboutBlankFunction() {
          let inFrame; try { inFrame = window !== top; } catch (e) { inFrame = true; }
          if (!inFrame && !navigator.userAgent.includes("Firefox")) { const popup = open("about:blank", "_blank"); if (!popup || popup.closed) { alert("Allow popups and redirects."); } else { const doc = popup.document; const iframe = doc.createElement("iframe"); const style = iframe.style; const link = doc.createElement("link"); const name = localStorage.getItem("name") || "Home"; const icon = localStorage.getItem("icon") || "https://ssl.gstatic.com/classroom/favicon.png"; doc.title = name; link.rel = "icon"; link.href = icon; iframe.src = location.href; style.position = "fixed"; style.top = style.bottom = style.left = style.right = 0; style.border = style.outline = "none"; style.width = style.height = "100%"; doc.head.appendChild(link); doc.body.appendChild(iframe); location.replace("https://classroom.google.com"); } }
    }

    function panicFunction() {
        location.replace('https://classroom.google.com');
    }
    function viewFunction() {
       location.href='/geography/' 
    }    
});
