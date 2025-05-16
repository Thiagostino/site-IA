document.addEventListener('DOMContentLoaded', function() {
    console.log('Página carregada com sucesso!');
    
    // Fallback para favicon (opcional)
    if (!document.querySelector('link[rel="icon"]')) {
        const favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.href = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMDAgMTAwJz48Y2lyY2xlIGN4PSc1MCcgY3k9JzUwJyByPSc0MCcgZmlsbD0nIzZlNDhhYScvPjxjaXJjbGUgY3g9JzM1JyBjeT0nNDAnIHI9JzgnIGZpbGw9JyNmZmYnLz48Y2lyY2xlIGN4PSc2NScgY3k9JzQwJyByPSc4JyBmaWxsPScjZmZmJy8+PHBhdGggZD0nTTMwIDY1IHEyMCAxNSA0MCAwJyBzdHJva2U9JyNmZmYnIHN0cm9rZS13aWR0aD0nNicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJy8+PC9zdmc+';
        document.head.appendChild(favicon);
    }
});
