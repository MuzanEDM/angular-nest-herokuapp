import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'angular-nest-herokuapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public openedVerticalMenu = false;
  public openedHorizontalUserPopout = false;
  public userImage = true;

  @ViewChild('horizontalUserPopout')
  public horizontalUserPopout: ElementRef<HTMLDivElement>;

  @HostListener('keyup.escape')
  public onEscapeKeyUp() {
    this.openedVerticalMenu = false;
    this.openedHorizontalUserPopout = false;
  }

  @HostListener('click', ['$event'])
  public handleAutomaticUserPopoutClose($event) {
    const { horizontalUserPopout, openedHorizontalUserPopout } = this;
    const $target = $event?.target;
    const $horizontalUserPopout = horizontalUserPopout?.nativeElement;
    // If there's no good input or we're
    // not even open, short-circuit.
    if (!$target || !$horizontalUserPopout || !openedHorizontalUserPopout) {
      return;
    }
    // Otherwise close the popout if the
    // click is outside our container.
    if (!$horizontalUserPopout.contains($target)) {
      this.openedHorizontalUserPopout = false;
    }
  }

  public toggleHorizontalUserPopout(): void {
    this.openedHorizontalUserPopout = !this.openedHorizontalUserPopout;
  }

  public toggleVerticalMenu(): void {
    this.openedVerticalMenu = !this.openedVerticalMenu;
  }

  public handleNavMenuClick(): void {
    this.openedHorizontalUserPopout = false;
    this.openedVerticalMenu = false;
  }
}
