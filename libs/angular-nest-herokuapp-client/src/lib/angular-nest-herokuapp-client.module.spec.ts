import { async, TestBed } from '@angular/core/testing';
import { AngularNestHerokuappClientModule } from './angular-nest-herokuapp-client.module';

describe('AngularNestHerokuappClientModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularNestHerokuappClientModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AngularNestHerokuappClientModule).toBeDefined();
  });
});
