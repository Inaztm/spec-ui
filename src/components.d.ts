/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { CalendarOptions } from "@fullcalendar/core";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface SpecFullCalendar {
        "options": CalendarOptions;
        "sticky": boolean;
        "theme": string;
        "updateModel": () => Promise<void>;
        "value": Array<any>;
    }
    interface SpecTiptapEditor {
        "value": string;
    }
}
export interface SpecFullCalendarCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLSpecFullCalendarElement;
}
export interface SpecTiptapEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLSpecTiptapEditorElement;
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLSpecFullCalendarElement extends Components.SpecFullCalendar, HTMLStencilElement {
    }
    var HTMLSpecFullCalendarElement: {
        prototype: HTMLSpecFullCalendarElement;
        new (): HTMLSpecFullCalendarElement;
    };
    interface HTMLSpecTiptapEditorElement extends Components.SpecTiptapEditor, HTMLStencilElement {
    }
    var HTMLSpecTiptapEditorElement: {
        prototype: HTMLSpecTiptapEditorElement;
        new (): HTMLSpecTiptapEditorElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "spec-full-calendar": HTMLSpecFullCalendarElement;
        "spec-tiptap-editor": HTMLSpecTiptapEditorElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface SpecFullCalendar {
        "onCreated"?: (event: SpecFullCalendarCustomEvent<any>) => void;
        "onEventDblClick"?: (event: SpecFullCalendarCustomEvent<any>) => void;
        "options"?: CalendarOptions;
        "sticky"?: boolean;
        "theme"?: string;
        "value"?: Array<any>;
    }
    interface SpecTiptapEditor {
        "onEditorBlur"?: (event: SpecTiptapEditorCustomEvent<any>) => void;
        "onEditorChange"?: (event: SpecTiptapEditorCustomEvent<any>) => void;
        "onEditorCreated"?: (event: SpecTiptapEditorCustomEvent<any>) => void;
        "onEditorFocus"?: (event: SpecTiptapEditorCustomEvent<any>) => void;
        "value"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "spec-full-calendar": SpecFullCalendar;
        "spec-tiptap-editor": SpecTiptapEditor;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "spec-full-calendar": LocalJSX.SpecFullCalendar & JSXBase.HTMLAttributes<HTMLSpecFullCalendarElement>;
            "spec-tiptap-editor": LocalJSX.SpecTiptapEditor & JSXBase.HTMLAttributes<HTMLSpecTiptapEditorElement>;
        }
    }
}
