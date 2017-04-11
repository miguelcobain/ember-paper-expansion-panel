import Ember from 'ember';
import config from './config/environment';
const { Router: ERouter } = Ember;

const Router = Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
});

export default Router;
