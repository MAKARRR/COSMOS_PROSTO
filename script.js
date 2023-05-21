const renderArea = document.querySelector('.render_area');

const buttonMain = document.querySelector('#main');

const buttonHistory = document.querySelector('#history');

const buttonAdmin = document.querySelector('#admin');

const buttonArea = document.querySelector('#area');

const buttons = document.querySelectorAll('.A3')

buttonMain.classList.add('choosen')




buttonMain.addEventListener('click', () => {

    buttons.forEach(el =>
        {
            if(el.classList.contains('choosen')){
                el.classList.remove('choosen')
            }
        }
    )

    buttonMain.classList.add('choosen')

    renderArea.innerHTML = 
    `