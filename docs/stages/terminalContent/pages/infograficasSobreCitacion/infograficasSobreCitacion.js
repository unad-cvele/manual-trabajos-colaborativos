class terminalContentClass_infograficasSobreCitacion extends generalPage{
    constructor(pageName){
        super(pageName);
    }
    addCssClass(){
      return [
          'stage_general'
      ]
  }
  content(){
      return `
      <h2>Infografías sobre citación</h2>
      <div class="text-general">
        <div class="main-container-acordeon">  
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_terminalContent.acordeonList.show(this);">Comunicaciones especiales</button>
                <div class="text-acordeon">
                    <div class="cards">
                         <a href="https://drive.google.com/file/d/19DB0AQ8zb0h3pzNwK1F0b1Xzfk5f4WA5/view?usp=sharing" target="_blank" onclick="window.open('https://drive.google.com/file/d/19DB0AQ8zb0h3pzNwK1F0b1Xzfk5f4WA5/view?usp=sharing','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;">
                            <figure class="card">
                                
                                    <img src="./images/aspectos-tecnicos/propiedad-intelectual-y-referenciacion/portadaComunicacionesEspeciales.jpg" alt="Citación Textual">
                                
                                <figcaption>
                                    Ver infografía de citación de comunicaciones personales
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                </div>
                
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_terminalContent.acordeonList.show(this);">Paráfrasis</button>
                <div class="text-acordeon">
                    <div class="cards">
                         <a href="https://drive.google.com/file/d/1nd_H20gJ3-CxZ7hLiIbTGMWhThQ204-L/view?usp=sharing" target="_blank" onclick="window.open('https://drive.google.com/file/d/1nd_H20gJ3-CxZ7hLiIbTGMWhThQ204-L/view?usp=sharing','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;">
                            <figure class="card">
                                
                                <img src="./images/aspectos-tecnicos/propiedad-intelectual-y-referenciacion/portadaParafrasis.jpg" alt="Citación Paráfrasis">
                                
                                <figcaption>
                                    Ver infografía de citación por paráfrasis
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                </div>
            </div>
            <div class="container-acordeon">
                <button class="btn-acordeon" onclick="stages_terminalContent.acordeonList.show(this);">Textual</button>
                <div class="text-acordeon">
                    <div class="cards">
                         <a href="https://drive.google.com/file/d/1-yJZqhTnNap1OS5VFw8BSMU1tDAlxOq3/view?usp=sharing" target="_blank" onclick="window.open('https://drive.google.com/file/d/1-yJZqhTnNap1OS5VFw8BSMU1tDAlxOq3/view?usp=sharing','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;">
                            <figure class="card">
                                
                                    <img src="./images/aspectos-tecnicos/propiedad-intelectual-y-referenciacion/portadaCitacionTextual.jpg" alt="Citación Textual">
                                
                                <figcaption>
                                    Ver infografía de citación textual
                                </figcaption>
                            </figure>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     </div>
      <div class="text-center">
        <button class="btn-general" onclick="stages_terminalContent.menu.back()">Atrás</button>
        <button class="btn-general" onclick="stages_terminalContent.menu.next()">Siguiente</button>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general',
        'ecards.css|general'
    ]
}
}
stagePage.pageContainerSet('infograficasSobreCitacion',terminalContentClass_infograficasSobreCitacion);