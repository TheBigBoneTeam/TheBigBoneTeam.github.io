const areas = document.querySelectorAll('area');
const info = document.getElementById('info');

areas.forEach(area=> {
    area.addEventListener('mouseover', () => {
        const zona = area.dataset.zona; //leer data-zona


        switch (zona){

            case 'zonaDiego':
                info.innerHTML = `
                    <div class="miembro">  
                        <div class="miembro_info">
                            <h3> EL DIEGO</h3>
                            <h4> PROGRAMADOR TOCHO</h4>
                            <p> Está loco.</p>
                        </div>
                        <div class="miembro_img">
                                <img src="portraits/Diego.gif" alt="Foto de Diego" width="360%"/>
                            </div>
                    </div>
                `;
                break;

            case 'zonaEdu':
                info.innerHTML = `
                    <div class="miembro">  
                        <div class="miembro_info">
                            <h3> EL EDU</h3>
                            <h4> ARTISTA 3D y ARTISTA TÉCNICO</h4>
                            <p> Te hace unas animaciones de puta madre en medio segundo</p>
                        </div>
                        <div class="miembro_img">
                                <img src="portraits/Edu.gif" alt="Foto de Edu" width="360%"/>
                            </div>
                    </div>
                `;
                break;

            case 'zonaDavid':
                info.innerHTML = `
                    <div class="miembro">  
                        <div class="miembro_info">
                            <h3> EL DAVID</h3>
                            <h4> LEVEL DESIGNER</h4>
                            <p> Colocador de props profesional</p>
                        </div>
                        <div class="miembro_img">
                                <img src="portraits/David.gif" alt="Foto de David" width="360%"/>
                            </div>
                    </div>
                `;
                break;

            case 'zonaCandela':
                info.innerHTML = `
                    <div class="miembro">  
                        <div class="miembro_info">
                            <h3> LA CANDELA</h3>
                            <h4> ARTISTA 3D y WEBADORA </h4>
                            <p> Dibuja y modela y tal (</p>
                        </div>
                        <div class="miembro_img">
                                <img src="portraits/Candela.gif" alt="Foto de Edu" width="360%"/>
                            </div>
                    </div>
                `;
                break;

            case 'zonaAndrea':
                info.innerHTML = `
                    <div class="miembro">  
                        <div class="miembro_info">
                            <h3> LA ANDREA</h3>
                            <h4> PROGRAMADORA </h4>
                            <p> Ten cuidado que tiene un cuchillo. </p>
                        </div>
                        <div class="miembro_img">
                                <img src="portraits/Andrea.gif" alt="Foto de Edu" width="360%"/>
                            </div>
                    </div>
                `;
                break;

            case 'zonaAntonio':
                info.innerHTML = `
                    <div class="miembro">  
                        <div class="miembro_info">
                            <h3> EL ANTONIO</h3>
                            <h4> MÚSICO Y PROGRAMADOR</h4>
                            <p> ole que arte. </p>
                        </div>
                        <div class="miembro_img">
                                <img src="portraits/Antonio.gif" alt="Foto de Edu" width="360%"/>
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