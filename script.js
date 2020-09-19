// const HOURHAND = document.querySelector("#hour");
// const MINUTEHAND = document.querySelector("#minute");
// const SECONDHAND = document.querySelector("#second");
//
// // let hrPosition = 20;
// // let minPosition = 130;
// // let secPosition = 267;
// //
// // // These lets will contain the degrees in which we want to move the arms we will
// // // put in some random numbers that don't matter because we will be using math
// // // to change these and have them correspond with the actual time  later.
// //
// //
// // // Now we have to apply these numbers as degrees in the inline styles for transform
// // // on each of the objects
// //
// var date = new Date();
// console.log(date);
// // // console log to show us the var for the date in the browser.
// //
// // let hr = date.getHours();
// // let min = date.getMinutes();
// // let sec = date.getSeconds();
// // // Now we have to apply these numbers as degrees in the inline styles for transform
// // // on each of the objects
// // console.log("Hour: " + hr + "Minute: " + min + "Second: " + sec);
//
//
// HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
// MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
// SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
//
// // Once this is saved, you should see the hr, min, and sec hands move immediately.
// // We can use JS to move the positions of each of the arms. That means we can use
// // math to move them according to the time.
//
// // Now, in order to get the hands to show us the real time, we need to rely on
// // JS to tell us what time it is with var date = new Date(); shown above the
// // transform styles above. Now we will use methods to pull out whatever info
// // out of the Date object, using methods. So, if I just want the hours, minutes,
// // or seconds, then I can use the getHours, getMinutes, getSeconds methods (shown
// // above)
//
// // Now that we have the time, the next step is to divide the 360 degree clock
// // interface in the degree conversion of seconds, minutes, and hours. For example,
// // there are 60 seconds in a minute, the second hand will be going around the 360
// // degree interface in 60 movements. So, to use the math to calculate this into
// // degrees around the clock interface, we will divide 360 by 60 and then count up
// // those degrees by how many seconds are in the time stamp. Same with minutes
// // and hours.
// // 360 / 60 seconds = 6 degrees per second (as well as per minute because there
// // are 60 minutes per hour.) 360 / 12 hours = 30 degrees per hour (because the
// // hour hand goes around the interface in 12 movements)
//
// // Now, I have to set the let hr, let min, and let sec into degrees to put into
// // the let hrPosition, let minPosition, and let secPosition variables
// //
// let hr = date.getHours();
// let min = date.getMinutes();
// let sec = date.getSeconds();
// console.log("Hour: " + hr + "Minute: " + min + "Second: " + sec);
//
// // let hrPosition = 20;
// // let minPosition = 130;
// // let secPosition = 267;
//
// // To make the formula to get the time converted into degrees in our code, we
// // will call the let variable for the date.getHours, getMinutes, getSeconds
// // functions and place the formula into let Positions.
//
// let hrPosition = (hr*360/12)+(min*(360/60)/60);
// let minPosition = (min*360/60)+(sec*(360/60)/60);
// // We could have just stopped at min*360/60 for the minPosition, but we don't want
// // the minute hand just popping from minute to minute, we want it to move ever so
// // slightly with the progression of the seconds. To do this, we will write in the
// // obvious min*360/60, but we will add the sec value * 360/60(/60) to add that slow
// // progression for the minute hand to the next minute.We will do the same with the
// // hour hand as well.
// let secPosition = sec*360/60;


// const HOURHAND = document.querySelector("#hour");
// const MINUTEHAND = document.querySelector("#minute");
// const SECONDHAND = document.querySelector("#second");
//
// var date = new Date();
// console.log(date);
//
// let hr = date.getHours();
// let min = date.getMinutes();
// let sec = date.getSeconds();
// console.log("Hour: " + hr + "Minute: " + min + "Second: " + sec);
//
// let hrPosition = (hr*360/12)+(min*(360/60)/60);
// let minPosition = (min*360/60)+(sec*(360/60)/60);
// let secPosition = sec*360/60;
//
// HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
// MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
// SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

// Perfect! Now that we have created the clock to run on real time, we now have
// to create a function for it to update to the real time on its own instead of
// requiring us to refresh the browser every second for the clock to update to the
// real time. We will do this by wrapping the code in a function, which we will call
// runTheClock();

function runTheClock() {
  const HOURHAND = document.querySelector("#hour");
  const MINUTEHAND = document.querySelector("#minute");
  const SECONDHAND = document.querySelector("#second");

  var date = new Date();
  console.log(date);

  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  console.log("Hour: " + hr + "Minute: " + min + "Second: " + sec);

  let hrPosition = (hr*360/12)+(min*(360/60)/60);
  let minPosition = (min*360/60)+(sec*(360/60)/60);
  let secPosition = sec*360/60;

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

// Now that its wrapped in a created function, we need to set it run every second
// by using the setInterval() method. setInterval is run in miliseconds so we will
// need to set our function to run every 1000 milisecond to = a second because we
// don't need it to run every milisecond. We will first create a variable to hold
// the method in, which we will call interval. Now we can call the function.

var interval = setInterval(runTheClock, 1000);

// If I don't want the clock hands to loop around before hitting the 12 mark, then
// I can change the formula to rely on the browser to do the math for the time,
// eliminating the hands from looping around to 0 every time it gets to 12. but
// the problem with this is that the browser sometimes slows down when you leave
// the tab, then needs to catch back up when you return. I chose to keep the clock
// as-is, with the loop around. But if I change my mind, the formula is as below.


// const HOURHAND = document.querySelector("#hour");
// const MINUTEHAND = document.querySelector("#minute");
// const SECONDHAND = document.querySelector("#second");
//
// var date = new Date();
// console.log(date);
//
// let hr = date.getHours();
// let min = date.getMinutes();
// let sec = date.getSeconds();
// console.log("Hour: " + hr + "Minute: " + min + "Second: " + sec);
//
// let hrPosition = (hr*360/12)+(min*(360/60)/60);
// let minPosition = (min*360/60)+(sec*(360/60)/60);
// let secPosition = sec*360/60;
//
//
// function runTheClock() {
//
//   hrPosition = hrPosition+(30/3600);
//   minPosition = minPosition+(6/60);
//   secPosition = secPosition+6;
//
//   HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
//   MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
//   SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
// }
//
// var interval = setInterval(runTheClock, 1000);
