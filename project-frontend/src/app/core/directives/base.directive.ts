import { Directive, OnDestroy } from '@angular/core';
import { MonoTypeOperatorFunction, Subject, takeUntil } from 'rxjs';

@Directive()
export abstract class Base implements OnDestroy {
  private _destroy$?: Subject<void>;

  constructor() {}

  protected takeUntilDestroy = <T>(): MonoTypeOperatorFunction<T> => {
    if (!this._destroy$) {
      this._destroy$ = new Subject<void>();
    }
    return takeUntil<T>(this._destroy$);
  };

  ngOnDestroy(): void {
    if (this._destroy$) {
      this._destroy$.next();
      this._destroy$.complete();
    }
  }
}
