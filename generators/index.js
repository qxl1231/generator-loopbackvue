/**
 * Created by qiangxl on 2016/11/14.
 */
var path = require('path');
var chalk = require('chalk');    //不同颜色的info
var util = require('util');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');    //yeoman弹出框
var path = require('path');
var loopbackvue = yeoman.Base.extend({
  info: function() {
    this.log(chalk.green(
      'I am going to build your app!'
    ));
  },
  generateBasic: function() {  //按照自己的templates目录自定义
    this.directory('client', 'client');    //拷贝目录
    this.directory('common', 'common');
    this.directory('server', 'server');
    this.copy('package.json', 'package.json');   //拷贝文件
    this.copy('index.html', 'index.html');
    this.copy('README.md', 'README.md');
    this.copy('.editorconfig', '.editorconfig');
    this.copy('.gitignore', '.gitignore');
    this.copy('.travis.yml', '.travis.yml');
    this.copy('jsconfig.json', 'jsconfig.json');
    this.copy('Wechat.jpeg', 'Wechat.jpeg');
    this.copy('daovoice.png', 'daovoice.png');
    this.copy('alipay.jpeg', 'alipay.jpeg');
    this.copy('ci.sh', 'ci.sh');
    this.copy('circle.yml', 'circle.yml');
  },
  generateClient: function() {
    this.sourceRoot(path.join(__dirname, 'templates'));
    this.destinationPath('./');
  },
  install: function() {      //安装依赖
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  },
  end: function() {
    this.log(yosay(
      'Your app has been created successfully!please run "npm install" later'
    ));
  }
});
module.exports = loopbackvue;
