document.addEventListener('mousemove', () => {
    document.querySelectorAll('.nav-dropdown').forEach(
        e => e.querySelectorAll('.nav-drop')[0].style.display=e.matches(':hover')?'block':'none'
    );
});