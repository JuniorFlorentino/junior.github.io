(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"RM+x":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),o=u("mrSG"),e=u("lJxs"),i=u("SG9g"),r=u("H0g1"),s=u("rgjJ"),c=u("ZZ/e");class a{constructor(l,n,u,t,o){this.apiService=l,this.http=n,this.navCtrl=u,this.dataService=t,this.urlService=o,this.listConvocacoes()}listConvocacoes(){return o.b(this,void 0,void 0,function*(){this.apiService.loadShow(),this.http.get(this.urlService.getUrl()+"listConvocacoes.php?id_user=1&id_orgao="+JSON.parse(localStorage.getItem("user")).dados.idorgan+"&id_tipo="+JSON.parse(localStorage.getItem("user")).dados.idtype_person).pipe(Object(e.a)(l=>l.json())).subscribe(l=>{this.convocacoes=l,console.log(this.convocacoes)}),this.apiService.loadHide()})}ngOnInit(){}}class b{}var d=u("pMnS"),h=u("oBZk"),p=u("SVse"),f=u("W2O4"),g=t.pb({encapsulation:0,styles:[[""]],data:{}});function v(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,20,"ion-list",[],null,null,null,h.Z,h.t)),t.qb(1,49152,null,0,c.O,[t.h,t.k,t.x],null,null),(l()(),t.rb(2,0,null,0,18,"ion-card",[["class","welcome-card"],["padding-bottom",""]],null,null,null,h.P,h.f)),t.qb(3,49152,null,0,c.m,[t.h,t.k,t.x],null,null),t.qb(4,16384,null,0,c.d,[t.k],null,null),(l()(),t.rb(5,0,null,0,1,"ion-img",[],null,null,null,h.V,h.p)),t.qb(6,49152,null,0,c.D,[t.h,t.k,t.x],{src:[0,"src"]},null),(l()(),t.rb(7,0,null,0,10,"ion-card-header",[],null,null,null,h.M,h.h)),t.qb(8,49152,null,0,c.o,[t.h,t.k,t.x],null,null),(l()(),t.rb(9,0,null,0,3,"ion-card-subtitle",[],null,null,null,h.N,h.i)),t.qb(10,49152,null,0,c.p,[t.h,t.k,t.x],null,null),(l()(),t.rb(11,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Lb(12,null,[" ",""])),(l()(),t.rb(13,0,null,0,4,"ion-card-title",[],null,null,null,h.O,h.j)),t.qb(14,49152,null,0,c.q,[t.h,t.k,t.x],null,null),(l()(),t.rb(15,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),t.Lb(16,null,["",""])),(l()(),t.Lb(17,0,[" "," "])),(l()(),t.rb(18,0,null,0,2,"ion-card-content",[],null,null,null,h.L,h.g)),t.qb(19,49152,null,0,c.n,[t.h,t.k,t.x],null,null),(l()(),t.rb(20,0,null,0,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],function(l,n){l(n,6,0,"http://157.230.31.242/sindweb/"+n.context.$implicit.url_file)},function(l,n){l(n,12,0,n.context.$implicit.description_og),l(n,16,0,n.context.$implicit.title),l(n,17,0,n.context.$implicit.date),l(n,20,0,n.context.$implicit.description)})}function m(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,11,"ion-header",[],null,null,null,h.T,h.n)),t.qb(1,49152,null,0,c.B,[t.h,t.k,t.x],null,null),(l()(),t.rb(2,0,null,0,9,"ion-toolbar",[["color","dark"]],null,null,null,h.lb,h.F)),t.qb(3,49152,null,0,c.Cb,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.rb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,h.K,h.e)),t.qb(5,49152,null,0,c.l,[t.h,t.k,t.x],null,null),(l()(),t.rb(6,0,null,0,2,"ion-back-button",[["defaultHref","home"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Db(l,8).onClick(u)&&o),o},h.I,h.c)),t.qb(7,49152,null,0,c.g,[t.h,t.k,t.x],{defaultHref:[0,"defaultHref"]},null),t.qb(8,16384,null,0,c.h,[[2,c.ib],c.Jb],{defaultHref:[0,"defaultHref"]},null),(l()(),t.rb(9,0,null,0,2,"ion-title",[],null,null,null,h.kb,h.E)),t.qb(10,49152,null,0,c.Ab,[t.h,t.k,t.x],null,null),(l()(),t.Lb(-1,0,[" Convoca\xe7\xf5es "])),(l()(),t.rb(12,0,null,null,3,"ion-content",[],null,null,null,h.R,h.l)),t.qb(13,49152,null,0,c.u,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,1,null,v)),t.qb(15,278528,null,0,p.j,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,3,0,"dark"),l(n,7,0,"home"),l(n,8,0,"home"),l(n,15,0,u.convocacoes)},null)}function k(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,1,"app-convocacoes",[],null,null,null,m,g)),t.qb(1,114688,null,0,a,[s.a,f.e,c.Jb,r.a,i.a],null,null)],function(l,n){l(n,1,0)},null)}var q=t.nb("app-convocacoes",a,k,{},{},[]),x=u("s7LF"),S=u("iInd");u.d(n,"ConvocacoesPageModuleNgFactory",function(){return B});var B=t.ob(b,[],function(l){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[d.a,q]],[3,t.j],t.v]),t.Bb(4608,p.m,p.l,[t.s,[2,p.v]]),t.Bb(4608,x.q,x.q,[]),t.Bb(4608,c.b,c.b,[t.x,t.g]),t.Bb(4608,c.Ib,c.Ib,[c.b,t.j,t.p]),t.Bb(4608,c.Lb,c.Lb,[c.b,t.j,t.p]),t.Bb(1073742336,p.c,p.c,[]),t.Bb(1073742336,x.p,x.p,[]),t.Bb(1073742336,x.f,x.f,[]),t.Bb(1073742336,c.Eb,c.Eb,[]),t.Bb(1073742336,S.o,S.o,[[2,S.t],[2,S.m]]),t.Bb(1073742336,b,b,[]),t.Bb(1024,S.k,function(){return[[{path:"",component:a}]]},[])])})},rgjJ:function(l,n,u){"use strict";u.d(n,"a",function(){return i});var t=u("mrSG"),o=u("ZZ/e"),e=u("8Y7J");let i=(()=>{class l{constructor(l,n,u){this.toastCtrl=l,this.loadingController=n,this.alertCtrl=u,this.isLoading=!1}alertShow(l,n){return t.b(this,void 0,void 0,function*(){(yield this.alertCtrl.create({header:l,message:n,buttons:["OK"]})).present()})}loadShow(){return t.b(this,void 0,void 0,function*(){return this.isLoading=!0,yield this.loadingController.create({message:"Aguarde um momento..."}).then(l=>{l.present().then(()=>{this.isLoading||l.dismiss().then(()=>{})})})})}loadHide(){return t.b(this,void 0,void 0,function*(){return this.isLoading=!1,yield this.loadingController.dismiss().then(()=>{})})}showToast(l,n){return t.b(this,void 0,void 0,function*(){(yield this.toastCtrl.create({header:l,message:n,duration:2e3})).present()})}cpfValidar(l){var n,u,t;if(n=0,"00000000000"==l)return!1;for(t=1;t<=9;t++)n+=parseInt(l.substring(t-1,t))*(11-t);if(10!=(u=10*n%11)&&11!=u||(u=0),u!=parseInt(l.substring(9,10)))return!1;for(n=0,t=1;t<=10;t++)n+=parseInt(l.substring(t-1,t))*(12-t);return 10!=(u=10*n%11)&&11!=u||(u=0),u==parseInt(l.substring(10,11))}}return l.ngInjectableDef=e.Qb({factory:function(){return new l(e.Rb(o.Pb),e.Rb(o.Gb),e.Rb(o.a))},token:l,providedIn:"root"}),l})()}}]);