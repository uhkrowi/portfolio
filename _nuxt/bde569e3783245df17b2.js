(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{195:function(t,n,e){"use strict";e.r(n);var r={data:function(){return{skills:[{lang:"PHP",icon:"php.png",rating:4},{lang:"Go",icon:"golang.png",rating:2},{lang:"Python",icon:"python.png",rating:2},{lang:"C Sharp",icon:"csharp.png",rating:4},{lang:"Javascript",icon:"javascript.png",rating:4},{lang:"NodeJS",icon:"nodejs.png",rating:4},{lang:"PostgreSQL",icon:"postgre.png",rating:3},{lang:"SQL Server",icon:"sql-server.png",rating:2},{lang:"MySQL",icon:"mysql.png",rating:3},{lang:"Flutter",icon:"flutter.png",rating:3},{lang:"VueJS",icon:"vue.png",rating:3},{lang:"Tailwind",icon:"tailwind.png",rating:2},{lang:"Git",icon:"git.png",rating:3},{lang:"Azure",icon:"azure.png",rating:2},{lang:"Wordpress",icon:"wordpress.png",rating:3},{lang:"Nuxt",icon:"nuxt.png",rating:3}],experiences:[{company:"BeIT",position:"Front End Programmer",location:"Bogor",date:"01/2020 - Current",functions:["On working...","On working...","On working...","On working..."]},{company:"Ink And Canvas",position:"Back End Programmer",location:"Bogor",date:"11/2017 - 10/2019",functions:["Worked closely with clients to establish problem, specifications and system designs.","Coordinated with the team in developing project plans and solutions.","Built, tested, deployed, and modified applications.","Tuned up code from the initial version to release the better application's performance.","Collect and debugged application issues."]},{company:"Indovisual Investama",position:"Full Stack Developer",location:"Jakarta",date:"02/2016 - 11/2017",functions:["Collaborated with product management to design, build, integrate and test systems.","Designed new product elements such as IR and RF connection, RSTP live streaming, hardware integration, and device-to-device communication.","Modified existing software to correct errors, and improve performance."]},{company:"LP3I Jakarta",position:"Programmer & Data Entry",location:"Jakarta",date:"02/2016 - 11/2017",functions:["Designed, built and maintained an application that helps data entry input matriculant data.","Reviewed completed work for compliance with regulations.","Organized, sorted and checked data form against original documents."]}],educations:[{major:"Informatics Computer",institution:"LP3I",title:"Diploma III",date:"2013 - 2016",location:"Jakarta"},{major:"Computer Engineering",institution:"Auto Matsuda",title:"High School",date:"2010 - 2013",location:"Kuningan, West Java"}]}},methods:{toggleVisibility:function(section){document.getElementById(section).classList.toggle("hidden")}}},o=e(8),l={components:{About:Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"mb-8 relative"},[t._m(0),t._v(" "),e("p",{staticClass:"mt-3 mb-1 text-3xl text-center text-primary"},[t._v("\n    Nurul Uhkrowi\n  ")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"mx-2 mb-4 mt-1 bg-white border border-r-2 border-b-2 rounded-md border-primary shadow-lg"},[e("div",{staticClass:"py-2 px-4 font-bold cursor-pointer",on:{click:function(n){return t.toggleVisibility("skillset")}}},[t._v("\n      Skillset\n    ")]),t._v(" "),e("div",{staticClass:"hidden",attrs:{id:"skillset"}},t._l(t.skills,(function(n,r){return e("div",{key:r,staticClass:"flex justify-between px-4 py-1 pb-4"},[e("div",{staticClass:"items-center"},[e("img",{staticClass:"w-6 mr-1 inline-block",attrs:{src:"/icon/"+n.icon}}),t._v(" "),e("span",[t._v(t._s(n.lang))])]),t._v(" "),e("div",t._l(n.rating,(function(n){return e("span",{key:n,staticClass:"text-xs"},[t._v("\n            ⭐\n          ")])})),0)])})),0)]),t._v(" "),e("div",{staticClass:"mx-2 mb-4 mt-1 bg-white border border-r-2 border-b-2 rounded-md border-primary shadow-lg"},[e("div",{staticClass:"py-2 px-4 font-bold cursor-pointer",on:{click:function(n){return t.toggleVisibility("experience")}}},[t._v("\n      Experience\n    ")]),t._v(" "),e("div",{staticClass:"hidden",attrs:{id:"experience"}},t._l(t.experiences,(function(n,r){return e("div",{key:r,staticClass:"px-4 py-1 pb-4"},[e("p",{staticClass:"text-xl"},[t._v(t._s(n.position))]),t._v(" "),e("p",{staticClass:"font-bold text-blue-800"},[t._v(t._s(n.company))]),t._v(" "),e("div",[e("span",{staticClass:"text-xs"},[e("img",{staticClass:"h-4 inline-block",attrs:{src:"/icon/calendar-fill.png"}}),t._v("\n            "+t._s(n.date)+"\n          ")]),t._v(" "),e("span",{staticClass:"text-xs font-bold float-right"},[e("img",{staticClass:"h-4 inline-block",attrs:{src:"/icon/marker-fill.png"}}),t._v("\n            "+t._s(n.location)+"\n          ")])]),t._v(" "),e("div",{staticClass:"mt-2"},t._l(n.functions,(function(n,r){return e("p",{key:r},[t._v("\n            • "+t._s(n)+"\n          ")])})),0),t._v(" "),e("div",{staticClass:"mb-4"}),t._v(" "),e("hr")])})),0)]),t._v(" "),e("div",{staticClass:"mx-2 mb-4 mt-1 bg-white border border-r-2 border-b-2 rounded-md border-primary shadow-lg"},[e("div",{staticClass:"py-2 px-4 font-bold cursor-pointer",on:{click:function(n){return t.toggleVisibility("education")}}},[t._v("\n      Educations\n    ")]),t._v(" "),e("div",{staticClass:"hidden",attrs:{id:"education"}},t._l(t.educations,(function(n,r){return e("div",{key:r,staticClass:"px-4 py-1 pb-4"},[e("p",{staticClass:"text-xl"},[t._v(t._s(n.major))]),t._v(" "),e("p",{staticClass:"font-bold text-blue-800"},[t._v("\n          "+t._s(n.title)+",\n          "+t._s(n.institution)+"\n        ")]),t._v(" "),e("div",[e("span",{staticClass:"text-sm"},[e("img",{staticClass:"h-4 inline-block",attrs:{src:"/icon/calendar-fill.png"}}),t._v("\n            "+t._s(n.date)+"\n          ")]),t._v(" "),e("span",{staticClass:"text-sm font-bold float-right"},[e("img",{staticClass:"h-4 inline-block",attrs:{src:"/icon/marker-fill.png"}}),t._v("\n            "+t._s(n.location)+"\n          ")])])])})),0)])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"w-20 mx-auto bg-white rounded-full border border-primary shadow-lg mt-6"},[n("img",{staticClass:" mx-auto rounded-full",attrs:{src:"/icon/profile.jpeg"}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"mb-6 text-sm text-primary flex justify-center items-center"},[n("img",{staticClass:"h-4 mr-1",attrs:{src:"/icon/marker-fill.png"}}),this._v("\n    Bogor, Indonesia\n  ")])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"mx-2 mb-4 py-1 bg-white border border-r-2 border-b-2 rounded-md border-primary shadow-lg"},[n("p",{staticClass:"px-4 mt-2 mb-2"},[this._v("\n      Experienced Software Engineer with a demonstrated history of working in the information technology and services industry over 4 years of experience.\n    ")]),this._v(" "),n("p",{staticClass:"px-4 mt-3 mb-2"},[this._v("\n      Skilled in SQL, PHP, NodeJS, C#, Javascript, Dart, and Raspberry Pi. Using problem-solving and critical thinking to modify and innovate programs for computer applications.\n    ")])])}],!1,null,null,null).exports}},c=Object(o.a)(l,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("About")],1)}),[],!1,null,null,null);n.default=c.exports}}]);