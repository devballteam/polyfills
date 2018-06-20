;(function (sp) {

  if (!sp.startsWith)
    sp.startsWith = function (str) {
      return !!(str && this) && !this.lastIndexOf(str, 0)
    }

  if (!sp.endsWith)
    sp.endsWith = function (str) {
      var offset = str && this ? this.length - str.length : -1
      return offset >= 0 && this.lastIndexOf(str, offset) === offset
    }

})(String.prototype);
