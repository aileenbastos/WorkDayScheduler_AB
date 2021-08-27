// Day and date in header
const currentDayMoment = moment().format("dddd MMMM Do");
$("#currentDay").html(currentDayMoment);

// Current time
const currentHourMoment = moment().format('HH');

// Current time function
function currentTime() {
    $('textarea').each(function () {
       if ($(this).attr('id') == currentHourMoment) {
          $(this).addClass('present');
       }
       else if ($(this).attr('id') < currentHourMoment) {
          $(this).addClass('past');
       }
       else if ($(this).attr('id') > currentHourMoment) {
          $(this).addClass('future');
       }

       setInterval(checkTime, (1000 * 60));
    })
 };