<template>
    <div class="relative">
        <input
            type="text"
            class="form-control form-control-lg padding-right-lg input-add-task"
            :placeholder="[isRtl ? 'Add New Task' : 'إضافة مهمة جديدة']"
            @keydown.enter="addNewTask"
        />
    </div>
</template>
<script setup>
import { reactive } from "vue";
import { useTaskStore } from "../../stores/task";

const store = useTaskStore();
const { handleAddedTask } = store;

const newTask = reactive({
    name: "",
    is_completed: false,
});

const addNewTask = async (event) => {
    if (event.target.value.trim()) {
        newTask.name = event.target.value;
        event.target.value = "";
        await handleAddedTask(newTask);
    }
};
</script>
