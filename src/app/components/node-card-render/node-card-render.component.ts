import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { LucideAngularModule, Zap } from 'lucide-angular';
import { CommonModule } from '@angular/common';
import { FlowEditorComponentComponent } from '../flow-editor-component/flow-editor-component.component';

@Component({
  selector: 'app-node-card-render',
  standalone: true,
  imports: [CommonModule, CardComponent, LucideAngularModule, FlowEditorComponentComponent],
  templateUrl: './node-card-render.component.html',
  styleUrls: ['./node-card-render.component.css']
})
export class NodeCardRenderComponent {
  cardContent = [
    { title: "IT Ops can", description: "On-board new employees", imageUrl: "./assets/images/iot.webp" },
    { title: "Sec Ops can", description: "Enrich security incident tickets", imageUrl: "./assets/images/secdevops.webp" },
    { title: "Dev Ops can", description: "Convert natural language into API calls", imageUrl: "./assets/images/devops.webp" },
    { title: "Sales can", description: "Generate customer insights from reviews", imageUrl: "./assets/images/sales.webp" },
    { title: "Demo", description: "Move by yourself and explore", imageUrl: "" },
  ];

  zapIcon = Zap; 
  trackByFn(index: number, item: any) { return item.title ?? index; }


  // selected image to render when a card is clicked
  selectedImage: string | null = this.cardContent[0].imageUrl;

  demoTitleRender : string = "Demo"

  // in your component
isPreviewOpen = false;
selectedCard: any | null = null;

onCardClick(card: any) {
  this.selectedCard = this.selectedCard === card ? null : card;
  this.selectedImage = this.selectedCard?.imageUrl ?? null;

  // open modal only when there's an image (optional)
  if (this.selectedImage) this.isPreviewOpen = true;
}

closePreview() {
  this.isPreviewOpen = false;
}

}
