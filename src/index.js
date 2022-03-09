import Button from './packages/button';
import Notice from "./packages/notice/index"; // 动态渲染


const components = {
  lButton: Button,
}

const install = function (Vue, options = {}) {

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });

  Vue.prototype.$notice = Notice;
}

export default install
