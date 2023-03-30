import { Component } from "@angular/core";

@Component({
    selector: "app-view-equipment",
    templateUrl: "./view-equipment.component.html",
    styleUrls: ["./view-equipment.component.scss"]
})
export class ViewEquipmentComponent {
    status: "close" | "open" = "open";

    toggle() {
        this.status = this.status === "close" ? "open" : "close";
    }
}
