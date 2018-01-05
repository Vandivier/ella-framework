# Ella Framework

Ella is a [universal JavaScript](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) application development framework.

Ella has two subprojects:
1. [Ella Framework](https://github.com/Vandivier/ella-framework) is an opinionated Angular Universal (v5.x+) implementation. As such, it includes UI code and a rendering server.
1. [Ella API](https://github.com/Vandivier/ella-api) is an opinionated Loopback 4 API server.

### Why is it called Ella?
'Ella' personifies E.L.A, an abbreviation of Express + Loopback + Angular. The project was conceived as an Angular Universal CMS and called Ng Express CMS.

For technical reasons the API server was split out and implemented in Loopback 4. Loopback 4 does not leverage Express, and in principle this API server can be used with or without Angular. This calls for a project rename.

To prevent renaming in the future, the technical ingrediants were obfoscated in the current name. If the project composition changes further, it will continue to operate under the name 'Ella'.

### Starting the Project
1. `npm install`
1. `npm start`
1. visit localhost:4200

* Developed w 5.7.20x86, but may work with other versions. The application works out-of-the-box with MySQL, but with trivial modification the project will support other SQL DBs and even NoSQL DBs. The limitting factor is TypeORM.

### Additional Setup for Development
1. Globally install [Angular CLI](https://github.com/angular/angular-cli#installation): `npm install -g @angular/cli`

### Architecty Things
1. The API server and the Angular Universal server are distinct. So there are three entry points in the code:
    1. API server entry point at /src/server.js
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
1. https://github.com/EreckGordon/angular-universal-pwa-starter
1. https://github.com/ramsaylanier/VuePress

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

### Other Stuff & Conventions

1. generate non-flat services (generate --flat=false)
1. name services like service-a and componenets like component-b (ng cli compatible)
