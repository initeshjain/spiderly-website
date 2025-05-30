import { NgModule } from '@angular/core';
import { SpiderlyMultiAutocompleteComponent } from './spiderly-multiautocomplete/spiderly-multiautocomplete.component';
import { SpiderlyPasswordComponent } from './spiderly-password/spiderly-password.component';
import { SpiderlyTextboxComponent } from './spiderly-textbox/spiderly-textbox.component';
import { SpiderlyCheckboxComponent } from './spiderly-checkbox/spiderly-checkbox.component';
import { SpiderlyMultiSelectComponent } from './spiderly-multiselect/spiderly-multiselect.component';
import { SpiderlyTextareaComponent } from './spiderly-textarea/spiderly-textarea.component';
import { SpiderlyNumberComponent } from './spiderly-number/spiderly-number.component';
import { SpiderlyDropdownComponent } from './spiderly-dropdown/spiderly-dropdown.component';
import { SpiderlyEditorComponent } from './spiderly-editor/spiderly-editor.component';
import { SpiderlyColorpickComponent } from './spiderly-colorpick/spiderly-colorpick.component';
import { SpiderlyFileComponent } from './spiderly-file/spiderly-file.component';
import { SpiderlyCalendarComponent } from './spiderly-calendar/spiderly-calendar.component';
import { SpiderlyAutocompleteComponent } from './spiderly-autocomplete/spiderly-autocomplete.component';

@NgModule({
  imports: [
    SpiderlyTextboxComponent,
    SpiderlyTextareaComponent,
    SpiderlyCheckboxComponent,
    SpiderlyCalendarComponent,
    SpiderlyPasswordComponent,
    SpiderlyAutocompleteComponent,
    SpiderlyMultiAutocompleteComponent,
    SpiderlyMultiSelectComponent,
    SpiderlyNumberComponent,
    SpiderlyDropdownComponent,
    SpiderlyEditorComponent,
    SpiderlyColorpickComponent,
    SpiderlyFileComponent,
  ],
  exports: [
    SpiderlyTextboxComponent,
    SpiderlyTextareaComponent,
    SpiderlyCheckboxComponent,
    SpiderlyCalendarComponent,
    SpiderlyPasswordComponent,
    SpiderlyAutocompleteComponent,
    SpiderlyMultiAutocompleteComponent,
    SpiderlyMultiSelectComponent,
    SpiderlyNumberComponent,
    SpiderlyDropdownComponent,
    SpiderlyEditorComponent,
    SpiderlyColorpickComponent,
    SpiderlyFileComponent
  ],
  declarations: [
  ],
  providers: [
  ]
})
export class SpiderlyControlsModule {}