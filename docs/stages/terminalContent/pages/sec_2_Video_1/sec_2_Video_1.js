class terminalContentClass_sec_2_Video_1 extends generalPage{
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
      <h2>Introducción a los Retos</h2>
      <iframe class="iframe-video-principal" src="https://www.youtube.com/embed/5aflPradNJc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="text-center">
        <button class="btn-general" onclick="stages_terminalContent.menu.back()"">Atrás</button>
        <button class="btn-general" onclick="stages_terminalContent.menu.next()"">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stages_terminalContent.menu.showContentInText(this,'none')">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p>Hemos llegado a nuestro primer reto.</p>
        <p>Como ves, la propiedad intelectual es un asunto tan serio que la Universidad Nacional Abierta y a Distancia en su Acuerdo Número. 0 0 6 del 26 de agosto de 2008, aprobó el Estatuto de Propiedad Intelectual en el que se establecen sanciones civiles, penales y administrativas. Es por ello, que se hace esencial que conozcas y entiendas de qué manera puedes evitar incurrir en plagio. Contesta las preguntas en los retos presentados a continuación, y obtendrás un archivo descargable con todas las infografías, en las que se presentan ejemplos de referenciación para que te guíes con ellas, cuando estés elaborando cualquier trabajo escrito solicitado en la Universidad.</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}
stagePage.pageContainerSet('sec_2_Video_1',terminalContentClass_sec_2_Video_1);