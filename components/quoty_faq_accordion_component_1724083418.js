/* Summary: Contains a section with:
1. Accordion title: An h2 element that displays the title of the FAQ section, styled for font size, weight, and margin.
2. Accordion container: A div element that holds multiple accordion items, styled with vertical spacing. Each item has a visible question. When the + icon on the right is clicked, it expands to show the answer for that question.
*/

Vue.component("quoty_faq_accordion_component_1724083418", {
    template: `
    <section class="py-8 bg-white pl-4">
        <h2 class="text-lg font-semibold mb-5">Brewing Up Answers: Coffee FAQs</h2>
        <!-- Accordion -->
        <div class="space-y-3">
            <!-- Accordion item -->
            <div v-for="(term, index) in terms" :key="index" class="text-sm rounded-lg odd:bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900" :class="[{ 'expanded': term.expanded }]">
                <h3>
                    <button type="button" class="flex items-center justify-between w-full text-left font-medium px-5 py-3" @click="toggle(index)" :aria-expanded="term.expanded" :aria-controls="'terms-text-' + index">
                    <button type="button" class="flex items-center justify-between w-full text-left font-medium px-5 py-3" @click="toggle(index)" :aria-expanded="term.expanded" :aria-controls="'terms-text-' + index">
                        <span>{{ term.title }}</span>
                        <svg class="shrink-0 ml-8 fill-slate-400 dark:fill-slate-500" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                            <rect y="5" width="12" height="2" rx="1" class="transform origin-center transition duration-200 ease-out" :class="{ '!rotate-180': term.expanded }" />
                            <rect y="5" width="12" height="2" rx="1" class="transform origin-center rotate-90 transition duration-200 ease-out" :class="{ '!rotate-180': term.expanded }" />
                        </svg>
                    </button>
                </h3>
                <div :id="'terms-text-' + index" role="region" :aria-labelledby="'terms-title-' + index" class="text-slate-500 dark:text-slate-400 grid overflow-hidden transition-all duration-300 ease-in-out" :class="[{ 'grid-rows-[1fr] opacity-100': term.expanded, 'grid-rows-[0fr] opacity-0': !term.expanded }]">
                    <div class="overflow-hidden" :id="'terms-text-' + index + '-content'">
                        <p class="px-5 pb-3" :id="'terms-text-' + index + '-description'">
                            {{ term.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `,
    data() {
        return {
            terms: [
                { title: "What's the difference between Arabica and Robusta coffee?", description: "Arabica beans are known for their smooth, complex flavor with hints of sugar, fruit, and berries. Robusta beans have a stronger, harsher taste with a grainy overtone and peanutty aftertaste. Arabica is generally considered higher quality, while Robusta has more caffeine.", expanded: false },
                { title: "How should I store coffee to keep it fresh?", description: "Store coffee in an airtight container in a cool, dark place. Avoid refrigerating or freezing as this can introduce moisture and affect flavor. For best results, buy whole beans and grind only what you need for each brew.", expanded: false },
                { title: "What's the best brewing method for a rich flavor?", description: "While personal preference plays a role, many coffee enthusiasts prefer the French press or pour-over methods for a rich, full-bodied flavor. These methods allow for better control over brewing time and water temperature, resulting in a more flavorful cup.", expanded: false },
                { title: "How does the roast level affect coffee taste?", description: "Roast levels greatly impact flavor. Light roasts retain more of the bean's original flavor and have higher acidity. Medium roasts offer a balanced flavor, aroma, and acidity. Dark roasts have a bolder, more intense flavor with less acidity and often a slight bitterness.", expanded: false },
            ],
        };
    },
    methods: {
        toggle(index) {
            this.terms[index].expanded = !this.terms[index].expanded;
        },
    },
});
