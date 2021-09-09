const progressBar = document.querySelector('#progress');
const nextBtn = document.querySelector('.btn#next');
const prevBtn = document.querySelector('.btn#prev');
const steps = document.querySelectorAll('.step');

let currentIndex = 0;
let widthPerStep = 100 / (steps.length - 1);

updateProgress(currentIndex, widthPerStep);

// nextBtn.addEventListener('click', () => {
//     currentIndex++;
//     updateProgress(currentIndex, widthPerStep);
//     activeStep();
// });
nextBtn.addEventListener('click', handleProgressEvents.bind(nextBtn));

prevBtn.addEventListener('click', handleProgressEvents.bind(prevBtn));

function handleProgressEvents() {
    const typeEvent = this.innerText.toLowerCase();
    switch(typeEvent){
        case 'next':
            currentIndex++;
        break;
        case 'prev':
            currentIndex--;
        break;
    }

    updateProgress(currentIndex, widthPerStep);
    activeStep();
}

function updateProgress(index, widthPerStep) {
    progressBar.style.width = index * widthPerStep + '%';

    (currentIndex > 0) ? prevBtn.disabled = false 
                    : prevBtn.disabled = true;

    (currentIndex >= steps.length - 1) ? nextBtn.disabled = true
                                        : nextBtn.disabled = false;

}

function activeStep() {
    steps.forEach((step,index) => {
        if (index <= currentIndex) {
          return step.classList.add("active");
        } 

        step.classList.remove("active");
    });
}

