(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{282:function(t,n,o){"use strict";o.r(n);o(26),o(30);var e=o(66),r=o(185),p={components:{TButton:e.a,TPopover:r.a},data:function(){return{content:'\n      <t-popover trigger="hover">\n        <t-button>上方弹出</t-button>\n        <template slot="content">\n          弹出内容\n        </template>\n      </t-popover>\n      <t-popover position="bottom" trigger="hover">\n        <t-button>下方弹出</t-button>\n        <template slot="content">\n          弹出内容\n        </template>\n      </t-popover>\n      <t-popover position="left" trigger="hover">\n        <t-button>左边弹出</t-button>\n        <template slot="content">\n          弹出内容\n        </template>\n      </t-popover>\n      <t-popover position="right" trigger="hover">\n        <t-button>右边弹出</t-button>\n        <template slot="content">\n          弹出内容\n        </template>\n      </t-popover>\n  '.replace(/^ {8}/gm,"").trim()}},methods:{onClickButton:function(){this.$toast('<strong style="color:red;">加粗的提示</strong>',{enableHtml:!0})}}},v=o(1),s=Object(v.a)(p,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticStyle:{"padding-top":"16px"}},[o("h2",[t._v("将触发方式改为 hover")]),t._v(" "),t._m(0),t._v(" "),o("t-popover",{attrs:{trigger:"hover"}},[o("t-button",[t._v("上方弹出")]),t._v(" "),o("template",{slot:"content"},[t._v("\n            弹出内容\n        ")])],2),t._v(" "),o("t-popover",{attrs:{position:"bottom",trigger:"hover"}},[o("t-button",[t._v("下方弹出")]),t._v(" "),o("template",{slot:"content"},[t._v("\n            弹出内容\n        ")])],2),t._v(" "),o("t-popover",{attrs:{position:"left",trigger:"hover"}},[o("t-button",[t._v("左边弹出")]),t._v(" "),o("template",{slot:"content"},[t._v("\n            弹出内容\n        ")])],2),t._v(" "),o("t-popover",{attrs:{position:"right",trigger:"hover"}},[o("t-button",[t._v("右边弹出")]),t._v(" "),o("template",{slot:"content"},[t._v("\n            弹出内容\n        ")])],2),t._v(" "),t._m(1),t._v(" "),o("pre",[o("code",[t._v(t._s(t.content))])])],1)},[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("预览")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("代码")])])}],!1,null,"1c26911e",null);n.default=s.exports}}]);