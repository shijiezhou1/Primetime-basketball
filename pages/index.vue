<script lang="ts" setup>
// composable
const { t } = useLang()

// meta
definePageMeta({
  layout: 'page',
})

// vars
const titlesText = computed<string[]>(() => t('pages.index.title').split('[]'))
const leadingsText = computed(() => [
  {
    text: titlesText.value[0],
    startColor: '#007CF0',
    endColor: '#00DFD8',
    delay: 0,
  },
  {
    text: titlesText.value[1],
    startColor: '#7928CA',
    endColor: '#FF0080',
    delay: 2,
  },
  {
    text: titlesText.value[2],
    startColor: '#FF4D4D',
    endColor: '#F9CB28',
    delay: 4,
  },
])
const tooltip = ref(false)

// const
const cancelTooltip = () => {
  tooltip.value = false
  const tt = document.querySelector('.tooltiptext')
  if (tt) tt.innerHTML = `Copy to clipboard`
}
const copyBash = () => {
  const bash = 'git clone https://github.com/viandwi24/nuxt3-awesome-starter'
  navigator.clipboard.writeText(bash)
  tooltip.value = true
  const tt = document.querySelector('.tooltiptext')
  if (tt) tt.innerHTML = `Copied!!!`
}

// const backgroundVideo: any = () => require('@/assets/images/background.mp4')
</script>

<template>
  <PageWrapper class="flex-1 flex pt-0">
    <div class="background-overlay">
      <!-- <div
        class="absolute top-0 left-0 transform translate-x-64 translate-y-4 h-14 w-14 rounded-full bg-gray-900 dark:bg-white"
      ></div> -->
      <!-- <div
        class="absolute hidden md:block top-0 left-0 transform translate-x-18 translate-y-20 h-28 w-28 rounded-full bg-blue-600 linear-wipe"
      ></div> -->
      <div
        class="absolute hidden md:block bottom-0 right-0 transform -translate-x-4 -translate-y-40 h-16 w-16 rounded bg-purple-600 linear-wipe"
      ></div>
      <!-- <div class="absolute bottom-0 right-0 triangle-shape"></div> -->
    </div>
    <PageBody class="flex-1">
      <div class="video-bg-cover">
        <video
          class="video-bg"
          autoplay
          loop
          muted
          poster="https://i.imgur.com/o20tswE.jpg"
        >
          <source src="@/assets/images/background.mp4" type="video/mp4" />
        </video>
        <div class="video-welcome">
          <span>
            {{ $t('others.welcome') }}
          </span>
        </div>
      </div>

      <PageSection class="flex-1 flex items-center">
        <div class="flex-1 md:w-2/3 flex flex-col z-10">
          <h1 class="text-center md:text-left md:ml-6 mt-4">
            <span
              v-for="(item, i) in leadingsText"
              :key="i"
              :style="`--content: '${item.text}'; --start-color: ${
                item.startColor
              }; --end-color: ${item.endColor}; --animation-name: anim-fg-${
                i + 1
              }`"
              class="animated-text-bg drop-shadow-xl text-3xl xl:text-3xl 2xl:text-4xl block"
            >
              <span class="">{{ item.text }}</span>
            </span>
          </h1>
        </div>
        <!-- <div class="hidden md:flex flex-1 justify-center items-end relative">
          <Gem class="absolute -top-64 -right-0" />
          <div class="PrimeTime BasketBall"></div>
        </div> -->
      </PageSection>

      <PageSection class="flex-1 flex items-center">
        <div class="flex-1 md:w-2/3 flex flex-col z-10">
          <h1 class="text-center md:text-left md:ml-6 md:mt-4">
            <span
              >Basketball is one of the fastest-growing sports in the world. We
              are experiencing first-hand the growth of the game at every level:
              youth and college. We maximise players potential with discipline,
              teamwork, leadership and other important life skills that will
              help them succeed both in school and beyond!</span
            >
          </h1>

          <h1
            class="text-center md:text-left ml-6 mt-4 flex text-3xl font-bold"
          >
            Who is Primus Chan?
          </h1>

          <h1 class="text-center md:text-left center-image md:ml-6 md:mt-4">
            <div class="lg:mx-8 my-4 image-left">
              <img class="shooting" src="@/assets/images/shooting.jpeg" />
            </div>
            <div class="lg:mx-8 my-4 flex flex-col image-right">
              <span>
                Primus chan launched By PrimeTime Basketball Academy in 2022,
                with a mission to do change the world with a basketball.
              </span>
              <br />
              <span>
                Primus's philosophy revolves around using combination of games
                and drills to optimize the training of youth and athletes.
                Skills training, and performance training are Primus's
                specialties, as well as game preparation positive self talk,
                Psychology aspects turn them into the complete basketball
                player.
              </span>
              <br />
              <span>
                Primus received his degree in sports management at the Northern
                State University and is located in Hong Kong.
              </span>
              <br />
              <span>
                We believe everyone has an own unique talent and we are here to
                maximise their potential through basketball training.
              </span>
            </div>
          </h1>

          <h1 class="text-center md:text-left center-image md:ml-6 md:mt-4">
            <div class="lg:mx-8 my-4 w-full sm:w-auto text-lg">
              <div><b>Contact:</b></div>
              <div>
                <a href="http://instagram.com/_u/primuschan/"
                  >Instagram: primuschan</a
                >
              </div>
              <div>WhatsApp: +8526115077</div>
              <div>
                <a href="http://www.facebook.com/primuschan"
                  >Facebook: primuschan</a
                >
              </div>
            </div>
          </h1>
        </div>
      </PageSection>
    </PageBody>
  </PageWrapper>
</template>

<style lang="scss">
@import '../assets/sass/variables';

@keyframes anim-fg-1 {
  0%,
  16.667%,
  100% {
    opacity: 1;
  }

  33.333%,
  83.333% {
    opacity: 0;
  }
}

@keyframes anim-fg-2 {
  0%,
  16.667%,
  66.667%,
  100% {
    opacity: 0;
  }

  33.333%,
  50% {
    opacity: 1;
  }
}

@keyframes anim-fg-3 {
  0%,
  50%,
  100% {
    opacity: 0;
  }

  66.667%,
  83.333% {
    opacity: 1;
  }
}

.center-image {
  display: flex;
  @media (max-width: 414px) {
    flex-direction: column;
  }
}

.image-left {
  width: 50%;
  @media (max-width: 414px) {
    width: 100%;
  }
}

.image-right {
  width: 50%;
  @media (max-width: 414px) {
    width: 100%;
  }
}

.video-bg-cover {
  height: 400px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-welcome {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  text-transform: uppercase;
  font-weight: bold;

  span {
    color: white;
  }
}

.video-bg {
  width: 100%;
  filter: blur(8px);
}

.shooting {
  width: 400px;
}

.animated-text-bg {
  position: relative;
  display: block;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  content: var(--content);
  display: block;
  width: 100%;
  color: theme('colors.slate.800');
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  padding-left: $padding;
  padding-right: $padding;
  &:before {
    content: var(--content);
    position: absolute;
    display: block;
    width: 100%;
    color: theme('colors.slate.800');
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    padding-left: $padding;
    padding-right: $padding;
  }
}
.animated-text-fg {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-left: $padding;
  padding-right: $padding;
  background-image: linear-gradient(
    90deg,
    var(--start-color),
    var(--end-color)
  );
  position: relative;
  opacity: 0;
  z-index: 1;
  animation: var(--animation-name) 8s infinite;
}

html.dark {
  .animated-text-bg {
    color: theme('colors.gray.100');
    &:before {
      color: theme('colors.gray.100');
    }
  }
}

.triangle-shape {
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 40px solid theme('colors.green.600');
  transform: translate(-15rem, -6rem) rotate(45deg);
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 140px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -75px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
