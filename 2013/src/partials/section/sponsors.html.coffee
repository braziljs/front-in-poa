div class: 'wrapper', ->
  h2 class: 'section-title', ->
    'Patrocínio'
  ul class: 'sponsors-list', ->
    for @sponsor in @sponsors
      li class: 'sponsor-item', itemscope: null, itemtype: 'http://schema.org/Organization', ->
        a href: @sponsor.url, class: 'sponsor-link', itemprop: 'url', target: '_blank', ->
          img src: @sponsor.logo, alt: @sponsor.name, class: 'sponsor-logo', itemprop: 'image'

  h2 class: 'section-title', ->
    'Apoio'
  ul class: 'partners-list', ->
    for @partner in @partners
      li class: 'partner-item', itemscope: null, itemtype: 'http://schema.org/Organization', ->
        a href: @partner.url, class: 'partner-link', itemprop: 'url', target: '_blank', ->
          img src: @partner.logo, alt: @partner.name, class: 'partner-logo', itemprop: 'image'
