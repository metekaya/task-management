import { shallowMount } from "@vue/test-utils";
import TaskCard from "@/components/TaskCard.vue";

describe("TaskCard.vue", () => {
  it('Renders task details with correct Bootstrap class for "open" status', () => {
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
    expect(wrapper.find(".badge").classes()).toContain(
      "badge",
      "badge-pill",
      "bg-primary"
    );
  });

  it('Renders task details with correct Bootstrap class for "testing" status', () => {
    const task = {
      id: 2,
      title: "Task 2",
      description: "Description for Task 2",
      status: "testing",
    };

    const wrapper = shallowMount(TaskCard, {
      props: { task },
    });

    expect(wrapper.find("h5").text()).toBe("Task 2");
    expect(wrapper.find("p").text()).toBe("Description for Task 2");
    expect(wrapper.find(".badge").text()).toBe("testing");
    expect(wrapper.find(".badge").classes()).toContain(
      "badge",
      "badge-pill",
      "bg-warning"
    );
  });

  it('Renders task details with correct Bootstrap class for "done" status', () => {
    const task = {
      id: 3,
      title: "Task 3",
      description: "Description for Task 3",
      status: "done",
    };

    const wrapper = shallowMount(TaskCard, {
      props: { task },
    });

    expect(wrapper.find("h5").text()).toBe("Task 3");
    expect(wrapper.find("p").text()).toBe("Description for Task 3");
    expect(wrapper.find(".badge").text()).toBe("done");
    expect(wrapper.find(".badge").classes()).toContain(
      "badge",
      "badge-pill",
      "bg-success"
    );
  });

  it("Renders task details with correct Bootstrap class for unknown status", () => {
    const task = {
      id: 4,
      title: "Task 4",
      description: "Description for Task 4",
      status: "unknown",
    };

    const wrapper = shallowMount(TaskCard, {
      props: { task },
    });

    expect(wrapper.find("h5").text()).toBe("Task 4");
    expect(wrapper.find("p").text()).toBe("Description for Task 4");
    expect(wrapper.find(".badge").classes()).toContain("badge", "badge-pill");
  });

  it("Sets the isDeleteLoading state to true when delete button is clicked", async () => {
    const task = {
      id: 1,
      title: "Task 1",
      description: "Description for Task 1",
      status: "open",
    };

    const wrapper = shallowMount(TaskCard, {
      props: { task },
    });

    expect(wrapper.vm.isDeleteLoading).toBe(false);
    await wrapper.find(".btn-danger").trigger("click");

    await wrapper.vm.$nextTick();
    expect(wrapper.vm.isDeleteLoading).toBe(true);
  });

  it("Sets the isMoveLoading state to true when moveToNextStatus button is clicked", async () => {
    const task = {
      id: 1,
      title: "Task 1",
      description: "Description for Task 1",
      status: "open",
    };

    const wrapper = shallowMount(TaskCard, {
      props: { task },
    });

    expect(wrapper.vm.isMoveLoading).toBe(false);
    await wrapper.find(".btn-secondary").trigger("click");

    await wrapper.vm.$nextTick();
    expect(wrapper.vm.isMoveLoading).toBe(true);
  });

  it("Gets the correct text when getButtonText function is called for 'open' status", () => {
    const task = {
      id: 1,
      title: "Task 1",
      description: "Description for Task 1",
      status: "open",
    };
    const wrapper = shallowMount(TaskCard, {
      propsData: { task },
    });

    const buttonText = wrapper.vm.getButtonText();
    expect(buttonText).toBe("Move to Testing");
  });

  it("Gets the correct text when getButtonText function is called for 'testing' status", () => {
    const task = {
      id: 1,
      title: "Task 1",
      description: "Description for Task 1",
      status: "testing",
    };
    const wrapper = shallowMount(TaskCard, {
      propsData: { task },
    });

    const buttonText = wrapper.vm.getButtonText();
    expect(buttonText).toBe("Move to Done");
  });
});
