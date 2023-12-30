import { shallowMount } from "@vue/test-utils";
import TaskGroup from "@/components/TaskGroup.vue";

describe("TaskGroup.vue", () => {
  const tasks = [
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
      status: "open",
    },
  ];

  it("Renders task group with correct title", () => {
    const wrapper = shallowMount(TaskGroup, {
      props: {
        status: "open",
        tasks,
      },
    });

    expect(wrapper.find(".card-header").text()).toBe("Open Tasks");
  });

  it("Renders task cards in the group", () => {
    const wrapper = shallowMount(TaskGroup, {
      props: {
        status: "open",
        tasks,
      },
    });

    expect(wrapper.findAllComponents({ name: "TaskCard" })).toHaveLength(
      tasks.length
    );
  });
});
