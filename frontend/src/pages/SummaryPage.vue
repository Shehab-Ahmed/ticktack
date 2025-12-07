<template>
    <main class="summary">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div
                    >
                        <h1 class="text-center text-white mb-4">
                            {{ $t('summary.titlePage') }}
                            <small class="text-muted fs-4">{{
                                selectedFilter.text
                            }}</small>
                        </h1>
                        <SummaryFilter @update="setSelectedFilter" />
                    </div>
                    <div
                        v-for="(tasks, description) in summaries"
                        :key="description"
                    >
                        <Summaries :tasks="tasks" :description="description" />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { useSummaryStore } from "../stores/summary";
import { onMounted, reactive, watch } from "vue";
import { storeToRefs } from "pinia";
import Summaries from "../components/summaries/Summaries.vue";
import SummaryFilter from "../components/summaries/filter/SummaryFilter.vue";

const store = useSummaryStore();
const { summaries } = storeToRefs(store);
const { fetchTasksSummary } = store;
const selectedFilter = reactive({
    period: "",
    text: "",
});

const setSelectedFilter = (event) => Object.assign(selectedFilter, event);

onMounted(async () => {
    await fetchTasksSummary();
});

watch(
    () => selectedFilter.period,
    async (period) => await fetchTasksSummary({ period }),
);
</script>
