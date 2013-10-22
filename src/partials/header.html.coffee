header class: 'header', ->
  div class: 'wrapper', ->
    h1 class: 'logo', ->
      a class: 'logo-link', href: '#', title: @conf.name, itemprop: 'name', ->
        @conf.name
    p class: 'event-head', ->
      "#{@conf.date} • #{@conf.venue} • #{@conf.city}/#{@conf.state}"
    p class: 'event-slogan', ->
      @conf.description
    if @callToAction
      a href: @callToAction.link, class: 'call-action-link', @callToAction.text

div class: 'collaborate', ->
  div class: 'wrapper', ->
    div class: 'collaborate-item', ->
      h2 class: 'collaborate-title', ->
        text 'Inscreva'
        strong 'sua palestra!'
      p ->
        'Queremos que você inscreva sua palestra e vote nas melhores.'
      p ->
        'Colabore conosco e nos a ajude a fazer um evento afude!'
      a href: '#', class: 'collaborate-link', ->
        'Vai lá'
    div class: 'collaborate-item', ->
      h2 class: 'collaborate-title', ->
        text 'Queremos'
        strong 'sua opinião!'
      p ->
        'A profissão de desenvolvedor front-end exige diferentes skills.'
      p ->
        'Deixe sua opinião sobre os temas que você mais gostaria de ver no evento!'
      a href: '#', class: 'collaborate-link', ->
        'Opina aí!'
