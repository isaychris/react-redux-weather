(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(64)},33:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(8),o=a.n(c),i=(a(33),a(19)),l=a(20),s=a(26),d=a(21),m=a(27),u=a(5),p=a(4),h=a.n(p),g=function(e){var t=e.data.daily.data.map(function(t,a){if(a<7){var r=new Date(1e3*t.time).getUTCDay(),c=t.icon.replace(/-/g,"_").toUpperCase();return n.a.createElement("div",{key:a,className:"col-lg-1"},n.a.createElement("section",null,["SUN","MON","TUE","WED","THUR","FRI","SAT"][r]," ",n.a.createElement("br",null),n.a.createElement(h.a,{width:"128",height:"128",style:{width:"100%",height:"auto",maxWidth:"150px"},color:"black",icon:c,autoplay:!0}),"F"===e.mode?t.temperatureMax+" \xb0F":(o=t.temperatureMax,Math.round(5*(o-32)/9)+" \xb0C")))}var o;return null});return n.a.createElement("div",{className:"forecast card border my-3"},n.a.createElement("div",{className:"card-header"},n.a.createElement("h4",null,"7 Day Forecast")),n.a.createElement("div",{class:"card-body text-secondary"},n.a.createElement("div",{className:"row seven-cols"},t),e.data.daily.summary))},E=function(e){var t,a=e.data.currently.icon.replace(/-/g,"_").toUpperCase();return n.a.createElement("div",{className:"current card border my-3"},n.a.createElement("div",{className:"card-header"},n.a.createElement("h4",null,"Current Forecast")),n.a.createElement("div",{className:"card-body text-secondary"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4"},n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item"},e.data.timezone),n.a.createElement("li",{className:"list-group-item"},"F"===e.mode?e.data.currently.temperature+" \xb0F":(t=e.data.currently.temperature,Math.round(5*(t-32)/9)+" \xb0C")),n.a.createElement("li",{className:"list-group-item"},e.data.currently.summary))),n.a.createElement("div",{className:"col-md-4"},n.a.createElement(h.a,{width:"128",height:"128",style:{width:"128px",height:"128px"},color:"black",icon:a,autoplay:!0})),n.a.createElement("div",{className:"col-md-4"},n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item"},"Humidity: ",e.data.currently.humidity+"%"),n.a.createElement("li",{className:"list-group-item"},"Percepitation: ",e.data.currently.precipProbability+"%"),n.a.createElement("li",{className:"list-group-item"},"Wind: ",e.data.currently.humidity+" mph")))),n.a.createElement("div",null,e.data.hourly.summary)))},v=function(e){return n.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},n.a.createElement("div",{className:"navbar-brand"},n.a.createElement("div",{className:"navbar-item"},"Weather")),n.a.createElement("div",{className:"navbar-end"},n.a.createElement("div",{className:"navbar-item"},n.a.createElement("div",{className:"btn-group btn-group-toggle","data-toggle":"buttons"},n.a.createElement("label",{id:"F",onClick:e.handleToggle,className:"btn btn-primary active"},n.a.createElement("input",{type:"radio",name:"options",id:"option1"}),"\xb0F"),n.a.createElement("label",{id:"C",onClick:e.handleToggle,className:"btn btn-primary"},n.a.createElement("input",{type:"radio",name:"options",id:"option2"}),"\xb0C")))))},y=a(11),b=a.n(y),f=a(24),N=a(12),C=a.n(N),F=function(){return{type:"FETCH_BEGIN"}},w=function(e,t){return{type:"FETCH_SUCCESS",payload:e,location:t}},k=function(){return{type:"FETCH_ERROR"}},O=(a(62),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){a.props.fetchWeather("".concat(e.coords.latitude,", ").concat(e.coords.longitude))})},a.handleChange=function(e){a.setState({input:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.fetchWeather(a.state.input)},a.handleToggle=function(e){a.setState({mode:e.target.id})},a.state={input:"",mode:"F"},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(v,{handleToggle:this.handleToggle}),n.a.createElement("div",{className:"container"},n.a.createElement("form",{className:"my-3",onSubmit:this.handleSubmit},n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{className:"form-control  border-primary",onChange:this.handleChange,value:this.state.input,placeholder:"Enter a location",required:!0}),n.a.createElement("div",{className:"input-group-append"},n.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Search")))),this.props.isFetching&&n.a.createElement("div",{className:"alert alert-primary",role:"alert"},"Fetching data ..."),this.props.location&&n.a.createElement("div",{className:"alert alert-success",role:"alert"},this.props.location),n.a.createElement("div",{className:"error-message"},this.props.error&&n.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Unable to find location. Try Again.")),this.props.isLoaded&&n.a.createElement("div",null,n.a.createElement(E,{data:this.props.data,location:this.props.location,mode:this.state.mode}),n.a.createElement(g,{data:this.props.data,mode:this.state.mode}))))}}]),t}(r.Component)),S=Object(u.b)(function(e){return{data:e.data,error:e.error,isFetching:e.isFetching,location:e.location,isLoaded:e.isLoaded}},function(e){return{fetchWeather:function(t){return e(function(e){return function(){var t=Object(f.a)(b.a.mark(function t(a){var r;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(F()),r=void 0,t.abrupt("return",C.a.get("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(e,"&key=AIzaSyCBQcamdtpHeWv1PleVkC-a-UzJY5ZtLAI")).then(function(e){if("OK"!==e.data.status)return Promise.reject();r=e.data.results[0].formatted_address;var t=e.data.results[0].geometry.location.lat,a=e.data.results[0].geometry.location.lng;return C.a.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/9eca4702b41c21c7f307e9fbfe659fc8/".concat(t,",").concat(a))}).then(function(e){a(w(e.data,r))}).catch(function(e){a(k())}));case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}(t))}}})(O);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=a(3),j={isFetching:!1,isLoaded:!1,data:void 0,location:void 0,error:!1},x=a(25),U=Object(T.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BEGIN":return Object.assign({},e,{isFetching:!0,isLoaded:!1,data:void 0,location:void 0});case"FETCH_SUCCESS":return Object.assign({},e,{isFetching:!1,isLoaded:!0,data:t.payload,location:t.location,error:!1});case"FETCH_ERROR":return Object.assign({},e,{isFetching:!1,error:!0});default:return e}},Object(T.a)(x.a));U.subscribe(function(){return console.log(U.getState())}),o.a.render(n.a.createElement(u.a,{store:U},n.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,2,1]]]);
//# sourceMappingURL=main.4159a507.chunk.js.map