import Vue from 'vue';

const requireComponent = require.context(
  '../components', true, /\.vue$/,
);

String.prototype.insert = function (index, string) {
  var ind = index < 0 ? this.length + index  :  index;
  return  this.substring(0, ind) + string + this.substring(ind, this.length);
};

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')

  let regxp = /[A-Z]+/g;
  let value;
  let indexes = [];
  let finalComponentName = componentName;
  while (value = regxp.exec(componentName)) {
    indexes.push(value.index);
  }
  indexes
  indexes.filter( val => val > 0).forEach((idx, index) => finalComponentName = finalComponentName.insert(idx+index, '-'));   

  Vue.component(`t-${finalComponentName.toLowerCase()}` , componentConfig.default || componentConfig);
});