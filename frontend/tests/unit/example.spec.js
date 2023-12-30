import { mount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("Renders title: Task Management App", () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toMatch("Task Management App");
  });
});
