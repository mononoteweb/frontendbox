// 後で plane javascript に書き直し。

/*
 *
 * Facebook Share button
 *
 */

var fbShareBtn = function () {
  var fbURI = 'https://www.facebook.com/share.php?u=',
      shareURI = location.href;

  window.open(encodeURI(decodeURI(fbURI + shareURI)), 'FBwindow', 'width=480, height=480, location=no, menubar=no, resizable=yes, scrollbars=yes, status=no, toolbar=no');
};



/*
 *
 * Twitter Share button
 *
 */

var twShareBtn = function () {
  var twURI = 'https://twitter.com/share?',
      title = $('meta[property="og:title"]').attr('content'),
      description = $('meta[property="og:description"]').attr('content'),
      shareURI = location.href;

      window.open(encodeURI(decodeURI(twURI + 'text=' + title + '&url=' + shareURI)), 'tweetwindow', 'width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1');
};



/*
 *
 * LINE Share button
 *
 */

var lineShareBtn = function () {
    var lineURI = 'http://line.me/R/msg/text/?',
        title = $('meta[property="og:title"]').attr('content'),
        // description = $('meta[property="og:description"]').attr('content'),
        shareURI = location.href;

        // タイトルだけシェアされるよう変更
        // window.open(encodeURI(decodeURI(lineURI + title + '-' + description + '%0D%0A' + shareURI)), 'linewindow', 'width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1');
        window.open(encodeURI(decodeURI(lineURI + title + '%0D%0A' + shareURI)), 'linewindow', 'width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1');
};