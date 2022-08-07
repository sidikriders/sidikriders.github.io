function animateTitle() {
  var words = [
    'Sidik Hidayatullah.',
    'Sidikriders.',
    'Web Developer.',
    'Catlover',
    'Kpop Listener.',
    'Gamer.'
  ]

  var wordOrders = words.reduce((collection, word) => {
    var delay = Math.floor(500 / word.length)
    return collection.concat(word.split('').reduce((current, letter, idx) => {
      var sliced = word.slice(0, idx + 1)
      var frame
      if (sliced === word) {
        frame = [sliced, 700]
      } else {
        frame = [sliced, delay]
      }
      if (word[idx + 1]) {
        current.splice(idx, 0, frame, frame)
      } else {
        current.splice(idx, 0, frame)
      }
      return current
    }, []))
  }, [])

  function pasteWord(word, i) {
    if (!i) { i = 0 }
    var span = $('h1.type-content span:not(.cursor-he)')
    if (!word) {
      i = 0
      word = wordOrders[0]
    }
    span.text(word[0])
    i += 1
    setTimeout(() => {
      return pasteWord(wordOrders[i], i)
    }, word[1])
  }

  pasteWord(wordOrders[0], 0)
}

function animateSkill() {
  var checkpoint = $('.overall-skill .skill').offset().top + $('.overall-skill .skill').height() - window.innerHeight + 15
  if ($(window).scrollTop() >= checkpoint) {
    doAnimation()
  }
  $(window).scroll(function (e) {
    if ($(this).scrollTop() >= checkpoint) {
      doAnimation()
    }
  })

  function doAnimation() {
    if (!window.skillAnimated) {
      var skills = $('.skill .skill-meter')
      skills.each((idx, el) => {
        var skill = $(el)
        var score = Number(skill.attr('skill'))
        var gauge = skill.find('.gauge')
        var thumb = skill.find('.thumb')
        thumb.text(score + '%')
        skill.find('.gauge').css('width', score + '%')
        thumb.css('left', 'calc( ' + score + '% - 15px)')
      })
      window.skillAnimated = true
    }
  }
}


function initSideTab() {
  var target = [
    $('#main-banner').offset().top,
    $('#about').offset().top + 40,
    $('#education').offset().top + 40,
    $('#portofolio').offset().top + 40
  ]
  var treshold = target.map(int => {
    return int + Math.floor(window.innerHeight / 2)
  })

  $(window).scroll(function (e) {
    var scroll = $(this).scrollTop()

    var _idx = treshold.findIndex((tresh, idx, arr) => {
      return tresh >= scroll
    })
    if (_idx < 0) _idx = treshold.length - 1

    if (_idx !== (window.sideMenu || 0)) {
      $('#side-menu .list-menu .list.active').removeClass('active')
      $('#side-menu .list-menu a:nth-child(' + (_idx + 1) + ') .list').addClass('active')
      window.sideMenu = _idx
    }
  })

  $('#side-menu .list-menu a').click(function (e) {
    e.preventDefault()
    var el = $(this)
    $('html, body').animate({
      scrollTop: target[el.index()]
    }, 300)
    if (window.innerWidth <= 740) {
      $('#side-menu').css('left', '-100vw')
    }
  })

  $('#mobile-burger').click(function (e) {
    var sideMenu = $('#side-menu')
    if (sideMenu.css('left') === '0px') {
      sideMenu.css('left', '-100vw')
    } else {
      sideMenu.css('left', '0vw')
    }
  })
}

function initLazy () {
  $('img[data-src]').Lazy()
}

animateTitle()
animateSkill()
initSideTab()
initLazy()
