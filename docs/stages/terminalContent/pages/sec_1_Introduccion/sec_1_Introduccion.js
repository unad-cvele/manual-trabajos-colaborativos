class terminalContentClass_sec_1_Introduccion extends generalPage{
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
      <iframe class="iframe-video-principal" src="https://www.youtube.com/embed/6ZG6VrzN9d4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="text-center">
        <button class="btn-general" onclick="stages_terminalContent.menu.back()"">Atrás</button>
        <button class="btn-general" onclick="stages_terminalContent.menu.next()"">Siguiente</button>
        <button class="btn-general btn-show-content" onclick="stages_terminalContent.menu.showContentInText(this,'none')">Mostrar en texto</button>
      </div>
      <div class="text-show-content">
        <h3>Transcripción del video</h3>
        <p>Durante la revisión de los primeros aspectos técnicos que deberás aplicar para el desarrollo de tus trabajos académicos, quiero proponerte una serie de retos que te permitirán reconocer cuánto has aprendido. Presta atención a las explicaciones, te planteare algunas preguntas. Si logras contestarlas de manera correcta, podrás obtener un paquete con algunas plantillas que podrás utilizar en las secciones generales de tus trabajos académicos.</p>
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
stagePage.pageContainerSet('sec_1_Introduccion',terminalContentClass_sec_1_Introduccion);