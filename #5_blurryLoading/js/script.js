const loading = document.querySelector('.loading');
const background = document.querySelector('.bg');



window.onload = () => {
    const loadingProcess = bluring();
    const loadingInterval = setInterval(loadingProcess.increase, 30);

    
function bluring() {
    let count = 0;

    return {
        increase: () => {
            count++;
            if (count > 99) {
                clearInterval(loadingInterval);
            }

            loading.innerHTML = `${count}%`;
            loading.style.opacity = `${scale(count,0,100,1,0)}`;
            background.style= `filter:blur(${scale(count,0,100,30,0)}px)`;
        }
    }
}

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
}

