# ng-express-cms
Because KeystoneJS is honestly shit

Right now I'm using Angular (v5.1+) in this repo.

Dibs on the name Express CMS for when I start supporting other frameworks, esp Vue and React

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.1.

### Launching the app
1. `npm install` in the ng-express-cms child folder
1. `npm start` in the ng-express-cms child folder
1. visit localhost:4200 for the UI app. API served from localhost:3200

### Architecty Things
1. The API server and the Angular Universal server are distinct. So there are three entry points in the code:
    1. Express API server entry point at /src/server.js
    1. Angular Universal server entry point at /src/main.ts
    1. Angular Universal UI entry point at /src/client/app.module.ts

### related projects and links
The most important is #1. #2+ are not ordered.
1. https://medium.com/@cyrilletuzi/angular-server-side-rendering-in-node-with-express-universal-engine-dce21933ddce
1. https://blog.angular.io/version-5-0-0-of-angular-now-available-37e414935ced
1. https://github.com/born2net/ng-skeleton
1. https://universal.angular.io/
1. https://blog.angularindepth.com/creating-an-angular-universal-app-with-the-angular-cli-5ef26c9fd9a5
1. https://medium.com/@evertonrobertoauler/angular-5-universal-with-transfer-state-using-angular-cli-19fe1e1d352c
1. https://github.com/tastejs/todomvc/tree/gh-pages/examples/angular2
1. https://github.com/angular/angular-cli
1. https://github.com/born2net/studioDashboard
1. https://github.com/angular/universal-starter
1. https://codecraft.tv/courses/angular/reactive-programming-with-rxjs/rxjs-and-angular/
1. https://developers.google.com/web/fundamentals/architecture/app-shell
1. https://blog.angular.io/angular-5-1-more-now-available-27d372f5eb4e
1. http://www.afterecon.com/other/existing-js-cms-solutions-shit/
1. https://www.youtube.com/watch?v=oa9cnWTpqP8
1. https://github.com/angular/universal-starter/issues/411
1. https://github.com/typeorm/typescript-express-example/blob/master/src/routes.ts
1. https://github.com/seriema/angular-apimock

UX: Bootstrap 4 + Angular Material + Rando Components including Angular and HTML5, SCSS
1. using Boostrap 4.0.0-beta.3
1. https://www.youtube.com/watch?v=-k73oWFrRoE
1. https://getbootstrap.com/docs/4.0/examples/
1. https://material.angular.io/components/categories
1. https://www.youtube.com/watch?v=XGEsZmoZNbw
1. https://scotch.io/tutorials/using-sass-with-the-angular-cli
1. https://www.youtube.com/watch?v=2osMpXOe5fA
1. CSS Grid...? https://www.youtube.com/watch?v=7kVeCqQCxlk
1. CSS Grid...? https://www.youtube.com/watch?v=jV8B24rSN5o
1. https://ng-bootstrap.github.io/#/components/rating/examples
1. https://www.bootstrapcdn.com/

Auth and Firebase
1. https://www.youtube.com/watch?v=O_jxEC0hWcA
1. https://github.com/diegohaz/rest

Chart.js w/ Angular 5, with data and API (ng generate service)
1. https://www.youtube.com/watch?v=RTzi5DS7On4

Card component
https://getbootstrap.com/docs/4.0/components/card/

log in
https://getbootstrap.com/docs/4.0/examples/signin/

admin ui / dashboard
https://getbootstrap.com/docs/4.0/examples/dashboard/

blog (pre-archive)
https://getbootstrap.com/docs/4.0/examples/blog/

homepage
https://getbootstrap.com/docs/4.0/examples/justified-nav/#

magic werdz
ng generate component navbar --module app

orchestration, ORM, API generation
1. https://www.slant.co/improve/topics/11235/~javascript-orms
1. https://loopback.io/ (v4)
1. https://github.com/odino/the-conductor


https://dev.mysql.com/downloads/windows/installer/5.7.html
mysql-installer-web-community-5.7.20.0.msi
localhost db server tcp/ip at port 3306, config type dev machine, root pass: password
run as windows service, name MySQL57
interact via mysql shell (mysql-js)

conventions
1. generate non-flat services (generate --flat=false)
1. seperate API server from ng universal rendering back end
1. name services like service-a and componenets like component-b (ng cli compatible)
