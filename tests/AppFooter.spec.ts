import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import AppFooter from "@/components/AppFooter.vue";

describe("AppFooter", () => {
	it("is a Vue instance", () => {
		const wrapper = mount(AppFooter);
		expect(wrapper.vm).toBeTruthy();
	});
});
