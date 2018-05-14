/* Fire animations when elements are displayed on viewport
 -----------------------------------------------------------------------------------------
 */
if ($("#modal-food1, #modal-food2, #modal-food3, #modal-food4, #modal-food5, #modal-food6").length ) {
  $("#modal-food1, #modal-food2, #modal-food3, #modal-food4, #modal-food5, #modal-food6" ).iziModal({
    top: 175,
    headerColor: '',
    background: '',
    width: 1000,
    bottom: 100,
    icon: 'icon-settings_system_daydream',
    overlayClose: true,
    iframe : false,
    fullscreen: true,
    closeButton: true,
    zindex: 999,
    openFullscreen: false,
    borderBottom: false,
    group: 'smartfood',
    onFullscreen: function(modal){
        console.log(modal.isFullscreen);
    }
  });

  $(document).on('click', '.trigger-iframe', function (event) {
      event.preventDefault();
      $("#modal-food1, #modal-food2, #modal-food3, #modal-food4, #modal-food5, #modal-food6").iziModal('open', event);
  });
}

if ($("#modal-event1, #modal-event2, #modal-event3").length ) {
  $("#modal-event1, #modal-event2, #modal-event3" ).iziModal({
    top: 175,
    headerColor: '',
    background: '',
    width: 1000,
    bottom: 100,
    icon: 'icon-settings_system_daydream',
    overlayClose: true,
    iframe : false,
    fullscreen: true,
    closeButton: true,
    zindex: 999,
    openFullscreen: false,
    borderBottom: false,
    group: 'smartevent',
    onFullscreen: function(modal){
        console.log(modal.isFullscreen);
    }
  });

  $(document).on('click', '.trigger-iframe', function (event) {
      event.preventDefault();
      $("#modal-event1, #modal-event2, #modal-event3").iziModal('open', event);
  });
}

if ($("#modal-service1, #modal-service2, #modal-service3, #modal-service4, #modal-service5").length ) {
  $("#modal-service1, #modal-service2, #modal-service3, #modal-service4, #modal-service5" ).iziModal({
    top: 175,
    headerColor: '',
    background: '',
    width: 1000,
    bottom: 100,
    icon: 'icon-settings_system_daydream',
    overlayClose: true,
    iframe : false,
    fullscreen: true,
    closeButton: true,
    zindex: 999,
    openFullscreen: false,
    borderBottom: false,
    group: 'service',
    onFullscreen: function(modal){
        console.log(modal.isFullscreen);
    }
  });

  $(document).on('click', '.trigger-iframe', function (event) {
      event.preventDefault();
      $("#modal-service1, #modal-service2, #modal-service3, #modal-service4, #modal-service5").iziModal('open', event);
  });
}

if ($("#modal-prep1, #modal-prep2, #modal-prep3").length ) {
  $("#modal-prep1, #modal-prep2, #modal-prep3").iziModal({
    top: 175,
    headerColor: '',
    background: '',
    width: 1000,
    bottom: 100,
    icon: 'icon-settings_system_daydream',
    overlayClose: true,
    iframe : false,
    fullscreen: true,
    closeButton: true,
    zindex: 999,
    openFullscreen: false,
    borderBottom: false,
    group: 'prep',
    onFullscreen: function(modal){
        console.log(modal.isFullscreen);
    }
  });

  $(document).on('click', '.trigger-iframe', function (event) {
      event.preventDefault();
      $("#modal-prep1, #modal-prep2, #modal-prep3").iziModal('open', event);
  });
}

if ($("#modal-senior1, #modal-senior2, #modal-senior3").length ) {
  $("#modal-senior1, #modal-senior2, #modal-senior3").iziModal({
    top: 175,
    headerColor: '',
    background: '',
    width: 1000,
    bottom: 100,
    icon: 'icon-settings_system_daydream',
    overlayClose: true,
    iframe : false,
    fullscreen: true,
    closeButton: true,
    zindex: 999,
    openFullscreen: false,
    borderBottom: false,
    group: 'senior',
    onFullscreen: function(modal){
        console.log(modal.isFullscreen);
    }
  });

  $(document).on('click', '.trigger-iframe', function (event) {
      event.preventDefault();
      $("#modal-senior1, #modal-senior2, #modal-senior3").iziModal('open', event);
  });
}

if ($("#modal-boarding1, #modal-boarding2, #modal-boarding3, #modal-boarding4").length ) {
  $("#modal-boarding1, #modal-boarding2, #modal-boarding3, #modal-boarding4").iziModal({
    top: 175,
    headerColor: '',
    background: '',
    width: 1000,
    bottom: 100,
    icon: 'icon-settings_system_daydream',
    overlayClose: true,
    iframe : false,
    fullscreen: true,
    closeButton: true,
    zindex: 999,
    openFullscreen: false,
    borderBottom: false,
    group: 'boarding',
    onFullscreen: function(modal){
        console.log(modal.isFullscreen);
    }
  });

  $(document).on('click', '.trigger-iframe', function (event) {
      event.preventDefault();
      $("#modal-boarding1, #modal-boarding2, #modal-boarding3, #modal-boarding4").iziModal('open', event);
  });
}

if ($("#modal-team1, #modal-team2, #modal-team3").length ) {
  $("#modal-team1, #modal-team2, #modal-team3").iziModal({
    top: 175,
    headerColor: '',
    background: '',
    width: 1000,
    bottom: 100,
    icon: 'icon-settings_system_daydream',
    overlayClose: true,
    iframe : false,
    fullscreen: true,
    closeButton: true,
    zindex: 999,
    openFullscreen: false,
    borderBottom: false,
    group: 'team',
    onFullscreen: function(modal){
        console.log(modal.isFullscreen);
    }
  });

  $(document).on('click', '.trigger-iframe', function (event) {
      event.preventDefault();
      $("#modal-team1, #modal-team2, #modal-team3").iziModal('open', event);
  });
}


