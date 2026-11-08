/* ==========================================================
   THEME.JS  |  Dark / Light toggle
   The saved theme is applied by the tiny inline script in
   <head> (so the page never flashes the wrong colours).
   This file only wires up the button.
========================================================== */

(function () {
    var root = document.documentElement;
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;

    var icon = btn.querySelector('i');

    function sync() {
        var isLight = root.getAttribute('data-theme') === 'light';
        // Dark mode shows a sun (click to go light), light mode shows a moon
        if (icon) icon.className = isLight ? 'fas fa-moon' : 'fas fa-sun';
        btn.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
        btn.setAttribute('title', isLight ? 'Dark mode' : 'Light mode');
    }

    btn.addEventListener('click', function () {
        var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) { }
        sync();
    });

    sync();
})();
