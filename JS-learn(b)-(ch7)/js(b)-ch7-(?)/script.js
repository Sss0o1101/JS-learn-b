/*
ローディングから画面遷移
================================================ */
const loadingAreaGrey = document.querySelector('#loading');

window.addEventListener('load', () => {
    //ローディングが終わった時の処理
    loadingAreaGrey.animate(
        {
            opacity: [1, 0],
            visibility: 'hidden',
        },
        {
            duration: 2000,
            delay: 12000,
            easing: 'ease',
            fill: 'forwards',
        }
    );
});
