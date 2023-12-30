import { shallowMount } from "@vue/test-utils";
import TaskCard from "@/components/TaskCard.vue";

describe("TaskCard.vue", () => {
  it("renders task details correctly", () => {
    const task = {
      id: 1,
      title: "Task 1",
      description: "Description for Task 1",
      status: "open",
    };

    const wrapper = shallowMount(TaskCard, {
      props: { task },
    });

    expect(wrapper.find("h5").text()).toBe("Task 1");
    expect(wrapper.find("p").text()).toBe("Description for Task 1");
    expect(wrapper.find(".badge").text()).toBe("open");
  });
});
