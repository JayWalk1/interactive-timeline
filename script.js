// script.js
document.addEventListener('DOMContentLoaded', function() {
    const milestones = document.querySelectorAll('.milestone');
    const tooltip = document.getElementById('tooltip');
    const tooltipTitle = document.getElementById('tooltip-title');
    const tooltipContent = document.getElementById('tooltip-content');

    milestones.forEach(milestone => {
        milestone.addEventListener('mouseover', function(e) {
            const title = milestone.getAttribute('data-title');
            const content = milestone.getAttribute('data-content');

            tooltipTitle.textContent = title;
            tooltipContent.textContent = content;

            tooltip.style.display = 'block';
            tooltip.style.left = e.pageX + 15 + 'px';
            tooltip.style.top = e.pageY + 15 + 'px';
        });

        milestone.addEventListener('mouseout', function() {
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
