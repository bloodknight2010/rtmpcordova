'use strict';

define('vidya-frontend/tests/helpers/ember-cli-file-picker', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  function createFile(content = ['test'], options = {}) {
    const {
      name,
      type,
      lastModifiedDate
    } = options;

    const file = new Blob(content, { type: type ? type : 'text/plain' });
    file.name = name ? name : 'test.txt';

    return file;
  } /* global Blob, jQuery */

  const uploadFileHelper = function (content, options) {
    const file = createFile(content, options);

    const event = jQuery.Event('change');
    event.target = {
      files: [file]
    };

    jQuery('.file-picker__input').trigger(event);
  };

  const uploadFile = Ember.Test.registerAsyncHelper('uploadFile', function (app, content, options) {
    uploadFileHelper(content, options);

    return wait();
  });

  exports.uploadFile = uploadFile;
  exports.uploadFileHelper = uploadFileHelper;
});
define('vidya-frontend/tests/helpers/ember-power-select', ['exports', 'ember-power-select/test-support/helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.selectChoose = exports.touchTrigger = exports.nativeTouch = exports.clickTrigger = exports.typeInSearch = exports.triggerKeydown = exports.nativeMouseUp = exports.nativeMouseDown = exports.findContains = undefined;
  exports.default = deprecatedRegisterHelpers;


  function deprecateHelper(fn, name) {
    return function (...args) {
      (true && !(false) && Ember.deprecate(`DEPRECATED \`import { ${name} } from '../../tests/helpers/ember-power-select';\` is deprecated. Please, replace it with \`import { ${name} } from 'ember-power-select/test-support/helpers';\``, false, { until: '1.11.0', id: `ember-power-select-test-support-${name}` }));

      return fn(...args);
    };
  }

  let findContains = deprecateHelper(_helpers.findContains, 'findContains');
  let nativeMouseDown = deprecateHelper(_helpers.nativeMouseDown, 'nativeMouseDown');
  let nativeMouseUp = deprecateHelper(_helpers.nativeMouseUp, 'nativeMouseUp');
  let triggerKeydown = deprecateHelper(_helpers.triggerKeydown, 'triggerKeydown');
  let typeInSearch = deprecateHelper(_helpers.typeInSearch, 'typeInSearch');
  let clickTrigger = deprecateHelper(_helpers.clickTrigger, 'clickTrigger');
  let nativeTouch = deprecateHelper(_helpers.nativeTouch, 'nativeTouch');
  let touchTrigger = deprecateHelper(_helpers.touchTrigger, 'touchTrigger');
  let selectChoose = deprecateHelper(_helpers.selectChoose, 'selectChoose');

  function deprecatedRegisterHelpers() {
    (true && !(false) && Ember.deprecate("DEPRECATED `import registerPowerSelectHelpers from '../../tests/helpers/ember-power-select';` is deprecated. Please, replace it with `import registerPowerSelectHelpers from 'ember-power-select/test-support/helpers';`", false, { until: '1.11.0', id: 'ember-power-select-test-support-register-helpers' }));

    return (0, _helpers.default)();
  }

  exports.findContains = findContains;
  exports.nativeMouseDown = nativeMouseDown;
  exports.nativeMouseUp = nativeMouseUp;
  exports.triggerKeydown = triggerKeydown;
  exports.typeInSearch = typeInSearch;
  exports.clickTrigger = clickTrigger;
  exports.nativeTouch = nativeTouch;
  exports.touchTrigger = touchTrigger;
  exports.selectChoose = selectChoose;
});
define('vidya-frontend/tests/helpers/torii', ['exports', 'vidya-frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.stubValidSession = stubValidSession;


  const {
    torii: { sessionServiceName }
  } = _environment.default;

  function stubValidSession(application, sessionData) {
    let session = application.__container__.lookup(`service:${sessionServiceName}`);

    let sm = session.get('stateMachine');
    Ember.run(() => {
      sm.send('startOpen');
      sm.send('finishOpen', sessionData);
    });
  }
});
define('vidya-frontend/tests/integration/components/create-news-dialog-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | create-news-dialog', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "USqLzvYr",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"create-news-dialog\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "1GcSKpKi",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"create-news-dialog\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('vidya-frontend/tests/integration/components/doc-content-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | doc-content', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "h5SPVg/O",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"doc-content\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "krfm+dNS",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"doc-content\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('vidya-frontend/tests/integration/components/group-card-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | group-card', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "EpYYxCe0",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"group-card\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "jp2yelZg",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"group-card\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('vidya-frontend/tests/integration/components/news/crsgroup-dialog-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | news/crsgroup-dialog', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "l7A37fNr",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"news/crsgroup-dialog\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "TgySEnTd",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"news/crsgroup-dialog\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('vidya-frontend/tests/integration/components/news/detail-card-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | news/detail-card', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ItKD1+ll",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"news/detail-card\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "dG3Nf98M",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"news/detail-card\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('vidya-frontend/tests/integration/components/page-bottombar-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | page-bottombar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "rL8m9FfJ",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"page-bottombar\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "JPY/0r/G",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"page-bottombar\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('vidya-frontend/tests/integration/components/page-toolbar-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | page-toolbar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "hX0s1YRW",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"page-toolbar\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "4GcFY/80",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"page-toolbar\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('vidya-frontend/tests/integration/components/socials/group-page-card-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | socials/group-page-card', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "Imc0/YMr",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"socials/group-page-card\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "gCuuNeOs",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"socials/group-page-card\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('vidya-frontend/tests/integration/components/socials/message-box-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | socials/message-box', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "WeEyKSnh",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"socials/message-box\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "yCinwG9l",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"socials/message-box\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('vidya-frontend/tests/integration/components/socials/message-card-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | socials/message-card', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "2oQkeS0L",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"socials/message-card\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "KRywUMjO",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"socials/message-card\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('vidya-frontend/tests/integration/components/socials/message-container-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | socials/message-container', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "beiWDiq1",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"socials/message-container\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "YnLqVInx",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"socials/message-container\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('vidya-frontend/tests/integration/components/socials/social-card-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | socials/social-card', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "eEk95LYA",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"socials/social-card\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "w8lbTLyb",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"socials/social-card\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('vidya-frontend/tests/integration/components/socials/social-detail-view-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | socials/social-detail-view', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "fGzQ1kzN",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"socials/social-detail-view\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "m1FnIGrT",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"socials/social-detail-view\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('vidya-frontend/tests/integration/components/socials/social-list-card-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | socials/social-list-card', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "UU6xmA1A",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"socials/social-list-card\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "IyPUBrIK",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"socials/social-list-card\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('vidya-frontend/tests/integration/components/user/chat-box-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | user/chat-box', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "9Fg8pouG",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"user/chat-box\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "zNXpGAvD",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"user/chat-box\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('vidya-frontend/tests/integration/components/user/chat-card-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | user/chat-card', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "aBvGKu+6",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"user/chat-card\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "HKeIWYos",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"user/chat-card\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('vidya-frontend/tests/integration/components/user/chat-container-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | user/chat-container', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "1JAYWplR",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"user/chat-container\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "x/dgzyKb",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"user/chat-container\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('vidya-frontend/tests/integration/components/user/chat-list-card-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | user/chat-list-card', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "34/apy25",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"user/chat-list-card\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "Lvh7t9fw",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"user/chat-list-card\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('vidya-frontend/tests/integration/helpers/chatgroup-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Helper | chatgroup', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "fSGBuasM",
        "block": "{\"symbols\":[],\"statements\":[[1,[27,\"chatgroup\",[[23,[\"inputValue\"]]],null],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '1234');
    });
  });
});
define('vidya-frontend/tests/lint/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'adapters/application.js should pass ESLint\n\n6:7 - \'host\' is already defined. (no-redeclare)\n11:12 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n11:12 - \'Ember\' is not defined. (no-undef)\n12:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n12:9 - \'Ember\' is not defined. (no-undef)\n15:12 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n15:12 - \'Ember\' is not defined. (no-undef)\n23:9 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n45:3 - Use import { keys } from \'@ember/polyfills\'; instead of using Ember.keys (ember/new-module-imports)\n45:3 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('breakpoints.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'breakpoints.js should pass ESLint\n\n');
  });

  QUnit.test('components/bottom-bar-card.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/bottom-bar-card.js should pass ESLint\n\n6:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });

  QUnit.test('components/cover-dialog.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/cover-dialog.js should pass ESLint\n\n4:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:9 - \'Ember\' is not defined. (no-undef)\n5:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });

  QUnit.test('components/create-news-dialog.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/create-news-dialog.js should pass ESLint\n\n6:7 - \'host\' is already defined. (no-redeclare)\n9:12 - \'Ember\' is not defined. (no-undef)\n9:12 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n10:9 - \'Ember\' is not defined. (no-undef)\n10:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n11:16 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n11:16 - \'Ember\' is not defined. (no-undef)\n14:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n15:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n17:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n18:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n22:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n22:15 - \'Ember\' is not defined. (no-undef)\n23:5 - Unexpected console statement. (no-console)\n26:19 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n26:19 - \'Ember\' is not defined. (no-undef)\n29:23 - \'Ember\' is not defined. (no-undef)\n29:23 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n40:20 - Empty block statement. (no-empty)\n43:20 - Empty block statement. (no-empty)\n78:35 - \'response\' is defined but never used. (no-unused-vars)\n84:21 - \'option\' is defined but never used. (no-unused-vars)\n89:7 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n89:7 - \'Ember\' is not defined. (no-undef)\n94:27 - \'response\' is defined but never used. (no-unused-vars)\n106:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n107:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n108:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n108:10 - Unexpected console statement. (no-console)\n109:13 - Move function declaration to function body root. (no-inner-declarations)\n112:29 - \'e\' is defined but never used. (no-unused-vars)\n119:47 - \'e\' is defined but never used. (no-unused-vars)\n136:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n137:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n138:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n138:9 - Unexpected console statement. (no-console)\n139:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n140:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n141:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n142:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n149:9 - Unexpected console statement. (no-console)\n153:9 - Unexpected console statement. (no-console)\n158:26 - \'Camera\' is not defined. (no-undef)\n168:25 - \'e\' is defined but never used. (no-unused-vars)\n175:43 - \'e\' is defined but never used. (no-unused-vars)\n209:25 - \'e\' is defined but never used. (no-unused-vars)\n216:43 - \'e\' is defined but never used. (no-unused-vars)\n260:9 - \'mime\' is assigned a value but never used. (no-unused-vars)\n261:9 - \'filename\' is assigned a value but never used. (no-unused-vars)\n266:13 - \'bstr\' is already defined. (no-redeclare)\n268:13 - \'bstr\' is already defined. (no-redeclare)\n270:11 - \'n\' is assigned a value but never used. (no-unused-vars)\n282:11 - \'dataURI\' is assigned a value but never used. (no-unused-vars)\n286:11 - \'dataURI\' is already defined. (no-redeclare)\n287:11 - \'file\' is already defined. (no-redeclare)\n296:5 - Unexpected console statement. (no-console)\n300:11 - \'checkFile\' is assigned a value but never used. (no-unused-vars)\n310:17 - \'filename\' is already defined. (no-redeclare)\n338:7 - Unexpected console statement. (no-console)\n341:9 - Unexpected console statement. (no-console)\n345:7 - Unexpected console statement. (no-console)\n346:7 - Unexpected console statement. (no-console)\n348:34 - \'e\' is defined but never used. (no-unused-vars)\n350:7 - Unexpected console statement. (no-console)\n355:7 - Unexpected console statement. (no-console)\n362:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('components/doc-content.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/doc-content.js should pass ESLint\n\n');
  });

  QUnit.test('components/entertainment/create-live-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/entertainment/create-live-card.js should pass ESLint\n\n');
  });

  QUnit.test('components/entertainment/cteate-live.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/entertainment/cteate-live.js should pass ESLint\n\n');
  });

  QUnit.test('components/entertainment/main-live.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/entertainment/main-live.js should pass ESLint\n\n');
  });

  QUnit.test('components/entertainment/main-nolive.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/entertainment/main-nolive.js should pass ESLint\n\n');
  });

  QUnit.test('components/entertainment/no-live-poster.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/entertainment/no-live-poster.js should pass ESLint\n\n');
  });

  QUnit.test('components/entertainment/user-live.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/entertainment/user-live.js should pass ESLint\n\n');
  });

  QUnit.test('components/entertainment/user-replay.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/entertainment/user-replay.js should pass ESLint\n\n');
  });

  QUnit.test('components/entertainment/user-upload.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/entertainment/user-upload.js should pass ESLint\n\n');
  });

  QUnit.test('components/entertainment/user-video-clip.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/entertainment/user-video-clip.js should pass ESLint\n\n');
  });

  QUnit.test('components/fullscreen-img.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/fullscreen-img.js should pass ESLint\n\n');
  });

  QUnit.test('components/group-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/group-card.js should pass ESLint\n\n');
  });

  QUnit.test('components/news/category-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/news/category-card.js should pass ESLint\n\n');
  });

  QUnit.test('components/news/crs-list.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/news/crs-list.js should pass ESLint\n\n5:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:11 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('components/news/crsgroup-dialog.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/news/crsgroup-dialog.js should pass ESLint\n\n4:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:9 - \'Ember\' is not defined. (no-undef)\n5:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:11 - \'Ember\' is not defined. (no-undef)\n7:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n8:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n9:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n10:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n10:14 - \'Ember\' is not defined. (no-undef)\n11:5 - Unexpected console statement. (no-console)\n38:27 - \'response\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('components/news/detail-card.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/news/detail-card.js should pass ESLint\n\n7:7 - \'host\' is already defined. (no-redeclare)\n8:7 - \'pilboxHost\' is already defined. (no-redeclare)\n12:15 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n12:15 - \'Ember\' is not defined. (no-undef)\n13:11 - \'Ember\' is not defined. (no-undef)\n13:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n17:36 - \'ele\' is defined but never used. (no-unused-vars)\n18:17 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n18:17 - \'$\' is not defined. (no-undef)\n20:7 - Unexpected console statement. (no-console)\n24:9 - Unexpected console statement. (no-console)\n27:13 - \'srcUrl\' is already defined. (no-redeclare)\n29:11 - \'url\' is already defined. (no-redeclare)\n29:17 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n29:17 - \'$\' is not defined. (no-undef)\n31:7 - \'$\' is not defined. (no-undef)\n31:7 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n32:11 - \'viewer\' is assigned a value but never used. (no-unused-vars)\n32:24 - \'Viewer\' is not defined. (no-undef)\n32:31 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n32:31 - \'$\' is not defined. (no-undef)\n46:38 - \'ele\' is defined but never used. (no-unused-vars)\n47:17 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n47:17 - \'$\' is not defined. (no-undef)\n49:7 - Unexpected console statement. (no-console)\n53:9 - Unexpected console statement. (no-console)\n56:13 - \'srcUrl\' is already defined. (no-redeclare)\n58:11 - \'url\' is already defined. (no-redeclare)\n58:17 - \'$\' is not defined. (no-undef)\n58:17 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n60:7 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n60:7 - \'$\' is not defined. (no-undef)\n61:11 - \'viewer\' is assigned a value but never used. (no-unused-vars)\n61:24 - \'Viewer\' is not defined. (no-undef)\n61:31 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n61:31 - \'$\' is not defined. (no-undef)\n75:40 - \'ele\' is defined but never used. (no-unused-vars)\n77:17 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n77:17 - \'$\' is not defined. (no-undef)\n81:7 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n81:7 - \'$\' is not defined. (no-undef)\n82:11 - \'viewer\' is assigned a value but never used. (no-unused-vars)\n82:24 - \'Viewer\' is not defined. (no-undef)\n82:31 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n82:31 - \'$\' is not defined. (no-undef)\n98:39 - \'ele\' is defined but never used. (no-unused-vars)\n99:7 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n99:7 - \'$\' is not defined. (no-undef)\n99:34 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n99:34 - \'$\' is not defined. (no-undef)\n101:38 - \'ele\' is defined but never used. (no-unused-vars)\n102:7 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n102:7 - \'$\' is not defined. (no-undef)\n102:37 - \'$\' is not defined. (no-undef)\n102:37 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n105:17 - \'$\' is not defined. (no-undef)\n105:17 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n108:7 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n108:7 - \'$\' is not defined. (no-undef)\n110:34 - \'ele\' is defined but never used. (no-unused-vars)\n112:9 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n112:9 - \'$\' is not defined. (no-undef)\n115:29 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n115:29 - \'$\' is not defined. (no-undef)\n126:21 - Empty block statement. (no-empty)\n127:11 - \'$\' is not defined. (no-undef)\n127:11 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n127:46 - \'e\' is defined but never used. (no-unused-vars)\n128:13 - \'$\' is not defined. (no-undef)\n128:13 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n128:43 - \'e\' is defined but never used. (no-unused-vars)\n132:11 - \'$\' is not defined. (no-undef)\n132:11 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n133:13 - \'$\' is not defined. (no-undef)\n133:13 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n133:43 - \'e\' is defined but never used. (no-unused-vars)\n140:5 - \'$\' is not defined. (no-undef)\n140:5 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n147:7 - Unexpected console statement. (no-console)\n166:11 - Unexpected console statement. (no-console)');
  });

  QUnit.test('components/news/headline-card.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/news/headline-card.js should pass ESLint\n\n5:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n8:5 - Duplicate key \'shadow\'. (no-dupe-keys)');
  });

  QUnit.test('components/news/headline-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/news/headline-list.js should pass ESLint\n\n');
  });

  QUnit.test('components/news/inter-card.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/news/inter-card.js should pass ESLint\n\n14:7 - Unexpected console statement. (no-console)');
  });

  QUnit.test('components/news/inter-list-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/news/inter-list-card.js should pass ESLint\n\n');
  });

  QUnit.test('components/news/local-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/news/local-card.js should pass ESLint\n\n');
  });

  QUnit.test('components/news/local-list-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/news/local-list-card.js should pass ESLint\n\n');
  });

  QUnit.test('components/news/news-list-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/news/news-list-card.js should pass ESLint\n\n');
  });

  QUnit.test('components/news/private-card.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/news/private-card.js should pass ESLint\n\n8:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n8:16 - \'Ember\' is not defined. (no-undef)\n16:7 - Unexpected console statement. (no-console)');
  });

  QUnit.test('components/news/private-list-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/news/private-list-card.js should pass ESLint\n\n');
  });

  QUnit.test('components/news/random-news-list.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/news/random-news-list.js should pass ESLint\n\n10:7 - \'host\' is already defined. (no-redeclare)\n13:9 - \'Ember\' is not defined. (no-undef)\n13:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n14:11 - \'Ember\' is not defined. (no-undef)\n14:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n15:11 - \'Ember\' is not defined. (no-undef)\n15:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n26:5 - \'$\' is not defined. (no-undef)\n26:5 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n30:20 - Empty block statement. (no-empty)\n47:11 - \'height\' is already defined. (no-redeclare)\n66:9 - Use closure actions, unless you need bubbling (ember/closure-actions)\n74:11 - \'elem\' is assigned a value but never used. (no-unused-vars)\n95:11 - Unexpected console statement. (no-console)');
  });

  QUnit.test('components/page-bottombar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/page-bottombar.js should pass ESLint\n\n');
  });

  QUnit.test('components/page-toolbar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/page-toolbar.js should pass ESLint\n\n');
  });

  QUnit.test('components/profile-info-edit.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/profile-info-edit.js should pass ESLint\n\n4:17 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n4:17 - \'Ember\' is not defined. (no-undef)\n5:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('components/share-dialog.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/share-dialog.js should pass ESLint\n\n4:10 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:10 - \'Ember\' is not defined. (no-undef)\n5:13 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:13 - \'Ember\' is not defined. (no-undef)\n9:7 - Unexpected console statement. (no-console)\n12:20 - \'Popcorn\' is not defined. (no-undef)\n13:11 - \'poster\' is assigned a value but never used. (no-unused-vars)\n55:13 - Unexpected console statement. (no-console)\n57:33 - \'news\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('components/social-search-card.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/social-search-card.js should pass ESLint\n\n4:13 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:13 - \'Ember\' is not defined. (no-undef)\n21:17 - \'elem\' is already defined. (no-redeclare)');
  });

  QUnit.test('components/social/share-post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/social/share-post.js should pass ESLint\n\n');
  });

  QUnit.test('components/socials/crs-post-card.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/socials/crs-post-card.js should pass ESLint\n\n9:7 - \'host\' is already defined. (no-redeclare)\n13:11 - \'Ember\' is not defined. (no-undef)\n13:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n18:9 - \'AnimOnScroll\' is not defined. (no-undef)\n29:7 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n29:7 - \'$\' is not defined. (no-undef)\n33:22 - Empty block statement. (no-empty)\n41:11 - Unexpected console statement. (no-console)\n46:20 - Empty block statement. (no-empty)\n57:15 - Empty block statement. (no-empty)\n59:52 - \'tmp\' is defined but never used. (no-unused-vars)\n65:13 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n65:13 - \'$\' is not defined. (no-undef)\n66:25 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n66:25 - \'$\' is not defined. (no-undef)\n85:11 - \'AnimOnScroll\' is not defined. (no-undef)\n126:13 - Unexpected console statement. (no-console)');
  });

  QUnit.test('components/socials/group-page-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/socials/group-page-card.js should pass ESLint\n\n');
  });

  QUnit.test('components/socials/group-post-card.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/socials/group-post-card.js should pass ESLint\n\n9:7 - \'host\' is already defined. (no-redeclare)\n13:13 - \'Ember\' is not defined. (no-undef)\n13:13 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n18:11 - \'AnimOnScroll\' is not defined. (no-undef)\n29:7 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n29:7 - \'$\' is not defined. (no-undef)\n33:22 - Empty block statement. (no-empty)\n41:11 - Unexpected console statement. (no-console)\n46:20 - Empty block statement. (no-empty)\n57:17 - Empty block statement. (no-empty)\n59:54 - \'tmp\' is defined but never used. (no-unused-vars)\n65:11 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n65:11 - \'$\' is not defined. (no-undef)\n66:23 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n66:23 - \'$\' is not defined. (no-undef)\n86:13 - \'AnimOnScroll\' is not defined. (no-undef)\n127:15 - Unexpected console statement. (no-console)');
  });

  QUnit.test('components/socials/message-box.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/socials/message-box.js should pass ESLint\n\n');
  });

  QUnit.test('components/socials/message-card.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/socials/message-card.js should pass ESLint\n\n30:9 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n30:9 - \'Ember\' is not defined. (no-undef)\n30:42 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n30:42 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('components/socials/message-container.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/socials/message-container.js should pass ESLint\n\n4:12 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:12 - \'Ember\' is not defined. (no-undef)\n5:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:9 - \'Ember\' is not defined. (no-undef)\n6:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n6:11 - \'Ember\' is not defined. (no-undef)\n14:13 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n14:13 - \'Ember\' is not defined. (no-undef)\n23:15 - Empty block statement. (no-empty)\n47:12 - \'Ember\' is not defined. (no-undef)\n47:12 - Use import { observer } from \'@ember/object\'; instead of using Ember.observer (ember/new-module-imports)');
  });

  QUnit.test('components/socials/share-post-card.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/socials/share-post-card.js should pass ESLint\n\n9:7 - \'host\' is already defined. (no-redeclare)\n13:11 - \'Ember\' is not defined. (no-undef)\n13:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n21:9 - \'AnimOnScroll\' is not defined. (no-undef)\n32:7 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n32:7 - \'$\' is not defined. (no-undef)\n36:22 - Empty block statement. (no-empty)\n44:11 - Unexpected console statement. (no-console)\n49:20 - Empty block statement. (no-empty)\n60:17 - Empty block statement. (no-empty)\n67:17 - Empty block statement. (no-empty)\n69:54 - \'tmp\' is defined but never used. (no-unused-vars)\n75:15 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n75:15 - \'$\' is not defined. (no-undef)\n76:27 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n76:27 - \'$\' is not defined. (no-undef)\n96:13 - \'AnimOnScroll\' is not defined. (no-undef)\n104:13 - \'AnimOnScroll\' is not defined. (no-undef)');
  });

  QUnit.test('components/socials/social-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/socials/social-card.js should pass ESLint\n\n');
  });

  QUnit.test('components/socials/social-detail-view.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/socials/social-detail-view.js should pass ESLint\n\n7:7 - \'host\' is already defined. (no-redeclare)\n11:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n15:17 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n15:17 - \'Ember\' is not defined. (no-undef)\n18:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n18:11 - \'Ember\' is not defined. (no-undef)\n19:17 - \'Ember\' is not defined. (no-undef)\n19:17 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n22:5 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n22:5 - \'$\' is not defined. (no-undef)\n26:20 - Empty block statement. (no-empty)\n32:48 - \'tmp\' is defined but never used. (no-unused-vars)\n38:9 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n38:9 - \'$\' is not defined. (no-undef)\n39:21 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n39:21 - \'$\' is not defined. (no-undef)\n58:11 - \'elem\' is assigned a value but never used. (no-unused-vars)\n78:9 - Unexpected console statement. (no-console)\n83:7 - Unexpected console statement. (no-console)');
  });

  QUnit.test('components/socials/social-list-card.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/socials/social-list-card.js should pass ESLint\n\n7:3 - \'observer\' is defined but never used. (no-unused-vars)\n14:7 - \'host\' is already defined. (no-redeclare)\n18:11 - \'Ember\' is not defined. (no-undef)\n18:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n19:9 - \'Ember\' is not defined. (no-undef)\n19:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n24:9 - \'AnimOnScroll\' is not defined. (no-undef)\n26:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n36:5 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n36:5 - \'$\' is not defined. (no-undef)\n40:20 - Empty block statement. (no-empty)\n48:9 - Unexpected console statement. (no-console)\n53:18 - Empty block statement. (no-empty)\n63:15 - Empty block statement. (no-empty)\n64:52 - \'tmp\' is defined but never used. (no-unused-vars)\n70:13 - \'$\' is not defined. (no-undef)\n70:13 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n71:25 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n71:25 - \'$\' is not defined. (no-undef)\n90:12 - \'AnimOnScroll\' is not defined. (no-undef)\n131:11 - Unexpected console statement. (no-console)');
  });

  QUnit.test('components/spinner-circle.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/spinner-circle.js should pass ESLint\n\n');
  });

  QUnit.test('components/toolbar-noti.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/toolbar-noti.js should pass ESLint\n\n');
  });

  QUnit.test('components/under-development-page.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/under-development-page.js should pass ESLint\n\n');
  });

  QUnit.test('components/user/chat-box.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/user/chat-box.js should pass ESLint\n\n');
  });

  QUnit.test('components/user/chat-card.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/user/chat-card.js should pass ESLint\n\n3:3 - \'next\' is defined but never used. (no-unused-vars)\n9:7 - \'host\' is already defined. (no-redeclare)\n13:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n13:11 - \'Ember\' is not defined. (no-undef)\n15:5 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n15:5 - \'Ember\' is not defined. (no-undef)\n15:38 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n15:38 - \'Ember\' is not defined. (no-undef)\n53:11 - Unexpected console statement. (no-console)');
  });

  QUnit.test('components/user/chat-container.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/user/chat-container.js should pass ESLint\n\n6:7 - \'host\' is already defined. (no-redeclare)\n7:7 - \'pilboxHost\' is assigned a value but never used. (no-unused-vars)\n10:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n10:9 - \'Ember\' is not defined. (no-undef)\n11:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n11:11 - \'Ember\' is not defined. (no-undef)\n12:16 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n12:16 - \'Ember\' is not defined. (no-undef)\n19:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n23:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n23:15 - \'Ember\' is not defined. (no-undef)\n40:15 - Empty block statement. (no-empty)\n57:12 - \'Ember\' is not defined. (no-undef)\n57:12 - Use import { observer } from \'@ember/object\'; instead of using Ember.observer (ember/new-module-imports)\n67:15 - \'Ember\' is not defined. (no-undef)\n67:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n68:5 - Unexpected console statement. (no-console)\n71:19 - \'Ember\' is not defined. (no-undef)\n71:19 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n74:23 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n74:23 - \'Ember\' is not defined. (no-undef)\n116:9 - Unexpected console statement. (no-console)\n124:26 - \'Camera\' is not defined. (no-undef)\n162:11 - \'captureSuccess\' is assigned a value but never used. (no-unused-vars)\n162:37 - \'mediaFile\' is defined but never used. (no-unused-vars)\n163:18 - \'getFileContentAsBase64\' is defined but never used. (no-unused-vars)\n166:25 - \'e\' is defined but never used. (no-unused-vars)\n173:43 - \'e\' is defined but never used. (no-unused-vars)\n187:44 - \'error\' is not defined. (no-undef)\n189:26 - \'Camera\' is not defined. (no-undef)\n194:5 - Duplicate key \'selectVideo\'. (no-dupe-keys)\n201:25 - \'e\' is defined but never used. (no-unused-vars)\n208:43 - \'e\' is defined but never used. (no-unused-vars)\n237:22 - \'option\' is defined but never used. (no-unused-vars)\n242:9 - \'Ember\' is not defined. (no-undef)\n242:9 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n247:29 - \'response\' is defined but never used. (no-unused-vars)\n269:25 - \'e\' is defined but never used. (no-unused-vars)\n276:43 - \'e\' is defined but never used. (no-unused-vars)\n308:9 - \'mime\' is assigned a value but never used. (no-unused-vars)\n309:9 - \'filename\' is assigned a value but never used. (no-unused-vars)\n311:7 - Unexpected console statement. (no-console)\n315:13 - \'bstr\' is already defined. (no-redeclare)\n317:11 - \'n\' is assigned a value but never used. (no-unused-vars)\n329:11 - \'dataURI\' is assigned a value but never used. (no-unused-vars)\n333:11 - \'dataURI\' is already defined. (no-redeclare)\n334:11 - \'file\' is already defined. (no-redeclare)');
  });

  QUnit.test('components/user/chat-list-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/user/chat-list-card.js should pass ESLint\n\n');
  });

  QUnit.test('components/user/fullscreen-img.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/user/fullscreen-img.js should pass ESLint\n\n6:15 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n6:15 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('components/user/group-list-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/user/group-list-card.js should pass ESLint\n\n');
  });

  QUnit.test('components/user/group-pic.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/user/group-pic.js should pass ESLint\n\n6:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n7:13 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n7:13 - \'Ember\' is not defined. (no-undef)\n8:18 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n8:18 - \'Ember\' is not defined. (no-undef)\n9:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n14:15 - Use import { observer } from \'@ember/object\'; instead of using Ember.observer (ember/new-module-imports)\n14:15 - \'Ember\' is not defined. (no-undef)\n18:13 - Unexpected console statement. (no-console)\n40:9 - Duplicate key \'displayInfo\'. (no-dupe-keys)\n50:13 - Unexpected console statement. (no-console)\n53:13 - Unexpected console statement. (no-console)\n57:17 - Unexpected console statement. (no-console)');
  });

  QUnit.test('components/user/profile-card.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/user/profile-card.js should pass ESLint\n\n6:5 - Unexpected console statement. (no-console)\n9:18 - \'Popcorn\' is not defined. (no-undef)\n10:9 - \'poster\' is assigned a value but never used. (no-unused-vars)');
  });

  QUnit.test('components/user/profile-pic.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/user/profile-pic.js should pass ESLint\n\n6:7 - \'host\' is already defined. (no-redeclare)\n10:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n10:9 - \'Ember\' is not defined. (no-undef)\n11:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n11:11 - \'Ember\' is not defined. (no-undef)\n12:16 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n12:16 - \'Ember\' is not defined. (no-undef)\n15:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n17:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n23:11 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n23:11 - \'Ember\' is not defined. (no-undef)\n26:11 - \'Ember\' is not defined. (no-undef)\n26:11 - Use import { observer } from \'@ember/object\'; instead of using Ember.observer (ember/new-module-imports)\n30:11 - Unexpected console statement. (no-console)\n46:11 - \'Ember\' is not defined. (no-undef)\n46:11 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n49:11 - \'Ember\' is not defined. (no-undef)\n49:11 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n52:15 - Unexpected console statement. (no-console)\n56:3 - Unexpected console statement. (no-console)\n68:9 - Unexpected console statement. (no-console)\n71:9 - Unexpected console statement. (no-console)\n101:13 - \'enduser\' is assigned a value but never used. (no-unused-vars)\n118:11 - \'that\' is assigned a value but never used. (no-unused-vars)\n119:7 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n119:7 - \'Ember\' is not defined. (no-undef)\n124:30 - \'response\' is defined but never used. (no-unused-vars)\n151:7 - Unexpected console statement. (no-console)');
  });

  QUnit.test('components/user/profile-user-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/user/profile-user-card.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/application.js should pass ESLint\n\n9:7 - \'host\' is already defined. (no-redeclare)\n14:16 - \'Ember\' is not defined. (no-undef)\n14:16 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n15:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n15:11 - \'Ember\' is not defined. (no-undef)\n16:12 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n16:12 - \'Ember\' is not defined. (no-undef)\n17:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n17:9 - \'Ember\' is not defined. (no-undef)\n18:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n19:15 - \'Ember\' is not defined. (no-undef)\n19:15 - Use import { sort } from \'@ember/object/computed\'; instead of using Ember.computed.sort (ember/new-module-imports)\n22:12 - \'Ember\' is not defined. (no-undef)\n22:12 - Use import { not } from \'@ember/object/computed\'; instead of using Ember.computed.not (ember/new-module-imports)\n23:14 - \'Ember\' is not defined. (no-undef)\n23:14 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n24:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n26:17 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n26:17 - \'Ember\' is not defined. (no-undef)\n28:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n31:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n34:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n37:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n40:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n43:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n46:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n49:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n52:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n55:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n58:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n61:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n64:9 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n67:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n70:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n73:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n76:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n79:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n82:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n85:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n88:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n92:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n96:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n100:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n104:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n108:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n113:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n116:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n119:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n124:13 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n124:13 - \'Ember\' is not defined. (no-undef)\n127:16 - \'Ember\' is not defined. (no-undef)\n127:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n130:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n130:14 - \'Ember\' is not defined. (no-undef)\n133:18 - Use import { observer } from \'@ember/object\'; instead of using Ember.observer (ember/new-module-imports)\n133:18 - \'Ember\' is not defined. (no-undef)\n137:18 - Use import { observer } from \'@ember/object\'; instead of using Ember.observer (ember/new-module-imports)\n137:18 - \'Ember\' is not defined. (no-undef)\n141:3 - Call this._super(...arguments) in init hook (ember/require-super-in-init)\n149:9 - \'Ember\' is not defined. (no-undef)\n150:9 - \'Ember\' is not defined. (no-undef)\n150:9 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n161:13 - Unexpected console statement. (no-console)\n167:9 - \'Ember\' is not defined. (no-undef)\n173:20 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n173:20 - \'Ember\' is not defined. (no-undef)\n176:13 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n176:13 - \'Ember\' is not defined. (no-undef)\n179:16 - \'Ember\' is not defined. (no-undef)\n179:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n230:7 - Unexpected console statement. (no-console)\n231:7 - Unexpected console statement. (no-console)\n233:9 - Unexpected console statement. (no-console)\n264:11 - \'_id\' is already defined. (no-redeclare)\n265:131 - Empty block statement. (no-empty)\n299:7 - Unexpected console statement. (no-console)\n315:9 - Unexpected console statement. (no-console)\n366:7 - Unexpected console statement. (no-console)\n399:7 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/bottombar.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/bottombar.js should pass ESLint\n\n4:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:11 - \'Ember\' is not defined. (no-undef)\n5:13 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n5:13 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('controllers/discuss/chat.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/discuss/chat.js should pass ESLint\n\n4:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:11 - \'Ember\' is not defined. (no-undef)\n5:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:9 - \'Ember\' is not defined. (no-undef)\n18:16 - \'Ember\' is not defined. (no-undef)\n18:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n19:5 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n23:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n23:14 - \'Ember\' is not defined. (no-undef)\n26:14 - \'Ember\' is not defined. (no-undef)\n26:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n30:8 - Use import { observer } from \'@ember/object\'; instead of using Ember.observer (ember/new-module-imports)\n30:8 - \'Ember\' is not defined. (no-undef)\n37:11 - \'val\' is already defined. (no-redeclare)\n42:52 - \'post\' is defined but never used. (no-unused-vars)\n50:17 - \'Ember\' is not defined. (no-undef)\n50:17 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n83:22 - \'chat\' is defined but never used. (no-unused-vars)\n86:7 - \'$\' is not defined. (no-undef)\n86:7 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n86:34 - \'$\' is not defined. (no-undef)\n86:34 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n99:9 - Unexpected console statement. (no-console)\n111:56 - \'post\' is defined but never used. (no-unused-vars)\n129:7 - Unexpected console statement. (no-console)\n140:7 - Unexpected console statement. (no-console)\n145:7 - Unexpected console statement. (no-console)\n165:7 - \'$\' is not defined. (no-undef)\n165:7 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n165:34 - \'$\' is not defined. (no-undef)\n165:34 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n168:12 - Use import { observer } from \'@ember/object\'; instead of using Ember.observer (ember/new-module-imports)\n168:12 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('controllers/discuss/create-grouppost.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/discuss/create-grouppost.js should pass ESLint\n\n4:9 - \'and\' is defined but never used. (no-unused-vars)\n8:7 - \'host\' is already defined. (no-redeclare)\n9:7 - \'pilboxHost\' is assigned a value but never used. (no-unused-vars)\n13:12 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n13:12 - \'Ember\' is not defined. (no-undef)\n14:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n14:9 - \'Ember\' is not defined. (no-undef)\n15:16 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n15:16 - \'Ember\' is not defined. (no-undef)\n16:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n16:11 - \'Ember\' is not defined. (no-undef)\n19:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n20:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n22:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n23:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n24:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n31:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n31:15 - \'Ember\' is not defined. (no-undef)\n32:5 - Unexpected console statement. (no-console)\n35:15 - \'Ember\' is not defined. (no-undef)\n35:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n38:19 - \'Ember\' is not defined. (no-undef)\n38:19 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n39:5 - Unexpected console statement. (no-console)\n42:23 - \'Ember\' is not defined. (no-undef)\n42:23 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n45:11 - Use import { observer } from \'@ember/object\'; instead of using Ember.observer (ember/new-module-imports)\n45:11 - \'Ember\' is not defined. (no-undef)\n46:5 - Unexpected console statement. (no-console)\n52:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n52:14 - \'Ember\' is not defined. (no-undef)\n54:7 - Unexpected console statement. (no-console)\n55:7 - Unexpected console statement. (no-console)\n57:9 - Unexpected console statement. (no-console)\n60:9 - Unexpected console statement. (no-console)\n64:7 - Unexpected console statement. (no-console)\n99:22 - Empty block statement. (no-empty)\n102:22 - Empty block statement. (no-empty)\n152:36 - \'response\' is defined but never used. (no-unused-vars)\n162:20 - Empty block statement. (no-empty)\n165:20 - Empty block statement. (no-empty)\n170:21 - \'option\' is defined but never used. (no-unused-vars)\n175:7 - \'Ember\' is not defined. (no-undef)\n175:7 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n180:28 - \'response\' is defined but never used. (no-unused-vars)\n197:11 - Move function declaration to function body root. (no-inner-declarations)\n200:27 - \'e\' is defined but never used. (no-unused-vars)\n207:46 - \'e\' is defined but never used. (no-unused-vars)\n226:9 - Unexpected console statement. (no-console)\n236:9 - Unexpected console statement. (no-console)\n244:26 - \'Camera\' is not defined. (no-undef)\n254:25 - \'e\' is defined but never used. (no-unused-vars)\n261:44 - \'e\' is defined but never used. (no-unused-vars)\n298:25 - \'e\' is defined but never used. (no-unused-vars)\n305:44 - \'e\' is defined but never used. (no-unused-vars)\n335:11 - \'resultMedias\' is assigned a value but never used. (no-unused-vars)\n343:7 - \'MediaPicker\' is not defined. (no-undef)\n347:9 - Unexpected console statement. (no-console)\n353:23 - \'e\' is defined but never used. (no-unused-vars)\n360:42 - \'e\' is defined but never used. (no-unused-vars)\n375:11 - \'MediaPicker\' is not defined. (no-undef)\n389:13 - Unexpected console statement. (no-console)\n411:9 - \'mime\' is assigned a value but never used. (no-unused-vars)\n412:9 - \'filename\' is assigned a value but never used. (no-unused-vars)\n418:13 - \'bstr\' is already defined. (no-redeclare)\n420:11 - \'n\' is assigned a value but never used. (no-unused-vars)\n430:11 - \'dataURI\' is assigned a value but never used. (no-unused-vars)\n434:11 - \'dataURI\' is already defined. (no-redeclare)\n435:11 - \'file\' is already defined. (no-redeclare)\n442:5 - Unexpected console statement. (no-console)\n446:11 - \'checkFile\' is assigned a value but never used. (no-unused-vars)\n455:15 - \'filename\' is already defined. (no-redeclare)\n480:7 - Unexpected console statement. (no-console)\n483:9 - Unexpected console statement. (no-console)\n487:7 - Unexpected console statement. (no-console)\n488:7 - Unexpected console statement. (no-console)\n490:35 - \'e\' is defined but never used. (no-unused-vars)\n492:7 - Unexpected console statement. (no-console)\n497:7 - Unexpected console statement. (no-console)\n504:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/discuss/create-social.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/discuss/create-social.js should pass ESLint\n\n7:3 - \'and\' is defined but never used. (no-unused-vars)\n12:7 - \'host\' is already defined. (no-redeclare)\n13:7 - \'pilboxHost\' is assigned a value but never used. (no-unused-vars)\n17:12 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n17:12 - \'Ember\' is not defined. (no-undef)\n18:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n18:9 - \'Ember\' is not defined. (no-undef)\n19:16 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n19:16 - \'Ember\' is not defined. (no-undef)\n20:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n20:11 - \'Ember\' is not defined. (no-undef)\n23:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n24:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n26:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n27:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n28:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n35:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n35:15 - \'Ember\' is not defined. (no-undef)\n36:5 - Unexpected console statement. (no-console)\n39:15 - \'Ember\' is not defined. (no-undef)\n39:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n42:19 - \'Ember\' is not defined. (no-undef)\n42:19 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n43:5 - Unexpected console statement. (no-console)\n46:23 - \'Ember\' is not defined. (no-undef)\n46:23 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n49:11 - Use import { observer } from \'@ember/object\'; instead of using Ember.observer (ember/new-module-imports)\n49:11 - \'Ember\' is not defined. (no-undef)\n50:5 - Unexpected console statement. (no-console)\n56:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n56:14 - \'Ember\' is not defined. (no-undef)\n58:7 - Unexpected console statement. (no-console)\n59:7 - Unexpected console statement. (no-console)\n61:9 - Unexpected console statement. (no-console)\n64:9 - Unexpected console statement. (no-console)\n68:7 - Unexpected console statement. (no-console)\n105:22 - Empty block statement. (no-empty)\n108:22 - Empty block statement. (no-empty)\n150:35 - \'response\' is defined but never used. (no-unused-vars)\n160:20 - Empty block statement. (no-empty)\n163:20 - Empty block statement. (no-empty)\n168:21 - \'option\' is defined but never used. (no-unused-vars)\n173:7 - \'Ember\' is not defined. (no-undef)\n173:7 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n178:27 - \'response\' is defined but never used. (no-unused-vars)\n196:13 - Move function declaration to function body root. (no-inner-declarations)\n199:29 - \'e\' is defined but never used. (no-unused-vars)\n206:47 - \'e\' is defined but never used. (no-unused-vars)\n227:11 - Unexpected console statement. (no-console)\n238:9 - Unexpected console statement. (no-console)\n247:26 - \'Camera\' is not defined. (no-undef)\n257:25 - \'e\' is defined but never used. (no-unused-vars)\n264:43 - \'e\' is defined but never used. (no-unused-vars)\n301:25 - \'e\' is defined but never used. (no-unused-vars)\n308:43 - \'e\' is defined but never used. (no-unused-vars)\n340:11 - \'resultMedias\' is assigned a value but never used. (no-unused-vars)\n348:7 - \'MediaPicker\' is not defined. (no-undef)\n352:9 - Unexpected console statement. (no-console)\n358:23 - \'e\' is defined but never used. (no-unused-vars)\n365:41 - \'e\' is defined but never used. (no-unused-vars)\n380:11 - \'MediaPicker\' is not defined. (no-undef)\n394:13 - Unexpected console statement. (no-console)\n416:9 - \'mime\' is assigned a value but never used. (no-unused-vars)\n417:9 - \'filename\' is assigned a value but never used. (no-unused-vars)\n423:13 - \'bstr\' is already defined. (no-redeclare)\n425:11 - \'n\' is assigned a value but never used. (no-unused-vars)\n437:11 - \'dataURI\' is assigned a value but never used. (no-unused-vars)\n441:11 - \'dataURI\' is already defined. (no-redeclare)\n442:11 - \'file\' is already defined. (no-redeclare)\n451:5 - Unexpected console statement. (no-console)\n455:11 - \'checkFile\' is assigned a value but never used. (no-unused-vars)\n465:17 - \'filename\' is already defined. (no-redeclare)\n493:7 - Unexpected console statement. (no-console)\n496:9 - Unexpected console statement. (no-console)\n500:7 - Unexpected console statement. (no-console)\n501:7 - Unexpected console statement. (no-console)\n503:34 - \'e\' is defined but never used. (no-unused-vars)\n505:7 - Unexpected console statement. (no-console)\n510:7 - Unexpected console statement. (no-console)\n517:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/discuss/edit-social.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/discuss/edit-social.js should pass ESLint\n\n8:7 - \'host\' is already defined. (no-redeclare)\n9:7 - \'pilboxHost\' is assigned a value but never used. (no-unused-vars)\n12:14 - \'Ember\' is not defined. (no-undef)\n12:14 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n13:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n13:11 - \'Ember\' is not defined. (no-undef)\n14:13 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n14:13 - \'Ember\' is not defined. (no-undef)\n15:18 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n15:18 - \'Ember\' is not defined. (no-undef)\n17:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n19:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n20:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n21:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n23:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n24:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n30:17 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n30:17 - \'Ember\' is not defined. (no-undef)\n33:23 - \'Ember\' is not defined. (no-undef)\n33:23 - Use import { on } from \'@ember/object/evented\'; instead of using Ember.on (ember/new-module-imports)\n33:40 - \'Ember\' is not defined. (no-undef)\n33:40 - Use import { observer } from \'@ember/object\'; instead of using Ember.observer (ember/new-module-imports)\n41:93 - \'post\' is defined but never used. (no-unused-vars)\n47:15 - \'Ember\' is not defined. (no-undef)\n47:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n51:21 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n51:21 - \'Ember\' is not defined. (no-undef)\n54:25 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n54:25 - \'Ember\' is not defined. (no-undef)\n71:22 - Empty block statement. (no-empty)\n74:22 - Empty block statement. (no-empty)\n89:23 - \'option\' is defined but never used. (no-unused-vars)\n148:11 - Unexpected console statement. (no-console)\n152:11 - Unexpected console statement. (no-console)\n157:28 - \'Camera\' is not defined. (no-undef)\n167:27 - \'e\' is defined but never used. (no-unused-vars)\n174:45 - \'e\' is defined but never used. (no-unused-vars)\n208:27 - \'e\' is defined but never used. (no-unused-vars)\n215:45 - \'e\' is defined but never used. (no-unused-vars)\n245:13 - \'resultMedias\' is assigned a value but never used. (no-unused-vars)\n246:9 - Unexpected console statement. (no-console)\n253:9 - \'MediaPicker\' is not defined. (no-undef)\n257:11 - Unexpected console statement. (no-console)\n263:25 - \'e\' is defined but never used. (no-unused-vars)\n270:43 - \'e\' is defined but never used. (no-unused-vars)\n285:13 - \'MediaPicker\' is not defined. (no-undef)\n299:15 - Unexpected console statement. (no-console)\n320:11 - \'mime\' is assigned a value but never used. (no-unused-vars)\n321:11 - \'filename\' is assigned a value but never used. (no-unused-vars)\n326:15 - \'bstr\' is already defined. (no-redeclare)\n328:15 - \'bstr\' is already defined. (no-redeclare)\n330:13 - \'n\' is assigned a value but never used. (no-unused-vars)\n342:13 - \'dataURI\' is assigned a value but never used. (no-unused-vars)\n346:13 - \'dataURI\' is already defined. (no-redeclare)\n347:13 - \'file\' is already defined. (no-redeclare)\n357:7 - Unexpected console statement. (no-console)\n361:13 - \'checkFile\' is assigned a value but never used. (no-unused-vars)\n371:19 - \'filename\' is already defined. (no-redeclare)\n399:9 - Unexpected console statement. (no-console)\n402:11 - Unexpected console statement. (no-console)\n406:9 - Unexpected console statement. (no-console)\n407:9 - Unexpected console statement. (no-console)\n409:36 - \'e\' is defined but never used. (no-unused-vars)\n411:9 - Unexpected console statement. (no-console)\n416:9 - Unexpected console statement. (no-console)\n423:11 - Unexpected console statement. (no-console)\n431:24 - \'option\' is defined but never used. (no-unused-vars)\n435:11 - \'that\' is assigned a value but never used. (no-unused-vars)\n436:7 - \'Ember\' is not defined. (no-undef)\n436:7 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n441:28 - \'response\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/discuss/group-page.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/discuss/group-page.js should pass ESLint\n\n4:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:11 - \'Ember\' is not defined. (no-undef)\n5:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n5:16 - \'Ember\' is not defined. (no-undef)\n11:7 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/discuss/share-social.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/discuss/share-social.js should pass ESLint\n\n6:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n6:9 - \'Ember\' is not defined. (no-undef)\n7:10 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n7:10 - \'Ember\' is not defined. (no-undef)\n20:19 - \'data\' is already defined. (no-redeclare)\n54:11 - Unexpected console statement. (no-console)\n56:31 - \'news\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/entertainment/create-live.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/entertainment/create-live.js should pass ESLint\n\n4:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:11 - \'Ember\' is not defined. (no-undef)\n5:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n5:16 - \'Ember\' is not defined. (no-undef)\n6:5 - Unexpected console statement. (no-console)\n16:9 - Unexpected console statement. (no-console)\n17:9 - \'videoStreamer\' is not defined. (no-undef)\n19:17 - \'videoStreamer\' is not defined. (no-undef)\n19:63 - \'resCom\' is defined but never used. (no-unused-vars)\n21:30 - \'e\' is defined but never used. (no-unused-vars)\n25:22 - \'e\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/entertainment/home.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/entertainment/home.js should pass ESLint\n\n3:9 - \'Ember\' is not defined. (no-undef)\n3:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n5:11 - \'Ember\' is not defined. (no-undef)\n5:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n8:15 - \'Ember\' is not defined. (no-undef)\n8:15 - Use import { sort } from \'@ember/object/computed\'; instead of using Ember.computed.sort (ember/new-module-imports)\n9:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n9:14 - \'Ember\' is not defined. (no-undef)\n11:5 - Unexpected console statement. (no-console)\n14:17 - Use import { sort } from \'@ember/object/computed\'; instead of using Ember.computed.sort (ember/new-module-imports)\n14:17 - \'Ember\' is not defined. (no-undef)\n15:20 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n15:20 - \'Ember\' is not defined. (no-undef)\n16:5 - Unexpected console statement. (no-console)\n19:14 - \'Ember\' is not defined. (no-undef)\n19:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n22:90 - \'post\' is defined but never used. (no-unused-vars)\n24:7 - Unexpected console statement. (no-console)\n25:7 - Unexpected console statement. (no-console)\n28:16 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n30:16 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n35:22 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n35:22 - \'Ember\' is not defined. (no-undef)\n41:7 - Unexpected console statement. (no-console)\n59:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/entertainment/live-detail.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/entertainment/live-detail.js should pass ESLint\n\n4:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:9 - \'Ember\' is not defined. (no-undef)\n9:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n9:15 - \'Ember\' is not defined. (no-undef)\n12:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n12:16 - \'Ember\' is not defined. (no-undef)\n18:25 - \'response\' is defined but never used. (no-unused-vars)\n51:11 - \'userid\' is assigned a value but never used. (no-unused-vars)\n56:11 - Unexpected console statement. (no-console)\n68:33 - \'success\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/home.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/home.js should pass ESLint\n\n4:3 - \'$\' is assigned a value but never used. (no-unused-vars)\n4:3 - Use import $ from \'jquery\'; instead of using Ember destructuring (ember/new-module-imports)\n5:3 - Use import { get } from \'@ember/object\'; instead of using Ember destructuring (ember/new-module-imports)\n5:3 - \'get\' is assigned a value but never used. (no-unused-vars)\n6:3 - Use import { set } from \'@ember/object\'; instead of using Ember destructuring (ember/new-module-imports)\n6:3 - \'set\' is assigned a value but never used. (no-unused-vars)\n13:7 - \'host\' is already defined. (no-redeclare)\n14:7 - \'pilboxHost\' is already defined. (no-redeclare)\n18:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n28:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n33:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n34:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n35:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n37:17 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n40:20 - Use import { sort } from \'@ember/object/computed\'; instead of using Ember.computed.sort (ember/new-module-imports)\n41:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n59:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n62:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n63:16 - Use import { sort } from \'@ember/object/computed\'; instead of using Ember.computed.sort (ember/new-module-imports)\n64:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n72:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n75:5 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n78:19 - Use import { sort } from \'@ember/object/computed\'; instead of using Ember.computed.sort (ember/new-module-imports)\n79:17 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n83:9 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n137:7 - Unexpected console statement. (no-console)\n138:7 - Unexpected console statement. (no-console)\n173:7 - Unexpected console statement. (no-console)\n174:7 - Unexpected console statement. (no-console)\n177:9 - Unexpected console statement. (no-console)\n178:13 - \'limit\' is assigned a value but never used. (no-unused-vars)\n191:13 - \'crsnew\' is already defined. (no-redeclare)\n192:9 - Unexpected console statement. (no-console)\n193:13 - \'limit\' is already defined. (no-redeclare)\n194:13 - \'param\' is already defined. (no-redeclare)');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/index.js should pass ESLint\n\n2:10 - \'empty\' is defined but never used. (no-unused-vars)\n5:11 - \'Ember\' is not defined. (no-undef)\n5:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n7:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n8:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n9:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n10:15 - \'Ember\' is not defined. (no-undef)\n10:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n11:5 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n12:5 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n13:5 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n16:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n16:15 - \'Ember\' is not defined. (no-undef)\n19:17 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n19:17 - \'Ember\' is not defined. (no-undef)\n22:13 - \'Ember\' is not defined. (no-undef)\n22:13 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n63:7 - Unexpected console statement. (no-console)\n65:9 - Unexpected console statement. (no-console)\n69:65 - Empty block statement. (no-empty)');
  });

  QUnit.test('controllers/login.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/login.js should pass ESLint\n\n4:3 - \'isEmpty\' is defined but never used. (no-unused-vars)\n9:7 - \'host\' is already defined. (no-redeclare)\n14:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n14:9 - \'Ember\' is not defined. (no-undef)\n15:12 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n15:12 - \'Ember\' is not defined. (no-undef)\n16:10 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n16:10 - \'Ember\' is not defined. (no-undef)\n17:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n25:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n30:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n30:15 - \'Ember\' is not defined. (no-undef)\n45:12 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n45:12 - \'Ember\' is not defined. (no-undef)\n46:5 - Unexpected console statement. (no-console)\n49:15 - \'Ember\' is not defined. (no-undef)\n49:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n96:15 - Unexpected console statement. (no-console)\n105:34 - \'e\' is defined but never used. (no-unused-vars)\n181:7 - \'FacebookAccountKit\' is not defined. (no-undef)\n182:9 - Unexpected console statement. (no-console)\n187:9 - Unexpected console statement. (no-console)\n188:9 - Unexpected console statement. (no-console)\n190:9 - \'Ember\' is not defined. (no-undef)\n190:9 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n196:15 - Unexpected console statement. (no-console)\n198:15 - Unexpected console statement. (no-console)\n207:17 - Unexpected console statement. (no-console)\n217:9 - Unexpected console statement. (no-console)\n230:9 - Unexpected console statement. (no-console)\n235:9 - Unexpected console statement. (no-console)\n237:9 - Unexpected console statement. (no-console)\n238:13 - \'photoImg\' is already defined. (no-redeclare)\n239:9 - Unexpected console statement. (no-console)\n241:7 - Unexpected console statement. (no-console)\n265:9 - Unexpected console statement. (no-console)\n272:21 - \'option\' is defined but never used. (no-unused-vars)\n277:7 - \'Ember\' is not defined. (no-undef)\n277:7 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n282:27 - \'response\' is defined but never used. (no-unused-vars)\n298:5 - Unexpected console statement. (no-console)\n302:44 - \'reject\' is defined but never used. (no-unused-vars)\n311:9 - Unexpected console statement. (no-console)\n312:9 - Unexpected console statement. (no-console)\n351:40 - \'check\' is defined but never used. (no-unused-vars)\n362:7 - Unexpected console statement. (no-console)\n365:9 - Unexpected console statement. (no-console)\n369:7 - Unexpected console statement. (no-console)\n370:7 - Unexpected console statement. (no-console)\n372:34 - \'e\' is defined but never used. (no-unused-vars)\n373:7 - Unexpected console statement. (no-console)\n387:9 - Unexpected console statement. (no-console)\n392:9 - Unexpected console statement. (no-console)\n416:5 - Unexpected console statement. (no-console)\n437:7 - \'FCMPlugin\' is not defined. (no-undef)\n439:11 - Unexpected console statement. (no-console)\n441:13 - Unexpected console statement. (no-console)\n444:13 - Unexpected console statement. (no-console)\n445:13 - \'Ember\' is not defined. (no-undef)\n445:13 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n455:17 - Unexpected console statement. (no-console)\n458:13 - Unexpected console statement. (no-console)\n462:11 - Unexpected console statement. (no-console)\n485:9 - \'n\' is assigned a value but never used. (no-unused-vars)\n498:5 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n498:5 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('controllers/news-detail.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/news-detail.js should pass ESLint\n\n7:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n13:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n14:15 - Use import { observer } from \'@ember/object\'; instead of using Ember.observer (ember/new-module-imports)\n14:15 - \'Ember\' is not defined. (no-undef)\n20:10 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n20:10 - \'Ember\' is not defined. (no-undef)\n21:18 - Use import { A } from \'@ember/array\'; instead of using Ember.A (ember/new-module-imports)\n21:18 - \'Ember\' is not defined. (no-undef)\n25:5 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n26:5 - Unexpected console statement. (no-console)\n27:5 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n43:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n43:14 - \'Ember\' is not defined. (no-undef)\n51:9 - \'adsModel\' is already defined. (no-redeclare)\n58:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n59:7 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n64:9 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)');
  });

  QUnit.test('controllers/news/category.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/news/category.js should pass ESLint\n\n4:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:11 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('controllers/news/create-crs.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/news/create-crs.js should pass ESLint\n\n5:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:9 - \'Ember\' is not defined. (no-undef)\n6:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n6:14 - \'Ember\' is not defined. (no-undef)\n9:12 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n9:12 - \'Ember\' is not defined. (no-undef)\n17:11 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n17:11 - \'Ember\' is not defined. (no-undef)\n41:27 - \'response\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/news/create-share.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/news/create-share.js should pass ESLint\n\n5:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:11 - \'Ember\' is not defined. (no-undef)\n6:12 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n6:12 - \'Ember\' is not defined. (no-undef)\n19:21 - \'data\' is already defined. (no-redeclare)\n49:13 - Unexpected console statement. (no-console)\n51:33 - \'news\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/news/international-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/news/international-list.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/news/local-list-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/news/local-list-card.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/news/private-list-card.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/news/private-list-card.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/news/random-news-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/news/random-news-list.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/news/search-category.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/news/search-category.js should pass ESLint\n\n4:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:11 - \'Ember\' is not defined. (no-undef)\n7:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n8:16 - Use import { sort } from \'@ember/object/computed\'; instead of using Ember.computed.sort (ember/new-module-imports)\n8:16 - \'Ember\' is not defined. (no-undef)\n9:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n9:14 - \'Ember\' is not defined. (no-undef)\n27:5 - \'$\' is not defined. (no-undef)\n27:5 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n47:17 - \'limit\' is already defined. (no-redeclare)\n50:19 - \'param\' is already defined. (no-redeclare)');
  });

  QUnit.test('controllers/notification.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/notification.js should pass ESLint\n\n4:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n5:15 - Use import { sort } from \'@ember/object/computed\'; instead of using Ember.computed.sort (ember/new-module-imports)\n5:15 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('controllers/social-search.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/social-search.js should pass ESLint\n\n4:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n5:18 - Use import { sort } from \'@ember/object/computed\'; instead of using Ember.computed.sort (ember/new-module-imports)\n5:18 - \'Ember\' is not defined. (no-undef)\n6:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n6:16 - \'Ember\' is not defined. (no-undef)\n14:13 - Unexpected console statement. (no-console)\n19:13 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/social.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/social.js should pass ESLint\n\n3:3 - \'observer\' is defined but never used. (no-unused-vars)\n9:7 - \'host\' is already defined. (no-redeclare)\n12:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n12:9 - \'Ember\' is not defined. (no-undef)\n13:11 - \'Ember\' is not defined. (no-undef)\n13:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n15:3 - Duplicate key \'auth\'. (no-dupe-keys)\n15:9 - \'Ember\' is not defined. (no-undef)\n15:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n18:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n19:16 - \'Ember\' is not defined. (no-undef)\n19:16 - Use import { sort } from \'@ember/object/computed\'; instead of using Ember.computed.sort (ember/new-module-imports)\n21:14 - \'Ember\' is not defined. (no-undef)\n21:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n24:14 - \'Ember\' is not defined. (no-undef)\n24:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n27:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n27:15 - \'Ember\' is not defined. (no-undef)\n30:11 - \'Ember\' is not defined. (no-undef)\n30:11 - Use import { observer } from \'@ember/object\'; instead of using Ember.observer (ember/new-module-imports)\n33:5 - \'Ember\' is not defined. (no-undef)\n33:5 - Use import { later } from \'@ember/runloop\'; instead of using Ember.run.later (ember/new-module-imports)\n56:10 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n56:10 - \'$\' is not defined. (no-undef)\n57:10 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n57:10 - \'$\' is not defined. (no-undef)\n71:7 - Unexpected console statement. (no-console)\n87:7 - Unexpected console statement. (no-console)\n90:11 - \'limit\' is assigned a value but never used. (no-unused-vars)\n104:7 - Unexpected console statement. (no-console)\n109:7 - Unexpected console statement. (no-console)\n114:19 - \'option\' is defined but never used. (no-unused-vars)\n118:9 - \'that\' is assigned a value but never used. (no-unused-vars)\n119:5 - \'Ember\' is not defined. (no-undef)\n119:5 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n124:26 - \'response\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/startup.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/startup.js should pass ESLint\n\n4:9 - \'Ember\' is not defined. (no-undef)\n4:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:11 - \'Ember\' is not defined. (no-undef)\n5:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n6:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n6:14 - \'Ember\' is not defined. (no-undef)\n9:11 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n9:11 - \'Ember\' is not defined. (no-undef)\n12:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n13:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n14:14 - Use import { sort } from \'@ember/object/computed\'; instead of using Ember.computed.sort (ember/new-module-imports)\n14:14 - \'Ember\' is not defined. (no-undef)\n15:14 - \'Ember\' is not defined. (no-undef)\n15:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n16:5 - Unexpected console statement. (no-console)\n25:19 - Use import { observer } from \'@ember/object\'; instead of using Ember.observer (ember/new-module-imports)\n25:19 - \'Ember\' is not defined. (no-undef)\n28:15 - \'Ember\' is not defined. (no-undef)\n28:15 - Use import { sort } from \'@ember/object/computed\'; instead of using Ember.computed.sort (ember/new-module-imports)\n29:10 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n29:10 - \'Ember\' is not defined. (no-undef)\n32:11 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n32:11 - \'Ember\' is not defined. (no-undef)\n35:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n37:13 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n37:13 - \'Ember\' is not defined. (no-undef)\n96:13 - \'data\' is already defined. (no-redeclare)\n102:13 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n102:13 - \'$\' is not defined. (no-undef)\n103:11 - \'$\' is not defined. (no-undef)\n103:11 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n106:11 - \'$\' is not defined. (no-undef)\n106:11 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n108:11 - \'$\' is not defined. (no-undef)\n108:11 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n111:11 - \'$\' is not defined. (no-undef)\n111:11 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n114:7 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/tabs/entertainment.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/tabs/entertainment.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/user/chat-list.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/user/chat-list.js should pass ESLint\n\n4:9 - \'Ember\' is not defined. (no-undef)\n4:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:11 - \'Ember\' is not defined. (no-undef)\n6:11 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n6:11 - \'Ember\' is not defined. (no-undef)\n7:5 - Unexpected console statement. (no-console)\n10:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n10:14 - \'Ember\' is not defined. (no-undef)\n13:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n14:16 - Use import { sort } from \'@ember/object/computed\'; instead of using Ember.computed.sort (ember/new-module-imports)\n14:16 - \'Ember\' is not defined. (no-undef)\n15:13 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n15:13 - \'Ember\' is not defined. (no-undef)\n18:16 - Use import { sort } from \'@ember/object/computed\'; instead of using Ember.computed.sort (ember/new-module-imports)\n18:16 - \'Ember\' is not defined. (no-undef)\n19:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n19:14 - \'Ember\' is not defined. (no-undef)\n31:7 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/user/chat.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/user/chat.js should pass ESLint\n\n4:11 - \'Ember\' is not defined. (no-undef)\n4:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:16 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:16 - \'Ember\' is not defined. (no-undef)\n6:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n6:9 - \'Ember\' is not defined. (no-undef)\n10:17 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n10:17 - \'Ember\' is not defined. (no-undef)\n23:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n23:14 - \'Ember\' is not defined. (no-undef)\n43:24 - \'chat\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/user/chatting.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/user/chatting.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/user/create-group.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/user/create-group.js should pass ESLint\n\n4:9 - \'and\' is defined but never used. (no-unused-vars)\n8:7 - \'host\' is already defined. (no-redeclare)\n9:7 - \'pilboxHost\' is assigned a value but never used. (no-unused-vars)\n13:12 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n13:12 - \'Ember\' is not defined. (no-undef)\n14:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n14:9 - \'Ember\' is not defined. (no-undef)\n15:16 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n15:16 - \'Ember\' is not defined. (no-undef)\n16:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n16:11 - \'Ember\' is not defined. (no-undef)\n19:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n20:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n22:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n23:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n24:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n31:15 - \'Ember\' is not defined. (no-undef)\n31:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n32:5 - Unexpected console statement. (no-console)\n35:15 - \'Ember\' is not defined. (no-undef)\n35:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n38:19 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n38:19 - \'Ember\' is not defined. (no-undef)\n39:5 - Unexpected console statement. (no-console)\n42:23 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n42:23 - \'Ember\' is not defined. (no-undef)\n45:11 - \'Ember\' is not defined. (no-undef)\n45:11 - Use import { observer } from \'@ember/object\'; instead of using Ember.observer (ember/new-module-imports)\n46:5 - Unexpected console statement. (no-console)\n52:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n52:14 - \'Ember\' is not defined. (no-undef)\n54:7 - Unexpected console statement. (no-console)\n55:7 - Unexpected console statement. (no-console)\n57:9 - Unexpected console statement. (no-console)\n60:9 - Unexpected console statement. (no-console)\n64:7 - Unexpected console statement. (no-console)\n99:22 - Empty block statement. (no-empty)\n102:22 - Empty block statement. (no-empty)\n141:20 - Empty block statement. (no-empty)\n144:20 - Empty block statement. (no-empty)\n149:21 - \'option\' is defined but never used. (no-unused-vars)\n154:7 - \'Ember\' is not defined. (no-undef)\n154:7 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n159:28 - \'response\' is defined but never used. (no-unused-vars)\n176:11 - Move function declaration to function body root. (no-inner-declarations)\n179:27 - \'e\' is defined but never used. (no-unused-vars)\n186:46 - \'e\' is defined but never used. (no-unused-vars)\n205:9 - Unexpected console statement. (no-console)\n215:9 - Unexpected console statement. (no-console)\n223:26 - \'Camera\' is not defined. (no-undef)\n233:25 - \'e\' is defined but never used. (no-unused-vars)\n240:44 - \'e\' is defined but never used. (no-unused-vars)\n277:25 - \'e\' is defined but never used. (no-unused-vars)\n284:44 - \'e\' is defined but never used. (no-unused-vars)\n314:11 - \'resultMedias\' is assigned a value but never used. (no-unused-vars)\n322:7 - \'MediaPicker\' is not defined. (no-undef)\n326:9 - Unexpected console statement. (no-console)\n332:23 - \'e\' is defined but never used. (no-unused-vars)\n339:42 - \'e\' is defined but never used. (no-unused-vars)\n354:11 - \'MediaPicker\' is not defined. (no-undef)\n368:13 - Unexpected console statement. (no-console)\n390:9 - \'mime\' is assigned a value but never used. (no-unused-vars)\n391:9 - \'filename\' is assigned a value but never used. (no-unused-vars)\n397:13 - \'bstr\' is already defined. (no-redeclare)\n399:11 - \'n\' is assigned a value but never used. (no-unused-vars)\n409:11 - \'dataURI\' is assigned a value but never used. (no-unused-vars)\n413:11 - \'dataURI\' is already defined. (no-redeclare)\n414:11 - \'file\' is already defined. (no-redeclare)\n421:5 - Unexpected console statement. (no-console)\n425:11 - \'checkFile\' is assigned a value but never used. (no-unused-vars)\n434:15 - \'filename\' is already defined. (no-redeclare)\n459:7 - Unexpected console statement. (no-console)\n462:9 - Unexpected console statement. (no-console)\n466:7 - Unexpected console statement. (no-console)\n467:7 - Unexpected console statement. (no-console)\n469:35 - \'e\' is defined but never used. (no-unused-vars)\n471:7 - Unexpected console statement. (no-console)\n476:7 - Unexpected console statement. (no-console)\n483:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/user/find-friends.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/user/find-friends.js should pass ESLint\n\n5:11 - \'Ember\' is not defined. (no-undef)\n5:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n6:13 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n6:13 - \'Ember\' is not defined. (no-undef)\n7:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n8:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n8:16 - \'Ember\' is not defined. (no-undef)\n11:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n12:16 - \'Ember\' is not defined. (no-undef)\n12:16 - Use import { sort } from \'@ember/object/computed\'; instead of using Ember.computed.sort (ember/new-module-imports)\n13:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n13:16 - \'Ember\' is not defined. (no-undef)\n14:12 - Unexpected console statement. (no-console)\n24:21 - \'Ember\' is not defined. (no-undef)\n24:21 - Use import { observer } from \'@ember/object\'; instead of using Ember.observer (ember/new-module-imports)\n27:13 - \'Ember\' is not defined. (no-undef)\n27:13 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n79:21 - \'data\' is already defined. (no-redeclare)\n85:21 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n85:21 - \'$\' is not defined. (no-undef)\n86:21 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n86:21 - \'$\' is not defined. (no-undef)\n89:21 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n89:21 - \'$\' is not defined. (no-undef)\n91:21 - \'$\' is not defined. (no-undef)\n91:21 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n94:21 - \'$\' is not defined. (no-undef)\n94:21 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n97:13 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/user/find-groups.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/user/find-groups.js should pass ESLint\n\n4:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:11 - \'Ember\' is not defined. (no-undef)\n5:13 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:13 - \'Ember\' is not defined. (no-undef)\n6:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n6:16 - \'Ember\' is not defined. (no-undef)\n9:13 - \'Ember\' is not defined. (no-undef)\n9:13 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n12:13 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n12:13 - \'Ember\' is not defined. (no-undef)\n15:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n15:16 - \'Ember\' is not defined. (no-undef)\n18:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n20:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n20:15 - \'Ember\' is not defined. (no-undef)\n76:21 - \'data\' is already defined. (no-redeclare)\n82:21 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n82:21 - \'$\' is not defined. (no-undef)\n83:21 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n83:21 - \'$\' is not defined. (no-undef)\n86:21 - \'$\' is not defined. (no-undef)\n86:21 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n88:21 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n88:21 - \'$\' is not defined. (no-undef)\n91:21 - \'$\' is not defined. (no-undef)\n91:21 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n94:13 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/user/group-chat-detail.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/user/group-chat-detail.js should pass ESLint\n\n4:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:11 - \'Ember\' is not defined. (no-undef)\n5:9 - \'Ember\' is not defined. (no-undef)\n5:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n6:10 - \'Ember\' is not defined. (no-undef)\n6:10 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n10:14 - \'Ember\' is not defined. (no-undef)\n10:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n13:13 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n13:13 - \'Ember\' is not defined. (no-undef)\n14:5 - Unexpected console statement. (no-console)\n17:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n17:16 - \'Ember\' is not defined. (no-undef)\n29:7 - Unexpected console statement. (no-console)\n30:7 - Unexpected console statement. (no-console)\n59:7 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/user/group-chat-list.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/user/group-chat-list.js should pass ESLint\n\n4:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:11 - \'Ember\' is not defined. (no-undef)\n5:13 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:13 - \'Ember\' is not defined. (no-undef)\n6:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n7:18 - Use import { sort } from \'@ember/object/computed\'; instead of using Ember.computed.sort (ember/new-module-imports)\n7:18 - \'Ember\' is not defined. (no-undef)\n8:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n8:16 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('controllers/user/group.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/user/group.js should pass ESLint\n\n4:11 - \'Ember\' is not defined. (no-undef)\n4:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n6:13 - \'Ember\' is not defined. (no-undef)\n6:13 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n15:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n20:13 - \'Ember\' is not defined. (no-undef)\n20:13 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n23:18 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n23:18 - \'Ember\' is not defined. (no-undef)\n26:18 - Use import { observer } from \'@ember/object\'; instead of using Ember.observer (ember/new-module-imports)\n26:18 - \'Ember\' is not defined. (no-undef)\n28:9 - Unexpected console statement. (no-console)\n30:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n30:14 - \'Ember\' is not defined. (no-undef)\n33:17 - \'Ember\' is not defined. (no-undef)\n33:17 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n36:14 - \'Ember\' is not defined. (no-undef)\n36:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n39:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n40:19 - \'Ember\' is not defined. (no-undef)\n40:19 - Use import { sort } from \'@ember/object/computed\'; instead of using Ember.computed.sort (ember/new-module-imports)\n41:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n41:16 - \'Ember\' is not defined. (no-undef)\n44:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n44:16 - \'Ember\' is not defined. (no-undef)\n47:13 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n47:13 - \'Ember\' is not defined. (no-undef)\n50:17 - Unexpected console statement. (no-console)\n54:9 - Unexpected console statement. (no-console)\n77:53 - \'user\' is defined but never used. (no-unused-vars)\n79:94 - \'user\' is defined but never used. (no-unused-vars)\n93:53 - \'user\' is defined but never used. (no-unused-vars)\n95:90 - \'user\' is defined but never used. (no-unused-vars)\n104:13 - Unexpected console statement. (no-console)\n107:17 - \'limit\' is assigned a value but never used. (no-unused-vars)\n160:13 - Unexpected console statement. (no-console)\n167:13 - Unexpected console statement. (no-console)\n181:20 - \'_id\' is defined but never used. (no-unused-vars)\n189:110 - \'user\' is defined but never used. (no-unused-vars)\n200:107 - \'user\' is defined but never used. (no-unused-vars)\n213:35 - \'item\' is defined but never used. (no-unused-vars)\n214:13 - Unexpected console statement. (no-console)\n217:13 - Unexpected console statement. (no-console)\n253:13 - Unexpected console statement. (no-console)\n279:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/user/groupchat.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/user/groupchat.js should pass ESLint\n\n2:10 - \'filter\' is defined but never used. (no-unused-vars)\n3:10 - \'computed\' is defined but never used. (no-unused-vars)\n8:7 - \'host\' is already defined. (no-redeclare)\n11:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n11:9 - \'Ember\' is not defined. (no-undef)\n12:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n12:11 - \'Ember\' is not defined. (no-undef)\n13:13 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n13:13 - \'Ember\' is not defined. (no-undef)\n14:11 - \'current_id\' is assigned a value but never used. (no-unused-vars)\n16:11 - \'follow\' is assigned a value but never used. (no-unused-vars)\n25:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n26:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n27:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n28:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n29:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n34:9 - Unexpected console statement. (no-console)\n44:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n45:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n47:20 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n47:20 - \'Ember\' is not defined. (no-undef)\n53:14 - \'Ember\' is not defined. (no-undef)\n53:14 - Use import { observer } from \'@ember/object\'; instead of using Ember.observer (ember/new-module-imports)\n63:7 - Unexpected console statement. (no-console)\n114:11 - Unexpected console statement. (no-console)\n127:7 - Unexpected console statement. (no-console)\n130:5 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/user/profile-info.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/user/profile-info.js should pass ESLint\n\n4:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:9 - \'Ember\' is not defined. (no-undef)\n10:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n10:16 - \'Ember\' is not defined. (no-undef)\n29:12 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/user/profile.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/user/profile.js should pass ESLint\n\n6:7 - \'host\' is already defined. (no-redeclare)\n9:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n9:11 - \'Ember\' is not defined. (no-undef)\n10:13 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n10:13 - \'Ember\' is not defined. (no-undef)\n11:18 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n11:18 - \'Ember\' is not defined. (no-undef)\n12:17 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n12:17 - \'Ember\' is not defined. (no-undef)\n33:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n35:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n40:12 - \'Ember\' is not defined. (no-undef)\n40:12 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n41:9 - Unexpected console statement. (no-console)\n42:9 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n43:9 - Don\'t introduce side-effects in computed properties (ember/no-side-effects)\n45:13 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n45:13 - \'Ember\' is not defined. (no-undef)\n48:13 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n48:13 - \'Ember\' is not defined. (no-undef)\n51:18 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n51:18 - \'Ember\' is not defined. (no-undef)\n55:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n56:19 - Use import { sort } from \'@ember/object/computed\'; instead of using Ember.computed.sort (ember/new-module-imports)\n56:19 - \'Ember\' is not defined. (no-undef)\n57:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n57:16 - \'Ember\' is not defined. (no-undef)\n61:19 - \'Ember\' is not defined. (no-undef)\n61:19 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n65:20 - \'Ember\' is not defined. (no-undef)\n65:20 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n68:16 - \'Ember\' is not defined. (no-undef)\n68:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n71:16 - \'Ember\' is not defined. (no-undef)\n71:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n74:13 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n74:13 - \'Ember\' is not defined. (no-undef)\n77:16 - \'Ember\' is not defined. (no-undef)\n77:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n80:13 - \'Ember\' is not defined. (no-undef)\n80:13 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n83:17 - Unexpected console statement. (no-console)\n87:5 - Unexpected console statement. (no-console)\n90:13 - \'Ember\' is not defined. (no-undef)\n90:13 - Use import { observer } from \'@ember/object\'; instead of using Ember.observer (ember/new-module-imports)\n94:13 - Unexpected console statement. (no-console)\n104:17 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n104:17 - \'Ember\' is not defined. (no-undef)\n105:7 - Unexpected console statement. (no-console)\n119:17 - Unexpected console statement. (no-console)\n124:13 - Unexpected console statement. (no-console)\n127:17 - \'limit\' is assigned a value but never used. (no-unused-vars)\n140:13 - Unexpected console statement. (no-console)\n143:17 - \'limitgroup\' is assigned a value but never used. (no-unused-vars)\n164:17 - \'img\' is assigned a value but never used. (no-unused-vars)\n170:17 - \'span\' is assigned a value but never used. (no-unused-vars)\n175:13 - Unexpected console statement. (no-console)\n185:13 - Unexpected console statement. (no-console)\n226:106 - \'user\' is defined but never used. (no-unused-vars)\n257:111 - \'user\' is defined but never used. (no-unused-vars)\n299:14 - Unexpected console statement. (no-console)\n313:17 - \'enduser\' is assigned a value but never used. (no-unused-vars)\n330:103 - \'user\' is defined but never used. (no-unused-vars)\n335:121 - \'user\' is defined but never used. (no-unused-vars)\n352:13 - Unexpected console statement. (no-console)\n355:13 - Unexpected console statement. (no-console)\n390:11 - Unexpected console statement. (no-console)\n392:9 - Duplicate key \'deleteSocial\'. (no-dupe-keys)\n400:9 - Duplicate key \'editSocial\'. (no-dupe-keys)\n404:21 - \'option\' is defined but never used. (no-unused-vars)\n408:11 - \'that\' is assigned a value but never used. (no-unused-vars)\n409:7 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n409:7 - \'Ember\' is not defined. (no-undef)\n414:28 - \'response\' is defined but never used. (no-unused-vars)\n441:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/user/user-chat-list.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/user/user-chat-list.js should pass ESLint\n\n4:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:11 - \'Ember\' is not defined. (no-undef)\n5:13 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:13 - \'Ember\' is not defined. (no-undef)\n6:13 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n6:13 - \'Ember\' is not defined. (no-undef)\n7:9 - Unexpected console statement. (no-console)\n10:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n10:16 - \'Ember\' is not defined. (no-undef)\n13:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n14:18 - Use import { sort } from \'@ember/object/computed\'; instead of using Ember.computed.sort (ember/new-module-imports)\n14:18 - \'Ember\' is not defined. (no-undef)\n15:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n15:15 - \'Ember\' is not defined. (no-undef)\n27:13 - Unexpected console statement. (no-console)');
  });

  QUnit.test('helpers/ban-user.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/ban-user.js should pass ESLint\n\n9:13 - Empty block statement. (no-empty)');
  });

  QUnit.test('helpers/change-button.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/change-button.js should pass ESLint\n\n12:13 - \'i\' is already defined. (no-redeclare)\n19:14 - \'i\' is already defined. (no-redeclare)\n27:14 - \'i\' is already defined. (no-redeclare)\n35:14 - \'i\' is already defined. (no-redeclare)');
  });

  QUnit.test('helpers/chatgroup.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/chatgroup.js should pass ESLint\n\n4:3 - Unexpected console statement. (no-console)');
  });

  QUnit.test('helpers/convert-data.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/convert-data.js should pass ESLint\n\n7:7 - \'host\' is already defined. (no-redeclare)\n8:7 - \'pilboxHost\' is already defined. (no-redeclare)\n34:17 - Empty block statement. (no-empty)\n39:11 - \'url\' is already defined. (no-redeclare)\n40:11 - \'data\' is already defined. (no-redeclare)\n50:15 - Empty block statement. (no-empty)\n55:16 - Use import { helper as buildHelper } from \'@ember/component/helper\'; instead of using Ember.Helper.helper (ember/new-module-imports)');
  });

  QUnit.test('helpers/convert-image.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/convert-image.js should pass ESLint\n\n7:7 - \'host\' is assigned a value but never used. (no-unused-vars)\n8:7 - \'pilboxHost\' is assigned a value but never used. (no-unused-vars)\n10:7 - \'host\' is already defined. (no-redeclare)\n11:7 - \'pilboxHost\' is already defined. (no-redeclare)');
  });

  QUnit.test('helpers/convert-img.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/convert-img.js should pass ESLint\n\n9:7 - \'host\' is already defined. (no-redeclare)\n10:7 - \'pilboxHost\' is already defined. (no-redeclare)\n11:7 - \'liveHost\' is already defined. (no-redeclare)\n21:11 - \'url\' is already defined. (no-redeclare)\n25:13 - \'url\' is already defined. (no-redeclare)\n28:13 - \'url\' is already defined. (no-redeclare)\n31:13 - \'url\' is already defined. (no-redeclare)\n35:11 - \'url\' is already defined. (no-redeclare)\n38:13 - Empty block statement. (no-empty)');
  });

  QUnit.test('helpers/convert-time.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/convert-time.js should pass ESLint\n\n4:3 - Unexpected console statement. (no-console)\n5:48 - Unnecessary semicolon. (no-extra-semi)\n5:48 - Unreachable code. (no-unreachable)');
  });

  QUnit.test('helpers/convert-url.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/convert-url.js should pass ESLint\n\n10:7 - \'host\' is already defined. (no-redeclare)\n11:7 - \'pilboxHost\' is already defined. (no-redeclare)\n19:11 - \'url\' is already defined. (no-redeclare)\n23:11 - \'url\' is already defined. (no-redeclare)\n25:11 - \'url\' is already defined. (no-redeclare)\n27:11 - \'url\' is already defined. (no-redeclare)\n29:11 - \'url\' is already defined. (no-redeclare)');
  });

  QUnit.test('helpers/count-user.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/count-user.js should pass ESLint\n\n4:3 - Unexpected console statement. (no-console)\n5:3 - Unexpected console statement. (no-console)');
  });

  QUnit.test('helpers/covert-simple-img.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/covert-simple-img.js should pass ESLint\n\n19:16 - Use import { helper as buildHelper } from \'@ember/component/helper\'; instead of using Ember.Helper.helper (ember/new-module-imports)');
  });

  QUnit.test('helpers/filter-chat.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/filter-chat.js should pass ESLint\n\n17:13 - Empty block statement. (no-empty)');
  });

  QUnit.test('helpers/fullscreen-img.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/fullscreen-img.js should pass ESLint\n\n7:7 - \'host\' is already defined. (no-redeclare)');
  });

  QUnit.test('helpers/null-image.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/null-image.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/process-img.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/process-img.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/random-color.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/random-color.js should pass ESLint\n\n3:29 - \'params\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('helpers/toolbar.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/toolbar.js should pass ESLint\n\n4:3 - Unexpected console statement. (no-console)\n8:7 - Unreachable code. (no-unreachable)\n11:7 - Unreachable code. (no-unreachable)\n14:7 - Unreachable code. (no-unreachable)\n17:7 - Unreachable code. (no-unreachable)\n20:7 - Unreachable code. (no-unreachable)\n23:7 - Unreachable code. (no-unreachable)\n26:7 - Unreachable code. (no-unreachable)\n29:7 - Unreachable code. (no-unreachable)\n32:7 - Unreachable code. (no-unreachable)\n35:7 - Unreachable code. (no-unreachable)\n38:7 - Unreachable code. (no-unreachable)\n41:7 - Unreachable code. (no-unreachable)\n44:7 - Unreachable code. (no-unreachable)\n45:5 - Duplicate case label. (no-duplicate-case)\n47:7 - Unreachable code. (no-unreachable)\n50:7 - Unreachable code. (no-unreachable)');
  });

  QUnit.test('helpers/uploadname.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/uploadname.js should pass ESLint\n\n');
  });

  QUnit.test('initializers/services.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'initializers/services.js should pass ESLint\n\n1:8 - \'ENV\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('models/adsupdate.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/adsupdate.js should pass ESLint\n\n');
  });

  QUnit.test('models/advertise.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/advertise.js should pass ESLint\n\n');
  });

  QUnit.test('models/backuser.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/backuser.js should pass ESLint\n\n21:18 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n21:18 - \'Ember\' is not defined. (no-undef)\n24:19 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n24:19 - \'Ember\' is not defined. (no-undef)\n27:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n27:15 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('models/breaking.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/breaking.js should pass ESLint\n\n17:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n17:14 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('models/category.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/category.js should pass ESLint\n\n7:7 - \'host\' is already defined. (no-redeclare)\n8:7 - \'pilboxHost\' is already defined. (no-redeclare)\n16:9 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n16:9 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('models/celebrity.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/celebrity.js should pass ESLint\n\n');
  });

  QUnit.test('models/channel.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/channel.js should pass ESLint\n\n14:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n14:14 - \'Ember\' is not defined. (no-undef)\n17:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n17:15 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('models/chatlist.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/chatlist.js should pass ESLint\n\n15:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n15:14 - \'Ember\' is not defined. (no-undef)\n18:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n18:15 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('models/crsgroup.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/crsgroup.js should pass ESLint\n\n');
  });

  QUnit.test('models/crsnew.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/crsnew.js should pass ESLint\n\n7:7 - \'host\' is already defined. (no-redeclare)\n8:7 - \'pilboxHost\' is already defined. (no-redeclare)\n32:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n32:14 - \'Ember\' is not defined. (no-undef)\n40:18 - Empty block statement. (no-empty)\n44:12 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n44:12 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('models/discuss.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/discuss.js should pass ESLint\n\n12:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n12:14 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('models/enduser.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/enduser.js should pass ESLint\n\n23:18 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n23:18 - \'Ember\' is not defined. (no-undef)\n26:19 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n26:19 - \'Ember\' is not defined. (no-undef)\n29:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n29:15 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('models/entmainlive.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/entmainlive.js should pass ESLint\n\n4:7 - \'host\' is assigned a value but never used. (no-unused-vars)\n8:7 - \'host\' is already defined. (no-redeclare)\n9:7 - \'pilboxHost\' is already defined. (no-redeclare)\n10:7 - \'liveHost\' is already defined. (no-redeclare)\n25:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n25:14 - \'Ember\' is not defined. (no-undef)\n30:11 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n30:11 - \'Ember\' is not defined. (no-undef)\n34:9 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n34:9 - \'Ember\' is not defined. (no-undef)\n35:5 - Unexpected console statement. (no-console)\n37:5 - Unexpected console statement. (no-console)');
  });

  QUnit.test('models/entstreamlist.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/entstreamlist.js should pass ESLint\n\n4:7 - \'host\' is assigned a value but never used. (no-unused-vars)\n8:7 - \'host\' is already defined. (no-redeclare)\n9:7 - \'pilboxHost\' is already defined. (no-redeclare)\n10:7 - \'liveHost\' is already defined. (no-redeclare)\n25:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n25:14 - \'Ember\' is not defined. (no-undef)\n30:11 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n30:11 - \'Ember\' is not defined. (no-undef)\n34:9 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n34:9 - \'Ember\' is not defined. (no-undef)\n35:5 - Unexpected console statement. (no-console)\n37:5 - Unexpected console statement. (no-console)');
  });

  QUnit.test('models/enttoken.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/enttoken.js should pass ESLint\n\n');
  });

  QUnit.test('models/entvideoupload.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/entvideoupload.js should pass ESLint\n\n6:7 - \'liveHost\' is assigned a value but never used. (no-unused-vars)\n8:7 - \'host\' is already defined. (no-redeclare)\n9:7 - \'pilboxHost\' is already defined. (no-redeclare)\n10:7 - \'liveHost\' is already defined. (no-redeclare)\n19:22 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n19:22 - \'Ember\' is not defined. (no-undef)\n23:13 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n23:13 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('models/groupchat.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/groupchat.js should pass ESLint\n\n17:3 - Duplicate key \'user_url\'. (no-dupe-keys)');
  });

  QUnit.test('models/grouplist.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/grouplist.js should pass ESLint\n\n16:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n16:14 - \'Ember\' is not defined. (no-undef)\n19:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n19:15 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('models/header.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/header.js should pass ESLint\n\n7:7 - \'host\' is already defined. (no-redeclare)\n8:7 - \'pilboxHost\' is already defined. (no-redeclare)\n22:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n22:14 - \'Ember\' is not defined. (no-undef)\n25:15 - Empty block statement. (no-empty)');
  });

  QUnit.test('models/lennew.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/lennew.js should pass ESLint\n\n7:7 - \'host\' is already defined. (no-redeclare)\n8:7 - \'pilboxHost\' is already defined. (no-redeclare)\n32:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n32:14 - \'Ember\' is not defined. (no-undef)\n35:13 - \'target\' is assigned a value but never used. (no-unused-vars)\n35:22 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n35:22 - \'$\' is not defined. (no-undef)\n39:18 - Empty block statement. (no-empty)\n42:12 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n42:12 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('models/livecomment.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/livecomment.js should pass ESLint\n\n');
  });

  QUnit.test('models/message.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/message.js should pass ESLint\n\n12:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n12:16 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('models/notification.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/notification.js should pass ESLint\n\n');
  });

  QUnit.test('models/nowuser.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/nowuser.js should pass ESLint\n\n');
  });

  QUnit.test('models/onechannel.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/onechannel.js should pass ESLint\n\n17:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n17:16 - \'Ember\' is not defined. (no-undef)\n20:17 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n20:17 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('models/onepost.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/onepost.js should pass ESLint\n\n7:7 - \'host\' is already defined. (no-redeclare)\n8:7 - \'pilboxHost\' is already defined. (no-redeclare)\n32:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n32:16 - \'Ember\' is not defined. (no-undef)\n40:22 - Empty block statement. (no-empty)\n44:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n44:14 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('models/onesocial.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/onesocial.js should pass ESLint\n\n8:7 - \'host\' is already defined. (no-redeclare)\n9:7 - \'pilboxHost\' is already defined. (no-redeclare)\n46:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n46:16 - \'Ember\' is not defined. (no-undef)\n49:22 - Empty block statement. (no-empty)\n52:17 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n52:17 - \'Ember\' is not defined. (no-undef)\n55:17 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n55:17 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('models/oneuser.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/oneuser.js should pass ESLint\n\n');
  });

  QUnit.test('models/post.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/post.js should pass ESLint\n\n7:7 - \'host\' is already defined. (no-redeclare)\n8:7 - \'pilboxHost\' is already defined. (no-redeclare)\n32:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n32:14 - \'Ember\' is not defined. (no-undef)\n35:13 - \'target\' is assigned a value but never used. (no-unused-vars)\n35:22 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n35:22 - \'$\' is not defined. (no-undef)\n39:18 - Empty block statement. (no-empty)\n42:12 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n42:12 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('models/similarheader.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/similarheader.js should pass ESLint\n\n7:7 - \'host\' is already defined. (no-redeclare)\n8:7 - \'pilboxHost\' is already defined. (no-redeclare)\n22:16 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n22:16 - \'Ember\' is not defined. (no-undef)\n25:22 - Empty block statement. (no-empty)');
  });

  QUnit.test('models/similarpost.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/similarpost.js should pass ESLint\n\n4:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n5:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n6:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('models/similaruser.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/similaruser.js should pass ESLint\n\n');
  });

  QUnit.test('models/social.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/social.js should pass ESLint\n\n7:7 - \'host\' is already defined. (no-redeclare)\n8:7 - \'pilboxHost\' is already defined. (no-redeclare)\n46:14 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n46:14 - \'Ember\' is not defined. (no-undef)\n50:18 - Empty block statement. (no-empty)\n54:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n54:15 - \'Ember\' is not defined. (no-undef)\n57:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n57:15 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('models/userlist.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/userlist.js should pass ESLint\n\n');
  });

  QUnit.test('models/userprofile.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/userprofile.js should pass ESLint\n\n20:18 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n20:18 - \'Ember\' is not defined. (no-undef)\n23:19 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n23:19 - \'Ember\' is not defined. (no-undef)\n26:15 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n26:15 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('models/vote.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/vote.js should pass ESLint\n\n');
  });

  QUnit.test('models/wallet.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/wallet.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/application.js should pass ESLint\n\n2:8 - \'subscribe\' is defined but never used. (no-unused-vars)\n7:7 - \'host\' is already defined. (no-redeclare)\n11:14 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n11:14 - \'Ember\' is not defined. (no-undef)\n12:16 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n12:16 - \'Ember\' is not defined. (no-undef)\n13:18 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n13:18 - \'Ember\' is not defined. (no-undef)\n14:24 - \'Ember\' is not defined. (no-undef)\n14:24 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n15:12 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n15:12 - \'Ember\' is not defined. (no-undef)\n16:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n16:11 - \'Ember\' is not defined. (no-undef)\n17:15 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n17:15 - \'Ember\' is not defined. (no-undef)\n18:9 - \'Ember\' is not defined. (no-undef)\n18:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n25:26 - \'e\' is defined but never used. (no-unused-vars)\n26:25 - \'cordova\' is not defined. (no-undef)\n27:11 - \'that\' is assigned a value but never used. (no-unused-vars)\n30:9 - Unexpected console statement. (no-console)\n38:9 - Unexpected console statement. (no-console)\n49:7 - Unexpected console statement. (no-console)\n76:27 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n76:27 - \'$\' is not defined. (no-undef)\n77:20 - \'i\' is already defined. (no-redeclare)\n82:54 - Empty block statement. (no-empty)\n91:9 - Unexpected console statement. (no-console)\n91:21 - Do not use global `$` or `jQuery` (ember/no-global-jquery)\n91:21 - \'$\' is not defined. (no-undef)\n110:20 - Empty block statement. (no-empty)\n121:20 - Empty block statement. (no-empty)\n164:9 - Move function declaration to function body root. (no-inner-declarations)\n165:11 - \'FCMPlugin\' is not defined. (no-undef)\n167:15 - Unexpected console statement. (no-console)\n169:17 - Unexpected console statement. (no-console)\n172:17 - Unexpected console statement. (no-console)\n173:17 - \'Ember\' is not defined. (no-undef)\n173:17 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n183:21 - Unexpected console statement. (no-console)\n197:17 - Unexpected console statement. (no-console)\n201:15 - Unexpected console statement. (no-console)\n206:9 - \'FCMPlugin\' is not defined. (no-undef)\n214:22 - \'msg\' is defined but never used. (no-unused-vars)\n216:22 - \'err\' is defined but never used. (no-unused-vars)\n219:17 - Empty block statement. (no-empty)');
  });

  QUnit.test('routes/bottombar.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/bottombar.js should pass ESLint\n\n');
  });

  QUnit.test('routes/discuss/chat.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/discuss/chat.js should pass ESLint\n\n4:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:11 - \'Ember\' is not defined. (no-undef)\n5:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:9 - \'Ember\' is not defined. (no-undef)\n6:14 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n6:14 - \'Ember\' is not defined. (no-undef)\n18:12 - Use import { hash } from \'rsvp\'; instead of using Ember.RSVP.hash (ember/new-module-imports)\n18:12 - \'Ember\' is not defined. (no-undef)\n25:59 - \'post\' is defined but never used. (no-unused-vars)\n31:28 - \'model\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/discuss/create-grouppost.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/discuss/create-grouppost.js should pass ESLint\n\n');
  });

  QUnit.test('routes/discuss/create-social.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/discuss/create-social.js should pass ESLint\n\n');
  });

  QUnit.test('routes/discuss/edit-social.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/discuss/edit-social.js should pass ESLint\n\n');
  });

  QUnit.test('routes/discuss/group-page.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/discuss/group-page.js should pass ESLint\n\n4:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:11 - \'Ember\' is not defined. (no-undef)\n5:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:9 - \'Ember\' is not defined. (no-undef)\n10:30 - \'model\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/discuss/share-social.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/discuss/share-social.js should pass ESLint\n\n7:72 - \'post\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/entertainment/home.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/entertainment/home.js should pass ESLint\n\n5:14 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:14 - \'Ember\' is not defined. (no-undef)\n28:10 - Use import { hash } from \'rsvp\'; instead of using Ember.RSVP.hash (ember/new-module-imports)\n28:10 - \'Ember\' is not defined. (no-undef)\n29:98 - \'post\' is defined but never used. (no-unused-vars)\n33:59 - \'post\' is defined but never used. (no-unused-vars)\n48:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('routes/entertainment/live-detail.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/entertainment/live-detail.js should pass ESLint\n\n4:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:9 - \'Ember\' is not defined. (no-undef)\n5:14 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:14 - \'Ember\' is not defined. (no-undef)\n19:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n19:18 - Use import { hash } from \'rsvp\'; instead of using Ember.RSVP.hash (ember/new-module-imports)\n19:18 - \'Ember\' is not defined. (no-undef)\n20:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n20:93 - \'post\' is defined but never used. (no-unused-vars)\n21:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n22:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n23:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n24:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n24:93 - \'post\' is defined but never used. (no-unused-vars)\n25:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n26:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n27:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n28:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('routes/entertainment/upload-detail.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/entertainment/upload-detail.js should pass ESLint\n\n5:9 - Unexpected console statement. (no-console)\n7:83 - \'post\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/home.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/home.js should pass ESLint\n\n4:14 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:14 - \'Ember\' is not defined. (no-undef)\n5:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:11 - \'Ember\' is not defined. (no-undef)\n26:12 - Use import { hash } from \'rsvp\'; instead of using Ember.RSVP.hash (ember/new-module-imports)\n26:12 - \'Ember\' is not defined. (no-undef)\n33:30 - \'model\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass ESLint\n\n4:10 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:10 - \'Ember\' is not defined. (no-undef)\n21:3 - Unexpected console statement. (no-console)\n22:104 - \'post\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass ESLint\n\n');
  });

  QUnit.test('routes/news-detail.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/news-detail.js should pass ESLint\n\n3:3 - \'merge\' is defined but never used. (no-unused-vars)\n20:5 - Unexpected console statement. (no-console)\n23:12 - Use import { hash } from \'rsvp\'; instead of using Ember.RSVP.hash (ember/new-module-imports)\n23:12 - \'Ember\' is not defined. (no-undef)\n24:63 - \'post\' is defined but never used. (no-unused-vars)\n31:16 - \'post\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/news/category.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/news/category.js should pass ESLint\n\n');
  });

  QUnit.test('routes/news/create-crs.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/news/create-crs.js should pass ESLint\n\n5:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n9:12 - Use import { hash } from \'rsvp\'; instead of using Ember.RSVP.hash (ember/new-module-imports)\n9:12 - \'Ember\' is not defined. (no-undef)\n12:16 - \'post\' is defined but never used. (no-unused-vars)\n19:31 - \'model\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/news/create-share.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/news/create-share.js should pass ESLint\n\n7:72 - \'post\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/news/international-list.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/news/international-list.js should pass ESLint\n\n12:54 - \'post\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/news/local-list.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/news/local-list.js should pass ESLint\n\n12:54 - \'post\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/news/post-detail.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/news/post-detail.js should pass ESLint\n\n4:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:11 - \'Ember\' is not defined. (no-undef)\n12:9 - Unexpected console statement. (no-console)\n13:60 - \'post\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/news/private-list.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/news/private-list.js should pass ESLint\n\n12:54 - \'post\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/news/search-category.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/news/search-category.js should pass ESLint\n\n4:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:11 - \'Ember\' is not defined. (no-undef)\n8:5 - Unexpected console statement. (no-console)\n9:5 - Unexpected console statement. (no-console)\n10:50 - \'post\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/notification.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/notification.js should pass ESLint\n\n');
  });

  QUnit.test('routes/social-search.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/social-search.js should pass ESLint\n\n4:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:11 - \'Ember\' is not defined. (no-undef)\n7:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/social.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/social.js should pass ESLint\n\n5:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:9 - \'Ember\' is not defined. (no-undef)\n6:14 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n6:14 - \'Ember\' is not defined. (no-undef)\n28:9 - \'val\' is assigned a value but never used. (no-unused-vars)');
  });

  QUnit.test('routes/startup.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/startup.js should pass ESLint\n\n10:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n10:9 - \'Ember\' is not defined. (no-undef)\n17:9 - \'param\' is defined but never used. (no-unused-vars)\n22:12 - Use import { hash } from \'rsvp\'; instead of using Ember.RSVP.hash (ember/new-module-imports)\n22:12 - \'Ember\' is not defined. (no-undef)\n23:91 - \'post\' is defined but never used. (no-unused-vars)\n27:86 - \'post\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/user/chat-list.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/user/chat-list.js should pass ESLint\n\n4:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:9 - \'Ember\' is not defined. (no-undef)\n5:14 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:14 - \'Ember\' is not defined. (no-undef)\n24:12 - Use import { hash } from \'rsvp\'; instead of using Ember.RSVP.hash (ember/new-module-imports)\n24:12 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('routes/user/chat.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/user/chat.js should pass ESLint\n\n4:13 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:13 - \'Ember\' is not defined. (no-undef)\n5:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:11 - \'Ember\' is not defined. (no-undef)\n6:16 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n6:16 - \'Ember\' is not defined. (no-undef)\n9:7 - Unexpected console statement. (no-console)\n24:32 - \'model\' is defined but never used. (no-unused-vars)\n29:75 - \'post\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/user/chatting.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/user/chatting.js should pass ESLint\n\n');
  });

  QUnit.test('routes/user/create-group.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/user/create-group.js should pass ESLint\n\n');
  });

  QUnit.test('routes/user/find-friends.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/user/find-friends.js should pass ESLint\n\n4:13 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:13 - \'Ember\' is not defined. (no-undef)\n8:68 - \'post\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/user/find-groups.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/user/find-groups.js should pass ESLint\n\n4:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:11 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('routes/user/group-chat-detail.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/user/group-chat-detail.js should pass ESLint\n\n7:9 - Unexpected console statement. (no-console)\n24:38 - \'model\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/user/group-chat-list.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/user/group-chat-list.js should pass ESLint\n\n10:9 - Unexpected console statement. (no-console)');
  });

  QUnit.test('routes/user/group.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/user/group.js should pass ESLint\n\n5:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:11 - \'Ember\' is not defined. (no-undef)\n6:20 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n6:20 - \'Ember\' is not defined. (no-undef)\n14:9 - Unexpected console statement. (no-console)\n19:16 - Use import { hash } from \'rsvp\'; instead of using Ember.RSVP.hash (ember/new-module-imports)\n19:16 - \'Ember\' is not defined. (no-undef)\n20:64 - \'post\' is defined but never used. (no-unused-vars)\n32:33 - \'model\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/user/groupchat.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/user/groupchat.js should pass ESLint\n\n4:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:9 - \'Ember\' is not defined. (no-undef)\n5:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:11 - \'Ember\' is not defined. (no-undef)\n10:12 - Use import { hash } from \'rsvp\'; instead of using Ember.RSVP.hash (ember/new-module-imports)\n10:12 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('routes/user/profile-info.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/user/profile-info.js should pass ESLint\n\n5:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:9 - \'Ember\' is not defined. (no-undef)\n10:12 - Use import { hash } from \'rsvp\'; instead of using Ember.RSVP.hash (ember/new-module-imports)\n10:12 - \'Ember\' is not defined. (no-undef)\n11:84 - \'user\' is defined but never used. (no-unused-vars)\n18:32 - \'model\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/user/profile.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/user/profile.js should pass ESLint\n\n5:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:11 - \'Ember\' is not defined. (no-undef)\n6:20 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n6:20 - \'Ember\' is not defined. (no-undef)\n7:13 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n7:13 - \'Ember\' is not defined. (no-undef)\n35:9 - Unexpected console statement. (no-console)\n36:16 - Use import { hash } from \'rsvp\'; instead of using Ember.RSVP.hash (ember/new-module-imports)\n36:16 - \'Ember\' is not defined. (no-undef)\n37:64 - \'post\' is defined but never used. (no-unused-vars)\n48:85 - \'vote\' is defined but never used. (no-unused-vars)\n55:34 - \'model\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/user/user-chat-list.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/user/user-chat-list.js should pass ESLint\n\n4:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:11 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('services/auth.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/auth.js should pass ESLint\n\n9:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n12:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n13:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n14:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });

  QUnit.test('services/connection-status.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/connection-status.js should pass ESLint\n\n5:12 - \'Ember\' is not defined. (no-undef)\n5:12 - Use import { not } from \'@ember/object/computed\'; instead of using Ember.computed.not (ember/new-module-imports)\n6:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n6:9 - \'Ember\' is not defined. (no-undef)\n7:18 - Don\'t use Ember\'s function prototype extensions (ember/no-function-prototype-extensions)\n14:9 - \'Ember\' is not defined. (no-undef)\n15:9 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n15:9 - \'Ember\' is not defined. (no-undef)\n16:19 - \'reqUrl\' is not defined. (no-undef)\n22:15 - Unexpected console statement. (no-console)\n27:9 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('services/convertnumber.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/convertnumber.js should pass ESLint\n\n19:15 - \'round\' is not defined. (no-undef)');
  });

  QUnit.test('services/downloadfile.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/downloadfile.js should pass ESLint\n\n14:34 - \'LocalFileSystem\' is not defined. (no-undef)\n17:13 - Unexpected console statement. (no-console)\n18:13 - Unexpected console statement. (no-console)\n19:13 - Unexpected console statement. (no-console)\n29:37 - \'parent\' is defined but never used. (no-unused-vars)\n42:32 - \'FileTransfer\' is not defined. (no-undef)\n44:9 - Unexpected console statement. (no-console)\n45:9 - Unexpected console statement. (no-console)\n52:30 - Unexpected console statement. (no-console)');
  });

  QUnit.test('services/messagebus.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/messagebus.js should pass ESLint\n\n5:16 - Use import Service from \'@ember/service\'; instead of using Ember.Service (ember/new-module-imports)\n6:10 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n11:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n13:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n24:9 - Unexpected console statement. (no-console)\n96:52 - \'e\' is defined but never used. (no-unused-vars)\n118:7 - Unexpected console statement. (no-console)\n127:11 - \'id\' is assigned a value but never used. (no-unused-vars)\n132:11 - \'host\' is already defined. (no-redeclare)\n134:5 - Unexpected console statement. (no-console)\n135:5 - Unexpected console statement. (no-console)\n138:11 - \'mode\' is assigned a value but never used. (no-unused-vars)\n200:50 - \'index\' is defined but never used. (no-unused-vars)\n219:7 - Use import { later } from \'@ember/runloop\'; instead of using Ember.run.later (ember/new-module-imports)');
  });

  QUnit.test('services/resizer.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/resizer.js should pass ESLint\n\n3:16 - Use import Service from \'@ember/service\'; instead of using Ember.Service (ember/new-module-imports)\n7:11 - \'cw\' is assigned a value but never used. (no-unused-vars)\n8:11 - \'ch\' is assigned a value but never used. (no-unused-vars)');
  });

  QUnit.test('services/states.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/states.js should pass ESLint\n\n4:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n5:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n6:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n7:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n14:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n15:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n38:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });

  QUnit.test('services/uploadimage.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/uploadimage.js should pass ESLint\n\n6:7 - \'host\' is already defined. (no-redeclare)\n10:14 - \'Ember\' is not defined. (no-undef)\n10:14 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n11:13 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n11:13 - \'Ember\' is not defined. (no-undef)\n15:5 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n27:48 - \'reject\' is defined but never used. (no-unused-vars)\n35:13 - Unexpected console statement. (no-console)\n36:13 - Unexpected console statement. (no-console)\n61:9 - Unexpected console statement. (no-console)\n75:17 - Unexpected console statement. (no-console)\n79:13 - Unexpected console statement. (no-console)\n81:15 - Unexpected console statement. (no-console)\n83:13 - Unexpected console statement. (no-console)\n86:46 - \'e\' is defined but never used. (no-unused-vars)\n88:13 - Unexpected console statement. (no-console)\n90:36 - \'e\' is defined but never used. (no-unused-vars)\n95:13 - Unexpected console statement. (no-console)\n112:17 - Unexpected console statement. (no-console)\n123:11 - Unexpected console statement. (no-console)');
  });

  QUnit.test('torii-adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'torii-adapters/application.js should pass ESLint\n\n5:7 - \'host\' is already defined. (no-redeclare)\n7:16 - \'Ember\' is not defined. (no-undef)\n7:16 - Use import EmberObject from \'@ember/object\'; instead of using Ember.Object (ember/new-module-imports)\n8:9 - \'Ember\' is not defined. (no-undef)\n8:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n9:12 - \'Ember\' is not defined. (no-undef)\n9:12 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n10:16 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n10:16 - \'Ember\' is not defined. (no-undef)\n14:12 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n14:12 - \'Ember\' is not defined. (no-undef)\n15:10 - \'Ember\' is not defined. (no-undef)\n15:10 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n18:11 - \'that\' is assigned a value but never used. (no-unused-vars)\n19:18 - \'Ember\' is not defined. (no-undef)\n19:18 - Use import { Promise } from \'rsvp\'; instead of using Ember.RSVP.Promise (ember/new-module-imports)\n20:9 - \'FB\' is not defined. (no-undef)\n21:11 - \'Ember\' is not defined. (no-undef)\n21:11 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n25:22 - \'Ember\' is not defined. (no-undef)\n25:22 - Use import { bind } from \'@ember/runloop\'; instead of using Ember.run.bind (ember/new-module-imports)\n26:20 - Use import { bind } from \'@ember/runloop\'; instead of using Ember.run.bind (ember/new-module-imports)\n26:20 - \'Ember\' is not defined. (no-undef)\n42:9 - \'Ember\' is not defined. (no-undef)\n42:9 - Use import { isEmpty } from \'@ember/utils\'; instead of using Ember.isEmpty (ember/new-module-imports)\n55:5 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n55:5 - \'Ember\' is not defined. (no-undef)\n62:11 - Unexpected console statement. (no-console)\n68:23 - Empty block statement. (no-empty)\n69:13 - Unexpected console statement. (no-console)\n82:20 - \'Ember\' is not defined. (no-undef)\n82:20 - Use import { resolve } from \'rsvp\'; instead of using Ember.RSVP.resolve (ember/new-module-imports)\n91:20 - Use import { resolve } from \'rsvp\'; instead of using Ember.RSVP.resolve (ember/new-module-imports)\n91:20 - \'Ember\' is not defined. (no-undef)\n98:19 - \'res\' is defined but never used. (no-unused-vars)\n101:12 - Use import { resolve } from \'rsvp\'; instead of using Ember.RSVP.resolve (ember/new-module-imports)\n101:12 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('torii-adapters/fbnative.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'torii-adapters/fbnative.js should pass ESLint\n\n5:7 - \'host\' is already defined. (no-redeclare)\n7:16 - Use import EmberObject from \'@ember/object\'; instead of using Ember.Object (ember/new-module-imports)\n7:16 - \'Ember\' is not defined. (no-undef)\n12:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n12:9 - \'Ember\' is not defined. (no-undef)\n15:9 - \'authorizationCode\' is assigned a value but never used. (no-unused-vars)\n16:9 - \'that\' is assigned a value but never used. (no-unused-vars)\n17:16 - Use import { Promise } from \'rsvp\'; instead of using Ember.RSVP.Promise (ember/new-module-imports)\n17:16 - \'Ember\' is not defined. (no-undef)\n18:7 - \'facebookConnectPlugin\' is not defined. (no-undef)\n19:9 - Unexpected console statement. (no-console)\n20:9 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n20:9 - \'Ember\' is not defined. (no-undef)\n31:20 - Use import { bind } from \'@ember/runloop\'; instead of using Ember.run.bind (ember/new-module-imports)\n31:20 - \'Ember\' is not defined. (no-undef)\n32:18 - Use import { bind } from \'@ember/runloop\'; instead of using Ember.run.bind (ember/new-module-imports)\n32:18 - \'Ember\' is not defined. (no-undef)\n49:9 - \'userId\' is assigned a value but never used. (no-unused-vars)\n50:9 - Use import { isEmpty } from \'@ember/utils\'; instead of using Ember.isEmpty (ember/new-module-imports)\n50:9 - \'Ember\' is not defined. (no-undef)\n52:24 - \'phone\' is not defined. (no-undef)\n56:5 - Use import $ from \'jquery\'; instead of using Ember.$ (ember/new-module-imports)\n56:5 - \'Ember\' is not defined. (no-undef)\n69:9 - Unexpected console statement. (no-console)\n83:20 - Use import { resolve } from \'rsvp\'; instead of using Ember.RSVP.resolve (ember/new-module-imports)\n83:20 - \'Ember\' is not defined. (no-undef)\n89:20 - \'Ember\' is not defined. (no-undef)\n89:20 - Use import { resolve } from \'rsvp\'; instead of using Ember.RSVP.resolve (ember/new-module-imports)\n96:22 - \'Ember\' is not defined. (no-undef)\n96:22 - Use import { resolve } from \'rsvp\'; instead of using Ember.RSVP.resolve (ember/new-module-imports)\n102:19 - \'res\' is defined but never used. (no-unused-vars)\n104:5 - \'facebookConnectPlugin\' is not defined. (no-undef)\n105:12 - \'Ember\' is not defined. (no-undef)\n105:12 - Use import { resolve } from \'rsvp\'; instead of using Ember.RSVP.resolve (ember/new-module-imports)');
  });

  QUnit.test('torii-providers/fbnative.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'torii-providers/fbnative.js should pass ESLint\n\n1:11 - \'FB\' is defined but never used. (no-unused-vars)\n1:15 - \'$\' is defined but never used. (no-unused-vars)\n12:14 - Use import { Promise } from \'rsvp\'; instead of using Ember.RSVP.Promise (ember/new-module-imports)\n12:14 - \'Ember\' is not defined. (no-undef)\n12:51 - \'reject\' is defined but never used. (no-unused-vars)\n13:35 - \'userData\' is defined but never used. (no-unused-vars)\n15:7 - \'facebookConnectPlugin\' is not defined. (no-undef)\n17:16 - \'Ember\' is not defined. (no-undef)\n17:16 - Use import { run } from \'@ember/runloop\'; instead of using Ember.run (ember/new-module-imports)\n23:5 - \'facebookConnectPlugin\' is not defined. (no-undef)\n25:9 - Unexpected console statement. (no-console)\n38:18 - \'options\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('transforms/rqlstamp.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/rqlstamp.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/rqltags.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/rqltags.js should pass ESLint\n\n');
  });

  QUnit.test('transforms/stringstamp.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transforms/stringstamp.js should pass ESLint\n\n');
  });

  QUnit.test('transitions.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transitions.js should pass ESLint\n\n');
  });
});
define('vidya-frontend/tests/lint/templates.template.lint-test', [], function () {
  'use strict';

  QUnit.module('TemplateLint');

  QUnit.test('vidya-frontend/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/application.hbs should pass TemplateLint.\n\nvidya-frontend/templates/application.hbs\n  5:8  error  Duplicate attribute \'class\' found in the BlockStatement.  no-duplicate-attributes\n  102:4  error  Unexpected {{partial}} usage.  no-partial\n  104:4  error  Unexpected {{partial}} usage.  no-partial\n  112:14  error  Unexpected {{partial}} usage.  no-partial\n  101:85  error  Attribute tabindex should be either quoted or wrapped in mustaches  no-quoteless-attributes\n  5:14  error  you must use double quotes in templates  quotes\n  15:22  error  you must use double quotes in templates  quotes\n  33:34  error  you must use double quotes in templates  quotes\n  101:93  error  you must use double quotes in templates  quotes\n  104:14  error  you must use double quotes in templates  quotes\n  107:31  error  you must use double quotes in templates  quotes\n  108:33  error  you must use double quotes in templates  quotes\n  109:35  error  you must use double quotes in templates  quotes\n  110:37  error  you must use double quotes in templates  quotes\n  111:39  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/bottombar.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/bottombar.hbs should pass TemplateLint.\n\nvidya-frontend/templates/bottombar.hbs\n  1:38  error  you must use double quotes in templates  quotes\n  2:24  error  you must use double quotes in templates  quotes\n  3:23  error  you must use double quotes in templates  quotes\n  4:25  error  you must use double quotes in templates  quotes\n  5:24  error  you must use double quotes in templates  quotes\n  6:22  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/breaknews.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/breaknews.hbs should pass TemplateLint.\n\nvidya-frontend/templates/breaknews.hbs\n  2:0  error  Incorrect indentation for `{{#paper-content}}` beginning at L2:C0. Expected `{{#paper-content}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  10:32  error  Interaction added to non-interactive element  no-invalid-interactive\n  1:23  error  you must use double quotes in templates  quotes\n  2:23  error  you must use double quotes in templates  quotes\n  3:22  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/bottom-bar-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/bottom-bar-card.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/bottom-bar-card.hbs\n  85:0  error  Incorrect indentation for `{{!\n<a class="[ nav-toggle  pos-absolute ]  [ js-toggle ]" href="#">\n<div class="[ toggle-menu ]">\n    <span class=""></span>\n</div>\n</a>\n<ul id="js-autoplay" class="menu-list  pos-absolute">\n\t<li class="menu-list__item"><a class="link  [ js-anima ]" href="#"><i class="fa fa-codepen"></i></a></li>\n\t<li class="menu-list__item"><a class="link  [ js-anima ]" href="#"><i class="fa fa-linkedin"></i></a></li>\n\t<li class="menu-list__item"><a class="link  [ js-anima ]" href="#"><i class="fa fa-share"></i></a></li>\n</ul>\n}}` beginning at L85:C0. Expected `{{!\n<a class="[ nav-toggle  pos-absolute ]  [ js-toggle ]" href="#">\n<div class="[ toggle-menu ]">\n    <span class=""></span>\n</div>\n</a>\n<ul id="js-autoplay" class="menu-list  pos-absolute">\n\t<li class="menu-list__item"><a class="link  [ js-anima ]" href="#"><i class="fa fa-codepen"></i></a></li>\n\t<li class="menu-list__item"><a class="link  [ js-anima ]" href="#"><i class="fa fa-linkedin"></i></a></li>\n\t<li class="menu-list__item"><a class="link  [ js-anima ]" href="#"><i class="fa fa-share"></i></a></li>\n</ul>\n}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  84:6  error  Incorrect indentation for `div` beginning at L3:C2. Expected `</div>` ending at L84:C6 to be at an indentation of 2 but was found at 0.  block-indentation\n  78:0  error  Incorrect indentation for `<div>` beginning at L78:C0. Expected `<div>` to be at an indentation of 4 but was found at 0.  block-indentation\n  7:9  error  Incorrect indentation for `{{paper-icon}}` beginning at L7:C9. Expected `{{paper-icon}}` to be at an indentation of 8 but was found at 9.  block-indentation\n  8:9  error  Incorrect indentation for `{{! <i class="eagle-icons">news</i> }}` beginning at L8:C9. Expected `{{! <i class="eagle-icons">news</i> }}` to be at an indentation of 8 but was found at 9.  block-indentation\n  77:6  error  Incorrect indentation for `div` beginning at L12:C4. Expected `</div>` ending at L77:C6 to be at an indentation of 4 but was found at 0.  block-indentation\n  16:8  error  Incorrect indentation for `<div>` beginning at L16:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  46:2  error  Incorrect indentation for `{{!  }}` beginning at L46:C2. Expected `{{!  }}` to be at an indentation of 6 but was found at 2.  block-indentation\n  47:2  error  Incorrect indentation for `{{! <nav class="menu"> }}` beginning at L47:C2. Expected `{{! <nav class="menu"> }}` to be at an indentation of 6 but was found at 2.  block-indentation\n  48:2  error  Incorrect indentation for `{{! <input checked="checked" class="menu-toggler" id="menu-toggler" type="checkbox"></input> }}` beginning at L48:C2. Expected `{{! <input checked="checked" class="menu-toggler" id="menu-toggler" type="checkbox"></input> }}` to be at an indentation of 6 but was found at 2.  block-indentation\n  49:2  error  Incorrect indentation for `<!-- <div class="half-circle"></div> -->` beginning at L49:C2. Expected `<!-- <div class="half-circle"></div> -->` to be at an indentation of 6 but was found at 2.  block-indentation\n  50:2  error  Incorrect indentation for `<div>` beginning at L50:C2. Expected `<div>` to be at an indentation of 6 but was found at 2.  block-indentation\n  51:2  error  Incorrect indentation for `{{! <a class="nav-toggle  pos-absolute js-toggle menu-toggler" href="#" id=\'js-autoplay\'>\n        <div class="[ toggle-menu ]">\n          <span class=""></span>\n        </div>\n      </a> }}` beginning at L51:C2. Expected `{{! <a class="nav-toggle  pos-absolute js-toggle menu-toggler" href="#" id=\'js-autoplay\'>\n        <div class="[ toggle-menu ]">\n          <span class=""></span>\n        </div>\n      </a> }}` to be at an indentation of 6 but was found at 2.  block-indentation\n  56:2  error  Incorrect indentation for `<ul>` beginning at L56:C2. Expected `<ul>` to be at an indentation of 6 but was found at 2.  block-indentation\n  68:2  error  Incorrect indentation for `{{! </nav> }}` beginning at L68:C2. Expected `{{! </nav> }}` to be at an indentation of 6 but was found at 2.  block-indentation\n  69:2  error  Incorrect indentation for `{{!\n\n      <div class="layout-column layout-align-center-center flex tab-font" {{action routeToSocial}}>\n  {{#link-to \'social\' }}\n    {{paper-icon \'group\' class="layout-align-center-start layout-row icon-color"}}\n    <p class="layout-align-center-start layout-row mg-0">Social</p>\n  {{/link-to}}\n  }}` beginning at L69:C2. Expected `{{!\n\n      <div class="layout-column layout-align-center-center flex tab-font" {{action routeToSocial}}>\n  {{#link-to \'social\' }}\n    {{paper-icon \'group\' class="layout-align-center-start layout-row icon-color"}}\n    <p class="layout-align-center-start layout-row mg-0">Social</p>\n  {{/link-to}}\n  }}` to be at an indentation of 6 but was found at 2.  block-indentation\n  21:10  error  Incorrect indentation for `{{paper-icon}}` beginning at L21:C10. Expected `{{paper-icon}}` to be at an indentation of 12 but was found at 10.  block-indentation\n  22:10  error  Incorrect indentation for `<p>` beginning at L22:C10. Expected `<p>` to be at an indentation of 12 but was found at 10.  block-indentation\n  81:8  error  Incorrect indentation for `<p>` beginning at L81:C8. Expected `<p>` to be at an indentation of 4 but was found at 8.  block-indentation\n  49:2  error  HTML comment detected  no-html-comments\n  98:0  error  HTML comment detected  no-html-comments\n  4:78  error  Interaction added to non-interactive element  no-invalid-interactive\n  12:92  error  Interaction added to non-interactive element  no-invalid-interactive\n  12:117  error  Interaction added to non-interactive element  no-invalid-interactive\n  57:26  error  Interaction added to non-interactive element  no-invalid-interactive\n  60:26  error  Interaction added to non-interactive element  no-invalid-interactive\n  63:26  error  Interaction added to non-interactive element  no-invalid-interactive\n  78:68  error  Interaction added to non-interactive element  no-invalid-interactive\n  2:23  error  you must use double quotes in templates  quotes\n  5:17  error  you must use double quotes in templates  quotes\n  5:37  error  you must use double quotes in templates  quotes\n  7:22  error  you must use double quotes in templates  quotes\n  20:21  error  you must use double quotes in templates  quotes\n  20:43  error  you must use double quotes in templates  quotes\n  21:23  error  you must use double quotes in templates  quotes\n  58:40  error  you must use double quotes in templates  quotes\n  61:40  error  you must use double quotes in templates  quotes\n  64:40  error  you must use double quotes in templates  quotes\n  79:13  error  you must use double quotes in templates  quotes\n  79:47  error  you must use double quotes in templates  quotes\n  80:17  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/cover-dialog.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/cover-dialog.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/cover-dialog.hbs\n  5:9  error  Incorrect indentation for `<h2>` beginning at L5:C9. Expected `<h2>` to be at an indentation of 8 but was found at 9.  block-indentation\n  12:4  error  Incorrect indentation for `{{#each}}` beginning at L12:C4. Expected `{{#each}}` to be at an indentation of 6 but was found at 4.  block-indentation\n  13:8  error  Incorrect indentation for `{{#paper-item}}` beginning at L13:C8. Expected `{{#paper-item}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  14:8  error  Incorrect indentation for `<div>` beginning at L14:C8. Expected `<div>` to be at an indentation of 10 but was found at 8.  block-indentation\n  17:8  error  Incorrect indentation for `<div>` beginning at L17:C8. Expected `<div>` to be at an indentation of 10 but was found at 8.  block-indentation\n  15:9  error  Incorrect indentation for `<img>` beginning at L15:C9. Expected `<img>` to be at an indentation of 10 but was found at 9.  block-indentation\n  24:18  error  Incorrect indentation for `div` beginning at L17:C8. Expected `</div>` ending at L24:C18 to be at an indentation of 8 but was found at 12.  block-indentation\n  18:12  error  Incorrect indentation for `{{controls.radio}}` beginning at L18:C12. Expected `{{controls.radio}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  15:9  error  img tags must have an alt attribute  img-alt-attributes\n  15:9  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });

  QUnit.test('vidya-frontend/templates/components/create-news-dialog.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/create-news-dialog.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/create-news-dialog.hbs\n  2:0  error  Incorrect indentation for `{{#if}}` beginning at L2:C0. Expected `{{#if}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  7:8  error  Incorrect indentation for `<h2>` beginning at L7:C8. Expected `<h2>` to be at an indentation of 10 but was found at 8.  block-indentation\n  32:22  error  Incorrect indentation for `<source>` beginning at L32:C22. Expected `<source>` to be at an indentation of 20 but was found at 22.  block-indentation\n  36:22  error  Incorrect indentation for `<source>` beginning at L36:C22. Expected `<source>` to be at an indentation of 20 but was found at 22.  block-indentation\n  47:0  error  Incorrect indentation for `{{!\n      {{#x-file-input multiple=true action=(action "selectImg")}}\n        {{#paper-button iconButton=true}}\n          {{paper-icon "add_to_photos"}}\n        {{/paper-button}}\n      {{/x-file-input}}\n}}` beginning at L47:C0. Expected `{{!\n      {{#x-file-input multiple=true action=(action "selectImg")}}\n        {{#paper-button iconButton=true}}\n          {{paper-icon "add_to_photos"}}\n        {{/paper-button}}\n      {{/x-file-input}}\n}}` to be at an indentation of 8 but was found at 0.  block-indentation\n  54:6  error  Incorrect indentation for `{{#paper-button}}` beginning at L54:C6. Expected `{{#paper-button}}` to be at an indentation of 8 but was found at 6.  block-indentation\n  57:6  error  Incorrect indentation for `{{#paper-button}}` beginning at L57:C6. Expected `{{#paper-button}}` to be at an indentation of 8 but was found at 6.  block-indentation\n  61:6  error  Incorrect indentation for `{{#paper-button}}` beginning at L61:C6. Expected `{{#paper-button}}` to be at an indentation of 8 but was found at 6.  block-indentation\n  65:6  error  Incorrect indentation for `{{#paper-button}}` beginning at L65:C6. Expected `{{#paper-button}}` to be at an indentation of 8 but was found at 6.  block-indentation\n  29:18  error  img tags must have an alt attribute  img-alt-attributes\n  1:23  error  you must use double quotes in templates  quotes\n  13:36  error  you must use double quotes in templates  quotes\n  15:30  error  you must use double quotes in templates  quotes\n  22:21  error  you must use double quotes in templates  quotes\n  25:21  error  you must use double quotes in templates  quotes\n  28:36  error  you must use double quotes in templates  quotes\n  29:62  error  you must use double quotes in templates  quotes\n  30:40  error  you must use double quotes in templates  quotes\n  31:32  error  you must use double quotes in templates  quotes\n  35:31  error  you must use double quotes in templates  quotes\n  39:38  error  you must use double quotes in templates  quotes\n  39:85  error  you must use double quotes in templates  quotes\n  54:54  error  you must use double quotes in templates  quotes\n  57:54  error  you must use double quotes in templates  quotes\n  61:54  error  you must use double quotes in templates  quotes\n  65:54  error  you must use double quotes in templates  quotes\n  29:18  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });

  QUnit.test('vidya-frontend/templates/components/doc-content.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'vidya-frontend/templates/components/doc-content.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('vidya-frontend/templates/components/entertainment/create-live-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'vidya-frontend/templates/components/entertainment/create-live-card.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('vidya-frontend/templates/components/entertainment/main-live.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/entertainment/main-live.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/entertainment/main-live.hbs\n  15:14  error  you must use double quotes in templates  quotes\n  16:15  error  you must use double quotes in templates  quotes\n  18:13  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/entertainment/main-nolive.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/entertainment/main-nolive.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/entertainment/main-nolive.hbs\n  1:23  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/entertainment/no-live-poster.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/entertainment/no-live-poster.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/entertainment/no-live-poster.hbs\n  1:23  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/entertainment/user-live.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/entertainment/user-live.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/entertainment/user-live.hbs\n  1:2  error  Incorrect indentation for `<div>` beginning at L1:C2. Expected `<div>` to be at an indentation of 0, but was found at 2.  block-indentation\n  14:9  error  Incorrect indentation for `div` beginning at L1:C2. Expected `</div>` ending at L14:C9 to be at an indentation of 2 but was found at 3.  block-indentation\n  20:5  error  Incorrect indentation for `<div>` beginning at L20:C5. Expected `<div>` to be at an indentation of 6 but was found at 5.  block-indentation\n  19:11  error  Incorrect indentation for `div` beginning at L17:C6. Expected `</div>` ending at L19:C11 to be at an indentation of 6 but was found at 5.  block-indentation\n  18:7  error  Incorrect indentation for `{{paper-icon}}` beginning at L18:C7. Expected `{{paper-icon}}` to be at an indentation of 8 but was found at 7.  block-indentation\n  2:4  error  HTML comment detected  no-html-comments\n  24:4  error  HTML comment detected  no-html-comments\n  1:59  error  Interaction added to non-interactive element  no-invalid-interactive\n  6:71  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/entertainment/user-replay.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/entertainment/user-replay.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/entertainment/user-replay.hbs\n  17:7  error  Incorrect indentation for `div` beginning at L2:C0. Expected `</div>` ending at L17:C7 to be at an indentation of 0 but was found at 1.  block-indentation\n  3:2  error  HTML comment detected  no-html-comments\n  13:2  error  HTML comment detected  no-html-comments\n  2:57  error  Interaction added to non-interactive element  no-invalid-interactive\n  7:69  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/entertainment/user-upload.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/entertainment/user-upload.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/entertainment/user-upload.hbs\n  25:7  error  Incorrect indentation for `div` beginning at L10:C0. Expected `</div>` ending at L25:C7 to be at an indentation of 0 but was found at 1.  block-indentation\n  1:0  error  HTML comment detected  no-html-comments\n  7:0  error  HTML comment detected  no-html-comments\n  11:2  error  HTML comment detected  no-html-comments\n  21:2  error  HTML comment detected  no-html-comments\n  10:57  error  Interaction added to non-interactive element  no-invalid-interactive\n');
  });

  QUnit.test('vidya-frontend/templates/components/entertainment/user-video-clip.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'vidya-frontend/templates/components/entertainment/user-video-clip.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('vidya-frontend/templates/components/fullscreen-img.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'vidya-frontend/templates/components/fullscreen-img.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('vidya-frontend/templates/components/group-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/group-card.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/group-card.hbs\n  26:7  error  Incorrect indentation for `div` beginning at L18:C0. Expected `</div>` ending at L26:C7 to be at an indentation of 0 but was found at 1.  block-indentation\n  1:0  error  HTML comment detected  no-html-comments\n  18:42  error  Interaction added to non-interactive element  no-invalid-interactive\n  19:36  error  you must use double quotes in templates  quotes\n  20:57  error  you must use double quotes in templates  quotes\n  22:49  error  you must use double quotes in templates  quotes\n  28:107  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/news/category-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/news/category-card.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/news/category-card.hbs\n  8:7  error  Incorrect indentation for `div` beginning at L1:C0. Expected `</div>` ending at L8:C7 to be at an indentation of 0 but was found at 1.  block-indentation\n  4:4  error  Incorrect indentation for inverse block of `{{#if}}` beginning at L2:C2. Expected `{{else}}` starting at L4:C4 to be at an indentation of 2 but was found at 4.  block-indentation\n  3:6  error  Incorrect indentation for `<img>` beginning at L3:C6. Expected `<img>` to be at an indentation of 4 but was found at 6.  block-indentation\n  5:6  error  Incorrect indentation for `<img>` beginning at L5:C6. Expected `<img>` to be at an indentation of 4 but was found at 6.  block-indentation\n  3:6  error  img tags must have an alt attribute  img-alt-attributes\n  1:42  error  Interaction added to non-interactive element  no-invalid-interactive\n  3:17  error  you must use double quotes in templates  quotes\n  3:32  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/news/crs-list.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/news/crs-list.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/news/crs-list.hbs\n  1:2  error  Incorrect indentation for `{{#if}}` beginning at L1:C2. Expected `{{#if}}` to be at an indentation of 0, but was found at 2.  block-indentation\n  2:2  error  Incorrect indentation for `{{#paper-card}}` beginning at L2:C2. Expected `{{#paper-card}}` to be at an indentation of 4 but was found at 2.  block-indentation\n  24:12  error  Incorrect indentation for `div` beginning at L3:C4. Expected `</div>` ending at L24:C12 to be at an indentation of 4 but was found at 6.  block-indentation\n  23:14  error  Incorrect indentation for `div` beginning at L8:C6. Expected `</div>` ending at L23:C14 to be at an indentation of 6 but was found at 8.  block-indentation\n  10:10  error  img tags must have an alt attribute  img-alt-attributes\n  3:28  error  Interaction added to non-interactive element  no-invalid-interactive\n  13:57  error  Interaction added to non-interactive element  no-invalid-interactive\n  2:64  error  \'card\' is defined but never used  no-unused-block-params\n  2:22  error  you must use double quotes in templates  quotes\n  9:38  error  you must use double quotes in templates  quotes\n  13:125  error  you must use double quotes in templates  quotes\n  13:66  error  you must use double quotes in templates  quotes\n  18:29  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/news/crsgroup-dialog.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/news/crsgroup-dialog.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/news/crsgroup-dialog.hbs\n  2:0  error  Incorrect indentation for `{{#if}}` beginning at L2:C0. Expected `{{#if}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  7:8  error  Incorrect indentation for `<h2>` beginning at L7:C8. Expected `<h2>` to be at an indentation of 10 but was found at 8.  block-indentation\n  1:23  error  you must use double quotes in templates  quotes\n  13:36  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/news/detail-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/news/detail-card.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/news/detail-card.hbs\n  11:4  error  Incorrect indentation for `{{#swiper-container}}` beginning at L11:C4. Expected `{{#swiper-container}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  12:4  error  Incorrect indentation for `{{#each}}` beginning at L12:C4. Expected `{{#each}}` to be at an indentation of 6 but was found at 4.  block-indentation\n  29:15  error  Incorrect indentation for `each` beginning at L12:C4. Expected `{{/each}}` ending at L29:C15 to be at an indentation of 4 but was found at 6.  block-indentation\n  28:25  error  Incorrect indentation for `swiper-slide` beginning at L13:C6. Expected `{{/swiper-slide}}` ending at L28:C25 to be at an indentation of 6 but was found at 8.  block-indentation\n  14:10  error  Incorrect indentation for `{{#if}}` beginning at L14:C10. Expected `{{#if}}` to be at an indentation of 8 but was found at 10.  block-indentation\n  15:10  error  Incorrect indentation for `<photo>` beginning at L15:C10. Expected `<photo>` to be at an indentation of 12 but was found at 10.  block-indentation\n  17:20  error  Incorrect indentation for `photo` beginning at L15:C10. Expected `</photo>` ending at L17:C20 to be at an indentation of 10 but was found at 12.  block-indentation\n  19:19  error  Interaction added to non-interactive element  no-invalid-interactive\n  23:54  error  Interaction added to non-interactive element  no-invalid-interactive\n  1:20  error  you must use double quotes in templates  quotes\n  5:20  error  you must use double quotes in templates  quotes\n  6:30  error  you must use double quotes in templates  quotes\n  7:30  error  you must use double quotes in templates  quotes\n  11:30  error  you must use double quotes in templates  quotes\n  13:46  error  you must use double quotes in templates  quotes\n  16:55  error  you must use double quotes in templates  quotes\n  19:28  error  you must use double quotes in templates  quotes\n  20:56  error  you must use double quotes in templates  quotes\n  23:63  error  you must use double quotes in templates  quotes\n  24:29  error  you must use double quotes in templates  quotes\n  32:13  error  you must use double quotes in templates  quotes\n  33:43  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/news/headline-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/news/headline-card.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/news/headline-card.hbs\n  2:0  error  Incorrect indentation for `{{#swiper-container}}` beginning at L2:C0. Expected `{{#swiper-container}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  37:24  error  Incorrect indentation for `swiper-container` beginning at L2:C0. Expected `{{/swiper-container}}` ending at L37:C24 to be at an indentation of 0 but was found at 5.  block-indentation\n  3:4  error  Incorrect indentation for `{{#each}}` beginning at L3:C4. Expected `{{#each}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  6:8  error  Incorrect indentation for `<div>` beginning at L6:C8. Expected `<div>` to be at an indentation of 10 but was found at 8.  block-indentation\n  20:8  error  Incorrect indentation for `<div>` beginning at L20:C8. Expected `<div>` to be at an indentation of 10 but was found at 8.  block-indentation\n  6:26  error  Interaction added to non-interactive element  no-invalid-interactive\n  20:26  error  Interaction added to non-interactive element  no-invalid-interactive\n  4:28  error  you must use double quotes in templates  quotes\n  6:19  error  you must use double quotes in templates  quotes\n  20:19  error  you must use double quotes in templates  quotes\n  22:47  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/news/headline-list.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/news/headline-list.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/news/headline-list.hbs\n  12:38  error  Interaction added to non-interactive element  no-invalid-interactive\n  1:23  error  you must use double quotes in templates  quotes\n  11:28  error  you must use double quotes in templates  quotes\n  12:19  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/news/inter-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/news/inter-card.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/news/inter-card.hbs\n  20:22  error  Incorrect indentation for `paper-content` beginning at L2:C2. Expected `{{/paper-content}}` ending at L20:C22 to be at an indentation of 2 but was found at 4.  block-indentation\n  3:2  error  Incorrect indentation for `{{#paper-item}}` beginning at L3:C2. Expected `{{#paper-item}}` to be at an indentation of 4 but was found at 2.  block-indentation\n  11:2  error  Incorrect indentation for `{{#swiper-container}}` beginning at L11:C2. Expected `{{#swiper-container}}` to be at an indentation of 4 but was found at 2.  block-indentation\n  1:20  error  you must use double quotes in templates  quotes\n  2:25  error  you must use double quotes in templates  quotes\n  3:22  error  you must use double quotes in templates  quotes\n  11:28  error  you must use double quotes in templates  quotes\n  13:28  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/news/inter-list-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/news/inter-list-card.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/news/inter-list-card.hbs\n  23:6  error  Incorrect indentation for `{{#if}}` beginning at L23:C6. Expected `{{#if}}` to be at an indentation of 4 but was found at 6.  block-indentation\n  22:13  error  Incorrect indentation for `if` beginning at L18:C4. Expected `{{/if}}` ending at L22:C13 to be at an indentation of 4 but was found at 6.  block-indentation\n  34:11  error  Incorrect indentation for `if` beginning at L23:C6. Expected `{{/if}}` ending at L34:C11 to be at an indentation of 6 but was found at 4.  block-indentation\n  24:6  error  Incorrect indentation for `<div>` beginning at L24:C6. Expected `<div>` to be at an indentation of 8 but was found at 6.  block-indentation\n  20:8  error  img tags must have an alt attribute  img-alt-attributes\n  8:9  error  Interaction added to non-interactive element  no-invalid-interactive\n  14:70  error  Interaction added to non-interactive element  no-invalid-interactive\n  19:33  error  Interaction added to non-interactive element  no-invalid-interactive\n  25:53  error  Interaction added to non-interactive element  no-invalid-interactive\n  29:24  error  Interaction added to non-interactive element  no-invalid-interactive\n  3:65  error  \'card\' is defined but never used  no-unused-block-params\n  3:20  error  you must use double quotes in templates  quotes\n  8:72  error  you must use double quotes in templates  quotes\n  18:43  error  you must use double quotes in templates  quotes\n  23:45  error  you must use double quotes in templates  quotes\n  25:62  error  you must use double quotes in templates  quotes\n  29:33  error  you must use double quotes in templates  quotes\n  30:25  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/news/local-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/news/local-card.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/news/local-card.hbs\n  11:2  error  Incorrect indentation for `{{#swiper-container}}` beginning at L11:C2. Expected `{{#swiper-container}}` to be at an indentation of 4 but was found at 2.  block-indentation\n  19:25  error  Incorrect indentation for `swiper-container` beginning at L11:C2. Expected `{{/swiper-container}}` ending at L19:C25 to be at an indentation of 2 but was found at 4.  block-indentation\n  12:6  error  Incorrect indentation for `{{#each}}` beginning at L12:C6. Expected `{{#each}}` to be at an indentation of 4 but was found at 6.  block-indentation\n  15:10  error  Incorrect indentation for `{{news/local-list-card}}` beginning at L15:C10. Expected `{{news/local-list-card}}` to be at an indentation of 12 but was found at 10.  block-indentation\n  1:20  error  you must use double quotes in templates  quotes\n  2:25  error  you must use double quotes in templates  quotes\n  3:24  error  you must use double quotes in templates  quotes\n  11:28  error  you must use double quotes in templates  quotes\n  13:30  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/news/local-list-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/news/local-list-card.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/news/local-list-card.hbs\n  21:6  error  Incorrect indentation for `{{#if}}` beginning at L21:C6. Expected `{{#if}}` to be at an indentation of 4 but was found at 6.  block-indentation\n  20:13  error  Incorrect indentation for `if` beginning at L16:C4. Expected `{{/if}}` ending at L20:C13 to be at an indentation of 4 but was found at 6.  block-indentation\n  32:11  error  Incorrect indentation for `if` beginning at L21:C6. Expected `{{/if}}` ending at L32:C11 to be at an indentation of 6 but was found at 4.  block-indentation\n  22:6  error  Incorrect indentation for `<div>` beginning at L22:C6. Expected `<div>` to be at an indentation of 8 but was found at 6.  block-indentation\n  18:8  error  img tags must have an alt attribute  img-alt-attributes\n  6:9  error  Interaction added to non-interactive element  no-invalid-interactive\n  12:70  error  Interaction added to non-interactive element  no-invalid-interactive\n  17:32  error  Interaction added to non-interactive element  no-invalid-interactive\n  23:53  error  Interaction added to non-interactive element  no-invalid-interactive\n  27:24  error  Interaction added to non-interactive element  no-invalid-interactive\n  1:65  error  \'card\' is defined but never used  no-unused-block-params\n  1:20  error  you must use double quotes in templates  quotes\n  6:72  error  you must use double quotes in templates  quotes\n  16:43  error  you must use double quotes in templates  quotes\n  21:45  error  you must use double quotes in templates  quotes\n  23:62  error  you must use double quotes in templates  quotes\n  27:33  error  you must use double quotes in templates  quotes\n  28:25  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/news/news-list-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/news/news-list-card.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/news/news-list-card.hbs\n  8:45  error  Incorrect indentation for `h4` beginning at L6:C8. Expected `</h4>` ending at L8:C45 to be at an indentation of 8 but was found at 40.  block-indentation\n  6:35  error  Incorrect indentation for `{{item.sourceNews}}` beginning at L6:C35. Expected `{{item.sourceNews}}` to be at an indentation of 10 but was found at 35.  block-indentation\n  12:41  error  Incorrect indentation for `{{paper-icon}}` beginning at L12:C41. Expected `{{paper-icon}}` to be at an indentation of 10 but was found at 41.  block-indentation\n  14:41  error  Incorrect indentation for `{{paper-icon}}` beginning at L14:C41. Expected `{{paper-icon}}` to be at an indentation of 10 but was found at 41.  block-indentation\n  19:16  error  Interaction added to non-interactive element  no-invalid-interactive\n  4:49  error  \'text\' is defined but never used  no-unused-block-params\n  1:20  error  you must use double quotes in templates  quotes\n  3:23  error  you must use double quotes in templates  quotes\n  4:25  error  you must use double quotes in templates  quotes\n  20:26  error  you must use double quotes in templates  quotes\n  22:46  error  you must use double quotes in templates  quotes\n  24:83  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/news/private-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/news/private-card.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/news/private-card.hbs\n  11:2  error  Incorrect indentation for `{{#swiper-container}}` beginning at L11:C2. Expected `{{#swiper-container}}` to be at an indentation of 4 but was found at 2.  block-indentation\n  19:25  error  Incorrect indentation for `swiper-container` beginning at L11:C2. Expected `{{/swiper-container}}` ending at L19:C25 to be at an indentation of 2 but was found at 4.  block-indentation\n  12:6  error  Incorrect indentation for `{{#each}}` beginning at L12:C6. Expected `{{#each}}` to be at an indentation of 4 but was found at 6.  block-indentation\n  15:10  error  Incorrect indentation for `{{news/private-list-card}}` beginning at L15:C10. Expected `{{news/private-list-card}}` to be at an indentation of 12 but was found at 10.  block-indentation\n  2:25  error  you must use double quotes in templates  quotes\n  3:24  error  you must use double quotes in templates  quotes\n  11:28  error  you must use double quotes in templates  quotes\n  13:30  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/news/private-list-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/news/private-list-card.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/news/private-list-card.hbs\n  21:6  error  Incorrect indentation for `{{#if}}` beginning at L21:C6. Expected `{{#if}}` to be at an indentation of 4 but was found at 6.  block-indentation\n  20:13  error  Incorrect indentation for `if` beginning at L16:C4. Expected `{{/if}}` ending at L20:C13 to be at an indentation of 4 but was found at 6.  block-indentation\n  32:11  error  Incorrect indentation for `if` beginning at L21:C6. Expected `{{/if}}` ending at L32:C11 to be at an indentation of 6 but was found at 4.  block-indentation\n  22:6  error  Incorrect indentation for `<div>` beginning at L22:C6. Expected `<div>` to be at an indentation of 8 but was found at 6.  block-indentation\n  18:8  error  img tags must have an alt attribute  img-alt-attributes\n  6:9  error  Interaction added to non-interactive element  no-invalid-interactive\n  12:69  error  Interaction added to non-interactive element  no-invalid-interactive\n  17:32  error  Interaction added to non-interactive element  no-invalid-interactive\n  23:53  error  Interaction added to non-interactive element  no-invalid-interactive\n  27:23  error  Interaction added to non-interactive element  no-invalid-interactive\n  1:65  error  \'card\' is defined but never used  no-unused-block-params\n  1:20  error  you must use double quotes in templates  quotes\n  6:72  error  you must use double quotes in templates  quotes\n  16:43  error  you must use double quotes in templates  quotes\n  21:45  error  you must use double quotes in templates  quotes\n  23:62  error  you must use double quotes in templates  quotes\n  27:32  error  you must use double quotes in templates  quotes\n  28:25  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/news/random-news-list.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/news/random-news-list.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/news/random-news-list.hbs\n  3:4  error  Incorrect indentation for `{{#if}}` beginning at L3:C4. Expected `{{#if}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  15:4  error  Incorrect indentation for `{{#paper-content}}` beginning at L15:C4. Expected `{{#paper-content}}` to be at an indentation of 6 but was found at 4.  block-indentation\n  13:22  error  Incorrect indentation for `paper-content` beginning at L4:C6. Expected `{{/paper-content}}` ending at L13:C22 to be at an indentation of 6 but was found at 4.  block-indentation\n  5:6  error  Incorrect indentation for `<div>` beginning at L5:C6. Expected `<div>` to be at an indentation of 8 but was found at 6.  block-indentation\n  12:10  error  Incorrect indentation for `div` beginning at L5:C6. Expected `</div>` ending at L12:C10 to be at an indentation of 6 but was found at 4.  block-indentation\n  11:12  error  Incorrect indentation for `div` beginning at L6:C8. Expected `</div>` ending at L11:C12 to be at an indentation of 8 but was found at 6.  block-indentation\n  7:12  error  Incorrect indentation for `<img>` beginning at L7:C12. Expected `<img>` to be at an indentation of 10 but was found at 12.  block-indentation\n  8:12  error  Incorrect indentation for `<div>` beginning at L8:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  16:4  error  Incorrect indentation for `<div>` beginning at L16:C4. Expected `<div>` to be at an indentation of 6 but was found at 4.  block-indentation\n  20:10  error  Incorrect indentation for `<img>` beginning at L20:C10. Expected `<img>` to be at an indentation of 12 but was found at 10.  block-indentation\n  29:13  error  Incorrect indentation for `<photo>` beginning at L29:C13. Expected `<photo>` to be at an indentation of 12 but was found at 13.  block-indentation\n  26:16  error  Incorrect indentation for `<span>` beginning at L26:C16. Expected `<span>` to be at an indentation of 14 but was found at 16.  block-indentation\n  27:53  error  Incorrect indentation for `span` beginning at L26:C16. Expected `</span>` ending at L27:C53 to be at an indentation of 16 but was found at 46.  block-indentation\n  26:100  error  Incorrect indentation for `{{item.sourceNews}}` beginning at L26:C100. Expected `{{item.sourceNews}}` to be at an indentation of 18 but was found at 100.  block-indentation\n  27:16  error  Incorrect indentation for `{{item.category.categoryname}}` beginning at L27:C16. Expected `{{item.category.categoryname}}` to be at an indentation of 18 but was found at 16.  block-indentation\n  31:18  error  Incorrect indentation for `photo` beginning at L29:C13. Expected `</photo>` ending at L31:C18 to be at an indentation of 13 but was found at 10.  block-indentation\n  30:12  error  Incorrect indentation for `<img>` beginning at L30:C12. Expected `<img>` to be at an indentation of 15 but was found at 12.  block-indentation\n  66:53  error  Incorrect indentation for `span` beginning at L65:C14. Expected `</span>` ending at L66:C53 to be at an indentation of 14 but was found at 46.  block-indentation\n  65:98  error  Incorrect indentation for `{{item.sourceNews}}` beginning at L65:C98. Expected `{{item.sourceNews}}` to be at an indentation of 16 but was found at 98.  block-indentation\n  26:49  error  elements cannot have inline styles  no-inline-styles\n  65:47  error  elements cannot have inline styles  no-inline-styles\n  5:48  error  Interaction added to non-interactive element  no-invalid-interactive\n  19:17  error  Interaction added to non-interactive element  no-invalid-interactive\n  24:63  error  Interaction added to non-interactive element  no-invalid-interactive\n  29:20  error  Interaction added to non-interactive element  no-invalid-interactive\n  37:40  error  Interaction added to non-interactive element  no-invalid-interactive\n  47:54  error  Interaction added to non-interactive element  no-invalid-interactive\n  60:38  error  Interaction added to non-interactive element  no-invalid-interactive\n  64:43  error  Interaction added to non-interactive element  no-invalid-interactive\n  4:29  error  you must use double quotes in templates  quotes\n  15:27  error  you must use double quotes in templates  quotes\n  23:21  error  you must use double quotes in templates  quotes\n  47:63  error  you must use double quotes in templates  quotes\n  48:29  error  you must use double quotes in templates  quotes\n  54:94  error  you must use double quotes in templates  quotes\n  26:49  error  Concatenated styles must be marked as `htmlSafe`.  style-concatenation\n  65:47  error  Concatenated styles must be marked as `htmlSafe`.  style-concatenation\n');
  });

  QUnit.test('vidya-frontend/templates/components/profile-info-edit.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/profile-info-edit.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/profile-info-edit.hbs\n  1:4  error  Incorrect indentation for `{{#if}}` beginning at L1:C4. Expected `{{#if}}` to be at an indentation of 0, but was found at 4.  block-indentation\n  24:6  error  Incorrect indentation for inverse block of `{{#if}}` beginning at L1:C4. Expected `{{else}}` starting at L24:C6 to be at an indentation of 4 but was found at 6.  block-indentation\n  25:48  error  \'card\' is defined but never used  no-unused-block-params\n  2:26  error  you must use double quotes in templates  quotes\n  25:26  error  you must use double quotes in templates  quotes\n  29:42  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/random-new-list.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'vidya-frontend/templates/components/random-new-list.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('vidya-frontend/templates/components/share-dialog.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/share-dialog.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/share-dialog.hbs\n  3:0  error  Incorrect indentation for `{{#if}}` beginning at L3:C0. Expected `{{#if}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  8:8  error  Incorrect indentation for `<h2>` beginning at L8:C8. Expected `<h2>` to be at an indentation of 10 but was found at 8.  block-indentation\n  18:12  error  Incorrect indentation for `{{#if}}` beginning at L18:C12. Expected `{{#if}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  2:23  error  you must use double quotes in templates  quotes\n  14:36  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/social-search-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/social-search-card.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/social-search-card.hbs\n  184:6  error  Incorrect indentation for `<div>` beginning at L184:C6. Expected `<div>` to be at an indentation of 8 but was found at 6.  block-indentation\n  7:12  error  img tags must have an alt attribute  img-alt-attributes\n  9:12  error  img tags must have an alt attribute  img-alt-attributes\n  12:10  error  img tags must have an alt attribute  img-alt-attributes\n  30:8  error  img tags must have an alt attribute  img-alt-attributes\n  32:8  error  img tags must have an alt attribute  img-alt-attributes\n  34:8  error  img tags must have an alt attribute  img-alt-attributes\n  36:8  error  img tags must have an alt attribute  img-alt-attributes\n  68:12  error  img tags must have an alt attribute  img-alt-attributes\n  136:14  error  img tags must have an alt attribute  img-alt-attributes\n  173:14  error  img tags must have an alt attribute  img-alt-attributes\n  26:2  error  HTML comment detected  no-html-comments\n  102:4  error  HTML comment detected  no-html-comments\n  142:4  error  HTML comment detected  no-html-comments\n  7:88  error  Interaction added to non-interactive element  no-invalid-interactive\n  21:28  error  Interaction added to non-interactive element  no-invalid-interactive\n  30:67  error  Interaction added to non-interactive element  no-invalid-interactive\n  32:79  error  Interaction added to non-interactive element  no-invalid-interactive\n  40:48  error  Interaction added to non-interactive element  no-invalid-interactive\n  45:50  error  Interaction added to non-interactive element  no-invalid-interactive\n  60:32  error  Interaction added to non-interactive element  no-invalid-interactive\n  68:53  error  Interaction added to non-interactive element  no-invalid-interactive\n  71:36  error  Interaction added to non-interactive element  no-invalid-interactive\n  75:30  error  Interaction added to non-interactive element  no-invalid-interactive\n  108:26  error  Interaction added to non-interactive element  no-invalid-interactive\n  121:66  error  Interaction added to non-interactive element  no-invalid-interactive\n  135:17  error  Interaction added to non-interactive element  no-invalid-interactive\n  148:26  error  Interaction added to non-interactive element  no-invalid-interactive\n  159:64  error  Interaction added to non-interactive element  no-invalid-interactive\n  163:41  error  Interaction added to non-interactive element  no-invalid-interactive\n  172:17  error  Interaction added to non-interactive element  no-invalid-interactive\n  1:20  error  you must use double quotes in templates  quotes\n  6:55  error  you must use double quotes in templates  quotes\n  12:33  error  you must use double quotes in templates  quotes\n  27:13  error  you must use double quotes in templates  quotes\n  29:36  error  you must use double quotes in templates  quotes\n  31:50  error  you must use double quotes in templates  quotes\n  36:31  error  you must use double quotes in templates  quotes\n  39:38  error  you must use double quotes in templates  quotes\n  57:15  error  you must use double quotes in templates  quotes\n  59:30  error  you must use double quotes in templates  quotes\n  68:90  error  you must use double quotes in templates  quotes\n  75:39  error  you must use double quotes in templates  quotes\n  76:31  error  you must use double quotes in templates  quotes\n  104:15  error  you must use double quotes in templates  quotes\n  107:32  error  you must use double quotes in templates  quotes\n  136:61  error  you must use double quotes in templates  quotes\n  147:32  error  you must use double quotes in templates  quotes\n  163:50  error  you must use double quotes in templates  quotes\n  164:29  error  you must use double quotes in templates  quotes\n  173:61  error  you must use double quotes in templates  quotes\n  183:28  error  you must use double quotes in templates  quotes\n  184:17  error  you must use double quotes in templates  quotes\n  68:12  error  Self-closing a void element is redundant  self-closing-void-elements\n  136:14  error  Self-closing a void element is redundant  self-closing-void-elements\n  173:14  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });

  QUnit.test('vidya-frontend/templates/components/socials/crs-post-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/socials/crs-post-card.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/socials/crs-post-card.hbs\n  2:0  error  Incorrect indentation for `{{#if}}` beginning at L2:C0. Expected `{{#if}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  103:0  error  Incorrect indentation for `<div>` beginning at L103:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  3:4  error  Incorrect indentation for `<div>` beginning at L3:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  101:12  error  Incorrect indentation for `div` beginning at L3:C4. Expected `</div>` ending at L101:C12 to be at an indentation of 4 but was found at 6.  block-indentation\n  44:8  error  Incorrect indentation for `{{#card.content}}` beginning at L44:C8. Expected `{{#card.content}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  65:8  error  Incorrect indentation for `{{#if}}` beginning at L65:C8. Expected `{{#if}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  43:14  error  Incorrect indentation for `div` beginning at L4:C6. Expected `</div>` ending at L43:C14 to be at an indentation of 6 but was found at 8.  block-indentation\n  19:10  error  Incorrect indentation for `{{#if}}` beginning at L19:C10. Expected `{{#if}}` to be at an indentation of 8 but was found at 10.  block-indentation\n  18:16  error  Incorrect indentation for `div` beginning at L5:C8. Expected `</div>` ending at L18:C16 to be at an indentation of 8 but was found at 10.  block-indentation\n  13:11  error  Incorrect indentation for `<div>` beginning at L13:C11. Expected `<div>` to be at an indentation of 10 but was found at 11.  block-indentation\n  7:14  error  Incorrect indentation for `<img>` beginning at L7:C14. Expected `<img>` to be at an indentation of 12 but was found at 14.  block-indentation\n  42:15  error  Incorrect indentation for `if` beginning at L19:C10. Expected `{{/if}}` ending at L42:C15 to be at an indentation of 10 but was found at 8.  block-indentation\n  20:10  error  Incorrect indentation for `<div>` beginning at L20:C10. Expected `<div>` to be at an indentation of 12 but was found at 10.  block-indentation\n  47:15  error  Incorrect indentation for `<p>` beginning at L47:C15. Expected `<p>` to be at an indentation of 14 but was found at 15.  block-indentation\n  51:12  error  Incorrect indentation for `<p>` beginning at L51:C12. Expected `<p>` to be at an indentation of 14 but was found at 12.  block-indentation\n  49:16  error  Incorrect indentation for `p` beginning at L47:C15. Expected `</p>` ending at L49:C16 to be at an indentation of 15 but was found at 12.  block-indentation\n  48:14  error  Incorrect indentation for `{{linkify}}` beginning at L48:C14. Expected `{{linkify}}` to be at an indentation of 17 but was found at 14.  block-indentation\n  57:13  error  Incorrect indentation for `<p>` beginning at L57:C13. Expected `<p>` to be at an indentation of 12 but was found at 13.  block-indentation\n  60:12  error  Incorrect indentation for `<p>` beginning at L60:C12. Expected `<p>` to be at an indentation of 14 but was found at 12.  block-indentation\n  67:12  error  Incorrect indentation for `{{#if}}` beginning at L67:C12. Expected `{{#if}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  88:12  error  Incorrect indentation for `{{#if}}` beginning at L88:C12. Expected `{{#if}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  74:17  error  Incorrect indentation for `<div>` beginning at L74:C17. Expected `<div>` to be at an indentation of 18 but was found at 17.  block-indentation\n  76:24  error  Incorrect indentation for `div` beginning at L74:C17. Expected `</div>` ending at L76:C24 to be at an indentation of 17 but was found at 18.  block-indentation\n  75:20  error  Incorrect indentation for `{{paper-icon}}` beginning at L75:C20. Expected `{{paper-icon}}` to be at an indentation of 19 but was found at 20.  block-indentation\n  84:12  error  Incorrect indentation for `<div>` beginning at L84:C12. Expected `<div>` to be at an indentation of 14 but was found at 12.  block-indentation\n  93:18  error  Incorrect indentation for `<video>` beginning at L93:C18. Expected `<video>` to be at an indentation of 20 but was found at 18.  block-indentation\n  95:22  error  Incorrect indentation for `<img>` beginning at L95:C22. Expected `<img>` to be at an indentation of 20 but was found at 22.  block-indentation\n  116:10  error  Incorrect indentation for `div` beginning at L103:C0. Expected `</div>` ending at L116:C10 to be at an indentation of 0 but was found at 4.  block-indentation\n  104:6  error  Incorrect indentation for `<div>` beginning at L104:C6. Expected `<div>` to be at an indentation of 2 but was found at 6.  block-indentation\n  107:9  error  Incorrect indentation for `<div>` beginning at L107:C9. Expected `<div>` to be at an indentation of 10 but was found at 9.  block-indentation\n  113:14  error  Incorrect indentation for `div` beginning at L107:C9. Expected `</div>` ending at L113:C14 to be at an indentation of 9 but was found at 8.  block-indentation\n  7:14  error  img tags must have an alt attribute  img-alt-attributes\n  9:12  error  img tags must have an alt attribute  img-alt-attributes\n  11:12  error  img tags must have an alt attribute  img-alt-attributes\n  85:14  error  img tags must have an alt attribute  img-alt-attributes\n  95:22  error  img tags must have an alt attribute  img-alt-attributes\n  7:121  error  Interaction added to non-interactive element  no-invalid-interactive\n  15:44  error  Interaction added to non-interactive element  no-invalid-interactive\n  45:24  error  Interaction added to non-interactive element  no-invalid-interactive\n  57:39  error  Interaction added to non-interactive element  no-invalid-interactive\n  60:38  error  Interaction added to non-interactive element  no-invalid-interactive\n  72:36  error  Interaction added to non-interactive element  no-invalid-interactive\n  74:44  error  Interaction added to non-interactive element  no-invalid-interactive\n  84:17  error  Interaction added to non-interactive element  no-invalid-interactive\n  105:11  error  Interaction added to non-interactive element  no-invalid-interactive\n  1:20  error  you must use double quotes in templates  quotes\n  4:17  error  you must use double quotes in templates  quotes\n  6:40  error  you must use double quotes in templates  quotes\n  7:52  error  you must use double quotes in templates  quotes\n  8:54  error  you must use double quotes in templates  quotes\n  9:58  error  you must use double quotes in templates  quotes\n  11:23  error  you must use double quotes in templates  quotes\n  28:36  error  you must use double quotes in templates  quotes\n  30:45  error  you must use double quotes in templates  quotes\n  31:33  error  you must use double quotes in templates  quotes\n  35:45  error  you must use double quotes in templates  quotes\n  36:33  error  you must use double quotes in templates  quotes\n  44:30  error  you must use double quotes in templates  quotes\n  48:51  error  you must use double quotes in templates  quotes\n  48:65  error  you must use double quotes in templates  quotes\n  52:52  error  you must use double quotes in templates  quotes\n  52:66  error  you must use double quotes in templates  quotes\n  72:77  error  you must use double quotes in templates  quotes\n  72:144  error  you must use double quotes in templates  quotes\n  74:53  error  you must use double quotes in templates  quotes\n  75:33  error  you must use double quotes in templates  quotes\n  85:23  error  you must use double quotes in templates  quotes\n  85:117  error  you must use double quotes in templates  quotes\n  95:93  error  you must use double quotes in templates  quotes\n  106:30  error  you must use double quotes in templates  quotes\n  107:20  error  you must use double quotes in templates  quotes\n  85:14  error  Self-closing a void element is redundant  self-closing-void-elements\n  95:22  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });

  QUnit.test('vidya-frontend/templates/components/socials/group-page-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/socials/group-page-card.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/socials/group-page-card.hbs\n  6:6  error  Incorrect indentation for `<img>` beginning at L6:C6. Expected `<img>` to be at an indentation of 4 but was found at 6.  block-indentation\n  2:32  error  you must use double quotes in templates  quotes\n  6:88  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/socials/group-post-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/socials/group-post-card.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/socials/group-post-card.hbs\n  112:6  error  Incorrect indentation for `<div>` beginning at L112:C6. Expected `<div>` to be at an indentation of 2 but was found at 6.  block-indentation\n  25:9  error  Incorrect indentation for `{{! {{#if (eq item.userinfo.userId currentid)}} }}` beginning at L25:C9. Expected `{{! {{#if (eq item.userinfo.userId currentid)}} }}` to be at an indentation of 8 but was found at 9.  block-indentation\n  26:9  error  Incorrect indentation for `{{#if}}` beginning at L26:C9. Expected `{{#if}}` to be at an indentation of 8 but was found at 9.  block-indentation\n  6:9  error  Incorrect indentation for `{{! {{#if (eq item.previous_state \'group\')}}\n              <img src={{convert-url item.group_img.web_url}} onerror="this.src=\'no_image.jpg\'" class="social-profile" {{action goToGroups item.channel_id}}> }}` beginning at L6:C9. Expected `{{! {{#if (eq item.previous_state \'group\')}}\n              <img src={{convert-url item.group_img.web_url}} onerror="this.src=\'no_image.jpg\'" class="social-profile" {{action goToGroups item.channel_id}}> }}` to be at an indentation of 10 but was found at 9.  block-indentation\n  18:16  error  Incorrect indentation for `<p>` beginning at L18:C16. Expected `<p>` to be at an indentation of 14 but was found at 16.  block-indentation\n  19:16  error  Incorrect indentation for `<p>` beginning at L19:C16. Expected `<p>` to be at an indentation of 14 but was found at 16.  block-indentation\n  20:16  error  Incorrect indentation for `<p>` beginning at L20:C16. Expected `<p>` to be at an indentation of 14 but was found at 16.  block-indentation\n  50:15  error  Incorrect indentation for `if` beginning at L26:C9. Expected `{{/if}}` ending at L50:C15 to be at an indentation of 9 but was found at 8.  block-indentation\n  27:10  error  Incorrect indentation for `<div>` beginning at L27:C10. Expected `<div>` to be at an indentation of 11 but was found at 10.  block-indentation\n  64:10  error  Incorrect indentation for `{{#if}}` beginning at L64:C10. Expected `{{#if}}` to be at an indentation of 8 but was found at 10.  block-indentation\n  73:6  error  Incorrect indentation for `{{#if}}` beginning at L73:C6. Expected `{{#if}}` to be at an indentation of 8 but was found at 6.  block-indentation\n  63:16  error  Incorrect indentation for `div` beginning at L53:C8. Expected `</div>` ending at L63:C16 to be at an indentation of 8 but was found at 10.  block-indentation\n  54:12  error  Incorrect indentation for `{{#if}}` beginning at L54:C12. Expected `{{#if}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  55:15  error  Incorrect indentation for `<p>` beginning at L55:C15. Expected `<p>` to be at an indentation of 14 but was found at 15.  block-indentation\n  59:12  error  Incorrect indentation for `<p>` beginning at L59:C12. Expected `<p>` to be at an indentation of 14 but was found at 12.  block-indentation\n  57:16  error  Incorrect indentation for `p` beginning at L55:C15. Expected `</p>` ending at L57:C16 to be at an indentation of 15 but was found at 12.  block-indentation\n  56:14  error  Incorrect indentation for `{{linkify}}` beginning at L56:C14. Expected `{{linkify}}` to be at an indentation of 17 but was found at 14.  block-indentation\n  65:13  error  Incorrect indentation for `<p>` beginning at L65:C13. Expected `<p>` to be at an indentation of 12 but was found at 13.  block-indentation\n  68:12  error  Incorrect indentation for `<p>` beginning at L68:C12. Expected `<p>` to be at an indentation of 14 but was found at 12.  block-indentation\n  84:15  error  Incorrect indentation for `<img>` beginning at L84:C15. Expected `<img>` to be at an indentation of 14 but was found at 15.  block-indentation\n  125:10  error  Incorrect indentation for `div` beginning at L112:C6. Expected `</div>` ending at L125:C10 to be at an indentation of 6 but was found at 4.  block-indentation\n  113:6  error  Incorrect indentation for `<div>` beginning at L113:C6. Expected `<div>` to be at an indentation of 8 but was found at 6.  block-indentation\n  116:9  error  Incorrect indentation for `<div>` beginning at L116:C9. Expected `<div>` to be at an indentation of 10 but was found at 9.  block-indentation\n  122:14  error  Incorrect indentation for `div` beginning at L116:C9. Expected `</div>` ending at L122:C14 to be at an indentation of 9 but was found at 8.  block-indentation\n  9:12  error  img tags must have an alt attribute  img-alt-attributes\n  11:12  error  img tags must have an alt attribute  img-alt-attributes\n  13:12  error  img tags must have an alt attribute  img-alt-attributes\n  93:12  error  img tags must have an alt attribute  img-alt-attributes\n  103:16  error  img tags must have an alt attribute  img-alt-attributes\n  93:141  error  Duplicate attribute \'onerror\' found in the Element.  no-duplicate-attributes\n  9:127  error  Interaction added to non-interactive element  no-invalid-interactive\n  11:113  error  Interaction added to non-interactive element  no-invalid-interactive\n  13:59  error  Interaction added to non-interactive element  no-invalid-interactive\n  18:47  error  Interaction added to non-interactive element  no-invalid-interactive\n  20:47  error  Interaction added to non-interactive element  no-invalid-interactive\n  53:22  error  Interaction added to non-interactive element  no-invalid-interactive\n  65:39  error  Interaction added to non-interactive element  no-invalid-interactive\n  68:38  error  Interaction added to non-interactive element  no-invalid-interactive\n  81:41  error  Interaction added to non-interactive element  no-invalid-interactive\n  84:93  error  Interaction added to non-interactive element  no-invalid-interactive\n  92:15  error  Interaction added to non-interactive element  no-invalid-interactive\n  114:11  error  Interaction added to non-interactive element  no-invalid-interactive\n  1:20  error  you must use double quotes in templates  quotes\n  4:17  error  you must use double quotes in templates  quotes\n  8:50  error  you must use double quotes in templates  quotes\n  9:58  error  you must use double quotes in templates  quotes\n  13:23  error  you must use double quotes in templates  quotes\n  19:79  error  you must use double quotes in templates  quotes\n  36:36  error  you must use double quotes in templates  quotes\n  38:45  error  you must use double quotes in templates  quotes\n  39:33  error  you must use double quotes in templates  quotes\n  43:45  error  you must use double quotes in templates  quotes\n  44:33  error  you must use double quotes in templates  quotes\n  52:28  error  you must use double quotes in templates  quotes\n  56:52  error  you must use double quotes in templates  quotes\n  56:66  error  you must use double quotes in templates  quotes\n  60:52  error  you must use double quotes in templates  quotes\n  60:66  error  you must use double quotes in templates  quotes\n  81:50  error  you must use double quotes in templates  quotes\n  82:29  error  you must use double quotes in templates  quotes\n  84:39  error  you must use double quotes in templates  quotes\n  84:136  error  you must use double quotes in templates  quotes\n  93:21  error  you must use double quotes in templates  quotes\n  93:115  error  you must use double quotes in templates  quotes\n  103:87  error  you must use double quotes in templates  quotes\n  115:30  error  you must use double quotes in templates  quotes\n  116:20  error  you must use double quotes in templates  quotes\n  93:12  error  Self-closing a void element is redundant  self-closing-void-elements\n  103:16  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });

  QUnit.test('vidya-frontend/templates/components/socials/message-box.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/socials/message-box.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/socials/message-box.hbs\n  4:8  error  Incorrect indentation for `{{socials/message-card}}` beginning at L4:C8. Expected `{{socials/message-card}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  1:20  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/socials/message-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/socials/message-card.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/socials/message-card.hbs\n  17:10  error  Incorrect indentation for `{{#paper-button}}` beginning at L17:C10. Expected `{{#paper-button}}` to be at an indentation of 12 but was found at 10.  block-indentation\n  5:8  error  img tags must have an alt attribute  img-alt-attributes\n  7:8  error  img tags must have an alt attribute  img-alt-attributes\n  4:46  error  you must use double quotes in templates  quotes\n  21:33  error  you must use double quotes in templates  quotes\n  22:50  error  you must use double quotes in templates  quotes\n  24:49  error  you must use double quotes in templates  quotes\n  24:62  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/socials/message-container.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/socials/message-container.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/socials/message-container.hbs\n  5:112  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/socials/share-post-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/socials/share-post-card.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/socials/share-post-card.hbs\n  2:4  error  Incorrect indentation for `{{#if}}` beginning at L2:C4. Expected `{{#if}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  66:5  error  Incorrect indentation for `<div>` beginning at L66:C5. Expected `<div>` to be at an indentation of 2 but was found at 5.  block-indentation\n  94:4  error  Incorrect indentation for `{{#if}}` beginning at L94:C4. Expected `{{#if}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  159:4  error  Incorrect indentation for `<div>` beginning at L159:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  3:4  error  Incorrect indentation for `<div>` beginning at L3:C4. Expected `<div>` to be at an indentation of 6 but was found at 4.  block-indentation\n  41:12  error  Incorrect indentation for `div` beginning at L3:C4. Expected `</div>` ending at L41:C12 to be at an indentation of 4 but was found at 6.  block-indentation\n  17:8  error  Incorrect indentation for `{{#if}}` beginning at L17:C8. Expected `{{#if}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  16:13  error  Incorrect indentation for `div` beginning at L4:C6. Expected `</div>` ending at L16:C13 to be at an indentation of 6 but was found at 7.  block-indentation\n  46:15  error  Incorrect indentation for `<p>` beginning at L46:C15. Expected `<p>` to be at an indentation of 14 but was found at 15.  block-indentation\n  50:12  error  Incorrect indentation for `<p>` beginning at L50:C12. Expected `<p>` to be at an indentation of 14 but was found at 12.  block-indentation\n  48:16  error  Incorrect indentation for `p` beginning at L46:C15. Expected `</p>` ending at L48:C16 to be at an indentation of 15 but was found at 12.  block-indentation\n  47:14  error  Incorrect indentation for `{{linkify}}` beginning at L47:C14. Expected `{{linkify}}` to be at an indentation of 17 but was found at 14.  block-indentation\n  56:13  error  Incorrect indentation for `<p>` beginning at L56:C13. Expected `<p>` to be at an indentation of 12 but was found at 13.  block-indentation\n  59:12  error  Incorrect indentation for `<p>` beginning at L59:C12. Expected `<p>` to be at an indentation of 14 but was found at 12.  block-indentation\n  67:6  error  Incorrect indentation for `<div>` beginning at L67:C6. Expected `<div>` to be at an indentation of 7 but was found at 6.  block-indentation\n  75:10  error  Incorrect indentation for `<div>` beginning at L75:C10. Expected `<div>` to be at an indentation of 8 but was found at 10.  block-indentation\n  70:10  error  Incorrect indentation for inverse block of `{{#if}}` beginning at L68:C8. Expected `{{else}}` starting at L70:C10 to be at an indentation of 8 but was found at 10.  block-indentation\n  74:17  error  Incorrect indentation for `if` beginning at L68:C8. Expected `{{/if}}` ending at L74:C17 to be at an indentation of 8 but was found at 10.  block-indentation\n  69:14  error  Incorrect indentation for `<img>` beginning at L69:C14. Expected `<img>` to be at an indentation of 10 but was found at 14.  block-indentation\n  77:13  error  Incorrect indentation for `{{#if}}` beginning at L77:C13. Expected `{{#if}}` to be at an indentation of 14 but was found at 13.  block-indentation\n  78:14  error  Incorrect indentation for `<p>` beginning at L78:C14. Expected `<p>` to be at an indentation of 15 but was found at 14.  block-indentation\n  80:13  error  Incorrect indentation for `<div>` beginning at L80:C13. Expected `<div>` to be at an indentation of 15 but was found at 13.  block-indentation\n  86:14  error  Incorrect indentation for `<p>` beginning at L86:C14. Expected `<p>` to be at an indentation of 15 but was found at 14.  block-indentation\n  81:17  error  Incorrect indentation for `<p>` beginning at L81:C17. Expected `<p>` to be at an indentation of 15 but was found at 17.  block-indentation\n  82:17  error  Incorrect indentation for `<p>` beginning at L82:C17. Expected `<p>` to be at an indentation of 15 but was found at 17.  block-indentation\n  83:17  error  Incorrect indentation for `<p>` beginning at L83:C17. Expected `<p>` to be at an indentation of 15 but was found at 17.  block-indentation\n  97:8  error  Incorrect indentation for `<div>` beginning at L97:C8. Expected `<div>` to be at an indentation of 10 but was found at 8.  block-indentation\n  107:16  error  Incorrect indentation for `div` beginning at L97:C8. Expected `</div>` ending at L107:C16 to be at an indentation of 8 but was found at 10.  block-indentation\n  98:12  error  Incorrect indentation for `{{#if}}` beginning at L98:C12. Expected `{{#if}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  99:15  error  Incorrect indentation for `<p>` beginning at L99:C15. Expected `<p>` to be at an indentation of 14 but was found at 15.  block-indentation\n  103:12  error  Incorrect indentation for `<p>` beginning at L103:C12. Expected `<p>` to be at an indentation of 14 but was found at 12.  block-indentation\n  101:16  error  Incorrect indentation for `p` beginning at L99:C15. Expected `</p>` ending at L101:C16 to be at an indentation of 15 but was found at 12.  block-indentation\n  100:14  error  Incorrect indentation for `{{linkify}}` beginning at L100:C14. Expected `{{linkify}}` to be at an indentation of 17 but was found at 14.  block-indentation\n  109:13  error  Incorrect indentation for `<p>` beginning at L109:C13. Expected `<p>` to be at an indentation of 12 but was found at 13.  block-indentation\n  112:12  error  Incorrect indentation for `<p>` beginning at L112:C12. Expected `<p>` to be at an indentation of 14 but was found at 12.  block-indentation\n  145:14  error  Incorrect indentation for inverse block of `{{#if}}` beginning at L143:C16. Expected `{{else}}` starting at L145:C14 to be at an indentation of 16 but was found at 14.  block-indentation\n  163:9  error  Incorrect indentation for `<div>` beginning at L163:C9. Expected `<div>` to be at an indentation of 10 but was found at 9.  block-indentation\n  170:14  error  Incorrect indentation for `div` beginning at L163:C9. Expected `</div>` ending at L170:C14 to be at an indentation of 9 but was found at 8.  block-indentation\n  165:8  error  Incorrect indentation for `{{#if}}` beginning at L165:C8. Expected `{{#if}}` to be at an indentation of 11 but was found at 8.  block-indentation\n  7:12  error  img tags must have an alt attribute  img-alt-attributes\n  10:10  error  img tags must have an alt attribute  img-alt-attributes\n  69:14  error  img tags must have an alt attribute  img-alt-attributes\n  71:12  error  img tags must have an alt attribute  img-alt-attributes\n  73:12  error  img tags must have an alt attribute  img-alt-attributes\n  119:12  error  img tags must have an alt attribute  img-alt-attributes\n  144:18  error  img tags must have an alt attribute  img-alt-attributes\n  56:39  error  Duplicate attribute \'class\' found in the Element.  no-duplicate-attributes\n  59:38  error  Duplicate attribute \'class\' found in the Element.  no-duplicate-attributes\n  7:122  error  Interaction added to non-interactive element  no-invalid-interactive\n  13:41  error  Interaction added to non-interactive element  no-invalid-interactive\n  44:24  error  Interaction added to non-interactive element  no-invalid-interactive\n  56:62  error  Interaction added to non-interactive element  no-invalid-interactive\n  59:61  error  Interaction added to non-interactive element  no-invalid-interactive\n  69:111  error  Interaction added to non-interactive element  no-invalid-interactive\n  81:48  error  Interaction added to non-interactive element  no-invalid-interactive\n  83:48  error  Interaction added to non-interactive element  no-invalid-interactive\n  97:22  error  Interaction added to non-interactive element  no-invalid-interactive\n  109:16  error  Interaction added to non-interactive element  no-invalid-interactive\n  112:15  error  Interaction added to non-interactive element  no-invalid-interactive\n  119:75  error  Interaction added to non-interactive element  no-invalid-interactive\n  126:47  error  Interaction added to non-interactive element  no-invalid-interactive\n  129:21  error  Interaction added to non-interactive element  no-invalid-interactive\n  161:11  error  Interaction added to non-interactive element  no-invalid-interactive\n  1:20  error  you must use double quotes in templates  quotes\n  6:55  error  you must use double quotes in templates  quotes\n  10:21  error  you must use double quotes in templates  quotes\n  26:36  error  you must use double quotes in templates  quotes\n  28:45  error  you must use double quotes in templates  quotes\n  29:33  error  you must use double quotes in templates  quotes\n  33:45  error  you must use double quotes in templates  quotes\n  34:33  error  you must use double quotes in templates  quotes\n  43:30  error  you must use double quotes in templates  quotes\n  47:53  error  you must use double quotes in templates  quotes\n  47:67  error  you must use double quotes in templates  quotes\n  51:54  error  you must use double quotes in templates  quotes\n  51:68  error  you must use double quotes in templates  quotes\n  68:38  error  you must use double quotes in templates  quotes\n  70:54  error  you must use double quotes in templates  quotes\n  73:23  error  you must use double quotes in templates  quotes\n  82:80  error  you must use double quotes in templates  quotes\n  96:30  error  you must use double quotes in templates  quotes\n  100:51  error  you must use double quotes in templates  quotes\n  100:65  error  you must use double quotes in templates  quotes\n  104:51  error  you must use double quotes in templates  quotes\n  104:65  error  you must use double quotes in templates  quotes\n  119:21  error  you must use double quotes in templates  quotes\n  119:152  error  you must use double quotes in templates  quotes\n  126:56  error  you must use double quotes in templates  quotes\n  127:31  error  you must use double quotes in templates  quotes\n  129:62  error  you must use double quotes in templates  quotes\n  129:122  error  you must use double quotes in templates  quotes\n  142:48  error  you must use double quotes in templates  quotes\n  144:89  error  you must use double quotes in templates  quotes\n  162:30  error  you must use double quotes in templates  quotes\n  163:20  error  you must use double quotes in templates  quotes\n  119:12  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });

  QUnit.test('vidya-frontend/templates/components/socials/social-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/socials/social-card.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/socials/social-card.hbs\n  2:0  error  Incorrect indentation for `<div>` beginning at L2:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  16:8  error  Incorrect indentation for `div` beginning at L2:C0. Expected `</div>` ending at L16:C8 to be at an indentation of 0 but was found at 2.  block-indentation\n  4:4  error  Incorrect indentation for `<div>` beginning at L4:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  5:4  error  Incorrect indentation for `{{#if}}` beginning at L5:C4. Expected `{{#if}}` to be at an indentation of 6 but was found at 4.  block-indentation\n  12:4  error  Incorrect indentation for `{{! <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="enable-background:new -580 439 577.9 194;" xml:space="preserve">\n      <circle cx="50" cy="50" r="30" />\n    </svg> }}` beginning at L12:C4. Expected `{{! <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="enable-background:new -580 439 577.9 194;" xml:space="preserve">\n      <circle cx="50" cy="50" r="30" />\n    </svg> }}` to be at an indentation of 6 but was found at 4.  block-indentation\n  26:6  error  Incorrect indentation for `div` beginning at L17:C2. Expected `</div>` ending at L26:C6 to be at an indentation of 2 but was found at 0.  block-indentation\n  19:6  error  Incorrect indentation for `<div>` beginning at L19:C6. Expected `<div>` to be at an indentation of 4 but was found at 6.  block-indentation\n  20:7  error  Incorrect indentation for `{{#if}}` beginning at L20:C7. Expected `{{#if}}` to be at an indentation of 8 but was found at 7.  block-indentation\n  22:8  error  Incorrect indentation for inverse block of `{{#if}}` beginning at L20:C7. Expected `{{else}}` starting at L22:C8 to be at an indentation of 7 but was found at 8.  block-indentation\n  24:15  error  Incorrect indentation for `if` beginning at L20:C7. Expected `{{/if}}` ending at L24:C15 to be at an indentation of 7 but was found at 8.  block-indentation\n  21:8  error  Incorrect indentation for `<div>` beginning at L21:C8. Expected `<div>` to be at an indentation of 9 but was found at 8.  block-indentation\n  23:8  error  Incorrect indentation for `<div>` beginning at L23:C8. Expected `<div>` to be at an indentation of 9 but was found at 8.  block-indentation\n  21:36  error  elements cannot have inline styles  no-inline-styles\n  23:36  error  elements cannot have inline styles  no-inline-styles\n  4:9  error  Interaction added to non-interactive element  no-invalid-interactive\n  17:7  error  Interaction added to non-interactive element  no-invalid-interactive\n  5:35  error  you must use double quotes in templates  quotes\n  17:38  error  you must use double quotes in templates  quotes\n  6:6  error  Self-closing a void element is redundant  self-closing-void-elements\n  9:6  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });

  QUnit.test('vidya-frontend/templates/components/socials/social-detail-view.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/socials/social-detail-view.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/socials/social-detail-view.hbs\n  67:14  error  Incorrect indentation for `<p>` beginning at L67:C14. Expected `<p>` to be at an indentation of 12 but was found at 14.  block-indentation\n  72:15  error  Incorrect indentation for `{{linkify}}` beginning at L72:C15. Expected `{{linkify}}` to be at an indentation of 14 but was found at 15.  block-indentation\n  107:14  error  Incorrect indentation for `{{#each}}` beginning at L107:C14. Expected `{{#each}}` to be at an indentation of 12 but was found at 14.  block-indentation\n  145:19  error  Incorrect indentation for `each` beginning at L107:C14. Expected `{{/each}}` ending at L145:C19 to be at an indentation of 14 but was found at 10.  block-indentation\n  144:20  error  Incorrect indentation for `if` beginning at L108:C16. Expected `{{/if}}` ending at L144:C20 to be at an indentation of 16 but was found at 13.  block-indentation\n  120:16  error  Incorrect indentation for inverse block of `{{#if}}` beginning at L110:C18. Expected `{{else}}` starting at L120:C16 to be at an indentation of 18 but was found at 16.  block-indentation\n  128:23  error  Incorrect indentation for `if` beginning at L110:C18. Expected `{{/if}}` ending at L128:C23 to be at an indentation of 18 but was found at 16.  block-indentation\n  111:18  error  Incorrect indentation for `<div>` beginning at L111:C18. Expected `<div>` to be at an indentation of 20 but was found at 18.  block-indentation\n  119:22  error  Incorrect indentation for `div` beginning at L111:C18. Expected `</div>` ending at L119:C22 to be at an indentation of 18 but was found at 16.  block-indentation\n  113:18  error  Incorrect indentation for `<img>` beginning at L113:C18. Expected `<img>` to be at an indentation of 20 but was found at 18.  block-indentation\n  114:18  error  Incorrect indentation for `<div>` beginning at L114:C18. Expected `<div>` to be at an indentation of 20 but was found at 18.  block-indentation\n  115:18  error  Incorrect indentation for `<div>` beginning at L115:C18. Expected `<div>` to be at an indentation of 20 but was found at 18.  block-indentation\n  143:24  error  Incorrect indentation for `if` beginning at L130:C18. Expected `{{/if}}` ending at L143:C24 to be at an indentation of 18 but was found at 17.  block-indentation\n  131:22  error  Incorrect indentation for `<img>` beginning at L131:C22. Expected `<img>` to be at an indentation of 20 but was found at 22.  block-indentation\n  178:2  error  Incorrect indentation for `{{#paper-dialog-content}}` beginning at L178:C2. Expected `{{#paper-dialog-content}}` to be at an indentation of 4 but was found at 2.  block-indentation\n  179:0  error  Incorrect indentation for `      Download\n` beginning at L179:C0. Expected `      Download\n` to be at an indentation of 4 but was found at 6.  block-indentation\n  8:14  error  img tags must have an alt attribute  img-alt-attributes\n  10:14  error  img tags must have an alt attribute  img-alt-attributes\n  13:12  error  img tags must have an alt attribute  img-alt-attributes\n  34:10  error  img tags must have an alt attribute  img-alt-attributes\n  36:10  error  img tags must have an alt attribute  img-alt-attributes\n  38:10  error  img tags must have an alt attribute  img-alt-attributes\n  40:10  error  img tags must have an alt attribute  img-alt-attributes\n  122:18  error  img tags must have an alt attribute  img-alt-attributes\n  131:22  error  img tags must have an alt attribute  img-alt-attributes\n  75:10  error  HTML comment detected  no-html-comments\n  8:134  error  Interaction added to non-interactive element  no-invalid-interactive\n  17:45  error  Interaction added to non-interactive element  no-invalid-interactive\n  36:123  error  Interaction added to non-interactive element  no-invalid-interactive\n  67:56  error  Interaction added to non-interactive element  no-invalid-interactive\n  113:39  error  Interaction added to non-interactive element  no-invalid-interactive\n  115:50  error  Interaction added to non-interactive element  no-invalid-interactive\n  122:49  error  Interaction added to non-interactive element  no-invalid-interactive\n  122:103  error  Interaction added to non-interactive element  no-invalid-interactive\n  131:53  error  Interaction added to non-interactive element  no-invalid-interactive\n  131:107  error  Interaction added to non-interactive element  no-invalid-interactive\n  133:41  error  Interaction added to non-interactive element  no-invalid-interactive\n  153:89  error  Interaction added to non-interactive element  no-invalid-interactive\n  7:57  error  you must use double quotes in templates  quotes\n  8:65  error  you must use double quotes in templates  quotes\n  13:23  error  you must use double quotes in templates  quotes\n  33:38  error  you must use double quotes in templates  quotes\n  35:52  error  you must use double quotes in templates  quotes\n  40:21  error  you must use double quotes in templates  quotes\n  43:40  error  you must use double quotes in templates  quotes\n  46:88  error  you must use double quotes in templates  quotes\n  58:34  error  you must use double quotes in templates  quotes\n  60:34  error  you must use double quotes in templates  quotes\n  72:53  error  you must use double quotes in templates  quotes\n  113:125  error  you must use double quotes in templates  quotes\n  113:48  error  you must use double quotes in templates  quotes\n  115:59  error  you must use double quotes in templates  quotes\n  116:33  error  you must use double quotes in templates  quotes\n  122:142  error  you must use double quotes in templates  quotes\n  133:127  error  you must use double quotes in templates  quotes\n  133:50  error  you must use double quotes in templates  quotes\n  139:43  error  you must use double quotes in templates  quotes\n  168:77  error  you must use double quotes in templates  quotes\n  122:18  error  Self-closing a void element is redundant  self-closing-void-elements\n  131:22  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });

  QUnit.test('vidya-frontend/templates/components/socials/social-list-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/socials/social-list-card.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/socials/social-list-card.hbs\n  8:12  error  Incorrect indentation for `<img>` beginning at L8:C12. Expected `<img>` to be at an indentation of 14 but was found at 12.  block-indentation\n  9:12  error  Incorrect indentation for `{{! {{else}}\n            <img src={{convert-url  item.shareuserinfo.user_url \'profile\'}} onerror="this.src=\'no_image.jpg\'" class="social-profile"> }}` beginning at L9:C12. Expected `{{! {{else}}\n            <img src={{convert-url  item.shareuserinfo.user_url \'profile\'}} onerror="this.src=\'no_image.jpg\'" class="social-profile"> }}` to be at an indentation of 14 but was found at 12.  block-indentation\n  57:12  error  Incorrect indentation for `<img>` beginning at L57:C12. Expected `<img>` to be at an indentation of 10 but was found at 12.  block-indentation\n  207:15  error  Incorrect indentation for `<p>` beginning at L207:C15. Expected `<p>` to be at an indentation of 14 but was found at 15.  block-indentation\n  211:12  error  Incorrect indentation for `<p>` beginning at L211:C12. Expected `<p>` to be at an indentation of 14 but was found at 12.  block-indentation\n  209:16  error  Incorrect indentation for `p` beginning at L207:C15. Expected `</p>` ending at L209:C16 to be at an indentation of 15 but was found at 12.  block-indentation\n  208:14  error  Incorrect indentation for `{{linkify}}` beginning at L208:C14. Expected `{{linkify}}` to be at an indentation of 17 but was found at 14.  block-indentation\n  217:13  error  Incorrect indentation for `<p>` beginning at L217:C13. Expected `<p>` to be at an indentation of 12 but was found at 13.  block-indentation\n  220:12  error  Incorrect indentation for `<p>` beginning at L220:C12. Expected `<p>` to be at an indentation of 14 but was found at 12.  block-indentation\n  256:20  error  Incorrect indentation for `<img>` beginning at L256:C20. Expected `<img>` to be at an indentation of 16 but was found at 20.  block-indentation\n  257:20  error  Incorrect indentation for `{{! <div class="layout-column news-relative">\n                    <div class="video-playbtn-chat" {{action \'fullScreen\' image.file_name image.web_url}}>\n                      {{paper-icon \'play_circle_outline\' size=40 }}\n                    </div>\n                    </div> }}` beginning at L257:C20. Expected `{{! <div class="layout-column news-relative">\n                    <div class="video-playbtn-chat" {{action \'fullScreen\' image.file_name image.web_url}}>\n                      {{paper-icon \'play_circle_outline\' size=40 }}\n                    </div>\n                    </div> }}` to be at an indentation of 16 but was found at 20.  block-indentation\n  274:6  error  Incorrect indentation for `<p>` beginning at L274:C6. Expected `<p>` to be at an indentation of 8 but was found at 6.  block-indentation\n  8:12  error  img tags must have an alt attribute  img-alt-attributes\n  13:12  error  img tags must have an alt attribute  img-alt-attributes\n  55:10  error  img tags must have an alt attribute  img-alt-attributes\n  57:12  error  img tags must have an alt attribute  img-alt-attributes\n  59:10  error  img tags must have an alt attribute  img-alt-attributes\n  61:10  error  img tags must have an alt attribute  img-alt-attributes\n  118:12  error  img tags must have an alt attribute  img-alt-attributes\n  142:18  error  img tags must have an alt attribute  img-alt-attributes\n  183:14  error  img tags must have an alt attribute  img-alt-attributes\n  193:18  error  img tags must have an alt attribute  img-alt-attributes\n  246:14  error  img tags must have an alt attribute  img-alt-attributes\n  253:16  error  img tags must have an alt attribute  img-alt-attributes\n  51:4  error  HTML comment detected  no-html-comments\n  107:4  error  HTML comment detected  no-html-comments\n  153:6  error  HTML comment detected  no-html-comments\n  200:6  error  HTML comment detected  no-html-comments\n  8:132  error  Interaction added to non-interactive element  no-invalid-interactive\n  13:59  error  Interaction added to non-interactive element  no-invalid-interactive\n  46:30  error  Interaction added to non-interactive element  no-invalid-interactive\n  55:103  error  Interaction added to non-interactive element  no-invalid-interactive\n  57:127  error  Interaction added to non-interactive element  no-invalid-interactive\n  61:57  error  Interaction added to non-interactive element  no-invalid-interactive\n  65:43  error  Interaction added to non-interactive element  no-invalid-interactive\n  70:45  error  Interaction added to non-interactive element  no-invalid-interactive\n  111:32  error  Interaction added to non-interactive element  no-invalid-interactive\n  118:75  error  Interaction added to non-interactive element  no-invalid-interactive\n  125:43  error  Interaction added to non-interactive element  no-invalid-interactive\n  129:34  error  Interaction added to non-interactive element  no-invalid-interactive\n  157:24  error  Interaction added to non-interactive element  no-invalid-interactive\n  170:43  error  Interaction added to non-interactive element  no-invalid-interactive\n  174:92  error  Interaction added to non-interactive element  no-invalid-interactive\n  182:17  error  Interaction added to non-interactive element  no-invalid-interactive\n  205:24  error  Interaction added to non-interactive element  no-invalid-interactive\n  217:39  error  Interaction added to non-interactive element  no-invalid-interactive\n  220:38  error  Interaction added to non-interactive element  no-invalid-interactive\n  233:30  error  Interaction added to non-interactive element  no-invalid-interactive\n  237:34  error  Interaction added to non-interactive element  no-invalid-interactive\n  245:17  error  Interaction added to non-interactive element  no-invalid-interactive\n  256:41  error  Interaction added to non-interactive element  no-invalid-interactive\n  274:9  error  Interaction added to non-interactive element  no-invalid-interactive\n  2:22  error  you must use double quotes in templates  quotes\n  7:57  error  you must use double quotes in templates  quotes\n  8:63  error  you must use double quotes in templates  quotes\n  13:23  error  you must use double quotes in templates  quotes\n  29:36  error  you must use double quotes in templates  quotes\n  31:45  error  you must use double quotes in templates  quotes\n  32:33  error  you must use double quotes in templates  quotes\n  36:45  error  you must use double quotes in templates  quotes\n  37:33  error  you must use double quotes in templates  quotes\n  52:15  error  you must use double quotes in templates  quotes\n  54:38  error  you must use double quotes in templates  quotes\n  56:52  error  you must use double quotes in templates  quotes\n  57:58  error  you must use double quotes in templates  quotes\n  59:52  error  you must use double quotes in templates  quotes\n  61:21  error  you must use double quotes in templates  quotes\n  64:40  error  you must use double quotes in templates  quotes\n  89:36  error  you must use double quotes in templates  quotes\n  91:45  error  you must use double quotes in templates  quotes\n  92:33  error  you must use double quotes in templates  quotes\n  97:45  error  you must use double quotes in templates  quotes\n  98:33  error  you must use double quotes in templates  quotes\n  110:30  error  you must use double quotes in templates  quotes\n  118:21  error  you must use double quotes in templates  quotes\n  118:152  error  you must use double quotes in templates  quotes\n  125:52  error  you must use double quotes in templates  quotes\n  126:31  error  you must use double quotes in templates  quotes\n  129:75  error  you must use double quotes in templates  quotes\n  129:135  error  you must use double quotes in templates  quotes\n  142:89  error  you must use double quotes in templates  quotes\n  156:30  error  you must use double quotes in templates  quotes\n  170:52  error  you must use double quotes in templates  quotes\n  171:31  error  you must use double quotes in templates  quotes\n  174:38  error  you must use double quotes in templates  quotes\n  174:135  error  you must use double quotes in templates  quotes\n  183:95  error  you must use double quotes in templates  quotes\n  193:89  error  you must use double quotes in templates  quotes\n  203:30  error  you must use double quotes in templates  quotes\n  208:52  error  you must use double quotes in templates  quotes\n  208:66  error  you must use double quotes in templates  quotes\n  212:52  error  you must use double quotes in templates  quotes\n  212:66  error  you must use double quotes in templates  quotes\n  228:23  error  you must use double quotes in templates  quotes\n  233:39  error  you must use double quotes in templates  quotes\n  234:31  error  you must use double quotes in templates  quotes\n  237:75  error  you must use double quotes in templates  quotes\n  237:135  error  you must use double quotes in templates  quotes\n  246:23  error  you must use double quotes in templates  quotes\n  246:117  error  you must use double quotes in templates  quotes\n  253:87  error  you must use double quotes in templates  quotes\n  256:99  error  you must use double quotes in templates  quotes\n  256:149  error  you must use double quotes in templates  quotes\n  256:50  error  you must use double quotes in templates  quotes\n  275:30  error  you must use double quotes in templates  quotes\n  276:21  error  you must use double quotes in templates  quotes\n  118:12  error  Self-closing a void element is redundant  self-closing-void-elements\n  183:14  error  Self-closing a void element is redundant  self-closing-void-elements\n  193:18  error  Self-closing a void element is redundant  self-closing-void-elements\n  246:14  error  Self-closing a void element is redundant  self-closing-void-elements\n  253:16  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });

  QUnit.test('vidya-frontend/templates/components/spinner-circle.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'vidya-frontend/templates/components/spinner-circle.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('vidya-frontend/templates/components/toolbar-noti.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/toolbar-noti.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/toolbar-noti.hbs\n  6:2  error  Incorrect indentation for `<div>` beginning at L6:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n  7:2  error  Incorrect indentation for `{{count.length}}` beginning at L7:C2. Expected `{{count.length}}` to be at an indentation of 4 but was found at 2.  block-indentation\n  1:22  error  Interaction added to non-interactive element  no-invalid-interactive\n');
  });

  QUnit.test('vidya-frontend/templates/components/under-development-page.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/under-development-page.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/under-development-page.hbs\n  14:0  error  HTML comment detected  no-html-comments\n');
  });

  QUnit.test('vidya-frontend/templates/components/user/chat-box.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/user/chat-box.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/user/chat-box.hbs\n  3:6  error  Incorrect indentation for `{{user/chat-card}}` beginning at L3:C6. Expected `{{user/chat-card}}` to be at an indentation of 4 but was found at 6.  block-indentation\n  1:20  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/user/chat-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/user/chat-card.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/user/chat-card.hbs\n  13:14  error  Incorrect indentation for `{{#photo-swipe}}` beginning at L13:C14. Expected `{{#photo-swipe}}` to be at an indentation of 16 but was found at 14.  block-indentation\n  29:16  error  Incorrect indentation for inverse block of `{{#if}}` beginning at L19:C14. Expected `{{else}}` starting at L29:C16 to be at an indentation of 14 but was found at 16.  block-indentation\n  23:17  error  Incorrect indentation for `<img>` beginning at L23:C17. Expected `<img>` to be at an indentation of 16 but was found at 17.  block-indentation\n  30:16  error  Incorrect indentation for `<audio>` beginning at L30:C16. Expected `<audio>` to be at an indentation of 18 but was found at 16.  block-indentation\n  60:14  error  Incorrect indentation for `{{#photo-swipe}}` beginning at L60:C14. Expected `{{#photo-swipe}}` to be at an indentation of 16 but was found at 14.  block-indentation\n  76:16  error  Incorrect indentation for inverse block of `{{#if}}` beginning at L66:C14. Expected `{{else}}` starting at L76:C16 to be at an indentation of 14 but was found at 16.  block-indentation\n  70:17  error  Incorrect indentation for `<img>` beginning at L70:C17. Expected `<img>` to be at an indentation of 16 but was found at 17.  block-indentation\n  77:16  error  Incorrect indentation for `<audio>` beginning at L77:C16. Expected `<audio>` to be at an indentation of 18 but was found at 16.  block-indentation\n  15:18  error  img tags must have an alt attribute  img-alt-attributes\n  23:17  error  img tags must have an alt attribute  img-alt-attributes\n  41:8  error  img tags must have an alt attribute  img-alt-attributes\n  43:8  error  img tags must have an alt attribute  img-alt-attributes\n  49:8  error  img tags must have an alt attribute  img-alt-attributes\n  51:8  error  img tags must have an alt attribute  img-alt-attributes\n  62:18  error  img tags must have an alt attribute  img-alt-attributes\n  70:17  error  img tags must have an alt attribute  img-alt-attributes\n  15:49  error  Interaction added to non-interactive element  no-invalid-interactive\n  25:47  error  Interaction added to non-interactive element  no-invalid-interactive\n  62:74  error  Interaction added to non-interactive element  no-invalid-interactive\n  72:48  error  Interaction added to non-interactive element  no-invalid-interactive\n  7:39  error  you must use double quotes in templates  quotes\n  15:143  error  you must use double quotes in templates  quotes\n  23:54  error  you must use double quotes in templates  quotes\n  25:56  error  you must use double quotes in templates  quotes\n  26:31  error  you must use double quotes in templates  quotes\n  40:46  error  you must use double quotes in templates  quotes\n  48:46  error  you must use double quotes in templates  quotes\n  62:134  error  you must use double quotes in templates  quotes\n  70:54  error  you must use double quotes in templates  quotes\n  72:57  error  you must use double quotes in templates  quotes\n  73:33  error  you must use double quotes in templates  quotes\n  84:45  error  you must use double quotes in templates  quotes\n  84:58  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/user/chat-container.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/user/chat-container.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/user/chat-container.hbs\n  15:95  error  Incorrect indentation for `{{paper-icon}}` beginning at L15:C95. Expected `{{paper-icon}}` to be at an indentation of 14 but was found at 95.  block-indentation\n  39:10  error  img tags must have an alt attribute  img-alt-attributes\n  84:33  error  Interaction added to non-interactive element  no-invalid-interactive\n  1:74  error  you must use double quotes in templates  quotes\n  35:13  error  you must use double quotes in templates  quotes\n  38:28  error  you must use double quotes in templates  quotes\n  39:80  error  you must use double quotes in templates  quotes\n  40:32  error  you must use double quotes in templates  quotes\n  41:23  error  you must use double quotes in templates  quotes\n  45:23  error  you must use double quotes in templates  quotes\n  49:30  error  you must use double quotes in templates  quotes\n  49:77  error  you must use double quotes in templates  quotes\n  57:26  error  you must use double quotes in templates  quotes\n  59:21  error  you must use double quotes in templates  quotes\n  62:52  error  you must use double quotes in templates  quotes\n  62:82  error  you must use double quotes in templates  quotes\n  63:52  error  you must use double quotes in templates  quotes\n  63:81  error  you must use double quotes in templates  quotes\n  64:52  error  you must use double quotes in templates  quotes\n  64:78  error  you must use double quotes in templates  quotes\n  69:23  error  you must use double quotes in templates  quotes\n  74:15  error  you must use double quotes in templates  quotes\n  84:15  error  you must use double quotes in templates  quotes\n  84:42  error  you must use double quotes in templates  quotes\n  39:10  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });

  QUnit.test('vidya-frontend/templates/components/user/chat-list-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/user/chat-list-card.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/user/chat-list-card.hbs\n  14:8  error  img tags must have an alt attribute  img-alt-attributes\n  19:12  error  img tags must have an alt attribute  img-alt-attributes\n  21:12  error  img tags must have an alt attribute  img-alt-attributes\n  27:12  error  img tags must have an alt attribute  img-alt-attributes\n  29:12  error  img tags must have an alt attribute  img-alt-attributes\n  14:118  error  Interaction added to non-interactive element  no-invalid-interactive\n  15:37  error  Interaction added to non-interactive element  no-invalid-interactive\n  19:122  error  Interaction added to non-interactive element  no-invalid-interactive\n  21:122  error  Interaction added to non-interactive element  no-invalid-interactive\n  23:39  error  Interaction added to non-interactive element  no-invalid-interactive\n  27:121  error  Interaction added to non-interactive element  no-invalid-interactive\n  29:121  error  Interaction added to non-interactive element  no-invalid-interactive\n  31:39  error  Interaction added to non-interactive element  no-invalid-interactive\n  2:31  error  \'controls\' is defined but never used  no-unused-block-params\n  1:20  error  you must use double quotes in templates  quotes\n  4:38  error  you must use double quotes in templates  quotes\n  8:37  error  you must use double quotes in templates  quotes\n  18:51  error  you must use double quotes in templates  quotes\n  26:50  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/components/user/fullscreen-img.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'vidya-frontend/templates/components/user/fullscreen-img.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('vidya-frontend/templates/components/user/group-list-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/user/group-list-card.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/user/group-list-card.hbs\n  6:10  error  img tags must have an alt attribute  img-alt-attributes\n  1:30  error  Interaction added to non-interactive element  no-invalid-interactive\n');
  });

  QUnit.test('vidya-frontend/templates/components/user/group-pic.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/user/group-pic.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/user/group-pic.hbs\n  2:0  error  Incorrect indentation for `<div>` beginning at L2:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  77:6  error  Incorrect indentation for `{{#if}}` beginning at L77:C6. Expected `{{#if}}` to be at an indentation of 2 but was found at 6.  block-indentation\n  82:0  error  Incorrect indentation for `{{#cover-dialog}}` beginning at L82:C0. Expected `{{#cover-dialog}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  76:10  error  Incorrect indentation for `div` beginning at L2:C0. Expected `</div>` ending at L76:C10 to be at an indentation of 0 but was found at 4.  block-indentation\n  3:8  error  Incorrect indentation for `<div>` beginning at L3:C8. Expected `<div>` to be at an indentation of 2 but was found at 8.  block-indentation\n  5:14  error  Incorrect indentation for `<div>` beginning at L5:C14. Expected `<div>` to be at an indentation of 12 but was found at 14.  block-indentation\n  11:9  error  Incorrect indentation for `<div>` beginning at L11:C9. Expected `<div>` to be at an indentation of 12 but was found at 9.  block-indentation\n  7:24  error  Incorrect indentation for `<p>` beginning at L7:C24. Expected `<p>` to be at an indentation of 18 but was found at 24.  block-indentation\n  29:18  error  Incorrect indentation for `div` beginning at L11:C9. Expected `</div>` ending at L29:C18 to be at an indentation of 9 but was found at 12.  block-indentation\n  12:16  error  Incorrect indentation for `{{#photo-swipe}}` beginning at L12:C16. Expected `{{#photo-swipe}}` to be at an indentation of 11 but was found at 16.  block-indentation\n  19:16  error  Incorrect indentation for `{{#if}}` beginning at L19:C16. Expected `{{#if}}` to be at an indentation of 11 but was found at 16.  block-indentation\n  13:20  error  Incorrect indentation for `{{#if}}` beginning at L13:C20. Expected `{{#if}}` to be at an indentation of 18 but was found at 20.  block-indentation\n  14:20  error  Incorrect indentation for `<img>` beginning at L14:C20. Expected `<img>` to be at an indentation of 22 but was found at 20.  block-indentation\n  16:20  error  Incorrect indentation for `<img>` beginning at L16:C20. Expected `<img>` to be at an indentation of 22 but was found at 20.  block-indentation\n  20:20  error  Incorrect indentation for `<div>` beginning at L20:C20. Expected `<div>` to be at an indentation of 18 but was found at 20.  block-indentation\n  23:28  error  Incorrect indentation for `{{paper-icon}}` beginning at L23:C28. Expected `{{paper-icon}}` to be at an indentation of 26 but was found at 28.  block-indentation\n  33:16  error  Incorrect indentation for `{{#if}}` beginning at L33:C16. Expected `{{#if}}` to be at an indentation of 14 but was found at 16.  block-indentation\n  34:20  error  Incorrect indentation for `{{! {{#paper-button iconButton=true  onClick=(action "displayInfo")}}{{paper-icon "edit"}}{{/paper-button}} }}` beginning at L34:C20. Expected `{{! {{#paper-button iconButton=true  onClick=(action "displayInfo")}}{{paper-icon "edit"}}{{/paper-button}} }}` to be at an indentation of 18 but was found at 20.  block-indentation\n  35:21  error  Incorrect indentation for `{{#paper-menu}}` beginning at L35:C21. Expected `{{#paper-menu}}` to be at an indentation of 18 but was found at 21.  block-indentation\n  55:35  error  Incorrect indentation for `paper-menu` beginning at L35:C21. Expected `{{/paper-menu}}` ending at L55:C35 to be at an indentation of 21 but was found at 20.  block-indentation\n  36:24  error  Incorrect indentation for `{{#menu.trigger}}` beginning at L36:C24. Expected `{{#menu.trigger}}` to be at an indentation of 23 but was found at 24.  block-indentation\n  42:24  error  Incorrect indentation for `{{#menu.content}}` beginning at L42:C24. Expected `{{#menu.content}}` to be at an indentation of 23 but was found at 24.  block-indentation\n  37:24  error  Incorrect indentation for `{{#paper-button}}` beginning at L37:C24. Expected `{{#paper-button}}` to be at an indentation of 26 but was found at 24.  block-indentation\n  38:28  error  Incorrect indentation for `{{paper-icon}}` beginning at L38:C28. Expected `{{paper-icon}}` to be at an indentation of 26 but was found at 28.  block-indentation\n  43:28  error  Incorrect indentation for `<div>` beginning at L43:C28. Expected `<div>` to be at an indentation of 26 but was found at 28.  block-indentation\n  48:32  error  Incorrect indentation for `<div>` beginning at L48:C32. Expected `<div>` to be at an indentation of 26 but was found at 32.  block-indentation\n  47:38  error  Incorrect indentation for `div` beginning at L43:C28. Expected `</div>` ending at L47:C38 to be at an indentation of 28 but was found at 32.  block-indentation\n  44:32  error  Incorrect indentation for `{{#content.menu-item}}` beginning at L44:C32. Expected `{{#content.menu-item}}` to be at an indentation of 30 but was found at 32.  block-indentation\n  45:0  error  Incorrect indentation for `                                   Upload cover\n` beginning at L45:C0. Expected `                                   Upload cover\n` to be at an indentation of 34 but was found at 35.  block-indentation\n  49:32  error  Incorrect indentation for `{{#content.menu-item}}` beginning at L49:C32. Expected `{{#content.menu-item}}` to be at an indentation of 34 but was found at 32.  block-indentation\n  50:0  error  Incorrect indentation for `                                    Change Name\n` beginning at L50:C0. Expected `                                    Change Name\n` to be at an indentation of 34 but was found at 36.  block-indentation\n  66:6  error  Incorrect indentation for inverse block of `{{#if}}` beginning at L60:C12. Expected `{{else}}` starting at L66:C6 to be at an indentation of 12 but was found at 6.  block-indentation\n  72:13  error  Incorrect indentation for `if` beginning at L60:C12. Expected `{{/if}}` ending at L72:C13 to be at an indentation of 12 but was found at 6.  block-indentation\n  61:8  error  Incorrect indentation for `{{#photo-swipe}}` beginning at L61:C8. Expected `{{#photo-swipe}}` to be at an indentation of 14 but was found at 8.  block-indentation\n  67:8  error  Incorrect indentation for `{{#photo-swipe}}` beginning at L67:C8. Expected `{{#photo-swipe}}` to be at an indentation of 14 but was found at 8.  block-indentation\n  63:14  error  Incorrect indentation for `<img>` beginning at L63:C14. Expected `<img>` to be at an indentation of 12 but was found at 14.  block-indentation\n  71:22  error  Incorrect indentation for `photo-swipe` beginning at L67:C8. Expected `{{/photo-swipe}}` ending at L71:C22 to be at an indentation of 8 but was found at 6.  block-indentation\n  81:14  error  Incorrect indentation for `if` beginning at L77:C6. Expected `{{/if}}` ending at L81:C14 to be at an indentation of 6 but was found at 7.  block-indentation\n  14:20  error  img tags must have an alt attribute  img-alt-attributes\n  16:20  error  img tags must have an alt attribute  img-alt-attributes\n  63:14  error  img tags must have an alt attribute  img-alt-attributes\n  69:12  error  img tags must have an alt attribute  img-alt-attributes\n  14:70  error  Interaction added to non-interactive element  no-invalid-interactive\n  16:58  error  Interaction added to non-interactive element  no-invalid-interactive\n  63:36  error  Interaction added to non-interactive element  no-invalid-interactive\n  69:34  error  Interaction added to non-interactive element  no-invalid-interactive\n  62:46  error  \'index\' is defined but never used  no-unused-block-params\n  5:25  error  you must use double quotes in templates  quotes\n  6:27  error  you must use double quotes in templates  quotes\n  13:54  error  you must use double quotes in templates  quotes\n  23:41  error  you must use double quotes in templates  quotes\n  42:46  error  you must use double quotes in templates  quotes\n  63:14  error  Self-closing a void element is redundant  self-closing-void-elements\n  69:12  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });

  QUnit.test('vidya-frontend/templates/components/user/profile-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/user/profile-card.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/user/profile-card.hbs\n  3:2  error  Incorrect indentation for `{{#if}}` beginning at L3:C2. Expected `{{#if}}` to be at an indentation of 4 but was found at 2.  block-indentation\n  26:7  error  Incorrect indentation for `if` beginning at L3:C2. Expected `{{/if}}` ending at L26:C7 to be at an indentation of 2 but was found at 0.  block-indentation\n  4:5  error  Incorrect indentation for `<div>` beginning at L4:C5. Expected `<div>` to be at an indentation of 4 but was found at 5.  block-indentation\n  20:0  error  Incorrect indentation for `{{#if}}` beginning at L20:C0. Expected `{{#if}}` to be at an indentation of 4 but was found at 0.  block-indentation\n  25:0  error  Incorrect indentation for `{{paper-divider}}` beginning at L25:C0. Expected `{{paper-divider}}` to be at an indentation of 4 but was found at 0.  block-indentation\n  19:6  error  Incorrect indentation for `div` beginning at L4:C5. Expected `</div>` ending at L19:C6 to be at an indentation of 5 but was found at 0.  block-indentation\n  6:2  error  Incorrect indentation for `{{#if}}` beginning at L6:C2. Expected `{{#if}}` to be at an indentation of 7 but was found at 2.  block-indentation\n  15:2  error  Incorrect indentation for `<div>` beginning at L15:C2. Expected `<div>` to be at an indentation of 7 but was found at 2.  block-indentation\n  16:6  error  Incorrect indentation for `<p>` beginning at L16:C6. Expected `<p>` to be at an indentation of 4 but was found at 6.  block-indentation\n  17:6  error  Incorrect indentation for `<p>` beginning at L17:C6. Expected `<p>` to be at an indentation of 4 but was found at 6.  block-indentation\n  21:0  error  Incorrect indentation for `<p>` beginning at L21:C0. Expected `<p>` to be at an indentation of 2 but was found at 0.  block-indentation\n  40:8  error  Incorrect indentation for `<p>` beginning at L40:C8. Expected `<p>` to be at an indentation of 10 but was found at 8.  block-indentation\n  42:8  error  Incorrect indentation for `<p>` beginning at L42:C8. Expected `<p>` to be at an indentation of 10 but was found at 8.  block-indentation\n  50:8  error  Incorrect indentation for `{{#if}}` beginning at L50:C8. Expected `{{#if}}` to be at an indentation of 10 but was found at 8.  block-indentation\n  52:10  error  Incorrect indentation for inverse block of `{{#if}}` beginning at L50:C8. Expected `{{else}}` starting at L52:C10 to be at an indentation of 8 but was found at 10.  block-indentation\n  53:10  error  Incorrect indentation for `<video>` beginning at L53:C10. Expected `<video>` to be at an indentation of 12 but was found at 10.  block-indentation\n  57:10  error  Incorrect indentation for `<audio>` beginning at L57:C10. Expected `<audio>` to be at an indentation of 12 but was found at 10.  block-indentation\n  58:14  error  Incorrect indentation for `<source>` beginning at L58:C14. Expected `<source>` to be at an indentation of 12 but was found at 14.  block-indentation\n  63:12  error  Incorrect indentation for `{{#if}}` beginning at L63:C12. Expected `{{#if}}` to be at an indentation of 14 but was found at 12.  block-indentation\n  65:10  error  Incorrect indentation for inverse block of `{{#if}}` beginning at L63:C12. Expected `{{else}}` starting at L65:C10 to be at an indentation of 12 but was found at 10.  block-indentation\n  69:15  error  Incorrect indentation for `if` beginning at L63:C12. Expected `{{/if}}` ending at L69:C15 to be at an indentation of 12 but was found at 8.  block-indentation\n  64:10  error  Incorrect indentation for `<img>` beginning at L64:C10. Expected `<img>` to be at an indentation of 14 but was found at 10.  block-indentation\n  66:10  error  Incorrect indentation for `<video>` beginning at L66:C10. Expected `<video>` to be at an indentation of 12 but was found at 10.  block-indentation\n  85:10  error  Incorrect indentation for `{{#if}}` beginning at L85:C10. Expected `{{#if}}` to be at an indentation of 12 but was found at 10.  block-indentation\n  98:15  error  Incorrect indentation for `if` beginning at L85:C10. Expected `{{/if}}` ending at L98:C15 to be at an indentation of 10 but was found at 8.  block-indentation\n  86:10  error  Incorrect indentation for `<video>` beginning at L86:C10. Expected `<video>` to be at an indentation of 12 but was found at 10.  block-indentation\n  93:8  error  Incorrect indentation for inverse block of `{{#if}}` beginning at L89:C10. Expected `{{else}}` starting at L93:C8 to be at an indentation of 10 but was found at 8.  block-indentation\n  90:10  error  Incorrect indentation for `<audio>` beginning at L90:C10. Expected `<audio>` to be at an indentation of 12 but was found at 10.  block-indentation\n  91:14  error  Incorrect indentation for `<source>` beginning at L91:C14. Expected `<source>` to be at an indentation of 12 but was found at 14.  block-indentation\n  94:12  error  Incorrect indentation for `{{#each}}` beginning at L94:C12. Expected `{{#each}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  102:10  error  Incorrect indentation for `{{#if}}` beginning at L102:C10. Expected `{{#if}}` to be at an indentation of 16 but was found at 10.  block-indentation\n  111:21  error  Incorrect indentation for `if` beginning at L102:C10. Expected `{{/if}}` ending at L111:C21 to be at an indentation of 10 but was found at 14.  block-indentation\n  110:25  error  Incorrect indentation for `each` beginning at L107:C12. Expected `{{/each}}` ending at L110:C25 to be at an indentation of 12 but was found at 16.  block-indentation\n  108:12  error  Incorrect indentation for `<img>` beginning at L108:C12. Expected `<img>` to be at an indentation of 14 but was found at 12.  block-indentation\n  8:6  error  img tags must have an alt attribute  img-alt-attributes\n  10:6  error  img tags must have an alt attribute  img-alt-attributes\n  13:4  error  img tags must have an alt attribute  img-alt-attributes\n  30:10  error  img tags must have an alt attribute  img-alt-attributes\n  32:10  error  img tags must have an alt attribute  img-alt-attributes\n  35:8  error  img tags must have an alt attribute  img-alt-attributes\n  64:10  error  img tags must have an alt attribute  img-alt-attributes\n  96:14  error  img tags must have an alt attribute  img-alt-attributes\n  108:12  error  img tags must have an alt attribute  img-alt-attributes\n  96:45  error  Interaction added to non-interactive element  no-invalid-interactive\n  108:44  error  Interaction added to non-interactive element  no-invalid-interactive\n  2:22  error  you must use double quotes in templates  quotes\n  7:49  error  you must use double quotes in templates  quotes\n  13:27  error  you must use double quotes in templates  quotes\n  29:48  error  you must use double quotes in templates  quotes\n  35:31  error  you must use double quotes in templates  quotes\n  51:105  error  you must use double quotes in templates  quotes\n  64:81  error  you must use double quotes in templates  quotes\n  75:30  error  you must use double quotes in templates  quotes\n  96:139  error  you must use double quotes in templates  quotes\n  108:138  error  you must use double quotes in templates  quotes\n  118:30  error  you must use double quotes in templates  quotes\n  96:14  error  Self-closing a void element is redundant  self-closing-void-elements\n  108:12  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });

  QUnit.test('vidya-frontend/templates/components/user/profile-pic.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/user/profile-pic.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/user/profile-pic.hbs\n  55:10  error  Incorrect indentation for `each` beginning at L1:C0. Expected `{{/each}}` ending at L55:C10 to be at an indentation of 0 but was found at 1.  block-indentation\n  2:4  error  Incorrect indentation for `<div>` beginning at L2:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  28:4  error  Incorrect indentation for `<div>` beginning at L28:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  48:6  error  Incorrect indentation for `<p>` beginning at L48:C6. Expected `<p>` to be at an indentation of 2 but was found at 6.  block-indentation\n  49:6  error  Incorrect indentation for `{{#unless}}` beginning at L49:C6. Expected `{{#unless}}` to be at an indentation of 2 but was found at 6.  block-indentation\n  5:8  error  Incorrect indentation for `<div>` beginning at L5:C8. Expected `<div>` to be at an indentation of 10 but was found at 8.  block-indentation\n  6:12  error  Incorrect indentation for `{{paper-progress-circular}}` beginning at L6:C12. Expected `{{paper-progress-circular}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  10:12  error  Incorrect indentation for `{{#photo-swipe}}` beginning at L10:C12. Expected `{{#photo-swipe}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  15:12  error  Incorrect indentation for `{{#if}}` beginning at L15:C12. Expected `{{#if}}` to be at an indentation of 10 but was found at 12.  block-indentation\n  24:17  error  Incorrect indentation for `if` beginning at L15:C12. Expected `{{/if}}` ending at L24:C17 to be at an indentation of 12 but was found at 10.  block-indentation\n  37:14  error  Incorrect indentation for `<img>` beginning at L37:C14. Expected `<img>` to be at an indentation of 12 but was found at 14.  block-indentation\n  45:22  error  Incorrect indentation for `photo-swipe` beginning at L41:C8. Expected `{{/photo-swipe}}` ending at L45:C22 to be at an indentation of 8 but was found at 6.  block-indentation\n  12:16  error  img tags must have an alt attribute  img-alt-attributes\n  37:14  error  img tags must have an alt attribute  img-alt-attributes\n  43:12  error  img tags must have an alt attribute  img-alt-attributes\n  19:20  error  HTML comment detected  no-html-comments\n  12:38  error  Interaction added to non-interactive element  no-invalid-interactive\n  37:36  error  Interaction added to non-interactive element  no-invalid-interactive\n  43:34  error  Interaction added to non-interactive element  no-invalid-interactive\n  36:46  error  \'index\' is defined but never used  no-unused-block-params\n  3:17  error  you must use double quotes in templates  quotes\n  20:33  error  you must use double quotes in templates  quotes\n  51:32  error  you must use double quotes in templates  quotes\n  52:43  error  you must use double quotes in templates  quotes\n  52:56  error  you must use double quotes in templates  quotes\n  52:150  error  you must use double quotes in templates  quotes\n  52:198  error  you must use double quotes in templates  quotes\n  12:16  error  Self-closing a void element is redundant  self-closing-void-elements\n  37:14  error  Self-closing a void element is redundant  self-closing-void-elements\n  43:12  error  Self-closing a void element is redundant  self-closing-void-elements\n  49:16  error  Using {{unless}} in combination with other helpers should be avoided. MaxHelpers: 0  simple-unless\n');
  });

  QUnit.test('vidya-frontend/templates/components/user/profile-user-card.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/components/user/profile-user-card.hbs should pass TemplateLint.\n\nvidya-frontend/templates/components/user/profile-user-card.hbs\n  5:8  error  img tags must have an alt attribute  img-alt-attributes\n  9:10  error  img tags must have an alt attribute  img-alt-attributes\n  12:10  error  img tags must have an alt attribute  img-alt-attributes\n  5:108  error  Interaction added to non-interactive element  no-invalid-interactive\n  9:100  error  Interaction added to non-interactive element  no-invalid-interactive\n  12:100  error  Interaction added to non-interactive element  no-invalid-interactive\n  2:31  error  \'controls\' is defined but never used  no-unused-block-params\n  1:20  error  you must use double quotes in templates  quotes\n  4:22  error  you must use double quotes in templates  quotes\n  8:39  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/discuss/chat.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/discuss/chat.hbs should pass TemplateLint.\n\nvidya-frontend/templates/discuss/chat.hbs\n  18:20  error  Incorrect indentation for `paper-list` beginning at L3:C4. Expected `{{/paper-list}}` ending at L18:C20 to be at an indentation of 4 but was found at 7.  block-indentation\n  24:0  error  Incorrect indentation for `{{#if}}` beginning at L24:C0. Expected `{{#if}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  25:0  error  Incorrect indentation for `{{#paper-content}}` beginning at L25:C0. Expected `{{#paper-content}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  27:33  error  Interaction added to non-interactive element  no-invalid-interactive\n  1:23  error  you must use double quotes in templates  quotes\n  1:43  error  you must use double quotes in templates  quotes\n  4:76  error  you must use double quotes in templates  quotes\n  5:33  error  you must use double quotes in templates  quotes\n  6:27  error  you must use double quotes in templates  quotes\n  7:29  error  you must use double quotes in templates  quotes\n  8:27  error  you must use double quotes in templates  quotes\n  25:23  error  you must use double quotes in templates  quotes\n  27:15  error  you must use double quotes in templates  quotes\n  27:42  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/discuss/create-grouppost.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/discuss/create-grouppost.hbs should pass TemplateLint.\n\nvidya-frontend/templates/discuss/create-grouppost.hbs\n  11:15  error  Incorrect indentation for `div` beginning at L10:C6. Expected `</div>` ending at L11:C15 to be at an indentation of 6 but was found at 9.  block-indentation\n  10:57  error  Incorrect indentation for `{{progressPercentage}}` beginning at L10:C57. Expected `{{progressPercentage}}` to be at an indentation of 8 but was found at 57.  block-indentation\n  28:100  error  Incorrect indentation for `{{paper-icon}}` beginning at L28:C100. Expected `{{paper-icon}}` to be at an indentation of 14 but was found at 100.  block-indentation\n  42:95  error  Incorrect indentation for `{{paper-icon}}` beginning at L42:C95. Expected `{{paper-icon}}` to be at an indentation of 14 but was found at 95.  block-indentation\n  76:10  error  Incorrect indentation for `{{#paper-button}}` beginning at L76:C10. Expected `{{#paper-button}}` to be at an indentation of 6 but was found at 10.  block-indentation\n  77:10  error  Incorrect indentation for `{{#paper-button}}` beginning at L77:C10. Expected `{{#paper-button}}` to be at an indentation of 6 but was found at 10.  block-indentation\n  78:10  error  Incorrect indentation for `{{#paper-button}}` beginning at L78:C10. Expected `{{#paper-button}}` to be at an indentation of 6 but was found at 10.  block-indentation\n  75:27  error  Incorrect indentation for `paper-button` beginning at L73:C6. Expected `{{/paper-button}}` ending at L75:C27 to be at an indentation of 6 but was found at 10.  block-indentation\n  74:12  error  Incorrect indentation for `{{paper-icon}}` beginning at L74:C12. Expected `{{paper-icon}}` to be at an indentation of 8 but was found at 12.  block-indentation\n  85:72  error  Incorrect indentation for `{{paper-icon}}` beginning at L85:C72. Expected `{{paper-icon}}` to be at an indentation of 10 but was found at 72.  block-indentation\n  88:69  error  Incorrect indentation for `{{paper-icon}}` beginning at L88:C69. Expected `{{paper-icon}}` to be at an indentation of 10 but was found at 69.  block-indentation\n  96:72  error  Incorrect indentation for `{{paper-icon}}` beginning at L96:C72. Expected `{{paper-icon}}` to be at an indentation of 10 but was found at 72.  block-indentation\n  99:69  error  Incorrect indentation for `{{paper-icon}}` beginning at L99:C69. Expected `{{paper-icon}}` to be at an indentation of 10 but was found at 69.  block-indentation\n  18:14  error  img tags must have an alt attribute  img-alt-attributes\n  4:24  error  you must use double quotes in templates  quotes\n  10:17  error  you must use double quotes in templates  quotes\n  14:17  error  you must use double quotes in templates  quotes\n  17:32  error  you must use double quotes in templates  quotes\n  18:50  error  you must use double quotes in templates  quotes\n  19:36  error  you must use double quotes in templates  quotes\n  20:27  error  you must use double quotes in templates  quotes\n  24:27  error  you must use double quotes in templates  quotes\n  28:34  error  you must use double quotes in templates  quotes\n  28:81  error  you must use double quotes in templates  quotes\n  62:24  error  you must use double quotes in templates  quotes\n  73:54  error  you must use double quotes in templates  quotes\n  74:25  error  you must use double quotes in templates  quotes\n  76:58  error  you must use double quotes in templates  quotes\n  76:85  error  you must use double quotes in templates  quotes\n  77:58  error  you must use double quotes in templates  quotes\n  77:84  error  you must use double quotes in templates  quotes\n  78:58  error  you must use double quotes in templates  quotes\n  78:84  error  you must use double quotes in templates  quotes\n  18:14  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });

  QUnit.test('vidya-frontend/templates/discuss/create-social.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/discuss/create-social.hbs should pass TemplateLint.\n\nvidya-frontend/templates/discuss/create-social.hbs\n  60:2  error  Incorrect indentation for `<div>` beginning at L60:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n  68:2  error  Incorrect indentation for `<span>` beginning at L68:C2. Expected `<span>` to be at an indentation of 4 but was found at 2.  block-indentation\n  96:10  error  Incorrect indentation for `<div>` beginning at L96:C10. Expected `<div>` to be at an indentation of 8 but was found at 10.  block-indentation\n  16:14  error  img tags must have an alt attribute  img-alt-attributes\n  3:24  error  you must use double quotes in templates  quotes\n  9:17  error  you must use double quotes in templates  quotes\n  12:17  error  you must use double quotes in templates  quotes\n  15:32  error  you must use double quotes in templates  quotes\n  16:50  error  you must use double quotes in templates  quotes\n  17:36  error  you must use double quotes in templates  quotes\n  18:27  error  you must use double quotes in templates  quotes\n  22:27  error  you must use double quotes in templates  quotes\n  26:34  error  you must use double quotes in templates  quotes\n  26:81  error  you must use double quotes in templates  quotes\n  35:31  error  you must use double quotes in templates  quotes\n  61:52  error  you must use double quotes in templates  quotes\n  62:19  error  you must use double quotes in templates  quotes\n  64:52  error  you must use double quotes in templates  quotes\n  64:79  error  you must use double quotes in templates  quotes\n  65:52  error  you must use double quotes in templates  quotes\n  65:78  error  you must use double quotes in templates  quotes\n  66:52  error  you must use double quotes in templates  quotes\n  66:78  error  you must use double quotes in templates  quotes\n  16:14  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });

  QUnit.test('vidya-frontend/templates/discuss/edit-social.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/discuss/edit-social.hbs should pass TemplateLint.\n\nvidya-frontend/templates/discuss/edit-social.hbs\n  16:12  error  Incorrect indentation for `<audio>` beginning at L16:C12. Expected `<audio>` to be at an indentation of 10 but was found at 12.  block-indentation\n  28:8  error  Incorrect indentation for `{{model.groupinfo.groupname}}` beginning at L28:C8. Expected `{{model.groupinfo.groupname}}` to be at an indentation of 10 but was found at 8.  block-indentation\n  42:21  error  Incorrect indentation for `div` beginning at L41:C12. Expected `</div>` ending at L42:C21 to be at an indentation of 12 but was found at 15.  block-indentation\n  41:63  error  Incorrect indentation for `{{progressPercentage}}` beginning at L41:C63. Expected `{{progressPercentage}}` to be at an indentation of 14 but was found at 63.  block-indentation\n  59:106  error  Incorrect indentation for `{{paper-icon}}` beginning at L59:C106. Expected `{{paper-icon}}` to be at an indentation of 20 but was found at 106.  block-indentation\n  83:8  error  Incorrect indentation for `{{paper-divider}}` beginning at L83:C8. Expected `{{paper-divider}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  75:11  error  Incorrect indentation for `{{#paper-button}}` beginning at L75:C11. Expected `{{#paper-button}}` to be at an indentation of 10 but was found at 11.  block-indentation\n  77:27  error  Incorrect indentation for `paper-button` beginning at L75:C11. Expected `{{/paper-button}}` ending at L77:C27 to be at an indentation of 11 but was found at 10.  block-indentation\n  76:12  error  Incorrect indentation for `{{paper-icon}}` beginning at L76:C12. Expected `{{paper-icon}}` to be at an indentation of 13 but was found at 12.  block-indentation\n  49:20  error  img tags must have an alt attribute  img-alt-attributes\n  5:28  error  you must use double quotes in templates  quotes\n  16:25  error  you must use double quotes in templates  quotes\n  30:28  error  you must use double quotes in templates  quotes\n  41:23  error  you must use double quotes in templates  quotes\n  45:23  error  you must use double quotes in templates  quotes\n  48:38  error  you must use double quotes in templates  quotes\n  49:56  error  you must use double quotes in templates  quotes\n  50:42  error  you must use double quotes in templates  quotes\n  51:33  error  you must use double quotes in templates  quotes\n  55:33  error  you must use double quotes in templates  quotes\n  59:40  error  you must use double quotes in templates  quotes\n  59:87  error  you must use double quotes in templates  quotes\n  75:59  error  you must use double quotes in templates  quotes\n  76:25  error  you must use double quotes in templates  quotes\n  78:58  error  you must use double quotes in templates  quotes\n  78:85  error  you must use double quotes in templates  quotes\n  79:58  error  you must use double quotes in templates  quotes\n  79:84  error  you must use double quotes in templates  quotes\n  80:58  error  you must use double quotes in templates  quotes\n  80:84  error  you must use double quotes in templates  quotes\n  49:20  error  Self-closing a void element is redundant  self-closing-void-elements\n  36:18  error  Using {{unless}} in combination with other helpers should be avoided. MaxHelpers: 0  simple-unless\n  72:14  error  Using {{unless}} in combination with other helpers should be avoided. MaxHelpers: 0  simple-unless\n');
  });

  QUnit.test('vidya-frontend/templates/discuss/group-page.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/discuss/group-page.hbs should pass TemplateLint.\n\nvidya-frontend/templates/discuss/group-page.hbs\n  1:23  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/discuss/share-social.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/discuss/share-social.hbs should pass TemplateLint.\n\nvidya-frontend/templates/discuss/share-social.hbs\n  9:6  error  Incorrect indentation for `<div>` beginning at L9:C6. Expected `<div>` to be at an indentation of 8 but was found at 6.  block-indentation\n  25:6  error  Incorrect indentation for `<div>` beginning at L25:C6. Expected `<div>` to be at an indentation of 8 but was found at 6.  block-indentation\n  47:10  error  Incorrect indentation for `{{#paper-button}}` beginning at L47:C10. Expected `{{#paper-button}}` to be at an indentation of 8 but was found at 10.  block-indentation\n  48:10  error  Incorrect indentation for `{{#paper-button}}` beginning at L48:C10. Expected `{{#paper-button}}` to be at an indentation of 8 but was found at 10.  block-indentation\n  47:32  error  you must use double quotes in templates  quotes\n  48:32  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/entertainment/create-live.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/entertainment/create-live.hbs should pass TemplateLint.\n\nvidya-frontend/templates/entertainment/create-live.hbs\n  1:23  error  you must use double quotes in templates  quotes\n  2:22  error  you must use double quotes in templates  quotes\n  9:47  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/entertainment/home.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/entertainment/home.hbs should pass TemplateLint.\n\nvidya-frontend/templates/entertainment/home.hbs\n  2:0  error  Incorrect indentation for `{{entertainment/main-nolive}}` beginning at L2:C0. Expected `{{entertainment/main-nolive}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  3:0  error  Incorrect indentation for `{{! {{#if showlog}}\n  {{entertainment/main-nolive}}\n{{else}}\n  {{#each mainSecondModel as |item|}}\n    {{entertainment/main-live item=item}}\n  {{/each}} \n{{/if}} }}` beginning at L3:C0. Expected `{{! {{#if showlog}}\n  {{entertainment/main-nolive}}\n{{else}}\n  {{#each mainSecondModel as |item|}}\n    {{entertainment/main-live item=item}}\n  {{/each}} \n{{/if}} }}` to be at an indentation of 2 but was found at 0.  block-indentation\n  52:8  error  Incorrect indentation for `{{! {{#if showlog}}\n          {{entertainment/no-live-poster}}\n        {{else}} }}` beginning at L52:C8. Expected `{{! {{#if showlog}}\n          {{entertainment/no-live-poster}}\n        {{else}} }}` to be at an indentation of 6 but was found at 8.  block-indentation\n  55:10  error  Incorrect indentation for `<div>` beginning at L55:C10. Expected `<div>` to be at an indentation of 6 but was found at 10.  block-indentation\n  62:8  error  Incorrect indentation for `{{! {{/if}} }}` beginning at L62:C8. Expected `{{! {{/if}} }}` to be at an indentation of 6 but was found at 8.  block-indentation\n  18:32  error  you must use double quotes in templates  quotes\n  21:32  error  you must use double quotes in templates  quotes\n  24:32  error  you must use double quotes in templates  quotes\n  30:23  error  you must use double quotes in templates  quotes\n  31:25  error  you must use double quotes in templates  quotes\n  32:44  error  you must use double quotes in templates  quotes\n  36:74  error  you must use double quotes in templates  quotes\n  40:44  error  you must use double quotes in templates  quotes\n  58:76  error  you must use double quotes in templates  quotes\n  65:44  error  you must use double quotes in templates  quotes\n  70:74  error  you must use double quotes in templates  quotes\n  78:96  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/entertainment/live-detail.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/entertainment/live-detail.hbs should pass TemplateLint.\n\nvidya-frontend/templates/entertainment/live-detail.hbs\n  68:2  error  Incorrect indentation for `{{#each}}` beginning at L68:C2. Expected `{{#each}}` to be at an indentation of 4 but was found at 2.  block-indentation\n  69:2  error  Incorrect indentation for `{{#paper-item}}` beginning at L69:C2. Expected `{{#paper-item}}` to be at an indentation of 4 but was found at 2.  block-indentation\n  71:10  error  Incorrect indentation for `<img>` beginning at L71:C10. Expected `<img>` to be at an indentation of 6 but was found at 10.  block-indentation\n  87:8  error  Incorrect indentation for `div` beginning at L73:C4. Expected `</div>` ending at L87:C8 to be at an indentation of 4 but was found at 2.  block-indentation\n  82:10  error  Incorrect indentation for `div` beginning at L74:C6. Expected `</div>` ending at L82:C10 to be at an indentation of 6 but was found at 4.  block-indentation\n  79:6  error  Incorrect indentation for `<div>` beginning at L79:C6. Expected `<div>` to be at an indentation of 8 but was found at 6.  block-indentation\n  11:10  error  img tags must have an alt attribute  img-alt-attributes\n  71:10  error  img tags must have an alt attribute  img-alt-attributes\n  103:4  error  Duplicate attribute \'hideAllMessages\' found in the MustacheStatement.  no-duplicate-attributes\n  16:10  error  HTML comment detected  no-html-comments\n  19:6  error  HTML comment detected  no-html-comments\n  44:10  error  HTML comment detected  no-html-comments\n  47:8  error  HTML comment detected  no-html-comments\n  53:10  error  HTML comment detected  no-html-comments\n  57:10  error  HTML comment detected  no-html-comments\n  105:6  error  HTML comment detected  no-html-comments\n  99:35  error  Interaction added to non-interactive element  no-invalid-interactive\n  1:23  error  you must use double quotes in templates  quotes\n  8:24  error  you must use double quotes in templates  quotes\n  10:31  error  you must use double quotes in templates  quotes\n  11:52  error  you must use double quotes in templates  quotes\n  14:30  error  you must use double quotes in templates  quotes\n  15:30  error  you must use double quotes in templates  quotes\n  22:23  error  you must use double quotes in templates  quotes\n  27:21  error  you must use double quotes in templates  quotes\n  32:23  error  you must use double quotes in templates  quotes\n  37:21  error  you must use double quotes in templates  quotes\n  43:58  error  you must use double quotes in templates  quotes\n  67:22  error  you must use double quotes in templates  quotes\n  71:56  error  you must use double quotes in templates  quotes\n  95:23  error  you must use double quotes in templates  quotes\n  99:17  error  you must use double quotes in templates  quotes\n  99:44  error  you must use double quotes in templates  quotes\n  11:10  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });

  QUnit.test('vidya-frontend/templates/entertainment/loading.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/entertainment/loading.hbs should pass TemplateLint.\n\nvidya-frontend/templates/entertainment/loading.hbs\n  1:23  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/entertainment/upload-detail.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/entertainment/upload-detail.hbs should pass TemplateLint.\n\nvidya-frontend/templates/entertainment/upload-detail.hbs\n  6:10  error  img tags must have an alt attribute  img-alt-attributes\n  1:23  error  you must use double quotes in templates  quotes\n  3:24  error  you must use double quotes in templates  quotes\n  15:9  error  you must use double quotes in templates  quotes\n  20:7  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/home.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/home.hbs should pass TemplateLint.\n\nvidya-frontend/templates/home.hbs\n  35:22  error  Incorrect indentation for `swiper-slide` beginning at L20:C4. Expected `{{/swiper-slide}}` ending at L35:C22 to be at an indentation of 4 but was found at 7.  block-indentation\n  59:95  error  Incorrect indentation for `{{paper-icon}}` beginning at L59:C95. Expected `{{paper-icon}}` to be at an indentation of 14 but was found at 95.  block-indentation\n  1:23  error  you must use double quotes in templates  quotes\n  2:29  error  you must use double quotes in templates  quotes\n  2:89  error  you must use double quotes in templates  quotes\n  2:133  error  you must use double quotes in templates  quotes\n  3:24  error  you must use double quotes in templates  quotes\n  11:34  error  you must use double quotes in templates  quotes\n  14:34  error  you must use double quotes in templates  quotes\n  19:25  error  you must use double quotes in templates  quotes\n  25:20  error  you must use double quotes in templates  quotes\n  26:26  error  you must use double quotes in templates  quotes\n  29:38  error  you must use double quotes in templates  quotes\n  29:152  error  you must use double quotes in templates  quotes\n  29:193  error  you must use double quotes in templates  quotes\n  29:238  error  you must use double quotes in templates  quotes\n  30:60  error  you must use double quotes in templates  quotes\n  41:26  error  you must use double quotes in templates  quotes\n  42:20  error  you must use double quotes in templates  quotes\n  45:85  error  you must use double quotes in templates  quotes\n  55:31  error  you must use double quotes in templates  quotes\n  56:39  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/index.hbs should pass TemplateLint.\n\nvidya-frontend/templates/index.hbs\n  7:4  error  Incorrect indentation for `{{#if}}` beginning at L7:C4. Expected `{{#if}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  12:4  error  Incorrect indentation for `{{#if}}` beginning at L12:C4. Expected `{{#if}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  6:11  error  Incorrect indentation for `if` beginning at L2:C2. Expected `{{/if}}` ending at L6:C11 to be at an indentation of 2 but was found at 4.  block-indentation\n  4:2  error  Incorrect indentation for `{{news/inter-card}}` beginning at L4:C2. Expected `{{news/inter-card}}` to be at an indentation of 4 but was found at 2.  block-indentation\n  9:2  error  Incorrect indentation for `{{news/local-card}}` beginning at L9:C2. Expected `{{news/local-card}}` to be at an indentation of 6 but was found at 2.  block-indentation\n  14:2  error  Incorrect indentation for `{{news/private-card}}` beginning at L14:C2. Expected `{{news/private-card}}` to be at an indentation of 6 but was found at 2.  block-indentation\n  1:23  error  you must use double quotes in templates  quotes\n  4:67  error  you must use double quotes in templates  quotes\n  4:107  error  you must use double quotes in templates  quotes\n  5:29  error  you must use double quotes in templates  quotes\n  5:55  error  you must use double quotes in templates  quotes\n  5:83  error  you must use double quotes in templates  quotes\n  9:67  error  you must use double quotes in templates  quotes\n  9:107  error  you must use double quotes in templates  quotes\n  10:29  error  you must use double quotes in templates  quotes\n  10:55  error  you must use double quotes in templates  quotes\n  10:83  error  you must use double quotes in templates  quotes\n  14:75  error  you must use double quotes in templates  quotes\n  15:29  error  you must use double quotes in templates  quotes\n  15:55  error  you must use double quotes in templates  quotes\n  15:83  error  you must use double quotes in templates  quotes\n  19:23  error  you must use double quotes in templates  quotes\n  20:24  error  you must use double quotes in templates  quotes\n  20:76  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/loading.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/loading.hbs should pass TemplateLint.\n\nvidya-frontend/templates/loading.hbs\n  1:23  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/login.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/login.hbs should pass TemplateLint.\n\nvidya-frontend/templates/login.hbs\n  98:2  error  Incorrect indentation for `<p>` beginning at L98:C2. Expected `<p>` to be at an indentation of 4 but was found at 2.  block-indentation\n  100:10  error  Incorrect indentation for `p` beginning at L98:C2. Expected `</p>` ending at L100:C10 to be at an indentation of 2 but was found at 6.  block-indentation\n  98:36  error  Incorrect indentation for `\n      Sorry, your account is banned!\n      ` beginning at L98:C36. Expected `\n      Sorry, your account is banned!\n      ` to be at an indentation of 4 but was found at 6.  block-indentation\n  61:18  error  img tags must have an alt attribute  img-alt-attributes\n  69:16  error  img tags must have an alt attribute  img-alt-attributes\n  103:0  error  img tags must have an alt attribute  img-alt-attributes\n  40:12  error  HTML comment detected  no-html-comments\n  49:12  error  HTML comment detected  no-html-comments\n  11:51  error  Interaction added to non-interactive element  no-invalid-interactive\n  24:61  error  Interaction added to non-interactive element  no-invalid-interactive\n  73:51  error  Interaction added to non-interactive element  no-invalid-interactive\n  1:23  error  you must use double quotes in templates  quotes\n  11:60  error  you must use double quotes in templates  quotes\n  24:70  error  you must use double quotes in templates  quotes\n  38:25  error  you must use double quotes in templates  quotes\n  38:40  error  you must use double quotes in templates  quotes\n  47:25  error  you must use double quotes in templates  quotes\n  47:49  error  you must use double quotes in templates  quotes\n  59:25  error  you must use double quotes in templates  quotes\n  61:68  error  you must use double quotes in templates  quotes\n  62:51  error  you must use double quotes in templates  quotes\n  63:68  error  you must use double quotes in templates  quotes\n  69:39  error  you must use double quotes in templates  quotes\n  69:63  error  you must use double quotes in templates  quotes\n  73:60  error  you must use double quotes in templates  quotes\n  98:11  error  you must use double quotes in templates  quotes\n  61:18  error  Self-closing a void element is redundant  self-closing-void-elements\n  69:16  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });

  QUnit.test('vidya-frontend/templates/news-detail.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/news-detail.hbs should pass TemplateLint.\n\nvidya-frontend/templates/news-detail.hbs\n  7:83  error  Incorrect indentation for `{{paper-icon}}` beginning at L7:C83. Expected `{{paper-icon}}` to be at an indentation of 12 but was found at 83.  block-indentation\n  23:17  error  Incorrect indentation for `if` beginning at L10:C8. Expected `{{/if}}` ending at L23:C17 to be at an indentation of 8 but was found at 10.  block-indentation\n  12:19  error  Interaction added to non-interactive element  no-invalid-interactive\n  1:17  error  you must use double quotes in templates  quotes\n  1:36  error  you must use double quotes in templates  quotes\n  2:28  error  you must use double quotes in templates  quotes\n  2:76  error  you must use double quotes in templates  quotes\n  2:88  error  you must use double quotes in templates  quotes\n  11:30  error  you must use double quotes in templates  quotes\n  12:66  error  you must use double quotes in templates  quotes\n  12:28  error  you must use double quotes in templates  quotes\n  13:61  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/news/category.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/news/category.hbs should pass TemplateLint.\n\nvidya-frontend/templates/news/category.hbs\n  1:23  error  you must use double quotes in templates  quotes\n  2:22  error  you must use double quotes in templates  quotes\n  5:61  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/news/create-crs.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/news/create-crs.hbs should pass TemplateLint.\n\nvidya-frontend/templates/news/create-crs.hbs\n  1:23  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/news/create-share.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/news/create-share.hbs should pass TemplateLint.\n\nvidya-frontend/templates/news/create-share.hbs\n  30:10  error  Incorrect indentation for `{{#paper-button}}` beginning at L30:C10. Expected `{{#paper-button}}` to be at an indentation of 8 but was found at 10.  block-indentation\n  31:10  error  Incorrect indentation for `{{#paper-button}}` beginning at L31:C10. Expected `{{#paper-button}}` to be at an indentation of 8 but was found at 10.  block-indentation\n  30:32  error  you must use double quotes in templates  quotes\n  31:32  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/news/crs-related.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/news/crs-related.hbs should pass TemplateLint.\n\nvidya-frontend/templates/news/crs-related.hbs\n  1:23  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/news/home-slide.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/news/home-slide.hbs should pass TemplateLint.\n\nvidya-frontend/templates/news/home-slide.hbs\n  1:20  error  you must use double quotes in templates  quotes\n  2:28  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/news/international-list.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/news/international-list.hbs should pass TemplateLint.\n\nvidya-frontend/templates/news/international-list.hbs\n  2:22  error  you must use double quotes in templates  quotes\n  12:20  error  you must use double quotes in templates  quotes\n  14:39  error  you must use double quotes in templates  quotes\n  15:62  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/news/loading.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/news/loading.hbs should pass TemplateLint.\n\nvidya-frontend/templates/news/loading.hbs\n  1:23  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/news/local-list.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/news/local-list.hbs should pass TemplateLint.\n\nvidya-frontend/templates/news/local-list.hbs\n  2:22  error  you must use double quotes in templates  quotes\n  12:20  error  you must use double quotes in templates  quotes\n  14:39  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/news/post-detail.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'vidya-frontend/templates/news/post-detail.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('vidya-frontend/templates/news/private-list.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/news/private-list.hbs should pass TemplateLint.\n\nvidya-frontend/templates/news/private-list.hbs\n  2:22  error  you must use double quotes in templates  quotes\n  12:20  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/news/search-category.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/news/search-category.hbs should pass TemplateLint.\n\nvidya-frontend/templates/news/search-category.hbs\n  12:24  error  Incorrect indentation for `vertical-collection` beginning at L2:C2. Expected `{{/vertical-collection}}` ending at L12:C24 to be at an indentation of 2 but was found at 0.  block-indentation\n  10:2  error  Incorrect indentation for `{{news/random-news-list}}` beginning at L10:C2. Expected `{{news/random-news-list}}` to be at an indentation of 4 but was found at 2.  block-indentation\n  1:23  error  you must use double quotes in templates  quotes\n  6:18  error  you must use double quotes in templates  quotes\n  7:24  error  you must use double quotes in templates  quotes\n  10:32  error  you must use double quotes in templates  quotes\n  10:94  error  you must use double quotes in templates  quotes\n  10:134  error  you must use double quotes in templates  quotes\n  10:179  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/notification.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/notification.hbs should pass TemplateLint.\n\nvidya-frontend/templates/notification.hbs\n  1:23  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/setting.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/setting.hbs should pass TemplateLint.\n\nvidya-frontend/templates/setting.hbs\n  2:0  error  Incorrect indentation for `<h5>` beginning at L2:C0. Expected `<h5>` to be at an indentation of 2 but was found at 0.  block-indentation\n  1:23  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/social-search.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/social-search.hbs should pass TemplateLint.\n\nvidya-frontend/templates/social-search.hbs\n  2:0  error  Incorrect indentation for `{{#each}}` beginning at L2:C0. Expected `{{#each}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  3:4  error  Incorrect indentation for `{{social-search-card}}` beginning at L3:C4. Expected `{{social-search-card}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  1:20  error  you must use double quotes in templates  quotes\n  1:41  error  you must use double quotes in templates  quotes\n  3:91  error  you must use double quotes in templates  quotes\n  3:126  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/social.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/social.hbs should pass TemplateLint.\n\nvidya-frontend/templates/social.hbs\n  3:5  error  Incorrect indentation for `{{spinner-circle}}` beginning at L3:C5. Expected `{{spinner-circle}}` to be at an indentation of 4 but was found at 5.  block-indentation\n  8:0  error  Incorrect indentation for `{{paper-input}}` beginning at L8:C0. Expected `{{paper-input}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  11:0  error  Incorrect indentation for `<ul>` beginning at L11:C0. Expected `<ul>` to be at an indentation of 2 but was found at 0.  block-indentation\n  46:0  error  Incorrect indentation for `{{#if}}` beginning at L46:C0. Expected `{{#if}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  23:4  error  Incorrect indentation for `{{#if}}` beginning at L23:C4. Expected `{{#if}}` to be at an indentation of 6 but was found at 4.  block-indentation\n  24:4  error  Incorrect indentation for `{{yield}}` beginning at L24:C4. Expected `{{yield}}` to be at an indentation of 6 but was found at 4.  block-indentation\n  25:4  error  Incorrect indentation for `{{socials/share-post-card}}` beginning at L25:C4. Expected `{{socials/share-post-card}}` to be at an indentation of 6 but was found at 4.  block-indentation\n  29:4  error  Incorrect indentation for `{{yield}}` beginning at L29:C4. Expected `{{yield}}` to be at an indentation of 6 but was found at 4.  block-indentation\n  30:4  error  Incorrect indentation for `{{socials/group-post-card}}` beginning at L30:C4. Expected `{{socials/group-post-card}}` to be at an indentation of 6 but was found at 4.  block-indentation\n  34:4  error  Incorrect indentation for `{{yield}}` beginning at L34:C4. Expected `{{yield}}` to be at an indentation of 6 but was found at 4.  block-indentation\n  35:4  error  Incorrect indentation for `{{socials/crs-post-card}}` beginning at L35:C4. Expected `{{socials/crs-post-card}}` to be at an indentation of 6 but was found at 4.  block-indentation\n  38:4  error  Incorrect indentation for `{{yield}}` beginning at L38:C4. Expected `{{yield}}` to be at an indentation of 6 but was found at 4.  block-indentation\n  39:4  error  Incorrect indentation for `{{socials/social-list-card}}` beginning at L39:C4. Expected `{{socials/social-list-card}}` to be at an indentation of 6 but was found at 4.  block-indentation\n  47:0  error  Incorrect indentation for `{{paper-progress-linear}}` beginning at L47:C0. Expected `{{paper-progress-linear}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  11:27  error  elements cannot have inline styles  no-inline-styles\n  3:28  error  you must use double quotes in templates  quotes\n  10:20  error  you must use double quotes in templates  quotes\n  10:41  error  you must use double quotes in templates  quotes\n  18:22  error  you must use double quotes in templates  quotes\n  26:99  error  you must use double quotes in templates  quotes\n  26:134  error  you must use double quotes in templates  quotes\n  31:103  error  you must use double quotes in templates  quotes\n  31:138  error  you must use double quotes in templates  quotes\n  35:174  error  you must use double quotes in templates  quotes\n  41:27  error  you must use double quotes in templates  quotes\n  41:62  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/startup.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/startup.hbs should pass TemplateLint.\n\nvidya-frontend/templates/startup.hbs\n  44:8  error  Incorrect indentation for `{{#if}}` beginning at L44:C8. Expected `{{#if}}` to be at an indentation of 10 but was found at 8.  block-indentation\n  46:17  error  Incorrect indentation for `if` beginning at L44:C8. Expected `{{/if}}` ending at L46:C17 to be at an indentation of 8 but was found at 10.  block-indentation\n  5:36  error  Interaction added to non-interactive element  no-invalid-interactive\n  22:36  error  Interaction added to non-interactive element  no-invalid-interactive\n  39:36  error  Interaction added to non-interactive element  no-invalid-interactive\n  1:23  error  you must use double quotes in templates  quotes\n  7:50  error  you must use double quotes in templates  quotes\n  12:88  error  you must use double quotes in templates  quotes\n  12:125  error  you must use double quotes in templates  quotes\n  24:50  error  you must use double quotes in templates  quotes\n  29:88  error  you must use double quotes in templates  quotes\n  29:125  error  you must use double quotes in templates  quotes\n  45:72  error  you must use double quotes in templates  quotes\n  45:108  error  you must use double quotes in templates  quotes\n  54:23  error  you must use double quotes in templates  quotes\n  55:24  error  you must use double quotes in templates  quotes\n  55:76  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/tabs/entertainment.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/tabs/entertainment.hbs should pass TemplateLint.\n\nvidya-frontend/templates/tabs/entertainment.hbs\n  2:0  error  Incorrect indentation for `<!-- <div class="layout-row flex">\n  <iframe src="http://192.168.10.102/player/player.html" ></iframe>\n</div> -->` beginning at L2:C0. Expected `<!-- <div class="layout-row flex">\n  <iframe src="http://192.168.10.102/player/player.html" ></iframe>\n</div> -->` to be at an indentation of 2 but was found at 0.  block-indentation\n  5:0  error  Incorrect indentation for `{{!\n<link href="https://vjs.zencdn.net/7.3.0/video-js.css" rel="stylesheet">\n<script src="https://vjs.zencdn.net/7.3.0/video.js"></script>\n<!-- <script src="video.js"></script> -->\n<script src="https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-hls/5.15.0/videojs-contrib-hls.js"></script>\n<script>\nvideojs(document.getElementById(\'hls-video\'), {}, function() {\n// This is functionally the same as the previous example.\nconsole.log("Loaded");\n});\n  var player = videojs(\'hls-video\');\n  player.play();\n</script>\n\n  <video id=\'hls-video\' width=600 height=300 class="video-js vjs-default-skin" controls>\n    <source src="http://192.168.10.102/hls/demo.m3u8" type="application/x-mpegURL">\n  </video>\n\n}}` beginning at L5:C0. Expected `{{!\n<link href="https://vjs.zencdn.net/7.3.0/video-js.css" rel="stylesheet">\n<script src="https://vjs.zencdn.net/7.3.0/video.js"></script>\n<!-- <script src="video.js"></script> -->\n<script src="https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-hls/5.15.0/videojs-contrib-hls.js"></script>\n<script>\nvideojs(document.getElementById(\'hls-video\'), {}, function() {\n// This is functionally the same as the previous example.\nconsole.log("Loaded");\n});\n  var player = videojs(\'hls-video\');\n  player.play();\n</script>\n\n  <video id=\'hls-video\' width=600 height=300 class="video-js vjs-default-skin" controls>\n    <source src="http://192.168.10.102/hls/demo.m3u8" type="application/x-mpegURL">\n  </video>\n\n}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  2:0  error  HTML comment detected  no-html-comments\n  1:23  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/tabs/news.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/tabs/news.hbs should pass TemplateLint.\n\nvidya-frontend/templates/tabs/news.hbs\n  1:23  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/tabs/setting.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/tabs/setting.hbs should pass TemplateLint.\n\nvidya-frontend/templates/tabs/setting.hbs\n  1:23  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/tabs/social.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/tabs/social.hbs should pass TemplateLint.\n\nvidya-frontend/templates/tabs/social.hbs\n  1:23  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/toolbar.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/toolbar.hbs should pass TemplateLint.\n\nvidya-frontend/templates/toolbar.hbs\n  143:12  error  Incorrect indentation for `<div>` beginning at L143:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  146:16  error  Incorrect indentation for `{{#if}}` beginning at L146:C16. Expected `{{#if}}` to be at an indentation of 18 but was found at 16.  block-indentation\n  122:10  error  img tags must have an alt attribute  img-alt-attributes\n  124:10  error  img tags must have an alt attribute  img-alt-attributes\n  148:20  error  img tags must have an alt attribute  img-alt-attributes\n  156:12  error  img tags must have an alt attribute  img-alt-attributes\n  158:12  error  img tags must have an alt attribute  img-alt-attributes\n  66:6  error  HTML comment detected  no-html-comments\n  88:6  error  HTML comment detected  no-html-comments\n  239:0  error  HTML comment detected  no-html-comments\n  269:6  error  HTML comment detected  no-html-comments\n  82:22  error  Interaction added to non-interactive element  no-invalid-interactive\n  187:52  error  Interaction added to non-interactive element  no-invalid-interactive\n  197:22  error  Interaction added to non-interactive element  no-invalid-interactive\n  219:52  error  Interaction added to non-interactive element  no-invalid-interactive\n  229:22  error  Interaction added to non-interactive element  no-invalid-interactive\n  272:28  error  Interaction added to non-interactive element  no-invalid-interactive\n  2:25  error  you must use double quotes in templates  quotes\n  4:33  error  you must use double quotes in templates  quotes\n  5:35  error  you must use double quotes in templates  quotes\n  6:37  error  you must use double quotes in templates  quotes\n  7:73  error  you must use double quotes in templates  quotes\n  31:23  error  you must use double quotes in templates  quotes\n  32:25  error  you must use double quotes in templates  quotes\n  33:33  error  you must use double quotes in templates  quotes\n  60:27  error  you must use double quotes in templates  quotes\n  60:54  error  you must use double quotes in templates  quotes\n  61:25  error  you must use double quotes in templates  quotes\n  62:33  error  you must use double quotes in templates  quotes\n  69:30  error  you must use double quotes in templates  quotes\n  71:69  error  you must use double quotes in templates  quotes\n  89:67  error  you must use double quotes in templates  quotes\n  96:23  error  you must use double quotes in templates  quotes\n  97:25  error  you must use double quotes in templates  quotes\n  98:33  error  you must use double quotes in templates  quotes\n  114:23  error  you must use double quotes in templates  quotes\n  115:25  error  you must use double quotes in templates  quotes\n  116:33  error  you must use double quotes in templates  quotes\n  117:67  error  you must use double quotes in templates  quotes\n  121:37  error  you must use double quotes in templates  quotes\n  135:23  error  you must use double quotes in templates  quotes\n  136:25  error  you must use double quotes in templates  quotes\n  137:33  error  you must use double quotes in templates  quotes\n  138:67  error  you must use double quotes in templates  quotes\n  142:28  error  you must use double quotes in templates  quotes\n  155:43  error  you must use double quotes in templates  quotes\n  167:56  error  you must use double quotes in templates  quotes\n  175:23  error  you must use double quotes in templates  quotes\n  176:25  error  you must use double quotes in templates  quotes\n  177:33  error  you must use double quotes in templates  quotes\n  178:67  error  you must use double quotes in templates  quotes\n  184:30  error  you must use double quotes in templates  quotes\n  206:23  error  you must use double quotes in templates  quotes\n  207:25  error  you must use double quotes in templates  quotes\n  208:33  error  you must use double quotes in templates  quotes\n  209:67  error  you must use double quotes in templates  quotes\n  216:30  error  you must use double quotes in templates  quotes\n  240:23  error  you must use double quotes in templates  quotes\n  241:25  error  you must use double quotes in templates  quotes\n  242:33  error  you must use double quotes in templates  quotes\n  243:67  error  you must use double quotes in templates  quotes\n  247:28  error  you must use double quotes in templates  quotes\n  249:67  error  you must use double quotes in templates  quotes\n  256:23  error  you must use double quotes in templates  quotes\n  257:25  error  you must use double quotes in templates  quotes\n  258:33  error  you must use double quotes in templates  quotes\n  259:67  error  you must use double quotes in templates  quotes\n  272:37  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/user/chat-list.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/user/chat-list.hbs should pass TemplateLint.\n\nvidya-frontend/templates/user/chat-list.hbs\n  5:36  error  Interaction added to non-interactive element  no-invalid-interactive\n  32:36  error  Interaction added to non-interactive element  no-invalid-interactive\n  1:23  error  you must use double quotes in templates  quotes\n  5:45  error  you must use double quotes in templates  quotes\n  14:16  error  you must use double quotes in templates  quotes\n  15:22  error  you must use double quotes in templates  quotes\n  18:28  error  you must use double quotes in templates  quotes\n  21:52  error  you must use double quotes in templates  quotes\n  32:45  error  you must use double quotes in templates  quotes\n  36:47  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/user/chat.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'vidya-frontend/templates/user/chat.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('vidya-frontend/templates/user/chatting.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/user/chatting.hbs should pass TemplateLint.\n\nvidya-frontend/templates/user/chatting.hbs\n  1:24  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/user/create-group.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/user/create-group.hbs should pass TemplateLint.\n\nvidya-frontend/templates/user/create-group.hbs\n  10:15  error  Incorrect indentation for `div` beginning at L9:C6. Expected `</div>` ending at L10:C15 to be at an indentation of 6 but was found at 9.  block-indentation\n  9:57  error  Incorrect indentation for `{{progressPercentage}}` beginning at L9:C57. Expected `{{progressPercentage}}` to be at an indentation of 8 but was found at 57.  block-indentation\n  19:100  error  Incorrect indentation for `{{paper-icon}}` beginning at L19:C100. Expected `{{paper-icon}}` to be at an indentation of 14 but was found at 100.  block-indentation\n  48:6  error  Incorrect indentation for `{{#paper-list}}` beginning at L48:C6. Expected `{{#paper-list}}` to be at an indentation of 4 but was found at 6.  block-indentation\n  57:6  error  Incorrect indentation for `<span>` beginning at L57:C6. Expected `<span>` to be at an indentation of 4 but was found at 6.  block-indentation\n  58:6  error  Incorrect indentation for `{{#paper-button}}` beginning at L58:C6. Expected `{{#paper-button}}` to be at an indentation of 4 but was found at 6.  block-indentation\n  59:6  error  Incorrect indentation for `{{#paper-button}}` beginning at L59:C6. Expected `{{#paper-button}}` to be at an indentation of 4 but was found at 6.  block-indentation\n  53:6  error  Incorrect indentation for `{{#x-file-input}}` beginning at L53:C6. Expected `{{#x-file-input}}` to be at an indentation of 8 but was found at 6.  block-indentation\n  54:10  error  Incorrect indentation for `{{paper-icon}}` beginning at L54:C10. Expected `{{paper-icon}}` to be at an indentation of 8 but was found at 10.  block-indentation\n  17:14  error  img tags must have an alt attribute  img-alt-attributes\n  3:24  error  you must use double quotes in templates  quotes\n  9:17  error  you must use double quotes in templates  quotes\n  13:17  error  you must use double quotes in templates  quotes\n  16:32  error  you must use double quotes in templates  quotes\n  17:50  error  you must use double quotes in templates  quotes\n  19:34  error  you must use double quotes in templates  quotes\n  19:81  error  you must use double quotes in templates  quotes\n  48:26  error  you must use double quotes in templates  quotes\n  54:23  error  you must use double quotes in templates  quotes\n  17:14  error  Self-closing a void element is redundant  self-closing-void-elements\n');
  });

  QUnit.test('vidya-frontend/templates/user/find-friends.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/user/find-friends.hbs should pass TemplateLint.\n\nvidya-frontend/templates/user/find-friends.hbs\n  2:0  error  Incorrect indentation for `<div>` beginning at L2:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  16:24  error  Incorrect indentation for `vertical-collection` beginning at L3:C2. Expected `{{/vertical-collection}}` ending at L16:C24 to be at an indentation of 2 but was found at 0.  block-indentation\n  11:6  error  Incorrect indentation for `{{#if}}` beginning at L11:C6. Expected `{{#if}}` to be at an indentation of 4 but was found at 6.  block-indentation\n  12:6  error  Incorrect indentation for `<div>` beginning at L12:C6. Expected `<div>` to be at an indentation of 8 but was found at 6.  block-indentation\n  1:23  error  you must use double quotes in templates  quotes\n  7:16  error  you must use double quotes in templates  quotes\n  8:22  error  you must use double quotes in templates  quotes\n  13:83  error  you must use double quotes in templates  quotes\n  13:120  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/user/find-groups.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/user/find-groups.hbs should pass TemplateLint.\n\nvidya-frontend/templates/user/find-groups.hbs\n  3:0  error  Incorrect indentation for `<div>` beginning at L3:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  14:6  error  Incorrect indentation for `{{#if}}` beginning at L14:C6. Expected `{{#if}}` to be at an indentation of 8 but was found at 6.  block-indentation\n  2:23  error  you must use double quotes in templates  quotes\n  9:10  error  you must use double quotes in templates  quotes\n  11:22  error  you must use double quotes in templates  quotes\n  15:70  error  you must use double quotes in templates  quotes\n  15:106  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/user/group-chat-detail.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/user/group-chat-detail.hbs should pass TemplateLint.\n\nvidya-frontend/templates/user/group-chat-detail.hbs\n  2:0  error  Incorrect indentation for `<div>` beginning at L2:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  14:0  error  Incorrect indentation for `{{#paper-list}}` beginning at L14:C0. Expected `{{#paper-list}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  48:0  error  Incorrect indentation for `<span>` beginning at L48:C0. Expected `<span>` to be at an indentation of 2 but was found at 0.  block-indentation\n  49:0  error  Incorrect indentation for `<div>` beginning at L49:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  5:4  error  Incorrect indentation for `{{#if}}` beginning at L5:C4. Expected `{{#if}}` to be at an indentation of 6 but was found at 4.  block-indentation\n  15:0  error  Incorrect indentation for `{{#paper-subheader}}` beginning at L15:C0. Expected `{{#paper-subheader}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  16:0  error  Incorrect indentation for `<!-- {{#paper-subheader class=\'black-bkg group-head-name\'}}{{item.userCount}}Members{{/paper-subheader}} -->` beginning at L16:C0. Expected `<!-- {{#paper-subheader class=\'black-bkg group-head-name\'}}{{item.userCount}}Members{{/paper-subheader}} -->` to be at an indentation of 2 but was found at 0.  block-indentation\n  17:0  error  Incorrect indentation for `<span>` beginning at L17:C0. Expected `<span>` to be at an indentation of 2 but was found at 0.  block-indentation\n  33:4  error  Incorrect indentation for `{{#each}}` beginning at L33:C4. Expected `{{#each}}` to be at an indentation of 6 but was found at 4.  block-indentation\n  34:4  error  Incorrect indentation for `{{#paper-item}}` beginning at L34:C4. Expected `{{#paper-item}}` to be at an indentation of 6 but was found at 4.  block-indentation\n  50:3  error  Incorrect indentation for `{{#if}}` beginning at L50:C3. Expected `{{#if}}` to be at an indentation of 2 but was found at 3.  block-indentation\n  52:4  error  Incorrect indentation for inverse block of `{{#if}}` beginning at L50:C3. Expected `{{else}}` starting at L52:C4 to be at an indentation of 3 but was found at 4.  block-indentation\n  54:11  error  Incorrect indentation for `if` beginning at L50:C3. Expected `{{/if}}` ending at L54:C11 to be at an indentation of 3 but was found at 4.  block-indentation\n  51:6  error  Incorrect indentation for `{{#paper-button}}` beginning at L51:C6. Expected `{{#paper-button}}` to be at an indentation of 5 but was found at 6.  block-indentation\n  53:6  error  Incorrect indentation for `{{#paper-button}}` beginning at L53:C6. Expected `{{#paper-button}}` to be at an indentation of 5 but was found at 6.  block-indentation\n  7:8  error  img tags must have an alt attribute  img-alt-attributes\n  35:6  error  img tags must have an alt attribute  img-alt-attributes\n  16:0  error  HTML comment detected  no-html-comments\n  19:4  error  HTML comment detected  no-html-comments\n  37:6  error  HTML comment detected  no-html-comments\n  1:23  error  you must use double quotes in templates  quotes\n  14:20  error  you must use double quotes in templates  quotes\n  15:25  error  you must use double quotes in templates  quotes\n  34:24  error  you must use double quotes in templates  quotes\n  51:62  error  you must use double quotes in templates  quotes\n  53:62  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/user/group-chat-list.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/user/group-chat-list.hbs should pass TemplateLint.\n\nvidya-frontend/templates/user/group-chat-list.hbs\n  2:0  error  Incorrect indentation for `<div>` beginning at L2:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  17:0  error  HTML comment detected  no-html-comments\n  34:0  error  HTML comment detected  no-html-comments\n  1:23  error  you must use double quotes in templates  quotes\n  7:26  error  you must use double quotes in templates  quotes\n  8:32  error  you must use double quotes in templates  quotes\n  12:45  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/user/group.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/user/group.hbs should pass TemplateLint.\n\nvidya-frontend/templates/user/group.hbs\n  94:19  error  Incorrect indentation for `paper-content` beginning at L1:C0. Expected `{{/paper-content}}` ending at L94:C19 to be at an indentation of 0 but was found at 1.  block-indentation\n  3:4  error  Incorrect indentation for `{{user/group-pic}}` beginning at L3:C4. Expected `{{user/group-pic}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  5:4  error  Incorrect indentation for `<div>` beginning at L5:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  25:8  error  Incorrect indentation for `{{#tabs.tab}}` beginning at L25:C8. Expected `{{#tabs.tab}}` to be at an indentation of 10 but was found at 8.  block-indentation\n  92:14  error  Incorrect indentation for `if` beginning at L73:C6. Expected `{{/if}}` ending at L92:C14 to be at an indentation of 6 but was found at 7.  block-indentation\n  74:6  error  Incorrect indentation for `{{#if}}` beginning at L74:C6. Expected `{{#if}}` to be at an indentation of 8 but was found at 6.  block-indentation\n  106:8  error  Incorrect indentation for `div` beginning at L96:C3. Expected `</div>` ending at L106:C8 to be at an indentation of 3 but was found at 2.  block-indentation\n  97:4  error  Incorrect indentation for `{{#each}}` beginning at L97:C4. Expected `{{#each}}` to be at an indentation of 5 but was found at 4.  block-indentation\n  98:5  error  Incorrect indentation for `{{#if}}` beginning at L98:C5. Expected `{{#if}}` to be at an indentation of 6 but was found at 5.  block-indentation\n  104:13  error  Incorrect indentation for `if` beginning at L98:C5. Expected `{{/if}}` ending at L104:C13 to be at an indentation of 5 but was found at 6.  block-indentation\n  99:5  error  Incorrect indentation for `{{#if}}` beginning at L99:C5. Expected `{{#if}}` to be at an indentation of 7 but was found at 5.  block-indentation\n  103:13  error  Incorrect indentation for `if` beginning at L99:C5. Expected `{{/if}}` ending at L103:C13 to be at an indentation of 5 but was found at 6.  block-indentation\n  100:8  error  Incorrect indentation for `<div>` beginning at L100:C8. Expected `<div>` to be at an indentation of 7 but was found at 8.  block-indentation\n  108:2  error  Incorrect indentation for `{{#each}}` beginning at L108:C2. Expected `{{#each}}` to be at an indentation of 4 but was found at 2.  block-indentation\n  109:2  error  Incorrect indentation for `{{#if}}` beginning at L109:C2. Expected `{{#if}}` to be at an indentation of 4 but was found at 2.  block-indentation\n  110:2  error  Incorrect indentation for `<div>` beginning at L110:C2. Expected `<div>` to be at an indentation of 4 but was found at 2.  block-indentation\n  112:12  error  Incorrect indentation for `{{paper-icon}}` beginning at L112:C12. Expected `{{paper-icon}}` to be at an indentation of 6 but was found at 12.  block-indentation\n  35:44  error  elements cannot have inline styles  no-inline-styles\n  75:44  error  elements cannot have inline styles  no-inline-styles\n  84:19  error  \'index\' is defined but never used  no-unused-block-params\n  1:23  error  you must use double quotes in templates  quotes\n  12:36  error  you must use double quotes in templates  quotes\n  14:25  error  you must use double quotes in templates  quotes\n  18:36  error  you must use double quotes in templates  quotes\n  25:36  error  you must use double quotes in templates  quotes\n  42:22  error  you must use double quotes in templates  quotes\n  58:20  error  you must use double quotes in templates  quotes\n  59:26  error  you must use double quotes in templates  quotes\n  65:101  error  you must use double quotes in templates  quotes\n  82:22  error  you must use double quotes in templates  quotes\n  87:111  error  you must use double quotes in templates  quotes\n  101:43  error  you must use double quotes in templates  quotes\n  101:59  error  you must use double quotes in templates  quotes\n  101:130  error  you must use double quotes in templates  quotes\n  101:155  error  you must use double quotes in templates  quotes\n  101:195  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/user/groupchat.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/user/groupchat.hbs should pass TemplateLint.\n\nvidya-frontend/templates/user/groupchat.hbs\n  4:4  error  HTML comment detected  no-html-comments\n  1:23  error  you must use double quotes in templates  quotes\n  21:24  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/user/loading.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/user/loading.hbs should pass TemplateLint.\n\nvidya-frontend/templates/user/loading.hbs\n  1:23  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/user/profile-info.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/user/profile-info.hbs should pass TemplateLint.\n\nvidya-frontend/templates/user/profile-info.hbs\n  8:62  error  Interaction added to non-interactive element  no-invalid-interactive\n  1:23  error  you must use double quotes in templates  quotes\n  4:24  error  you must use double quotes in templates  quotes\n  7:35  error  you must use double quotes in templates  quotes\n  8:71  error  you must use double quotes in templates  quotes\n  16:25  error  you must use double quotes in templates  quotes\n  25:25  error  you must use double quotes in templates  quotes\n  34:25  error  you must use double quotes in templates  quotes\n  43:25  error  you must use double quotes in templates  quotes\n  52:25  error  you must use double quotes in templates  quotes\n  63:47  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/user/profile.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/user/profile.hbs should pass TemplateLint.\n\nvidya-frontend/templates/user/profile.hbs\n  3:4  error  Incorrect indentation for `{{user/profile-pic}}` beginning at L3:C4. Expected `{{user/profile-pic}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  4:0  error  Incorrect indentation for `<div>` beginning at L4:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  193:8  error  Incorrect indentation for `div` beginning at L4:C0. Expected `</div>` ending at L193:C8 to be at an indentation of 0 but was found at 2.  block-indentation\n  156:0  error  Incorrect indentation for `{{#if}}` beginning at L156:C0. Expected `{{#if}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  80:18  error  Incorrect indentation for `div` beginning at L76:C10. Expected `</div>` ending at L80:C18 to be at an indentation of 10 but was found at 12.  block-indentation\n  109:4  error  Incorrect indentation for inverse block of `{{#if}}` beginning at L106:C10. Expected `{{else}}` starting at L109:C4 to be at an indentation of 10 but was found at 4.  block-indentation\n  119:13  error  Incorrect indentation for `if` beginning at L106:C10. Expected `{{/if}}` ending at L119:C13 to be at an indentation of 10 but was found at 6.  block-indentation\n  107:4  error  Incorrect indentation for `{{socials/share-post-card}}` beginning at L107:C4. Expected `{{socials/share-post-card}}` to be at an indentation of 12 but was found at 4.  block-indentation\n  110:4  error  Incorrect indentation for `{{socials/group-post-card}}` beginning at L110:C4. Expected `{{socials/group-post-card}}` to be at an indentation of 6 but was found at 4.  block-indentation\n  113:4  error  Incorrect indentation for `{{socials/crs-post-card}}` beginning at L113:C4. Expected `{{socials/crs-post-card}}` to be at an indentation of 6 but was found at 4.  block-indentation\n  116:4  error  Incorrect indentation for `{{socials/social-list-card}}` beginning at L116:C4. Expected `{{socials/social-list-card}}` to be at an indentation of 6 but was found at 4.  block-indentation\n  135:9  error  Incorrect indentation for `{{user/profile-user-card}}` beginning at L135:C9. Expected `{{user/profile-user-card}}` to be at an indentation of 10 but was found at 9.  block-indentation\n  151:8  error  Incorrect indentation for `{{user/profile-user-card}}` beginning at L151:C8. Expected `{{user/profile-user-card}}` to be at an indentation of 10 but was found at 8.  block-indentation\n  173:10  error  Incorrect indentation for `if` beginning at L156:C0. Expected `{{/if}}` ending at L173:C10 to be at an indentation of 0 but was found at 3.  block-indentation\n  158:2  error  Incorrect indentation for `<p>` beginning at L158:C2. Expected `<p>` to be at an indentation of 4 but was found at 2.  block-indentation\n  168:8  error  Incorrect indentation for `{{user/profile-user-card}}` beginning at L168:C8. Expected `{{user/profile-user-card}}` to be at an indentation of 10 but was found at 8.  block-indentation\n  192:7  error  Incorrect indentation for `if` beginning at L174:C2. Expected `{{/if}}` ending at L192:C7 to be at an indentation of 2 but was found at 0.  block-indentation\n  175:3  error  Incorrect indentation for `{{#if}}` beginning at L175:C3. Expected `{{#if}}` to be at an indentation of 4 but was found at 3.  block-indentation\n  191:9  error  Incorrect indentation for `if` beginning at L175:C3. Expected `{{/if}}` ending at L191:C9 to be at an indentation of 3 but was found at 2.  block-indentation\n  176:3  error  Incorrect indentation for `<p>` beginning at L176:C3. Expected `<p>` to be at an indentation of 5 but was found at 3.  block-indentation\n  177:4  error  Incorrect indentation for `<div>` beginning at L177:C4. Expected `<div>` to be at an indentation of 5 but was found at 4.  block-indentation\n  186:8  error  Incorrect indentation for `{{user/profile-user-card}}` beginning at L186:C8. Expected `{{user/profile-user-card}}` to be at an indentation of 10 but was found at 8.  block-indentation\n  196:0  error  Incorrect indentation for `<div>` beginning at L196:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  198:2  error  Incorrect indentation for `{{#paper-button}}` beginning at L198:C2. Expected `{{#paper-button}}` to be at an indentation of 4 but was found at 2.  block-indentation\n  210:8  error  Incorrect indentation for `if` beginning at L204:C0. Expected `{{/if}}` ending at L210:C8 to be at an indentation of 0 but was found at 1.  block-indentation\n  205:4  error  Incorrect indentation for `{{#if}}` beginning at L205:C4. Expected `{{#if}}` to be at an indentation of 2 but was found at 4.  block-indentation\n  206:8  error  Incorrect indentation for `{{#paper-content}}` beginning at L206:C8. Expected `{{#paper-content}}` to be at an indentation of 6 but was found at 8.  block-indentation\n  207:9  error  Incorrect indentation for `{{#paper-button}}` beginning at L207:C9. Expected `{{#paper-button}}` to be at an indentation of 10 but was found at 9.  block-indentation\n  95:40  error  elements cannot have inline styles  no-inline-styles\n  65:48  error  \'card\' is defined but never used  no-unused-block-params\n  2:23  error  you must use double quotes in templates  quotes\n  4:11  error  you must use double quotes in templates  quotes\n  11:32  error  you must use double quotes in templates  quotes\n  13:21  error  you must use double quotes in templates  quotes\n  17:32  error  you must use double quotes in templates  quotes\n  23:32  error  you must use double quotes in templates  quotes\n  29:32  error  you must use double quotes in templates  quotes\n  41:26  error  you must use double quotes in templates  quotes\n  59:48  error  you must use double quotes in templates  quotes\n  65:26  error  you must use double quotes in templates  quotes\n  71:46  error  you must use double quotes in templates  quotes\n  102:22  error  you must use double quotes in templates  quotes\n  108:99  error  you must use double quotes in templates  quotes\n  108:134  error  you must use double quotes in templates  quotes\n  111:103  error  you must use double quotes in templates  quotes\n  111:138  error  you must use double quotes in templates  quotes\n  113:171  error  you must use double quotes in templates  quotes\n  118:27  error  you must use double quotes in templates  quotes\n  118:62  error  you must use double quotes in templates  quotes\n  130:20  error  you must use double quotes in templates  quotes\n  131:26  error  you must use double quotes in templates  quotes\n  146:20  error  you must use double quotes in templates  quotes\n  147:26  error  you must use double quotes in templates  quotes\n  165:26  error  you must use double quotes in templates  quotes\n  168:119  error  you must use double quotes in templates  quotes\n  183:26  error  you must use double quotes in templates  quotes\n  186:119  error  you must use double quotes in templates  quotes\n  206:31  error  you must use double quotes in templates  quotes\n  207:31  error  you must use double quotes in templates  quotes\n  207:83  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('vidya-frontend/templates/user/user-chat-list.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'vidya-frontend/templates/user/user-chat-list.hbs should pass TemplateLint.\n\nvidya-frontend/templates/user/user-chat-list.hbs\n  21:19  error  Incorrect indentation for `paper-content` beginning at L1:C0. Expected `{{/paper-content}}` ending at L21:C19 to be at an indentation of 0 but was found at 1.  block-indentation\n  3:4  error  Incorrect indentation for `<div>` beginning at L3:C4. Expected `<div>` to be at an indentation of 2 but was found at 4.  block-indentation\n  1:23  error  you must use double quotes in templates  quotes\n  9:16  error  you must use double quotes in templates  quotes\n  10:22  error  you must use double quotes in templates  quotes\n  12:28  error  you must use double quotes in templates  quotes\n  15:52  error  you must use double quotes in templates  quotes\n');
  });
});
define('vidya-frontend/tests/lint/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('integration/components/create-news-dialog-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/create-news-dialog-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/doc-content-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/doc-content-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/group-card-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/group-card-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/news/crsgroup-dialog-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/news/crsgroup-dialog-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/news/detail-card-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/news/detail-card-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/page-bottombar-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/page-bottombar-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/page-toolbar-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/page-toolbar-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/socials/group-page-card-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/socials/group-page-card-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/socials/message-box-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/socials/message-box-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/socials/message-card-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/socials/message-card-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/socials/message-container-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/socials/message-container-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/socials/social-card-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/socials/social-card-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/socials/social-detail-view-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/socials/social-detail-view-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/socials/social-list-card-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/socials/social-list-card-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/user/chat-box-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/user/chat-box-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/user/chat-card-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/user/chat-card-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/user/chat-container-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/user/chat-container-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/user/chat-list-card-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/user/chat-list-card-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/helpers/chatgroup-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/helpers/chatgroup-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/bottombar-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/bottombar-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/discuss/chat-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/discuss/chat-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/discuss/group-page-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/discuss/group-page-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/news/category-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/news/category-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/news/search-category-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/news/search-category-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/social-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/social-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/startup-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/startup-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/user/chat-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/user/chat-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/user/chat-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/user/chat-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/user/chatting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/user/chatting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/user/group-chat-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/user/group-chat-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/initializers/services-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/services-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/adsupdate-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/adsupdate-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/advertise-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/advertise-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/category-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/category-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/celebrity-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/celebrity-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/channel-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/channel-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/chatlist-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/chatlist-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/crsgroup-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/crsgroup-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/crsnew-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/crsnew-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/discuss-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/discuss-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/enduser-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/enduser-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/grouplist-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/grouplist-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/lennew-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/lennew-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/message-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/message-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/notification-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/notification-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/social-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/social-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/discuss/chat-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/discuss/chat-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/discuss/group-page-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/discuss/group-page-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/news/search-category-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/news/search-category-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/social-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/social-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/startup-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/startup-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/user/chat-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/user/chat-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/user/chat-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/user/chat-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/user/chatting-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/user/chatting-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/user/find-friends-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/user/find-friends-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/user/group-chat-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/user/group-chat-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/user/profile-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/user/profile-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/connection-status-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/connection-status-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/downloadfile-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/downloadfile-test.js should pass ESLint\n\n');
  });
});
define('vidya-frontend/tests/test-helper', ['vidya-frontend/app', 'vidya-frontend/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('vidya-frontend/tests/unit/controllers/bottombar-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | bottombar', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:bottombar');
      assert.ok(controller);
    });
  });
});
define('vidya-frontend/tests/unit/controllers/discuss/chat-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | discuss/chat', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:discuss/chat');
      assert.ok(controller);
    });
  });
});
define('vidya-frontend/tests/unit/controllers/discuss/group-page-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | discuss/group-page', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:discuss/group-page');
      assert.ok(controller);
    });
  });
});
define('vidya-frontend/tests/unit/controllers/login-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | login', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:login');
      assert.ok(controller);
    });
  });
});
define('vidya-frontend/tests/unit/controllers/news/category-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | news/category', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:news/category');
      assert.ok(controller);
    });
  });
});
define('vidya-frontend/tests/unit/controllers/news/search-category-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | news/search-category', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:news/search-category');
      assert.ok(controller);
    });
  });
});
define('vidya-frontend/tests/unit/controllers/social-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | social', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:social');
      assert.ok(controller);
    });
  });
});
define('vidya-frontend/tests/unit/controllers/startup-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | startup', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:startup');
      assert.ok(controller);
    });
  });
});
define('vidya-frontend/tests/unit/controllers/user/chat-list-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | user/chat-list', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:user/chat-list');
      assert.ok(controller);
    });
  });
});
define('vidya-frontend/tests/unit/controllers/user/chat-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | /user/chat', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:/user/chat');
      assert.ok(controller);
    });
  });
});
define('vidya-frontend/tests/unit/controllers/user/chatting-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | user/chatting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:user/chatting');
      assert.ok(controller);
    });
  });
});
define('vidya-frontend/tests/unit/controllers/user/group-chat-list-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | user/group-chat-list', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:user/group-chat-list');
      assert.ok(controller);
    });
  });
});
define('vidya-frontend/tests/unit/initializers/services-test', ['vidya-frontend/initializers/services', 'qunit', 'ember-qunit'], function (_services, _qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Initializer | services', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    hooks.beforeEach(function () {
      this.TestApplication = Ember.Application.extend();
      this.TestApplication.initializer({
        name: 'initializer under test',
        initialize: _services.initialize
      });

      this.application = this.TestApplication.create({ autoboot: false });
    });

    hooks.afterEach(function () {
      Ember.run(this.application, 'destroy');
    });

    // Replace this with your real tests.
    (0, _qunit.test)('it works', async function (assert) {
      await this.application.boot();

      assert.ok(true);
    });
  });
});
define('vidya-frontend/tests/unit/models/adsupdate-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | adsupdate', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('adsupdate', {});
      assert.ok(model);
    });
  });
});
define('vidya-frontend/tests/unit/models/advertise-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | advertise', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('advertise', {});
      assert.ok(model);
    });
  });
});
define('vidya-frontend/tests/unit/models/category-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | category', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('category', {});
      assert.ok(model);
    });
  });
});
define('vidya-frontend/tests/unit/models/celebrity-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | celebrity', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('celebrity', {});
      assert.ok(model);
    });
  });
});
define('vidya-frontend/tests/unit/models/channel-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | channel', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('channel', {});
      assert.ok(model);
    });
  });
});
define('vidya-frontend/tests/unit/models/chatlist-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | chatlist', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('chatlist', {});
      assert.ok(model);
    });
  });
});
define('vidya-frontend/tests/unit/models/crsgroup-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | crsgroup', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('crsgroup', {});
      assert.ok(model);
    });
  });
});
define('vidya-frontend/tests/unit/models/crsnew-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | crsnew', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('crsnew', {});
      assert.ok(model);
    });
  });
});
define('vidya-frontend/tests/unit/models/discuss-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | discuss', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('discuss', {});
      assert.ok(model);
    });
  });
});
define('vidya-frontend/tests/unit/models/enduser-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | enduser', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('enduser', {});
      assert.ok(model);
    });
  });
});
define('vidya-frontend/tests/unit/models/grouplist-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | grouplist', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('grouplist', {});
      assert.ok(model);
    });
  });
});
define('vidya-frontend/tests/unit/models/lennew-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | lennew', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('lennew', {});
      assert.ok(model);
    });
  });
});
define('vidya-frontend/tests/unit/models/message-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | message', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('message', {});
      assert.ok(model);
    });
  });
});
define('vidya-frontend/tests/unit/models/notification-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | notification', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('notification', {});
      assert.ok(model);
    });
  });
});
define('vidya-frontend/tests/unit/models/social-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | social', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('social', {});
      assert.ok(model);
    });
  });
});
define('vidya-frontend/tests/unit/routes/discuss/chat-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | discuss/chat', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:discuss/chat');
      assert.ok(route);
    });
  });
});
define('vidya-frontend/tests/unit/routes/discuss/group-page-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | discuss/group-page', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:discuss/group-page');
      assert.ok(route);
    });
  });
});
define('vidya-frontend/tests/unit/routes/login-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | login', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:login');
      assert.ok(route);
    });
  });
});
define('vidya-frontend/tests/unit/routes/news/search-category-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | news/search-category', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:news/search-category');
      assert.ok(route);
    });
  });
});
define('vidya-frontend/tests/unit/routes/social-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | social', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:social');
      assert.ok(route);
    });
  });
});
define('vidya-frontend/tests/unit/routes/startup-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | startup', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:startup');
      assert.ok(route);
    });
  });
});
define('vidya-frontend/tests/unit/routes/user/chat-list-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | user/chat-list', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:user/chat-list');
      assert.ok(route);
    });
  });
});
define('vidya-frontend/tests/unit/routes/user/chat-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | /user/chat', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:/user/chat');
      assert.ok(route);
    });
  });
});
define('vidya-frontend/tests/unit/routes/user/chatting-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | user/chatting', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:user/chatting');
      assert.ok(route);
    });
  });
});
define('vidya-frontend/tests/unit/routes/user/find-friends-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | user/find-friends', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:user/find-friends');
      assert.ok(route);
    });
  });
});
define('vidya-frontend/tests/unit/routes/user/group-chat-list-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | user/group-chat-list', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:user/group-chat-list');
      assert.ok(route);
    });
  });
});
define('vidya-frontend/tests/unit/routes/user/profile-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | user/profile', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:user/profile');
      assert.ok(route);
    });
  });
});
define('vidya-frontend/tests/unit/services/connection-status-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | connection-status', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:connection-status');
      assert.ok(service);
    });
  });
});
define('vidya-frontend/tests/unit/services/downloadfile-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | downloadfile', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:downloadfile');
      assert.ok(service);
    });
  });
});
define('vidya-frontend/config/environment', [], function() {
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

require('vidya-frontend/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
