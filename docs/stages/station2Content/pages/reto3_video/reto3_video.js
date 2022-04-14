class station2ContentClass_reto3_video extends generalPage{
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
      <h2>Introducción al Reto</h2>
      <iframe class="iframe-video-principal" src="https://www.youtube.com/embed/N_C32zULiiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="text-center">
        <button class="btn-general btn-back" onclick="stage.activity('menu_back')">Atrás</button>
        <button class="btn-general btn-next" onclick="stage.activity('menu_next')">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stage.activity('menu_showContentInText_none',this)">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p>Ahora que terminaste de revisar este mini-módulo, empezaremos con el tercer reto. En este  reto encontrarás tres (3) preguntas. Recuerda una vez más estar muy atento al tiempo asignado  para cada pregunta.</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}
stagePage.pageContainerSet('reto3_video',station2ContentClass_reto3_video);