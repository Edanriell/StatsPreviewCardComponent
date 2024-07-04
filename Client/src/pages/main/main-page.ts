import { Component } from "@angular/core";

import { StatsPreview } from "@widgets/stats-preview";

@Component({
	selector: "main-page",
	standalone: true,
	imports: [StatsPreview],
	templateUrl: "./main-page.html"
})
export class MainPage {}
