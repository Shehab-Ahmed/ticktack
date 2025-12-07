<template>
    <main class="tasksPage">
        <h1 class="text-center text-white  mb-4 ">{{ $t('tasks.titlePage') }}</h1>
        <div class="container">
            <div class="row">
                <div class="col-md-8 m-auto">
                    <!-- Add new Task -->
                    <NewTask />

                    <!-- List of uncompleted tasks -->
                    <Tasks :tasks="uncompletedTasks" />

                    <!-- show toggle button -->
                    <div
                        class="text-center my-3"
                        v-show="showToggleCompletedBtn"
                    >
                        <button
                            class="btn btn-sm btn-secondary btn-hide"
                            @click="showCompletedTasks = !showCompletedTasks"
                        >
                            <span v-if="!showCompletedTasks"
                                >{{ $t('tasks.showCom') }}</span
                            >
                            <span v-else>{{ $t('tasks.hideCom') }}</span>
                        </button>
                    </div>

                    <!-- list of completed tasks -->
                    <Tasks
                        :tasks="completedTasks"
                        :show="completedTasksIsVisible && showCompletedTasks"
                    />
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useTaskStore } from "../stores/task";
import Tasks from "../components/tasks/Tasks.vue";
import NewTask from "../components/tasks/NewTask.vue";

const store = useTaskStore();
const { completedTasks, uncompletedTasks } = storeToRefs(store);
const { fetchAllTasks } = store;

onMounted(async () => {
    await fetchAllTasks();
});

const showToggleCompletedBtn = computed(
    () => uncompletedTasks.value.length > 0 && completedTasks.value.length > 0,
);
const completedTasksIsVisible = computed(
    () =>
        uncompletedTasks.value.length === 0 || completedTasks.value.length > 0,
);
const showCompletedTasks = ref(false || completedTasksIsVisible.value);
</script>