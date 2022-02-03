import {EffectsModule} from "@ngrx/effects";
import {MovieEffects} from "./services";
import {NgModule} from "@angular/core";

@NgModule({
  imports: [
    EffectsModule.forFeature([MovieEffects])
  ],
})
export class MovieModule {}
