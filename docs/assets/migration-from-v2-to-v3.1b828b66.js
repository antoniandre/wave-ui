import{n as i}from"./index.e31dd236.js";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",[e("title-link",{staticClass:"mt4",attrs:{h1:""}},[t._v("Migration strategy from version 2.x to version 3.x")]),t._m(0),e("ol",{staticClass:"mt6"},[e("li",{staticClass:"mt4"},[e("div",{staticClass:"title3"},[t._v("Update the initialization of Wave UI.")]),e("div",{staticClass:"w-flex align-center"},[e("ssh-pre",{staticStyle:{"min-width":"290px"},attrs:{language:"js",label:"before",dark:t.$store.state.darkMode}},[t._v(`const app = createApp(App)
new WaveUI(app, { /* Some Wave UI options */ })
app.mount('#app')`)]),e("w-icon",{staticClass:"ma2 grey",attrs:{xl:""}},[t._v("mdi mdi-arrow-right")]),e("ssh-pre",{staticStyle:{"min-width":"290px"},attrs:{language:"js",label:"after",dark:t.$store.state.darkMode}},[t._v(`const app = createApp(App)
app.use(WaveUI, { /* Some Wave UI options */ })
app.mount('#app')
`)])],1)]),e("li",{staticClass:"mt4"},[t._m(1),t._v("Note: there is also an "),e("router-link",{attrs:{to:"/options-presets-and-waveui"}},[t._v("option to define the Wave UI root")]),t._v(" (Default: "),e("code",{staticClass:"code"},[t._v("#app")]),t._v(", if not found, "),e("code",{staticClass:"code"},[t._v("body")]),t._v(")."),e("div",{staticClass:"w-flex align-center"},[e("ssh-pre",{staticStyle:{"min-width":"290px"},attrs:{language:"html-vue",label:"before",dark:t.$store.state.darkMode}},[t._v(`<w-app>
  <w-button>My button</w-button>
</w-app>`)]),e("w-icon",{staticClass:"ma2 grey",attrs:{xl:""}},[t._v("mdi mdi-arrow-right")]),e("ssh-pre",{staticStyle:{"min-width":"290px"},attrs:{language:"html-vue",label:"after",dark:t.$store.state.darkMode}},[t._v(`<w-button>My button</w-button>
`)])],1)],1),t._m(2),t._m(3)])],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v("The migration from Wave UI 2.x is extremely simple. You'll be done in two steps, two minutes!"),e("br"),t._v(`
But if you want to offer two themes in your app, there's a bit more work.`)])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"title3"},[t._v("Remove the <w-app> component, it's no longer needed!"),e("br")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"mt4"},[e("div",{staticClass:"title3"},[t._v("If you were using "),e("code",[t._v("useWaveUI")]),t._v(" in composition API")]),e("p",[t._v("just replace it with "),e("code",[t._v("inject('$waveui')")]),t._v(".")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"mt4"},[e("div",{staticClass:"title3"},[t._v("Optionally, if you want to use two themes.")]),e("p",[t._v("Follow the steps in the "),e("a",{attrs:{href:"/themes#adding-themes-in-your-wave-ui-app"}},[t._v("themes")]),t._v(" page.")])])}];const o={},s={};var l=i(o,n,r,!1,v,null,null,null);function v(t){for(let a in s)this[a]=s[a]}var c=function(){return l.exports}();export{c as default};
