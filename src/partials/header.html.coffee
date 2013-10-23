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
