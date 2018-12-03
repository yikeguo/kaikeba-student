import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-main',
  template: `
    <!--<p>-->
      <!--<a routerLink="ucenter">ucenter</a>-->
      <!--<a routerLink="course/1">course</a>-->
      <!--&lt;!&ndash;动态传参&ndash;&gt;-->
      <!--<a [routerLink]="['course', 1, {foo: 'foo'}]">course</a>-->
      <!--<a [routerLink]="['course', 1, {foo: 'foo'}]"-->
         <!--[queryParams]="{bar:'bar'}">course</a>-->
      <!--<input type="text" #courseId>-->
      <!--<button (click)="gotoCourse(courseId.value)">course</button>-->
    <!--</p>-->

    <div class="wrapper">
      <!--顶部导航-->
      <div class="top-nav">
        <div class="wrap">
          <a class="logo" href="http://www.kaikeba.com/"></a>
          <ul class="nav-menu">
            <li><a href>首页</a></li>
            <li><a href>学吧</a></li>
            <li><a href>APP</a></li>
            <li><a href>关于我们</a></li>
          </ul>
          <div class="r-menu">
            <div class="search-box">
              <input type="text">
            </div>
            <div class="user-box">
              <img src="http://kkbconsole2.kaikeba.com/statics/images/avatar_100_100.png"
                   class="user-avatar" width="100" height="100">
              <div class="menu"></div>
            </div>
          </div>
        </div>
      </div>

      <!--内容区-->
      <div class="content">
        <div class="wrap">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host{ background: #f5f5f5; min-height: 400px; display: block; }
    .top-nav { background: white; }
    .wrap{ width: 1200px; height: 80px;
      margin: 0 auto; padding: 15px 0;}
    .logo{ float: left; height: 49px; width: 106px;
      background: url(http://student.kaikeba.com/assets/blue_logo-57d711624a.png) no-repeat;
      background-size: 100% auto;}
    ul.nav-menu { float: left; margin-left: 100px; }
    ul.nav-menu>li { float: left; }
    ul.nav-menu>li>a { display: block; height: 50px; line-height: 50px;
      padding: 0px 30px; color: black; font-size: 16px; }
    .r-menu { float: right; height: 50px;}
    .search-box { float: left; margin-top: 10px;}
    .user-box { float: left;}
    .search-box input { border: 0; background: #f5f5f5; border-radius: 15px;
      height: 30px; width: 150px; outline: 0; padding: 0 10px; }
    .user-avatar { background: #ececec; width: 40px; height: 40px;
      border-radius: 50%; margin: 5px 0 5px 30px; }
  `]
})
export class MainComponent implements OnInit {

  constructor(private router: Router,
              private us: UserService) {
  }

  ngOnInit() {
  }

  gotoCourse(courseId) {
    // 紧跟着path是必选参数（参数类型不能是对象）
    // 可选参数传递对象即可
    // 查询参
    this.router.navigate(['/main/course/', courseId, {
      username: 'tom', age: 20,
    }], {
      queryParams: {foo: 'bar'}
    });
  }
}
