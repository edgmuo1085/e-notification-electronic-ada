import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreContainerComponent } from './explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ExploreContainerComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [ExploreContainerComponent],
})
export class SharedComponentsModule {}
