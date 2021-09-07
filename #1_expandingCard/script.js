const listPanel = document.querySelectorAll('.panel');


document.body.addEventListener('click', function(e) {
    let panel = e.target.closest('.panel');
    if (panel) {
        if (!isActive(panel)) {
            resetActive();
            panel.classList.add('active');
            return;
        }
        
        resetActive();
    }

    resetActive();
    });

function resetActive() {
    listPanel.forEach(panel => {
        panel.classList.remove('active');
    })
}

function isActive(panel) {
    return (panel.classList.contains('active'));
}