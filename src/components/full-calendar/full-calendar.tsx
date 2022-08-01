import '@fullcalendar/core/vdom'
import { Calendar, CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { Component, Host, h, Prop, State, Method, Element, Event, EventEmitter } from '@stencil/core';

const baseOptions: CalendarOptions = {
  headerToolbar: {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay",
  },
  navLinks: true, // can click day/week names to navigate views
  selectable: true,
  selectMirror: true,

  views: {
    dayGridMonth: { buttonText: "month" },
    timeGridWeek: { buttonText: "week" },
    timeGridDay: { buttonText: "day" },
  },

  editable: true,
  dayMaxEvents: true, // allow "more" link when too many events
}

@Component({
  tag: 'spec-full-calendar',
  styleUrl: 'full-calendar.scss',
  shadow: true,
})
export class FullCalendar {

  @Prop() value: Array<any> = []

  @Prop() options: CalendarOptions = {}

  @Prop() sticky: boolean = false;

  @State() calendar: Calendar | null = null

  @Element() el: HTMLElement

  @Event() created: EventEmitter<any>

  @Method()
  async updateModel() {
    this.calendar.setOption('events', this.value)
  }

  setup() {
    const attachEl = this.el.shadowRoot.querySelector('.full-calendar') as HTMLElement
    console.log({ attachEl })
    if (!attachEl || attachEl.childNodes.length) return
    const calendarOptions = {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
      ...baseOptions,
      events: this.value,
      ...this.options,
    } as CalendarOptions;
    console.log({ calendarOptions })
    console.log('calendarEl', attachEl)

    this.calendar = new Calendar(attachEl, calendarOptions);

    this.calendar.render();
    console.log('calendar', this.calendar)
    this._onCreated(this.calendar)
  }

  componentWillLoad() {
    setTimeout(() => this.setup());
  }

  render() {
    const classes = {
      'full-calendar': true,
      'sticky-header': this.sticky
    };
    return (
      <Host>
        <div class={classes}></div>
      </Host>
    );
  }

  _onCreated(model: Calendar) {
    this.created.emit(model)
  }

}
