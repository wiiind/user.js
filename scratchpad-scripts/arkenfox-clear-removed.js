/***
  This will reset the preferences that have been removed completely from the arkenfox user.js.

  Last updated: 29-August-2021

  For instructions see:
  https://github.com/arkenfox/user.js/wiki/3.1-Resetting-Inactive-Prefs-[Scripts]
***/

(() => {

  if ('undefined' === typeof(Services)) return alert('about:config needs to be the active tab!');

  const aPREFS = [
    /* removed in arkenfox user.js */
    /* 79-91 */
    'alerts.showFavicons',
    'browser.newtabpage.activity-stream.asrouter.providers.snippets',
    'browser.send_pings.require_same_host',
    'browser.urlbar.usepreloadedtopurls.enabled',
    'dom.allow_cut_copy',
    'dom.battery.enabled',
    'dom.IntersectionObserver.enabled',
    'dom.storage.enabled',
    'dom.vibrator.enabled',
    'extensions.screenshots.upload-disabled',
    'general.warnOnAboutConfig',
    'gfx.direct2d.disabled',
    'layers.acceleration.disabled',
    'media.getusermedia.audiocapture.enabled',
    'media.getusermedia.browser.enabled',
    'media.getusermedia.screensharing.enabled',
    'media.gmp-widevinecdm.visible',
    'media.media-capabilities.enabled',
    'network.http.redirection-limit',
    'privacy.partition.network_state',
    'security.insecure_connection_icon.enabled',
    'security.mixed_content.block_active_content',
    'security.ssl.enable_ocsp_stapling',
    'security.ssl3.dhe_rsa_aes_128_sha',
    'security.ssl3.dhe_rsa_aes_256_sha',
    'webgl.min_capability_mode',
    /* 69-78 */
    'browser.cache.disk_cache_ssl',
    'browser.search.geoip.url',
    'browser.search.region',
    'browser.sessionhistory.max_entries',
    'dom.push.connection.enabled',
    'dom.push.serverURL',
    'extensions.getAddons.discovery.api_url',
    'extensions.htmlaboutaddons.discover.enabled',
    'extensions.webservice.discoverURL',
    'intl.locale.requested',
    'intl.regional_prefs.use_os_locales',
    'media.block-autoplay-until-in-foreground',
    'middlemouse.paste',
    'plugin.sessionPermissionNow.intervalInMinutes',
    'privacy.usercontext.about_newtab_segregation.enabled',
    'security.insecure_connection_icon.pbmode.enabled',
    'security.insecure_connection_text.pbmode.enabled',
    'webgl.dxgl.enabled',
    /* 61-68 */
    'app.update.service.enabled',
    'app.update.silent',
    'app.update.staging.enabled',
    'browser.cache.disk.capacity',
    'browser.cache.disk.smart_size.enabled',
    'browser.cache.disk.smart_size.first_run',
    'browser.cache.offline.insecure.enable',
    'browser.contentblocking.enabled',
    'browser.eme.ui.enabled',
    'browser.laterrun.enabled',
    'browser.offline-apps.notify',
    'browser.rights.3.shown',
    'browser.safebrowsing.blockedURIs.enabled',
    'browser.safebrowsing.downloads.remote.block_dangerous',
    'browser.safebrowsing.downloads.remote.block_dangerous_host',
    'browser.safebrowsing.provider.google.gethashURL',
    'browser.safebrowsing.provider.google.reportMalwareMistakeURL',
    'browser.safebrowsing.provider.google.reportPhishMistakeURL',
    'browser.safebrowsing.provider.google.reportURL',
    'browser.safebrowsing.provider.google.updateURL',
    'browser.safebrowsing.provider.google4.dataSharing.enabled',
    'browser.safebrowsing.provider.google4.dataSharingURL',
    'browser.safebrowsing.provider.google4.gethashURL',
    'browser.safebrowsing.provider.google4.reportMalwareMistakeURL',
    'browser.safebrowsing.provider.google4.reportPhishMistakeURL',
    'browser.safebrowsing.provider.google4.reportURL',
    'browser.safebrowsing.provider.google4.updateURL',
    'browser.safebrowsing.provider.mozilla.gethashURL',
    'browser.safebrowsing.provider.mozilla.updateURL',
    'browser.safebrowsing.reportPhishURL',
    'browser.sessionhistory.max_total_viewers',
    'browser.sessionstore.max_windows_undo',
    'browser.slowStartup.maxSamples',
    'browser.slowStartup.notificationDisabled',
    'browser.slowStartup.samples',
    'browser.storageManager.enabled',
    'browser.urlbar.autoFill.typed',
    'browser.urlbar.filter.javascript',
    'browser.urlbar.maxHistoricalSearchSuggestions',
    'browser.urlbar.userMadeSearchSuggestionsChoice',
    'canvas.capturestream.enabled',
    'dom.allow_scripts_to_close_windows',
    'dom.disable_window_flip',
    'dom.forms.datetime',
    'dom.imagecapture.enabled',
    'dom.popup_maximum',
    'extensions.webextensions.keepStorageOnUninstall',
    'extensions.webextensions.keepUuidOnUninstall',
    'font.blacklist.underline_offset',
    'font.name.monospace.x-unicode',
    'font.name.monospace.x-western',
    'font.name.sans-serif.x-unicode',
    'font.name.sans-serif.x-western',
    'font.name.serif.x-unicode',
    'font.name.serif.x-western',
    'gfx.offscreencanvas.enabled',
    'javascript.options.shared_memory',
    'layout.css.font-loading-api.enabled',
    'media.gmp-gmpopenh264.autoupdate',
    'media.gmp-gmpopenh264.enabled',
    'media.gmp-manager.updateEnabled',
    'media.gmp-manager.url',
    'media.gmp-manager.url.override',
    'media.gmp-widevinecdm.autoupdate',
    'media.gmp.trial-create.enabled',
    'media.navigator.video.enabled',
    'media.peerconnection.ice.tcp',
    'media.peerconnection.identity.enabled',
    'media.peerconnection.identity.timeout',
    'media.peerconnection.turn.disable',
    'media.peerconnection.use_document_iceservers',
    'media.peerconnection.video.enabled',
    'network.auth.subresource-img-cross-origin-http-auth-allow',
    'network.cookie.leave-secure-alone',
    'network.cookie.same-site.enabled',
    'network.dnsCacheEntries',
    'network.dnsCacheExpiration',
    'network.http.fast-fallback-to-IPv4',
    'network.proxy.autoconfig_url.include_path',
    'offline-apps.quota.warn',
    'pdfjs.enableWebGL',
    'plugin.default.state',
    'plugin.defaultXpi.state',
    'plugin.scan.plid.all',
    'privacy.trackingprotection.annotate_channels',
    'privacy.trackingprotection.lower_network_priority',
    'privacy.trackingprotection.pbmode.enabled',
    'privacy.trackingprotection.ui.enabled',
    'security.data_uri.block_toplevel_data_uri_navigations',
    'security.insecure_field_warning.contextual.enabled',
    'security.insecure_password.ui.enabled',
    'security.tls.version.fallback-limit',
    'services.blocklist.addons.collection',
    'services.blocklist.gfx.collection',
    'services.blocklist.onecrl.collection',
    'services.blocklist.plugins.collection',
    'services.blocklist.signing.enforced',
    'services.blocklist.update_enabled',
    'signon.autofillForms.http',
    'signon.storeWhenAutocompleteOff',
    'toolkit.telemetry.cachedClientID',
    'urlclassifier.trackingTable',
    'xpinstall.whitelist.required',
    /* 60 or lower */
    'browser.migrate.automigrate.enabled',
    'browser.search.geoip.timeout',
    'browser.search.reset.enabled',
    'browser.search.reset.whitelist',
    'browser.stopReloadAnimation.enabled',
    'browser.tabs.insertRelatedAfterCurrent',
    'browser.tabs.loadDivertedInBackground',
    'browser.tabs.loadInBackground',
    'browser.tabs.selectOwnerOnClose',
    'browser.urlbar.clickSelectsAll',
    'browser.urlbar.doubleClickSelectsAll',
    'device.storage.enabled',
    'dom.keyboardevent.dispatch_during_composition',
    'dom.presentation.controller.enabled',
    'dom.presentation.discoverable',
    'dom.presentation.discovery.enabled',
    'dom.presentation.enabled',
    'dom.presentation.receiver.enabled',
    'dom.presentation.session_transport.data_channel.enable',
    'dom.vr.oculus.enabled',
    'dom.vr.openvr.enabled',
    'dom.vr.osvr.enabled',
    'extensions.pocket.api',
    'extensions.pocket.oAuthConsumerKey',
    'extensions.pocket.site',
    'general.useragent.compatMode.firefox',
    'geo.wifi.xhr.timeout',
    'gfx.layerscope.enabled',
    'media.flac.enabled',
    'media.mediasource.enabled',
    'media.mediasource.mp4.enabled',
    'media.mediasource.webm.audio.enabled',
    'media.mediasource.webm.enabled',
    'media.mp4.enabled',
    'media.ogg.enabled',
    'media.ogg.flac.enabled',
    'media.opus.enabled',
    'media.raw.enabled',
    'media.wave.enabled',
    'media.webm.enabled',
    'media.webspeech.recognition.enable',
    'media.wmf.amd.vp9.enabled',
    'media.wmf.enabled',
    'media.wmf.vp9.enabled',
    'network.dns.blockDotOnion',
    'network.stricttransportsecurity.preloadlist',
    'security.block_script_with_wrong_mime',
    'security.fileuri.strict_origin_policy',
    'security.sri.enable',
    'services.sync.enabled',
    'ui.submenuDelay',
    'webextensions.storage.sync.enabled',
    'webextensions.storage.sync.serverURL',
    //  excluding these e10 settings
       // 'browser.tabs.remote.autostart',
       // 'browser.tabs.remote.autostart.2',
       // 'browser.tabs.remote.force-enable',
       // 'browser.tabs.remote.separateFileUriProcess',
       // 'extensions.e10sBlocksEnabling',
       // 'extensions.webextensions.remote',
       // 'dom.ipc.processCount',
       // 'dom.ipc.shims.enabledWarnings',
       // 'dom.ipc.processCount.extension',
       // 'dom.ipc.processCount.file',
       // 'security.sandbox.content.level',
       // 'dom.ipc.plugins.sandbox-level.default',
       // 'dom.ipc.plugins.sandbox-level.flash',
       // 'security.sandbox.logging.enabled',
    /* reset parrot: check your open about:config after running the script */
    '_user.js.parrot'
  ];

  console.clear();

  let c = 0;
  for (const sPname of aPREFS) {
    if (Services.prefs.prefHasUserValue(sPname)) {
      Services.prefs.clearUserPref(sPname);
      if (!Services.prefs.prefHasUserValue(sPname)) {
        console.info('reset', sPname);
        c++;
      } else console.warn('failed to reset', sPname);
    }
  }

  focus();

  const d = (c==1) ? ' pref' : ' prefs';
  alert(c ? 'successfully reset ' + c + d + "\n\nfor details check the console" : 'nothing to reset');

  return 'all done';

})();
