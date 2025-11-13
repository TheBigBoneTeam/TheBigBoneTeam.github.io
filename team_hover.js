const areas = document.querySelectorAll('area');
const info = document.getElementById('info');

areas.forEach(area=> {
    area.addEventListener('mouseover', () => {
        const zona = area.dataset.zona; //leer data-zona


        switch (zona){
            case 'zonaEdu':
                info.innerHTML = `
                    <div class="miembro">  
                        <div class="miembro_info">
                            <h3> EL EDU</h3>
                            <h4> ARTISTA 3D y ARTISTA TÉCNICO</h4>
                            <p> Pues dibuja y modela muy bien</p>
                        </div>
                        <div class="miembro_img">
                                <img src="images/members/Edu.gif" alt="Foto de Edu" width="360%"/>
                            </div>
                    </div>
                `;



                break;
            default: 
                info.textContent = " NADA ";
        }
    });

    //Cuando el raton no está en la zona:
    area.addEventListener('mouseout', () => {
        info.textContent = ' ';
    });
});