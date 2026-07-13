import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-when-use-higher-order-opeartors',
  templateUrl: './when-use-higher-order-opeartors.component.html',
  styleUrls: ['./when-use-higher-order-opeartors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class WhenUseHigherOrderOpeartorsComponent {


  // constructor(private service: DataService) {}

  // data$!: Observable<User>;

  // ngOnInit(): void {
  //   this.data$ = this.service.getUser();
  // }
  private readonly service = inject(DataService);

  user = rxResource({
    stream: () => this.service.getUser(),
  });
}
