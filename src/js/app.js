import '../styles/app.scss';
import calendarHeadings from './calendarHeading';
import calendarGrid from './calendarGrid';
import toggle from  './header';

window.onload = function() {
    let toggled = true;
    calendarGrid();
    toggle(toggled);
}