import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { flushPromises, mount, shallowMount } from "@vue/test-utils";
import TaskBoard from "@/components/TaskBoard.vue";
import TaskGroup from "@/components/TaskGroup.vue";

describe("TaskBoard.vue", () => {
  const mockedTasks = [
    {
      id: 1,
      title: "Mocked Task 1",
      description: "Description for Mocked Task 1",
      status: "open",
    },
    {
      id: 2,
      title: "Mocked Task 2",
      description: "Description for Mocked Task 2",
      status: "testing",
    },
    {
      id: 3,
      title: "Mocked Task 3",
      description: "Description for Mocked Task 3",
      status: "done",
    },
    {
      id: 4,
      title: "Mocked Task 4",
      description: "Description for Mocked Task 4",
      status: "unknown",
    },
  ];

  it("Fetches tasks from the backend correctly", async () => {
    const mockedAxios = new MockAdapter(axios);

    mockedAxios
      .onGet("http://localhost:5000/tasks")
      .reply(200, { tasks: mockedTasks });

    const wrapper = mount(TaskBoard);
    await flushPromises();

    expect(wrapper.text()).toContain("Mocked Task 1");
    expect(wrapper.text()).toContain("Mocked Task 2");
    expect(wrapper.text()).toContain("Mocked Task 3");

    mockedAxios.restore();
  });

  it("Renders task board with correct structure", () => {
    const wrapper = shallowMount(TaskBoard);

    const taskGroupComponents = wrapper.findAllComponents(TaskGroup);
    expect(taskGroupComponents).toHaveLength(3);
  });
});
