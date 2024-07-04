import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
	selector: "stats-preview",
	standalone: true,
	imports: [NgOptimizedImage],
	templateUrl: "./stats-preview.html",
	styleUrl: "./stats-preview.less"
})
export class StatsPreview {}
