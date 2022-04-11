class terminalContentClass_sec_2_Introduccion extends generalPage{
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
      <h2>Contexto de los Retos</h2>
      <iframe class="iframe-video-principal" src="https://www.youtube.com/embed/Mh1lWMN-jzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="text-center">
        <button class="btn-general" onclick="stages_terminalContent.menu.back()"">Atrás</button>
        <button class="btn-general" onclick="stages_terminalContent.menu.next()"">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stages_terminalContent.menu.showContentInText(this,'none')">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p>Conforme estudiamos los aspectos relacionados con la propiedad intelectual y la referenciación que deberás usar para evitar plagio, quiero proponerte una serie de retos que te permitirán reconocer cuánto has aprendido. Te plantearé algunas preguntas. Si logras contestarlas de manera correcta, podrás obtener al final un paquete con unas plantillas que podrás utilizar en las secciones generales de tus trabajos académicos.</p>
        <p>Ahora sí, ¡Empecemos!</p>
      </div>
      `;
  }
  importCssFiles(){
    return [
        'generalStage.css|general'
    ]
}
}
stagePage.pageContainerSet('sec_2_Introduccion',terminalContentClass_sec_2_Introduccion);