import { Injectable, NgModule, Component, Input, Output, EventEmitter, defineInjectable } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class UrlService {
    constructor() { }
}
UrlService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
UrlService.ctorParameters = () => [];
/** @nocollapse */ UrlService.ngInjectableDef = defineInjectable({ factory: function UrlService_Factory() { return new UrlService(); }, token: UrlService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class UrlComponent {
    constructor() {
        this.urlErrorName = "The url entered is not valid and must be changed";
        this.disabled = false;
        this.tabindex = 1;
        this.id = "facebookUrl";
        this.name = "facebookUrl";
        this.placeholder = "Enter Url";
        this.regex = /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/;
        this.change = new EventEmitter();
        this.focus = new EventEmitter();
        this.blur = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFocus(event) {
        this.focus.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBlur(event) {
        this.blur.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        this.change.emit(event);
    }
    /**
     * @param {?} type
     * @param {?} regex
     * @return {?}
     */
    onValidateUrl(type, regex) {
        debugger;
        /** @type {?} */
        let urlRegex;
        switch (type) {
            case "facebook":
                urlRegex = /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/;
                break;
            case "instagram":
                urlRegex = /(?:(?:http|https):\/\/)?(?:www\.)?instagram.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
                break;
            case "linkedin":
                urlRegex = /(?:(?:http|https):\/\/)?(?:www\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
                break;
            case "web":
                urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
                break;
            case "other":
                urlRegex = regex;
                break;
            default:
                urlRegex = regex;
                break;
        }
        return urlRegex;
    }
}
UrlComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-url',
                template: `<input
      type="url"
      [ngClass]="{
        'form-control': true
      }"
      [(placeholder)]="placeholder"
      [(ngModel)]="value"
      [(name)]="name"
      [(id)]="id"
      #url="ngModel"
      [(disabled)]="disabled"
      [(tabindex)]="tabindex"
      (focus)="onFocus($event)"
      (blur)="onBlur($event)"
      (input)="onChange($event)"
      [pattern]="onValidateUrl(urltype, regex)"
      autofocus
      required
    />

    <div
      class="md-errors-spacer"
      *ngIf="url.invalid && url.touched"
    >
      <div *ngIf="url.errors && url.errors.pattern">
        <p class="error-text">{{ urlErrorName }}</p>
      </div>
    </div>`,
                styles: [`.form-control{width:50%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;box-sizing:border-box}.error-text{color:red}`]
            },] },
];
UrlComponent.propDecorators = {
    urlErrorName: [{ type: Input }],
    urltype: [{ type: Input }],
    disabled: [{ type: Input }],
    value: [{ type: Input }],
    tabindex: [{ type: Input }],
    id: [{ type: Input }],
    name: [{ type: Input }],
    placeholder: [{ type: Input }],
    regex: [{ type: Input }],
    change: [{ type: Output }],
    focus: [{ type: Output }],
    blur: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class UrlModule {
}
UrlModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    FormsModule,
                    ReactiveFormsModule,
                    CommonModule
                ],
                declarations: [UrlComponent],
                exports: [UrlComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { UrlService, UrlComponent, UrlModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci13ZWJsaW5laW5kaWEtdXJsLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9hbmd1bGFyLXdlYmxpbmVpbmRpYS11cmwvbGliL3VybC5zZXJ2aWNlLnRzIiwibmc6Ly9hbmd1bGFyLXdlYmxpbmVpbmRpYS11cmwvbGliL3VybC5jb21wb25lbnQudHMiLCJuZzovL2FuZ3VsYXItd2VibGluZWluZGlhLXVybC9saWIvdXJsLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFVybFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi11cmwnLFxuICB0ZW1wbGF0ZTogYDxpbnB1dFxuICAgICAgdHlwZT1cInVybFwiXG4gICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICdmb3JtLWNvbnRyb2wnOiB0cnVlXG4gICAgICB9XCJcbiAgICAgIFsocGxhY2Vob2xkZXIpXT1cInBsYWNlaG9sZGVyXCJcbiAgICAgIFsobmdNb2RlbCldPVwidmFsdWVcIlxuICAgICAgWyhuYW1lKV09XCJuYW1lXCJcbiAgICAgIFsoaWQpXT1cImlkXCJcbiAgICAgICN1cmw9XCJuZ01vZGVsXCJcbiAgICAgIFsoZGlzYWJsZWQpXT1cImRpc2FibGVkXCJcbiAgICAgIFsodGFiaW5kZXgpXT1cInRhYmluZGV4XCJcbiAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxuICAgICAgKGJsdXIpPVwib25CbHVyKCRldmVudClcIlxuICAgICAgKGlucHV0KT1cIm9uQ2hhbmdlKCRldmVudClcIlxuICAgICAgW3BhdHRlcm5dPVwib25WYWxpZGF0ZVVybCh1cmx0eXBlLCByZWdleClcIlxuICAgICAgYXV0b2ZvY3VzXG4gICAgICByZXF1aXJlZFxuICAgIC8+XG5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cIm1kLWVycm9ycy1zcGFjZXJcIlxuICAgICAgKm5nSWY9XCJ1cmwuaW52YWxpZCAmJiB1cmwudG91Y2hlZFwiXG4gICAgPlxuICAgICAgPGRpdiAqbmdJZj1cInVybC5lcnJvcnMgJiYgdXJsLmVycm9ycy5wYXR0ZXJuXCI+XG4gICAgICAgIDxwIGNsYXNzPVwiZXJyb3ItdGV4dFwiPnt7IHVybEVycm9yTmFtZSB9fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmAsXG4gIHN0eWxlczogW2AuZm9ybS1jb250cm9se3dpZHRoOjUwJTtwYWRkaW5nOjEycHggMjBweDttYXJnaW46OHB4IDA7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO2JveC1zaXppbmc6Ym9yZGVyLWJveH0uZXJyb3ItdGV4dHtjb2xvcjpyZWR9YF1cbn0pXG5leHBvcnQgY2xhc3MgVXJsQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSB1cmxFcnJvck5hbWU6IHN0cmluZyA9XG4gIFwiVGhlIHVybCBlbnRlcmVkIGlzIG5vdCB2YWxpZCBhbmQgbXVzdCBiZSBjaGFuZ2VkXCI7XG5ASW5wdXQoKSB1cmx0eXBlOiBTdHJpbmc7XG5ASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuQElucHV0KCkgdmFsdWU6IFN0cmluZztcbkBJbnB1dCgpIHRhYmluZGV4OiBOdW1iZXIgPSAxO1xuQElucHV0KCkgaWQ6IFN0cmluZyA9IFwiZmFjZWJvb2tVcmxcIjtcbkBJbnB1dCgpIG5hbWU6IFN0cmluZyA9IFwiZmFjZWJvb2tVcmxcIjtcbkBJbnB1dCgpIHBsYWNlaG9sZGVyOiBTdHJpbmcgPSBcIkVudGVyIFVybFwiO1xuQElucHV0KClcbnJlZ2V4OiBSZWdFeHAgPSAvKD86KD86aHR0cHxodHRwcyk6XFwvXFwvKT8oPzp3d3cuKT9mYWNlYm9vay5jb21cXC8oPzooPzpcXHcpKiMhXFwvKT8oPzpwYWdlc1xcLyk/KD86Wz9cXHdcXC1dKlxcLyk/KD86cHJvZmlsZS5waHBcXD9pZD0oPz1cXGQuKikpPyhbXFx3XFwtXSopPy87XG5cbkBPdXRwdXQoKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5AT3V0cHV0KCkgZm9jdXM6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbkBPdXRwdXQoKSBibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG5vbkZvY3VzKGV2ZW50KSB7XG4gIHRoaXMuZm9jdXMuZW1pdChldmVudCk7XG59XG5vbkJsdXIoZXZlbnQpIHtcbiAgdGhpcy5ibHVyLmVtaXQoZXZlbnQpO1xufVxub25DaGFuZ2UoZXZlbnQpIHtcbiAgdGhpcy5jaGFuZ2UuZW1pdChldmVudCk7XG59XG5cbm9uVmFsaWRhdGVVcmwodHlwZSwgcmVnZXgpIHtcbiAgZGVidWdnZXI7XG4gIGxldCB1cmxSZWdleDtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBcImZhY2Vib29rXCI6XG4gICAgICB1cmxSZWdleCA9IC8oPzooPzpodHRwfGh0dHBzKTpcXC9cXC8pPyg/Ond3dy4pP2ZhY2Vib29rLmNvbVxcLyg/Oig/OlxcdykqIyFcXC8pPyg/OnBhZ2VzXFwvKT8oPzpbP1xcd1xcLV0qXFwvKT8oPzpwcm9maWxlLnBocFxcP2lkPSg/PVxcZC4qKSk/KFtcXHdcXC1dKik/LztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJpbnN0YWdyYW1cIjpcbiAgICAgIHVybFJlZ2V4ID0gLyg/Oig/Omh0dHB8aHR0cHMpOlxcL1xcLyk/KD86d3d3XFwuKT9pbnN0YWdyYW0uY29tKFxcdys6ezAsMX1cXHcqQCk/KFxcUyspKDooWzAtOV0pKyk/KFxcL3xcXC8oW1xcdyMhOi4/Kz0mJUAhXFwtXFwvXSkpPy87XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibGlua2VkaW5cIjpcbiAgICAgIHVybFJlZ2V4ID0gLyg/Oig/Omh0dHB8aHR0cHMpOlxcL1xcLyk/KD86d3d3XFwuKT9saW5rZWRpbi5jb20oXFx3Kzp7MCwxfVxcdypAKT8oXFxTKykoOihbMC05XSkrKT8oXFwvfFxcLyhbXFx3IyE6Lj8rPSYlQCFcXC1cXC9dKSk/LztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ3ZWJcIjpcbiAgICAgIHVybFJlZ2V4ID0gL14oaHR0cDpcXC9cXC93d3dcXC58aHR0cHM6XFwvXFwvd3d3XFwufGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcLyk/W2EtejAtOV0rKFtcXC1cXC5dezF9W2EtejAtOV0rKSpcXC5bYS16XXsyLDV9KDpbMC05XXsxLDV9KT8oXFwvLiopPyQvO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm90aGVyXCI6XG4gICAgICB1cmxSZWdleCA9IHJlZ2V4O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHVybFJlZ2V4ID0gcmVnZXg7XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gdXJsUmVnZXg7XG59XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXJsQ29tcG9uZW50IH0gZnJvbSAnLi91cmwuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnOyAvLyA8PT0gYWRkIHRoZSBpbXBvcnRzIVxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8PT09PT09PT09PSBBZGQgdGhpcyBsaW5lIVxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUgLFxuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtVcmxDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVXJsQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBVcmxNb2R1bGUgeyB9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtJQU9FLGlCQUFpQjs7O1lBTGxCLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztBQ0pEOzs0QkFxQ0Usa0RBQWtEO3dCQUV2QixLQUFLO3dCQUVOLENBQUM7a0JBQ1AsYUFBYTtvQkFDWCxhQUFhOzJCQUNOLFdBQVc7cUJBRTFCLG1JQUFtSTtzQkFFN0csSUFBSSxZQUFZLEVBQU87cUJBQ3hCLElBQUksWUFBWSxFQUFPO29CQUV4QixJQUFJLFlBQVksRUFBTzs7Ozs7O0lBRTNELE9BQU8sQ0FBQyxLQUFLO1FBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEI7Ozs7O0lBQ0QsTUFBTSxDQUFDLEtBQUs7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN2Qjs7Ozs7SUFDRCxRQUFRLENBQUMsS0FBSztRQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3pCOzs7Ozs7SUFFRCxhQUFhLENBQUMsSUFBSSxFQUFFLEtBQUs7UUFDdkIsU0FBUzs7UUFDVCxJQUFJLFFBQVEsQ0FBQztRQUNiLFFBQVEsSUFBSTtZQUNWLEtBQUssVUFBVTtnQkFDYixRQUFRLEdBQUcsbUlBQW1JLENBQUM7Z0JBQy9JLE1BQU07WUFDUixLQUFLLFdBQVc7Z0JBQ2QsUUFBUSxHQUFHLCtHQUErRyxDQUFDO2dCQUMzSCxNQUFNO1lBQ1IsS0FBSyxVQUFVO2dCQUNiLFFBQVEsR0FBRyw4R0FBOEcsQ0FBQztnQkFDMUgsTUFBTTtZQUNSLEtBQUssS0FBSztnQkFDUixRQUFRLEdBQUcseUhBQXlILENBQUM7Z0JBQ3JJLE1BQU07WUFDUixLQUFLLE9BQU87Z0JBQ1YsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDakIsTUFBTTtZQUNSO2dCQUNFLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ2pCLE1BQU07U0FDVDtRQUNELE9BQU8sUUFBUSxDQUFDO0tBQ2pCOzs7WUFyRkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQTJCRDtnQkFDVCxNQUFNLEVBQUUsQ0FBQyxnSkFBZ0osQ0FBQzthQUMzSjs7OzJCQUdFLEtBQUs7c0JBRVAsS0FBSzt1QkFDTCxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSztpQkFDTCxLQUFLO21CQUNMLEtBQUs7MEJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUdMLE1BQU07b0JBQ04sTUFBTTttQkFFTixNQUFNOzs7Ozs7O0FDbkRQOzs7WUFLQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFdBQVc7b0JBQ1gsbUJBQW1CO29CQUNuQixZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDNUIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQ3hCOzs7Ozs7Ozs7Ozs7Ozs7In0=