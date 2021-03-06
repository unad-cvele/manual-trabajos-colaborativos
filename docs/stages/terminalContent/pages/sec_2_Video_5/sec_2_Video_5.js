class terminalContentClass_sec_2_Video_5 extends generalPage{
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
      <h2>Finalización del reto</h2>
      <iframe class="iframe-video-principal" src="https://www.youtube.com/embed/bA_Zdbkbh2c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="text-center">
        <button class="btn-general" onclick="stages_terminalContent.menu.back()"">Atrás</button>
        <button class="btn-general" onclick="stages_terminalContent.menu.next()"">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stages_terminalContent.menu.showContentInText(this,'none')">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p>Qué buen trabajo. Ahora tienes más claro qué es la propiedad intelectual y como reconocerla en tus trabajos escritos. Como aprobaste cada reto, podrás descargar a continuación un archivo con todas las infografías en las que se presentan los diferentes casos de referenciación y citación, con sus ejemplos correspondientes para que te guíes con ellos cuando estés elaborando cualquier trabajo escrito solicitado en la Universidad.</p>
      </div>
      <div class="text-general">
  <div class="main-container-acordeon">  
      <div class="container-acordeon">
      <button class="btn-acordeon" onclick="stages_terminalContent.acordeonList.show(this);">Ejemplos de casos especiales</button>
          <div class="text-acordeon">
            <div class="cards">
              <a href="https://drive.google.com/file/d/16KnJQurAyhQYyuFT3U76j-1oPGPlXN30/view?usp=sharing" target="_blank" onclick="window.open('https://drive.google.com/file/d/16KnJQurAyhQYyuFT3U76j-1oPGPlXN30/view?usp=sharing','','location=yes,scrollbars=yes,resizable=yes,width=1000,height=700');return false;">
                  <figure class="card">
                      
                          <img src="./images/aspectos-tecnicos/ejemplosReferenciacion.jpg" alt="Ejemplos de referenciación">
                      
                      <figcaption>
                          Ver infografía de casos especiales
                      </figcaption>
                  </figure>
              </a>
            </div>
          </div>
      </div>
  </div>
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
stagePage.pageContainerSet('sec_2_Video_5',terminalContentClass_sec_2_Video_5);
