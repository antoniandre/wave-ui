<template lang="pug">
div
  title-link(h2) Default
  p Minimal setup: constrain height so content can scroll. Use #[code content-class] for padding or layout on the inner scroll container. Add an #[code aria-label] when the region's purpose is not obvious from nearby text.
  example
    w-card(content-class="pa0")
      w-scrollable(height="200" content-class="pa4" aria-label="Scrollable example")
        p.ma0(v-html="scrollDemoHtml")
    template(#pug).
      w-card(bg-color="contrast")
        w-scrollable(height="200" content-class="pa4" aria-label="Scrollable example")
          p Your scrollable content here.
    template(#html).
      &lt;w-card bg-color="contrast"&gt;
        &lt;w-scrollable height="200" content-class="pa4" aria-label="Scrollable example"&gt;
          &lt;p&gt;Your scrollable content here.&lt;/p&gt;
        &lt;/w-scrollable&gt;
      &lt;/w-card&gt;

  title-link.mt8(h2) Scroll position
  p Bind #[code :scroll-position] to a number for the primary axis (#[code scrollTop] vertically, #[code scrollLeft] when #[code horizontal]), or to an object such as #[code :scroll-position="{ top: 150 }"] or #[code :scroll-position="{ top: 0, left: 40 }"] when you need one or both axes.
  example
    w-card(content-class="pa0")
      w-scrollable(height="200" :scroll-position="150")
        p.ma0(v-html="scrollDemoHtml")
    template(#pug).
      w-card(bg-color="contrast")
        w-scrollable(height="200" :scroll-position="150")
          p …your content…
        //- or :scroll-position="{ top: 150 }" for object form
    template(#html).
      &lt;w-card bg-color="contrast"&gt;
        &lt;w-scrollable height="200" :scroll-position="150"&gt;
          …
        &lt;/w-scrollable&gt;
      &lt;/w-card&gt;

  title-link.mt8(h2) Colored scrollbar
  p Use #[code color] for the thumb and #[code bg-color] for the track (Wave color names or CSS colors).
  example
    w-card(content-class="pa0")
      w-scrollable(
        height="200"
        color="pink"
        bg-color="pink-light6")
        p.ma0(v-html="scrollDemoHtml")
    template(#pug).
      w-card(bg-color="contrast")
        w-scrollable(
          height="200"
          color="pink"
          bg-color="pink-light6"
         )
          p …your content…
    template(#html).
      &lt;w-card bg-color="contrast"&gt;
        &lt;w-scrollable
          height="200"
          color="pink"
          bg-color="pink-light6"
         &gt;
          …
        &lt;/w-scrollable&gt;
      &lt;/w-card&gt;

  title-link.mt8(h2) Horizontal
  example
    w-card(content-class="pa0")
      w-scrollable(
        horizontal
        content-class="w-flex gap3 pa3")
        w-card.no-shrink.pa6.blue-light6--bg(v-for="i in 12" :key="i") Card {{ i }}
    template(#pug).
      w-card(content-class="pa0")
        w-scrollable(horizontal content-class="w-flex gap3 pa3")
          w-card.no-shrink.pa6.blue-light6--bg(v-for="i in 12" :key="i") Card \{\{ i \}\}
    template(#html).
      &lt;w-card content-class="pa0"&gt;
        &lt;w-scrollable horizontal content-class="w-flex gap3 pa3"&gt;
          &lt;w-card class="no-shrink pa6 blue-light6--bg" v-for="i in 12" :key="i"&gt;Card \{\{ i \}\}&lt;/w-card&gt;
        &lt;/w-scrollable&gt;
      &lt;/w-card&gt;

  title-link.mt8(h2) No visible scrollbar
  p With #[code scrollbar="0"], the custom track stays hidden while content still scrolls (wheel, trackpad, or touch).
  example
    w-card(content-class="pa0")
      w-scrollable(height="200" scrollbar="0")
        p.text-bold.mb2 The Wave scrollbar track is hidden here; scrolling still works like a normal overflow region.
        p.ma0(v-html="scrollDemoHtml")
    template(#pug).
      w-card(content-class="pa0")
        w-scrollable(height="200" scrollbar="0")
          p …intro…
          p …long body copy…
    template(#html).
      &lt;w-card content-class="pa0"&gt;
        &lt;w-scrollable height="200" scrollbar="0"&gt;
          …
        &lt;/w-scrollable&gt;
      &lt;/w-card&gt;

  title-link.mt8(h2) Scrollbar on hover, while dragging, or while scrolling
  p With #[code scrollbar="hover"], the custom bar appears when the pointer is over the region, while dragging the thumb, or when wheel or (focused) keyboard scrolling runs through the component.
  p Hover the box, or scroll with the wheel (without hovering), or drag the thumb when the bar is visible. The bar can appear from hover, from scroll activity, or while dragging.
  example
    w-card(content-class="pa0")
      w-scrollable(height="160" scrollbar="hover")
        p Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>Quos maiores enim labore id sunt quas corporis at molestias quo atque ea rerum, tempore eveniet repellat quaerat dolore facilis expedita deserunt!<br>Atque possimus id recusandae nostrum maxime, asperiores qui ut ea quod sint perferendis iusto, necessitatibus veritatis sed adipisci?<br> Hic repudiandae architecto tempore sint saepe voluptatem laboriosam nostrum eveniet dolorum numquam?<br>Nisi, laborum, quisquam veniam optio voluptatem, placeat perspiciatis quia quod magnam cupiditate repellendus repellat voluptates nam quos modi quasi quam culpa odit! Deserunt distinctio facere vitae debitis eaque quam repellat!<br>Nam deleniti distinctio enim porro minus impedit, magnam eius sapiente recusandae, eligendi ea pariatur et, temporibus ducimus corporis ipsa beatae assumenda placeat laboriosam molestias earum.<br>Fuga ab facilis possimus earum?<br>Fugiat harum corrupti facere ab, beatae tempora doloremque accusamus!<br> Ipsa similique facilis omnis accusantium doloremque nesciunt voluptate officia reiciendis, ipsum nostrum officiis nihil est adipisci aliquam maiores illo voluptates atque.Doloribus debitis numquam, dolorum vitae iste a neque perferendis asperiores optio magni assumenda voluptas non eos fugiat officia.<br>Minima corporis pariatur provident ipsam voluptatibus, cupiditate ipsum dolores quod quia reprehenderit?<br>Quidem excepturi nobis ut eum soluta quisquam suscipit ducimus laudantium fuga minus possimus fugiat nostrum reiciendis, fugit consequuntur saepe rem, commodi, quasi veniam impedit.<br>Sequi nostrum nulla quaerat nam repudiandae?<br>Dicta, vitae inventore!<br> Architecto quasi dolores odit, blanditiis nisi pariatur.<br>Autem sapiente hic modi cum, animi molestiae ea ipsam, vero perspiciatis commodi pariatur fugit temporibus maxime et repudiandae libero error?<br>Quaerat dolorem, laboriosam iste voluptas similique, aliquam officiis nesciunt earum mollitia asperiores fugit odio sapiente vitae consequuntur reprehenderit facere ea eum ad porro dignissimos hic corporis.<br>Harum dolorum impedit nobis?<br>Atque nobis, magnam rem temporibus esse dicta sapiente magni expedita facere.<br>Numquam doloribus, est voluptatibus repellat dolor, temporibus, laudantium possimus voluptatum cumque beatae necessitatibus nemo facere.<br>Similique nulla eius tempora!<br>Quis quidem tempora rerum qui maxime, velit consequuntur similique in, necessitatibus aspernatur, magni voluptates nostrum labore itaque temporibus est.<br>Laudantium consequuntur voluptatum dolore nulla nostrum sunt eaque sequi labore vero.Maiores aliquid, blanditiis tenetur ipsum sapiente odio dignissimos et tempore nostrum culpa laborum officia necessitatibus modi quo voluptatem unde veniam?<br> Nemo cum quia quibusdam ratione eos.<br>Alias fuga architecto dolorum?<br>Alias voluptates mollitia veniam modi hic, unde ipsum facilis recusandae.<br>Ducimus nesciunt nemo placeat dolore sint ex illum?<br> Tempora fugiat perspiciatis officiis natus aliquid eaque saepe voluptatem laborum sunt expedita.Eveniet dolores nobis fuga tempore?<br> Doloribus, facere voluptatibus?<br> Repudiandae hic in consequuntur incidunt fugit velit et quos exercitationem tenetur ex maiores rerum quis architecto impedit, eveniet repellendus, error non molestiae.Sed temporibus vero quis, inventore ipsum delectus iusto consequatur ducimus odio optio amet cupiditate laudantium necessitatibus alias totam exercitationem qui est doloremque corporis.<br>Tempore beatae maxime porro quam minus hic.Adipisci mollitia dolor maxime labore eius dolore ea, iusto dolorem, sapiente distinctio atque?<br> Blanditiis beatae exercitationem maxime!<br> Facere, laboriosam quasi unde laudantium expedita tempore enim nam dolorem odit quam.<br>Quam?<br>Atque eaque error officia distinctio dolorem expedita voluptas perspiciatis asperiores iste et aliquam vitae cupiditate nulla facilis eius soluta, modi eum, eveniet minima tenetur voluptate.<br>Doloribus dolorem ut dolore quibusdam.Eos earum odio iusto aliquid quos, ipsum reprehenderit, commodi delectus praesentium maxime nesciunt labore alias obcaecati ut repudiandae dolorum aut eligendi?<br> Adipisci, quisquam labore?<br> Quam mollitia velit magni sit dolorem!<br>Suscipit, odit sint, consequuntur amet rerum tempora, ut similique doloremque expedita in dolores nemo inventore hic?<br> A, modi perspiciatis nesciunt dolor aspernatur veniam eum cumque libero culpa sunt fugit voluptatum.Ab quas eveniet eius nobis neque accusantium quibusdam totam, vero officiis quisquam!<br> Corporis a dignissimos consequuntur, eveniet error labore temporibus excepturi debitis nam adipisci deserunt, quasi ducimus veniam et eius.
    template(#pug).
      w-card(content-class="pa0")
        w-scrollable(height="160" scrollbar="hover")
          p …
    template(#html).
      &lt;w-card content-class="pa0"&gt;
        &lt;w-scrollable height="160" scrollbar="hover"&gt;…&lt;/w-scrollable&gt;
      &lt;/w-card&gt;

  title-link.mt8(h2) Scrollbar only while dragging or scrolling (no hover)
  p With #[code scrollbar="interaction"], the custom track stays hidden until you drag the thumb or scroll with the wheel/keyboard (while the region is focused for keyboard). Moving the pointer over the area alone does not reveal it.
  p The bar is hidden until you scroll (wheel, or keyboard with focus) or drag the thumb. Hover alone does not show it.
  example
    w-card(content-class="pa0")
      w-scrollable(height="160" scrollbar="interaction")
        p Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>Quos maiores enim labore id sunt quas corporis at molestias quo atque ea rerum, tempore eveniet repellat quaerat dolore facilis expedita deserunt!<br>Atque possimus id recusandae nostrum maxime, asperiores qui ut ea quod sint perferendis iusto, necessitatibus veritatis sed adipisci?<br> Hic repudiandae architecto tempore sint saepe voluptatem laboriosam nostrum eveniet dolorum numquam?<br>Nisi, laborum, quisquam veniam optio voluptatem, placeat perspiciatis quia quod magnam cupiditate repellendus repellat voluptates nam quos modi quasi quam culpa odit! Deserunt distinctio facere vitae debitis eaque quam repellat!<br>Nam deleniti distinctio enim porro minus impedit, magnam eius sapiente recusandae, eligendi ea pariatur et, temporibus ducimus corporis ipsa beatae assumenda placeat laboriosam molestias earum.<br>Fuga ab facilis possimus earum?<br>Fugiat harum corrupti facere ab, beatae tempora doloremque accusamus!<br> Ipsa similique facilis omnis accusantium doloremque nesciunt voluptate officia reiciendis, ipsum nostrum officiis nihil est adipisci aliquam maiores illo voluptates atque.Doloribus debitis numquam, dolorum vitae iste a neque perferendis asperiores optio magni assumenda voluptas non eos fugiat officia.<br>Minima corporis pariatur provident ipsam voluptatibus, cupiditate ipsum dolores quod quia reprehenderit?<br>Quidem excepturi nobis ut eum soluta quisquam suscipit ducimus laudantium fuga minus possimus fugiat nostrum reiciendis, fugit consequuntur saepe rem, commodi, quasi veniam impedit.<br>Sequi nostrum nulla quaerat nam repudiandae?<br>Dicta, vitae inventore!<br> Architecto quasi dolores odit, blanditiis nisi pariatur.<br>Autem sapiente hic modi cum, animi molestiae ea ipsam, vero perspiciatis commodi pariatur fugit temporibus maxime et repudiandae libero error?<br>Quaerat dolorem, laboriosam iste voluptas similique, aliquam officiis nesciunt earum mollitia asperiores fugit odio sapiente vitae consequuntur reprehenderit facere ea eum ad porro dignissimos hic corporis.<br>Harum dolorum impedit nobis?<br>Atque nobis, magnam rem temporibus esse dicta sapiente magni expedita facere.<br>Numquam doloribus, est voluptatibus repellat dolor, temporibus, laudantium possimus voluptatum cumque beatae necessitatibus nemo facere.<br>Similique nulla eius tempora!<br>Quis quidem tempora rerum qui maxime, velit consequuntur similique in, necessitatibus aspernatur, magni voluptates nostrum labore itaque temporibus est.<br>Laudantium consequuntur voluptatum dolore nulla nostrum sunt eaque sequi labore vero.Maiores aliquid, blanditiis tenetur ipsum sapiente odio dignissimos et tempore nostrum culpa laborum officia necessitatibus modi quo voluptatem unde veniam?<br> Nemo cum quia quibusdam ratione eos.<br>Alias fuga architecto dolorum?<br>Alias voluptates mollitia veniam modi hic, unde ipsum facilis recusandae.<br>Ducimus nesciunt nemo placeat dolore sint ex illum?<br> Tempora fugiat perspiciatis officiis natus aliquid eaque saepe voluptatem laborum sunt expedita.Eveniet dolores nobis fuga tempore?<br> Doloribus, facere voluptatibus?<br> Repudiandae hic in consequuntur incidunt fugit velit et quos exercitationem tenetur ex maiores rerum quis architecto impedit, eveniet repellendus, error non molestiae.Sed temporibus vero quis, inventore ipsum delectus iusto consequatur ducimus odio optio amet cupiditate laudantium necessitatibus alias totam exercitationem qui est doloremque corporis.<br>Tempore beatae maxime porro quam minus hic.Adipisci mollitia dolor maxime labore eius dolore ea, iusto dolorem, sapiente distinctio atque?<br> Blanditiis beatae exercitationem maxime!<br> Facere, laboriosam quasi unde laudantium expedita tempore enim nam dolorem odit quam.<br>Quam?<br>Atque eaque error officia distinctio dolorem expedita voluptas perspiciatis asperiores iste et aliquam vitae cupiditate nulla facilis eius soluta, modi eum, eveniet minima tenetur voluptate.<br>Doloribus dolorem ut dolore quibusdam.Eos earum odio iusto aliquid quos, ipsum reprehenderit, commodi delectus praesentium maxime nesciunt labore alias obcaecati ut repudiandae dolorum aut eligendi?<br> Adipisci, quisquam labore?<br> Quam mollitia velit magni sit dolorem!<br>Suscipit, odit sint, consequuntur amet rerum tempora, ut similique doloremque expedita in dolores nemo inventore hic?<br> A, modi perspiciatis nesciunt dolor aspernatur veniam eum cumque libero culpa sunt fugit voluptatum.Ab quas eveniet eius nobis neque accusantium quibusdam totam, vero officiis quisquam!<br> Corporis a dignissimos consequuntur, eveniet error labore temporibus excepturi debitis nam adipisci deserunt, quasi ducimus veniam et eius.
    template(#pug).
      w-card(content-class="pa0")
        w-scrollable(height="160" scrollbar="interaction")
          p …
    template(#html).
      &lt;w-card content-class="pa0"&gt;
        &lt;w-scrollable height="160" scrollbar="interaction"&gt;…&lt;/w-scrollable&gt;
      &lt;/w-card&gt;

  title-link.mt8(h2) Disabled
  p With #[code disabled], the region is inert (no wheel, keyboard, or drag) and the custom track is not shown.
  example
    w-card(content-class="pa0")
      w-scrollable(height="160" disabled)
        p.text-bold This area cannot be scrolled via the component; the custom track is hidden while disabled.
        p Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>Quos maiores enim labore id sunt quas corporis at molestias quo atque ea rerum, tempore eveniet repellat quaerat dolore facilis expedita deserunt!<br>Atque possimus id recusandae nostrum maxime, asperiores qui ut ea quod sint perferendis iusto, necessitatibus veritatis sed adipisci?<br> Hic repudiandae architecto tempore sint saepe voluptatem laboriosam nostrum eveniet dolorum numquam?<br>Nisi, laborum, quisquam veniam optio voluptatem, placeat perspiciatis quia quod magnam cupiditate repellendus repellat voluptates nam quos modi quasi quam culpa odit! Deserunt distinctio facere vitae debitis eaque quam repellat!<br>Nam deleniti distinctio enim porro minus impedit, magnam eius sapiente recusandae, eligendi ea pariatur et, temporibus ducimus corporis ipsa beatae assumenda placeat laboriosam molestias earum.<br>Fuga ab facilis possimus earum?<br>Fugiat harum corrupti facere ab, beatae tempora doloremque accusamus!<br> Ipsa similique facilis omnis accusantium doloremque nesciunt voluptate officia reiciendis, ipsum nostrum officiis nihil est adipisci aliquam maiores illo voluptates atque.Doloribus debitis numquam, dolorum vitae iste a neque perferendis asperiores optio magni assumenda voluptas non eos fugiat officia.<br>Minima corporis pariatur provident ipsam voluptatibus, cupiditate ipsum dolores quod quia reprehenderit?<br>Quidem excepturi nobis ut eum soluta quisquam suscipit ducimus laudantium fuga minus possimus fugiat nostrum reiciendis, fugit consequuntur saepe rem, commodi, quasi veniam impedit.<br>Sequi nostrum nulla quaerat nam repudiandae?<br>Dicta, vitae inventore!<br> Architecto quasi dolores odit, blanditiis nisi pariatur.<br>Autem sapiente hic modi cum, animi molestiae ea ipsam, vero perspiciatis commodi pariatur fugit temporibus maxime et repudiandae libero error?<br>Quaerat dolorem, laboriosam iste voluptas similique, aliquam officiis nesciunt earum mollitia asperiores fugit odio sapiente vitae consequuntur reprehenderit facere ea eum ad porro dignissimos hic corporis.<br>Harum dolorum impedit nobis?<br>Atque nobis, magnam rem temporibus esse dicta sapiente magni expedita facere.<br>Numquam doloribus, est voluptatibus repellat dolor, temporibus, laudantium possimus voluptatum cumque beatae necessitatibus nemo facere.<br>Similique nulla eius tempora!<br>Quis quidem tempora rerum qui maxime, velit consequuntur similique in, necessitatibus aspernatur, magni voluptates nostrum labore itaque temporibus est.<br>Laudantium consequuntur voluptatum dolore nulla nostrum sunt eaque sequi labore vero.Maiores aliquid, blanditiis tenetur ipsum sapiente odio dignissimos et tempore nostrum culpa laborum officia necessitatibus modi quo voluptatem unde veniam?<br> Nemo cum quia quibusdam ratione eos.<br>Alias fuga architecto dolorum?<br>Alias voluptates mollitia veniam modi hic, unde ipsum facilis recusandae.<br>Ducimus nesciunt nemo placeat dolore sint ex illum?<br> Tempora fugiat perspiciatis officiis natus aliquid eaque saepe voluptatem laborum sunt expedita.Eveniet dolores nobis fuga tempore?<br> Doloribus, facere voluptatibus?<br> Repudiandae hic in consequuntur incidunt fugit velit et quos exercitationem tenetur ex maiores rerum quis architecto impedit, eveniet repellendus, error non molestiae.Sed temporibus vero quis, inventore ipsum delectus iusto consequatur ducimus odio optio amet cupiditate laudantium necessitatibus alias totam exercitationem qui est doloremque corporis.<br>Tempore beatae maxime porro quam minus hic.Adipisci mollitia dolor maxime labore eius dolore ea, iusto dolorem, sapiente distinctio atque?<br> Blanditiis beatae exercitationem maxime!<br> Facere, laboriosam quasi unde laudantium expedita tempore enim nam dolorem odit quam.<br>Quam?<br>Atque eaque error officia distinctio dolorem expedita voluptas perspiciatis asperiores iste et aliquam vitae cupiditate nulla facilis eius soluta, modi eum, eveniet minima tenetur voluptate.<br>Doloribus dolorem ut dolore quibusdam.Eos earum odio iusto aliquid quos, ipsum reprehenderit, commodi delectus praesentium maxime nesciunt labore alias obcaecati ut repudiandae dolorum aut eligendi?<br> Adipisci, quisquam labore?<br> Quam mollitia velit magni sit dolorem!<br>Suscipit, odit sint, consequuntur amet rerum tempora, ut similique doloremque expedita in dolores nemo inventore hic?<br> A, modi perspiciatis nesciunt dolor aspernatur veniam eum cumque libero culpa sunt fugit voluptatum.Ab quas eveniet eius nobis neque accusantium quibusdam totam, vero officiis quisquam!<br> Corporis a dignissimos consequuntur, eveniet error labore temporibus excepturi debitis nam adipisci deserunt, quasi ducimus veniam et eius.
    template(#pug).
      w-card(content-class="pa0")
        w-scrollable(height="160")
          p …
    template(#html).
      &lt;w-card content-class="pa0"&gt;
        &lt;w-scrollable height="160"&gt;…&lt;/w-scrollable&gt;
      &lt;/w-card&gt;
</template>

<script>
import { scrollDemoHtml } from './scrollable-demo-html.js'

export default {
  data: () => ({ scrollDemoHtml })
}
</script>
