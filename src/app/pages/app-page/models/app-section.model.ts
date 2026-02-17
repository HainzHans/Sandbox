import {AppHeaderContent} from './app-header-content.model';
import {Type} from '@angular/core';

export interface AppSection {
  id: number;
  name: string;
  icon: string;
  isActive: boolean;
  introContent: AppHeaderContent
  component: Type<any>
}
