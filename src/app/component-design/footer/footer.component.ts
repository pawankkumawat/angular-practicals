import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from '@angular/core';
import { FOOTER_TOKEN, IFooter } from '../token';
import { CommonModule } from '@angular/common';
import { AllMaterialModule } from 'src/app/angular-material/all-material-module';

@Component({
  selector: 'app-footer',
  imports: [CommonModule,AllMaterialModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  comp:IFooter = inject(FOOTER_TOKEN);
  // @Output() onSave = new EventEmitter<string>();
  // @Output() onDiscard = new EventEmitter<string>()
  // @Output() onRefresh = new EventEmitter<string>();
  save() {
    // this.onSave.emit('save');
    this.comp.save();
  }
  discard() {
    // this.onDiscard.emit('discard');
    this.comp.discard();
  }
  refresh() {
    // this.onRefresh.emit('refresh');
    this.comp.refresh();
  }

}
