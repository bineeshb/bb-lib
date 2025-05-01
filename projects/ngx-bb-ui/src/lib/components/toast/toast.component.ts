import { Component, computed, input, model, output, OnInit } from '@angular/core';
import { asyncScheduler, Subscription } from 'rxjs';

@Component({
  selector: 'bb-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  message = model<string | null>(null);
  type = input<'success' | 'error'>('success');
  life = input(5000);
  isError = computed(() => this.type() === 'error');
  closed = output();

  private sub$: Subscription | null = null;

  ngOnInit(): void {
    if (!this.isError()) {
      this.sub$ = asyncScheduler.schedule(this.close.bind(this), this.life());
    }
  }

  close(): void {
    this.closeSub$();
    this.message.set(null);
    this.closed.emit();
  }

  private closeSub$(): void {
    if (this.sub$ && !this.sub$.closed) {
      this.sub$.unsubscribe();
    }

    this.sub$ = null;
  }

  ngOnDestroy(): void {
    this.closeSub$();
  }
}
