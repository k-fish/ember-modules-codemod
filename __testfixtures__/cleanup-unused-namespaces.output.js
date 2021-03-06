import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import Controller, { inject as controller } from '@ember/controller';

export default Controller.extend({
  controller: controller('application'),
  router: service('router'),
  anotherRouter: alias('router')
});