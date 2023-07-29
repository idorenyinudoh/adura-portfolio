<script setup lang="ts">
const process = ref([
  {
    title: 'Empathize',
    desc: 'During the empathy phase of my design process, I endevour to understand the problems to which I\'m trying to provide a solution to. This would requires a few processes like observing users, carrying out interviews to users or prospects to understand how they think, what they feel and how that may percieve the product.'
  },
  {
    title: 'Define',
    desc: 'After I am able to understand the users needs, goals and problems through research, interviews and observation in the empathy phase. I am then able to circle back and narrow down key problems that are particular to multiple users and then highlight a definite, yet feasioble problem which can be addressed.'
  },
  {
    title: 'Ideate',
    desc: 'This is where the magic begins, we enter the user interface aspect. After multiple brainstorming sessions within teams and or stakeholders, I get started with bringing a solution to life. Sketches, low fidelity prototypes are created in this phase. These blueprints would then determine how the solutions would look like.'
  },
  {
    title: 'Prototype',
    desc: 'Building on the low fidelity prototypes, I then proceed to creating a more useable and useful high fidelity prototype. One which I ensure to get feedbacks on these from users, potential users, clients and developers. This plays a vital role as we would need to have a constant communication flow to create a solution envisioned by the client as well as make users life easier.'
  },
  {
    title: 'Test',
    desc: 'In this process, we have the carry out survey on users, focused groups, extreme users to get feedbacks of the product already worked on and if need be,go back to my drawing board if a problem is pointed out by user or users seem to find it difficult to navigate their way around the product.'
  }
])
</script>

<template>
  <TextBaseH1 text="MY DESIGN PROCESS" />
  <TextBaseP>
    On my journey to be an authority in my field, I've come to understand that while there are guiding procedures to which I follow to creating intuitive solutions with my designs, I've learnt that it is a non-linear and iterative process. What this means is that design solutions are continuous due to human wants being insatiable so these processes are often revisited from time to time even after originally carried out.
  </TextBaseP>
  <div class="my-12 lg:my-20">
    <div v-for="(step, index) in process" :key="index">
      <div class="flex gap-x-5 lg:gap-x-10 items-center">
        <div class="w-12 h-12 md:w-[60px] md:h-[60px] lg:w-[72px] lg:h-[72px] bg-adura-purple rounded-full flex justify-center items-center">
          <svg class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M6.25002 20C6.24965 17.5862 6.88471 15.2148 8.09137 13.1243C9.29803 11.0337 11.0338 9.29762 13.1241 8.09055C15.2144 6.88348 17.5857 6.24796 19.9995 6.24786C22.4133 6.24777 24.7846 6.88311 26.875 8.09001C27.162 8.25316 27.5018 8.29618 27.8204 8.2097C28.1389 8.12321 28.4103 7.91424 28.5754 7.62838C28.7404 7.34252 28.7857 7.00298 28.7013 6.68386C28.617 6.36474 28.4098 6.09195 28.125 5.92501C25.0272 4.13647 21.4257 3.42006 17.8792 3.88691C14.3327 4.35376 11.0394 5.97777 8.50991 8.50707C5.98044 11.0364 4.35622 14.3296 3.88915 17.8761C3.42207 21.4226 4.13824 25.0241 5.92659 28.122C7.71494 31.22 10.4755 33.6413 13.7802 35.0105C17.0849 36.3796 20.749 36.6201 24.2043 35.6946C27.6596 34.7691 30.713 32.7294 32.8909 29.8917C35.0688 27.0541 36.2496 23.5771 36.25 20C36.25 19.6685 36.1183 19.3506 35.8839 19.1161C35.6495 18.8817 35.3315 18.75 35 18.75C34.6685 18.75 34.3506 18.8817 34.1161 19.1161C33.8817 19.3506 33.75 19.6685 33.75 20C33.75 23.6467 32.3014 27.1441 29.7227 29.7227C27.1441 32.3014 23.6468 33.75 20 33.75C16.3533 33.75 12.8559 32.3014 10.2773 29.7227C7.69868 27.1441 6.25002 23.6467 6.25002 20Z" fill="#363636"/>
            <path d="M38.3846 8.38502C38.5008 8.2688 38.593 8.13082 38.6559 7.97897C38.7188 7.82712 38.7512 7.66437 38.7512 7.50001C38.7512 7.33566 38.7188 7.1729 38.6559 7.02106C38.593 6.86921 38.5008 6.73123 38.3846 6.61501C38.2684 6.49879 38.1304 6.4066 37.9786 6.34371C37.8267 6.28081 37.664 6.24844 37.4996 6.24844C37.3353 6.24844 37.1725 6.28081 37.0207 6.34371C36.8688 6.4066 36.7308 6.49879 36.6146 6.61501L19.9996 23.2325L13.3846 16.615C13.2684 16.4988 13.1304 16.4066 12.9786 16.3437C12.8267 16.2808 12.664 16.2484 12.4996 16.2484C12.3353 16.2484 12.1725 16.2808 12.0207 16.3437C11.8688 16.4066 11.7308 16.4988 11.6146 16.615C11.4984 16.7312 11.4062 16.8692 11.3433 17.0211C11.2804 17.1729 11.248 17.3357 11.248 17.5C11.248 17.6644 11.2804 17.8271 11.3433 17.979C11.4062 18.1308 11.4984 18.2688 11.6146 18.385L19.1146 25.885C19.2307 26.0014 19.3687 26.0938 19.5205 26.1568C19.6724 26.2198 19.8352 26.2522 19.9996 26.2522C20.164 26.2522 20.3268 26.2198 20.4787 26.1568C20.6306 26.0938 20.7685 26.0014 20.8846 25.885L38.3846 8.38502Z" fill="#363636"/>
          </svg>
        </div>
        <p class="text-adura-black text-2xl md:text-3xl lg:text-[40px] font-medium">{{ step.title }}</p>
      </div>
      <div class="mt-4 mb-8 lg:mb-10 grid grid-cols-[48px_1fr] md:grid-cols-[60px_1fr] lg:grid-cols-[72px_1fr] gap-x-5 lg:gap-x-10 items-center">
        <div class="w-[3px] h-[87.5%] bg-[#363636] justify-self-center" />
        <TextBaseP class="!my-0">
          {{ step.desc }}
        </TextBaseP>
      </div>
    </div>
  </div>
</template>