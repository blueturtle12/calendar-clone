import '../styles/app.scss';
import calendarHeadings from './calendarHeading';
import calendarGrid from './calendarGrid';
import asideCalendar from './asideCalendar';
import toggle from  './header';

window.onload = function() {
    let toggled = true;
    calendarGrid();
    asideCalendar();
    toggle(toggled);
}