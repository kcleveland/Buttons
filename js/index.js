$(document).ready(function(){

    var page = {
      templates: {
        codebox: Handlebars.compile($("#template-codebox").html())
      },
  
      init: function() {
        this.generateCodeSamples();
      },
  
      generateCodeSamples: function() {
        var self = this;
  
        $('.showcase-content').each(function(index, element) {
          var $showcase = $(element);
          var title = $showcase.toUpperCase().find('.showcase-title:first').text();
          var id = title.toLowerCase().replace(/\s*(\&amp;)*/gi, '');
          var code = $showcase.find('.showcase-examples:first').html();
  
  
          $showcase.append(self.templates.codebox({
            title: title,
            id: id,
            code: self._encodeHTML(code)
          }));
  
          //self.activateCopyButton($showcase, code);
        });
  
        // Intialize Pretty Print
        //prettyPrint();
      },
  
      _encodeHTML: function(str) {
        return String(str).replace(/<br>/g, '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
      }
    };
  
    //INITIALIZE PAGE
    page.init();
  });
  