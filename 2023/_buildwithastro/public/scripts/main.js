// Location map (async init)
// ===========
window.mapsAsyncInit = function () {
    // style from http://snazzymaps.com/style/74/becomeadinosaur
    var mapStyle = [{ elementType: "labels.text", stylers: [{ visibility: "off" }] }, { featureType: "landscape.natural", elementType: "geometry.fill", stylers: [{ color: "#f5f5f2" }, { visibility: "on" }] }, { featureType: "administrative", stylers: [{ visibility: "off" }] }, { featureType: "transit", stylers: [{ visibility: "off" }] }, { featureType: "poi.attraction", stylers: [{ visibility: "off" }] }, { featureType: "landscape.man_made", elementType: "geometry.fill", stylers: [{ color: "#ffffff" }, { visibility: "on" }] }, { featureType: "poi.business", stylers: [{ visibility: "off" }] }, { featureType: "poi.medical", stylers: [{ visibility: "off" }] }, { featureType: "poi.place_of_worship", stylers: [{ visibility: "off" }] }, { featureType: "poi.school", stylers: [{ visibility: "off" }] }, { featureType: "poi.sports_complex", stylers: [{ visibility: "off" }] }, { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#ffffff" }, { visibility: "simplified" }] }, { featureType: "road.arterial", stylers: [{ visibility: "simplified" }, { color: "#ffffff" }] }, { featureType: "road.highway", elementType: "labels.icon", stylers: [{ color: "#ffffff" }, { visibility: "off" }] }, { featureType: "road.highway", elementType: "labels.icon", stylers: [{ visibility: "off" }] }, { featureType: "road.arterial", stylers: [{ color: "#ffffff" }] }, { featureType: "road.local", stylers: [{ color: "#ffffff" }] }, { featureType: "poi.park", elementType: "labels.icon", stylers: [{ visibility: "off" }] }, { featureType: "poi", elementType: "labels.icon", stylers: [{ visibility: "off" }] }, { featureType: "water", stylers: [{ color: "#71c8d4" }] }, { featureType: "landscape", stylers: [{ color: "#e5e8e7" }] }, { featureType: "poi.park", stylers: [{ color: "#8ba129" }] }, { featureType: "road", stylers: [{ color: "#ffffff" }] }, { featureType: "poi.sports_complex", elementType: "geometry", stylers: [{ color: "#c7c7c7" }, { visibility: "off" }] }, { featureType: "water", stylers: [{ color: "#a0d3d3" }] }, { featureType: "poi.park", stylers: [{ color: "#91b65d" }] }, { featureType: "poi.park", stylers: [{ gamma: 1.51 }] }, { featureType: "road.local", stylers: [{ visibility: "off" }] }, { featureType: "road.local", elementType: "geometry", stylers: [{ visibility: "on" }] }, { featureType: "poi.government", elementType: "geometry", stylers: [{ visibility: "off" }] }, { featureType: "landscape", stylers: [{ visibility: "off" }] }, { featureType: "road", elementType: "labels", stylers: [{ visibility: "off" }] }, { featureType: "road.arterial", elementType: "geometry", stylers: [{ visibility: "simplified" }] }, { featureType: "road.local", stylers: [{ visibility: "simplified" }] }, { featureType: "road" }, { featureType: "road" }, {}, { featureType: "road.highway" }];

    var container = document.querySelector('[data-address]')
        , address = container.getAttribute('data-address')
        , options = {
            zoom: 15
            , scrollwheel: false
            , disableDefaultUI: true
            , mapTypeId: google.maps.MapTypeId.ROADMAP
            , styles: mapStyle
        }

    var map = new google.maps.Map(container, options)
        , search = new google.maps.Geocoder()

    search.geocode({ address: address }, function (data) {
        var location = data[0].geometry.location
        map.setCenter(location)
    })
}

// Smooth scroll
// ===========
!function () {
    var id, target, current, previous

    function step() {
        current = window.pageYOffset - (window.pageYOffset - target) / (target ? 5 : 2)
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
        if (id == '#') {
            target = 0;
        } else {
            target = document.querySelector(id).getBoundingClientRect().top + window.pageYOffset
        }

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
        this.nav = document.querySelector('[data-nav]')
        this.active = null
    }

    ScrollSpy.prototype.init = function () {
        this.addEventListeners()
        this.updateSections()
    }

    ScrollSpy.prototype.updateSections = function () {
        var elements = document.querySelectorAll('header, section')
        this.sections = this.getSections(elements)
        this.nav_offset = this.nav.getBoundingClientRect().top + window.pageYOffset;
        this.menu()
    }

    ScrollSpy.prototype.getSections = function (elements) {
        return [].slice.call(elements).map(function (element) {
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
        document.addEventListener('DOMContentLoaded', this.updateSections.bind(this))
        document.addEventListener('resize', this.updateSections.bind(this))
        window.addEventListener('load', this.updateSections.bind(this))
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
        this.nav.classList[this.nav_offset < window.pageYOffset ? 'add' : 'remove']('fixed')
        this.active = item
    }

        ; (new ScrollSpy).init()
}()

// Load Scripts
// ===========
!function () {
    function loadScripts(urls) {
        var script = document.getElementsByTagName('script')[0]
        if (!Array.isArray(urls)) {
            urls = [urls]
        }
        urls.forEach(function (url) {
            var element = document.createElement('script')
            element.async = true
            element.src = 'https://' + url
            script.parentNode.insertBefore(element, script)
        })
    }

    loadScripts('maps.google.com/maps/api/js?sensor=false&callback=mapsAsyncInit&key=AIzaSyAb6e8Pa0bhvp0kC3EhwzeXmfFuA17-D9E')
    loadScripts('www.google-analytics.com/ga.js')
}()
