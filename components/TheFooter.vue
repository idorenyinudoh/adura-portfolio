<template>
  <footer class="relative bg-adura-black -mx-[8.3vw] xl:-mx-[120px] px-[8.3vw] xl:px-[120px] mt-14 md:mt-20 lg:mt-28 pt-11 md:pt-14 lg:pt-20 pb-[102px] md:pb-36 xl:pb-40 -mb-14 lg:-mb-32">
    <img class="hidden md:block absolute -top-[92%] left-0 -z-10" src="~/assets/images/contact-grid.png" alt="">
    <h2 class="text-white mt-0">REACH OUT</h2>
    <address class="md:mb-10 grid grid-cols-1 grid-rows-[max-content_1fr] md:grid-cols-[1fr_1.5fr] lg:grid-cols-[max-content_1fr] gap-y-6 sm:gap-y-10 md:gap-y-0 gap-x-8 lg:gap-x-16 xl:gap-x-[72px] justify-between md:items-center lg:items-end not-italic">
      <NuxtLink to="mailto:abiolaaduragbemiaa@gmail.com" class="text-3xl md:text-4xl xl:text-5xl text-white font-normal underline break-all">
        <span>abiolaaduragbemiaa</span>
        <br class="sm:hidden lg:block">
        <span>@gmail.com</span>
      </NuxtLink>
      <div class="grid grid-cols-2 lg:grid-cols-[repeat(3,1fr)] gap-3 sm:gap-4 xl:gap-5 2xl:w-[720px] 2xl:justify-self-end">
        <p class="hidden lg:block text-sm md:text-base lg:text-xl text-white text-right font-normal self-center col-start-1 col-end-3">
          <span>I hear TikTok is</span>
          <br>
          <span>really fun these days</span>
        </p>
        <TheFooterOutboundLink title="TikTok" url="https://www.tiktok.com/@aduragbemi_aa" class="self-center" />
        <TheFooterOutboundLink title="Instagram" url="https://www.instagram.com/adura.ux/" />
        <TheFooterOutboundLink title="Twitter" url="https://twitter.com/aduragbemi_aa" />
        <TheFooterOutboundLink title="Medium" url="https://medium.com/@abiolaaduragbemiaa" />
      </div>
    </address>
  </footer>
</template>