speakerImgSrc = (speaker) ->
  speaker.image or "https://0.gravatar.com/avatar/#{speaker.gravatar}?s=400"


div class: 'wrapper', ->
  h2 class: 'section-title', ->
    'Palestrantes'

  ul class: 'speakers-list', ->
    for @speaker in @schedule when @speaker.presentation isnt undefined
      li class: 'speaker-item', itemprop: 'performer', itemscope: '', itemtype: 'http://schema.org/Person', ->
        img class: 'speaker-photo', src: speakerImgSrc(@speaker), alt: @speaker.name, itemprop: 'image'
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

