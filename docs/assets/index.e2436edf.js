import{r as w,o as b,g as f,a as n,w as t,b as o,m as a,e as s,t as h,d as l,_,ae as T}from"./index.bf2cfd71.js";const H={class:"tooltips-demo"},M=l("strong",null,"Important notes",-1),V=l("br",null,null,-1),$=l("br",null,null,-1),E=l("br",null,null,-1),D=l("code",null,"appendTo",-1),z=l("a",{href:"#appending-to-a-dom-node"},"Appending to a particular DOM node",-1),q=l("p",null,"In addition to positions, you can align the tooltip with its activator.",-1),O=l("div",{class:"title4 mb2"},"Top position",-1),B=l("br",null,null,-1),P=l("br",null,null,-1),R=l("br",null,null,-1),L=l("div",{class:"title4 mt6 mb2"},"Bottom position",-1),I=l("br",null,null,-1),U=l("br",null,null,-1),W=l("br",null,null,-1),j=l("div",{class:"title4 mt6 mb2"},"Right position",-1),F=l("br",null,null,-1),N=l("br",null,null,-1),Y=l("br",null,null,-1),G=l("div",{class:"title4 mt6 mb2"},"Left position",-1),J=l("br",null,null,-1),K=l("br",null,null,-1),Q=l("br",null,null,-1),X=l("br",null,null,-1),Z=l("br",null,null,-1),tt=l("br",null,null,-1),ot=l("br",null,null,-1),nt=l("br",null,null,-1),et=l("br",null,null,-1),lt=l("br",null,null,-1),it=l("br",null,null,-1),at=l("br",null,null,-1),st=l("br",null,null,-1),rt=l("br",null,null,-1),ct=l("br",null,null,-1),pt=l("p",null,[o("By default with the "),l("code",null,"show-on-click"),o(` option, the tooltip will hide when you click
anywhere once open.`),l("br"),o(`
To make it persistent, use the `),l("code",null,"persistent"),o(` prop, so a click will not close the open
tooltip.`),l("br"),o(`
Clicking on the activator can always toggle the tooltip regardless of the `),l("code",null,"persistent"),o(`
prop.`)],-1),mt=l("p",null,"Click the button to toggle the tooltips.",-1),dt={class:"d-iblock my2 mx6"},ut=l("p",null,"Click the star to toggle the tooltip.",-1),wt={class:"mt4"},ht=l("p",null,[o("Like in most components, you can set a "),l("code",null,"color"),o(" for the text and a "),l("code",null,"bg-color"),o(` for the
background.`)],-1),vt=l("br",null,null,-1),gt=l("br",null,null,-1),bt=l("br",null,null,-1),ft={class:"text-center py6"},_t=l("p",null,`In this example, the yellow container of the pink activator has an overflow hidden, but we want the
tooltip to be fully visible. So we detach it to the green container.`,-1),xt={class:"another-container text-center green-light5--bg pa6"},yt=l("span",null,[o("This tooltip is appended to the "),l("span",{class:"green"},"green"),o(" container!")],-1),kt=l("p",null,[o(`External activators offer a great flexibility in the code and the advantage of accepting
multiple activators for the same menu (even elements that are not yet in the DOM).`),l("br"),o(`
The downside is that the event listeners for the activator(s) will be attached to the document
and not the activator itself. For that reason, it is not the recommended option if you have
the choice.`)],-1),Tt={class:"w-flex wrap align-start gap6"},St=l("p",{class:"text-italic"},"But do you really need that? ;)",-1);function Ct(r,c,x,y,k,v){const g=w("alert"),m=w("title-link"),p=w("w-icon"),i=w("w-tooltip"),u=w("example"),d=w("w-button"),S=w("w-radios"),C=w("w-tag"),A=w("w-card");return b(),f("div",H,[n(g,{tip:""},{default:t(()=>[M,V,o(`
By default the tooltip is moved into the w-app in the DOM, so it is not constrained by a hidden
overflow on a parent.`),$,o(`
When used inside a dialog, menu or drawer, it will be by default appended to that element.`),E,o(`
You can use the `),D,o(` prop to place it elsewhere in the DOM, like in the
`),z,o(` example.
`)]),_:1}),n(m,{h2:""},{default:t(()=>[o("Tooltip position")]),_:1}),n(u,{"content-class":"text-center"},{pug:t(()=>[o(`.text-center
  w-tooltip(left)
    template(#activator="{ on }")
      w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home
    | Home

  w-tooltip(top)
    template(#activator="{ on }")
      w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home
    | Home

  w-tooltip
    template(#activator="{ on }")
      w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home
    | Home

  w-tooltip(right)
    template(#activator="{ on }")
      w-icon.ma2(v-on="on" xl color="primary-light2") mdi mdi-home
    | Home`)]),html:t(()=>[o(`<div class="text-center">
  <w-tooltip left>
    <template #activator="{ on }">
      <w-icon
        class="ma2"
        v-on="on"
        xl
        color="primary-light2">
        mdi mdi-home
      </w-icon>
    </template>
    Home
  </w-tooltip>

  <w-tooltip top>
    <template #activator="{ on }">
      <w-icon
        class="ma2"
        v-on="on"
        xl
        color="primary-light2">
        mdi mdi-home
      </w-icon>
    </template>
    Home
  </w-tooltip>

  <w-tooltip>
    <template #activator="{ on }">
      <w-icon
        class="ma2"
        v-on="on"
        xl
        color="primary-light2">
        mdi mdi-home
      </w-icon>
    </template>
    Home
  </w-tooltip>

  <w-tooltip right>
    <template #activator="{ on }">
      <w-icon
        class="ma2"
        v-on="on"
        xl
        color="primary-light2">
        mdi mdi-home
      </w-icon>
    </template>
    Home
  </w-tooltip>
</div>
`)]),default:t(()=>[n(i,{left:""},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"primary-light2"}),{default:t(()=>[o("mdi mdi-home")]),_:2},1040)]),default:t(()=>[o("Home")]),_:1}),n(i,{top:""},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"primary-light2"}),{default:t(()=>[o("mdi mdi-home")]),_:2},1040)]),default:t(()=>[o("Home")]),_:1}),n(i,null,{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"primary-light2"}),{default:t(()=>[o("mdi mdi-home")]),_:2},1040)]),default:t(()=>[o("Home")]),_:1}),n(i,{right:""},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"primary-light2"}),{default:t(()=>[o("mdi mdi-home")]),_:2},1040)]),default:t(()=>[o("Home")]),_:1})]),_:1}),n(m,{h2:""},{default:t(()=>[o("Alignments")]),_:1}),q,n(u,{class:"example6"},{pug:t(()=>[o(`.title4.mb2 top position
w-tooltip(top align-left)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align left
  | Tooltip content,#[br]on multiple lines.
w-tooltip(top)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Centered
  | Tooltip content,#[br]on multiple lines.
w-tooltip(top align-right)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align right
  | Tooltip content,#[br]on multiple lines.

.title4.mt6.mb2 Bottom position
w-tooltip(align-left)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align left
  | Tooltip content,#[br]on multiple lines.
w-tooltip
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Centered
  | Tooltip content,#[br]on multiple lines.
w-tooltip(align-right)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align right
  | Tooltip content,#[br]on multiple lines.

.title4.mt6.mb2 Right position
w-tooltip(right align-top)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align top
  | Tooltip content,#[br]on multiple lines.
w-tooltip(right)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Centered
  | Tooltip content,#[br]on multiple lines.
w-tooltip(right align-bottom)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align bottom
  | Tooltip content,#[br]on multiple lines.

.title4.mt6.mb2 Left position
w-tooltip(left align-top)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align top
  | Tooltip content,#[br]on multiple lines.
w-tooltip(left)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Centered
  | Tooltip content,#[br]on multiple lines.
w-tooltip(left align-bottom)
  template(#activator="{ on }")
    w-button.ma1(v-on="on") Align bottom
  | Tooltip content,#[br]on multiple lines.`)]),html:t(()=>[o(`<div class="title4 mb2">Top position</div>
<w-tooltip top align-left>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align left
    </w-button>
  </template>
  Tooltip content,`),X,o(`on multiple lines.
</w-tooltip>

<w-tooltip top>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Tooltip content,`),Z,o(`on multiple lines.
</w-tooltip>

<w-tooltip top align-right>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align right
    </w-button>
  </template>
  Tooltip content,`),tt,o(`on multiple lines.
</w-tooltip>

<div class="title4 mt6 mb2">Bottom position</div>
<w-tooltip align-left>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align left
    </w-button>
  </template>
  Tooltip content,`),ot,o(`on multiple lines.
</w-tooltip>

<w-tooltip>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Tooltip content,`),nt,o(`on multiple lines.
</w-tooltip>

<w-tooltip align-right>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align right
    </w-button>
  </template>
  Tooltip content,`),et,o(`on multiple lines.
</w-tooltip>

<div class="title4 mt6 mb2">Right position</div>
<w-tooltip right align-top>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align top
    </w-button>
  </template>
  Tooltip content,`),lt,o(`on multiple lines.
</w-tooltip>

<w-tooltip right>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Tooltip content,`),it,o(`on multiple lines.
</w-tooltip>

<w-tooltip right align-bottom>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">Alig
      n bottom
    </w-button>
  </template>
  Tooltip content,`),at,o(`on multiple lines.
</w-tooltip>

<div class="title4 mt6 mb2">Left position</div>
<w-tooltip left align-top>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">A
      lign top
    </w-button>
  </template>
  Tooltip content,`),st,o(`on multiple lines.
</w-tooltip>

<w-tooltip left>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Centered
    </w-button>
  </template>
  Tooltip content,`),rt,o(`on multiple lines.
</w-tooltip>

<w-tooltip left align-bottom>
  <template #activator="{ on }">
    <w-button class="ma1" v-on="on">
      Align bottom
    </w-button>
  </template>
  Tooltip content,`),ct,o(`on multiple lines.
</w-tooltip>
`)]),default:t(()=>[O,n(i,{"append-to":".example6",top:"","align-left":""},{activator:t(({on:e})=>[n(d,a({class:"ma1"},s(e)),{default:t(()=>[o("Align left")]),_:2},1040)]),default:t(()=>[o("Tooltip content,"),B,o("on multiple lines.")]),_:1}),n(i,{"append-to":".example6",top:""},{activator:t(({on:e})=>[n(d,a({class:"ma1"},s(e)),{default:t(()=>[o("Centered")]),_:2},1040)]),default:t(()=>[o("Tooltip content,"),P,o("on multiple lines.")]),_:1}),n(i,{"append-to":".example6",top:"","align-right":""},{activator:t(({on:e})=>[n(d,a({class:"ma1"},s(e)),{default:t(()=>[o("Align right")]),_:2},1040)]),default:t(()=>[o("Tooltip content,"),R,o("on multiple lines.")]),_:1}),L,n(i,{"append-to":".example6","align-left":""},{activator:t(({on:e})=>[n(d,a({class:"ma1"},s(e)),{default:t(()=>[o("Align left")]),_:2},1040)]),default:t(()=>[o("Tooltip content,"),I,o("on multiple lines.")]),_:1}),n(i,{"append-to":".example6"},{activator:t(({on:e})=>[n(d,a({class:"ma1"},s(e)),{default:t(()=>[o("Centered")]),_:2},1040)]),default:t(()=>[o("Tooltip content,"),U,o("on multiple lines.")]),_:1}),n(i,{"append-to":".example6","align-right":""},{activator:t(({on:e})=>[n(d,a({class:"ma1"},s(e)),{default:t(()=>[o("Align right")]),_:2},1040)]),default:t(()=>[o("Tooltip content,"),W,o("on multiple lines.")]),_:1}),j,n(i,{"append-to":".example6",right:"","align-top":""},{activator:t(({on:e})=>[n(d,a({class:"ma1"},s(e)),{default:t(()=>[o("Align top")]),_:2},1040)]),default:t(()=>[o("Tooltip content,"),F,o("on multiple lines.")]),_:1}),n(i,{"append-to":".example6",right:""},{activator:t(({on:e})=>[n(d,a({class:"ma1"},s(e)),{default:t(()=>[o("Centered")]),_:2},1040)]),default:t(()=>[o("Tooltip content,"),N,o("on multiple lines.")]),_:1}),n(i,{"append-to":".example6",right:"","align-bottom":""},{activator:t(({on:e})=>[n(d,a({class:"ma1"},s(e)),{default:t(()=>[o("Align bottom")]),_:2},1040)]),default:t(()=>[o("Tooltip content,"),Y,o("on multiple lines.")]),_:1}),G,n(i,{"append-to":".example6",left:"","align-top":""},{activator:t(({on:e})=>[n(d,a({class:"ma1"},s(e)),{default:t(()=>[o("Align top")]),_:2},1040)]),default:t(()=>[o("Tooltip content,"),J,o("on multiple lines.")]),_:1}),n(i,{"append-to":".example6",left:""},{activator:t(({on:e})=>[n(d,a({class:"ma1"},s(e)),{default:t(()=>[o("Centered")]),_:2},1040)]),default:t(()=>[o("Tooltip content,"),K,o("on multiple lines.")]),_:1}),n(i,{"append-to":".example6",left:"","align-bottom":""},{activator:t(({on:e})=>[n(d,a({class:"ma1"},s(e)),{default:t(()=>[o("Align bottom")]),_:2},1040)]),default:t(()=>[o("Tooltip content,"),Q,o("on multiple lines.")]),_:1})]),_:1}),n(m,{h2:""},{default:t(()=>[o("Toggle on click")]),_:1}),n(u,{"content-class":"text-center"},{pug:t(()=>[o(`.text-center
  w-tooltip(show-on-click left)
    template(#activator="{ on }")
      w-button.ma2(v-on="on" bg-color="info")
        w-icon.mr1 wi-star
        | Star
    | Star

  w-tooltip(show-on-click right)
    template(#activator="{ on }")
      w-button.ma2(v-on="on" bg-color="info-dark2" dark)
        w-icon.mr1 wi-star
        | Star
    | Star`)]),html:t(()=>[o(`<div class="text-center">
  <w-tooltip show-on-click left>
    <template #activator="{ on }">
      <w-button
        class="ma2"
        v-on="on"
        bg-color="info">
        <w-icon class="mr1">
          wi-star
        </w-icon>
        Star
      </w-button>
    </template>
    Star
  </w-tooltip>

  <w-tooltip show-on-click right>
    <template #activator="{ on }">
      <w-button
        class="ma2"
        v-on="on"
        bg-color="info-dark2"
        dark>
        <w-icon class="mr1">
          wi-star
        </w-icon>
        Star
      </w-button>
    </template>
    Star
  </w-tooltip>
</div>
`)]),default:t(()=>[n(i,{"show-on-click":"",left:""},{activator:t(({on:e})=>[n(d,a({class:"ma2"},s(e),{"bg-color":"info"}),{default:t(()=>[n(p,{class:"mr1"},{default:t(()=>[o("wi-star")]),_:1}),o("Star")]),_:2},1040)]),default:t(()=>[o("Star")]),_:1}),n(i,{"show-on-click":"",right:""},{activator:t(({on:e})=>[n(d,a({class:"ma2"},s(e),{"bg-color":"info-dark2",dark:""}),{default:t(()=>[n(p,{class:"mr1"},{default:t(()=>[o("wi-star")]),_:1}),o("Star")]),_:2},1040)]),default:t(()=>[o("Star")]),_:1})]),_:1}),n(m,{h2:""},{default:t(()=>[o("Persistent")]),_:1}),pt,n(u,{"content-class":"text-center my4 example-persistent"},{pug:t(()=>[o(`w-tooltip(show-on-click persistent)
  template(#activator="{ on }")
    w-icon(v-on="on" xl) wi-star
  | Star
`)]),html:t(()=>[o(`<w-tooltip
  show-on-click
  persistent>
  <template #activator="{ on }">
    <w-icon v-on="on" xl>wi-star</w-icon>
  </template>
  Star
</w-tooltip>
`)]),default:t(()=>[n(i,{"show-on-click":"",persistent:"","append-to":".example-persistent"},{activator:t(({on:e})=>[n(p,a(s(e),{xl:""}),{default:t(()=>[o("wi-star")]),_:2},1040)]),default:t(()=>[o("Star")]),_:1})]),_:1}),n(m,{h2:""},{default:t(()=>[o("Using a v-model")]),_:1}),n(m,{h3:""},{default:t(()=>[o("Toggle with v-model")]),_:1}),mt,n(u,{"content-class":"text-center my4"},{pug:t(()=>[o(`.text-center
  w-button.my2.mx6(
    @click="showTooltip = !showTooltip"
    dark
    width="6em")
    | `+h("{{ showTooltip ? 'Hide' : 'Show' }}")+` tooltip

  div.d-iblock.my2.mx6
    w-tooltip(v-model="showTooltip" show-on-click persistent left)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" lg) wi-star
      | Star

    w-tooltip(v-model="showTooltip" show-on-click persistent top)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" lg) wi-star
      | Star

    w-tooltip(v-model="showTooltip" show-on-click persistent)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" lg) wi-star
      | Star

    w-tooltip(v-model="showTooltip" show-on-click persistent right)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" lg) wi-star
      | Star`)]),html:t(()=>[o(`<div class="text-center">
  <w-button
    @click="showTooltip = !showTooltip"
    class="my2 mx6"
    dark
    width="6em">
    `+h("{{ showTooltip ? 'Hide' : 'Show' }}")+` tooltip
  </w-button>

  <div class="d-iblock my2 mx6">
    <w-tooltip
      v-model="showTooltip"
      show-on-click
      persistent
      left>
      <template #activator="{ on }">
        <w-icon v-on="on" class="ma2" lg>wi-star</w-icon>
      </template>
      Star
    </w-tooltip>

    <w-tooltip
      v-model="showTooltip"
      show-on-click
      persistent
      top>
      <template #activator="{ on }">
        <w-icon v-on="on" class="ma2" lg>wi-star</w-icon>
      </template>
      Star
    </w-tooltip>

    <w-tooltip
      v-model="showTooltip"
      show-on-click
      persistent>
      <template #activator="{ on }">
        <w-icon v-on="on" class="ma2" lg>wi-star</w-icon>
      </template>
      Star
    </w-tooltip>

    <w-tooltip
      v-model="showTooltip"
      show-on-click
      persistent
      right>
      <template #activator="{ on }">
        <w-icon v-on="on" class="ma2" lg>wi-star</w-icon>
      </template>
      Star
    </w-tooltip>
  </div>
</div>`)]),js:t(()=>[o(`data: () => ({
  showTooltip: false
})
`)]),default:t(()=>[n(d,{class:"my2 mx6",onClick:c[0]||(c[0]=e=>r.showTooltip=!r.showTooltip),width:"6em"},{default:t(()=>[o(h(r.showTooltip?"Hide":"Show")+" tooltip",1)]),_:1}),l("div",dt,[n(i,{"model-value":r.showTooltip,"show-on-click":"",persistent:"",left:"",onOpen:c[1]||(c[1]=e=>r.tooltipVisible=!0),onClose:v.onTooltipClose},{activator:t(({on:e})=>[n(p,a(s(e),{lg:""}),{default:t(()=>[o("wi-star")]),_:2},1040)]),default:t(()=>[o("Star")]),_:1},8,["model-value","onClose"]),n(i,{"model-value":r.showTooltip,"show-on-click":"",persistent:"",top:"",onOpen:c[2]||(c[2]=e=>r.tooltipVisible=!0),onClose:v.onTooltipClose},{activator:t(({on:e})=>[n(p,a(s(e),{lg:""}),{default:t(()=>[o("wi-star")]),_:2},1040)]),default:t(()=>[o("Star")]),_:1},8,["model-value","onClose"]),n(i,{"model-value":r.showTooltip,"show-on-click":"",persistent:"",onOpen:c[3]||(c[3]=e=>r.tooltipVisible=!0),onClose:v.onTooltipClose},{activator:t(({on:e})=>[n(p,a(s(e),{lg:""}),{default:t(()=>[o("wi-star")]),_:2},1040)]),default:t(()=>[o("Star")]),_:1},8,["model-value","onClose"]),n(i,{"model-value":r.showTooltip,"show-on-click":"",persistent:"",right:"",onOpen:c[4]||(c[4]=e=>r.tooltipVisible=!0),onClose:v.onTooltipClose},{activator:t(({on:e})=>[n(p,a(s(e),{lg:""}),{default:t(()=>[o("wi-star")]),_:2},1040)]),default:t(()=>[o("Star")]),_:1},8,["model-value","onClose"])])]),_:1}),n(m,{h3:""},{default:t(()=>[o("Using v-model to update a variable")]),_:1}),ut,n(u,{"content-class":"text-center my4"},{pug:t(()=>[o(`w-tooltip(v-model="showTooltip" show-on-click right)
  template(#activator="{ on }")
    w-icon(v-on="on" lg) wi-star
  | Star
div.mt4 The tooltip is `+h("{{ showTooltip ? 'visible' : 'hidden' }}")+`.
`)]),html:t(()=>[o(`<w-tooltip
  v-model="showTooltip"
  show-on-click
  right>
  <template #activator="{ on }">
    <w-icon v-on="on" lg>wi-star</w-icon>
  </template>
  Star
</w-tooltip>

<div class="mt4">
  The tooltip is `+h("{{ showTooltip ? 'visible' : 'hidden' }}")+`.
</div>`)]),js:t(()=>[o(`data: () => ({
  showTooltip: false
})
`)]),default:t(()=>[n(i,{modelValue:r.showTooltip2,"onUpdate:modelValue":c[5]||(c[5]=e=>r.showTooltip2=e),"show-on-click":"",right:""},{activator:t(({on:e})=>[n(p,a(s(e),{lg:""}),{default:t(()=>[o("wi-star")]),_:2},1040)]),default:t(()=>[o("Star")]),_:1},8,["modelValue"]),l("div",wt,"The tooltip is "+h(r.showTooltip2?"visible":"hidden")+".",1)]),_:1}),n(m,{h2:""},{default:t(()=>[o("Background color & text color")]),_:1}),ht,n(u,{"content-class":"text-center pb8"},{pug:t(()=>[o(`.text-center
  w-tooltip(color="white" bg-color="blue")
    template(#activator="{ on }")
      w-icon.ma2(v-on="on" xl color="blue") wi-star
    | Star

  w-tooltip(color="white" bg-color="purple")
    template(#activator="{ on }")
      w-icon.ma2(v-on="on" xl color="purple") wi-star
    | Star

  w-tooltip(color="orange-dark1" bg-color="yellow-light3")
    template(#activator="{ on }")
      w-icon.ma2(v-on="on" xl color="amber") wi-star
    | Star

  w-tooltip(color="orange")
    template(#activator="{ on }")
      w-icon.ma2(v-on="on" xl) wi-star
    | Star`)]),html:t(()=>[o(`<div class="text-center">
  <w-tooltip color="white" bg-color="blue">
    <template #activator="{ on }">
      <w-icon
        class="ma2"
        v-on="on"
        xl
        color="blue">
        wi-star
      </w-icon>
    </template>
    Star
  </w-tooltip>

  <w-tooltip color="white" bg-color="purple">
    <template #activator="{ on }">
      <w-icon
        class="ma2"
        v-on="on"
        xl
        color="purple">
        wi-star
      </w-icon>
    </template>
    Star
  </w-tooltip>

  <w-tooltip
    color="orange-dark1"
    bg-color="yellow-light3">
    <template #activator="{ on }">
      <w-icon
        class="ma2"
        v-on="on"
        xl
        color="amber">
        wi-star
      </w-icon>
    </template>
    Star
  </w-tooltip>

  <w-tooltip color="orange">
    <template #activator="{ on }">
      <w-icon
        class="ma2"
        v-on="on"
        xl>
        wi-star
      </w-icon>
    </template>
    Star
  </w-tooltip>
</div>
`)]),default:t(()=>[n(i,{color:"white","bg-color":"blue"},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"blue"}),{default:t(()=>[o("wi-star")]),_:2},1040)]),default:t(()=>[o("Star")]),_:1}),n(i,{color:"white","bg-color":"purple"},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"purple"}),{default:t(()=>[o("wi-star")]),_:2},1040)]),default:t(()=>[o("Star")]),_:1}),n(i,{color:"orange-dark1","bg-color":"yellow-light3"},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"amber"}),{default:t(()=>[o("wi-star")]),_:2},1040)]),default:t(()=>[o("Star")]),_:1}),n(i,{color:"orange"},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:""}),{default:t(()=>[o("wi-star")]),_:2},1040)]),default:t(()=>[o("Star")]),_:1})]),_:1}),n(m,{h2:""},{default:t(()=>[o("Tile, round and shadow")]),_:1}),n(u,{"content-class":"text-center pb8"},{pug:t(()=>[o(`.text-center.pb8
  w-tooltip(color="red-light2" tile)
    template(#activator="{ on }")
      w-icon.ma2(v-on="on" xl color="red-light2") mdi mdi-square
    | Tile
  w-tooltip(color="amber-dark1" round)
    template(#activator="{ on }")
      w-icon.ma2(v-on="on" xl color="amber") mdi mdi-circle
    | Round
  w-tooltip(color="pink-light1" shadow)
    template(#activator="{ on }")
      w-icon.ma2(v-on="on" xl color="pink-light1") mdi mdi-heart
    | Shadow`)]),html:t(()=>[o(`<div class="text-center pb8">
  <w-tooltip color="red-light2" tile>
    <template #activator="{ on }">
      <w-icon
        class="ma2"
        v-on="on"
        xl
        color="red-light2">
        mdi mdi-square
      </w-icon>
    </template>
    Tile
  </w-tooltip>

  <w-tooltip color="amber-dark1" round>
    <template #activator="{ on }">
      <w-icon
        class="ma2"
        v-on="on"
        xl
        color="amber">
        mdi mdi-circle
      </w-icon>
    </template>
    Round
  </w-tooltip>

  <w-tooltip color="pink-light1" shadow>
    <template #activator="{ on }">
      <w-icon
        class="ma2"
        v-on="on"
        xl
        color="pink-light1">
        mdi mdi-heart
      </w-icon>
    </template>
    Shadow
  </w-tooltip>
</div>
`)]),default:t(()=>[n(i,{color:"red-light2",tile:""},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"red-light2"}),{default:t(()=>[o("mdi mdi-square")]),_:2},1040)]),default:t(()=>[o("Tile")]),_:1}),n(i,{color:"amber-dark1",round:""},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"amber"}),{default:t(()=>[o("mdi mdi-circle")]),_:2},1040)]),default:t(()=>[o("Round")]),_:1}),n(i,{color:"pink-light1",shadow:""},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{xl:"",color:"pink-light1"}),{default:t(()=>[o("mdi mdi-heart")]),_:2},1040)]),default:t(()=>[o("Shadow")]),_:1})]),_:1}),n(m,{h2:""},{default:t(()=>[o("Different contents")]),_:1}),n(u,{"content-class":"text-center"},{pug:t(()=>[o(`.text-center
  w-tooltip(color="primary")
    template(#activator="{ on }")
      span.ma3(v-on="on") Content with icon
    w-icon.mr1 wi-star
    | Star

  w-tooltip(color="primary")
    template(#activator="{ on }")
      span.ma3(v-on="on") Very long content
    | Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    br
    | Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!
    br
    br
    | Recusandae distinctio perferendis expedita pariatur fuga.`)]),html:t(()=>[o(`<div class="text-center">
  <w-tooltip color="primary">
    <template #activator="{ on }">
      <span v-on="on" class="ma3">
        Content with icon
      </span>
    </template>
    <w-icon class="mr1">wi-star</w-icon>
    Star
  </w-tooltip>

  <w-tooltip color="primary">
    <template #activator="{ on }">
      <span v-on="on" class="ma3">
        Very long content
      </span>
    </template>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    <br />
    Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!
    <br />
    <br />
    Recusandae distinctio perferendis expedita pariatur fuga.
  </w-tooltip>
</div>
`)]),default:t(()=>[n(i,{color:"primary"},{activator:t(({on:e})=>[l("span",a({class:"ma3"},s(e,!0)),"Content with icon",16)]),default:t(()=>[n(p,{class:"mr1"},{default:t(()=>[o("wi-star")]),_:1}),o("Star")]),_:1}),n(i,{color:"primary"},{activator:t(({on:e})=>[l("span",a({class:"ma3"},s(e,!0)),"Very long content",16)]),default:t(()=>[o("Lorem ipsum, dolor sit amet consectetur adipisicing elit."),vt,o("Esse quo non, beatae dolore nihil quae ratione dignissimos molestiae hic, tempore blanditiis soluta, quasi officia!"),gt,bt,o("Recusandae distinctio perferendis expedita pariatur fuga.")]),_:1})]),_:1}),n(m,{h2:""},{default:t(()=>[o("Different sizes and caption style")]),_:1}),n(u,{"content-class":"text-center example-sizes wrap w-flex align-center justify-center"},{pug:t(()=>[o(`w-tooltip(xs show-on-click persistent :model-value="true")
  template(#activator="{ on }")
    span.ma6(v-on="on") xs
  | Extra small

w-tooltip(sm show-on-click persistent :model-value="true")
  template(#activator="{ on }")
    span.ma6(v-on="on") sm
  | Small

w-tooltip(md show-on-click persistent :model-value="true")
  template(#activator="{ on }")
    span.ma6(v-on="on") md
  | Medium

w-tooltip(lg show-on-click persistent :model-value="true")
  template(#activator="{ on }")
    span.ma7(v-on="on") lg
  | Large

w-tooltip(xl show-on-click persistent :model-value="true")
  template(#activator="{ on }")
    span.ma10(v-on="on") xl
  | Extra large

w-tooltip(caption show-on-click persistent :model-value="true")
  template(#activator="{ on }")
    span.ma10(v-on="on") Caption
  | Caption style.`)]),html:t(()=>[o(`<w-tooltip xs show-on-click persistent :model-value="true">
  <template #activator="{ on }">
    <span v-on="on" class="ma3">xs</span>
  </template>
  Extra small
</w-tooltip>

<w-tooltip sm show-on-click persistent :model-value="true">
  <template #activator="{ on }">
    <span v-on="on" class="ma3">sm</span>
  </template>
  Small
</w-tooltip>

<w-tooltip md show-on-click persistent :model-value="true">
  <template #activator="{ on }">
    <span v-on="on" class="ma3">md</span>
  </template>
  Medium
</w-tooltip>

<w-tooltip lg show-on-click persistent :model-value="true">
  <template #activator="{ on }">
    <span v-on="on" class="ma3">lg</span>
  </template>
  Large
</w-tooltip>

<w-tooltip xl show-on-click persistent :model-value="true">
  <template #activator="{ on }">
    <span v-on="on" class="ma3">xl</span>
  </template>
  Extra large
</w-tooltip>

<w-tooltip caption show-on-click persistent :model-value="true">
  <template #activator="{ on }">
    <span v-on="on" class="ma3">Caption</span>
  </template>
  Caption style.
</w-tooltip>
`)]),default:t(()=>[n(i,{xs:"","show-on-click":"",persistent:"","model-value":!0,"append-to":".example-sizes"},{activator:t(({on:e})=>[l("span",a({class:"ma6"},s(e,!0)),"xs",16)]),default:t(()=>[o("Extra small")]),_:1}),n(i,{sm:"","show-on-click":"",persistent:"","model-value":!0,"append-to":".example-sizes"},{activator:t(({on:e})=>[l("span",a({class:"ma6"},s(e,!0)),"sm",16)]),default:t(()=>[o("Small")]),_:1}),n(i,{md:"","show-on-click":"",persistent:"","model-value":!0,"append-to":".example-sizes"},{activator:t(({on:e})=>[l("span",a({class:"ma6"},s(e,!0)),"md",16)]),default:t(()=>[o("Medium")]),_:1}),n(i,{lg:"","show-on-click":"",persistent:"","model-value":!0,"append-to":".example-sizes"},{activator:t(({on:e})=>[l("span",a({class:"ma7"},s(e,!0)),"lg",16)]),default:t(()=>[o("Large")]),_:1}),n(i,{xl:"","show-on-click":"",persistent:"","model-value":!0,"append-to":".example-sizes"},{activator:t(({on:e})=>[l("span",a({class:"ma10"},s(e,!0)),"xl",16)]),default:t(()=>[o("Extra large")]),_:1}),n(i,{caption:"","show-on-click":"",persistent:"","model-value":!0,"append-to":".example-sizes"},{activator:t(({on:e})=>[l("span",a({class:"ma10"},s(e,!0)),"Caption",16)]),default:t(()=>[o("Caption style.")]),_:1})]),_:1}),n(m,{h2:""},{default:t(()=>[o("Transitions")]),_:1}),n(u,{"content-class":"text-center"},{pug:t(()=>[o(`.text-center
  w-radios.my4(inline v-model="transition" :items="transitions")
  .text-center.py6
    w-tooltip(:transition="transition" left)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home
      | Home
    w-tooltip(:transition="transition")
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home
      | Home
    w-tooltip(:transition="transition" top)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home
      | Home
    w-tooltip(:transition="transition" right)
      template(#activator="{ on }")
        w-icon.ma2(v-on="on" color="primary" xl) mdi mdi-home
      | Home`)]),html:t(()=>[o(`<div class="text-center">
  <w-radios
    class="my4"
    inline
    v-model="transition"
    :items="transitions">
  </w-radios>

  <div class="text-center py6">
    <w-tooltip :transition="transition" left>
      <template #activator="{ on }">
        <w-icon
          class="ma2"
          v-on="on"
          color="primary"
          xl>
          mdi mdi-home
        </w-icon>
      </template>
      Home
    </w-tooltip>

    <w-tooltip :transition="transition">
      <template #activator="{ on }">
        <w-icon
          class="ma2"
          v-on="on"
          color="primary"
          xl>
          mdi mdi-home
        </w-icon>
      </template>
      Home
    </w-tooltip>

    <w-tooltip :transition="transition" top>
      <template #activator="{ on }">
        <w-icon
          class="ma2"
          v-on="on"
          color="primary"
          xl>
          mdi mdi-home
        </w-icon>
      </template>
      Home
    </w-tooltip>

    <w-tooltip :transition="transition" right>
      <template #activator="{ on }">
        <w-icon
          class="ma2"
          v-on="on"
          color="primary"
          xl>
          mdi mdi-home
        </w-icon>
      </template>
      Home
    </w-tooltip>
  </div>
</div>
`)]),js:t(()=>[o(`data: () => ({
  transition: 'bounce',
  transitions: [
    { label: 'Default', value: '' },
    { label: 'Bounce', value: 'bounce' },
    { label: 'Scale', value: 'scale' },
    { label: 'Twist', value: 'twist' },
    { label: 'Fade', value: 'fade' },
    { label: 'Scale-fade', value: 'scale-fade' }
  ]
})
`)]),default:t(()=>[n(S,{class:"my4",inline:"",modelValue:r.transition,"onUpdate:modelValue":c[6]||(c[6]=e=>r.transition=e),items:r.transitions},null,8,["modelValue","items"]),l("div",ft,[n(i,{transition:r.transition,left:""},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{color:"primary",xl:""}),{default:t(()=>[o("mdi mdi-home")]),_:2},1040)]),default:t(()=>[o("Home")]),_:1},8,["transition"]),n(i,{transition:r.transition},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{color:"primary",xl:""}),{default:t(()=>[o("mdi mdi-home")]),_:2},1040)]),default:t(()=>[o("Home")]),_:1},8,["transition"]),n(i,{transition:r.transition,top:""},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{color:"primary",xl:""}),{default:t(()=>[o("mdi mdi-home")]),_:2},1040)]),default:t(()=>[o("Home")]),_:1},8,["transition"]),n(i,{transition:r.transition,right:""},{activator:t(({on:e})=>[n(p,a({class:"ma2"},s(e),{color:"primary",xl:""}),{default:t(()=>[o("mdi mdi-home")]),_:2},1040)]),default:t(()=>[o("Home")]),_:1},8,["transition"])])]),_:1}),n(m,{h2:"",slug:"appending-to-a-dom-node"},{default:t(()=>[o("Appending to a particular DOM node")]),_:1}),_t,n(u,{class:"mb12","content-class":"pa0"},{pug:t(()=>[o(`.wrapper.text-center.green-light5--bg.pa6
  w-card(bg-color="yellow-light5")
    w-tooltip(append-to=".wrapper")
      template(#activator="{ on }")
        w-tag(v-on="on" lg color="pink-light1" bg-color="pink-light5")
          w-icon.mr1 mdi mdi-bomb
          | Hover me
      span This tooltip is appended to the green container!`)]),html:t(()=>[o(`<div class="wrapper text-center green-light5--bg pa6">
  <w-card bg-color="yellow-light5">
    <w-tooltip append-to=".wrapper">
      <template #activator="{ on }">
        <w-tag
          v-on="on"
          lg
          color="pink-light1"
          bg-color="pink-light5">
          <w-icon class="mr1">mdi mdi-bomb</w-icon>
          Hover me
      </template>

      <span>
        This tooltip is appended to the green container!
      </span>
    </w-tooltip>
  </w-card>
</div>`)]),css:t(()=>[o(`.wrapper {position: relative;}

.w-card {
  overflow: hidden;
  display: inline-block;
  padding: 8px;
}

.w-card:before, .w-card:after {
  content: '';
  position: absolute;
  background-color: #ffea62;
  width: 6em;
  height: 6em;
  border-radius: 100%;
}

.w-card:before {top: -3em;left: -3em;}
.w-card:after {bottom: -3em;right: -3em;}

.w-tag {z-index: 1;}
`)]),default:t(()=>[l("div",xt,[n(A,{"bg-color":"yellow-light5"},{default:t(()=>[n(i,{"append-to":".another-container"},{activator:t(({on:e})=>[n(C,a(s(e),{lg:"",color:"pink-light1","bg-color":"pink-light5"}),{default:t(()=>[n(p,{class:"mr1"},{default:t(()=>[o("mdi mdi-bomb")]),_:1}),o("Hover me")]),_:2},1040)]),default:t(()=>[yt]),_:1})]),_:1})])]),_:1}),n(g,{warning:""},{default:t(()=>[o(`The DOM element that the tooltip is detached to must have a position (fixed, absolute or
relative).
`)]),_:1}),n(m,{h2:""},{default:t(()=>[o("External activator")]),_:1}),kt,n(m,{h3:"",slug:"external-activator--basic"},{default:t(()=>[o("Trigger a menu on hover (left-side) or on click (right-side) of an external activator")]),_:1}),l("div",Tt,[n(u,{class:"example14a grow","content-class":"text-center my4","app-classes-string":"text-center"},{pug:t(()=>[o(`w-button.cat-button(icon="mdi mdi-cat" xl)

w-tooltip(activator=".cat-button") Meow!`)]),html:t(()=>[o(`<w-button
  icon="mdi mdi-cat"
  xl
  class="cat-button">
</w-button>

<w-tooltip activator=".cat-button">
  Meow!
</w-tooltip>
`)]),default:t(()=>[n(d,{class:"cat-button-1",icon:"mdi mdi-cat",xl:""}),n(i,{"append-to":".example14a",activator:".cat-button-1"},{default:t(()=>[o("Meow!")]),_:1})]),_:1}),n(u,{class:"example14b grow","content-class":"text-center my4","app-classes-string":"text-center"},{pug:t(()=>[o(`w-button.cat-button(icon="mdi mdi-cat" xl)

w-tooltip(activator=".cat-button" show-on-click) Meow!`)]),html:t(()=>[o(`<w-button
  icon="mdi mdi-cat"
  xl
  class="cat-button">
</w-button>

<w-tooltip activator=".cat-button" show-on-click>
  Meow!
</w-tooltip>
`)]),default:t(()=>[n(d,{class:"cat-button-2",icon:"mdi mdi-cat",xl:""}),n(i,{"append-to":".example14b",activator:".cat-button-2","show-on-click":""},{default:t(()=>[o("Meow!")]),_:1})]),_:1})]),n(m,{h3:"",slug:"external-activator--2-activators"},{default:t(()=>[o("Trigger the same menu on hover of 2 different external activators")]),_:1}),St,n(g,{tip:""},{default:t(()=>[o(`Note that like in this example, a tiny delay may help positioning the detachable correctly
in case of multiple activators with different menu contents.
`)]),_:1}),n(u,{class:"example16","content-class":"text-center my4","app-classes-string":"d-block text-center"},{pug:t(()=>[o(`w-button.pet-button.cat-button.ma4(
  icon="mdi mdi-cat"
  xl
  @mouseenter="activator = '.cat-button';tooltipContent = 'Meow!'"
  @mouseleave="activator = '.pet-button'")
w-button.pet-button.dog-button.ma4(
  icon="mdi mdi-dog"
  xl
  @mouseenter="activator = '.dog-button';tooltipContent = 'Woof!'"
  @mouseleave="activator = '.pet-button'")

w-tooltip(:activator="activator" :delay="100")
  | `+h("{{ tooltipContent }}"))]),html:t(()=>[o(`<w-button
  icon="mdi mdi-cat"
  xl
  class="pet-button cat-button ma4"
  @mouseenter="activator = '.cat-button';tooltipContent = 'Meow!'"
  @mouseleave="activator = '.pet-button'">
</w-button>
<w-button
  icon="mdi mdi-dog"
  xl
  class="pet-button dog-button ma4"
  @mouseenter="activator = '.dog-button';tooltipContent = 'Woof!'"
  @mouseleave="activator = '.pet-button'">
</w-button>

<w-tooltip :activator="activator" :delay="100">
  `+h("{{ tooltipContent }}")+`
</w-tooltip>`)]),js:t(()=>[o(`data: () => ({
  activator: '.pet-button',
  tooltipContent: ''
})`)]),default:t(()=>[n(d,{class:"pet-button2 cat-button3 ma4",icon:"mdi mdi-cat",xl:"",onMouseenter:c[7]||(c[7]=e=>{r.activator2=".cat-button3",r.tooltipContent="Meow!"}),onMouseleave:c[8]||(c[8]=e=>r.activator2=".pet-button2")}),n(d,{class:"pet-button2 dog-button3 ma4",icon:"mdi mdi-dog",xl:"",onMouseenter:c[9]||(c[9]=e=>{r.activator2=".dog-button3",r.tooltipContent="Woof!"}),onMouseleave:c[10]||(c[10]=e=>r.activator2=".pet-button2")}),n(i,{"append-to":".example16",activator:r.activator2,delay:100},{default:t(()=>[o(h(r.tooltipContent),1)]),_:1},8,["activator"])]),_:1})])}const At={data:()=>({showTooltip:!1,showTooltip2:!1,transition:"bounce",transitions:[{label:"Default",value:""},{label:"Bounce",value:"bounce"},{label:"Scale",value:"scale"},{label:"Twist",value:"twist"},{label:"Fade",value:"fade"},{label:"Scale-fade",value:"scale-fade"}],activator1:".pet-button",activator2:".pet-button2",tooltipContent:""}),methods:{onTooltipClose(){setTimeout(()=>this.showTooltip=!1,100)}}},Ht=_(At,[["render",Ct]]),Mt=l("div",{class:"w-divider my12"},null,-1);function Vt(r,c,x,y,k,v){const g=w("title-link"),m=w("component-api");return b(),f("div",null,[Mt,n(g,{class:"title1",h2:""},{default:t(()=>[o("API")]),_:1}),n(m,{class:"mt0",items:v.props,descriptions:r.propsDescs,title:"Props"},null,8,["items","descriptions"]),n(m,{items:r.slots,title:"Slots"},null,8,["items"]),n(m,{items:v.events,title:"Events"},null,8,["items"])])}const $t={modelValue:'<strong class="error"><code>value</code> in Vue 2.</strong><br>This prop controls the visibility of the tooltip. Any truthy value will show the tooltip whereas any falsy value will hide it.',showOnClick:"Triggers the tooltip apparition on activator click instead of hover by default. Another click on the activator will hide the tooltip.",enableTouch:"Enables the hover-activating tooltips on touch devices:<br>Since you can't hover on touch device (you can only tap which is counted as a click), the hover-activating tooltips are not behaving similar on mobile as they need a tap to be closed. That's why this option is disabled by default.",color:`Applies a color to the tooltip's text. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,bgColor:`Applies a color to the tooltip's background. Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.`,shadow:"Applies a drop shadow to the tooltip.",noBorder:"Removes the default border from the tooltip element.",transition:'Applies a particular transition to the tooltip element when showing and hiding.<br>Accepts all the transitions listed in the <a href="transitions">transitions</a> knowledge base page. You can also disable the transition by setting this prop to an empty string.',tile:"Removes the default border-radius and sets sharp edges on the tooltip.",round:"Sets a maximum border-radius on the corners of the tooltip, giving it a round look.",tooltipClass:"Provide custom CSS classes for the tooltip element.",appendTo:'Moves the tooltip element into another DOM element.<br>Accepts a valid query selector string. If the string is invalid, or the node is not found or if <code>true</code> is provided, `<span class="code">.w-app</span>` will be the target.<br>The default root is <span class="code">.w-app</span> or the <code>w-dialog</code> or <code>w-drawer</code> or <code>w-menu</code> or <code>w-overlay</code> it is placed in.',fixed:"Sets the CSS position of the tooltip to <code>fixed</code> (absolute by default).",top:"Places the tooltip at the top of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the top of its container otherwise.",bottom:"Places the tooltip at the bottom of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the bottom of its container otherwise.",left:"Places the tooltip at the left of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the left of its container otherwise.",right:"Places the tooltip at the right of the screen when the <code>fixed</code> prop is set to <code>true</code> or at the right of its container otherwise.",zIndex:"Applies a z-index (positive or negative integer) to the tooltip.",persistent:"When set to <code>true</code>, clicking outside of the tooltip will not close the tooltip.",activator:"Allows you to define one or multiple external activators for the tooltip through a DOM selector string.<br>This way, you don't need to use the <code>activator</code> slot, and you can activate the tooltip from different activators.",delay:"A delay - in milliseconds - before opening the tooltip.<br>A small delay may help the tooltip position computing if the tooltip content changes at the moment the activator is activated. For instance, when defining multiple activators opening the same tooltip with different content.",caption:"Apply the <code>.caption</code> style on the tooltip content (small, grey, italic).",xs:"Sets the size of the tooltip to extra small.",sm:"Sets the size of the tooltip to small.",md:"Sets the size of the tooltip to medium.",lg:"Sets the size of the tooltip to large.",xl:"Sets the size of the tooltip to extra large."},Et={activator:{description:'<strong>This slot is required and must have the <code>v-on="on"</code> directive set on it for the tooltip to toggle correctly.</strong><br>The activator can be any visible DOM element or mounted component.'},default:{description:"The tooltip content."}},Dt={input:"Emitted each time the state of the component changes (when showing or hiding the tooltip).<br>Updates the v-model value in Vue 2.x only.","update:modelValue":"Emitted each time the state of the component changes (when showing or hiding the tooltip).<br>Updates the v-model value in Vue 3 only.",close:"Emitted on tooltip close.",open:"Emitted on tooltip open."},zt={data:()=>({propsDescs:$t,slots:Et}),computed:{props(){return T.props},events(){return T.emits.reduce((r,c)=>(r[c]={description:Dt[c]||""})&&r,{})}}},qt=_(zt,[["render",Vt]]);function Ot(r,c,x,y,k,v){const g=w("ui-component-title"),m=w("examples"),p=w("api");return b(),f("main",null,[n(g,null,{default:t(()=>[o("w-tooltip")]),_:1}),n(m),n(p)])}const Bt={components:{Examples:Ht,Api:qt}},Rt=_(Bt,[["render",Ot]]);export{Rt as default};
