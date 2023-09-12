<template>
  <div class="hero -mx-[8.3vw] xl:-mx-[120px] -mt-16 md:-mt-24 h-[80vh] md:h-[calc(100vh-173px)] xl:h-[calc(100vh-225px)] flex justify-center items-center">
    <TextBaseH1 text="RECENT WORKS OF ART" class="text-white text-center mx-[15%]" />
  </div>
  <div class="pt-20 md:pt-28 lg:pt-36 pb-9 md:pb-14 lg:pb-8">
    <div class="py-10 md:py-14 lg:py-20 grid grid-cols-1 md:grid-cols-[max-content_1fr] gap-x-12 lg:gap-x-20 items-center">
      <div class="hidden md:flex rounded-2xl bg-[#C0DCB6] p-4 w-[190px] lg:w-[247px] flex-col gap-y-4">
        <div class="relative rounded-lg bg-white w-full pt-[80%]">
          <img class="bounce absolute bottom-[calc(22%+2px)] left-0 right-0 mx-auto w-2/5" src="~/assets/images/projects/kole-logo.png" alt="">
          <div class="shrink absolute bottom-[22%] left-0 right-0 mx-auto bg-[#D9D9D9]/30 w-1/2 h-[5px] rounded-[80%]" />
        </div>
        <div class="flex justify-between items-center px-4 py-2 bg-white rounded-[32px]">
          <p class="text-adura-black text-xs md:text-sm lg:text-base font-normal">Construction, AI</p>
          <svg class="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667" stroke="#1A1A1A" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
      <div class="text-sm md:text-base lg:text-xl text-adura-black font-normal">
        <p class="text-xl md:text-2xl lg:text-3xl font-bold mb-3 lg:mb-6">Kólé</p>
        <p class="mb-1 lg:mb-2">Website, Mobile App, Web App</p>
        <p class="mb-4">Apr 2023 - Present</p>
        <p class="py-4 border-t border-solid border-adura-black/20">
          Kólé is dedicated to revolutionising construction planning and management in Africa. Empowering aspiring home owners and construction professionals alike with cutting-edge digital solutions that simplify and optimise every aspect of the construction journey.
          <br>
          <br>
          From scheduling to budgeting and resource allocation, Kólé streamlines your building journey, keeping your project on track and within budget.
        </p>
        <a class="text-[#C7BEBE] border-b border-solid border-[#C7BEBE]" href="">See design process</a>
      </div>
    </div>
  </div>
  <TheContact />
</template>

<style scoped>
.hero {
  background: linear-gradient(rgb(26 26 26 / 87%) 0%, rgb(26 26 26 / 87%) 100%), url(@/assets/images/projects/betasms.png);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.shrink {
  animation: shrink 3s ease-in-out forwards infinite;
}
@keyframes shrink {
  0% {
    width: 50%;
    height: 5px;
  }
  50% {
    width: 0%;
    height: 2px;
  }
  100% {
    width: 50%;
    height: 5px;
  }
}
.bounce {
  animation: bounce 3s ease-in-out forwards infinite;
}
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20%);
  }
  100% {
    transform: translateY(0);
  }
}
</style>