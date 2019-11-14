'use strict';



;define('vidya-frontend/adapters/application', ['exports', 'ember-data', 'vidya-frontend/config/environment'], function (exports, _emberData, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
  }

  exports.default = _emberData.default.RESTAdapter.extend({
    host: host,
    session: Ember.inject.service(),
    auth: Ember.inject.service(),
    userid: localStorage.getItem('id'),
    corsWithCredentials: true,
    headers: Ember.computed('auth.userId', 'userid', function () {
      try {
        if (this.get('auth.userId')) {
          return {
            'userid': this.get('auth.userId'),
            'X-Requested-With': 'XMLHttpRequest'
          };
        } else if (this.get('userid')) {
          this.set('auth.userId', this.get('userid'));
          return {
            'userid': this.get('userid'),
            'X-Requested-With': 'XMLHttpRequest'
          };
        }
      } catch (ex) {
        return {
          'userid': this.get('userid'),
          'X-Requested-With': 'XMLHttpRequest'
        };
      }
    }).property().volatile(),

    ajax: function (url, type, hash) {
      if (this.headers !== undefined) {
        var headers = this.headers;
        if (hash) {
          hash.beforeSend = function (xhr) {
            Ember.keys(headers).forEach(function (key) {
              xhr.setRequestHeader(key, headers[key]);
            });
          };
        }
      }
      return this._super(url, type, hash);
    }
  });
});
;define('vidya-frontend/app', ['exports', 'vidya-frontend/resolver', 'ember-load-initializers', 'vidya-frontend/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
;define('vidya-frontend/breakpoints', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    mobile: '(max-width: 767px)',
    tablet: '(min-width: 768px) and (max-width: 991px)',
    desktop: '(min-width: 992px) and (max-width: 1200px)'
  };
});
;define("vidya-frontend/components/-lf-get-outlet-state", ["exports", "liquid-fire/components/-lf-get-outlet-state"], function (exports, _lfGetOutletState) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _lfGetOutletState.default;
    }
  });
});
;define('vidya-frontend/components/basic-dropdown', ['exports', 'ember-basic-dropdown/components/basic-dropdown'], function (exports, _basicDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDropdown.default;
    }
  });
});
;define('vidya-frontend/components/basic-dropdown/content-element', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content-element'], function (exports, _contentElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contentElement.default;
    }
  });
});
;define('vidya-frontend/components/basic-dropdown/content', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
;define('vidya-frontend/components/basic-dropdown/trigger', ['exports', 'ember-basic-dropdown/components/basic-dropdown/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
;define('vidya-frontend/components/bottom-bar-card', ['exports', 'ember-gestures/mixins/recognizers'], function (exports, _recognizers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_recognizers.default, {
    recognizers: 'pan tap press',
    press: {
      time: 2000,
      threshold: 20
    },
    init() {
      this._super(...arguments);
    },
    didRender() {
      var element = document.getElementById("js-autoplay");
      if (element.classList.contains('checked')) {
        element.classList.remove("checked");
      }
    },
    actions: {
      longPress() {
        var counter = 0;
        var pressHoldDuration = 1;
        function timer() {
          // console.log(counter);
          // console.log(pressHoldDuration);
          var element = document.getElementById("js-autoplay");
          if (counter < pressHoldDuration) {
            // timerID = requestAnimationFrame(timer);
            counter++;
            // console.log('close')
            if (element.classList.contains('checked')) {
              element.classList.remove("checked");
            } else {
              element.classList.add("checked");
            }
          }
        }
        timer();
      }
    }
  });
});
;define('vidya-frontend/components/cover-dialog', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    auth: Ember.inject.service(),
    coverPhotos: [{
      'src': 'cover.png',
      'w': 500,
      'h': 500
    }, {
      'src': 'cover/images.jpeg',
      'w': 500,
      'h': 500
    }, {
      'src': 'cover/black and white.jpeg',
      'w': 500,
      'h': 500
    }, {
      'src': 'cover/car.jpeg',
      'w': 500,
      'h': 500
    }, {
      'src': 'cover/fox.jpeg',
      'w': 500,
      'h': 500
    }, {
      'src': 'cover/green.jpeg',
      'w': 500,
      'h': 500
    }, {
      'src': 'cover/moutain.jpeg',
      'w': 500,
      'h': 500
    }, {
      'src': 'cover/remix.jpeg',
      'w': 500,
      'h': 500
    }, {
      'src': 'cover/space.jpeg',
      'w': 500,
      'h': 500
    }, {
      'src': 'cover/sumit.jpeg',
      'w': 500,
      'h': 500
    }, {
      'src': 'cover/sunshine.jpeg',
      'w': 500,
      'h': 500
    }],
    actions: {
      closeDialog() {
        this.set('showDialog', false);
      },
      saveCover() {
        // Ember.$.ajax({
        //   type: 'put',
        //   url: '/background',
        //   data: {"back_photo" : this.get('radioSelectedTopping'), 'userID' : this.get('auth').userId},
        //   dataType: 'json',
        //   succes:function(){
        //     console.log('You Are Welcome');
        //   },
        //   error:function(){
        //     console.log('Your Activation Code is Wrong');
        //   },
        // });
        // console.log(this.get('auth').userId);
        var _id = this.get("auth").userId;
        var data = [{ 'src': this.get('radioSelectedTopping').src, 'w': this.get('radioSelectedTopping').w, 'h': this.get('radioSelectedTopping').h }];
        if (this.get("group") == 'group') {
          this.store.findRecord('channel', this.get("channelid")).then(response => {
            response.set('back_photo', data);
            response.save();
            this.set("showDialog", false);
            // window.location.reload()
          });
        } else {
          this.store.findRecord('backuser', _id).then(response => {
            response.set('back_photo', data);
            response.save();
            this.set("showDialog", false);
            // window.location.reload()
          });
        }

        //   console.log(this.get('radioSelectedTopping'))
        //   this.set('coverPhoto',this.get('radioSelectedTopping').src)
        //   console.log(this.get("coverPhoto"))
      }
    }
  });
});
;define('vidya-frontend/components/create-news-dialog', ['exports', 'vidya-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
  }
  exports.default = Ember.Component.extend({
    resizer: Ember.inject.service(),
    auth: Ember.inject.service(),
    uploadimage: Ember.inject.service(),
    showDialog: false,
    icon: '',
    multiFiles: [],
    postImg: [],
    fileChooser: false,
    videoPlayer: {},
    voicePlayer: {},
    init() {
      this._super(...arguments);
    },
    imgDisplay: Ember.computed('fileChooser', function () {
      console.log(this.get('postImg'));
      return this.get('postImg');
    }),
    progressUpload: Ember.computed('uploadimage.progress', function () {
      return this.get('uploadimage').progress;
    }),
    progressPercentage: Ember.computed('uploadimage.loading', function () {
      return this.get('uploadimage').loading;
    }),
    didRender() {
      this._super(...arguments);
    },

    actions: {
      closeDialog() {
        try {
          this.get('videoPlayer').record().player.record().destroy();
        } catch (ex) {}
        try {
          this.get('voicePlayer').record().player.record().destroy();
        } catch (ex) {}
        this.set('showDialog', false);
      },
      saveData() {
        var usrInfo = {
          userId: this.get('auth.userId'),
          user_url: this.get('auth.user_url'),
          username: this.get('auth.username'),
          role: this.get('auth.role')
        };
        var data = {
          category: {},
          section: {},
          title: '',
          header: {},
          summary: this.get('post'),
          detail: '',
          postImg: this.get('postImg'),
          breakingNews: false,
          prioritize: 3,
          sourceNews: '',
          author: this.get('auth.username'),
          editor: '',
          status: this.get('auth.role'),
          userinfo: usrInfo,
          checkNews: "Pending",
          tags: [],
          previous_state: 'Cele',
          channel_id: this.get('auth').userId,
          like: [],
          share: [],
          latest_message: ''
        };
        var that = this;
        var record = this.store.createRecord("social", data);
        record.save().then(function (response) {
          that.clearData();
        });
      },

      deleteImg(data, option) {
        var _id = {
          'fileid': data.file_name
        };
        var that = this;
        Ember.$.ajax({
          type: 'post',
          url: `${host}/upload/remove`,
          data: _id,
          dataType: 'json',
          success: function (response) {
            that.get('postImg').splice(that.get('postImg').findIndex(e => e.file_name === data.file_name), 1);
            that.dataChanges();
          }
        });
      },
      selectImg(result) {
        this.get("uploadimage").uploadFiles(result, this.get("postImg"));
      },
      getPhoto() {
        var that = this;
        window.imagePicker.getPictures(function (results) {
          for (var i = 0; i < results.length; i++) {
            console.log('Image URI: ' + results[i]);
            function getFileContentAsBase64(path, callback) {
              window.resolveLocalFileSystemURL(path, gotFile, fail);

              function fail(e) {
                alert('Cannot found requested file');
              }

              function gotFile(fileEntry) {
                fileEntry.file(function (file) {
                  var reader = new FileReader();
                  reader.onloadend = function (e) {
                    var content = this.result;
                    callback(content);
                  };
                  reader.readAsDataURL(file);
                });
              }
            }
            var path = results[i];

            // Convert image
            getFileContentAsBase64(path, function (base64Photo) {
              // console.log(base64Photo)
              that.set('uploadimage.progress', true);
              that.convertFile(base64Photo, 'image');
            });
          }
        }, function (error) {
          console.log('Error: ' + error);
        }, {
          maximumImagesCount: 30,
          width: 1024
        });
      },
      getCamera() {
        var that = this;

        function error(e) {
          console.log(e + 'error');
        }

        function success(imageData) {
          console.log(imageData);
          that.convertFile(imageData, 'image');
        }
        navigator.camera.getPicture(success, error, {
          quality: 80,
          destinationType: Camera.DestinationType.DATA_URL
        });
      },
      getVideo() {
        var that = this;
        that.set('uploadimage.progress', true);
        var captureSuccess = function (mediaFile) {
          function getFileContentAsBase64(path, callback) {
            window.resolveLocalFileSystemURL(path, gotFile, fail);

            function fail(e) {
              alert('Cannot found requested file');
            }

            function gotFile(fileEntry) {
              fileEntry.file(function (file) {
                var reader = new FileReader();
                reader.onloadend = function (e) {
                  var content = this.result;
                  callback(content);
                };
                // The most important point, use the readAsDatURL Method from the file plugin
                reader.readAsDataURL(file);
              });
            }
          }
          var path = mediaFile[0].fullPath;

          // Convert image
          getFileContentAsBase64(path, function (base64Video) {
            that.convertFile(base64Video, 'video');
            // Then you'll be able to handle the myimage.png file as base64
          });
        };
        // capture error callback
        var captureError = function (error) {
          navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
        };

        // start video capture
        navigator.device.capture.captureVideo(captureSuccess, captureError, {
          limit: 1
        });
      },
      getVoice() {
        var that = this;
        that.set('uploadimage.progress', true);
        var captureSuccess = function (mediaFile) {
          function getFileContentAsBase64(path, callback) {
            window.resolveLocalFileSystemURL(path, gotFile, fail);

            function fail(e) {
              alert('Cannot found requested file');
            }

            function gotFile(fileEntry) {
              fileEntry.file(function (file) {
                var reader = new FileReader();
                reader.onloadend = function (e) {
                  var content = this.result;
                  callback(content);
                };
                // The most important point, use the readAsDatURL Method from the file plugin
                reader.readAsDataURL(file);
              });
            }
          }
          var path = mediaFile[0].fullPath;

          // Convert image
          getFileContentAsBase64(path, function (base64Voice) {
            // console.log(base64Voice)
            that.convertFile(base64Voice, 'voice');
            // that.convertFile(base64Image, 'voice')
            // Then you'll be able to handle the myimage.png file as base64
          });
        };
        // capture error callback
        var captureError = function (error) {
          navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
        };
        // start audio capture
        navigator.device.capture.captureAudio(captureSuccess, captureError, {
          limit: 1
        });
      }
    },

    dataChanges() {
      if (this.get('fileChooser') === true) {
        this.set('fileChooser', false);
      } else {
        this.set('fileChooser', true);
      }
    },
    clearData() {
      this.set('post', '');
      this.set('postImg', []);
      this.dataChanges();
      this.set('showDialog', false);
    },
    convertFile(imageData, type) {
      var mime = '';
      var filename = '';
      function dataURLtoFile(dataurl, filetype) {
        if (type == 'image') {
          var bstr = atob(dataurl.replace(/^data:image\/(png|jpeg|jpg);base64,/, ''));
        } else if (type == 'voice') {
          var bstr = atob(dataurl.replace(/^data:audio\/mpeg;base64,/, ''));
        } else {
          var bstr = atob(dataurl.replace(/^data:video\/mp4;base64,/, ''));
        }
        var n = bstr.length;
        var byteNumbers = new Array(bstr.length);
        for (var i = 0; i < bstr.length; i++) {
          byteNumbers[i] = bstr.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray], {
          type: filetype
        });
      }
      if (type == 'image') {
        var dataURI = "data:image/png;base64," + +imageData;
        var file = dataURLtoFile(imageData, ':image/png');
        this.get("uploadimage").uploadProcess(file, type, 'tmp.png', this.get("postImg"));
      } else {
        var dataURI = "data:video/mp4;base64," + +imageData;
        var file = dataURLtoFile(imageData, ':image/mp4');
        this.get("uploadimage").uploadProcess(file, type, 'tmp.mp4', this.get("postImg"));
      }
    },
    uploadFiles(result) {
      var that = this;
      this.set('progress', true);
      console.log(result);
      for (var i = 0; i < result.length; i++) {
        var type = result[i].type;
        var file_name = result[i].name;
        var checkFile = type.split('/');
        var reader = new FileReader();
        reader.onload = function (e) {
          that.get("resizer").resize(e.target.result, 280, 170, resizedata => {
            function dataURLtoFile(dataurl, filename) {
              var bstr = atob(dataurl),
                  n = bstr.length,
                  u8arr = new Uint8Array(n);
              var mime = ':image/png',
                  filename = "tmp.png";
              while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
              }
              return new File([u8arr], filename, {
                type: mime
              });
            }
            var file = dataURLtoFile(resizedata.split(',')[1], 'tmp.png');
            that.uploadProcess(file, type, file_name);
          });
        };
        reader.readAsDataURL(result[i]);
      }
    },
    uploadProcess(file, type, file_name) {
      var that = this;
      that.set("data", '');
      var reqUrl = '';
      reqUrl = `${host}/uploads`;
      var fd = new FormData();
      fd.append("file", file);
      var request = new XMLHttpRequest();
      request.responseType = 'json';
      request.open("POST", reqUrl, true);
      request.upload.onprogress = function (e) {
        var percentComplete = Math.ceil(e.loaded / e.total * 100);
        console.log(percentComplete);
        that.set('loading', percentComplete);
        if (e.lengthComputable) {
          console.log(e.loaded + " / " + e.total);
        }
      };
      request.onloadstart = function (e) {
        console.log(e.total);
        console.log("start");
      };
      request.onloadend = function (e) {
        // console.log(e)
        console.log("end");
      };
      request.onload = function (e) {
        var response = request.response;
        var imageobject = e.target.response;
        console.log(type);
        that.get('postImg')['type'] = type;
        that.get('postImg')['original_name'] = file_name;
        that.get("postImg").pushObject(imageobject);
        that.dataChanges();

        function* porcressComplete(response) {
          console.log(response);
          yield response;
        }
        porcressComplete(response);
        that.set('progress', false);
      };
      request.send(fd);
    }
  });
});
;define('vidya-frontend/components/doc-content', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('vidya-frontend/components/ember-initials/adorable/component', ['exports', 'ember-initials/components/adorable'], function (exports, _adorable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _adorable.default;
    }
  });
});
;define('vidya-frontend/components/ember-initials/component', ['exports', 'ember-initials/components/initials'], function (exports, _initials) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _initials.default;
    }
  });
});
;define('vidya-frontend/components/ember-initials/gravatar/component', ['exports', 'ember-initials/components/gravatar'], function (exports, _gravatar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gravatar.default;
    }
  });
});
;define('vidya-frontend/components/ember-initials/image/component', ['exports', 'ember-initials/components/image'], function (exports, _image) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _image.default;
    }
  });
});
;define('vidya-frontend/components/ember-initials/initials/component', ['exports', 'ember-initials/components/initials'], function (exports, _initials) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _initials.default;
    }
  });
});
;define('vidya-frontend/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
;define('vidya-frontend/components/entertainment/create-live-card', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('vidya-frontend/components/entertainment/cteate-live', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('vidya-frontend/components/entertainment/main-live', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('vidya-frontend/components/entertainment/main-nolive', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('vidya-frontend/components/entertainment/no-live-poster', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('vidya-frontend/components/entertainment/user-live', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    actions: {
      // routeLiveDetail() {
      //   this.transitionToRoute('entertainment.live-detail');
      // },
    }
  });
});
;define('vidya-frontend/components/entertainment/user-replay', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('vidya-frontend/components/entertainment/user-upload', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('vidya-frontend/components/entertainment/user-video-clip', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('vidya-frontend/components/file-picker', ['exports', 'ember-cli-file-picker/components/file-picker'], function (exports, _filePicker) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _filePicker.default;
    }
  });
});
;define('vidya-frontend/components/fullscreen-img', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: 'img',
    attributeBindings: ['src', 'width', 'height'],
    fullscreen: Ember.inject.service(),

    click() {
      this.get('fullscreen').toggle(this.element);
    }
  });
});
;define('vidya-frontend/components/group-card', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define("vidya-frontend/components/illiquid-model", ["exports", "liquid-fire/components/illiquid-model"], function (exports, _illiquidModel) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _illiquidModel.default;
    }
  });
});
;define("vidya-frontend/components/liquid-bind", ["exports", "liquid-fire/components/liquid-bind"], function (exports, _liquidBind) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidBind.default;
    }
  });
});
;define("vidya-frontend/components/liquid-child", ["exports", "liquid-fire/components/liquid-child"], function (exports, _liquidChild) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidChild.default;
    }
  });
});
;define("vidya-frontend/components/liquid-container", ["exports", "liquid-fire/components/liquid-container"], function (exports, _liquidContainer) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidContainer.default;
    }
  });
});
;define("vidya-frontend/components/liquid-if", ["exports", "liquid-fire/components/liquid-if"], function (exports, _liquidIf) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidIf.default;
    }
  });
});
;define("vidya-frontend/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], function (exports, _liquidMeasured) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidMeasured.default;
    }
  });
  Object.defineProperty(exports, "measure", {
    enumerable: true,
    get: function () {
      return _liquidMeasured.measure;
    }
  });
});
;define("vidya-frontend/components/liquid-outlet", ["exports", "liquid-fire/components/liquid-outlet"], function (exports, _liquidOutlet) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidOutlet.default;
    }
  });
});
;define("vidya-frontend/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], function (exports, _liquidSpacer) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidSpacer.default;
    }
  });
});
;define('vidya-frontend/components/liquid-sync', ['exports', 'liquid-fire/components/liquid-sync'], function (exports, _liquidSync) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidSync.default;
    }
  });
});
;define("vidya-frontend/components/liquid-unless", ["exports", "liquid-fire/components/liquid-unless"], function (exports, _liquidUnless) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidUnless.default;
    }
  });
});
;define("vidya-frontend/components/liquid-versions", ["exports", "liquid-fire/components/liquid-versions"], function (exports, _liquidVersions) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _liquidVersions.default;
    }
  });
});
;define('vidya-frontend/components/markdown-to-html', ['exports', 'ember-cli-showdown/components/markdown-to-html'], function (exports, _markdownToHtml) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _markdownToHtml.default;
    }
  });
});
;define('vidya-frontend/components/news/category-card', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    // randomColor:Ember.computed(
    //
    // )
  });
});
;define('vidya-frontend/components/news/crs-list', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    states: Ember.inject.service(),
    didUpdateAttrs() {
      this._super(...arguments);
    },
    didRender() {
      this._super(...arguments);
      Ember.run.next(this, this.restoreScrollPosition);
      if (this.get("currentSlide") == 1) {
        var height = document.getElementById('crs').offsetHeight;
        document.getElementById('swiper-home').style.height = height + "px";
      }
      // if (this.get("currentSlide") == 0) {
      //   var height = document.getElementById('news').offsetHeight
      //   document.getElementById('swiper-home').style.height = height + "px"
      // } else if (this.get("currentSlide") == 1) {
      //   var height = document.getElementById('crs').offsetHeight
      //   document.getElementById('swiper-home').style.height = height + "px"
      // }
      // console.log(height)
      // console.log(this.get('newsModel'))
      // console.log(this.get('crsModel'))
    },

    restoreScrollPosition() {
      try {
        if (this.get("states.scrollCRSID") && this.get('currentSlide') == 1) {
          // var elmnt = document.getElementById(this.get("states.scrollID"));
          // console.log(elmnt)
          // if(elmnt) {
          //   elmnt.scrollIntoView(false)
          // }
          document.getElementById('content-list').scrollTop = this.get("states.scrollCRSID");
        }
        this.set("states.scrollCRSID", null);
      } catch (ex) {
        // this.set("states.scrollID", null)
      }
    },
    actions: {
      // goToSimilarNews(headline) {
      //   this.transitionToRoute('index', {
      //     queryParams: {
      //       headline: headline
      //     }
      //   });
      // },
      fullScreen(_id) {
        var elem = document.getElementById(_id);
        this.set('states.videoId', _id);
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          /* Firefox */
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
          /* Chrome, Safari & Opera */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          /* IE/Edge */
          elem.msRequestFullscreen();
        }
      }
    }
  });
});
;define('vidya-frontend/components/news/crsgroup-dialog', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    auth: Ember.inject.service(),
    router: Ember.inject.service(),
    showDialog: false,
    checkid: [],
    checkdata: [],
    postImg: [],
    dataModel: Ember.computed('checkdata.length', function () {
      console.log(this.get('checkdata'));
      return this.get('checkdata');
    }),
    actions: {
      closeDialog() {
        this.set('checkid', []);
        this.set('checkdata', []);
        this.set('showDialog', false);
      },
      createGroup() {
        // console.log(this.get('postImg'));
        var usrInfo = {
          userId: this.get('auth.userId'),
          user_url: this.get('auth.user_url'),
          username: this.get('auth.username'),
          role: this.get('auth.role')
        };
        var data = {
          "channelname": this.get("title"),
          "type": "public",
          "status": "News Group",
          "news_id": this.get("checkid"),
          "userlist": [this.get('auth.userId')],
          "userinfo": usrInfo,
          "postImg": this.get('postImg')
        };
        var record = this.store.createRecord("channel", data);
        record.save().then(response => {
          this.cleardata();
        });
      }
    },
    cleardata() {
      this.set('title', '');
      this.set('checkid', []);
      this.set('checkdata', []);
      this.set('showDialog', false);
      this.get('router').transitionTo('social');
    }
  });
});
;define('vidya-frontend/components/news/detail-card', ['exports', 'vidya-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
    var pilboxHost = _environment.default.pilboxHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
    var pilboxHost = _environment.default.pilboxHost;
  }

  exports.default = Ember.Component.extend({
    fullscreen: Ember.inject.service(),
    states: Ember.inject.service(),
    didInsertElement() {
      var that = this;
      this._super(...arguments);
      this.$('p>img').each(function (ele) {
        var url = $(this).attr('src');
        var imgurl = url.substring(0, 26);
        console.log(imgurl);
        if (imgurl == 'https://admin.vidya.social') {
          var urlsplit = url.split('/');
          var urlmerge = '/' + urlsplit[3] + '/' + urlsplit[4];
          console.log(urlmerge);
          var srcUrl = pilboxHost + "/?url=" + host + urlmerge + "&w=400&h=200&mode=clip&filter=bilinear&fmt=webp";
        } else {
          var srcUrl = pilboxHost + "/?url=" + host + url + "&w=400&h=200&mode=clip&filter=bilinear&fmt=webp";
        }
        var url = $(this).attr('source');
        // console.log('source'+url)
        $(this).attr('src', srcUrl);
        var viewer = new Viewer($(this)[0], {
          toolbar: {
            zoomIn: 0,
            zoomOut: 0,
            oneToOne: 4,
            reset: 4,
            prev: 4,
            rotateLeft: 4,
            rotateRight: 4
          },
          minZoomRatio: 1
        });
      });
      this.$('div>img').each(function (ele) {
        var url = $(this).attr('src');
        var imgurl = url.substring(0, 26);
        console.log(imgurl);
        if (imgurl == 'https://admin.vidya.social') {
          var urlsplit = url.split('/');
          var urlmerge = '/' + urlsplit[3] + '/' + urlsplit[4];
          console.log(urlmerge);
          var srcUrl = pilboxHost + "/?url=" + host + urlmerge + "&w=400&h=200&mode=clip&filter=bilinear&fmt=webp";
        } else {
          var srcUrl = pilboxHost + "/?url=" + host + url + "&w=400&h=200&mode=clip&filter=bilinear&fmt=webp";
        }
        var url = $(this).attr('source');
        // console.log('source'+url)
        $(this).attr('src', srcUrl);
        var viewer = new Viewer($(this)[0], {
          toolbar: {
            zoomIn: 0,
            zoomOut: 0,
            oneToOne: 4,
            reset: 4,
            prev: 4,
            rotateLeft: 4,
            rotateRight: 4
          },
          minZoomRatio: 1
        });
      });
      this.$('photo>img').each(function (ele) {
        // var url = $(this).attr('src')
        var url = $(this).attr('source');
        // console.log('source'+url)
        // var srcUrl = pilboxHost + "/?url=" + host + url + "&w=400&h=200&mode=clip&filter=bilinear&fmt=webp"
        var srcUrl = url;
        $(this).attr('src', srcUrl);
        var viewer = new Viewer($(this)[0], {
          toolbar: {
            zoomIn: 0,
            zoomOut: 0,
            oneToOne: 4,
            reset: 4,
            prev: 4,
            rotateLeft: 4,
            rotateRight: 4
          },
          minZoomRatio: 1
          // viewed() {
          // this.viewer.minZoomRatio(1)
          // }
        });
      });
      this.$('*>source').each(function (ele) {
        $(this).attr('src', host + $(this).attr('src'));
      });
      this.$('*>video').each(function (ele) {
        $(this).attr('poster', host + $(this).attr('poster'));
      });
      this.$('div>img').each(function () {
        var url = $(this).attr('src');
        // var srcUrl = pilboxHost + "/?url=" + host + url + "&w=400&h=200&mode=clip&filter=bilinear&fmt=webp"
        var srcUrl = url;
        $(this).attr('src', srcUrl);
      });
      this.$('img').each(function (ele) {
        this.addEventListener("load", () => {
          $(this).click(this, function (doc) {
            that.set("states.viewer", true);
            try {
              var container = $('.viewer-container');
              for (var i = 0; i < container.length; i++) {
                var currentComp = container[i].getElementsByTagName('img')[0].currentSrc;
                var checkComp = doc.data.currentSrc;
                if (currentComp == checkComp) {
                  container[i].classList.remove('close-img');
                  container[i].classList.remove('viewer-hide');
                  container[i].classList.add('viewer-in');
                }
              }
            } catch (ex) {}
            $('.viewer-canvas').each(function (e) {
              $(this).click(this, function (e) {
                that.set("states.viewer", false);
              });
            });
            $('.viewer-close').each(function () {
              $(this).click(this, function (e) {
                that.set("states.viewer", false);
              });
            });
          });
        });
      });
      $('img').click(function () {
        that.set("states.viewer", true);
      });
    },

    actions: {
      fullScreen(class_id, _url) {
        console.log(_url);
        // var divObj = document.getElementById(class_id)
        // divObj.requestFullscreen()
        // if (divObj.requestFullscreen) {
        //   divObj.requestFullscreen();
        // } else if (divObj.msRequestFullscreen) {
        //   divObj.msRequestFullscreen();
        // } else if (divObj.mozRequestFullScreen) {
        //   divObj.mozRequestFullScreen();
        // } else if (divObj.webkitRequestFullscreen) {
        //   divObj.webkitRequestFullscreen();
        // }
        window.plugins.webintent.startActivity({
          action: window.plugins.webintent.ACTION_VIEW,
          url: host + _url,
          type: 'video/mp4'
        }, function () {}, function () {
          console.log('Failed to open URL via Android Intent.');
        });
      }
    }
  });
});
;define('vidya-frontend/components/news/headline-card', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    effect: 'cube',
    cubeEffect: {
      shadowOffset: 500,
      shadow: true,
      shadow: false,
      shadowScale: 100
    },
    init() {

      this._super(...arguments);
    },
    actions: {
      // goToSimilarNews(headline) {
      //   this.transitionToRoute('index', {
      //     queryParams: {
      //       headline: headline
      //     }
      //   });
      // },
      // routeToCrsRalated() {
      //   this.transitionToRoute('crs-related')
      // }
    }
  });
});
;define('vidya-frontend/components/news/headline-list', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('vidya-frontend/components/news/inter-card', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    actions: {
      routeToDetailNew(post_id) {
        this.set('states.post_id', post_id);
        this.transitionToRoute('news-detail', {
          queryParams: {
            post_id: post_id
          }
        });
      },
      lastReached() {
        console.log('below');
      }
    }
  });
});
;define('vidya-frontend/components/news/inter-list-card', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    actions: {
      fullScreen(_id) {
        var elem = document.getElementById(_id);
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          /* Firefox */
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
          /* Chrome, Safari & Opera */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          /* IE/Edge */
          elem.msRequestFullscreen();
        }
      }
    }
  });
});
;define('vidya-frontend/components/news/local-card', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('vidya-frontend/components/news/local-list-card', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    actions: {
      fullScreen(_id) {
        var elem = document.getElementById(_id);
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          /* Firefox */
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
          /* Chrome, Safari & Opera */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          /* IE/Edge */
          elem.msRequestFullscreen();
        }
      }
    }
  });
});
;define('vidya-frontend/components/news/news-list-card', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('vidya-frontend/components/news/private-card', ['exports', 'ember-gestures/mixins/recognizers'], function (exports, _recognizers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend(_recognizers.default, {
    recognizers: 'swipe',
    swiper: false,
    privateModel: null,
    privateData: Ember.computed('privateModel', function () {
      return this.get('privateModel');
    }),
    actions: {
      // routeToInterList(){
      //   console.log('test')
      // }
      swipeLeft() {
        console.log('swipe');
        // var swipeContainer = document.getElementById('private').getElementsByClassName('swiper-slide-active')
        // var val = swipeContainer[0].dataset.swiperSlideIndex
        // function isOdd(val) {
        //   return Math.abs(val % 2) == 1;
        // }
        this.set('swiper', true);
      }
    }
  });
});
;define('vidya-frontend/components/news/private-list-card', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    actions: {
      fullScreen(_id) {
        var elem = document.getElementById(_id);
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          /* Firefox */
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
          /* Chrome, Safari & Opera */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          /* IE/Edge */
          elem.msRequestFullscreen();
        }
      }
    }
  });
});
;define('vidya-frontend/components/news/random-news-list', ['exports', 'vidya-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
  }
  exports.default = Ember.Component.extend({
    auth: Ember.inject.service(),
    states: Ember.inject.service(),
    router: Ember.inject.service("-routing"),
    showDialog: false,
    init() {
      this._super(...arguments);
    },
    didUpdateAttrs() {
      this._super(...arguments);
    },
    didRender() {
      var that = this;
      this._super(...arguments);
      $(window).blur(function () {
        var elem = document.getElementById(that.get('states.videoId'));
        try {
          elem.pause();
        } catch (ex) {}
      });
      Ember.run.next(this, this.restoreScrollPosition);
      if (this.get("currentSlide") == 0) {
        var height = document.getElementById('news').offsetHeight;
        document.getElementById('swiper-home').style.height = height + "px";
        // var containerScroll = document.querySelector('.scroll-content')
        // var conScroll = containerScroll.scrollTop+438
        // if (conScroll >= height){
        //   console.log('collection')
        //   that.get('loadBelow')()
        // }
        // console.log(containerScroll)
        // console.log(height)

        // that.get('loadBelow')()
      } else if (this.get("currentSlide") == 1) {
        var height = document.getElementById('crs').offsetHeight;
        document.getElementById('swiper-home').style.height = height + "px";
        //   console.log(height)
      }
    },

    restoreScrollPosition() {
      try {
        if (this.get("states.scrollID") && this.get('currentSlide') == 0) {
          document.getElementById('content-list').scrollTop = this.get("states.scrollID");
        }
        this.set("states.scrollID", null);
      } catch (ex) {
        // this.set("states.scrollID", null)
      }
    },
    actions: {
      showShareDialog(item) {
        if (localStorage.getItem('id') == null) {
          this.sendAction("goToLogin");
        } else {

          this.set('item', item);
          this.set("showDialog", true);
        }
      },
      fullScreen(_id, _url) {
        var elem = document.getElementById(_id);
        this.set('states.videoId', _id);
        // if (elem.requestFullscreen) {
        //   elem.requestFullscreen();
        // } else if (elem.mozRequestFullScreen) {
        //   /* Firefox */
        //   elem.mozRequestFullScreen();
        // } else if (elem.webkitRequestFullscreen) {
        //   /* Chrome, Safari & Opera */
        //   elem.webkitRequestFullscreen();
        // } else if (elem.msRequestFullscreen) {
        //   /* IE/Edge */
        //   elem.msRequestFullscreen();
        // }
        window.plugins.webintent.startActivity({
          action: window.plugins.webintent.ACTION_VIEW,
          url: host + _url,
          type: 'video/mp4'
        }, function () {}, function () {
          console.log('Failed to open URL via Android Intent.');
        });
      }
    }
  });
});
;define('vidya-frontend/components/page-bottombar', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('vidya-frontend/components/page-toolbar', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('vidya-frontend/components/paper-autocomplete-content', ['exports', 'ember-paper/components/paper-autocomplete-content'], function (exports, _paperAutocompleteContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperAutocompleteContent.default;
});
;define('vidya-frontend/components/paper-autocomplete-dropdown', ['exports', 'ember-paper/components/paper-autocomplete-dropdown'], function (exports, _paperAutocompleteDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperAutocompleteDropdown.default;
});
;define('vidya-frontend/components/paper-autocomplete-highlight', ['exports', 'ember-paper/components/paper-autocomplete-highlight'], function (exports, _paperAutocompleteHighlight) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperAutocompleteHighlight.default;
    }
  });
});
;define('vidya-frontend/components/paper-autocomplete-options', ['exports', 'ember-paper/components/paper-autocomplete-options'], function (exports, _paperAutocompleteOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperAutocompleteOptions.default;
    }
  });
});
;define('vidya-frontend/components/paper-autocomplete-trigger-container', ['exports', 'ember-paper/components/paper-autocomplete-trigger-container'], function (exports, _paperAutocompleteTriggerContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperAutocompleteTriggerContainer.default;
});
;define('vidya-frontend/components/paper-autocomplete-trigger', ['exports', 'ember-paper/components/paper-autocomplete-trigger'], function (exports, _paperAutocompleteTrigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperAutocompleteTrigger.default;
});
;define('vidya-frontend/components/paper-autocomplete', ['exports', 'ember-paper/components/paper-autocomplete'], function (exports, _paperAutocomplete) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperAutocomplete.default;
    }
  });
});
;define('vidya-frontend/components/paper-backdrop', ['exports', 'ember-paper/components/paper-backdrop'], function (exports, _paperBackdrop) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperBackdrop.default;
});
;define('vidya-frontend/components/paper-button', ['exports', 'ember-paper/components/paper-button'], function (exports, _paperButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperButton.default;
});
;define('vidya-frontend/components/paper-card-actions', ['exports', 'ember-paper/components/paper-card-actions'], function (exports, _paperCardActions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardActions.default;
});
;define('vidya-frontend/components/paper-card-avatar', ['exports', 'ember-paper/components/paper-card-avatar'], function (exports, _paperCardAvatar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardAvatar.default;
});
;define('vidya-frontend/components/paper-card-content', ['exports', 'ember-paper/components/paper-card-content'], function (exports, _paperCardContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardContent.default;
});
;define('vidya-frontend/components/paper-card-header-headline', ['exports', 'ember-paper/components/paper-card-header-headline'], function (exports, _paperCardHeaderHeadline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardHeaderHeadline.default;
});
;define('vidya-frontend/components/paper-card-header-subhead', ['exports', 'ember-paper/components/paper-card-header-subhead'], function (exports, _paperCardHeaderSubhead) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardHeaderSubhead.default;
});
;define('vidya-frontend/components/paper-card-header-text', ['exports', 'ember-paper/components/paper-card-header-text'], function (exports, _paperCardHeaderText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardHeaderText.default;
});
;define('vidya-frontend/components/paper-card-header-title', ['exports', 'ember-paper/components/paper-card-header-title'], function (exports, _paperCardHeaderTitle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardHeaderTitle.default;
});
;define('vidya-frontend/components/paper-card-header', ['exports', 'ember-paper/components/paper-card-header'], function (exports, _paperCardHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardHeader.default;
});
;define('vidya-frontend/components/paper-card-icon-actions', ['exports', 'ember-paper/components/paper-card-icon-actions'], function (exports, _paperCardIconActions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardIconActions.default;
});
;define('vidya-frontend/components/paper-card-image', ['exports', 'ember-paper/components/paper-card-image'], function (exports, _paperCardImage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardImage.default;
});
;define('vidya-frontend/components/paper-card-media', ['exports', 'ember-paper/components/paper-card-media'], function (exports, _paperCardMedia) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardMedia.default;
});
;define('vidya-frontend/components/paper-card-title-media', ['exports', 'ember-paper/components/paper-card-title-media'], function (exports, _paperCardTitleMedia) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardTitleMedia.default;
});
;define('vidya-frontend/components/paper-card-title-text', ['exports', 'ember-paper/components/paper-card-title-text'], function (exports, _paperCardTitleText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardTitleText.default;
});
;define('vidya-frontend/components/paper-card-title', ['exports', 'ember-paper/components/paper-card-title'], function (exports, _paperCardTitle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardTitle.default;
});
;define('vidya-frontend/components/paper-card', ['exports', 'ember-paper/components/paper-card'], function (exports, _paperCard) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCard.default;
});
;define('vidya-frontend/components/paper-checkbox', ['exports', 'ember-paper/components/paper-checkbox'], function (exports, _paperCheckbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCheckbox.default;
});
;define('vidya-frontend/components/paper-chips', ['exports', 'ember-paper/components/paper-chips'], function (exports, _paperChips) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperChips.default;
});
;define('vidya-frontend/components/paper-contact-chips', ['exports', 'ember-paper/components/paper-contact-chips'], function (exports, _paperContactChips) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperContactChips.default;
});
;define('vidya-frontend/components/paper-content', ['exports', 'ember-paper/components/paper-content'], function (exports, _paperContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperContent.default;
});
;define('vidya-frontend/components/paper-dialog-actions', ['exports', 'ember-paper/components/paper-dialog-actions'], function (exports, _paperDialogActions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperDialogActions.default;
    }
  });
});
;define('vidya-frontend/components/paper-dialog-container', ['exports', 'ember-paper/components/paper-dialog-container'], function (exports, _paperDialogContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperDialogContainer.default;
    }
  });
});
;define('vidya-frontend/components/paper-dialog-content', ['exports', 'ember-paper/components/paper-dialog-content'], function (exports, _paperDialogContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperDialogContent.default;
    }
  });
});
;define('vidya-frontend/components/paper-dialog-inner', ['exports', 'ember-paper/components/paper-dialog-inner'], function (exports, _paperDialogInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperDialogInner.default;
    }
  });
});
;define('vidya-frontend/components/paper-dialog', ['exports', 'ember-paper/components/paper-dialog'], function (exports, _paperDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperDialog.default;
    }
  });
});
;define('vidya-frontend/components/paper-divider', ['exports', 'ember-paper/components/paper-divider'], function (exports, _paperDivider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperDivider.default;
});
;define('vidya-frontend/components/paper-form', ['exports', 'ember-paper/components/paper-form'], function (exports, _paperForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperForm.default;
});
;define('vidya-frontend/components/paper-grid-list', ['exports', 'ember-paper/components/paper-grid-list'], function (exports, _paperGridList) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperGridList.default;
    }
  });
});
;define('vidya-frontend/components/paper-grid-tile-footer', ['exports', 'ember-paper/components/paper-grid-tile-footer'], function (exports, _paperGridTileFooter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperGridTileFooter.default;
    }
  });
});
;define('vidya-frontend/components/paper-grid-tile', ['exports', 'ember-paper/components/paper-grid-tile'], function (exports, _paperGridTile) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperGridTile.default;
    }
  });
});
;define('vidya-frontend/components/paper-icon', ['exports', 'ember-paper/components/paper-icon'], function (exports, _paperIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperIcon.default;
});
;define('vidya-frontend/components/paper-ink-bar', ['exports', 'ember-paper/components/paper-ink-bar'], function (exports, _paperInkBar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperInkBar.default;
    }
  });
});
;define('vidya-frontend/components/paper-input', ['exports', 'ember-paper/components/paper-input'], function (exports, _paperInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperInput.default;
});
;define('vidya-frontend/components/paper-item', ['exports', 'ember-paper/components/paper-item'], function (exports, _paperItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperItem.default;
});
;define('vidya-frontend/components/paper-list', ['exports', 'ember-paper/components/paper-list'], function (exports, _paperList) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperList.default;
});
;define('vidya-frontend/components/paper-menu-content-inner', ['exports', 'ember-paper/components/paper-menu-content-inner'], function (exports, _paperMenuContentInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperMenuContentInner.default;
    }
  });
});
;define('vidya-frontend/components/paper-menu-content', ['exports', 'ember-paper/components/paper-menu-content'], function (exports, _paperMenuContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperMenuContent.default;
    }
  });
});
;define('vidya-frontend/components/paper-menu-item', ['exports', 'ember-paper/components/paper-menu-item'], function (exports, _paperMenuItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperMenuItem.default;
    }
  });
});
;define('vidya-frontend/components/paper-menu', ['exports', 'ember-paper/components/paper-menu'], function (exports, _paperMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperMenu.default;
    }
  });
});
;define('vidya-frontend/components/paper-optgroup', ['exports', 'ember-paper/components/paper-optgroup'], function (exports, _paperOptgroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperOptgroup.default;
    }
  });
});
;define('vidya-frontend/components/paper-option', ['exports', 'ember-paper/components/paper-option'], function (exports, _paperOption) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperOption.default;
});
;define('vidya-frontend/components/paper-progress-circular', ['exports', 'ember-paper/components/paper-progress-circular'], function (exports, _paperProgressCircular) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperProgressCircular.default;
    }
  });
});
;define('vidya-frontend/components/paper-progress-linear', ['exports', 'ember-paper/components/paper-progress-linear'], function (exports, _paperProgressLinear) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperProgressLinear.default;
    }
  });
});
;define('vidya-frontend/components/paper-radio-group-label', ['exports', 'ember-paper/components/paper-radio-group-label'], function (exports, _paperRadioGroupLabel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperRadioGroupLabel.default;
    }
  });
});
;define('vidya-frontend/components/paper-radio-group', ['exports', 'ember-paper/components/paper-radio-group'], function (exports, _paperRadioGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperRadioGroup.default;
    }
  });
});
;define('vidya-frontend/components/paper-radio-proxiable', ['exports', 'ember-paper/components/paper-radio-proxiable'], function (exports, _paperRadioProxiable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperRadioProxiable.default;
    }
  });
});
;define('vidya-frontend/components/paper-radio', ['exports', 'ember-paper/components/paper-radio'], function (exports, _paperRadio) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperRadio.default;
    }
  });
});
;define('vidya-frontend/components/paper-reset-button', ['exports', 'ember-paper/components/paper-reset-button'], function (exports, _paperResetButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperResetButton.default;
    }
  });
});
;define('vidya-frontend/components/paper-select-content', ['exports', 'ember-paper/components/paper-select-content'], function (exports, _paperSelectContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectContent.default;
    }
  });
});
;define('vidya-frontend/components/paper-select-header', ['exports', 'ember-paper/components/paper-select-header'], function (exports, _paperSelectHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectHeader.default;
    }
  });
});
;define('vidya-frontend/components/paper-select-menu-inner', ['exports', 'ember-paper/components/paper-select-menu-inner'], function (exports, _paperSelectMenuInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectMenuInner.default;
    }
  });
});
;define('vidya-frontend/components/paper-select-menu-trigger', ['exports', 'ember-paper/components/paper-select-menu-trigger'], function (exports, _paperSelectMenuTrigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSelectMenuTrigger.default;
});
;define('vidya-frontend/components/paper-select-menu', ['exports', 'ember-paper/components/paper-select-menu'], function (exports, _paperSelectMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectMenu.default;
    }
  });
});
;define('vidya-frontend/components/paper-select-options', ['exports', 'ember-paper/components/paper-select-options'], function (exports, _paperSelectOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectOptions.default;
    }
  });
});
;define('vidya-frontend/components/paper-select-search', ['exports', 'ember-paper/components/paper-select-search'], function (exports, _paperSelectSearch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectSearch.default;
    }
  });
});
;define('vidya-frontend/components/paper-select-trigger', ['exports', 'ember-paper/components/paper-select-trigger'], function (exports, _paperSelectTrigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectTrigger.default;
    }
  });
});
;define('vidya-frontend/components/paper-select', ['exports', 'ember-paper/components/paper-select'], function (exports, _paperSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSelect.default;
});
;define('vidya-frontend/components/paper-sidenav-container', ['exports', 'ember-paper/components/paper-sidenav-container'], function (exports, _paperSidenavContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSidenavContainer.default;
    }
  });
});
;define('vidya-frontend/components/paper-sidenav-inner', ['exports', 'ember-paper/components/paper-sidenav-inner'], function (exports, _paperSidenavInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSidenavInner.default;
});
;define('vidya-frontend/components/paper-sidenav-toggle', ['exports', 'ember-paper/components/paper-sidenav-toggle'], function (exports, _paperSidenavToggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSidenavToggle.default;
});
;define('vidya-frontend/components/paper-sidenav', ['exports', 'ember-paper/components/paper-sidenav'], function (exports, _paperSidenav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSidenav.default;
});
;define('vidya-frontend/components/paper-slider', ['exports', 'ember-paper/components/paper-slider'], function (exports, _paperSlider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSlider.default;
});
;define('vidya-frontend/components/paper-snackbar-text', ['exports', 'ember-paper/components/paper-snackbar-text'], function (exports, _paperSnackbarText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSnackbarText.default;
    }
  });
});
;define('vidya-frontend/components/paper-speed-dial-actions-action', ['exports', 'ember-paper/components/paper-speed-dial-actions-action'], function (exports, _paperSpeedDialActionsAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSpeedDialActionsAction.default;
    }
  });
});
;define('vidya-frontend/components/paper-speed-dial-actions', ['exports', 'ember-paper/components/paper-speed-dial-actions'], function (exports, _paperSpeedDialActions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSpeedDialActions.default;
    }
  });
});
;define('vidya-frontend/components/paper-speed-dial-trigger', ['exports', 'ember-paper/components/paper-speed-dial-trigger'], function (exports, _paperSpeedDialTrigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSpeedDialTrigger.default;
    }
  });
});
;define('vidya-frontend/components/paper-speed-dial', ['exports', 'ember-paper/components/paper-speed-dial'], function (exports, _paperSpeedDial) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSpeedDial.default;
    }
  });
});
;define('vidya-frontend/components/paper-step-actions', ['exports', 'ember-paper-stepper/components/paper-step-actions'], function (exports, _paperStepActions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperStepActions.default;
    }
  });
});
;define('vidya-frontend/components/paper-step-body', ['exports', 'ember-paper-stepper/components/paper-step-body'], function (exports, _paperStepBody) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperStepBody.default;
    }
  });
});
;define('vidya-frontend/components/paper-step', ['exports', 'ember-paper-stepper/components/paper-step'], function (exports, _paperStep) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperStep.default;
    }
  });
});
;define('vidya-frontend/components/paper-stepper', ['exports', 'ember-paper-stepper/components/paper-stepper'], function (exports, _paperStepper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperStepper.default;
    }
  });
});
;define('vidya-frontend/components/paper-subheader', ['exports', 'ember-paper/components/paper-subheader'], function (exports, _paperSubheader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSubheader.default;
});
;define('vidya-frontend/components/paper-switch', ['exports', 'ember-paper/components/paper-switch'], function (exports, _paperSwitch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSwitch.default;
});
;define('vidya-frontend/components/paper-tab', ['exports', 'ember-paper/components/paper-tab'], function (exports, _paperTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperTab.default;
    }
  });
});
;define('vidya-frontend/components/paper-tabs', ['exports', 'ember-paper/components/paper-tabs'], function (exports, _paperTabs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperTabs.default;
    }
  });
});
;define('vidya-frontend/components/paper-toast-inner', ['exports', 'ember-paper/components/paper-toast-inner'], function (exports, _paperToastInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperToastInner.default;
    }
  });
});
;define('vidya-frontend/components/paper-toast-text', ['exports', 'ember-paper/components/paper-toast-text'], function (exports, _paperToastText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperToastText.default;
    }
  });
});
;define('vidya-frontend/components/paper-toast', ['exports', 'ember-paper/components/paper-toast'], function (exports, _paperToast) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperToast.default;
    }
  });
});
;define('vidya-frontend/components/paper-toaster', ['exports', 'ember-paper/components/paper-toaster'], function (exports, _paperToaster) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperToaster.default;
    }
  });
});
;define('vidya-frontend/components/paper-toolbar-tools', ['exports', 'ember-paper/components/paper-toolbar-tools'], function (exports, _paperToolbarTools) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperToolbarTools.default;
});
;define('vidya-frontend/components/paper-toolbar', ['exports', 'ember-paper/components/paper-toolbar'], function (exports, _paperToolbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperToolbar.default;
});
;define('vidya-frontend/components/paper-tooltip-inner', ['exports', 'ember-paper/components/paper-tooltip-inner'], function (exports, _paperTooltipInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperTooltipInner.default;
    }
  });
});
;define('vidya-frontend/components/paper-tooltip', ['exports', 'ember-paper/components/paper-tooltip'], function (exports, _paperTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperTooltip.default;
    }
  });
});
;define('vidya-frontend/components/paper-virtual-repeat-scroller', ['exports', 'ember-paper/components/paper-virtual-repeat-scroller'], function (exports, _paperVirtualRepeatScroller) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperVirtualRepeatScroller.default;
});
;define('vidya-frontend/components/paper-virtual-repeat', ['exports', 'ember-paper/components/paper-virtual-repeat'], function (exports, _paperVirtualRepeat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperVirtualRepeat.default;
});
;define('vidya-frontend/components/photo-swipe', ['exports', 'ember-photoswipe/components/photo-swipe'], function (exports, _photoSwipe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _photoSwipe.default;
    }
  });
});
;define('vidya-frontend/components/power-select-multiple', ['exports', 'ember-power-select/components/power-select-multiple'], function (exports, _powerSelectMultiple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectMultiple.default;
    }
  });
});
;define('vidya-frontend/components/power-select-multiple/trigger', ['exports', 'ember-power-select/components/power-select-multiple/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
;define('vidya-frontend/components/power-select', ['exports', 'ember-power-select/components/power-select'], function (exports, _powerSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelect.default;
    }
  });
});
;define('vidya-frontend/components/power-select/before-options', ['exports', 'ember-power-select/components/power-select/before-options'], function (exports, _beforeOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _beforeOptions.default;
    }
  });
});
;define('vidya-frontend/components/power-select/options', ['exports', 'ember-power-select/components/power-select/options'], function (exports, _options) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _options.default;
    }
  });
});
;define('vidya-frontend/components/power-select/placeholder', ['exports', 'ember-power-select/components/power-select/placeholder'], function (exports, _placeholder) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _placeholder.default;
    }
  });
});
;define('vidya-frontend/components/power-select/power-select-group', ['exports', 'ember-power-select/components/power-select/power-select-group'], function (exports, _powerSelectGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectGroup.default;
    }
  });
});
;define('vidya-frontend/components/power-select/search-message', ['exports', 'ember-power-select/components/power-select/search-message'], function (exports, _searchMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _searchMessage.default;
    }
  });
});
;define('vidya-frontend/components/power-select/trigger', ['exports', 'ember-power-select/components/power-select/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
;define('vidya-frontend/components/profile-info-edit', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        updateInfo: Ember.computed('isEditing', function () {
            console.log(this.get('isEditing'));
            return this.get('isEditing');
        }),
        actions: {
            editInfo() {
                this.set("isEditing", true);
                this.set('groupDisplay', false);
                this.set('postDisplay', false);
                this.set('infoDisplay', true);
                this.set('fabButtom', false);
            },
            cancelInfoEdit() {
                this.set("isEditing", false);
                this.set('infoDisplay', true);
                this.set('postDisplay', true);
                this.set("isEditing", true);
                this.set('fabButtom', true);
                this.set('groupDisplay', true);
            }
        }
    });
});
;define('vidya-frontend/components/share-dialog', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    auth: Ember.inject.service(),
    router: Ember.inject.service(),
    showDialog: false,
    didRender() {
      var video = [];
      console.log(document.getElementsByTagName('video').length);
      for (var i = 0; i < document.getElementsByTagName('video').length; i++) {
        video[i] = document.getElementsByTagName('video')[i];
        var $pop = Popcorn(video[i]),
            poster;
        poster = $pop.currentTime(1).capture();
      }
    },
    actions: {
      closeDialog() {
        this.set('showDialog', false);
      },
      share(news) {
        var all_file = [];
        // console.log(news.postImg)
        var news_data = news.postImg;
        for (var i = 0; i < news_data.length; i++) {
          var url = '/uploads/' + news_data[i].file_name;
          var data = { file_name: news_data[i].file_name, type: news_data[i].type, poster: news_data[i].poster, status: news_data[i].status, original_name: null, web_url: url };
          all_file.push(data);
        }
        var newShare = {
          author: news.author,
          breakingNews: news.breakingNews,
          category: news.category,
          channel_id: this.get('auth').userId,
          createDate: news.createDate,
          detail: news.detail,
          header: news.header,
          news_id: news.id,
          shareText: this.get("shareText"),
          postImg: all_file,
          prioritize: news.prioritize,
          section: news.section,
          sourceNews: news.sourceNews,
          shareStamp: news.stamp,
          status: news.status,
          summary: news.summary,
          tags: news.tags,
          title: news.title,
          userinfo: news.userinfo,
          shareuserinfo: { username: this.get('auth').username, userID: this.get('auth').userId, user_url: this.get('auth').user_url },
          sharePost: true

        };
        console.log(newShare);
        var record = this.store.createRecord('social', newShare);
        record.save().then(news => {
          // this.sendAction('goToSocial')
          this.get('router').transitionTo('social');
        });
        this.set('showDialog', false);
      }
    }
  });
});
;define('vidya-frontend/components/social-search-card', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        states: Ember.inject.service(),
        actions: {
            fullScreen(_id) {
                this.set('states.videoId', _id);
                var elem = document.getElementById(_id);
                if (elem.requestFullscreen) {
                    elem.requestFullscreen();
                } else if (elem.mozRequestFullScreen) {
                    /* Firefox */
                    elem.mozRequestFullScreen();
                } else if (elem.webkitRequestFullscreen) {
                    /* Chrome, Safari & Opera */
                    elem.webkitRequestFullscreen();
                } else if (elem.msRequestFullscreen) {
                    /* IE/Edge */
                    elem.msRequestFullscreen();
                }
                var elem = document.getElementById(_id);
                if (elem.requestFullscreen) {
                    elem.requestFullscreen();
                } else if (elem.mozRequestFullScreen) {
                    /* Firefox */
                    elem.mozRequestFullScreen();
                } else if (elem.webkitRequestFullscreen) {
                    /* Chrome, Safari & Opera */
                    elem.webkitRequestFullscreen();
                } else if (elem.msRequestFullscreen) {
                    /* IE/Edge */
                    elem.msRequestFullscreen();
                }
            }
        }
    });
});
;define('vidya-frontend/components/social/share-post', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('vidya-frontend/components/socials/crs-post-card', ['exports', 'vidya-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
  }

  exports.default = Ember.Component.extend({
    states: Ember.inject.service(),
    showAll: false,
    isOverflow: false,
    init() {
      this._super(...arguments);
      new AnimOnScroll(document.getElementById('grid'), {
        minDuration: 0.4,
        maxDuration: 0.7,
        viewportFactor: 1
      });
    },
    didUpdateAttrs() {
      this._super(...arguments);
    },
    didRender() {
      var that = this;
      $(window).blur(function () {
        var elem = document.getElementById(that.get('states.videoId'));
        try {
          elem.pause();
        } catch (ex) {}
      });
      Ember.run.next(this, this.restoreScrollPosition);
    },

    restoreScrollPosition() {
      try {
        if (this.get("states.socialScrollID")) {
          console.log(this.get("states.socialScrollID"));
          document.getElementById("content-list").scrollTop = this.get("states.socialScrollID");
        }
        this.set("states.socialScrollID", null);
      } catch (ex) {}
    },

    didInsertElement() {
      this._super(...arguments);
      try {
        this.set("isOverflow", false);
        var tag = document.getElementById(this.get("index"));
        if (tag.scrollHeight > tag.clientHeight) {
          this.set("isOverflow", true);
        }
      } catch (ex) {}

      var objLink = this.$('div>p>a').each(function (tmp) {
        this.addEventListener('load', () => {});
      });
      objLink.click(this, function (e) {
        e.preventDefault();
        $(this).addClass("clicked");
        window.open($(this)[0].href, '_system');
      });
      const objects = document.getElementsByClassName('asyncImage');
      Array.from(objects).map(item => {
        // Start loading image
        const img = new Image();
        img.src = item.dataset.src;
        // Once image is loaded replace the src of the HTML element
        img.onload = () => {
          item.classList.remove('asyncImage');
          return item.nodeName === 'IMG' ? item.src = item.dataset.src : item.style.backgroundImage = `url(${item.dataset.src})`;
        };
      });
    },
    actions: {
      show() {
        this.toggleProperty('showAll');
        new AnimOnScroll(document.getElementById('grid'), {
          minDuration: 0.4,
          maxDuration: 0.7,
          viewportFactor: 1
        });
      },
      fullScreen(_id, _url) {
        this.set('states.videoId', _id);
        // var elem = document.getElementById(_id);
        // if (elem.requestFullscreen) {
        //   elem.requestFullscreen();
        // } else if (elem.mozRequestFullScreen) {
        //   /* Firefox */
        //   elem.mozRequestFullScreen();
        // } else if (elem.webkitRequestFullscreen) {
        //   /* Chrome, Safari & Opera */
        //   elem.webkitRequestFullscreen();
        // } else if (elem.msRequestFullscreen) {
        //   /* IE/Edge */
        //   elem.msRequestFullscreen();
        // }
        // var elem = document.getElementById(_id);
        // if (elem.requestFullscreen) {
        //   elem.requestFullscreen();
        // } else if (elem.mozRequestFullScreen) {
        //   /* Firefox */
        //   elem.mozRequestFullScreen();
        // } else if (elem.webkitRequestFullscreen) {
        //   /* Chrome, Safari & Opera */
        //   elem.webkitRequestFullscreen();
        // } else if (elem.msRequestFullscreen) {
        //   /* IE/Edge */
        //   elem.msRequestFullscreen();
        // }
        window.plugins.webintent.startActivity({
          action: window.plugins.webintent.ACTION_VIEW,
          url: host + _url,
          type: 'video/mp4'
        }, function () {}, function () {
          console.log('Failed to open URL via Android Intent.');
        });
      }
    }
  });
});
;define('vidya-frontend/components/socials/group-page-card', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('vidya-frontend/components/socials/group-post-card', ['exports', 'vidya-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
  }

  exports.default = Ember.Component.extend({
    states: Ember.inject.service(),
    showAll: false,
    isOverflow: false,
    init() {
      this._super(...arguments);
      new AnimOnScroll(document.getElementById('grid'), {
        minDuration: 0.4,
        maxDuration: 0.7,
        viewportFactor: 1
      });
    },
    didUpdateAttrs() {
      this._super(...arguments);
    },
    didRender() {
      var that = this;
      $(window).blur(function () {
        var elem = document.getElementById(that.get('states.videoId'));
        try {
          elem.pause();
        } catch (ex) {}
      });
      Ember.run.next(this, this.restoreScrollPosition);
    },

    restoreScrollPosition() {
      try {
        if (this.get("states.socialScrollID")) {
          console.log(this.get("states.socialScrollID"));
          document.getElementById("content-list").scrollTop = this.get("states.socialScrollID");
        }
        this.set("states.socialScrollID", null);
      } catch (ex) {}
    },

    didInsertElement() {
      this._super(...arguments);
      try {
        this.set("isOverflow", false);
        var tag = document.getElementById(this.get("index"));
        if (tag.scrollHeight > tag.clientHeight) {
          this.set("isOverflow", true);
        }
      } catch (ex) {}

      var objLink = this.$('div>p>a').each(function (tmp) {
        this.addEventListener('load', () => {});
      });
      objLink.click(this, function (e) {
        e.preventDefault();
        $(this).addClass("clicked");
        window.open($(this)[0].href, '_system');
      });
      const objects = document.getElementsByClassName('asyncImage');
      Array.from(objects).map(item => {
        // Start loading image
        const img = new Image();
        img.src = item.dataset.src;
        // Once image is loaded replace the src of the HTML element
        img.onload = () => {
          item.classList.remove('asyncImage');
          return item.nodeName === 'IMG' ? item.src = item.dataset.src : item.style.backgroundImage = `url(${item.dataset.src})`;
        };
      });
    },

    actions: {
      show() {
        this.toggleProperty('showAll');
        new AnimOnScroll(document.getElementById('grid'), {
          minDuration: 0.4,
          maxDuration: 0.7,
          viewportFactor: 1
        });
      },
      fullScreen(_id, _url) {
        this.set('states.videoId', _id);
        // var elem = document.getElementById(_id);
        // if (elem.requestFullscreen) {
        //     elem.requestFullscreen();
        // } else if (elem.mozRequestFullScreen) {
        //     /* Firefox */
        //     elem.mozRequestFullScreen();
        // } else if (elem.webkitRequestFullscreen) {
        //     /* Chrome, Safari & Opera */
        //     elem.webkitRequestFullscreen();
        // } else if (elem.msRequestFullscreen) {
        //     /* IE/Edge */
        //     elem.msRequestFullscreen();
        // }
        // var elem = document.getElementById(_id);
        // if (elem.requestFullscreen) {
        //     elem.requestFullscreen();
        // } else if (elem.mozRequestFullScreen) {
        //     /* Firefox */
        //     elem.mozRequestFullScreen();
        // } else if (elem.webkitRequestFullscreen) {
        //     /* Chrome, Safari & Opera */
        //     elem.webkitRequestFullscreen();
        // } else if (elem.msRequestFullscreen) {
        //     /* IE/Edge */
        //     elem.msRequestFullscreen();
        // }
        window.plugins.webintent.startActivity({
          action: window.plugins.webintent.ACTION_VIEW,
          url: host + _url,
          type: 'video/mp4'
        }, function () {}, function () {
          console.log('Failed to open URL via Android Intent.');
        });
      }
    }
  });
});
;define('vidya-frontend/components/socials/message-box', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('vidya-frontend/components/socials/message-card', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    ShowProfile: null,
    self: false,
    control: true,
    didInsertElement() {
      //   this._super(...arguments);
      //   var messageCard = this.element
      //   var state  = this.get("states")
      //   // Ember.$('#scrolldown').scrollTop(Ember.$('#scrolldown').get(0).scrollHeight)
      //   state.set("scrollBottom",true)
      //   Ember.$('#scrolldown').scrollTop(Ember.$('#scrolldown').get(0).scrollHeight)
      //
      //   this.$('img').each(function (ele) {
      //     //console.log("each imag",ele)
      //     // this.set("states.scrollBottom",true)
      //     this.addEventListener('load', () => {
      //       $(this).click(this,function(){
      //
      //         //console.debug("opening image",$(this).attr('src'))
      //         try{
      //           window.open = window.inAppBrowserXwalk.open
      //           window.open(`https://chat.hexyn.com${$(this).attr('src')}`)
      //         }catch(ex){}
      //
      //       })
      //       // this.set("states.scrollBottom", this.element.scrollHeight)
      //     // state.set("scrollBottom",true)
      Ember.$('#scrolldown').scrollTop(Ember.$('#scrolldown').get(0).scrollHeight);
      //       // //console.log("image loaded",ele)
      //
      //
      //     });
      //   })
    }
  });
});
;define("vidya-frontend/components/socials/message-container", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    resizer: Ember.inject.service(),
    auth: Ember.inject.service(),
    states: Ember.inject.service(),
    option: false,
    showTools: false,
    filename: "",
    imgdata: "",
    filetype: null,
    iconchanger: true,
    keyboardIsShowing: false,
    keyboard: Ember.inject.service('ember-cordova/keyboard'),

    didInsertElement() {
      this._super();
      // cordova.plugins.Keyboard.show();
      try {
        window.addEventListener('native.keyboardshow', () => {
          this.$('#scrolldown').scrollTop(this.$('#scrolldown').get(0).scrollHeight);
        });
      } catch (ex) {}
      this.get('keyboard').on('keyboardDidShow', this.keyboardDidShow);
      this.get('keyboard').on('keyboardDidHide', this.keyboardDidHide);
    },

    willDestroyElement() {
      this.get('keyboard').off('keyboardDidShow', this.keyboardDidShow);
      this.get('keyboard').off('keyboardDidHide', this.keyboardDidHide);
      this._super();
    },

    // keyboardDidShow() {
    //   this.set('keyboardIsShowing', true);
    //   //console.debug("Keyboard is Showing")
    //   this.$('#scrolldown').scrollTop(this.$('#scrolldown').get(0).scrollHeight)
    //   //console.debug("Scrolled Bottom")
    //
    // },

    keyboardDidHide() {
      this.set('keyboardIsShowing', false);
      //console.debug("Keyboard is Hiding")
    },
    message: Ember.observer("chat", function () {
      // //console.log(this.get('chat').length)
      if (this.get('chat').length === 0) {
        this.set("iconchanger", true);
      } else if (this.get('chat').length > 0) {
        this.set('iconchanger', false);
      }
    }).on('init'),
    classNames: ["layout-column", "message-container"],
    chat: "",
    toBottom: "false",
    sendMsg() {
      var filedata = "";
      // if (this.get('filename') != "") {
      //   // filedata = {'filename': this.get('filename'), 'imgdata': JSON.stringify(this.get('imgdata').split(',')[1]), 'filetype': this.get('filetype')}
      //   filedata = {
      //     'filename': this.get('filename'),
      //     'imgdata': this.get('imgdata'),
      //     'filetype': this.get('filetype')
      //   }
      // }
      if (this.get('iconchanger') === true) {
        this.set("chat", "# &#128077;");
      }
      this.get("recordChat")(this.get("chat"), this.get("states.post_id")['post_id'], filedata);
      this.set('chat', '');
      this.set('filename', '');
      this.set('imgdata', '');
    },

    actions: {
      // scrollBottom() {
      //   this.$('#scrolldown').scrollTop(this.$('#scrolldown').get(0).scrollHeight)
      // },
      //
      // toggleTools() {
      //   this.toggleProperty("showTools")
      // },
      // keyReceived(evt) {
      //   if (evt.keyCode === 13 && evt.shiftKey === true) {
      //     evt.preventDefault();
      //     this.sendMsg()
      //   }
      // },
      // handleChat() {
      //   this.sendMsg()
      // },
      deleteComment(item) {
        item.destroyRecord();
      }
    }
  });
});
;define('vidya-frontend/components/socials/share-post-card', ['exports', 'vidya-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
  }

  exports.default = Ember.Component.extend({
    states: Ember.inject.service(),
    showAll: false,
    isOverflow: false,
    showAllShare: false,
    isOverflowSHare: false,
    init() {
      this._super(...arguments);
      this._super(...arguments);
      new AnimOnScroll(document.getElementById('grid'), {
        minDuration: 0.4,
        maxDuration: 0.7,
        viewportFactor: 1
      });
    },
    didUpdateAttrs() {
      this._super(...arguments);
    },
    didRender() {
      var that = this;
      $(window).blur(function () {
        var elem = document.getElementById(that.get('states.videoId'));
        try {
          elem.pause();
        } catch (ex) {}
      });
      Ember.run.next(this, this.restoreScrollPosition);
    },

    restoreScrollPosition() {
      try {
        if (this.get("states.socialScrollID")) {
          console.log(this.get("states.socialScrollID"));
          document.getElementById("content-list").scrollTop = this.get("states.socialScrollID");
        }
        this.set("states.socialScrollID", null);
      } catch (ex) {}
    },

    didInsertElement() {
      this._super(...arguments);
      try {
        this.set("isOverflow", false);
        var tag = document.getElementById(this.get("index"));
        if (tag.scrollHeight > tag.clientHeight) {
          this.set("isOverflow", true);
        }
      } catch (ex) {}
      try {
        this.set("isOverflowShare", false);
        var tagShare = document.getElementById(this.get("item.id"));
        if (tagShare.scrollHeight > tagShare.clientHeight) {
          this.set("isOverflowShare", true);
        }
      } catch (ex) {}

      var objLink = this.$('div>p>a').each(function (tmp) {
        this.addEventListener('load', () => {});
      });
      objLink.click(this, function (e) {
        e.preventDefault();
        $(this).addClass("clicked");
        window.open($(this)[0].href, '_system');
      });
      const objects = document.getElementsByClassName('asyncImage');
      Array.from(objects).map(item => {
        // Start loading image
        const img = new Image();
        img.src = item.dataset.src;
        // Once image is loaded replace the src of the HTML element
        img.onload = () => {
          item.classList.remove('asyncImage');
          return item.nodeName === 'IMG' ? item.src = item.dataset.src : item.style.backgroundImage = `url(${item.dataset.src})`;
        };
      });
    },

    actions: {
      show() {
        this.toggleProperty('showAll');
        new AnimOnScroll(document.getElementById('grid'), {
          minDuration: 0.4,
          maxDuration: 0.7,
          viewportFactor: 1
        });
      },
      showShare() {
        this.toggleProperty('showAllShare');
        new AnimOnScroll(document.getElementById('grid'), {
          minDuration: 0.4,
          maxDuration: 0.7,
          viewportFactor: 1
        });
      },
      fullScreen(_url) {
        // var elem = document.getElementById(_id);
        // if (elem.requestFullscreen) {
        //   elem.requestFullscreen();
        // } else if (elem.mozRequestFullScreen) {
        //   /* Firefox */
        //   elem.mozRequestFullScreen();
        // } else if (elem.webkitRequestFullscreen) {
        //   /* Chrome, Safari & Opera */
        //   elem.webkitRequestFullscreen();
        // } else if (elem.msRequestFullscreen) {
        //   /* IE/Edge */
        //   elem.msRequestFullscreen();
        // }
        // var elem = document.getElementById(_id);
        // if (elem.requestFullscreen) {
        //   elem.requestFullscreen();
        // } else if (elem.mozRequestFullScreen) {
        //   /* Firefox */
        //   elem.mozRequestFullScreen();
        // } else if (elem.webkitRequestFullscreen) {
        //   /* Chrome, Safari & Opera */
        //   elem.webkitRequestFullscreen();
        // } else if (elem.msRequestFullscreen) {
        //   /* IE/Edge */
        //   elem.msRequestFullscreen();
        // }

        window.plugins.webintent.startActivity({
          action: window.plugins.webintent.ACTION_VIEW,
          url: host + _url,
          type: 'video/mp4'
        }, function () {}, function () {
          alert('Failed to open URL via Android Intent.');
          // console.log('Failed to open URL via Android Intent. URL: ' + theFile.fullPath);
        });
      }
    }
  });
});
;define('vidya-frontend/components/socials/social-card', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    init() {
      this._super(...arguments);
    },
    didRender() {
      //  var value = $("#" + this.get('i')).attr('class')
      //  // for(var i =0; i < this.get('following').length; i++) {
      //   // if(this.get('following')[i] == this.get('item').id) {
      //   if (value === 'circle unfollow') {
      //     console.log(this.get('i') + value)
      //     if ($('#' + this.get('item').id + ' .checkmark').is(":hidden")) {
      //         $('#' + this.get('item').id + ' .checkmark').toggle();

      //       }
      //   }
      //    // }
      //  // }
    }
  });
});
;define('vidya-frontend/components/socials/social-detail-view', ['exports', 'vidya-frontend/config/environment', 'ember-gestures/mixins/recognizers'], function (exports, _environment, _recognizers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
  }
  exports.default = Ember.Component.extend(_recognizers.default, {
    recognizers: 'pan tap press',
    press: {
      time: 2000,
      threshold: 20
    },
    showDownload: Ember.computed('states.download', function () {
      return this.get('states').download;
    }),
    states: Ember.inject.service(),
    downloadfile: Ember.inject.service(),
    didRender() {
      var that = this;
      $(window).blur(function () {
        var elem = document.getElementById(that.get('states.videoId'));
        try {
          elem.pause();
        } catch (ex) {}
      });
    },

    didInsertElement() {
      this._super(...arguments);
      var objLink = this.$('p>a').each(function (tmp) {
        this.addEventListener('load', () => {});
      });
      objLink.click(this, function (e) {
        e.preventDefault();
        $(this).addClass("clicked");
        window.open($(this)[0].href, '_system');
      });
    },

    actions: {
      download() {
        this.set("states.download", true);
      },
      closePromptDialog() {
        this.set("states.download", false);
      },
      open() {
        this.set("states.viewPhoto", true);
      },
      close() {
        this.set("states.viewPhoto", false);
      },
      fullScreen(_id, _url) {
        this.set('states.videoId', _id);
        var elem = document.getElementById(_id);
        // if (elem.requestFullscreen) {
        //   elem.requestFullscreen();
        // } else if (elem.mozRequestFullScreen) {
        //   /* Firefox */
        //   elem.mozRequestFullScreen();
        // } else if (elem.webkitRequestFullscreen) {
        //   /* Chrome, Safari & Opera */
        //   elem.webkitRequestFullscreen();
        // } else if (elem.msRequestFullscreen) {
        //   /* IE/Edge */
        //   elem.msRequestFullscreen();
        // }
        window.plugins.webintent.startActivity({
          action: window.plugins.webintent.ACTION_VIEW,
          url: host + _url,
          type: 'video/mp4'
        }, function () {}, function () {
          console.log('Failed to open URL via Android Intent.');
        });
      },
      downloadimg(url) {
        console.log(url);
        var web_url = host + url[0].web_url;
        this.get("downloadfile").DownloadFile(web_url, 'Download', url[0].file_name);
      }

    }
  });
});
;define('vidya-frontend/components/socials/social-list-card', ['exports', 'vidya-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
  }
  // import subscribe from 'ember-cordova-events/utils/subscribe';
  exports.default = Ember.Component.extend({

    states: Ember.inject.service(),
    auth: Ember.inject.service(),
    showAll: false,
    isOverflow: false,
    init() {
      this._super(...arguments);
      new AnimOnScroll(document.getElementById('grid'), {
        minDuration: 0.4,
        maxDuration: 0.7,
        viewportFactor: 1
      });
    },
    didUpdateAttrs() {
      this._super(...arguments);
    },
    didRender() {
      this._super(...arguments);
      var that = this;
      $(window).blur(function () {
        var elem = document.getElementById(that.get('states.videoId'));
        try {
          elem.pause();
        } catch (ex) {}
      });
      Ember.run.next(this, this.restoreScrollPosition);
    },

    restoreScrollPosition() {
      try {
        if (this.get("states.socialScrollID")) {
          console.log(this.get("states.socialScrollID"));
          document.getElementById("content-list").scrollTop = this.get("states.socialScrollID");
        }
        this.set("states.socialScrollID", null);
      } catch (ex) {}
    },
    didInsertElement() {
      this._super(...arguments);
      try {
        this.set("isOverflow", false);
        var tag = document.getElementById(this.get("index"));
        if (tag.scrollHeight > tag.clientHeight) {
          this.set("isOverflow", true);
        }
      } catch (ex) {}
      var objLink = this.$('div>p>a').each(function (tmp) {
        this.addEventListener('load', () => {});
      });
      objLink.click(this, function (e) {
        e.preventDefault();
        $(this).addClass("clicked");
        window.open($(this)[0].href, '_system');
      });
      const objects = document.getElementsByClassName('asyncImage');
      Array.from(objects).map(item => {
        // Start loading image
        const img = new Image();
        img.src = item.dataset.src;
        // Once image is loaded replace the src of the HTML element
        img.onload = () => {
          item.classList.remove('asyncImage');
          return item.nodeName === 'IMG' ? item.src = item.dataset.src : item.style.backgroundImage = `url(${item.dataset.src})`;
        };
      });
    },
    actions: {
      show() {
        this.toggleProperty('showAll');
        new AnimOnScroll(document.getElementById('grid'), {
          minDuration: 0.4,
          maxDuration: 0.7,
          viewportFactor: 1
        });
      },
      fullScreen(_id, _url) {
        this.set('states.videoId', _id);
        // var elem = document.getElementById(_id);
        // if (elem.requestFullscreen) {
        //   elem.requestFullscreen();
        // } else if (elem.mozRequestFullScreen) {
        //   /* Firefox */
        //   elem.mozRequestFullScreen();
        // } else if (elem.webkitRequestFullscreen) {
        //   /* Chrome, Safari & Opera */
        //   elem.webkitRequestFullscreen();
        // } else if (elem.msRequestFullscreen) {
        //   /* IE/Edge */
        //   elem.msRequestFullscreen();
        // }
        // var elem = document.getElementById(_id);
        // if (elem.requestFullscreen) {
        //   elem.requestFullscreen();
        // } else if (elem.mozRequestFullScreen) {
        //   /* Firefox */
        //   elem.mozRequestFullScreen();
        // } else if (elem.webkitRequestFullscreen) {
        //   /* Chrome, Safari & Opera */
        //   elem.webkitRequestFullscreen();
        // } else if (elem.msRequestFullscreen) {
        //   /* IE/Edge */
        //   elem.msRequestFullscreen();
        // }
        window.plugins.webintent.startActivity({
          action: window.plugins.webintent.ACTION_VIEW,
          url: host + _url,
          type: 'video/mp4'
        }, function () {}, function () {
          console.log('Failed to open URL via Android Intent.');
        });
      }
    }
  });
});
;define('vidya-frontend/components/spinner-circle', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('vidya-frontend/components/swiper-container', ['exports', 'ember-cli-swiper/components/swiper-container'], function (exports, _swiperContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _swiperContainer.default;
    }
  });
});
;define('vidya-frontend/components/swiper-slide', ['exports', 'ember-cli-swiper/components/swiper-slide'], function (exports, _swiperSlide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _swiperSlide.default;
    }
  });
});
;define('vidya-frontend/components/toolbar-noti', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('vidya-frontend/components/torii-iframe-placeholder', ['exports', 'torii/components/torii-iframe-placeholder'], function (exports, _toriiIframePlaceholder) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _toriiIframePlaceholder.default;
});
;define('vidya-frontend/components/transition-group', ['exports', 'ember-css-transitions/components/transition-group'], function (exports, _transitionGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _transitionGroup.default;
    }
  });
});
;define('vidya-frontend/components/under-development-page', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('vidya-frontend/components/user/chat-box', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('vidya-frontend/components/user/chat-card', ['exports', 'vidya-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
  }

  exports.default = Ember.Component.extend({
    states: Ember.inject.service(),
    didInsertElement() {
      Ember.$('#chatscroll').scrollTop(Ember.$('#chatscroll').get(0).scrollHeight);
    },
    actions: {
      fullScreen(_id, _url) {
        this.set('states.videoId', _id);
        // var elem = document.getElementById(_id);
        // if (elem.requestFullscreen) {
        //   elem.requestFullscreen();
        // } else if (elem.mozRequestFullScreen) {
        //   /* Firefox */
        //   elem.mozRequestFullScreen();
        // } else if (elem.webkitRequestFullscreen) {
        //   /* Chrome, Safari & Opera */
        //   elem.webkitRequestFullscreen();
        // } else if (elem.msRequestFullscreen) {
        //   /* IE/Edge */
        //   elem.msRequestFullscreen();
        // }
        // var elem = document.getElementById(_id);
        // if (elem.requestFullscreen) {
        //   elem.requestFullscreen();
        // } else if (elem.mozRequestFullScreen) {
        //   /* Firefox */
        //   elem.mozRequestFullScreen();
        // } else if (elem.webkitRequestFullscreen) {
        //   /* Chrome, Safari & Opera */
        //   elem.webkitRequestFullscreen();
        // } else if (elem.msRequestFullscreen) {
        //   /* IE/Edge */
        //   elem.msRequestFullscreen();
        // }
        window.plugins.webintent.startActivity({
          action: window.plugins.webintent.ACTION_VIEW,
          url: host + _url,
          type: 'video/mp4'
        }, function () {}, function () {
          console.log('Failed to open URL via Android Intent.');
        });
      }
    }
  });
});
;define('vidya-frontend/components/user/chat-container', ['exports', 'vidya-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
    var pilboxHost = _environment.default.pilboxHost;
  }
  exports.default = Ember.Component.extend({
    auth: Ember.inject.service(),
    states: Ember.inject.service(),
    uploadimage: Ember.inject.service(),
    option: false,
    showTools: false,
    filename: "",
    imgdata: "",
    filetype: null,
    iconchanger: true,
    postImg: [],
    keyboardIsShowing: false,
    fileChooser: false,
    chatAddon: false,
    openDialog: Ember.computed('states.openDialog', function () {
      return this.get('states').openDialog;
    }),
    init() {
      this.set('postImg', []);
      this._super(...arguments);
      this.errors = [];
    },

    didInsertElement() {
      this._super();
      // cordova.plugins.Keyboard.show();
      try {
        window.addEventListener('native.keyboardshow', () => {
          this.$('#chatscroll').scrollTop(this.$('#chatscroll').get(0).scrollHeight);
        });
      } catch (ex) {}
    },

    willDestroyElement() {
      this._super();
    },

    keyboardDidShow() {
      this.set('keyboardIsShowing', true);
      this.$('#chatscroll').scrollTop(this.$('#chatscroll').get(0).scrollHeight);
    },

    keyboardDidHide() {
      this.set('keyboardIsShowing', false);
    },

    message: Ember.observer("chat", 'postImg.length', function () {
      if (this.get('chat').length === 0 & this.get('postImg').length === 0) {
        this.set("iconchanger", true);
      } else if (this.get('chat').length > 0 || this.get('postImg').length > 0) {
        this.set('iconchanger', false);
      }
    }).on('init'),
    classNames: ["layout-column", "message-container"],
    chat: "",
    toBottom: "false",
    imgDisplay: Ember.computed('fileChooser', function () {
      console.log(this.get('postImg'));
      return this.get('postImg');
    }),
    progressUpload: Ember.computed('uploadimage.progress', function () {
      return this.get('uploadimage').progress;
    }),
    progressPercentage: Ember.computed('uploadimage.loading', function () {
      return this.get('uploadimage').loading;
    }),
    sendMsg() {
      if (this.get('chat') || this.get('postImg').length > 0) {
        this.get("recordChat")(this.get("chat"), this.get("states.channel_id")['channel_id'], this.get('postImg'));
        this.set('chat', '');
        this.set('postImg', []);
        this.dataChanges();
      }
    },

    actions: {
      closeDialogWithParent() {
        this.set('states.openDialog', false);
      },
      ok() {
        this.get('uploadimage').cancelUpload();
        this.set("states.openDialog", false);
        window.history.back();
      },
      scrollBottom() {
        this.$('#chatscroll').scrollTop(this.$('#chatscroll').get(0).scrollHeight);
      },

      toggleTools() {
        this.toggleProperty("showTools");
      },
      keyReceived(evt) {
        if (evt.keyCode === 13 && evt.shiftKey === true) {
          evt.preventDefault();
          this.sendMsg();
        }
      },
      handleChat() {
        this.sendMsg();
      },
      selectCamera() {
        var that = this;

        function error(e) {
          console.log(e + 'error');
        }

        function success(imageData) {
          that.convertFile(imageData, 'image');
        }
        navigator.camera.getPicture(success, error, {
          quality: 80,
          destinationType: Camera.DestinationType.DATA_URL
        });
      },
      //     selectVideo(){
      //       var that = this;
      //       that.set('uploadimage.progress', true)
      //       var captureSuccess = function(mediaFile) {
      //         function getFileContentAsBase64(path, callback) {
      //           window.resolveLocalFileSystemURL(path, gotFile, fail);

      //           function fail(e) {
      //             alert('Cannot found requested file');
      //           }

      //           function gotFile(fileEntry) {
      //             fileEntry.file(function(file) {
      //               var reader = new FileReader();
      //               reader.onloadend = function(e) {
      //                 var content = this.result;
      //                 callback(content);
      //               };
      //               // The most important point, use the readAsDatURL Method from the file plugin
      //               reader.readAsDataURL(file);
      //             });
      //       }

      //       function success(imageData) {
      //         that.convertFile(imageData, 'image')
      //       }
      //       navigator.camera.getPicture(success, error, {
      //         quality: 80,
      //         destinationType: Camera.DestinationType.DATA_URL
      //       })
      //     }
      //   }
      // },
      selectVideo() {
        var that = this;
        var captureSuccess = function (mediaFile) {
          function getFileContentAsBase64(path, callback) {
            window.resolveLocalFileSystemURL(path, gotFile, fail);

            function fail(e) {
              alert('Cannot found requested file');
            }

            function gotFile(fileEntry) {
              fileEntry.file(function (file) {
                var reader = new FileReader();
                reader.onloadend = function (e) {
                  var content = this.result;
                  callback(content);
                };
                // The most important point, use the readAsDatURL Method from the file plugin
                reader.readAsDataURL(file);
              });
            }

            function success(imageData) {
              that.set('uploadimage.progress', true);
              that.set("states.cancelDisable", true);
              that.convertFile(imageData, 'image');
            }
            navigator.camera.getPicture(success, error, {
              quality: 80,
              destinationType: Camera.DestinationType.DATA_URL
            });
          }
        };
      },
      selectVideo() {
        var that = this;

        var captureSuccess = function (mediaFile) {
          function getFileContentAsBase64(path, callback) {
            window.resolveLocalFileSystemURL(path, gotFile, fail);

            function fail(e) {
              alert('Cannot found requested file');
            }

            function gotFile(fileEntry) {
              fileEntry.file(function (file) {
                var reader = new FileReader();
                reader.onloadend = function (e) {
                  var content = this.result;
                  callback(content);
                };
                // The most important point, use the readAsDatURL Method from the file plugin
                reader.readAsDataURL(file);
              });
            }
          }
          var path = mediaFile[0].fullPath;

          // Convert image
          getFileContentAsBase64(path, function (base64Video) {
            that.set('uploadimage.progress', true);
            that.set("states.cancelDisable", true);
            that.convertFile(base64Video, 'video');
            // Then you'll be able to handle the myimage.png file as base64
          });
        };
        // capture error callback
        var captureError = function (error) {
          navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
        };

        // start video capture
        navigator.device.capture.captureVideo(captureSuccess, captureError, {
          limit: 1, quality: 0
        });
      },
      deleteImg(data, option) {
        var _id = {
          'fileid': data.file_name
        };
        var that = this;
        Ember.$.ajax({
          type: 'post',
          url: `${host}/upload/remove`,
          data: _id,
          dataType: 'json',
          success: function (response) {
            that.get('postImg').splice(that.get('postImg').findIndex(e => e.file_name === data.file_name), 1);
            that.dataChanges();
          }
        });
      },
      selectImg(result) {
        this.get("uploadimage").uploadFiles(result, this.get("postImg"));
      },
      chatMenu() {
        this.set('chatAddon', true);
      },
      chatMenuoff() {
        this.set('chatAddon', false);
      },
      getVoice() {
        var that = this;

        var captureSuccess = function (mediaFile) {
          function getFileContentAsBase64(path, callback) {
            window.resolveLocalFileSystemURL(path, gotFile, fail);

            function fail(e) {
              alert('Cannot found requested file');
            }

            function gotFile(fileEntry) {
              fileEntry.file(function (file) {
                var reader = new FileReader();
                reader.onloadend = function (e) {
                  var content = this.result;
                  callback(content);
                };
                // The most important point, use the readAsDatURL Method from the file plugin
                reader.readAsDataURL(file);
              });
            }
          }
          var path = mediaFile[0].fullPath;

          // Convert image
          getFileContentAsBase64(path, function (base64Voice) {
            // console.log(base64Voice)
            that.set('uploadimage.progress', true);
            that.set("states.cancelDisable", true);
            that.convertFile(base64Voice, 'voice');
            // that.convertFile(base64Image, 'voice')
            // Then you'll be able to handle the myimage.png file as base64
          });
        };
        // capture error callback
        var captureError = function (error) {
          navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
        };
        // start audio capture
        navigator.device.capture.captureAudio(captureSuccess, captureError, {
          limit: 1
        });
      }
    },
    convertFile(imageData, type) {
      var mime = '';
      var filename = '';
      function dataURLtoFile(dataurl, filetype) {
        console.log(dataurl);
        try {
          var bstr = atob(dataurl.split(',')[1]);
        } catch (ex) {
          var bstr = atob(dataurl);
        }
        var n = bstr.length;
        var byteNumbers = new Array(bstr.length);
        for (var i = 0; i < bstr.length; i++) {
          byteNumbers[i] = bstr.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray], {
          type: filetype
        });
      }
      if (type == 'image') {
        var dataURI = "data:image/png;base64," + +imageData;
        var file = dataURLtoFile(imageData, ':image/png');
        this.get("uploadimage").uploadProcess(file, type, 'tmp.png', this.get("postImg"));
      } else {
        var dataURI = "data:video/mp4;base64," + +imageData;
        var file = dataURLtoFile(imageData, ':image/mp4');
        this.get("uploadimage").uploadProcess(file, type, 'tmp.mp4', this.get("postImg"));
      }
    },
    dataChanges() {
      if (this.get('fileChooser') === true) {
        this.set('fileChooser', false);
      } else {
        this.set('fileChooser', true);
      }
    }
  });
});
;define('vidya-frontend/components/user/chat-list-card', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('vidya-frontend/components/user/fullscreen-img', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: 'img',
    attributeBindings: ['src', 'width', 'height'],
    fullscreen: Ember.inject.service(),

    click() {
      this.get('fullscreen').toggle(this.element);
    }
  });
});
;define('vidya-frontend/components/user/group-list-card', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('vidya-frontend/components/user/group-pic', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        uploadInProcess: false,
        nameCheck: false,
        profilePicture: [],
        states: Ember.inject.service(),
        uploadimage: Ember.inject.service(),
        coverPhoto: [{
            'src': 'cover.png',
            'w': 500,
            'h': 500
        }],
        upload: Ember.observer("uploadimage.uploaded", function () {
            if (this.get('uploadimage.uploaded') == true & this.get('profilePicture').length > 0) {
                var that = this;
                this.store.findRecord('channel', this.get("currentid")).then(function (user) {
                    console.log(that.get('profilePicture')[0]);
                    user.set('postImg', that.get('profilePicture'));
                    // that.set('auth.user_url', that.get('profilePicture')[0])
                    user.save();
                    that.set("uploadInProcess", false);
                    that.set('profilePicture', []);
                    that.set("uploadimage.process", []);
                });
            }
        }),

        actions: {
            open() {
                this.set("states.viewPhoto", true);
            },
            close() {
                this.set("states.viewPhoto", false);
            },
            displayInfo() {
                this.set('showDialog', true);
            },
            displayInfo() {
                this.set('showDialog', true);
            },
            uploadPicture(result) {
                this.set("uploadInProcess", true);
                this.get('uploadimage').uploadFiles(result, this.get("profilePicture"));
            },
            groupName() {
                this.set("nameCheck", true);
                console.log("HERE");
            },
            endPicture() {
                console.log("re");
            },
            keyDownReceived(evt) {
                if (evt.keyCode === 13) {
                    console.log("ee");
                    evt.preventDefault();
                    var that = this;
                    this.store.findRecord('channel', this.get("currentid")).then(function (user) {
                        user.set("channelname", that.get("name"));
                        user.save().then(() => {
                            that.set("nameCheck", false);
                        });
                    });
                }
            }
        }
    });
});
;define('vidya-frontend/components/user/profile-card', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    didRender() {
      var video = [];
      console.log(document.getElementsByTagName('video').length);
      for (var i = 0; i < document.getElementsByTagName('video').length; i++) {
        video[i] = document.getElementsByTagName('video')[i];
        var $pop = Popcorn(video[i]),
            poster;
        poster = $pop.currentTime(0.1).capture();
      }
    }
  });
});
;define("vidya-frontend/components/user/profile-pic", ["exports", "vidya-frontend/config/environment"], function (exports, _environment) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    if (_environment.default.environment === "development") {
        var host = _environment.default.localHost;
    } else if (_environment.default.environment === "production") {
        var host = _environment.default.remoteHost;
    }

    exports.default = Ember.Component.extend({
        auth: Ember.inject.service(),
        states: Ember.inject.service(),
        uploadimage: Ember.inject.service(),
        uploadInProcess: false,
        buttonCheck: false,
        profilePicture: [],
        oldPicture: null,
        coverPhoto: [{
            'src': 'cover.png',
            'w': 500,
            'h': 500
        }],

        follow: Ember.computed('auth.following', function () {
            return this.get("auth.following");
        }),
        upload: Ember.observer("uploadimage.uploaded", function () {
            if (this.get('uploadimage.uploaded') == true & this.get('profilePicture').length > 0) {
                var that = this;
                this.store.findRecord('userprofile', this.get("currentid")).then(function (user) {
                    console.log(that.get('profilePicture')[0]);
                    that.set('oldPicture', user.get('user_url.web_url'));
                    user.set('user_url', that.get('profilePicture')[0]);
                    that.set('auth.user_url', that.get('profilePicture')[0]);
                    user.save();
                    that.set("uploadInProcess", false);
                    that.set('profilePicture', []);
                    that.set("uploadimage.process", []);
                    if (that.get('oldPicture') != "/customer.png") {
                        var file = that.get('oldPicture').split("/");
                        that.deletePicture(file[2]);
                    }
                });
            }
        }),
        userID: Ember.computed('auth.userId', function () {
            return this.get("auth.userId");
        }),
        isOpen: Ember.computed('buttonCheck', function () {
            for (var i = 0; i < this.get('follow').length; i++) {
                if (this.get("follow")[i] === this.get('currentid')) {
                    console.log(false);
                    return false;
                }
            }
            console.log(true);
            return true;
        }),

        actions: {
            open() {
                this.set("states.viewPhoto", true);
            },
            close() {
                this.set("states.viewPhoto", false);
            },
            changeStatus(_id, option, item) {
                console.log(_id);
                var otherinfo = { username: item.username, userId: item.id, role: item.role, user_url: item.user_url };
                var usr_id = _id;
                console.log(otherinfo);
                var data = { 'usr_id': usr_id, '_id': _id, 'option': option };
                var comp = document.getElementById("click");
                if (comp.textContent.trim() === 'Follow') {
                    comp.textContent = 'Unfollow';
                    if (this.get('buttonCheck') === true) {
                        this.set('buttonCheck', false);
                    } else {
                        this.set('buttonCheck', true);
                    }
                    // Ember.$("#click").addClass('unfollow-btn');
                    // Ember.$("#click").removeClass("follow-btn");
                    // comp.setAttribute('class', 'unfollow-btn md-default-theme md-button md-primary md-raised ember-view')
                    this.followChanges(data, 'check', otherinfo);
                } else if (comp.textContent.trim() === 'Unfollow') {
                    comp.textContent = 'Follow';
                    if (this.get('buttonCheck') === true) {
                        this.set('buttonCheck', false);
                    } else {
                        this.set('buttonCheck', true);
                    }
                    // Ember.$("#click").addClass('follow-btn');
                    // Ember.$("#click").removeClass("unfollow-btn");
                    // comp.setAttribute('class', 'follow-btn md-default-theme md-button md-primary md-raised ember-view')
                    this.followChanges(data, 'uncheck', otherinfo);
                }
            },
            uploadPicture(result) {
                this.set("uploadInProcess", true);
                var enduser = this.store.peekAll("userprofile").toArray();
                // this.store.queryRecord('userprofile', {"id": this.get("currentid"), "web_url": enduser[0].user_url.web_url})
                this.get('uploadimage').uploadFiles(result, this.get("profilePicture"));
            },
            displayInfo() {
                this.set('showDialog', true);
            },
            editInfo() {
                this.set("isEditing", true);
            }
        },
        deletePicture(id) {
            var _id = {
                'fileid': id
            };
            var that = this;
            Ember.$.ajax({
                type: 'post',
                url: `${host}/upload/remove`,
                data: _id,
                dataType: 'json',
                success: function (response) {}
            });
        },
        followChanges(data, option, otherinfo) {
            function removeA(arr) {
                var what,
                    a = arguments,
                    L = a.length,
                    ax;
                while (L > 1 && arr.length) {
                    what = a[--L];
                    while ((ax = arr.indexOf(what)) !== -1) {
                        arr.splice(ax, 1);
                    }
                }
                return arr;
            }
            if (option === 'check') {
                this.get('auth.following').push(data._id);
            } else {
                removeA(this.get("auth.following"), data._id);
            }
            var userinfo = { username: this.get('auth.username'), userId: this.get('auth.userId'), role: this.get('auth.role'), user_url: this.get('auth.user_url') };
            console.log(data.option);
            this.store.findRecord("enduser", data.usr_id).then(usr => {
                if (data.option === 'news') {
                    usr.set('channel_id', data._id);
                } else {
                    usr.set('otherinfo', otherinfo);
                }
                usr.set('info', userinfo);
                usr.set('check', { option: option, user: data.option, follow: "follow" });
                usr.save();
            });
        }
    });
});
;define('vidya-frontend/components/user/profile-user-card', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('vidya-frontend/components/vertical-collection', ['exports', '@html-next/vertical-collection/components/vertical-collection/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('vidya-frontend/components/videojs-base', ['exports', 'ember-videojs/components/videojs-base'], function (exports, _videojsBase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _videojsBase.default;
    }
  });
});
;define('vidya-frontend/components/videojs-player', ['exports', 'ember-videojs/components/videojs-player'], function (exports, _videojsPlayer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _videojsPlayer.default;
    }
  });
});
;define('vidya-frontend/components/virtual-each', ['exports', 'virtual-each/components/virtual-each/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
;define('vidya-frontend/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define('vidya-frontend/components/x-file-input', ['exports', 'emberx-file-input/components/x-file-input'], function (exports, _xFileInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xFileInput.default;
    }
  });
});
;define('vidya-frontend/components/x-tab', ['exports', 'ember-x-tabs/components/x-tab'], function (exports, _xTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xTab.default;
    }
  });
});
;define('vidya-frontend/components/x-tab/nav-item', ['exports', 'ember-x-tabs/components/x-tab/nav-item'], function (exports, _navItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _navItem.default;
    }
  });
});
;define('vidya-frontend/components/x-tab/nav-wrap', ['exports', 'ember-x-tabs/components/x-tab/nav-wrap'], function (exports, _navWrap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _navWrap.default;
    }
  });
});
;define('vidya-frontend/components/x-tab/navigation', ['exports', 'ember-x-tabs/components/x-tab/navigation'], function (exports, _navigation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _navigation.default;
    }
  });
});
;define('vidya-frontend/components/x-tab/pane', ['exports', 'ember-x-tabs/components/x-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
;define('vidya-frontend/components/x-tabs-pane-data', ['exports', 'ember-x-tabs/components/x-tabs-pane-data'], function (exports, _xTabsPaneData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xTabsPaneData.default;
    }
  });
});
;define('vidya-frontend/components/x-tabs-pane', ['exports', 'ember-x-tabs/components/x-tabs-pane'], function (exports, _xTabsPane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xTabsPane.default;
    }
  });
});
;define('vidya-frontend/components/x-tabs-panes', ['exports', 'ember-x-tabs/components/x-tabs-panes'], function (exports, _xTabsPanes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xTabsPanes.default;
    }
  });
});
;define('vidya-frontend/components/x-tabs-tab', ['exports', 'ember-x-tabs/components/x-tabs-tab'], function (exports, _xTabsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xTabsTab.default;
    }
  });
});
;define('vidya-frontend/components/x-tabs-tabs', ['exports', 'ember-x-tabs/components/x-tabs-tabs'], function (exports, _xTabsTabs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xTabsTabs.default;
    }
  });
});
;define('vidya-frontend/components/x-tabs', ['exports', 'ember-x-tabs/components/x-tabs'], function (exports, _xTabs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xTabs.default;
    }
  });
});
;define('vidya-frontend/controllers/application', ['exports', 'vidya-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
  }
  exports.default = Ember.Controller.extend({
    paperTheme: Ember.inject.service(),
    showHide: false,
    uploadimage: Ember.inject.service(),
    states: Ember.inject.service(),
    routing: Ember.inject.service('-routing'),
    auth: Ember.inject.service(),
    sortDate: ['stamp:desc'],
    sortedNews: Ember.computed.sort('liveNews', 'sortDate'),
    subRoute: false,
    online: false,
    offline: Ember.computed.not('online'),
    messaging: Ember.inject.service("messagebus"),
    groupUser: [],
    checktype: "",
    currentRoute: Ember.computed('routing.currentRouteName', function () {
      if (this.get('routing.currentRouteName') == 'home') {
        this.set('states.currentRoute', 'V-News');
        return 'News';
      } else if (this.get('routing.currentRouteName') == 'discuss.chat') {
        this.set('states.currentRoute', 'V-discuss');
        return 'Comment';
      } else if (this.get('routing.currentRouteName') == 'entertainment.home') {
        this.set('states.currentRoute', 'V-entertainment.home');
        return 'Live';
      } else if (this.get('routing.currentRouteName') == 'user.chat-list') {
        this.set('states.currentRoute', 'V-user.chat-list');
        return 'Chat List';
      } else if (this.get('routing.currentRouteName') == 'user.chat') {
        this.set('states.currentRoute', 'V-user.chat');
        return 'Chat';
      } else if (this.get('routing.currentRouteName') == 'entertainment.loading') {
        this.set('states.currentRoute', 'V-entertainment.loading');
        return 'Loading';
      } else if (this.get('routing.currentRouteName') == 'news.category') {
        this.set('states.currentRoute', 'V-news.category');
        return 'Category';
      } else if (this.get('routing.currentRouteName') == 'index') {
        this.set('states.currentRoute', 'V-index');
        return 'Similatary News';
      } else if (this.get('routing.currentRouteName') == 'news-detail') {
        this.set('states.currentRoute', 'V-news-detail');
        return 'Detail';
      } else if (this.get('routing.currentRouteName') == 'user.profile') {
        this.set('states.currentRoute', 'V-user.profile');
        return 'Profile';
      } else if (this.get('routing.currentRouteName') == 'news.create-crs') {
        this.set('states.currentRoute', 'V-news.create-crs');
        return 'CRS Share';
      } else if (this.get('routing.currentRouteName') == 'discuss.edit-social') {
        this.set('states.currentRoute', 'V-discuss.edit-social');
        return 'Edit';
      } else if (this.get('routing.currentRouteName') == 'news.create-share') {
        this.set('states.currentRoute', 'V-news.create-share');
        return 'Share';
      } else if (this.get('routing.currentRouteName') == 'user.group-chat-list') {
        this.set('states.currentRoute', 'V-user.group-chat-list');
        return 'Group Chat List';
      } else if (this.get('routing.currentRouteName') == 'user.profile') {
        this.set('states.currentRoute', 'V-user.profile');
        return 'Profile';
      } else if (this.get('routing.currentRouteName') == 'user.chat-list') {
        this.set('states.currentRoute', 'V-user.chat-list');
        return 'Chat List';
      } else if (this.get('routing.currentRouteName') == 'discuss.create-social') {
        this.set('states.currentRoute', 'V-discuss.create-social');
        return 'Create Post';
      } else if (this.get('routing.currentRouteName') == 'user.profile-info') {
        this.set('states.currentRoute', 'V-user.profile-info');
        return 'Profile Edit';
      } else if (this.get('routing.currentRouteName') == 'user.find-friends') {
        this.set('states.currentRoute', 'V-user.find-friends');
        return 'Find Friends';
      } else if (this.get('routing.currentRouteName') == 'social') {
        this.set('states.currentRoute', 'V-social');
        return 'Social';
      } else if (this.get('routing.currentRouteName') == 'social-search') {
        this.set('states.currentRoute', 'V-social-search');
        return 'Social Search';
      } else if (this.get('routing.currentRouteName') == 'user.loading') {
        this.set('states.currentRoute', 'V-user.loading');
        return 'Loading';
      } else if (this.get('routing.currentRouteName') == 'news.loading') {
        this.set('states.currentRoute', 'V-news.loading');
        return 'Loading';
      } else if (this.get('routing.currentRouteName') == 'news.search-category') {
        this.set('states.currentRoute', 'V-news.search-category');
        return 'News Category';
      } else if (this.get('routing.currentRouteName') == 'user.group-chat-detail') {
        this.set('states.currentRoute', 'V-user.group-chat-detail');
        return 'Group Detail';
      } else if (this.get('routing.currentRouteName') == 'user.groupchat') {
        this.set('states.currentRoute', 'V-user.groupchat');
        return 'Group Member Add';
      } else if (this.get('routing.currentRouteName') == 'entertainment.live-detail') {
        this.set('states.currentRoute', 'V-entertainment.live-detail');
        return 'Live Detail';
      } else if (this.get('routing.currentRouteName') == 'login') {
        this.set('states.currentRoute', 'V-login');
        return 'Login';
      } else {
        this.set('states.currentRoute', 'V-' + this.get('routing.currentRouteName'));
        return this.get('routing.currentRouteName');
      }
    }),
    liveNews: Ember.computed("model", function () {
      return this.store.peekAll("breaking");
    }),
    currentUser: Ember.computed('auth', function () {
      return this.get('auth.user_url');
    }),
    currentid: Ember.computed('auth', function () {
      return this.get('auth.userId');
    }),
    checkChattype: Ember.observer("states.chat_type", function () {
      let data = this.get('states.chat_type');
      this.set('checktype', data);
    }).on('init'),
    groupuserlist: Ember.observer("states.groupChat", function () {
      let model = this.store.peekAll('groupchat');
      this.set('groupUser', model.toArray());
    }).on('init'),
    init() {
      this.set('online', navigator.onLine);
      var _this = this;
      var reqUrl = '';
      reqUrl = `${host}/user/current`;
      var updateStatus = function () {
        _this.set('online', navigator.onLine);
        if (_this.get('online')) {
          Ember.Logger.info('Connection status: User has gone online');
          Ember.$.ajax({
            url: reqUrl,
            data: {
              'fbuserId': _this.get('auth.fbuserId'),
              'phone': _this.get('auth.phone'),
              'status': 'Active'
            },
            dataType: 'json',
            type: 'GET',
            success: function (json_data) {
              // var json_data = JSON.parse(data.user)
              console.log("settting accessToken from fetch()", json_data.user);
            }
          });
        } else {
          var messaging = _this.get('messaging');
          messaging.stop('UsersChanges/*');
          Ember.Logger.info('Connection status: User has gone offline');
        }
      };
      window.addEventListener('online', updateStatus);
      window.addEventListener('offline', updateStatus);
    },
    chatUserProfile: Ember.computed('states.chatUser', function () {
      return this.get('states.chatUser');
    }),
    chatName: Ember.computed('states.chatUserName', function () {
      return this.get('states.chatUserName');
    }),
    channelname: Ember.computed('states.groupname', function () {
      return this.get('states.groupname');
    }),

    actions: {
      gotogroupdetail() {
        this.transitionToRoute('/user/group-chat-detail/' + this.get("states.channel_id").channel_id);
      },

      routeToGroup() {
        this.transitionToRoute("user.groupchat");
        this.set("states.groupedit", false);
        this.set("states.channel_id", '');
      },
      toggle(prompName) {

        this.toggleProperty(prompName);
      },
      routeToHome() {
        //       try {
        //       this.get('paperTheme').uninstallTheme('main');
        //     }
        //     catch(ex) {
        //
        //     }
        // $('.main div').on('click', function() {
        //   $('div').removeClass('active');
        //   $(this).addClass('active');
        // });
        this.transitionToRoute('home');
      },
      fastView(post_id) {
        this.transitionToRoute('news-detail', {
          queryParams: {
            post_id: post_id
          }
        });
      },
      routeToSocial() {
        //       this.get('paperTheme').installTheme('main', {
        //         primary: this.get('primary').palette,
        //         accent: this.get('accent').palette,
        //         warn: this.get('warn').palette
        //       });
        var startup = localStorage.getItem('startup');
        if (startup == null) startup = 'false';
        var element = document.getElementById("js-autoplay");
        element.classList.remove("checked");
        console.log(startup);
        console.log(this.get('subRoute'));
        if (startup === 'false' & this.get('subRoute') === false) {
          console.log('GoTosocial');
          if (this.get('states.currentRoute') != 'V-social') {
            this.store.unloadAll('social');
          }
          this.transitionToRoute('social');
        } else if (startup === 'true') {
          this.transitionToRoute('startup');
        }
        this.set('subRoute', false);
      },
      routeToEnter() {
        //       this.get('paperTheme').installTheme('main', {
        //         primary: this.get('primaryEnter').palette,
        //         accent: this.get('accentEnter').palette,
        //         warn: this.get('warnEnter').palette
        //       });
        this.transitionToRoute('entertainment.home');
      },
      routeToCategory() {
        this.transitionToRoute('news.category');
      },
      routeToSetting() {
        this.transitionToRoute('setting');
      },
      routeToProfile(_id) {
        if (this.get('states.chooser')) {
          this.set('states.chooser', false);
        } else {
          this.set('states.chooser', true);
        }
        var _id = this.get("auth").userId.toString();
        if (this.get("states.profileId") == this.get("auth").userId && this.get('routing.currentRouteName') === "user.profile") {} else {
          this.store.unloadAll('social');
        }
        var element = document.getElementById("js-autoplay");
        if (element.classList.contains('checked')) {
          this.set('subRoute', true);
          element.classList.remove("checked");
          this.transitionToRoute("/user/profile/" + _id);
        }
      },
      routeToSearch() {

        var element = document.getElementById("js-autoplay");
        if (element.classList.contains('checked')) {
          this.set('subRoute', true);
          element.classList.remove("checked");
          this.transitionToRoute('startup');
        }
      },
      routeToChat() {

        var element = document.getElementById("js-autoplay");
        if (element.classList.contains('checked')) {
          this.set('subRoute', true);
          element.classList.remove("checked");
          this.transitionToRoute('user.chat-list');
        }
      },
      routeToNoti() {
        this.transitionToRoute('notification');
      },
      backToRoute() {
        console.log(this.get('currentRoute'));
        if (this.get('currentRoute') == 'V-user.profile') {
          this.store.unloadAll('social');
        }
        if (this.get('currentRoute') == "V-discuss.create-social" && this.get('uploadimage.progress')) {
          if (!this.get("states.cancelDisable")) {

            this.set("states.openDialog", true);
          }
        } else if (this.get('currentRoute') == "V-user.chat" && this.get('uploadimage.progress')) {
          if (!this.get("states.cancelDisable")) {

            this.set("states.openDialog", true);
          }
        } else {
          console.log(this.get('states.currentRoute'));
          window.history.back();
        }
      },
      layoutView() {
        if (this.get('states.layoutChoose')) {
          this.set('states.layoutChoose', false);
        } else {
          this.set('states.layoutChoose', true);
        }
      },
      social_fullSearch() {
        if (this.get('social_showHide')) {
          this.set('social_showHide', false);
        } else {
          this.set('social_showHide', true);
        }
      },
      fullSearch() {
        if (this.get('showHide')) {
          this.transitionToRoute('social');
        } else {
          this.set('showHide', true);
        }
      },
      social_clearData() {
        this.set('socialsearchData', '');
        this.set('social_showHide');
      },
      category_clearData() {
        this.set("searchData", "");
      },
      keyReceived(evt) {
        var that = this;
        if (evt.keyCode === 13) {
          evt.preventDefault();
          that.set('states.searchNews', 'keyword');
          that.transitionToRoute('/news/search-category/' + this.get('searchData'));
        }
      },
      userReceived(evt) {
        if (evt.keyCode === 13) {
          evt.preventDefault();
          this.set('states.searchUsers', this.get('startupsearchData'));
          // that.transitionToRoute('/news/search-category/'+this.get('searchData'));
          // this.transitionToRoute('startup');
        }
      },
      socialReceived(evt) {
        console.log("received");
        if (evt.keyCode === 13) {
          evt.preventDefault();
          this.transitionToRoute("/social-search/" + this.get('socialsearchData'));
          // that.transitionToRoute('/news/search-category/'+this.get('searchData'));
          // this.transitionToRoute('startup');
        }
      },
      startup_fullSearch() {
        if (this.get('startup_showHide')) {
          this.set('startup_showHide', false);
        } else {
          this.set('startup_showHide', true);
        }
      },
      startup_clearData() {
        this.set('startupsearchData', '');
        this.set('states.searchUsers', '');
        if (this.get('states.searchClear') == true) {
          this.set('states.searchClear', false);
        } else {
          this.set("states.searchClear", true);
        }
      },
      logout() {
        localStorage.setItem('accessToken', '');
        localStorage.setItem('fbuserId', '');
        localStorage.setItem('id', '');
        localStorage.setItem('phone', '');
        this.get('session').close();
        window.location.reload();
      },
      routeToWall() {
        console.log(this.get('auth.userId'));
        this.store.unloadAll('social');
        this.transitionToRoute("/user/profile/" + this.get('auth.userId'));
      }
    }
  });
});
;define('vidya-frontend/controllers/bottombar', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        auth: Ember.inject.service(),
        userID: Ember.computed('userId', function () {
            return this.get('auth').userId;
        })
    });
});
;define('vidya-frontend/controllers/discuss/chat', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    states: Ember.inject.service(),
    auth: Ember.inject.service(),
    channel_id: null,
    chatMessage: null,
    filetype: null,
    chat_id: null,
    readMore: false,
    news_id: '',
    loadMore: true,
    chatFinished: false,
    chat: "",
    // commentsCount: Ember.computed('discussData.length', 'chatFinished', function() {
    //   return this.store.peekAll('discuss').length
    // }),
    socialModel: Ember.computed('model.onesocialData', 'states.channel_id', function () {
      this.set('readMore', true);
      let model = this.store.peekAll('onesocial');
      return model;
    }),
    currentid: Ember.computed('auth.userId', function () {
      return this.get('auth.userId');
    }),
    newsModel: Ember.computed('loadMore', function () {
      let model = this.store.peekAll("crsgroup");
      return model;
    }),
    crs: Ember.observer("CRSid", "Channelid", function () {
      this.set("loadMore", false);
      if (this.get("CRSid")) {
        var val = {
          group: this.get("CRSid")
        };
      } else {
        var val = {
          group: this.get("Channelid")
        };
      }
      this.store.unloadAll('crsgroup');
      return this.store.query("crsgroup", val).then(post => {
        let model = this.store.peekAll("crsgroup");
        this.set('readMore', true);
        this.set('loadMore', true);
        return model;
      });
    }),
    filteredChat: Ember.computed('model.discussData', 'states.channel_id', function () {
      let model = this.store.peekAll('discuss');
      return model;
    }),
    clearData() {
      // this.set('progressDisplay', 'progress-hide');
      // this.set('img_url', this.get('data'));
      // this.set('data', '');
      // this.set('name', '');
      // this.set('filetype', null);
      // this.set('chat_id', null);
    },
    recordChat: function (message, qid, imgdata) {
      if (imgdata['filetype']) {
        this.set('filetype', imgdata['filetype']);
      } else if (this.get('filetype') === null) {
        this.set('filetype', 'm.room.message');
      }
      this.set('chatMessage', message);
      var userinfo = {
        username: this.get('auth.username'),
        role: this.get('auth.role'),
        user_url: this.get('auth.user_url')
      };
      const rec = this.store.createRecord("discuss", {
        username: this.get('auth.username'),
        userid: this.get('auth.userId'),
        message: message,
        channel_id: qid,
        type: this.get('filetype'),
        userinfo: userinfo
      });
      rec.save().then(chat => {
        // this.clearData();
        this.set("chat", '');
        $('#scrolldown').scrollTop($('#scrolldown').get(0).scrollHeight);
        if (this.get("chatFinished") == false) {
          this.set("chatFinished", true);
        } else {
          this.set("chatFinished", false);
        }
      });
    },
    actions: {

      readMore(crs_id, channel_id) {
        if (this.get('readMore') == true) {
          this.set('readMore', false);
          console.log("down");
          this.set('loadMore', false);
        } else {
          if (crs_id) {
            this.set('news_id', crs_id);
          } else {
            this.set('news_id', channel_id);
          }
          var val = {
            group: this.get('news_id')
          };
          this.store.unloadAll('crsgroup');
          return this.store.query("crsgroup", val).then(post => {
            let model = this.store.peekAll("crsgroup");
            this.set('readMore', true);
            this.set('loadMore', true);
            return model;
          });
        }
      },
      goToDetail(post_id) {
        this.set('states.post_id', post_id);
        this.transitionToRoute('news-detail', {
          queryParams: {
            post_id: post_id
          }
        });
      },
      routeToDetailNew(news, post_id) {
        console.log(news);
        if (news) {
          this.set('states.post_id', post_id);
          this.transitionToRoute('news-detail', {
            queryParams: {
              post_id: post_id
            }
          });
        }
      },
      goToProfiles(_id) {
        console.log(_id);
        this.store.unloadAll("social");
        this.transitionToRoute('/user/profile/' + _id);
      },
      goToGroups(_id) {
        console.log(_id);
        this.transitionToRoute("/user/group/" + _id);
      },
      keyReceived(evt) {
        if (evt.keyCode === 13 && evt.shiftKey === true) {
          evt.preventDefault();

          if (this.get('iconchanger') === true) {
            this.set("chat", "# &#128077;");
          }
          this.recordChat(this.get("chat"), this.get("states.post_id")['post_id'], '');
        }
      },
      handleChat() {
        if (this.get('iconchanger') === true) {
          this.set("chat", "# &#128077;");
        }
        this.recordChat(this.get("chat"), this.get("states.post_id")['post_id'], '');
      },
      scrollBottom() {
        $('#scrolldown').scrollTop($('#scrolldown').get(0).scrollHeight);
      }
    },
    message: Ember.observer("chat", function () {
      // //console.log(this.get('chat').length)
      if (this.get('chat').length === 0) {
        this.set("iconchanger", true);
      } else if (this.get('chat').length > 0) {
        this.set('iconchanger', false);
      }
    }).on('init')
  });
});
;define("vidya-frontend/controllers/discuss/create-grouppost", ["exports", "vidya-frontend/config/environment"], function (exports, _environment) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === "development") {
    var host = _environment.default.localHost;
  } else if (_environment.default.environment === "production") {
    var host = _environment.default.remoteHost;
    var pilboxHost = _environment.default.pilboxHost;
  }

  exports.default = Ember.Controller.extend({
    resizer: Ember.inject.service(),
    auth: Ember.inject.service(),
    uploadimage: Ember.inject.service(),
    states: Ember.inject.service(),
    showDialog: false,
    icon: "",
    multiFiles: [],
    postImg: [],
    fileChooser: false,
    images: [],
    videoPlayer: {},
    voicePlayer: {},
    disablebtn: false,
    cancelbutton: false,
    chatAddon: false,
    init() {
      this._super(...arguments);
    },
    imgDisplay: Ember.computed("fileChooser", function () {
      console.log(this.get("postImg"));
      return this.get("postImg");
    }),
    openDialog: Ember.computed("states.openDialog", function () {
      return this.get("states").openDialog;
    }),
    progressUpload: Ember.computed("uploadimage.progress", function () {
      console.log(this.get("uploadimage").progress);
      return this.get("uploadimage").progress;
    }),
    progressPercentage: Ember.computed("uploadimage.loading", function () {
      return this.get("uploadimage").loading;
    }),
    cancel: Ember.observer("states.cancelDisable", function () {
      console.log(this.get("states.cancelDisable"));
      this.set("cancelbutton", this.get("states.cancelDisable"));
    }),
    disabletext: Ember.computed.empty("post"),
    disableimg: Ember.computed.empty("imgDisplay"),
    // isdisable: and('disableimg', 'disabletext'),
    isdisable: Ember.computed("fileChooser", "uploadimage.uploaded", "imgDisplay", "disabletext", "disableimg", function () {
      if (this.get("images").length > 0) {
        console.log(this.get("images").length);
        console.log(this.get("postImg").length);
        if (this.get("images").length == this.get("postImg").length) {
          console.log("B");
          return false;
        } else {
          console.log("C");
          return true;
        }
      } else {
        console.log("A");
        return this.get("disabletext") && this.get("disableimg");
      }
    }),
    didRender() {
      this._super(...arguments);
    },

    actions: {
      chatMenu() {
        this.set("chatAddon", true);
      },
      chatMenuoff() {
        this.set("chatAddon", false);
      },
      // keyDownReceived(evt) {
      //   if (evt.keyCode === 13) {
      //     evt.preventDefault();
      //     if(this.get("post")) {
      //       console.log("\n")
      //     this.set("post", this.get("post")+ "\n")
      //     }
      //     else {
      //       console.log("\n")
      //     this.set("post", "\n")
      //     }
      //     console.log(this.get("post"))
      //   }
      // },
      closeDialog() {
        if (this.get("uploadimage.progress")) {
          this.set("states.openDialog", true);
        } else {
          try {
            this.get("videoPlayer").record().player.record().destroy();
          } catch (ex) {}
          try {
            this.get("voicePlayer").record().player.record().destroy();
          } catch (ex) {}
          this.clearData();
          window.history.back();
        }
      },
      closeDialogWithParent() {
        this.set("states.openDialog", false);
      },
      saveData() {
        this.set("disablebtn", true);
        var usrInfo = {
          userId: this.get("auth.userId"),
          user_url: this.get("auth.user_url"),
          username: this.get("auth.username"),
          role: this.get("auth.role")
        };
        var groupinfos = {
          groupId: this.get('model.id'),
          groupname: this.get('model.channelname'),
          groupImg: this.get('model.postImg')
        };

        var data = {
          category: {},
          section: {},
          title: "",
          header: {},
          summary: this.get("post"),
          detail: "",
          postImg: this.get("postImg"),
          breakingNews: false,
          prioritize: 3,
          sourceNews: "",
          author: this.get("auth.username"),
          editor: "",
          status: this.get("auth.role"),
          userinfo: usrInfo,
          checkNews: "Pending",
          tags: [],
          previous_state: "Cele",
          channel_id: this.get("auth").userId,
          like: [],
          comments: 0,
          share: [],
          groupPost: true,
          groupinfo: groupinfos,
          latest_message: ""
        };
        var that = this;
        var record = this.store.createRecord("social", data);
        record.save().then(function (response) {
          that.clearData();
          that.set("disablebtn", false);
          window.history.back();
        });
      },
      ok() {
        this.get("uploadimage").cancelUpload();
        try {
          this.get("videoPlayer").record().player.record().destroy();
        } catch (ex) {}
        try {
          this.get("voicePlayer").record().player.record().destroy();
        } catch (ex) {}
        this.clearData();
        this.set("states.openDialog", false);
        window.history.back();
      },
      deleteImg(data, option) {
        var _id = {
          fileid: data.file_name
        };
        var that = this;
        Ember.$.ajax({
          type: "post",
          url: `${host}/upload/remove`,
          data: _id,
          dataType: "json",
          success: function (response) {
            that.get("postImg").splice(that.get("postImg").findIndex(e => e.file_name === data.file_name), 1);
            if (that.get("images").length > 0) {
              that.get("images").pop();
            }
            that.dataChanges();
          }
        });
      },
      selectImg(result) {
        this.get("uploadimage").uploadFiles(result, this.get("postImg"));
      },
      getPhoto() {
        var that = this;
        window.imagePicker.getPictures(function (results) {
          for (var i = 0; i < results.length; i++) {
            // console.log('Image URI: ' + results[i]);
            function getFileContentAsBase64(path, callback) {
              window.resolveLocalFileSystemURL(path, gotFile, fail);

              function fail(e) {
                alert("Cannot found requested file");
              }

              function gotFile(fileEntry) {
                fileEntry.file(function (file) {
                  var reader = new FileReader();
                  reader.onloadend = function (e) {
                    var content = this.result;
                    callback(content);
                  };
                  reader.readAsDataURL(file);
                });
              }
            }
            var path = results[i];

            // Convert image
            getFileContentAsBase64(path, function (base64Photo) {
              // console.log(base64Photo)
              that.set("uploadimage.progress", true);
              that.set("states.cancelDisable", true);
              that.convertFile(base64Photo, "image");
            });
          }
        }, function (error) {
          console.log("Error: " + error);
        }, {
          maximumImagesCount: 30,
          width: 1024
        });
      },
      getCamera() {
        var that = this;

        function error(e) {
          console.log(e + "error");
        }

        function success(imageData) {
          that.convertFile(imageData, "image");
        }
        navigator.camera.getPicture(success, error, {
          quality: 80,
          destinationType: Camera.DestinationType.DATA_URL
        });
      },
      getVideo() {
        var that = this;

        var captureSuccess = function (mediaFile) {
          function getFileContentAsBase64(path, callback) {
            window.resolveLocalFileSystemURL(path, gotFile, fail);

            function fail(e) {
              alert("Cannot found requested file");
            }

            function gotFile(fileEntry) {
              fileEntry.file(function (file) {
                var reader = new FileReader();
                reader.onloadend = function (e) {
                  var content = this.result;
                  callback(content);
                };
                // The most important point, use the readAsDatURL Method from the file plugin
                reader.readAsDataURL(file);
              });
            }
          }
          var path = mediaFile[0].fullPath;

          // Convert image
          getFileContentAsBase64(path, function (base64Video) {
            that.set("uploadimage.progress", true);
            that.set("states.cancelDisable", true);
            that.convertFile(base64Video, "video");
            // Then you'll be able to handle the myimage.png file as base64
          });
        };
        // capture error callback
        var captureError = function (error) {
          navigator.notification.alert("Error code: " + error.code, null, "Capture Error");
        };

        // start video capture
        navigator.device.capture.captureVideo(captureSuccess, captureError, {
          limit: 1,
          quality: 0
        });
      },
      getVoice() {
        var that = this;

        var captureSuccess = function (mediaFile) {
          function getFileContentAsBase64(path, callback) {
            window.resolveLocalFileSystemURL(path, gotFile, fail);

            function fail(e) {
              alert("Cannot found requested file");
            }

            function gotFile(fileEntry) {
              fileEntry.file(function (file) {
                var reader = new FileReader();
                reader.onloadend = function (e) {
                  var content = this.result;
                  callback(content);
                };
                // The most important point, use the readAsDatURL Method from the file plugin
                reader.readAsDataURL(file);
              });
            }
          }
          var path = mediaFile[0].fullPath;

          // Convert image
          getFileContentAsBase64(path, function (base64Voice) {
            // console.log(base64Voice)
            that.set("uploadimage.progress", true);
            that.set("states.cancelDisable", true);
            that.convertFile(base64Voice, "voice");
            // that.convertFile(base64Image, 'voice')
            // Then you'll be able to handle the myimage.png file as base64
          });
        };
        // capture error callback
        var captureError = function (error) {
          navigator.notification.alert("Error code: " + error.code, null, "Capture Error");
        };
        // start audio capture
        navigator.device.capture.captureAudio(captureSuccess, captureError, { limit: 1 });
      },
      getFiles() {
        var that = this;
        var resultMedias = [];

        var args = {
          selectMode: 101, //101=picker image and video , 100=image , 102=video
          maxSelectCount: 15, //default 40 (Optional)
          maxSelectSize: 100000000, //188743680=180M (Optional) only android
          quality: 90
        };
        MediaPicker.getMedias(args, function (medias) {
          resultMedias = medias;
          getThumbnail(medias);
        }, function (e) {
          console.log(e);
        });

        function getFileContentAsBase64(path, callback) {
          window.resolveLocalFileSystemURL(path, gotFile, fail);

          function fail(e) {
            alert("Cannot found requested file");
          }

          function gotFile(fileEntry) {
            fileEntry.file(function (file) {
              var reader = new FileReader();
              reader.onloadend = function (e) {
                var content = this.result;
                callback(content);
              };
              // The most important point, use the readAsDatURL Method from the file plugin
              reader.readAsDataURL(file);
            });
          }
        }

        function getThumbnail(medias) {
          for (var i = 0; i < medias.length; i++) {
            medias[i].quality = 90;
            that.get("images").push(medias[i]);
            that.dataChanges();
            MediaPicker.extractThumbnail(medias[i], function (data) {
              that.set("uploadimage.progress", true);
              that.set("states.cancelDisable", true);
              getFileContentAsBase64(data.uri, function (base64Img) {
                that.convertFile(base64Img, data.mediaType);
              });
              // if (data.mediaType === 'image'){
              //     that.convertFile(data.thumbnailBase64, data.mediaType)
              // }else{
              //   getFileContentAsBase64(data.uri,function(base64Video){
              //     that.convertFile(base64Video, data.mediaType)
              //   });
              // }
            }, function (e) {
              console.log(e);
            });
          }
        }
      }
    },

    dataChanges() {
      if (this.get("fileChooser") === true) {
        this.set("fileChooser", false);
      } else {
        this.set("fileChooser", true);
      }
    },
    clearData() {
      this.set("post", "");
      this.set("postImg", []);
      this.set("images", []);
      this.set("uploadimage.process", []);
      this.dataChanges();
    },
    convertFile(imageData, type) {
      var mime = "";
      var filename = "";

      function dataURLtoFile(dataurl, filetype) {
        try {
          var bstr = atob(dataurl.split(",")[1]);
        } catch (ex) {
          var bstr = atob(dataurl);
        }
        var n = bstr.length;
        var byteNumbers = new Array(bstr.length);
        for (var i = 0; i < bstr.length; i++) {
          byteNumbers[i] = bstr.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray], { type: filetype });
      }
      if (type == "image") {
        var dataURI = "data:image/png;base64," + +imageData;
        var file = dataURLtoFile(imageData, ":image/png");
        this.get("uploadimage").uploadProcess(file, type, "tmp.png", this.get("postImg"));
      } else {
        var dataURI = "data:video/mp4;base64," + +imageData;
        var file = dataURLtoFile(imageData, ":image/mp4");
        this.get("uploadimage").uploadProcess(file, type, "tmp.mp4", this.get("postImg"));
      }
    },
    uploadFiles(result) {
      var that = this;
      this.set("progress", true);
      console.log(result);
      for (var i = 0; i < result.length; i++) {
        var type = result[i].type;
        var file_name = result[i].name;
        var checkFile = type.split("/");
        var reader = new FileReader();
        reader.onload = function (e) {
          that.get("resizer").resize(e.target.result, 280, 170, resizedata => {
            function dataURLtoFile(dataurl, filename) {
              var bstr = atob(dataurl),
                  n = bstr.length,
                  u8arr = new Uint8Array(n);
              var mime = ":image/png",
                  filename = "tmp.png";
              while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
              }
              return new File([u8arr], filename, { type: mime });
            }
            var file = dataURLtoFile(resizedata.split(",")[1], "tmp.png");
            that.uploadProcess(file, type, file_name);
          });
        };
        reader.readAsDataURL(result[i]);
      }
    },
    uploadProcess(file, type, file_name) {
      var that = this;
      that.set("data", "");
      var reqUrl = "";
      reqUrl = `${host}/uploads`;
      var fd = new FormData();
      fd.append("file", file);
      var request = new XMLHttpRequest();
      request.responseType = "json";
      request.open("POST", reqUrl, true);
      request.upload.onprogress = function (e) {
        var percentComplete = Math.ceil(e.loaded / e.total * 100);
        console.log(percentComplete);
        that.set("loading", percentComplete);
        if (e.lengthComputable) {
          console.log(e.loaded + " / " + e.total);
        }
      };
      request.onloadstart = function (e) {
        console.log(e.total);
        console.log("start");
      };
      request.onloadend = function (e) {
        // console.log(e)
        console.log("end");
      };
      request.onload = function (e) {
        var response = request.response;
        var imageobject = e.target.response;
        console.log(type);
        that.get("postImg")["type"] = type;
        that.get("postImg")["original_name"] = file_name;
        that.get("postImg").pushObject(imageobject);
        that.dataChanges();

        function* porcressComplete(response) {
          console.log(response);
          yield response;
        }
        porcressComplete(response);
        that.set("progress", false);
      };
      request.send(fd);
    }
  });
});
;define('vidya-frontend/controllers/discuss/create-social', ['exports', 'vidya-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
    var pilboxHost = _environment.default.pilboxHost;
  }

  exports.default = Ember.Controller.extend({
    resizer: Ember.inject.service(),
    auth: Ember.inject.service(),
    uploadimage: Ember.inject.service(),
    states: Ember.inject.service(),
    showDialog: false,
    icon: '',
    multiFiles: [],
    postImg: [],
    fileChooser: false,
    images: [],
    videoPlayer: {},
    voicePlayer: {},
    disablebtn: false,
    cancelbutton: false,
    chatAddon: false,
    init() {
      this._super(...arguments);
    },
    imgDisplay: Ember.computed('fileChooser', function () {
      console.log(this.get('postImg'));
      return this.get('postImg');
    }),
    openDialog: Ember.computed('states.openDialog', function () {
      return this.get('states').openDialog;
    }),
    progressUpload: Ember.computed('uploadimage.progress', function () {
      console.log(this.get('uploadimage').progress);
      return this.get('uploadimage').progress;
    }),
    progressPercentage: Ember.computed('uploadimage.loading', function () {
      return this.get('uploadimage').loading;
    }),
    cancel: Ember.observer('states.cancelDisable', function () {
      console.log(this.get("states.cancelDisable"));
      this.set("cancelbutton", this.get("states.cancelDisable"));
    }),
    disabletext: Ember.computed.empty('post'),
    disableimg: Ember.computed.empty('imgDisplay'),
    // isdisable: and('disableimg', 'disabletext'),
    isdisable: Ember.computed('fileChooser', 'uploadimage.uploaded', 'imgDisplay', 'disabletext', 'disableimg', function () {
      if (this.get("images").length > 0) {
        console.log(this.get("images").length);
        console.log(this.get("postImg").length);
        if (this.get('images').length == this.get('postImg').length) {
          console.log("B");
          return false;
        } else {
          console.log("C");
          return true;
        }
      } else {
        console.log("A");
        return this.get('disabletext') && this.get('disableimg');
      }
    }),
    didRender() {
      this._super(...arguments);
    },

    actions: {
      chatMenu() {
        this.set('chatAddon', true);
      },
      chatMenuoff() {
        this.set('chatAddon', false);
      },
      // keyDownReceived(evt) {
      //   if (evt.keyCode === 13) {
      //     evt.preventDefault();
      //     if(this.get("post")) {
      //       console.log("\n")
      //     this.set("post", this.get("post")+ "\n")
      //     }
      //     else {
      //       console.log("\n")
      //     this.set("post", "\n")
      //     }
      //     console.log(this.get("post"))
      //   }
      // },
      closeDialog() {

        if (this.get("uploadimage.progress")) {

          this.set('states.openDialog', true);
        } else {
          try {
            this.get('videoPlayer').record().player.record().destroy();
          } catch (ex) {}
          try {
            this.get('voicePlayer').record().player.record().destroy();
          } catch (ex) {}
          this.clearData();
          window.history.back();
        }
      },
      closeDialogWithParent() {
        this.set('states.openDialog', false);
      },
      saveData() {
        this.set('disablebtn', true);
        var usrInfo = {
          userId: this.get('auth.userId'),
          user_url: this.get('auth.user_url'),
          username: this.get('auth.username'),
          role: this.get('auth.role')
        };
        var data = {
          category: {},
          section: {},
          title: '',
          header: {},
          summary: this.get('post'),
          detail: '',
          postImg: this.get('postImg'),
          breakingNews: false,
          prioritize: 3,
          sourceNews: '',
          author: this.get('auth.username'),
          editor: '',
          status: this.get('auth.role'),
          userinfo: usrInfo,
          checkNews: "Pending",
          tags: [],
          previous_state: 'Cele',
          channel_id: this.get('auth').userId,
          like: [],
          comments: 0,
          share: [],
          latest_message: ''
        };
        var that = this;
        var record = this.store.createRecord("social", data);
        record.save().then(function (response) {
          that.clearData();
          that.set('disablebtn', false);
          window.history.back();
        });
      },
      ok() {
        this.get('uploadimage').cancelUpload();
        try {
          this.get('videoPlayer').record().player.record().destroy();
        } catch (ex) {}
        try {
          this.get('voicePlayer').record().player.record().destroy();
        } catch (ex) {}
        this.clearData();
        this.set("states.openDialog", false);
        window.history.back();
      },
      deleteImg(data, option) {
        var _id = {
          'fileid': data.file_name
        };
        var that = this;
        Ember.$.ajax({
          type: 'post',
          url: `${host}/upload/remove`,
          data: _id,
          dataType: 'json',
          success: function (response) {
            that.get('postImg').splice(that.get('postImg').findIndex(e => e.file_name === data.file_name), 1);
            if (that.get('images').length > 0) {
              that.get('images').pop();
            }
            that.dataChanges();
          }
        });
      },
      selectImg(result) {
        this.get("uploadimage").uploadFiles(result, this.get("postImg"));
      },
      getPhoto() {
        var that = this;
        window.imagePicker.getPictures(function (results) {
          for (var i = 0; i < results.length; i++) {
            // console.log('Image URI: ' + results[i]);
            function getFileContentAsBase64(path, callback) {
              window.resolveLocalFileSystemURL(path, gotFile, fail);

              function fail(e) {
                alert('Cannot found requested file');
              }

              function gotFile(fileEntry) {
                fileEntry.file(function (file) {
                  var reader = new FileReader();
                  reader.onloadend = function (e) {
                    var content = this.result;
                    callback(content);
                  };
                  reader.readAsDataURL(file);
                });
              }
            }
            var path = results[i];

            // Convert image
            getFileContentAsBase64(path, function (base64Photo) {
              // console.log(base64Photo)
              that.set('uploadimage.progress', true);
              that.set("states.cancelDisable", true);
              that.convertFile(base64Photo, 'image');
            });
          }
        }, function (error) {
          console.log('Error: ' + error);
        }, {
          maximumImagesCount: 30,
          width: 1024
        });
      },
      getCamera() {
        var that = this;

        function error(e) {
          console.log(e + 'error');
        }

        function success(imageData) {
          that.get('images').push(imageData);
          that.convertFile(imageData, 'image');
        }
        navigator.camera.getPicture(success, error, {
          quality: 80,
          destinationType: Camera.DestinationType.DATA_URL
        });
      },
      getVideo() {
        var that = this;

        var captureSuccess = function (mediaFile) {
          function getFileContentAsBase64(path, callback) {
            window.resolveLocalFileSystemURL(path, gotFile, fail);

            function fail(e) {
              alert('Cannot found requested file');
            }

            function gotFile(fileEntry) {
              fileEntry.file(function (file) {
                var reader = new FileReader();
                reader.onloadend = function (e) {
                  var content = this.result;
                  callback(content);
                };
                // The most important point, use the readAsDatURL Method from the file plugin
                reader.readAsDataURL(file);
              });
            }
          }
          var path = mediaFile[0].fullPath;
          that.get('images').push(path);
          // Convert image
          getFileContentAsBase64(path, function (base64Video) {
            that.set("uploadimage.progress", true);
            that.set("states.cancelDisable", true);
            that.convertFile(base64Video, 'video');
            // Then you'll be able to handle the myimage.png file as base64
          });
        };
        // capture error callback
        var captureError = function (error) {
          navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
        };

        // start video capture
        navigator.device.capture.captureVideo(captureSuccess, captureError, {
          limit: 1,
          quality: 1
        });
      },
      getVoice() {
        var that = this;

        var captureSuccess = function (mediaFile) {
          function getFileContentAsBase64(path, callback) {
            window.resolveLocalFileSystemURL(path, gotFile, fail);

            function fail(e) {
              alert('Cannot found requested file');
            }

            function gotFile(fileEntry) {
              fileEntry.file(function (file) {
                var reader = new FileReader();
                reader.onloadend = function (e) {
                  var content = this.result;
                  callback(content);
                };
                // The most important point, use the readAsDatURL Method from the file plugin
                reader.readAsDataURL(file);
              });
            }
          }
          var path = mediaFile[0].fullPath;
          that.get('images').push(path);
          // Convert image
          getFileContentAsBase64(path, function (base64Voice) {
            // console.log(base64Voice)
            that.set('uploadimage.progress', true);
            that.set("states.cancelDisable", true);
            that.convertFile(base64Voice, 'voice');
            // that.convertFile(base64Image, 'voice')
            // Then you'll be able to handle the myimage.png file as base64
          });
        };
        // capture error callback
        var captureError = function (error) {
          navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
        };
        // start audio capture
        navigator.device.capture.captureAudio(captureSuccess, captureError, {
          limit: 1
        });
      },
      getFiles() {
        var that = this;
        var resultMedias = [];

        var args = {
          'selectMode': 101, //101=picker image and video , 100=image , 102=video
          'maxSelectCount': 15, //default 40 (Optional)
          'maxSelectSize': 100000000, //188743680=180M (Optional) only android
          'quality': 70
        };
        MediaPicker.getMedias(args, function (medias) {
          resultMedias = medias;
          getThumbnail(medias);
        }, function (e) {
          console.log(e);
        });

        function getFileContentAsBase64(path, callback) {
          window.resolveLocalFileSystemURL(path, gotFile, fail);

          function fail(e) {
            alert('Cannot found requested file');
          }

          function gotFile(fileEntry) {
            fileEntry.file(function (file) {
              var reader = new FileReader();
              reader.onloadend = function (e) {
                var content = this.result;
                callback(content);
              };
              // The most important point, use the readAsDatURL Method from the file plugin
              reader.readAsDataURL(file);
            });
          }
        }

        function getThumbnail(medias) {
          for (var i = 0; i < medias.length; i++) {
            medias[i].quality = 90;
            that.get('images').push(medias[i]);
            that.dataChanges();
            MediaPicker.extractThumbnail(medias[i], function (data) {
              that.set('uploadimage.progress', true);
              that.set("states.cancelDisable", true);
              getFileContentAsBase64(data.uri, function (base64Img) {
                that.convertFile(base64Img, data.mediaType);
              });
              // if (data.mediaType === 'image'){
              //     that.convertFile(data.thumbnailBase64, data.mediaType)
              // }else{
              //   getFileContentAsBase64(data.uri,function(base64Video){
              //     that.convertFile(base64Video, data.mediaType)
              //   });
              // }
            }, function (e) {
              console.log(e);
            });
          }
        }
      }
    },

    dataChanges() {
      if (this.get('fileChooser') === true) {
        this.set('fileChooser', false);
      } else {
        this.set('fileChooser', true);
      }
    },
    clearData() {
      this.set('post', '');
      this.set('postImg', []);
      this.set('images', []);
      this.set('uploadimage.process', []);
      this.dataChanges();
    },
    convertFile(imageData, type) {
      var mime = '';
      var filename = '';

      function dataURLtoFile(dataurl, filetype) {
        try {
          var bstr = atob(dataurl.split(',')[1]);
        } catch (ex) {
          var bstr = atob(dataurl);
        }
        var n = bstr.length;
        var byteNumbers = new Array(bstr.length);
        for (var i = 0; i < bstr.length; i++) {
          byteNumbers[i] = bstr.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray], {
          type: filetype
        });
      }
      if (type == 'image') {
        var dataURI = "data:image/png;base64," + +imageData;
        var file = dataURLtoFile(imageData, ':image/png');
        this.get("uploadimage").uploadProcess(file, type, 'tmp.png', this.get("postImg"));
      } else {
        var dataURI = "data:video/mp4;base64," + +imageData;
        var file = dataURLtoFile(imageData, ':image/mp4');
        this.get("uploadimage").uploadProcess(file, type, 'tmp.mp4', this.get("postImg"));
      }
    },
    uploadFiles(result) {
      var that = this;
      this.set('progress', true);
      console.log(result);
      for (var i = 0; i < result.length; i++) {
        var type = result[i].type;
        var file_name = result[i].name;
        var checkFile = type.split('/');
        var reader = new FileReader();
        reader.onload = function (e) {
          that.get("resizer").resize(e.target.result, 280, 170, resizedata => {
            function dataURLtoFile(dataurl, filename) {
              var bstr = atob(dataurl),
                  n = bstr.length,
                  u8arr = new Uint8Array(n);
              var mime = ':image/png',
                  filename = "tmp.png";
              while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
              }
              return new File([u8arr], filename, {
                type: mime
              });
            }
            var file = dataURLtoFile(resizedata.split(',')[1], 'tmp.png');
            that.uploadProcess(file, type, file_name);
          });
        };
        reader.readAsDataURL(result[i]);
      }
    },
    uploadProcess(file, type, file_name) {
      var that = this;
      that.set("data", '');
      var reqUrl = '';
      reqUrl = `${host}/uploads`;
      var fd = new FormData();
      fd.append("file", file);
      var request = new XMLHttpRequest();
      request.responseType = 'json';
      request.open("POST", reqUrl, true);
      request.upload.onprogress = function (e) {
        var percentComplete = Math.ceil(e.loaded / e.total * 100);
        console.log(percentComplete);
        that.set('loading', percentComplete);
        if (e.lengthComputable) {
          console.log(e.loaded + " / " + e.total);
        }
      };
      request.onloadstart = function (e) {
        console.log(e.total);
        console.log("start");
      };
      request.onloadend = function (e) {
        // console.log(e)
        console.log("end");
      };
      request.onload = function (e) {
        var response = request.response;
        var imageobject = e.target.response;
        console.log(type);
        that.get('postImg')['type'] = type;
        that.get('postImg')['original_name'] = file_name;
        that.get("postImg").pushObject(imageobject);
        that.dataChanges();

        function* porcressComplete(response) {
          console.log(response);
          yield response;
        }
        porcressComplete(response);
        that.set('progress', false);
      };
      request.send(fd);
    }
  });
});
;define("vidya-frontend/controllers/discuss/edit-social", ["exports", "vidya-frontend/config/environment"], function (exports, _environment) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === "development") {
    var host = _environment.default.localHost;
  } else if (_environment.default.environment === "production") {
    var host = _environment.default.remoteHost;
    var pilboxHost = _environment.default.pilboxHost;
  }
  exports.default = Ember.Controller.extend({
    resizer: Ember.inject.service(),
    auth: Ember.inject.service(),
    states: Ember.inject.service(),
    uploadimage: Ember.inject.service(),
    showDialog: false,
    crs: [],
    icon: '',
    multiFiles: [],
    images: [],
    postImg: [],
    fileChooser: false,
    videoPlayer: {},
    voicePlayer: {},
    chatAddon: false,
    // disablebtn: false,
    init() {
      this._super(...arguments);
    },
    imgDisplay: Ember.computed('fileChooser', function () {
      return this.get('model.postImg');
    }),
    fullImageChanged: Ember.on('init', Ember.observer('model.postImg', function () {
      if (this.get('fileChooser') === true) {
        this.set('fileChooser', false);
      } else {
        this.set('fileChooser', true);
      }
      if (this.get("model.crs_id")) {
        this.store.unloadAll('crsgroup');
        this.set("crs", this.store.query("crsgroup", { group: this.get("model.crs_id") }).then(post => {
          let model = this.store.peekAll("crsgroup");
          return model;
        }));
      }
    })),
    crsModel: Ember.computed('crsgroup', function () {
      let model = this.store.peekAll("crsgroup");
      return model;
    }),
    progressUpload: Ember.computed('uploadimage.progress', function () {
      return this.get('uploadimage').progress;
    }),
    progressPercentage: Ember.computed('uploadimage.loading', function () {
      return this.get('uploadimage').loading;
    }),
    disabletext: Ember.computed.empty('model.summary'),
    disableimg: Ember.computed.empty('imgDisplay'),
    isdisable: Ember.computed.and('disableimg', 'disabletext'),

    actions: {
      chatMenu() {
        this.set('chatAddon', true);
      },
      chatMenuoff() {
        this.set('chatAddon', false);
      },
      closeDialog(item) {
        try {
          this.get('videoPlayer').record().player.record().destroy();
        } catch (ex) {}
        try {
          this.get('voicePlayer').record().player.record().destroy();
        } catch (ex) {}
        item.rollbackAttributes();
        // this.transitionToRoute('/social');
        window.history.back();
      },
      saveData(item) {
        for (var i = 0; i < this.get("images.length"); i++) {
          this.deleteImages(this.get("images")[i]);
        }
        item.save().then(
        // this.transitionToRoute("/social"))
        window.history.back());
      },

      deleteImg(data, option) {
        this.get('images').push(data);
        var image = this.get("model.postImg");

        image.splice(image.findIndex(e => e.file_name === data.file_name), 1);
        this.set('model.postImg', image);
        this.dataChanges();
      },
      selectImg(result) {
        this.get("uploadimage").uploadFiles(result, this.get("model.postImg"));
        this.dataChanges();
      },
      // getPhoto(){
      //   var that = this;
      //   window.imagePicker.getPictures(
      //       function(results) {
      //           for (var i = 0; i < results.length; i++) {
      //               console.log('Image URI: ' + results[i]);
      //         function getFileContentAsBase64(path, callback) {
      //           window.resolveLocalFileSystemURL(path, gotFile, fail);

      //           function fail(e) {
      //             alert('Cannot found requested file');
      //           }

      //           function gotFile(fileEntry) {
      //             fileEntry.file(function(file) {
      //               var reader = new FileReader();
      //               reader.onloadend = function(e) {
      //                 var content = this.result;
      //                 callback(content);
      //               };
      //               reader.readAsDataURL(file);
      //             });
      //           }
      //         }
      //         var path = results[i];

      //         // Convert image
      //         getFileContentAsBase64(path,function(base64Photo){
      //           // console.log(base64Photo)
      //           that.set('uploadimage.progress', true)
      //           that.convertFile(base64Photo, 'image')
      //         });

      //           }
      //       }, function (error) {
      //           console.log('Error: ' + error);
      //       }, {
      //           maximumImagesCount: 30,
      //           width: 1024
      //       }
      //   );
      // },
      getCamera() {
        var that = this;

        function error(e) {
          console.log(e + 'error');
        }

        function success(imageData) {
          console.log(imageData);
          that.convertFile(imageData, 'image');
        }
        navigator.camera.getPicture(success, error, {
          quality: 80,
          destinationType: Camera.DestinationType.DATA_URL
        });
      },
      getVideo() {
        var that = this;
        that.set('uploadimage.progress', true);
        var captureSuccess = function (mediaFile) {
          function getFileContentAsBase64(path, callback) {
            window.resolveLocalFileSystemURL(path, gotFile, fail);

            function fail(e) {
              alert('Cannot found requested file');
            }

            function gotFile(fileEntry) {
              fileEntry.file(function (file) {
                var reader = new FileReader();
                reader.onloadend = function (e) {
                  var content = this.result;
                  callback(content);
                };
                // The most important point, use the readAsDatURL Method from the file plugin
                reader.readAsDataURL(file);
              });
            }
          }
          var path = mediaFile[0].fullPath;

          // Convert image
          getFileContentAsBase64(path, function (base64Video) {
            that.convertFile(base64Video, 'video');
            // Then you'll be able to handle the myimage.png file as base64
          });
        };
        // capture error callback
        var captureError = function (error) {
          navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
        };

        // start video capture
        navigator.device.capture.captureVideo(captureSuccess, captureError, {
          limit: 1
        });
      },
      getVoice() {
        var that = this;
        that.set('uploadimage.progress', true);
        var captureSuccess = function (mediaFile) {
          function getFileContentAsBase64(path, callback) {
            window.resolveLocalFileSystemURL(path, gotFile, fail);

            function fail(e) {
              alert('Cannot found requested file');
            }

            function gotFile(fileEntry) {
              fileEntry.file(function (file) {
                var reader = new FileReader();
                reader.onloadend = function (e) {
                  var content = this.result;
                  callback(content);
                };
                // The most important point, use the readAsDatURL Method from the file plugin
                reader.readAsDataURL(file);
              });
            }
          }
          var path = mediaFile[0].fullPath;

          // Convert image
          getFileContentAsBase64(path, function (base64Voice) {
            // console.log(base64Voice)
            that.convertFile(base64Voice, 'voice');
            // that.convertFile(base64Image, 'voice')
            // Then you'll be able to handle the myimage.png file as base64
          });
        };
        // capture error callback
        var captureError = function (error) {
          navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
        };
        // start audio capture
        navigator.device.capture.captureAudio(captureSuccess, captureError, {
          limit: 1
        });
      },
      getFiles() {
        var that = this;
        var resultMedias = [];
        console.log('getfile');
        var args = {
          'selectMode': 101, //101=picker image and video , 100=image , 102=video
          'maxSelectCount': 15, //default 40 (Optional)
          'maxSelectSize': 100000000, //188743680=180M (Optional) only android
          'quality': 90
        };
        MediaPicker.getMedias(args, function (medias) {
          resultMedias = medias;
          getThumbnail(medias);
        }, function (e) {
          console.log(e);
        });

        function getFileContentAsBase64(path, callback) {
          window.resolveLocalFileSystemURL(path, gotFile, fail);

          function fail(e) {
            alert('Cannot found requested file');
          }

          function gotFile(fileEntry) {
            fileEntry.file(function (file) {
              var reader = new FileReader();
              reader.onloadend = function (e) {
                var content = this.result;
                callback(content);
              };
              // The most important point, use the readAsDatURL Method from the file plugin
              reader.readAsDataURL(file);
            });
          }
        }

        function getThumbnail(medias) {
          for (var i = 0; i < medias.length; i++) {
            medias[i].quality = 90;
            that.get('images').push(medias[i]);
            that.dataChanges();
            MediaPicker.extractThumbnail(medias[i], function (data) {
              that.set('uploadimage.progress', true);
              that.set("states.cancelDisable", true);
              getFileContentAsBase64(data.uri, function (base64Img) {
                that.convertFile(base64Img, data.mediaType);
              });
              // if (data.mediaType === 'image'){
              //     that.convertFile(data.thumbnailBase64, data.mediaType)
              // }else{
              //   getFileContentAsBase64(data.uri,function(base64Video){
              //     that.convertFile(base64Video, data.mediaType)
              //   });
              // }
            }, function (e) {
              console.log(e);
            });
          }
        }
      }
    },

    dataChanges() {
      if (this.get('fileChooser') === true) {
        this.set('fileChooser', false);
      } else {
        this.set('fileChooser', true);
      }
    },
    clearData() {
      this.set('post', '');
      this.set('postImg', []);
      this.set('uploadimage.process', []);
      this.dataChanges();
    },
    convertFile(imageData, type) {
      var mime = '';
      var filename = '';
      function dataURLtoFile(dataurl, filetype) {
        if (type == 'image') {
          var bstr = atob(dataurl.replace(/^data:image\/(png|jpeg|jpg);base64,/, ''));
        } else if (type == 'voice') {
          var bstr = atob(dataurl.replace(/^data:audio\/mpeg;base64,/, ''));
        } else {
          var bstr = atob(dataurl.replace(/^data:video\/mp4;base64,/, ''));
        }
        var n = bstr.length;
        var byteNumbers = new Array(bstr.length);
        for (var i = 0; i < bstr.length; i++) {
          byteNumbers[i] = bstr.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray], {
          type: filetype
        });
      }
      if (type == 'image') {
        var dataURI = "data:image/png;base64," + +imageData;
        var file = dataURLtoFile(imageData, ':image/png');
        this.get("uploadimage").uploadProcess(file, type, 'tmp.png', this.get("model.postImg"));
      } else {
        var dataURI = "data:video/mp4;base64," + +imageData;
        var file = dataURLtoFile(imageData, ':image/mp4');
        this.get("uploadimage").uploadProcess(file, type, 'tmp.mp4', this.get("model.postImg"));
      }
      this.dataChanges();
    },
    uploadFiles(result) {
      var that = this;
      this.set('progress', true);
      console.log(result);
      for (var i = 0; i < result.length; i++) {
        var type = result[i].type;
        var file_name = result[i].name;
        var checkFile = type.split('/');
        var reader = new FileReader();
        reader.onload = function (e) {
          that.get("resizer").resize(e.target.result, 280, 170, resizedata => {
            function dataURLtoFile(dataurl, filename) {
              var bstr = atob(dataurl),
                  n = bstr.length,
                  u8arr = new Uint8Array(n);
              var mime = ':image/png',
                  filename = "tmp.png";
              while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
              }
              return new File([u8arr], filename, {
                type: mime
              });
            }
            var file = dataURLtoFile(resizedata.split(',')[1], 'tmp.png');
            that.uploadProcess(file, type, file_name);
          });
        };
        reader.readAsDataURL(result[i]);
      }
    },
    uploadProcess(file, type, file_name) {
      var that = this;
      that.set("data", '');
      var reqUrl = '';
      reqUrl = `${host}/uploads`;
      var fd = new FormData();
      fd.append("file", file);
      var request = new XMLHttpRequest();
      request.responseType = 'json';
      request.open("POST", reqUrl, true);
      request.upload.onprogress = function (e) {
        var percentComplete = Math.ceil(e.loaded / e.total * 100);
        console.log(percentComplete);
        that.set('loading', percentComplete);
        if (e.lengthComputable) {
          console.log(e.loaded + " / " + e.total);
        }
      };
      request.onloadstart = function (e) {
        console.log(e.total);
        console.log("start");
      };
      request.onloadend = function (e) {
        // console.log(e)
        console.log("end");
      };
      request.onload = function (e) {
        var response = request.response;
        var imageobject = e.target.response;
        console.log(type);
        that.get('postImg')['type'] = type;
        that.get('postImg')['original_name'] = file_name;
        that.get("postImg").pushObject(imageobject);
        that.dataChanges();

        function* porcressComplete(response) {
          console.log(response);
          yield response;
        }
        porcressComplete(response);
        that.set('progress', false);
      };
      request.send(fd);
    },
    deleteImages(data, option) {
      var _id = {
        'fileid': data.file_name
      };
      var that = this;
      Ember.$.ajax({
        type: 'post',
        url: `${host}/upload/remove`,
        data: _id,
        dataType: 'json',
        success: function (response) {}
      });
    }
  });
});
;define('vidya-frontend/controllers/discuss/group-page', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    states: Ember.inject.service(),
    socialModel: Ember.computed('socialData', 'states.channel_id', function () {
      let model = this.store.peekAll('social');
      return model;
    }),
    actions: {
      goToGroupPage(_id) {
        console.log(_id);
      }
    }
  });
});
;define('vidya-frontend/controllers/discuss/share-social', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({

    btndisable: false,
    auth: Ember.inject.service(),
    share: Ember.computed('model', function () {
      return this.store.peekAll('onesocial');
    }),
    actions: {
      share(news) {
        var all_file = [];
        var news_data = news.data.postImg;
        for (var i = 0; i < news_data.length; i++) {
          var url = '/uploads/' + news_data[i].file_name;
          if (news_data[i].type == 'video') {
            var poster = news_data[i].poster;
            var data = { file_name: news_data[i].file_name, type: news_data[i].type, status: news_data[i].status, original_name: null, web_url: url, poster: poster };
          } else {
            var data = { file_name: news_data[i].file_name, type: news_data[i].type, status: news_data[i].status, original_name: null, web_url: url };
          }
          all_file.push(data);
        }
        var newShare = {
          author: news.author,
          crs_id: news.crs_id,
          //breakingNews: news.breakingNews,
          category: news.category,
          channel_id: this.get('auth').userId,
          createDate: news.createDate,
          detail: news.detail,
          //header: news.header,
          news_id: news.id,
          shareText: this.get("shareText"),
          postImg: all_file,
          // prioritize: news.prioritize,
          groupinfo: news.groupinfo,
          groupPost: news.groupPost,
          section: news.section,
          sourceNews: news.sourceNews,
          shareStamp: news.stamp,
          status: news.status,
          summary: news.summary,
          // tags: news.tags,
          title: news.title,
          userinfo: news.userinfo,
          shareuserinfo: { username: this.get('auth').username, userID: this.get('auth').userId, user_url: this.get('auth').user_url },
          sharePost: true,
          comments: 0,
          previous_state: news.previous_state

        };
        this.set('btndisable', true);
        console.log(newShare);
        var record = this.store.createRecord('social', newShare);
        record.save().then(news => {
          this.set('btndisable', false);
          // this.sendAction('goToSocial')
          this.set("shareText", '');
          this.transitionToRoute('social');
        });
      },
      cancel() {
        this.set("shareText", null);
        this.transitionToRoute('/');
      }
    }
  });
});
;define('vidya-frontend/controllers/entertainment/create-live', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    states: Ember.inject.service(),
    streamtoken: Ember.computed('states.stream_token', function () {
      console.log(this.get("states.stream_token"));
      return this.get("states.stream_token");
    }),
    actions: {
      donetoken() {
        this.set("states.stream_token", null);
        this.transitionToRoute("entertainment.home");
        this.store.unloadAll("enttoken");
      },
      record() {
        console.log('rtmp://streaming.vidya.social:1935/stream/' + this.get("states.stream_token"));
        videoStreamer.streamRTMPAuth('rtmp://streaming.vidya.social:1935/stream/' + this.get("states.stream_token"), function (res) {
          if (res.event_name == 'onConnectionSuccess') {
            videoStreamer.commentListShow(true, function (resCom) {}, function (e) {});
          }
        }, function (e) {});
      }
    }
  });
});
;define('vidya-frontend/controllers/entertainment/home', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    auth: Ember.inject.service("auth"),
    sortProperties: ['start_time:desc'],
    states: Ember.inject.service(),
    currentSlide: 1,
    showlog: false,
    reportModel: Ember.computed.sort('liveModel', 'sortProperties'),
    liveModel: Ember.computed('model', 'LiveMode', function () {
      let model = this.store.peekAll('entstreamlist');
      console.log(model);
      return model;
    }),
    uploadModel: Ember.computed.sort('vduploadModel', 'sortProperties'),
    vduploadModel: Ember.computed('model.uploadMode', function () {
      console.log(this.store.peekAll('entvideoupload'));
      return this.store.peekAll('entvideoupload');
    }),
    mainModel: Ember.computed('model', 'LiveMode', function () {
      // return this.store.peekAll('entstreamlist')
      // console.log(this.get("model"));
      return this.store.queryRecord("entstreamlist", { main_live: 'Senior Complete' }).then(post => {
        let model = this.store.peekAll("entmainlive");
        console.log(model.content.length);
        console.log(model);
        // return model;
        if (model.content.length > 0) {
          return this.set("showlog", false);
        } else {
          return this.set("showlog", true);
        }
        // return model
      });
    }),
    mainSecondModel: Ember.computed('model', 'LiveMode', function () {
      let model = this.store.peekAll("entmainlive");
      return model;
    }),
    actions: {
      createLive() {
        console.log(this.get("auth.accessToken"));
        var data = {
          "accesstoken": this.get("auth").accessToken
          // if(this.get("auth").phone === null){
          //   console.log("phone no is null");
          //   var data = {
          //     "accesstoken" : this.get("auth").accessToken
          //   }
          // }else {
          //   console.log("phone no is not null");
          //   var data = {
          //     "username" : this.get("auth").username,
          //     "phone" : this.get("auth").phone
          //   }
          // }
        };var record = this.store.createRecord("enttoken", data);
        record.save().then(response => {
          console.log(response);
          this.set('states.stream_token', response.token);
          this.transitionToRoute('entertainment.create-live');
        });
      },
      routeLiveDetail(_id) {
        this.transitionToRoute('/entertainment/live-detail/' + _id);
      },
      routeUploadDetail(_id) {
        this.transitionToRoute("/entertainment/upload-detail/" + _id);
      },
      liveTab(val) {
        this.set('currentSlide', val);
        var comp = document.getElementById('swiper-home');
        comp.swiper.slideTo(val);
        if (val == 0) {
          this.store.queryRecord('vduploadModel').then(data => {
            this.set('vduploadModel', data);
          });
        }
      }
    }
  });
});
;define('vidya-frontend/controllers/entertainment/live-detail', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    auth: Ember.inject.service(),
    duration: 2000,
    positionX: 'left',
    positionY: 'top',
    showAlert: false,
    enterModel: Ember.computed('model', "expReportModel", function () {
      return this.store.peekAll("entstreamlist");
    }),
    liveModel: Ember.computed('model', "editorModel", function () {
      return this.store.peekAll("livecomment");
    }),
    sendMsg(_id) {
      var data = { "userinfo": this.get("auth"), "streamid": _id, "comment": this.get("chat") };
      var result = this.store.createRecord("livecomment", data);
      result.save().then(response => {
        this.set("chat", "");
      });
    },
    actions: {
      scrollBottom() {
        // console.log("should scroll bottom?", this.element.scrollHeight)
        // this.element.scrollTop = this.element.scrollHeight
        // console.log(this.element)
        //   this.set("toBottom",true)

      },
      toggleTools() {
        this.toggleProperty("showTools");
      },
      handleChat(_id) {
        this.sendMsg(_id);
      },
      play(id) {
        // console.log("girjashanker Onclick Event");
        // console.log(id);
        this.store.findRecord("entstreamlist", id).then(result => {
          // console.log(result);
          var data = result.data.viewer_count + 1;
          result.set('viewer_count', data);
          result.save();
        });
        // return;
      },
      vote(wallet) {
        var _id = wallet.id;
        // console.log(this.get("auth").walletId);
        // console.log(this.get("wallet_pass"));
        var userid = this.get("auth").userId;
        this.store.findRecord("wallet", this.get("auth").walletId).then(response => {
          // console.log(response.votecount);
          if (response.votecount > 0) {
            var result_vote = response.votecount - 1;
            console.log(result_vote);
            response.set("votecount", result_vote);
            response.save().then(() => {
              var data = {
                "live_id": _id,
                "live_info": wallet,
                "user_id": this.get("auth").userId,
                "userinfo": this.get("auth"),
                "wallet_id": this.get("auth").walletId,
                "user_vote_count": 1
              };
              var result = this.store.createRecord("vote", data);
              result.save().then(success => {
                this.store.findRecord("entstreamlist", _id).then(success => {
                  var data = success.data.votecount + 1;
                  success.set('votecount', data);
                  success.save();
                });
              });
            });
          } else {
            this.set('showAlert', true);
          }
        });
      }
    }
  });
});
;define('vidya-frontend/controllers/home', ['exports', 'vidya-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  const {
    $,
    get,
    set
  } = Ember;

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
    var pilboxHost = _environment.default.pilboxHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
    var pilboxHost = _environment.default.pilboxHost;
  }

  exports.default = Ember.Controller.extend({
    states: Ember.inject.service(),
    currentSlide: 0,
    upperlimitNews: 0,
    upperrlimitCRS: 0,
    loadingNews: false,
    loadingCRS: false,
    showDialog: false,
    containerHeight: '',
    update: false,
    first: true,
    pagination: {
      el: '.swiper-pagination'
    },
    scrollingTimeout: 100,
    Recycle: true,
    crsModel: [],
    postModel: [],
    adsData: [],
    newsCount: 0,
    layoutChoose: Ember.computed('states.layoutChoose', function () {
      return this.get('states.layoutChoose');
    }),
    sortedHeadModel: Ember.computed.sort('headModel', 'sortProperties'),
    headerModel: Ember.computed('similarHeadModel', 'model', function () {
      var headline = this.store.peekAll('similarheader');
      var adsmodel = this.store.peekAll('advertise');
      var breaknews = headline.toArray();
      var ads = adsmodel.toArray();
      Array.prototype.insert = function (index, item) {
        this.splice(index, 0, item);
      };
      if (ads.length > 0) {
        for (var i = 3, l = 0; i <= breaknews.length; l++, i = i + 4) {
          breaknews.insert(i, ads[l]);
          if (l == ads.length - 1) l = -1;
        }
      }
      return breaknews;
      // return this.store.peekAll('similarheader')
    }),
    headModel: Ember.computed('headModel', function () {
      return this.store.peekAll('header');
    }),
    sortProperties: ['stamp:desc'],
    sortedModel: Ember.computed.sort('newsModel', 'sortProperties'),
    newsModel: Ember.computed('model', 'model.postModel', function () {
      var adsmodel = this.store.peekAll('advertise');
      var ads = adsmodel.toArray();
      if (ads.length > 0) {
        var adsImg = pilboxHost + '/?url=' + host + ads[0].upload.web_url + '&w=400&h=300&mode=clip&filter=bilinear&fmt=webp';
        var data = { 'post': { 'ads_link': ads[0].ads_link, 'company_name': ads[0].company_name, 'upload': adsImg, 'id': ads[0].id, 'stamp': ads[0].stamp } };
        this.get('store').pushPayload(data);
        ads.removeAt(0);
        this.set('adsData', ads);
      }
      let news = this.store.peekAll('post');
      this.set('newsCount', 0);
      return news;
    }),
    sortedCrsModel: Ember.computed.sort('crsNewsModel', 'sortProperties'),
    crsNewsModel: Ember.computed('crsModel', function () {
      let model = this.store.peekAll('crsnew');
      return model;
    }),
    exit: Ember.computed('states.exitDialog', function () {
      return this.get('states').exitDialog;
    }),
    // swiperHeight: Ember.observer('currentSlide',function(){
    //   try{
    //      if (this.get('currentSlide')==0){
    //       var compHeight = 230 * this.get('crsNewsModel').length
    //       this.set('containerHeight',model.length)
    //     }else{
    //       var compHeight = 110* this.get('newsModel').length
    //       this.set('containerHeight', compHeight)
    //     }
    //     console.log(this.get('containerHeight'))
    //     console.log(this.get('currentSlide'))
    //     document.getElementById('swiper-home').style.height=this.get('containerHeight')+'px'
    //   }catch(ex){}
    // }).on('init'),
    // }),
    actions: {
      closeDialogWithParent() {
        this.set('states.exitDialog', false);
      },
      ok() {
        this.set('states.exitDialog', false);
        navigator.app.exitApp();
      },
      goToSimilarNews(headline) {
        this.set("states.scrollCRSID", document.getElementById('content-list').scrollTop);
        this.transitionToRoute('index', {
          queryParams: {
            headline: headline
          }
        });
      },
      CreateShare(_id) {
        this.set("states.scrollID", document.getElementById('content-list').scrollTop);
        this.transitionToRoute('/news/create-share/' + _id);
      },
      routeToDetailNew(post_id) {
        if (this.get("currentSlide") == 0) {
          this.set("states.scrollID", document.getElementById('content-list').scrollTop);
        } else {
          this.set("states.scrollCRSID", document.getElementById('content-list').scrollTop);
        }
        this.set('states.post_id', post_id);
        this.transitionToRoute('news-detail', {
          queryParams: {
            post_id: post_id
          }
        });
      },
      loadBelow() {
        var that = this;
        var height = document.getElementById('news').offsetHeight;
        console.log(height);
        console.log('below News');
        // console.log(that.get("newsCount"))
        if (that.get("currentSlide") == 0) {
          // var post = that.store.peekAll('post')
          var newData = this.store.peekAll('lennew');
          var limit = newData.content.length;
          // if (that.get('adsData').length>0){
          //   var count =that.get('newsCount') + 1
          //   that.set('newsCount',count)
          //   var limit = post.content.length - that.get("newsCount") 
          // }else{

          // }

          var param = {
            limit: limit,
            checkCrs: 'False'
          };
          that.set("loadingNews", true);
          // console.log(that.get('newsCount'))
          return that.store.query('post', param).then(() => {
            if (that.get('adsData').length > 0) {
              var adsImg = pilboxHost + '/?url=' + host + that.get('adsData')[0].upload.web_url + '&w=400&h=300&mode=clip&filter=bilinear&fmt=webp';
              var data = { 'post': { 'ads_link': that.get('adsData')[0].ads_link, 'company_name': that.get('adsData')[0].company_name, 'upload': adsImg, 'id': that.get('adsData')[0].id, 'stamp': that.get('adsData')[0].stamp } };
              this.get('store').pushPayload(data);
              that.get('adsData').removeAt(0);
            }
            let model = that.store.peekAll("post");
            that.set("loadingNews", false);
            return model;
          });
        }
      },
      loadBelowCRS() {
        var that = this;
        console.log('crs');
        console.log(that.get('currentSlide'));
        if (that.get('first') == true) {
          var crsnew = that.store.peekAll('crsnew');
          console.log('crs below');
          var limit = crsnew.content.length;
          var param = {
            limit: crsnew.content.length,
            checkCrs: 'True'
          };
          that.set("loadingCRS", true);
          return that.store.query('crsnew', param).then(() => {
            let model = that.store.peekAll("crsnew");
            that.set("loadingCRS", false);
            that.set('first', false);
            return model;
          });
        } else if (that.get('currentSlide') == 1) {
          var crsnew = that.store.peekAll('crsnew');
          console.log('crs below');
          var limit = crsnew.content.length;
          var param = {
            limit: crsnew.content.length,
            checkCrs: 'True'
          };
          that.set("loadingCRS", true);

          return that.store.query('crsnew', param).then(() => {
            let model = that.store.peekAll("crsnew");
            that.set("loadingCRS", false);
            return model;
          });
        }
      },
      goToLogin() {
        this.transitionToRoute('login');
      },
      goToSocial() {
        this.transitionToRoute('social');
      },
      routeToCrsRalated() {
        this.transitionToRoute('news.crs-related');
      },
      goToTab(val) {
        // // console.log(val)
        this.set('currentSlide', val);
        var comp = document.getElementById('swiper-home');
        comp.swiper.slideTo(val);
        if (val == 1) {
          this.store.queryRecord('crsnew', {
            checkCrs: 'True'
          }).then(data => {
            this.set('crsModel', data);
          });
        }
      },
      routeToLink(url) {
        window.open(url, '_system');
      }
    }
  });
});
;define('vidya-frontend/controllers/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    states: Ember.inject.service(),
    checkPrivate: false,
    checknews: [],
    newsData: [],
    postImg: [],
    interModel: Ember.computed('states.interModel.length', function () {
      this.set('checknews', []);
      this.set('newsData', []);
      this.set('postImg', []);
      return this.get('states.interModel');
    }),
    localModel: Ember.computed('states.localModel.length', function () {
      return this.get('states.localModel');
    }),
    privateModel: Ember.computed('states.privateModel.length', function () {
      return this.get('states.privateModel');
    }),
    showhide: Ember.computed('showhideBtn', function () {
      if (this.get('checknews').length > 0) {
        return true;
      } else {
        return false;
      }
    }),
    actions: {
      routeToDetailNew(post_id) {
        this.set('states.post_id', post_id);
        this.transitionToRoute('news-detail', {
          queryParams: {
            post_id: post_id
          }
        });
      },
      routeToInterList() {
        this.transitionToRoute('/news/international-list', { queryParams: { section: 'International' } });
      },
      routeToLocalList() {
        this.transitionToRoute('/news/local-list', { queryParams: { section: 'Local' } });
      },
      routeToPrivateList() {
        this.transitionToRoute('/news/private-list', { queryParams: { section: 'Private' } });
      },
      routeToNews(_id) {
        this.transitionToRoute('news.post-detail', { queryParams: { post_id: _id } });
      },
      checkCRS(_id, check_state, check_news, item) {
        if (check_state) {
          this.get('checknews').push(_id);
          this.get('newsData').push({ 'id': _id, 'title': check_news });
          this.get('postImg').push(item.postImg[0]);
          this.set('showhideBtn', true);
        } else {
          this.get('checknews').splice(this.get('checknews').findIndex(e => e === _id), 1);
          this.get('newsData').splice(this.get('newsData').findIndex(e => e.id === _id), 1);
          this.get('postImg').splice(this.get('postImg').findIndex(e => e === item.postImg), 1);
        }
      },
      goToDialog() {
        console.log(this.get('checknews'));
        if (this.get('checknews').length == 0) {
          console.log('lalala');
        } else {
          this.transitionToRoute('news.create-crs', this.get('checknews').toString());
        }
        if (this.get('session.content.isAuthenticated') === true) {} else {
          this.transitionToRoute('login');
        }
      }
      // goToDialog(){
      //   this.set('checkid',this.get('checknews'))
      //   this.set('checkdata',this.get('newsData'))
      //   this.set('postImg',this.get('postImg'))
      //   this.set('showDialog',true)
      // }
    }
  });
});
;define('vidya-frontend/controllers/login', ['exports', 'vidya-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
  }

  exports.default = Ember.Controller.extend({
    alertMessage: '',
    auth: Ember.inject.service(),
    resizer: Ember.inject.service(),
    media: Ember.inject.service(),
    postImg: {
      "web_url": "/customer.png",
      'status': 'success'
    },
    progress: false,
    loading: 0,
    fileChooser: false,
    banned: false,
    multiFiles: [],
    code: "",
    phonenumber: "",
    accesstoken: '',
    disablebtn: false,
    imgDisplay: Ember.computed('postImg', 'fileChooser', function () {
      function isEmpty(obj) {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) return false;
        }
        return true;
      }
      if (isEmpty(this.get('postImg'))) {
        return false;
      } else {
        return this.get('postImg');
      }
    }),
    userBan: Ember.computed('banned', function () {
      console.log(this.get('banned'));
      return this.get('banned');
    }),
    btndisable: Ember.computed('code', 'phonenumber', function () {
      return this.get("code") === "" || this.get("phonenumber") === "";
    }),
    slide() {
      if (this.get('checkCard')) {
        this.set('checkCard', false);
        document.getElementById("tarnsform").style.transform = 'none';
      } else {
        // var card = document.querySelector('.card');
        // card.classList.toggle('is-flipped');
        // this.set('checkCard', true)
        document.getElementById("tarnsform").style.visibility = 'hidden';
      }
      var card = document.querySelector('.card');
      card.classList.toggle('is-flipped');
    },
    actions: {
      loginWithFacebook() {
        var that = this;
        //  web login  ////
        //   this.get('session').open('facebook-connect').then((authorization) => {
        //   console.log(authorization)
        //   if(authorization.currentUser.status === "banned") {
        //     console.log("You are banned")
        //     that.set("banned", true)
        //     that.get('session').close()
        //     return 
        //   }
        //   if(authorization.currentUser.user.user_url.web_url === "" ) {
        //   var img=document.getElementById("one")
        //   img.src = 'https://graph.facebook.com/' + authorization.currentUser.user.fbuserId + '/picture'
        //   img.onload = function(e) {
        //     var img_data = that.getBase64Image(img);
        //     that.setData(authorization.currentUser)
        //     that.uploadProcess(img_data, "image", "tmp.png", that.get("postImg"))
        //   };
        //   that.transitionToRoute("startup");
        //   }else {
        //     that.set('auth.user_url', authorization.currentUser.user.user_url)
        //     that.setData(authorization.currentUser)
        //     that.transitionToRoute("startup");
        //   }
        // })
        //  // Mobile login //
        this.get('session').open('fbnative').then(authorization => {
          if (authorization.currentUser.status === "banned") {
            console.log("You are banned");
            that.set("banned", true);
            that.get('session').close();
            return;
          }
          this.set('accesstoken', authorization.currentUser.user.accessToken);
          if (authorization.currentUser.user.user_url.web_url === "") {
            var img = document.getElementById("one");
            img.src = 'https://graph.facebook.com/' + authorization.currentUser.user.fbuserId + '/picture';
            img.onload = function (e) {
              var img_data = that.getBase64Image(img);
              that.setData(authorization.currentUser);
              that.uploadProcess(img_data, "image", "tmp.png", that.get("postImg"));
            };
            that.transitionToRoute("startup");
          } else {
            that.set('auth.user_url', authorization.currentUser.user.user_url);
            that.setData(authorization.currentUser);
            that.transitionToRoute("startup");
          }
        });
      },
      //  // Web login  ////
      // smsLogin() {
      //   var that = this;
      //   // web login  ////
      //   function loginCallback(response) {
      //     if (response.status === "PARTIALLY_AUTHENTICATED") {
      //       var code = response.code;
      //       var csrf = response.state;
      //       that.set('phone', that.get('phonenumber'))
      //       var reqUrl = ''
      //       if (that.get('media.isMobile')) {
      //         reqUrl = `${host}/user/current`
      //       } else {
      //         reqUrl = `/user/current`
      //       }
      //       Ember.$.ajax({
      //         url: reqUrl,
      //         data: {
      //           'phone': that.get('phonenumber'),
      //           'fbuserId': ''
      //         },
      //         dataType: 'json',
      //         type: 'GET',
      //         success: function(json_data) {
      //           console.log("settting accessToken from fetch()", json_data)
      //           if (json_data.user.length > 0) {
      //             that.get('session.content').currrentUser = {}
      //             that.get('session.content')['currrentUser'].user = json_data.user[0]
      //             that.get('session.content')['isAuthenticated'] = true;
      //             console.log(that.get('session.content'))
      //             that.setData(that.get('session.content')['currrentUser'])

      //               that.transitionToRoute('startup');


      //             }
      //             else {
      //             that.slide()
      //           }
      //         }
      //       });
      //       // Send code to server to exchange for access token
      //     } else if (response.status === "NOT_AUTHENTICATED") {
      //       console.log(response)
      //       that.set('currentStep', 0)
      //       // handle authentication failure
      //     } else if (response.status === "BAD_PARAMS") {
      //       console.log(response)
      //       that.set('currentStep', 0)
      //       // handle bad parameters
      //     }
      //   }
      //   AccountKit.login(
      //     'PHONE', {
      //       countryCode: this.get('code'),
      //       phoneNumber: this.get('phonenumber')
      //     }, // will use default values if not specified
      //     loginCallback
      //   );
      // },
      //  Mobile login  ////
      smsLogin() {
        var that = this;
        FacebookAccountKit.mobileLogin(function (response) {
          console.log(response);
          var myphone = response.mobile;
          myphone = myphone.substr(3, myphone);
          that.set('phone', myphone);
          that.set('accesstoken', response.accessToken);
          console.log(myphone);
          console.log(response.accessToken);
          var reqUrl = `${host}/user/current`;
          Ember.$.ajax({
            url: reqUrl,
            data: { 'phone': myphone, 'fbuserId': '', 'accessToken': response.accessToken },
            dataType: 'json',
            type: 'GET',
            success: function (json_data) {
              console.log("settting accessToken from fetch()", json_data);
              if (json_data.status[0]['ban'] === "banned") {
                console.log("You are banned");
                that.set("banned", true);
                that.get('session').close();
                return;
              }
              if (json_data.user.length > 0) {
                that.get('session.content').currrentUser = {};
                that.get('session.content')['currrentUser'].user = json_data.user[0];
                that.get('session.content')['isAuthenticated'] = true;
                console.log(that.get('session.content'));
                that.set('auth.user_url', json_data.user[0].user_url);
                that.setData(that.get('session.content')['currrentUser']);
                that.transitionToRoute('startup');
              } else {
                that.slide();
              }
            }
          });
        }, function (error) {
          console.log(error);
        });
      },

      saveUser() {
        var that = this;
        this.set('disablebtn', true);
        var a = this.get('username');
        if (a == null) {
          this.set('alertMessage', 'Please Enter Username!');
        } else {
          var myObj = this.get("postImg");
          if (JSON.stringify(myObj) == "{}") {
            console.log("this is no user photo upload");
            var photoImg = {
              "web_url": "/customer.png",
              'status': 'success'
            };
            console.log(photoImg);
          } else {
            console.log("this is user photo upload");
            var photoImg = this.get("postImg");
            console.log(photoImg);
          }
          console.log(this.get('accesstoken'));
          var data = {
            username: this.get('username'),
            phone: this.get('phone'),
            user_url: photoImg,
            accesstoken: this.get('accesstoken'),
            role: 'User',
            fbuserId: '',
            follower: [],
            following: [],
            info: {},
            group: [],
            photo_history: []
          };
          var record = this.store.createRecord("enduser", data);
          record.save().then(function (response) {
            response.data['id'] = response.id;
            that.get('session.content').currrentUser = {};
            that.get('session.content')['currrentUser'].user = response.data;
            that.get('session.content')['isAuthenticated'] = true;
            that.setData(that.get('session.content')['currrentUser']);
            that.set('auth.user_url', that.get('session.content')['currrentUser'].user.user_url);
            that.clearData();
            that.set('alertMessage', '');
            console.log('saveUser');
            this.set('disablebtn', false);
          });
        }
      },

      deleteImg(data, option) {
        var _id = {
          'fileid': data.file_name
        };
        var that = this;
        Ember.$.ajax({
          type: 'post',
          url: `${host}/upload/remove`,
          data: _id,
          dataType: 'json',
          success: function (response) {
            // that.get('postImg').splice(that.get('postImg').findIndex(e => e.file_name === data.file_name), 1);
            that.set('postImg', {});
            that.dataChanges();
          }
        });
      },

      selectImg(result) {
        this.uploadFile(result);
      },
      validityChange(isValid, isTouched, isInvalidAndTouched) {
        this.set('isInvalid', isInvalidAndTouched);
      }
    },
    uploadFile(result) {
      console.log(result);
      var that = this;

      var fetchData = function () {
        return new Promise(function (resolve, reject) {
          resolve();
        });
      };

      function appendOutput(result) {
        fetchData(result).then(function () {
          var type = result.type;
          var file_name = result.name;
          console.log(file_name);
          console.log(type);

          that.set('progress', true);
          var checkFile = type.split('/');
          if (checkFile[0] === 'image') {
            that.uploadProcess(result, type, file_name, checkFile[0]);
            // var reader = new FileReader();
            // reader.onload = function(e) { postImg: {
            //     "web_url": "/customer.png",
            //     'status': 'success'
            // },
            //   that.get("resizer").resize(e.target.result, 800, 600,
            //     (resizedata) => {
            //       function dataURLtoFile(dataurl, filename) {
            //         var bstr = atob(dataurl),
            //           n = bstr.length,
            //           u8arr = new Uint8Array(n);
            //         var mime = ':image/png',
            //           filename = "tmp.png"
            //         while (n--) {
            //           u8arr[n] = bstr.charCodeAt(n);
            //         }
            //         return new File([u8arr], filename, {
            //           type: mime
            //         });
            //       }
            //       var file = dataURLtoFile(resizedata.split(',')[1], 'tmp.png');
            //       that.uploadProcess(file, type, file_name, checkFile[0])
            //     }
            //   )
            // }
            // reader.readAsDataURL(result);
          }
        });
      }
      for (var i = 0; i < result.length; i++) {
        appendOutput(result[i]);
      }
    },
    uploadProcess(file, type, file_name, check) {
      var that = this;
      that.set("data", '');
      var fd = new FormData();
      fd.append("file", file);
      var url = `${host}/uploads`;
      var request = new XMLHttpRequest();
      request.responseType = 'json';
      request.open("POST", url, true);
      request.upload.onprogress = function (e) {
        var percentComplete = Math.ceil(e.loaded / e.total * 100);
        console.log(percentComplete);
        that.set('loading', percentComplete);
        if (e.lengthComputable) {
          console.log(e.loaded + " / " + e.total);
        }
      };
      request.onloadstart = function (e) {
        console.log(e.total);
        console.log("start");
      };
      request.onloadend = function (e) {
        console.log("end");
      };
      request.onload = function (e) {
        var imageobject = e.target.response;
        //   console.log(text);
        //   console.log(e);
        //   that.get("multiFiles").pushObject(text)

        var response = request.response;
        that.get('postImg')['type'] = type;
        that.get('postImg')['original_name'] = file_name;
        // that.get("postImg").pushObject(imageobject)
        that.set("postImg", imageobject);
        if (that.get('auth.fbuserId')) {
          console.log(that.get('postImg'));
          that.getFbImage();
          that.set('auth.user_url', that.get('postImg'));
        }
        function* porcressComplete(response) {
          console.log(response);
          yield response;
        }
        porcressComplete(response);
        that.set('progress', false);
      };
      request.send(fd);
    },
    dataChanges() {
      if (this.get('fileChooser') === true) {
        this.set('fileChooser', false);
      } else {
        this.set('fileChooser', true);
      }
    },
    clearData() {
      this.set('username', '');
      this.set('phone', '');
      this.set('postImg', {});
      this.set('currentStep', 0);
      this.transitionToRoute('startup');
    },
    setData(currentUser) {
      console.log(currentUser.user);
      localStorage.setItem('accessToken', currentUser.user.accesstoken);
      localStorage.setItem('fbuserId', currentUser.user.fbuserId);
      localStorage.setItem('id', currentUser.user.id);
      localStorage.setItem('phone', currentUser.user.phone);
      localStorage.setItem('startup', true);
      this.set('auth.userId', currentUser.user.id);
      this.set('auth.fbuserId', currentUser.user.fbuserId);
      this.set('auth.accessToken', currentUser.user.accesstoken);
      this.set('auth.username', currentUser.user.username);
      // this.set('auth.user_url', this.get('postImg'));
      this.set('auth.info', currentUser.user.info);
      this.set("auth.walletId", currentUser.user.walletid);
      this.set('auth.phone', currentUser.user.phone);
      this.set('auth.role', currentUser.user.role);
      this.set('auth.following', currentUser.user.following);
      this.set('auth.follower', currentUser.user.follower);
      this.set('auth.group', currentUser.user.group);
      var that = this;
      setTimeout(getTheToken, 1000);
      function getTheToken() {
        FCMPlugin.getToken(function (token) {
          console.log(token);
          if (token == null) {
            console.log("null token");
            setTimeout(getTheToken, 1000);
          } else {
            console.log(token);
            Ember.$.ajax({
              url: host + "/fcmtoken",
              data: {
                'token': token,
                'userid': that.get('auth.userId')
              },
              dataType: 'json',
              type: 'POST',
              success: function (json_data) {
                // var json_data = JSON.parse(data.user)
                console.log("settting accessToken from fetch()", json_data);
              }
            });
            console.log("I got the token: " + that.get('auth.userId'));
          }
        }, function (err) {
          console.log('error retrieving token: ' + err);
        });
      }
      // window.location.reload();
    },
    getBase64Image(img) {
      // Create an empty canvas element
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      // Copy the image contents to the canvas
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      // Get the data-URL formatted image
      // Firefox supports PNG and JPEG. You could check img.src to
      // guess the original format, but be aware the using "image/jpg"
      // will re-encode the image.
      var dataURL = canvas.toDataURL("image/jpeg");

      var bstr = atob(dataURL.replace(/^data:image\/(png|jpg|jpeg);base64,/, ""));
      var n = bstr.length;
      var byteNumbers = new Array(bstr.length);
      for (var i = 0; i < bstr.length; i++) {
        byteNumbers[i] = bstr.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);
      return new Blob([byteArray], {
        type: ':image/jpeg'
      });
    },
    getFbImage() {

      Ember.$.ajax({
        url: `${host}/facebookLogin`,
        type: 'PUT',
        data: { fbuserID: this.get('auth.fbuserId'), user_url: this.get("postImg").web_url, accesstoken: this.get('accesstoken') }
      });
    }
  });
});
;define('vidya-frontend/controllers/news-detail', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    animation: 'fling',
    direction: 'left',
    showDialog: false,
    adsModel: [],
    slide: 0,
    currentSlide: 0,
    currentCount: 0,
    reachedEnd: false,
    postCount: 0,
    selection: [],
    slideCount: Ember.observer('model.loadAll', function () {
      this.set("currentSlide", 0);
      this.set("currentCount", 0);
      this.set("selection", []);
      this.set("reachedEnd", false);
    }).on('init'),
    posts: Ember.computed('model.loadAll', function () {
      var stream = Ember.A();
      stream.pushObjects(this.get('model.loadOne').toArray());
      var adsmodel = this.store.peekAll('adsupdate');
      var ads = adsmodel.toArray();
      this.set('postCount', stream.length);
      console.log(this.get("postCount"));
      this.set('adsModel', ads);
      // Array.prototype.insert = function (index, item) {
      //   this.splice(index, 0, item);
      // };
      // if (ads.length>0){
      //   for(var i=2,l=0;i <= stream.length;l++,i =i+3){
      //     stream.insert(i,ads[l])
      //     if(l == ads.length-1)
      //     l=-1
      //   }
      // }
      // stream.pushObjects(this.get('model.loadAll').toArray());
      return stream;
      // console.log(this.get("model.loadAll"))
      // return this.store.peekAll('post')
    }),
    randomAds: Ember.computed('posts', 'currentSlide', function () {
      var items = this.get('adsModel');
      var count = this.get("currentCount");
      var select = this.get("selection");
      // var adsModel = items[Math.floor(Math.random()*items.length)];
      if (this.get("reachedEnd")) {
        var adsModel = items[select[this.get("currentSlide")]];
      } else {
        var adsModel = items[count];
        select.push(count);
        if (count < items.length) {
          count++;
          if (count >= items.length) {
            count = 0;
          }
          this.set("currentCount", count);
          this.set("selection", select);
        }
      }
      if (!this.get("reachedEnd")) {
        if (this.get("postCount") - 1 == this.get("currentSlide")) {
          this.set("reachedEnd", true);
        }
      }
      return adsModel;
    }),
    actions: {
      toggle(propName) {
        this.toggleProperty(propName);
      },
      CreateShare(_id) {
        if (localStorage.getItem('id') == null) {
          this.transitionToRoute('login');
        } else {
          this.transitionToRoute('/news/create-share/' + _id);
        }
      },
      scrollTop() {
        this.set('slide', document.getElementById('scroll-top').scrollTop);
        document.getElementById('scroll-top').scrollTop = 0;
      },
      goToLink(url) {
        window.open(url, '_system');
      }
    }
  });
});
;define('vidya-frontend/controllers/news/category', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    states: Ember.inject.service(),
    actions: {
      goToCatSearch(categoryname) {
        this.set('states.searchNews', null);
        this.transitionToRoute('/news/search-category/' + categoryname);
      }
    }
  });
});
;define('vidya-frontend/controllers/news/create-crs', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    btndisable: false,
    auth: Ember.inject.service(),
    checkdata: Ember.computed('model.createCrs', function () {
      return this.store.peekAll('post');
    }),
    postImg: Ember.computed('checkids', function () {
      var data = this.store.peekAll('post').toArray();
      var Img = [];
      for (var i = 0; i < data.length; i++) {
        Img.push(data[i].postImg[0]);
      }
      return Img;
    }),
    images: Ember.computed('postImg', function () {
      return this.get('postImg');
    }),
    actions: {
      createGroup() {
        this.set('btndisable', true);
        // console.log(this.get('auth.user_url'));
        var usrInfo = {
          userId: this.get('auth.userId'),
          user_url: this.get('auth.user_url'),
          username: this.get('auth.username'),
          role: this.get('auth.role')
        };
        var data = {
          "channelname": this.get("title"),
          "type": "public",
          "status": "News Group",
          "news_id": this.get("checkids"),
          "userlist": [this.get('auth.userId')],
          "userinfo": usrInfo,
          "postImg": this.get('images')
        };

        var record = this.store.createRecord("channel", data);
        record.save().then(response => {
          this.set('btndisable', false);
          this.transitionToRoute('social');
        });
      },
      cancel() {
        this.transitionToRoute('index');
      }
    },
    cleardata() {
      this.set('title', '');
      // this.set('checkid', [])
      // this.set('checkdata', [])
    }
  });
});
;define('vidya-frontend/controllers/news/create-share', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        btndisable: false,
        auth: Ember.inject.service(),
        share: Ember.computed('model', function () {
            return this.store.peekAll('onepost');
        }),
        actions: {
            share(news) {
                var all_file = [];
                var news_data = news.data.postImg;
                for (var i = 0; i < news_data.length; i++) {
                    var url = '/uploads/' + news_data[i].file_name;
                    if (news_data[i].type == 'video') {
                        var poster = news_data[i].poster;
                        var data = { file_name: news_data[i].file_name, type: news_data[i].type, status: news_data[i].status, original_name: null, web_url: url, poster: poster };
                    } else {
                        var data = { file_name: news_data[i].file_name, type: news_data[i].type, status: news_data[i].status, original_name: null, web_url: url };
                    }
                    all_file.push(data);
                }
                var newShare = {
                    author: news.author,
                    //breakingNews: news.breakingNews,
                    category: news.category,
                    channel_id: this.get('auth').userId,
                    createDate: news.createDate,
                    detail: news.detail,
                    //header: news.header,
                    news_id: news.id,
                    shareText: this.get("shareText"),
                    postImg: all_file,
                    // prioritize: news.prioritize,
                    section: news.section,
                    sourceNews: news.sourceNews,
                    shareStamp: news.stamp,
                    status: news.status,
                    summary: news.summary,
                    // tags: news.tags,
                    title: news.title,
                    userinfo: news.userinfo,
                    shareuserinfo: { username: this.get('auth').username, userID: this.get('auth').userId, user_url: this.get('auth').user_url },
                    sharePost: true,
                    comments: 0

                };
                this.set('btndisable', true);
                console.log(newShare);
                var record = this.store.createRecord('social', newShare);
                record.save().then(news => {
                    this.set('btndisable', false);
                    // this.sendAction('goToSocial')
                    this.set("shareText", '');
                    this.transitionToRoute('social');
                });
            },
            cancel() {
                this.set("shareText", null);
                this.transitionToRoute('/');
            }
        }
    });
});
;define('vidya-frontend/controllers/news/international-list', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    actions: {
      goToDetailNews(_id) {
        this.transitionToRoute('news.post-detail', { queryParams: { post_id: _id } });
      }
    }
  });
});
;define('vidya-frontend/controllers/news/local-list-card', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    actions: {
      goToDetailNews(_id) {
        this.transitionToRoute('news.post-detail', { queryParams: { post_id: _id } });
      }
    }
  });
});
;define('vidya-frontend/controllers/news/private-list-card', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    actions: {
      goToDetailNews(_id) {
        this.transitionToRoute('news.post-detail', { queryParams: { post_id: _id } });
      }
    }
  });
});
;define("vidya-frontend/controllers/news/random-news-list", [], function () {
  "use strict";
});
;define('vidya-frontend/controllers/news/search-category', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    states: Ember.inject.service(),
    upperlimitNews: 0,
    upperrlimitCRS: 0,
    sortProperties: ['stamp:desc'],
    sortedModel: Ember.computed.sort('newsModel', 'sortProperties'),
    newsModel: Ember.computed('model', function () {
      let model = this.store.peekAll('post');
      return model;
    }),
    actions: {
      routeToDetailNew(post_id) {
        this.set('states.post_id', post_id);
        this.transitionToRoute('news-detail', {
          queryParams: {
            post_id: post_id
          }
        });
      },
      CreateShare(_id) {
        this.transitionToRoute('/news/create-share/' + _id);
      },
      loadBelow() {
        var that = this;
        $("#content-list").scroll(function () {

          var element = document.getElementById("content-list");
          if (element.offsetHeight + element.scrollTop === element.scrollHeight) {
            if (that.get("currentSlide") == 0) {
              var post = that.store.peekAll('post');
              var limit = post.content.length;
              if (limit != that.get("upperlimitNews")) {
                that.set("upperlimitNews", limit);
                var param = {
                  limit: post.content.length
                };
                return that.store.query('post', param).then(() => {
                  let model = that.store.peekAll("post");
                  return model;
                });
              }
            } else {
              var header = that.store.peekAll('header');
              var limit = header.content.length;
              if (limit != that.get("upperlimitCRS")) {
                that.set("upperlimitCRS", limit);
                var param = {
                  limit: header.content.length
                };
                return that.store.query('header', param).then(() => {
                  let model = that.store.peekAll("header");
                  return model;
                });
              }
            }
          }
        });
      },
      goToLogin() {
        this.transitionToRoute('login');
      }
    }
  });
});
;define('vidya-frontend/controllers/notification', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    sortProperties: ['stamp:desc'],
    sortedNoti: Ember.computed.sort('model', 'sortProperties')

  });
});
;define('vidya-frontend/controllers/social-search', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        sortProperties: ['stamp:desc'],
        socialModel: Ember.computed.sort('dataModel', 'sortProperties'),
        dataModel: Ember.computed('model', function () {
            return this.store.peekAll('social');
        }),
        actions: {
            goToDiscuss(_id) {
                this.transitionToRoute('/discuss/chat/' + _id);
            },
            goToProfiles(_id) {
                console.log(_id);
                this.store.unloadAll("social");
                this.transitionToRoute('/user/profile/' + _id);
            },
            goToGroups(_id) {
                console.log(_id);
                this.store.unloadAll('social');
                this.transitionToRoute("/user/group/" + _id);
            }

        }
    });
});
;define('vidya-frontend/controllers/social', ['exports', 'vidya-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === "development") {
    var host = _environment.default.localHost;
  } else if (_environment.default.environment === "production") {
    var host = _environment.default.remoteHost;
  }
  exports.default = Ember.Controller.extend({
    auth: Ember.inject.service(),
    states: Ember.inject.service(),
    upperlimit: 0,
    auth: Ember.inject.service(),
    loading: false,
    loadingScroll: false,
    sortProperties: ['stamp:desc'],
    socialModel: Ember.computed.sort('dataModel', 'sortProperties'),
    bufferSize: 20,
    currentid: Ember.computed('auth.userId', function () {
      return this.get('auth.userId');
    }),
    dataModel: Ember.computed('socialData', function () {
      return this.store.peekAll('social');
    }),
    searchView: Ember.computed('states.searchView', function () {
      return this.get('states.searchView');
    }),
    scroll: Ember.observer('model', function () {
      var that = this;
      this.set("loadingScroll", true);
      Ember.run.later(function () {
        that.set("loadingScroll", false);
      }, 2000);
    }).on('init'),
    // init: function(){
    //   document.addEventListener("backbutton", onBackKeyDown, false);

    //   function onBackKeyDown() {
    //   // Handle the back button
    //   console.log('backbutton')
    //   }
    // },

    actions: {
      shareSocial(_id) {

        this.transitionToRoute("/discuss/share-social/" + _id);
      },
      createPost() {
        this.transitionToRoute('/discuss/create-social');
      },
      goToDiscuss(_id, index) {
        if ($("p#" + index + " > a").hasClass("clicked")) {
          $('a').removeClass("clicked");
        } else {
          this.set('states.socialScrollID', document.getElementById('content-list').scrollTop);
          this.transitionToRoute('/discuss/chat/' + _id);
        }
      },
      routeToDetailNew(post_id) {
        this.set('states.post_id', post_id);
        this.transitionToRoute('news-detail', {
          queryParams: {
            post_id: post_id
          }
        });
        console.log(post_id);
      },
      deleteSocial(item) {
        if (item.sharePost == false) {
          if (item.previous_state != 'CRS') {
            for (var i = 0; i < item.postImg.length; i++) {
              this.deleteImg(item.postImg[i]);
            }
          }
        }
        item.destroyRecord();
      },
      editSocial(post_id) {
        this.transitionToRoute('/discuss/edit-social/' + post_id);
      },
      loadBelow() {
        console.log('load below');
        var that = this;
        var social = that.store.peekAll('social');
        var limit = social.content.length;
        // this.set('bufferSize',limit)
        var param = {
          limit: social.content.length,
          current_id: that.get("auth.userId")
        };
        that.set("loading", true);
        return that.store.query('social', param).then(() => {
          let model = that.store.peekAll("social");
          that.set("loading", false);
          return model;
        });
      },
      goToProfiles(_id) {
        console.log(_id);
        this.store.unloadAll("social");
        this.transitionToRoute('/user/profile/' + _id);
      },
      goToGroups(_id) {
        console.log(_id);
        this.store.unloadAll('social');
        this.transitionToRoute("/user/group/" + _id);
      }
    },
    deleteImg(data, option) {
      var _id = {
        'fileid': data.file_name
      };
      var that = this;
      Ember.$.ajax({
        type: 'post',
        url: `${host}/upload/remove`,
        data: _id,
        dataType: 'json',
        success: function (response) {}
      });
    }

  });
});
;define('vidya-frontend/controllers/startup', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    auth: Ember.inject.service(),
    states: Ember.inject.service(),
    following: Ember.computed('auth.following', function () {
      return this.get('auth.following');
    }),
    groups: Ember.computed('auth.group', function () {
      return this.get('auth.group');
    }),
    sortProperties: ['username:asc'],
    sortGroupProperties: ['stamp:desc'],
    celeModel: Ember.computed.sort('dataModel', 'sortProperties'),
    dataModel: Ember.computed('model.celeData', 'states.searchUsers', function () {
      console.log(this.get('states.searchUsers'));
      if (this.get('states.searchUsers')) {
        this.store.unloadAll('celebrity');
        return this.store.query("celebrity", { username: this.get('states.searchUsers') });
      } else {
        let model = this.store.peekAll('celebrity');
        return model;
      }
    }),
    searchFinished: Ember.observer('states.searchClear', function () {
      this.send('sessionChanged');
    }),
    groupModel: Ember.computed.sort('group', 'sortGroupProperties'),
    group: Ember.computed('model.groupData', function () {
      return this.store.peekAll('channel');
    }),
    isSelf: Ember.computed('auth.userId', function () {
      return this.get('auth.userId');
    }),
    checkHead: [],
    showhideBtn: false,
    showhide: Ember.computed('showhideBtn', function () {
      if (this.get('checkHead').length > 0) {
        return true;
      } else {
        return false;
      }
    }),

    actions: {
      findGroups() {
        this.transitionToRoute("/user/find-groups");
      },
      goToFriends(type) {
        this.transitionToRoute("/user/find-friends/" + type);
      },
      createPost() {
        this.set('showDialog', true);
      },
      goToGroups(_id) {
        this.store.unloadAll("social");
        this.transitionToRoute("/user/group/" + _id);
      },
      gotoProfile(_id) {
        this.store.unloadAll("social");
        this.transitionToRoute('/user/profile/' + _id);
      },
      goToSocial() {
        localStorage.setItem('startup', false);

        this.transitionToRoute('social');
      },
      followHandler(_id, option, item) {
        var usr_id = '';
        var otherinfo = {};
        if (option === 'news') {
          usr_id = this.get('auth.userId');
          var data = {
            'usr_id': usr_id,
            '_id': _id,
            'option': option
          };
          var comp = document.getElementById(_id);
          if (comp.classList.value === 'btn btn--inactive') {
            comp.textContent = 'join';
            comp.setAttribute('class', 'btn btn--active');
            this.followChanges(data, 'uncheck', otherinfo, 'group');
          } else {
            comp.textContent = 'joined';
            comp.setAttribute('class', 'btn btn--inactive');
            this.followChanges(data, 'check', otherinfo, 'group');
          }
        } else {
          otherinfo = {
            username: item.data.username,
            userId: item.id,
            role: item.data.role,
            user_url: item.data.user_url
          };
          usr_id = _id;
          var data = {
            'usr_id': usr_id,
            '_id': _id,
            'option': option
            // var comp = document.getElementById(_id)
          };if ($('#' + _id + ' .circle').attr('class') === 'circle follow') {
            $('#' + _id + ' .circle').removeClass('follow').addClass('unfollow');
            this.followChanges(data, 'check', otherinfo, 'person');
            // $('#' + _id + ' .circle-loader').toggleClass('load-complete');
            $('#' + _id + ' .checkmark').toggle();
          } else {
            $('#' + _id + ' .circle').removeClass('unfollow').addClass('follow');
            this.followChanges(data, 'uncheck', otherinfo, 'person');
            // $('#' + _id + ' .circle-loader').toggleClass('load-complete');
            $('#' + _id + ' .checkmark').toggle();
          }
        }
        console.log(option);
        if (option) {
          this.get('checkHead').push(_id);
          this.set('showhideBtn', true);
        } else {
          this.get('checkHead').splice(this.get('checkHead').findIndex(e => e === _id), 1);
          this.set('showhideBtn', false);
        }
        if (this.get('showhideBtn') === true) {
          this.set('showhideBtn', false);
        } else {
          this.set('showhideBtn', true);
        }
      }
    },
    followChanges(data, option, otherinfo, choice) {
      function removeA(arr) {
        var what,
            a = arguments,
            L = a.length,
            ax;
        while (L > 1 && arr.length) {
          what = a[--L];
          while ((ax = arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
          }
        }
        return arr;
      }
      if (option === 'check') {
        if (choice === 'person') {
          this.get('auth.following').push(data._id);
        } else if (choice === 'group') {
          this.get('auth.group').push(data._id);
        }
      } else {
        if (choice === 'person') {
          removeA(this.get("auth.following"), data._id);
        } else if (choice === 'group') {
          removeA(this.get("auth.group"), data._id);
        }
      }
      var userinfo = {
        username: this.get('auth.username'),
        userId: this.get('auth.userId'),
        role: this.get('auth.role'),
        user_url: this.get('auth.user_url')
      };

      this.store.findRecord("enduser", data.usr_id).then(usr => {
        if (data.option === 'news') {
          usr.set('channel_id', data._id);
        } else {
          usr.set('otherinfo', otherinfo);
        }
        usr.set('info', userinfo);
        usr.set('check', {
          option: option,
          user: data.option,
          follow: "none"
        });
        usr.save();
      });
    }
  });
});
;define('vidya-frontend/controllers/tabs/entertainment', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({});
});
;define('vidya-frontend/controllers/user/chat-list', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    auth: Ember.inject.service(),
    states: Ember.inject.service(),
    isSelf: Ember.computed('auth', function () {
      console.log(this.get('auth.userId'));
      return this.get('auth.userId');
    }),
    following: Ember.computed('auth.following', function () {
      return this.get('auth.following');
    }),
    sortProperties: ['stamp:desc'],
    sortedModel: Ember.computed.sort('chatData', 'sortProperties'),
    chatData: Ember.computed('model.chatModel', function () {
      return this.store.peekAll('chatlist');
    }),
    sortedGroup: Ember.computed.sort('groupData', 'sortProperties'),
    groupData: Ember.computed('model.groupModel', function () {
      return this.store.peekAll('grouplist');
    }),
    actions: {
      goToChat(_id, chatProfile, name, type, channelname, userinfo, userlist) {
        this.set("states.chatUser", chatProfile);
        this.set("states.chatUserName", name);
        this.set("states.groupchannel_id", _id);
        this.set("states.chat_type", type);
        this.set("states.groupname", channelname);
        this.set("states.userinfo", userinfo);
        this.set("states.groupuserlist", userlist);
        console.log(userlist);
        this.transitionToRoute('/user/chat/' + _id);
      },
      routeToGroupList() {
        this.transitionToRoute('/user/group-chat-list/' + this.get('auth.userId'));
      },
      routeToUserList() {
        this.transitionToRoute('/user/user-chat-list');
      },
      loadBelow() {
        var that = this;
        var chatlist = that.store.peekAll('chatlist');
        var follow = this.get('auth.userId');
        var param = {
          limit: chatlist.content.length,
          following: follow.toString()
        };
        return that.store.query('chatlist', param).then(() => {
          let model = that.store.peekAll("chatlist");
          return model;
        });
      }
    }
  });
});
;define('vidya-frontend/controllers/user/chat', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    states: Ember.inject.service(),
    uploadimage: Ember.inject.service(),
    auth: Ember.inject.service(),
    chatMessage: null,
    filetype: null,
    chat_id: null,
    filteredChat: Ember.computed('messageData', 'states.channel_id', function () {
      let model = this.store.peekAll('message');
      return model;
    }),
    // clearData() {
    //   // this.set('progressDisplay', 'progress-hide');
    //   // this.set('img_url', this.get('data'));
    //   // this.set('data', '');
    //   // this.set('name', '');
    //   // this.set('filetype', null);
    //   // this.set('chat_id', null);
    //  },
    currentid: Ember.computed('auth.userId', function () {
      return this.get('auth.userId');
    }),

    actions: {
      recordChat: function (message, channel_id, imgdata) {
        this.set('chatMessage', message);
        var userinfo = {
          username: this.get('auth.username'),
          role: this.get('auth.role'),
          user_url: this.get('auth.user_url')
        };
        const rec = this.store.createRecord("message", {
          username: this.get('auth.username'),
          userid: this.get('auth.userId'),
          message: message,
          channel_id: channel_id,
          img_url: imgdata,
          userinfo: userinfo
        });
        rec.save().then(chat => {});
      },
      deleteComment(item) {
        item.destroyRecord();
      },
      fullScreen(_id) {
        var elem = document.getElementById(_id);
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          /* Firefox */
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
          /* Chrome, Safari & Opera */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
          /* IE/Edge */
          elem.msRequestFullscreen();
        }
      }

    }
  });
});
;define('vidya-frontend/controllers/user/chatting', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({});
});
;define("vidya-frontend/controllers/user/create-group", ["exports", "vidya-frontend/config/environment"], function (exports, _environment) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === "development") {
    var host = _environment.default.localHost;
  } else if (_environment.default.environment === "production") {
    var host = _environment.default.remoteHost;
    var pilboxHost = _environment.default.pilboxHost;
  }

  exports.default = Ember.Controller.extend({
    resizer: Ember.inject.service(),
    auth: Ember.inject.service(),
    uploadimage: Ember.inject.service(),
    states: Ember.inject.service(),
    showDialog: false,
    icon: "",
    multiFiles: [],
    postImg: [],
    fileChooser: false,
    images: [],
    videoPlayer: {},
    voicePlayer: {},
    disablebtn: false,
    cancelbutton: false,
    chatAddon: false,
    init() {
      this._super(...arguments);
    },
    imgDisplay: Ember.computed("fileChooser", function () {
      console.log(this.get("postImg"));
      return this.get("postImg");
    }),
    openDialog: Ember.computed("states.openDialog", function () {
      return this.get("states").openDialog;
    }),
    progressUpload: Ember.computed("uploadimage.progress", function () {
      console.log(this.get("uploadimage").progress);
      return this.get("uploadimage").progress;
    }),
    progressPercentage: Ember.computed("uploadimage.loading", function () {
      return this.get("uploadimage").loading;
    }),
    cancel: Ember.observer("states.cancelDisable", function () {
      console.log(this.get("states.cancelDisable"));
      this.set("cancelbutton", this.get("states.cancelDisable"));
    }),
    disabletext: Ember.computed.empty("post"),
    disableimg: Ember.computed.empty("imgDisplay"),
    // isdisable: and('disableimg', 'disabletext'),
    isdisable: Ember.computed("fileChooser", "uploadimage.uploaded", "imgDisplay", "disabletext", "disableimg", function () {
      if (this.get("images").length > 0) {
        console.log(this.get("images").length);
        console.log(this.get("postImg").length);
        if (this.get("images").length == this.get("postImg").length) {
          console.log("B");
          return false;
        } else {
          console.log("C");
          return true;
        }
      } else {
        console.log("A");
        return this.get("disabletext") && this.get("disableimg");
      }
    }),
    didRender() {
      this._super(...arguments);
    },

    actions: {
      chatMenu() {
        this.set("chatAddon", true);
      },
      chatMenuoff() {
        this.set("chatAddon", false);
      },
      // keyDownReceived(evt) {
      //   if (evt.keyCode === 13) {
      //     evt.preventDefault();
      //     if(this.get("post")) {
      //       console.log("\n")
      //     this.set("post", this.get("post")+ "\n")
      //     }
      //     else {
      //       console.log("\n")
      //     this.set("post", "\n")
      //     }
      //     console.log(this.get("post"))
      //   }
      // },
      closeDialog() {
        if (this.get("uploadimage.progress")) {
          this.set("states.openDialog", true);
        } else {
          try {
            this.get("videoPlayer").record().player.record().destroy();
          } catch (ex) {}
          try {
            this.get("voicePlayer").record().player.record().destroy();
          } catch (ex) {}
          this.clearData();
          window.history.back();
        }
      },
      closeDialogWithParent() {
        this.set("states.openDialog", false);
      },
      saveData() {
        this.set("disablebtn", true);
        var usrInfo = {
          userId: this.get("auth.userId"),
          user_url: this.get("auth.user_url"),
          username: this.get("auth.username"),
          role: this.get("auth.role")
        };

        var data = {
          channelname: this.get("channelname"),
          status: "User Group",
          type: "public",
          postImg: this.get('postImg'),
          userlist: [],
          userinfo: usrInfo,
          banuser_list: []
        };
        var that = this;
        var record = this.store.createRecord("onechannel", data);
        record.save().then(function (response) {
          that.clearData();
          that.set("disablebtn", false);
          that.store.unloadAll('social');
          that.transitionToRoute("/user/group/" + response.id);
        });
      },
      ok() {
        this.get("uploadimage").cancelUpload();
        try {
          this.get("videoPlayer").record().player.record().destroy();
        } catch (ex) {}
        try {
          this.get("voicePlayer").record().player.record().destroy();
        } catch (ex) {}
        this.clearData();
        this.set("states.openDialog", false);
        window.history.back();
      },
      deleteImg(data, option) {
        var _id = {
          fileid: data.file_name
        };
        var that = this;
        Ember.$.ajax({
          type: "post",
          url: `${host}/upload/remove`,
          data: _id,
          dataType: "json",
          success: function (response) {
            that.get("postImg").splice(that.get("postImg").findIndex(e => e.file_name === data.file_name), 1);
            if (that.get("images").length > 0) {
              that.get("images").pop();
            }
            that.dataChanges();
          }
        });
      },
      selectImg(result) {
        this.get("uploadimage").uploadFiles(result, this.get("postImg"));
      },
      getPhoto() {
        var that = this;
        window.imagePicker.getPictures(function (results) {
          for (var i = 0; i < results.length; i++) {
            // console.log('Image URI: ' + results[i]);
            function getFileContentAsBase64(path, callback) {
              window.resolveLocalFileSystemURL(path, gotFile, fail);

              function fail(e) {
                alert("Cannot found requested file");
              }

              function gotFile(fileEntry) {
                fileEntry.file(function (file) {
                  var reader = new FileReader();
                  reader.onloadend = function (e) {
                    var content = this.result;
                    callback(content);
                  };
                  reader.readAsDataURL(file);
                });
              }
            }
            var path = results[i];

            // Convert image
            getFileContentAsBase64(path, function (base64Photo) {
              // console.log(base64Photo)
              that.set("uploadimage.progress", true);
              that.set("states.cancelDisable", true);
              that.convertFile(base64Photo, "image");
            });
          }
        }, function (error) {
          console.log("Error: " + error);
        }, {
          maximumImagesCount: 30,
          width: 1024
        });
      },
      getCamera() {
        var that = this;

        function error(e) {
          console.log(e + "error");
        }

        function success(imageData) {
          that.convertFile(imageData, "image");
        }
        navigator.camera.getPicture(success, error, {
          quality: 80,
          destinationType: Camera.DestinationType.DATA_URL
        });
      },
      getVideo() {
        var that = this;

        var captureSuccess = function (mediaFile) {
          function getFileContentAsBase64(path, callback) {
            window.resolveLocalFileSystemURL(path, gotFile, fail);

            function fail(e) {
              alert("Cannot found requested file");
            }

            function gotFile(fileEntry) {
              fileEntry.file(function (file) {
                var reader = new FileReader();
                reader.onloadend = function (e) {
                  var content = this.result;
                  callback(content);
                };
                // The most important point, use the readAsDatURL Method from the file plugin
                reader.readAsDataURL(file);
              });
            }
          }
          var path = mediaFile[0].fullPath;

          // Convert image
          getFileContentAsBase64(path, function (base64Video) {
            that.set("uploadimage.progress", true);
            that.set("states.cancelDisable", true);
            that.convertFile(base64Video, "video");
            // Then you'll be able to handle the myimage.png file as base64
          });
        };
        // capture error callback
        var captureError = function (error) {
          navigator.notification.alert("Error code: " + error.code, null, "Capture Error");
        };

        // start video capture
        navigator.device.capture.captureVideo(captureSuccess, captureError, {
          limit: 1,
          quality: 0
        });
      },
      getVoice() {
        var that = this;

        var captureSuccess = function (mediaFile) {
          function getFileContentAsBase64(path, callback) {
            window.resolveLocalFileSystemURL(path, gotFile, fail);

            function fail(e) {
              alert("Cannot found requested file");
            }

            function gotFile(fileEntry) {
              fileEntry.file(function (file) {
                var reader = new FileReader();
                reader.onloadend = function (e) {
                  var content = this.result;
                  callback(content);
                };
                // The most important point, use the readAsDatURL Method from the file plugin
                reader.readAsDataURL(file);
              });
            }
          }
          var path = mediaFile[0].fullPath;

          // Convert image
          getFileContentAsBase64(path, function (base64Voice) {
            // console.log(base64Voice)
            that.set("uploadimage.progress", true);
            that.set("states.cancelDisable", true);
            that.convertFile(base64Voice, "voice");
            // that.convertFile(base64Image, 'voice')
            // Then you'll be able to handle the myimage.png file as base64
          });
        };
        // capture error callback
        var captureError = function (error) {
          navigator.notification.alert("Error code: " + error.code, null, "Capture Error");
        };
        // start audio capture
        navigator.device.capture.captureAudio(captureSuccess, captureError, { limit: 1 });
      },
      getFiles() {
        var that = this;
        var resultMedias = [];

        var args = {
          selectMode: 101, //101=picker image and video , 100=image , 102=video
          maxSelectCount: 15, //default 40 (Optional)
          maxSelectSize: 100000000, //188743680=180M (Optional) only android
          quality: 90
        };
        MediaPicker.getMedias(args, function (medias) {
          resultMedias = medias;
          getThumbnail(medias);
        }, function (e) {
          console.log(e);
        });

        function getFileContentAsBase64(path, callback) {
          window.resolveLocalFileSystemURL(path, gotFile, fail);

          function fail(e) {
            alert("Cannot found requested file");
          }

          function gotFile(fileEntry) {
            fileEntry.file(function (file) {
              var reader = new FileReader();
              reader.onloadend = function (e) {
                var content = this.result;
                callback(content);
              };
              // The most important point, use the readAsDatURL Method from the file plugin
              reader.readAsDataURL(file);
            });
          }
        }

        function getThumbnail(medias) {
          for (var i = 0; i < medias.length; i++) {
            medias[i].quality = 90;
            that.get("images").push(medias[i]);
            that.dataChanges();
            MediaPicker.extractThumbnail(medias[i], function (data) {
              that.set("uploadimage.progress", true);
              that.set("states.cancelDisable", true);
              getFileContentAsBase64(data.uri, function (base64Img) {
                that.convertFile(base64Img, data.mediaType);
              });
              // if (data.mediaType === 'image'){
              //     that.convertFile(data.thumbnailBase64, data.mediaType)
              // }else{
              //   getFileContentAsBase64(data.uri,function(base64Video){
              //     that.convertFile(base64Video, data.mediaType)
              //   });
              // }
            }, function (e) {
              console.log(e);
            });
          }
        }
      }
    },

    dataChanges() {
      if (this.get("fileChooser") === true) {
        this.set("fileChooser", false);
      } else {
        this.set("fileChooser", true);
      }
    },
    clearData() {
      this.set("post", "");
      this.set("postImg", []);
      this.set("images", []);
      this.set("uploadimage.process", []);
      this.dataChanges();
    },
    convertFile(imageData, type) {
      var mime = "";
      var filename = "";

      function dataURLtoFile(dataurl, filetype) {
        try {
          var bstr = atob(dataurl.split(",")[1]);
        } catch (ex) {
          var bstr = atob(dataurl);
        }
        var n = bstr.length;
        var byteNumbers = new Array(bstr.length);
        for (var i = 0; i < bstr.length; i++) {
          byteNumbers[i] = bstr.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);
        return new Blob([byteArray], { type: filetype });
      }
      if (type == "image") {
        var dataURI = "data:image/png;base64," + +imageData;
        var file = dataURLtoFile(imageData, ":image/png");
        this.get("uploadimage").uploadProcess(file, type, "tmp.png", this.get("postImg"));
      } else {
        var dataURI = "data:video/mp4;base64," + +imageData;
        var file = dataURLtoFile(imageData, ":image/mp4");
        this.get("uploadimage").uploadProcess(file, type, "tmp.mp4", this.get("postImg"));
      }
    },
    uploadFiles(result) {
      var that = this;
      this.set("progress", true);
      console.log(result);
      for (var i = 0; i < result.length; i++) {
        var type = result[i].type;
        var file_name = result[i].name;
        var checkFile = type.split("/");
        var reader = new FileReader();
        reader.onload = function (e) {
          that.get("resizer").resize(e.target.result, 280, 170, resizedata => {
            function dataURLtoFile(dataurl, filename) {
              var bstr = atob(dataurl),
                  n = bstr.length,
                  u8arr = new Uint8Array(n);
              var mime = ":image/png",
                  filename = "tmp.png";
              while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
              }
              return new File([u8arr], filename, { type: mime });
            }
            var file = dataURLtoFile(resizedata.split(",")[1], "tmp.png");
            that.uploadProcess(file, type, file_name);
          });
        };
        reader.readAsDataURL(result[i]);
      }
    },
    uploadProcess(file, type, file_name) {
      var that = this;
      that.set("data", "");
      var reqUrl = "";
      reqUrl = `${host}/uploads`;
      var fd = new FormData();
      fd.append("file", file);
      var request = new XMLHttpRequest();
      request.responseType = "json";
      request.open("POST", reqUrl, true);
      request.upload.onprogress = function (e) {
        var percentComplete = Math.ceil(e.loaded / e.total * 100);
        console.log(percentComplete);
        that.set("loading", percentComplete);
        if (e.lengthComputable) {
          console.log(e.loaded + " / " + e.total);
        }
      };
      request.onloadstart = function (e) {
        console.log(e.total);
        console.log("start");
      };
      request.onloadend = function (e) {
        // console.log(e)
        console.log("end");
      };
      request.onload = function (e) {
        var response = request.response;
        var imageobject = e.target.response;
        console.log(type);
        that.get("postImg")["type"] = type;
        that.get("postImg")["original_name"] = file_name;
        that.get("postImg").pushObject(imageobject);
        that.dataChanges();

        function* porcressComplete(response) {
          console.log(response);
          yield response;
        }
        porcressComplete(response);
        that.set("progress", false);
      };
      request.send(fd);
    }
  });
});
;define('vidya-frontend/controllers/user/find-friends', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({

        auth: Ember.inject.service(),
        states: Ember.inject.service(),
        checkHead: [],
        following: Ember.computed('auth.following', function () {
            return this.get('auth.following');
        }),
        sortProperties: ['username:asc'],
        celeModel: Ember.computed.sort('dataModel', 'sortProperties'),
        dataModel: Ember.computed('model', 'states.searchUsers', function () {
            console.log(this.get('states.searchUsers'));
            if (this.get('states.searchUsers')) {
                this.store.unloadAll('celebrity');
                return this.store.query("celebrity", { username: this.get('states.searchUsers') });
            } else {
                let model = this.store.peekAll('celebrity');
                return model;
            }
        }),
        searchFinished: Ember.observer('states.searchClear', function () {
            this.send('sessionChanged');
        }),
        isSelf: Ember.computed('auth.userId', function () {
            return this.get('auth.userId');
        }),
        actions: {
            gotoProfile(_id) {
                this.store.unloadAll("social");
                this.transitionToRoute('/user/profile/' + _id);
            },
            loadBelow() {
                var that = this;
                var celebrity = that.store.peekAll('celebrity');

                var param = {
                    limit: celebrity.content.length,
                    role: this.get("states.friendRole")
                };

                return that.store.query('celebrity', param).then(() => {
                    let model = that.store.peekAll("celebrity");

                    return model;
                });
            },

            followHandler(_id, option, item) {
                var usr_id = '';
                var otherinfo = {};
                if (option === 'news') {
                    usr_id = this.get('auth.userId');
                    var data = {
                        'usr_id': usr_id,
                        '_id': _id,
                        'option': option
                    };
                    var comp = document.getElementById(_id);
                    if (comp.classList.value === 'btn btn--inactive') {
                        comp.textContent = 'join';
                        comp.setAttribute('class', 'btn btn--active');
                        this.followChanges(data, 'uncheck', otherinfo, 'group');
                    } else {
                        comp.textContent = 'joined';
                        comp.setAttribute('class', 'btn btn--inactive');
                        this.followChanges(data, 'check', otherinfo, 'group');
                    }
                } else {
                    otherinfo = {
                        username: item.data.username,
                        userId: item.id,
                        role: item.data.role,
                        user_url: item.data.user_url
                    };
                    usr_id = _id;
                    var data = {
                        'usr_id': usr_id,
                        '_id': _id,
                        'option': option
                        //var comp = document.getElementById(_id)
                    };if ($('#' + _id + ' .circle').attr('class') === 'circle follow') {
                        $('#' + _id + ' .circle').removeClass('follow').addClass('unfollow');
                        this.followChanges(data, 'check', otherinfo, 'person');
                        // $('#' + _id + ' .circle-loader').toggleClass('load-complete');
                        $('#' + _id + ' .checkmark').toggle();
                    } else {
                        $("#" + _id + " .circle").removeClass("unfollow").addClass("follow");
                        this.followChanges(data, 'uncheck', otherinfo, 'person');
                        // $('#' + _id + ' .circle-loader').toggleClass('load-complete');
                        $('#' + _id + ' .checkmark').toggle();
                    }
                }
                console.log(option);
                if (option) {
                    this.get('checkHead').push(_id);
                    this.set('showhideBtn', true);
                } else {
                    this.get('checkHead').splice(this.get('checkHead').findIndex(e => e === _id), 1);
                    this.set('showhideBtn', false);
                }
                if (this.get('showhideBtn') === true) {
                    this.set('showhideBtn', false);
                } else {
                    this.set('showhideBtn', true);
                }
            }
        },
        followChanges(data, option, otherinfo, choice) {
            function removeA(arr) {
                var what,
                    a = arguments,
                    L = a.length,
                    ax;
                while (L > 1 && arr.length) {
                    what = a[--L];
                    while ((ax = arr.indexOf(what)) !== -1) {
                        arr.splice(ax, 1);
                    }
                }
                return arr;
            }
            if (option === 'check') {
                if (choice === 'person') {
                    this.get('auth.following').push(data._id);
                } else if (choice === 'group') {
                    this.get('auth.group').push(data._id);
                }
            } else {
                if (choice === 'person') {
                    removeA(this.get("auth.following"), data._id);
                } else if (choice === 'group') {
                    removeA(this.get("auth.group"), data._id);
                }
            }
            var userinfo = {
                username: this.get('auth.username'),
                userId: this.get('auth.userId'),
                role: this.get('auth.role'),
                user_url: this.get('auth.user_url')
            };

            this.store.findRecord("enduser", data.usr_id).then(usr => {
                if (data.option === 'news') {
                    usr.set('channel_id', data._id);
                } else {
                    usr.set('otherinfo', otherinfo);
                }
                usr.set('info', userinfo);
                usr.set('check', {
                    option: option,
                    user: data.option,
                    follow: "none"
                });
                usr.save();
            });
        }
    });
});
;define('vidya-frontend/controllers/user/find-groups', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        auth: Ember.inject.service(),
        states: Ember.inject.service(),
        following: Ember.computed('auth.following', function () {
            return this.get('auth.following');
        }),
        groups: Ember.computed('auth.group', function () {
            return this.get('auth.group');
        }),
        isSelf: Ember.computed('auth.userId', function () {
            return this.get('auth.userId');
        }),
        groupInfo: Ember.computed('model', function () {
            return this.store.peekAll("channel");
        }),
        checkHead: [],
        showhideBtn: false,
        showhide: Ember.computed('showhideBtn', function () {
            if (this.get('checkHead').length > 0) {
                return true;
            } else {
                return false;
            }
        }),
        actions: {
            loadBelow() {
                var that = this;
                var channel = that.store.peekAll('channel');

                var param = {
                    limit: channel.content.length,
                    user_id: this.get("auth.userId")
                };

                return that.store.query('channel', param).then(() => {
                    let model = that.store.peekAll("channel");

                    return model;
                });
            },
            goToGroups(_id) {
                this.store.unloadAll("social");
                this.transitionToRoute("/user/group/" + _id);
            },

            followHandler(_id, option, item) {
                var usr_id = '';
                var otherinfo = {};
                if (option === 'news') {
                    usr_id = this.get('auth.userId');
                    var data = {
                        'usr_id': usr_id,
                        '_id': _id,
                        'option': option
                    };
                    var comp = document.getElementById(_id);
                    if (comp.classList.value === 'btn btn--inactive') {
                        comp.textContent = 'join';
                        comp.setAttribute('class', 'btn btn--active');
                        this.followChanges(data, 'uncheck', otherinfo, 'group');
                    } else {
                        comp.textContent = 'joined';
                        comp.setAttribute('class', 'btn btn--inactive');
                        this.followChanges(data, 'check', otherinfo, 'group');
                    }
                } else {
                    otherinfo = {
                        username: item.data.username,
                        userId: item.id,
                        role: item.data.role,
                        user_url: item.data.user_url
                    };
                    usr_id = _id;
                    var data = {
                        'usr_id': usr_id,
                        '_id': _id,
                        'option': option
                        //var comp = document.getElementById(_id)
                    };if ($('#' + _id + ' .circle').attr('class') === 'circle follow') {
                        $('#' + _id + ' .circle').removeClass('follow').addClass('unfollow');
                        this.followChanges(data, 'check', otherinfo, 'person');
                        // $('#' + _id + ' .circle-loader').toggleClass('load-complete');
                        $('#' + _id + ' .checkmark').toggle();
                    } else {
                        $("#" + _id + " .circle").removeClass("unfollow").addClass("follow");
                        this.followChanges(data, 'uncheck', otherinfo, 'person');
                        // $('#' + _id + ' .circle-loader').toggleClass('load-complete');
                        $('#' + _id + ' .checkmark').toggle();
                    }
                }
                console.log(option);
                if (option) {
                    this.get('checkHead').push(_id);
                    this.set('showhideBtn', true);
                } else {
                    this.get('checkHead').splice(this.get('checkHead').findIndex(e => e === _id), 1);
                    this.set('showhideBtn', false);
                }
                if (this.get('showhideBtn') === true) {
                    this.set('showhideBtn', false);
                } else {
                    this.set('showhideBtn', true);
                }
            }
        },
        followChanges(data, option, otherinfo, choice) {
            function removeA(arr) {
                var what,
                    a = arguments,
                    L = a.length,
                    ax;
                while (L > 1 && arr.length) {
                    what = a[--L];
                    while ((ax = arr.indexOf(what)) !== -1) {
                        arr.splice(ax, 1);
                    }
                }
                return arr;
            }
            if (option === 'check') {
                if (choice === 'person') {
                    this.get('auth.following').push(data._id);
                } else if (choice === 'group') {
                    this.get('auth.group').push(data._id);
                }
            } else {
                if (choice === 'person') {
                    removeA(this.get("auth.following"), data._id);
                } else if (choice === 'group') {
                    removeA(this.get("auth.group"), data._id);
                }
            }
            var userinfo = {
                username: this.get('auth.username'),
                userId: this.get('auth.userId'),
                role: this.get('auth.role'),
                user_url: this.get('auth.user_url')
            };

            this.store.findRecord("enduser", data.usr_id).then(usr => {
                if (data.option === 'news') {
                    usr.set('channel_id', data._id);
                } else {
                    usr.set('otherinfo', otherinfo);
                }
                usr.set('info', userinfo);
                usr.set('check', {
                    option: option,
                    user: data.option,
                    follow: "none"
                });
                usr.save();
            });
        }
    });
});
;define('vidya-frontend/controllers/user/group-chat-detail', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    states: Ember.inject.service(),
    auth: Ember.inject.service(),
    group: Ember.computed('model', function () {
      return this.store.peekAll('groupchat');
    }),

    currentid: Ember.computed('auth.userId', function () {
      return this.get('auth.userId');
    }),
    userinfo: Ember.computed('states.userinfo', function () {
      console.log(this.get("states.userinfo"));
      return this.get('states.userinfo');
    }),
    channelname: Ember.computed('states.groupname', function () {
      return this.get('states.groupname');
    }),
    actions: {
      leavegroup() {
        var _id = this.get("states.channel_id").channel_id;
        var userid = this.get("auth.userId");
        var data = {
          channel_id: this.get("states.channel_id").channel_id,
          userid: userid,
          status: "remove"
        };
        console.log(_id);
        console.log(userid);
        var that = this;
        this.store.queryRecord('groupchat', data).then(function (channel) {
          // console.log(channel);
          var model = that.store.peekAll('groupchat');
          // console.log(model.content);
          model.content.removeObject(channel._internalModel);
        });
        this.transitionToRoute("/user/chat-list");
      },
      disband() {
        var that = this;
        // console.log(this.get("states.channel_id"));
        var _id = this.get("states.channel_id").channel_id;
        this.store.findRecord("groupchat", _id).then(function (post) {
          post.deleteRecord();
          post.save().then(() => {
            that.transitionToRoute("/user/chat-list");
          });
        });
      },
      editgroup() {
        // console.log("edit");
        this.set("states.groupedit", true);
        this.transitionToRoute("user.groupchat");
      },
      kickout(userid) {
        console.log(userid);
        var ch_id = this.get("groupid");
        var data = {
          channel_id: ch_id,
          userid: userid,
          status: "remove"
        };
        var that = this;
        this.store.queryRecord('groupchat', data).then(function (channel) {
          var model = that.store.peekAll('groupchat');
          model.content.removeObject(channel._internalModel);
        });
      }
    }
  });
});
;define('vidya-frontend/controllers/user/group-chat-list', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        auth: Ember.inject.service(),
        states: Ember.inject.service(),
        sortProperties: ['stamp:desc'],
        sortedGroup: Ember.computed.sort('groupData', 'sortProperties'),
        groupData: Ember.computed('model', function () {
            return this.store.peekAll('grouplist');
        }),
        actions: {
            loadBelow() {
                var that = this;
                var grouplist = that.store.peekAll('grouplist');
                var follow = this.get('auth.userId');
                var param = {
                    limit: grouplist.content.length,
                    groupchat: follow.toString()
                };
                return that.store.query('grouplist', param).then(() => {
                    let model = that.store.peekAll("grouplist");
                    return model;
                });
            },
            goToChat(_id, chatProfile, name, type, channelname, userinfo, userlist) {
                this.set("states.chatUser", chatProfile);
                this.set("states.chatUserName", name);
                this.set("states.groupchannel_id", _id);
                this.set("states.chat_type", type);
                this.set("states.groupname", channelname);
                this.set("states.userinfo", userinfo);
                this.set("states.groupuserlist", userlist);
                this.transitionToRoute('/user/chat/' + _id);
            }
        }
    });
});
;define('vidya-frontend/controllers/user/group', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        auth: Ember.inject.service(),
        isOwner: false,
        states: Ember.inject.service(),
        postDisplay: true,
        memberDisplay: false,
        banDisplay: false,
        memberCheck: false,
        selectedBasicTab: 0,
        buttonCheck: false,
        memberInfos: null,
        banInfos: null,
        coverPhoto: [{
            'src': 'cover.png',
            'w': 500,
            'h': 500
        }],
        userID: Ember.computed('auth.userId', function () {
            return this.get("auth.userId");
        }),
        profileInfo: Ember.computed('model.groupProfile', function () {
            return this.store.peekAll("channel");
        }),
        ownerCheck: Ember.observer('currentid', function () {
            this.set("isOwner", this.get("auth.userId") == this.store.peekAll('channel').toArray()[0].userinfo.userId);
            console.log(this.get("isOwner"));
        }),
        groupID: Ember.computed("model.groupProfile", function () {
            return this.store.peekAll('channel').toArray()[0].id;
        }),
        memberInfo: Ember.computed('memberCheck', function () {
            return this.store.peekAll('oneuser');
        }),
        banInfo: Ember.computed('banCheck', function () {
            return this.store.peekAll('nowuser');
        }),
        sortProperties: ['stamp:desc'],
        profileModel: Ember.computed.sort('dataModel', 'sortProperties'),
        dataModel: Ember.computed('profileData', function () {
            return this.store.peekAll('social');
        }),
        postCount: Ember.computed('model.profileData', function () {
            return this.store.peekAll('social').length;
        }),
        isOpen: Ember.computed('buttonCheck', function () {
            for (var i = 0; i < this.get('members').length; i++) {
                if (this.get("members")[i] === this.get('userID')) {
                    console.log(false);
                    return false;
                }
            }
            console.log(true);
            return true;
        }),

        actions: {
            shareSocial(_id) {

                this.transitionToRoute("/discuss/share-social/" + _id);
            },
            open() {
                this.set("states.viewPhoto", true);
            },
            close() {
                this.set("states.viewPhoto", false);
            },
            banUser(_id, group_id, status) {
                var data = {
                    option: status,
                    banID: _id,
                    channelid: group_id
                };
                this.store.query('oneuser', data).then(user => {
                    this.store.unloadAll('oneuser');
                    this.store.query("oneuser", { "group_id": this.get("currentid") }).then(user => {
                        let model = this.store.peekAll("oneuser");
                        return model;
                    });
                    this.set("memberCheck", true);
                });
            },
            unBanUser(_id, group_id, status) {
                var data = {
                    option: status,
                    banID: _id,
                    channelid: group_id
                };
                this.store.query('nowuser', data).then(user => {
                    this.store.unloadAll('nowuser');
                    this.store.query("nowuser", { "group_id": this.get("currentid") }).then(user => {
                        let model = this.store.peekAll("nowuser");
                        return model;
                    });
                    this.set("banCheck", true);
                });
            },
            loadBelow() {
                console.log('load below');
                var that = this;
                var social = that.store.peekAll('social');
                var limit = social.content.length;
                // this.set('bufferSize',limit)
                var param = {
                    limit: social.content.length,
                    follow: that.get("currentid")
                };
                that.set("loading", true);
                return that.store.query('social', param).then(() => {
                    let model = that.store.peekAll("social");
                    that.set("loading", false);
                    return model;
                });
            },
            loadBelowMember() {
                var that = this;
                var follower = that.store.peekAll('oneuser');
                var param = {
                    limit: follower.content.length,
                    group_id: this.get("currentid")
                };

                return that.store.query('oneuser', param).then(() => {
                    let model = that.store.peekAll("oneuser");

                    return model;
                });
            },
            loadBelowBan() {
                var that = this;
                var follower = that.store.peekAll('nowuser');
                var param = {
                    limit: follower.content.length,
                    group_id: this.get("currentid")
                };

                return that.store.query('nowuser', param).then(() => {
                    let model = that.store.peekAll("nowuser");

                    return model;
                });
            },
            deleteSocial(item) {
                // if (item.sharePost == false) {
                //     for (var i = 0; i < item.postImg.length; i++) {
                //         this.deleteImg(item.postImg[i])
                //     }
                // }
                item.destroyRecord();
            },
            editSocial(post_id) {
                this.transitionToRoute('/discuss/edit-social/' + post_id);
            },
            goToDiscuss(_id) {
                console.log(_id);
                this.transitionToRoute('/discuss/chat/' + _id);
            },
            createPost(_id) {
                this.transitionToRoute("/discuss/create-grouppost/" + _id);
            },
            goToProfiles(_id) {
                console.log(_id);
                this.set('followerDisplay', false);
                this.set('followingDisplay', false);
                this.set('groupDisplay', false);
                this.set('postDisplay', true);
                this.set('infoDisplay', false);
                if (this.get('buttonCheck') === true) {
                    this.set('buttonCheck', false);
                } else {
                    this.set('buttonCheck', true);
                }
                this.store.unloadAll("social");
                this.transitionToRoute('/user/profile/' + _id);
            },
            goToGroups(_id) {
                // this.transitionToRoute("/user/group/" + _id)
            },
            displayMember() {
                this.store.unloadAll("oneuser");
                this.set("memberDisplay", true);
                this.set('postDisplay', false);
                this.set('banDisplay', false);
                this.set('memberInfos', this.store.query("oneuser", { "group_id": this.get("currentid") }).then(user => {
                    let model = this.store.peekAll("oneuser");
                    return model;
                }));
                this.set("memberCheck", true);
            },

            displayBan() {
                this.store.unloadAll("nowuser");
                this.set('postDisplay', false);
                this.set('memberDisplay', false);
                this.set('banInfos', this.store.query("nowuser", { "group_id": this.get("currentid") }).then(user => {
                    let model = this.store.peekAll("nowuser");
                    return model;
                }));
                this.set('banDisplay', true);
                this.set("banCheck", true);
            },

            displayPost() {
                this.set('banDisplay', false);
                this.set('memberDisplay', false);
                this.set('postDisplay', true);
            },
            changeStatus(_id, option, item) {
                console.log(_id);
                var otherinfo = {};
                var usr_id = this.get('auth.userId');
                console.log(otherinfo);
                var data = { 'usr_id': usr_id, '_id': _id, 'option': option };
                var comp = document.getElementById("click");
                if (comp.textContent.trim() === 'Follow') {
                    comp.textContent = 'Unfollow';
                    // Ember.$("#click").addClass('unfollow-btn');
                    // Ember.$("#click").removeClass("follow-btn");
                    // comp.setAttribute('class', 'unfollow-btn md-default-theme md-button md-primary md-raised ember-view')
                    this.followChanges(data, 'check', otherinfo);
                    if (this.get('buttonCheck') === true) {
                        this.set('buttonCheck', false);
                    } else {
                        this.set('buttonCheck', true);
                    }
                } else if (comp.textContent.trim() === 'Unfollow') {
                    comp.textContent = 'Follow';
                    // Ember.$("#click").addClass('follow-btn');
                    // Ember.$("#click").removeClass("unfollow-btn");
                    // comp.setAttribute('class', 'follow-btn md-default-theme md-button md-primary md-raised ember-view')
                    this.followChanges(data, 'uncheck', otherinfo);
                    if (this.get('buttonCheck') === true) {
                        this.set('buttonCheck', false);
                    } else {
                        this.set('buttonCheck', true);
                    }
                }
            },

            routeToDetailNew(post_id) {
                this.set('states.post_id', post_id);
                this.transitionToRoute('news-detail', {
                    queryParams: {
                        post_id: post_id
                    }
                });
                console.log(post_id);
            }
        },
        followChanges(data, option, otherinfo) {
            function removeA(arr) {
                var what,
                    a = arguments,
                    L = a.length,
                    ax;
                while (L > 1 && arr.length) {
                    what = a[--L];
                    while ((ax = arr.indexOf(what)) !== -1) {
                        arr.splice(ax, 1);
                    }
                }
                return arr;
            }
            if (option === 'check') {
                this.get('auth.group').push(data._id);
            } else {
                removeA(this.get("auth.group"), data._id);
            }
            var userinfo = { username: this.get('auth.username'), userId: this.get('auth.userId'), role: this.get('auth.role'), user_url: this.get('auth.user_url') };
            console.log(data.option);
            this.store.findRecord("enduser", data.usr_id).then(usr => {
                if (data.option === 'news') {
                    usr.set('channel_id', data._id);
                } else {
                    usr.set('otherinfo', otherinfo);
                }
                usr.set('info', userinfo);
                usr.set('check', { option: option, user: data.option, follow: "follow" });
                usr.save();
            });
            //   this.store.unloadAll("social")
        },
        invalidate() {
            this.send('invalidateModel');
        }

    });
});
;define('vidya-frontend/controllers/user/groupchat', ['exports', 'vidya-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === "development") {
    var host = _environment.default.localHost;
  } else if (_environment.default.environment === "production") {
    var host = _environment.default.remoteHost;
  }
  exports.default = Ember.Controller.extend({
    auth: Ember.inject.service(),
    states: Ember.inject.service(),
    contacts: Ember.computed('model.groupUser', "states.groupedit", function () {
      let current_id = this.get("auth.userId");
      let contacts = [];
      var follow = this.get('auth.userId');
      let followlist = this.store.peekAll('enduser');
      let arrayfollowlist = followlist.toArray();
      if (this.get("states.groupedit")) {
        let model = this.store.peekAll('groupchat');
        let arraygrouplist = model.toArray();
        // console.log(arraygrouplist);
        // console.log(arrayfollowlist);
        arraygrouplist.filter(function (e1) {
          var removeclass = arrayfollowlist.findIndex(item => item.id === e1.id);
          // console.log(removeclass)
          if (removeclass !== -1) {
            arrayfollowlist.splice(removeclass, 1);
          }
        });
      }
      // console.log(arrayfollowlist);
      for (let i = 0; i < arrayfollowlist.length; i++) {
        console.log(arrayfollowlist[i]);
        contacts.push({
          name: arrayfollowlist[i].username,
          Id: arrayfollowlist[i].id,
          image: host + arrayfollowlist[i].user_url.web_url
        });
      }
      return contacts;
    }),

    selectedContacts: [],
    userlist: [],

    remainingContacts: Ember.computed('contacts.[]', 'selectedContacts.[]', function () {
      return this.get('contacts').filter(c => {
        // console.log(this.get('selectedContacts').indexOf(c));
        return this.get('selectedContacts').indexOf(c) === -1;
      });
    }),
    editgroup: Ember.observer('states.groupedit', function () {
      // console.log(this.get("states.groupedit"));
      this.set('selectedContacts', []);
      this.set('groupname', '');
      this.set("userlist", []);
      if (this.get("states.groupedit")) {
        // console.log(this.get("states.groupname"));
        this.set("groupname", this.get("states.groupname"));
        let model = this.store.peekAll('groupchat');
        let arrayfollowlist = model.toArray();
        console.log(arrayfollowlist);
        let contacts = [];
        for (let i = 0; i < arrayfollowlist.length; i++) {
          this.get("userlist").push(arrayfollowlist[i].id);
          if (this.get("auth.userId") != arrayfollowlist[i].id) {
            contacts.push({
              name: arrayfollowlist[i].username,
              Id: arrayfollowlist[i].id,
              image: host + arrayfollowlist[i].user_url.web_url
            });
          }
        }
        this.set('selectedContacts', contacts);
        // }else{
        //   this.set("states.channel_id","")
      }
    }).on('init'),
    actions: {
      createChatGroup() {
        var userdata = {
          userId: this.get("auth.userId"),
          role: this.get("auth.role"),
          user_url: this.get("auth.user_url"),
          username: this.get("auth.username")

        };
        var data = {
          channelname: this.get("groupname"),
          userinfo: userdata,
          userlist: this.get("userlist"),
          type: "ChatGroup",
          otherinfo: ""
          // console.log(data);
        };if (this.get("states.groupedit")) {
          var channel_id = this.get("states.channel_id").channel_id;
          this.store.findRecord("groupchat", channel_id).then(post => {
            post.set("channelname", this.get("groupname"));
            post.set("userlist", this.get("userlist"));
            post.save().then(() => {
              this.set("states.groupedit", false);
              this.set("groupname", "");
              this.set("userlist", []);
              this.set("selectedContacts", []);
              this.transitionToRoute("/user/chat-list");
            });
          });
        } else {
          var result = this.store.createRecord("groupchat", data);
          result.save().then(response => {
            console.log(response);
            this.set("groupname", "");
            this.set("selectedContacts", []);
            this.set("userlist", []);
            this.set("states.chat_type", response.type);
            this.set("states.groupname", response.channelname);
            this.transitionToRoute('/user/chat/' + response.id);
          });
        }
      },
      removeContact(item) {
        this.get('selectedContacts').removeObject(item);
        // var array = this.get("userlist")
        console.log(this.get('userlist'));
        var index = this.get("userlist").indexOf(item.Id);
        if (index > -1) this.get("userlist").splice(index, 1);
        console.log(this.get('userlist'));
      },
      addContact(item) {
        this.get('selectedContacts').pushObject(item);
        if (this.get("userlist").includes(this.get("auth.userId"))) {
          this.get("userlist").push(item.Id);
        } else {
          this.get("userlist").push(item.Id);
          this.get("userlist").push(this.get("auth.userId"));
        }
      }
    }
  });
});
;define('vidya-frontend/controllers/user/profile-info', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    auth: Ember.inject.service(),
    isDisabledDetail: true,
    editActive: true,
    BioActive: true,
    isDisabledBio: true,

    profileInfo: Ember.computed('model.profile', function () {
      this.store.unloadAll('backuser');
      return this.store.peekAll("enduser");
    }),
    actions: {
      editInfo(model) {
        if (this.get("editActive") == true) {
          this.set("editActive", false);
          this.set("isDisabledDetail", false);
        } else {
          var that = this;
          var name = model.username;
          var info = {
            bio: model.info.bio,
            work: model.info.work,
            education: model.info.education,
            city: model.info.city

          };
          console.log(name);
          this.set("auth.info", info);
          this.store.findRecord('enduser', this.get("currentid")).then(user => {
            user.set('info', info);
            user.set('username', name);
            that.set("auth.username", name);
            user.save();
            that.set("editActive", true);
            that.set("isDisabledDetail", true);
          });
        }
      },
      cancelInfoEdit() {
        this.set("isDisabled", true);
        this.set("editActive", false);
      }
    }

  });
});
;define("vidya-frontend/controllers/user/profile", ["exports", "vidya-frontend/config/environment"], function (exports, _environment) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    if (_environment.default.environment === "development") {
        var host = _environment.default.localHost;
    } else if (_environment.default.environment === "production") {
        var host = _environment.default.remoteHost;
    }
    exports.default = Ember.Controller.extend({
        auth: Ember.inject.service(),
        states: Ember.inject.service(),
        uploadimage: Ember.inject.service(),
        fullscreen: Ember.inject.service(),
        followingInfos: null,
        groupInfos: null,
        ownerGroup: null,
        followerInfos: null,
        followingCheck: false,
        groupCheck: false,
        ownerCheck: false,
        followerCheck: false,
        followerDisplay: false,
        followingDisplay: false,
        groupDisplay: false,
        displayOwnerGroup: false,
        postDisplay: true,
        fabButtom: true,
        infoDisplay: true,
        selectedBasicTab: 0,
        buttonCheck: false,
        isEditing: false,
        loading: false,
        showDialog: false,
        profilePicture: [],
        uploadInProcess: false,
        coverPhoto: [{
            'src': 'cover.png',
            'w': 500,
            'h': 500
        }],
        start: Ember.computed('states.chooser', function () {
            console.log('select post');
            this.set('selectedBasicTab', 0);
            this.set('postDisplay', true);
        }),
        follow: Ember.computed('auth.following', function () {
            return this.get("auth.following");
        }),
        userID: Ember.computed('auth.userId', function () {
            return this.get("auth.userId");
        }),
        profileInfo: Ember.computed('model.profile', function () {
            this.store.unloadAll('backuser');
            return this.store.peekAll("enduser");
        }),
        sortProperties: ['stamp:desc'],
        profileModel: Ember.computed.sort('dataModel', 'sortProperties'),
        dataModel: Ember.computed('profileData', function () {
            return this.store.peekAll('social');
        }),

        followerInfo: Ember.computed('followerCheck', function () {
            return this.store.peekAll('oneuser');
        }),

        followingInfo: Ember.computed('followingCheck', function () {
            return this.store.peekAll('similaruser');
        }),
        groupInfo: Ember.computed('groupCheck', function () {
            return this.store.peekAll('channel');
        }),
        ownerInfo: Ember.computed('ownerCheck', function () {
            return this.store.peekAll('onechannel');
        }),
        wallet: Ember.computed('model.votes', function () {
            return this.store.peekAll('wallet');
        }),
        postCount: Ember.computed('model.profileData', function () {
            return this.store.peekAll('social').length;
        }),
        isOpen: Ember.computed('buttonCheck', function () {
            for (var i = 0; i < this.get('follow').length; i++) {
                if (this.get("follow")[i] === this.get('currentid')) {
                    console.log(false);
                    return false;
                }
            }
            console.log(true);
            return true;
        }),
        upload: Ember.observer("uploadimage.uploaded", function () {
            if (this.get('uploadimage.uploaded') == true & this.get('profilePicture').length > 0) {
                var that = this;
                this.store.findRecord('userprofile', this.get("currentid")).then(function (user) {
                    console.log(that.get('profilePicture')[0]);
                    user.set('user_url', that.get('profilePicture')[0]);
                    that.set('auth.user_url', that.get('profilePicture')[0]);
                    user.save();
                    that.set("uploadInProcess", false);
                    that.set('profilePicture', []);
                });
            }
        }),
        updateInfo: Ember.computed('isEditing', function () {
            console.log(this.get('isEditing'));
            return this.get('isEditing');
        }),
        actions: {
            shareSocial(_id) {

                this.transitionToRoute("/discuss/share-social/" + _id);
            },
            messageUser(id, other_id, chatProfile, name) {
                this.set("states.chatUser", chatProfile);
                this.set("states.chatUserName", name);
                var that = this;
                this.store.queryRecord('onechannel', { 'id': id, 'other_id': other_id }).then(user => {
                    console.log(user);
                    that.transitionToRoute('/user/chat/' + user.id);
                });
            },
            loadBelow() {
                console.log('load below');
                var that = this;
                var social = that.store.peekAll('social');
                var limit = social.content.length;
                // this.set('bufferSize',limit)
                var param = {
                    limit: social.content.length,
                    follow: that.get("currentid")
                };

                return that.store.query('social', param).then(() => {
                    let model = that.store.peekAll("social");
                    return model;
                });
            },
            loadBelowgroup() {
                console.log('load below');
                var that = this;
                var group = that.store.peekAll('channel');
                var limitgroup = group.content.length;
                var param = {
                    limitgroup: group.content.length,
                    id: that.get("currentid")
                };
                return that.store.query('channel', param).then(() => {
                    let model = that.store.peekAll("channel");
                    return model;
                });
            },
            deleteSocial(item) {
                for (var i = 0; i < item.postImg.length; i++) {
                    this.deleteImg(item.postImg[i]);
                }
                item.destroyRecord();
            },
            editSocial(post_id) {
                this.transitionToRoute('/discuss/edit-social/' + post_id);
            },
            fullScreen(url) {
                var modal = document.getElementById('myModal');
                var img = document.getElementById('myImg');
                var modalImg = document.getElementById("img_id");
                modal.style.display = "block";
                modalImg.src = host + url;
            },
            closeImg() {
                var span = document.getElementsByClassName("close")[0];
                var modal = document.getElementById('myModal');
                modal.style.display = "none";
            },
            goToDiscuss(_id) {
                console.log(_id);
                this.transitionToRoute('/discuss/chat/' + _id);
            },
            createPost() {
                this.transitionToRoute('/discuss/create-social');
            },
            createClientGroup() {
                this.transitionToRoute('/user/create-group');
            },
            goToProfiles(_id) {
                console.log(_id);
                if (this.get("currentid") != _id) {
                    this.set('followerDisplay', false);
                    this.set('followingDisplay', false);
                    this.set('groupDisplay', false);
                    this.set('postDisplay', true);
                    this.set('displayOwnerGroup', false);
                    this.set('selectedBasicTab', 0);
                    this.set('infoDisplay', false);
                    if (this.get('buttonCheck') === true) {
                        this.set('buttonCheck', false);
                    } else {
                        this.set('buttonCheck', true);
                    }
                    this.store.unloadAll("social");
                    this.transitionToRoute('/user/profile/' + _id);
                }
            },
            goToGroups(_id) {
                this.set('followerDisplay', false);
                this.set('followingDisplay', false);
                this.set('groupDisplay', false);
                this.set('postDisplay', true);
                this.set('displayOwnerGroup', false);
                this.set('selectedBasicTab', 0);
                this.set('infoDisplay', false);
                this.store.unloadAll("social");
                this.store.unloadAll('onechannel');
                this.transitionToRoute("/user/group/" + _id);
            },
            displayFollower() {
                var that = this;
                this.store.unloadAll("oneuser");
                this.set("loading", true);
                this.set('followerDisplay', true);
                this.set('followingDisplay', false);
                this.set('displayOwnerGroup', false);
                this.set('groupDisplay', false);
                this.set('postDisplay', false);
                this.set('infoDisplay', false);
                this.set('followerInfos', this.store.query("oneuser", { "id": this.get("currentid") }).then(user => {
                    let model = this.store.peekAll("oneuser");
                    that.set("loading", false);
                    return model;
                }));
                this.set("followerCheck", true);
            },
            loadBelowFollower() {
                var that = this;
                var follower = that.store.peekAll('oneuser');
                var param = {
                    limit: follower.content.length,
                    id: this.get("currentid")
                };

                return that.store.query('oneuser', param).then(() => {
                    let model = that.store.peekAll("oneuser");

                    return model;
                });
            },
            displayFollowing() {
                var that = this;
                this.store.unloadAll("similaruser");
                this.set("loading", true);
                this.set('followerDisplay', false);
                this.set('followingDisplay', true);
                this.set('groupDisplay', false);
                this.set("postDisplay", false);
                this.set('infoDisplay', false);
                this.set('displayOwnerGroup', false);
                this.set("followingInfos", this.store.query("similaruser", { "id": this.get("currentid") }).then(user => {
                    let model = this.store.peekAll("similaruser");
                    that.set("loading", false);
                    return model;
                }));
                this.set("followingCheck", true);
            },
            loadBelowFollowing() {
                var that = this;
                var following = that.store.peekAll('similaruser');
                var param = {
                    limit: following.content.length,
                    id: this.get("currentid")
                };

                return that.store.query('similaruser', param).then(() => {
                    let model = that.store.peekAll("similaruser");

                    return model;
                });
            },
            displayInfo() {
                this.set('showDialog', true);
            },
            editInfo(id) {
                this.transitionToRoute('/user/profile-info/' + id);
            },

            cancelInfoEdit() {
                this.set('infoDisplay', false);
                this.set("isEditing", false);
            },
            saveInfo(model) {
                var that = this;
                var info = {
                    // username: model.username,
                    work: model.info.work,
                    education: model.info.education,
                    city: model.info.city

                };
                console.log(info);
                this.set("auth.info", info);
                this.store.findRecord('enduser', this.get("currentid")).then(function (user) {
                    user.set('info', info);
                    user.save();
                    that.set('infoDisplay', true);
                    that.set('postDisplay', true);
                    that.set('selectedBasicTab', 0);
                    that.set("isEditing", false);
                });
            },
            uploadPicture(result) {
                this.set("uploadInProcess", true);
                var enduser = this.store.peekAll("userprofile").toArray();
                // this.store.queryRecord('userprofile', {"id": this.get("currentid"), "web_url": enduser[0].user_url.web_url})
                this.get('uploadimage').uploadFiles(result, this.get("profilePicture"));
            },
            displayGroup() {
                var that = this;
                this.store.unloadAll("onechannel");
                this.store.unloadAll("channel");
                this.set("loading", true);
                this.set('followerDisplay', false);
                this.set('followingDisplay', false);
                this.set('groupDisplay', true);
                this.set("postDisplay", false);
                this.set('displayOwnerGroup', true);
                this.set('infoDisplay', false);
                this.set("groupInfos", this.store.query("channel", { "id": this.get("currentid") }).then(user => {
                    let model = this.store.peekAll("channel");
                    that.set("loading", false);
                    return model;
                }));
                this.set("ownerGroup", this.store.query("onechannel", { "id": this.get("currentid"), "group": "own" }).then(user => {
                    let model = this.store.peekAll("onechannel");
                    that.set("loading", false);
                    return model;
                }));
                this.set("ownerCheck", true);
                this.set("groupCheck", true);
            },
            displayPost() {
                this.set('followerDisplay', false);
                this.set('followingDisplay', false);
                this.set('groupDisplay', false);
                this.set('infoDisplay', true);
                this.set('displayOwnerGroup', false);
                this.set('postDisplay', true);
            },
            changeStatus(_id, option, item) {
                console.log(_id);
                var otherinfo = { username: item.username, userId: item.id, role: item.role, user_url: item.user_url };
                var usr_id = _id;
                console.log(otherinfo);
                var data = { 'usr_id': usr_id, '_id': _id, 'option': option };
                var comp = document.getElementById("click");
                if (comp.textContent.trim() === 'Follow') {
                    comp.textContent = 'Unfollow';
                    if (this.get('buttonCheck') === true) {
                        this.set('buttonCheck', false);
                    } else {
                        this.set('buttonCheck', true);
                    }
                    // Ember.$("#click").addClass('unfollow-btn');
                    // Ember.$("#click").removeClass("follow-btn");
                    // comp.setAttribute('class', 'unfollow-btn md-default-theme md-button md-primary md-raised ember-view')
                    this.followChanges(data, 'check', otherinfo);
                } else if (comp.textContent.trim() === 'Unfollow') {
                    comp.textContent = 'Follow';
                    if (this.get('buttonCheck') === true) {
                        this.set('buttonCheck', false);
                    } else {
                        this.set('buttonCheck', true);
                    }
                    // Ember.$("#click").addClass('follow-btn');
                    // Ember.$("#click").removeClass("unfollow-btn");
                    // comp.setAttribute('class', 'follow-btn md-default-theme md-button md-primary md-raised ember-view')
                    this.followChanges(data, 'uncheck', otherinfo);
                }
            },
            routeToDetailNew(post_id) {
                this.set('states.post_id', post_id);
                this.transitionToRoute('news-detail', {
                    queryParams: {
                        post_id: post_id
                    }
                });
                console.log(post_id);
            },
            deleteSocial(item) {

                for (var i = 0; i < item.postImg.length; i++) {
                    this.deleteImg(item.postImg[i]);
                }
                item.destroyRecord();
            },

            editSocial(post_id) {
                this.transitionToRoute('/discuss/edit-social/' + post_id);
            }
        },
        deleteImg(data, option) {
            var _id = {
                'fileid': data.file_name
            };
            var that = this;
            Ember.$.ajax({
                type: 'post',
                url: `${host}/upload/remove`,
                data: _id,
                dataType: 'json',
                success: function (response) {}
            });
        },
        followChanges(data, option, otherinfo) {
            function removeA(arr) {
                var what,
                    a = arguments,
                    L = a.length,
                    ax;
                while (L > 1 && arr.length) {
                    what = a[--L];
                    while ((ax = arr.indexOf(what)) !== -1) {
                        arr.splice(ax, 1);
                    }
                }
                return arr;
            }
            if (option === 'check') {
                this.get('auth.following').push(data._id);
            } else {
                removeA(this.get("auth.following"), data._id);
            }
            var userinfo = { username: this.get('auth.username'), userId: this.get('auth.userId'), role: this.get('auth.role'), user_url: this.get('auth.user_url') };
            console.log(data.option);
            this.store.findRecord("enduser", data.usr_id).then(usr => {
                if (data.option === 'news') {
                    usr.set('channel_id', data._id);
                } else {
                    usr.set('otherinfo', otherinfo);
                }
                usr.set('info', userinfo);
                usr.set('check', { option: option, user: data.option, follow: "follow" });
                usr.save();
            });
        },
        invalidate() {
            this.send('invalidateModel');
        }

    });
});
;define('vidya-frontend/controllers/user/user-chat-list', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Controller.extend({
        auth: Ember.inject.service(),
        states: Ember.inject.service(),
        isSelf: Ember.computed('auth', function () {
            console.log(this.get('auth.userId'));
            return this.get('auth.userId');
        }),
        following: Ember.computed('auth.following', function () {
            return this.get('auth.following');
        }),
        sortProperties: ['stamp:desc'],
        sortedModel: Ember.computed.sort('chatData', 'sortProperties'),
        chatData: Ember.computed('model', function () {
            return this.store.peekAll('chatlist');
        }),
        actions: {
            goToChat(_id, chatProfile, name, type, channelname, userinfo, userlist) {
                this.set("states.chatUser", chatProfile);
                this.set("states.chatUserName", name);
                this.set("states.groupchannel_id", _id);
                this.set("states.chat_type", type);
                this.set("states.groupname", channelname);
                this.set("states.userinfo", userinfo);
                this.set("states.groupuserlist", userlist);
                console.log(userlist);
                this.transitionToRoute('/user/chat/' + _id);
            },
            routeToUserList() {
                this.transitionToRoute('/user/user-chat-list');
            },
            loadBelow() {
                var that = this;
                var chatlist = that.store.peekAll('chatlist');
                var follow = this.get('auth.userId');
                var param = {
                    limit: chatlist.content.length,
                    following: follow.toString()
                };
                return that.store.query('chatlist', param).then(() => {
                    let model = that.store.peekAll("chatlist");
                    return model;
                });
            }
        }
    });
});
;define('vidya-frontend/ember-gestures/recognizers/pan', ['exports', 'ember-gestures/recognizers/pan'], function (exports, _pan) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pan.default;
});
;define('vidya-frontend/ember-gestures/recognizers/pinch', ['exports', 'ember-gestures/recognizers/pinch'], function (exports, _pinch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pinch.default;
});
;define('vidya-frontend/ember-gestures/recognizers/press', ['exports', 'ember-gestures/recognizers/press'], function (exports, _press) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _press.default;
});
;define('vidya-frontend/ember-gestures/recognizers/rotate', ['exports', 'ember-gestures/recognizers/rotate'], function (exports, _rotate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _rotate.default;
});
;define('vidya-frontend/ember-gestures/recognizers/swipe', ['exports', 'ember-gestures/recognizers/swipe'], function (exports, _swipe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _swipe.default;
});
;define('vidya-frontend/ember-gestures/recognizers/tap', ['exports', 'ember-gestures/recognizers/tap'], function (exports, _tap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tap.default;
    }
  });
});
;define('vidya-frontend/ember-gestures/recognizers/vertical-pan', ['exports', 'ember-gestures/recognizers/vertical-pan'], function (exports, _verticalPan) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _verticalPan.default;
    }
  });
});
;define('vidya-frontend/ember-gestures/recognizers/vertical-swipe', ['exports', 'ember-gestures/recognizers/vertical-swipe'], function (exports, _verticalSwipe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _verticalSwipe.default;
    }
  });
});
;define("vidya-frontend/ember-videojs/tests/addon.lint-test", [], function () {
  "use strict";
});
;define("vidya-frontend/ember-videojs/tests/app.lint-test", [], function () {
  "use strict";
});
;define('vidya-frontend/ember-videojs/tests/templates.template.lint-test', [], function () {
  'use strict';

  QUnit.module('TemplateLint');

  QUnit.test('addon/templates/components/videojs-base.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/templates/components/videojs-base.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('addon/templates/components/videojs-player.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'addon/templates/components/videojs-player.hbs should pass TemplateLint.\n\naddon/templates/components/videojs-player.hbs\n  24:4  error  Do not use an <a> element with the `href` attribute inside an <video> element with the `controls` attribute  no-nested-interactive\n  8:6  error  Ambiguous element used (`source`)  no-shadowed-elements\n  1:120  error  Unnecessary string concatenation. Use {{poster}} instead of "{{poster}}".  no-unnecessary-concat\n  1:161  error  Unnecessary string concatenation. Use {{vr-crossorigin}} instead of "{{vr-crossorigin}}".  no-unnecessary-concat\n  3:16  error  Unnecessary string concatenation. Use {{src}} instead of "{{src}}".  no-unnecessary-concat\n  3:31  error  Unnecessary string concatenation. Use {{type}} instead of "{{type}}".  no-unnecessary-concat\n  8:18  error  Unnecessary string concatenation. Use {{source.src}} instead of "{{source.src}}".  no-unnecessary-concat\n  8:40  error  Unnecessary string concatenation. Use {{source.type}} instead of "{{source.type}}".  no-unnecessary-concat\n  13:31  error  Unnecessary string concatenation. Use {{textTrack}} instead of "{{textTrack}}".  no-unnecessary-concat\n  18:18  error  Unnecessary string concatenation. Use {{textTrack.kind}} instead of "{{textTrack.kind}}".  no-unnecessary-concat\n  18:43  error  Unnecessary string concatenation. Use {{textTrack.src}} instead of "{{textTrack.src}}".  no-unnecessary-concat\n  18:71  error  Unnecessary string concatenation. Use {{textTrack.language}} instead of "{{textTrack.language}}".  no-unnecessary-concat\n  18:102  error  Unnecessary string concatenation. Use {{textTrack.label}} instead of "{{textTrack.label}}".  no-unnecessary-concat\n  18:129  error  Unnecessary string concatenation. Use {{textTrack.type}} instead of "{{textTrack.type}}".  no-unnecessary-concat\n');
  });
});
;define('vidya-frontend/event_dispatcher', ['exports', 'ember-gestures/event_dispatcher', 'vidya-frontend/config/environment'], function (exports, _event_dispatcher, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const assign = Ember.assign || Ember.merge;

  let gestures = assign({}, {
    emberUseCapture: false,
    removeTracking: false,
    useFastPaths: false
  });
  gestures = assign(gestures, _environment.default.gestures);

  exports.default = _event_dispatcher.default.extend({
    useCapture: gestures.emberUseCapture,
    removeTracking: gestures.removeTracking,
    useFastPaths: gestures.useFastPaths
  });
});
;define('vidya-frontend/helpers/-paper-underscore', ['exports', 'ember-paper/helpers/underscore'], function (exports, _underscore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _underscore.default;
    }
  });
  Object.defineProperty(exports, 'underscore', {
    enumerable: true,
    get: function () {
      return _underscore.underscore;
    }
  });
});
;define('vidya-frontend/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
;define('vidya-frontend/helpers/app-version', ['exports', 'vidya-frontend/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
;define('vidya-frontend/helpers/ban-user', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.banUser = banUser;
  function banUser(params /*, hash*/) {
    var banuser = true;
    try {
      if (params[0].includes(params[1])) {
        banuser = false;
      }
    } catch (ex) {}
    return banuser;
  }

  exports.default = Ember.Helper.helper(banUser);
});
;define('vidya-frontend/helpers/cancel-all', ['exports', 'ember-concurrency/helpers/cancel-all'], function (exports, _cancelAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
;define("vidya-frontend/helpers/change-button", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.changeButton = changeButton;
  function changeButton(following /*, hash*/) {
    if (following[2] == "user") {
      for (var i = 0; i < following[0].length; i++) {
        if (following[0][i] === following[1]) {
          return "circle unfollow";
        }
      }
      return "circle follow";
    } else if (following[2] == "group") {
      for (var i = 0; i < following[0].length; i++) {
        if (following[0][i] === following[1]) {
          return "btn btn--inactive";
        }
      }
      return "btn btn--active";
    } else if (following[2] == "text") {
      for (var i = 0; i < following[0].length; i++) {
        if (following[0][i] === following[1]) {
          return "Joined";
        }
      }
      return "Join";
    } else if (following[2] == "button") {
      for (var i = 0; i < following[0].length; i++) {
        if (following[0][i] === following[1]) {
          return "Unfollow";
        }
      }
      return "Follow";
    } else if (following[2] == "state") {
      for (var i = 0; i < following[0].length; i++) {
        if (following[0][i] === following[1]) {
          return "unfollow-btn";
        }
      }
      return "follow-btn";
    }
  }

  exports.default = Ember.Helper.helper(changeButton);
});
;define('vidya-frontend/helpers/chatgroup', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.chatgroup = chatgroup;
  function chatgroup(params /*, hash*/) {
    console.log(params[0]);
    return params[0].slice(0, 4);
  }

  exports.default = Ember.Helper.helper(chatgroup);
});
;define('vidya-frontend/helpers/convert-data', ['exports', 'vidya-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.convertData = convertData;

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
    var pilboxHost = _environment.default.pilboxHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
    var pilboxHost = _environment.default.pilboxHost;
  }

  function convertData(params /*, hash*/) {
    var img_data = params[0];
    var img_array = [];
    // console.log(img_data)
    if (Array.isArray(img_data)) {
      for (var i = 0; i < img_data.length; i++) {
        if (img_data[i]['type'] != "image") {
          continue;
        }
        var url = pilboxHost + "/?url=" + host + img_data[i]['web_url'] + "&w=200&h=150&mode=clip&filter=bilinear&fmt=webp";
        // var fullUrl = pilboxHost + "/?url=" + host + img_data[i]['web_url'] + "&w=800&h=600&mode=scale"
        var fullUrl = host + img_data[i]['web_url'];
        try {
          var data = {
            'src': fullUrl,
            'generate_src': url,
            'w': 500,
            'h': 500,
            'type': img_data[i]['type'],
            'original_name': img_data[i]['original_name'],
            'name': img_data[i]['file_name']
          };
          img_array.push(data);
        } catch (ex) {}
      }
    } else {
      try {
        // var url = pilboxHost + "/?url=" + host + img_data['web_url'] + "&w=800&h=600&mode=scale"
        var url = host + img_data['web_url'];
        var data = {
          'src': url,
          'generate_src': pilboxHost + "/?url=" + host + img_data['web_url'] + "&w=200&h=150&mode=clip&filter=bilinear&fmt=webp",
          'w': 500,
          'h': 500,
          'type': img_data['type'],
          'original_name': img_data['original_name'],
          'name': img_data['file_name']
        };
        img_array.push(data);
      } catch (ex) {}
    }
    return img_array;
  }

  exports.default = Ember.Helper.helper(convertData);
});
;define('vidya-frontend/helpers/convert-image', ['exports', 'vidya-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.convertImage = convertImage;

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
    var pilboxHost = _environment.default.pilboxHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
    var pilboxHost = _environment.default.pilboxHost;
  }

  function convertImage(params /*, hash*/) {
    var img = params[0];
    if (img[0].type === 'image') {
      return "image";
    } else if (img[0].type === 'video') {
      return "video";
    } else {
      return "voice";
    }
  }

  exports.default = Ember.Helper.helper(convertImage);
});
;define('vidya-frontend/helpers/convert-img', ['exports', 'vidya-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.convertImg = convertImg;

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
    var pilboxHost = _environment.default.pilboxHost;
    var liveHost = _environment.default.liveHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
    var pilboxHost = _environment.default.pilboxHost;
    var liveHost = _environment.default.liveHost;
  }

  function convertImg(params /*, hash*/) {
    var img = params[0];
    try {
      if (img.web_url) {
        var url = pilboxHost + "/?url=" + host + img.web_url + "&w=200&h=150&mode=clip&filter=bilinear&fmt=webp";
        return url;
      } else if (img.thumbnail_path) {
        var url = pilboxHost + "/?url=" + liveHost + img.thumbnail_path + "&w=400&h=200&mode=clip&filter=bilinear&fmt=webp";
        return url;
      } else if (img[0].web_url) {
        if (img[0].type == 'image') {
          var url = pilboxHost + "/?url=" + host + img[0].web_url + "&w=200&h=150&mode=clip&filter=bilinear&fmt=webp";
          return url;
        } else if (img[0].poster) {
          var url = pilboxHost + "/?url=" + host + img[0].poster + "&w=200&h=150&mode=clip&filter=bilinear&fmt=webp";
          return url;
        } else {
          var url = host + img[0].web_url;
          return url;
        }
      } else {
        var url = pilboxHost + "/?url=" + host + img + "&w=200&h=150&mode=clip&filter=bilinear&fmt=webp";
        return url;
      }
    } catch (ex) {}
  }

  exports.default = Ember.Helper.helper(convertImg);
});
;define('vidya-frontend/helpers/convert-time', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.convertTime = convertTime;
  function convertTime(params /*, hash*/) {
    console.log(params);
    return new Date(params[0].epoch_time * 1000);;
  }

  exports.default = Ember.Helper.helper(convertTime);
});
;define('vidya-frontend/helpers/convert-url', ['exports', 'vidya-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.convertUrl = convertUrl;

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
    var pilboxHost = _environment.default.pilboxHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
    var pilboxHost = _environment.default.pilboxHost;
  }

  function convertUrl(params /*, hash*/) {
    var url = params[0];
    var check = params[1];
    try {
      if (url.poster) {
        var url = pilboxHost + "/?url=" + host + url.poster + "&w=300&h=200&mode=custom&filter=bilinear&fmt=webp";
      } else if (url.web_url == '/newsicon.png') {
        url = host + url;
      } else if (check === 'profile') {
        var url = pilboxHost + "/?url=" + host + url.web_url + "&w=100&h=150&mode=scale&filter=bilinear&fmt=webp";
      } else if (url.web_url) {
        var url = pilboxHost + "/?url=" + host + url.web_url + "&w=100&h=150&mode=custom&filter=bilinear&fmt=webp";
      } else if (check === 'detail') {
        var url = pilboxHost + "/?url=" + host + url + "&w=400&h=300&mode=custom&filter=bilinear&fmt=webp";
      } else if (url.web_url === '') {
        var url = "/no_image.jpg";
      } else {
        url = host + url;
      }
      return url;
    } catch (ex) {
      url = host + url;
      return url;
    }
  }

  exports.default = Ember.Helper.helper(convertUrl);
});
;define('vidya-frontend/helpers/count-user', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.countUser = countUser;
  function countUser(params /*, hash*/) {
    console.log(params);
    console.log(params.length);
    return params.length - 2;
  }

  exports.default = Ember.Helper.helper(countUser);
});
;define('vidya-frontend/helpers/covert-simple-img', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.convertSimple = convertSimple;
  function convertSimple(params /*, hash*/) {
    var img_data = params[0];
    var img_array = [];
    if (img_data) {
      for (var i = 0; i < img_data.length; i++) {
        var data = {
          'src': img_data[i]["web_url"],
          'w': 500,
          'h': 500
        };
        img_array.push(data);
      }
    }
    return img_array;
  }

  exports.default = Ember.Helper.helper(convertSimple);
});
;define('vidya-frontend/helpers/ember-power-select-is-group', ['exports', 'ember-power-select/helpers/ember-power-select-is-group'], function (exports, _emberPowerSelectIsGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsGroup', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.emberPowerSelectIsGroup;
    }
  });
});
;define('vidya-frontend/helpers/ember-power-select-is-selected', ['exports', 'ember-power-select/helpers/ember-power-select-is-selected'], function (exports, _emberPowerSelectIsSelected) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsSelected', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
;define('vidya-frontend/helpers/ember-power-select-true-string-if-present', ['exports', 'ember-power-select/helpers/ember-power-select-true-string-if-present'], function (exports, _emberPowerSelectTrueStringIfPresent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectTrueStringIfPresent', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.emberPowerSelectTrueStringIfPresent;
    }
  });
});
;define('vidya-frontend/helpers/eq', ['exports', 'ember-x-tabs/helpers/eq'], function (exports, _eq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _eq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _eq.eq;
    }
  });
});
;define('vidya-frontend/helpers/filter-chat', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.filterChat = filterChat;
  function filterChat(params /*, hash*/) {
    var check = false;
    try {
      if (params[0].otherinfo.userId === params[1].userId) {
        check = params[1].following.includes(params[0].userinfo.userId);
      } else if (params[0].userinfo.userId === params[1].userId) {
        check = params[1].following.includes(params[0].otherinfo.userId);
      }
      if (params[0].type == "ChatGroup") {
        check = true;
      }
      if (params[0].latestmessage != '') {
        check = true;
      }
    } catch (ex) {}
    return check;
  }

  exports.default = Ember.Helper.helper(filterChat);
});
;define('vidya-frontend/helpers/fullscreen-img', ['exports', 'vidya-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.fullscreenImg = fullscreenImg;

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
  }

  function fullscreenImg(params /*, hash*/) {
    var url = params[0];
    try {
      if (url.poster) {
        return url;
      } else {
        url = host + url;
        return url;
      }
    } catch (ex) {
      url = host + url;
      return url;
    }
  }

  exports.default = Ember.Helper.helper(fullscreenImg);
});
;define('vidya-frontend/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
;define('vidya-frontend/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
;define('vidya-frontend/helpers/href-to', ['exports', 'ember-href-to/helpers/href-to'], function (exports, _hrefTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hrefTo.default;
    }
  });
  Object.defineProperty(exports, 'hrefTo', {
    enumerable: true,
    get: function () {
      return _hrefTo.hrefTo;
    }
  });
});
;define('vidya-frontend/helpers/is-after', ['exports', 'ember-moment/helpers/is-after'], function (exports, _isAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isAfter.default;
    }
  });
});
;define('vidya-frontend/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
;define('vidya-frontend/helpers/is-before', ['exports', 'ember-moment/helpers/is-before'], function (exports, _isBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBefore.default;
    }
  });
});
;define('vidya-frontend/helpers/is-between', ['exports', 'ember-moment/helpers/is-between'], function (exports, _isBetween) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isBetween.default;
    }
  });
});
;define('vidya-frontend/helpers/is-empty', ['exports', 'ember-truth-helpers/helpers/is-empty'], function (exports, _isEmpty) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
;define('vidya-frontend/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
;define('vidya-frontend/helpers/is-same-or-after', ['exports', 'ember-moment/helpers/is-same-or-after'], function (exports, _isSameOrAfter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSameOrAfter.default;
    }
  });
});
;define('vidya-frontend/helpers/is-same-or-before', ['exports', 'ember-moment/helpers/is-same-or-before'], function (exports, _isSameOrBefore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSameOrBefore.default;
    }
  });
});
;define('vidya-frontend/helpers/is-same', ['exports', 'ember-moment/helpers/is-same'], function (exports, _isSame) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isSame.default;
    }
  });
});
;define('vidya-frontend/helpers/lf-lock-model', ['exports', 'liquid-fire/helpers/lf-lock-model'], function (exports, _lfLockModel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lfLockModel.default;
    }
  });
  Object.defineProperty(exports, 'lfLockModel', {
    enumerable: true,
    get: function () {
      return _lfLockModel.lfLockModel;
    }
  });
});
;define('vidya-frontend/helpers/lf-or', ['exports', 'liquid-fire/helpers/lf-or'], function (exports, _lfOr) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lfOr.default;
    }
  });
  Object.defineProperty(exports, 'lfOr', {
    enumerable: true,
    get: function () {
      return _lfOr.lfOr;
    }
  });
});
;define('vidya-frontend/helpers/linkify', ['exports', 'ember-linkify/helpers/linkify'], function (exports, _linkify) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkify.default;
    }
  });
  Object.defineProperty(exports, 'linkify', {
    enumerable: true,
    get: function () {
      return _linkify.linkify;
    }
  });
});
;define('vidya-frontend/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
;define('vidya-frontend/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
;define('vidya-frontend/helpers/media', ['exports', 'ember-responsive/helpers/media'], function (exports, _media) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _media.default;
    }
  });
  Object.defineProperty(exports, 'media', {
    enumerable: true,
    get: function () {
      return _media.media;
    }
  });
});
;define('vidya-frontend/helpers/moment-add', ['exports', 'ember-moment/helpers/moment-add'], function (exports, _momentAdd) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentAdd.default;
    }
  });
});
;define('vidya-frontend/helpers/moment-calendar', ['exports', 'ember-moment/helpers/moment-calendar'], function (exports, _momentCalendar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentCalendar.default;
    }
  });
});
;define('vidya-frontend/helpers/moment-diff', ['exports', 'ember-moment/helpers/moment-diff'], function (exports, _momentDiff) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDiff.default;
    }
  });
});
;define('vidya-frontend/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _momentDuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentDuration.default;
    }
  });
});
;define('vidya-frontend/helpers/moment-format', ['exports', 'ember-moment/helpers/moment-format'], function (exports, _momentFormat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFormat.default;
    }
  });
});
;define('vidya-frontend/helpers/moment-from-now', ['exports', 'ember-moment/helpers/moment-from-now'], function (exports, _momentFromNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFromNow.default;
    }
  });
});
;define('vidya-frontend/helpers/moment-from', ['exports', 'ember-moment/helpers/moment-from'], function (exports, _momentFrom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentFrom.default;
    }
  });
});
;define('vidya-frontend/helpers/moment-subtract', ['exports', 'ember-moment/helpers/moment-subtract'], function (exports, _momentSubtract) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentSubtract.default;
    }
  });
});
;define('vidya-frontend/helpers/moment-to-date', ['exports', 'ember-moment/helpers/moment-to-date'], function (exports, _momentToDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentToDate.default;
    }
  });
});
;define('vidya-frontend/helpers/moment-to-now', ['exports', 'ember-moment/helpers/moment-to-now'], function (exports, _momentToNow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentToNow.default;
    }
  });
});
;define('vidya-frontend/helpers/moment-to', ['exports', 'ember-moment/helpers/moment-to'], function (exports, _momentTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _momentTo.default;
    }
  });
});
;define('vidya-frontend/helpers/moment-unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
;define('vidya-frontend/helpers/moment', ['exports', 'ember-moment/helpers/moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moment.default;
    }
  });
});
;define('vidya-frontend/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(exports, 'notEq', {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
;define('vidya-frontend/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
;define('vidya-frontend/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _now) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _now.default;
    }
  });
});
;define("vidya-frontend/helpers/null-image", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.nullImage = nullImage;
  function nullImage(params /*, hash*/) {
    var img = params[0];
    if (JSON.stringify(img) == "{}") {
      return true;
    } else if (img.length > 0) {
      return false;
    } else {
      return false;
    }
  }

  exports.default = Ember.Helper.helper(nullImage);
});
;define('vidya-frontend/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
;define('vidya-frontend/helpers/perform', ['exports', 'ember-concurrency/helpers/perform'], function (exports, _perform) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
;define('vidya-frontend/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
;define("vidya-frontend/helpers/process-img", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.processImg = processImg;
  function processImg(params /*, hash*/) {

    if (params[1] == "image") {

      if (params[0].length > 5) {

        return params[0].slice(1, 5);
      } else if (params[0].length == 1) {

        return [];
      } else if (params[0].length == 2) {

        return params[0].slice(-1);
      } else {

        return params[0].slice(1, params[0].length);
      }
    }
    if (params[1] == "discuss") {

      if (params[0].length > 5) {

        return params[0].slice(1, params[0].length);
      } else if (params[0].length == 1) {

        return [];
      } else if (params[0].length == 2) {

        return params[0].slice(-1);
      } else {

        return params[0].slice(1, params[0].length);
      }
    } else if (params[1] == "text") {
      if (params[0].length > 5) {

        return "+ " + (params[0].length - 5);
      } else {
        return "";
      }
    }
  }

  exports.default = Ember.Helper.helper(processImg);
});
;define('vidya-frontend/helpers/random-color', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.randomColor = randomColor;
  function randomColor(params /*, hash*/) {

    var color = ['#f44336', '#FF1744', '#1e88e5', '#880E4F', '#2cc185', '#4A148C', '#4caf50', '#77b55a', '#72b352', '#D84315'];
    var random = Math.floor(Math.random() * 9);
    return color[random];
  }

  exports.default = Ember.Helper.helper(randomColor);
});
;define('vidya-frontend/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
;define('vidya-frontend/helpers/task', ['exports', 'ember-concurrency/helpers/task'], function (exports, _task) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
;define('vidya-frontend/helpers/toolbar', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.toolbar = toolbar;
  function toolbar(params /*, hash*/) {
    console.log(params[0]);
    switch (params[0]) {
      case 'V-entertainment.index':
        return false;
        break;
      case 'startup':
        return false;
        break;
      case 'News':
        return false;
        break;
      case 'V-news.category':
        return false;
        break;
      case 'Social':
        return false;
        break;
      case 'Live':
        return false;
        break;
      case 'Profile':
        return false;
        break;
      case 'Chat':
        return false;
        break;
      case 'Find Friends':
        return false;
        break;
      case 'V-social-search':
        return false;
        break;
      case 'V-user.find-friends':
        return false;
        break;
      case 'Chat List':
        return false;
        break;
      case 'V-user.chat':
        return false;
        break;
      case 'Profile':
        return false;
        break;
      case 'Category':
        return false;
        break;
      default:
        return true;

    }
  }
  exports.default = Ember.Helper.helper(toolbar);
});
;define('vidya-frontend/helpers/unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _unix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _unix.default;
    }
  });
});
;define("vidya-frontend/helpers/uploadname", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.uploadname = uploadname;
  function uploadname(params /*, hash*/) {
    var data = params[0].replace(".mp4", "");
    return data;
  }

  exports.default = Ember.Helper.helper(uploadname);
});
;define('vidya-frontend/helpers/utc', ['exports', 'ember-moment/helpers/utc'], function (exports, _utc) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _utc.default;
    }
  });
  Object.defineProperty(exports, 'utc', {
    enumerable: true,
    get: function () {
      return _utc.utc;
    }
  });
});
;define('vidya-frontend/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
;define('vidya-frontend/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'vidya-frontend/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define('vidya-frontend/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define('vidya-frontend/initializers/debug', ['exports', '@html-next/vertical-collection/-debug'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'vertical-collection-debug',
    initialize() {}
  };
});
;define('vidya-frontend/initializers/ember-concurrency', ['exports', 'ember-concurrency/initializers/ember-concurrency'], function (exports, _emberConcurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
;define('vidya-frontend/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define('vidya-frontend/initializers/ember-hammertime', ['exports', 'ember-hammertime/components/component'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-hammertime',
    initialize() {}
  };
});
;define('vidya-frontend/initializers/ember-responsive-breakpoints', ['exports', 'ember-responsive/initializers/responsive'], function (exports, _responsive) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _responsive.default;
});
;define('vidya-frontend/initializers/export-application-global', ['exports', 'vidya-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
;define('vidya-frontend/initializers/initialize-torii-callback', ['exports', 'vidya-frontend/config/environment', 'torii/redirect-handler'], function (exports, _environment, _redirectHandler) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'torii-callback',
    before: 'torii',
    initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      if (_environment.default.torii && _environment.default.torii.disableRedirectInitializer) {
        return;
      }
      application.deferReadiness();
      _redirectHandler.default.handle(window).catch(function () {
        application.advanceReadiness();
      });
    }
  };
});
;define('vidya-frontend/initializers/initialize-torii-session', ['exports', 'torii/bootstrap/session', 'torii/configuration'], function (exports, _session, _configuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'torii-session',
    after: 'torii',

    initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      const configuration = (0, _configuration.getConfiguration)();
      if (!configuration.sessionServiceName) {
        return;
      }

      (0, _session.default)(application, configuration.sessionServiceName);

      var sessionFactoryName = 'service:' + configuration.sessionServiceName;
      application.inject('adapter', configuration.sessionServiceName, sessionFactoryName);
    }
  };
});
;define('vidya-frontend/initializers/initialize-torii', ['exports', 'torii/bootstrap/torii', 'torii/configuration', 'vidya-frontend/config/environment'], function (exports, _torii, _configuration, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var initializer = {
    name: 'torii',
    initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      (0, _configuration.configure)(_environment.default.torii || {});
      (0, _torii.default)(application);
      application.inject('route', 'torii', 'service:torii');
    }
  };

  exports.default = initializer;
});
;define("vidya-frontend/initializers/liquid-fire", ["exports", "liquid-fire/ember-internals", "liquid-fire/velocity-ext"], function (exports, _emberInternals) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  (0, _emberInternals.initialize)();

  exports.default = {
    name: 'liquid-fire',
    initialize: function () {}
  };
});
;define('vidya-frontend/initializers/services', ['exports', 'vidya-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* application */{
    // application.inject('route', 'foo', 'service:foo');
    //   if (ENV.APP.usingCors) {
    // 		(function($) {
    // 			var _old = $.ajax;
    // 			$.ajax = function() {
    // 				var url, settings, apiURL = ENV.APP.apiURL;

    // 				/* Handle the different function signatures available for $.ajax() */
    // 				if (arguments.length === 2) {
    // 					url = arguments[0];
    // 					settings = arguments[1];
    // 				} else {
    // 					settings = arguments[0];
    // 				}

    // 				settings.crossDomain = true;
    // 				if (!settings.xhrFields) {
    // 					settings.xhrFields = {};
    // 				}
    // 				settings.xhrFields.withCredentials = true;

    // 				if (!url) {
    // 					url = settings.url;
    // 				}

    // 				/* If we still don't have an URL, execute the request and let jQuery handle it */
    // 				if (!url) {
    // 					return _old.apply(this, [settings]);
    // 				}

    // 				/* combine the apiURL and the url request if necessary */
    // 				if (!url.includes(apiURL)) {
    // 					/* Do we need a '/'? */
    // 					if (url[0] !== '/' && apiURL[apiURL.length-1] !== '/') {
    // 						url = '/' + url;
    // 					}
    // 					url = apiURL + url;
    // 				}
    // 				settings.url = url;

    // 				return _old.apply(this, [settings]);
    // 			};
    // 		})(jQuery);
    // 	}
  }

  exports.default = {
    initialize
  };
});
;define('vidya-frontend/instance-initializers/ember-data', ['exports', 'ember-data/initialize-store-service'], function (exports, _initializeStoreService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
});
;define('vidya-frontend/instance-initializers/ember-gestures', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-gestures',

    initialize: function (instance) {
      if (typeof instance.lookup === "function") {
        instance.lookup('service:-gestures');
      } else {
        // This can be removed when we no-longer support ember 1.12 and 1.13
        Ember.getOwner(instance).lookup('service:-gestures');
      }
    }

  };
});
;define('vidya-frontend/instance-initializers/ember-href-to', ['exports', 'ember-href-to/href-to'], function (exports, _hrefTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  function closestLink(el) {
    if (el.closest) {
      return el.closest('a');
    } else {
      el = el.parentElement;
      while (el && el.tagName !== 'A') {
        el = el.parentElement;
      }
      return el;
    }
  }
  exports.default = {
    name: 'ember-href-to',
    initialize(applicationInstance) {
      // we only want this to run in the browser, not in fastboot
      if (typeof FastBoot === "undefined") {
        let hrefToClickHandler = function _hrefToClickHandler(e) {
          let link = e.target.tagName === 'A' ? e.target : closestLink(e.target);
          if (link) {
            let hrefTo = new _hrefTo.default(applicationInstance, e, link);
            hrefTo.maybeHandle();
          }
        };

        document.body.addEventListener('click', hrefToClickHandler);

        // Teardown on app destruction: clean up the event listener to avoid
        // memory leaks.
        applicationInstance.reopen({
          willDestroy() {
            document.body.removeEventListener('click', hrefToClickHandler);
            return this._super(...arguments);
          }
        });
      }
    }
  };
});
;define('vidya-frontend/instance-initializers/setup-routes', ['exports', 'torii/bootstrap/routing', 'torii/configuration', 'torii/compat/get-router-instance', 'torii/compat/get-router-lib', 'torii/router-dsl-ext'], function (exports, _routing, _configuration, _getRouterInstance, _getRouterLib) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'torii-setup-routes',
    initialize(applicationInstance /*, registry */) {
      const configuration = (0, _configuration.getConfiguration)();

      if (!configuration.sessionServiceName) {
        return;
      }

      let router = (0, _getRouterInstance.default)(applicationInstance);
      var setupRoutes = function () {
        let routerLib = (0, _getRouterLib.default)(router);
        var authenticatedRoutes = routerLib.authenticatedRoutes;
        var hasAuthenticatedRoutes = !Ember.isEmpty(authenticatedRoutes);
        if (hasAuthenticatedRoutes) {
          (0, _routing.default)(applicationInstance, authenticatedRoutes);
        }
        router.off('willTransition', setupRoutes);
      };
      router.on('willTransition', setupRoutes);
    }
  };
});
;define('vidya-frontend/instance-initializers/walk-providers', ['exports', 'torii/lib/container-utils', 'torii/configuration'], function (exports, _containerUtils, _configuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'torii-walk-providers',
    initialize(applicationInstance) {
      let configuration = (0, _configuration.getConfiguration)();
      // Walk all configured providers and eagerly instantiate
      // them. This gives providers with initialization side effects
      // like facebook-connect a chance to load up assets.
      for (var key in configuration.providers) {
        if (configuration.providers.hasOwnProperty(key)) {
          (0, _containerUtils.lookup)(applicationInstance, 'torii-provider:' + key);
        }
      }
    }
  };
});
;define('vidya-frontend/mixins/default-attrs', ['exports', 'virtual-each/mixins/default-attrs'], function (exports, _defaultAttrs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _defaultAttrs.default;
    }
  });
});
;define('vidya-frontend/mixins/transition-mixin', ['exports', 'ember-css-transitions/mixins/transition-mixin'], function (exports, _transitionMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _transitionMixin.default;
    }
  });
});
;define('vidya-frontend/models/adsupdate', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        company_name: _emberData.default.attr('string'),
        ads_link: _emberData.default.attr('string'),
        stamp: _emberData.default.attr('rqlstamp'),
        count: _emberData.default.attr('number'),
        limitcount: _emberData.default.attr("number"),
        location: _emberData.default.attr('string'),
        upload: _emberData.default.attr(),
        expire_date: _emberData.default.attr("rqlstamp")
    });
});
;define('vidya-frontend/models/advertise', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        company_name: _emberData.default.attr('string'),
        ads_link: _emberData.default.attr('string'),
        stamp: _emberData.default.attr('rqlstamp'),
        count: _emberData.default.attr('number'),
        limitcount: _emberData.default.attr("number"),
        location: _emberData.default.attr('string'),
        upload: _emberData.default.attr(),
        expire_date: _emberData.default.attr("rqlstamp")
    });
});
;define('vidya-frontend/models/backuser', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    accessToken: _emberData.default.attr('string'),
    fbuserId: _emberData.default.attr('string'),
    username: _emberData.default.attr('string'),
    user_url: _emberData.default.attr(),
    info: _emberData.default.attr(),
    phone: _emberData.default.attr('string'),
    status: _emberData.default.attr('string'),
    follower: _emberData.default.attr(),
    following: _emberData.default.attr(),
    group: _emberData.default.attr(),
    photo_history: _emberData.default.attr(),
    check: _emberData.default.attr(),
    channel_id: _emberData.default.attr('string'),
    stamp: _emberData.default.attr('rqlstamp'),
    back_photo: _emberData.default.attr(),
    role: _emberData.default.attr('string'),
    otherinfo: _emberData.default.attr(),
    followerCount: Ember.computed('follower', function () {
      return this.get('follower').length;
    }),
    followingCount: Ember.computed('following', function () {
      return this.get('following').length;
    }),
    groupCount: Ember.computed('group', function () {
      return this.get('group').length;
    })
  });
});
;define('vidya-frontend/models/breaking', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    title: _emberData.default.attr('string'),
    category: _emberData.default.attr(),
    section: _emberData.default.attr(),
    header: _emberData.default.attr(),
    summary: _emberData.default.attr('string'),
    detail: _emberData.default.attr('string'),
    postImg: _emberData.default.attr(),
    // userinfo: DS.attr(),
    prioritize: _emberData.default.attr('string'),
    status: _emberData.default.attr('string'),
    sourceNews: _emberData.default.attr('string'),
    stamp: _emberData.default.attr('rqlstamp'),
    createDate: _emberData.default.attr('rqlstamp'),
    postImage: Ember.computed('postImg', function () {
      return this.get('postImg')[0];
    })
  });
});
;define('vidya-frontend/models/category', ['exports', 'ember-data', 'vidya-frontend/config/environment'], function (exports, _emberData, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
    var pilboxHost = _environment.default.pilboxHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
    var pilboxHost = _environment.default.pilboxHost;
  }

  exports.default = _emberData.default.Model.extend({
    categoryname: _emberData.default.attr(),
    categorycolor: _emberData.default.attr(),
    postImg: _emberData.default.attr(),
    stamp: _emberData.default.attr('rqlstamp'),
    icon: Ember.computed('postImg', function () {
      this.get('postImg')[0]['web_url'] = pilboxHost + '/?url=' + host + this.get('postImg')[0]['web_url'] + '&w=400&h=300&mode=clip&filter=bilinear&fmt=webp';
      return this.get('postImg')[0];
    })
  });
});
;define('vidya-frontend/models/celebrity', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    accessToken: _emberData.default.attr('string'),
    fbuserId: _emberData.default.attr('string'),
    username: _emberData.default.attr('string'),
    user_url: _emberData.default.attr(),
    role: _emberData.default.attr('string'),
    info: _emberData.default.attr(),
    phone: _emberData.default.attr('string'),
    status: _emberData.default.attr('string'),
    follower: _emberData.default.attr(),
    following: _emberData.default.attr(),
    check: _emberData.default.attr('boolean'),
    stamp: _emberData.default.attr('rqlstamp')
  });
});
;define("vidya-frontend/models/channel", ["exports", "ember-data"], function (exports, _emberData) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    channelname: _emberData.default.attr("string"),
    type: _emberData.default.attr("string"),
    status: _emberData.default.attr("string"),
    news_id: _emberData.default.attr(),
    userlist: _emberData.default.attr(),
    stamp: _emberData.default.attr('rqlstamp'),
    postImg: _emberData.default.attr(),
    back_photo: _emberData.default.attr(),
    userinfo: _emberData.default.attr(),
    banuser_list: _emberData.default.attr(),
    userCount: Ember.computed('userlist.length', function () {
      return this.get('userlist').length;
    }),
    channelImg: Ember.computed('postImg', function () {
      return this.get('postImg')[0];
    })

  });
});
;define("vidya-frontend/models/chatlist", ["exports", "ember-data"], function (exports, _emberData) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    channelname: _emberData.default.attr("string"),
    type: _emberData.default.attr("string"),
    status: _emberData.default.attr("string"),
    news_id: _emberData.default.attr(),
    userlist: _emberData.default.attr(),
    stamp: _emberData.default.attr('rqlstamp'),
    postImg: _emberData.default.attr(),
    otherinfo: _emberData.default.attr(),
    user_url: _emberData.default.attr(),
    userinfo: _emberData.default.attr(),
    latestmessage: _emberData.default.attr(),
    userCount: Ember.computed('userlist.length', function () {
      return this.get('userlist').length;
    }),
    channelImg: Ember.computed('postImg', function () {
      return this.get('postImg')[0];
    })
  });
});
;define('vidya-frontend/models/crsgroup', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    title: _emberData.default.attr('string'),
    group: _emberData.default.attr('string')
    // category: DS.attr(),
    // section: DS.attr(),
    // header: DS.attr(),
    // summary: DS.attr('string'),
    // detail: DS.attr('string'),
    // postImg: DS.attr(),
    // userinfo: DS.attr(),
    // prioritize: DS.attr('number'),
    // status: DS.attr('string'),
    // sourceNews: DS.attr('string'),
    // author: DS.attr('string'),
    // editor: DS.attr('string'),
    // breakingNews: DS.attr('boolean'),
    // stamp: DS.attr('rqlstamp'),
    // createDate: DS.attr('rqlstamp'),
    // previous_state: DS.attr('string'),
    // checkNews: DS.attr('string'),
    // tags: DS.attr(),
    // option: DS.attr(),
    // postImage: Ember.computed('postImg', function() {
    //   return this.get('postImg')[0]
    // })
  });
});
;define('vidya-frontend/models/crsnew', ['exports', 'ember-data', 'vidya-frontend/config/environment'], function (exports, _emberData, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
    var pilboxHost = _environment.default.pilboxHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
    var pilboxHost = _environment.default.pilboxHost;
  }
  exports.default = _emberData.default.Model.extend({
    title: _emberData.default.attr('string'),
    category: _emberData.default.attr(),
    section: _emberData.default.attr(),
    header: _emberData.default.attr(),
    summary: _emberData.default.attr('string'),
    detail: _emberData.default.attr('string'),
    postImg: _emberData.default.attr(),
    userinfo: _emberData.default.attr(),
    prioritize: _emberData.default.attr('number'),
    status: _emberData.default.attr('string'),
    sourceNews: _emberData.default.attr('string'),
    author: _emberData.default.attr('string'),
    editor: _emberData.default.attr('string'),
    breakingNews: _emberData.default.attr('boolean'),
    stamp: _emberData.default.attr('rqlstamp'),
    createDate: _emberData.default.attr('rqlstamp'),
    previous_state: _emberData.default.attr('string'),
    checkNews: _emberData.default.attr('string'),
    tags: _emberData.default.attr(),
    option: _emberData.default.attr(),
    checkCrs: _emberData.default.attr('boolean'),
    postImage: Ember.computed('postImg', function () {
      try {

        if (this.get('postImg')[0]['type'] === 'image') {
          this.get('postImg')[0]['web_url'] = pilboxHost + '/?url=' + host + this.get('postImg')[0]['web_url'] + '&w=400&h=300&mode=clip&filter=bilinear&fmt=webp';
          // }else{
          //   this.get('postImg')[0]['web_url'] = this.get('postImg')[0]['web_url'] + '#t=0.5'
        }
      } catch (ex) {}

      return this.get('postImg')[0];
    }),
    allFile: Ember.computed('postImg', function () {
      return this.get('postImg');
    })

  });
});
;define('vidya-frontend/models/discuss', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    message: _emberData.default.attr('string'),
    channel_id: _emberData.default.attr('string'),
    userid: _emberData.default.attr('string'),
    // username: DS.attr('string'),
    type: _emberData.default.attr('string'),
    img_url: _emberData.default.attr('string'),
    userinfo: _emberData.default.attr(),
    stamp: _emberData.default.attr('rqlstamp'),
    isMessage: Ember.computed("type", function () {
      if (this.get('type') === 'm.room.message') {
        return this.get("type") === "m.room.message";
      } else if (this.get('type') === 'content') {
        return this.get("type") === "content";
      } else {
        return this.get("type") === "m.room.message";
      }
    })
  });
});
;define('vidya-frontend/models/enduser', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    accesstoken: _emberData.default.attr('string'),
    fbuserId: _emberData.default.attr('string'),
    username: _emberData.default.attr('string'),
    user_url: _emberData.default.attr(),
    info: _emberData.default.attr(),
    phone: _emberData.default.attr('string'),
    status: _emberData.default.attr('string'),
    follower: _emberData.default.attr(),
    following: _emberData.default.attr(),
    group: _emberData.default.attr(),
    photo_history: _emberData.default.attr(),
    check: _emberData.default.attr(),
    channel_id: _emberData.default.attr('string'),
    stamp: _emberData.default.attr('rqlstamp'),
    back_photo: _emberData.default.attr(),
    role: _emberData.default.attr('string'),
    otherinfo: _emberData.default.attr(),
    connection_status: _emberData.default.attr('boolean'),
    walletid: _emberData.default.attr('string'),
    followerCount: Ember.computed('follower', function () {
      return this.get('follower').length;
    }),
    followingCount: Ember.computed('following', function () {
      return this.get('following').length;
    }),
    groupCount: Ember.computed('group', function () {
      return this.get('group').length;
    })
  });
});
;define('vidya-frontend/models/entmainlive', ['exports', 'ember-data', 'vidya-frontend/config/environment'], function (exports, _emberData, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
    var pilboxHost = _environment.default.pilboxHost;
    var liveHost = _environment.default.liveHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
    var pilboxHost = _environment.default.pilboxHost;
    var liveHost = _environment.default.liveHost;
  }

  exports.default = _emberData.default.Model.extend({
    end_time: _emberData.default.attr('string'),
    record_path: _emberData.default.attr('string'),
    record_status: _emberData.default.attr('string'),
    server: _emberData.default.attr('string'),
    start_time: _emberData.default.attr('stringstamp'),
    stream_status: _emberData.default.attr('string'),
    thumbnail_path: _emberData.default.attr('string'),
    user_id: _emberData.default.attr('string'),
    viewer_count: _emberData.default.attr("number"),
    user: _emberData.default.attr(),
    votecount: _emberData.default.attr('number'),
    thumbnail: Ember.computed('thumbnail_path', function () {
      // var url = liveHost + this.get("thumbnail_path")
      var url = pilboxHost + '/?url=' + liveHost + this.get("thumbnail_path") + '&w=400&h=300&mode=clip&filter=bilinear&fmt=webp';
      return url;
    }),
    record: Ember.computed('record_path', function () {
      var url = liveHost + this.get("record_path");
      return url;
    }),
    live: Ember.computed('user_id', function () {
      console.log(this.get("id"));
      var url = liveHost + 'live/' + this.get("id") + '_360p' + '.m3u8';
      console.log(url);
      return url;
    })
  });
});
;define('vidya-frontend/models/entstreamlist', ['exports', 'ember-data', 'vidya-frontend/config/environment'], function (exports, _emberData, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
    var pilboxHost = _environment.default.pilboxHost;
    var liveHost = _environment.default.liveHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
    var pilboxHost = _environment.default.pilboxHost;
    var liveHost = _environment.default.liveHost;
  }

  exports.default = _emberData.default.Model.extend({
    end_time: _emberData.default.attr('string'),
    record_path: _emberData.default.attr('string'),
    record_status: _emberData.default.attr('string'),
    server: _emberData.default.attr('string'),
    start_time: _emberData.default.attr('stringstamp'),
    stream_status: _emberData.default.attr('string'),
    thumbnail_path: _emberData.default.attr('string'),
    user_id: _emberData.default.attr('string'),
    viewer_count: _emberData.default.attr("number"),
    user: _emberData.default.attr(),
    votecount: _emberData.default.attr('number'),
    thumbnail: Ember.computed('thumbnail_path', function () {
      // var url = liveHost + this.get("thumbnail_path")
      var url = pilboxHost + '/?url=' + liveHost + this.get("thumbnail_path") + '&w=400&h=300&mode=clip&filter=bilinear&fmt=webp';
      return url;
    }),
    record: Ember.computed('record_path', function () {
      var url = liveHost + this.get("record_path");
      return url;
    }),
    live: Ember.computed('user_id', function () {
      console.log(this.get("id"));
      var url = liveHost + 'live/' + this.get("id") + '_360p' + '.m3u8';
      console.log(url);
      return url;
    })
  });
});
;define('vidya-frontend/models/enttoken', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    token: _emberData.default.attr('string'),
    accesstoken: _emberData.default.attr('string'),
    username: _emberData.default.attr('string'),
    phone: _emberData.default.attr('string')
  });
});
;define('vidya-frontend/models/entvideoupload', ['exports', 'ember-data', 'vidya-frontend/config/environment'], function (exports, _emberData, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
    var pilboxHost = _environment.default.pilboxHost;
    var liveHost = _environment.default.liveHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
    var pilboxHost = _environment.default.pilboxHost;
    var liveHost = _environment.default.liveHost;
  }

  exports.default = _emberData.default.Model.extend({
    thumbnail: _emberData.default.attr('string'),
    userinfo: _emberData.default.attr(),
    web_url: _emberData.default.attr('string'),
    full_name: _emberData.default.attr('string'),
    time_stamp: _emberData.default.attr('rqlstamp'),
    pilboxthumbnail: Ember.computed('thumbnail', function () {
      var url = pilboxHost + "/?url=" + host + this.get("thumbnail") + "&w=400&h=300&mode=clip&filter=bilinear&fmt=webp";
      return url;
    }),
    record: Ember.computed('web_url', function () {
      var url = host + this.get("web_url");
      return url;
    })
  });
});
;define("vidya-frontend/models/groupchat", ["exports", "ember-data"], function (exports, _emberData) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    channelname: _emberData.default.attr("string"),
    type: _emberData.default.attr("string"),
    status: _emberData.default.attr("string"),
    news_id: _emberData.default.attr(),
    userlist: _emberData.default.attr(),
    stamp: _emberData.default.attr('rqlstamp'),
    postImg: _emberData.default.attr(),
    otherinfo: _emberData.default.attr(),
    user_url: _emberData.default.attr(),
    userinfo: _emberData.default.attr(),
    groupuserlist: _emberData.default.attr(),
    latestmessage: _emberData.default.attr(),
    username: _emberData.default.attr('string'),
    user_url: _emberData.default.attr()
  });
});
;define("vidya-frontend/models/grouplist", ["exports", "ember-data"], function (exports, _emberData) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    channelname: _emberData.default.attr("string"),
    type: _emberData.default.attr("string"),
    status: _emberData.default.attr("string"),
    news_id: _emberData.default.attr(),
    userlist: _emberData.default.attr(),
    stamp: _emberData.default.attr('rqlstamp'),
    postImg: _emberData.default.attr(),
    otherinfo: _emberData.default.attr(),
    user_url: _emberData.default.attr(),
    userinfo: _emberData.default.attr(),
    latestmessage: _emberData.default.attr(),
    groupuserlist: _emberData.default.attr(),
    userCount: Ember.computed('userlist.length', function () {
      return this.get('userlist').length;
    }),
    channelImg: Ember.computed('postImg', function () {
      return this.get('postImg')[0];
    })
  });
});
;define('vidya-frontend/models/header', ['exports', 'ember-data', 'vidya-frontend/config/environment'], function (exports, _emberData, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
    var pilboxHost = _environment.default.pilboxHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
    var pilboxHost = _environment.default.pilboxHost;
  }
  exports.default = _emberData.default.Model.extend({
    header: _emberData.default.attr(),
    category: _emberData.default.attr(),
    summary: _emberData.default.attr('string'),
    tags: _emberData.default.attr(),
    postImg: _emberData.default.attr(),
    prioritize: _emberData.default.attr('number'),
    newsDate: _emberData.default.attr('rqlstamp'),
    author: _emberData.default.attr('string'),
    editor: _emberData.default.attr('string'),
    userinfo: _emberData.default.attr(),
    stamp: _emberData.default.attr('rqlstamp'),
    postImage: Ember.computed('postImg', function () {
      try {
        this.get('postImg')[0]['web_url'] = pilboxHost + '/?url=' + host + this.get('postImg')[0]['web_url'] + '&w=411&h=208&mode=clip&filter=bilinear&fmt=webp';
      } catch (ex) {}
      return this.get('postImg')[0];
    })
  });
});
;define('vidya-frontend/models/lennew', ['exports', 'ember-data', 'vidya-frontend/config/environment'], function (exports, _emberData, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
    var pilboxHost = _environment.default.pilboxHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
    var pilboxHost = _environment.default.pilboxHost;
  }
  exports.default = _emberData.default.Model.extend({
    title: _emberData.default.attr('string'),
    category: _emberData.default.attr(),
    section: _emberData.default.attr(),
    header: _emberData.default.attr(),
    summary: _emberData.default.attr('string'),
    detail: _emberData.default.attr('string'),
    postImg: _emberData.default.attr(),
    userinfo: _emberData.default.attr(),
    prioritize: _emberData.default.attr('number'),
    status: _emberData.default.attr('string'),
    sourceNews: _emberData.default.attr('string'),
    author: _emberData.default.attr('string'),
    editor: _emberData.default.attr('string'),
    breakingNews: _emberData.default.attr('boolean'),
    stamp: _emberData.default.attr('rqlstamp'),
    createDate: _emberData.default.attr('rqlstamp'),
    previous_state: _emberData.default.attr('string'),
    checkNews: _emberData.default.attr('string'),
    tags: _emberData.default.attr(),
    option: _emberData.default.attr(),
    checkCrs: _emberData.default.attr('boolean'),
    postImage: Ember.computed('postImg', function () {
      try {
        if (this.get('postImg')[0]['type'] === 'image') {
          var target = $('img');
          this.get('postImg')[0]['web_url'] = pilboxHost + '/?url=' + host + this.get('postImg')[0]['web_url'] + '&w=400&h=300&mode=clip&filter=bilinear&fmt=webp';
        }
        return this.get('postImg')[0];
      } catch (ex) {}
      return [];
    }),
    allFile: Ember.computed('postImg', function () {
      return this.get('postImg');
    }),
    ads_link: _emberData.default.attr('string'),
    company_name: _emberData.default.attr('string'),
    upload: _emberData.default.attr()
  });
});
;define('vidya-frontend/models/livecomment', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        streamid: _emberData.default.attr('string'),
        comment: _emberData.default.attr('string'),
        userinfo: _emberData.default.attr(),
        stamp: _emberData.default.attr('rqlstamp')
    });
});
;define('vidya-frontend/models/message', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    message: _emberData.default.attr('string'),
    channel_id: _emberData.default.attr('string'),
    userid: _emberData.default.attr('string'),
    // username: DS.attr('string'),
    type: _emberData.default.attr('string'),
    img_url: _emberData.default.attr(),
    userinfo: _emberData.default.attr(),
    stamp: _emberData.default.attr('rqlstamp'),
    isMessage: Ember.computed("type", function () {
      if (this.get('type') === 'm.room.message') {
        return this.get("type") === "m.room.message";
      } else if (this.get('type') === 'content') {
        return this.get("type") === "content";
      } else {
        return this.get("type") === "m.room.message";
      }
    })
  });
});
;define('vidya-frontend/models/notification', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        channel_id: _emberData.default.attr('string'),
        message: _emberData.default.attr(),
        receive_user: _emberData.default.attr('string'),
        send_user: _emberData.default.attr('string'),
        status: _emberData.default.attr('string'),
        type: _emberData.default.attr('string'),
        stamp: _emberData.default.attr('rqlstamp')
    });
});
;define('vidya-frontend/models/nowuser', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        accessToken: _emberData.default.attr('string'),
        fbuserId: _emberData.default.attr('string'),
        username: _emberData.default.attr('string'),
        user_url: _emberData.default.attr(),
        info: _emberData.default.attr(),
        phone: _emberData.default.attr('string'),
        status: _emberData.default.attr('string'),
        follower: _emberData.default.attr(),
        following: _emberData.default.attr(),
        group: _emberData.default.attr(),
        check: _emberData.default.attr('string'),
        channel_id: _emberData.default.attr('string'),
        stamp: _emberData.default.attr('rqlstamp'),
        role: _emberData.default.attr('string')

    });
});
;define("vidya-frontend/models/onechannel", ["exports", "ember-data"], function (exports, _emberData) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        channelname: _emberData.default.attr("string"),
        type: _emberData.default.attr("string"),
        status: _emberData.default.attr("string"),
        news_id: _emberData.default.attr(),
        userlist: _emberData.default.attr(),
        stamp: _emberData.default.attr('rqlstamp'),
        postImg: _emberData.default.attr(),
        back_photo: _emberData.default.attr(),
        otherinfo: _emberData.default.attr(),
        user_url: _emberData.default.attr(),
        userinfo: _emberData.default.attr(),
        latestmessage: _emberData.default.attr(),
        banuser_list: _emberData.default.attr(),
        userCount: Ember.computed('userlist.length', function () {
            return this.get('userlist').length;
        }),
        channelImg: Ember.computed('postImg', function () {
            return this.get('postImg')[0];
        })
    });
});
;define('vidya-frontend/models/onepost', ['exports', 'ember-data', 'vidya-frontend/config/environment'], function (exports, _emberData, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    if (_environment.default.environment === 'development') {
        var host = _environment.default.localHost;
        var pilboxHost = _environment.default.pilboxHost;
    } else if (_environment.default.environment === 'production') {
        var host = _environment.default.remoteHost;
        var pilboxHost = _environment.default.pilboxHost;
    }

    exports.default = _emberData.default.Model.extend({
        title: _emberData.default.attr('string'),
        category: _emberData.default.attr(),
        section: _emberData.default.attr(),
        header: _emberData.default.attr(),
        summary: _emberData.default.attr('string'),
        detail: _emberData.default.attr('string'),
        postImg: _emberData.default.attr(),
        userinfo: _emberData.default.attr(),
        prioritize: _emberData.default.attr('number'),
        status: _emberData.default.attr('string'),
        sourceNews: _emberData.default.attr('string'),
        author: _emberData.default.attr('string'),
        editor: _emberData.default.attr('string'),
        breakingNews: _emberData.default.attr('boolean'),
        stamp: _emberData.default.attr('rqlstamp'),
        createDate: _emberData.default.attr('rqlstamp'),
        previous_state: _emberData.default.attr('string'),
        checkNews: _emberData.default.attr('string'),
        tags: _emberData.default.attr(),
        option: _emberData.default.attr(),
        postImage: Ember.computed('postImg', function () {
            try {

                if (this.get('postImg')[0]['type'] === 'image') {
                    this.get('postImg')[0]['web_url'] = pilboxHost + '/?url=' + host + this.get('postImg')[0]['web_url'] + '&w=400&h=300&mode=clip&filter=bilinear&fmt=webp';
                    // }else{
                    //   this.get('postImg')[0]['web_url'] = this.get('postImg')[0]['web_url'] + '#t=0.5'
                }
            } catch (ex) {}

            return this.get('postImg')[0];
        }),
        allFile: Ember.computed('postImg', function () {
            return this.get('postImg');
        })
    });
});
;define('vidya-frontend/models/onesocial', ['exports', 'ember-data', 'vidya-frontend/config/environment'], function (exports, _emberData, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    if (_environment.default.environment === 'development') {
        var host = _environment.default.localHost;
        var pilboxHost = _environment.default.pilboxHost;
    } else if (_environment.default.environment === 'production') {
        var host = _environment.default.remoteHost;
        var pilboxHost = _environment.default.pilboxHost;
    }
    exports.default = _emberData.default.Model.extend({
        title: _emberData.default.attr('string'),
        category: _emberData.default.attr(),
        section: _emberData.default.attr(),
        header: _emberData.default.attr(),
        summary: _emberData.default.attr('string'),
        ban: _emberData.default.attr('boolean'),
        detail: _emberData.default.attr('string'),
        postImg: _emberData.default.attr(),
        userinfo: _emberData.default.attr(),
        prioritize: _emberData.default.attr('number'),
        status: _emberData.default.attr('string'),
        sourceNews: _emberData.default.attr('string'),
        author: _emberData.default.attr('string'),
        editor: _emberData.default.attr('string'),
        breakingNews: _emberData.default.attr('boolean'),
        sharePost: _emberData.default.attr('boolean'),
        shareText: _emberData.default.attr('string'),
        shareuserinfo: _emberData.default.attr(),
        stamp: _emberData.default.attr('rqlstamp'),
        shareStamp: _emberData.default.attr('rqlstamp'),
        createDate: _emberData.default.attr('rqlstamp'),
        previous_state: _emberData.default.attr('string'),
        checkNews: _emberData.default.attr('string'),
        tags: _emberData.default.attr(),
        option: _emberData.default.attr(),
        channel_id: _emberData.default.attr('string'),
        news_id: _emberData.default.attr('string'),
        crs_id: _emberData.default.attr('string'),
        like: _emberData.default.attr(),
        comments: _emberData.default.attr('number'),
        share: _emberData.default.attr(),
        groupPost: _emberData.default.attr('boolean'),
        groupinfo: _emberData.default.attr(),
        latest_message: _emberData.default.attr('string'),
        group_img: Ember.computed('userinfo.group_image', function () {
            try {
                this.get('userinfo.group_image')[0]['web_url'] = pilboxHost + '/?url=' + host + this.get('userinfo.group_image')[0]['web_url'] + '&w=200&h=150&mode=clip&filter=bilinear&fmt=webp';
            } catch (ex) {}
            return this.get('userinfo.group_image')[0];
        }),
        post_image: Ember.computed('postImg', function () {
            return this.get('postImg')[0];
        }),
        firstimage: Ember.computed('postImg', function () {
            return this.get('postImg')[0];
        })
    });
});
;define('vidya-frontend/models/oneuser', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({

        accessToken: _emberData.default.attr('string'),
        fbuserId: _emberData.default.attr('string'),
        username: _emberData.default.attr('string'),
        user_url: _emberData.default.attr(),
        info: _emberData.default.attr(),
        phone: _emberData.default.attr('string'),
        status: _emberData.default.attr('string'),
        follower: _emberData.default.attr(),
        following: _emberData.default.attr(),
        group: _emberData.default.attr(),
        check: _emberData.default.attr('string'),
        channel_id: _emberData.default.attr('string'),
        stamp: _emberData.default.attr('rqlstamp'),
        role: _emberData.default.attr('string')

    });
});
;define('vidya-frontend/models/post', ['exports', 'ember-data', 'vidya-frontend/config/environment'], function (exports, _emberData, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
    var pilboxHost = _environment.default.pilboxHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
    var pilboxHost = _environment.default.pilboxHost;
  }
  exports.default = _emberData.default.Model.extend({
    title: _emberData.default.attr('string'),
    category: _emberData.default.attr(),
    section: _emberData.default.attr(),
    header: _emberData.default.attr(),
    summary: _emberData.default.attr('string'),
    detail: _emberData.default.attr('string'),
    postImg: _emberData.default.attr(),
    userinfo: _emberData.default.attr(),
    prioritize: _emberData.default.attr('number'),
    status: _emberData.default.attr('string'),
    sourceNews: _emberData.default.attr('string'),
    author: _emberData.default.attr('string'),
    editor: _emberData.default.attr('string'),
    breakingNews: _emberData.default.attr('boolean'),
    stamp: _emberData.default.attr('rqlstamp'),
    createDate: _emberData.default.attr('rqlstamp'),
    previous_state: _emberData.default.attr('string'),
    checkNews: _emberData.default.attr('string'),
    tags: _emberData.default.attr(),
    option: _emberData.default.attr(),
    checkCrs: _emberData.default.attr('boolean'),
    postImage: Ember.computed('postImg', function () {
      try {
        if (this.get('postImg')[0]['type'] === 'image') {
          var target = $('img');
          this.get('postImg')[0]['web_url'] = pilboxHost + '/?url=' + host + this.get('postImg')[0]['web_url'] + '&w=400&h=300&mode=clip&filter=bilinear&fmt=webp';
        }
        return this.get('postImg')[0];
      } catch (ex) {}
      return [];
    }),
    allFile: Ember.computed('postImg', function () {
      return this.get('postImg');
    }),
    ads_link: _emberData.default.attr('string'),
    company_name: _emberData.default.attr('string'),
    upload: _emberData.default.attr()
  });
});
;define('vidya-frontend/models/similarheader', ['exports', 'ember-data', 'vidya-frontend/config/environment'], function (exports, _emberData, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    if (_environment.default.environment === 'development') {
        var host = _environment.default.localHost;
        var pilboxHost = _environment.default.pilboxHost;
    } else if (_environment.default.environment === 'production') {
        var host = _environment.default.remoteHost;
        var pilboxHost = _environment.default.pilboxHost;
    }
    exports.default = _emberData.default.Model.extend({
        header: _emberData.default.attr(),
        category: _emberData.default.attr(),
        summary: _emberData.default.attr('string'),
        tags: _emberData.default.attr(),
        postImg: _emberData.default.attr(),
        prioritize: _emberData.default.attr('number'),
        newsDate: _emberData.default.attr('rqlstamp'),
        author: _emberData.default.attr('string'),
        editor: _emberData.default.attr('string'),
        userinfo: _emberData.default.attr(),
        stamp: _emberData.default.attr('rqlstamp'),
        postImage: Ember.computed('postImg', function () {
            try {
                this.get('postImg')[0]['web_url'] = pilboxHost + '/?url=' + host + this.get('postImg')[0]['web_url'] + '&w=411&h=208&mode=clip&filter=bilinear&fmt=webp';
            } catch (ex) {}
            return this.get('postImg')[0];
        })
    });
});
;define('vidya-frontend/models/similarpost', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		inter: _emberData.default.attr(),
		local: _emberData.default.attr(),
		private: _emberData.default.attr()
	});
});
;define('vidya-frontend/models/similaruser', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        accessToken: _emberData.default.attr('string'),
        fbuserId: _emberData.default.attr('string'),
        username: _emberData.default.attr('string'),
        user_url: _emberData.default.attr(),
        info: _emberData.default.attr(),
        phone: _emberData.default.attr('string'),
        status: _emberData.default.attr('string'),
        follower: _emberData.default.attr(),
        following: _emberData.default.attr(),
        group: _emberData.default.attr(),
        check: _emberData.default.attr('string'),
        channel_id: _emberData.default.attr('string'),
        stamp: _emberData.default.attr('rqlstamp'),
        role: _emberData.default.attr('string')
    });
});
;define('vidya-frontend/models/social', ['exports', 'ember-data', 'vidya-frontend/config/environment'], function (exports, _emberData, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
    var pilboxHost = _environment.default.pilboxHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
    var pilboxHost = _environment.default.pilboxHost;
  }
  exports.default = _emberData.default.Model.extend({
    title: _emberData.default.attr('string'),
    category: _emberData.default.attr(),
    section: _emberData.default.attr(),
    header: _emberData.default.attr(),
    summary: _emberData.default.attr('string'),
    detail: _emberData.default.attr('string'),
    postImg: _emberData.default.attr(),
    userinfo: _emberData.default.attr(),
    prioritize: _emberData.default.attr('number'),
    status: _emberData.default.attr('string'),
    sourceNews: _emberData.default.attr('string'),
    ban: _emberData.default.attr('boolean'),
    author: _emberData.default.attr('string'),
    editor: _emberData.default.attr('string'),
    breakingNews: _emberData.default.attr('boolean'),
    sharePost: _emberData.default.attr('boolean'),
    shareText: _emberData.default.attr('string'),
    shareuserinfo: _emberData.default.attr(),
    stamp: _emberData.default.attr('rqlstamp'),
    shareStamp: _emberData.default.attr('rqlstamp'),
    createDate: _emberData.default.attr('rqlstamp'),
    previous_state: _emberData.default.attr('string'),
    checkNews: _emberData.default.attr('string'),
    tags: _emberData.default.attr(),
    option: _emberData.default.attr(),
    channel_id: _emberData.default.attr('string'),
    news_id: _emberData.default.attr('string'),
    crs_id: _emberData.default.attr('string'),
    like: _emberData.default.attr(),
    comments: _emberData.default.attr('number'),
    share: _emberData.default.attr(),
    groupinfo: _emberData.default.attr(),
    groupPost: _emberData.default.attr('boolean'),
    latest_message: _emberData.default.attr('string'),
    originalSize: '',
    group_img: Ember.computed('userinfo.group_image', function () {
      if (this.get('userinfo.group_image')[0]['web_url'] != 'uploads/newsicon.png') {
        try {
          this.get('userinfo.group_image')[0]['web_url'] = pilboxHost + '/?url=' + host + this.get('userinfo.group_image')[0]['web_url'] + '&w=200&h=150&mode=clip&filter=bilinear&fmt=webp';
        } catch (ex) {}
      }
      return this.get('userinfo.group_image')[0];
    }),
    post_image: Ember.computed('postImg', function () {
      return this.get('postImg')[0];
    }),
    firstimage: Ember.computed('postImg', function () {
      return this.get('postImg')[0];
    })
  });
});
;define("vidya-frontend/models/userlist", ["exports", "ember-data"], function (exports, _emberData) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    channelname: _emberData.default.attr("string"),
    type: _emberData.default.attr("string"),
    status: _emberData.default.attr("string"),
    news_id: _emberData.default.attr(),
    userlist: _emberData.default.attr(),
    stamp: _emberData.default.attr('rqlstamp'),
    postImg: _emberData.default.attr(),
    otherinfo: _emberData.default.attr(),
    user_url: _emberData.default.attr(),
    userinfo: _emberData.default.attr(),
    latestmessage: _emberData.default.attr()

  });
});
;define('vidya-frontend/models/userprofile', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    accessToken: _emberData.default.attr('string'),
    fbuserId: _emberData.default.attr('string'),
    username: _emberData.default.attr('string'),
    user_url: _emberData.default.attr(),
    info: _emberData.default.attr(),
    phone: _emberData.default.attr('string'),
    status: _emberData.default.attr('string'),
    follower: _emberData.default.attr(),
    following: _emberData.default.attr(),
    group: _emberData.default.attr(),
    photo_history: _emberData.default.attr(),
    check: _emberData.default.attr(),
    channel_id: _emberData.default.attr('string'),
    stamp: _emberData.default.attr('rqlstamp'),
    role: _emberData.default.attr('string'),
    otherinfo: _emberData.default.attr(),
    followerCount: Ember.computed('follower', function () {
      return this.get('follower').length;
    }),
    followingCount: Ember.computed('following', function () {
      return this.get('following').length;
    }),
    groupCount: Ember.computed('group', function () {
      return this.get('group').length;
    })
  });
});
;define('vidya-frontend/models/vote', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    live_id: _emberData.default.attr('string'),
    live_info: _emberData.default.attr(),
    user_id: _emberData.default.attr('string'),
    userinfo: _emberData.default.attr(),
    wallet_id: _emberData.default.attr('string'),
    user_vote_count: _emberData.default.attr('number'),
    stamp: _emberData.default.attr('rqlstamp')
  });
});
;define('vidya-frontend/models/wallet', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    userinfo: _emberData.default.attr(),
    votecount: _emberData.default.attr('number'),
    check_date: _emberData.default.attr('rqlstamp')
  });
});
;define('vidya-frontend/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
;define('vidya-frontend/router', ['exports', 'vidya-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('login');
    this.route('home', {
      path: '/'
    });
    this.route('index', {
      path: 'similar-news'
    }), this.route('setting');

    this.authenticatedRoute('entertainment', function () {
      this.authenticatedRoute('create-live');
      this.authenticatedRoute('home');
      this.authenticatedRoute('live-detail', {
        path: 'live-detail/:_id'
      });
      this.authenticatedRoute('upload-detail', { path: "upload-detail/:_id" });
    });
    this.route('news', function () {
      this.route('international-list');
      this.route('home-slide');
      this.route('local-list');
      this.route('private-list');
      this.route('post-detail');
      this.route('category');
      this.route('crs-related');
      this.route('search-category', {
        path: 'search-category/:categoryname'
      });
      this.authenticatedRoute('create-share', {
        path: 'create-share/:_id'
      });
      this.authenticatedRoute('create-crs', {
        path: 'create-crs/:_id'
      });
    });
    this.route('tabs', function () {
      this.route('news');
      // this.route('social');
      // this.route('entertainment');
      this.route('setting');
    });
    this.route('news-detail');
    this.route('login');
    this.authenticatedRoute('social');
    this.authenticatedRoute('notification');
    this.authenticatedRoute('startup');
    this.authenticatedRoute('social-search', { path: 'social-search/:search' });
    this.authenticatedRoute('discuss', function () {
      // this.authenticatedRoute('chat');
      this.authenticatedRoute('chat', {
        path: 'chat/:post_id'
      });
      this.authenticatedRoute('share-social', { path: 'share-social/:_id' });
      this.authenticatedRoute('create-social');

      this.authenticatedRoute('create-grouppost', { path: 'create-grouppost/:group_id' });
      this.authenticatedRoute('edit-social', {
        path: 'edit-social/:post_id'
      });
    });

    this.authenticatedRoute('user', function () {
      this.authenticatedRoute('find-friends', { path: 'find-friends/:role' });
      this.authenticatedRoute('find-groups');
      this.authenticatedRoute('create-group');
      this.authenticatedRoute('chatting');
      this.authenticatedRoute("user-chat-list");
      this.authenticatedRoute('group-chat-list', {
        path: 'group-chat-list/:groupchat'
      });
      this.authenticatedRoute('group-chat-detail', {
        path: 'group-chat-detail/:channel_id'
      });
      this.authenticatedRoute('profile', {
        path: 'profile/:profile_id'
      });
      this.authenticatedRoute('group', {
        path: 'group/:group_id'
      });
      this.authenticatedRoute('chat-list');
      this.authenticatedRoute('groupchat');
      this.authenticatedRoute('chat', { path: 'chat/:channel_id' });
      this.authenticatedRoute('profile-info', { path: 'profile-info/:profile_id' });
    });

    this.route('notification');
  });

  exports.default = Router;
});
;define('vidya-frontend/routes/application', ['exports', 'ember-cordova-events/utils/subscribe', 'vidya-frontend/config/environment'], function (exports, _subscribe, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
  }

  exports.default = Ember.Route.extend({
    messaging: Ember.inject.service("messagebus"),
    uploadimage: Ember.inject.service(),
    cordovaEvents: Ember.inject.service('ember-cordova/events'),
    splashScreenService: Ember.inject.service('ember-cordova/splash'),
    routing: Ember.inject.service('-routing'),
    states: Ember.inject.service(),
    connection: Ember.inject.service('connection-status'),
    auth: Ember.inject.service(),
    userId: localStorage.getItem('id'),

    beforeModel() {
      var that = this;
      document.addEventListener('deviceReady', deviceCheck, false);

      function deviceCheck(e) {
        var permissions = cordova.plugins.permissions;
        var that = this;

        function error(e) {
          console.warn('error', e);
          // window.location.reload(true);
        }

        function success(status) {
          if (!status.hasPermission) error();
        }
        if (permissions) {
          console.log("we can request permissions");
          permissions.requestPermission(permissions.CAMERA, success, error);
          permissions.requestPermission(permissions.WRITE_EXTERNAL_STORAGE, success, error);
          permissions.requestPermission(permissions.RECORD_AUDIO, success, error);
        }
      }
      document.addEventListener("backbutton", onBackKeyDown, false);

      function onBackKeyDown(e) {
        e.preventDefault();
        console.log(that.get('states.viewer'));
        if (that.get('states.viewPhoto')) {
          var elements = document.getElementsByClassName("pswp");
          for (var i = 0; i < elements.length; i++) {
            elements[i].setAttribute('class', "pswp");
          }
          that.set('states.viewPhoto', false);
        } else {
          if (that.get('states.currentRoute') == 'V-user.profile') {
            that.store.unloadAll('social');
          }
          if (that.get('routing.currentRouteName') == 'home') {
            that.set('states.exitDialog', true);
            // navigator.app.exitApp();
          } else if (that.get('states.currentRoute') == "V-discuss.create-social" && that.get('uploadimage.progress')) {
            if (!that.get("states.cancelDisable")) {

              that.set("states.openDialog", true);
            }
          } else if (that.get('states.currentRoute') == "V-user.chat" && that.get('uploadimage.progress')) {
            if (!that.get("states.cancelDisable")) {

              that.set("states.openDialog", true);
            }
          } else if (that.get('states.viewer')) {
            that.set("states.viewer", false);
            var container = $('.viewer-container');
            for (var i = 0; i < container.length; i++) {
              container[i].classList.add('close-img');
              container[i].classList.remove('viewer-in');
              container[i].classList.add('viewer-hide');
            }
          } else if (that.get('states.cancelDisable')) {} else if (that.get('states.currentRoute') == "V-user.chat" && that.get('uploadimage.progress')) {
            that.set("states.openDialog", true);
          } else {
            that.set('states.download', false);
            window.history.back();
          }
          console.log($('.viewer-container'));
        }
      }
      var messaging = this.get('messaging');
      messaging.stop('postupdates');
      messaging.stop('updateBreakingNews');
      var m_document_removeEventListener = document.removeEventListener;
      var m_document_addEventListener = document.addEventListener;
      var documentEventHandlers = {};
      document.removeEventListener = function (evt, handler, capture) {
        try {
          var e = evt.toLowerCase();
          // If unsubscribing from an event that is handled by a plugin
          if (typeof documentEventHandlers[e] != "undefined") {
            documentEventHandlers[e].unsubscribe(handler);
          } else {
            m_document_removeEventListener.call(document, evt, handler, capture);
          }
        } catch (ex) {}
      };

      document.addEventListener = function (evt, handler, capture) {
        try {
          var e = evt.toLowerCase();
          if (typeof documentEventHandlers[e] != 'undefined') {
            documentEventHandlers[e].subscribe(handler);
          } else {
            m_document_addEventListener.call(document, evt, handler, capture);
          }
        } catch (ex) {}
      };
    },
    // goBackground: subscribe('cordovaEvents.deviceready', function () {
    //   var that = this;
    //   document.addEventListener('deviceReady', deviceCheck, false);

    //   function deviceCheck(e) {
    //     var permissions = cordova.plugins.permissions;
    //     var that = this;

    //     function error(e) {
    //       console.warn('error', e);
    //       // window.location.reload(true);
    //     }

    //     function success(status) {
    //       if (!status.hasPermission) error();
    //     }
    //     if (permissions) {
    //       console.log("we can request permissions")
    //       permissions.requestPermission(permissions.CAMERA, success, error);
    //       permissions.requestPermission(permissions.WRITE_EXTERNAL_STORAGE, success, error);
    //       permissions.requestPermission(permissions.RECORD_AUDIO, success, error);

    //     }
    //   }
    //   // document.addEventListener("backbutton", onBackKeyDown, false);
    // }),
    model() {

      var messaging = this.get('messaging');
      // this.get('connection').online
      if (this.get('userId')) {
        messaging.stop('userschanges/*');
        messaging.start('userschanges/' + this.get('userId'), 'chatlist');
      }
      if (this.get('session.content.isAuthenticated') === true) {
        var that = this;
        try {
          setTimeout(getTheToken, 1000);
          function getTheToken() {
            FCMPlugin.getToken(function (token) {
              console.log(token);
              if (token == null) {
                console.log("null token");
                setTimeout(getTheToken, 1000);
              } else {
                console.log(token);
                Ember.$.ajax({
                  url: host + "/fcmtoken",
                  data: {
                    'token': token,
                    'userid': that.get('auth.userId')
                  },
                  dataType: 'json',
                  type: 'POST',
                  success: function (json_data) {
                    // var json_data = JSON.parse(data.user)
                    console.log("settting accessToken from fetch()", json_data);
                    // cordova.plugins.firebase.analytics.setUserId(json_data.notification.generated_keys[0]);
                    // var firebaseConfig = {
                    //   apiKey: "AIzaSyC92Ys26yHjeKnfraOxKSArbGZNbbuJZyc",
                    //   authDomain: "368316619099-gqvsr1fj618vn5op1i9fkbcmcnfmufnt.apps.googleusercontent.com",
                    //   databaseURL: "https://vidya-67794.firebaseio.com",
                    //   projectId: "vidya-67794",
                    //   storageBucket: "vidya-67794.appspot.com",
                    //   messagingSenderId: json_data.notification.generated_keys[0],
                    //   appID: "1:368316619099:android:7d9504d6291286b7",
                    // };
                    // firebase.initializeApp(firebaseConfig);
                  }
                });
                console.log("I got the token: " + that.get('auth.userId'));
              }
            }, function (err) {
              console.log('error retrieving token: ' + err);
            });
          }

          FCMPlugin.onNotification(function (data) {
            if (data.wasTapped) {
              //Background notification click
              that.transitionTo("/user/chat/" + data.channel_id);
            } else {
              //Notification in App
              alert(JSON.stringify(data));
            }
          }, function (msg) {
            //alert('onNotification callback successfully registered: ' + msg);
          }, function (err) {
            //alert('Error registering onNotification callback: ' + err);
          });
        } catch (ex) {}
      }

      let breakingModel = this.store.findAll('breaking');
      return breakingModel;
    },
    afterModel() {
      this.get('splashScreenService').hide();
    },

    actions: {
      accessDenied: function () {

        // this.transitionTo("login");

      }
    }
  });
});
;define('vidya-frontend/routes/bottombar', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({});
});
;define('vidya-frontend/routes/discuss/chat', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    states: Ember.inject.service(),
    auth: Ember.inject.service(),
    messaging: Ember.inject.service("messagebus"),
    crsid: null,
    channelid: null,
    model(param) {
      this.set('states.post_id', param);
      var discuss = this.get('messaging');
      discuss.stop('updatediscusses/*');
      discuss.start('updatediscusses/' + param.post_id, 'discuss');
      this.store.unloadAll('onesocial');
      this.store.unloadAll('crsgroup');
      this.store.unloadAll('discuss');
      // return this.store.queryRecord("social", this.get('states.post_id'))
      return Ember.RSVP.hash({
        onesocialData: this.store.queryRecord("onesocial", param).then(post => {
          this.set("crsid", post.crs_id);
          this.set("channelid", post.channel_id);
          let model = this.store.peekAll("onesocial");
          return model;
        }),
        discussData: this.store.query("discuss", param).then(post => {
          let model = this.store.peekAll("discuss");
          return model;
        })
      });
    },
    setupController(controller, model) {
      controller.set('CRSid', this.get('crsid')), controller.set('Channelid', this.get("channelid"));
    }
  });
});
;define('vidya-frontend/routes/discuss/create-grouppost', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model(param) {
            return this.store.findRecord('channel', param.group_id);
        }
    });
});
;define('vidya-frontend/routes/discuss/create-social', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define("vidya-frontend/routes/discuss/edit-social", ["exports"], function (exports) {
   "use strict";

   Object.defineProperty(exports, "__esModule", {
      value: true
   });
   exports.default = Ember.Route.extend({

      model(param) {

         return this.store.findRecord("social", param.post_id);
      }
   });
});
;define('vidya-frontend/routes/discuss/group-page', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    states: Ember.inject.service(),
    auth: Ember.inject.service(),
    model(param) {
      this.set('states.channel_id', param);
      this.store.unloadAll('social');
    },
    setupController(controller, model) {
      controller.set('socialData', this.store.query("social", this.get('states.channel_id')));
    }
  });
});
;define("vidya-frontend/routes/discuss/share-social", ["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model(param) {
            //  this.store.unloadAll("post")
            this.store.unloadAll("onesocial");
            this.store.queryRecord("onesocial", { post_id: param._id }).then(post => {
                let model = this.store.peekAll("onesocial");
                return model;
            });
        }
    });
});
;define('vidya-frontend/routes/entertainment/home', ['exports'], function (exports) {
		'use strict';

		Object.defineProperty(exports, "__esModule", {
				value: true
		});
		exports.default = Ember.Route.extend({
				// auth: Ember.inject.service(),
				messaging: Ember.inject.service("messagebus"),
				// connection: Ember.inject.service('connection-status'),
				beforeModel() {
						if (!this.get('session.content')['isAuthenticated']) {
								this.transitionTo("login");
						}
				},
				model() {
						var post = this.get('messaging');
						post.stop('newsupdate');
						post.stop("channelupdate");
						post.stop("groupupdate");
						post.stop('entlivevideoupload');
						post.stop('entliveupdate');
						post.stop("commentupdates");
						post.stop('postupdates');
						post.stop('headlineUpdates');
						post.stop('similarheadlineUpdates');
						post.start('entlivevideoupload', 'entvideoupload');
						post.start("entliveupdate", "entstreamlist");
						this.store.unloadAll("entvideoupload");
						this.store.unloadAll('entstreamlist');
						// 	if(this.get('auth.role') === 'Senior Editor'){
						return Ember.RSVP.hash({
								LiveMode: this.store.queryRecord("entstreamlist", { previous_state: 'Senior Complete' }).then(post => {
										let model = this.store.peekAll("entstreamlist");
										return model;
								}),
								uploadMode: this.store.findAll("entvideoupload").then(post => {
										let model = this.store.peekAll("entvideoupload");
										return model;
								})
								// 			expReportModel: this.store.queryRecord("entdone", {expert: true}).then((post) => {
								// 				let model = this.store.peekAll("entdone")
								// 				return model
								// 			}),
								// 			editorModel: this.store.queryRecord("entban", {previous_state: 'Editor Complete'}).then((post) => {
								// 				let model = this.store.peekAll("entban")
								// 				return model
								// 			}),
						});
						// 	} else {
						//  		this.transitionTo('/')
				}
		});
});
;define('vidya-frontend/routes/entertainment/live-detail', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        auth: Ember.inject.service(),
        messaging: Ember.inject.service("messagebus"),
        model(pram) {
            // console.log(pram)
            var post = this.get('messaging');
            post.stop('entlivevideoupload');
            post.stop("entliveupdate");
            post.stop('commentupdates');
            post.start('commentupdates', "livecomment");
            this.store.unloadAll("livecomment");
            this.store.unloadAll('entstreamlist');
            // return this.store.queryRecord("entstreamlist", {"id" : pram._id}).then((post) => {
            //     let model = this.store.peekAll("entstreamlist")
            //     return model
            // })
            return Ember.RSVP.hash({
                expReportModel: this.store.queryRecord("entstreamlist", { "id": pram._id }).then(post => {
                    let model = this.store.peekAll("entstreamlist");
                    return model;
                }),
                editorModel: this.store.queryRecord("livecomment", { "live_id": pram._id }).then(post => {
                    let model = this.store.peekAll("livecomment");
                    return model;
                })
            });
        }
    });
});
;define('vidya-frontend/routes/entertainment/upload-detail', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model(pram) {
            console.log(pram);
            this.store.unloadAll('entvideoupload');
            return this.store.queryRecord("entvideoupload", { "id": pram._id }).then(post => {
                let model = this.store.peekAll("entvideoupload");
                return model;
            });
        }
    });
});
;define('vidya-frontend/routes/home', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    messaging: Ember.inject.service("messagebus"),
    states: Ember.inject.service(),
    beforeModel() {
      var messaging = this.get('messaging');
      messaging.stop('postupdates');
      messaging.stop('headlineUpdates');
      messaging.stop('similarheadlineUpdates');
      messaging.stop('updatesocials/*');
      messaging.stop('updatediscusses/*');
      messaging.stop('updateMessages/*');
      messaging.stop('entlivevideoupload');
      messaging.stop('entliveupdate');
      messaging.stop("commentupdates");
      // messaging.stop("advertise")
      messaging.start('postupdates', 'post');
      messaging.start('headlineUpdates', 'header');
      messaging.start("similarheadlineUpdates", "similarheader");
      // messaging.start("advertiseUpdates", "advertise");
    },

    model() {
      return Ember.RSVP.hash({
        similarHeadModel: this.store.findAll('similarheader'),
        postModel: this.store.queryRecord('post', { checkCrs: 'False' }),
        adsModel: this.store.findAll('advertise')
        //   crsModel: this.store.queryRecord('crsnew',{checkCrs:'True'})
      });
    },
    setupController(controller, model) {
      // controller.set('adsModel',this.store.findAll('advertise'))
      // controller.set('postModel',this.store.queryRecord('post',{checkCrs:'False'}))
      controller.set('crsModel', this.store.queryRecord('crsnew', { checkCrs: 'True' }));
    }
  } // setupElement: function(){
  //   if(that.get("states.scrollID")) {
  //     document.getElementById('content-list').scrollTo(0,that.get('states.scrollID'))
  //     console.log(that.get('states.scrollID'))
  //     that.set("states.scrollID", null)
  //   }

  // }.on('didInsertElement')

  );
});
;define('vidya-frontend/routes/index', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		states: Ember.inject.service(),
		queryParams: {
			headline: {
				refreshModel: true
			}
		},
		// beforeModel() {
		// 	return new Ember.RSVP.Promise(function (resolve, reject) {
		// 		Ember.run.later(function () { resolve({}); }, 500);
		// 	});
		//
		// },
		model(param) {
			var that = this;
			that.set('states.privateModel', []);
			that.set('states.localModel', []);
			that.set('states.interModel', []);
			console.log(param);
			return this.store.query("similarpost", { 'section': 'International', 'headline': param.headline }).then(post => {
				let model = this.store.peekAll("similarpost");
				model.forEach(news => {
					that.set('states.interModel', news.data.inter);
					that.set('states.localModel', news.data.local);
					that.set('states.privateModel', news.data.private);
				});
				return model;
			});
		}
	});
});
;define('vidya-frontend/routes/login', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('vidya-frontend/routes/news-detail', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    queryParams: {
      post_id: {
        refreshModel: true
      }
    },
    // postOne : null,
    // postAll : null,
    // beforeModel() {
    //   return new Ember.RSVP.Promise(function (resolve, reject) {
    //     Ember.run.later(function () { resolve({}); }, 500);
    //   });
    //
    // },
    model(param) {
      console.log(param);
      this.store.unloadAll('onepost');
      this.store.unloadAll('adsupdate');
      return Ember.RSVP.hash({
        loadOne: this.store.queryRecord("onepost", param).then(post => {
          // this.set("postOne", this.store.peekAll("post"))
          let model = this.store.peekAll('onepost');
          return model;
        }),
        loadAll: this.store.query("onepost", {
          post_all: param.post_id
        }).then(post => {
          // this.set("postOne", this.store.peekAll("post"))
          let model = this.store.peekAll("onepost");
          return model;
        }),
        adsModel: this.store.findAll('adsupdate')
      });
    }

  } // setupController (controller, model) {
  //   controller.set("onePosts", this.get('postOne'))
  //   controller.set("AllPosts", this.get("postAll"));

  // }
  );
});
;define('vidya-frontend/routes/news/category', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model() {
      let model = this.store.findAll('category');
      return model;
    }
  });
});
;define('vidya-frontend/routes/news/create-crs', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({

    checkid: [],
    model(param) {
      this.store.unloadAll('post');
      this.set("checkid", param._id.split(','));
      return Ember.RSVP.hash({
        createCrs: this.store.query('post', {
          post_id: param._id
        }).then(post => {
          let model = this.store.peekAll('post');
          return model;
        })
      });
    },
    setupController(controller, model) {
      controller.set("checkids", this.get('checkid'));
    }
  });
});
;define("vidya-frontend/routes/news/create-share", ["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model(param) {
            //  this.store.unloadAll("post")
            this.store.unloadAll("onepost");
            this.store.queryRecord("onepost", { post_id: param._id }).then(post => {
                let model = this.store.peekAll("onepost");
                return model;
            });
        }

    });
});
;define('vidya-frontend/routes/news/international-list', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        queryParams: {
            section: {
                refreshModel: true
            }
        },
        model() {
            this.store.unloadAll('post');
            var param = { section: 'International' };
            return this.store.query("post", param).then(post => {
                let model = this.store.peekAll("post");
                return model;
            });
        }
    });
});
;define('vidya-frontend/routes/news/local-list', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        queryParams: {
            section: {
                refreshModel: true
            }
        },
        model() {
            this.store.unloadAll('post');
            var param = { section: 'Local' };
            return this.store.query("post", param).then(post => {
                let model = this.store.peekAll("post");
                return model;
            });
        }
    });
});
;define('vidya-frontend/routes/news/post-detail', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        states: Ember.inject.service(),
        queryParams: {
            post_id: {
                refreshModel: true
            }
        },
        model(param) {
            param = { 'post_id': this.get('states.post_id') };
            console.log(param);
            return this.store.queryRecord("post", param).then(post => {
                let model = this.store.peekAll("post");
                return model;
            });
        }
    });
});
;define('vidya-frontend/routes/news/private-list', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        queryParams: {
            section: {
                refreshModel: true
            }
        },
        model() {
            this.store.unloadAll('post');
            var param = { section: '' };
            return this.store.query("post", param).then(post => {
                let model = this.store.peekAll("post");
                return model;
            });
        }
    });
});
;define('vidya-frontend/routes/news/search-category', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    states: Ember.inject.service(),
    model(param) {
      param['key'] = this.get('states.searchNews');
      this.store.unloadAll('post');
      console.log(param);
      console.log('search');
      return this.store.query("post", param).then(post => {
        let model = this.store.peekAll("post");
        this.set('states.searchNews', null);
        return model;
      });
    }
  });
});
;define('vidya-frontend/routes/notification', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('vidya-frontend/routes/social-search', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        auth: Ember.inject.service(),
        model(param) {
            this.store.unloadAll("social");
            console.log(param);
            var val = {
                current_id: this.get('auth.userId'),
                search: param.search
                // return this.store.findAll('social')
            };return this.store.queryRecord("social", val);
        }
    });
});
;define('vidya-frontend/routes/social', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    auth: Ember.inject.service(),
    messaging: Ember.inject.service('messagebus'),
    beforeModel() {
      if (!this.get('session.content')['isAuthenticated']) {
        this.transitionTo("login");
      } else {
        var val = {
          current_id: this.get('auth.userId')
        };
        return this.store.query("social", val);
      }
    },
    model() {
      // this.store.unloadAll("social")
      var social = this.get('messaging');
      social.stop('postupdates');
      social.stop('headlineUpdates');
      social.stop('similarheadlineUpdates');
      social.stop('updatesocials/*');
      social.stop('entlivevideoupload');
      social.stop('entliveupdate');
      social.stop("commentupdates");
      social.start('updatesocials/' + this.get('auth.userId'), 'social');
      var val = {
        current_id: this.get('auth.userId')
        // return this.store.query("social", val)   
      };return this.store.peekAll("social");
    }
  } // setupController(controller,model){
  //   var val = {
  //     current_id: this.get('auth.userId')
  //   }
  //   controller.set('socialData',this.store.query('social',val))
  // }

  );
});
;define('vidya-frontend/routes/startup', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // beforeModel() {
    //   return new Ember.RSVP.Promise(function (resolve, reject) {
    //     Ember.run.later(function () { resolve({}); }, 500);
    //   });
    //
    // },
    auth: Ember.inject.service(),
    beforeModel() {
      if (!this.get('session.content')['isAuthenticated']) {
        this.transitionTo("login");
      }
    },
    model(param) {
      // var userCookie = document.cookie
      // if (userCookie==''){
      //   window.location.reload()
      // }
      return Ember.RSVP.hash({
        celeData: this.store.query("celebrity", { role: 'celebrity', startup: true }).then(post => {
          let model = this.store.peekAll("celebrity");
          return model;
        }),
        userData: this.store.query("celebrity", { role: 'User', startup: true }).then(post => {
          let model = this.store.peekAll("celebrity");
          return model;
        }),
        groupData: this.store.query("channel", { type: 'public', user_id: this.get("auth.userId") })
      });
    },
    // setupController(controller, model){
    //   controller.set('celeData', this.store.query("celebrity", {role: 'celebrity', startup: true}).then((post) => {
    //     let model = this.store.peekAll("celebrity")
    //     return model
    //   })),
    //     controller.set('userData', this.store.query("celebrity", { role: 'User',startup: true }).then((post) => {
    //       let model = this.store.peekAll("celebrity")
    //       return model
    //     })),
    //   controller.set('groupData', this.store.findAll("channel"))
    // },
    actions: {
      sessionChanged() {
        this.refresh();
      }
    }
  });
});
;define('vidya-frontend/routes/user/chat-list', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    auth: Ember.inject.service(),
    messaging: Ember.inject.service("messagebus"),
    // connection: Ember.inject.service('connection-status'),
    beforeModel() {
      if (!this.get('session.content')['isAuthenticated']) {
        this.transitionTo("login");
      }
    },
    model() {
      var messaging = this.get('messaging');
      messaging.stop('userschanges/*');
      messaging.stop('postupdates');
      messaging.stop('headlineUpdates');
      messaging.stop('similarheadlineUpdates');
      messaging.stop('updatesocials/*');
      messaging.stop('updatediscusses/*');
      messaging.start('userschanges/' + this.get('auth.userId'), 'chatlist');
      var follow = this.get('auth.userId');
      var val = { following: follow.toString() };
      this.store.unloadAll('grouplist');
      return Ember.RSVP.hash({
        groupModel: this.store.queryRecord('grouplist', { groupchat: follow }),
        chatModel: this.store.queryRecord("chatlist", val)
      });
    }
  });
});
;define('vidya-frontend/routes/user/chat', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    states: Ember.inject.service(),
    auth: Ember.inject.service(),
    messaging: Ember.inject.service("messagebus"),
    channel_id: '',
    model(param) {
      console.log(param);
      this.set('states.channel_id', param);
      this.set('channel_id', param);
      var chat = this.get('messaging');
      chat.stop('userschanges/*');
      chat.stop('postupdates');
      chat.stop('headlineUpdates');
      chat.stop('similarheadlineUpdates');
      chat.stop('updatesocials/*');
      chat.stop('updatediscusses/*');
      chat.stop('updateMessages/*');
      chat.start('updateMessages/' + param.channel_id, 'message');
      this.store.unloadAll('message');
      this.store.unloadAll('groupchat');
    },
    setupController(controller, model) {
      controller.set('messageData', this.store.query("message", this.get('channel_id')));
      var data = { 'channel_id': this.get("channel_id").channel_id, 'check': 'group' };
      this.set('states.groupChat', false);
      this.set("states.groupedit", false);
      controller.set('groupuser', this.store.query('groupchat', data).then(post => {
        this.set('states.groupChat', true);
      }));
    }
  });
});
;define('vidya-frontend/routes/user/chatting', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define('vidya-frontend/routes/user/create-group', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
;define("vidya-frontend/routes/user/find-friends", ["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        states: Ember.inject.service(),
        model(param) {
            this.set("states.friendRole", param.role);
            this.store.unloadAll("celebrity");
            this.store.query("celebrity", { "role": param.role }).then(post => {
                let model = this.store.peekAll("celebrity");
                return model;
            });
        },
        actions: {
            sessionChanged() {
                this.refresh();
            }
        }
    });
});
;define("vidya-frontend/routes/user/find-groups", ["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        auth: Ember.inject.service(),
        model() {
            this.store.unloadAll("channel");
            return this.store.query("channel", { user_id: this.get("auth.userId") });
        }
    });
});
;define('vidya-frontend/routes/user/group-chat-detail', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({

    model(param) {
      this.set("group_id", param.channel_id);
      console.log(param);
      this.store.unloadAll('groupchat');
      return this.store.query("groupchat", {
        'channel_id': param.channel_id,
        'check': 'group'
      });
      // return Ember.RSVP.hash({
      //   groupuserlist: this.store.query("groupchat", {
      //     'channel_id': param.channel_id,
      //     'check': 'group'
      //   }).then((post) => {
      //     let model = this.store.peekAll("groupchat")
      //     return model
      //   })
      // })
    },
    setupController(controller, model) {
      controller.set("groupid", this.get("group_id"));
    }
  });
});
;define('vidya-frontend/routes/user/group-chat-list', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        beforeModel() {
            if (!this.get('session.content')['isAuthenticated']) {
                this.transitionTo("login");
            }
        },
        model(param) {
            console.log(param);
            this.store.unloadAll('grouplist');
            return this.store.queryRecord("grouplist", param).then(() => {
                let model = this.store.peekAll("grouplist");
                return model;
            });
        }
    });
});
;define("vidya-frontend/routes/user/group", ["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({

        auth: Ember.inject.service(),
        convertnumber: Ember.inject.service(),
        memberID: null,
        currentID: null,
        beforeModel() {

            this.store.peekAll("channel").map(model => model.unloadRecord());
        },
        model(param) {
            console.log(param);
            // this.store.unloadAll('channel')
            this.set("currentID", param.group_id);
            var follow = param.group_id;
            var val = { follow: follow };
            return Ember.RSVP.hash({
                profileData: this.store.query("social", val).then(post => {
                    let model = this.store.peekAll("social");
                    return model;
                }),
                groupProfile: this.store.findRecord("channel", param.group_id).then(user => {
                    this.set("memberID", user.userlist);
                    let model = this.store.peekAll("channel");
                    return model;
                })
            });
        },
        setupController(controller, model) {
            controller.set("memberCount", this.get('convertnumber').format(this.get("memberID").length));
            controller.set("members", this.get("memberID"));
            controller.set("currentid", this.get("currentID"));
        }

    });
});
;define('vidya-frontend/routes/user/groupchat', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    auth: Ember.inject.service(),
    states: Ember.inject.service(),
    model() {
      var follow = this.get('auth.userId');
      this.store.unloadAll("enduser");
      var val = { following_only: follow.toString() };
      return Ember.RSVP.hash({
        groupUser: this.store.queryRecord("chatlist", val)

      });
      // return this.store.queryRecord("chatlist", val).then(() => {
      //   let model = this.store.peekAll("enduser")
      //   return model
      // })
    }
  });
});
;define("vidya-frontend/routes/user/profile-info", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({

    auth: Ember.inject.service(),
    currentID: null,

    model(param) {
      this.set("currentID", param.profile_id);
      return Ember.RSVP.hash({
        profile: this.store.queryRecord("enduser", { "id": param.profile_id }).then(user => {
          let model = this.store.peekAll("enduser");
          return model;
        })
      });
    },
    setupController(controller, model) {
      controller.set("currentid", this.get("currentID"));
    }
  });
});
;define('vidya-frontend/routes/user/profile', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({

        auth: Ember.inject.service(),
        convertnumber: Ember.inject.service(),
        states: Ember.inject.service(),
        followerID: null,
        followingID: null,
        groupID: null,
        currentID: null,
        // beforeModel() {
        //     return new Ember.RSVP.Promise(function (resolve, reject) {
        //         Ember.run.later(function () { resolve({}); }, 500);
        //     });
        //
        // },
        beforeModel() {
            if (!this.get('session.content')['isAuthenticated']) {
                this.transitionTo("login");
            }
        },
        model(param) {
            this.set("currentID", param.profile_id);
            this.set("states.profileId", param.profile_id);
            this.store.unloadAll('channel');
            this.store.unloadAll('onechannel');
            this.store.unloadAll('nowuser');
            this.store.unloadAll('similaruser');
            this.store.unloadAll('oneuser');
            this.store.unloadAll('enduser');
            this.store.unloadAll('backuser');
            var follow = param.profile_id;
            var val = { follow: follow };
            console.log(this.get("auth.walletId"));
            return Ember.RSVP.hash({
                profileData: this.store.query("social", val).then(post => {
                    let model = this.store.peekAll("social");
                    return model;
                }),
                profile: this.store.queryRecord("enduser", { "id": param.profile_id }).then(user => {
                    this.set("followerID", user.follower);
                    this.set("followingID", user.following);
                    this.set("groupID", user.group);
                    let model = this.store.peekAll("enduser");
                    return model;
                }),
                votes: this.store.findRecord("wallet", this.get("auth.walletId")).then(vote => {
                    let model = this.store.peekAll("wallet");
                    return model;
                })
            });
        },
        setupController(controller, model) {
            controller.set("followerCount", this.get('convertnumber').format(this.get("followerID").length));
            controller.set("followingCount", this.get('convertnumber').format(this.get("followingID").length));
            controller.set("groupCount", this.get('convertnumber').format(this.get("groupID").length));
            controller.set("followers", this.get("followerID"));
            controller.set("followings", this.get("followingID"));
            controller.set("groups", this.get("groupID"));
            controller.set("currentid", this.get("currentID"));
        }

    });
});
;define("vidya-frontend/routes/user/user-chat-list", ["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        auth: Ember.inject.service(),
        model() {
            var follow = this.get("auth.userId");
            var val = { following: follow.toString() };
            return this.store.queryRecord("chatlist", val);
        }
    });
});
;define('vidya-frontend/services/-gestures', ['exports', 'vidya-frontend/config/environment', 'ember-gestures/services/-gestures'], function (exports, _environment, _gestures) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const assign = Ember.assign || Ember.merge;

  let gestures = assign({}, {
    useCapture: false
  });
  gestures = assign(gestures, _environment.default.gestures);

  exports.default = _gestures.default.extend({
    useCapture: gestures.useCapture
  });
});
;define('vidya-frontend/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define('vidya-frontend/services/auth', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({
    accessToken: null,
    userId: null,
    fbuserId: null,
    username: null,
    user_url: null,
    info: {},
    phone: null,
    role: null,
    following: [],
    follower: [],
    group: [],
    walletId: null
  });
});
;define('vidya-frontend/services/connection-status', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({
    online: false,
    offline: Ember.computed.not('online'),
    auth: Ember.inject.service(),
    startWatching: function () {
      this.set('online', navigator.onLine);

      var _this = this;
      var updateStatus = function () {
        _this.set('online', navigator.onLine);
        if (_this.get('online')) {
          Ember.Logger.info('Connection status: User has gone online');
          Ember.$.ajax({
            url: reqUrl,
            data: { 'fbuserId': _this.get('auth.fbuserId'), 'phone': _this.get('auth.phone'), 'status': status },
            dataType: 'json',
            type: 'GET',
            success: function (json_data) {
              // var json_data = JSON.parse(data.user)
              console.log("settting accessToken from fetch()", json_data.user);
            }
          });
        } else {
          // updateStatus('offline')
          Ember.Logger.info('Connection status: User has gone offline');
        }
      };

      window.addEventListener('online', updateStatus);
      window.addEventListener('offline', updateStatus);
    }.on('init')

    //   updateStatus(status){
    //     Ember.$.ajax({
    //         url:  reqUrl,
    //         data: {'fbuserId': this.get('auth.fbuserId'),'phone': this.get('auth.phone'),'status':status},
    //         dataType: 'json',
    //         type: 'GET',
    //         success: function(json_data){
    //           // var json_data = JSON.parse(data.user)
    //           console.log("settting accessToken from fetch()",json_data.user)
    //         }
    //     });
    //   }
  });
});
;define('vidya-frontend/services/constants', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({

    sniffer: Ember.inject.service('sniffer'),

    webkit: Ember.computed(function () {
      return (/webkit/i.test(this.get('sniffer.vendorPrefix'))
      );
    }),

    vendorProperty(name) {
      return this.get('webkit') ? `-webkit-${name.charAt(0)}${name.substring(1)}` : name;
    },

    CSS: Ember.computed('webkit', function () {
      let webkit = this.get('webkit');
      return {
        /* Constants */
        TRANSITIONEND: `transitionend${webkit ? ' webkitTransitionEnd' : ''}`,
        ANIMATIONEND: `animationend${webkit ? ' webkitAnimationEnd' : ''}`,

        TRANSFORM: this.vendorProperty('transform'),
        TRANSFORM_ORIGIN: this.vendorProperty('transformOrigin'),
        TRANSITION: this.vendorProperty('transition'),
        TRANSITION_DURATION: this.vendorProperty('transitionDuration'),
        ANIMATION_PLAY_STATE: this.vendorProperty('animationPlayState'),
        ANIMATION_DURATION: this.vendorProperty('animationDuration'),
        ANIMATION_NAME: this.vendorProperty('animationName'),
        ANIMATION_TIMING: this.vendorProperty('animationTimingFunction'),
        ANIMATION_DIRECTION: this.vendorProperty('animationDirection')
      };
    }),

    KEYCODE: Ember.Object.create({
      ENTER: 13,
      ESCAPE: 27,
      SPACE: 32,
      LEFT_ARROW: 37,
      UP_ARROW: 38,
      RIGHT_ARROW: 39,
      DOWN_ARROW: 40,
      TAB: 9
    }),

    // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
    MEDIA: {
      'xs': '(max-width: 599px)',
      'gt-xs': '(min-width: 600px)',
      'sm': '(min-width: 600px) and (max-width: 959px)',
      'gt-sm': '(min-width: 960px)',
      'md': '(min-width: 960px) and (max-width: 1279px)',
      'gt-md': '(min-width: 1280px)',
      'lg': '(min-width: 1280px) and (max-width: 1919px)',
      'gt-lg': '(min-width: 1920px)',
      'xl': '(min-width: 1920px)',
      'print': 'print'
    },

    // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
    MEDIA_PRIORITY: ['xl', 'gt-lg', 'lg', 'gt-md', 'md', 'gt-sm', 'sm', 'gt-xs', 'xs', 'print']
  });
});
;define("vidya-frontend/services/convertnumber", ["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Service.extend({

        round(n, precision) {
            var prec = Math.pow(10, precision);
            return Math.round(n * prec) / prec;
        },

        format(n) {
            var pow = Math.pow,
                floor = Math.floor,
                abs = Math.abs,
                log = Math.log;
            var base = floor(log(abs(n)) / log(1000));
            var suffix = "kmb"[base - 1];
            return suffix ? round(n / pow(1000, base), 1) + suffix : "" + n;
        }
    });
});
;define('vidya-frontend/services/downloadfile', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Service.extend({
        DownloadFile(URL, Folder_Name, File_Name) {
            if (URL == null && Folder_Name == null && File_Name == null) {
                return;
            } else {
                this.download(URL, Folder_Name, File_Name);
            }
        },
        download(URL, Folder_Name, File_Name) {
            // Request the file system 
            var that = this;
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, fileSystemSuccess, fileSystemFail);
            function fileSystemSuccess(fileSystem) {
                var download_link = encodeURI(URL);
                console.log(URL);
                console.log(Folder_Name);
                console.log(File_Name);
                // ext = download_link.substr(download_link.lastIndexOf('.') + 1); //Get extension of URL
                var directoryEntry = fileSystem.root; // For root path of directory
                directoryEntry.getDirectory(Folder_Name, { create: true, exclusive: false }, onDirectorySuccess, onDirectoryFail); // creating folder in sdcard
                var rootdir = fileSystem.root;
                var fp = rootdir.fullPath; // Gives Fullpath of local directory
                fp = 'file:///storage/emulated/0/' + "/" + Folder_Name + "/" + File_Name + '.jpg'; // fullpath and name of the file which we want to give
                // Function call to download
                that.filetransfer(download_link, fp);
            }
            function onDirectorySuccess(parent) {
                // Directory successfuly created 
            }
            function onDirectoryFail(error) {
                // On error
                alert("Unable to create new directory: " + error.code);
            }
            function fileSystemFail(evt) {
                //Unable to access file system
                alert(evt.target.error.code);
            }
        },
        filetransfer(download_link, fp) {
            var fileTransfer = new FileTransfer();
            // Local path and File download function with URL
            console.log(download_link);
            console.log(fp);
            fileTransfer.download(download_link, fp, function (entry) {
                alert("download complete: " + entry.fullPath);
            }, function (error) {
                // Failed errors
                console.log(error);
                alert("download error source " + error.source);
            });
        }
    });
});
;define('vidya-frontend/services/ember-cordova/events', ['exports', 'ember-cordova-events/services/ember-cordova/events'], function (exports, _events) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _events.default;
    }
  });
});
;define('vidya-frontend/services/ember-cordova/keyboard', ['exports', 'ember-cordova-keyboard/services/ember-cordova/keyboard'], function (exports, _keyboard) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _keyboard.default;
    }
  });
});
;define('vidya-frontend/services/ember-cordova/splash', ['exports', 'ember-cordova-splash/services/ember-cordova/splash'], function (exports, _splash) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _splash.default;
    }
  });
});
;define('vidya-frontend/services/fullscreen', ['exports', 'ember-fullscreen/services/fullscreen'], function (exports, _fullscreen) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fullscreen.default;
    }
  });
});
;define("vidya-frontend/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (exports, _transitionMap) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _transitionMap.default;
});
;define('vidya-frontend/services/media', ['exports', 'ember-responsive/services/media'], function (exports, _media) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _media.default;
});
;define('vidya-frontend/services/messagebus', ['exports', 'vidya-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({
    store: Ember.inject.service(),
    // session: Ember.inject.service(),
    // notification: Ember.inject.service(),
    // platform: Ember.inject.service("device/platform"),
    // auth: Ember.inject.service(),
    unbind: {},
    startId: 0,
    current: [],
    stopId: 4,
    sourcepath: null,
    genId() {
      var randId = Math.floor(Math.random() * 4 + 1);
      var currentIds = this.get("current");
      if (currentIds.indexOf(randId) > -1) {
        if (currentIds.length < 4) {
          this.genId();
        } else {
          // stop the connection
          console.log("length exceeded we gotta do something about it");
        }
      } else {
        currentIds.push(randId);
        this.set("current", currentIds);
        return randId;
      }
    },
    runEvtSource(url, fn) {
      // if (this.get('session.content.isAuthenticated') === true) {
      var evtSource = new EventSource(url, {
        withCredentials: true
      });
      evtSource.addEventListener("message-new", e => {
        fn(e);
      });
      evtSource.addEventListener("message-update", e => {
        fn(e);
      });
      evtSource.addEventListener("post-new", e => {
        fn(e);
      });
      evtSource.addEventListener("post-update", e => {
        fn(e);
      });
      evtSource.addEventListener("headline-new", e => {
        fn(e);
      });
      evtSource.addEventListener("headline-update", e => {
        fn(e);
      });
      evtSource.addEventListener("headline-new", e => {
        fn(e);
      });
      evtSource.addEventListener("similarheadline-update", e => {
        fn(e);
      });
      evtSource.addEventListener("similarheadline-new", e => {
        fn(e);
      });
      evtSource.addEventListener("breaking-update", e => {
        fn(e);
      });
      evtSource.addEventListener("breaking-new", e => {
        fn(e);
      });
      evtSource.addEventListener("social-update", e => {
        fn(e);
      });
      evtSource.addEventListener("social-new", e => {
        fn(e);
      });
      evtSource.addEventListener("advertising-new", e => {
        fn(e);
      });
      evtSource.addEventListener("advertising-update", e => {
        fn(e);
      });
      evtSource.addEventListener("chat-new", e => {
        fn(e);
      });
      evtSource.addEventListener("chat-update", e => {
        fn(e);
      });

      evtSource.addEventListener("user-changes", e => {
        fn(e);
      });
      // evtSource.addEventListener("user-out", (e) => {
      //   fn(e);
      // })

      evtSource.addEventListener("system-update", e => {
        window.location.reload();
      });
      return evtSource;
      // }
    },
    subscribe(url, fn) {

      var evtSource = this.runEvtSource(url, fn);
      var evtSourceErrorHandler = event => {
        var txt;
        switch (event.target.readyState) {
          case EventSource.CONNECTING:
            txt = 'Reconnecting...';
            evtSource.onerror = evtSourceErrorHandler;
            break;
          case EventSource.CLOSED:
            txt = 'Reinitializing...';
            evtSource = this.runEvtSource(url, fn);
            evtSource.onerror = evtSourceErrorHandler;
            break;
        }
        console.log(txt);
      };
      evtSource.onerror = evtSourceErrorHandler;
      return evtSource.close.bind(evtSource);
    },
    start(path, model) {
      this.set('sourcepath', path);
      if (_environment.default.environment === 'development') {
        var host = _environment.default.localHost;
        var id = Math.floor(Math.random() * 4 + 1);
        // var host = `${ENV.proto}updates-${id}.${ENV.host}`
      } else if (_environment.default.environment === 'production') {
        // var id = Math.floor((Math.random() * 4) + 1);
        // var host = `${ENV.proto}updates-${id}.${ENV.host}`
        var host = _environment.default.remoteHost;
      }
      console.log(host);
      console.log(path);
      var subscription = this.subscribe(`${host}/${path}`, evt => {
        var data = JSON.parse(evt.data);
        var mode = evt.type;
        // console.log("notification data", data)
        // if (data.userId !== this.get("auth").userId) {
        //   switch (mode) {
        //     case "message-new":
        //       this.get("notification").notify(`${data.user} saids:`, {
        //         body: data.message,
        //         tag: mode,
        //         vibrate: [200, 100],
        //         question_id: data.question_id
        //       })
        //     if (this.get("platform.isWebView")) {
        //       window.FirebasePlugin.logEvent("select_content", {
        //         content_type: "new_message",
        //         item_id: "question"
        //       });
        //     }
        //       break;
        //     case "message-update":
        //       this.get("notification").notify(`Message edited by ${data.user}`, {
        //         body: data.message,
        //         tag: mode,
        //         question_id: data.question_id
        //       })
        //       break;
        //     case "post-new":
        //       this.get("notification").notify(`${data.user} asked`, {
        //         body: data.question,
        //         tag: mode,
        //         vibrate: [200, 100, 200, 200, 200],
        //         question_id: data.question_id
        //       })
        //       if (this.get("platform.isWebView")) {

        //       window.FirebasePlugin.logEvent("select_content", {
        //         content_type: "new_question",
        //         item_id: "question"
        //       });
        //     }
        //       break;
        //     case "post-update":
        //       this.get("notification").notify("Question updated for " + data.user, {
        //         body: data.question,
        //         tag: mode,
        //         question_id: data.question_id
        //       })
        //       break;
        //   }
        // }
        this.checkSave(model, data);
      });
      var unbind = this.get("unbind");
      unbind[path] = subscription;
      this.set("unbind", unbind);
    },
    stop(path) {
      // console.log("***STOPPING*** path", path)
      var parent = path.split("/")[0];
      var unbind = this.get("unbind");
      // console.log("***UNBIND***", unbind)
      // console.log(unbind)
      if (path.endsWith("*")) {
        Object.keys(unbind).forEach(function (key, index) {
          // console.log("key", key, "parent", parent)
          if (key.split("/")[0] === parent) {
            // console.log("checking key", key)
            if (unbind[key]) {
              unbind[key]();
            }
          }
        });
      } else {
        if (unbind[path]) {
          unbind[path]();
        }
      }
    },

    checkSave(model, incoming) {
      // var noti = this.get("notification")
      if (this.get('store').peekAll(model).isAny("isSaving", true)) {
        Ember.run.later(() => {
          this.checkSave(model, incoming);
        }, 20);
      } else {
        const payload = {};
        payload[model] = incoming;
        this.get('store').pushPayload(payload);
      }
    }

  });
});
;define('vidya-frontend/services/moment', ['exports', 'ember-moment/services/moment', 'vidya-frontend/config/environment'], function (exports, _moment, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const { get } = Ember;

  exports.default = _moment.default.extend({
    defaultFormat: get(_environment.default, 'moment.outputFormat')
  });
});
;define('vidya-frontend/services/paper-sidenav', ['exports', 'ember-paper/services/paper-sidenav'], function (exports, _paperSidenav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSidenav.default;
    }
  });
});
;define('vidya-frontend/services/paper-theme', ['exports', 'ember-paper/services/paper-theme'], function (exports, _paperTheme) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperTheme.default;
    }
  });
});
;define('vidya-frontend/services/paper-toaster', ['exports', 'ember-paper/services/paper-toaster'], function (exports, _paperToaster) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperToaster.default;
    }
  });
});
;define('vidya-frontend/services/popup', ['exports', 'torii/services/popup'], function (exports, _popup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _popup.default;
    }
  });
});
;define("vidya-frontend/services/resizer", ["exports"], function (exports) {
   "use strict";

   Object.defineProperty(exports, "__esModule", {
      value: true
   });
   exports.default = Ember.Service.extend({
      resize(image, maxW, maxH, callback) {
         var canvas = document.createElement("canvas");
         var ctx = canvas.getContext("2d");
         var cw = canvas.width;
         var ch = canvas.height;
         var resizedata;
         var img = new Image();
         img.src = image;

         img.onload = function () {
            var iw = img.width;
            var ih = img.height;
            var scale = Math.min(maxW / iw, maxH / ih);
            var iwScaled = iw * scale;
            var ihScaled = ih * scale;
            canvas.width = iwScaled;
            canvas.height = ihScaled;
            ctx.drawImage(img, 0, 0, iwScaled, ihScaled);
            resizedata = canvas.toDataURL();
            callback(resizedata);
         };
      }
   });
});
;define('vidya-frontend/services/sniffer', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /* globals FastBoot */
  let isString = function (value) {
    return typeof value === 'string';
  };

  let lowercase = function (string) {
    return isString(string) ? string.toLowerCase() : string;
  };

  let toInt = function (str) {
    return parseInt(str, 10);
  };

  exports.default = Ember.Service.extend({
    vendorPrefix: '',
    transitions: false,
    animations: false,
    _document: null,
    _window: null,

    android: Ember.computed('', function () {
      return toInt((/android (\d+)/.exec(lowercase((this.get('_window').navigator || {}).userAgent)) || [])[1]);
    }),

    init() {
      this._super(...arguments);
      if (typeof FastBoot !== 'undefined') {
        return;
      }

      let _document = document;
      let _window = window;

      this.setProperties({
        _document,
        _window
      });

      let bodyStyle = _document.body && _document.body.style;
      let vendorPrefix, match;
      let vendorRegex = /^(Moz|webkit|ms)(?=[A-Z])/;

      let transitions = false;
      let animations = false;

      if (bodyStyle) {
        for (let prop in bodyStyle) {
          match = vendorRegex.exec(prop);
          if (match) {
            vendorPrefix = match[0];
            vendorPrefix = vendorPrefix.substr(0, 1).toUpperCase() + vendorPrefix.substr(1);
            break;
          }
        }

        if (!vendorPrefix) {
          vendorPrefix = 'WebkitOpacity' in bodyStyle && 'webkit';
        }

        transitions = !!('transition' in bodyStyle || `${vendorPrefix}Transition` in bodyStyle);
        animations = !!('animation' in bodyStyle || `${vendorPrefix}Animation` in bodyStyle);

        if (this.get('android') && (!transitions || !animations)) {
          transitions = isString(bodyStyle.webkitTransition);
          animations = isString(bodyStyle.webkitAnimation);
        }
      }

      this.set('transitions', transitions);
      this.set('animations', animations);

      this.set('vendorPrefix', vendorPrefix);
    }

  });
});
;define('vidya-frontend/services/socket-io', ['exports', 'ember-websockets/services/socket-io'], function (exports, _socketIo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _socketIo.default;
    }
  });
});
;define('vidya-frontend/services/states', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Service.extend({
    interModel: [],
    localModel: [],
    privateModel: [],
    postImg: [],
    searchNews: null,
    searchUsers: null,
    post_id: null,
    channel_id: null,
    layoutChoose: false,
    searchView: false,
    checkdata: [],
    checkid: [],
    videoId: null,
    scrollID: null,
    socialScrollID: null,
    scrollCRSID: null,
    openDialog: false,
    currentRoute: null,
    profileId: null,
    cancelDisable: false,
    exitDialog: false,
    chatUser: null,
    chatUserName: null,
    friendRole: null,
    searchClear: false,
    viewPhoto: false,
    viewer: false,
    stream_token: null,
    groupchannel_id: null,
    groupChat: false,
    chat_type: null,
    groupedit: false,
    groupname: null,
    userinfo: null,
    groupuserlist: [],
    chooser: false,
    download: false

  });
});
;define('vidya-frontend/services/text-measurer', ['exports', 'ember-text-measurer/services/text-measurer'], function (exports, _textMeasurer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textMeasurer.default;
    }
  });
});
;define('vidya-frontend/services/torii-session', ['exports', 'torii/services/torii-session'], function (exports, _toriiSession) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toriiSession.default;
    }
  });
});
;define('vidya-frontend/services/torii', ['exports', 'torii/services/torii'], function (exports, _torii) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _torii.default;
    }
  });
});
;define('vidya-frontend/services/uploadimage', ['exports', 'vidya-frontend/config/environment'], function (exports, _environment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    if (_environment.default.environment === 'development') {
        var host = _environment.default.localHost;
    } else if (_environment.default.environment === 'production') {
        var host = _environment.default.remoteHost;
    }

    exports.default = Ember.Service.extend({
        resizer: Ember.inject.service(),
        states: Ember.inject.service(),
        progress: false,
        loading: 0,
        uploaded: false,
        process: [],
        dataChanges() {
            if (this.get('fileChooser') === true) {
                this.set('fileChooser', false);
            } else {
                this.set('fileChooser', true);
            }
        },
        uploadFiles(result, postImg) {

            var that = this;
            var fetchData = function () {
                return new Promise(function (resolve, reject) {
                    resolve();
                });
            };
            function appendOutput(result) {
                fetchData(result).then(function () {
                    var type = result.type;
                    var file_name = result.name;
                    console.log(file_name);
                    console.log(type);

                    that.set('progress', true);

                    var checkFile = type.split('/');
                    if (checkFile[0] === 'image') {
                        that.uploadProcess(result, checkFile[0], file_name, postImg);
                    } else {
                        that.uploadProcess(result, checkFile[0], file_name, postImg);
                    }
                });
            }
            for (var i = 0; i < result.length; i++) {
                appendOutput(result[i]);
            }
        },

        upload: function (file, type, file_name, postImg, that) {
            // this.file = file
            // this.type = type
            // this.file_name = file_name
            // this.postImg = postImg

            that.set('uploaded', false);
            console.log(file);
            var fd = new FormData();
            fd.append("file", file);
            var request = new XMLHttpRequest();
            request.responseType = 'json';
            var url = `${host}/uploads`;

            request.open("POST", url, true);
            request.upload.onprogress = function (e) {
                that.set("progress", true);
                that.set('uploaded', false);
                var percentComplete = Math.ceil(e.loaded / e.total * 100);
                that.set("loading", percentComplete);
                if (e.lengthComputable) {
                    console.log(e.loaded + " / " + e.total);
                }
            };
            request.upload.onloadstart = function (e) {
                console.log(e.total);
                if (type == 'video') {
                    console.log(e);
                }
                console.log("start");
                that.set("states.cancelDisable", false);
            };
            request.upload.onloadend = function (e) {
                that.set("progress", false);
                console.log("end");
            };
            request.onload = function (e) {
                // var request = that.get('request')

                var response = request.response;

                console.log(response);
                var imageobject = {
                    "status": 'success',
                    "file_name": response.file_name,
                    "original_name": response.original_name,
                    "web_url": response.web_url,
                    "type": type
                };

                postImg.pushObject(imageobject);
                if (that.get('uploaded') === true) {
                    that.set('uploaded', false);
                } else {
                    that.set('uploaded', true);
                }

                function* porcressComplete(response) {
                    console.log(response);
                    yield response;
                }
                porcressComplete(response);
            };
            request.send(fd);

            this.cancel = function () {
                console.log('canceled');
                request.abort();
            };
        },

        uploadProcess(file, type, file_name, postImg) {
            var proc = new this.upload(file, type, file_name, postImg, this);
            this.get('process').push(proc);
        },
        cancelUpload() {
            this.set('progress', false);
            this.set('loading', 0);
            for (var i = 0; i < this.get('process').length; i++) {
                this.get('process')[i].cancel();
            }
            // if (this.get("request")) {
            //     this.get("request").abort();
            // } 
        }
    });
});
;define('vidya-frontend/services/websockets', ['exports', 'ember-websockets/services/websockets'], function (exports, _websockets) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _websockets.default;
    }
  });
});
;define("vidya-frontend/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "XTfpfBAD", "block": "{\"symbols\":[],\"statements\":[[4,\"paper-sidenav\",null,[[\"class\",\"name\",\"position\",\"class\",\"open\",\"lockedOpen\",\"onToggle\"],[\"md-whiteframe-z2\",\"left\",\"left\",\"black-bkg\",[23,[\"leftSideBarOpen\"]],false,[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"leftSideBarOpen\"]]],null]],null]]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"side-logo\"],[9],[0,\"\\n    \"],[7,\"img\"],[11,\"src\",\"vidya.svg\"],[11,\"alt\",\"\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"\"],[9],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"border-shadow\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[4,\"paper-list\",null,[[\"class\"],[\"black-bkg\"]],{\"statements\":[[0,\"    \"],[1,[21,\"paper-divider\"],false],[0,\"\\n\"],[4,\"paper-item\",null,null,{\"statements\":[[0,\"      \"],[1,[27,\"paper-icon\",[\"assignment\"],null],false],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"Terms of Use\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"paper-item\",null,null,{\"statements\":[[0,\"      \"],[1,[27,\"paper-icon\",[\"help\"],null],false],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"Help\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"paper-item\",null,null,{\"statements\":[[0,\"      \"],[1,[27,\"paper-icon\",[\"info\"],null],false],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"Privicy Policy\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"paper-item\",null,null,{\"statements\":[[0,\"      \"],[1,[27,\"paper-icon\",[\"menu_book\"],null],false],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"User Manual\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"paper-item\",null,[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"logout\"],null]]],{\"statements\":[[0,\"      \"],[1,[27,\"paper-icon\",[\"power_settings_new\"],null],false],[0,\"\\n      \"],[7,\"p\"],[9],[0,\"Logout\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[1,[21,\"paper-divider\"],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"main\"],[11,\"class\",\"flex layout-column no-scroll\"],[11,\"tabindex\",\"-1\"],[11,\"role\",\"main\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\" \"],[9],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"flex layout-column container-main black-bkg md-whiteframe-z5\"],[11,\"tabindex\",\"-1\"],[11,\"role\",\"main\"],[9],[0,\"\\n    \"],[15,\"toolbar\",[]],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"border-shadow\"],[9],[10],[0,\"\\n    \"],[15,\"breaknews\",[]],[0,\"\\n    \"],[1,[21,\"outlet\"],false],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"border-shadow\"],[9],[10],[0,\"\\n\"],[4,\"if\",[[27,\"not-eq\",[[23,[\"currentRoute\"]],\"discuss\"],null]],null,{\"statements\":[[4,\"if\",[[27,\"not-eq\",[[23,[\"currentRoute\"]],\"V-news.create-share\"],null]],null,{\"statements\":[[4,\"if\",[[27,\"not-eq\",[[23,[\"currentRoute\"]],\"V-discuss.create-social\"],null]],null,{\"statements\":[[4,\"if\",[[27,\"not-eq\",[[23,[\"currentRoute\"]],\"V-user.chat\"],null]],null,{\"statements\":[[4,\"if\",[[27,\"not-eq\",[[23,[\"currentRoute\"]],\"V-discuss.edit-social\"],null]],null,{\"statements\":[[0,\"              \"],[15,\"bottombar\",[]],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"\"],[9],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":true}", "meta": { "moduleName": "vidya-frontend/templates/application.hbs" } });
});
;define("vidya-frontend/templates/bottombar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "TBBY9wrW", "block": "{\"symbols\":[],\"statements\":[[1,[27,\"bottom-bar-card\",null,[[\"routeToHome\",\"routeToSocial\",\"routeToEnter\",\"routeToProfile\",\"routeToSearch\",\"routeToChat\"],[[27,\"action\",[[22,0,[]],\"routeToHome\"],null],[27,\"action\",[[22,0,[]],\"routeToSocial\"],null],[27,\"action\",[[22,0,[]],\"routeToEnter\"],null],[27,\"action\",[[22,0,[]],\"routeToProfile\"],null],[27,\"action\",[[22,0,[]],\"routeToSearch\"],null],[27,\"action\",[[22,0,[]],\"routeToChat\"],null]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/bottombar.hbs" } });
});
;define("vidya-frontend/templates/breaknews", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "2ozXExZQ", "block": "{\"symbols\":[\"item\"],\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"currentRoute\"]],\"News\"],null]],null,{\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"black-bkg\"]],{\"statements\":[[4,\"paper-item\",null,[[\"class\"],[\"layout-row flex\"]],{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"head-color\"],[9],[0,\"\\n      \"],[1,[27,\"paper-icon\",[\"label_important\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-row flex\"],[9],[0,\"\\n      \"],[7,\"marquee\"],[11,\"scrolldelay\",\"100\"],[11,\"behavior\",\"scroll\"],[11,\"direction\",\"left\"],[11,\"class\",\"mm-font\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"sortedNews\"]]],null,{\"statements\":[[0,\"          \"],[7,\"span\"],[11,\"class\",\"mm-font\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"fastView\",[22,1,[\"id\"]]]],[9],[0,\"- \"],[1,[22,1,[\"title\"]],false],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/breaknews.hbs" } });
});
;define("vidya-frontend/templates/components/bottom-bar-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "0ziBSFLO", "block": "{\"symbols\":[],\"statements\":[[4,\"paper-toolbar\",null,[[\"class\"],[\"icon-color-bottom toolbar-color\"]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"layout-row flex main md-whiteframe-z1\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-center-center flex tab-font press\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"routeToHome\"]]]],[9],[0,\"\\n\"],[4,\"link-to\",[\"home\"],[[\"current-when\"],[\"home\"]],{\"statements\":[[0,\"         \"],[1,[27,\"paper-icon\",[\"local_library\"],[[\"class\"],[\"layout-align-center-start layout-row bottom-bar-icon\"]]],false],[0,\"\\n\"],[0,\"        \"],[7,\"p\"],[11,\"class\",\"layout-align-center-start layout-row mg-0\"],[9],[0,\"News\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-center-center flex tab-font social-pd\"],[11,\"id\",\"demo\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"routeToSocial\"]]]],[3,\"action\",[[22,0,[]],\"longPress\"],[[\"on\"],[\"press\"]]],[9],[0,\"\\n\\n\\n\\n        \"],[7,\"div\"],[11,\"class\",\"\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"border-wide\"],[9],[0,\"\\n\\n          \"],[10],[0,\"\\n\"],[4,\"link-to\",[\"social\"],[[\"current-when\"],[\"social\"]],{\"statements\":[[0,\"          \"],[1,[27,\"paper-icon\",[\"group\"],[[\"class\"],[\"layout-align-center-start layout-row bottom-bar-icon \"]]],false],[0,\"\\n          \"],[7,\"p\"],[11,\"class\",\"layout-align-center-start layout-row mg-0\"],[9],[0,\"Social\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n\\n\\n\\n\\n\"],[0,\"\\n\"],[0,\"  \"],[2,\" <div class=\\\"half-circle\\\"></div> \"],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"menu-toggler\"],[11,\"id\",\"js-autoplay\"],[9],[10],[0,\"\\n\"],[0,\"  \"],[7,\"ul\"],[11,\"class\",\"menu-list\"],[9],[0,\"\\n    \"],[7,\"li\"],[11,\"class\",\"menu-item\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"routeToChat\"]]]],[9],[0,\"\\n      \"],[7,\"a\"],[11,\"class\",\"long-icon\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[9],[1,[27,\"paper-icon\",[\"chat\"],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"li\"],[11,\"class\",\"menu-item\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"routeToProfile\"]]]],[9],[0,\"\\n      \"],[7,\"a\"],[11,\"class\",\"long-icon\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[9],[1,[27,\"paper-icon\",[\"home\"],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"li\"],[11,\"class\",\"menu-item\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"routeToSearch\"]]]],[9],[0,\"\\n      \"],[7,\"a\"],[11,\"class\",\"long-icon\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[9],[1,[27,\"paper-icon\",[\"search\"],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-center-center flex tab-font\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"routeToEnter\"]]]],[9],[0,\"\\n\"],[4,\"link-to\",[\"entertainment.home\"],[[\"current-when\"],[\"entertainment.home\"]],{\"statements\":[[0,\"    \"],[1,[27,\"paper-icon\",[\"live_tv\"],[[\"class\"],[\"layout-align-center-start layout-row bottom-bar-icon\"]]],false],[0,\"\\n        \"],[7,\"p\"],[11,\"class\",\"layout-align-center-start layout-row mg-0\"],[9],[0,\"Live\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[2,\" <div class=\\\"short-video\\\"> <video class=\\\"video autoplay\\\" playsinline muted loop> <source class='displa' src=\\\"http://download.blender.org/peach/trailer/trailer_400p.ogg\\\" type=\\\"video/mp4\\\"> </video> <div class=\\\"background\\\"></div> </div> \"],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/bottom-bar-card.hbs" } });
});
;define("vidya-frontend/templates/components/cover-dialog", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "nEBgo7qy", "block": "{\"symbols\":[\"item\",\"controls\"],\"statements\":[[4,\"if\",[[23,[\"showDialog\"]]],null,{\"statements\":[[4,\"paper-dialog\",null,[[\"class\",\"onClose\",\"origin\",\"fullscreen\",\"clickOutsideToClose\"],[\"flex-77 dialog-padding-zero full-black-bkg\",[27,\"action\",[[22,0,[]],\"closeDialog\",\"cancel\"],null],[23,[\"dialogOrigin\"]],true,true]],{\"statements\":[[4,\"paper-toolbar\",null,null,{\"statements\":[[4,\"paper-toolbar-tools\",null,null,{\"statements\":[[0,\"         \"],[7,\"h2\"],[9],[0,\"Choose Your Cover\"],[10],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n        \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"closeDialog\",\"cancel\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",null,[[\"icon\"],[\"close\"]]],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"paper-dialog-content\",null,null,{\"statements\":[[4,\"each\",[[23,[\"coverPhotos\"]]],null,{\"statements\":[[4,\"paper-item\",null,null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"cover-photo\"],[9],[0,\"\\n         \"],[7,\"img\"],[12,\"src\",[22,1,[\"src\"]]],[11,\"class\",\"cover-photo-size\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"md-secondary-container\"],[9],[0,\"\\n            \"],[1,[27,\"component\",[[22,2,[\"radio\"]]],[[\"groupValue\",\"value\",\"primary\",\"secondary\",\"onChange\"],[[23,[\"radioSelectedTopping\"]],[22,1,[]],true,true,[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"radioSelectedTopping\"]]],null]],null]]]],false],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[1]},null]],\"parameters\":[]},null],[4,\"paper-dialog-actions\",null,[[\"class\"],[\"layout-row black-bkg\"]],{\"statements\":[[0,\"      \"],[4,\"paper-button\",null,[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"closeDialog\",\"cancel\"],null]]],{\"statements\":[[0,\"Cancel\"]],\"parameters\":[]},null],[0,\"\\n      \"],[4,\"paper-button\",null,[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"saveCover\",\"ok\"],null]]],{\"statements\":[[0,\"OK\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/cover-dialog.hbs" } });
});
;define("vidya-frontend/templates/components/create-news-dialog", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "U6cePtwf", "block": "{\"symbols\":[\"item\"],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"flex\"]],{\"statements\":[[4,\"if\",[[23,[\"showDialog\"]]],null,{\"statements\":[[4,\"paper-dialog\",null,[[\"class\",\"onClose\",\"origin\",\"clickOutsideToClose\"],[\"flex-100 full-height\",[27,\"action\",[[22,0,[]],\"closeDialog\",\"cancel\"],null],[23,[\"dialogOrigin\"]],true]],{\"statements\":[[0,\"    \"],[7,\"form\"],[11,\"class\",\"flex\"],[9],[0,\"\\n\"],[4,\"paper-toolbar\",null,null,{\"statements\":[[4,\"paper-toolbar-tools\",null,null,{\"statements\":[[0,\"        \"],[7,\"h2\"],[9],[0,\"Create Post\"],[10],[0,\"\\n          \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"closeDialog\",\"cancel\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",null,[[\"icon\"],[\"close\"]]],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"paper-dialog-content\",null,[[\"class\"],[\"flex\"]],{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"layout-row\"],[9],[0,\"\\n          \"],[1,[27,\"paper-input\",null,[[\"class\",\"textarea\",\"block\",\"label\",\"passThru\",\"value\",\"onChange\"],[\"flex social-text\",true,true,\"Enter the text\",[27,\"hash\",null,[[\"rows\",\"maxRows\"],[20,20]]],[23,[\"post\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"post\"]]],null]],null]]]],false],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"progressUpload\"]]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"flex progress-margin\"],[9],[0,\"\\n            \"],[1,[27,\"paper-progress-linear\",null,[[\"value\"],[[23,[\"progressPercentage\"]]]]],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-center-center\"],[9],[1,[21,\"progressPercentage\"],false],[0,\" %\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"imgDisplay\"]]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"layout-row social-grid-container relative\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"imgDisplay\"]]],null,{\"statements\":[[0,\"              \"],[7,\"div\"],[11,\"class\",\"relative social-grid-item\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[22,1,[\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"                  \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[22,1,[\"web_url\"]]],null]],[11,\"class\",\"social-upload-media\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,1,[\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"                  \"],[7,\"video\"],[11,\"class\",\"social-upload-media\"],[11,\"controls\",\"\"],[9],[0,\"\\n                      \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[22,1,[\"web_url\"]]],null]],[11,\"type\",\"video/mp4\"],[9],[10],[0,\"\\n                  \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                  \"],[7,\"audio\"],[11,\"class\",\"social-upload-media\"],[11,\"controls\",\"\"],[9],[0,\"\\n                      \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[22,1,[\"web_url\"]]],null]],[11,\"type\",\"audio/mpeg\"],[9],[10],[0,\"\\n                  \"],[10],[0,\"\\n                \"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"                \"],[4,\"paper-button\",null,[[\"class\",\"iconButton\",\"onClick\"],[\"clear-button\",true,[27,\"action\",[[22,0,[]],\"deleteImg\",[22,1,[]]],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"clear\"],null],false]],\"parameters\":[]},null],[0,\"\\n              \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"paper-dialog-actions\",null,[[\"class\"],[\"layout-row\"]],{\"statements\":[[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"getPhoto\"],null]]],{\"statements\":[[0,\"        \"],[1,[27,\"paper-icon\",[\"add_to_photos\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"getCamera\"],null]]],{\"statements\":[[0,\"        \"],[1,[27,\"paper-icon\",[\"camera_alt\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"getVideo\"],null]]],{\"statements\":[[0,\"        \"],[1,[27,\"paper-icon\",[\"videocam\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \\n\"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"getVoice\"],null]]],{\"statements\":[[0,\"        \"],[1,[27,\"paper-icon\",[\"record_voice_over\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n        \"],[4,\"paper-button\",null,[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"closeDialog\"],null]]],{\"statements\":[[0,\"Cancel\"]],\"parameters\":[]},null],[0,\"\\n        \"],[4,\"paper-button\",null,[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"saveData\"],null]]],{\"statements\":[[0,\"OK\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/create-news-dialog.hbs" } });
});
;define("vidya-frontend/templates/components/doc-content", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Lu/Hm29a", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"md-padding\"]],{\"statements\":[[0,\"  \"],[7,\"div\"],[12,\"class\",[28,[\"doc-content \",[21,\"class\"]]]],[9],[0,\"\\n    \"],[14,1],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/doc-content.hbs" } });
});
;define("vidya-frontend/templates/components/entertainment/create-live-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "chFeiybd", "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/entertainment/create-live-card.hbs" } });
});
;define("vidya-frontend/templates/components/entertainment/main-live", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "FL0UuwEn", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[1,[27,\"videojs-player\",null,[[\"src\",\"poster\",\"controls\",\"width\",\"height\",\"autoplay\",\"type\"],[[23,[\"item\",\"live\"]],[23,[\"item\",\"thumbnail\"]],true,\"640\",\"250\",false,\"application/x-mpegURL\"]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/entertainment/main-live.hbs" } });
});
;define("vidya-frontend/templates/components/entertainment/main-nolive", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "YcqUD18m", "block": "{\"symbols\":[],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"layout-column flex black-bkg no-video-height\"]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-start-center black-bkg\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-row black-bkg layout-padding  \"],[9],[0,\"\\n      \"],[7,\"img\"],[11,\"src\",\"mainlogo.png\"],[11,\"alt\",\"\"],[11,\"class\",\"vidya-live-no-logo\"],[9],[10],[0,\"\\n      \"],[7,\"img\"],[11,\"src\",\"no-video.png\"],[11,\"alt\",\"\"],[11,\"class\",\"vidya-live-no-video\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-start-center \"],[9],[0,\"\\n      \"],[7,\"span\"],[9],[0,\"Vidya live is not broadcasting right now\"],[10],[0,\"\\n      \"],[7,\"span\"],[9],[0,\"Please stay tune\"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/entertainment/main-nolive.hbs" } });
});
;define("vidya-frontend/templates/components/entertainment/no-live-poster", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "U1WE4lGM", "block": "{\"symbols\":[],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"layout-column flex black-bkg no-video-height\"]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-start-center black-bkg\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-column black-bkg  \"],[9],[0,\"\\n      \"],[7,\"img\"],[11,\"src\",\"no-video.png\"],[11,\"alt\",\"\"],[11,\"class\",\"novideo\"],[9],[10],[0,\"\\n\\n    \"],[10],[0,\"\\n    \"],[7,\"span\"],[9],[0,\"Live Unavaliable\"],[10],[0,\"\\n    \"],[7,\"span\"],[9],[0,\"No steaming current now!\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/entertainment/no-live-poster.hbs" } });
});
;define("vidya-frontend/templates/components/entertainment/user-live", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "KkAXC962", "block": "{\"symbols\":[],\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"enter-grid-category cat-line-hight relative\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"routeLiveDetail\"]],[23,[\"item\",\"id\"]]]],[9],[0,\"\\n    \"],[2,\" <div class=\\\"enter-time-position\\\">\\n      {{moment-from-now item.start_time}}\\n    </div> \"],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-row absolute enter-name-position\"],[9],[0,\"\\n      \"],[7,\"img\"],[11,\"class\",\"enter-user-img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"user\",\"user_url\"]],\"profile\"],null]],[11,\"alt\",\"\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[9],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-column enter-name-fix\"],[9],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"enter-user-name\"],[9],[1,[23,[\"item\",\"user\",\"username\"]],false],[10],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"font-beauty\"],[9],[1,[27,\"moment-from-now\",[[23,[\"item\",\"start_time\"]]],null],false],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n    \"],[7,\"img\"],[11,\"class\",\"live-video\"],[12,\"src\",[23,[\"item\",\"thumbnail\"]]],[11,\"alt\",\"\"],[9],[10],[0,\"\\n   \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"upload-relative live-footer-bkg\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-space-between-start\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"pl-15\"],[9],[0,\"\\n       \"],[1,[27,\"paper-icon\",[\"remove_red_eye\"],null],false],[7,\"span\"],[9],[1,[23,[\"item\",\"viewer_count\"]],false],[10],[0,\"\\n     \"],[10],[0,\"\\n     \"],[7,\"div\"],[11,\"class\",\"pr-5\"],[9],[0,\"\\n       \"],[1,[27,\"paper-icon\",[\"live_tv\"],null],false],[0,\"\\n     \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[2,\" <span class=\\\" flex layout-row layout-align-start-start\\\">Lwin moe</span> \"],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/entertainment/user-live.hbs" } });
});
;define("vidya-frontend/templates/components/entertainment/user-replay", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "QaFctg7N", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"enter-grid-category cat-line-hight relative\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"routeLiveDetail\"]],[23,[\"item\",\"id\"]]]],[9],[0,\"\\n  \"],[2,\" <div class=\\\"enter-time-position\\\">\\n    {{moment-from-now item.start_time}}\\n  </div> \"],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"layout-row absolute enter-name-position\"],[9],[0,\"\\n    \"],[7,\"img\"],[11,\"class\",\"enter-user-img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"user\",\"user_url\"]],\"profile\"],null]],[11,\"alt\",\"\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[9],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-column enter-name-fix\"],[9],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"enter-user-name\"],[9],[1,[23,[\"item\",\"user\",\"username\"]],false],[10],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"font-beauty\"],[9],[1,[27,\"moment-from-now\",[[23,[\"item\",\"start_time\"]]],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[2,\" <div class=\\\"absolute enter-view-position\\\">\\n    {{paper-icon \\\"remove_red_eye\\\"}}\\n  </div> \"],[0,\"\\n  \"],[7,\"img\"],[11,\"class\",\"live-video\"],[12,\"src\",[23,[\"item\",\"thumbnail\"]]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"alt\",\"\"],[9],[10],[0,\"\\n \"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"upload-relative\"],[9],[0,\"\\n  \"],[7,\"span\"],[11,\"class\",\"upload-txt flex layout-row layout-align-start-start\"],[9],[0,\"lwin moe aung\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/entertainment/user-replay.hbs" } });
});
;define("vidya-frontend/templates/components/entertainment/user-upload", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "OV8+V6yJ", "block": "{\"symbols\":[],\"statements\":[[2,\" <div class=\\\"grid-category cat-line-hight\\\" {{action routeUploadDetail item.id}}>\\n  <div>{{uploadname item.full_name}}</div>\\n  <img class=\\\"live-video\\\"  src={{item.pilboxthumbnail}} onerror=\\\"this.src='no_image.jpg'\\\" alt=\\\"\\\">\\n\\n</div> \"],[0,\"\\n\\n\"],[2,\" src={{item.thumbnail}} \"],[0,\"\\n\\n\\n\"],[7,\"div\"],[11,\"class\",\"enter-grid-category cat-line-hight relative\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"routeUploadDetail\"]],[23,[\"item\",\"id\"]]]],[9],[0,\"\\n  \"],[2,\" <div class=\\\"enter-time-position\\\">\\n    {{moment-from-now item.start_time}}\\n  </div> \"],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"layout-row absolute enter-name-position\"],[9],[0,\"\\n\"],[0,\"    \"],[7,\"div\"],[11,\"class\",\"layout-column enter-name-fix\"],[9],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"enter-user-name\"],[9],[1,[23,[\"item\",\"user\",\"username\"]],false],[10],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"font-beauty\"],[9],[1,[27,\"moment-from-now\",[[23,[\"item\",\"time_stamp\"]]],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[2,\" <div class=\\\"absolute enter-view-position\\\">\\n    {{paper-icon \\\"remove_red_eye\\\"}}\\n  </div> \"],[0,\"\\n  \"],[7,\"img\"],[11,\"class\",\"live-video\"],[12,\"src\",[23,[\"item\",\"pilboxthumbnail\"]]],[11,\"alt\",\"\"],[9],[10],[0,\"\\n \"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"upload-relative\"],[9],[0,\"\\n  \"],[7,\"span\"],[11,\"class\",\"upload-txt flex layout-row layout-align-start-start\"],[9],[1,[27,\"uploadname\",[[23,[\"item\",\"full_name\"]]],null],false],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/entertainment/user-upload.hbs" } });
});
;define("vidya-frontend/templates/components/entertainment/user-video-clip", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "PTjOQD8S", "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/entertainment/user-video-clip.hbs" } });
});
;define("vidya-frontend/templates/components/file-picker", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "9Aj/VyJR", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[23,[\"dropzone\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"file-picker__dropzone\"],[9],[0,\"\\n    \"],[14,1],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[14,1],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[4,\"if\",[[23,[\"preview\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"file-picker__preview\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,[\"progress\"]]],null,{\"statements\":[[4,\"if\",[[23,[\"showProgress\"]]],null,{\"statements\":[[4,\"if\",[[23,[\"isProgressSupported\"]]],null,{\"statements\":[[0,\"      \"],[7,\"progress\"],[12,\"value\",[21,\"progressValue\"]],[11,\"max\",\"100\"],[11,\"class\",\"file-picker__progress\"],[9],[1,[21,\"progress\"],false],[0,\" %\"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"file-picker__progress\"],[9],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"file-picker__progress__value\"],[12,\"style\",[21,\"progressStyle\"]],[9],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[1,[27,\"input\",null,[[\"type\",\"value\",\"accept\",\"multiple\",\"class\"],[\"file\",[23,[\"file\"]],[23,[\"accept\"]],[23,[\"multiple\"]],\"file-picker__input\"]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/file-picker.hbs" } });
});
;define("vidya-frontend/templates/components/fullscreen-img", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "fQFRpbhy", "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/fullscreen-img.hbs" } });
});
;define("vidya-frontend/templates/components/group-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3gwQkRxV", "block": "{\"symbols\":[],\"statements\":[[2,\" <div class=\\\"social-card\\\">\\n  <div class=\\\"members\\\">\\n    <div {{action goToGroups item.id}}>\\n{{#if (eq item.channelImg.web_url '/newsicon.png')}}\\n        <img src={{convert-url item.channelImg.web_url}} alt='profile' class=\\\"group-photo\\\">\\n      {{else}}\\n        <img src={{convert-url item.channelImg}} alt='profile' class=\\\"group-photo\\\">\\n      {{/if}}    </div>\\n    <p class=\\\"members__count\\\">{{item.userCount}} members</p>\\n  </div>\\n  <p class=\\\"card__title\\\">{{item.channelname}}</p>\\n  <p class=\\\"card__count\\\">{{item.userCount}} members</p>\\n  <button class={{change-button following item.id \\\"group\\\"}} id={{item.id}} {{action followHandler item.id 'news'}}>\\n    {{change-button following item.id \\\"text\\\"}}\\n  </button>\\n</div> \"],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"grid-category cat-line-hight\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToGroups\"]],[23,[\"item\",\"id\"]]]],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"channelImg\",\"web_url\"]],\"/newsicon.png\"],null]],null,{\"statements\":[[0,\"    \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"channelImg\",\"web_url\"]]],null]],[11,\"alt\",\"profile\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"group-cat-icon\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"channelImg\"]]],null]],[11,\"alt\",\"profile\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"group-cat-icon\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[7,\"p\"],[11,\"class\",\"\"],[9],[1,[23,[\"item\",\"channelname\"]],false],[10],[0,\"\\n  \"],[7,\"p\"],[11,\"class\",\"card__count\"],[9],[1,[23,[\"item\",\"userCount\"]],false],[0,\"members\"],[10],[0,\"\\n \"],[10],[0,\"\\n \"],[7,\"div\"],[11,\"class\",\"join-btn\"],[9],[0,\"\\n   \"],[7,\"button\"],[12,\"class\",[27,\"change-button\",[[23,[\"following\"]],[23,[\"item\",\"id\"]],\"group\"],null]],[12,\"id\",[23,[\"item\",\"id\"]]],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"followHandler\"]],[23,[\"item\",\"id\"]],\"news\"]],[9],[0,\"\\n     \"],[1,[27,\"change-button\",[[23,[\"following\"]],[23,[\"item\",\"id\"]],\"text\"],null],false],[0,\"\\n   \"],[10],[0,\"\\n \"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/group-card.hbs" } });
});
;define("vidya-frontend/templates/components/news/category-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4iYhMbOk", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"grid-category cat-line-hight\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToCatSearch\"]],[23,[\"item\",\"categoryname\"]]]],[9],[0,\"\\n\"],[4,\"if\",[[27,\"null-image\",[[23,[\"item\",\"postImg\"]]],null]],null,{\"statements\":[[0,\"      \"],[7,\"img\"],[11,\"class\",\"cat-icon\"],[11,\"src\",\"/icon.png\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[7,\"img\"],[11,\"class\",\"cat-icon\"],[12,\"src\",[23,[\"item\",\"icon\",\"web_url\"]]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"alt\",\"\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[7,\"p\"],[9],[1,[23,[\"item\",\"categoryname\"]],false],[10],[0,\"\\n \"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/news/category-card.hbs" } });
});
;define("vidya-frontend/templates/components/news/crs-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "i6WyUJAV", "block": "{\"symbols\":[\"card\"],\"statements\":[[4,\"if\",[[23,[\"item\",\"checkCrs\"]]],null,{\"statements\":[[4,\"paper-card\",null,[[\"class\"],[\"layout-margin flex crs-card\"]],{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"layout-row\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"routeToDetailNew\"]],[23,[\"item\",\"id\"]]]],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-space-around-stretch flex\"],[9],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"crs-post-title\"],[9],[1,[23,[\"item\",\"title\"]],false],[10],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"crs-post-time\"],[9],[1,[27,\"moment-from-now\",[[23,[\"item\",\"stamp\"]]],null],false],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-column\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"postImage\",\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"img\"],[12,\"src\",[23,[\"item\",\"postImage\",\"web_url\"]]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"news-crs-photo\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"layout-column news-relative\"],[9],[0,\"\\n            \"],[7,\"video\"],[12,\"id\",[23,[\"item\",\"id\"]]],[11,\"class\",\"news-crs-video\"],[12,\"poster\",[27,\"convert-url\",[[23,[\"item\",\"postImage\"]],\"\"],null]],[11,\"controlsList\",\"nodownload\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"fullScreen\",[23,[\"item\",\"id\"]]]],[9],[0,\"\\n              \"],[7,\"source\"],[12,\"src\",[27,\"convert-img\",[[23,[\"item\",\"postImage\"]]],null]],[11,\"type\",\"video/mp4\"],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\" video-playbtn-headline \"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"\"],[9],[0,\"\\n                \"],[1,[27,\"paper-icon\",[\"play_circle_outline\"],[[\"size\"],[40]]],false],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/news/crs-list.hbs" } });
});
;define("vidya-frontend/templates/components/news/crsgroup-dialog", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "bihM1ecq", "block": "{\"symbols\":[\"item\"],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"flex\"]],{\"statements\":[[4,\"if\",[[23,[\"showDialog\"]]],null,{\"statements\":[[4,\"paper-dialog\",null,[[\"class\",\"onClose\",\"origin\",\"clickOutsideToClose\"],[\"flex-100 full-height\",[27,\"action\",[[22,0,[]],\"closeDialog\",\"cancel\"],null],[23,[\"dialogOrigin\"]],true]],{\"statements\":[[0,\"    \"],[7,\"form\"],[11,\"class\",\"flex\"],[9],[0,\"\\n\"],[4,\"paper-toolbar\",null,null,{\"statements\":[[4,\"paper-toolbar-tools\",null,null,{\"statements\":[[0,\"        \"],[7,\"h2\"],[9],[0,\"Cross Reference System\"],[10],[0,\"\\n          \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"closeDialog\",\"cancel\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",null,[[\"icon\"],[\"close\"]]],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"paper-dialog-content\",null,[[\"class\"],[\"flex\"]],{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"\"],[9],[0,\"\\n          \"],[1,[27,\"paper-input\",null,[[\"textarea\",\"block\",\"label\",\"passThru\",\"value\",\"onChange\"],[true,true,\"What's your opnion\",[27,\"hash\",null,[[\"rows\"],[5]]],[23,[\"title\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"title\"]]],null]],null]]]],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"crs-count\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"dataModel\"]]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"layout-column flex\"],[9],[0,\"\\n              \"],[7,\"span\"],[11,\"class\",\"crs-dialog-content\"],[9],[1,[22,1,[\"title\"]],false],[10],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"paper-dialog-actions\",null,[[\"class\"],[\"layout-row\"]],{\"statements\":[[0,\"        \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n        \"],[4,\"paper-button\",null,[[\"primary\",\"raised\",\"onClick\"],[true,true,[27,\"action\",[[22,0,[]],\"closeDialog\",\"cancel\"],null]]],{\"statements\":[[0,\"Cancel\"]],\"parameters\":[]},null],[0,\"\\n        \"],[4,\"paper-button\",null,[[\"primary\",\"raised\",\"onClick\"],[true,true,[27,\"action\",[[22,0,[]],\"createGroup\"],null]]],{\"statements\":[[0,\"Create CRS\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/news/crsgroup-dialog.hbs" } });
});
;define("vidya-frontend/templates/components/news/detail-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "RuQEdHQc", "block": "{\"symbols\":[\"card\",\"data\",\"header\",\"text\"],\"statements\":[[4,\"paper-card\",null,[[\"class\"],[\"black-inner flex\"]],{\"statements\":[[4,\"component\",[[22,1,[\"header\"]]],null,{\"statements\":[[4,\"component\",[[22,3,[\"text\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-column flex text-width\"],[9],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"mm-font detail-header\"],[9],[1,[23,[\"item\",\"title\"]],false],[10],[0,\"\\n        \"],[4,\"component\",[[22,4,[\"subhead\"]]],[[\"class\"],[\"mm-font\"]],{\"statements\":[[1,[23,[\"item\",\"category\",\"categoryname\"]],false],[0,\" | \"],[1,[27,\"moment-from-now\",[[23,[\"item\",\"stamp\"]]],null],false]],\"parameters\":[]},null],[0,\"\\n        \"],[4,\"component\",[[22,4,[\"subhead\"]]],[[\"class\"],[\"mm-font\"]],{\"statements\":[[1,[23,[\"item\",\"section\",\"sectionname\"]],false],[0,\" News By \"],[1,[23,[\"item\",\"sourceNews\"]],false]],\"parameters\":[]},null],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[4]},null]],\"parameters\":[3]},null],[4,\"swiper-container\",null,[[\"class\",\"pagination\",\"updateFor\"],[\"detail-img\",true,[23,[\"interModel\"]]]],{\"statements\":[[4,\"each\",[[23,[\"item\",\"allFile\"]]],null,{\"statements\":[[4,\"swiper-slide\",null,[[\"id\",\"class\"],[[22,2,[\"file_name\"]],\"myslide myslide-1\"]],{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"photo\"],[9],[0,\"\\n            \"],[1,[27,\"component\",[[22,1,[\"image\"]]],[[\"src\",\"alt\",\"class\",\"onerror\"],[[27,\"convert-url\",[[22,2,[\"web_url\"]],\"detail\"],null],\"Washed Out\",\"news-latest-img\",\"this.src='no_image.jpg'\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"movie\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"fullScreen\",[22,2,[\"file_name\"]],[22,2,[\"web_url\"]]]],[9],[0,\"\\n              \"],[1,[27,\"component\",[[22,1,[\"image\"]]],[[\"src\",\"alt\",\"class\",\"onerror\"],[[27,\"convert-url\",[[22,2,[\"poster\"]],\"detail\"],null],\"Washed Out\",\"news-latest-img\",\"this.src='no_image.jpg'\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"layout-column news-relative \"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"video-playbtn-headline-crs\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"fullScreen\",[22,2,[\"file_name\"]],[22,2,[\"web_url\"]]]],[9],[0,\"\\n                \"],[1,[27,\"paper-icon\",[\"play_circle_outline\"],[[\"size\"],[40]]],false],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]},null]],\"parameters\":[2]},null]],\"parameters\":[]},null],[4,\"component\",[[22,1,[\"content\"]]],null,{\"statements\":[[0,\"    \"],[7,\"p\"],[11,\"class\",\"mm-font \"],[9],[0,\"\\n      \"],[1,[27,\"markdown-to-html\",[[23,[\"item\",\"detail\"]]],[[\"class\"],[\"news-detail-size-fix\"]]],false],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/news/detail-card.hbs" } });
});
;define("vidya-frontend/templates/components/news/headline-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "2H2E/+AA", "block": "{\"symbols\":[\"item\"],\"statements\":[[7,\"div\"],[11,\"class\",\"\"],[9],[0,\"\\n\"],[4,\"swiper-container\",null,[[\"updateFor\",\"pagination\",\"cubeEffect\",\"currentSlide\",\"effect\"],[[23,[\"sortedHeadModel\"]],true,[23,[\"cubeEffect\"]],[23,[\"currentSlide\"]],[23,[\"effect\"]]]],{\"statements\":[[4,\"each\",[[23,[\"sortedHeadModel\"]]],null,{\"statements\":[[4,\"swiper-slide\",null,[[\"class\",\"width\",\"height\",\"pagination\"],[\"slide-size\",[23,[\"100px\"]],[23,[\"100px\"]],true]],{\"statements\":[[4,\"if\",[[22,1,[\"header\",\"headername\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"flex\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToSimilarNews\"]],[22,1,[\"id\"]]]],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"img-relative\"],[9],[0,\"\\n            \"],[7,\"img\"],[12,\"src\",[22,1,[\"postImage\",\"web_url\"]]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"alt\",\"\"],[11,\"class\",\"head-img\"],[9],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"img-absolute headline-text-bkg layout-column\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"head-text-time\"],[9],[0,\"\\n                \"],[7,\"span\"],[11,\"class\",\"text-limit-head \"],[9],[0,\"\\n                  \"],[1,[22,1,[\"header\",\"headername\"]],false],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"span\"],[11,\"class\",\"head-time\"],[9],[1,[27,\"moment-format\",[[22,1,[\"stamp\"]],\"DD/MM/YYYY\"],null],false],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"flex\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"routeToLink\"]],[22,1,[\"ads_link\"]]]],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"img-relative\"],[9],[0,\"\\n            \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[22,1,[\"upload\"]],\"detail\"],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"alt\",\"\"],[11,\"class\",\"head-img\"],[9],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"img-absolute headline-text-bkg layout-column\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"head-text-time\"],[9],[0,\"\\n                \"],[7,\"span\"],[11,\"class\",\"text-limit-head \"],[9],[0,\"\\n                  \"],[1,[22,1,[\"company_name\"]],false],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"span\"],[11,\"class\",\"head-time\"],[9],[1,[27,\"moment-format\",[[22,1,[\"stamp\"]],\"DD/MM/YYYY\"],null],false],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/news/headline-card.hbs" } });
});
;define("vidya-frontend/templates/components/news/headline-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "g1q5uCWK", "block": "{\"symbols\":[\"item\"],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"flex\"]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"\"],[9],[0,\"\\n\"],[4,\"paper-item\",null,[[\"class\"],[\"md-line\"]],{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"md-list-item-text\"],[9],[0,\"\\n        \"],[7,\"h3\"],[9],[0,\"Headlines List\"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"news-latest-mg\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"sortedHeadModel\"]]],null,{\"statements\":[[4,\"swiper-slide\",null,[[\"class\",\"width\",\"height\",\"pagination\"],[\"slide-size\",[23,[\"100px\"]],[23,[\"100px\"]],true]],{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"flex head-margin\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToSimilarNews\"]],[22,1,[\"header\",\"headername\"]]]],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"img-relative\"],[9],[0,\"\\n            \"],[7,\"img\"],[12,\"src\",[22,1,[\"postImage\",\"web_url\"]]],[11,\"alt\",\"\"],[11,\"class\",\"head-img\"],[9],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"img-absolute headline-text-bkg layout-column\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"head-text-time\"],[9],[0,\"\\n                \"],[7,\"span\"],[11,\"class\",\"text-limit-head \"],[9],[0,\"\\n                  \"],[1,[22,1,[\"header\",\"headername\"]],false],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"span\"],[11,\"class\",\"head-time\"],[9],[1,[27,\"moment-format\",[[22,1,[\"stamp\"]],\"DD/MM/YYYY\"],null],false],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/news/headline-list.hbs" } });
});
;define("vidya-frontend/templates/components/news/inter-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NEMX54JW", "block": "{\"symbols\":[\"data\",\"item\"],\"statements\":[[4,\"paper-card\",null,[[\"class\"],[\"black-frame\"]],{\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"\"]],{\"statements\":[[4,\"paper-item\",null,[[\"class\"],[\"layout-row flex black-inner\"]],{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"head-color\"],[9],[0,\"\\n      \"],[1,[27,\"paper-icon\",[\"language\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-start-start\"],[9],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"inter-txt head-color\"],[9],[0,\"International News\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"swiper-container\",null,[[\"class\",\"updateFor\"],[\"black-bkg\",[23,[\"interModel\"]]]],{\"statements\":[[4,\"each\",[[23,[\"interModel\"]]],null,{\"statements\":[[4,\"swiper-slide\",null,[[\"class\"],[\"myslide myslide-1\"]],{\"statements\":[[4,\"each\",[[22,1,[]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"news/inter-list-card\",null,[[\"item\",\"store\",\"routeToDetailNew\",\"checkCRS\"],[[22,2,[]],[23,[\"store\"]],[23,[\"routeToDetailNew\"]],[23,[\"checkCRS\"]]]]],false],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/news/inter-card.hbs" } });
});
;define("vidya-frontend/templates/components/news/inter-list-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hfr9zKVx", "block": "{\"symbols\":[\"card\"],\"statements\":[[0,\"\\n\\n\"],[4,\"paper-card\",null,[[\"class\"],[\"layout-margin none-shadow mb-5\"]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-start-center mg-b-0\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"flex\"],[9],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"source-head-mb\"],[9],[1,[23,[\"item\",\"sourceNews\"]],false],[0,\" | \"],[1,[23,[\"item\",\"category\",\"categoryname\"]],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\" select-box-position\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"checkCRS\"]],[23,[\"item\",\"id\"]],[23,[\"checkPrivate\"]],[23,[\"item\",\"title\"]],[23,[\"item\"]]]],[9],[0,\"\\n\"],[4,\"paper-checkbox\",null,[[\"value\",\"primary\",\"onChange\"],[[23,[\"checkPrivate\"]],true,[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"checkPrivate\"]]],null]],null]]],{\"statements\":[],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"layout-row mg-t-0\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-space-around-stretch flex\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"routeToDetailNew\"]],[23,[\"item\",\"id\"]]]],[9],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"crs-post-title\"],[9],[1,[23,[\"item\",\"title\"]],false],[10],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"crs-post-time\"],[9],[1,[27,\"moment-from-now\",[[27,\"convert-time\",[[23,[\"item\",\"createDate\"]]],null]],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[27,\"convert-image\",[[23,[\"item\",\"postImg\"]]],null],\"image\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-column\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"routeToDetailNew\"]],[23,[\"item\",\"id\"]]]],[9],[0,\"\\n        \"],[7,\"img\"],[12,\"src\",[27,\"convert-img\",[[23,[\"item\",\"postImg\"]]],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"news-crs-photo\"],[9],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[27,\"eq\",[[27,\"convert-image\",[[23,[\"item\",\"postImg\"]]],null],\"video\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-column news-relative\"],[9],[0,\"\\n        \"],[7,\"video\"],[12,\"id\",[23,[\"item\",\"id\"]]],[11,\"class\",\"news-crs-video\"],[12,\"poster\",[27,\"convert-img\",[[23,[\"item\",\"postImg\"]]],null]],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"fullScreen\",[23,[\"item\",\"id\"]]]],[9],[0,\"\\n          \"],[7,\"source\"],[12,\"src\",[27,\"convert-img\",[[23,[\"item\",\"postImg\"]]],null]],[11,\"type\",\"video/mp4\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\" video-playbtn-headline \"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"fullScreen\",[23,[\"item\",\"id\"]]]],[9],[0,\"\\n            \"],[1,[27,\"paper-icon\",[\"play_circle_outline\"],[[\"size\"],[40]]],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/news/inter-list-card.hbs" } });
});
;define("vidya-frontend/templates/components/news/local-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "MxyGRL8A", "block": "{\"symbols\":[\"data\",\"item\"],\"statements\":[[4,\"paper-card\",null,[[\"class\"],[\"black-frame\"]],{\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"\"]],{\"statements\":[[4,\"paper-item\",null,[[\"class\"],[\"layout-row flex black-inner\"]],{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"head-color\"],[9],[0,\"\\n        \"],[1,[27,\"paper-icon\",[\"language\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-start-start\"],[9],[0,\"\\n        \"],[7,\"p\"],[11,\"class\",\"inter-txt head-color\"],[9],[0,\"Local News\"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"swiper-container\",null,[[\"class\",\"updateFor\"],[\"black-bkg\",[23,[\"localModel\"]]]],{\"statements\":[[4,\"each\",[[23,[\"localModel\"]]],null,{\"statements\":[[4,\"swiper-slide\",null,[[\"class\"],[\"myslide myslide-1\"]],{\"statements\":[[4,\"each\",[[22,1,[]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"news/local-list-card\",null,[[\"item\",\"store\",\"routeToDetailNew\",\"checkCRS\"],[[22,2,[]],[23,[\"store\"]],[23,[\"routeToDetailNew\"]],[23,[\"checkCRS\"]]]]],false],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/news/local-card.hbs" } });
});
;define("vidya-frontend/templates/components/news/local-list-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6EqGY/Yq", "block": "{\"symbols\":[\"card\"],\"statements\":[[4,\"paper-card\",null,[[\"class\"],[\"layout-margin none-shadow mb-5\"]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-start-center mg-b-0\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"flex\"],[9],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"source-head-mb\"],[9],[1,[23,[\"item\",\"sourceNews\"]],false],[0,\" | \"],[1,[23,[\"item\",\"category\",\"categoryname\"]],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\" select-box-position\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"checkCRS\"]],[23,[\"item\",\"id\"]],[23,[\"checkPrivate\"]],[23,[\"item\",\"title\"]],[23,[\"item\"]]]],[9],[0,\"\\n\"],[4,\"paper-checkbox\",null,[[\"value\",\"primary\",\"onChange\"],[[23,[\"checkPrivate\"]],true,[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"checkPrivate\"]]],null]],null]]],{\"statements\":[],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"layout-row mg-t-0\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-space-around-stretch flex\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"routeToDetailNew\"]],[23,[\"item\",\"id\"]]]],[9],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"crs-post-title\"],[9],[1,[23,[\"item\",\"title\"]],false],[10],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"crs-post-time\"],[9],[1,[27,\"moment-from-now\",[[27,\"convert-time\",[[23,[\"item\",\"createDate\"]]],null]],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[27,\"convert-image\",[[23,[\"item\",\"postImg\"]]],null],\"image\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-column\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"routeToDetailNew\"]],[23,[\"item\",\"id\"]]]],[9],[0,\"\\n        \"],[7,\"img\"],[12,\"src\",[27,\"convert-img\",[[23,[\"item\",\"postImg\"]]],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"news-crs-photo\"],[9],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[27,\"eq\",[[27,\"convert-image\",[[23,[\"item\",\"postImg\"]]],null],\"video\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-column news-relative\"],[9],[0,\"\\n        \"],[7,\"video\"],[12,\"id\",[23,[\"item\",\"id\"]]],[11,\"class\",\"news-crs-video\"],[12,\"poster\",[27,\"convert-img\",[[23,[\"item\",\"postImg\"]]],null]],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"fullScreen\",[23,[\"item\",\"id\"]]]],[9],[0,\"\\n          \"],[7,\"source\"],[12,\"src\",[27,\"convert-img\",[[23,[\"item\",\"postImg\"]]],null]],[11,\"type\",\"video/mp4\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\" video-playbtn-headline \"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"fullScreen\",[23,[\"item\",\"id\"]]]],[9],[0,\"\\n            \"],[1,[27,\"paper-icon\",[\"play_circle_outline\"],[[\"size\"],[40]]],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/news/local-list-card.hbs" } });
});
;define("vidya-frontend/templates/components/news/news-list-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "9clncIIr", "block": "{\"symbols\":[\"card\",\"header\",\"text\"],\"statements\":[[4,\"paper-card\",null,[[\"class\"],[\"card-pd-mg\"]],{\"statements\":[[0,\"  \"],[1,[21,\"paper-divider\"],false],[0,\"\\n\"],[4,\"component\",[[22,1,[\"header\"]]],[[\"class\"],[\"card-pd\"]],{\"statements\":[[4,\"component\",[[22,2,[\"text\"]]],[[\"class\"],[\"layout-row\"]],{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-column flex lwin\"],[9],[0,\"\\n        \"],[7,\"h4\"],[11,\"class\",\"source-head-mb\"],[9],[1,[23,[\"item\",\"sourceNews\"]],false],[0,\"\\n          |\\n          \"],[1,[23,[\"item\",\"category\",\"categoryname\"]],false],[10],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"time-head\"],[9],[1,[27,\"moment-from-now\",[[23,[\"item\",\"createDate\"]]],null],false],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-end-center\"],[9],[0,\"\\n        \"],[4,\"paper-button\",null,[[\"iconButton\"],[true]],{\"statements\":[[1,[27,\"paper-icon\",[\"bookmark_border\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[4,\"paper-button\",null,[[\"iconButton\"],[true]],{\"statements\":[[1,[27,\"paper-icon\",[\"share\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[3]},null]],\"parameters\":[2]},null],[0,\"  \"],[7,\"div\"],[11,\"class\",\"\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"routeToDetailNew\"]],[23,[\"item\",\"id\"]]]],[9],[0,\"\\n\"],[4,\"component\",[[22,1,[\"content\"]]],[[\"class\"],[\"layout-row card-pd \"]],{\"statements\":[[0,\"      \"],[7,\"p\"],[11,\"class\",\"text-limit flex big-start\"],[9],[0,\"\\n        \"],[1,[27,\"markdown-to-html\",[[23,[\"item\",\"summary\"]]],[[\"class\"],[\"lwin\"]]],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[1,[27,\"component\",[[22,1,[\"image\"]]],[[\"src\",\"alt\",\"class\",\"title\"],[[27,\"convert-url\",[[23,[\"item\",\"postImage\",\"web_url\"]]],null],\"Washed Out\",\"news-photo\",\"Washed Out\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n  \"],[1,[27,\"paper-divider\",null,[[\"insert\"],[true]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/news/news-list-card.hbs" } });
});
;define("vidya-frontend/templates/components/news/private-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "yXZQgKoY", "block": "{\"symbols\":[\"data\",\"item\"],\"statements\":[[4,\"paper-card\",null,[[\"class\"],[[23,[\"´black-frame´\"]]]],{\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"\"]],{\"statements\":[[4,\"paper-item\",null,[[\"class\"],[\"layout-row flex black-inner\"]],{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"head-color\"],[9],[0,\"\\n        \"],[1,[27,\"paper-icon\",[\"language\"],null],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-start-start\"],[9],[0,\"\\n        \"],[7,\"p\"],[11,\"class\",\"inter-txt head-color\"],[9],[0,\"Private News\"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"swiper-container\",null,[[\"class\",\"updateFor\"],[\"black-bkg\",[23,[\"privateModel\"]]]],{\"statements\":[[4,\"each\",[[23,[\"privateModel\"]]],null,{\"statements\":[[4,\"swiper-slide\",null,[[\"class\"],[\"myslide myslide-1\"]],{\"statements\":[[4,\"each\",[[22,1,[]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"news/private-list-card\",null,[[\"item\",\"store\",\"routeToDetailNew\",\"checkCRS\"],[[22,2,[]],[23,[\"store\"]],[23,[\"routeToDetailNew\"]],[23,[\"checkCRS\"]]]]],false],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/news/private-card.hbs" } });
});
;define("vidya-frontend/templates/components/news/private-list-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "OYfKiXXT", "block": "{\"symbols\":[\"card\"],\"statements\":[[4,\"paper-card\",null,[[\"class\"],[\"layout-margin none-shadow mb-5\"]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-start-center mg-b-0\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"flex\"],[9],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"source-head-mb\"],[9],[1,[23,[\"item\",\"sourceNews\"]],false],[0,\" | \"],[1,[23,[\"item\",\"category\",\"categoryname\"]],false],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\" select-box-position\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"checkCRS\"]],[23,[\"item\",\"id\"]],[23,[\"checkPrivate\"]],[23,[\"item\",\"title\"]],[23,[\"item\"]]]],[9],[0,\"\\n\"],[4,\"paper-checkbox\",null,[[\"value\",\"primary\",\"onChange\"],[[23,[\"checkPrivate\"]],true,[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"checkPrivate\"]]],null]],null]]],{\"statements\":[],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"layout-row mg-t-0\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-space-around-stretch flex\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"routeToDetailNew\"]],[23,[\"item\",\"id\"]]]],[9],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"crs-post-title\"],[9],[1,[23,[\"item\",\"title\"]],false],[10],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"crs-post-time\"],[9],[1,[27,\"moment-from-now\",[[27,\"convert-time\",[[23,[\"item\",\"createDate\"]]],null]],null],false],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[27,\"convert-image\",[[23,[\"item\",\"postImg\"]]],null],\"image\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-column\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"routeToDetailNew\"]],[23,[\"item\",\"id\"]]]],[9],[0,\"\\n        \"],[7,\"img\"],[12,\"src\",[27,\"convert-img\",[[23,[\"item\",\"postImg\"]]],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"news-crs-photo\"],[9],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[27,\"eq\",[[27,\"convert-image\",[[23,[\"item\",\"postImg\"]]],null],\"video\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-column news-relative\"],[9],[0,\"\\n        \"],[7,\"video\"],[12,\"id\",[23,[\"item\",\"id\"]]],[11,\"class\",\"news-crs-photo\"],[12,\"poster\",[27,\"convert-img\",[[23,[\"item\",\"postImg\"]]],null]],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"fullScreen\",[23,[\"item\",\"id\"]]]],[9],[0,\"\\n          \"],[7,\"source\"],[12,\"src\",[27,\"convert-img\",[[23,[\"item\",\"postImg\"]]],null]],[11,\"type\",\"video/mp4\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"video-playbtn-headline\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"fullScreen\",[23,[\"item\",\"id\"]]]],[9],[0,\"\\n            \"],[1,[27,\"paper-icon\",[\"play_circle_outline\"],[[\"size\"],[40]]],false],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/news/private-list-card.hbs" } });
});
;define("vidya-frontend/templates/components/news/random-news-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hiOJMI1h", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"layout-row\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"flex-20 hide-xs\"],[9],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"item\",\"company_name\"]]],null,{\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"flex black-bkg \"]],{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"news-relative\"],[12,\"id\",[23,[\"item\",\"id\"]]],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"routeToLink\"]],[23,[\"item\",\"ads_link\"]]]],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"layout-column \"],[9],[0,\"\\n            \"],[7,\"img\"],[11,\"class\",\"news-latest-img\"],[12,\"src\",[23,[\"item\",\"upload\"]]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"alt\",\"\"],[9],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"news-latest-head \"],[9],[0,\"\\n              \"],[7,\"span\"],[11,\"class\",\"new-latest-header\"],[9],[1,[23,[\"item\",\"company_name\"]],false],[10],[0,\"\\n            \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"flex black-bkg \"]],{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"news-relative\"],[12,\"id\",[23,[\"item\",\"id\"]]],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-column \"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"postImage\",\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"photo\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"routeToDetailNew\"]],[23,[\"item\",\"id\"]]]],[9],[0,\"\\n          \"],[7,\"img\"],[11,\"class\",\"news-latest-img\"],[12,\"src\",[23,[\"item\",\"postImage\",\"web_url\"]]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"alt\",\"\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"postImage\",\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\" relative\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"news-text-blur-mg video-head-position\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"routeToDetailNew\"]],[23,[\"item\",\"id\"]]]],[9],[0,\"\\n\"],[0,\"                \"],[7,\"span\"],[11,\"class\",\"new-latest-header \"],[12,\"style\",[28,[\"background:\",[23,[\"item\",\"category\",\"categorycolor\"]]]]],[9],[1,[23,[\"item\",\"sourceNews\"]],false],[0,\" |\\n                \"],[1,[23,[\"item\",\"category\",\"categoryname\"]],false],[10],[0,\"\\n            \"],[10],[0,\"\\n             \"],[7,\"photo\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"routeToDetailNew\"]],[23,[\"item\",\"id\"]]]],[9],[0,\"\\n            \"],[7,\"img\"],[12,\"id\",[23,[\"item\",\"postImage\",\"file_name\"]]],[11,\"class\",\"news-latest-img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"postImage\"]]],null]],[11,\"alt\",\"\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n\"],[0,\"            \"],[7,\"div\"],[11,\"class\",\"news-latest-head \"],[9],[0,\"\\n              \"],[7,\"article\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"text-width\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"routeToDetailNew\"]],[23,[\"item\",\"id\"]]]],[9],[0,\"\\n                  \"],[7,\"span\"],[11,\"class\",\"new-latest-head-text \"],[9],[1,[23,[\"item\",\"title\"]],false],[10],[0,\"\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"layout-row time-margin\"],[9],[0,\"\\n                \"],[7,\"span\"],[11,\"class\",\"news-latest-time\"],[9],[1,[27,\"moment-from-now\",[[23,[\"item\",\"stamp\"]]],null],false],[10],[0,\"  |\\n                \"],[7,\"span\"],[11,\"class\",\"news-latest-time layout-align-end-center\"],[9],[0,\"By \"],[1,[23,[\"item\",\"author\"]],false],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"layout-column news-relative \"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"video-playbtn-headline-crs\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"fullScreen\",[23,[\"item\",\"postImage\",\"file_name\"]],[23,[\"item\",\"postImage\",\"web_url\"]]]],[9],[0,\"\\n                \"],[1,[27,\"paper-icon\",[\"play_circle_outline\"],[[\"size\"],[40]]],false],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"        \"],[7,\"div\"],[11,\"class\",\"layout-column news-share-btn\"],[9],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],[23,[\"CreateShare\"]],[23,[\"item\",\"id\"]]],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"share\"],[[\"size\"],[30]]],false]],\"parameters\":[]},null],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"postImage\",\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"news-latest-head\"],[9],[0,\"\\n\\n            \"],[7,\"article\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"text-width\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"routeToDetailNew\"]],[23,[\"item\",\"id\"]]]],[9],[0,\"\\n                \"],[7,\"span\"],[11,\"class\",\"new-latest-head-text \"],[9],[1,[23,[\"item\",\"title\"]],false],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"news-text-blur-mg\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"routeToDetailNew\"]],[23,[\"item\",\"id\"]]]],[9],[0,\"\\n              \"],[7,\"span\"],[11,\"class\",\"new-latest-header \"],[12,\"style\",[28,[\"background:\",[23,[\"item\",\"category\",\"categorycolor\"]]]]],[9],[1,[23,[\"item\",\"sourceNews\"]],false],[0,\" |\\n                \"],[1,[23,[\"item\",\"category\",\"categoryname\"]],false],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"layout-row time-margin\"],[9],[0,\"\\n              \"],[7,\"span\"],[11,\"class\",\"news-latest-time\"],[9],[1,[27,\"moment-from-now\",[[23,[\"item\",\"stamp\"]]],null],false],[10],[0,\"  |\\n              \"],[7,\"span\"],[11,\"class\",\"news-latest-time layout-align-end-center\"],[9],[0,\"By \"],[1,[23,[\"item\",\"author\"]],false],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"  \"],[7,\"div\"],[11,\"class\",\"flex-20 hide-xs\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/news/random-news-list.hbs" } });
});
;define("vidya-frontend/templates/components/profile-info-edit", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "ID0aMpvq", "block": "{\"symbols\":[\"card\",\"profile\",\"profile\"],\"statements\":[[4,\"if\",[[23,[\"isEditing\"]]],null,{\"statements\":[[4,\"paper-card\",null,[[\"class\"],[\"\"]],{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"layout-column flex layout-padding edit-icon-color\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"profileInfo\"]]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"layout-row\"],[9],[0,\"\\n              \"],[1,[27,\"paper-input\",null,[[\"label\",\"type\",\"value\",\"onChange\",\"icon\",\"class\",\"hideAllMessages\"],[\"Your Name\",\"email\",[22,3,[\"username\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[22,3,[\"username\"]]],null]],null],\"person\",\"flex\",true]]],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"layout-row\"],[9],[0,\"\\n              \"],[1,[27,\"paper-input\",null,[[\"label\",\"type\",\"value\",\"onChange\",\"icon\",\"class\",\"hideAllMessages\"],[\"Your Work\",\"email\",[22,3,[\"info\",\"work\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[22,3,[\"info\",\"work\"]]],null]],null],\"work\",\"flex\",true]]],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"layout-row\"],[9],[0,\"\\n              \"],[1,[27,\"paper-input\",null,[[\"label\",\"type\",\"value\",\"onChange\",\"icon\",\"class\",\"hideAllMessages\"],[\"Your Education\",\"text\",[22,3,[\"info\",\"education\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[22,3,[\"info\",\"education\"]]],null]],null],\"menu_book\",\"flex\",true]]],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"layout-row\"],[9],[0,\"\\n              \"],[1,[27,\"paper-input\",null,[[\"label\",\"type\",\"value\",\"onChange\",\"icon\",\"class\",\"hideAllMessages\"],[\"Your City\",\"text\",[22,3,[\"info\",\"city\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[22,3,[\"info\",\"city\"]]],null]],null],\"location_city\",\"flex\",true]]],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-end-start\"],[9],[0,\"\\n              \"],[4,\"paper-button\",null,[[\"raised\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"cancelInfoEdit\"],null]]],{\"statements\":[[0,\"cancel\"]],\"parameters\":[]},null],[0,\"\\n              \"],[4,\"paper-button\",null,[[\"raised\",\"primary\",\"onClick\"],[true,true,[27,\"action\",[[22,0,[]],[23,[\"saveInfo\"]],[22,3,[]]],null]]],{\"statements\":[[0,\"Save\"]],\"parameters\":[]},null],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"paper-card\",null,[[\"class\"],[\"about-mg\"]],{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"layout-row\"],[9],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"class\",\"disabled\"],[\"about-btn-align\",true]],{\"statements\":[[0,\"About\"]],\"parameters\":[]},null],[0,\"\\n          \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"onClick\",\"warn\"],[[27,\"action\",[[22,0,[]],\"editInfo\"],null],true]],{\"statements\":[[0,\"Edit\"]],\"parameters\":[]},null],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"about-txt layout-margin\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"profileInfo\"]]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"layout-row\"],[9],[0,\"\\n              \"],[7,\"span\"],[11,\"class\",\"mr-5\"],[9],[0,\"Works at\"],[10],[0,\" \"],[7,\"span\"],[11,\"class\",\"user-profile-about-txt\"],[9],[1,[22,2,[\"info\",\"work\"]],false],[0,\" \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"layout-row\"],[9],[0,\"\\n              \"],[7,\"span\"],[11,\"class\",\"mr-5\"],[9],[0,\"Studied at\"],[10],[0,\" \"],[7,\"span\"],[11,\"class\",\"user-profile-about-txt\"],[9],[1,[22,2,[\"info\",\"education\"]],false],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"layout-row\"],[9],[0,\"\\n              \"],[7,\"span\"],[11,\"class\",\"mr-5\"],[9],[0,\"Live in\"],[10],[0,\" \"],[7,\"span\"],[11,\"class\",\"user-profile-about-txt\"],[9],[1,[22,2,[\"info\",\"city\"]],false],[10],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/profile-info-edit.hbs" } });
});
;define("vidya-frontend/templates/components/random-new-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "RhT6+q8O", "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/random-new-list.hbs" } });
});
;define("vidya-frontend/templates/components/share-dialog", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "IZYscrFc", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"paper-content\",null,[[\"class\"],[\"flex\"]],{\"statements\":[[4,\"if\",[[23,[\"showDialog\"]]],null,{\"statements\":[[4,\"paper-dialog\",null,[[\"class\",\"onClose\",\"origin\",\"clickOutsideToClose\"],[\"flex-100 full-height\",[27,\"action\",[[22,0,[]],\"closeDialog\",\"cancel\"],null],[23,[\"dialogOrigin\"]],true]],{\"statements\":[[0,\"    \"],[7,\"form\"],[11,\"class\",\"flex\"],[9],[0,\"\\n\"],[4,\"paper-toolbar\",null,null,{\"statements\":[[4,\"paper-toolbar-tools\",null,null,{\"statements\":[[0,\"        \"],[7,\"h2\"],[9],[0,\"Share\"],[10],[0,\"\\n          \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"closeDialog\",\"cancel\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",null,[[\"icon\"],[\"close\"]]],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"paper-dialog-content\",null,[[\"class\"],[\"flex\"]],{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"\"],[9],[0,\"\\n          \"],[1,[27,\"paper-input\",null,[[\"textarea\",\"block\",\"label\",\"passThru\",\"value\",\"onChange\"],[true,true,\"Write something\",[27,\"hash\",null,[[\"rows\"],[3]]],[23,[\"shareText\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"shareText\"]]],null]],null]]]],false],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"postImage\",\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"              \"],[7,\"photo\"],[9],[0,\"\\n                \"],[7,\"img\"],[11,\"class\",\"news-latest-img\"],[12,\"src\",[23,[\"item\",\"postImage\",\"web_url\"]]],[11,\"alt\",\"\"],[9],[10],[0,\"\\n              \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"postImage\",\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"              \"],[7,\"video\"],[11,\"class\",\"eagle-news-video\"],[11,\"preload\",\"auto\"],[11,\"controls\",\"\"],[9],[0,\"\\n                \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"postImage\",\"web_url\"]]],null]],[11,\"type\",\"video/mp4\"],[9],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"crs-count\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"layout-column flex\"],[9],[0,\"\\n            \"],[7,\"h3\"],[9],[1,[23,[\"item\",\"title\"]],false],[10],[0,\"\\n            \"],[7,\"p\"],[9],[0,\"\\n              \"],[1,[27,\"markdown-to-html\",[[23,[\"item\",\"summary\"]]],null],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"paper-dialog-actions\",null,[[\"class\"],[\"layout-row\"]],{\"statements\":[[0,\"        \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n        \"],[4,\"paper-button\",null,[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"closeDialog\",\"cancel\"],null]]],{\"statements\":[[0,\"Cancel\"]],\"parameters\":[]},null],[0,\"\\n        \"],[4,\"paper-button\",null,[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"share\",[23,[\"item\"]]],null]]],{\"statements\":[[0,\"Share\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/share-dialog.hbs" } });
});
;define("vidya-frontend/templates/components/social-search-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "/bZ7oler", "block": "{\"symbols\":[\"card\"],\"statements\":[[4,\"paper-card\",null,[[\"class\"],[\"layout-margin zero-mg social-shadow mb-5\"]],{\"statements\":[[4,\"if\",[[23,[\"item\",\"sharePost\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"layout-row flex\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-row flex\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"item\",\"shareuserinfo\",\"user_url\",\"web_url\"]]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"shareuserinfo\",\"user_url\",\"status\"]],\"success\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"shareuserinfo\",\"user_url\"]]],null]],[11,\"class\",\"social-profile\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToProfiles\"]],[23,[\"item\",\"shareuserinfo\",\"userId\"]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"img\"],[12,\"src\",[23,[\"item\",\"shareuserinfo\",\"user_url\",\"web_url\"]]],[11,\"class\",\"social-profile\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[\"/group.png\"],null]],[11,\"class\",\"social-profile\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[7,\"div\"],[11,\"class\",\"layout-column social-photo-text flex\"],[9],[0,\"\\n          \"],[7,\"p\"],[11,\"class\",\"social-profile-search-name\"],[9],[1,[23,[\"item\",\"shareuserinfo\",\"username\"]],false],[0,\" shared a post.\"],[10],[0,\"\\n          \"],[7,\"p\"],[11,\"class\",\"social-profile-time\"],[9],[1,[27,\"moment-from-now\",[[23,[\"item\",\"stamp\"]]],null],false],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"item\",\"shareText\"]]],null,{\"statements\":[[0,\"      \"],[7,\"p\"],[11,\"class\",\"social-txt\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]]]],[9],[0,\"\\n        \"],[1,[27,\"markdown-to-html\",[[23,[\"item\",\"shareText\"]]],null],false],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"  \"],[2,\" end of share \"],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"layout-row flex\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-row flex\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"previous_state\"]],\"group\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"img\"],[12,\"src\",[23,[\"item\",\"group_img\",\"web_url\"]]],[11,\"class\",\"social-profile\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToGroups\"]],[23,[\"item\",\"userinfo\",\"userId\"]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"userinfo\",\"user_url\",\"status\"]],\"success\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"userinfo\",\"user_url\"]]],null]],[11,\"class\",\"social-profile\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToProfiles\"]],[23,[\"item\",\"userinfo\",\"userId\"]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"item\",\"userinfo\",\"user_url\",\"web_url\"]]],null,{\"statements\":[[0,\"        \"],[7,\"img\"],[12,\"src\",[23,[\"item\",\"userinfo\",\"user_url\",\"web_url\"]]],[11,\"class\",\"social-profile\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[\"/group.png\"],null]],[11,\"class\",\"social-profile\"],[9],[10],[0,\"\\n      \"]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-column social-photo-text\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"previous_state\"]],\"group\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"p\"],[11,\"class\",\"social-profile-search-name\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToGroups\"]],[23,[\"item\",\"channel_id\"]]]],[9],[1,[23,[\"item\",\"userinfo\",\"channelname\"]],false],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"item\",\"sharePost\"]]],null,{\"statements\":[[0,\"            \"],[7,\"p\"],[11,\"class\",\"social-profile-search-name\"],[9],[1,[23,[\"item\",\"userinfo\",\"username\"]],false],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"p\"],[11,\"class\",\"social-profile-search-name\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToProfiles\"]],[23,[\"item\",\"userinfo\",\"userId\"]]]],[9],[1,[23,[\"item\",\"userinfo\",\"username\"]],false],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}],[4,\"if\",[[23,[\"item\",\"sharePost\"]]],null,{\"statements\":[[0,\"          \"],[7,\"p\"],[11,\"class\",\"social-profile-time\"],[9],[1,[27,\"moment-from-now\",[[23,[\"item\",\"shareStamp\"]]],null],false],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[7,\"p\"],[11,\"class\",\"social-profile-time\"],[9],[1,[27,\"moment-from-now\",[[23,[\"item\",\"stamp\"]]],null],false],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"item\",\"sharePost\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"layout-column mb-0\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-space-around-stretch flex\"],[9],[0,\"\\n\"],[4,\"component\",[[22,1,[\"content\"]]],[[\"class\"],[\"social-post\"]],{\"statements\":[[0,\"          \"],[7,\"p\"],[11,\"class\",\"social-txt\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]]]],[9],[0,\"\\n            \"],[1,[23,[\"item\",\"title\"]],false],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"item\",\"postImg\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"layout-column mb-0 news-relative\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"img\"],[12,\"src\",[27,\"convert-img\",[[23,[\"item\",\"post_image\"]]],null]],[11,\"class\",\"socil-search-position\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[9],[0,\"\\n              \"],[7,\"video\"],[12,\"id\",[23,[\"item\",\"id\"]]],[11,\"class\",\"socil-search-position\"],[12,\"poster\",[27,\"convert-url\",[[23,[\"item\",\"post_image\"]]],null]],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]]]],[9],[0,\"\\n                \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"post_image\",\"web_url\"]]],null]],[11,\"type\",\"video/mp4\"],[9],[10],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"video-playbtn \"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"fullScreen\",[23,[\"item\",\"id\"]]]],[9],[0,\"\\n                  \"],[1,[27,\"paper-icon\",[\"play_circle_outline\"],[[\"size\"],[40]]],false],[0,\"\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"audio\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"audio\"],[11,\"class\",\"social-audio\"],[11,\"controls\",\"\"],[9],[0,\"\\n              \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"post_image\",\"web_url\"]]],null]],[11,\"type\",\"audio/mp3\"],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n    \"],[2,\"start CRS share post  \"],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"previous_state\"]],\"CRS\"],null]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"layout-column mb-0\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"item\",\"summary\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-space-around-stretch flex\"],[9],[0,\"\\n\"],[4,\"component\",[[22,1,[\"content\"]]],[[\"class\"],[\"social-post\"]],{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]]]],[9],[0,\"\\n              \"],[7,\"p\"],[11,\"class\",\"social-txt\"],[9],[0,\"\\n                \"],[1,[23,[\"item\",\"summary\"]],false],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"item\",\"postImg\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"layout-column mb-0\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[9],[0,\"\\n              \"],[7,\"video\"],[12,\"id\",[23,[\"item\",\"id\"]]],[11,\"class\",\"socil-search-position\"],[12,\"poster\",[27,\"convert-url\",[[23,[\"item\",\"post_image\"]]],null]],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]]]],[9],[0,\"\\n                \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"post_image\",\"web_url\"]]],null]],[11,\"type\",\"video/mp4\"],[9],[10],[0,\"\\n              \"],[10],[0,\"\\n\"],[0,\"            \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"audio\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"audio\"],[11,\"class\",\"social-audio\"],[11,\"controls\",\"\"],[9],[0,\"\\n              \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"post_image\",\"web_url\"]]],null]],[11,\"type\",\"audio/mp3\"],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]]]],[9],[0,\"\\n              \"],[7,\"img\"],[12,\"src\",[27,\"convert-img\",[[23,[\"item\",\"post_image\"]]],null]],[11,\"class\",\"socil-search-position\"],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n    \"],[2,\"star social post \"],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"layout-column mb-0\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"item\",\"summary\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-space-around-stretch flex\"],[9],[0,\"\\n\"],[4,\"component\",[[22,1,[\"content\"]]],[[\"class\"],[\"social-post\"]],{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]]]],[9],[0,\"\\n              \"],[7,\"p\"],[11,\"class\",\"social-txt\"],[9],[0,\"\\n                \"],[1,[23,[\"item\",\"summary\"]],false],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"item\",\"postImg\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"layout-column mb-0 news-relative\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"video\"],[12,\"id\",[23,[\"item\",\"id\"]]],[11,\"class\",\"socil-search-position\"],[12,\"poster\",[27,\"convert-url\",[[23,[\"item\",\"post_image\"]]],null]],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]]]],[9],[0,\"\\n              \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"post_image\",\"web_url\"]]],null]],[11,\"type\",\"video/mp4\"],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"layout-column \"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"video-playbtn\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"fullScreen\",[23,[\"item\",\"id\"]]]],[9],[0,\"\\n                \"],[1,[27,\"paper-icon\",[\"play_circle_outline\"],[[\"size\"],[40]]],false],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"audio\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"audio\"],[11,\"class\",\"social-audio\"],[11,\"controls\",\"\"],[9],[0,\"\\n              \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"post_image\",\"web_url\"]]],null]],[11,\"type\",\"audio/mp3\"],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]]]],[9],[0,\"\\n              \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"post_image\"]]],null]],[11,\"class\",\"socil-search-position\"],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"],[10],[0,\"\\n  \"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"  \"],[7,\"div\"],[11,\"class\",\"layout-row search-btn-shadow\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-center-start flex\"],[9],[0,\"\\n\"],[4,\"paper-button\",null,[[\"class\",\"iconButton\",\"onClick\"],[\"flex social-icons-outside\",true,[27,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]]],null]]],{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-end-start cmt-icon\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"comments\"]],1],null]],null,{\"statements\":[[0,\"          \"],[1,[27,\"paper-icon\",[\"comments\"],null],false],[1,[23,[\"item\",\"comments\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[1,[27,\"paper-icon\",[\"comment\"],null],false],[1,[23,[\"item\",\"comments\"]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/social-search-card.hbs" } });
});
;define("vidya-frontend/templates/components/socials/crs-post-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "lfTNF99x", "block": "{\"symbols\":[\"card\",\"image\",\"menu\",\"content\"],\"statements\":[[4,\"paper-card\",null,[[\"class\"],[\"zero-mg social-shadow\"]],{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"previous_state\"]],\"CRS\"],null]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-row flex\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"layout-row flex\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"previous_state\"]],\"group\"],null]],null,{\"statements\":[[0,\"              \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"group_img\"]],\"profile\"],null]],[11,\"class\",\"social-profile\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToGroups\"]],[23,[\"item\",\"userinfo\",\"userId\"]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"userinfo\",\"user_url\",\"status\"]],\"success\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"userinfo\",\"user_url\"]],\"profile\"],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-profile\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"img\"],[12,\"src\",\"icon.png\"],[11,\"class\",\"social-profile\"],[9],[10],[0,\"\\n          \"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"           \"],[7,\"div\"],[11,\"class\",\"layout-column social-photo-text\"],[9],[0,\"\\n\\n             \"],[7,\"p\"],[11,\"class\",\"social-profile-name\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToProfiles\"]],[23,[\"item\",\"userinfo\",\"userId\"]]]],[9],[1,[23,[\"item\",\"userinfo\",\"username\"]],false],[10],[0,\"\\n             \"],[7,\"p\"],[11,\"class\",\"social-profile-time\"],[9],[1,[27,\"moment-from-now\",[[23,[\"item\",\"stamp\"]]],null],false],[10],[0,\"\\n           \"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"userinfo\",\"userId\"]],[23,[\"currentid\"]]],null]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-end-center social-menu-align\"],[9],[0,\"\\n\"],[4,\"paper-menu\",null,[[\"isOpen\",\"position\"],[[23,[\"menuFourIsOpen\"]],\"target-right target\"]],{\"statements\":[[4,\"component\",[[22,3,[\"trigger\"]]],null,{\"statements\":[[4,\"paper-button\",null,[[\"onClick\",\"iconButton\"],[null,true]],{\"statements\":[[0,\"                  \"],[1,[27,\"paper-icon\",[\"more_vert\"],[[\"class\"],[\"md-menu-origin\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,3,[\"content\"]]],[[\"class\",\"dense\"],[\"zero-pd menu-color\",true]],{\"statements\":[[0,\"                \"],[7,\"div\"],[11,\"class\",\"\"],[9],[0,\"\\n\"],[4,\"component\",[[22,4,[\"menu-item\"]]],[[\"class\",\"onClick\"],[\"layout-row layout-align-center-start\",[27,\"action\",[[22,0,[]],[23,[\"editSocial\"]],[23,[\"item\",\"id\"]]],null]]],{\"statements\":[[0,\"                    \"],[1,[27,\"paper-icon\",[\"edit\"],null],false],[0,\"Edit\\n\"]],\"parameters\":[]},null],[0,\"                \"],[10],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"\"],[9],[0,\"\\n\"],[4,\"component\",[[22,4,[\"menu-item\"]]],[[\"class\",\"onClick\"],[\"layout-row layout-align-center-start\",[27,\"action\",[[22,0,[]],[23,[\"deleteSocial\"]],[23,[\"item\"]]],null]]],{\"statements\":[[0,\"                    \"],[1,[27,\"paper-icon\",[\"delete_outline\"],null],false],[0,\"Delete\\n\"]],\"parameters\":[]},null],[0,\"                \"],[10],[0,\"\\n\"]],\"parameters\":[4]},null]],\"parameters\":[3]},null],[0,\"          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n\"],[4,\"component\",[[22,1,[\"content\"]]],[[\"class\"],[\"social-post\"]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]],[23,[\"index\"]]],[[\"preventDefault\"],[false]]],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"showAll\"]]],null,{\"statements\":[[0,\"               \"],[7,\"p\"],[12,\"id\",[21,\"index\"]],[11,\"class\",\"social-all-txt\"],[9],[0,\"\\n              \"],[1,[27,\"linkify\",[[23,[\"item\",\"summary\"]]],[[\"defaultScheme\",\"target\"],[\"http\",\"_blank\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"p\"],[12,\"id\",[21,\"index\"]],[11,\"class\",\"social-txt\"],[9],[0,\"\\n              \"],[1,[27,\"linkify\",[[23,[\"item\",\"summary\"]]],[[\"defaultScheme\",\"target\"],[\"http\",\"_blank\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"          \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"showAll\"]]],null,{\"statements\":[[0,\"             \"],[7,\"p\"],[11,\"class\",\"social-seemore\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"show\"]],[9],[0,\" See Less\"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"isOverflow\"]]],null,{\"statements\":[[0,\"            \"],[7,\"p\"],[11,\"class\",\"social-seemore\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"show\"]],[9],[0,\" See More \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[4,\"if\",[[23,[\"item\",\"postImg\"]]],null,{\"statements\":[[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"              \"],[7,\"div\"],[9],[0,\"\\n\"],[0,\"                \"],[7,\"img\"],[12,\"id\",[23,[\"item\",\"id\"]]],[11,\"src\",\"circle.gif\"],[12,\"data-src\",[27,\"convert-url\",[[23,[\"item\",\"post_image\"]]],null]],[11,\"alt\",\"\"],[11,\"class\",\"social-photo asyncImage\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]],[23,[\"index\"]]]],[9],[10],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"layout-column news-relative \"],[9],[0,\"\\n                 \"],[7,\"div\"],[11,\"class\",\"video-playbtn\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"fullScreen\",[23,[\"item\",\"id\"]],[23,[\"item\",\"post_image\",\"web_url\"]]]],[9],[0,\"\\n                    \"],[1,[27,\"paper-icon\",[\"play_circle_outline\"],[[\"size\",\"class\"],[40,\"play-icon-pos\"]]],false],[0,\"\\n                  \"],[10],[0,\"\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"audio\"],null]],null,{\"statements\":[[0,\"              \"],[7,\"audio\"],[11,\"class\",\"social-audio\"],[11,\"controls\",\"\"],[9],[0,\"\\n                \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"post_image\",\"web_url\"]]],null]],[11,\"type\",\"audio/mp3\"],[9],[10],[0,\"\\n              \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]],[23,[\"index\"]]]],[9],[0,\"\\n              \"],[7,\"img\"],[11,\"src\",\"circle.gif\"],[12,\"data-src\",[27,\"convert-url\",[[23,[\"item\",\"post_image\"]]],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-photo asyncImage\"],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}],[4,\"if\",[[27,\"is-empty\",[[23,[\"item\",\"postImg\",\"1\"]]],null]],null,{\"statements\":[],\"parameters\":[]},{\"statements\":[[0,\"              \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-start-start social-sub-img \"],[9],[0,\"\\n\"],[4,\"each\",[[27,\"process-img\",[[23,[\"item\",\"postImg\"]],\"image\"],null]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"                  \"],[7,\"video\"],[11,\"class\",\"social-sub-video\"],[11,\"preload\",\"none\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"                      \"],[7,\"img\"],[12,\"src\",[27,\"convert-img\",[[22,2,[]]],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-sub-photo\"],[9],[10],[0,\"\\n                  \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[2]},null],[0,\"              \"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[7,\"div\"],[11,\"class\",\"layout-row comment-shadow\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-center-start flex\"],[9],[0,\"\\n        \"],[7,\"p\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"shareSocial\"]],[23,[\"item\",\"id\"]]]],[9],[0,\" Share \"],[10],[0,\"\\n\"],[4,\"paper-button\",null,[[\"class\",\"iconButton\",\"onClick\"],[\"flex social-icons-outside\",true,[27,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]],[23,[\"index\"]]],null]]],{\"statements\":[[0,\"         \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-end-start cmt-icon\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"comments\"]],1],null]],null,{\"statements\":[[0,\"             \"],[1,[27,\"paper-icon\",[\"comments\"],null],false],[1,[23,[\"item\",\"comments\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"             \"],[1,[27,\"paper-icon\",[\"comment\"],null],false],[1,[23,[\"item\",\"comments\"]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/socials/crs-post-card.hbs" } });
});
;define("vidya-frontend/templates/components/socials/group-page-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "RgH+sJav", "block": "{\"symbols\":[],\"statements\":[[4,\"paper-item\",null,[[\"class\",\"onClick\"],[\"md-3-line\",[27,\"action\",[[22,0,[]],[23,[\"goToGroupPage\"]],[23,[\"item\",\"channel_id\"]]],null]]],{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"previous_state\"]],\"group\"],null]],null,{\"statements\":[[0,\"    \"],[1,[27,\"ember-initials\",null,[[\"size\",\"name\",\"seedText\",\"textColor\",\"fontSize\",\"fontWeight\",\"image\",\"class\"],[null,[23,[\"item\",\"summary\"]],[23,[\"item\",\"channel_id\"]],\"white\",35,200,\"\",\"md-avatar\"]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[7,\"img\"],[12,\"src\",[23,[\"item\",\"userinfo\",\"user_url\",\"web_url\"]]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"alt\",\"profile\"],[11,\"class\",\"md-avatar\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[7,\"div\"],[11,\"class\",\"md-list-item-text\"],[9],[0,\"\\n    \"],[7,\"h3\"],[9],[1,[23,[\"item\",\"summary\"]],false],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/socials/group-page-card.hbs" } });
});
;define("vidya-frontend/templates/components/socials/group-post-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "+fDwJoqS", "block": "{\"symbols\":[\"card\",\"image\",\"menu\",\"content\"],\"statements\":[[4,\"paper-card\",null,[[\"class\"],[\"zero-mg social-shadow\"]],{\"statements\":[[4,\"if\",[[23,[\"item\",\"groupPost\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-row flex\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"layout-row flex\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"userinfo\",\"user_url\",\"status\"]],\"success\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"userinfo\",\"user_url\"]],\"profile\"],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-profile\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToProfiles\"]],[23,[\"item\",\"userinfo\",\"userId\"]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"item\",\"userinfo\",\"user_url\",\"web_url\"]]],null,{\"statements\":[[0,\"            \"],[7,\"img\"],[12,\"src\",[23,[\"item\",\"userinfo\",\"user_url\",\"web_url\"]]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-profile\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToProfiles\"]],[23,[\"item\",\"userinfo\",\"userId\"]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"img\"],[12,\"src\",\"icon.png\"],[11,\"class\",\"social-profile\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToProfiles\"]],[23,[\"item\",\"userinfo\",\"userId\"]]]],[9],[10],[0,\"\\n          \"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"layout-column social-photo-text\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"layout-row\"],[9],[0,\"\\n                \"],[7,\"p\"],[11,\"class\",\"social-profile-name\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToProfiles\"]],[23,[\"item\",\"userinfo\",\"userId\"]]]],[9],[1,[23,[\"item\",\"userinfo\",\"username\"]],false],[10],[0,\"\\n                \"],[7,\"p\"],[11,\"class\",\"social-profile-icon\"],[9],[1,[27,\"paper-icon\",[\"play-arrow\"],[[\"class\"],[\"icon-color\"]]],false],[10],[0,\"\\n                \"],[7,\"p\"],[11,\"class\",\"social-profile-name\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToGroups\"]],[23,[\"item\",\"groupinfo\",\"groupId\"]]]],[9],[1,[23,[\"item\",\"groupinfo\",\"groupname\"]],false],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"p\"],[11,\"class\",\"social-profile-time\"],[9],[1,[27,\"moment-from-now\",[[23,[\"item\",\"stamp\"]]],null],false],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"if\",[[27,\"and\",[[27,\"eq\",[[23,[\"item\",\"userinfo\",\"userId\"]],[23,[\"currentid\"]]],null],[27,\"not\",[[23,[\"item\",\"ban\"]]],null]],null]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-end-center social-menu-align\"],[9],[0,\"\\n\\n\"],[4,\"paper-menu\",null,[[\"isOpen\",\"position\"],[[23,[\"menuFourIsOpen\"]],\"target-right target\"]],{\"statements\":[[4,\"component\",[[22,3,[\"trigger\"]]],null,{\"statements\":[[4,\"paper-button\",null,[[\"onClick\",\"iconButton\"],[null,true]],{\"statements\":[[0,\"                  \"],[1,[27,\"paper-icon\",[\"more_vert\"],[[\"class\"],[\"md-menu-origin\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,3,[\"content\"]]],[[\"class\",\"dense\"],[\"menu-color zero-pd\",true]],{\"statements\":[[0,\"                \"],[7,\"div\"],[11,\"class\",\"\"],[9],[0,\"\\n\"],[4,\"component\",[[22,4,[\"menu-item\"]]],[[\"class\",\"onClick\"],[\"layout-row layout-align-center-start\",[27,\"action\",[[22,0,[]],[23,[\"editSocial\"]],[23,[\"item\",\"id\"]]],null]]],{\"statements\":[[0,\"                    \"],[1,[27,\"paper-icon\",[\"edit\"],null],false],[0,\"Edit\\n\"]],\"parameters\":[]},null],[0,\"                \"],[10],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"\"],[9],[0,\"\\n\"],[4,\"component\",[[22,4,[\"menu-item\"]]],[[\"class\",\"onClick\"],[\"layout-row layout-align-center-start\",[27,\"action\",[[22,0,[]],[23,[\"deleteSocial\"]],[23,[\"item\"]]],null]]],{\"statements\":[[0,\"                    \"],[1,[27,\"paper-icon\",[\"delete_outline\"],null],false],[0,\"Delete\\n\"]],\"parameters\":[]},null],[0,\"                \"],[10],[0,\"\\n\"]],\"parameters\":[4]},null]],\"parameters\":[3]},null],[0,\"          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\"],[4,\"component\",[[22,1,[\"content\"]]],[[\"class\"],[\"social-post\"]],{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]],[23,[\"index\"]]],[[\"preventDefault\"],[false]]],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"showAll\"]]],null,{\"statements\":[[0,\"               \"],[7,\"p\"],[12,\"id\",[21,\"index\"]],[11,\"class\",\"social-all-txt\"],[9],[0,\"\\n              \"],[1,[27,\"linkify\",[[23,[\"item\",\"summary\"]]],[[\"defaultScheme\",\"target\"],[\"http\",\"_blank\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"p\"],[12,\"id\",[21,\"index\"]],[11,\"class\",\"social-txt\"],[9],[0,\"\\n              \"],[1,[27,\"linkify\",[[23,[\"item\",\"summary\"]]],[[\"defaultScheme\",\"target\"],[\"http\",\"_blank\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"          \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"showAll\"]]],null,{\"statements\":[[0,\"             \"],[7,\"p\"],[11,\"class\",\"social-seemore\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"show\"]],[9],[0,\" See Less\"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"isOverflow\"]]],null,{\"statements\":[[0,\"            \"],[7,\"p\"],[11,\"class\",\"social-seemore\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"show\"]],[9],[0,\" See More \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"],[4,\"if\",[[23,[\"item\",\"postImg\"]]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[9],[0,\"\\n\"],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"layout-column news-relative \"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"video-playbtn\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"fullScreen\",[23,[\"item\",\"id\"]],[23,[\"item\",\"post_image\",\"web_url\"]]]],[9],[0,\"\\n                \"],[1,[27,\"paper-icon\",[\"play_circle_outline\"],[[\"size\",\"class\"],[40,\"play-icon-pos\"]]],false],[0,\"\\n              \"],[10],[0,\"\\n               \"],[7,\"img\"],[12,\"id\",[23,[\"item\",\"id\"]]],[11,\"src\",\"circle.gif\"],[12,\"data-src\",[27,\"convert-url\",[[23,[\"item\",\"post_image\"]]],null]],[11,\"class\",\"social-photo asyncImage\"],[11,\"alt\",\"\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]],[23,[\"index\"]]]],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"audio\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"audio\"],[11,\"class\",\"social-audio\"],[11,\"controls\",\"controls\"],[9],[0,\"\\n            \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"post_image\",\"web_url\"]]],null]],[11,\"type\",\"audio/mp3\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]],[23,[\"index\"]]]],[9],[0,\"\\n            \"],[7,\"img\"],[11,\"src\",\"circle.gif\"],[12,\"data-src\",[27,\"convert-url\",[[23,[\"item\",\"post_image\"]]],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-photo asyncImage\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}],[4,\"if\",[[27,\"is-empty\",[[23,[\"item\",\"postImg\",\"1\"]]],null]],null,{\"statements\":[],\"parameters\":[]},{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-start-start social-sub-img \"],[9],[0,\"\\n\"],[4,\"each\",[[27,\"process-img\",[[23,[\"item\",\"postImg\"]],\"image\"],null]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"                \"],[7,\"video\"],[11,\"class\",\"social-sub-video\"],[11,\"preload\",\"none\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"                \"],[7,\"img\"],[12,\"src\",[27,\"convert-img\",[[22,2,[]]],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-sub-photo\"],[9],[10],[0,\"\\n              \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[2]},null],[0,\"          \"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-row comment-shadow\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-center-start flex\"],[9],[0,\"\\n        \"],[7,\"p\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"shareSocial\"]],[23,[\"item\",\"id\"]]]],[9],[0,\" Share \"],[10],[0,\"\\n\"],[4,\"paper-button\",null,[[\"class\",\"iconButton\",\"onClick\"],[\"flex social-icons-outside\",true,[27,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]],[23,[\"index\"]]],null]]],{\"statements\":[[0,\"         \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-end-start cmt-icon\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"comments\"]],1],null]],null,{\"statements\":[[0,\"             \"],[1,[27,\"paper-icon\",[\"comments\"],null],false],[1,[23,[\"item\",\"comments\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"             \"],[1,[27,\"paper-icon\",[\"comment\"],null],false],[1,[23,[\"item\",\"comments\"]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/socials/group-post-card.hbs" } });
});
;define("vidya-frontend/templates/components/socials/message-box", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Gh60UmG7", "block": "{\"symbols\":[\"item\"],\"statements\":[[4,\"paper-list\",null,[[\"class\"],[\"flex layout-column\"]],{\"statements\":[[4,\"each\",[[23,[\"messages\"]]],null,{\"statements\":[[4,\"if\",[[22,1,[\"isMessage\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"socials/message-card\",null,[[\"item\",\"currentid\",\"class\",\"role\",\"store\",\"scrollToBottom\",\"deleteComment\",\"self\"],[[22,1,[]],[23,[\"currentid\"]],\"myanmar-font\",[23,[\"role\"]],[23,[\"store\"]],[23,[\"scrollToBottom\"]],[27,\"action\",[[22,0,[]],[23,[\"deleteComment\"]]],null],false]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/socials/message-box.hbs" } });
});
;define("vidya-frontend/templates/components/socials/message-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "SPYb7rQP", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[23,[\"item\",\"message\"]]],null,{\"statements\":[[4,\"paper-item\",null,[[\"class\"],[\"layout-row\"]],{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"layout-column \"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"userinfo\",\"user_url\",\"status\"]],\"success\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"userinfo\",\"user_url\",\"web_url\"]]],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-profile\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[7,\"img\"],[12,\"src\",[23,[\"item\",\"userinfo\",\"user_url\",\"web_url\"]]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-profile\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-column flex\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\" flex layout-column chat-text-mg\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"layout-row  layout-align-space-between-center\"],[9],[0,\"\\n          \"],[7,\"p\"],[11,\"class\",\"flex mm-font eagle-chat-name chat-input-height\"],[9],[1,[23,[\"item\",\"userinfo\",\"username\"]],false],[10],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"userid\"]],[23,[\"currentid\"]]],null]],null,{\"statements\":[[0,\"            \"],[4,\"paper-button\",null,[[\"iconButton\",\"class\",\"onClick\"],[true,\"icon-size\",[27,\"action\",[[22,0,[]],[23,[\"deleteComment\"]],[23,[\"item\"]]],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"close\"],null],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[4,\"paper-button\",null,[[\"iconButton\",\"class\"],[true,\"icon-size hide-icon\"]],{\"statements\":[[1,[27,\"paper-icon\",[\"close\"],null],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"chat-detail-txt\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"message\"]],\"# &#128077;\"],null]],null,{\"statements\":[[0,\"            \"],[1,[27,\"markdown-to-html\",[[23,[\"item\",\"message\"]]],[[\"class\"],[\"chat-text\"]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[1,[27,\"linkify\",[[23,[\"item\",\"message\"]]],[[\"defaultScheme\",\"class\"],[\"http\",\"chat-text\"]]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"class\",\"layout-row\"],[9],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"flex chat-time\"],[9],[1,[27,\"moment-from-now\",[[23,[\"item\",\"stamp\"]]],[[\"interval\"],[60000]]],false],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/socials/message-card.hbs" } });
});
;define("vidya-frontend/templates/components/socials/message-container", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "U9+PuYkr", "block": "{\"symbols\":[],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"black-bkg flex layout-column md-whiteframe-z1\"]],{\"statements\":[[0,\"  \"],[1,[27,\"socials/message-box\",null,[[\"closeQuestion\",\"currentid\",\"messages\",\"scrollPos\",\"class\",\"store\",\"channel_id\",\"scrollToBottom\",\"requestMedia\",\"progressDisplay\",\"deleteComment\"],[[23,[\"closeQuestion\"]],[23,[\"currentid\"]],[23,[\"messages\"]],[23,[\"scrollPos\"]],\"layout-row flex-auto\",[23,[\"store\"]],[23,[\"channel_id\"]],[23,[\"scrollToBottom\"]],[23,[\"requestMedia\"]],[23,[\"progressDisplay\"]],[27,\"action\",[[22,0,[]],\"deleteComment\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/socials/message-container.hbs" } });
});
;define("vidya-frontend/templates/components/socials/share-post-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "WxqxAVjl", "block": "{\"symbols\":[\"card\",\"image\",\"menu\",\"content\"],\"statements\":[[4,\"paper-card\",null,[[\"class\"],[\"zero-mg social-shadow\"]],{\"statements\":[[4,\"if\",[[23,[\"item\",\"sharePost\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"layout-row flex\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-row flex\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"item\",\"shareuserinfo\",\"user_url\",\"web_url\"]]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"shareuserinfo\",\"user_url\",\"status\"]],\"success\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"shareuserinfo\",\"user_url\"]]],null]],[11,\"class\",\"social-profile\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToProfiles\"]],[23,[\"item\",\"shareuserinfo\",\"userID\"]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[7,\"img\"],[12,\"src\",\"icon.png\"],[11,\"class\",\"social-profile\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[7,\"div\"],[11,\"class\",\"layout-column social-photo-text flex\"],[9],[0,\"\\n          \"],[7,\"p\"],[11,\"class\",\"social-profile-name\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToProfiles\"]],[23,[\"item\",\"shareuserinfo\",\"userID\"]]]],[9],[1,[23,[\"item\",\"shareuserinfo\",\"username\"]],false],[0,\" shared a post.\"],[10],[0,\"\\n          \"],[7,\"p\"],[11,\"class\",\"social-profile-time\"],[9],[1,[27,\"moment-from-now\",[[23,[\"item\",\"stamp\"]]],null],false],[10],[0,\"\\n        \"],[10],[0,\"\\n       \"],[10],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"shareuserinfo\",\"userID\"]],[23,[\"currentid\"]]],null]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-end-center social-menu-align\"],[9],[0,\"\\n\"],[4,\"paper-menu\",null,[[\"isOpen\",\"position\"],[[23,[\"menuFourIsOpen\"]],\"target-right target\"]],{\"statements\":[[4,\"component\",[[22,3,[\"trigger\"]]],null,{\"statements\":[[4,\"paper-button\",null,[[\"onClick\",\"iconButton\"],[null,true]],{\"statements\":[[0,\"                  \"],[1,[27,\"paper-icon\",[\"more_vert\"],[[\"class\"],[\"md-menu-origin\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,3,[\"content\"]]],[[\"class\",\"dense\"],[\"zero-pd menu-color\",true]],{\"statements\":[[0,\"                \"],[7,\"div\"],[11,\"class\",\"3\"],[9],[0,\"\\n\"],[4,\"component\",[[22,4,[\"menu-item\"]]],[[\"class\",\"onClick\"],[\"layout-row layout-align-center-start\",[27,\"action\",[[22,0,[]],[23,[\"editSocial\"]],[23,[\"item\",\"id\"]]],null]]],{\"statements\":[[0,\"                    \"],[1,[27,\"paper-icon\",[\"edit\"],null],false],[0,\"Edit\\n\"]],\"parameters\":[]},null],[0,\"                \"],[10],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"3\"],[9],[0,\"\\n\"],[4,\"component\",[[22,4,[\"menu-item\"]]],[[\"class\",\"onClick\"],[\"layout-row layout-align-center-start\",[27,\"action\",[[22,0,[]],[23,[\"deleteSocial\"]],[23,[\"item\"]]],null]]],{\"statements\":[[0,\"                    \"],[1,[27,\"paper-icon\",[\"delete_outline\"],null],false],[0,\"Delete\\n\"]],\"parameters\":[]},null],[0,\"                \"],[10],[0,\"\\n\"]],\"parameters\":[4]},null]],\"parameters\":[3]},null],[0,\"          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"item\",\"shareText\"]]],null,{\"statements\":[[4,\"component\",[[22,1,[\"content\"]]],[[\"class\"],[\"social-post\"]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]],[23,[\"index\"]]],[[\"preventDefault\"],[false]]],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"showAll\"]]],null,{\"statements\":[[0,\"               \"],[7,\"p\"],[12,\"id\",[21,\"index\"]],[11,\"class\",\"social-all-txt\"],[9],[0,\"\\n              \"],[1,[27,\"linkify\",[[23,[\"item\",\"shareText\"]]],[[\"defaultScheme\",\"target\"],[\"http\",\"_blank\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"p\"],[12,\"id\",[21,\"index\"]],[11,\"class\",\"social-txt\"],[9],[0,\"\\n              \"],[1,[27,\"linkify\",[[23,[\"item\",\"shareText\"]]],[[\"defaultScheme\",\"target\"],[\"http\",\"_blank\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"          \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"showAll\"]]],null,{\"statements\":[[0,\"             \"],[7,\"p\"],[11,\"class\",\"social-seemore\"],[11,\"class\",\"social-seemore\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"show\"]],[9],[0,\" See Less\"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"isOverflow\"]]],null,{\"statements\":[[0,\"            \"],[7,\"p\"],[11,\"class\",\"social-seemore\"],[11,\"class\",\"social-seemore\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"show\"]],[9],[0,\" See More \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"     \"],[7,\"div\"],[11,\"class\",\"layout-row flex\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-row flex\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"previous_state\"]],\"group\"],null]],null,{\"statements\":[[0,\"              \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"group_img\"]]],null]],[11,\"class\",\"social-profile\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToGroups\"]],[23,[\"item\",\"userinfo\",\"userId\"]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"userinfo\",\"user_url\",\"status\"]],\"success\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"userinfo\",\"user_url\"]]],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-profile\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"img\"],[12,\"src\",\"icon.png\"],[11,\"class\",\"social-profile\"],[9],[10],[0,\"\\n          \"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"          \"],[7,\"div\"],[11,\"class\",\"layout-column social-photo-text\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"item\",\"sharePost\"]]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"previous_state\"]],\"CRS\"],null]],null,{\"statements\":[[0,\"              \"],[7,\"p\"],[11,\"class\",\"social-profile-name\"],[9],[1,[23,[\"item\",\"userinfo\",\"username\"]],false],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"item\",\"groupPost\"]]],null,{\"statements\":[[0,\"             \"],[7,\"div\"],[11,\"class\",\"layout-row\"],[9],[0,\"\\n                 \"],[7,\"p\"],[11,\"class\",\"social-profile-name\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToProfiles\"]],[23,[\"item\",\"userinfo\",\"userId\"]]]],[9],[1,[23,[\"item\",\"userinfo\",\"username\"]],false],[10],[0,\"\\n                 \"],[7,\"p\"],[11,\"class\",\"social-profile-icon\"],[9],[1,[27,\"paper-icon\",[\"play-arrow\"],[[\"class\"],[\"icon-color\"]]],false],[10],[0,\"\\n                 \"],[7,\"p\"],[11,\"class\",\"social-profile-name\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToGroups\"]],[23,[\"item\",\"groupinfo\",\"groupId\"]]]],[9],[1,[23,[\"item\",\"groupinfo\",\"groupname\"]],false],[10],[0,\"\\n             \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[7,\"p\"],[11,\"class\",\"social-profile-name\"],[9],[1,[23,[\"item\",\"author\"]],false],[10],[0,\"\\n             \"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"              \"],[7,\"p\"],[11,\"class\",\"social-profile-time\"],[9],[1,[27,\"moment-from-now\",[[23,[\"item\",\"shareStamp\"]]],null],false],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[10],[0,\"\\n      \"],[10],[0,\"\\n     \"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"item\",\"sharePost\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[9],[0,\"\\n\"],[4,\"component\",[[22,1,[\"content\"]]],[[\"class\"],[\"social-post\"]],{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]],[23,[\"index\"]]],[[\"preventDefault\"],[false]]],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"showAllShare\"]]],null,{\"statements\":[[0,\"               \"],[7,\"p\"],[12,\"id\",[23,[\"item\",\"id\"]]],[11,\"class\",\"social-all-txt-share\"],[9],[0,\"\\n              \"],[1,[27,\"linkify\",[[23,[\"item\",\"summary\"]]],[[\"defaultScheme\",\"target\"],[\"http\",\"_blank\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"p\"],[12,\"id\",[23,[\"item\",\"id\"]]],[11,\"class\",\"social-txt-share\"],[9],[0,\"\\n              \"],[1,[27,\"linkify\",[[23,[\"item\",\"summary\"]]],[[\"defaultScheme\",\"target\"],[\"http\",\"_blank\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"          \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"showAllShare\"]]],null,{\"statements\":[[0,\"             \"],[7,\"p\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"showShare\"]],[9],[0,\" See Less\"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"isOverflowShare\"]]],null,{\"statements\":[[0,\"            \"],[7,\"p\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"showShare\"]],[9],[0,\" See More \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[4,\"if\",[[23,[\"item\",\"postImg\"]]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"img\"],[11,\"src\",\"circle.gif\"],[12,\"data-src\",[27,\"convert-url\",[[23,[\"item\",\"post_image\"]]],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-photo asyncImage\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]],[23,[\"index\"]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[9],[0,\"\\n\"],[0,\"              \"],[7,\"div\"],[11,\"class\",\"layout-column news-relative \"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"video-playbtn ddd\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"fullScreen\",[23,[\"item\",\"post_image\",\"web_url\"]]]],[9],[0,\"\\n                  \"],[1,[27,\"paper-icon\",[\"play_circle_outline\"],[[\"size\",\"class\"],[40,\"play-icon-pos\"]]],false],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"img\"],[11,\"src\",\"circle.gif\"],[12,\"data-src\",[27,\"convert-url\",[[23,[\"item\",\"post_image\"]]],null]],[11,\"class\",\"social-photo asyncImage\"],[11,\"alt\",\"\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]],[23,[\"index\"]]]],[9],[10],[0,\"\\n              \"],[10],[0,\"\\n\\n\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"audio\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"audio\"],[11,\"class\",\"social-audio\"],[11,\"controls\",\"\"],[9],[0,\"\\n              \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"post_image\",\"web_url\"]]],null]],[11,\"type\",\"audio/mp3\"],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}],[4,\"if\",[[27,\"is-empty\",[[23,[\"item\",\"postImg\",\"1\"]]],null]],null,{\"statements\":[],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-start-start social-sub-img \"],[9],[0,\"\\n\"],[4,\"each\",[[27,\"process-img\",[[23,[\"item\",\"postImg\"]],\"image\"],null]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"                  \"],[7,\"img\"],[12,\"src\",[27,\"convert-img\",[[22,2,[]]],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-sub-photo\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"                \"],[7,\"video\"],[11,\"class\",\"social-sub-video\"],[12,\"poster\",[27,\"convert-url\",[[22,2,[]]],null]],[9],[0,\"\\n                  \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[22,2,[\"web_url\"]]],null]],[11,\"type\",\"video/mp4\"],[9],[10],[0,\"\\n                \"],[10],[0,\"\\n                \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[2]},null],[0,\"              \"],[7,\"div\"],[11,\"class\",\"count-align\"],[9],[0,\"\\n                \"],[7,\"span\"],[11,\"class\",\"layout-row layout-align-center-start\"],[9],[1,[27,\"process-img\",[[23,[\"item\",\"postImg\"]],\"text\"],null],false],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[7,\"div\"],[11,\"class\",\"layout-row comment-shadow\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-center-start flex\"],[9],[0,\"\\n        \"],[7,\"p\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"shareSocial\"]],[23,[\"item\",\"id\"]]]],[9],[0,\" Share \"],[10],[0,\"\\n\"],[4,\"paper-button\",null,[[\"class\",\"iconButton\",\"onClick\"],[\"flex social-icons-outside\",true,[27,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]],[23,[\"index\"]]],null]]],{\"statements\":[[0,\"         \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-end-start cmt-icon\"],[9],[0,\"\\n\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"comments\"]],1],null]],null,{\"statements\":[[0,\"          \"],[1,[27,\"paper-icon\",[\"comments\"],null],false],[1,[23,[\"item\",\"comments\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[1,[27,\"paper-icon\",[\"comment\"],null],false],[1,[23,[\"item\",\"comments\"]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/socials/share-post-card.hbs" } });
});
;define("vidya-frontend/templates/components/socials/social-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "KLDQlJ9a", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[12,\"id\",[23,[\"item\",\"id\"]]],[9],[0,\"\\n\"],[7,\"div\"],[12,\"class\",[27,\"change-button\",[[23,[\"following\"]],[23,[\"item\",\"id\"]],\"user\"],null]],[9],[0,\"\\n  \\n    \"],[7,\"div\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"gotoProfile\"]],[23,[\"item\",\"id\"]]]],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"user_url\",\"status\"]],\"success\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"user_url\"]]],null]],[11,\"class\",\"cele-photo\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"alt\",\"\"],[9],[10],[0,\"\\n      \\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"user_url\"]]],null]],[11,\"class\",\"cele-photo\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"alt\",\"\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \\n\"],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"followHandler\"]],[23,[\"item\",\"id\"]],\"cele\",[23,[\"item\"]]]],[9],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"story-name\"],[9],[1,[23,[\"item\",\"username\"]],false],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"circle-loader check-pos\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[27,\"change-button\",[[23,[\"following\"]],[23,[\"item\",\"id\"]],\"user\"],null],\"circle unfollow\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"checkmark draw\"],[11,\"style\",\"display:block\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"checkmark draw\"],[11,\"style\",\"display:none\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/socials/social-card.hbs" } });
});
;define("vidya-frontend/templates/components/socials/social-detail-view", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rPBBzMcH", "block": "{\"symbols\":[\"item\",\"item\",\"photoswipe\",\"image\",\"index\"],\"statements\":[[4,\"each\",[[23,[\"socialModel\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"\"],[9],[0,\"\\n\"],[4,\"if\",[[22,1,[\"sharePost\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"layout-row  \"],[9],[0,\"\\n\"],[4,\"if\",[[22,1,[\"shareuserinfo\",\"user_url\",\"web_url\"]]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,1,[\"shareuserinfo\",\"user_url\",\"status\"]],\"success\"],null]],null,{\"statements\":[[0,\"              \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[22,1,[\"shareuserinfo\",\"user_url\"]],\"profile\"],null]],[11,\"class\",\"social-profile\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToProfiles\"]],[22,1,[\"shareuserinfo\",\"userID\"]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[7,\"img\"],[12,\"src\",[22,1,[\"shareuserinfo\",\"user_url\",\"web_url\"]]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-profile\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"img\"],[12,\"src\",\"icon.png\"],[11,\"class\",\"social-profile\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"          \"],[7,\"div\"],[11,\"class\",\"layout-column social-photo-text flex\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"layout-row social-photo-text flex\"],[9],[0,\"\\n              \"],[7,\"p\"],[11,\"class\",\"social-profile-name\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToProfiles\"]],[22,1,[\"shareuserinfo\",\"userID\"]]]],[9],[1,[22,1,[\"shareuserinfo\",\"username\"]],false],[0,\" \"],[10],[0,\"\\n              \"],[7,\"span\"],[9],[0,\"..shared a post.\"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"p\"],[11,\"class\",\"social-profile-time\"],[9],[1,[27,\"moment-from-now\",[[22,1,[\"stamp\"]]],null],false],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"if\",[[22,1,[\"shareText\"]]],null,{\"statements\":[[0,\"          \"],[7,\"p\"],[11,\"class\",\"chat-txt\"],[9],[0,\"\\n            \"],[1,[27,\"markdown-to-html\",[[22,1,[\"shareText\"]]],null],false],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n      \"],[1,[21,\"paper-divider\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[7,\"div\"],[11,\"class\",\"reply-bkg\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-row flex \"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[22,1,[\"previous_state\"]],\"group\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"img\"],[12,\"src\",[22,1,[\"group_img\",\"web_url\"]]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-profile\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,1,[\"userinfo\",\"user_url\",\"status\"]],\"success\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[22,1,[\"userinfo\",\"user_url\",\"web_url\"]]],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-profile\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToProfiles\"]],[22,1,[\"userinfo\",\"userId\"]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,1,[\"userinfo\",\"user_url\",\"web_url\"]]],null,{\"statements\":[[0,\"          \"],[7,\"img\"],[12,\"src\",[22,1,[\"userinfo\",\"user_url\",\"web_url\"]]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-profile\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[7,\"img\"],[12,\"src\",\"icon.png\"],[11,\"class\",\"social-profile\"],[9],[10],[0,\"\\n        \"]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"        \"],[7,\"div\"],[11,\"class\",\"layout-column social-photo-text flex\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[22,1,[\"previous_state\"]],\"group\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"p\"],[11,\"class\",\"social-chat-profile-name\"],[9],[1,[22,1,[\"userinfo\",\"channelname\"]],false],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,1,[\"groupPost\"]]],null,{\"statements\":[[0,\"            \"],[7,\"p\"],[11,\"class\",\"social-chat-profile-name\"],[9],[1,[22,1,[\"userinfo\",\"username\"]],false],[0,\" \"],[1,[27,\"paper-icon\",[\"play-arrow\"],null],false],[0,\" \"],[1,[22,1,[\"groupinfo\",\"groupname\"]],false],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"p\"],[11,\"class\",\"social-chat-profile-name\"],[9],[1,[22,1,[\"userinfo\",\"username\"]],false],[10],[0,\"\\n          \"]],\"parameters\":[]}]],\"parameters\":[]}],[4,\"if\",[[22,1,[\"sharePost\"]]],null,{\"statements\":[[0,\"            \"],[7,\"p\"],[11,\"class\",\"social-profile-time\"],[9],[1,[27,\"moment-from-now\",[[22,1,[\"shareStamp\"]]],null],false],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"p\"],[11,\"class\",\"social-profile-time\"],[9],[1,[27,\"moment-from-now\",[[22,1,[\"stamp\"]]],null],false],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[10],[0,\"\\n        \"],[7,\"div\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"loadMore\"]]],null,{\"statements\":[[0,\"            \"],[4,\"paper-button\",null,[[\"class\",\"iconButton\",\"onClick\"],[\"flex\",true,[27,\"action\",[[22,0,[]],[23,[\"readMore\"]],[22,1,[\"crs_id\"]],[22,1,[\"channel_id\"]]],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"keyboard_arrow_up\"],null],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[4,\"paper-button\",null,[[\"class\",\"iconButton\",\"onClick\"],[\"flex\",true,[27,\"action\",[[22,0,[]],[23,[\"readMore\"]],[22,1,[\"crs_id\"]],[22,1,[\"channel_id\"]]],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"keyboard_arrow_down\"],null],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"loadMore\"]]],null,{\"statements\":[[4,\"if\",[[22,1,[\"sharePost\"]]],null,{\"statements\":[[0,\"              \"],[7,\"p\"],[11,\"class\",\"news-share-size layout-padding\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"routeToDetailNew\"]],[22,1,[\"detail\"]],[22,1,[\"news_id\"]]]],[9],[0,\"\\n                \"],[1,[27,\"markdown-to-html\",[[22,1,[\"summary\"]]],null],false],[0,\"\\n              \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"p\"],[11,\"class\",\"chat-drop-unlimit\"],[9],[0,\"\\n               \"],[1,[27,\"linkify\",[[22,1,[\"summary\"]]],[[\"defaultScheme\"],[\"http\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"          \"],[2,\" {{#photo-swipe class='chat-swiper-size' shareEl=false items=(convert-data item.postImg)  history=false onImageLoadComplete=(action \\\"open\\\") onClose=(action \\\"close\\\") as |photoswipe|}}\\n            {{#swiper-container currentSlide=currentSlide2  slidesPerView=3}}\\n              {{#each item.postImg as |image index|}}\\n                {{#if (eq image.type \\\"video\\\")}}\\n                  {{#swiper-slide}}\\n                    <div class=\\\"layout-column\\\">\\n                      {{!-- <video id={{item.id}} class=\\\"social-text-sub-video\\\" {{action 'fullScreen' item.id}} poster={{convert-url image}} controlsList=\\\"nodownload\\\">\\n\\t\\t\\t        <source src={{convert-url image.web_url}} type=\\\"video/mp4\\\">\\n          </video> --}}\\n                      <img id={{item.id}} {{action 'fullScreen' item.id}} src={{convert-url image}} class='social-detail-vd' alt=\\\"\\\">\\n                      <div class=\\\"layout-column news-relative\\\">\\n                        <div class=\\\"video-playbtn-chat\\\" {{action 'fullScreen' item.id image.web_url}}>\\n                          {{paper-icon 'play_circle_outline' size=40 }}\\n                        </div>\\n                      </div>\\n                    </div>\\n                  {{/swiper-slide}}\\n                {{else if (eq image.type \\\"audio\\\")}}\\n                  {{#swiper-slide}}\\n                    <audio class=\\\"social-text-sub-audio\\\" controls>\\n                      <source src={{image.web_url}} type=\\\"audio/mp3\\\">\\n                    </audio>\\n                  {{/swiper-slide}}\\n                {{else if (eq image.type \\\"image\\\")}}\\n                  {{#swiper-slide}}\\n                    <img src={{convert-url image}} {{action photoswipe.actions.open (hash index=index)}} class='social-text-sub-photo' />\\n                  {{/swiper-slide}}\\n                {{/if}}\\n              {{/each}}\\n            {{/swiper-container}}\\n          {{/photo-swipe}} \"],[0,\"\\n\"],[4,\"photo-swipe\",null,[[\"shareEl\",\"items\",\"history\",\"onImageLoadComplete\",\"onClose\"],[false,[27,\"convert-data\",[[22,1,[\"postImg\"]]],null],false,[27,\"action\",[[22,0,[]],\"open\"],null],[27,\"action\",[[22,0,[]],\"close\"],null]]],{\"statements\":[[4,\"each\",[[22,1,[\"postImg\"]]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,4,[\"file_name\"]],[22,1,[\"post_image\",\"file_name\"]]],null]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,4,[\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"                  \"],[7,\"div\"],[11,\"class\",\"layout-column\"],[9],[0,\"\\n\\n                  \"],[7,\"img\"],[12,\"id\",[22,4,[\"id\"]]],[12,\"src\",[27,\"convert-url\",[[22,4,[]]],null]],[11,\"class\",\"social-detail-vd\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"alt\",\"\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"fullScreen\",[22,4,[\"file_name\"]],[22,4,[\"web_url\"]]]],[9],[10],[0,\"\\n                  \"],[7,\"div\"],[11,\"class\",\"layout-column news-relative\"],[9],[0,\"\\n                  \"],[7,\"div\"],[11,\"class\",\"video-playbtn-chat\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"fullScreen\",[22,4,[\"file_name\"]],[22,4,[\"web_url\"]]]],[9],[0,\"\\n                    \"],[1,[27,\"paper-icon\",[\"play_circle_outline\"],[[\"size\"],[40]]],false],[0,\"\\n                  \"],[10],[0,\"\\n                  \"],[10],[0,\"\\n                \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,4,[\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"\\n                  \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[22,4,[]]],null]],[11,\"class\",\"social-photo-full\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[22,3,[\"actions\",\"open\"]],[27,\"hash\",null,[[\"index\"],[[22,5,[]]]]]]],[3,\"action\",[[22,0,[]],\"download\"],[[\"on\"],[\"press\"]]],[9],[10],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,4,[\"type\"]],\"voice\"],null]],null,{\"statements\":[[0,\"                  \"],[7,\"audio\"],[11,\"class\",\"social-audio\"],[11,\"controls\",\"\"],[11,\"controlsList\",\"nodownload\"],[9],[0,\"\\n                    \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[22,4,[\"web_url\"]]],null]],[11,\"type\",\"audio/mp3\"],[9],[10],[0,\"\\n                  \"],[10],[0,\"\\n                \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,4,[\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"                      \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[22,4,[]]],null]],[11,\"class\",\"social-subchat-photo\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[22,3,[\"actions\",\"open\"]],[27,\"hash\",null,[[\"index\"],[[22,5,[]]]]]]],[3,\"action\",[[22,0,[]],\"download\"],[[\"on\"],[\"press\"]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,4,[\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"                    \"],[7,\"img\"],[12,\"id\",[22,4,[\"id\"]]],[12,\"src\",[27,\"convert-url\",[[22,4,[]]],null]],[11,\"class\",\"social-subchat-photo\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"alt\",\"\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"fullScreen\",[22,4,[\"file_name\"]],[22,4,[\"web_url\"]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,4,[\"type\"]],\"voice\"],null]],null,{\"statements\":[[0,\"                    \"],[7,\"audio\"],[11,\"class\",\"social-audio\"],[11,\"controls\",\"\"],[11,\"controlsList\",\"nodownload\"],[9],[0,\"\\n                      \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[22,4,[\"web_url\"]]],null]],[11,\"type\",\"audio/mp3\"],[9],[10],[0,\"\\n                    \"],[10],[0,\"\\n                 \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[4,5]},null]],\"parameters\":[3]},null],[4,\"if\",[[27,\"eq\",[[22,1,[\"previous_state\"]],\"CRS\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"layout-column crs-count\"],[9],[0,\"\\n\"],[4,\"paper-list\",null,null,{\"statements\":[[4,\"each\",[[23,[\"newsModel\"]]],null,{\"statements\":[[0,\"                  \"],[1,[21,\"paper-divider\"],false],[0,\"\\n\"],[4,\"paper-item\",null,[[\"class\"],[\"\"]],{\"statements\":[[0,\"                    \"],[7,\"div\"],[11,\"class\",\"md-list-item-text  layout-row layout-align-start-center\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDetail\"]],[22,2,[\"id\"]]]],[9],[0,\"\\n                      \"],[7,\"h4\"],[11,\"class\",\"\"],[9],[10],[0,\"* \"],[1,[22,2,[\"title\"]],false],[0,\"\\n                    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[2]},null]],\"parameters\":[]},null],[0,\"              \"],[1,[21,\"paper-divider\"],false],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,1,[\"sharePost\"]]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"chat-share-limit\"],[9],[0,\"\\n              \"],[7,\"span\"],[11,\"class\",\"\"],[9],[1,[27,\"markdown-to-html\",[[22,1,[\"summary\"]]],null],false],[10],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"p\"],[11,\"class\",\"chat-drop-limit\"],[9],[1,[27,\"linkify\",[[22,1,[\"summary\"]]],[[\"defaultScheme\"],[\"http\"]]],false],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[4,\"if\",[[23,[\"showDownload\"]]],null,{\"statements\":[[4,\"paper-dialog\",null,[[\"fullscreen\",\"onClose\",\"clickOutsideToClose\"],[[23,[\"fullscreen\"]],[27,\"action\",[[22,0,[]],\"closePromptDialog\",\"cancel\"],null],true]],{\"statements\":[[0,\"\\n\"],[4,\"paper-dialog-content\",null,null,{\"statements\":[[0,\"      Download\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/socials/social-detail-view.hbs" } });
});
;define("vidya-frontend/templates/components/socials/social-list-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "LaUEvQpG", "block": "{\"symbols\":[\"card\",\"image\",\"image\",\"image\",\"menu\",\"content\",\"menu\",\"content\"],\"statements\":[[7,\"div\"],[9],[0,\"\\n\"],[4,\"paper-card\",null,[[\"class\"],[\"zero-mg social-shadow\"]],{\"statements\":[[4,\"if\",[[23,[\"item\",\"sharePost\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-row flex\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"layout-row flex\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"item\",\"shareuserinfo\",\"user_url\",\"web_url\"]]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"shareuserinfo\",\"user_url\",\"status\"]],\"success\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"shareuserinfo\",\"user_url\"]],\"profile\"],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-profile\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToProfiles\"]],[23,[\"item\",\"shareuserinfo\",\"userId\"]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"img\"],[12,\"src\",\"icon.png\"],[11,\"class\",\"social-profile\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToProfiles\"]],[23,[\"item\",\"shareuserinfo\",\"userId\"]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"          \"],[7,\"div\"],[11,\"class\",\"layout-column social-photo-text flex\"],[9],[0,\"\\n            \"],[7,\"p\"],[11,\"class\",\"social-profile-name\"],[9],[1,[23,[\"item\",\"shareuserinfo\",\"username\"]],false],[0,\" shared a post.\"],[10],[0,\"\\n            \"],[7,\"p\"],[11,\"class\",\"social-profile-time\"],[9],[1,[27,\"moment-from-now\",[[23,[\"item\",\"stamp\"]]],null],false],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"shareuserinfo\",\"userID\"]],[23,[\"currentid\"]]],null]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-end-center social-menu-align\"],[9],[0,\"\\n\"],[4,\"paper-menu\",null,[[\"isOpen\",\"position\"],[[23,[\"menuFourIsOpen\"]],\"target-right target\"]],{\"statements\":[[4,\"component\",[[22,7,[\"trigger\"]]],null,{\"statements\":[[4,\"paper-button\",null,[[\"onClick\",\"iconButton\"],[null,true]],{\"statements\":[[0,\"                  \"],[1,[27,\"paper-icon\",[\"more_vert\"],[[\"class\"],[\"md-menu-origin\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"component\",[[22,7,[\"content\"]]],[[\"class\",\"dense\"],[\"zero-pd menu-color\",true]],{\"statements\":[[0,\"                \"],[7,\"div\"],[11,\"class\",\"1\"],[9],[0,\"\\n\"],[4,\"component\",[[22,8,[\"menu-item\"]]],[[\"class\",\"onClick\"],[\"layout-row layout-align-center-start\",[27,\"action\",[[22,0,[]],[23,[\"editSocial\"]],[23,[\"item\",\"id\"]]],null]]],{\"statements\":[[0,\"                    \"],[1,[27,\"paper-icon\",[\"edit\"],null],false],[0,\"Edit\\n\"]],\"parameters\":[]},null],[0,\"                \"],[10],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"1\"],[9],[0,\"\\n\"],[4,\"component\",[[22,8,[\"menu-item\"]]],[[\"class\",\"onClick\"],[\"layout-row layout-align-center-start\",[27,\"action\",[[22,0,[]],[23,[\"deleteSocial\"]],[23,[\"item\"]]],null]]],{\"statements\":[[0,\"                    \"],[1,[27,\"paper-icon\",[\"delete_outline\"],null],false],[0,\"Delete\\n\"]],\"parameters\":[]},null],[0,\"                \"],[10],[0,\"\\n\"]],\"parameters\":[8]},null]],\"parameters\":[7]},null],[0,\"          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"item\",\"shareText\"]]],null,{\"statements\":[[0,\"        \"],[7,\"p\"],[11,\"class\",\"social-txt\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]],[23,[\"index\"]]]],[9],[0,\"\\n          \"],[1,[27,\"markdown-to-html\",[[23,[\"item\",\"shareText\"]]],null],false],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"    \"],[2,\" end of share \"],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-row flex\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-row flex\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"previous_state\"]],\"group\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"img\"],[12,\"src\",[23,[\"item\",\"group_img\",\"web_url\"]]],[11,\"class\",\"social-profile\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToGroups\"]],[23,[\"item\",\"userinfo\",\"userId\"]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"userinfo\",\"user_url\",\"status\"]],\"success\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"userinfo\",\"user_url\"]],\"profile\"],null]],[11,\"class\",\"social-profile\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToProfiles\"]],[23,[\"item\",\"userinfo\",\"userId\"]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"item\",\"userinfo\",\"user_url\",\"web_url\"]]],null,{\"statements\":[[0,\"          \"],[7,\"img\"],[12,\"src\",[27,\"component\",[[23,[\"item\",\"userinfo\",\"user_url\",\"web_url\"]],\"profile\"],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-profile\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[7,\"img\"],[12,\"src\",\"icon.png\"],[11,\"class\",\"social-profile\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToProfiles\"]],[23,[\"item\",\"userinfo\",\"userId\"]]]],[9],[10],[0,\"\\n        \"]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"        \"],[7,\"div\"],[11,\"class\",\"layout-column social-photo-text\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"previous_state\"]],\"group\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"p\"],[11,\"class\",\"social-profile-name\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToGroups\"]],[23,[\"item\",\"channel_id\"]]]],[9],[1,[23,[\"item\",\"userinfo\",\"channelname\"]],false],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"item\",\"sharePost\"]]],null,{\"statements\":[[0,\"              \"],[7,\"p\"],[11,\"class\",\"social-profile-name\"],[9],[1,[23,[\"item\",\"userinfo\",\"username\"]],false],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[7,\"p\"],[11,\"class\",\"social-profile-name\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToProfiles\"]],[23,[\"item\",\"userinfo\",\"userId\"]]]],[9],[1,[23,[\"item\",\"userinfo\",\"username\"]],false],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}],[4,\"if\",[[23,[\"item\",\"sharePost\"]]],null,{\"statements\":[[0,\"            \"],[7,\"p\"],[11,\"class\",\"social-profile-time\"],[9],[1,[27,\"moment-from-now\",[[23,[\"item\",\"shareStamp\"]]],null],false],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"p\"],[11,\"class\",\"social-profile-time\"],[9],[1,[27,\"moment-from-now\",[[23,[\"item\",\"stamp\"]]],null],false],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"],[4,\"if\",[[27,\"not\",[[23,[\"item\",\"sharePost\"]]],null]],null,{\"statements\":[[4,\"if\",[[27,\"or\",[[27,\"and\",[[27,\"or\",[[27,\"eq\",[[23,[\"item\",\"userinfo\",\"userId\"]],[23,[\"currentid\"]]],null],[27,\"eq\",[[23,[\"item\",\"userinfo\",\"userId\"]],[23,[\"userID\"]]],null]],null],[27,\"not\",[[23,[\"item\",\"ban\"]]],null]],null],[23,[\"isOwner\"]]],null]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-end-center social-menu-align\"],[9],[0,\"\\n\"],[4,\"paper-menu\",null,null,{\"statements\":[[4,\"component\",[[22,5,[\"trigger\"]]],null,{\"statements\":[[4,\"paper-button\",null,[[\"onClick\",\"iconButton\"],[null,true]],{\"statements\":[[0,\"                  \"],[1,[27,\"paper-icon\",[\"more_vert\"],[[\"class\"],[\"md-menu-origin\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"component\",[[22,5,[\"content\"]]],[[\"class\",\"dense\"],[\"zero-pd menu-color\",true]],{\"statements\":[[0,\"                \"],[7,\"div\"],[11,\"class\",\"2\"],[9],[0,\"\\n\"],[4,\"component\",[[22,6,[\"menu-item\"]]],[[\"class\",\"onClick\"],[\"layout-row layout-align-center-start\",[27,\"action\",[[22,0,[]],[23,[\"editSocial\"]],[23,[\"item\",\"id\"]]],null]]],{\"statements\":[[0,\"                    \"],[1,[27,\"paper-icon\",[\"edit\"],null],false],[0,\"Edit\\n\"]],\"parameters\":[]},null],[0,\"                \"],[10],[0,\"\\n                \"],[1,[21,\"paper-divider\"],false],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"2\"],[9],[0,\"\\n\"],[4,\"component\",[[22,6,[\"menu-item\"]]],[[\"class\",\"onClick\"],[\"layout-row layout-align-center-start\",[27,\"action\",[[22,0,[]],[23,[\"deleteSocial\"]],[23,[\"item\"]]],null]]],{\"statements\":[[0,\"                    \"],[1,[27,\"paper-icon\",[\"delete_outline\"],null],false],[0,\"Delete\\n\"]],\"parameters\":[]},null],[0,\"                \"],[10],[0,\"\\n\"]],\"parameters\":[6]},null]],\"parameters\":[5]},null],[0,\"          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n    \"],[2,\"start share post  \"],[0,\"\\n\"],[4,\"if\",[[23,[\"item\",\"sharePost\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[9],[0,\"\\n\"],[4,\"component\",[[22,1,[\"content\"]]],[[\"class\"],[\"social-post\"]],{\"statements\":[[0,\"          \"],[7,\"p\"],[11,\"class\",\"social-txt\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]],[23,[\"index\"]]]],[9],[0,\"\\n            \"],[1,[23,[\"item\",\"title\"]],false],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"item\",\"postImg\"]]],null,{\"statements\":[[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"img\"],[11,\"src\",\"circle.gif\"],[12,\"data-src\",[27,\"convert-url\",[[23,[\"item\",\"post_image\"]]],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-photo asyncImage\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]],[23,[\"index\"]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[9],[0,\"\\n\"],[0,\"              \"],[7,\"div\"],[11,\"class\",\"layout-column news-relative \"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"video-playbtn\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"fullScreen\",[23,[\"item\",\"id\"]],[23,[\"item\",\"post_image\",\"web_url\"]]]],[9],[0,\"\\n                  \"],[1,[27,\"paper-icon\",[\"play_circle_outline\"],[[\"size\",\"class\"],[40,\"play-icon-pos\"]]],false],[0,\"\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"img\"],[12,\"id\",[23,[\"item\",\"id\"]]],[11,\"src\",\"circle.gif\"],[12,\"data-src\",[27,\"convert-url\",[[23,[\"item\",\"post_image\"]]],null]],[11,\"class\",\"social-photo asyncImage\"],[11,\"alt\",\"\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]],[23,[\"index\"]]]],[9],[10],[0,\"\\n\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"voice\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"audio\"],[11,\"class\",\"social-audio\"],[11,\"controls\",\"\"],[9],[0,\"\\n              \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"post_image\",\"web_url\"]]],null]],[11,\"type\",\"audio/mp3\"],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}],[4,\"if\",[[27,\"is-empty\",[[23,[\"item\",\"postImg\",\"1\"]]],null]],null,{\"statements\":[],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-start-start social-sub-img \"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"item\",\"postImg\"]]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,4,[\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"                  \"],[7,\"img\"],[12,\"src\",[27,\"convert-img\",[[22,4,[]]],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-sub-photo\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,4,[\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"                  \"],[7,\"video\"],[11,\"class\",\"social-sub-video\"],[12,\"poster\",[27,\"convert-url\",[[22,4,[]]],null]],[9],[0,\"\\n                    \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[22,4,[\"web_url\"]]],null]],[11,\"type\",\"video/mp4\"],[9],[10],[0,\"\\n                  \"],[10],[0,\"\\n                \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[4]},null],[0,\"            \"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n      \"],[2,\"start CRS share post  \"],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"previous_state\"]],\"CRS\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[9],[0,\"\\n\"],[4,\"component\",[[22,1,[\"content\"]]],[[\"class\"],[\"social-post\"]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]],[23,[\"index\"]]]],[9],[0,\"\\n            \"],[7,\"p\"],[11,\"class\",\"social-txt\"],[9],[0,\"\\n              \"],[1,[23,[\"item\",\"summary\"]],false],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"item\",\"postImg\"]]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[9],[0,\"\\n\"],[0,\"              \"],[7,\"div\"],[11,\"class\",\"layout-column news-relative \"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"video-playbtn\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"fullScreen\",[23,[\"item\",\"id\"]],[23,[\"item\",\"post_image\",\"web_url\"]]]],[9],[0,\"\\n                  \"],[1,[27,\"paper-icon\",[\"play_circle_outline\"],[[\"size\",\"class\"],[40,\"play-icon-pos\"]]],false],[0,\"\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"img\"],[12,\"id\",[23,[\"item\",\"id\"]]],[11,\"src\",\"circle.gif\"],[12,\"data-src\",[27,\"convert-url\",[[23,[\"item\",\"post_image\"]]],null]],[11,\"class\",\"social-photo asyncImage\"],[11,\"alt\",\"\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]],[23,[\"index\"]]]],[9],[10],[0,\"\\n\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"voice\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"audio\"],[11,\"class\",\"social-audio\"],[11,\"controls\",\"\"],[11,\"controlsList\",\"nodownload\"],[9],[0,\"\\n              \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"post_image\",\"web_url\"]]],null]],[11,\"type\",\"audio/mp3\"],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]],[23,[\"index\"]]]],[9],[0,\"\\n              \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"post_image\"]]],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-photo\"],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}],[4,\"if\",[[27,\"is-empty\",[[23,[\"item\",\"postImg\",\"1\"]]],null]],null,{\"statements\":[],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-start-start social-sub-img \"],[9],[0,\"\\n\"],[4,\"each\",[[27,\"process-img\",[[23,[\"item\",\"postImg\"]],\"image\"],null]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,3,[\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"                  \"],[7,\"video\"],[11,\"class\",\"social-sub-video\"],[11,\"preload\",\"none\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,3,[\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"                  \"],[7,\"img\"],[12,\"src\",[27,\"convert-img\",[[22,3,[]]],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-sub-photo\"],[9],[10],[0,\"\\n                \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[3]},null],[0,\"            \"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n      \"],[2,\"star social post \"],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"\"],[9],[0,\"\\n\"],[4,\"component\",[[22,1,[\"content\"]]],[[\"class\"],[\"social-post\"]],{\"statements\":[[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]],[23,[\"index\"]]],[[\"preventDefault\"],[false]]],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"showAll\"]]],null,{\"statements\":[[0,\"               \"],[7,\"p\"],[12,\"id\",[21,\"index\"]],[11,\"class\",\"social-all-txt\"],[9],[0,\"\\n              \"],[1,[27,\"linkify\",[[23,[\"item\",\"summary\"]]],[[\"defaultScheme\",\"target\"],[\"http\",\"_blank\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"p\"],[12,\"id\",[21,\"index\"]],[11,\"class\",\"social-txt\"],[9],[0,\"\\n              \"],[1,[27,\"linkify\",[[23,[\"item\",\"summary\"]]],[[\"defaultScheme\",\"target\"],[\"http\",\"_blank\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"          \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"showAll\"]]],null,{\"statements\":[[0,\"             \"],[7,\"p\"],[11,\"class\",\"social-seemore\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"show\"]],[9],[0,\" See Less\"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"isOverflow\"]]],null,{\"statements\":[[0,\"            \"],[7,\"p\"],[11,\"class\",\"social-seemore\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"show\"]],[9],[0,\" See More \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[4,\"if\",[[23,[\"item\",\"postImg\"]]],null,{\"statements\":[[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"news-relative\"],[9],[0,\"\\n\"],[0,\"              \"],[7,\"div\"],[11,\"class\",\"layout-column video-playbtn\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"fullScreen\",[23,[\"item\",\"id\"]],[23,[\"item\",\"post_image\",\"web_url\"]]]],[9],[0,\"\\n                  \"],[1,[27,\"paper-icon\",[\"play_circle_outline\"],[[\"size\",\"class\"],[40,\"play-icon-pos\"]]],false],[0,\"\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"img\"],[12,\"id\",[23,[\"item\",\"id\"]]],[11,\"src\",\"circle.gif\"],[12,\"data-src\",[27,\"convert-url\",[[23,[\"item\",\"post_image\"]]],null]],[11,\"class\",\"social-photo asyncImage\"],[11,\"alt\",\"\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]],[23,[\"index\"]]]],[9],[10],[0,\"\\n\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"voice\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"audio\"],[11,\"class\",\"social-audio\"],[11,\"controls\",\"\"],[11,\"controlsList\",\"nodownload\"],[9],[0,\"\\n              \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"post_image\",\"web_url\"]]],null]],[11,\"type\",\"audio/mp3\"],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]],[23,[\"index\"]]]],[9],[0,\"\\n              \"],[7,\"img\"],[11,\"src\",\"circle.gif\"],[12,\"data-src\",[27,\"convert-url\",[[23,[\"item\",\"post_image\"]]],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-photo asyncImage\"],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"          \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-start-start social-sub-img \"],[9],[0,\"\\n\"],[4,\"each\",[[27,\"process-img\",[[23,[\"item\",\"postImg\"]],\"image\"],null]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"                \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[22,2,[]]],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-sub-photo\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"                    \"],[7,\"img\"],[12,\"id\",[22,2,[\"id\"]]],[11,\"src\",\"circle.gif\"],[12,\"data-src\",[27,\"convert-url\",[[22,2,[]]],null]],[11,\"class\",\"social-sub-photo asyncImage\"],[11,\"alt\",\"\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"fullScreen\",[22,2,[\"file_name\"]],[22,2,[\"web_url\"]]]],[9],[10],[0,\"\\n\"],[0,\"              \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[2]},null],[0,\"            \"],[7,\"div\"],[11,\"class\",\"count-align\"],[9],[0,\"\\n              \"],[7,\"span\"],[11,\"class\",\"layout-row layout-align-center-start\"],[9],[1,[27,\"process-img\",[[23,[\"item\",\"postImg\"]],\"text\"],null],false],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n      \"],[10],[0,\"\\n    \"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"    \"],[7,\"div\"],[11,\"class\",\"layout-row comment-shadow\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-center-start flex\"],[9],[0,\"\\n      \"],[7,\"p\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"shareSocial\"]],[23,[\"item\",\"id\"]]]],[9],[0,\" Share \"],[10],[0,\"\\n\"],[4,\"paper-button\",null,[[\"class\",\"iconButton\",\"onClick\"],[\"flex social-icons-outside\",true,[27,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]],[23,[\"index\"]]],null]]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-end-start cmt-icon\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"comments\"]],1],null]],null,{\"statements\":[[0,\"              \"],[1,[27,\"paper-icon\",[\"comments\"],null],false],[1,[23,[\"item\",\"comments\"]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[1,[27,\"paper-icon\",[\"comment\"],null],false],[1,[23,[\"item\",\"comments\"]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/socials/social-list-card.hbs" } });
});
;define("vidya-frontend/templates/components/spinner-circle", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "SUsjvvT0", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"sk-fading-circle\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"sk-circle1 sk-circle\"],[9],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"sk-circle2 sk-circle\"],[9],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"sk-circle3 sk-circle\"],[9],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"sk-circle4 sk-circle\"],[9],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"sk-circle5 sk-circle\"],[9],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"sk-circle6 sk-circle\"],[9],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"sk-circle7 sk-circle\"],[9],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"sk-circle8 sk-circle\"],[9],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"sk-circle9 sk-circle\"],[9],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"sk-circle10 sk-circle\"],[9],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"sk-circle11 sk-circle\"],[9],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"sk-circle12 sk-circle\"],[9],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/spinner-circle.hbs" } });
});
;define("vidya-frontend/templates/components/toolbar-noti", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "VrKCffv6", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"relative\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"routeToNoti\"]]]],[9],[0,\"\\n\"],[4,\"paper-button\",null,[[\"iconButton\",\"primary\",\"onClick\"],[true,true,[27,\"action\",[[22,0,[]],[23,[\"routeToNoti\"]]],null]]],{\"statements\":[[0,\"    \"],[1,[27,\"paper-icon\",[\"notifications_none\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[27,\"gt\",[[23,[\"count\",\"length\"]],0],null]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"noti-btn\"],[9],[0,\"\\n  \"],[1,[23,[\"count\",\"length\"]],false],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/toolbar-noti.hbs" } });
});
;define("vidya-frontend/templates/components/under-development-page", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Lk/1b4iE", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"layout-column layout-align-space-around-center flex\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"layout-column layout-column layout-align-end-center flex\"],[9],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"develop-head\"],[9],[0,\"This Page is Under\"],[10],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"develop-head\"],[9],[0,\"Constration\"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"layout-column \"],[9],[0,\"\\n    \"],[7,\"img\"],[11,\"src\",\"developapp.png\"],[11,\"class\",\"develop-photo\"],[11,\"alt\",\"\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-start-center flex\"],[9],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"develop-head\"],[9],[0,\"Comming Soon\"],[10],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"develop-head\"],[9],[0,\"Thank You\"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[2,\" <div class=\\\"layout-column layout-align-space-between-center\\\">\\n  <span>lwin</span>\\n  <span>Moe</span>\\n  <span>Aung</span>\\n</div> \"],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/under-development-page.hbs" } });
});
;define("vidya-frontend/templates/components/user/chat-box", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "fhH9RzC3", "block": "{\"symbols\":[\"item\"],\"statements\":[[4,\"paper-list\",null,[[\"class\"],[\"flex layout-column\"]],{\"statements\":[[4,\"each\",[[23,[\"messages\"]]],null,{\"statements\":[[0,\"      \"],[1,[27,\"user/chat-card\",null,[[\"item\",\"deleteComment\",\"currentid\",\"class\",\"role\",\"store\",\"scrollToBottom\",\"self\"],[[22,1,[]],[27,\"action\",[[22,0,[]],[23,[\"deleteComment\"]]],null],[23,[\"currentid\"]],\"myanmar-font chat-line-height\",[23,[\"role\"]],[23,[\"store\"]],[23,[\"scrollToBottom\"]],false]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/user/chat-box.hbs" } });
});
;define("vidya-frontend/templates/components/user/chat-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mVjN3R7b", "block": "{\"symbols\":[\"image\",\"photoswipe\",\"item\",\"index\",\"image\",\"photoswipe\",\"item\",\"index\"],\"statements\":[[4,\"paper-item\",null,[[\"class\"],[\"layout-row mbt-5\"]],{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"userid\"]],[23,[\"currentid\"]]],null]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-end-end flex\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\" flex user-chat-text-mg outgoing-message chat-detail-txt\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-space-between-center\"],[9],[0,\"\\n\"],[0,\"          \"],[1,[27,\"linkify\",[[23,[\"item\",\"message\"]]],[[\"class\"],[\"user-chat-text text-aline break-text\"]]],false],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"item\",\"img_url\"]]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-start-end social-sub-img \"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"item\",\"img_url\"]]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,5,[\"type\"]],\"image\"],null]],null,{\"statements\":[[4,\"photo-swipe\",null,[[\"shareEl\",\"items\",\"history\"],[false,[27,\"convert-data\",[[22,5,[]]],null],false]],{\"statements\":[[4,\"each\",[[27,\"convert-data\",[[22,5,[]]],null]],null,{\"statements\":[[0,\"                  \"],[7,\"img\"],[12,\"src\",[22,7,[\"generate_src\"]]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"eagle-social-photo\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[22,6,[\"actions\",\"open\"]],[27,\"hash\",null,[[\"index\"],[[22,8,[]]]]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[7,8]},null]],\"parameters\":[6]},null]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,5,[\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"                 \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[22,5,[]]],null]],[11,\"class\",\"social-video\"],[9],[10],[0,\"\\n\"],[0,\"                \"],[7,\"div\"],[11,\"class\",\"eagle-playbtn-out\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"fullScreen\",[22,5,[\"file_name\"]],[22,5,[\"web_url\"]]]],[9],[0,\"\\n                  \"],[1,[27,\"paper-icon\",[\"play_circle_outline\"],[[\"size\"],[40]]],false],[0,\"\\n                \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,5,[\"type\"]],\"voice\"],null]],null,{\"statements\":[[0,\"                \"],[7,\"audio\"],[11,\"class\",\"social-audio\"],[11,\"controls\",\"\"],[11,\"controlsList\",\"nodownload\"],[9],[0,\"\\n                  \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[22,5,[\"web_url\"]]],null]],[11,\"type\",\"audio/mp3\"],[9],[10],[0,\"\\n                \"],[10],[0,\"\\n              \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[5]},null],[0,\"          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-column \"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"userinfo\",\"user_url\",\"status\"]],\"success\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"userinfo\",\"user_url\"]]],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-profile\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"userinfo\",\"user_url\"]]],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-profile\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"layout-column \"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"userinfo\",\"user_url\",\"status\"]],\"success\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"userinfo\",\"user_url\"]]],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-profile\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"userinfo\",\"user_url\"]]],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-profile\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-start-start\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\" flex user-chat-text-mg incoming-message chat-detail-txt\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"item\",\"img_url\"]]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-start-start social-sub-img \"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"item\",\"img_url\"]]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,1,[\"type\"]],\"image\"],null]],null,{\"statements\":[[4,\"photo-swipe\",null,[[\"shareEl\",\"items\",\"history\"],[false,[27,\"convert-data\",[[22,1,[]]],null],false]],{\"statements\":[[4,\"each\",[[27,\"convert-data\",[[22,1,[]]],null]],null,{\"statements\":[[0,\"                  \"],[7,\"img\"],[12,\"src\",[22,3,[\"src\"]]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"eagle-social-photo\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[22,2,[\"actions\",\"open\"]],[27,\"hash\",null,[[\"index\"],[[22,4,[]]]]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[3,4]},null]],\"parameters\":[2]},null]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,1,[\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"                 \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[22,1,[]]],null]],[11,\"class\",\"social-video\"],[9],[10],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"layout-column news-relative \"],[9],[0,\"\\n                  \"],[7,\"div\"],[11,\"class\",\"eagle-playbtn-in\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"fullScreen\",[22,1,[\"file_name\"]],[22,1,[\"web_url\"]]]],[9],[0,\"\\n                    \"],[1,[27,\"paper-icon\",[\"play_circle_outline\"],[[\"size\"],[40]]],false],[0,\"\\n                  \"],[10],[0,\"\\n                \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,1,[\"type\"]],\"voice\"],null]],null,{\"statements\":[[0,\"                \"],[7,\"audio\"],[11,\"class\",\"social-audio\"],[11,\"controls\",\"\"],[11,\"controlsList\",\"nodownload\"],[9],[0,\"\\n                  \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[22,1,[\"web_url\"]]],null]],[11,\"type\",\"audio/mp3\"],[9],[10],[0,\"\\n                \"],[10],[0,\"\\n              \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[1]},null],[0,\"          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[1,[27,\"linkify\",[[23,[\"item\",\"message\"]]],[[\"defaultScheme\",\"class\"],[\"http\",\"user-chat-text break-text\"]]],false],[0,\"\\n\\n      \"],[10],[0,\"\\n\"],[0,\"    \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[7,\"div\"],[11,\"class\",\"layout-row layout-align-center-end\"],[9],[0,\"\\n  \"],[7,\"span\"],[11,\"class\",\"chat-time\"],[9],[1,[27,\"moment-from-now\",[[23,[\"item\",\"stamp\"]]],[[\"interval\"],[60000]]],false],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/user/chat-card.hbs" } });
});
;define("vidya-frontend/templates/components/user/chat-container", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hqunJdXM", "block": "{\"symbols\":[\"item\"],\"statements\":[[4,\"paper-content\",null,[[\"class\",\"id\"],[\"black-bkg flex layout-column md-whiteframe-z1\",\"chatscroll\"]],{\"statements\":[[0,\"  \"],[1,[27,\"user/chat-box\",null,[[\"messages\",\"scrollPos\",\"class\",\"deleteComment\",\"currentid\",\"store\",\"channel_id\",\"scrollToBottom\",\"requestMedia\"],[[23,[\"messages\"]],[23,[\"scrollPos\"]],\"layout-row flex-auto\",[27,\"action\",[[22,0,[]],[23,[\"deleteComment\"]]],null],[23,[\"currentid\"]],[23,[\"store\"]],[23,[\"channel_id\"]],[23,[\"scrollToBottom\"]],[23,[\"requestMedia\"]]]]],false],[0,\"\\n\"],[4,\"if\",[[23,[\"openDialog\"]]],null,{\"statements\":[[4,\"paper-dialog\",null,[[\"class\",\"onClose\",\"clickOutsideToClose\"],[\"flex-50\",[27,\"action\",[[22,0,[]],\"closeDialogWithParent\",\"cancel\"],null],true]],{\"statements\":[[0,\"      \"],[7,\"form\"],[9],[0,\"\\n\"],[4,\"paper-toolbar\",null,null,{\"statements\":[[4,\"paper-toolbar-tools\",null,null,{\"statements\":[[0,\"            \"],[7,\"h2\"],[9],[0,\"Warning\"],[10],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n            \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"closeDialogWithParent\",\"cancel\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",null,[[\"icon\"],[\"close\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"paper-dialog-content\",null,null,{\"statements\":[[0,\"          \"],[7,\"p\"],[9],[0,\"\\n            Would you like to cancel the upload processes?\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"paper-dialog-actions\",null,[[\"class\"],[\"layout-row\"]],{\"statements\":[[0,\"          \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"closeDialogWithParent\",\"cancel\"],null]]],{\"statements\":[[0,\"Cancel\"]],\"parameters\":[]},null],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"ok\"],null]]],{\"statements\":[[0,\"OK\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[1,[21,\"paper-divider\"],false],[0,\"\\n\"],[4,\"if\",[[23,[\"imgDisplay\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"layout-row chat-grid-container  relative\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"imgDisplay\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"relative social-grid-item\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[22,1,[\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"img\"],[12,\"src\",[27,\"convert-img\",[[22,1,[]]],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-upload-media\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,1,[\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"video\"],[11,\"class\",\"social-upload-media\"],[11,\"controls\",\"\"],[9],[0,\"\\n            \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[22,1,[\"web_url\"]]],null]],[11,\"type\",\"video/mp4\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[7,\"audio\"],[11,\"class\",\"social-upload-media\"],[11,\"controls\",\"\"],[11,\"controlsList\",\"nodownload\"],[9],[0,\"\\n            \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[22,1,[\"web_url\"]]],null]],[11,\"type\",\"audio/mpeg\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"        \"],[4,\"paper-button\",null,[[\"class\",\"iconButton\",\"onClick\"],[\"clear-button\",true,[27,\"action\",[[22,0,[]],\"deleteImg\",[22,1,[]]],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"clear\"],null],false]],\"parameters\":[]},null],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[1,[21,\"paper-divider\"],false],[0,\"\\n\"],[4,\"if\",[[23,[\"chatAddon\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"layout-row brown-bkg\"],[9],[0,\"\\n\"],[4,\"x-file-input\",null,[[\"class\",\"multiple\",\"action\"],[\"btn-align\",false,[27,\"action\",[[22,0,[]],\"selectImg\"],null]]],{\"statements\":[[4,\"paper-button\",null,[[\"iconButton\"],[true]],{\"statements\":[[0,\"        \"],[1,[27,\"paper-icon\",[\"cloud_upload\"],[[\"class\"],[\"md-menu-align-target\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"    \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"selectCamera\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"camera\"],[[\"class\"],[\"md-menu-align-target\"]]],false]],\"parameters\":[]},null],[0,\"\\n    \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"selectVideo\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"video_call\"],[[\"class\"],[\"md-menu-align-target\"]]],false]],\"parameters\":[]},null],[0,\"\\n    \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"getVoice\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"record_voice_over\"],[[\"class\"],[\"md-menu-align-target\"]]],false]],\"parameters\":[]},null],[0,\"\\n  \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},null],[7,\"span\"],[11,\"class\",\"border-shadow\"],[9],[10],[0,\"\\n\"],[4,\"paper-content\",null,[[\"class\"],[\"black-bkg\"]],{\"statements\":[[4,\"if\",[[23,[\"progressUpload\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"flex progress-margin\"],[9],[0,\"\\n      \"],[1,[27,\"paper-progress-linear\",null,[[\"value\"],[[23,[\"progressPercentage\"]]]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-center-center\"],[9],[1,[21,\"progressPercentage\"],false],[0,\" %\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[7,\"div\"],[11,\"class\",\"layout-row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-center-start\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"chatAddon\"]]],null,{\"statements\":[[0,\"        \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"chatMenuoff\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"add\"],null],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"chatMenu\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"add\"],null],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"flex input-size\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"scrollBottom\"]],[9],[0,\"\\n      \"],[1,[27,\"paper-input\",null,[[\"class\",\"textarea\",\"block\",\"rows\",\"value\",\"hideAllMessages\",\"label\",\"onChange\",\"keyDown\"],[\"\",true,false,1,[23,[\"chat\"]],true,\"Type somethings\",[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"chat\"]]],null]],null],[27,\"action\",[[22,0,[]],\"keyReceived\"],null]]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-start-end\"],[9],[0,\"\\n\"],[4,\"paper-button\",null,[[\"iconButton\",\"class\",\"onClick\"],[true,\"\",[27,\"action\",[[22,0,[]],\"handleChat\"],null]]],{\"statements\":[[0,\"        \"],[1,[27,\"paper-icon\",[\"send\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/user/chat-container.hbs" } });
});
;define("vidya-frontend/templates/components/user/chat-list-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Omd85wwr", "block": "{\"symbols\":[\"controls\"],\"statements\":[[4,\"paper-list\",null,[[\"class\"],[\"\"]],{\"statements\":[[4,\"paper-item\",null,null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"userinfo\",\"userId\"]],[23,[\"isSelf\"]]],null]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"otherinfo\",\"status\"]],\"Active\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"led-green\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"userinfo\",\"status\"]],\"Active\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"led-green\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"    \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-space-between-center\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"type\"]],\"ChatGroup\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"otherinfo\",\"user_url\"]]],null]],[11,\"class\",\"chat-img image-fit\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToChat\"]],[23,[\"item\",\"id\"]],[23,[\"item\",\"otherinfo\",\"user_url\"]],[23,[\"item\",\"otherinfo\",\"username\"]],[23,[\"item\",\"type\"]],[23,[\"item\",\"channelname\"]],[23,[\"item\",\"userinfo\"]],[23,[\"item\",\"userlist\"]]]],[9],[10],[0,\"\\n        \"],[7,\"p\"],[11,\"class\",\"chat-profile-name\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToChat\"]],[23,[\"item\",\"id\"]],[23,[\"item\",\"otherinfo\",\"user_url\"]],[23,[\"item\",\"otherinfo\",\"username\"]],[23,[\"item\",\"type\"]],[23,[\"item\",\"channelname\"]],[23,[\"item\",\"userinfo\"]],[23,[\"item\",\"userlist\"]]]],[9],[1,[23,[\"item\",\"channelname\"]],false],[0,\" \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"userinfo\",\"userId\"]],[23,[\"isSelf\"]]],null]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"otherinfo\",\"user_url\",\"status\"]],\"success\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"otherinfo\",\"user_url\"]]],null]],[11,\"class\",\"chat-img image-fit\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToChat\"]],[23,[\"item\",\"id\"]],[23,[\"item\",\"otherinfo\",\"user_url\"]],[23,[\"item\",\"otherinfo\",\"username\"]],[23,[\"item\",\"type\"]],[23,[\"item\",\"channelname\"]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"otherinfo\",\"user_url\"]]],null]],[11,\"class\",\"chat-img image-fit\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToChat\"]],[23,[\"item\",\"id\"]],[23,[\"item\",\"otherinfo\",\"user_url\"]],[23,[\"item\",\"otherinfo\",\"username\"]],[23,[\"item\",\"type\"]],[23,[\"item\",\"channelname\"]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"          \"],[7,\"p\"],[11,\"class\",\"chat-profile-name\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToChat\"]],[23,[\"item\",\"id\"]],[23,[\"item\",\"otherinfo\",\"user_url\"]],[23,[\"item\",\"otherinfo\",\"username\"]],[23,[\"item\",\"type\"]],[23,[\"item\",\"channelname\"]]]],[9],[1,[23,[\"item\",\"otherinfo\",\"username\"]],false],[0,\" \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"userinfo\",\"user_url\",\"status\"]],\"success\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"userinfo\",\"user_url\"]]],null]],[11,\"class\",\"chat-img image-fit\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToChat\"]],[23,[\"item\",\"id\"]],[23,[\"item\",\"userinfo\",\"user_url\"]],[23,[\"item\",\"userinfo\",\"username\"]],[23,[\"item\",\"type\"]],[23,[\"item\",\"channelname\"]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"userinfo\",\"user_url\"]]],null]],[11,\"class\",\"chat-img image-fit\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToChat\"]],[23,[\"item\",\"id\"]],[23,[\"item\",\"userinfo\",\"user_url\"]],[23,[\"item\",\"userinfo\",\"username\"]],[23,[\"item\",\"type\"]],[23,[\"item\",\"channelname\"]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"          \"],[7,\"p\"],[11,\"class\",\"chat-profile-name\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToChat\"]],[23,[\"item\",\"id\"]],[23,[\"item\",\"userinfo\",\"user_url\"]],[23,[\"item\",\"userinfo\",\"username\"]],[23,[\"item\",\"type\"]],[23,[\"item\",\"channelname\"]]]],[9],[1,[23,[\"item\",\"userinfo\",\"username\"]],false],[0,\" \"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/user/chat-list-card.hbs" } });
});
;define("vidya-frontend/templates/components/user/fullscreen-img", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "JY8L7Y8C", "block": "{\"symbols\":[\"&default\"],\"statements\":[[14,1]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/user/fullscreen-img.hbs" } });
});
;define("vidya-frontend/templates/components/user/group-list-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "iYDDELZr", "block": "{\"symbols\":[\"data\"],\"statements\":[[7,\"div\"],[11,\"class\",\"group-list-align\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToChat\"]],[23,[\"item\",\"id\"]],[23,[\"item\",\"otherinfo\",\"user_url\"]],[23,[\"item\",\"otherinfo\",\"username\"]],[23,[\"item\",\"type\"]],[23,[\"item\",\"channelname\"]],[23,[\"item\",\"userinfo\"]],[23,[\"item\",\"userlist\"]]]],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"group-grid-width\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"circle-container-group\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"item\",\"groupuserlist\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"circle-round\"],[9],[0,\"\\n          \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[22,1,[\"user_url\"]]],null]],[11,\"class\",\"group-images-detail\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"p\"],[11,\"class\",\"chat-group-header-name\"],[9],[1,[23,[\"item\",\"channelname\"]],false],[10],[0,\"\\n  \"],[7,\"p\"],[11,\"class\",\"chat-group-member-count\"],[9],[1,[23,[\"item\",\"userCount\"]],false],[0,\" members\"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/user/group-list-card.hbs" } });
});
;define("vidya-frontend/templates/components/user/group-pic", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6IxbYkcI", "block": "{\"symbols\":[\"model\",\"photoswipe\",\"item\",\"index\",\"photoswipe\",\"item\",\"index\",\"menu\",\"content\",\"photoswipe\"],\"statements\":[[4,\"each\",[[23,[\"profileInfo\"]]],null,{\"statements\":[[7,\"div\"],[11,\"class\",\"layout-column  \"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"relative\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-start-center relative \"],[9],[0,\"   \\n              \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-end-center\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"group-profile-align\"],[9],[0,\"\\n                        \"],[7,\"p\"],[11,\"class\",\"group-profile-name\"],[9],[1,[22,1,[\"channelname\"]],false],[10],[0,\"\\n                \"],[10],[0,\"\\n                \\n              \"],[10],[0,\" \\n         \"],[7,\"div\"],[11,\"class\",\"group-img-position\"],[9],[0,\"    \\n\"],[4,\"photo-swipe\",null,[[\"shareEl\",\"items\",\"onImageLoadComplete\",\"onClose\",\"history\"],[false,[27,\"convert-data\",[[22,1,[\"postImg\"]]],null],[27,\"action\",[[22,0,[]],\"open\"],null],[27,\"action\",[[22,0,[]],\"close\"],null],false]],{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,1,[\"channelImg\",\"status\"]],\"success\"],null]],null,{\"statements\":[[0,\"                    \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[22,1,[\"channelImg\",\"web_url\"]]],null]],[11,\"class\",\"group-profile-photo\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[22,10,[\"actions\",\"open\"]],[27,\"hash\",null,[[\"index\"],[0]]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                    \"],[7,\"img\"],[12,\"src\",[22,1,[\"channelImg\",\"web_url\"]]],[11,\"class\",\"group-profile-photo\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[22,10,[\"actions\",\"open\"]],[27,\"hash\",null,[[\"index\"],[0]]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[10]},null],[4,\"if\",[[23,[\"isOwner\"]]],null,{\"statements\":[[0,\"                    \"],[7,\"div\"],[11,\"class\",\"eagle-groupname-edit\"],[9],[0,\"\\n                      \"],[7,\"div\"],[11,\"class\",\"profile-edit-btn\"],[9],[0,\"\\n\"],[4,\"x-file-input\",null,[[\"action\"],[[27,\"action\",[[22,0,[]],\"uploadPicture\"],null]]],{\"statements\":[[0,\"                            \"],[1,[27,\"paper-icon\",[\"edit\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                      \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"               \\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"mb-25\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"absolute info-position\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"isOwner\"]]],null,{\"statements\":[[4,\"paper-menu\",null,[[\"isOpen\",\"position\"],[[23,[\"menuFourIsOpen\"]],\"target-right target\"]],{\"statements\":[[4,\"component\",[[22,8,[\"trigger\"]]],null,{\"statements\":[[4,\"paper-button\",null,[[\"onClick\",\"iconButton\"],[null,true]],{\"statements\":[[0,\"                            \"],[1,[27,\"paper-icon\",[\"edit\"],[[\"class\"],[\"md-menu-origin\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"                         \\n\"],[4,\"component\",[[22,8,[\"content\"]]],[[\"class\",\"dense\"],[\"zero-pd menu-color\",true]],{\"statements\":[[0,\"                            \"],[7,\"div\"],[11,\"class\",\"1\"],[9],[0,\"\\n\"],[4,\"component\",[[22,9,[\"menu-item\"]]],[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"displayInfo\"],null]]],{\"statements\":[[0,\"                                   Upload cover\\n\"]],\"parameters\":[]},null],[0,\"                                \"],[10],[0,\"\\n                                \"],[7,\"div\"],[11,\"class\",\"1\"],[9],[0,\"\\n\"],[4,\"component\",[[22,9,[\"menu-item\"]]],[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"groupName\"],null]]],{\"statements\":[[0,\"                                    Change Name\\n\"]],\"parameters\":[]},null],[0,\"                                \"],[10],[0,\"\\n\"]],\"parameters\":[9]},null],[0,\"                      \\n\"]],\"parameters\":[8]},null],[0,\"                    \\n\"]],\"parameters\":[]},null],[0,\"            \"],[10],[0,\"\\n         \\n\"],[4,\"if\",[[27,\"is-empty\",[[22,1,[\"back_photo\",\"0\"]]],null]],null,{\"statements\":[[4,\"photo-swipe\",null,[[\"shareEl\",\"items\",\"history\",\"onImageLoadComplete\",\"onClose\"],[false,[23,[\"coverPhoto\"]],false,[27,\"action\",[[22,0,[]],\"open\"],null],[27,\"action\",[[22,0,[]],\"close\"],null]]],{\"statements\":[[4,\"each\",[[23,[\"coverPhoto\"]]],null,{\"statements\":[[0,\"              \"],[7,\"img\"],[12,\"src\",[22,6,[\"src\"]]],[11,\"class\",\"user-profile-cover profile-btn-margin\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[22,5,[\"actions\",\"open\"]],[27,\"hash\",null,[[\"index\"],[0]]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[6,7]},null]],\"parameters\":[5]},null]],\"parameters\":[]},{\"statements\":[[4,\"photo-swipe\",null,[[\"shareEl\",\"items\",\"history\",\"onImageLoadComplete\",\"onClose\"],[false,[22,1,[\"back_photo\"]],false,[27,\"action\",[[22,0,[]],\"open\"],null],[27,\"action\",[[22,0,[]],\"close\"],null]]],{\"statements\":[[4,\"each\",[[22,1,[\"back_photo\"]]],null,{\"statements\":[[0,\"            \"],[7,\"img\"],[12,\"src\",[22,3,[\"src\"]]],[11,\"class\",\"user-profile-cover profile-btn-margin\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[22,2,[\"actions\",\"open\"]],[27,\"hash\",null,[[\"index\"],[[22,4,[]]]]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[3,4]},null]],\"parameters\":[2]},null]],\"parameters\":[]}],[0,\"          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \\n    \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"nameCheck\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"white-edit\"],[9],[0,\"\\n          \"],[1,[27,\"paper-input\",null,[[\"class\",\"value\",\"keyDown\",\"onChange\"],[\"layout-row layout-align-center-center\",[23,[\"name\"]],[27,\"action\",[[22,0,[]],\"keyDownReceived\"],null],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"name\"]]],null]],null]]]],false],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"cover-dialog\",null,[[\"showDialog\",\"item\",\"store\",\"coverPhoto\",\"group\",\"channelid\"],[[23,[\"showDialog\"]],[23,[\"item\"]],[23,[\"store\"]],[23,[\"coverPhoto\"]],\"group\",[22,1,[\"id\"]]]],{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/user/group-pic.hbs" } });
});
;define("vidya-frontend/templates/components/user/profile-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Hx6btwHp", "block": "{\"symbols\":[\"card\",\"photoswipe\",\"image\",\"item\",\"index\",\"item\",\"index\",\"image\"],\"statements\":[[7,\"div\"],[9],[0,\"\\n\"],[4,\"paper-card\",null,[[\"class\"],[\"zero-mg social-shadow\"]],{\"statements\":[[4,\"if\",[[23,[\"item\",\"sharePost\"]]],null,{\"statements\":[[0,\"     \"],[7,\"div\"],[11,\"class\",\"layout-row  \"],[9],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"item\",\"shareuserinfo\",\"user_url\",\"web_url\"]]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"shareuserinfo\",\"user_url\",\"status\"]],\"success\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"shareuserinfo\",\"user_url\"]]],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-profile\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"shareuserinfo\",\"user_url\"]]],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-profile\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[\"/group.png\"],null]],[11,\"class\",\"social-profile\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[7,\"div\"],[11,\"class\",\"layout-column social-photo-text\"],[9],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"social-profile-name\"],[9],[1,[23,[\"item\",\"shareuserinfo\",\"username\"]],false],[0,\" shared a post.\"],[10],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"social-profile-time\"],[9],[1,[27,\"moment-from-now\",[[23,[\"item\",\"stamp\"]]],null],false],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"item\",\"shareText\"]]],null,{\"statements\":[[7,\"p\"],[11,\"class\",\"social-txt\"],[9],[0,\"\\n  \"],[1,[27,\"markdown-to-html\",[[23,[\"item\",\"shareText\"]]],null],false],[0,\"\\n\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[1,[21,\"paper-divider\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[7,\"div\"],[11,\"class\",\"layout-row  \"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"item\",\"userinfo\",\"user_url\",\"web_url\"]]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"userinfo\",\"user_url\",\"status\"]],\"success\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"userinfo\",\"user_url\"]]],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-profile\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"userinfo\",\"user_url\"]]],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-profile\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[\"/group.png\"],null]],[11,\"class\",\"social-profile\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-column social-photo-text\"],[9],[0,\"\\n        \"],[7,\"p\"],[11,\"class\",\"social-profile-name\"],[9],[1,[23,[\"item\",\"userinfo\",\"username\"]],false],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"item\",\"sharePost\"]]],null,{\"statements\":[[0,\"        \"],[7,\"p\"],[11,\"class\",\"social-profile-time\"],[9],[1,[27,\"moment-from-now\",[[23,[\"item\",\"shareStamp\"]]],null],false],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[7,\"p\"],[11,\"class\",\"social-profile-time\"],[9],[1,[27,\"moment-from-now\",[[23,[\"item\",\"stamp\"]]],null],false],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[1,[21,\"paper-divider\"],false],[0,\"\\n\"],[4,\"if\",[[23,[\"item\",\"sharePost\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"item\",\"postImg\"]]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"          \"],[1,[27,\"component\",[[22,1,[\"image\"]]],[[\"src\",\"onerror\",\"class\"],[[27,\"convert-img\",[[23,[\"item\",\"post_image\",\"web_url\"]]],null],\"this.src='no_image.jpg'\",\"social-photo\"]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"video\"],[11,\"class\",\"social-video\"],[11,\"preload\",\"auto\"],[11,\"controls\",\"\"],[9],[0,\"\\n            \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"post_image\",\"web_url\"]]],null]],[11,\"type\",\"video/mp4\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"audio\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"audio\"],[11,\"class\",\"social-audio\"],[11,\"controls\",\"\"],[9],[0,\"\\n              \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"post_image\",\"web_url\"]]],null]],[11,\"type\",\"audio/mp3\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"          \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-center-start social-sub-img \"],[9],[0,\"\\n\"],[4,\"each\",[[27,\"process-img\",[[23,[\"item\",\"postImg\"]],\"image\"],null]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,8,[\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"img\"],[12,\"src\",[27,\"convert-img\",[[22,8,[]]],null]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-sub-photo\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,8,[\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"video\"],[11,\"class\",\"social-sub-video\"],[11,\"controls\",\"\"],[9],[0,\"\\n            \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[22,8,[\"web_url\"]]],null]],[11,\"type\",\"video/mp4\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[8]},null],[0,\"            \"],[7,\"p\"],[11,\"class\",\"layout-row layout-align-center-start\"],[9],[1,[27,\"process-img\",[[23,[\"item\",\"postImg\"]],\"text\"],null],false],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[1,[21,\"paper-divider\"],false],[0,\"\\n\"],[4,\"component\",[[22,1,[\"content\"]]],[[\"class\"],[\"social-post\"]],{\"statements\":[[0,\"          \"],[7,\"p\"],[11,\"class\",\"social-txt\"],[9],[0,\"\\n            \"],[1,[27,\"markdown-to-html\",[[23,[\"item\",\"summary\"]]],null],false],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"item\",\"postImg\"]]],null,{\"statements\":[[4,\"photo-swipe\",null,[[\"shareEl\",\"items\",\"history\"],[false,[27,\"convert-data\",[[23,[\"item\",\"postImg\"]]],null],false]],{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"video\"],[11,\"class\",\"social-video\"],[11,\"controls\",\"\"],[9],[0,\"\\n            \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"post_image\",\"web_url\"]]],null]],[11,\"type\",\"video/mp4\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"audio\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"audio\"],[11,\"class\",\"social-audio\"],[11,\"controls\",\"\"],[9],[0,\"\\n              \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"post_image\",\"web_url\"]]],null]],[11,\"type\",\"audio/mp3\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"post_image\",\"type\"]],\"image\"],null]],null,{\"statements\":[[4,\"each\",[[27,\"convert-data\",[[23,[\"item\",\"post_image\"]]],null]],null,{\"statements\":[[0,\"              \"],[7,\"img\"],[12,\"src\",[22,6,[\"generate_src\"]]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-photo\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[22,2,[\"actions\",\"open\"]],[27,\"hash\",null,[[\"index\"],[[22,7,[]]]]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[6,7]},null],[0,\"        \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"            \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-center-start social-sub-img \"],[9],[0,\"\\n\"],[4,\"each\",[[27,\"process-img\",[[23,[\"item\",\"postImg\"]],\"image\"],null]],null,{\"statements\":[[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[22,3,[\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"video\"],[11,\"class\",\"social-sub-video\"],[11,\"preload\",\"auto\"],[9],[0,\"\\n              \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[22,3,[\"web_url\"]]],null]],[11,\"type\",\"video/mp4\"],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,3,[\"type\"]],\"image\"],null]],null,{\"statements\":[[4,\"each\",[[27,\"convert-data\",[[22,3,[]]],null]],null,{\"statements\":[[0,\"            \"],[7,\"img\"],[12,\"src\",[22,4,[\"generate_src\"]]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"social-sub-photo\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[22,2,[\"actions\",\"open\"]],[27,\"hash\",null,[[\"index\"],[[22,5,[]]]]]]],[9],[10],[0,\"\\n\\n\"]],\"parameters\":[4,5]},null],[0,\"              \"]],\"parameters\":[]},null]],\"parameters\":[]}]],\"parameters\":[3]},null],[0,\"              \"],[7,\"p\"],[11,\"class\",\"layout-row layout-align-center-start\"],[9],[1,[27,\"process-img\",[[23,[\"item\",\"postImg\"]],\"text\"],null],false],[10],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[]},null],[0,\"        \"],[1,[21,\"paper-divider\"],false],[0,\"\\n\"],[4,\"component\",[[22,1,[\"content\"]]],[[\"class\"],[\"social-post\"]],{\"statements\":[[0,\"          \"],[7,\"p\"],[11,\"class\",\"social-txt\"],[9],[0,\"\\n            \"],[1,[23,[\"item\",\"summary\"]],false],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[1,[21,\"paper-divider\"],false],[0,\"\\n\"],[4,\"component\",[[22,1,[\"actions\"]]],[[\"class\"],[\"layout-row layout-align-space-around-start zero-mg\"]],{\"statements\":[[0,\"      \"],[4,\"paper-button\",null,[[\"iconButton\"],[true]],{\"statements\":[[0,\" \"],[7,\"img\"],[11,\"src\",\"icon/thumb-up.png\"],[11,\"class\",\"like-icon\"],[11,\"alt\",\"\"],[9],[10],[0,\" \"]],\"parameters\":[]},null],[0,\"\\n      \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],[23,[\"goToDiscuss\"]],[23,[\"item\",\"id\"]]],null]]],{\"statements\":[[7,\"img\"],[11,\"src\",\"icon/feedback.png\"],[11,\"class\",\"comment-icon\"],[11,\"alt\",\"\"],[9],[10]],\"parameters\":[]},null],[0,\"\\n      \"],[4,\"paper-button\",null,[[\"iconButton\"],[true]],{\"statements\":[[7,\"img\"],[11,\"src\",\"icon/share.png\"],[11,\"class\",\"share-icon\"],[11,\"alt\",\"\"],[9],[10]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/user/profile-card.hbs" } });
});
;define("vidya-frontend/templates/components/user/profile-pic", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "FAy0ks29", "block": "{\"symbols\":[\"model\",\"photoswipe\",\"item\",\"index\",\"photoswipe\",\"item\",\"index\",\"photoswipe\",\"item\",\"index\"],\"statements\":[[4,\"each\",[[23,[\"profileInfo\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-start-center relative \"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"user-profile-position\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"uploadInProcess\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-center-center loading-profile\"],[9],[0,\"\\n            \"],[1,[27,\"paper-progress-circular\",null,[[\"warn\",\"diameter\"],[true,100]]],false],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[7,\"div\"],[11,\"class\",\"layout-row\"],[9],[0,\"\\n\"],[4,\"photo-swipe\",null,[[\"shareEl\",\"items\",\"history\",\"onImageLoadComplete\",\"onClose\"],[false,[27,\"convert-data\",[[22,1,[\"user_url\"]]],null],false,[27,\"action\",[[22,0,[]],\"open\"],null],[27,\"action\",[[22,0,[]],\"close\"],null]]],{\"statements\":[[4,\"each\",[[27,\"convert-data\",[[22,1,[\"user_url\"]]],null]],null,{\"statements\":[[0,\"                \"],[7,\"img\"],[12,\"src\",[22,9,[\"src\"]]],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"class\",\"user-profile-photo\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[22,8,[\"actions\",\"open\"]],[27,\"hash\",null,[[\"index\"],[[22,10,[]]]]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[9,10]},null]],\"parameters\":[8]},null],[4,\"if\",[[27,\"eq\",[[23,[\"currentid\"]],[23,[\"userID\"]]],null]],null,{\"statements\":[[0,\"              \"],[7,\"div\"],[11,\"class\",\"profile-edit-position\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"profile-edit-btn\"],[9],[0,\"\\n\"],[4,\"x-file-input\",null,[[\"action\"],[[27,\"action\",[[22,0,[]],\"uploadPicture\"],null]]],{\"statements\":[[0,\"                    \"],[2,\" <img src={{convert-url \\\"/photo.svg\\\"}} alt=\\\"\\\" class=\\\"icon-wdt img-text\\\"> \"],[0,\"\\n                    \"],[1,[27,\"paper-icon\",[\"edit\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"mb-25\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"absolute info-position\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"currentid\"]],[23,[\"userID\"]]],null]],null,{\"statements\":[[0,\"          \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"displayInfo\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"image\"],null],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\"],[4,\"if\",[[27,\"is-empty\",[[22,1,[\"back_photo\",\"0\"]]],null]],null,{\"statements\":[[4,\"photo-swipe\",null,[[\"shareEl\",\"items\",\"history\",\"onImageLoadComplete\",\"onClose\"],[false,[23,[\"coverPhoto\"]],false,[27,\"action\",[[22,0,[]],\"open\"],null],[27,\"action\",[[22,0,[]],\"close\"],null]]],{\"statements\":[[4,\"each\",[[23,[\"coverPhoto\"]]],null,{\"statements\":[[0,\"              \"],[7,\"img\"],[12,\"src\",[22,6,[\"src\"]]],[11,\"class\",\"user-profile-cover profile-btn-margin\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[22,5,[\"actions\",\"open\"]],[27,\"hash\",null,[[\"index\"],[0]]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[6,7]},null]],\"parameters\":[5]},null]],\"parameters\":[]},{\"statements\":[[4,\"photo-swipe\",null,[[\"shareEl\",\"items\",\"history\",\"onImageLoadComplete\",\"onClose\"],[false,[22,1,[\"back_photo\"]],false,[27,\"action\",[[22,0,[]],\"open\"],null],[27,\"action\",[[22,0,[]],\"close\"],null]]],{\"statements\":[[4,\"each\",[[22,1,[\"back_photo\"]]],null,{\"statements\":[[0,\"            \"],[7,\"img\"],[12,\"src\",[22,3,[\"src\"]]],[11,\"class\",\"user-profile-cover profile-btn-margin\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[22,2,[\"actions\",\"open\"]],[27,\"hash\",null,[[\"index\"],[[22,4,[]]]]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[3,4]},null]],\"parameters\":[2]},null]],\"parameters\":[]}],[0,\"    \"],[10],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"user-profile-name layout-column layout-align-start-center\"],[9],[1,[22,1,[\"username\"]],false],[10],[0,\"\\n\"],[4,\"unless\",[[27,\"eq\",[[23,[\"currentid\"]],[23,[\"userID\"]]],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-center-start layout-padding profile-height-btn\"],[9],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"class\",\"raised\",\"primary\",\"onClick\"],[\"follow-btn\",true,true,[27,\"action\",[[22,0,[]],[23,[\"messageUser\"]],[23,[\"currentid\"]],[23,[\"userID\"]],[22,1,[\"user_url\"]],[22,1,[\"username\"]]],null]]],{\"statements\":[[0,\"message\"]],\"parameters\":[]},null],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"class\",\"id\",\"raised\",\"primary\",\"onClick\"],[[27,\"if\",[[23,[\"isOpen\"]],\"follow-btn\",\"unfollow-btn\"],null],\"click\",true,true,[27,\"action\",[[22,0,[]],\"changeStatus\",[23,[\"currentid\"]],\"cele\",[22,1,[]]],null]]],{\"statements\":[[1,[27,\"change-button\",[[23,[\"follow\"]],[23,[\"currentid\"]],\"button\"],null],false]],\"parameters\":[]},null],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"\\n\"],[4,\"cover-dialog\",null,[[\"showDialog\",\"item\",\"store\",\"coverPhoto\"],[[23,[\"showDialog\"]],[23,[\"item\"]],[23,[\"store\"]],[23,[\"coverPhoto\"]]]],{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/user/profile-pic.hbs" } });
});
;define("vidya-frontend/templates/components/user/profile-user-card", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "yRVw4U5S", "block": "{\"symbols\":[\"controls\"],\"statements\":[[4,\"paper-list\",null,[[\"class\"],[\"\"]],{\"statements\":[[4,\"paper-item\",null,null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-space-between-center\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"group\"]],\"group\"],null]],null,{\"statements\":[[0,\"        \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"channelImg\",\"web_url\"]]],null]],[11,\"class\",\"chat-img\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToGroups\"]],[23,[\"item\",\"id\"]]]],[9],[10],[0,\"\\n        \"],[7,\"p\"],[11,\"class\",\"chat-profile-name\"],[9],[1,[23,[\"item\",\"channelname\"]],false],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"item\",\"user_url\",\"status\"]],\"success\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"user_url\"]]],null]],[11,\"class\",\"chat-img\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToProfiles\"]],[23,[\"item\",\"id\"]]]],[9],[10],[0,\"\\n          \"],[7,\"p\"],[11,\"class\",\"chat-profile-name\"],[9],[1,[23,[\"item\",\"username\"]],false],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"item\",\"user_url\"]]],null]],[11,\"class\",\"chat-img\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],[23,[\"goToProfiles\"]],[23,[\"item\",\"id\"]]]],[9],[10],[0,\"\\n          \"],[7,\"p\"],[11,\"class\",\"chat-profile-name\"],[9],[1,[23,[\"item\",\"username\"]],false],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/components/user/profile-user-card.hbs" } });
});
;define("vidya-frontend/templates/discuss/chat", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zDqXGxxj", "block": "{\"symbols\":[\"item\"],\"statements\":[[4,\"paper-content\",null,[[\"class\",\"id\"],[\"flex black-bkg\",\"scrolldown\"]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"layout-column flex over-flow\"],[9],[0,\"\\n\"],[4,\"paper-list\",null,[[\"class\"],[[23,[\"´black-bkg´\"]]]],{\"statements\":[[0,\"      \"],[1,[27,\"socials/social-detail-view\",null,[[\"socialModel\",\"readMore\",\"routeToDetailNew\",\"goToDetail\",\"goToProfiles\",\"goToGroups\",\"loadMore\",\"newsModel\"],[[23,[\"socialModel\"]],[27,\"action\",[[22,0,[]],\"readMore\"],null],[27,\"action\",[[22,0,[]],\"routeToDetailNew\"],null],[27,\"action\",[[22,0,[]],\"goToDetail\"],null],[27,\"action\",[[22,0,[]],\"goToProfiles\"],null],[27,\"action\",[[22,0,[]],\"goToGroups\"],null],[23,[\"loadMore\"]],[23,[\"newsModel\"]]]]],false],[0,\"\\n      \"],[1,[27,\"socials/message-container\",null,[[\"class\",\"messages\",\"channel_id\",\"id\",\"role\",\"store\",\"currentid\"],[\"chat-bg flex\",[23,[\"filteredChat\"]],[23,[\"channel_id\"]],[23,[\"id\"]],[23,[\"role\"]],[23,[\"store\"]],[23,[\"currentid\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[7,\"span\"],[11,\"class\",\"border-shadow\"],[9],[10],[0,\"\\n\"],[4,\"each\",[[23,[\"socialModel\"]]],null,{\"statements\":[[4,\"if\",[[27,\"or\",[[27,\"not-eq\",[[22,1,[\"channel_id\"]],[23,[\"currentid\"]]],null],[27,\"and\",[[27,\"eq\",[[22,1,[\"channel_id\"]],[23,[\"currentid\"]]],null],[27,\"not\",[[22,1,[\"ban\"]]],null]],null]],null]],null,{\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"brown-bkg\"]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"layout-row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"flex input-size\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"scrollBottom\"]],[9],[0,\"\\n      \"],[1,[27,\"paper-input\",null,[[\"class\",\"textarea\",\"block\",\"label\",\"rows\",\"value\",\"hideAllMessages\",\"onChange\",\"keyDown\"],[\"\",true,false,\"Type discuss\",1,[23,[\"chat\"]],true,[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"chat\"]]],null]],null],[27,\"action\",[[22,0,[]],\"keyReceived\"],null]]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \\n    \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-start-end\"],[9],[0,\"\\n\"],[4,\"paper-button\",null,[[\"iconButton\",\"class\",\"onClick\"],[true,\"\",[27,\"action\",[[22,0,[]],\"handleChat\"],null]]],{\"statements\":[[4,\"if\",[[23,[\"iconchanger\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"paper-icon\",[\"thumb up\"],null],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[1,[27,\"paper-icon\",[\"send\"],null],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/discuss/chat.hbs" } });
});
;define("vidya-frontend/templates/discuss/create-grouppost", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "B4eOesl2", "block": "{\"symbols\":[\"item\"],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"layout-column flex layout-padding brown-bkg\"]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"layout-column flex over-flow\"],[9],[0,\"\\n    \"],[7,\"p\"],[9],[1,[23,[\"model\",\"channelname\"]],false],[0,\"   \"],[10],[0,\"\\n    \"],[1,[27,\"paper-input\",null,[[\"class\",\"textarea\",\"block\",\"label\",\"passThru\",\"value\",\"onChange\"],[\"\",true,true,\"Enter the text\",[27,\"hash\",null,[[\"rows\"],[3]]],[23,[\"post\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"post\"]]],null]],null]]]],false],[0,\"\\n\"],[4,\"if\",[[23,[\"progressUpload\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"flex progress-margin\"],[9],[0,\"\\n        \"],[1,[27,\"paper-progress-linear\",null,[[\"value\"],[[23,[\"progressPercentage\"]]]]],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-center-center\"],[9],[1,[21,\"progressPercentage\"],false],[0,\"\\n        %\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"imgDisplay\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-row social-grid-container  social-grid-size relative\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"imgDisplay\"]]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"relative social-grid-item\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[22,1,[\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"              \"],[7,\"img\"],[12,\"src\",[27,\"convert-img\",[[22,1,[]]],null]],[11,\"class\",\"social-upload-media\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,1,[\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"              \"],[7,\"video\"],[11,\"class\",\"social-upload-media\"],[11,\"controls\",\"controls\"],[9],[0,\"\\n                \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[22,1,[\"web_url\"]]],null]],[11,\"type\",\"video/mp4\"],[9],[10],[0,\"\\n              \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[7,\"audio\"],[11,\"class\",\"social-upload-media\"],[11,\"controls\",\"controls\"],[11,\"controlsList\",\"nodownload\"],[9],[0,\"\\n                \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[22,1,[\"web_url\"]]],null]],[11,\"type\",\"audio/mpeg\"],[9],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"            \"],[4,\"paper-button\",null,[[\"class\",\"iconButton\",\"onClick\"],[\"clear-button\",true,[27,\"action\",[[22,0,[]],\"deleteImg\",[22,1,[]]],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"clear\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"openDialog\"]]],null,{\"statements\":[[4,\"paper-dialog\",null,[[\"class\",\"onClose\",\"clickOutsideToClose\"],[\"flex-50\",[27,\"action\",[[22,0,[]],\"closeDialogWithParent\",\"cancel\"],null],true]],{\"statements\":[[0,\"      \"],[7,\"form\"],[9],[0,\"\\n\"],[4,\"paper-toolbar\",null,null,{\"statements\":[[4,\"paper-toolbar-tools\",null,null,{\"statements\":[[0,\"            \"],[7,\"h2\"],[9],[0,\"Warning\"],[10],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n            \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"closeDialogWithParent\",\"cancel\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",null,[[\"icon\"],[\"close\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"paper-dialog-content\",null,null,{\"statements\":[[0,\"          \"],[7,\"p\"],[9],[0,\"\\n            Would you like to cancel the upload processes?\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"paper-dialog-actions\",null,[[\"class\"],[\"layout-row\"]],{\"statements\":[[0,\"          \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"closeDialogWithParent\",\"cancel\"],null]]],{\"statements\":[[0,\"Cancel\"]],\"parameters\":[]},null],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"ok\"],null]]],{\"statements\":[[0,\"OK\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[7,\"div\"],[11,\"class\",\"layout-column zero-padding black-bkg\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"chatAddon\"]]],null,{\"statements\":[[4,\"paper-list\",null,[[\"class\"],[\"layout-row layout-align-start-end over-flow\"]],{\"statements\":[[0,\"\\n\"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"getFiles\"],null]]],{\"statements\":[[0,\"            \"],[1,[27,\"paper-icon\",[\"cloud_upload\"],[[\"class\"],[\"md-menu-align-target\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"getCamera\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"camera\"],[[\"class\"],[\"md-menu-align-target\"]]],false]],\"parameters\":[]},null],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"getVideo\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"video_call\"],[[\"class\"],[\"md-menu-align-target\"]]],false]],\"parameters\":[]},null],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"getVoice\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"record_voice_over\"],[[\"class\"],[\"md-menu-align-target\"]]],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"  \"],[1,[21,\"paper-divider\"],false],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"layout-row flex layout-row layout-align-end-start brown-bkg\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"disablebtn\"]]],null,{\"statements\":[[4,\"if\",[[23,[\"chatAddon\"]]],null,{\"statements\":[[0,\"        \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"chatMenuoff\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"add\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"chatMenu\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"add\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"      \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n      \"],[4,\"paper-button\",null,[[\"disabled\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"closeDialog\",\"cancel\"],null]]],{\"statements\":[[0,\"Cancel\"]],\"parameters\":[]},null],[0,\"\\n      \"],[4,\"paper-button\",null,[[\"disabled\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"saveData\"],null]]],{\"statements\":[[0,\"OK\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"chatAddon\"]]],null,{\"statements\":[[0,\"        \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"chatMenuoff\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"add\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"chatMenu\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"add\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"      \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n      \"],[4,\"paper-button\",null,[[\"disabled\",\"onClick\"],[[23,[\"cancelbutton\"]],[27,\"action\",[[22,0,[]],\"closeDialog\",\"cancel\"],null]]],{\"statements\":[[0,\"Cancel\"]],\"parameters\":[]},null],[0,\"\\n      \"],[4,\"paper-button\",null,[[\"disabled\",\"onClick\"],[[23,[\"isdisable\"]],[27,\"action\",[[22,0,[]],\"saveData\"],null]]],{\"statements\":[[0,\"OK\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"disablebtn\"]]],null,{\"statements\":[[4,\"paper-dialog\",null,[[\"class\"],[\"flex-50\"]],{\"statements\":[[0,\"      \"],[7,\"form\"],[9],[0,\"\\n\"],[4,\"paper-dialog-content\",null,null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-center-center\"],[9],[0,\"\\n            \"],[1,[27,\"paper-progress-circular\",null,[[\"warn\",\"diameter\"],[true,96]]],false],[0,\"\\n            \"],[7,\"p\"],[9],[0,\"Uploading....\"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/discuss/create-grouppost.hbs" } });
});
;define("vidya-frontend/templates/discuss/create-social", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "UkFHe0Fx", "block": "{\"symbols\":[\"item\"],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"layout-column flex  brown-bkg\"]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"layout-column flex over-flow layout-padding\"],[9],[0,\"\\n    \"],[1,[27,\"paper-input\",null,[[\"class\",\"textarea\",\"block\",\"label\",\"passThru\",\"value\",\"onChange\"],[\"\",true,true,\"Enter the text\",[27,\"hash\",null,[[\"rows\"],[3]]],[23,[\"post\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"post\"]]],null]],null]]]],false],[0,\"\\n\"],[4,\"if\",[[23,[\"progressUpload\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"flex progress-margin\"],[9],[0,\"\\n        \"],[1,[27,\"paper-progress-linear\",null,[[\"value\"],[[23,[\"progressPercentage\"]]]]],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-center-center\"],[9],[1,[21,\"progressPercentage\"],false],[0,\" %\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"imgDisplay\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-row social-grid-container  social-grid-size relative\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"imgDisplay\"]]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"relative social-grid-item\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[22,1,[\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"              \"],[7,\"img\"],[12,\"src\",[27,\"convert-img\",[[22,1,[]]],null]],[11,\"class\",\"social-upload-media\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,1,[\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"              \"],[7,\"video\"],[11,\"class\",\"social-upload-media\"],[11,\"controls\",\"\"],[11,\"controlsList\",\"nodownload\"],[9],[0,\"\\n                \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[22,1,[\"web_url\"]]],null]],[11,\"type\",\"video/mp4\"],[9],[10],[0,\"\\n              \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[7,\"audio\"],[11,\"class\",\"social-upload-media\"],[11,\"controls\",\"\"],[11,\"controlsList\",\"nodownload\"],[9],[0,\"\\n                \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[22,1,[\"web_url\"]]],null]],[11,\"type\",\"audio/mpeg\"],[9],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"            \"],[4,\"paper-button\",null,[[\"class\",\"iconButton\",\"onClick\"],[\"clear-button\",true,[27,\"action\",[[22,0,[]],\"deleteImg\",[22,1,[]]],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"clear\"],null],false]],\"parameters\":[]},null],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"openDialog\"]]],null,{\"statements\":[[4,\"paper-dialog\",null,[[\"class\",\"onClose\",\"clickOutsideToClose\"],[\"flex-50 black-bkg\",[27,\"action\",[[22,0,[]],\"closeDialogWithParent\",\"cancel\"],null],true]],{\"statements\":[[0,\"      \"],[7,\"form\"],[9],[0,\"\\n\"],[4,\"paper-toolbar\",null,[[\"class\"],[\"black-bkg\"]],{\"statements\":[[4,\"paper-toolbar-tools\",null,null,{\"statements\":[[0,\"            \"],[7,\"h2\"],[9],[0,\"Warning\"],[10],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n            \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"closeDialogWithParent\",\"cancel\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",null,[[\"icon\"],[\"close\"]]],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"paper-dialog-content\",null,null,{\"statements\":[[0,\"          \"],[7,\"p\"],[9],[0,\"\\n            Would you like to cancel the upload processes?\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"paper-dialog-actions\",null,[[\"class\"],[\"layout-row\"]],{\"statements\":[[0,\"          \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"closeDialogWithParent\",\"cancel\"],null]]],{\"statements\":[[0,\"Cancel\"]],\"parameters\":[]},null],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"ok\"],null]]],{\"statements\":[[0,\"OK\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[7,\"span\"],[11,\"class\",\"border-shadow\"],[9],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"layout-column zero-padding\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"chatAddon\"]]],null,{\"statements\":[[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"layout-row brown-bkg\"],[9],[0,\"\\n\"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"getFiles\"],null]]],{\"statements\":[[0,\"      \"],[1,[27,\"paper-icon\",[\"cloud_upload\"],[[\"class\"],[\"md-menu-align-target\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"getCamera\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"camera\"],[[\"class\"],[\"md-menu-align-target\"]]],false]],\"parameters\":[]},null],[0,\"\\n    \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"getVideo\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"video_call\"],[[\"class\"],[\"md-menu-align-target\"]]],false]],\"parameters\":[]},null],[0,\"\\n    \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"getVoice\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"record_voice_over\"],[[\"class\"],[\"md-menu-align-target\"]]],false]],\"parameters\":[]},null],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"span\"],[11,\"class\",\"border-shadow\"],[9],[10],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[21,\"paper-divider\"],false],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"layout-row flex layout-row layout-align-end-start black-bkg\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"disablebtn\"]]],null,{\"statements\":[[4,\"if\",[[23,[\"chatAddon\"]]],null,{\"statements\":[[0,\"        \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"chatMenuoff\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"add\"],null],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"chatMenu\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"add\"],null],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n      \"],[4,\"paper-button\",null,[[\"disabled\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"closeDialog\",\"cancel\"],null]]],{\"statements\":[[0,\"Cancel\"]],\"parameters\":[]},null],[0,\"\\n      \"],[4,\"paper-button\",null,[[\"disabled\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"saveData\"],null]]],{\"statements\":[[0,\"OK\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[23,[\"chatAddon\"]]],null,{\"statements\":[[0,\"        \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"chatMenuoff\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"add\"],null],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"chatMenu\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"add\"],null],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n      \"],[4,\"paper-button\",null,[[\"disabled\",\"onClick\"],[[23,[\"cancelbutton\"]],[27,\"action\",[[22,0,[]],\"closeDialog\",\"cancel\"],null]]],{\"statements\":[[0,\"Cancel\"]],\"parameters\":[]},null],[0,\"\\n      \"],[4,\"paper-button\",null,[[\"disabled\",\"onClick\"],[[23,[\"isdisable\"]],[27,\"action\",[[22,0,[]],\"saveData\"],null]]],{\"statements\":[[0,\"OK\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"disablebtn\"]]],null,{\"statements\":[[4,\"paper-dialog\",null,[[\"class\"],[\"flex-50 black-bkg\"]],{\"statements\":[[0,\"      \"],[7,\"form\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-center-center\"],[9],[0,\"\\n            \"],[1,[27,\"paper-progress-circular\",null,[[\"warn\",\"diameter\"],[true,96]]],false],[0,\"\\n            \"],[7,\"p\"],[9],[0,\"Uploading....\"],[10],[0,\"\\n          \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/discuss/create-social.hbs" } });
});
;define("vidya-frontend/templates/discuss/edit-social", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "QXC4OUXJ", "block": "{\"symbols\":[\"item\",\"item\"],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"flex black-frame layout-pcloud_uploading layout-column\"]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"layout-column  flex over-flow layout-padding\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"model\",\"sharePost\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-column brown-bkg \"],[9],[0,\"\\n        \"],[1,[27,\"paper-input\",null,[[\"class\",\"textarea\",\"block\",\"label\",\"passThru\",\"value\",\"onChange\"],[\"\",true,true,\"Enter the text\",[27,\"hash\",null,[[\"rows\"],[4]]],[23,[\"model\",\"shareText\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"model\",\"shareText\"]]],null]],null]]]],false],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"model\",\"post_image\",\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"photo\"],[9],[0,\"\\n            \"],[7,\"img\"],[11,\"class\",\"news-latest-img\"],[12,\"src\",[23,[\"model\",\"post_image\",\"web_url\"]]],[11,\"alt\",\"\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"model\",\"post_image\",\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"video\"],[11,\"class\",\"eagle-news-video\"],[11,\"preload\",\"auto\"],[11,\"controls\",\"\"],[11,\"controlsList\",\"nodownload\"],[9],[0,\"\\n            \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[23,[\"model\",\"post_image\",\"web_url\"]]],null]],[11,\"type\",\"video/mp4\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"audio\"],[11,\"class\",\"social-upload-media\"],[11,\"controls\",\"controls\"],[11,\"controlsList\",\"nodownload\"],[9],[0,\"\\n              \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[23,[\"model\",\"post_image\",\"web_url\"]]],null]],[11,\"type\",\"audio/mpeg\"],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"        \"],[7,\"h3\"],[9],[1,[23,[\"model\",\"title\"]],false],[10],[0,\"\\n        \"],[7,\"p\"],[9],[0,\"\\n          \"],[1,[27,\"markdown-to-html\",[[23,[\"model\",\"summary\"]]],null],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-column brown-bkg \"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"model\",\"groupPost\"]]],null,{\"statements\":[[0,\"        \"],[1,[23,[\"model\",\"groupinfo\",\"groupname\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[1,[27,\"paper-input\",null,[[\"class\",\"textarea\",\"block\",\"label\",\"passThru\",\"value\",\"onChange\"],[\"\",true,true,\"Enter the text\",[27,\"hash\",null,[[\"rows\"],[4]]],[23,[\"model\",\"summary\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"model\",\"summary\"]]],null]],null]]]],false],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[7,\"div\"],[11,\"class\",\"brown-bkg\"],[9],[0,\"\\n\"],[4,\"unless\",[[23,[\"model\",\"sharePost\"]]],null,{\"statements\":[[4,\"unless\",[[27,\"eq\",[[23,[\"model\",\"previous_state\"]],\"CRS\"],null]],null,{\"statements\":[[4,\"if\",[[23,[\"progressUpload\"]]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"flex progress-margin\"],[9],[0,\"\\n              \"],[1,[27,\"paper-progress-linear\",null,[[\"value\"],[[23,[\"progressPercentage\"]]]]],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-center-center\"],[9],[1,[21,\"progressPercentage\"],false],[0,\"\\n              %\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"imgDisplay\"]]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"layout-row social-grid-container social-grid-size relative\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"imgDisplay\"]]],null,{\"statements\":[[0,\"                \"],[7,\"div\"],[11,\"class\",\"relative social-grid-item\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[22,2,[\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"                    \"],[7,\"img\"],[12,\"src\",[27,\"convert-img\",[[22,2,[]]],null]],[11,\"class\",\"social-upload-media\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"                    \"],[7,\"video\"],[11,\"class\",\"social-upload-media\"],[11,\"controls\",\"controls\"],[11,\"controlsList\",\"nodownload\"],[9],[0,\"\\n                      \"],[7,\"source\"],[12,\"src\",[27,\"convert-img\",[[22,2,[]]],null]],[11,\"type\",\"video/mp4\"],[9],[10],[0,\"\\n                    \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                    \"],[7,\"audio\"],[11,\"class\",\"social-upload-media\"],[11,\"controls\",\"controls\"],[11,\"controlsList\",\"nodownload\"],[9],[0,\"\\n                      \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[22,2,[\"web_url\"]]],null]],[11,\"type\",\"audio/mpeg\"],[9],[10],[0,\"\\n                    \"],[10],[0,\"\\n                  \"]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"                  \"],[4,\"paper-button\",null,[[\"class\",\"iconButton\",\"onClick\"],[\"clear-button\",true,[27,\"action\",[[22,0,[]],\"deleteImg\",[22,2,[]]],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"clear\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[10],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"            \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[7,\"div\"],[11,\"class\",\"layout-column brown-bkg\"],[9],[0,\"\\n\"],[4,\"unless\",[[23,[\"model\",\"sharePost\"]]],null,{\"statements\":[[4,\"unless\",[[27,\"eq\",[[23,[\"model\",\"previous_state\"]],\"CRS\"],null]],null,{\"statements\":[[4,\"if\",[[23,[\"chatAddon\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"layout-row\"],[9],[0,\"\\n\"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"getFiles\"],null]]],{\"statements\":[[0,\"            \"],[1,[27,\"paper-icon\",[\"cloud_upload\"],[[\"class\"],[\"md-menu-align-target\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"getCamera\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"camera\"],[[\"class\"],[\"md-menu-align-target\"]]],false]],\"parameters\":[]},null],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"getVideo\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"video_call\"],[[\"class\"],[\"md-menu-align-target\"]]],false]],\"parameters\":[]},null],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"getVoice\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"record_voice_over\"],[[\"class\"],[\"md-menu-align-target\"]]],false]],\"parameters\":[]},null],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[1,[21,\"paper-divider\"],false],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-end-start\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"chatAddon\"]]],null,{\"statements\":[[0,\"          \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"chatMenuoff\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"add\"],null],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"chatMenu\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"add\"],null],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n        \"],[4,\"paper-button\",null,[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"closeDialog\",[23,[\"model\"]]],null]]],{\"statements\":[[0,\"Cancel\"]],\"parameters\":[]},null],[0,\"\\n        \"],[4,\"paper-button\",null,[[\"disabled\",\"onClick\"],[[23,[\"isdisable\"]],[27,\"action\",[[22,0,[]],\"saveData\",[23,[\"model\"]]],null]]],{\"statements\":[[0,\"OK\"]],\"parameters\":[]},null],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"  \"],[7,\"div\"],[11,\"class\",\"\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"model\",\"sharePost\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-end-start \"],[9],[0,\"\\n        \"],[4,\"paper-button\",null,[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"closeDialog\",[23,[\"model\"]]],null]]],{\"statements\":[[0,\"Cancel\"]],\"parameters\":[]},null],[0,\"\\n        \"],[4,\"paper-button\",null,[[\"disabled\",\"onClick\"],[[23,[\"isdisable\"]],[27,\"action\",[[22,0,[]],\"saveData\",[23,[\"model\"]]],null]]],{\"statements\":[[0,\"OK\"]],\"parameters\":[]},null],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[27,\"eq\",[[23,[\"model\",\"previous_state\"]],\"CRS\"],null]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"crs-count\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"crsModel\"]]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"layout-column\"],[9],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"crs-dialog-content\"],[9],[1,[22,1,[\"title\"]],false],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"        \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-end-start\"],[9],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"closeDialog\",[23,[\"model\"]]],null]]],{\"statements\":[[0,\"Cancel\"]],\"parameters\":[]},null],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"disabled\",\"onClick\"],[[23,[\"isdisable\"]],[27,\"action\",[[22,0,[]],\"saveData\",[23,[\"model\"]]],null]]],{\"statements\":[[0,\"OK\"]],\"parameters\":[]},null],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/discuss/edit-social.hbs" } });
});
;define("vidya-frontend/templates/discuss/group-page", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hTXNZ6xF", "block": "{\"symbols\":[\"item\"],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"flex\"]],{\"statements\":[[4,\"each\",[[23,[\"socialModel\"]]],null,{\"statements\":[[0,\"    \"],[1,[27,\"socials/group-page-card\",null,[[\"item\",\"goToGroupPage\"],[[22,1,[]],[27,\"action\",[[22,0,[]],\"goToGroupPage\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/discuss/group-page.hbs" } });
});
;define("vidya-frontend/templates/discuss/share-social", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "+E+amkty", "block": "{\"symbols\":[\"sharepost\"],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"layout-column flex layout-padding brown-bkg \"]],{\"statements\":[[4,\"each\",[[23,[\"share\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"layout-column flex over-flow brown-bkg font-fix\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-column\"],[9],[0,\"\\n        \"],[1,[27,\"paper-input\",null,[[\"textarea\",\"block\",\"label\",\"passThru\",\"value\",\"onChange\"],[true,true,\"Write something\",[27,\"hash\",null,[[\"rows\"],[3]]],[23,[\"shareText\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"shareText\"]]],null]],null]]]],false],[0,\"\\n      \"],[10],[0,\"\\n\"],[4,\"if\",[[22,1,[\"sharePost\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-column flex\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[22,1,[\"post_image\",\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"photo\"],[9],[0,\"\\n            \"],[7,\"img\"],[11,\"class\",\"news-latest-img\"],[12,\"src\",[22,1,[\"post_image\",\"web_url\"]]],[11,\"alt\",\"\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,1,[\"post_image\",\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"video\"],[11,\"class\",\"eagle-news-video\"],[11,\"preload\",\"auto\"],[11,\"controls\",\"\"],[9],[0,\"\\n            \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[22,1,[\"post_image\",\"web_url\"]]],null]],[11,\"type\",\"video/mp4\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"        \"],[7,\"h3\"],[9],[1,[22,1,[\"title\"]],false],[10],[0,\"\\n        \"],[7,\"p\"],[11,\"class\",\"font-fix\"],[9],[0,\"\\n          \"],[1,[27,\"markdown-to-html\",[[22,1,[\"summary\"]]],null],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-column flex\"],[9],[0,\"\\n        \"],[7,\"p\"],[11,\"class\",\"font-fix\"],[9],[0,\"\\n          \"],[1,[27,\"markdown-to-html\",[[22,1,[\"summary\"]]],null],false],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[22,1,[\"post_image\",\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"photo\"],[9],[0,\"\\n            \"],[7,\"img\"],[11,\"class\",\"news-latest-img\"],[12,\"src\",[22,1,[\"post_image\",\"web_url\"]]],[11,\"alt\",\"\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,1,[\"post_image\",\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"video\"],[11,\"class\",\"eagle-news-video\"],[11,\"preload\",\"auto\"],[11,\"controls\",\"\"],[9],[0,\"\\n            \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[22,1,[\"post_image\",\"web_url\"]]],null]],[11,\"type\",\"video/mp4\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-column zero-pd black-container\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-row flex layout-row layout-align-end-start \"],[9],[0,\"\\n\"],[0,\"          \"],[4,\"paper-button\",null,[[\"class\",\"raised\",\"onClick\"],[\"black-container\",true,[27,\"action\",[[22,0,[]],\"cancel\"],null]]],{\"statements\":[[0,\"Cancel\"]],\"parameters\":[]},null],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"class\",\"raised\",\"onClick\"],[\"black-container\",true,[27,\"action\",[[22,0,[]],\"share\",[22,1,[]]],null]]],{\"statements\":[[0,\"Share\"]],\"parameters\":[]},null],[0,\"\\n\"],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/discuss/share-social.hbs" } });
});
;define("vidya-frontend/templates/entertainment/create-live", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "/dSgGcrI", "block": "{\"symbols\":[],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"flex black-bkg\"]],{\"statements\":[[4,\"paper-list\",null,[[\"class\"],[\"layout-column flex layout-padding \"]],{\"statements\":[[0,\"    \"],[7,\"p\"],[9],[0,\" Token ==> \"],[1,[21,\"streamtoken\"],false],[10],[0,\"\\n    \"],[7,\"p\"],[9],[0,\" Server URL ==> rtmp://streaming.vidya.social:1935/stream\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[7,\"div\"],[11,\"class\",\"layout-row brown-bkg\"],[9],[0,\"\\n  \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n  \"],[4,\"paper-button\",null,[[\"primary\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"record\"],null]]],{\"statements\":[[0,\"Live\"]],\"parameters\":[]},null],[0,\"\\n  \"],[4,\"paper-button\",null,[[\"primary\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"donetoken\"],null]]],{\"statements\":[[0,\"Ok\"]],\"parameters\":[]},null],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/entertainment/create-live.hbs" } });
});
;define("vidya-frontend/templates/entertainment/home", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Q7TL6YWl", "block": "{\"symbols\":[\"item\",\"item\",\"item\",\"tabs\"],\"statements\":[[4,\"paper-content\",null,null,{\"statements\":[[1,[21,\"entertainment/main-nolive\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[7,\"div\"],[11,\"class\",\"tabs-bkg\"],[9],[0,\"\\n\"],[4,\"paper-tabs\",null,[[\"center\",\"stretch\",\"borderBottom\",\"selected\",\"onChange\"],[[23,[\"center\"]],true,[23,[\"borderBottom\"]],[23,[\"currentSlide\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"currentSlide\"]]],null]],null]]],{\"statements\":[[4,\"component\",[[22,4,[\"tab\"]]],[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"liveTab\",0],null]]],{\"statements\":[[0,\"      Upload\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,4,[\"tab\"]]],[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"liveTab\",1],null]]],{\"statements\":[[0,\"      Live\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,4,[\"tab\"]]],[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"liveTab\",2],null]]],{\"statements\":[[0,\"      Replay\\n\"]],\"parameters\":[]},null]],\"parameters\":[4]},null],[10],[0,\"\\n\"],[7,\"span\"],[11,\"class\",\"border-shadow\"],[9],[10],[0,\"\\n\"],[4,\"paper-content\",null,[[\"class\"],[\"flex overflow black-bkg\"]],{\"statements\":[[4,\"swiper-container\",null,[[\"id\",\"speed\",\"uniqueNavElements\",\"autoHeight\",\"currentSlide\"],[\"swiper-home\",100,true,true,[23,[\"currentSlide\"]]]],{\"statements\":[[4,\"swiper-slide\",null,[[\"class\",\"id\"],[\"slide-height\",\"upload\"]],{\"statements\":[[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"enter-grid-container\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"uploadModel\"]]],null,{\"statements\":[[0,\"          \"],[1,[27,\"entertainment/user-upload\",null,[[\"item\",\"routeUploadDetail\"],[[22,3,[]],[27,\"action\",[[22,0,[]],\"routeUploadDetail\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"swiper-slide\",null,[[\"class\",\"id\"],[\"slide-height\",\"live\"]],{\"statements\":[[0,\"\\n\"],[0,\"\\n\"],[0,\"          \"],[7,\"div\"],[11,\"class\",\"enter-grid-container\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"reportModel\"]]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[\"record_status\"]],\"RECORDING\"],null]],null,{\"statements\":[[0,\"                \"],[1,[27,\"entertainment/user-live\",null,[[\"item\",\"routeLiveDetail\"],[[22,2,[]],[27,\"action\",[[22,0,[]],\"routeLiveDetail\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[2]},null],[0,\"          \"],[10],[0,\"\\n\"],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"swiper-slide\",null,[[\"class\",\"id\"],[\"slide-height\",\"replay\"]],{\"statements\":[[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"enter-grid-container\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"reportModel\"]]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,1,[\"record_status\"]],\"CONVERTED\"],null]],null,{\"statements\":[[0,\"            \"],[1,[27,\"entertainment/user-replay\",null,[[\"item\",\"routeLiveDetail\"],[[22,1,[]],[27,\"action\",[[22,0,[]],\"routeLiveDetail\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[7,\"div\"],[11,\"class\",\"newbutton\"],[9],[0,\"\\n  \"],[4,\"paper-button\",null,[[\"primary\",\"onClick\",\"raised\",\"fab\"],[true,[27,\"action\",[[22,0,[]],\"createLive\"],null],true,true]],{\"statements\":[[1,[27,\"paper-icon\",[\"live_tv\"],null],false]],\"parameters\":[]},null],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/entertainment/home.hbs" } });
});
;define("vidya-frontend/templates/entertainment/live-detail", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "/76hegJA", "block": "{\"symbols\":[\"item\",\"item\",\"item\",\"card\",\"header\",\"text\",\"toast\"],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"flex brown-bkg scroll\"]],{\"statements\":[[4,\"if\",[[23,[\"showAlert\"]]],null,{\"statements\":[[4,\"paper-toast\",null,[[\"duration\",\"position\",\"capsule\",\"swipeToClose\",\"onClose\"],[[23,[\"duration\"]],[27,\"concat\",[[23,[\"positionY\"]],\" \",[23,[\"positionX\"]]],null],[23,[\"capsule\"]],[23,[\"swipeToClose\"]],[27,\"action\",[[22,0,[]],\"closeAlert\"],null]]],{\"statements\":[[0,\"      \"],[4,\"component\",[[22,7,[\"text\"]]],null,{\"statements\":[[0,\"you have not vote!\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[7]},null]],\"parameters\":[]},null],[4,\"each\",[[23,[\"enterModel\"]]],null,{\"statements\":[[4,\"paper-card\",null,[[\"class\"],[\"zero-mg brown-bkg\"]],{\"statements\":[[4,\"component\",[[22,4,[\"header\"]]],null,{\"statements\":[[4,\"component\",[[22,5,[\"avatar\"]]],[[\"class\"],[\"zero-mg\"]],{\"statements\":[[0,\"          \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[22,3,[\"user\",\"user_url\"]],\"profile\"],null]],[11,\"class\",\"live-detail-proimg\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,5,[\"text\"]]],null,{\"statements\":[[0,\"          \"],[4,\"component\",[[22,6,[\"title\"]]],[[\"class\"],[\"\"]],{\"statements\":[[1,[22,3,[\"user\",\"username\"]],false]],\"parameters\":[]},null],[0,\"\\n          \"],[4,\"component\",[[22,6,[\"title\"]]],[[\"class\"],[\"\"]],{\"statements\":[[0,\"Upload on \"],[1,[27,\"moment-from-now\",[[22,3,[\"start_time\"]]],null],false]],\"parameters\":[]},null],[0,\"\\n          \"],[2,\" {{#text.subhead}}{{/text.subhead}} \"],[0,\"\\n\"]],\"parameters\":[6]},null]],\"parameters\":[5]},null],[0,\"      \"],[2,\" <span class=\\\"layout-padding layout-margin\\\">MOMOLAND「BAAM -Japanese ver.-」Dance Video</span> \"],[0,\"\\n\"],[4,\"if\",[[22,3,[\"record_path\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"videojs-player\",null,[[\"height\",\"src\",\"poster\",\"controls\",\"autoplay\",\"type\",\"play\"],[\"250\",[22,3,[\"record\"]],[22,3,[\"thumbnail\"]],true,false,\"video/mp4\",[27,\"action\",[[22,0,[]],\"play\",[22,3,[\"id\"]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[1,[27,\"videojs-player\",null,[[\"height\",\"src\",\"poster\",\"controls\",\"autoplay\",\"type\",\"play\"],[\"250\",[22,3,[\"live\"]],[22,3,[\"thumbnail\"]],true,false,\"application/x-mpegURL\",[27,\"action\",[[22,0,[]],\"play\",[22,3,[\"id\"]]],null]]]],false],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-row flex card-none-shadow\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-start-center flex live-vote-icon\"],[9],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"vote\",[22,3,[]]],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"import_export\"],[[\"size\"],[20]]],false]],\"parameters\":[]},null],[0,\"\\n          \"],[2,\" <span class=\\\"live-count\\\">Vote</span> \"],[0,\"\\n          \"],[7,\"span\"],[11,\"class\",\"live-count\"],[9],[1,[22,3,[\"votecount\"]],false],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[2,\" <div class=\\\"layout-column layout-align-start-center flex live-vote-icon\\\">\\n          {{#paper-button iconButton=true}}{{paper-icon \\\"thumb_down\\\" size=20}}{{/paper-button}}\\n          <span class=\\\"live-count\\\">100</span>\\n        </div> \"],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-start-center flex live-vote-icon\"],[9],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"iconButton\"],[true]],{\"statements\":[[1,[27,\"paper-icon\",[\"comment\"],[[\"size\"],[20]]],false]],\"parameters\":[]},null],[0,\"\\n          \"],[2,\" <span class=\\\"live-count\\\">comment</span> \"],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-start-center flex live-vote-icon\"],[9],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"iconButton\"],[true]],{\"statements\":[[1,[27,\"paper-icon\",[\"remove_red_eye\"],[[\"size\"],[20]]],false]],\"parameters\":[]},null],[0,\"\\n          \"],[2,\" <span class=\\\"live-count\\\">view</span> \"],[0,\"\\n          \"],[7,\"span\"],[11,\"class\",\"live-count\"],[9],[1,[22,3,[\"viewer_count\"]],false],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-start-center flex live-vote-icon\"],[9],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"iconButton\"],[true]],{\"statements\":[[1,[27,\"paper-icon\",[\"flag\"],[[\"size\"],[20]]],false]],\"parameters\":[]},null],[0,\"\\n          \"],[7,\"span\"],[11,\"class\",\"live-count\"],[9],[0,\"report\"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[4]},null]],\"parameters\":[3]},null],[4,\"paper-list\",null,[[\"class\"],[\"mt-10\"]],{\"statements\":[[4,\"each\",[[23,[\"liveModel\"]]],null,{\"statements\":[[4,\"paper-item\",null,[[\"class\"],[\"layout-row\"]],{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"layout-column \"],[9],[0,\"\\n          \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[22,2,[\"userinfo\",\"user_url\"]],\"profile\"],null]],[11,\"class\",\"social-profile\"],[11,\"onerror\",\"this.src='no_image.jpg'\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-column flex\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\" flex chat-text-mg\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"layout-row  layout-align-space-between-center\"],[9],[0,\"\\n          \"],[7,\"p\"],[11,\"class\",\"flex mm-font eagle-chat-name chat-input-height\"],[9],[1,[22,2,[\"userinfo\",\"username\"]],false],[10],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"iconButton\",\"class\"],[true,\"icon-size\"]],{\"statements\":[[1,[27,\"paper-icon\",[\"close\"],null],false]],\"parameters\":[]},null],[0,\"\\n        \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"chat-text\"],[9],[0,\"\\n        \"],[7,\"p\"],[9],[1,[22,2,[\"comment\"]],false],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-row\"],[9],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"flex chat-time\"],[9],[1,[27,\"moment-from-now\",[[22,2,[\"stamp\"]]],[[\"interval\"],[60000]]],false],[10],[0,\"\\n      \"],[10],[0,\"\\n\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[2]},null]],\"parameters\":[]},null],[0,\"\\n\\n\"]],\"parameters\":[]},null],[7,\"span\"],[11,\"class\",\"border-shadow\"],[9],[10],[0,\"\\n\"],[4,\"paper-content\",null,[[\"class\"],[\"brown-bkg\"]],{\"statements\":[[4,\"each\",[[23,[\"enterModel\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"layout-row flex-shrink md-whiteframe-z2 inputbg\"],[9],[0,\"\\n\\n      \"],[7,\"div\"],[11,\"class\",\"flex input-size\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"scrollBottom\"]],[9],[0,\"\\n        \"],[1,[27,\"paper-input\",null,[[\"class\",\"textarea\",\"block\",\"rows\",\"value\",\"hideAllMessages\",\"label\",\"hideAllMessages\",\"onChange\",\"onFocus\"],[\"\",true,false,1,[23,[\"chat\"]],true,\"Type somethings\",true,[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"chat\"]]],null]],null],[27,\"action\",[[22,0,[]],\"scrollBottom\"],null]]]],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[2,\" {{paper-input class=\\\"no-vert-margin flex layout-align-end-center\\\" textarea=true block=false placeholder=\\\"Type message\\\" rows=1 value=chat hideAllMessages=true onChange=(action (mut chat)) onFocus=(action \\\"scrollBottom\\\")}} \"],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-center-end\"],[9],[0,\"\\n\"],[4,\"paper-button\",null,[[\"iconButton\",\"class\",\"onClick\"],[true,\"no-vert-pad layout-column layout-align-center-end \",[27,\"action\",[[22,0,[]],\"handleChat\",[22,1,[\"id\"]]],null]]],{\"statements\":[[0,\"          \"],[1,[27,\"paper-icon\",[\"send\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/entertainment/live-detail.hbs" } });
});
;define("vidya-frontend/templates/entertainment/loading", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "D0X998Tb", "block": "{\"symbols\":[],\"statements\":[[1,[27,\"spinner-circle\",null,[[\"class\"],[\"layout-row flex layout-align-center-center black-bkg\"]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/entertainment/loading.hbs" } });
});
;define("vidya-frontend/templates/entertainment/upload-detail", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "fB5hWReB", "block": "{\"symbols\":[\"item\",\"card\",\"header\",\"text\"],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"flex black-bkg\"]],{\"statements\":[[4,\"each\",[[23,[\"model\"]]],null,{\"statements\":[[4,\"paper-card\",null,[[\"class\"],[\"zero-mg black-bkg\"]],{\"statements\":[[4,\"component\",[[22,2,[\"header\"]]],null,{\"statements\":[[4,\"component\",[[22,3,[\"avatar\"]]],null,{\"statements\":[[0,\"          \"],[7,\"img\"],[11,\"src\",\"https://secureservercdn.net/ip-ac.mwp2.iad2.godaddy.com/427.678.godaddywp.com/wp-content/uploads/3.-tobey-maguire-420x420_0.jpg\"],[11,\"class\",\"live-detail-proimg\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,3,[\"text\"]]],null,{\"statements\":[[0,\"          \"],[4,\"component\",[[22,4,[\"title\"]]],null,{\"statements\":[[1,[22,1,[\"user\",\"username\"]],false]],\"parameters\":[]},null],[0,\"\\n          \"],[4,\"component\",[[22,4,[\"subhead\"]]],null,{\"statements\":[[0,\"Upload on \"],[1,[27,\"moment-from-now\",[[22,1,[\"start_time\"]]],null],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[4]},null]],\"parameters\":[3]},null],[0,\"      \"],[7,\"span\"],[11,\"class\",\"layout-padding layout-margin txt-break\"],[9],[1,[22,1,[\"full_name\"]],false],[10],[0,\"\\n      \"],[1,[27,\"videojs-player\",null,[[\"height\",\"src\",\"poster\",\"controls\",\"autoplay\",\"type\"],[\"250\",[22,1,[\"record\"]],[22,1,[\"pilboxthumbnail\"]],true,false,\"video/mp4\"]]],false],[0,\"\\n\\n\"]],\"parameters\":[2]},null]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/entertainment/upload-detail.hbs" } });
});
;define("vidya-frontend/templates/home", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "SwdirZ1t", "block": "{\"symbols\":[\"item\",\"item\",\"tabs\"],\"statements\":[[4,\"paper-content\",null,[[\"class\",\"id\"],[\"flex brown-bkg scroll-content\",\"content-list\"]],{\"statements\":[[0,\"  \"],[1,[27,\"news/headline-card\",null,[[\"class\",\"sortedHeadModel\",\"goToSimilarNews\",\"routeToDetailNew\",\"routeToLink\"],[\"flex\",[23,[\"headerModel\"]],[27,\"action\",[[22,0,[]],\"goToSimilarNews\"],null],[27,\"action\",[[22,0,[]],\"routeToDetailNew\"],null],[27,\"action\",[[22,0,[]],\"routeToLink\"],null]]]],false],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"tabs-bkg\"],[9],[0,\"\\n\"],[4,\"paper-tabs\",null,[[\"center\",\"stretch\",\"borderBottom\",\"selected\",\"onChange\"],[[23,[\"center\"]],true,[23,[\"borderBottom\"]],[23,[\"currentSlide\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"currentSlide\"]]],null]],null]]],{\"statements\":[[4,\"component\",[[22,3,[\"tab\"]]],[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"goToTab\",0],null]]],{\"statements\":[[0,\"        News\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,3,[\"tab\"]]],[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"goToTab\",1],null]]],{\"statements\":[[0,\"        Editor Choice\\n\"]],\"parameters\":[]},null]],\"parameters\":[3]},null],[0,\"  \"],[10],[0,\"\\n\"],[4,\"swiper-container\",null,[[\"id\",\"autoHeight\",\"currentSlide\"],[\"swiper-home\",true,[23,[\"currentSlide\"]]]],{\"statements\":[[4,\"swiper-slide\",null,[[\"id\"],[\"news\"]],{\"statements\":[[4,\"vertical-collection\",[[23,[\"sortedModel\"]]],[[\"estimateHeight\",\"staticHeight\",\"bufferSize\",\"lastReached\",\"containerSelector\"],[230,true,20,\"loadBelow\",\"md-content\"]],{\"statements\":[[0,\"        \"],[1,[27,\"news/random-news-list\",null,[[\"class\",\"item\",\"currentSlide\",\"layoutChoose\",\"routeToDetailNew\",\"CreateShare\",\"store\",\"goToLogin\",\"loadBelow\",\"routeToLink\"],[\"news-card news-latest-mg\",[22,2,[]],[23,[\"currentSlide\"]],[23,[\"layoutChoose\"]],[27,\"action\",[[22,0,[]],\"routeToDetailNew\"],null],[27,\"action\",[[22,0,[]],\"CreateShare\"],null],[23,[\"store\"]],[27,\"action\",[[22,0,[]],\"goToLogin\"],null],[27,\"action\",[[22,0,[]],\"loadBelow\"],null],[27,\"action\",[[22,0,[]],\"routeToLink\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[2]},null],[4,\"if\",[[23,[\"loadingNews\"]]],null,{\"statements\":[[0,\"        \"],[1,[21,\"paper-progress-linear\"],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"swiper-slide\",null,[[\"id\"],[\"crs\"]],{\"statements\":[[4,\"vertical-collection\",[[23,[\"sortedCrsModel\"]]],[[\"estimateHeight\",\"staticHeight\",\"bufferSize\",\"containerSelector\",\"lastReached\"],[115,true,20,\"md-content\",\"loadBelowCRS\"]],{\"statements\":[[0,\"        \"],[1,[27,\"news/crs-list\",null,[[\"item\",\"currentSlide\",\"routeToDetailNew\"],[[22,1,[]],[23,[\"currentSlide\"]],[27,\"action\",[[22,0,[]],\"routeToDetailNew\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[4,\"if\",[[23,[\"loadingCRS\"]]],null,{\"statements\":[[0,\"        \"],[1,[21,\"paper-progress-linear\"],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"if\",[[23,[\"exit\"]]],null,{\"statements\":[[4,\"paper-dialog\",null,[[\"class\",\"onClose\",\"clickOutsideToClose\"],[\"flex-50 brown-bkg\",[27,\"action\",[[22,0,[]],\"closeDialogWithParent\",\"cancel\"],null],true]],{\"statements\":[[0,\"      \"],[7,\"form\"],[9],[0,\"\\n\"],[4,\"paper-toolbar\",null,[[\"class\"],[\"black-bkg\"]],{\"statements\":[[4,\"paper-toolbar-tools\",null,[[\"class\"],[\"red-bkg\"]],{\"statements\":[[0,\"            \"],[7,\"h2\"],[9],[0,\"Warning\"],[10],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n            \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"closeDialogWithParent\",\"cancel\"],null]]],{\"statements\":[[1,[27,\"paper-icon\",null,[[\"icon\"],[\"close\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"paper-dialog-content\",null,null,{\"statements\":[[0,\"          \"],[7,\"p\"],[9],[0,\"\\n            Are you sure you want to exit the app?\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"paper-dialog-actions\",null,[[\"class\"],[\"layout-row\"]],{\"statements\":[[0,\"          \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"ok\"],null]]],{\"statements\":[[0,\"Yes\"]],\"parameters\":[]},null],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"closeDialogWithParent\"],null]]],{\"statements\":[[0,\"No\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/home.hbs" } });
});
;define("vidya-frontend/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "K4OL7WOp", "block": "{\"symbols\":[],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"flex scroll black-bkg\"]],{\"statements\":[[4,\"if\",[[27,\"is-empty\",[[23,[\"interModel\",\"0\"]]],null]],null,{\"statements\":[],\"parameters\":[]},{\"statements\":[[0,\"  \"],[1,[27,\"news/inter-card\",null,[[\"interModel\",\"routeToInterList\",\"routeToNews\",\"routeToDetailNew\",\"class\",\"checkCRS\"],[[23,[\"interModel\"]],[27,\"action\",[[22,0,[]],\"routeToInterList\"],null],[27,\"action\",[[22,0,[]],\"routeToNews\"],null],[27,\"action\",[[22,0,[]],\"routeToDetailNew\"],null],\"hide-crs\",[27,\"action\",[[22,0,[]],\"checkCRS\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]}],[4,\"if\",[[27,\"is-empty\",[[23,[\"localModel\",\"0\"]]],null]],null,{\"statements\":[],\"parameters\":[]},{\"statements\":[[0,\"  \"],[1,[27,\"news/local-card\",null,[[\"localModel\",\"routeToLocalList\",\"routeToNews\",\"routeToDetailNew\",\"class\",\"checkCRS\"],[[23,[\"localModel\"]],[27,\"action\",[[22,0,[]],\"routeToLocalList\"],null],[27,\"action\",[[22,0,[]],\"routeToNews\"],null],[27,\"action\",[[22,0,[]],\"routeToDetailNew\"],null],\"hide-crs\",[27,\"action\",[[22,0,[]],\"checkCRS\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]}],[4,\"if\",[[27,\"is-empty\",[[23,[\"privateModel\",\"0\"]]],null]],null,{\"statements\":[],\"parameters\":[]},{\"statements\":[[0,\"  \"],[1,[27,\"news/private-card\",null,[[\"privateModel\",\"routeToPrivateList\",\"store\",\"routeToDetailNew\",\"class\",\"checkCRS\"],[[23,[\"privateModel\"]],[27,\"action\",[[22,0,[]],\"routeToPrivateList\"],null],[23,[\"store\"]],[27,\"action\",[[22,0,[]],\"routeToDetailNew\"],null],\"hide-crs\",[27,\"action\",[[22,0,[]],\"checkCRS\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null],[7,\"span\"],[11,\"class\",\"border-shadow\"],[9],[10],[0,\"\\n\"],[4,\"paper-content\",null,[[\"class\"],[\"layout-row brown-bkg\"]],{\"statements\":[[0,\"  \"],[4,\"paper-button\",null,[[\"class\",\"raised\",\"onClick\"],[\"flex black-container\",true,[27,\"action\",[[22,0,[]],\"goToDialog\"],null]]],{\"statements\":[[0,\"Discuss with friends\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/index.hbs" } });
});
;define("vidya-frontend/templates/loading", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "FxppYIeX", "block": "{\"symbols\":[],\"statements\":[[1,[27,\"spinner-circle\",null,[[\"class\"],[\"layout-row flex layout-align-center-center black-bkg\"]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/loading.hbs" } });
});
;define("vidya-frontend/templates/login", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "jHKhHjBP", "block": "{\"symbols\":[],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"flex full-black-bkg\"]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"login-logo\"],[9],[0,\"\\n    \"],[7,\"img\"],[11,\"src\",\"vidya.svg\"],[11,\"class\",\"login-img\"],[11,\"alt\",\"\"],[9],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\" scene--card\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"card\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"card__face card__face--front\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"layout-column m-b-20 ui-center\"],[9],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"form\"],[11,\"class\",\"login100-form validate-form layout-padding \"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"container-login100-form-btn\"],[11,\"id\",\"tarnsform\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"smsLogin\"]],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"wrap-login100-form-btn\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"login100-form-bgbtn\"],[9],[10],[0,\"\\n              \"],[7,\"button\"],[11,\"class\",\"login100-form-btn \"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[9],[0,\"\\n                login with Phone\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"txt1 text-center\"],[9],[0,\"\\n            \"],[7,\"span\"],[9],[0,\"\\n              Or Sign Up Using\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-center-start \"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"loginWithFacebook\"]],[9],[0,\"\\n            \"],[7,\"a\"],[11,\"href\",\"#\"],[11,\"class\",\"login100-social-item bg1\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[9],[0,\"\\n              \"],[7,\"i\"],[11,\"class\",\"fa fa-facebook\"],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"card__face card__face--back\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"layout-column m-b-20 m-t-20\"],[9],[0,\"\\n          \"],[7,\"span\"],[11,\"class\",\"lg-head\"],[9],[0,\"Login with Phone Number\"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"form\"],[11,\"class\",\"login100-form validate-form layout-padding \"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"wrap-input100 validate-input m-b-10\"],[9],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"label-input100 layout-row\"],[9],[0,\"username\"],[10],[0,\"\\n            \"],[1,[27,\"paper-icon\",[\"person\"],[[\"class\"],[\"icon-lg\"]]],false],[0,\"\\n            \"],[1,[27,\"input\",null,[[\"class\",\"type\",\"value\",\"onChange\",\"placeholder\"],[\"input100\",\"text\",[23,[\"username\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"username\"]]],null]],null],\"Type your name\"]]],false],[0,\"\\n            \"],[2,\" <span class=\\\"focus-input100\\\" data-symbol=\\\"\\\"></span> \"],[0,\"\\n          \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"alertMessage\"]]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"uname-alert\"],[9],[1,[21,\"alertMessage\"],false],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[7,\"div\"],[11,\"class\",\"wrap-input100 validate-input m-b-23\"],[9],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"label-input100 layout-row\"],[9],[0,\"Phone Number\"],[10],[0,\"\\n            \"],[1,[27,\"paper-icon\",[\"mobile_friendly\"],[[\"class\"],[\"icon-lg\"]]],false],[0,\"\\n            \"],[1,[27,\"input\",null,[[\"class\",\"type\",\"value\",\"onChange\",\"placeholder\",\"readonly\"],[\"input100\",\"text\",[23,[\"phone\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"phone\"]]],null]],null],\"Type your phonenumber\",true]]],false],[0,\"\\n            \"],[2,\" <span class=\\\"focus-input100\\\" data-symbol=\\\"\\\"></span> \"],[0,\"\\n          \"],[10],[0,\"\\n\\n          \"],[7,\"div\"],[11,\"class\",\"layout-column\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-start-center layout-padding\"],[9],[0,\"\\n\"],[4,\"x-file-input\",null,[[\"action\"],[[27,\"action\",[[22,0,[]],\"selectImg\"],null]]],{\"statements\":[[0,\"                \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[\"/photo.svg\"],null]],[11,\"alt\",\"\"],[11,\"class\",\"icon-wdt img-text\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"imgDisplay\"]]],null,{\"statements\":[[0,\"              \"],[7,\"div\"],[11,\"class\",\"layout-row\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-center-center flex\"],[9],[0,\"\\n                  \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"imgDisplay\",\"web_url\"]]],null]],[11,\"class\",\"eagle-login-photo layout-row layout-align-center-center\"],[9],[10],[0,\"\\n\"],[4,\"if\",[[27,\"not-eq\",[[23,[\"imgDisplay\",\"web_url\"]],\"/customer.png\"],null]],null,{\"statements\":[[0,\"                    \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"deleteImg\",[23,[\"imgDisplay\"]]],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"clear\"],null],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"              \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-center-center flex\"],[9],[0,\"\\n                \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[\"/customer.png\"],null]],[11,\"class\",\"eagle-login-photo layout-row layout-align-center-center\"],[9],[10],[0,\"\\n              \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"container-login100-form-btn\"],[11,\"id\",\"tarnsform\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"saveUser\"]],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"wrap-login100-form-btn\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"login100-form-bgbtn\"],[9],[10],[0,\"\\n              \"],[7,\"button\"],[11,\"class\",\"login100-form-btn \"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[9],[0,\"\\n                Create Account\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"disablebtn\"]]],null,{\"statements\":[[4,\"paper-dialog\",null,[[\"class\"],[\"flex-50 black-theme\"]],{\"statements\":[[0,\"      \"],[7,\"form\"],[9],[0,\"\\n\"],[4,\"paper-dialog-content\",null,null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-center-center\"],[9],[0,\"\\n            \"],[1,[27,\"paper-progress-circular\",null,[[\"warn\",\"diameter\"],[true,96]]],false],[0,\"\\n            \"],[7,\"p\"],[9],[0,\"Uploading....\"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"if\",[[23,[\"userBan\"]]],null,{\"statements\":[[0,\"  \"],[7,\"p\"],[11,\"class\",\"logo-color text-center\"],[9],[0,\"\\n      Sorry, your account is banned!\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[7,\"img\"],[11,\"id\",\"one\"],[12,\"src\",[21,\"img_url\"]],[11,\"width\",\"50\"],[11,\"height\",\"50\"],[11,\"crossOrigin\",\"anonymous\"],[11,\"hidden\",\"\"],[9],[10],[0,\"\\n\"],[7,\"link\"],[11,\"rel\",\"stylesheet\"],[11,\"href\",\"login/util.css\"],[11,\"type\",\"text/css\"],[9],[10],[0,\"\\n\"],[7,\"link\"],[11,\"rel\",\"stylesheet\"],[11,\"href\",\"login/main.css\"],[11,\"type\",\"text/css\"],[9],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/login.hbs" } });
});
;define("vidya-frontend/templates/news-detail", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "DMEhlyyC", "block": "{\"symbols\":[\"item\",\"card\"],\"statements\":[[4,\"paper-list\",null,[[\"id\",\"class\"],[\"scroll-top\",\"detail-scroll flex black-frame zero-pd\"]],{\"statements\":[[4,\"swiper-container\",null,[[\"class\",\"autoHeight\",\"onChange\",\"currentSlide\"],[\"slide-height\",true,[27,\"action\",[[22,0,[]],\"scrollTop\",\"true\"],null],[23,[\"currentSlide\"]]]],{\"statements\":[[4,\"each\",[[23,[\"posts\"]]],null,{\"statements\":[[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"        \"],[1,[27,\"news/detail-card\",null,[[\"item\"],[[22,1,[]]]]],false],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"speed-dia\"],[9],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"CreateShare\",[22,1,[\"id\"]]],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"share\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"randomAds\"]]],null,{\"statements\":[[4,\"paper-card\",null,[[\"class\"],[\"black-inner flex\"]],{\"statements\":[[0,\"            \"],[7,\"photo\"],[11,\"class\",\"flex\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"goToLink\",[23,[\"randomAds\",\"ads_link\"]]]],[9],[0,\"\\n              \"],[1,[27,\"component\",[[22,2,[\"image\"]]],[[\"src\",\"alt\",\"class\",\"onerror\"],[[27,\"convert-url\",[[23,[\"randomAds\",\"upload\"]],\"detail\"],null],\"Washed Out\",\"news-latest-img\",\"this.src='no_image.jpg'\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"img-absolute headline-text-bkg layout-column\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"head-text-time\"],[9],[0,\"\\n                \"],[7,\"span\"],[11,\"class\",\"text-limit-head \"],[9],[0,\"\\n                  \"],[1,[23,[\"randomAds\",\"company_name\"]],false],[0,\"\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[2]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/news-detail.hbs" } });
});
;define("vidya-frontend/templates/news/category", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rD6VoTCv", "block": "{\"symbols\":[\"item\"],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"flex black-bkg \"]],{\"statements\":[[4,\"paper-list\",null,[[\"class\"],[\"\"]],{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"cat-grid-container\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"model\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"news/category-card\",null,[[\"item\",\"goToCatSearch\"],[[22,1,[]],[27,\"action\",[[22,0,[]],\"goToCatSearch\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/news/category.hbs" } });
});
;define("vidya-frontend/templates/news/create-crs", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "CnY1rLal", "block": "{\"symbols\":[\"item\"],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"layout-column flex  brown-bkg\"]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"layout-column flex over-flow layout-padding\"],[9],[0,\"\\n    \"],[7,\"h2\"],[9],[0,\"Cross Reference System\"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\" \"],[9],[0,\"\\n      \"],[1,[27,\"paper-input\",null,[[\"textarea\",\"block\",\"label\",\"value\",\"onChange\"],[true,true,\"What's your opnion\",[23,[\"title\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"title\"]]],null]],null]]]],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"crs-count layout-column\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"checkdata\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"\"],[9],[0,\"\\n          \"],[7,\"span\"],[11,\"class\",\"crs-dialog-content\"],[9],[1,[22,1,[\"title\"]],false],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\" layout-column zero-pd\"],[9],[0,\"\\n    \"],[7,\"span\"],[11,\"class\",\"border-shadow\"],[9],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-row flex layout-row layout-align-end-start \"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"btndisable\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"btn-black-color\"],[9],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"raised\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"cancel\"],null]]],{\"statements\":[[0,\"Cancel\"]],\"parameters\":[]},null],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"disabled\",\"raised\"],[true,true]],{\"statements\":[[0,\"Create CRS\"]],\"parameters\":[]},null],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"btn-black-color\"],[9],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"raised\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"cancel\"],null]]],{\"statements\":[[0,\"Cancel\"]],\"parameters\":[]},null],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"raised\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"createGroup\"],null]]],{\"statements\":[[0,\"Create CRS\"]],\"parameters\":[]},null],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/news/create-crs.hbs" } });
});
;define("vidya-frontend/templates/news/create-share", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "vEJgRC05", "block": "{\"symbols\":[\"sharepost\"],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"layout-column flex layout-padding brown-bkg \"]],{\"statements\":[[4,\"each\",[[23,[\"share\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"layout-column flex over-flow brown-bkg font-fix\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-column\"],[9],[0,\"\\n        \"],[1,[27,\"paper-input\",null,[[\"textarea\",\"block\",\"label\",\"passThru\",\"value\",\"onChange\"],[true,true,\"Write something\",[27,\"hash\",null,[[\"rows\"],[3]]],[23,[\"shareText\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"shareText\"]]],null]],null]]]],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-column flex\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[22,1,[\"postImage\",\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"photo\"],[9],[0,\"\\n            \"],[7,\"img\"],[11,\"class\",\"news-latest-img\"],[12,\"src\",[22,1,[\"postImage\",\"web_url\"]]],[11,\"alt\",\"\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,1,[\"postImage\",\"type\"]],\"video\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"video\"],[11,\"class\",\"eagle-news-video\"],[11,\"preload\",\"auto\"],[11,\"controls\",\"\"],[9],[0,\"\\n            \"],[7,\"source\"],[12,\"src\",[27,\"convert-url\",[[22,1,[\"postImage\",\"web_url\"]]],null]],[11,\"type\",\"video/mp4\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"]],\"parameters\":[]},null]],\"parameters\":[]}],[0,\"        \"],[7,\"h3\"],[9],[1,[22,1,[\"title\"]],false],[10],[0,\"\\n        \"],[7,\"p\"],[11,\"class\",\"font-fix\"],[9],[0,\"\\n          \"],[1,[27,\"markdown-to-html\",[[22,1,[\"summary\"]]],null],false],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-column zero-pd black-container\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-row flex layout-row layout-align-end-start \"],[9],[0,\"\\n\"],[0,\"          \"],[4,\"paper-button\",null,[[\"class\",\"raised\",\"onClick\"],[\"black-container\",true,[27,\"action\",[[22,0,[]],\"cancel\"],null]]],{\"statements\":[[0,\"Cancel\"]],\"parameters\":[]},null],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"class\",\"raised\",\"onClick\"],[\"black-container\",true,[27,\"action\",[[22,0,[]],\"share\",[22,1,[]]],null]]],{\"statements\":[[0,\"Share\"]],\"parameters\":[]},null],[0,\"\\n\"],[0,\"      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/news/create-share.hbs" } });
});
;define("vidya-frontend/templates/news/crs-related", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5lpLlQ1Q", "block": "{\"symbols\":[],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"flex\"]],{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/news/crs-related.hbs" } });
});
;define("vidya-frontend/templates/news/home-slide", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "gjnOHrI1", "block": "{\"symbols\":[],\"statements\":[[4,\"paper-list\",null,[[\"class\"],[\"detail-scroll\"]],{\"statements\":[[4,\"swiper-container\",null,[[\"class\",\"autoHeight\",\"loop\"],[\"slide-height\",true,true]],{\"statements\":[[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"      \"],[1,[21,\"random-new-list\"],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/news/home-slide.hbs" } });
});
;define("vidya-frontend/templates/news/international-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "zS5zDAuz", "block": "{\"symbols\":[\"item\"],\"statements\":[[4,\"paper-content\",null,null,{\"statements\":[[4,\"paper-item\",null,[[\"class\"],[\"layout-row flex bg-white\"]],{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"head-color\"],[9],[0,\"\\n      \"],[1,[27,\"paper-icon\",[\"language\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-start-start\"],[9],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"inter-txt head-color\"],[9],[0,\"International News List\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[21,\"paper-divider\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"paper-list\",null,[[\"class\"],[\"flex main-bkg inter-list-pd list-scroll\"]],{\"statements\":[[4,\"each\",[[23,[\"model\"]]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,1,[\"section\",\"sectionname\"]],\"International\"],null]],null,{\"statements\":[[0,\"      \"],[1,[27,\"news/inter-list-card\",null,[[\"item\",\"goToDetailNews\"],[[22,1,[]],[27,\"action\",[[22,0,[]],\"goToDetailNews\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/news/international-list.hbs" } });
});
;define("vidya-frontend/templates/news/loading", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5t1W5t9m", "block": "{\"symbols\":[],\"statements\":[[1,[27,\"spinner-circle\",null,[[\"class\"],[\"layout-row flex layout-align-center-center black-bkg\"]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/news/loading.hbs" } });
});
;define("vidya-frontend/templates/news/local-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "y9wr6Xhl", "block": "{\"symbols\":[\"item\"],\"statements\":[[4,\"paper-content\",null,null,{\"statements\":[[4,\"paper-item\",null,[[\"class\"],[\"layout-row flex bg-white\"]],{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"head-color\"],[9],[0,\"\\n      \"],[1,[27,\"paper-icon\",[\"language\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-start-start\"],[9],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"inter-txt head-color\"],[9],[0,\"Local News List\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[21,\"paper-divider\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"paper-list\",null,[[\"class\"],[\"flex main-bkg inter-list-pd list-scroll\"]],{\"statements\":[[4,\"each\",[[23,[\"model\"]]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,1,[\"section\",\"sectionname\"]],\"Local\"],null]],null,{\"statements\":[[0,\"      \"],[1,[27,\"news/local-list-card\",null,[[\"item\"],[[22,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/news/local-list.hbs" } });
});
;define("vidya-frontend/templates/news/post-detail", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qdONedwI", "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[9],[0,\"remove page\"],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/news/post-detail.hbs" } });
});
;define("vidya-frontend/templates/news/private-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Jc8tLiM8", "block": "{\"symbols\":[\"item\"],\"statements\":[[4,\"paper-content\",null,null,{\"statements\":[[4,\"paper-item\",null,[[\"class\"],[\"layout-row flex bg-white\"]],{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"head-color\"],[9],[0,\"\\n      \"],[1,[27,\"paper-icon\",[\"language\"],null],false],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-start-start\"],[9],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"inter-txt head-color\"],[9],[0,\"International News List\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[1,[21,\"paper-divider\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"paper-list\",null,[[\"class\"],[\"flex main-bkg inter-list-pd list-scroll\"]],{\"statements\":[[4,\"each\",[[23,[\"model\"]]],null,{\"statements\":[[0,\"    \"],[1,[27,\"news/private-list-card\",null,[[\"item\"],[[22,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/news/private-list.hbs" } });
});
;define("vidya-frontend/templates/news/search-category", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "l6YBzxHD", "block": "{\"symbols\":[\"item\"],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"flex scroll \"]],{\"statements\":[[4,\"vertical-collection\",[[23,[\"sortedModel\"]]],[[\"estimateHeight\",\"staticHeight\",\"bufferSize\",\"lastReached\",\"containerSelector\"],[200,true,20,\"loadBelow\",\"md-content\"]],{\"statements\":[[0,\"  \"],[1,[27,\"news/random-news-list\",null,[[\"class\",\"item\",\"routeToDetailNew\",\"CreateShare\",\"store\",\"goToLogin\"],[\"news-latest-mg mb-5 flex\",[22,1,[]],[27,\"action\",[[22,0,[]],\"routeToDetailNew\"],null],[27,\"action\",[[22,0,[]],\"CreateShare\"],null],[23,[\"store\"]],[27,\"action\",[[22,0,[]],\"goToLogin\"],null]]]],false],[0,\"\\n\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/news/search-category.hbs" } });
});
;define("vidya-frontend/templates/notification", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "GlW8OYXK", "block": "{\"symbols\":[],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"flex\"]],{\"statements\":[],\"parameters\":[]},null],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/notification.hbs" } });
});
;define("vidya-frontend/templates/setting", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "XTbv1Bd+", "block": "{\"symbols\":[],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"flex\"]],{\"statements\":[[7,\"h5\"],[9],[0,\"this is Entertainment Page\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/setting.hbs" } });
});
;define("vidya-frontend/templates/social-search", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "g92mCA7+", "block": "{\"symbols\":[\"item\"],\"statements\":[[4,\"paper-content\",null,[[\"id\",\"class\"],[\"content-list\",\"flex search-bkg\"]],{\"statements\":[[4,\"each\",[[23,[\"socialModel\"]]],null,{\"statements\":[[0,\"    \"],[1,[27,\"social-search-card\",null,[[\"item\",\"goToDiscuss\",\"goToProfiles\",\"goToGroups\"],[[22,1,[]],[27,\"action\",[[22,0,[]],\"goToDiscuss\"],null],[27,\"action\",[[22,0,[]],\"goToProfiles\"],null],[27,\"action\",[[22,0,[]],\"goToGroups\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/social-search.hbs" } });
});
;define("vidya-frontend/templates/social", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NtSxenO5", "block": "{\"symbols\":[\"item\",\"index\",\"&default\"],\"statements\":[[4,\"if\",[[23,[\"loadingScroll\"]]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"overlay-m\"],[9],[0,\"\\n     \"],[1,[27,\"spinner-circle\",null,[[\"class\"],[\"layout-row flex layout-align-center-center popup\"]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,[\"searchView\"]]],null,{\"statements\":[[1,[27,\"paper-input\",null,[[\"placeholder\",\"type\",\"value\",\"onChange\",\"icon\"],[\"Address\",\"text\",[23,[\"user\",\"address\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"user\",\"address\"]]],null]],null],\"place\"]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"paper-content\",null,[[\"id\",\"class\"],[\"content-list\",\"social-bkg flex\"]],{\"statements\":[[7,\"ul\"],[11,\"class\",\"grid\"],[11,\"id\",\"grid\"],[11,\"style\",\"list-style-type:none\"],[9],[0,\"\\n\"],[4,\"vertical-collection\",[[23,[\"socialModel\"]]],[[\"estimateHeight\",\"staticHeight\",\"bufferSize\",\"lastReached\",\"containerSelector\",\"renderAll\"],[100,true,20,\"loadBelow\",\"md-content\",true]],{\"statements\":[[0,\"    \"],[7,\"li\"],[9],[0,\"\\n\\n\"],[4,\"if\",[[22,1,[\"sharePost\"]]],null,{\"statements\":[[0,\"    \"],[14,3],[0,\"\\n    \"],[1,[27,\"socials/share-post-card\",null,[[\"IsOpen\",\"index\",\"item\",\"store\",\"shareSocial\",\"currentid\",\"editSocial\",\"deleteSocial\",\"goToDiscuss\",\"goToProfiles\",\"goToGroups\"],[[23,[\"IsOpen\"]],[22,2,[]],[22,1,[]],[23,[\"store\"]],[27,\"action\",[[22,0,[]],\"shareSocial\"],null],[23,[\"currentid\"]],[27,\"action\",[[22,0,[]],\"editSocial\"],null],[27,\"action\",[[22,0,[]],\"deleteSocial\"],null],[27,\"action\",[[22,0,[]],\"goToDiscuss\"],null],[27,\"action\",[[22,0,[]],\"goToProfiles\"],null],[27,\"action\",[[22,0,[]],\"goToGroups\"],null]]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,1,[\"groupPost\"]]],null,{\"statements\":[[0,\"    \"],[14,3],[0,\"\\n    \"],[1,[27,\"socials/group-post-card\",null,[[\"IsOpen\",\"index\",\"item\",\"store\",\"currentid\",\"shareSocial\",\"editSocial\",\"deleteSocial\",\"goToDiscuss\",\"goToProfiles\",\"goToGroups\"],[[23,[\"IsOpen\"]],[22,2,[]],[22,1,[]],[23,[\"store\"]],[23,[\"currentid\"]],[27,\"action\",[[22,0,[]],\"shareSocial\"],null],[27,\"action\",[[22,0,[]],\"editSocial\"],null],[27,\"action\",[[22,0,[]],\"deleteSocial\"],null],[27,\"action\",[[22,0,[]],\"goToDiscuss\"],null],[27,\"action\",[[22,0,[]],\"goToProfiles\"],null],[27,\"action\",[[22,0,[]],\"goToGroups\"],null]]]],false],[0,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,1,[\"previous_state\"]],\"CRS\"],null]],null,{\"statements\":[[0,\"    \"],[14,3],[0,\"\\n    \"],[1,[27,\"socials/crs-post-card\",null,[[\"item\",\"index\",\"store\",\"currentid\",\"shareSocial\",\"goToDiscuss\",\"goToProfiles\",\"editSocial\",\"deleteSocial\"],[[22,1,[]],[22,2,[]],[23,[\"store\"]],[23,[\"currentid\"]],[27,\"action\",[[22,0,[]],\"shareSocial\"],null],[27,\"action\",[[22,0,[]],\"goToDiscuss\"],null],[27,\"action\",[[22,0,[]],\"goToProfiles\"],null],[27,\"action\",[[22,0,[]],\"editSocial\"],null],[27,\"action\",[[22,0,[]],\"deleteSocial\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[14,3],[0,\"\\n    \"],[1,[27,\"socials/social-list-card\",null,[[\"IsOpen\",\"index\",\"item\",\"store\",\"currentid\",\"shareSocial\",\"editSocial\",\"deleteSocial\",\"goToDiscuss\",\"routeToDetailNew\",\"goToProfiles\",\"goToGroups\"],[[23,[\"IsOpen\"]],[22,2,[]],[22,1,[]],[23,[\"store\"]],[23,[\"currentid\"]],[27,\"action\",[[22,0,[]],\"shareSocial\"],null],[27,\"action\",[[22,0,[]],\"editSocial\"],null],[27,\"action\",[[22,0,[]],\"deleteSocial\"],null],[27,\"action\",[[22,0,[]],\"goToDiscuss\"],null],[27,\"action\",[[22,0,[]],\"routeToDetailNew\"],null],[27,\"action\",[[22,0,[]],\"goToProfiles\"],null],[27,\"action\",[[22,0,[]],\"goToGroups\"],null]]]],false],[0,\"\\n    \"]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[1,2]},null],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"loading\"]]],null,{\"statements\":[[1,[21,\"paper-progress-linear\"],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[7,\"div\"],[11,\"class\",\"newbutton\"],[9],[0,\"\\n\"],[4,\"paper-button\",null,[[\"fab\",\"accent\",\"onClick\"],[true,true,[27,\"action\",[[22,0,[]],\"createPost\"],null]]],{\"statements\":[[0,\"    \"],[1,[27,\"paper-icon\",[\"add\"],[[\"size\"],[30]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/social.hbs" } });
});
;define("vidya-frontend/templates/startup", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "IChGoU2Y", "block": "{\"symbols\":[\"item\",\"item\",\"item\"],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"flex default-bkg\"]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"layout-margin bg-white\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-row flex\"],[9],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"startup-text\"],[9],[0,\"Celebrity \"],[10],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"flex see-more-text\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"goToFriends\",\"celebrity\"]],[9],[0,\"See More\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"swiper-container\",null,[[\"updateFor\",\"class\",\"slidesPerView\"],[[23,[\"celeModel\"]],\"story-height\",4]],{\"statements\":[[4,\"each\",[[23,[\"celeModel\"]]],null,{\"statements\":[[4,\"if\",[[27,\"not-eq\",[[23,[\"isSelf\"]],[22,3,[\"id\"]]],null]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,3,[\"role\"]],\"celebrity\"],null]],null,{\"statements\":[[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"              \"],[1,[27,\"socials/social-card\",null,[[\"item\",\"following\",\"followHandler\",\"gotoProfile\"],[[22,3,[]],[23,[\"following\"]],[27,\"action\",[[22,0,[]],\"followHandler\"],null],[27,\"action\",[[22,0,[]],\"gotoProfile\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[3]},null]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"layout-margin bg-white\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-row flex\"],[9],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"startup-text\"],[9],[0,\"User\"],[10],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"flex see-more-text\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"goToFriends\",\"User\"]],[9],[0,\"See More\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"swiper-container\",null,[[\"updateFor\",\"class\",\"slidesPerView\"],[[23,[\"celeModel\"]],\"story-height\",4]],{\"statements\":[[4,\"each\",[[23,[\"celeModel\"]]],null,{\"statements\":[[4,\"if\",[[27,\"not-eq\",[[23,[\"isSelf\"]],[22,2,[\"id\"]]],null]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[\"role\"]],\"User\"],null]],null,{\"statements\":[[4,\"swiper-slide\",null,null,{\"statements\":[[0,\"              \"],[1,[27,\"socials/social-card\",null,[[\"item\",\"following\",\"followHandler\",\"gotoProfile\"],[[22,2,[]],[23,[\"following\"]],[27,\"action\",[[22,0,[]],\"followHandler\"],null],[27,\"action\",[[22,0,[]],\"gotoProfile\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[2]},null]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"layout-margin bg-white\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-row flex\"],[9],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"startup-text\"],[9],[0,\"Groups\"],[10],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"flex see-more-text\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"findGroups\"]],[9],[0,\"See More\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"group-grid-container\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"groupModel\"]]],null,{\"statements\":[[4,\"if\",[[27,\"not-eq\",[[23,[\"isSelf\"]],[22,1,[\"userinfo\",\"userId\"]]],null]],null,{\"statements\":[[4,\"if\",[[27,\"ban-user\",[[22,1,[\"banuser_list\"]],[23,[\"itself\"]]],null]],null,{\"statements\":[[0,\"          \"],[1,[27,\"group-card\",null,[[\"item\",\"following\",\"followHandler\",\"goToGroups\"],[[22,1,[]],[23,[\"groups\"]],[27,\"action\",[[22,0,[]],\"followHandler\"],null],[27,\"action\",[[22,0,[]],\"goToGroups\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n\\n\"]],\"parameters\":[]},null],[4,\"paper-content\",null,[[\"class\"],[\"layout-row brown-bkg\"]],{\"statements\":[[0,\"  \"],[4,\"paper-button\",null,[[\"class\",\"raised\",\"onClick\"],[\"flex black-container\",true,[27,\"action\",[[22,0,[]],\"goToSocial\"],null]]],{\"statements\":[[0,\"Go To Social\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/startup.hbs" } });
});
;define("vidya-frontend/templates/tabs/entertainment", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "sEFGBQzN", "block": "{\"symbols\":[],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"flex\"]],{\"statements\":[[2,\" <div class=\\\"layout-row flex\\\">\\n  <iframe src=\\\"http://192.168.10.102/player/player.html\\\" ></iframe>\\n</div> \"],[0,\"\\n\"],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/tabs/entertainment.hbs" } });
});
;define("vidya-frontend/templates/tabs/news", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "1pmzg9an", "block": "{\"symbols\":[],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"flex\"]],{\"statements\":[[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/tabs/news.hbs" } });
});
;define("vidya-frontend/templates/tabs/setting", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "gIOc4iSW", "block": "{\"symbols\":[],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"flex\"]],{\"statements\":[[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/tabs/setting.hbs" } });
});
;define("vidya-frontend/templates/tabs/social", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "suDqAH63", "block": "{\"symbols\":[],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"flex\"]],{\"statements\":[[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/tabs/social.hbs" } });
});
;define("vidya-frontend/templates/toolbar", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "QurkYU/m", "block": "{\"symbols\":[\"item\",\"toggleAction\",\"toggleAction\",\"toggleAction\"],\"statements\":[[4,\"if\",[[27,\"toolbar\",[[23,[\"currentRoute\"]]],null]],null,{\"statements\":[[4,\"paper-toolbar\",null,[[\"class\"],[\"md-whiteframe-z1 icons-color icon-color \"]],{\"statements\":[[4,\"paper-toolbar-tools\",null,null,{\"statements\":[[4,\"if\",[[27,\"not-eq\",[[23,[\"currentRoute\"]],\"Social\"],null]],null,{\"statements\":[[4,\"if\",[[27,\"not-eq\",[[23,[\"currentRoute\"]],\"Live\"],null]],null,{\"statements\":[[4,\"if\",[[27,\"not-eq\",[[23,[\"currentRoute\"]],\"News\"],null]],null,{\"statements\":[[4,\"paper-button\",null,[[\"iconButton\",\"primary\",\"onClick\"],[true,true,[27,\"action\",[[22,0,[]],\"backToRoute\"],null]]],{\"statements\":[[0,\"              \"],[1,[27,\"paper-icon\",[\"arrow_back\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-start-center\"],[9],[0,\"\\n        \"],[7,\"img\"],[11,\"src\",\"mainlogo.svg\"],[11,\"alt\",\"\"],[11,\"class\",\"logo-size\"],[9],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"logo-color\"],[9],[0,\"\\n        \"],[1,[21,\"currentRoute\"],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"if\",[[27,\"eq\",[[23,[\"currentRoute\"]],\"News\"],null]],null,{\"statements\":[[4,\"paper-toolbar\",null,[[\"class\"],[\"md-whiteframe-z1 icons-color \"]],{\"statements\":[[4,\"paper-toolbar-tools\",null,[[\"class\"],[\"icon-color\"]],{\"statements\":[[4,\"paper-sidenav-toggle\",null,[[\"name\"],[\"left\"]],{\"statements\":[[0,\"        \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],[22,4,[]]],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"menu\"],null],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-start-center\"],[9],[0,\"\\n        \"],[7,\"img\"],[11,\"src\",\"mainlogo.svg\"],[11,\"alt\",\"\"],[11,\"class\",\"logo-size\"],[9],[10],[0,\"\\n      \"],[10],[0,\"\\n\\n      \"],[7,\"span\"],[11,\"class\",\"logo-color\"],[9],[0,\"\\n        \"],[1,[21,\"currentRoute\"],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n\"],[4,\"paper-button\",null,[[\"onClick\",\"iconButton\",\"primary\"],[[27,\"action\",[[22,0,[]],\"routeToCategory\"],null],true,true]],{\"statements\":[[0,\"        \"],[1,[27,\"paper-icon\",[\"category\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[27,\"or\",[[27,\"eq\",[[23,[\"currentRoute\"]],\"Social\"],null],[27,\"eq\",[[23,[\"currentRoute\"]],\"Social-Search\"],null]],null]],null,{\"statements\":[[4,\"paper-toolbar\",null,[[\"class\"],[\"md-whiteframe-z1 icons-color \"]],{\"statements\":[[4,\"paper-toolbar-tools\",null,[[\"class\"],[\"icon-color\"]],{\"statements\":[[4,\"paper-sidenav-toggle\",null,[[\"name\"],[\"left\"]],{\"statements\":[[0,\"        \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],[22,3,[]]],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"menu\"],null],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"      \"],[2,\" social searchbox \"],[0,\"\\n\"],[4,\"if\",[[23,[\"social_showHide\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"layout-row flex search-input \"],[9],[0,\"\\n          \"],[1,[27,\"paper-input\",null,[[\"class\",\"placeholder\",\"type\",\"value\",\"onChange\",\"keyDown\"],[\"flex\",\"Search something\",\"text\",[23,[\"socialsearchData\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"socialsearchData\"]]],null]],null],[27,\"action\",[[22,0,[]],\"socialReceived\"],null]]]],false],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"paper-button\",null,[[\"iconButton\",\"primary\",\"onClick\"],[true,true,[27,\"action\",[[22,0,[]],\"social_clearData\"],null]]],{\"statements\":[[0,\"          \"],[1,[27,\"paper-icon\",[\"clear\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-start-center\"],[9],[0,\"\\n          \"],[7,\"img\"],[11,\"src\",\"mainlogo.svg\"],[11,\"alt\",\"\"],[11,\"class\",\"logo-size\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"logo-color\"],[9],[0,\"\\n          \"],[1,[21,\"currentRoute\"],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"social_fullSearch\"]],[9],[0,\"\\n\"],[4,\"paper-button\",null,[[\"iconButton\",\"primary\"],[true,true]],{\"statements\":[[0,\"            \"],[1,[27,\"paper-icon\",[\"search\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[2,\" <span class=\\\"flex\\\"></span> \"],[0,\"\\n\"],[4,\"paper-button\",null,[[\"iconButton\",\"primary\",\"onClick\"],[true,true,[27,\"action\",[[22,0,[]],\"routeToWall\"],null]]],{\"statements\":[[0,\"        \"],[1,[27,\"paper-icon\",[\"account_circle\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"currentRoute\"]],\"Live\"],null]],null,{\"statements\":[[4,\"paper-toolbar\",null,[[\"class\"],[\"md-whiteframe-z1 icons-color \"]],{\"statements\":[[4,\"paper-toolbar-tools\",null,[[\"class\"],[\"icon-color\"]],{\"statements\":[[4,\"paper-sidenav-toggle\",null,[[\"name\"],[\"left\"]],{\"statements\":[[0,\"        \"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],[22,2,[]]],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"menu\"],null],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-start-center\"],[9],[0,\"\\n        \"],[7,\"img\"],[11,\"src\",\"mainlogo.svg\"],[11,\"alt\",\"\"],[11,\"class\",\"logo-size\"],[9],[10],[0,\"\\n      \"],[10],[0,\"\\n\\n      \"],[7,\"span\"],[11,\"class\",\"logo-color\"],[9],[0,\"\\n        \"],[1,[21,\"currentRoute\"],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"currentRoute\"]],\"Chat List\"],null]],null,{\"statements\":[[4,\"paper-toolbar\",null,[[\"class\"],[\"md-whiteframe-z1 icons-color icons-color icon-color\"]],{\"statements\":[[4,\"paper-toolbar-tools\",null,[[\"class\"],[\"icon-color\"]],{\"statements\":[[4,\"paper-button\",null,[[\"iconButton\",\"primary\",\"onClick\"],[true,true,[27,\"action\",[[22,0,[]],\"backToRoute\"],null]]],{\"statements\":[[0,\"        \"],[1,[27,\"paper-icon\",[\"arrow_back\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-row\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"currentUser\",\"status\"]],\"success\"],null]],null,{\"statements\":[[0,\"          \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"currentUser\",\"web_url\"]]],null]],[11,\"class\",\"toolbar-profile\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"          \"],[7,\"img\"],[12,\"src\",[23,[\"currentUser\",\"web_url\"]]],[11,\"class\",\"toolbar-profile\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[7,\"span\"],[11,\"class\",\"layout-align-start-center layout-row txt-chat-list\"],[9],[0,\"Chat List\"],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n\"],[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"routeToGroup\"],null]]],{\"statements\":[[0,\"        \"],[1,[27,\"paper-icon\",[\"group_add\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"if\",[[27,\"eq\",[[23,[\"currentRoute\"]],\"Chat\"],null]],null,{\"statements\":[[4,\"paper-toolbar\",null,[[\"class\"],[\"md-whiteframe-z1 icons-color icons-color icon-color\"]],{\"statements\":[[4,\"paper-toolbar-tools\",null,[[\"class\"],[\"icon-color\"]],{\"statements\":[[4,\"paper-button\",null,[[\"iconButton\",\"primary\",\"onClick\"],[true,true,[27,\"action\",[[22,0,[]],\"backToRoute\"],null]]],{\"statements\":[[0,\"        \"],[1,[27,\"paper-icon\",[\"arrow_back\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-row\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"checktype\"]],\"ChatGroup\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"group-grid-width\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"circle-group\"],[9],[0,\"\\n\"],[4,\"each\",[[27,\"chatgroup\",[[23,[\"groupUser\"]]],null]],null,{\"statements\":[[4,\"if\",[[22,1,[]]],null,{\"statements\":[[0,\"                  \"],[7,\"div\"],[11,\"class\",\"circle-round\"],[9],[0,\"\\n                    \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[22,1,[\"user_url\"]]],null]],[11,\"class\",\"group-images\"],[9],[10],[0,\"\\n                  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"chatUserProfile\",\"status\"]],\"success\"],null]],null,{\"statements\":[[0,\"            \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[23,[\"chatUserProfile\",\"web_url\"]]],null]],[11,\"class\",\"toolbar-profile\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[7,\"img\"],[12,\"src\",[23,[\"chatUserProfile\",\"web_url\"]]],[11,\"class\",\"toolbar-profile\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"          \"],[7,\"span\"],[11,\"class\",\"layout-align-start-center layout-row txt-chat-list\"],[9],[1,[21,\"chatName\"],false],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"      \"],[10],[0,\"\\n\\n      \"],[7,\"span\"],[11,\"class\",\"layout-align-start-center layout-row txt-chat-list\"],[9],[1,[21,\"channelname\"],false],[10],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"checktype\"]],\"ChatGroup\"],null]],null,{\"statements\":[[4,\"paper-button\",null,[[\"iconButton\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"gotogroupdetail\"],null]]],{\"statements\":[[0,\"          \"],[1,[27,\"paper-icon\",[\"info\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"if\",[[27,\"eq\",[[23,[\"currentRoute\"]],\"Find Friends\"],null]],null,{\"statements\":[[4,\"paper-toolbar\",null,[[\"class\"],[\"md-whiteframe-z1 icons-color \"]],{\"statements\":[[4,\"paper-toolbar-tools\",null,[[\"class\"],[\"icon-color\"]],{\"statements\":[[4,\"paper-button\",null,[[\"iconButton\",\"primary\",\"onClick\"],[true,true,[27,\"action\",[[22,0,[]],\"backToRoute\"],null]]],{\"statements\":[[0,\"        \"],[1,[27,\"paper-icon\",[\"arrow_back\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"startup_showHide\"]]],null,{\"statements\":[[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"layout-row flex search-input \"],[9],[0,\"\\n          \"],[1,[27,\"paper-input\",null,[[\"class\",\"placeholder\",\"type\",\"value\",\"onChange\",\"keyDown\"],[\"flex\",\"Search something\",\"text\",[23,[\"startupsearchData\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"startupsearchData\"]]],null]],null],[27,\"action\",[[22,0,[]],\"userReceived\"],null]]]],false],[0,\"\\n        \"],[10],[0,\"\\n\\n        \"],[7,\"span\"],[11,\"class\",\"fa fa-fw fa-times field-icon \"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"startup_clearData\"]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\n\\n        \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-start-center\"],[9],[0,\"\\n          \"],[7,\"img\"],[11,\"src\",\"mainlogo.svg\"],[11,\"alt\",\"\"],[11,\"class\",\"logo-size\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"logo-color flex\"],[9],[0,\"\\n          \"],[1,[21,\"currentRoute\"],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"startup_fullSearch\"]],[9],[0,\"\\n\"],[4,\"paper-button\",null,[[\"iconButton\",\"primary\"],[true,true]],{\"statements\":[[0,\"            \"],[1,[27,\"paper-icon\",[\"search\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[]}]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"if\",[[27,\"eq\",[[23,[\"currentRoute\"]],\"startup\"],null]],null,{\"statements\":[[4,\"paper-toolbar\",null,[[\"class\"],[\"md-whiteframe-z1 icons-color \"]],{\"statements\":[[4,\"paper-toolbar-tools\",null,[[\"class\"],[\"icon-color\"]],{\"statements\":[[4,\"paper-button\",null,[[\"iconButton\",\"primary\",\"onClick\"],[true,true,[27,\"action\",[[22,0,[]],\"backToRoute\"],null]]],{\"statements\":[[0,\"        \"],[1,[27,\"paper-icon\",[\"arrow_back\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,[\"startup_showHide\"]]],null,{\"statements\":[[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"layout-row flex search-input \"],[9],[0,\"\\n          \"],[1,[27,\"paper-input\",null,[[\"class\",\"placeholder\",\"type\",\"value\",\"onChange\",\"keyDown\"],[\"flex\",\"Search something\",\"text\",[23,[\"startupsearchData\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"startupsearchData\"]]],null]],null],[27,\"action\",[[22,0,[]],\"userReceived\"],null]]]],false],[0,\"\\n        \"],[10],[0,\"\\n\\n        \"],[7,\"span\"],[11,\"class\",\"fa fa-fw fa-times field-icon \"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"startup_clearData\"]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\n\\n        \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-start-center\"],[9],[0,\"\\n          \"],[7,\"img\"],[11,\"src\",\"mainlogo.svg\"],[11,\"alt\",\"\"],[11,\"class\",\"logo-size\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"logo-color flex\"],[9],[0,\"\\n          \"],[1,[21,\"currentRoute\"],false],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"startup_fullSearch\"]],[9],[0,\"\\n\"],[4,\"paper-button\",null,[[\"iconButton\",\"primary\"],[true,true]],{\"statements\":[[0,\"            \"],[1,[27,\"paper-icon\",[\"search\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[2,\" category  \"],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"currentRoute\"]],\"Category\"],null]],null,{\"statements\":[[4,\"paper-toolbar\",null,[[\"class\"],[\"md-whiteframe-z1 icons-color \"]],{\"statements\":[[4,\"paper-toolbar-tools\",null,[[\"class\"],[\"icon-color\"]],{\"statements\":[[4,\"paper-button\",null,[[\"iconButton\",\"primary\",\"onClick\"],[true,true,[27,\"action\",[[22,0,[]],\"backToRoute\"],null]]],{\"statements\":[[0,\"        \"],[1,[27,\"paper-icon\",[\"arrow_back\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-row flex search-input \"],[9],[0,\"\\n        \"],[1,[27,\"paper-input\",null,[[\"class\",\"placeholder\",\"type\",\"value\",\"onChange\",\"keyDown\"],[\"flex\",\"Search something\",\"text\",[23,[\"searchData\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"searchData\"]]],null]],null],[27,\"action\",[[22,0,[]],\"keyReceived\"],null]]]],false],[0,\"\\n      \"],[10],[0,\"\\n\"],[4,\"paper-button\",null,[[\"iconButton\",\"primary\",\"onClick\"],[true,true,[27,\"action\",[[22,0,[]],\"category_clearData\"],null]]],{\"statements\":[[0,\"        \"],[1,[27,\"paper-icon\",[\"clear\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"currentRoute\"]],\"Profile\"],null]],null,{\"statements\":[[4,\"paper-toolbar\",null,[[\"class\"],[\"md-whiteframe-z1 icons-color \"]],{\"statements\":[[4,\"paper-toolbar-tools\",null,[[\"class\"],[\"icon-color\"]],{\"statements\":[[4,\"paper-button\",null,[[\"iconButton\",\"primary\",\"onClick\"],[true,true,[27,\"action\",[[22,0,[]],\"backToRoute\"],null]]],{\"statements\":[[0,\"        \"],[1,[27,\"paper-icon\",[\"arrow_back\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-start-center\"],[9],[0,\"\\n        \"],[7,\"img\"],[11,\"src\",\"mainlogo.svg\"],[11,\"alt\",\"\"],[11,\"class\",\"logo-size\"],[9],[10],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"logo-color\"],[9],[0,\"\\n        \"],[1,[21,\"currentRoute\"],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n      \"],[2,\" {{#paper-sidenav-toggle name=\\\"right\\\" as |toggleAction|}}\\n        {{#paper-button iconButton=true  onClick=(action toggleAction)}}{{paper-icon \\\"info\\\"}}{{/paper-button}}\\n      {{/paper-sidenav-toggle}} \"],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"relative\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"routeToNoti\"]],[9],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/toolbar.hbs" } });
});
;define("vidya-frontend/templates/user/chat-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Gb6gkC3Q", "block": "{\"symbols\":[\"item\",\"item\"],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"black-bkg flex\"]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\" bg-white \"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-row flex layout-padding\"],[9],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"startup-text\"],[9],[0,\"Users\"],[10],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"flex see-more-text\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"routeToUserList\"]],[9],[0,\"See More\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\\n\\n    \"],[7,\"div\"],[11,\"class\",\"chat-list-container chat-list-flex layout-row user-chat-height\"],[9],[0,\"\\n\"],[4,\"vertical-collection\",[[23,[\"sortedModel\"]]],[[\"estimateHeight\",\"staticHeight\",\"bufferSize\",\"lastReached\",\"containerSelector\"],[50,true,50,\"loadBelow\",\"md-content\"]],{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,2,[\"type\"]],\"private\"],null]],null,{\"statements\":[[4,\"if\",[[27,\"filter-chat\",[[22,2,[]],[23,[\"auth\"]]],null]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"flex-25 layout-row layout-align-center-start\"],[9],[0,\"\\n              \"],[1,[27,\"user/chat-list-card\",null,[[\"item\",\"class\",\"goToChat\",\"following\",\"isSelf\"],[[22,2,[]],\"\",[27,\"action\",[[22,0,[]],\"goToChat\"],null],[23,[\"following\"]],[23,[\"isSelf\"]]]]],false],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[2]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"span\"],[11,\"class\",\"border-shadow\"],[9],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\" bg-white \"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-row flex layout-padding\"],[9],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"startup-text\"],[9],[0,\"Groups\"],[10],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"flex see-more-text\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"routeToGroupList\"]],[9],[0,\"See More\"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"chat-list-container chat-list-flex\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"groupData\"]]],null,{\"statements\":[[0,\"        \"],[1,[27,\"user/group-list-card\",null,[[\"item\",\"class\",\"goToChat\"],[[22,1,[]],\" group-shadow\",[27,\"action\",[[22,0,[]],\"goToChat\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/user/chat-list.hbs" } });
});
;define("vidya-frontend/templates/user/chat", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "j75DyQNb", "block": "{\"symbols\":[],\"statements\":[[1,[27,\"user/chat-container\",null,[[\"class\",\"messages\",\"deleteComment\",\"currentid\",\"recordChat\",\"channel_id\",\"id\",\"role\",\"store\"],[\"chat-bg flex\",[23,[\"filteredChat\"]],[27,\"action\",[[22,0,[]],\"deleteComment\"],null],[23,[\"currentid\"]],[27,\"action\",[[22,0,[]],\"recordChat\"],null],[23,[\"channel_id\"]],[23,[\"id\"]],[23,[\"role\"]],[23,[\"store\"]]]]],false],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/user/chat.hbs" } });
});
;define("vidya-frontend/templates/user/chatting", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "huG5CM3g", "block": "{\"symbols\":[],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"flex\"]],{\"statements\":[[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/user/chatting.hbs" } });
});
;define("vidya-frontend/templates/user/create-group", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "UwIk/Kk0", "block": "{\"symbols\":[\"item\"],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"layout-column flex layout-padding brown-bkg\"]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"layout-column flex over-flow\"],[9],[0,\"\\n    \"],[1,[27,\"paper-input\",null,[[\"class\",\"textarea\",\"block\",\"label\",\"passThru\",\"value\",\"onChange\"],[\"\",true,true,\"Enter the text\",[27,\"hash\",null,[[\"rows\"],[3]]],[23,[\"channelname\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"channelname\"]]],null]],null]]]],false],[0,\"\\n\"],[4,\"if\",[[23,[\"progressUpload\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"flex progress-margin\"],[9],[0,\"\\n        \"],[1,[27,\"paper-progress-linear\",null,[[\"value\"],[[23,[\"progressPercentage\"]]]]],false],[0,\"\\n      \"],[10],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-center-center\"],[9],[1,[21,\"progressPercentage\"],false],[0,\"\\n        %\"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"imgDisplay\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-row social-grid-container  social-grid-size relative\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"imgDisplay\"]]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"relative social-grid-item\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[22,1,[\"type\"]],\"image\"],null]],null,{\"statements\":[[0,\"              \"],[7,\"img\"],[12,\"src\",[27,\"convert-img\",[[22,1,[]]],null]],[11,\"class\",\"social-upload-media\"],[9],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[4,\"paper-button\",null,[[\"class\",\"iconButton\",\"onClick\"],[\"clear-button\",true,[27,\"action\",[[22,0,[]],\"deleteImg\",[22,1,[]]],null]]],{\"statements\":[[1,[27,\"paper-icon\",[\"clear\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[7,\"div\"],[11,\"class\",\"layout-column zero-padding black-bkg\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"layout-row flex layout-row layout-align-end-start brown-bkg\"],[9],[0,\"\\n\"],[4,\"paper-list\",null,[[\"class\"],[\"layout-row layout-align-start-end over-flow\"]],{\"statements\":[[0,\"\\n\"],[4,\"x-file-input\",null,[[\"action\"],[[27,\"action\",[[22,0,[]],\"selectImg\"],null]]],{\"statements\":[[0,\"          \"],[1,[27,\"paper-icon\",[\"cloud_upload\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"      \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n      \"],[4,\"paper-button\",null,[[\"disabled\",\"onClick\"],[[23,[\"cancelbutton\"]],[27,\"action\",[[22,0,[]],\"closeDialog\",\"cancel\"],null]]],{\"statements\":[[0,\"Cancel\"]],\"parameters\":[]},null],[0,\"\\n      \"],[4,\"paper-button\",null,[[\"disabled\",\"onClick\"],[[23,[\"isdisable\"]],[27,\"action\",[[22,0,[]],\"saveData\"],null]]],{\"statements\":[[0,\"OK\"]],\"parameters\":[]},null],[0,\"\\n  \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"disablebtn\"]]],null,{\"statements\":[[4,\"paper-dialog\",null,[[\"class\"],[\"flex-50\"]],{\"statements\":[[0,\"      \"],[7,\"form\"],[9],[0,\"\\n\"],[4,\"paper-dialog-content\",null,null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"layout-column layout-align-center-center\"],[9],[0,\"\\n            \"],[1,[27,\"paper-progress-circular\",null,[[\"warn\",\"diameter\"],[true,96]]],false],[0,\"\\n            \"],[7,\"p\"],[9],[0,\"Uploading....\"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[10],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/user/create-group.hbs" } });
});
;define("vidya-frontend/templates/user/find-friends", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "r0hR4V0N", "block": "{\"symbols\":[\"item\"],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"layout-column flex brown-bkg\"]],{\"statements\":[[7,\"div\"],[11,\"class\",\"chat-list-container chat-list-flex layout-row\"],[9],[0,\"\\n\"],[4,\"vertical-collection\",[[23,[\"celeModel\"]]],[[\"estimateHeight\",\"staticHeight\",\"bufferSize\",\"lastReached\",\"containerSelector\"],[50,true,50,\"loadBelow\",\"md-content\"]],{\"statements\":[[4,\"if\",[[27,\"not-eq\",[[23,[\"isSelf\"]],[22,1,[\"id\"]]],null]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"flex-25\"],[9],[0,\"\\n        \"],[1,[27,\"socials/social-card\",null,[[\"item\",\"following\",\"followHandler\",\"gotoProfile\"],[[22,1,[]],[23,[\"following\"]],[27,\"action\",[[22,0,[]],\"followHandler\"],null],[27,\"action\",[[22,0,[]],\"gotoProfile\"],null]]]],false],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/user/find-friends.hbs" } });
});
;define("vidya-frontend/templates/user/find-groups", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "tH4vAM0z", "block": "{\"symbols\":[\"item\"],\"statements\":[[0,\"\\n\"],[4,\"paper-content\",null,[[\"class\"],[\"layout-row flex black-bkg\"]],{\"statements\":[[7,\"div\"],[11,\"class\",\"layout-margin bg-white flex\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"group-grid-container grid-row\"],[9],[0,\"\\n\"],[4,\"vertical-collection\",[[23,[\"groupInfo\"]]],[[\"estimateHeight\",\"staticHeight\",\"bufferSize\",\"class\",\"lastReached\",\"containerSelector\"],[10,true,20,\"layout-row zzz\",\"loadBelow\",\"md-content\"]],{\"statements\":[[4,\"if\",[[27,\"not-eq\",[[23,[\"isSelf\"]],[22,1,[\"userinfo\",\"userId\"]]],null]],null,{\"statements\":[[4,\"if\",[[27,\"ban-user\",[[22,1,[\"banuser_list\"]],[23,[\"itself\"]]],null]],null,{\"statements\":[[0,\"        \"],[1,[27,\"group-card\",null,[[\"item\",\"following\",\"followHandler\",\"goToGroups\"],[[22,1,[]],[23,[\"groups\"]],[27,\"action\",[[22,0,[]],\"followHandler\"],null],[27,\"action\",[[22,0,[]],\"goToGroups\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/user/find-groups.hbs" } });
});
;define("vidya-frontend/templates/user/group-chat-detail", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "pQzAr//h", "block": "{\"symbols\":[\"item\",\"controls\",\"item\"],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"black-bkg layout-column flex scroll\"]],{\"statements\":[[7,\"div\"],[11,\"class\",\"group-grid-width\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"circle-container\"],[9],[0,\"\\n\"],[4,\"each\",[[27,\"chatgroup\",[[23,[\"group\"]]],null]],null,{\"statements\":[[4,\"if\",[[22,3,[]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"circle-round\"],[9],[0,\"\\n        \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[22,3,[\"user_url\"]]],null]],[11,\"class\",\"group-images-detail\"],[9],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[3]},null],[0,\"  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[4,\"paper-list\",null,[[\"class\"],[\"layout-column flex\"]],{\"statements\":[[4,\"paper-subheader\",null,[[\"class\"],[\"black-bkg group-head-name\"]],{\"statements\":[[1,[21,\"channelname\"],false]],\"parameters\":[]},null],[0,\"\\n\"],[2,\" {{#paper-subheader class='black-bkg group-head-name'}}{{item.userCount}}Members{{/paper-subheader}} \"],[0,\"\\n\"],[7,\"span\"],[11,\"class\",\"border-shadow\"],[9],[10],[0,\"\\n\"],[4,\"paper-item\",null,[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"editgroup\"],null]]],{\"statements\":[[0,\"    \"],[2,\" <img src=\\\"profile.png\\\"  class=\\\"md-avatar\\\"> \"],[0,\"\\n    \"],[7,\"p\"],[11,\"class\",\"group-menu-font\"],[9],[0,\"Add Member\"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"md-secondary-container\"],[9],[0,\"\\n\"],[4,\"component\",[[22,2,[\"button\"]]],[[\"secondary\",\"iconButton\"],[true,true]],{\"statements\":[[0,\"        \"],[1,[27,\"paper-icon\",[\"keyboard_arrow_right\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"  \"],[1,[21,\"paper-divider\"],false],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"layout-margin bg-white list-overflow\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"layout-row flex\"],[9],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"startup-text\"],[9],[0,\"Group Members\"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[4,\"paper-list\",null,null,{\"statements\":[[4,\"each\",[[23,[\"group\"]]],null,{\"statements\":[[4,\"paper-item\",null,[[\"class\"],[\"item-padding-zero\"]],{\"statements\":[[0,\"      \"],[7,\"img\"],[12,\"src\",[27,\"convert-url\",[[22,1,[\"user_url\"]]],null]],[11,\"class\",\"md-avatar\"],[9],[10],[0,\"\\n      \"],[7,\"p\"],[11,\"class\",\"group-menu-font\"],[9],[1,[22,1,[\"username\"]],false],[10],[0,\"\\n      \"],[2,\" <div class=\\\"md-secondary-container\\\">\\n{{#controls.button secondary=true iconButton=true }}\\n          {{paper-icon \\\"more_vert\\\"}}\\n        {{/controls.button}}      </div> \"],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},null],[7,\"span\"],[11,\"class\",\"border-shadow\"],[9],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"layout-column\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"currentid\"]],[23,[\"userinfo\",\"userId\"]]],null]],null,{\"statements\":[[0,\"      \"],[4,\"paper-button\",null,[[\"class\",\"onClick\"],[\"layout-row flex\",[27,\"action\",[[22,0,[]],\"disband\"],null]]],{\"statements\":[[0,\"Delete Group\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[4,\"paper-button\",null,[[\"class\",\"onClick\"],[\"layout-row flex\",[27,\"action\",[[22,0,[]],\"leavegroup\"],null]]],{\"statements\":[[0,\"Leave Group\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]}],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/user/group-chat-detail.hbs" } });
});
;define("vidya-frontend/templates/user/group-chat-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "lMckk2uL", "block": "{\"symbols\":[\"item\"],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"flex black-bkg\"]],{\"statements\":[[7,\"div\"],[11,\"class\",\"chat-list-container chat-list-flex  \"],[9],[0,\"\\n\"],[4,\"vertical-collection\",[[23,[\"sortedGroup\"]]],[[\"estimateHeight\",\"staticHeight\",\"bufferSize\",\"lastReached\",\"containerSelector\"],[50,true,30,\"loadBelow\",\"md-content\"]],{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,1,[\"type\"]],\"ChatGroup\"],null]],null,{\"statements\":[[0,\"      \"],[1,[27,\"user/group-list-card\",null,[[\"item\",\"class\",\"goToChat\",\"following\",\"isSelf\"],[[22,1,[]],\"group-shadow\",[27,\"action\",[[22,0,[]],\"goToChat\"],null],[23,[\"following\"]],[23,[\"isSelf\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[10],[0,\"\\n\"]],\"parameters\":[]},null],[2,\" {{#if (eq item.type \\\"ChatGroup\\\")}}\\n<div class=\\\"group-list-align\\\">\\n  <div class=\\\"group-grid-width\\\">\\n    <div class=\\\"circle-container-group\\\">\\n      {{#each item.groupuserlist as |data|}}\\n        <div class=\\\"circle-round\\\">\\n          <img src={{data.user_url.web_url}} class=\\\"group-images-detail\\\">\\n        </div>\\n      {{/each}}\\n    </div>\\n  </div>\\n  <p class=\\\"chat-group-header-name\\\">{{item.channelname}}</p>\\n  <p class=\\\"chat-group-member-count\\\">{{item.userCount}} members</p>\\n</div>\\n{{/if}} \"],[0,\"\\n\\n\\n\"],[2,\" <div class=\\\"group-grid-container\\\">\\n  <div class=\\\"group-chat-item\\\">1</div>\\n</div> \"],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/user/group-chat-list.hbs" } });
});
;define("vidya-frontend/templates/user/group", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3LzqvTcQ", "block": "{\"symbols\":[\"model\",\"model\",\"item\",\"index\",\"item\",\"item\",\"index\",\"tabs\"],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"flex bg-black\"]],{\"statements\":[[0,\"\\n    \"],[1,[27,\"user/group-pic\",null,[[\"profileInfo\",\"currentid\",\"store\",\"isOwner\"],[[23,[\"profileInfo\"]],[23,[\"currentid\"]],[23,[\"store\"]],[23,[\"isOwner\"]]]]],false],[0,\"\\n\\n    \"],[7,\"div\"],[11,\"class\",\"profile-height\"],[9],[0,\"\\n\"],[4,\"paper-tabs\",null,[[\"center\",\"stretch\",\"borderBottom\",\"selected\",\"onChange\"],[true,true,true,[23,[\"selectedBasicTab\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"selectedBasicTab\"]]],null]],null]]],{\"statements\":[[4,\"component\",[[22,8,[\"tab\"]]],[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"displayPost\"],null]]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"layout-column profile-post-icon profile-tab-position\"],[9],[0,\"\\n            \"],[1,[27,\"paper-icon\",[\"home\"],null],false],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"user-postflex-name\"],[9],[0,\"Posts\"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,8,[\"tab\"]]],[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"displayMember\"],null]]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"layout-column profile-tab-position\"],[9],[0,\"\\n            \"],[7,\"span\"],[9],[1,[21,\"memberCount\"],false],[10],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"user-post-name\"],[9],[0,\"Members\"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"isOwner\"]]],null,{\"statements\":[[4,\"component\",[[22,8,[\"tab\"]]],[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"displayBan\"],null]]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"layout-column profile-tab-position\"],[9],[0,\"\\n            \"],[7,\"span\"],[9],[1,[21,\"memberCount\"],false],[10],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"user-post-name\"],[9],[0,\"Ban\"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[8]},null],[0,\"\\n\"],[4,\"if\",[[23,[\"postDisplay\"]]],null,{\"statements\":[[0,\"        \"],[7,\"ul\"],[11,\"class\",\"grid effect-6\"],[11,\"id\",\"grid\"],[11,\"style\",\"list-style-type:none\"],[9],[0,\"\\n\"],[4,\"vertical-collection\",[[23,[\"profileModel\"]]],[[\"estimateHeight\",\"staticHeight\",\"bufferSize\",\"lastReached\",\"containerSelector\",\"renderAll\"],[80,true,20,\"loadBelow\",\"md-content\",true]],{\"statements\":[[0,\"            \"],[7,\"li\"],[9],[0,\"\\n              \"],[1,[27,\"socials/social-list-card\",null,[[\"item\",\"index\",\"userID\",\"isOwner\",\"shareSocial\",\"goToDiscuss\",\"routeToDetailNew\",\"goToGroups\",\"goToProfiles\",\"deleteSocial\",\"editSocial\"],[[22,6,[]],[22,7,[]],[23,[\"userID\"]],[23,[\"isOwner\"]],[27,\"action\",[[22,0,[]],\"shareSocial\"],null],[27,\"action\",[[22,0,[]],\"goToDiscuss\"],null],[27,\"action\",[[22,0,[]],\"routeToDetailNew\"],null],[27,\"action\",[[22,0,[]],\"goToGroups\"],null],[27,\"action\",[[22,0,[]],\"goToProfiles\"],null],[27,\"action\",[[22,0,[]],\"deleteSocial\"],null],[27,\"action\",[[22,0,[]],\"editSocial\"],null]]]],false],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[6,7]},null],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"memberDisplay\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"chat-list-container chat-list-flex layout-row\"],[9],[0,\"\\n\"],[4,\"vertical-collection\",[[23,[\"memberInfo\"]]],[[\"estimateHeight\",\"staticHeight\",\"bufferSize\",\"lastReached\",\"containerSelector\"],[50,true,50,\"loadBelowMember\",\"md-content\"]],{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"flex-25\"],[9],[0,\"\\n              \"],[1,[27,\"user/profile-user-card\",null,[[\"item\",\"goToProfiles\",\"goToGroups\"],[[22,5,[]],[27,\"action\",[[22,0,[]],\"goToProfiles\"],null],[27,\"action\",[[22,0,[]],\"goToGroups\"],null]]]],false],[0,\"\\n\"],[4,\"if\",[[23,[\"isOwner\"]]],null,{\"statements\":[[0,\"                \"],[4,\"paper-button\",null,[[\"raised\",\"accent\",\"onClick\"],[true,true,[27,\"action\",[[22,0,[]],\"banUser\",[22,5,[\"id\"]],[23,[\"currentid\"]],\"ban\"],null]]],{\"statements\":[[0,\"Ban\"]],\"parameters\":[]},null],[0,\"\\n\\n\"]],\"parameters\":[]},null],[0,\"            \"],[10],[0,\"\\n\\n\"]],\"parameters\":[5]},null],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"isOwner\"]]],null,{\"statements\":[[4,\"if\",[[23,[\"banDisplay\"]]],null,{\"statements\":[[0,\"        \"],[7,\"ul\"],[11,\"class\",\"grid effect-6\"],[11,\"id\",\"grid\"],[11,\"style\",\"list-style-type:none\"],[9],[0,\"\\n\"],[4,\"vertical-collection\",[[23,[\"banInfo\"]]],[[\"estimateHeight\",\"staticHeight\",\"bufferSize\",\"lastReached\",\"containerSelector\",\"renderAll\"],[50,true,50,\"loadBelowBan\",\"md-content\",true]],{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"flex-25\"],[9],[0,\"\\n              \"],[1,[27,\"user/profile-user-card\",null,[[\"item\",\"goToProfiles\",\"goToGroups\"],[[22,3,[]],[27,\"action\",[[22,0,[]],\"goToProfiles\"],null],[27,\"action\",[[22,0,[]],\"goToGroups\"],null]]]],false],[0,\"\\n              \"],[4,\"paper-button\",null,[[\"raised\",\"mini\",\"primary\",\"onClick\"],[true,true,true,[27,\"action\",[[22,0,[]],\"unBanUser\",[22,3,[\"id\"]],[23,[\"currentid\"]],\"unban\"],null]]],{\"statements\":[[0,\"UnBan\"]],\"parameters\":[]},null],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[3,4]},null],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n   \"],[7,\"div\"],[11,\"class\",\"layout-column\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"profileInfo\"]]],null,{\"statements\":[[4,\"if\",[[27,\"not-eq\",[[23,[\"userID\"]],[22,2,[\"userinfo\",\"userId\"]]],null]],null,{\"statements\":[[4,\"if\",[[27,\"ban-user\",[[22,2,[\"banuser_list\"]],[23,[\"userID\"]]],null]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"layout-row flex group-follow-btn\"],[9],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"class\",\"id\",\"raised\",\"primary\",\"onClick\"],[[27,\"if\",[[23,[\"isOpen\"]],\"follow-group\",\"unfollow-group\"],null],\"click\",true,true,[27,\"action\",[[22,0,[]],\"changeStatus\",[23,[\"currentid\"]],\"news\"],null]]],{\"statements\":[[1,[27,\"change-button\",[[23,[\"members\"]],[23,[\"userID\"]],\"button\"],null],false]],\"parameters\":[]},null],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[2]},null],[0,\"  \"],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"postDisplay\"]]],null,{\"statements\":[[4,\"each\",[[23,[\"profileInfo\"]]],null,{\"statements\":[[4,\"if\",[[27,\"ban-user\",[[22,1,[\"banuser_list\"]],[23,[\"userID\"]]],null]],null,{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"newbutton\"],[9],[0,\"\\n\"],[4,\"paper-button\",null,[[\"raised\",\"fab\",\"accent\",\"onClick\"],[true,true,true,[27,\"action\",[[22,0,[]],\"createPost\",[23,[\"currentid\"]]],null]]],{\"statements\":[[0,\"            \"],[1,[27,\"paper-icon\",[\"add\"],[[\"size\"],[30]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/user/group.hbs" } });
});
;define("vidya-frontend/templates/user/groupchat", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "940GyH2w", "block": "{\"symbols\":[],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"flex black-bkg layout-column layout-padding\"]],{\"statements\":[[0,\"  \"],[7,\"div\"],[11,\"class\",\"layout-column\"],[9],[0,\"\\n    \"],[1,[27,\"paper-input\",null,[[\"placeholder\",\"type\",\"value\",\"onChange\"],[\"Group Name\",\"text\",[23,[\"groupname\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"groupname\"]]],null]],null]]]],false],[0,\"\\n    \"],[2,\" {{paper-input class=\\\"flex \\\" label=\\\"Group Name\\\" placeholder=\\\"Enter Group Name\\\" value=groupname onChange=(action (mut groupname))}} \"],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"layout-column flex\"],[9],[0,\"\\n    \"],[1,[27,\"paper-contact-chips\",null,[[\"readOnly\",\"removeItem\",\"addItem\",\"label\",\"placeholder\",\"searchField\",\"content\",\"options\",\"class\"],[[23,[\"readOnly\"]],[27,\"action\",[[22,0,[]],\"removeContact\"],null],[27,\"action\",[[22,0,[]],\"addContact\"],null],\"Add Member\",\"Add Member\",\"name\",[23,[\"selectedContacts\"]],[23,[\"remainingContacts\"]],\"chip-color\"]]],false],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[7,\"span\"],[11,\"class\",\"border-shadow\"],[9],[10],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"layout-column\"],[9],[0,\"\\n  \"],[4,\"paper-button\",null,[[\"class\",\"onClick\"],[\"layout-row flex\",[27,\"action\",[[22,0,[]],\"createChatGroup\"],null]]],{\"statements\":[[0,\"Save\"]],\"parameters\":[]},null],[0,\"\\n\"],[10],[0,\"\\n\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/user/groupchat.hbs" } });
});
;define("vidya-frontend/templates/user/loading", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "2JIbJ0OU", "block": "{\"symbols\":[],\"statements\":[[1,[27,\"spinner-circle\",null,[[\"class\"],[\"layout-row flex layout-align-center-center black-bkg\"]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/user/loading.hbs" } });
});
;define("vidya-frontend/templates/user/profile-info", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4redsilT", "block": "{\"symbols\":[\"profile\"],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"flex bg-black \"]],{\"statements\":[[0,\"  \"],[1,[27,\"user/profile-pic\",null,[[\"profileInfo\",\"currentid\",\"store\"],[[23,[\"profileInfo\"]],[23,[\"currentid\"]],[23,[\"store\"]]]]],false],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"layout-column flex\"],[9],[0,\"\\n\"],[4,\"paper-list\",null,[[\"class\"],[\"text-color-profile\"]],{\"statements\":[[4,\"each\",[[23,[\"profileInfo\"]]],null,{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"layout-row about-white \"],[9],[0,\"\\n          \"],[4,\"paper-subheader\",null,[[\"class\"],[\"flex \"]],{\"statements\":[[0,\"About\"]],\"parameters\":[]},null],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-end-start mr-5\"],[11,\"style\",\"touch-action: manipulation; -ms-touch-action: manipulation; cursor: pointer;\"],[3,\"action\",[[22,0,[]],\"editInfo\"]],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"editActive\"]]],null,{\"statements\":[[0,\"              \"],[1,[27,\"paper-icon\",[\"edit\"],null],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"paper-item\",null,[[\"class\"],[\"md-2-line\"]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"md-avatar\"],[9],[0,\"\\n            \"],[1,[27,\"paper-icon\",[\"person\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"md-list-item-text\"],[9],[0,\"\\n            \"],[1,[27,\"paper-input\",null,[[\"textarea\",\"block\",\"disabled\",\"label\",\"maxlength\",\"passThru\",\"value\",\"onChange\"],[true,true,[23,[\"isDisabledDetail\"]],\"Your Name\",75,[27,\"hash\",null,[[\"rows\",\"maxRows\"],[1,1]]],[22,1,[\"username\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[22,1,[\"username\"]]],null]],null]]]],false],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"paper-item\",null,[[\"class\"],[\"md-2-line\"]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"md-avatar\"],[9],[0,\"\\n            \"],[1,[27,\"paper-icon\",[\"work\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"md-list-item-text\"],[9],[0,\"\\n            \"],[1,[27,\"paper-input\",null,[[\"textarea\",\"block\",\"disabled\",\"label\",\"value\",\"onChange\"],[true,true,[23,[\"isDisabledDetail\"]],\"Your Work\",[22,1,[\"info\",\"work\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[22,1,[\"info\",\"work\"]]],null]],null]]]],false],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"paper-item\",null,[[\"class\"],[\"md-2-line\"]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"md-avatar\"],[9],[0,\"\\n            \"],[1,[27,\"paper-icon\",[\"menu_book\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"md-list-item-text\"],[9],[0,\"\\n            \"],[1,[27,\"paper-input\",null,[[\"textarea\",\"block\",\"disabled\",\"label\",\"value\",\"onChange\"],[true,true,[23,[\"isDisabledDetail\"]],\"Your Education\",[22,1,[\"info\",\"education\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[22,1,[\"info\",\"education\"]]],null]],null]]]],false],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"paper-item\",null,[[\"class\"],[\"md-2-line\"]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"md-avatar\"],[9],[0,\"\\n            \"],[1,[27,\"paper-icon\",[\"location_city\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"md-list-item-text\"],[9],[0,\"\\n            \"],[1,[27,\"paper-input\",null,[[\"textarea\",\"block\",\"disabled\",\"label\",\"value\",\"onChange\"],[true,true,[23,[\"isDisabledDetail\"]],\"Your City\",[22,1,[\"info\",\"city\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[22,1,[\"info\",\"city\"]]],null]],null]]]],false],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"paper-item\",null,[[\"class\"],[\"md-2-line\"]],{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"md-avatar\"],[9],[0,\"\\n            \"],[1,[27,\"paper-icon\",[\"person_pin\"],null],false],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"md-list-item-text\"],[9],[0,\"\\n            \"],[1,[27,\"paper-input\",null,[[\"textarea\",\"block\",\"disabled\",\"label\",\"maxlength\",\"passThru\",\"value\",\"onChange\"],[true,true,[23,[\"isDisabledDetail\"]],\"Your Biography\",300,[27,\"hash\",null,[[\"rows\",\"maxRows\"],[5,5]]],[22,1,[\"info\",\"bio\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[22,1,[\"info\",\"bio\"]]],null]],null]]]],false],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[7,\"span\"],[11,\"class\",\"border-shadow\"],[9],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"layout-row flex\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"editActive\"]],false],null]],null,{\"statements\":[[0,\"            \"],[7,\"span\"],[11,\"class\",\"border-shadow\"],[9],[10],[0,\"\\n            \"],[4,\"paper-button\",null,[[\"raised\",\"class\",\"onClick\"],[true,\"flex black-bkg\",[27,\"action\",[[22,0,[]],\"editInfo\",[22,1,[]]],null]]],{\"statements\":[[0,\"Save\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/user/profile-info.hbs" } });
});
;define("vidya-frontend/templates/user/profile", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "1S1Sc63J", "block": "{\"symbols\":[\"item\",\"item\",\"item\",\"item\",\"item\",\"index\",\"card\",\"profile\",\"vote\",\"model\",\"profile\",\"tabs\"],\"statements\":[[1,[21,\"start\"],false],[0,\"\\n\"],[4,\"paper-content\",null,[[\"class\"],[\"bg-black flex\"]],{\"statements\":[[0,\"    \"],[1,[27,\"user/profile-pic\",null,[[\"profileInfo\",\"currentid\",\"store\",\"messageUser\"],[[23,[\"profileInfo\"]],[23,[\"currentid\"]],[23,[\"store\"]],[27,\"action\",[[22,0,[]],\"messageUser\"],null]]]],false],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"profile-height\"],[9],[0,\"\\n\"],[4,\"paper-tabs\",null,[[\"center\",\"stretch\",\"borderBottom\",\"selected\",\"onChange\"],[true,true,true,[23,[\"selectedBasicTab\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[23,[\"selectedBasicTab\"]]],null]],null]]],{\"statements\":[[4,\"component\",[[22,12,[\"tab\"]]],[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"displayPost\"],null]]],{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-column profile-post-icon profile-tab-position\"],[9],[0,\"\\n        \"],[1,[27,\"paper-icon\",[\"home\"],null],false],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"user-post-name\"],[9],[0,\"Posts\"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,12,[\"tab\"]]],[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"displayFollower\"],null]]],{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-column profile-tab-position\"],[9],[0,\"\\n        \"],[7,\"span\"],[9],[1,[21,\"followerCount\"],false],[10],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"user-post-name\"],[9],[0,\"Follower\"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,12,[\"tab\"]]],[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"displayFollowing\"],null]]],{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-column profile-tab-position\"],[9],[0,\"\\n        \"],[7,\"span\"],[9],[1,[21,\"followingCount\"],false],[10],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"user-post-name\"],[9],[0,\"Following\"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"component\",[[22,12,[\"tab\"]]],[[\"onClick\"],[[27,\"action\",[[22,0,[]],\"displayGroup\"],null]]],{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"layout-column profile-tab-position\"],[9],[0,\"\\n        \"],[7,\"span\"],[9],[1,[21,\"groupCount\"],false],[10],[0,\"\\n        \"],[7,\"span\"],[11,\"class\",\"user-post-name\"],[9],[0,\"Group\"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[12]},null],[4,\"if\",[[23,[\"loading\"]]],null,{\"statements\":[[0,\"    \"],[1,[21,\"spinner-circle\"],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"postDisplay\"]]],null,{\"statements\":[[4,\"if\",[[23,[\"isEditing\"]]],null,{\"statements\":[[4,\"paper-card\",null,[[\"class\"],[\"\"]],{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"layout-column flex layout-padding edit-icon-color\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"profileInfo\"]]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"layout-row\"],[9],[0,\"\\n              \"],[1,[27,\"paper-input\",null,[[\"label\",\"type\",\"value\",\"onChange\",\"icon\",\"class\",\"hideAllMessages\"],[\"Your Name\",\"email\",[22,11,[\"username\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[22,11,[\"username\"]]],null]],null],\"person\",\"flex\",true]]],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"layout-row\"],[9],[0,\"\\n              \"],[1,[27,\"paper-input\",null,[[\"label\",\"type\",\"value\",\"onChange\",\"icon\",\"class\",\"hideAllMessages\"],[\"Your Work\",\"email\",[22,11,[\"info\",\"work\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[22,11,[\"info\",\"work\"]]],null]],null],\"work\",\"flex\",true]]],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"layout-row\"],[9],[0,\"\\n              \"],[1,[27,\"paper-input\",null,[[\"label\",\"type\",\"value\",\"onChange\",\"icon\",\"class\",\"hideAllMessages\"],[\"Your Education\",\"text\",[22,11,[\"info\",\"education\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[22,11,[\"info\",\"education\"]]],null]],null],\"menu_book\",\"flex\",true]]],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"layout-row\"],[9],[0,\"\\n              \"],[1,[27,\"paper-input\",null,[[\"label\",\"type\",\"value\",\"onChange\",\"icon\",\"class\",\"hideAllMessages\"],[\"Your City\",\"text\",[22,11,[\"info\",\"city\"]],[27,\"action\",[[22,0,[]],[27,\"mut\",[[22,11,[\"info\",\"city\"]]],null]],null],\"location_city\",\"flex\",true]]],false],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"span\"],[11,\"class\",\"border-shadow\"],[9],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"layout-row layout-align-end-start\"],[9],[0,\"\\n              \"],[4,\"paper-button\",null,[[\"raised\",\"onClick\"],[true,[27,\"action\",[[22,0,[]],\"cancelInfoEdit\"],null]]],{\"statements\":[[0,\"cancel\"]],\"parameters\":[]},null],[0,\"\\n              \"],[4,\"paper-button\",null,[[\"raised\",\"class\",\"onClick\"],[true,\"black-bkg\",[27,\"action\",[[22,0,[]],\"saveInfo\",[22,11,[]]],null]]],{\"statements\":[[0,\"Save\"]],\"parameters\":[]},null],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[11]},null],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},{\"statements\":[[4,\"paper-card\",null,[[\"class\"],[\"about-mg\"]],{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"layout-row brown-bkg\"],[9],[0,\"\\n          \"],[4,\"paper-button\",null,[[\"class\",\"disabled\"],[\"about-btn-align\",true]],{\"statements\":[[0,\"About\"]],\"parameters\":[]},null],[0,\"\\n          \"],[7,\"span\"],[11,\"class\",\"flex\"],[9],[10],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"currentid\"]],[23,[\"userID\"]]],null]],null,{\"statements\":[[4,\"each\",[[23,[\"profileInfo\"]]],null,{\"statements\":[[0,\"              \"],[4,\"paper-button\",null,[[\"onClick\",\"warn\"],[[27,\"action\",[[22,0,[]],\"editInfo\",[22,10,[\"id\"]]],null],true]],{\"statements\":[[0,\"Edit\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[10]},null]],\"parameters\":[]},null],[0,\"        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"about-txt layout-margin brown-bkg\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"layout-row\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"wallet\"]]],null,{\"statements\":[[0,\"              \"],[7,\"span\"],[11,\"class\",\"mr-5\"],[9],[0,\"Remaining Votes\"],[10],[0,\" \"],[7,\"span\"],[11,\"class\",\"user-profile-about-txt\"],[9],[1,[22,9,[\"votecount\"]],false],[0,\" \"],[10],[0,\"\\n\"]],\"parameters\":[9]},null],[0,\"            \"],[10],[0,\"\\n\"],[4,\"each\",[[23,[\"profileInfo\"]]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"layout-row\"],[9],[0,\"\\n              \"],[7,\"span\"],[11,\"class\",\"mr-5\"],[9],[0,\"Works at\"],[10],[0,\" \"],[7,\"span\"],[11,\"class\",\"user-profile-about-txt\"],[9],[1,[22,8,[\"info\",\"work\"]],false],[0,\" \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"layout-row\"],[9],[0,\"\\n              \"],[7,\"span\"],[11,\"class\",\"mr-5\"],[9],[0,\"Studied at\"],[10],[0,\" \"],[7,\"span\"],[11,\"class\",\"user-profile-about-txt\"],[9],[1,[22,8,[\"info\",\"education\"]],false],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"layout-row\"],[9],[0,\"\\n              \"],[7,\"span\"],[11,\"class\",\"mr-5\"],[9],[0,\"Live in\"],[10],[0,\" \"],[7,\"span\"],[11,\"class\",\"user-profile-about-txt\"],[9],[1,[22,8,[\"info\",\"city\"]],false],[10],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[8]},null],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[7]},null]],\"parameters\":[]}],[0,\"    \"],[7,\"ul\"],[11,\"class\",\"grid effect-6\"],[11,\"id\",\"grid\"],[11,\"style\",\"list-style-type:none\"],[9],[0,\"\\n\"],[4,\"vertical-collection\",[[23,[\"profileModel\"]]],[[\"estimateHeight\",\"staticHeight\",\"bufferSize\",\"lastReached\",\"containerSelector\",\"renderAll\"],[100,true,20,\"loadBelow\",\"md-content\",true]],{\"statements\":[[0,\"        \"],[7,\"li\"],[9],[0,\"\\n\"],[4,\"if\",[[22,5,[\"sharePost\"]]],null,{\"statements\":[[0,\"    \"],[1,[27,\"socials/share-post-card\",null,[[\"IsOpen\",\"item\",\"index\",\"store\",\"currentid\",\"shareSocial\",\"editSocial\",\"deleteSocial\",\"goToDiscuss\",\"goToProfiles\",\"goToGroups\"],[[23,[\"IsOpen\"]],[22,5,[]],[22,6,[]],[23,[\"store\"]],[23,[\"userID\"]],[27,\"action\",[[22,0,[]],\"shareSocial\"],null],[27,\"action\",[[22,0,[]],\"editSocial\"],null],[27,\"action\",[[22,0,[]],\"deleteSocial\"],null],[27,\"action\",[[22,0,[]],\"goToDiscuss\"],null],[27,\"action\",[[22,0,[]],\"goToProfiles\"],null],[27,\"action\",[[22,0,[]],\"goToGroups\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[22,5,[\"groupPost\"]]],null,{\"statements\":[[0,\"    \"],[1,[27,\"socials/group-post-card\",null,[[\"IsOpen\",\"item\",\"index\",\"store\",\"currentid\",\"shareSocial\",\"editSocial\",\"deleteSocial\",\"goToDiscuss\",\"goToProfiles\",\"goToGroups\"],[[23,[\"IsOpen\"]],[22,5,[]],[22,6,[]],[23,[\"store\"]],[23,[\"userID\"]],[27,\"action\",[[22,0,[]],\"shareSocial\"],null],[27,\"action\",[[22,0,[]],\"editSocial\"],null],[27,\"action\",[[22,0,[]],\"deleteSocial\"],null],[27,\"action\",[[22,0,[]],\"goToDiscuss\"],null],[27,\"action\",[[22,0,[]],\"goToProfiles\"],null],[27,\"action\",[[22,0,[]],\"goToGroups\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,5,[\"previous_state\"]],\"CRS\"],null]],null,{\"statements\":[[0,\"    \"],[1,[27,\"socials/crs-post-card\",null,[[\"item\",\"index\",\"store\",\"currentid\",\"shareSocial\",\"goToDiscuss\",\"goToProfiles\",\"editSocial\",\"deleteSocial\"],[[22,5,[]],[22,6,[]],[23,[\"store\"]],[23,[\"userID\"]],[27,\"action\",[[22,0,[]],\"shareSocial\"],null],[27,\"action\",[[22,0,[]],\"goToDiscuss\"],null],[27,\"action\",[[22,0,[]],\"goToProfiles\"],null],[27,\"action\",[[22,0,[]],\"editSocial\"],null],[27,\"action\",[[22,0,[]],\"deleteSocial\"],null]]]],false],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[1,[27,\"socials/social-list-card\",null,[[\"IsOpen\",\"item\",\"index\",\"store\",\"currentid\",\"shareSocial\",\"editSocial\",\"deleteSocial\",\"goToDiscuss\",\"routeToDetailNew\",\"goToProfiles\",\"goToGroups\"],[[23,[\"IsOpen\"]],[22,5,[]],[22,6,[]],[23,[\"store\"]],[23,[\"userID\"]],[27,\"action\",[[22,0,[]],\"shareSocial\"],null],[27,\"action\",[[22,0,[]],\"editSocial\"],null],[27,\"action\",[[22,0,[]],\"deleteSocial\"],null],[27,\"action\",[[22,0,[]],\"goToDiscuss\"],null],[27,\"action\",[[22,0,[]],\"routeToDetailNew\"],null],[27,\"action\",[[22,0,[]],\"goToProfiles\"],null],[27,\"action\",[[22,0,[]],\"goToGroups\"],null]]]],false],[0,\"\\n      \"]],\"parameters\":[]}]],\"parameters\":[]}]],\"parameters\":[]}],[0,\"        \"],[10],[0,\"\\n\"]],\"parameters\":[5,6]},null],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"followerDisplay\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"chat-list-container chat-list-flex layout-row\"],[9],[0,\"\\n\"],[4,\"vertical-collection\",[[23,[\"followerInfo\"]]],[[\"estimateHeight\",\"staticHeight\",\"bufferSize\",\"lastReached\",\"containerSelector\"],[50,true,50,\"loadBelowFollower\",\"md-content\"]],{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"flex-25\"],[9],[0,\"\\n         \"],[1,[27,\"user/profile-user-card\",null,[[\"item\",\"goToProfiles\",\"goToGroups\"],[[22,4,[]],[27,\"action\",[[22,0,[]],\"goToProfiles\"],null],[27,\"action\",[[22,0,[]],\"goToGroups\"],null]]]],false],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[4]},null],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"followingDisplay\"]]],null,{\"statements\":[[0,\"    \"],[7,\"div\"],[11,\"class\",\"chat-list-container chat-list-flex layout-row\"],[9],[0,\"\\n\"],[4,\"vertical-collection\",[[23,[\"followingInfo\"]]],[[\"estimateHeight\",\"staticHeight\",\"bufferSize\",\"lastReached\",\"containerSelector\"],[50,true,50,\"loadBelowFollowing\",\"md-content\"]],{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"flex-25\"],[9],[0,\"\\n        \"],[1,[27,\"user/profile-user-card\",null,[[\"item\",\"goToProfiles\",\"goToGroups\"],[[22,3,[]],[27,\"action\",[[22,0,[]],\"goToProfiles\"],null],[27,\"action\",[[22,0,[]],\"goToGroups\"],null]]]],false],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"groupInfo\"]]],null,{\"statements\":[[4,\"if\",[[23,[\"groupDisplay\"]]],null,{\"statements\":[[0,\"  \"],[7,\"p\"],[11,\"class\",\"startup-text\"],[9],[0,\"Other Group \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"chat-list-container chat-list-flex layout-row\"],[9],[0,\"\\n\"],[4,\"vertical-collection\",[[23,[\"groupInfo\"]]],[[\"estimateHeight\",\"staticHeight\",\"bufferSize\",\"lastReached\",\"containerSelector\"],[50,true,50,\"loadBelowgroup\",\"md-content\"]],{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"flex-25\"],[9],[0,\"\\n        \"],[1,[27,\"user/profile-user-card\",null,[[\"item\",\"goToProfiles\",\"goToGroups\",\"group\"],[[22,2,[]],[27,\"action\",[[22,0,[]],\"goToProfiles\"],null],[27,\"action\",[[22,0,[]],\"goToGroups\"],null],\"group\"]]],false],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[4,\"if\",[[23,[\"ownerInfo\"]]],null,{\"statements\":[[4,\"if\",[[23,[\"displayOwnerGroup\"]]],null,{\"statements\":[[0,\"   \"],[7,\"p\"],[11,\"class\",\"startup-text\"],[9],[0,\"Your Group \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"chat-list-container chat-list-flex layout-row\"],[9],[0,\"\\n\"],[4,\"vertical-collection\",[[23,[\"ownerInfo\"]]],[[\"estimateHeight\",\"staticHeight\",\"bufferSize\",\"lastReached\",\"containerSelector\"],[50,true,50,\"loadBelowgroup\",\"md-content\"]],{\"statements\":[[0,\"        \"],[7,\"div\"],[11,\"class\",\"flex-25\"],[9],[0,\"\\n        \"],[1,[27,\"user/profile-user-card\",null,[[\"item\",\"goToProfiles\",\"goToGroups\",\"group\"],[[22,1,[]],[27,\"action\",[[22,0,[]],\"goToProfiles\"],null],[27,\"action\",[[22,0,[]],\"goToGroups\"],null],\"group\"]]],false],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[10],[0,\"\\n\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"postDisplay\"]]],null,{\"statements\":[[7,\"div\"],[11,\"class\",\"newbutton\"],[9],[0,\"\\n\"],[4,\"if\",[[27,\"eq\",[[23,[\"currentid\"]],[23,[\"userID\"]]],null]],null,{\"statements\":[[4,\"paper-button\",null,[[\"raised\",\"fab\",\"accent\",\"onClick\"],[true,true,true,[27,\"action\",[[22,0,[]],\"createPost\"],null]]],{\"statements\":[[0,\"    \"],[1,[27,\"paper-icon\",[\"add\"],[[\"size\"],[30]]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"if\",[[23,[\"groupDisplay\"]]],null,{\"statements\":[[4,\"if\",[[27,\"eq\",[[23,[\"currentid\"]],[23,[\"userID\"]]],null]],null,{\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"layout-row brown-bkg\"]],{\"statements\":[[0,\"         \"],[4,\"paper-button\",null,[[\"class\",\"raised\",\"onClick\"],[\"flex black-container\",true,[27,\"action\",[[22,0,[]],\"createClientGroup\"],null]]],{\"statements\":[[0,\"Create Group\"]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/user/profile.hbs" } });
});
;define("vidya-frontend/templates/user/user-chat-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qo34XP22", "block": "{\"symbols\":[\"item\"],\"statements\":[[4,\"paper-content\",null,[[\"class\"],[\"black-bkg flex\"]],{\"statements\":[[0,\"  \\n    \"],[7,\"div\"],[11,\"class\",\"chat-list-container chat-list-flex layout-row\"],[9],[0,\"\\n\\n\"],[4,\"vertical-collection\",[[23,[\"sortedModel\"]]],[[\"estimateHeight\",\"staticHeight\",\"bufferSize\",\"lastReached\",\"containerSelector\"],[50,true,50,\"loadBelow\",\"md-content\"]],{\"statements\":[[4,\"if\",[[27,\"eq\",[[22,1,[\"type\"]],\"private\"],null]],null,{\"statements\":[[4,\"if\",[[27,\"filter-chat\",[[22,1,[]],[23,[\"auth\"]]],null]],null,{\"statements\":[[0,\"            \"],[7,\"div\"],[11,\"class\",\"flex-25\"],[9],[0,\"\\n              \"],[1,[27,\"user/chat-list-card\",null,[[\"item\",\"class\",\"goToChat\",\"following\",\"isSelf\"],[[22,1,[]],\"\",[27,\"action\",[[22,0,[]],\"goToChat\"],null],[23,[\"following\"]],[23,[\"isSelf\"]]]]],false],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"    \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "vidya-frontend/templates/user/user-chat-list.hbs" } });
});
;define('vidya-frontend/torii-adapters/application', ['exports', 'vidya-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
  }
  exports.default = Ember.Object.extend({
    auth: Ember.inject.service(),
    resizer: Ember.inject.service(),
    uploadimage: Ember.inject.service(),
    accessToken: localStorage.getItem('accessToken'),
    fbuserId: localStorage.getItem('fbuserId'),
    phone: localStorage.getItem('phone'),
    session: Ember.inject.service(),
    media: Ember.inject.service(),
    open: function (authentication) {
      var authorizationCode = authentication.userId;
      var that = this;
      return new Ember.RSVP.Promise(function (resolve, reject) {
        FB.api('/me', function (response) {
          Ember.$.ajax({
            url: '/facebookLogin',
            data: { 'fbuserId': authorizationCode, 'accessToken': authentication.accessToken, 'username': response.name, 'role': 'User', 'follower': [], 'following': [] },
            dataType: 'json',
            success: Ember.run.bind(null, resolve),
            error: Ember.run.bind(null, reject)
          });
        });
      }).then(function (user) {
        // The returned object is merged onto the session (basically). Here
        // you may also want to persist the new session with cookies or via
        // localStorage.
        return {
          currentUser: user
        };
      });
    },

    fetch: function () {
      let token = this.get('accessToken');
      let phone = this.get('phone');
      if (Ember.isEmpty(token)) {
        throw new Error('No token in storage');
      } else if (token == phone) {
        throw new Error('No token in storage');
      }
      var that = this;
      var reqUrl = '';
      reqUrl = `${host}/user/current`;
      // if (this.get('media.isMobile')){
      //   reqUrl = `${host}/user/current`
      // }else{
      //   reqUrl = `/user/current`
      // }
      Ember.$.ajax({
        url: reqUrl,
        data: { 'fbuserId': this.get('fbuserId'), 'phone': this.get('phone'), 'accessToken': token },
        dataType: 'json',
        type: 'GET',
        success: function (json_data) {
          // var json_data = JSON.parse(data.user)
          console.log("settting accessToken from fetch()", json_data.user);
          if (json_data.user.length > 0) {
            that.set('session.content.currentUser', json_data);
            try {
              that.set('auth.accessToken', json_data.user[0].accesstoken);
            } catch (ex) {}
            console.log(json_data.user[0].accesstoken);
            that.set('auth.userId', json_data.user[0].id);
            that.set('auth.fbuserId', json_data.user[0].fbuserId);
            that.set('auth.username', json_data.user[0].username);
            that.set('auth.user_url', json_data.user[0].user_url);
            that.set('auth.info', json_data.user[0].info);
            that.set('auth.phone', json_data.user[0].phone);
            that.set('auth.role', json_data.user[0].role);
            that.set("auth.walletId", json_data.wallet[0].id);
            that.set('auth.following', json_data.user[0].following);
            that.set('auth.follower', json_data.user[0].follower);
            that.set('auth.group', json_data.user[0].group);
            that.set('auth.accessToken', json_data.user[0].accesstoken);
            return Ember.RSVP.resolve({ token });
          } else {
            localStorage.setItem('accessToken', '');
            localStorage.setItem('fbuserId', '');
            localStorage.setItem('id', '');
            localStorage.setItem('phone', '');
            token = null;
            that.get('session').close();
            window.location.reload();
            return Ember.RSVP.resolve();
          }
        }
      });
    },

    close: function (res) {
      this.set('accessToken', null);
      this.set('fbuserId', null);
      return Ember.RSVP.resolve();
    }
  });
});
;define('vidya-frontend/torii-adapters/fbnative', ['exports', 'vidya-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  if (_environment.default.environment === 'development') {
    var host = _environment.default.localHost;
  } else if (_environment.default.environment === 'production') {
    var host = _environment.default.remoteHost;
  }
  exports.default = Ember.Object.extend({
    accessToken: localStorage.getItem('accessToken'),
    fbuserId: localStorage.getItem('fbuserId'),
    userId: localStorage.getItem('userId'),
    phone: localStorage.getItem('phone'),
    auth: Ember.inject.service(),

    open: function (authentication) {
      var authorizationCode = authentication.userId;
      var that = this;
      return new Ember.RSVP.Promise((resolve, reject) => {
        facebookConnectPlugin.api('/me', ["public_profile"], function (response) {
          console.log(host + `/facebookLogin`);
          Ember.$.ajax({
            url: `${host}/facebookLogin`,
            data: {
              'fbuserId': response.id,
              'accessToken': authentication.sessionToken,
              'username': response.name,
              'role': 'User',
              'follower': [],
              'following': []
            },
            dataType: 'json',
            success: Ember.run.bind(null, resolve),
            error: Ember.run.bind(null, reject)
          });
        });
      }).then(function (user) {
        //console.log( "after auth with server",user)
        // The returned object is merged onto the session (basically). Here
        // you may also want to persist the new session with cookies or via
        // localStorage.
        return {
          currentUser: user
        };
      });
    },

    fetch: function () {

      let token = this.get('accessToken');
      let userId = this.get('userId');
      if (Ember.isEmpty(token)) {
        throw new Error('No token in storage');
      } else if (token == phone) {
        throw new Error('No token in storage');
      }
      var that = this;
      Ember.$.ajax({
        url: `${host}/user/current/`,
        data: {
          'fbuserId': this.get('fbuserId'),
          'phone': this.get('phone'),
          'accessToken': token
        },
        dataType: 'json',
        type: 'GET',
        success: function (data) {
          var json_data = JSON.parse(data.user[0]);
          var wallet_data = JSON.parse(data.wallet[0]);
          //       console.log("fetching current user json_data")
          console.log(wallet_data);
          if (json_data) {
            try {
              that.set('session.content.currrentUser', json_data);
              that.set('auth.accessToken', json_data.accesstoken);
              that.set('auth.userId', json_data.id);
              that.set('auth.fbuserId', json_data.fbuserId);
              that.set('auth.username', json_data.username);
              that.set('auth.user_url', json_data.user_url);
              that.set('auth.info', json_data.info);
              that.set("auth.walletId", wallet_data.id);
              that.set('auth.following', json_data.following);
              that.set('auth.follower', json_data.follower);
              that.set('auth.group', json_data.group);
              return Ember.RSVP.resolve({ token });
            } catch (ex) {
              localStorage.setItem('accessToken', '');
              localStorage.setItem('fbuserId', '');
              token = null;
              that.get('session').close();
              return Ember.RSVP.resolve();
            }
          } else {
            localStorage.setItem('accessToken', '');
            localStorage.setItem('fbuserId', '');
            token = null;
            that.get('session').close();
            return Ember.RSVP.resolve();
          }
        }
      });
    },

    close: function (res) {
      this.set('accessToken', null);
      facebookConnectPlugin.logout();
      return Ember.RSVP.resolve();
    }
  });
});
;define("vidya-frontend/torii-providers/fbnative", ["exports", "torii/providers/base"], function (exports, _base) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  function fbLogin() {
    return new Ember.RSVP.Promise(function (resolve, reject) {
      var fbLoginSuccess = function (userData) {
        //console.log("UserInfo: ", userData);
        facebookConnectPlugin.getAccessToken(function (token) {
          //console.log("Token: " + token);
          return Ember.run(null, resolve, {
            sessionToken: token
          });
        });
      };
      facebookConnectPlugin.login(["public_profile", "email"], fbLoginSuccess, function (error) {
        console.error("FBNATIVE FAIL", error);
      });
    });
  } /* global FB, $ */

  /**
   * This class implements authentication against facebook
   * connect using the Facebook SDK.
   */

  var fbconnect = _base.default.extend({

    // Facebook connect SDK settings:
    // API:
    //
    open: function (options) {
      return fbLogin();
    }

  });

  exports.default = fbconnect;
});
;define("vidya-frontend/transforms/rqlstamp", ["exports", "ember-data"], function (exports, _emberData) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Transform.extend({
    deserialize(serialized) {
      // {"stamp": {"$reql_type$": "TIME", "epoch_time": 1482156281.39, "timezone": "+00:00"}}
      if (serialized.stamp) {
        return new Date(serialized.stamp.epoch_time * 1000);
      } else if (serialized) {
        return new Date(serialized.epoch_time * 1000);
      }
    },

    serialize(deserialized) {
      // //console.log("deserialized",deserialized)
      if (deserialized) {
        // deserialized =  {"stamp": {"$reql_type$": "TIME", "epoch_time": deserialized/1000, "timezone": "+00:00"}};
        deserialized = { "$reql_type$": "TIME", "epoch_time": deserialized / 1000, "timezone": "+00:00" };
      }
      // return
      return deserialized;
    }
  });
});
;define('vidya-frontend/transforms/rqltags', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Transform.extend({
    deserialize(serialized) {
      if (serialized) {
        var data = [];
        for (var val = 0; val < serialized.length; val++) {
          data.pushObject({ 'name': serialized[val] });
        }
        return data;
      }
    },

    serialize(deserialized) {
      var data = [];
      if (deserialized) {
        for (var val = 0; val < deserialized.length; val++) {
          if (deserialized[val]['name'] != undefined) {
            data.pushObject(deserialized[val]['name']);
          }
        }
      }
      if (data.length == 0) {
        //console.log(deserialized)
        return deserialized;
      } else {
        //console.log(data)
        return data;
      }
    }
  });
});
;define('vidya-frontend/transforms/stringstamp', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Transform.extend({
    deserialize(serialized) {
      var s = serialized;
      var Cdate = new Date(s);
      // var bits = s.split(/\D/);
      // var date = new Date(bits[0], --bits[1], bits[2], bits[3], bits[4]);
      return Cdate;
    },

    serialize(deserialized) {
      return deserialized;
    }
  });
});
;define("vidya-frontend/transitions", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    // Add your transitions here, like:
    //   this.transition(
    //     this.fromRoute('people.index'),
    //     this.toRoute('people.detail'),
    //     this.use('toLeft'),
    //     this.reverse('toRight')
    //   );
  };
});
;define('vidya-frontend/transitions/cross-fade', ['exports', 'liquid-fire/transitions/cross-fade'], function (exports, _crossFade) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _crossFade.default;
    }
  });
});
;define('vidya-frontend/transitions/default', ['exports', 'liquid-fire/transitions/default'], function (exports, _default) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _default.default;
    }
  });
});
;define('vidya-frontend/transitions/explode', ['exports', 'liquid-fire/transitions/explode'], function (exports, _explode) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _explode.default;
    }
  });
});
;define('vidya-frontend/transitions/fade', ['exports', 'liquid-fire/transitions/fade'], function (exports, _fade) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _fade.default;
    }
  });
});
;define('vidya-frontend/transitions/flex-grow', ['exports', 'liquid-fire/transitions/flex-grow'], function (exports, _flexGrow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flexGrow.default;
    }
  });
});
;define('vidya-frontend/transitions/fly-to', ['exports', 'liquid-fire/transitions/fly-to'], function (exports, _flyTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _flyTo.default;
    }
  });
});
;define('vidya-frontend/transitions/move-over', ['exports', 'liquid-fire/transitions/move-over'], function (exports, _moveOver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _moveOver.default;
    }
  });
});
;define('vidya-frontend/transitions/scale', ['exports', 'liquid-fire/transitions/scale'], function (exports, _scale) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _scale.default;
    }
  });
});
;define('vidya-frontend/transitions/scroll-then', ['exports', 'liquid-fire/transitions/scroll-then'], function (exports, _scrollThen) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _scrollThen.default;
    }
  });
});
;define('vidya-frontend/transitions/to-down', ['exports', 'liquid-fire/transitions/to-down'], function (exports, _toDown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toDown.default;
    }
  });
});
;define('vidya-frontend/transitions/to-left', ['exports', 'liquid-fire/transitions/to-left'], function (exports, _toLeft) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toLeft.default;
    }
  });
});
;define('vidya-frontend/transitions/to-right', ['exports', 'liquid-fire/transitions/to-right'], function (exports, _toRight) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toRight.default;
    }
  });
});
;define('vidya-frontend/transitions/to-up', ['exports', 'liquid-fire/transitions/to-up'], function (exports, _toUp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toUp.default;
    }
  });
});
;define('vidya-frontend/transitions/wait', ['exports', 'liquid-fire/transitions/wait'], function (exports, _wait) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _wait.default;
    }
  });
});
;define('vidya-frontend/utils/clamp', ['exports', 'ember-paper/utils/clamp'], function (exports, _clamp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _clamp.default;
    }
  });
});
;

;define('vidya-frontend/config/environment', [], function() {
  var prefix = 'vidya-frontend';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("vidya-frontend/app")["default"].create({"usingCors":true,"corsWithCreds":true,"apiURL":"https://192.168.10.71:8181","name":"vidya-frontend","version":"0.0.0"});
          }
        
//# sourceMappingURL=vidya-frontend.map
