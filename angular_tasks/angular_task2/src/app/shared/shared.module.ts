import { NgModule } from '@angular/core';
import { UserFullNamePipe } from './pipes/first-last-name.pipe';
import { ActiveDeletedDescPipe } from './pipes/active-deleted.pipe';

@NgModule({
  declarations: [UserFullNamePipe,ActiveDeletedDescPipe],
  exports:[UserFullNamePipe,ActiveDeletedDescPipe]
})
export class ShareModule {}
