import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCardMask]',
  standalone: true
})
export class CardMaskDirective {
  private regex = new RegExp(/[^0-9]/g); // Regex to remove non-numeric characters
  private separator = ' '; // Separator for card number formatting

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    const cleaned = value.replace(this.regex, '');
    const formatted = cleaned.replace(/(.{4})/g, '$1' + this.separator).trim();

    // Only update the value if it's different from the current value
    if (value !== formatted) {
        // Temporarily remove event listener to prevent recursive calls
        const listener = this.renderer.listen(this.el.nativeElement, 'input', () => {});
  
        // Update the input value
        this.renderer.setProperty(this.el.nativeElement, 'value', formatted);
  
        // Reattach the event listener
        listener();
      }
  }
}
