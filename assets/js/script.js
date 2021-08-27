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

 // Load and display tasks function
function loadTasks() {
    if (currentHourMoment > 17) {
       localStorage.clear();
       window.location.reload;
    };

    Object.keys(localStorage).forEach((key) => {
    $('textarea').each(function () {
       if ($(this).attr('id') == key) {
          $(this).val(localStorage.getItem(key));
        }
    });
 });
};

// Save task function
function saveTasks() {
    let id = $(this).parent().children('textarea').attr('id');
    let task = $(this).parent().children('textarea').val();
    localStorage.setItem(id, task);
 };
 
 loadTasks();
 checkTime();
 $('.saveButten').click(saveTasks);