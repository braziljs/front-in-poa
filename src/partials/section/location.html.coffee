div class: 'wrapper', ->
  h2 class: 'section-title', ->
    span 'Saiba como'
    text ' chegar ao evento!'

  div class: 'address', itemprop: 'address', itemscope: null, itemtype: 'http://schema.org/PostalAddress', ->
    span itemprop: 'streetAddress', @conf.address
    text ' • '
    span itemprop: 'addressLocality', @conf.city
    text ' • '
    span itemprop: 'addressRegion', "#{@conf.neighborhood} • #{@conf.state}"

div class: 'address-map', 'data-address': @conf.address
