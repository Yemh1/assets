!function(e){function t(t){for(var a,s,i=t[0],u=t[1],l=t[2],f=0,p=[];f<i.length;f++)s=i[f],o[s]&&p.push(o[s][0]),o[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);for(c&&c(t);p.length;)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={1:0};var r=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=u;r.push([36,0]),n()}([,,,,,,,,,,,,,function(e,t,n){"use strict";var a=c(n(12)),o=c(n(11)),r=c(n(10)),s=c(n(9)),i=c(n(8)),u=c(n(7)),l=c(n(6));function c(e){return e&&e.__esModule?e:{default:e}}a.default.config={autoReplaceSvg:"nest"},a.default.library.add(o.default,r.default,s.default,i.default,u.default,l.default)},,,,function(e,t,n){(e.exports=n(16)(!1)).push([e.i,"body {\n  padding-top: 50px; }\n\n.no-margin {\n  margin: 0px; }\n\n.no-padding {\n  padding: 0px; }\n\n.show {\n  position: fixed;\n  top: 5%;\n  right: 1%; }\n\n.hidden {\n  display: none !important; }\n\n.section-url {\n  padding-top: 60px; }\n\n.section-question {\n  padding-top: 30px;\n  background: #e8f5ff; }\n\n.questions {\n  padding-top: 30px; }\n  .questions .option {\n    height: 40px; }\n\n.download-btn {\n  position: fixed;\n  top: 8px;\n  right: 10px;\n  z-index: 1030; }\n\n.questions-nav.sticky-top {\n  top: 56px; }\n\n.badges {\n  padding: 50px 0px; }\n",""])},function(e,t,n){var a=n(17);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(15)(a,o);a.locals&&(e.exports=a.locals)},function(e,t,n){e.exports=n.p+"logo.png"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),s=(a=r)&&a.__esModule?a:{default:a};var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.Component),o(t,[{key:"newQuestion",value:function(){this.props.onClick()}},{key:"render",value:function(){return s.default.createElement("div",{className:""},s.default.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.newQuestion.bind(this)},s.default.createElement("i",{className:"fas fa-plus-circle"})," Add Question"))}}]),t}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),s=(a=r)&&a.__esModule?a:{default:a};var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={valueQuestion:[],valueOption:[],isChecked:!1,showMessage:!1,editing:!1},n.handleChangeOptions=n.handleChangeOptions.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.Component),o(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({valueQuestion:e.data.q,valueOption:e.answer})}},{key:"componentWillMount",value:function(){this.setState({valueQuestion:this.props.data.q,valueOption:this.props.answer})}},{key:"handleChangeQuestion",value:function(e){this.setState({valueQuestion:e.target.value}),this.props.handleJsonQuestion(e.target.value,{typeRequest:"question"})}},{key:"handleChangeOptions",value:function(e,t){var n=this.state.valueOption.map(function(n,a){return t==a?{option:e.target.value,correct:n.correct}:n});this.setState({valueOption:n}),this.props.handleJsonQuestion(n,{typeRequest:"option"},t)}},{key:"handleChangeOptionsTrueFalse",value:function(e,t){if(this.setState({isChecked:!this.state.isChecked}),this.state.isChecked){var n=this.state.valueOption.map(function(e,n){return t==n?{option:e.option,correct:!0}:e});this.setState({valueOption:n}),this.props.handleJsonQuestion(n,{typeRequest:"checkbox"})}else{var a=this.state.valueOption.map(function(e,n){return t==n?{option:e.option,correct:!1}:e});this.setState({valueOption:a}),this.props.handleJsonQuestion(a,{typeRequest:"checkbox"})}}},{key:"handleDeleteQuestion",value:function(){var e=this;this.setState({showMessage:!0}),setTimeout(function(){e.setState({showMessage:!1})},2e3),this.props.onSelect()}},{key:"handleDeleteOpcion",value:function(e,t){this.props.onDeleteOption(e,t)}},{key:"handleNewOption",value:function(){this.props.onNewOption()}},{key:"handleUpQuestion",value:function(){this.props.onUpQuestion()}},{key:"handleDownQuestion",value:function(){this.props.onDownQuestion()}},{key:"render",value:function(){var e,t=this;return e=this.state.valueOption.map(function(e,n){return s.default.createElement("div",{className:"row option",key:n},s.default.createElement("div",{className:"col-8"},s.default.createElement("input",{className:"form-control",type:"text",value:e.option,onChange:function(e){return t.handleChangeOptions(e,n)},placeholder:"Type your option value"})),s.default.createElement("div",{className:"col-2"},s.default.createElement("label",{className:"float-right"},"Correct?"),s.default.createElement("input",{type:"checkbox",checked:e.correct,value:e.correct,onChange:function(e){return t.handleChangeOptionsTrueFalse(e,n)}})),s.default.createElement("div",{className:"col-2"},s.default.createElement("button",{className:"btn text-danger",onClick:function(){return t.handleDeleteOpcion(e,n)}},s.default.createElement("i",{className:"fas fa-trash-alt text-danger"}))))}),s.default.createElement("div",{className:"questions"},s.default.createElement("div",{className:"message-delete "+(this.state.showMessage?"show ":"hidden")},s.default.createElement("div",{className:"alert alert-danger",role:"alert"},"Question Deleted")),s.default.createElement("button",{type:"button",className:"btn text-danger float-right",onClick:this.handleDeleteQuestion.bind(this)},"delete question"),s.default.createElement("button",{className:"btn text-primary "+(this.props.firstQuestion?"hidden":""),onClick:function(){return t.handleUpQuestion()}},s.default.createElement("i",{class:"fas fa-arrow-circle-up"})),s.default.createElement("button",{className:"btn text-primary "+(this.props.lastQuestion?"hidden":""),onClick:function(){return t.handleDownQuestion()}},s.default.createElement("i",{class:"fas fa-arrow-circle-down"})),s.default.createElement("div",{className:"form-group"},s.default.createElement("input",{className:"form-control",type:"text",value:this.state.valueQuestion,onChange:function(e){return t.handleChangeQuestion(e)},placeholder:"Type your question title"})),e,s.default.createElement("div",{className:"row"},s.default.createElement("div",{className:"col-12"},s.default.createElement("button",{className:"btn text-primary",onClick:function(){return t.handleNewOption()}},s.default.createElement("i",{className:"fas fa-plus-circle"})," new option"))))}}]),t}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),s=(a=r)&&a.__esModule?a:{default:a};var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.Component),o(t,[{key:"newBadges",value:function(){this.props.onClick()}},{key:"render",value:function(){return s.default.createElement("div",{className:""},s.default.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.newBadges.bind(this)},s.default.createElement("i",{className:"fas fa-plus-circle"})," Add Badges"))}}]),t}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=s(n(0)),r=s(n(22));function s(e){return e&&e.__esModule?e:{default:e}}n(1);var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={nameInfo:"",mainInfo:"",resultInfo:"",badges:[],slug:""},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),a(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({nameInfo:e.data.name,mainInfo:e.data.main,resultInfo:e.data.results,slug:e.data.slug,badges:e.data.badges})}},{key:"handleChangeName",value:function(e){this.setState({nameInfo:e.target.value}),this.props.handleJsonInfo({name:e.target.value,main:this.state.mainInfo,results:this.state.resultInfo,badges:this.state.badges,slug:this.state.slug},{typeRequest:"name"})}},{key:"handleChangeMain",value:function(e){this.setState({mainInfo:e.target.value}),this.props.handleJsonInfo({name:this.state.nameInfo,main:e.target.value,results:this.state.resultInfo,badges:this.state.badges,slug:this.state.slug},{typeRequest:"nameMain"})}},{key:"handleChangeResult",value:function(e){this.setState({resultInfo:e.target.value}),this.props.handleJsonInfo({name:this.state.nameInfo,main:this.state.mainInfo,results:e.target.value,badges:this.state.badges,slug:this.state.slug},{typeRequest:"nameResult"})}},{key:"handleChangeSlug",value:function(e,t,n){this.setState({slug:e.target.value}),this.props.handleJsonInfo({name:this.state.nameInfo,main:this.state.mainInfo,results:this.state.resultInfo,badges:this.state.badges,slug:e.target.value},{typeRequest:"nameSlug"})}},{key:"handleChangeNameBadges",value:function(e,t,n){console.log(e,t,n);var a=this.state.badges.map(function(t,a){return n==a?{slug:e.target.value,points:t.points}:{slug:t.slug,points:t.points}});this.setState({badges:a}),this.props.handleJsonInfo({name:this.state.nameInfo,main:this.state.mainInfo,results:this.state.resultInfo,badges:a,slug:this.state.slug},{typeRequest:"nameBadges"})}},{key:"handleChangePointBadges",value:function(e,t,n){console.log(e,t,n);var a=this.state.badges.map(function(t,a){return n==a?{slug:t.slug,points:e.target.value}:{slug:t.slug,points:t.points}});this.setState({badges:a}),this.props.handleJsonInfo({name:this.state.nameInfo,main:this.state.mainInfo,results:this.state.resultInfo,badges:a,slug:this.state.slug},{typeRequest:"pointBadges"})}},{key:"handleNewBadges",value:function(){this.setState({badges:[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(this.state.badges),[{slug:"",points:""}])})}},{key:"handleDeleteBadges",value:function(e,t){var n=this.state.badges.filter(function(t){return t!=e});this.setState({badges:n})}},{key:"render",value:function(){var e,t=this;return e=this.state.badges.map(function(e,n){return o.default.createElement("div",{className:"form-row",key:n},o.default.createElement("div",{className:"form-group col-md-4"},o.default.createElement("input",{type:"text",className:"form-control",value:e.slug,onChange:function(a){return t.handleChangeNameBadges(a,e,n)},placeholder:"Slug"})),o.default.createElement("div",{className:"form-group col-md-4"},o.default.createElement("input",{type:"number",className:"form-control",value:e.points,onChange:function(a){return t.handleChangePointBadges(a,e,n)},placeholder:"Points"})),o.default.createElement("button",{type:"button",onClick:function(){return t.handleDeleteBadges(e,n)},className:"btn text-danger float-right"},"delete"))}),o.default.createElement("div",null,o.default.createElement("div",{className:"section-question p-4"},o.default.createElement("div",{className:"form-group"},o.default.createElement("label",null,"Quiz title"),o.default.createElement("input",{type:"text",className:"form-control",value:this.state.nameInfo,onChange:this.handleChangeName.bind(this)})),o.default.createElement("div",{className:"form-group"},o.default.createElement("label",null,"Description shown to the student before starting the quiz"),o.default.createElement("input",{type:"text",className:"form-control",value:this.state.mainInfo,onChange:this.handleChangeMain.bind(this)})),o.default.createElement("div",{className:"form-group"},o.default.createElement("label",null,"Last message once the quiz is over"),o.default.createElement("input",{type:"text",className:"form-control",value:this.state.resultInfo,onChange:this.handleChangeResult.bind(this)})),o.default.createElement("div",{className:"form-group"},o.default.createElement("label",null,"Slug"),o.default.createElement("input",{type:"text",className:"form-control",value:this.state.slug,onChange:this.handleChangeSlug.bind(this)}))),o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-12"},o.default.createElement("nav",{className:"questions-nav navbar sticky-top navbar-dark bg-dark"},o.default.createElement("a",{className:"navbar-brand",href:"#"},"Badges"),o.default.createElement("div",{className:"ml-auto"},o.default.createElement(r.default,{onClick:this.handleNewBadges.bind(this)})))),o.default.createElement("div",{className:"col-12 col-sm-10 col-md-8 col-xl-6 mx-auto badges"},e)))}}]),t}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=u(n(0)),r=u(n(23)),s=u(n(21)),i=u(n(20));function u(e){return e&&e.__esModule?e:{default:e}}n(1);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={apiBadges:[],apiInfo:[],apiQuestions:[],json:[]},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),a(t,[{key:"componentWillMount",value:function(){this.getApi()}},{key:"getApi",value:function(){var e=this;fetch(this.props.data).then(function(e){return e.json()}).then(function(t){e.setState({apiInfo:t.info,apiQuestions:t.questions,apiBadges:t.info.badges})}).catch(function(e){console.log("error",e)})}},{key:"handleNewQuestion",value:function(){this.setState({apiQuestions:[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(this.state.apiQuestions),[{q:"",a:[{option:"",correct:!1},{option:"",correct:!1},{option:"",correct:!1}]}])}),setTimeout(function(){return window.scrollTo(0,document.body.scrollHeight)},500)}},{key:"handleDeleteQuestion",value:function(e,t){var n=this.state.apiQuestions.filter(function(t){return t!=e});this.setState({apiQuestions:n})}},{key:"handleDeleteOption",value:function(e,t,n){var a=this.state.apiQuestions.map(function(e,a){return t==a?(e.a.splice(n,1),{q:e.q,a:e.a}):{q:e.q,a:e.a}});this.setState({apiQuestions:a})}},{key:"handleNewOption",value:function(e){var t=this.state.apiQuestions.map(function(t,n){return e==n?(t.a.push({option:"",correct:!1}),{q:t.q,a:t.a}):{q:t.q,a:t.a}});this.setState({apiQuestions:t})}},{key:"handleUpQuestion",value:function(e){var t=this.state.apiQuestions,n=e,a=e-1;if(a>=t.length)for(var o=a-t.length+1;o--;)t.push(void 0);t.splice(a,0,t.splice(n,1)[0]),this.setState({apiQuestions:t})}},{key:"handleDownQuestion",value:function(e){var t=this.state.apiQuestions,n=e,a=e+1;if(a>=t.length)for(var o=a-t.length+1;o--;)t.push(void 0);t.splice(a,0,t.splice(n,1)[0]),this.setState({apiQuestions:t})}},{key:"getValueFromQuestion",value:function(e,t,n,a){if("question"==t.typeRequest){var o=this.state.apiQuestions.map(function(t,a){return n==a?{q:e,a:t.a}:{q:t.q,a:t.a}});this.setState({apiQuestions:o})}else if("option"==t.typeRequest){var r=this.state.apiQuestions.map(function(t,a){return n==a?{q:t.q,a:e}:{q:t.q,a:t.a}});this.setState({apiQuestions:r})}else if("checkbox"==t.typeRequest){var s=this.state.apiQuestions.map(function(t,a){return n==a?{q:t.q,a:e}:{q:t.q,a:t.a}});this.setState({apiQuestions:s})}}},{key:"getValueFromInfo",value:function(e,t){"nameBadges"!=t.typeRequest&&"pointBadges"!=t.typeRequest&&"nameSlug"!=t.typeRequest&&"nameResult"!=t.typeRequest&&"nameMain"!=t.typeRequest&&"name"!=t.typeRequest||this.setState({apiInfo:e})}},{key:"download",value:function(e){var t={info:{name:this.state.apiInfo.name,main:this.state.apiInfo.main,results:this.state.apiInfo.results,badges:this.state.apiInfo.badges,slug:this.state.apiInfo.slug},questions:this.state.apiQuestions},n=JSON.stringify(t),a=document.createElement("a");a.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(n)),a.setAttribute("download",e),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a)}},{key:"render",value:function(){var e=this,t=this.state.apiQuestions.map(function(t,n){var a=e.state.apiQuestions.length-1;return 0==n?o.default.createElement(s.default,{key:n,data:t,answer:t.a,handleJsonQuestion:function(t,a,o){return e.getValueFromQuestion(t,a,n,o)},onSelect:function(){return e.handleDeleteQuestion(t,n)},onDeleteOption:function(t,a){return e.handleDeleteOption(t,n,a)},onNewOption:function(){return e.handleNewOption(n)},onUpQuestion:function(){return e.handleUpQuestion(n)},onDownQuestion:function(){return e.handleDownQuestion(n)},firstQuestion:!0}):n<a?o.default.createElement(s.default,{key:n,data:t,answer:t.a,handleJsonQuestion:function(t,a,o){return e.getValueFromQuestion(t,a,n,o)},onSelect:function(){return e.handleDeleteQuestion(t,n)},onDeleteOption:function(t,a){return e.handleDeleteOption(t,n,a)},onNewOption:function(){return e.handleNewOption(n)},onUpQuestion:function(){return e.handleUpQuestion(n)},onDownQuestion:function(){return e.handleDownQuestion(n)}}):o.default.createElement(s.default,{key:n,data:t,answer:t.a,handleJsonQuestion:function(t,a,o){return e.getValueFromQuestion(t,a,n,o)},onSelect:function(){return e.handleDeleteQuestion(t,n)},onDeleteOption:function(t,a){return e.handleDeleteOption(t,n,a)},onNewOption:function(){return e.handleNewOption(n)},onUpQuestion:function(){return e.handleUpQuestion(n)},onDownQuestion:function(){return e.handleDownQuestion(n)},lastQuestion:!0})});return o.default.createElement("div",{className:"container-fluid p-0"},o.default.createElement("button",{className:"btn btn-primary download-btn",onClick:function(){return e.download("quiz.json")}},o.default.createElement("i",{className:"fas fa-download"})," download progress"),o.default.createElement("nav",{className:"navbar navbar-dark bg-dark"},o.default.createElement("a",{className:"navbar-brand",href:"#"},"General Quiz Information")),o.default.createElement(r.default,{data:this.state.apiInfo,handleJsonInfo:function(t,n){return e.getValueFromInfo(t,n)}}),o.default.createElement("nav",{className:"questions-nav navbar sticky-top navbar-dark bg-dark"},o.default.createElement("a",{className:"navbar-brand",href:"#"},"Questions"),o.default.createElement("div",{className:"ml-auto"},o.default.createElement(i.default,{onClick:this.handleNewQuestion.bind(this)}))),o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-12 col-sm-10 col-md-8 col-xl-6 mx-auto"},t)))}}]),t}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),s=(a=r)&&a.__esModule?a:{default:a};n(1);var i=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={value:"https://assets.breatheco.de/apis/quiz/new"},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.Component),o(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onSelect(this.state.value),this.setState({value:""})}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return s.default.createElement("div",{className:"alert alert-primary"},s.default.createElement("h4",{className:"alert-heading"},"Load Quiz from URL"),s.default.createElement("form",{onSubmit:this.handleSubmit.bind(this)},s.default.createElement("div",{className:"form-row"},s.default.createElement("div",{className:"form-group col-md-8"},s.default.createElement("input",{className:"form-control",type:"text",value:this.state.value,onChange:this.handleChange.bind(this),placeholder:"JSON URL HERE"})),s.default.createElement("div",{className:"form-group col"},s.default.createElement("button",{type:"submit",className:"btn btn-light form-control"},"Load Quiz")))))}}]),t}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=i(n(0)),r=i(n(25)),s=i(n(24));i(n(19));function i(e){return e&&e.__esModule?e:{default:e}}n(1);var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={url:"",titleBanner:""},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),a(t,[{key:"urlAPI",value:function(e){this.setState({url:e})}},{key:"render",value:function(){return o.default.createElement("div",null,o.default.createElement("nav",{className:"navbar fixed-top navbar-light bg-light"},o.default.createElement("a",{className:"navbar-brand",href:"#"},o.default.createElement("img",{src:"https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,64",width:"30",height:"30",className:"d-inline-block align-top mr-2",alt:""}),"Quiz Maker - BreatheCode")),this.state.url?o.default.createElement(s.default,{data:this.state.url}):o.default.createElement(r.default,{onSelect:this.urlAPI.bind(this)}))}}]),t}();t.default=u},,,,,,,,,,function(e,t,n){"use strict";var a=s(n(0)),o=s(n(34)),r=s(n(26));function s(e){return e&&e.__esModule?e:{default:e}}n(18),n(13),o.default.render(a.default.createElement(r.default,null),document.getElementById("app"))}]);
//# sourceMappingURL=index.js.map