import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { FlowEditorComponentComponent } from "./components/flow-editor-component/flow-editor-component.component";
import { NodeCardRenderComponent } from "./components/node-card-render/node-card-render.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, FlowEditorComponentComponent, NodeCardRenderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'n8n';
}
