(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(7),r=n.n(i),c=(n(15),n(8)),s=n.n(c),l=n(1),p=n(2),u=n(4),d=n(3),m=n(5),h=n(9),v=n.n(h),f=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).addVote=function(){n.vote("+")},n.subtractVote=function(){n.vote("-")},n.vote=function(e){console.log(e),fetch(n.props.nodeUrl+"vote/"+n.props.type+"-"+n.props.id+"/"+e,{method:"post"}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{key:this.props.id},o.a.createElement("img",{src:this.props.image,alt:this.props.title}),o.a.createElement("div",null,o.a.createElement("span",{className:"votes"},this.props.votes),o.a.createElement("button",{onClick:this.addVote},"+"),o.a.createElement("button",{onClick:this.subtractVote},"-")),o.a.createElement("div",null,o.a.createElement("h3",null,o.a.createElement("a",{href:this.props.link},this.props.title))),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:v.a.sanitize(this.props.caption)}}))}}]),t}(o.a.Component),E=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={items:[]},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){return e.getItems()}),3e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer),this.timer=null}},{key:"getItems",value:function(){var e=this;fetch(this.props.nodeUrl+this.props.type).then((function(e){return e.json()})).then((function(t){var n=[];t.data.forEach((function(e){var a=t.votes[e.id]||0;n.push({id:e.id,title:e.title.rendered,votes:a,image:e._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url,caption:e._embedded["wp:featuredmedia"][0].caption.rendered,link:e._embedded["wp:featuredmedia"][0].link})})),e.setState({items:n})})).catch((function(e){console.log("Fetch error: ",e)}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("h1",null,this.props.title),this.state.items.map((function(t){return o.a.createElement(f,{type:e.props.type,nodeUrl:e.props.nodeUrl,id:t.id,image:t.image,title:t.title,link:t.link,caption:t.caption,votes:t.votes})})))}}]),t}(o.a.Component);n(16),n(17);var g=function(){var e=window.location.href;return"_self"in o.a.createElement("div")&&(e="http://localhost:4000/"),o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:s.a,className:"App-logo",alt:"WordPress VIP"}),o.a.createElement(E,{title:"Dutch Foods",nodeUrl:e,type:"food"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n.p+"static/media/wpcomvip_logo_main-white.cc61dd33.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.0ca71b9c.chunk.js.map