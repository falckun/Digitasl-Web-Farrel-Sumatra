function hideCover() {
    document.getElementById('cover').classList.add('hidden');
}

function putarlagu(){
    const lagu = document.querySelector('#lagu');
    const tombol = document.querySelector('.kontrol');

    if(lagu.paused){
        lagu.play();
        tombol.classList.add('rotating');
    }else{
        lagu.pause();
        tombol.classList.remove('rotating');
    }
}