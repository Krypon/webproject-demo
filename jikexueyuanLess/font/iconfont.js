;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-zhuye" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M603.2 936c-10.304 0-18.688-8.384-18.688-18.752L584.512 628.288 437.44 628.288l0 288.96c0 10.368-8.384 18.752-18.816 18.752-10.24 0-18.624-8.384-18.624-18.752L400 609.472c0-10.304 8.384-18.624 18.624-18.624l184.576 0c10.432 0 18.752 8.32 18.752 18.624l0 307.776C621.952 927.616 613.632 936 603.2 936z"  ></path>'+
      ''+
      '<path d="M212.032 936 212.032 936c-10.368 0-18.752-8.384-18.752-18.752l0.704-399.68L83.072 517.568c-7.808 0-14.848-4.928-17.536-12.352C62.784 497.792 65.024 489.536 71.168 484.48l426.56-352.192c6.976-5.632 16.768-5.696 23.744-0.128l431.488 347.264c6.208 4.992 8.512 13.312 5.888 20.736-2.496 7.552-9.664 12.544-17.536 12.544l-115.264 0 0 404.608c0 10.368-8.384 18.752-18.752 18.752-10.24 0-18.688-8.384-18.688-18.752L788.608 493.952c0-10.304 8.448-18.688 18.688-18.688l80.96 0L509.888 170.816 135.104 480.256l77.504 0c5.056 0 9.856 1.92 13.248 5.376 3.584 3.584 5.44 8.256 5.44 13.248l-0.512 418.368C230.784 927.68 222.4 936 212.032 936z"  ></path>'+
      ''+
      '<path d="M807.296 936 212.032 936c-10.304 0-18.752-8.384-18.752-18.752 0-10.304 8.448-18.688 18.752-18.688l595.264 0c10.368 0 18.752 8.384 18.752 18.688C826.048 927.616 817.664 936 807.296 936z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-shizhong" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M511.984 63.6c-247.648 0-448.384 200.704-448.384 448.384 0 247.632 200.752 448.416 448.384 448.416s448.416-200.8 448.416-448.416C960.4 264.304 759.632 63.6 511.984 63.6zM636.192 700.128l-169.984-142.816 0.944-1.136L467.152 198.064l89.696 0 0 318.864 136.752 114.992L636.192 700.128z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-shezhi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M960.225968 473.04478c0-7.68196-2.931892-15.362896-8.798747-21.228487-5.864808-5.864568-13.525592-8.797363-21.185353-8.797363l-45.828599 0c-18.997435 0-39.088828-14.81645-44.735663-32.93818l-23.768284-57.732889c-8.930759-16.698311-5.252846-41.340547 8.097754-54.757115l32.522003-32.477692c5.427838-5.427616 8.798747-12.933567 8.798747-21.228487 0-8.293897-3.326905-15.800871-8.798747-21.249977l-55.197351-55.107085c-5.427838-5.427616-12.912607-8.775874-21.185353-8.775874s-15.801518 3.370771-21.229357 8.775874l-32.522003 32.521694c-13.3506 13.394055-38.081854 17.070794-54.803362 8.097422l-57.691251-23.74582c-18.034464-5.602601-32.917016-25.737174-32.917016-44.711318L580.983386 93.797269c0-7.659447-2.932916-15.341407-8.798747-21.206998-5.864808-5.865591-13.525592-8.798387-21.185353-8.798387l-77.95866 0c-7.703765 0-15.363525 2.932796-21.229357 8.798387-5.864808 5.864568-8.797724 13.546527-8.797724 21.206998l0 45.893236c0 18.974144-14.751563 39.108716-32.873012 44.711318l-57.735255 23.74582c-16.764489 8.973372-41.364755 5.339612-54.715354-8.097422l-32.654015-32.499182c-5.427838-5.427616-12.956611-8.754385-21.229357-8.754385-8.272746 0-15.757514 3.369747-21.185353 8.775874l-55.065339 55.063083c-5.427838 5.427616-8.754743 12.912078-8.798747 21.206998 0 8.272407 3.370909 15.779382 8.798747 21.206998l32.479023 32.543184c13.437584 13.438057 17.115497 38.058804 8.097754 54.757115l-23.768284 57.776891c-5.602831 18.120706-25.694225 32.937157-44.690636 32.937157l-45.873626-0.042979c-7.703765 0-15.364549 2.932796-21.229357 8.797363-5.864808 5.865591-8.798747 13.546527-8.798747 21.228487l0 77.932953c0 7.68196 2.932916 15.363919 8.798747 21.228487 5.864808 5.844102 13.525592 8.775874 21.229357 8.775874l45.873626 0c18.996411 0.044002 39.044824 14.859429 44.647655 32.93818l23.812288 57.732889c8.929736 16.742313 5.29685 41.451064-8.097754 54.801117l-32.566007 32.476669c-5.427838 5.427616-8.798747 12.93459-8.798747 21.251 0 8.272407 3.369885 15.800871 8.798747 21.228487l55.196328 55.107085c5.427838 5.428639 12.912607 8.775874 21.186376 8.775874 8.272746 0 15.801518-3.347235 21.229357-8.775874l32.566007-32.499182c13.3506-13.371542 37.949842-17.048281 54.627346-7.988951l57.866243 23.74582c18.121449 5.624091 32.873012 25.714661 32.873012 44.711318l0 45.718251c0 7.68196 2.932916 15.362896 8.797724 21.228487 5.865831 5.843078 13.525592 8.775874 21.229357 8.775874l77.914656 0c7.703765 0 15.364549-2.932796 21.229357-8.775874 5.864808-5.865591 8.798747-13.546527 8.798747-21.228487l0-45.718251c0-18.996656 14.882552-39.087227 32.917016-44.711318l57.779259-23.74582c16.720485-9.060353 41.407735-5.383614 54.846343 7.988951l32.347011 32.476669c5.427838 5.450129 12.912607 8.842389 21.229357 8.842389 8.272746 0.021489 15.801518-3.326768 21.229357-8.775874l55.197351-55.151088c5.471842-5.449106 8.798747-12.95608 8.798747-21.251s-3.370909-15.800871-8.798747-21.228487l-32.522003-32.476669c-13.3506-13.350053-17.028513-38.057781-8.097754-54.801117l23.768284-57.732889c5.646835-18.077727 25.825213-32.894178 44.735663-32.894178l45.828599 0c7.659761 0 15.320545-2.931772 21.185353-8.798387 5.865831-5.864568 8.798747-13.546527 8.798747-21.228487L960.226991 473.04478 960.225968 473.04478zM684.505282 511.957021c0 95.222735-77.169659 172.34523-172.373782 172.34523-95.248127 0-172.418809-77.122495-172.418809-172.34523 0-95.200222 77.170682-172.367743 172.418809-172.367743C607.335623 339.589278 684.505282 416.756799 684.505282 511.957021"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-icon" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M210.858103 177.734507l634.909448 634.909448-32.914199 32.914199-634.909448-634.909448 32.914199-32.914199Z"  ></path>'+
      ''+
      '<path d="M845.774825 210.655379l-634.909448 634.909448-32.914199-32.914199 634.909448-634.909448 32.914199 32.914199Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-fengliangjibie3" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M242.624876 950.149015l-94.14417 0c-36.676317 0-66.514903-29.838585-66.514903-66.514903l0-319.271534c0-36.676317 29.838585-66.514903 66.514903-66.514903l94.14417 0c36.676317 0 66.514903 29.838585 66.514903 66.514903l0 319.271534C309.139779 920.31043 279.301194 950.149015 242.624876 950.149015z"  ></path>'+
      ''+
      '<path d="M553.710984 950.149015l-94.14417 0c-36.676317 0-66.514903-29.838585-66.514903-66.514903l0-528.025998c0-36.676317 29.838585-66.514903 66.514903-66.514903l94.14417 0c36.676317 0 66.514903 29.838585 66.514903 66.514903l0 528.025998C620.225887 920.31043 590.386278 950.149015 553.710984 950.149015z"  ></path>'+
      ''+
      '<path d="M877.075743 950.149015l-94.14417 0c-36.676317 0-66.514903-29.838585-66.514903-66.514903l0-732.687238c0-36.676317 29.838585-66.514903 66.514903-66.514903l94.14417 0c36.676317 0 66.514903 29.838585 66.514903 66.514903l0 732.687238C943.590646 920.31043 913.751037 950.149015 877.075743 950.149015zM782.931572 135.597281c-8.463766 0-15.349593 6.885827-15.349593 15.349593l0 732.687238c0 8.463766 6.885827 15.349593 15.349593 15.349593l94.14417 0c8.463766 0 15.349593-6.885827 15.349593-15.349593l0-732.687238c0-8.463766-6.885827-15.349593-15.349593-15.349593L782.931572 135.597281z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-msnui-poweroff" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M752.179 188.786q42.89 30.5 76.247 69.099t57.186 83.395 36.217 94.832 12.39 101.504q0 88.638-33.835 166.314t-91.497 135.339-135.339 91.498-166.314 33.835q-87.684 0-165.361-33.835t-135.816-91.498-91.498-135.339-33.359-166.314q0-50.513 11.913-99.121t33.835-92.45 54.326-81.966 72.435-68.623q20.968-15.249 45.272-11.437t39.554 23.827 11.437 44.795-23.827 40.030q-60.045 43.842-91.973 107.699t-31.928 137.244q0 62.904 23.827 118.659t65.287 97.216 97.216 65.763 118.659 24.304 118.659-24.304 97.216-65.763 65.763-97.216 24.304-118.659q0-74.341-34.312-140.58t-96.262-109.13q-20.968-14.296-25.258-39.076t10.007-45.749q14.296-20.015 39.076-24.304t45.749 10.007zM507.235 540.477q-24.781 0-42.413-17.632t-17.632-42.413v-362.174q0-24.781 17.632-42.89t42.413-18.108q25.733 0 43.366 18.108t17.632 42.89v362.174q0 24.781-17.632 42.413t-43.366 17.632z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-5" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M752.96 316.608C699.648 222.144 600.32 163.84 491.2 163.84c-72.64 0-142.72 26.304-197.44 74.048C244.096 281.216 210.176 339.456 196.992 403.456 118.912 425.984 64 497.728 64 580.416c0 91.648 68.096 168.576 156.352 182.08l0 2.176 515.904 0c123.776 0 224.384-100.608 224.384-224.384C960.704 422.208 868.864 325.184 752.96 316.608L752.96 316.608zM736.32 713.216 248.192 713.216l-1.728-0.128c-72.192-0.896-130.944-60.288-130.944-132.608 0-64.064 45.632-118.912 108.544-130.496l18.176-3.392 2.688-18.304c8.448-58.624 37.824-112.448 82.688-151.68 45.312-39.552 103.36-61.312 163.584-61.312 81.664 0 156.672 39.424 203.008 104.704C639.488 330.624 589.824 361.28 556.096 406.656 547.584 418.048 549.952 434.176 561.472 442.688c11.392 8.448 27.52 6.08 36.032-5.312 33.024-44.416 83.648-69.952 138.816-69.952 95.296 0 172.864 77.504 172.864 172.864C909.184 635.648 831.616 713.216 736.32 713.216z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-shenhebijijishibenxiezi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M335.872 561.664l-0.128 0.512c-0.128 0.384-0.256 0.896-0.64 1.536l-0.384 0.512c-0.384 0.512-0.64 0.768-0.768 1.152l-48.128 176.384c-2.432 9.088 0.128 18.688 6.784 25.6 4.864 4.736 11.648 7.424 18.688 7.424 2.304 0 4.608-0.256 6.784-0.896L495.36 726.144l0.256 0.128 0.512-0.128c0.896-0.256 1.28-0.384 1.792-1.024l468.48-468.608c13.056-13.184 20.352-31.232 20.352-51.072 0-22.528-9.6-44.928-26.24-61.44l-44.288-44.288c-16.64-16.64-39.168-26.24-61.696-26.24-19.584 0-37.76 7.168-51.072 20.352L335.872 561.664 335.872 561.664zM796.16 182.784l48.384-48.384c8.704-8.576 24.96-7.552 34.944 2.048l44.288 44.288c5.248 5.248 8.32 12.416 8.32 19.328-0.256 6.4-2.304 11.52-6.144 15.36l-49.28 49.152L796.16 182.784zM410.24 568.96l343.424-343.424 80.768 82.048L491.52 650.368 410.24 568.96zM348.544 711.296l27.648-102.016 74.112 74.24L348.544 711.296z"  ></path>'+
      ''+
      '<path d="M952.96 402.56c-15.744 0-28.544 12.928-28.544 28.8l0 436.864c0 24.96-20.224 45.184-45.184 45.184L140.032 913.408c-24.96 0-45.184-20.224-45.184-45.184L94.848 155.136c0-24.96 20.352-45.184 45.184-45.184l475.904 0c15.744 0 28.544-12.8 28.544-28.544s-12.8-28.544-28.544-28.544L134.912 52.864c-53.888 0-97.664 43.776-97.664 97.664l0 722.944c0 53.888 43.776 97.664 97.664 97.664l748.8 0c53.888 0 97.664-43.776 97.664-97.664L981.376 431.104C981.504 415.36 968.704 402.56 952.96 402.56z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-sousuolansousuo" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M73.465199 438.717973c0-201.75505 163.680896-365.311103 365.596606-365.311103 201.912639 0 365.596606 163.556053 365.596606 365.311103 0 201.747887-163.683966 365.302917-365.596606 365.302917C237.147118 804.02089 73.465199 640.466883 73.465199 438.717973zM1013.002528 961.397197 773.833357 722.050993c64.837704-76.409251 103.945397-175.307701 103.945397-283.33302 0-242.111177-196.421578-438.372096-438.715927-438.372096S0.346901 196.606797 0.346901 438.717973c0 242.104013 196.421578 438.363909 438.715927 438.363909 107.954711 0 206.800973-38.960337 283.226596-103.577007l239.285828 239.463883c14.20042 14.243399 37.22481 14.243399 51.4283 0C1027.202948 998.723314 1027.202948 975.635479 1013.002528 961.397197z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-tongzhi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M859.136 98.304h-18.432c-2.048 3.072-7.168-0.512-9.216 2.048-42.496 11.264-64 39.424-66.048 83.456-22.528-8.704-45.056-14.848-68.608-16.896-33.28-3.584-66.56 0-98.816 7.68-73.216 17.408-135.68 55.296-191.488 104.96-23.04 20.48-44.032 43.52-73.216 56.32-33.792 14.848-69.632 22.016-105.472 29.696-27.136 5.632-54.272 9.728-80.384 18.944-28.16 9.728-43.52 29.696-48.128 58.88 0 1.536-1.024 3.072-1.536 4.608l-1.024 1.024c-0.512 3.072 1.024 6.144-1.024 9.216v2.048c1.536 4.608 1.536 9.216 0 14.336v2.048c2.048 3.584 0.512 7.168 1.024 11.264 0.512 0 1.024 0 1.024 1.024 4.608 24.576 10.752 49.152 20.48 72.192 23.04 55.296 56.32 103.424 95.232 148.48 57.856 67.072 121.856 126.976 199.168 171.52 43.008 25.088 88.576 44.544 139.264 46.08 29.696 1.024 58.368-3.072 77.824-29.184 9.728-12.8 14.336-28.16 18.432-43.008 10.24-36.864 16.896-74.752 28.16-111.104 11.264-37.376 29.696-70.144 56.832-98.304 42.496-43.008 76.8-91.648 99.328-147.968 27.136-66.048 37.376-133.632 18.944-203.776-2.56-10.24-6.656-20.48-9.728-30.72 52.224-8.192 75.776-27.136 84.48-69.12 2.048-1.536-0.512-5.632 2.048-7.68v-17.408c2.048-34.304-36.864-72.192-69.12-70.656zM716.8 247.296c-63.488 11.776-110.592 51.2-156.16 93.184-44.032 40.96-82.944 87.04-120.832 133.632-35.84 44.032-78.848 78.848-133.632 96.768-11.264 3.584-22.528 5.632-34.304 8.192-9.216 2.048-17.408 0-25.088-5.632-20.992-15.36-37.376-34.304-44.544-60.416-1.024-4.096-1.536-7.68-2.048-11.776-1.024-5.12 0.512-7.168 6.144-7.168 50.176 1.024 95.744-15.36 139.264-38.4 47.616-25.6 88.064-60.416 126.976-97.28 31.744-30.208 62.464-62.464 98.816-87.552 40.96-28.16 86.016-39.424 135.68-30.72 3.072 0.512 6.656 1.536 9.728 2.56 1.024 2.048 1.024 3.584 0 4.608z m130.048-27.136c-22.016 0.512-40.448-17.92-40.96-39.936-0.512-22.016 17.92-40.448 39.936-40.96 22.016 0 40.448 17.92 40.96 39.936 0.512 22.016-17.92 40.96-39.936 40.96zM296.448 840.192c-36.352-27.648-67.072-60.416-95.744-95.744-4.096-5.12-7.168-5.632-12.288-2.048-28.672 17.408-43.52 42.496-40.96 76.288 2.048 32.256 19.456 54.272 47.104 68.608 9.728 2.048 19.968 4.608 29.696 6.656 32.768 0 57.344-13.824 74.24-41.984 2.56-5.12 3.072-8.192-2.048-11.776z" fill="" ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)