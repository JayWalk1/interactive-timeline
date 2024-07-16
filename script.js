// script.js
document.addEventListener('DOMContentLoaded', function() {
    const events = document.querySelectorAll('.event');
    const tooltip = document.getElementById('tooltip');
    const tooltipTitle = document.getElementById('tooltip-title');
    const tooltipContent = document.getElementById('tooltip-content');

    events.forEach(event => {
        event.addEventListener('mouseover', function(e) {
            const title = event.getAttribute('data-title');
            const content = event.getAttribute('data-content');

            tooltipTitle.textContent = title;
            tooltipContent.textContent = content;

            tooltip.style.display = 'block';
            tooltip.style.left = e.pageX + 15 + 'px';
            tooltip.style.top = e.pageY + 15 + 'px';
        });

        event.addEventListener('mouseout', function() {
            tooltip.style.display = 'none';
        });
    });

    document.addEventListener('mousemove', function(e) {
        if (tooltip.style.display === 'block') {
            tooltip.style.left = e.pageX + 15 + 'px';
            tooltip.style.top = e.pageY + 15 + 'px';
        }
    });
});
