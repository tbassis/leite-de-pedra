import { describe, test, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";

import AppFooter from "@/components/AppFooter.vue";

describe("AppFooter", () => {
	vi.stubGlobal("ref", () => {
		return [
			{
				link: "https://wa.me/5581992989619",
				icon: "ic:baseline-whatsapp",
				label: "whatsapp",
			},
			{
				link: "https://www.instagram.com/leitedepedra.cult",
				icon: "mdi:instagram",
				label: "instagram",
			},
			{
				link: "https://www.youtube.com/@leitedepedra_cult",
				icon: "mdi:youtube",
				label: "youtube",
			},
			{
				link: "https://www.x.com/leitedepedrape",
				icon: "pajamas:twitter",
				label: "x",
			},
			{
				link: "https://www.facebook.com/leitedepedra.cult",
				icon: "mdi:facebook",
				label: "facebook",
			},
			{
				link: "https://www.tiktok.com/@leitedepedrape",
				icon: "ic:baseline-tiktok",
				label: "tiktok",
			},
			{
				link: "https://www.threads.net/@leitedepedra.cult",
				icon: "fa6-brands:threads",
				label: "threads",
			},
		];
	});

	test("is a Vue instance", () => {
		const wrapper = mount(AppFooter);
		expect(wrapper.vm).toBeTruthy();
	});
});
