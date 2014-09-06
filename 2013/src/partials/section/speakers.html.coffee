div class: 'wrapper', ->
  h2 class: 'section-title', ->
    'Palestrantes'

  ul class: 'speakers-list', ->
    for @speaker in @speakers
      li id: @speakerId(@speaker.name), class: 'speaker-item', itemprop: 'performer', itemscope: '', itemtype: 'http://schema.org/Person', ->
        img class: 'speaker-photo', src: @speakerImgSrc(@speaker), alt: @speaker.name, itemprop: 'image'
        div class: 'speaker-info', ->
          h3 class: 'speaker-name', ->
            text @speaker.name
          if @speaker.twitter
            a href: "http://twitter.com/#{@speaker.twitter}", class: 'speaker-twitter', target: '_blank', ->
              "@#{@speaker.twitter}"
          p class: 'speaker-bio', ->
            @speaker.bio
          p class: 'speaker-comment', ->
            @speaker.comment

