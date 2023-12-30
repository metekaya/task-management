import { shallowMount } from "@vue/test-utils";
import TaskBoard from "@/components/TaskBoard.vue";
import TaskGroup from "@/components/TaskGroup.vue";

describe("TaskBoard.vue", () => {
  it("Renders task board with correct structure", () => {
    const wrapper = shallowMount(TaskBoard, {
      props: {
        tasks: [
          {
            id: 1,
            title: "Task 1",
            description: "Description for Task 1",
            status: "open",
          },
          {
            id: 2,
            title: "Task 2",
            description: "Description for Task 2",
            status: "testing",
          },
          {
            id: 3,
            title: "Task 3",
            description: "Description for Task 3",
            status: "done",
          },
          {
            id: 4,
            title: "Task 4",
            description: "Description for Task 4",
            status: "unknown",
          },
        ],
      },
    });

    const taskGroupComponents = wrapper.findAllComponents(TaskGroup);
    expect(taskGroupComponents).toHaveLength(3);
  });
});
