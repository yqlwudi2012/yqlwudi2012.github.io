(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{168:function(t,e,a){},171:function(t,e,a){"use strict";var s=a(168);a.n(s).a},188:function(t,e,a){"use strict";a.r(e);a(24),a(23);var s={data:function(){return{page:"",site:"",path:"",pages:[]}},created:function(){var t=this;this.path=this.$page.path,this.site=this.$site,this.site.pages.map(function(e){"导航"!=e.title&&"Home"!=e.title&&t.pages.push(e)})},methods:{goBook:function(t){this.$router.push(t.path)},evalStr:function(t){return t?t.replace(/<.{1,2}>/g,"").replace(/<!--/,"").replace(/-->/,""):""}}},i=(a(171),a(0)),n=Object(i.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sejta_guide_container"},t._l(t.pages,function(e,s){return a("div",{key:s,staticClass:"sejta_guide_colum"},[a("div",{staticClass:"sejta_article_tile",on:{click:function(a){t.goBook(e)}}},[a("div",[t._v(t._s(e.title))]),t._v(" "),a("div",{staticClass:"sejta_tag_container"},t._l(e.frontmatter.meta,function(e,s){return a("div",{staticClass:"sejta_tag"},[t._v(t._s(e.tag))])}),0)]),t._v(" "),a("div",{staticClass:"sejta_article_excerpt"},[t._v(t._s(t.evalStr(e.excerpt)))])])}),0)},[],!1,null,"47e00dd4",null);n.options.__file="indexLayout.vue";e.default=n.exports}}]);