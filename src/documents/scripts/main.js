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

!function () {
  // Load Scripts
  // ===========
  function loadScripts (urls) {
    var script = document.getElementsByTagName('script')[0]
    if (!Array.isArray(urls)) {
      urls = [urls]
    }
    urls.forEach(function (url) {
      var element = document.createElement('script')
      element.async = true
      element.src = '//' + url
      script.parentNode.insertBefore(element, script)
    })
  }

  loadScripts('maps.google.com/maps/api/js?sensor=false&callback=mapsAsyncInit')
}()
