!function(t,e,i,a){"use strict";Foundation.libs.interchange={name:"interchange",version:"5.5.3",cache:{},images_loaded:!1,nodes_loaded:!1,settings:{load_attr:"interchange",named_queries:{default:"only screen",small:Foundation.media_queries.small,"small-only":Foundation.media_queries["small-only"],medium:Foundation.media_queries.medium,"medium-only":Foundation.media_queries["medium-only"],large:Foundation.media_queries.large,"large-only":Foundation.media_queries["large-only"],xlarge:Foundation.media_queries.xlarge,"xlarge-only":Foundation.media_queries["xlarge-only"],xxlarge:Foundation.media_queries.xxlarge,landscape:"only screen and (orientation: landscape)",portrait:"only screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"},directives:{replace:function(e,i,a){if(null!==e&&/IMG/.test(e[0].nodeName)){var n=t.each(e,function(){this.src=i});if(new RegExp(i,"i").test(n))return;return e.attr("src",i),a(e[0].src)}var s=e.data(this.data_attr+"-last-path"),r=this;if(s!=i)return/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(i)?(t(e).css("background-image","url("+i+")"),e.data("interchange-last-path",i),a(i)):t.get(i,function(t){e.html(t),e.data(r.data_attr+"-last-path",i),a()})}}},init:function(e,i,a){Foundation.inherit(this,"throttle random_str"),this.data_attr=this.set_data_attr(),t.extend(!0,this.settings,i,a),this.bindings(i,a),this.reflow()},get_media_hash:function(){var t="";for(var e in this.settings.named_queries)t+=matchMedia(this.settings.named_queries[e]).matches.toString();return t},events:function(){var i,a=this;return t(e).off(".interchange").on("resize.fndtn.interchange",a.throttle(function(){var t=a.get_media_hash();t!==i&&a.resize(),i=t},50)),this},resize:function(){var e=this.cache;if(!this.images_loaded||!this.nodes_loaded)return void setTimeout(t.proxy(this.resize,this),50);for(var i in e)if(e.hasOwnProperty(i)){var a=this.results(i,e[i]);a&&this.settings.directives[a.scenario[1]].call(this,a.el,a.scenario[0],function(t){if(arguments[0]instanceof Array)var e=arguments[0];else var e=Array.prototype.slice.call(arguments,0);return function(){t.el.trigger(t.scenario[1],e)}}(a))}},results:function(t,e){var i=e.length;if(i>0)for(var a=this.S("["+this.add_namespace("data-uuid")+'="'+t+'"]');i--;){var n,s=e[i][2];if(n=this.settings.named_queries.hasOwnProperty(s)?matchMedia(this.settings.named_queries[s]):matchMedia(s),n.matches)return{el:a,scenario:e[i]}}return!1},load:function(t,e){return("undefined"==typeof this["cached_"+t]||e)&&this["update_"+t](),this["cached_"+t]},update_images:function(){var t=this.S("img["+this.data_attr+"]"),e=t.length,i=e,a=0,n=this.data_attr;for(this.cache={},this.cached_images=[],this.images_loaded=0===e;i--;){if(a++,t[i]){var s=t[i].getAttribute(n)||"";s.length>0&&this.cached_images.push(t[i])}a===e&&(this.images_loaded=!0,this.enhance("images"))}return this},update_nodes:function(){var t=this.S("["+this.data_attr+"]").not("img"),e=t.length,i=e,a=0,n=this.data_attr;for(this.cached_nodes=[],this.nodes_loaded=0===e;i--;){a++;var s=t[i].getAttribute(n)||"";s.length>0&&this.cached_nodes.push(t[i]),a===e&&(this.nodes_loaded=!0,this.enhance("nodes"))}return this},enhance:function(i){for(var a=this["cached_"+i].length;a--;)this.object(t(this["cached_"+i][a]));return t(e).trigger("resize.fndtn.interchange")},convert_directive:function(t){var e=this.trim(t);return e.length>0?e:"replace"},parse_scenario:function(t){var e=t[0].match(/(.+),\s*(\w+)\s*$/),i=t[1].match(/(.*)\)/);if(e)var a=e[1],n=e[2];else var s=t[0].split(/,\s*$/),a=s[0],n="";return[this.trim(a),this.convert_directive(n),this.trim(i[1])]},object:function(t){var e=this.parse_data_attr(t),i=[],a=e.length;if(a>0)for(;a--;){var n=e[a].split(/,\s?\(/);if(n.length>1){var s=this.parse_scenario(n);i.push(s)}}return this.store(t,i)},store:function(t,e){var i=this.random_str(),a=t.data(this.add_namespace("uuid",!0));return this.cache[a]?this.cache[a]:(t.attr(this.add_namespace("data-uuid"),i),this.cache[i]=e)},trim:function(e){return"string"==typeof e?t.trim(e):e},set_data_attr:function(t){return t?this.namespace.length>0?this.namespace+"-"+this.settings.load_attr:this.settings.load_attr:this.namespace.length>0?"data-"+this.namespace+"-"+this.settings.load_attr:"data-"+this.settings.load_attr},parse_data_attr:function(t){for(var e=t.attr(this.attr_name()).split(/\[(.*?)\]/),i=e.length,a=[];i--;)e[i].replace(/[\W\d]+/,"").length>4&&a.push(e[i]);return a},reflow:function(){this.load("images",!0),this.load("nodes",!0)}}}(jQuery,window,window.document);