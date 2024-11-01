/* Summary: Contains a section with a fixed left-side dark blue component container with a blur effect.
It contains three left aligned pieces of text:
- Blue text appearing above the hero title
- The white hero title as a heading
- The grey hero sub text below it
*/
Vue.component("fixed_left_side_hero_component_1724083418", {
    template: `
    <section id="left-side-hero-component" class="min-h-[270px]">
        <div id="left-content" class="relative w-full lg:w-1/2 lg:fixed lg:inset-0 lg:overflow-y-auto no-scrollbar lg:rounded-r-3xl bg-gradient-to-br from-purple-900 via-pink-800 to-black bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-lg">
            <!-- Background Illustration -->
            <div id="bg-illustration" class="absolute top-0 -translate-y-64 left-1/2 -translate-x-1/2 blur-3xl pointer-events-none" aria-hidden="true">
                <img class="max-w-none opacity-50" src="./images/bg-illustration.svg" width="785" height="685" alt="Bg illustration">
            </div>
            <div class="min-h-full w-full max-w-xl mx-auto flex px-6 pt-36 pb-20 lg:py-20">
                <div class="min-h-full w-full max-w-xl mx-auto flex flex-col justify-start px-6 pt-36 pb-20 lg:py-20 flex-1" id="quote-header">
                    <div class="grow flex flex-col justify-center" id="quote-content">
                        <div class="space-y-4" id="quote-container">
                            <div id="quote-title" class="font-caveat text-3xl text-pink-300">Discover the Cosmic Brew</div>
                            <h1 id="company-name" class="h1 font-orbiter font-bold text-5xl text-white text-opacity-90 leading-tight">Stellar Coffee Experience!</h1>
                            <time id="quote-date" class="block font-caveat text-2xl text-purple-200">From Nebula to Cup: Embark on an Interstellar Journey</time>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `,
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
