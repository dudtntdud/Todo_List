
(function(app, $){

  var data = [];
  var $noteStringField = $('#memo');
  //이부분 수정해서 템플릿으로 바꿔야함
  app.collection = {
    set: function(arr){
      data = arr;
      app.$wrap.trigger("addCollection", [data]);
    },
    toJSON: function() {
      return data;
    },
    add: function (note) {
      data.pop();
      data.push(note);
      app.$wrap.trigger("addCollection", [data]);
    }
  }
})(Notes, jQuery);
