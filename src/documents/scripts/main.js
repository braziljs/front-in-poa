// Location map (async init)
// ===========
window.mapsAsyncInit = function () {
  var container = document.querySelector('[data-address]')
    , address   = container.getAttribute('data-address')
    , options   = {
        zoom: 16
      , scrollwheel: false
      , mapTypeControl: false
      , labels: true
      , zoomControlOptions: {
          position: google.maps.ControlPosition.TOP_RIGHT
        }
      , mapTypeId: google.maps.MapTypeId.ROADMAP
    }

  var map    = new google.maps.Map(container, options)
    , search = new google.maps.Geocoder()

  search.geocode({ address: address }, function (data) {
    var location = data[0].geometry.location

    new google.maps.Marker({
      map: map
    , position: location
    })
    map.setCenter(location)
  })
}

// Smooth scroll
// ===========
!function () {
  var id, target, current, previous

  function step() {
    current = window.pageYOffset - (window.pageYOffset - target) / 5

    document.body.scrollTop = current
    document.documentElement.scrollTop = current

    if (previous != current) {
      window.requestAnimationFrame(step)
    } else {
      document.location.hash = id
      delete step.runnig
    }
    previous = current
  }

  function handler(event) {
    event.preventDefault()
    id = this.getAttribute('href')
    target = document.querySelector(id).getBoundingClientRect().top + window.pageYOffset

    if (!step.runnig) {
      previous = null
      step.runnig = true
      step()
    }
  }

  var links = document.querySelectorAll('a[href*="#"]')
  ;[].slice.call(links).forEach(function (link) {
    link.addEventListener('click', handler)
  })
}()

// Scroll spy
// ===========
!function () {
  function ScrollSpy() {
    this.scrollLast = 0
    this.nav = document.querySelector('nav')
    this.active = null
  }

  ScrollSpy.prototype.init = function () {
    var elements = document.querySelectorAll('header, section')
    this.sections = this.getSections(elements)
    this.menu()
    this.addEventListeners()
  }

  ScrollSpy.prototype.getSections = function (sections) {
    return [].slice.call(sections).map(function (element) {
      return {
        id: element.id
      , offset: element.getBoundingClientRect().top + window.pageYOffset - 20
      }
    })
  }

  ScrollSpy.prototype.getActive = function () {
    var scroll = window.pageYOffset
      , section

    for (var i = 0, l = this.sections.length; i < l; i++) {
      this.sections[i].offset <= scroll && (section = this.sections[i])
    }
    return section.id
  }

  ScrollSpy.prototype.addEventListeners = function () {
    document.addEventListener('scroll', this.onScroll.bind(this))
  }

  ScrollSpy.prototype.onScroll = function (event) {
    if ((Date.now() - this.scrollLast) > 50) {
      this.scrollLast = Date.now()
      this.menu()
    }
  }

  ScrollSpy.prototype.menu = function () {
    var id = this.getActive()
      , item = this.nav.querySelector('a[href="#' + id + '"]')

    this.active && this.active.classList.remove('active')
    item && item.classList.add('active')
    this.active = item
  }

  document.addEventListener('DOMContentLoaded', function () {
    ;(new ScrollSpy).init()
  }, false)

}()

// Load Scripts
// ===========
!function () {
  function loadScripts (urls) {
    var script = document.getElementsByTagName('script')[0]
    if (!Array.isArray(urls)) {
      urls = [urls]
    }
    urls.forEach(function (url) {
      var element = document.createElement('script')
      element.async = true
      element.src = 'http://' + url
      script.parentNode.insertBefore(element, script)
    })
  }

  loadScripts('maps.google.com/maps/api/js?sensor=false&callback=mapsAsyncInit')
  loadScripts('www.google-analytics.com/ga.js')
}()
