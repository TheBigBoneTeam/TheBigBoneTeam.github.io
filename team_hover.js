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
                            <h3> DIEGO</h3>
                            <h4> PROGRAMADOR JEFE</h4>
                            <p> Me gustan los libros con dibujos y los juegos sin gameplay.</p>
                            <i> Juego favorito: The Great Ace Attorney 2 Resolve</i>
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
                            <h3> EDU</h3>
                            <h4> ARTISTA TÉCNICO, CONCEPT ARTIST, MODELADOR Y ANIMADOR 3D</h4>
                            <p> Amante del western, los insectos, los robots y las criaturas fantásticas</p>
                            <i> Juego favorito: Ultrakill</i>
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
                            <h3> DEIVI </h3>
                            <h4> GAME DESIGNER Y GUIONISTA</h4>
                            <p> Me encanta el terror, los dinosaurios y los dulces</p>
                            <i> Juego favorito: Kirby Triple Deluxe</i>
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
                            <h3> CANDELA</h3>
                            <h4> CONCEPT ARTIST, ARTISTA 3D Y PROGRAMADORA WEB</h4>
                            <p> Me gustan los píxeles, Talking Heads y comer gazpacho </p>
                            <i> Juego favorito: Disco Elysium</i>
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
                            <h3> ANDREA</h3>
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
                            <h4> MÚSICO, SOUND DESIGNER Y PROGRAMADOR</h4>
                            <p> Me gusta el drag, la Semana Santa y no comer animales. </p>
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