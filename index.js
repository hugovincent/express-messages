
/*!
 * Express - Contrib - messages
 * Copyright(c) 2010 TJ Holowaychuk <tj@vision-media.ca>
 * Copyright(2) 2011 Hugo Vincent <hugo.vincent@gmail.com>
 * MIT Licensed
 */

module.exports = function(options){
  // FIXME give sensible defaults for all used 'options' keys
  return function(req, res){
    return function(){
      var buf = []
        , messages = req.flash()
        , types = Object.keys(messages)
        , len = types.length;
      if (!len) return '';
      buf.push('<div id="express-messages">')
        for (var i = 0; i < len; ++i) {
          var type = types[i]
            , msgs = messages[type];
          if (msgs) {
            for (var j = 0, l = msgs.length; j < l; ++j) {
              buf.push('<div class="' + options['messages_class'] + ' ' + type + '">');
              if (options['close_buttons'] === true) {
                buf.push('<a class="close">×</a>');
              }
              buf.push('<p>' + msgs[j] + '</p>');
              buf.push('</div>');
            }
          }
        }
      buf.push('</div>');
      return buf.join('');
    }
  };
}
