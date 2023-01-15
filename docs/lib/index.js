

window.$docsify = {
  el: '#app',
  themeColor: '#39BAE8',
  name: '科文求生指南',
  logo: './img/科文求生指南.png',
  auto2top: true, //切换页面后是否自动跳转到页面顶部
  coverpage: true, //封面图
  maxLevel: 3, //配置最大支持渲染的标题层级
  onlyCover: false, // 主页仅加载封面，不能滚动到其他页
  loadSidebar: true, //加载自定义侧边栏
  loadNavbar: true, //加载自定义导航栏
  mergeNavbar: true, // Navbar将在较小的屏幕上与侧边栏合并
  // routerMode: 'history', //路由方式 默认hash
  // basePath: '/',
  // nameLink: '/docs/',
  subMaxLevel: 2, //自定义侧边栏同时也可以开启目录功能
  repo: 'https://github.com/Wild-dog-is-me/Wild-dog-is-me.github.io/tree/main/docs', // 右上角小部件
  formatUpdated: '{YYYY}-{MM}-{DD} {HH}:{mm}', //变量显示文档更新日期
  notFoundPage: 'error.md',
  search: {
    placeholder: '  🔍  搜索试试',
    noData: '抱歉！找不到对应的结果'
  },
  pagination: {
    previousText: '上一节',
    nextText: '下一节',
    crossChapter: true
  },
  count : {
    positionL: "bottom",
    countable: true,
    fontSize:'0.9em',
    color: 'rgb(70,130,180)',
    language : 'chinese'
  },
  cusdis: {
    host: 'https://cusdis.com',
    appId: '94ffb0e2-6999-46d1-8a68-4ee53d547c3c',
  },
  waline: {
    // 必填。例子：https://your-domain.vercel.app
    serverURL: "https://kwxy-browse-aoygnxdt0-wild-dog-is-me.vercel.app",
    // 开启浏览量统计
    pageview: true,
    // ...
    // 不支持 el 和 path 参数自定义
  },

  plugins: [
    function(hook, vm) {
      hook.beforeEach(function(html) {
        return html + '\n' + '⏰ 更新于： {docsify-updated} ';
      });

      hook.doneEach(function() {
        var label, domObj, main, divEle;
        label = vm.route.path.split('/').pop();
        domObj = Docsify.dom;
        main = domObj.getNode('#main');
        // Array.apply(null, document.querySelectorAll('div.gitalk-container')).forEach(function(ele) {
        //   ele.remove();
        // });
        divEle = domObj.create('div');
        divEle.id = 'gitalk-container-' + label;
        divEle.className = 'gitalk-container';
        divEle.style = 'width: ' + main.clientWidth + 'px; margin: 0 auto 20px;';
        domObj.appendTo(domObj.find('.content'), divEle);
        // gitalk = new Gitalk(Object.assign(gitalkConfig, { id: !label ? 'home' : label }));
        // gitalk.render('gitalk-container-' + label);
      });
    }
  ]
};
