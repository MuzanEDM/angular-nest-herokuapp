import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'angular-nest-herokuapp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  public getFullYear = new Date().getFullYear();
}
