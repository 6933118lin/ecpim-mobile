// require.js 的主配置文件
require.config( {
  // 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.8.2.min")
  paths: {
        // Core Libraries
        "jquery": "../libs/jquery",
        "jquerymobile": "../libs/jquery.mobile",
        "jqueryslider": "../libs/jquery.slide.wrapper",
        "text": "../libs/text"
  }
});
// 初始化配置及导入所有依赖 Includes File Dependencies
require([ "MainViewCodeBehind", "jquery", "jquerymobile"], function(MainViewCodeBehind, $) {
    $(function () {
        new MainViewCodeBehind();
    });
});
