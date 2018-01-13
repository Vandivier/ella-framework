# Ella Framework

Ella is a [universal JavaScript](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) application development framework.

Ella has two subprojects:

1. [Ella Framework](https://github.com/Vandivier/ella-framework) is an opinionated [Angular Universal](https://universal.angular.io/) implementation. As such, it includes UI code and a rendering server.
2. [Ella API](https://github.com/Vandivier/ella-api) is an opinionated [Loopback](https://loopback.io/) API server.

### Why is it called Ella?
'Ella' personifies E.L.A, an abbreviation of Express + Loopback + Angular.

The project was originally an Angular Universal CMS and called Ng Express CMS. For technical reasons the API server was split out and implemented in Loopback.

Loopback does not leverage Express in all versions, and the API server can be used with or without Angular. This called for a rename.

To prevent renaming in the future, the technical ingrediants were obfoscated in the current name. If the project composition changes further, it will continue to operate under the name 'Ella'.

### Starting the Project
1. `npm install`
2. `npm start`
3. visit localhost:4200

### Additional Setup for Development
1. Globally install [Angular CLI](https://github.com/angular/angular-cli#installation): `npm install -g @angular/cli`

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
1. https://github.com/seriema/angular-apimock
1. https://github.com/EreckGordon/angular-universal-pwa-starter
1. https://github.com/ramsaylanier/VuePress
1. https://scotch.io/tutorials/angular-2-http-requests-with-observables
1. https://codecraft.tv/courses/angular/http/core-http-api/
1. https://stackoverflow.com/questions/34190375/how-can-i-await-on-an-rx-observable
1. https://github.com/angular/angular/issues/4017
1. https://www.google.com/search?q=loopback+get+authorization+token&rlz=1C1GCEA_enUS779US779&oq=loopback+get+authorization+token&aqs=chrome..69i57j0.4191j0j7&sourceid=chrome&ie=UTF-8

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

### Other Stuff & Conventions

1. generate components like `ng generate service ServiceStateManager --flat=false`
    1. prefix with component type so when we sort components are grouped
    1. non-flat to prevent so many files in one dir
1. name services like service-a and componenets like component-b (ng cli compatible)
1. it's a strongly embedded convention in Angular CLI that the main app & module are called 'app'
